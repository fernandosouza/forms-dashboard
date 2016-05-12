/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from FormsDashboard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FormsDashboard.
 * @public
 */

goog.module('FormsDashboard.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('FormsDashboardCard.incrementaldom', 'render');


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
      'class', 'clearfix forms-dashboard-container' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('h1');
      itext('Dashboard Title');
    ie_close('h1');
    ie_open('div', null, null,
        'class', 'forms-dashboard forms-dashboard-fp5');
      $templateAlias1(soy.$$augmentMap(opt_data, {total: opt_data.data.fp5}), null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'forms-dashboard forms-dashboard-fp4');
      $templateAlias1(soy.$$augmentMap(opt_data, {total: opt_data.data.fp4}), null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'forms-dashboard forms-dashboard-fp3');
      $templateAlias1(soy.$$augmentMap(opt_data, {total: opt_data.data.fp3}), null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'forms-dashboard forms-dashboard-fp2');
      $templateAlias1(soy.$$augmentMap(opt_data, {total: opt_data.data.fp2}), null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'forms-dashboard forms-dashboard-fp1');
      $templateAlias1(soy.$$augmentMap(opt_data, {total: opt_data.data.fp1}), null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FormsDashboard.render';
}

exports.render.params = ["elementClasses","data"];
exports.render.types = {"elementClasses":"any","data":"any"};
templates = exports;
return exports;

});

class FormsDashboard extends Component {}
Soy.register(FormsDashboard, templates);
export { FormsDashboard, templates };
export default templates;
/* jshint ignore:end */
