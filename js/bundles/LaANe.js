var pageComponent=webpackJsonppageComponent([59],{344:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=l(0),o=i(s),p=l(1),u=i(p);l(4),l(5),l(3),l(7),l(2),l(8),l(6),l(9),l(10),l(11),l(12),l(13),l(14);var g=l(345),c=i(g),d=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(o.default);u.default.register(d,c.default),t.default=d},345:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.LaANe=void 0;var s,o=l(0),p=i(o),u=l(1),g=i(u);goog.loadModule(function(e){function t(e,t,i){var s=function(){a("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),n("div"),a("h2",null,null,"id","text-field"),r("Text Field"),n("h2"),a("p"),r("A text field allow users write data in the system with the end of this data to be processed."),n("p"),a("p"),a("img",null,null,"srcset","../../../images/Input@2x.jpg 2x","src","../../../images/Input.jpg","alt","default empty state"),n("img"),n("p"),a("h3",null,null,"id","usage"),r("Usage"),n("h3"),a("p"),r("Text fields can have help text. Lexicon provides 2 different mechanisms to provide help:"),n("p"),a("ul"),a("li"),r("Help text below the field: Use it if you want your help text to be very explicit."),n("li"),a("li"),r("Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit. Placeholder is not recommended as users interpret it as final text. In case you use it, do not write help text on it, just a text example."),n("li"),n("ul"),a("h3",null,null,"id","states"),r("States"),n("h3"),a("h4"),r("Default"),n("h4"),a("p"),r("Text fields can be as simple as:"),n("p"),a("p"),a("img",null,null,"srcset","../../../images/Input@2x.jpg 2x","src","../../../images/Input.jpg","alt","default empty state"),n("img"),n("p"),a("p"),r("They can include a placeholder text, although we do not recommend using placeholders as users interpret them as final content."),n("p"),a("p"),a("img",null,null,"srcset","../../../images/InputPlaceholder@2x.jpg 2x","src","../../../images/InputPlaceholder.jpg","alt","default empty state"),n("img"),n("p"),a("p"),r("Text fields can also have a help text placed right below the text field."),n("p"),a("p"),a("img",null,null,"srcset","../../../images/InputHelpText@2x.jpg 2x","src","../../../images/InputHelpText.jpg","alt","default empty state"),n("img"),n("p"),a("h4"),r("Active"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputSimpleFocus@2x.jpg 2x","src","../../../images/InputSimpleFocus.jpg","alt","default active state"),n("img"),n("p"),a("h4"),r("Disabled"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputDisabled@2x.jpg 2x","src","../../../images/InputDisabled.jpg","alt","default disabled state"),n("img"),n("p"),a("h4"),r("Read only"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputReadOnly@2x.jpg 2x","src","../../../images/InputReadOnly.jpg","alt","default disabled state"),n("img"),n("p"),a("h3",null,null,"id","validations"),r("Validations"),n("h3"),a("p"),r("Validation text for fields are placed right below the field box and before the help text focusing the attention of the user right next to the issue."),n("p"),a("h4"),r("Success"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputSuccess@2x.jpg 2x","src","../../../images/InputSuccess.jpg","alt","default success state"),n("img"),n("p"),a("h4"),r("Warning"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputWarning@2x.jpg 2x","src","../../../images/InputWarning.jpg","alt","default warning state"),n("img"),n("p"),a("h4"),r("Error"),n("h4"),a("p"),a("img",null,null,"srcset","../../../images/InputError@2x.jpg 2x","src","../../../images/InputError.jpg","alt","default error state"),n("img"),n("p"),a("p"),a("img",null,null,"srcset","../../../images/InputHelpTextError@2x.jpg 2x","src","../../../images/InputHelpTextError.jpg","alt","default error state"),n("img"),n("p"),a("h3",null,null,"id","attributes"),r("Attributes"),n("h3"),a("p"),a("img",null,null,"srcset","../../../images/InputParts@2x.jpg 2x","src","../../../images/InputParts.jpg","alt","input field parts"),n("img"),n("p"),a("p"),r("A textfield has at least the following elements:"),n("p"),a("ol"),a("li"),r("Label"),n("li"),a("li"),r("Text field box"),n("li"),a("li"),r("Placeholder"),n("li"),a("li"),r("Status message"),n("li"),a("li"),r("Help text"),n("li"),n("ol"),a("p"),a("img",null,null,"srcset","../../../images/InputMetrics@2x.jpg 2x","src","../../../images/InputMetrics.jpg","alt","input field metrics without error"),n("img"),a("img",null,null,"srcset","../../../images/InputErrorMetrics@2x.jpg 2x","src","../../../images/InputErrorMetrics.jpg","alt","input field metrics with error"),n("img"),n("p"),a("h2",null,null,"id","text-area"),r("Text area"),n("h2"),a("p"),r("A text area is similar to a text field input but for several lines of text. Text areas allow users to introduce long description of products as an example."),n("p"),a("p"),a("img",null,null,"srcset","../../../images/InputTextArea@2x.jpg 2x","src","../../../images/InputTextArea.jpg","alt","text area"),n("img"),n("p"),a("p"),a("img",null,null,"srcset","../../../images/InputTextAreaHelpText@2x.jpg 2x","src","../../../images/InputTextAreaHelpText.jpg","alt","text area"),n("img"),n("p"),a("h3",null,null,"id","usage-1"),r("Usage"),n("h3"),a("ul"),a("li"),r("Text area can be resized in height allowing the user to see more or less text as he please."),n("li"),a("li"),r("Text area states and validation states are the same as for the text field."),n("li"),a("li"),r("Text areas can have help text. Lexicon provides 2 different mechanisms to provide help:"),a("ul"),a("li"),r("Help text below the field: Use it if you want your help text to be very explicit."),n("li"),a("li"),r("Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit."),n("li"),n("ul"),n("li"),a("li"),r("Placeholder is not recommended. In case you use it, do not write help text on it, just a text example."),n("li"),a("li"),r("Text area can be configured to expand on input change."),a("ul"),a("li"),r("The min-height to configure is 44px as the text field."),n("li"),a("li"),r("The text area has a mid-height value set to 88px, equivalent to 3 lines of text."),n("li"),a("li"),r("The text area has a max-height value set to 200px. From mid-height to max-height the text area will grows in height. When it reaches that maximum the text area stops growing and vertical scroll bar becomes available."),n("li"),a("li"),r("A recommendation is to configure the min-height with the same value as mid-height as 3 lines is the recommendation for a text size."),n("li"),n("ul"),n("li"),n("ul"),a("input",null,null,"type","hidden","value",e.page.title),n("input"),a("input",null,null,"type","hidden","value",e.site.title),n("input")};o(l.$$assignDefaults({content:s},e),null,i)}goog.module("LaANe.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),a=i.elementOpen,n=i.elementClose,r=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),o=(i.attr,g.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="LaANe.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var c=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(p.default);g.default.register(c,s),t.LaANe=c,t.templates=s,t.default=s}},[344]);