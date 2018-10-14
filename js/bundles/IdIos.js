var pageComponent=webpackJsonppageComponent([67],{322:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),s=n(i),u=o(1),d=n(u);o(4),o(5),o(3),o(7),o(2),o(8),o(6),o(9),o(10),o(11),o(12),o(13),o(14);var p=o(323),c=n(p),m=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);d.default.register(m,c.default),t.default=m},323:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.IdIos=void 0;var i,s=o(0),u=n(s),d=o(1),p=n(d);goog.loadModule(function(e){function t(e,t,n){var i=function(){r("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),l("div"),r("h3",null,null,"id","fields-order"),a("Fields’ order"),l("h3"),r("p"),a("Laying out the fields of your form we recommend you to follow an order of importance. Try to place first as many mandatory fields when possible to make the user task short. Non mandatory fields should go in a second place as they are not so important and the user could like to skip them. In case non mandatory fields are in between mandatory fields the user would expend more time scanning the form."),l("p"),r("h3",null,null,"id","fields-length"),a("Fields’ length"),l("h3"),r("p"),a("Fields must occupy the space you expect your user needs to fill it. The only requirement for fields is to adapt their width to the grid so they behave properly on window resize. Sharp shape forms do not go against Lexicon but we prefer rectangular shape form as they look more clear. In mobile view ports field lengths should be half of the screen or full length."),l("p"),r("h3",null,null,"id","mandatory-fields"),a("Mandatory fields"),l("h3"),r("p"),a("Fields can be mandatory/required to fill in a form. The way to mark a field as mandatory is:"),l("p"),r("p"),r("img",null,null,"srcset","../../../images/InputMandatory@2x.jpg 2x","src","../../../images/InputMandatory.jpg","alt","example of mandatory field"),l("img"),l("p"),r("p"),a("Try to place first as many mandatory fields when possible to make the user task short. Non mandatory fields should go in a second place as they are not so important and the user may like to skip them. In case non mandatory fields are in between mandatory fields the user would expend more time scanning the form."),l("p"),r("h3",null,null,"id","repeatable-fields"),a("Repeatable fields"),l("h3"),r("h4"),a("Single repeatable field"),l("h4"),r("p"),a("Single repeable field is useful when the user must introduce several data of the same type from different inputs, no matter the number nor the order."),l("p"),r("h4"),a("Set of repeatable fields"),l("h4"),r("p"),a("This allow you let the user add contents of a same type in a form. This is usually used to contribute with more form pieces that allow the user to specify more information. A set always bring the possibility to add or remove sets. See the following example:"),l("p"),r("h3",null,null,"id","actions"),a("Actions"),l("h3"),r("h4"),a("General form actions"),l("h4"),r("p"),a("General form actions always placed at the end of the form and they are always placed in same order and to the left of the form. The button size to use is default."),l("p"),r("p"),r("img",null,null,"srcset","../../../images/ButtonOrder@2x.jpg 2x","src","../../../images/ButtonOrder.jpg","alt","button order. Primary, secondary, link"),l("img"),l("p"),r("p"),r("em"),a("Note: This order is reversed in modals, where buttons in the footer are right-aligned: Link, Secondary, Primary."),l("em"),l("p"),r("h4"),a("Interior form actions"),l("h4"),r("p"),a("Interior form actions should not be as notorious as general actions. Therefore, use the secondary button."),l("p"),r("p"),r("img",null,null,"srcset","../../../images/ButtonIconSecondary@2x.jpg 2x","src","../../../images/ButtonIconSecondary.jpg","alt","button primary default size defuault state"),l("img"),l("p"),r("h4"),a("Do's and Don'ts"),l("h4"),r("p"),a("Do never use two primary buttons together. There must only be one primary button that represents the most important action."),l("p"),r("div",null,null,"class","row"),r("div",null,null,"class","dodont col-lg"),r("img",null,null,"class","do","src","../../../images/FormButtonPrimaryDo.jpg","alt","Two butons, primary and secondary."),l("img"),r("p",null,null,"class","do"),a("Do"),l("p"),l("div"),r("div",null,null,"class","dodont col-lg"),r("img",null,null,"class","dont","src","../../../images/FormButtonPrimaryDont.jpg","alt","Two butons, both primary"),l("img"),r("p",null,null,"class","dont"),a("Don't"),l("p"),l("div"),l("div"),r("p"),a('Do always use concrete words rather than general as "Ok".'),l("p"),r("div",null,null,"class","row"),r("div",null,null,"class","dodont col-lg"),r("img",null,null,"class","do","src","../../../images/FormButtonPrimaryTextDo.jpg","alt","Primary button with text Done"),l("img"),r("p",null,null,"class","do"),a("Do"),l("p"),l("div"),r("div",null,null,"class","dodont col-lg"),r("img",null,null,"class","dont","src","../../../images/FormButtonPrimaryTextDont.jpg","alt","Primary button with text Ok"),l("img"),r("p",null,null,"class","dont"),a("Don't"),l("p"),l("div"),l("div"),r("h3",null,null,"id","boolean-situations"),a("Boolean situations"),l("h3"),r("p"),a("Boolean situations are those yes/no situations usually solved with checkboxes."),l("p"),r("ul"),r("li"),a("Try to be always as explicit as possible to let the user know what is the outcome of the decision."),l("li"),r("li"),a("Do not hide helpful information to the user in popovers, alerts, or secondary text."),l("li"),l("ul"),r("p"),r("img",null,null,"srcset","../../../images/FormBooleanSituations@2x.jpg 2x","src","../../../images/FormBooleanSituations.jpg","alt","boolean situations solved with checkboxes, relevant information/help is explicit"),l("img"),l("p"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};s(o.$$assignDefaults({content:i},e),null,n)}goog.module("IdIos.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,l=n.elementClose,a=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="IdIos.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var c=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(c,i),t.IdIos=c,t.templates=i,t.default=i}},[322]);