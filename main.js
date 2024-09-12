/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\t--hue: 50;\n\t--sat: 80;\n\t--lum: 50;\n\t--default: hsl( var(--hue) var(--sat) var(--lum) );\n\t--img-bg: #057f05;\n\t--box-bg: #057f0533;\n\t--body-bg: hsl(var(--hue) calc(var(--sat) + 20) calc(var(--lum) * .8));\n\t--transit: all 0.5s ease-in-out;\n\t--transit-fast: all .2s ease-in;\n\tfont-family: Helvetica, sans-serif;\n}\n\n.hidden {\n\tdisplay: none !important;\n}\n\nbody {\n\tbackground: linear-gradient( var(--default) 12.5%, transparent, var(--default) 87.5%), url('https://images.unsplash.com/photo-1618666185561-baed3459ff18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');\n\tdisplay: grid;\n\tgrid: max-content 1fr / auto;\n}\n\nheader {\n\tbackground: linear-gradient( to right, transparent 27.5%, var(--default), transparent 72.5% );\n\tpadding: 1.25rem 1rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 1;\n}\n\nnav {\n\tdisplay: flex;\n\tgap: 1.5rem;\n}\n\nheader button {\n\tbackground: transparent;\n\tborder: 2px solid;\n\tpadding: .5rem 1rem;\n\tborder-radius: .5rem;\n\ttransition: var(--transit-fast);\n\t&:hover {\n\t\tbackground: var(--img-bg);\n\t\tcolor: hsl( var(--hue) var(--sat) var(--lum) );\n\t}\n}\n\n#content {\n\tpadding-bottom: 3rem;\n}\n\n.home-container {\n\tdisplay: grid;\n\tgrid: minmax(5rem, max-content) / auto;\n\tgap: 6rem;\n\tgrid-auto-rows: minmax(200px, 12rem);\n}\n\n[class*=h-wrapper] {\n\tbackground: linear-gradient( to right, transparent, var(--default), transparent );\n\tborder-radius: .3rem;\n\tdisplay: grid;\n\tgap: 0 .5rem;\n}\n\n.h-wrapper-0 {\n\tbackground: linear-gradient( to bottom, var(--default), transparent );\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-flow: column;\n\tgap: .5rem;\n\tpadding: 1rem;\n}\n\n.h-wrapper-0 h1 {\n\tfont-size: 4rem;\n}\n\n[class*=-left], [class*=-right]{\n\twidth: 80%;\n}\n\n.wrap-img {\n\tbackground: url('https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');\n\tbackground-size: 50%;\n\tmin-width: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.5rem;\n}\n\n.wrap-title {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.5rem;\n}\n\n.wrap-p {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tfont-size: 1.15rem;\n}\n\n.img-left {\n\tgrid: 1fr 2fr / 45% 1fr;\n\tmargin-right: auto;\n\tmargin-left: 2rem;\n\tposition: relative;\n\tleft: 0;\n\ttransition: var(--transit);\n\t&:hover{\n\t\tleft: 15%;\n\t}\n}\n\n.h-wrapper-1 div {\n\tgrid-area: 1 / 1 / -1 / 2;\n}\n\n.img-right {\n\tgrid: 1fr 2fr / 1fr 45%;\n\tmargin-left: auto;\n\tmargin-right: 2rem;\n\tposition: relative;\n\tright: 0;\n\ttransition: var(--transit);\n\t&:hover{\n\t\tright: 15%;\n\t}\n}\n\n.h-wrapper-2 div {\n\tgrid-area: 1 / 2 / -1 / 3;\n}\n\n.h-wrapper-3 div{\n\tgrid-area: 1 / 1 / -1 / 2;\n}\n\n/* Menu Page  */\n\n\n.menu-container {\n  display: grid;\n  grid: 250px 1fr / 1fr 1fr;\n}\n\n.m-wrapper-0 {\n\tbackground: linear-gradient( to bottom, var(--default), transparent );\n  grid-area: 1 / 1 / 2 / -1;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n\tgap: 2rem;\n\tpadding-bottom: .5rem;\n}\n\n.m-wrapper-0 h1 {\n\tfont-size: 4rem;\n\tletter-spacing: .1rem;\n}\n\n.m-wrapper-0 h2 {\n\tfont-size: 1.5rem;\n}\n\n.m-wrapper-1, .m-wrapper-2 {\n  display: flex;\n  flex-flow: column;\n  gap: 1.5rem;\n  align-items: center;\n\tpadding: 1rem 0 2rem;\n}\n\n.prices-title {\n\tfont-size: 1.75rem;\n\tpadding: .75rem 1.5rem;\n}\n\n.price-div {\n\tdisplay: flex;\n\tflex-flow: column;\n\tgap: .35rem;\n\tpadding: 1rem 2rem;\n}\n\n.prices-title, .price-div {\n\tbackground: hsl( var(--hue) var(--sat) var(--lum) / .75 );\n\tborder-radius: .5rem;\n}\n\n.price-name, .price-value {\n\tfont-family: monospace;\n\tfont-size: .9rem;\n}\n\n.price-name {\n\tletter-spacing: .075rem;\n\tfont-size: 1.15rem;\n}\n\n.price-value {\n\tletter-spacing: .2rem;\n}\n\n/* About page */\n\nimg {\n\tborder: 0;\n\toutline: 0;\n}\n\n.about-container {\n\tbackground: linear-gradient( to bottom, transparent, #fff8, transparent );\n\tdisplay: flex;\n\tflex-flow: column;\n\tgap: 2rem;\n\tpadding: 2rem;\n}\n\n.hero-section {\n\tdisplay: grid;\n\tgrid: 250px 1fr 1fr / 1fr 35%;\n\tgap: 2rem 1rem;\n}\n\n.hero-img {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-area: 1 / 2 / -1 / 3;\n}\n\n.hero-title {\n\tfont-size: 3.5rem;\n\tpadding: 1rem .5rem 0 4rem;\n\tjustify-self: center;\n\talign-self: center;\n\twhite-space: pre-line;\n}\n\n.hero-subtitle {\n\tfont-size: 2.25rem;\n\tjustify-self: center;\n}\n\n.about-section {\n  display: grid;\n  grid: 200px 100px / 30% 1fr;\n  align-items: center;\n  gap: 1rem;\n\ttext-align: center;\n}\n\n.about-section:last-of-type {\n  grid: 200px 100px / 1fr 30%;\n}\n\n.section-img {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.section-title {\n\tfont-size: 1.75rem;\n\tjustify-self: center;\n\twhite-space: pre;\n}\n\n.section-subtitle {\n\tfont-size: 2.2rem;\n\tgrid-area: 2 / 1 / -1 / -1;\n\tjustify-self: start;\n\twhite-space: pre;\n}\n\n.about-section:last-of-type {\n  grid: 200px 100px / 1fr 30%;\n}\n\n.about-section:last-of-type .section-img {\n  grid-area: 1 / 1 / 2 / 2;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nconst aboutPage = ( () => {\n\tconst about = document.querySelector('.about');\n\n\tconst render = (ref) => {\n\t\tconst add = element => document.createElement(element);\n\n\t\tconst container = add('div');\n\t\tcontainer.className = 'about-container hidden';\n\n\t\t// Hero Section\n\t\tconst heroSection = add('div');\n\t\theroSection.className = 'hero-section';\n\t\tcontainer.append(heroSection);\n\n\t\tconst heroTitle = add('h1');\n\t\theroTitle.className = 'hero-title';\n\t\theroTitle.textContent = `We know what you want.\n\t\t\tWe wanna give it to you.`;\n\theroSection.prepend(heroTitle);\n\n\t\tconst heroSubtitle = add('h2');\n\t\theroSubtitle.className = 'hero-subtitle';\n\t\theroSubtitle.textContent = 'Tasty food. Healthy food. Healing food.';\n\t\theroTitle.after(heroSubtitle);\n\n\t\tconst heroImg = add('div');\n\t\theroImg.className = 'hero-img';\n\t\theroSubtitle.after(heroImg);\n\n\t\t// Section 2\n\t\tconst section2 = add('div');\n\t\tsection2.className = 'about-section';\n\t\theroSection.after(section2);\n\n\t\tconst section2Img = add('div');\n\t\tsection2Img.className = 'section-img';\n\t\tsection2.prepend(section2Img);\n\n\t\tconst section2Title = add('h2');\n\t\tsection2Title.className = 'section-title';\n\t\tsection2Title.textContent = 'From the farms to the \\nkitchens.';\n\t\tsection2Img.after(section2Title);\n\n\t\tconst section2Subtitle = add('h3');\n\t\tsection2Subtitle.className = 'section-subtitle';\n\t\tsection2Subtitle.textContent = 'From the kitchen to your plate.';\n\t\tsection2Title.after(section2Subtitle);\n\n\t\t//Section 3\n\t\tconst section3 = add('div');\n\t\tsection3.className = 'about-section';\n\t\tsection2.after(section3);\n\n\t\tconst section3Img = add('div');\n\t\tsection3Img.className = 'section-img';\n\t\tsection3.append(section3Img);\n\n\t\tconst section3Title = add('h2');\n\t\tsection3Title.className = 'section-title';\n\t\tsection3Title.textContent = 'Always striving for \\ngreatness.';\n\t\tsection3Img.after(section3Title);\n\n\t\tconst section3Subtitle = add('h3');\n\t\tsection3Subtitle.className = 'section-subtitle';\n\t\tsection3Subtitle.textContent = `We don't rest on our laurels. We cook the best of 'em for you.`;\n\t\tsection3Title.after(section3Subtitle);\n\n\t\treturn document.querySelector(ref).append(container)\n\t};\n\n\treturn { about, render }\n})()\n\n\n//# sourceURL=webpack://top-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\n\nconst dom = (function(){\n\tconst div = document.getElementById('content');\n\tconst reference = sel => document.querySelector(sel);\n\tconst home = document.querySelector('.home');\n\tconst build = (element, class_name, text = '', ref, position) => {\n\t\tconst block = document.createElement(element);\n\t\tblock.className = class_name;\n\t\tblock.textContent = text;\n\t\tif(position === 'before') return reference(ref).before(block)\n\t\telse if(position === 'after') return reference(ref).after(block)\n\t\telse if(position === 'prepend') return reference(ref).prepend(block);\n\t\telse if(position === 'append') return reference(ref).append(block);\n\t};\n\tconst append = (element, class_name, text = '') => {\n\t\tconst el = document.createElement(element);\n\t\tel.className = class_name;\n\t\tel.textContent = text;\n\t\treturn div.append (el);\n\t};\n\t\n\tconst attr = (element, attribute, attrValue) => document.querySelector(element).setAttribute(attribute, attrValue);\n\n\tconst homePage = () => {\n\t\tdom.append('div', 'home-container');\n\t\tdom.attr('.home-container', 'class', 'home-container ');\n\n\t\t// Wrapper 0, Title and subtitle\n\t\tdom.build('div', 'h-wrapper-0', '', '.home-container', 'prepend');\n\t\tdom.build('h1', 'title', 'Welcome!', '.h-wrapper-0', 'prepend');\n\t\tdom.build('h2', 'subtitle', 'Enjoy your stay!', '.title', 'after');\n\t\t\n\t\t//Wrapper 1\n\t\tdom.build('div', 'h-wrapper-1 img-left', '', '.h-wrapper-0', 'after');\n\t\tdom.build('div', 'wrap-img', 'Imagine something here', '.h-wrapper-1', 'prepend');\n\t\tdom.build('h3', 'wrap-title', 'Big space for the whole group', '.h-wrapper-1', 'append');\n\t\tdom.build('p', 'wrap-p', 'Tables for up to 20 people ;)', '.h-wrapper-1', 'append');\n\n\t\t//Wrapper 2\n\t\tdom.build('div', 'h-wrapper-2 img-right', '', '.h-wrapper-1', 'after');\n\t\tdom.build('div', 'wrap-img', 'Imagine an image here', '.h-wrapper-2', 'prepend');\n\t\tdom.build('h3', 'wrap-title', 'Special space for pets', '.h-wrapper-2', 'append');\n\t\tdom.build('p', 'wrap-p', 'For those coming from a pet walk', '.h-wrapper-2', 'append');\n\n// Wrapper 3\n\t\tdom.build('div', 'h-wrapper-3 img-left', '', '.h-wrapper-2', 'after');\n\t\tdom.build('div', 'wrap-img', 'Imagine some cool image here', '.h-wrapper-3', 'prepend');\n\t\tdom.build('h3', 'wrap-title', 'Eat-all-you-can every monday!', '.h-wrapper-3', 'append');\n\t\tdom.build('p', 'wrap-p', 'Of course, we moved it to monday so most people wouldn\\'t be able to come', '.h-wrapper-3', 'append');\n\n\t};\n\n\treturn { build, append, div, homePage, attr, home }\n})()\n\n\n//# sourceURL=webpack://top-restaurant/./src/append.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append.js */ \"./src/append.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n;\n\n\n\n\n_append_js__WEBPACK_IMPORTED_MODULE_1__.dom.homePage();\n_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage.render('#content');\n_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage.appendMenu(document.querySelector('#content'));\n\nconst $ = ( () => {\n\tconst home = document.querySelector('.home');\n\tconst homeContainer = document.querySelector('.home-container');\n\tconst menu = document.querySelector('.menu');\n\tconst menuContainer = document.querySelector('.menu-container');\n\tconst about = document.querySelector('.about');\n\tconst aboutContainer = document.querySelector('.about-container');\n\tconst nav = document.querySelector('nav');\n\treturn { nav, home, menu, about, homeContainer, menuContainer, aboutContainer }\n})();\n\n_append_js__WEBPACK_IMPORTED_MODULE_1__.dom.home.addEventListener('focus', () => {\n\tif( $.homeContainer.classList.contains('hidden') ) {\n\t\t$.homeContainer.classList.remove('hidden');\n\t\t$.menuContainer.classList.add('hidden');\n\t\t$.aboutContainer.classList.add('hidden');\n\t}\n});\n\n_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage.menu.addEventListener('focus', () => {\n\t\t$.homeContainer.classList.add('hidden');\n\t\t$.menuContainer.classList.remove('hidden');\n\t\t$.aboutContainer.classList.add('hidden');\n});\n\n_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage.about.addEventListener('focus', () => {\n\t\t$.homeContainer.classList.add('hidden');\n\t\t$.menuContainer.classList.add('hidden');\n\t\t$.aboutContainer.classList.remove('hidden');\n});\n\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuPage = (function(){\n\tconst add = el => document.createElement(el);\n\tconst menu = document.querySelector('.menu');\n\tconst appendMenu = (element) => {\n\t//container\n\tconst container = add('div');\n\tcontainer.className = 'menu-container hidden';\n\t\n\t//wrapper 0 - title & subtitle\n\tconst wrapper0 = add('div');\n\twrapper0.className = 'm-wrapper-0';\n\tcontainer.append(wrapper0);\n\tconst title = add('h1');\n\ttitle.textContent = 'What will it be this time?';\n\twrapper0.append(title);\n\tconst subtitle = add('h2');\n\tsubtitle.textContent = 'Maybe choose something different, we got new stuff ;)';\n\twrapper0.append(subtitle);\n\t\n\t//wrapper 1 - prices\n\tconst wrapper1 = add('div');\n\twrapper1.className = 'm-wrapper-1';\n\twrapper0.after(wrapper1);\n\t\t//Prices title\n\tconst wrapper1Title = add('h3');\n\twrapper1Title.className = 'prices-title';\n\twrapper1Title.textContent = 'Prices';\n\twrapper1.append(wrapper1Title);\n\t\n\t\t//Prices list\n\tconst priceDiv1 = add('div');\n\tpriceDiv1.className = 'price-div';\n\twrapper1.append(priceDiv1);\n\t\t//Function - emit random names\n\tconst randomName = () => {\n\t\tconst vowels = ['a', 'e', 'i', 'o', 'u', 'y'];\n\t\tconst consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','w','z'];\n\t\tconst randomLength = Math.trunc(Math.random() * 7) + 5;\n\t\tconst randomPick = ref => Math.trunc(Math.random() * ref.length);\n\t\tlet result = '';\n\t\tfor(let i = 0; i < randomLength; i++){\n\t\t\tif(i === 0){\n\t\t\t\tif( Math.random() < 0.5 ) {\n\t\t\t\t\tresult += vowels[randomPick(vowels)].toUpperCase()\n\t\t\t\t}\n\t\t\t\telse result += consonants[randomPick(consonants)].toUpperCase()\n\t\t\t} else {\n\t\t\t\tif(vowels.includes(result.at(-1))) {\n\t\t\t\t\tresult += consonants[randomPick(consonants)]\n\t\t\t\t}\n\t\t\t\telse result += vowels[randomPick(vowels)]\n\t\t\t}\n\t\t}\n\t\t\treturn result\n\t};\n\n\t\t//Set random prices for examples\n\tconst randomPrice = () => {\n\t\tlet price = (Math.random() * 30).toFixed(2);\n\t\treturn price + '$'\n\t};\n\n\n\tconst populatePriceList = (ref, entries) => {\n\t\t//Populate div with examples\n\t\tfor(let i = 0; i < entries; i++){\n\t\t\tlet priceWrapper = add('div');\n\t\t\tpriceWrapper.className = 'price-list';\n\t\t\tref.append(priceWrapper);\n\t\t\tlet priceName = add('span');\n\t\t\tpriceName.className = 'price-name';\n\t\t\tpriceName.textContent = randomName();\n\t\t\tpriceWrapper.append(priceName);\n\t\t\tlet priceValue = add('span');\n\t\t\tpriceValue.className = 'price-value';\n\t\t\tpriceValue.textContent = randomPrice();\n\t\t\tpriceName.after(priceValue);\n\t\t\t//padding the price lists\n\t\t\twhile (priceWrapper.textContent.length <= 35){\n\t\t\t\tpriceName.textContent += '.';\n\t\t\t};\n\t\t};\n\t};\n\tpopulatePriceList(priceDiv1, 20);\n\n\t//Wrapper 2\n\tconst wrapper2 = add('div');\n\twrapper2.className = 'm-wrapper-2';\n\twrapper1.after(wrapper2);\n\tconst wrapper2Title = add('h3');\n\twrapper2Title.className = 'prices-title';\n\twrapper2Title.textContent = 'Prices for list 2';\n\twrapper2.append(wrapper2Title);\n\t\n\t//Price list for Wrapper 2\n\tconst priceList2 = add('div');\n\tpriceList2.classList = 'price-div';\n\twrapper2.append(priceList2);\n\tpopulatePriceList(priceList2, 25);\n\t\n\treturn element.append(container)\n\t}\n\n\treturn { appendMenu, menu }\n})()\n\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;