webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction PetAvatar(props) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  /*\n  useEffect(() => {\n    \n   }, [file, imagePreviewUrl])\n  */\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      /*this.setState({\n        file: file,\n        imagePreviewUrl: reader.result\n      });*/\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let $imagePreview = null;\n\n  if (imagePreviewUrl) {\n    $imagePreview = __jsx(\"img\", {\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 24\n      }\n    });\n  } else {\n    $imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 24\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"file\",\n    onChange: handleImageChange,\n    className: \"jsx-2013464274\" + \" \" + \"btn btn-outline-dak\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-2013464274\" + \" \" + \"imgPreview\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, $imagePreview), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2013464274\",\n    __self: this\n  }, \"img.jsx-2013464274{border-radius:50%;object-fit:cover;object-position:center;height:150px;width:150px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlcmNvcy9Eb2N1bWVudHMvd2ViL3Byb3llY3RvLWV2aXRhL2NvbXBvbmVudHMvcGV0cy9QZXRBdmF0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUcrQixrQkFDRCxpQkFDTSx1QkFDVixhQUNELFlBQ2QiLCJmaWxlIjoiL2hvbWUvZ2VyY29zL0RvY3VtZW50cy93ZWIvcHJveWVjdG8tZXZpdGEvY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcihwcm9wcyl7XG4gIFxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpbWFnZVByZXZpZXdVcmwsIHNldEltYWdlUHJldmlld1VybF0gPSB1c2VTdGF0ZSgnJylcbiAgICAvKlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcblxuICAgIH0sIFtmaWxlLCBpbWFnZVByZXZpZXdVcmxdKVxuICAgICovXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdFxuICAgICAgICB9KTsqL1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgJGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFrXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxuICAgICAgICAgICAgeyRpbWFnZVByZXZpZXd9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgIClcblxufVxuLypcbmNsYXNzIFBldEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlOiAnJyxcbiAgICAgIGltYWdlUHJldmlld1VybDogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSW1hZ2VDaGFuZ2UgPSB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gVE9ETzogZG8gc29tZXRoaW5nIHdpdGggLT4gdGhpcy5zdGF0ZS5maWxlXG4gIH1cblxuICBoYW5kbGVJbWFnZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25BZGRBdmF0YXIocmVhZGVyLnJlc3VsdClcbiAgICB9XG5cbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICB9XG4gIC8qXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2ltYWdlUHJldmlld1VybH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgJGltYWdlUHJldmlldz0oPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3VGV4dFwiPlBsZWFzZSBzZWxjdCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdDb21wb25lbnRcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRha1wiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW1hZ2VDaGFuZ2V9IC8+XG4gICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5FbnZpYXI8L2J1dHRvbj4gKn1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1ByZXZpZXdcIj5cbiAgICAgICAgICAgIHskaW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBldEF2YXRhclxuKi8iXX0= */\\n/*@ sourceURL=/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js */\"));\n}\n/*\nclass PetAvatar extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      file: '',\n      imagePreviewUrl: ''\n    };\n    this.handleImageChange = this.handleImageChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    // TODO: do something with -> this.state.file\n  }\n\n  handleImageChange(e) {\n    e.preventDefault();\n\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      this.setState({\n        file: file,\n        imagePreviewUrl: reader.result\n      });\n      this.props.onAddAvatar(reader.result)\n    }\n\n    reader.readAsDataURL(file)\n  }\n  /*\n  render() {\n    let {imagePreviewUrl} = this.state;\n    let $imagePreview = null;\n    if (imagePreviewUrl) {\n      $imagePreview = (<img src={imagePreviewUrl} />);\n    }\n    else{\n        $imagePreview=(<div className=\"previewText\">Please selct an Rata de campo Image</div>)\n    }\n\n    return (\n      <div\n        className=\"previewComponent\">\n        <form onSubmit={this.handleSubmit}>\n          <input className=\"btn btn-outline-dak\" type=\"file\" onChange={this.handleImageChange} />\n        {/*<button className=\"submitButton\" type=\"submit\" onClick={this.handleSubmit}>Enviar</button> *}\n        </form>\n        <div className=\"imgPreview\">\n            {$imagePreview}\n        </div>\n      </div>\n    )\n  }\n\n}\n\nexport default PetAvatar\n*/\n\n_s(PetAvatar, \"KEIMpnu7JreD0HZNwv4pTbpbQKc=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsInByb3BzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlUHJldmlld1VybCIsInNldEltYWdlUHJldmlld1VybCIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIiRpbWFnZVByZXZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFBQTs7QUFFcEMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Ysc0RBQVEsQ0FBQyxFQUFELENBQXREO0FBQ0E7Ozs7OztBQU1BLFFBQU1HLGlCQUFpQixHQUFJQyxDQUFELElBQU07QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQSxRQUFJVCxJQUFJLEdBQUdNLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYOztBQUVBSCxVQUFNLENBQUNJLFNBQVAsR0FBbUIsTUFBTTtBQUN2Qjs7OztBQUlBWCxhQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBSSx3QkFBa0IsQ0FBQ0ksTUFBTSxDQUFDSyxNQUFSLENBQWxCLENBTnVCLENBT3ZCO0FBQ0QsS0FSRDs7QUFTQUwsVUFBTSxDQUFDTSxhQUFQLENBQXFCZCxJQUFyQjtBQUNELEdBaEJEOztBQWtCQSxNQUFJZSxhQUFhLEdBQUcsSUFBcEI7O0FBQ0EsTUFBSVosZUFBSixFQUFxQjtBQUNuQlksaUJBQWEsR0FBSTtBQUFLLFNBQUcsRUFBRVosZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpCO0FBQ0QsR0FGRCxNQUdJO0FBQ0FZLGlCQUFhLEdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FBZjtBQUNIOztBQUVELFNBQ0UsbUVBRUU7QUFBdUMsUUFBSSxFQUFDLE1BQTVDO0FBQW1ELFlBQVEsRUFBRVYsaUJBQTdEO0FBQUEsd0NBQWlCLHFCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVSxhQURMLENBSEY7QUFBQTtBQUFBO0FBQUEsMDdJQURGO0FBb0JIO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXpEd0JqQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcihwcm9wcyl7XG4gIFxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpbWFnZVByZXZpZXdVcmwsIHNldEltYWdlUHJldmlld1VybF0gPSB1c2VTdGF0ZSgnJylcbiAgICAvKlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcblxuICAgIH0sIFtmaWxlLCBpbWFnZVByZXZpZXdVcmxdKVxuICAgICovXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdFxuICAgICAgICB9KTsqL1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgJGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFrXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxuICAgICAgICAgICAgeyRpbWFnZVByZXZpZXd9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgIClcblxufVxuLypcbmNsYXNzIFBldEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlOiAnJyxcbiAgICAgIGltYWdlUHJldmlld1VybDogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSW1hZ2VDaGFuZ2UgPSB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gVE9ETzogZG8gc29tZXRoaW5nIHdpdGggLT4gdGhpcy5zdGF0ZS5maWxlXG4gIH1cblxuICBoYW5kbGVJbWFnZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25BZGRBdmF0YXIocmVhZGVyLnJlc3VsdClcbiAgICB9XG5cbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICB9XG4gIC8qXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2ltYWdlUHJldmlld1VybH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgJGltYWdlUHJldmlldz0oPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3VGV4dFwiPlBsZWFzZSBzZWxjdCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXdDb21wb25lbnRcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRha1wiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW1hZ2VDaGFuZ2V9IC8+XG4gICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5FbnZpYXI8L2J1dHRvbj4gKn1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1ByZXZpZXdcIj5cbiAgICAgICAgICAgIHskaW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBldEF2YXRhclxuKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})