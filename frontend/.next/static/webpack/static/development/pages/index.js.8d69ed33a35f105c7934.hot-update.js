webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/lazarvasic/Projects/graphqlStart/frontend/components/Users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  query ALL_USERS_QUERY {\n    getUsers {\n      _id\n      firstname\n      lastname\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ALL_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var Users = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Users, _React$Component);

  var _super = _createSuper(Users);

  function Users() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, "Users page", __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: ALL_USERS_QUERY,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 33
          }
        }, "Loading...");
        if (error) return __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 31
          }
        }, "Error: ", error.message);
        return __jsx("div", {
          className: "user",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }
        }, __jsx("hr", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }
        }), data.getUsers.map(function (user) {
          return __jsx("div", {
            className: "user",
            key: user.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 19
            }
          }, __jsx("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 21
            }
          }, user.id), __jsx("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 21
            }
          }, user.firstname), __jsx("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 21
            }
          }, user.lastname), user.billingTransaction ? user.billingTransaction.payment : "", __jsx("hr", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }
          }));
        }));
      }));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

})
//# sourceMappingURL=index.js.8d69ed33a35f105c7934.hot-update.js.map