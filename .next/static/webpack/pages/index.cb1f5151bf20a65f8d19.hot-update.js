webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ \"./node_modules/@material-ui/icons/PhotoCamera.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PetAvatar(props) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''); //MAAAAAAAAAAAAAAAAAAL\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var img = document.getElementById('pet');\n\n    if (img) {\n      img.style.borderRadius = \"50%\";\n      img.style.objectFit = \"cover\";\n      img.style.objectPosition = \"center\";\n      img.style.height = \"150px\";\n      img.style.width = \"150px\";\n    }\n  }, [file, imagePreviewUrl]);\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let imagePreview = null;\n\n  if (imagePreviewUrl) {\n    imagePreview = __jsx(\"img\", {\n      id: \"pet\",\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 23\n      }\n    });\n  } else {\n    imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 23\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, imagePreview), __jsx(\"input\", {\n    accept: \"image/*\",\n    id: \"icon-button-file\",\n    type: \"file\",\n    onChange: handleImageChange,\n    style: {\n      display: 'none',\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"icon-button-file\",\n    style: {\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: \"primary\",\n    \"aria-label\": \"upload picture\",\n    component: \"span\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(PetAvatar, \"CP5ixEbdKc95ZFcx7tsK/05PPKE=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsInByb3BzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlUHJldmlld1VybCIsInNldEltYWdlUHJldmlld1VybCIsInVzZUVmZmVjdCIsImltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpbWFnZVByZXZpZXciLCJkaXNwbGF5IiwiYWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQXlCO0FBQUE7O0FBR3BDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NGLHNEQUFRLENBQUMsRUFBRCxDQUF0RCxDQUpvQyxDQUtyQzs7QUFFQ0cseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBVjs7QUFDQSxRQUFHRixHQUFILEVBQU87QUFDSEEsU0FBRyxDQUFDRyxLQUFKLENBQVVDLFlBQVYsR0FBdUIsS0FBdkI7QUFDQUosU0FBRyxDQUFDRyxLQUFKLENBQVVFLFNBQVYsR0FBb0IsT0FBcEI7QUFDQUwsU0FBRyxDQUFDRyxLQUFKLENBQVVHLGNBQVYsR0FBeUIsUUFBekI7QUFDQU4sU0FBRyxDQUFDRyxLQUFKLENBQVVJLE1BQVYsR0FBaUIsT0FBakI7QUFDQVAsU0FBRyxDQUFDRyxLQUFKLENBQVVLLEtBQVYsR0FBZ0IsT0FBaEI7QUFDSDtBQUVKLEdBVlEsRUFVTixDQUFDZCxJQUFELEVBQU9HLGVBQVAsQ0FWTSxDQUFUOztBQVlBLFFBQU1ZLGlCQUFpQixHQUFJQyxDQUFELElBQU07QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQSxRQUFJbkIsSUFBSSxHQUFHZ0IsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQVg7O0FBRUFILFVBQU0sQ0FBQ0ksU0FBUCxHQUFtQixNQUFNO0FBQ3ZCckIsYUFBTyxDQUFDRCxJQUFELENBQVA7QUFDQUksd0JBQWtCLENBQUNjLE1BQU0sQ0FBQ0ssTUFBUixDQUFsQixDQUZ1QixDQUd2QjtBQUNELEtBSkQ7O0FBS0FMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQnhCLElBQXJCO0FBQ0QsR0FaRDs7QUFjQSxNQUFJeUIsWUFBWSxHQUFHLElBQW5COztBQUNBLE1BQUl0QixlQUFKLEVBQXFCO0FBQ25Cc0IsZ0JBQVksR0FBSTtBQUFLLFFBQUUsRUFBQyxLQUFSO0FBQWMsU0FBRyxFQUFFdEIsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQjtBQUNELEdBRkQsTUFHSTtBQUNBc0IsZ0JBQVksR0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUFkO0FBQ0g7O0FBQ0QsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFlBREwsQ0FERixFQUlFO0FBQ0ksVUFBTSxFQUFDLFNBRFg7QUFFSSxNQUFFLEVBQUMsa0JBRlA7QUFHSSxRQUFJLEVBQUMsTUFIVDtBQUlJLFlBQVEsRUFBRVYsaUJBSmQ7QUFLSSxTQUFLLEVBQUU7QUFBQ1csYUFBTyxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVdFO0FBQ0ksV0FBTyxFQUFDLGtCQURaO0FBQytCLFNBQUssRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUixLQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxvRUFBRDtBQUNJLFNBQUssRUFBQyxTQURWO0FBRUksa0JBQVcsZ0JBRmY7QUFHSSxhQUFTLEVBQUMsTUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSVEsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlIsQ0FGSixDQVhGLENBREY7QUF3Qkg7O0dBaEV1QjdCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BldHMvUGV0QXZhdGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGV0QXZhdGFyKHByb3BzKXtcblxuICBcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3VXJsLCBzZXRJbWFnZVByZXZpZXdVcmxdID0gdXNlU3RhdGUoJycpXG4gICAvL01BQUFBQUFBQUFBQUFBQUFBQUFMXG4gICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BldCcpXG4gICAgICAgIGlmKGltZyl7XG4gICAgICAgICAgICBpbWcuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNTAlXCJcbiAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBpbWcuc3R5bGUub2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodD1cIjE1MHB4XCJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aD1cIjE1MHB4XCJcbiAgICAgICAgfVxuIFxuICAgIH0sIFtmaWxlLCBpbWFnZVByZXZpZXdVcmxdKVxuICAgXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0RmlsZShmaWxlKVxuICAgICAgICBzZXRJbWFnZVByZXZpZXdVcmwocmVhZGVyLnJlc3VsdClcbiAgICAgICAgLy9wcm9wcy5vbkFkZEF2YXRhcihyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICB9XG5cbiAgICBsZXQgaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICBpbWFnZVByZXZpZXcgPSAoPGltZyBpZD0ncGV0JyBzcmM9e2ltYWdlUHJldmlld1VybH0gLz4pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBpbWFnZVByZXZpZXc9KDxkaXYgPlBsZWFzZSBzZWxjZXQgYW4gUmF0YSBkZSBjYW1wbyBJbWFnZTwvZGl2PilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIFxuICAgICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1maWxlXCIgXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJywgYWxpZ246ICdjZW50ZXInfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgaHRtbEZvcj1cImljb24tYnV0dG9uLWZpbGVcIiBzdHlsZT17e2FsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInVwbG9hZCBwaWN0dXJlXCIgXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})