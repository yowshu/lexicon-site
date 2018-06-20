var pageComponent=webpackJsonppageComponent([58],{304:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),u=n(r),s=l(1),p=n(s);l(4),l(5),l(3),l(2),l(7),l(6),l(8),l(9),l(10),l(11),l(12),l(13);var c=l(305),g=n(c),f=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,g.default),t.default=f},305:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.goGXb=void 0;var r,u=l(0),s=n(u),p=l(1),c=n(p);goog.loadModule(function(e){function t(e,t,n){var r=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),o("div"),i("h3",null,null,"id","layout"),a("Layout"),o("h3"),i("p"),a("This component is composed by two elements:"),o("p"),i("ul"),i("li"),a("The input field: text input, text area or text input group (only specific cases)."),o("li"),i("li"),a("The localization button, which displays a dropdown menu to select a language."),o("li"),o("ul"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizable@2x.jpg 2x","src","../../../images/InputLocalizable.jpg","alt","input localizable"),o("img"),o("p"),i("p"),a("This dropdown menu must always contain in each entry:"),o("p"),i("ul"),i("li"),a("Country flag"),o("li"),i("li"),a("ISO 639-1 code"),o("li"),i("li"),a("Status:"),i("ul"),i("li"),a("Default for the default language. Always the first in the list"),o("li"),i("li"),a("Translated: the user has provided a text that differs from the default input text."),o("li"),i("li"),a("Not translated: the input text does not differ from the original text."),o("li"),o("ul"),o("li"),o("ul"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizableOpen@2x.jpg 2x","src","../../../images/InputLocalizableOpen.jpg","alt","input localizable with dropdown open"),o("img"),o("p"),i("h3",null,null,"id","interaction"),a("Interaction"),o("h3"),i("p"),a("Changing a language through the localization button only changes field content, not the title label, and the help text. The help text is used to display the default language text to provide a hint to the user."),o("p"),i("p"),a("Usually this field is placed in a form where other fields are also localizable. The interaction of selecting a lenguage in one of the localizable fields changes all other fields language at same time."),o("p"),i("h3",null,null,"id","attributes"),a("Attributes"),o("h3"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizableParts@2x.jpg 2x","src","../../../images/InputLocalizableParts.jpg","alt","input localizable parts"),o("img"),o("p"),i("ol"),i("li"),a("Input field"),o("li"),i("li"),a("Localizable button"),o("li"),o("ol"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizableMetrics@2x.jpg 2x","src","../../../images/InputLocalizableMetrics.jpg","alt","input localizable metrics"),o("img"),o("p"),i("h3",null,null,"id","variations"),a("Variations"),o("h3"),i("h4"),a("Text area localizable"),o("h4"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizableArea@2x.jpg 2x","src","../../../images/InputLocalizableArea.jpg","alt","input localizable"),o("img"),o("p"),i("h4"),a("Text input group localizable"),o("h4"),i("p"),a("A very common case in Liferay Portal is to have translate fields for urls. This field is a clear combination of a input group with a localizable field."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/InputLocalizableGroupUrl@2x.jpg 2x","src","../../../images/InputLocalizableGroupUrl.jpg","alt","input localizable"),o("img"),o("p"),i("input",null,null,"type","hidden","value",e.page.title),o("input"),i("input",null,null,"type","hidden","value",e.site.title),o("input")};u(l.$$assignDefaults({content:r},e),null,n)}goog.module("goGXb.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),i=n.elementOpen,o=n.elementClose,a=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),u=(n.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="goGXb.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var g=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(g,r),t.goGXb=g,t.templates=r,t.default=r}},[304]);