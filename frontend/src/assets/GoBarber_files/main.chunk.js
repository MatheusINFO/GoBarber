(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/index */ "./src/routes/index.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/history */ "./src/services/history.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/global */ "./src/styles/global.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/App.js";










function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_7__["store"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
    persistor: _store__WEBPACK_IMPORTED_MODULE_7__["persistor"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Router"], {
    history: _services_history__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_global__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    autoClose: 3000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/logo-interna.svg":
/*!*************************************!*\
  !*** ./src/assets/logo-interna.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-interna.966bb60a.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5228e44e.svg";

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notifications */ "./src/components/Notifications/index.js");
/* harmony import */ var _assets_logo_interna_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/logo-interna.svg */ "./src/assets/logo-interna.svg");
/* harmony import */ var _assets_logo_interna_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_interna_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/components/Header/index.js";






const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_interna_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "GoBarber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "DASHBOARD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Profile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Matheus Andrade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Meu perfil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://api.adorable.io/avatars/50/abott@adorable.png",
    alt: "Matheus Andrade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.js ***!
  \*****************************************/
/*! exports provided: Container, Content, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    background: #fff;
    padding: 0 30px;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display: flex;
        align-items: center;

        img{
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        a{
            font-weight: bold;
            color: #7159c1;
        }
    }

    aside{
        display: flex;
        align-items: center;
    }
`;
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

    div{
        text-align: right;
        margin-right: 10px;

        strong{
            display: block;
            color: #333;
        }

        a{
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }


    img{
        height: 32px;
        border-radius: 50%;
    }
`;

/***/ }),

/***/ "./src/components/Notifications/index.js":
/*!***********************************************!*\
  !*** ./src/components/Notifications/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale/pt */ "./node_modules/date-fns/esm/locale/pt/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Notifications/styles.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/components/Notifications/index.js";







const Notifications = () => {
  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [notifications, setNotifications] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const hasUnread = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Boolean(notifications.find(notification => notification.read === false)), [notifications]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadNotifications() {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__["default"].get('/notifications');
      const data = response.data.map(notification => ({ ...notification,
        timeDistance: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["parseISO"])(notification.createdAt), new Date(), {
          locale: date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_3__["default"],
          addSuffix: true
        })
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  async function handleMarkAsRead(id) {
    await _services_api__WEBPACK_IMPORTED_MODULE_4__["default"].put(`/notifications/${id}`);
    setNotifications(notifications.map(notification => notification._id === id ? { ...notification,
      read: true
    } : notification));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    onClick: handleToggleVisible,
    hasUnread: hasUnread,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdNotifications"], {
    color: "#7159c1",
    size: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["NotificationList"], {
    visible: visible,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Scroll"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, notifications.map(notification => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Notification"], {
    key: notification._id,
    unread: !notification.read,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, notification.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, notification.timeDistance), !notification.read && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: () => handleMarkAsRead(notification._id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, "Marcar como lida"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/components/Notifications/styles.js":
/*!************************************************!*\
  !*** ./src/components/Notifications/styles.js ***!
  \************************************************/
/*! exports provided: Container, Badge, NotificationList, Scroll, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationList", function() { return NotificationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
`;
const Badge = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  background: none;
  border: 0;
  position: relative;
  ${props => props.hasUnread && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
const NotificationList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => props.visible ? 'block' : 'none'};
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;
const Scroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a)`
  max-height: 260px;
  padding: 5px 15px;
`;
const Notification = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${Object(polished__WEBPACK_IMPORTED_MODULE_2__["lighten"])(0.2, '#7159c1')};
  }
  ${props => props.unread && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/layouts/auth/index.js":
/*!***********************************!*\
  !*** ./src/layouts/auth/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/layouts/auth/styles.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/layouts/auth/index.js";




const AuthLayout = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Content"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, props.children));

AuthLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AuthLayout);

/***/ }),

/***/ "./src/layouts/auth/styles.js":
/*!************************************!*\
  !*** ./src/layouts/auth/styles.js ***!
  \************************************/
/*! exports provided: Wrapper, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 100%;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form{
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input{
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px 0;

            &::placeholder{
                color: rgba(255,255,255,0.7);
            }
        }

        span{
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button{
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover{
                background: ${Object(polished__WEBPACK_IMPORTED_MODULE_1__["darken"])(0.03, '#3b9eff')}
            }
        }

        a{
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover{
                opacity: 1;
            }
        }
    }


`;

/***/ }),

/***/ "./src/layouts/default/index.js":
/*!**************************************!*\
  !*** ./src/layouts/default/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/layouts/default/styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/layouts/default/index.js";





const DefaultLayout = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), props.children);

DefaultLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./src/layouts/default/styles.js":
/*!***************************************!*\
  !*** ./src/layouts/default/styles.js ***!
  \***************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 100%;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;

/***/ }),

/***/ "./src/pages/Dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/Dashboard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/pages/Dashboard/index.js";

 // import { Container } from './styles';

const Dashboard = () => {
  _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].get('/appointments');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Dashboard"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/pages/NotFound/styles.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/pages/NotFound/index.js";




const Default = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, "Hey, essa p\xE1gina n\xE3o existe :/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "Logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 21
  }
}, "voltar")));

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ }),

/***/ "./src/pages/NotFound/styles.js":
/*!**************************************!*\
  !*** ./src/pages/NotFound/styles.js ***!
  \**************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    h1{
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }

    img{
        position: absolute;
        opacity: 0.2;
        height: 500px;
        top: 5%;
        left: 50%;
    }

    a{
        cursor: pointer;

        button{
            font-weight: bold;
            font-size: 17px;
            padding: 10px;
            background: transparent;
            border: 0;
            color: #fff;
        }
    }
`;

/***/ }),

/***/ "./src/pages/Profile/index.js":
/*!************************************!*\
  !*** ./src/pages/Profile/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/pages/Profile/styles.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/pages/Profile/index.js";





const Profile = () => {
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user.profile);

  const handleSubmit = data => {};

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    initialData: profile,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "name",
    placeholder: "Nome completo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "email",
    type: "email",
    placeholder: "Seu endere\xE7o de e-mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "password",
    type: "oldPassword",
    placeholder: "Sua senha atual",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "password",
    type: "password",
    placeholder: "Nova senha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "password",
    type: "confirmPassword",
    placeholder: "Confirme sua senha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Atualizar perfil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Sair do GoBarber"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/pages/Profile/styles.js":
/*!*************************************!*\
  !*** ./src/pages/Profile/styles.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    max-width: 600px;
    margin: 50px auto;

    form{
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input{
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px 0;

            &::placeholder{
                color: rgba(255,255,255,0.7);
            }
        }

        span{
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        hr{
            border: 0;
            height: 1px;
            background: rgba(255,255,255,0.2);
            margin: 10px 0 20px;
        }

        button{
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover{
                background: ${Object(polished__WEBPACK_IMPORTED_MODULE_1__["darken"])(0.03, '#3b9eff')}
            }
        }

        a{
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover{
                opacity: 1;
            }
        }
    }

    /* Seleciono apenas o button dentro do container */
    > button{
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover{
            background: ${Object(polished__WEBPACK_IMPORTED_MODULE_1__["darken"])(0.08, '#f64c75')}
        }
    }
`;

/***/ }),

/***/ "./src/pages/SignIn/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignIn/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/modules/auth/actions */ "./src/store/modules/auth/actions.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/pages/SignIn/index.js";







const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('A senha é obrigatória')
});

const SignIn = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.loading);

  const handleSubmit = ({
    email,
    password
  }) => {
    dispatch(Object(_store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__["signInRequest"])(email, password));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "GoBarber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    schema: schema,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "email",
    type: "email",
    placeholder: "Seu e-mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    type: "password",
    placeholder: "Sua senha secreta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, loading ? 'Carregando...' : 'Acessar'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Criar conta")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/pages/SignUp/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignUp/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/modules/auth/actions */ "./src/store/modules/auth/actions.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/pages/SignUp/index.js";







const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('O nome é obrigatório'),
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória')
});

const SignUp = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleSubmit = ({
    name,
    email,
    password
  }) => {
    dispatch(Object(_store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_6__["signUpRequest"])(name, email, password));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "GoBarber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    schema: schema,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "name",
    type: "text",
    placeholder: "Nome completo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "email",
    type: "email",
    placeholder: "Seu e-mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    type: "password",
    placeholder: "Sua senha secreta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Acessar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "J\xE1 tenho login")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/routes.js");
/* harmony import */ var _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/SignIn */ "./src/pages/SignIn/index.js");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/SignUp */ "./src/pages/SignUp/index.js");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Dashboard */ "./src/pages/Dashboard/index.js");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Profile */ "./src/pages/Profile/index.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/NotFound */ "./src/pages/NotFound/index.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/routes/index.js";


 // with authentication


 // without authentication


 // not found page



const Routes = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
  exact: true,
  path: "/",
  component: _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "/register",
  component: _pages_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "/dashboard",
  component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
  isPrivate: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "/profile",
  component: _pages_Profile__WEBPACK_IMPORTED_MODULE_6__["default"],
  isPrivate: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "/",
  component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layouts_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/auth */ "./src/layouts/auth/index.js");
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/default */ "./src/layouts/default/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
var _jsxFileName = "/home/matheus/Documentos/Programa\xE7\xE3o/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/routes/routes.js";







const RouteWrapper = ({
  component: Component,
  isPrivate,
  ...rest
  /* todo o resto path, exact... */

}) => {
  const signed = _store__WEBPACK_IMPORTED_MODULE_5__["store"].getState().auth.signed;
  if (!signed && isPrivate) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 16
    }
  });
  if (signed && !isPrivate) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }
  });
  const Layout = signed ? _layouts_default__WEBPACK_IMPORTED_MODULE_4__["default"] : _layouts_auth__WEBPACK_IMPORTED_MODULE_3__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    /* dentro do props vem o history e tals */
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }));
}; // PropTypes


RouteWrapper.propTypes = {
  isPrivate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
RouteWrapper.defaultProps = {
  isPrivate: false
};
/* harmony default export */ __webpack_exports__["default"] = (RouteWrapper);

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3333'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/services/history.js":
/*!*********************************!*\
  !*** ./src/services/history.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./src/store/createStore.js":
/*!**********************************!*\
  !*** ./src/store/createStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

/* harmony default export */ __webpack_exports__["default"] = ((reducers, middlewares) => {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  const enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, enhancer);
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./src/store/createStore.js");
/* harmony import */ var _persistReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistReducers */ "./src/store/persistReducers.js");
/* harmony import */ var _modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/rootReducer */ "./src/store/modules/rootReducer.js");
/* harmony import */ var _modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rootSaga */ "./src/store/modules/rootSaga.js");






const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
const middlewares = [sagaMiddleware];
const store = Object(_createStore__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_persistReducers__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), middlewares);
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_0__["persistStore"])(store);
sagaMiddleware.run(_modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./src/store/modules/auth/actions.js":
/*!*******************************************!*\
  !*** ./src/store/modules/auth/actions.js ***!
  \*******************************************/
/*! exports provided: signInRequest, signInSucess, signUpRequest, signFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInRequest", function() { return signInRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInSucess", function() { return signInSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequest", function() { return signUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signFailure", function() { return signFailure; });
function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    }
  };
}
function signInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: {
      token,
      user
    }
  };
}
function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password
    }
  };
}
function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}

/***/ }),

/***/ "./src/store/modules/auth/reducers.js":
/*!********************************************!*\
  !*** ./src/store/modules/auth/reducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  teste: ''
};
function auth(state = INITIAL_STATE, action) {
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        {
          draft.loading = true;
          break;
        }

      case '@auth/SIGN_IN_SUCESS':
        {
          draft.token = action.payload.token;
          draft.signed = true;
          draft.loading = false;
          break;
        }

      case '@auth/SIGN_FAILURE':
        {
          draft.loading = false;
          break;
        }

      default:
        break;
    }
  });
}

/***/ }),

/***/ "./src/store/modules/auth/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/auth/sagas.js ***!
  \*****************************************/
/*! exports provided: signIn, signUp, setToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/history */ "./src/services/history.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/store/modules/auth/actions.js");





function* signIn({
  payload
}) {
  try {
    const {
      email,
      password
    } = payload;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post, '/sessions', {
      email,
      password
    });
    const {
      token,
      user
    } = response.data;

    if (!user.provider) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Usuário não é prestador!');
      return;
    }

    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers['Authorization'] = `Bearer ${token}`;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signInSucess"])(token, user));
    _services_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/dashboard');
  } catch (err) {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Falha na autenticação, verifique seus dados!');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signFailure"])());
  }
}
function* signUp({
  payload
}) {
  try {
    const {
      name,
      email,
      password
    } = payload;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post, 'users', {
      name,
      email,
      password,
      provider: true
    });
    _services_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/');
  } catch (err) {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Falha no cadastro, verifique seus dados!');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signFailure"])());
  }
}
function setToken({
  payload
}) {
  if (!payload) return;
  const {
    token
  } = payload.auth;

  if (token) {
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('persist/REHYDRATE', setToken), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('@auth/SIGN_IN_REQUEST', signIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('@auth/SIGN_UP_REQUEST', signUp)]));

/***/ }),

/***/ "./src/store/modules/rootReducer.js":
/*!******************************************!*\
  !*** ./src/store/modules/rootReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducers */ "./src/store/modules/auth/reducers.js");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/reducers */ "./src/store/modules/user/reducers.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/modules/rootSaga.js":
/*!***************************************!*\
  !*** ./src/store/modules/rootSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/sagas */ "./src/store/modules/auth/sagas.js");
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sagas */ "./src/store/modules/user/sagas.js");



function* rootSaga() {
  return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([_auth_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], _user_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]]);
}

/***/ }),

/***/ "./src/store/modules/user/reducers.js":
/*!********************************************!*\
  !*** ./src/store/modules/user/reducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

const INITIAL_STATE = {
  profile: null
};
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCESS':
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
        draft.profile = action.payload.user;
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/modules/user/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/user/sagas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([]));

/***/ }),

/***/ "./src/store/persistReducers.js":
/*!**************************************!*\
  !*** ./src/store/persistReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (reducer => {
  const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])({
    key: 'gobarber',
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default()),
    whitelist: ['auth', 'user']
  }, reducer);
  return persistedReducer;
});

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    *{
        margin: 0;
        outline: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 14px 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    button{
        cursor: pointer;
    }
`);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/matheus/Documentos/Programação/Rocketseat/Bootcamp 2019/GoBarber/frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/matheus/Documentos/Programação/Rocketseat/Bootcamp 2019/GoBarber/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/matheus/Documentos/Programação/Rocketseat/Bootcamp 2019/GoBarber/frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map