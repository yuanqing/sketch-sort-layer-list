(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/0659c960-6400-498f-b6c0-51213c6cf2f1");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/0659c960-6400-498f-b6c0-51213c6cf2f1":
/*!*****************************************************************************************************!*\
  !*** /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/0659c960-6400-498f-b6c0-51213c6cf2f1 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports={'sort-selected-layers-by-name':__webpack_require__(/*! ./src/sort-selected-layers-by-name */ "./src/sort-selected-layers-by-name.js").default,'sort-selected-layers-by-x-position':__webpack_require__(/*! ./src/sort-selected-layers-by-x-position */ "./src/sort-selected-layers-by-x-position.js").default,'sort-selected-layers-by-y-position':__webpack_require__(/*! ./src/sort-selected-layers-by-y-position */ "./src/sort-selected-layers-by-y-position.js").default,'sort-selected-layers-by-y-and-x-position':__webpack_require__(/*! ./src/sort-selected-layers-by-y-and-x-position */ "./src/sort-selected-layers-by-y-and-x-position.js").default}

/***/ }),

/***/ "../sketch-plugin-helper/src/api.js":
/*!******************************************!*\
  !*** ../sketch-plugin-helper/src/api.js ***!
  \******************************************/
/*! exports provided: getSavedUserInput, openUserInputDialog, saveUserInput, CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, TEXT_BOX, addLayersToPage, adjustParentGroupsToFit, getAllLayers, getSelectedLayers, getSelectedOrAllLayers, getAllArtboards, iterateNestedLayers, showMessage, showSuccessMessage, showWarningMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_input_form_form_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input/form/form-types */ "../sketch-plugin-helper/src/user-input/form/form-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _user_input_form_form_types__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _user_input_form_form_types__WEBPACK_IMPORTED_MODULE_0__["DROP_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _user_input_form_form_types__WEBPACK_IMPORTED_MODULE_0__["RADIO_BUTTONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _user_input_form_form_types__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"]; });

/* harmony import */ var _user_input_get_saved_user_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-input/get-saved-user-input */ "../sketch-plugin-helper/src/user-input/get-saved-user-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedUserInput", function() { return _user_input_get_saved_user_input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _user_input_open_user_input_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-input/open-user-input-dialog */ "../sketch-plugin-helper/src/user-input/open-user-input-dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openUserInputDialog", function() { return _user_input_open_user_input_dialog__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _user_input_save_user_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-input/save-user-input */ "../sketch-plugin-helper/src/user-input/save-user-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveUserInput", function() { return _user_input_save_user_input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/add-layers-to-page */ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_4__["addLayersToPage"]; });

/* harmony import */ var _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/adjust-parent-groups-to-fit */ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_5__["adjustParentGroupsToFit"]; });

/* harmony import */ var _utilities_get_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/get-layers */ "../sketch-plugin-helper/src/utilities/get-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_6__["getAllLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_6__["getSelectedLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedOrAllLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_6__["getSelectedOrAllLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllArtboards", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_6__["getAllArtboards"]; });

/* harmony import */ var _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_7__["iterateNestedLayers"]; });

/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_8__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_8__["showSuccessMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showWarningMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_8__["showWarningMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_8__["showErrorMessage"]; });












/***/ }),

/***/ "../sketch-plugin-helper/src/common/constants.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/common/constants.js ***!
  \*******************************************************/
/*! exports provided: appcastFileName, bundleFileName, manifestFileName, packageJsonConfigKey, sourceDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appcastFileName", function() { return appcastFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bundleFileName", function() { return bundleFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manifestFileName", function() { return manifestFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageJsonConfigKey", function() { return packageJsonConfigKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDirectory", function() { return sourceDirectory; });
const appcastFileName = 'appcast.xml'
const bundleFileName = 'plugin.js'
const manifestFileName = 'manifest.json'
const packageJsonConfigKey = 'sketch-plugin-helper'
const sourceDirectory = './src'


/***/ }),

/***/ "../sketch-plugin-helper/src/common/get-package-json.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/common/get-package-json.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPackageJson; });
function getPackageJson () {
  const packageJson = "{\n  \"private\": true,\n  \"version\": \"0.0.0\",\n  \"devDependencies\": {\n    \"sketch-plugin-helper\": \"*\"\n  },\n  \"scripts\": {\n    \"build\": \"sph build\",\n    \"fix\": \"sph lint --fix\",\n    \"lint\": \"sph lint\",\n    \"symlink\": \"sph symlink\",\n    \"unlink\": \"sph symlink --delete\",\n    \"version\": \"sph version\",\n    \"watch\": \"sph build --watch\"\n  },\n  \"dependencies\": {\n    \"natural-compare-lite\": \"1.4.0\"\n  },\n  \"sketch-plugin-helper\": {\n    \"pluginName\": \"Sort Layer List\",\n    \"pluginDescription\": \"A Sketch plugin for sorting the layer list by name or layer position\",\n    \"authorName\": \"Lim Yuan Qing\",\n    \"githubUserName\": \"yuanqing\",\n    \"githubRepositoryName\": \"sketch-sort-layer-list\",\n    \"menu\": [\n      {\n        \"handler\": \"sort-selected-layers-by-name\",\n        \"label\": \"Sort Selected Layers By Name\"\n      },\n      \"-\",\n      {\n        \"handler\": \"sort-selected-layers-by-x-position\",\n        \"label\": \"Sort Selected Layers By X Position\"\n      },\n      {\n        \"handler\": \"sort-selected-layers-by-y-position\",\n        \"label\": \"Sort Selected Layers By Y Position\"\n      },\n      {\n        \"handler\": \"sort-selected-layers-by-y-and-x-position\",\n        \"label\": \"Sort Selected Layers By Y and X Position\"\n      }\n    ]\n  }\n}\n"
  return JSON.parse(packageJson)
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/create-alert.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/create-alert.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAlert; });
function createAlert (title) {
  const alert = NSAlert.alloc().init()
  alert.window().setAutorecalculatesKeyViewLoop(true)
  alert.setMessageText(title)
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  return alert
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/create-label.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/create-label.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createLabel; });
function createLabel ({ label, width, height }) {
  const textField = NSTextField.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  textField.setBezeled(false)
  textField.setDrawsBackground(false)
  textField.setEditable(false)
  textField.setLineBreakMode(NSLineBreakByTruncatingTail)
  textField.setSelectable(false)
  textField.setStringValue(label)
  return textField
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/create-stack-view.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/create-stack-view.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStackView; });
function createStackView ({ width, height, views }) {
  const stackView = NSStackView.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  stackView.setAlignment(NSLayoutAttributeLeft)
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
  stackView.setSpacing(0)
  stackView.setTranslatesAutoresizingMaskIntoConstraints(true)
  stackView.updateConstraintsForSubtreeIfNeeded()
  views.forEach(function ({ view, paddingBottom }) {
    stackView.addView_inGravity_(view, NSStackViewGravityTop)
    stackView.setCustomSpacing_afterView_(paddingBottom, view)
  })
  return stackView
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/dimensions.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/dimensions.js ***!
  \************************************************************/
/*! exports provided: formHeight, formPaddingBottom, labelHeight, labelPaddingBottom, width */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formHeight", function() { return formHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formPaddingBottom", function() { return formPaddingBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelHeight", function() { return labelHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelPaddingBottom", function() { return labelPaddingBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
const formHeight = 20
const formPaddingBottom = 12
const labelHeight = 20
const labelPaddingBottom = 6
const width = 300


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/check-box.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/check-box.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkBox; });
/* eslint-disable eqeqeq */

function checkBox ({ width, height, label, value }) {
  const checkBox = NSButton.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  checkBox.setButtonType(NSSwitchButton)
  checkBox.setBezelStyle(0)
  checkBox.setState(value ? NSOnState : NSOffState)
  checkBox.setTitle(label)
  return {
    view: checkBox,
    retrieveValue: function () {
      return checkBox.stringValue() == '1'
    }
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/create-form.js":
/*!******************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/create-form.js ***!
  \******************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "../sketch-plugin-helper/src/user-input/form/check-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _check_box__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-down */ "../sketch-plugin-helper/src/user-input/form/drop-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _drop_down__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _radio_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-buttons */ "../sketch-plugin-helper/src/user-input/form/radio-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _radio_buttons__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-box */ "../sketch-plugin-helper/src/user-input/form/text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _text_box__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/drop-down.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/drop-down.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropDown; });
function dropDown ({ width, height, value, possibleValues }) {
  const popUpButton = NSPopUpButton.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  possibleValues.forEach(function (value) {
    popUpButton.addItemWithTitle(value)
  })
  const index = possibleValues.indexOf(value)
  popUpButton.selectItemAtIndex(index)
  return {
    view: popUpButton,
    retrieveValue: function () {
      const index = popUpButton.indexOfSelectedItem()
      return possibleValues[index]
    }
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/form-types.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/form-types.js ***!
  \*****************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return CHECK_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return DROP_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return RADIO_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return TEXT_BOX; });
const CHECK_BOX = 'CHECK_BOX'
const DROP_DOWN = 'DROP_DOWN'
const RADIO_BUTTONS = 'RADIO_BUTTONS'
const TEXT_BOX = 'TEXT_BOX'


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/radio-buttons.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/radio-buttons.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radioButtons; });
function radioButtons ({
  width,
  height,
  value,
  possibleValues
}) {
  const buttonFormat = NSButtonCell.alloc().init()
  buttonFormat.setButtonType(NSRadioButton)
  const length = possibleValues.length
  const matrix = NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(
    NSMakeRect(0, 0, width, height),
    NSRadioModeMatrix,
    buttonFormat,
    1,
    length
  )
  matrix.setCellSize(CGSizeMake(Math.floor(width / length), height))
  const cells = matrix.cells()
  cells.forEach(function (cell, index) {
    cell.setTitle(possibleValues[index])
  })
  const index = possibleValues.indexOf(value)
  matrix.selectCellAtRow_column(0, index)
  return {
    view: matrix,
    retrieveValue: function () {
      const index = matrix.cells().indexOfObject(matrix.selectedCell())
      return possibleValues[index]
    }
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/form/text-box.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/form/text-box.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textBox; });
function textBox ({ width, height, value, placeholder }) {
  const textField = NSTextField.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  textField.setStringValue(value)
  if (placeholder) {
    textField.setPlaceholderString(placeholder)
  }
  return {
    view: textField,
    retrieveValue: function () {
      return textField.stringValue()
    }
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/get-saved-user-input.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/get-saved-user-input.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSavedUserInput; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");





function getSavedUserInput () {
  const { defaults } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_2__["default"])()[_common_constants__WEBPACK_IMPORTED_MODULE_1__["packageJsonConfigKey"]]
  return Object.keys(defaults).reduce(function (results, key) {
    const savedSetting = sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.settingForKey(key)
    results[key] =
      typeof savedSetting !== 'undefined' ? savedSetting : defaults[key]
    return results
  }, {})
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/open-user-input-dialog.js":
/*!************************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/open-user-input-dialog.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openUserInputDialog; });
/* harmony import */ var _get_saved_user_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-saved-user-input */ "../sketch-plugin-helper/src/user-input/get-saved-user-input.js");
/* harmony import */ var _form_create_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/create-form */ "../sketch-plugin-helper/src/user-input/form/create-form.js");
/* harmony import */ var _create_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-alert */ "../sketch-plugin-helper/src/user-input/create-alert.js");
/* harmony import */ var _create_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-label */ "../sketch-plugin-helper/src/user-input/create-label.js");
/* harmony import */ var _create_stack_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-stack-view */ "../sketch-plugin-helper/src/user-input/create-stack-view.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dimensions */ "../sketch-plugin-helper/src/user-input/dimensions.js");
/* eslint-disable eqeqeq */









function openUserInputDialog ({ title, inputs: inputsConfig }) {
  const savedUserInput = Object(_get_saved_user_input__WEBPACK_IMPORTED_MODULE_0__["default"])()
  const { inputs, views, stackViewHeight } = parse({
    inputsConfig,
    savedUserInput
  })
  const stackView = Object(_create_stack_view__WEBPACK_IMPORTED_MODULE_4__["default"])({
    width: _dimensions__WEBPACK_IMPORTED_MODULE_5__["width"],
    height: stackViewHeight,
    views
  })
  const alert = Object(_create_alert__WEBPACK_IMPORTED_MODULE_2__["default"])(title)
  alert.setAccessoryView(stackView)
  if (alert.runModal() == '1000') {
    return Object.keys(inputs).reduce(function (result, key) {
      const retrieveValue = inputs[key]
      result[key] = retrieveValue()
      return result
    }, {})
  }
  return null
}

function parse ({ inputsConfig, savedUserInput }) {
  const inputs = {}
  const views = []
  let stackViewHeight = 0
  inputsConfig.forEach(function ({ type, key, label, ...rest }) {
    if (label && type != 'CHECK_BOX') {
      const labelView = Object(_create_label__WEBPACK_IMPORTED_MODULE_3__["default"])({ label, width: _dimensions__WEBPACK_IMPORTED_MODULE_5__["width"], height: _dimensions__WEBPACK_IMPORTED_MODULE_5__["labelHeight"] })
      views.push({
        view: labelView,
        paddingBottom: _dimensions__WEBPACK_IMPORTED_MODULE_5__["labelPaddingBottom"]
      })
      stackViewHeight += _dimensions__WEBPACK_IMPORTED_MODULE_5__["labelHeight"] + _dimensions__WEBPACK_IMPORTED_MODULE_5__["labelPaddingBottom"]
    }
    const value = savedUserInput[key]
    const { view, retrieveValue } = _form_create_form__WEBPACK_IMPORTED_MODULE_1__[type]({
      label,
      value,
      width: _dimensions__WEBPACK_IMPORTED_MODULE_5__["width"],
      height: _dimensions__WEBPACK_IMPORTED_MODULE_5__["formHeight"],
      ...rest
    })
    views.push({
      view,
      paddingBottom: _dimensions__WEBPACK_IMPORTED_MODULE_5__["formPaddingBottom"]
    })
    stackViewHeight += _dimensions__WEBPACK_IMPORTED_MODULE_5__["formHeight"] + _dimensions__WEBPACK_IMPORTED_MODULE_5__["formPaddingBottom"]
    inputs[key] = retrieveValue
  })
  stackViewHeight -= _dimensions__WEBPACK_IMPORTED_MODULE_5__["formPaddingBottom"]
  return {
    inputs,
    views,
    stackViewHeight
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/user-input/save-user-input.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/user-input/save-user-input.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return saveUserInput; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");



function saveUserInput (userInput, options) {
  if (typeof userInput === 'undefined') {
    return
  }
  Object.keys(userInput).forEach(function (key) {
    const value = userInput[key]
    if (typeof value === 'undefined') {
      return
    }
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"])(key, value)
  })
  if (options && options.successMessage) {
    Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(options.successMessage)
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/add-layers-to-page.js ***!
  \*******************************************************************/
/*! exports provided: addLayersToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return addLayersToPage; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);


function addLayersToPage (layers) {
  const document = Object(sketch_dom__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])()
  return document.selectedPage.sketchObject.addLayers(layers)
}


/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js":
/*!****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js ***!
  \****************************************************************************/
/*! exports provided: adjustParentGroupsToFit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return adjustParentGroupsToFit; });
/* eslint-disable eqeqeq */

function adjustParentGroupsToFit (layer) {
  adjustParentGroupsToFitHelper(layer, {})
}

function adjustParentGroupsToFitHelper (layer, adjustedGroupIds) {
  const parent = layer.parent
  if (parent && parent.type == 'Group' && !adjustedGroupIds[parent.id]) {
    parent.adjustToFit()
    adjustedGroupIds[parent.id] = true
    adjustParentGroupsToFitHelper(parent, adjustedGroupIds)
  }
}


/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-layers.js":
/*!***********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-layers.js ***!
  \***********************************************************/
/*! exports provided: getAllLayers, getSelectedLayers, getSelectedOrAllLayers, getAllArtboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLayers", function() { return getAllLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return getSelectedLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedOrAllLayers", function() { return getSelectedOrAllLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArtboards", function() { return getAllArtboards; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable eqeqeq */



function getAllLayers () {
  const document = Object(sketch_dom__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])()
  const page = document.selectedPage
  return page.layers
}

function getSelectedLayers () {
  const document = Object(sketch_dom__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])()
  return document.selectedLayers.layers
}

function getSelectedOrAllLayers () {
  const selectedLayers = getSelectedLayers()
  return selectedLayers.length != 0 ? selectedLayers : getAllLayers()
}

function getAllArtboards () {
  return getAllLayers().filter(function (layer) {
    return layer.type == 'Artboard'
  })
}


/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/iterate-nested-layers.js ***!
  \**********************************************************************/
/*! exports provided: iterateNestedLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return iterateNestedLayers; });
/* eslint-disable eqeqeq */

function iterateNestedLayers (layers, callback) {
  layers.forEach(function (layer) {
    callback(layer)
    const type = layer.type
    if (type == 'Artboard' || type == 'Group') {
      iterateNestedLayers(layer.layers, callback)
    }
  })
}


/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/show-message.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/show-message.js ***!
  \*************************************************************/
/*! exports provided: showMessage, showSuccessMessage, showWarningMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return showSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarningMessage", function() { return showWarningMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return showErrorMessage; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);


function showMessage (message, options) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(
    options && options.symbol ? `${options.symbol} ${message}` : message
  )
}

function showSuccessMessage (message) {
  showMessage(message, { symbol: '✅' })
}

function showWarningMessage (message) {
  showMessage(message, { symbol: '⚠️' })
}

function showErrorMessage (message) {
  showMessage(message, { symbol: '🔴' })
}


/***/ }),

/***/ "./node_modules/natural-compare-lite/index.js":
/*!****************************************************!*\
  !*** ./node_modules/natural-compare-lite/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {




/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */


var naturalCompare = function(a, b) {
	var i, codeA
	, codeB = 1
	, posA = 0
	, posB = 0
	, alphabet = String.alphabet

	function getCode(str, pos, code) {
		if (code) {
			for (i = pos; code = getCode(str, i), code < 76 && code > 65;) ++i;
			return +str.slice(pos - 1, i)
		}
		code = alphabet && alphabet.indexOf(str.charAt(pos))
		return code > -1 ? code + 76 : ((code = str.charCodeAt(pos) || 0), code < 45 || code > 127) ? code
			: code < 46 ? 65               // -
			: code < 48 ? code - 1
			: code < 58 ? code + 18        // 0-9
			: code < 65 ? code - 11
			: code < 91 ? code + 11        // A-Z
			: code < 97 ? code - 37
			: code < 123 ? code + 5        // a-z
			: code - 63
	}


	if ((a+="") != (b+="")) for (;codeB;) {
		codeA = getCode(a, posA++)
		codeB = getCode(b, posB++)

		if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
			codeA = getCode(a, posA, posA)
			codeB = getCode(b, posB, posA = i)
			posB = i
		}

		if (codeA != codeB) return (codeA < codeB) ? -1 : 1
	}
	return 0
}

try {
	module.exports = naturalCompare;
} catch (e) {
	String.naturalCompare = naturalCompare;
}


/***/ }),

/***/ "./src/sort-selected-layers-by-name.js":
/*!*********************************************!*\
  !*** ./src/sort-selected-layers-by-name.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var natural_compare_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! natural-compare-lite */ "./node_modules/natural-compare-lite/index.js");
/* harmony import */ var natural_compare_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(natural_compare_lite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sort_selected_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-selected-layers */ "./src/sort-selected-layers.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(_sort_selected_layers__WEBPACK_IMPORTED_MODULE_1__["default"])({
  label: 'name',
  sortLayers: function (a, b) {
    return natural_compare_lite__WEBPACK_IMPORTED_MODULE_0___default()(b.name, a.name)
  }
}));


/***/ }),

/***/ "./src/sort-selected-layers-by-x-position.js":
/*!***************************************************!*\
  !*** ./src/sort-selected-layers-by-x-position.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-selected-layers */ "./src/sort-selected-layers.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__["default"])({
  label: 'X position',
  sortLayers: function (a, b) {
    return b.frame.x - a.frame.x
  }
}));


/***/ }),

/***/ "./src/sort-selected-layers-by-y-and-x-position.js":
/*!*********************************************************!*\
  !*** ./src/sort-selected-layers-by-y-and-x-position.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-selected-layers */ "./src/sort-selected-layers.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__["default"])({
  label: 'Y and X position',
  sortLayers: function (a, b) {
    const yPositionDifference = b.frame.y - a.frame.y
    if (yPositionDifference != 0) {
      return yPositionDifference
    }
    return b.frame.x - a.frame.x
  }
}));


/***/ }),

/***/ "./src/sort-selected-layers-by-y-position.js":
/*!***************************************************!*\
  !*** ./src/sort-selected-layers-by-y-position.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-selected-layers */ "./src/sort-selected-layers.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_sort_selected_layers__WEBPACK_IMPORTED_MODULE_0__["default"])({
  label: 'Y position',
  sortLayers: function (a, b) {
    return b.frame.y - a.frame.y
  }
}));


/***/ }),

/***/ "./src/sort-selected-layers.js":
/*!*************************************!*\
  !*** ./src/sort-selected-layers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortSelectedLayers; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");


function sortSelectedLayers ({ label, sortLayers }) {
  return function () {
    const selectedLayers = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayers"])().reverse()
    if (selectedLayers < 2) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('Select at least two layers')
      return
    }
    if (!areLayersInSameList(selectedLayers)) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('Selected layers are not in the same list')
      return
    }
    const firstLayer = selectedLayers[0]
    const parent = firstLayer.sketchObject.parentGroup()
    const tempLayer = MSLayer.alloc().init()
    parent.insertLayer_beforeLayer(tempLayer, firstLayer.sketchObject)
    selectedLayers.sort(sortLayers).forEach(function (layer) {
      const layerSketchObject = layer.sketchObject
      layerSketchObject.moveToLayer_beforeLayer(parent, tempLayer)
    })
    tempLayer.removeFromParent()
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Sorted layers by ${label}`)
  }
}

function areLayersInSameList ([firstLayer, ...layers]) {
  const firstLayerParent = firstLayer.parent
  return layers.reduce(function (result, layer) {
    if (!result) {
      return result
    }
    const parent = layer.parent
    if (firstLayerParent == null) {
      return parent == null
    }
    return parent.id && parent.id == firstLayerParent.id
  }, true)
}


/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ })));
//# sourceMappingURL=plugin.js.map