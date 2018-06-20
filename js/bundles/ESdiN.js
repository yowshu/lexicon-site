var pageComponent=webpackJsonppageComponent([22],{188:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=o(s),u=n(1),c=o(u);n(4),n(5),n(3),n(2),n(7),n(6),n(8),n(9),n(10),n(11),n(12),n(13);var p=n(189),f=o(p),d=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(l.default);c.default.register(d,f.default),t.default=d},189:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ESdiN=void 0;var s,l=n(0),u=o(l),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var s=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),r("div"),i("p"),i("img",null,null,"srcset","../../../images/ConfirmationMessage@2x.jpg 2x","src","../../../images/ConfirmationMessage.jpg","alt","confirmation message"),r("img"),r("p"),i("h3",null,null,"id","usage"),a("Usage"),r("h3"),i("h4"),a("When to use it"),r("h4"),i("p"),a("Confirmation messages are used in those scenarios where a critical situation appears. Such situation can be a complete change of context, or an action that could be not reversed such as a site deletion. There are two main use categories that helps you to identify the correct situations to use confirmation messages:"),r("p"),i("ul"),i("li"),a("Risk action: The action the user is going to perform has significant consequences that cannot be undone or easily undone. Ex: site deletion."),r("li"),i("li"),a("Unintended consequence: There is an important side effect on the action the user is taking that most probably will make her feel lost. Ex: Site switch, where there is a complete change of context including user permissions."),r("li"),r("ul"),i("p"),a("It is very important to use this pattern only when it is needed as it is a very intrusive pattern, so take a time to think if your case is included in the previous set. This message type should be rarely needed in the system."),r("p"),i("h4"),a("When must not use it"),r("h4"),i("ul"),i("li"),a("Error prevention: put first the effort on your interface to guide the user on what is going to happen. Clear copy’s prevent the usage of confirmation messages."),r("li"),i("li"),a("Feedback: providing extremely clear feedback can prevent the usage on confirmation messages."),r("li"),i("li"),a("Undo actions: if action has an undo action you must never use a confirmation message. A clear example is “Move to Recycle Bin”."),r("li"),i("li"),a("Don’t use it if it is not really needed."),r("li"),r("ul"),i("h4"),a("How to write a confirmation message"),r("h4"),i("p"),a("Writing a good confirmation message is relevant to make it really effective in such exclusive situation:"),r("p"),i("ul"),i("li"),a("Do not write generic and open questions. Ex: Are you sure?"),r("li"),i("li"),a("Be clear and concise."),r("li"),i("li"),a("Provide exact data to your user so there is no uncertainty on the action to be confirmed."),r("li"),i("li"),a('Address your questions and statements so they can be easily answered with "Ok" and "Cancel" as they are forced by the browser.'),r("li"),r("ul"),i("p"),i("img",null,null,"srcset","../../../images/ConfirmationMessage@2x.jpg 2x","src","../../../images/ConfirmationMessage.jpg","alt","confirmation message"),r("img"),r("p"),i("h3",null,null,"id","implementation"),a("Implementation"),r("h3"),i("p"),a("Confirmation messages are browser native. Therefore Lexicon does not style them. Browser native confirmation messages are accessible, and work perfectly in every device."),r("p"),i("input",null,null,"type","hidden","value",e.page.title),r("input"),i("input",null,null,"type","hidden","value",e.site.title),r("input")};l(n.$$assignDefaults({content:s},e),null,o)}goog.module("ESdiN.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),i=o.elementOpen,r=o.elementClose,a=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),l=(o.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="ESdiN.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,s),t.ESdiN=f,t.templates=s,t.default=s}},[188]);