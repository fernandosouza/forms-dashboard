'use strict';

import templates from './FormsDashboard.soy';
import Component from 'metal-component';
import Ajax from 'metal-ajax';
import Soy from 'metal-soy';

class FormsDashboard extends Component {
	constructor() {
		super(arguments);

		Ajax
		.request('/jira', 'get')
		.then(xhr => {
			var jira = JSON.parse(xhr.responseText);

			console.log(jira);

			this.set('data', {
				fp5: jira.fp5.length,
				fp4: jira.fp4.length,
				fp3: jira.fp3.length
			});
		})
		.catch((reason) => {
			console.log(reason);
		});
	}
}

FormsDashboard.STATE = {
	data: {
		value: {
			'fp5': 0,
			'fp4': 0,
			'fp3': 0,
			'fp2': 0,
			'fp1': 0
		}
	}
}

Soy.register(FormsDashboard, templates);

export default FormsDashboard;
