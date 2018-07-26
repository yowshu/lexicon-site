var pageComponent=webpackJsonppageComponent([36],{336:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),s=i(r),u=l(1),c=i(u);l(4),l(5),l(3),l(7),l(2),l(8),l(6),l(9),l(10),l(11),l(12),l(13),l(14);var p=l(337),d=i(p),h=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(s.default);c.default.register(h,d.default),t.default=h},337:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.EPSYY=void 0;var r,s=l(0),u=i(s),c=l(1),p=i(c);goog.loadModule(function(e){function t(e,t,i){var r=function(){n("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&o(t),a("div"),n("h3",null,null,"id","usage"),o("Usage"),a("h3"),n("p"),o("A table view is useful for comparing entries among them that need exhaustive comparison. Tables are very heavy in text display, if you need to display images we recommend you to take a look at lists and cards."),a("p"),n("p"),o("A table entry or row don't allow you to display 2 different data types in one same column. The reason behind this decision are comparison and sorting problems."),a("p"),n("p"),o("When a table is used together with management bar, the table entries must include the checkbox, as the selection and actions are reflected in the management bar. You can find these examples in "),n("a",null,null,"href","../../dataset_display.html"),o("dataset display"),a("a"),o("."),a("p"),n("p"),n("img",null,null,"srcset","../../../images/TableParts@2x.jpg 2x","src","../../../images/TableParts.jpg","alt","table parts"),a("img"),a("p"),n("p"),o("The previous image points out the different elements that are covered in this page:"),a("p"),n("ol"),n("li"),o("Table header"),a("li"),n("li"),o("Section"),a("li"),n("li"),o("Row"),a("li"),n("li"),o("Row interaction"),a("li"),a("ol"),n("h3",null,null,"id","table-header"),o("Table header"),a("h3"),n("p"),o("All column headers are always left-aligned, 14px, and regular weight."),a("p"),n("p"),n("img",null,null,"srcset","../../../images/TableHeader@2x.jpg 2x","src","../../../images/TableHeader.jpg","alt","table header"),a("img"),a("p"),n("p"),o("Table header can be interactive:"),a("p"),n("ul"),n("li"),o("Sorting (if available): the column header has an arrow next to it indicating the sort direction, A-z down arrow and Z-a up arrow. The text is underlined on hover state."),a("li"),n("li"),o("Drag & drop (if available): the column header shows a drag-icon on hover state."),a("li"),a("ul"),n("h3",null,null,"id","table-header-attributes"),o("Table header attributes"),a("h3"),n("p"),n("img",null,null,"srcset","../../../images/TableHeaderParts@2x.jpg 2x","src","../../../images/TableHeaderParts.jpg","alt","table header description"),a("img"),a("p"),n("ol"),n("li"),o("Selected column"),a("li"),n("li"),o("Sort direction icon"),a("li"),n("li"),o("Rest of columns"),a("li"),a("ol"),n("p"),n("img",null,null,"srcset","../../../images/TableHeaderMetrics@2x.jpg 2x","src","../../../images/TableHeaderMetrics.jpg","alt","table header metrics"),a("img"),a("p"),n("h3",null,null,"id","sections"),o("Sections"),a("h3"),n("p"),o("Whenever you need to group series of table entries, you can use the table group separator."),a("p"),n("p"),n("img",null,null,"srcset","../../../images/TableViewGroupSeparator@2x.jpg 2x","src","../../../images/TableViewGroupSeparator.jpg","alt","table group"),a("img"),a("p"),n("h3",null,null,"id","row-states"),o("Row states"),a("h3"),n("h4"),o("Default state"),a("h4"),n("p"),n("img",null,null,"srcset","../../../images/TableViewDefault@2x.jpg 2x","src","../../../images/TableViewDefault.jpg","alt","table row in default state"),a("img"),a("p"),n("h4"),o("Hover state"),a("h4"),n("p"),o("A table row in hover state show quick actions from the actions menu that can be performed on the element. A maximum of three actions that represented by icons can appear."),a("p"),n("p"),o("When the row is selected the action do not appear in hover state."),a("p"),n("p"),n("img",null,null,"srcset","../../../images/TableViewHover@2x.jpg 2x","src","../../../images/TableViewHover.jpg","alt","table row in hover state"),a("img"),a("p"),n("h4"),o("Selected state"),a("h4"),n("p"),n("img",null,null,"srcset","../../../images/TableViewSelected@2x.jpg 2x","src","../../../images/TableViewSelected.jpg","alt","table row in selected state"),a("img"),a("p"),n("h3",null,null,"id","row-attributes"),o("Row attributes"),a("h3"),n("p"),n("img",null,null,"srcset","../../../images/TableViewDefaultParts@2x.jpg 2x","src","../../../images/TableViewDefaultParts.jpg","alt","table row in hover state"),a("img"),a("p"),n("ol"),n("li"),o("Checkbox"),a("li"),n("li"),o("Main column text"),a("li"),n("li"),o("Columns"),a("li"),n("li"),o("Actions button"),a("li"),a("ol"),n("p"),n("img",null,null,"srcset","../../../images/TableViewHoverParts@2x.jpg 2x","src","../../../images/TableViewHoverParts.jpg","alt","table row in hover state"),a("img"),a("p"),n("ol"),n("li"),o("Checkbox"),a("li"),n("li"),o("Main column text"),a("li"),n("li"),o("Columns"),a("li"),n("li"),o("Actions button"),a("li"),n("li"),o("Quick actions displayed on row hover"),a("li"),a("ol"),n("p"),n("img",null,null,"srcset","../../../images/TableRowMetrics@2x.jpg 2x","src","../../../images/TableRowMetrics.jpg","alt","table row metrics"),a("img"),a("p"),n("h3",null,null,"id","row-interactions"),o("Row interactions"),a("h3"),n("ul"),n("li"),o("A table entry can have a checkbox, a radio or none of them."),a("li"),n("li"),o("Selecting a row is only possible by using the checkbox or radio depending on the selection type desired in the table. An interaction with the background does not produce row selection."),a("li"),n("li"),o("Text elements in the row can be configured as links to navigate."),a("li"),n("li"),o("A row can have none or several actions associated. When there is only one action and it can be represented by an icon, you don't need to make use of the actions menu. Otherwise, use the actions menu on the right side of the row."),a("li"),n("li"),o("The first column is usually used as an action:"),n("ul"),n("li"),o("In case of:"),n("ul"),n("li"),o("Folder: it navigates to the next level."),a("li"),n("li"),o("File: it navigates to its detail view."),a("li"),a("ul"),a("li"),n("li"),o("Do never use it for preview. Preview is always a secondary action placed in the row action menu.");a("li"),a("ul"),a("li"),n("li"),o("If the link drives the user out of the site, please identify visually that this link will open in a new page."),a("li"),n("li"),o('A cell entry could include a button as main action of a table entry. An example could be "Execute".'),a("li"),n("li"),o("Drag and drop is possible for moving selected elements into a folder. A click and drag over a non selected element implies selection."),a("li"),a("ul"),n("h4"),o("Row hover"),a("h4"),n("p"),n("img",null,null,"src","../../../images/TableViewRowHover.gif","alt","table view row hover"),a("img"),a("p"),n("h3",null,null,"id","row-interaction-limitation"),o("Row Interaction Limitation"),a("h3"),n("p"),o("Concerning the use of the actions menu on hover there is a limitation. It is not possible to have a row with a button in the default state because it would be impossible to click on it while the actions menu is active in the hover state."),a("p"),n("h4"),o("Do's and Don'ts"),a("h4"),n("p"),o('Do never hide a action in the table as both static actions in the row and quick actions are not compatible. Quick actions will always hover an action placed in the table row and it will be imposible to reach, in this example, "Edit" button.'),a("p"),n("div",null,null,"class","dodont"),n("img",null,null,"class","do","src","../../../images/TableRowInteractionDo.jpg","alt","first, table view row default, second, table view row hover. Theres is no action to hover in the row. Correct."),a("img"),n("p",null,null,"class","do"),o("Do"),a("p"),a("div"),n("div",null,null,"class","dodont"),n("img",null,null,"class","dont","src","../../../images/TableRowInteractionDont.jpg","alt","first, table view row default, second, table view row hover. Theres is an action hovered in the row. Incorrect."),a("img"),n("p",null,null,"class","dont"),o("Don't"),a("p"),a("div"),n("h3",null,null,"id","columns-drag-and-drop"),o("Columns drag and drop"),a("h3"),n("p"),o("Drag and drop is configurable in tables. Tables that allow drag and drop handle this action from the column header, letting the user exchange columns position except with the first one."),a("p"),n("h4"),o("Columns visibility"),a("h4"),n("p"),o("Columns in a table can be shown or hidden only when the table goes together with the management bar and the management bar implements this feature. All columns can be hidden except the first one as it is the reference column."),a("p"),n("h3",null,null,"id","columns-layout"),o("Columns layout"),a("h3"),n("p"),o("A table contains 1 to many columns and how to place them properly can be cumbersome. We provide you a set of advices so you can take quick and easy decisions."),a("p"),n("p"),o("While main column must be always placed on the leftmost side, depending on the number of columns and its content you would prefer different table layouts:"),a("p"),n("ul"),n("li"),n("strong"),o("2 columns"),a("strong"),o(": Place the second column right next to the first column respecting the margins."),a("li"),n("li"),n("strong"),o("N columns"),a("strong"),o(": Place columns equidistant."),a("li"),a("ul"),n("h3",null,null,"id","content-format-and-alignment"),o("Content format and alignment"),a("h3"),n("ul"),n("li"),o("Headers must be always left-aligned and semibold."),a("li"),n("li"),o("First column value must be always in semibold."),a("li"),n("li"),o("The rest of the columns text values must be in regular."),a("li"),n("li"),o("Text values, dates, stickers, labels and badges must be always left-aligned."),a("li"),n("li"),o("Numbers, with or without unit must be right-aligned."),a("li"),a("ul"),n("h3",null,null,"id","example"),o("Example"),a("h3"),n("p"),n("img",null,null,"srcset","../../../images/TableExample@2x.jpg 2x","src","../../../images/TableExample.jpg","alt","table row in selected state"),a("img"),a("p"),n("input",null,null,"type","hidden","value",e.page.title),a("input"),n("input",null,null,"type","hidden","value",e.site.title),a("input")};s(l.$$assignDefaults({content:r},e),null,i)}goog.module("EPSYY.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),n=i.elementOpen,a=i.elementClose,o=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),s=(i.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="EPSYY.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var d=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(u.default);p.default.register(d,r),t.EPSYY=d,t.templates=r,t.default=r}},[336]);