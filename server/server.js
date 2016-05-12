var Launchpad = require('api.js').Launchpad;
var express = require('express');
var jira = require('jira');
var crypto = require('crypto');
var CancellablePromise = require('metal-promise').CancellablePromise;

var CRYPTO_ALGORITHM = 'AES-256-CBC';

var CRYPTO_PASSWORD = 'nodegh.io';

var app = express();

var jiraConfig = {
	protocol: 'https',
	host: 'issues.liferay.com',
	user: 'bruno.basto',
	password: 'cc0aabf9f2ed6ade85796e8c7633a439',
	api_version: '2'
}

var decryptText_ = function(text) {
	var decipher,
		decrypted;

	decipher = crypto.createDecipher(CRYPTO_ALGORITHM, CRYPTO_PASSWORD);

	decrypted = decipher.update(text, 'hex', 'utf8');

	decrypted += decipher.final('utf8');

	return decrypted;
};

var JiraApi = new jira.JiraApi(
	jiraConfig.protocol,
	jiraConfig.host,
	jiraConfig.port,
	jiraConfig.user,
	decryptText_(jiraConfig.password),
	jiraConfig.api_version
);

app.use(express.static('public'));
app.use('/build', express.static('build'));
app.use('/dependencies', express.static('node_modules'));

app.get('/ci', function (req, res) {
	Launchpad
   .url('http://liferay.io/formsci/builds/forms/')
   .get()
   .then(function(clientResponse) {
		res.json(clientResponse.body());
   });
});

var getIssues = function(fixPriority) {
	var searchQuery = ['project = "LPS" AND "Fix Priority" = '];
	searchQuery.push(fixPriority);
	searchQuery.push(' AND assignee in (bruno.basto, marcellus.tavares, fernando.souza)');

	var searchOptions = {
		maxResults: 1000,
		fields: ['summary']
	};

	return new CancellablePromise(function(resolve, reject) {
		JiraApi.searchJira(
			searchQuery.join(''),
			searchOptions,
			function(err, response) {
				if (err) {
					reject(err);
				}
				else {
					resolve(response.issues);
				}
			}
		);
	});
}

app.get('/jira', function(req, res) {
	CancellablePromise.all([
		getIssues(5),
		getIssues(4),
		getIssues(3)
	]).then(function(result) {
		res.json({
			fp5: result[0],
			fp4: result[1],
			fp3: result[2]
		});
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});