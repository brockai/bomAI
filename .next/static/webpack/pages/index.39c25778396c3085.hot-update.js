"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/brockai/NavBar.tsx":
/*!***************************************!*\
  !*** ./components/brockai/NavBar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/authContext */ \"./context/authContext.tsx\");\n/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/Icon */ \"./components/icon/Icon.tsx\");\n/* harmony import */ var _bootstrap_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bootstrap/Badge */ \"./components/bootstrap/Badge.tsx\");\n// components/NavBar.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const { loginWithRedirect, logout, isAuthenticated } = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const handleLogout = ()=>{\n        logout({\n            logoutParams: {\n                returnTo: window.location.origin\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            padding: \"1rem\",\n            color: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://brockai.com/\",\n                        className: \"flex items-center text-white no-underline mr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/brockai.png\",\n                            alt: \"BrockAI Logo\",\n                            width: 50\n                        }, void 0, false, {\n                            fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-light fs-2 text-danger\",\n                        children: \"BOM Check AI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    \"\\xa0\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-light fs-6 text-danger\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            color: \"danger\",\n                            shadow: \"none\",\n                            rounded: \"pill\",\n                            children: \"Prototype\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-1\",\n                children: [\n                    !isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                size: \"2x\",\n                                icon: \"login\",\n                                style: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fs-7\",\n                                children: \"Sign\\xa0In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                size: \"3x\",\n                                icon: \"logout\",\n                                style: {\n                                    color: \"white\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fs-4\",\n                                children: \"Sign\\xa0Out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brock/Desktop/bomai/components/brockai/NavBar.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"keLS7vE3nspPHBSliiS+GcYpmMg=\", false, function() {\n    return [\n        _context_authContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jyb2NrYWkvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdCQUF3Qjs7O0FBQ0U7QUFDMEI7QUFFcEI7QUFFTztBQUV2QyxNQUFNSSxTQUFtQjs7SUFDckIsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR04sNkRBQU9BO0lBRTlELE1BQU1PLGVBQWU7UUFDakJGLE9BQU87WUFDSEcsY0FBYztnQkFDVkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3BDO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFNBQVM7WUFBUUMsZ0JBQWdCO1lBQWlCQyxTQUFTO1lBQVFDLE9BQU87UUFBUTs7MEJBQzVGLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFFQyxNQUFLO3dCQUNKRixXQUFVO2tDQUVWLDRFQUFDRzs0QkFBSUMsS0FBSTs0QkFBZUMsS0FBSTs0QkFBZUMsT0FBTzs7Ozs7Ozs7Ozs7a0NBRXRELDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBOEI7Ozs7OztvQkFBa0I7a0NBRS9ELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2xCLHdEQUFLQTs0QkFDRmdCLE9BQU07NEJBQ05TLFFBQU87NEJBQ1BDLFNBQVE7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVlULDhEQUFDVDtnQkFBSUMsV0FBVTs7b0JBQ1YsQ0FBQ2QsaUNBQ0UsOERBQUNhO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ25CLGtEQUFJQTtnQ0FDRDRCLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xoQixPQUFPO29DQUFFSSxPQUFPO2dDQUFROzs7Ozs7MENBRTVCLDhEQUFDYTtnQ0FBS1gsV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O29CQUc5QmQsaUNBQ0csOERBQUNhO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ25CLGtEQUFJQTtnQ0FDRDRCLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xoQixPQUFPO29DQUFFSSxPQUFPO2dDQUFROzs7Ozs7MENBRTVCLDhEQUFDYTtnQ0FBS1gsV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9DO0dBOURNakI7O1FBQ3FESCx5REFBT0E7OztLQUQ1REc7QUFnRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icm9ja2FpL05hdkJhci50c3g/ZTcxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL05hdkJhci50c3hcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgQnV0dG9uLCB7IElCdXR0b25Qcm9wcyB9IGZyb20gJy4uL2Jvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbi9JY29uJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL2Jvb3RzdHJhcC9CYWRnZSc7XG5cbmNvbnN0IE5hdkJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2dpbldpdGhSZWRpcmVjdCwgbG9nb3V0LCBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUF1dGgoKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgbG9nb3V0KHtcbiAgICAgICAgICAgIGxvZ291dFBhcmFtczoge1xuICAgICAgICAgICAgICAgIHJldHVyblRvOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBwYWRkaW5nOiAnMXJlbScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJvY2thaS5jb20vXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgbXItMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9icm9ja2FpLnBuZ1wiIGFsdD1cIkJyb2NrQUkgTG9nb1wiIHdpZHRoPXs1MH0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWxpZ2h0IGZzLTIgdGV4dC1kYW5nZXJcIj5CT00gQ2hlY2sgQUk8L2Rpdj5cbiAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgZnMtNiB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdkYW5nZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3c9J25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPSdwaWxsJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm90b3R5cGVcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJvY2thaS5jb20vXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIG1hcmdpblJpZ2h0OiAnMXJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Jyb2NrYWkucG5nXCIgYWx0PVwiQnJvY2tBSSBMb2dvXCIgd2lkdGg9ezE1MH0gaGVpZ2h0PXsxMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxcmVtJyB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgPGEgaHJlZj1cIi9wcm90ZWN0ZWRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5Qcm90ZWN0ZWQ8L2E+fVxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xXCI+XG4gICAgICAgICAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXIgcHQtMiBwYi0yIHByLTQgcGwtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9JzJ4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmcy03Jz5TaWduJm5ic3A7SW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlciBwdC0yIHBiLTIgcHItNCBwbC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nM3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nbG9nb3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmcy00Jz5TaWduJm5ic3A7T3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBdXRoIiwiSWNvbiIsIkJhZGdlIiwiTmF2QmFyIiwibG9naW5XaXRoUmVkaXJlY3QiLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXRQYXJhbXMiLCJyZXR1cm5UbyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmF2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwic2hhZG93Iiwicm91bmRlZCIsInNpemUiLCJpY29uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/brockai/NavBar.tsx\n"));

/***/ })

});