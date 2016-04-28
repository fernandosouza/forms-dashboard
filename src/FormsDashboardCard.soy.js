/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from FormsDashboardCard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FormsDashboardCard.
 * @public
 */

goog.module('FormsDashboardCard.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'formsDashboard-card' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('p');
      itext((goog.asserts.assert((opt_data.total || 0) != null), opt_data.total || 0));
    ie_close('p');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FormsDashboardCard.render';
}

exports.render.params = ["elementClasses","total"];
exports.render.types = {"elementClasses":"any","total":"any"};
templates = exports;
return exports;

});

class FormsDashboardCard extends Component {}
Soy.register(FormsDashboardCard, templates);
export { FormsDashboardCard, templates };
export default templates;
/* jshint ignore:end */
