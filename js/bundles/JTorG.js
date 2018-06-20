var pageComponent=webpackJsonppageComponent([10],{212:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),s=n(l),d=o(1),u=n(d);o(4),o(5),o(3),o(2),o(7),o(6),o(8),o(9),o(10),o(11),o(12),o(13);var p=o(213),c=n(p),g=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(s.default);u.default.register(g,c.default),t.default=g},213:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.JTorG=void 0;var l,s=o(0),d=n(s),u=o(1),p=n(u);goog.loadModule(function(e){function t(e,t,n){var l=function(){a("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),i("div"),a("p"),a("img",null,null,"srcset","../../../images/Modal@2x.jpg 2x","src","../../../images/Modal.jpg","alt","modal window over a dark transparent background"),i("img"),i("p"),a("h3",null,null,"id","usage"),r("Usage"),i("h3"),a("ul"),a("li"),r("Modals can be build in different sizes and configurations. Depending on the amount of content you have you will decide one of them."),i("li"),a("li"),r("Lexicon recommends to not use full-width size as it will be like a complete new page. If you are in this situation please consider creating a new page instead of a modal."),i("li"),a("li"),r("Modals belong to a screen, therefore a modal should not be triggered from another modal window (read below Modal over modal)."),i("li"),a("li"),r("When a modal has footer, the actions are placed inside and aligned to the left. There is an order of importance and the sequence is: Primary button (only one), secondary button, and button link."),i("li"),i("ul"),a("table"),a("thead"),a("tr"),a("th"),r("Do's"),i("th"),a("th"),r("Dont's"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Use it to capture the user attention to something that is more important."),i("td"),a("td"),r("Do not use it for complex cases where you need to display a lot of information or complete a long form. In this case thing about using a new page."),i("td"),i("tr"),a("tr"),a("td"),r("Use it for simple content cases."),i("td"),a("td"),r("Try not triggering a modal window from another modal window. Modal windows are subordinated to pages."),i("td"),i("tr"),a("tr"),a("td"),r("Use it if you need to cut the user flow to display concrete and certain information, or if you need to capture certain data from the user."),i("td"),a("td"),r("Do never blind completely the background page information."),i("td"),i("tr"),i("tbody"),i("table"),a("h4"),r("Selection inside a modal"),i("h4"),a("ul"),a("li"),r('Multiple selection is done using checkboxes and clicking in "Done" labeled button.'),i("li"),a("li"),r("Single selection is done without radios, just clicking anywhere in the row. There is not need of modal footer."),i("li"),i("ul"),a("h4"),r("Modal over modal"),i("h4"),a("p"),r("Modal over modal is a not desired situation. Please, try to solve this situation in another way, like using a full page or driving the process to the correct place. In case this happens, make sure to provide a good experience preventing first modal closing by accidental interaction (as an example)."),i("p"),a("h3",null,null,"id","size"),r("Size"),i("h3"),a("p"),r("Modals are always displayed at the center of the screen and can be configured in 4 different size and they are defined as table shows:"),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("Size"),i("th"),a("th"),r("Description"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Small"),i("td"),a("td"),r("320px"),i("td"),i("tr"),a("tr"),a("td"),r("Default"),i("td"),a("td"),r("600px"),i("td"),i("tr"),a("tr"),a("td"),r("Large"),i("td"),a("td"),r("896px wide modal in window sizes greater than 992px. 600px wide modal in window sizes between 768px and 992px."),i("td"),i("tr"),a("tr"),a("td"),r("Full width"),i("td"),a("td"),r("A modal that stretches to fit the browser window with 45px padding on every side."),i("td"),i("tr"),i("tbody"),i("table"),a("p"),a("img",null,null,"srcset","../../../images/ModalSize@2x.jpg 2x","src","../../../images/ModalSize.jpg","alt","modal sizes"),i("img"),i("p"),a("h3",null,null,"id","attributes"),r("Attributes"),i("h3"),a("p"),a("img",null,null,"srcset","../../../images/ModalParts@2x.jpg 2x","src","../../../images/ModalParts.jpg","alt","modal window parts"),i("img"),i("p"),a("ol"),a("li"),r("Modal header"),a("ol"),a("li"),r("Title"),i("li"),a("li"),r("Close button"),i("li"),i("ol"),i("li"),a("li"),r("Body"),a("ol"),a("li"),r("Content: form, text, image..."),i("li"),i("ol"),i("li"),a("li"),r("Footer"),a("ol"),a("li"),r("Modal buttons"),i("li"),i("ol"),i("li"),i("ol"),a("p"),a("img",null,null,"srcset","../../../images/ModalMetrics@2x.jpg 2x","src","../../../images/ModalMetrics.jpg","alt","modal window metrics"),i("img"),i("p"),a("h3",null,null,"id","configurations"),r("Configurations"),i("h3"),a("p"),r("Lexicon allows your modal window to have different configurations related to your needs. These needs vary from case to case and that is why not every modal in the system needs to be equal, but needs to follow certain rules."),i("p"),a("h4"),r("Header, body and footer"),i("h4"),a("p"),r("This is the classic composition of a modal window with its three main parts: header, body and footer."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/Modal@2x.jpg 2x","src","../../../images/Modal.jpg","alt","modal window over a dark transparent background"),i("img"),i("p"),a("h4"),r("Header and body"),i("h4"),a("p"),r("This is the case when you don't need a footer bar to place your icons."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/ModalFooterless@2x.jpg 2x","src","../../../images/ModalFooterless.jpg","alt","modal window over a dark transparent background only header and body"),i("img"),i("p");a("h4"),r("Body and Footer"),i("h4"),a("p"),r("This case is thought for those cases where you need to just show text and buttons to agree or cancel."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/ModalBodyFooter@2x.jpg 2x","src","../../../images/ModalBodyFooter.jpg","alt","modal window over a dark transparent background only body and footer"),i("img"),i("p"),a("h4"),r("iFrame in the body"),i("h4"),a("p"),r("It is always possible to bring an iFrame inside the body. For more information about this check Clay."),i("p"),a("h4"),r("Modal overlay color"),i("h4"),a("p"),r("Modal overlay color is main lighten 8% color with an alpha value of 0.8."),i("p"),a("h4"),r("Modals for status messages"),i("h4"),a("p"),r("Modal headers can be configured to use modals as status messages. This solution is proposed to give more emphasis on blocking actions that the use must read and pay careful attention."),i("p"),a("p"),r("Do never remove the icon in the title as it provides the modal with a better accessibility level."),i("p"),a("p"),r("Use direct and concrete titles."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/ModalStatus@2x.jpg 2x","src","../../../images/ModalStatus.jpg","alt","info, success, warning, error modal configurations in headers"),i("img"),i("p"),a("h3",null,null,"id","mobile"),r("Mobile"),i("h3"),a("p"),r("When a modal reaches the mobile viewport size its look and feel is transformed to the one you see below offering a mobile friendly version. Modal occupies the hole screen allowing only the interaction with the modal and its content."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/ModalMobile@2x.jpg 2x","src","../../../images/ModalMobile.jpg","alt","modal window mobile version always full screen"),i("img"),i("p"),a("input",null,null,"type","hidden","value",e.page.title),i("input"),a("input",null,null,"type","hidden","value",e.site.title),i("input")};s(o.$$assignDefaults({content:l},e),null,n)}goog.module("JTorG.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),a=n.elementOpen,i=n.elementClose,r=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="JTorG.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(d.default);p.default.register(c,l),t.JTorG=c,t.templates=l,t.default=l}},[212]);