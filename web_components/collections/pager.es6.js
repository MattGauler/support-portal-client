/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppMode_1 = __webpack_require__(63);
exports.AppMode = AppMode_1.AppMode;
var AlertModel_1 = __webpack_require__(62);
exports.DefaultAlerts = AlertModel_1.DefaultAlerts;
var ConnectionStatus_1 = __webpack_require__(64);
exports.ConnectionStatus = ConnectionStatus_1.ConnectionStatus;
var DeviceType_1 = __webpack_require__(66);
exports.DeviceType = DeviceType_1.DeviceType;
var Icons_1 = __webpack_require__(14);
exports.Icons = Icons_1.Icons;
var ResponseStatus_1 = __webpack_require__(67);
exports.ResponseStatus = ResponseStatus_1.ResponseStatus;
var Contacts_1 = __webpack_require__(65);
exports.ContactResponseType = Contacts_1.ContactResponseType;
// tslint:disable no-any
var TimerDirection;
(function (TimerDirection) {
    TimerDirection[TimerDirection["Up"] = "Up"] = "Up";
    TimerDirection[TimerDirection["Down"] = "Down"] = "Down";
})(TimerDirection = exports.TimerDirection || (exports.TimerDirection = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CTComponent_1 = __webpack_require__(36);
exports.CTComponent = CTComponent_1.CTComponent;
var customProps_1 = __webpack_require__(37);
exports.Stroolean = customProps_1.Stroolean;
exports.NullableNumber = customProps_1.NullableNumber;
var prop_1 = __webpack_require__(38);
exports.prop = prop_1.prop;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
const base_1 = __webpack_require__(1);
const pagerLayer_1 = __webpack_require__(69);
const Events_1 = __webpack_require__(3);
class CTPGComponent extends base_1.CTComponent {
    constructor() {
        super(...arguments);
        this._connected = false;
    }
    get pagerLayer() {
        return this._pagerLayer;
    }
    // === Render lifecycle events === //
    get componentStyles() {
        return this.pagerComponentStyles;
    }
    componentMarkup() {
        if (!this._pagerLayer) {
            const parent = this._findParentCTPGComponent();
            if (parent) {
                this._pagerLayer = parent._pagerLayer;
                this._initializeForPagerLayer();
            }
            if (!this._connected)
                return null;
            if (!this._pagerLayer) {
                if (parent) {
                    // tslint:disable-next-line no-console
                    console.error(`Component <${this.localName}> child of <${parent.localName}> does not have an pager layer specified`);
                }
                else {
                    // tslint:disable-next-line no-console
                    console.error(`Component <${this.localName}> does not have an pager layer specified`);
                }
                // tslint:disable-next-line no-console
                console.log(this);
                return skate.h("em", { style: { display: "inline-block", fontSize: "12px", color: "#900", backgroundColor: "#FF0", padding: "3px 6px" } }, `${this.localName}:`, skate.h("br"), "IL NOT SPECIFIED");
            }
        }
        return this.pagerComponentMarkup();
    }
    // === Web component lifecycle events === //
    connectedCallback() {
        super.connectedCallback();
    }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        switch (name) {
            case "owner":
                if ((newVal !== oldVal) && (newVal !== "")) {
                    this.owner = newVal;
                    this._attemptConnectToPagerLayer();
                }
                break;
        }
    }
    // === Protected utility functions === //
    emitEvent(name, data, publicEvent = false) {
        if (this._pagerLayer) {
            this._pagerLayer.emit(name, data);
            // public events also get raised from this component to be handled by consumers of the component
            if (publicEvent) {
                // tslint:disable-next-line no-any
                this.dispatchEvent(new CustomEvent(name, { detail: data }));
            }
        }
        else {
            // tslint:disable-next-line no-console
            console.error(`Could not emit event from component <${this.localName}> - it does not have an incident layer specified`);
        }
    }
    addListener(name, callback) {
        if (this._pagerLayer) {
            this._pagerLayer.on(name, callback);
        }
        else {
            // tslint:disable-next-line no-console
            console.error(`Could not set event handler on component <${this.localName}> - it does not have an incident layer specified`);
        }
    }
    forceRedraw() {
        this._renderTrigger = new Date().getTime(); // need to update a property to trigger a re-render
    }
    launchModal(alertModel) {
        this._pagerLayer.emit(Events_1.PagerEvents.RaiseAlert, alertModel);
    }
    // === Private functions === //
    _attemptConnectToPagerLayer() {
        if (!this.owner)
            return;
        pagerLayer_1.PagerLayer.onReady(this.owner, () => this._connectToLayer());
    }
    _connectToLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connected)
                return;
            this._pagerLayer = pagerLayer_1.PagerLayer.getInstance(this.owner);
            if (!this._pagerLayer) {
                // tslint:disable-next-line no-console
                console.error(`Owner layer "${this.owner}" does not exist.`, this);
                return;
            }
            yield this._initializeForPagerLayer();
        });
    }
    _initializeForPagerLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialize.apply(this);
            this.setupListeners();
            this._connected = true;
            this.forceRedraw();
        });
    }
    _findParentCTPGComponent() {
        // tslint:disable-next-line no-any
        let parent = this;
        let finished = false;
        do {
            // tslint:disable-next-line no-any
            parent = (parent.parentNode || parent.host);
            if (!parent)
                finished = true;
            if (parent instanceof CTPGComponent)
                finished = true;
        } while (!finished);
        return parent || null;
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true, default: "" })
], CTPGComponent.prototype, "owner", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: false, default: 0 })
], CTPGComponent.prototype, "_renderTrigger", void 0);
exports.CTPGComponent = CTPGComponent;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseEventArgs_1 = __webpack_require__(8);
exports.BaseEventArgs = BaseEventArgs_1.BaseEventArgs;
var BasePageEventArgs_1 = __webpack_require__(51);
exports.BasePageEventArgs = BasePageEventArgs_1.BasePageEventArgs;
var CommsEventArgs_1 = __webpack_require__(52);
exports.CommsEventArgs = CommsEventArgs_1.CommsEventArgs;
var ReadPageDetailEventArgs_1 = __webpack_require__(53);
exports.ReadPageDetailEventArgs = ReadPageDetailEventArgs_1.ReadPageDetailEventArgs;
var SendNewPageEventArgs_1 = __webpack_require__(54);
exports.SendNewPageEventArgs = SendNewPageEventArgs_1.SendNewPageEventArgs;
var SendPageResponseEventArgs_1 = __webpack_require__(55);
exports.SendPageResponseEventArgs = SendPageResponseEventArgs_1.SendPageResponseEventArgs;
var UserActivityEventArgs_1 = __webpack_require__(56);
exports.UserActivityEventArgs = UserActivityEventArgs_1.UserActivityEventArgs;
/**
 * Enum representating all the possible events that the pager layer governs
 *
 * The <any> prefix is a TS hack because support for string based enums
 * isn't coming until TS version 2.4. Decided this was the best approach
 * because we can just remove the <any> declaration when this is supported.
 */
var PagerEvents;
(function (PagerEvents) {
    // // events which invoke actions
    PagerEvents[PagerEvents["_Request_SendNewPage"] = "request-send-new-page"] = "_Request_SendNewPage";
    PagerEvents[PagerEvents["_Request_ReadPageDetail"] = "request-read-page-detail"] = "_Request_ReadPageDetail";
    PagerEvents[PagerEvents["_Request_OpenClientReadModal"] = "request-open-client-read-modal"] = "_Request_OpenClientReadModal";
    PagerEvents[PagerEvents["_Request_OpenBroadcasterReadModal"] = "request-open-broadcaster-read-modal"] = "_Request_OpenBroadcasterReadModal";
    PagerEvents[PagerEvents["_Request_CheckForPendingPages"] = "request-check-for-pending-pages"] = "_Request_CheckForPendingPages";
    PagerEvents[PagerEvents["_Request_Logout"] = "request-logout"] = "_Request_Logout";
    PagerEvents[PagerEvents["RaiseAlert"] = "raise-alert"] = "RaiseAlert";
    PagerEvents[PagerEvents["UpdateAlertSupression"] = "update-alert-supression"] = "UpdateAlertSupression";
    PagerEvents[PagerEvents["StartTimer"] = "start-timer"] = "StartTimer";
    PagerEvents[PagerEvents["StopTimer"] = "stop-timer"] = "StopTimer";
    // // events to be handled
    PagerEvents[PagerEvents["ConnectionResult"] = "connection-result"] = "ConnectionResult";
    PagerEvents[PagerEvents["ConnectionStatusChange"] = "connection-status-change"] = "ConnectionStatusChange";
    PagerEvents[PagerEvents["NewPageReceived"] = "new-page-received"] = "NewPageReceived";
    PagerEvents[PagerEvents["PageUpdate"] = "page-update"] = "PageUpdate";
    PagerEvents[PagerEvents["PageResponse"] = "page-response"] = "PageResponse";
    PagerEvents[PagerEvents["TimerComplete"] = "timer-complete"] = "TimerComplete";
    PagerEvents[PagerEvents["RespondedToPage"] = "responded-to-page"] = "RespondedToPage";
    PagerEvents[PagerEvents["RespondedToAllPages"] = "responded-to-all-pages"] = "RespondedToAllPages";
    PagerEvents[PagerEvents["LogoutResult"] = "logout-result"] = "LogoutResult";
    PagerEvents[PagerEvents["UserActivity"] = "user-activity"] = "UserActivity";
})(PagerEvents = exports.PagerEvents || (exports.PagerEvents = {}));
// tslint:enable no-any


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function renderIf(condition, contents) {
    return renderIfElse(condition, contents, null);
}
exports.renderIf = renderIf;
function renderIfElse(condition, contents, elseContents) {
    return (condition)
        ? contents
        : elseContents;
}
exports.renderIfElse = renderIfElse;
// tslint:disable-next-line no-any
function buildStyles(definitions) {
    const element = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}
exports.buildStyles = buildStyles;
// Below has been nicely robbed from StackOverflow:
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
// Likwise, so has this:
// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
function decideTextColorFromBgColor(hex) {
    const rgb = hexToRgb(hex);
    if ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 186) {
        return "#000000";
    }
    else {
        return "#ffffff";
    }
}
exports.decideTextColorFromBgColor = decideTextColorFromBgColor;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const renderUtils = __webpack_require__(4);
class CTPGIcon extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-icon";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex}:host svg{margin:auto}:host([spin]) svg{animation:spin 1s infinite linear;transform-origin:50% 50%}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        `;
    }
    pagerComponentMarkup() {
        // not sure about this...
        // but this will get the font colour of the parent element
        // and apply this to the icon
        const styles = renderUtils.buildStyles({
            fill: this.color !== "rgb(0,0,0)"
                ? this.color
                : window.getComputedStyle(this.parentElement).color
        });
        return (window.__CTRender("svg", { width: this.width, height: this.height, viewBox: "0 0 1024 1024", style: styles }, this.icon.map((path, idx) => {
            return window.__CTRender("path", { d: path });
        })));
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGIcon.prototype, "width", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGIcon.prototype, "height", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true, default: "rgb(0,0,0)" })
], CTPGIcon.prototype, "color", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGIcon.prototype, "spin", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGIcon.prototype, "icon", void 0);
exports.CTPGIcon = CTPGIcon;
CTPGIcon.register();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Icons_1 = __webpack_require__(14);
const renderUtils_1 = __webpack_require__(4);
class CTPGButton extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        // === End properties === //
        this._rippleTimeout = null;
    }
    static get is() {
        return "ct-pg-button";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}@keyframes ripple{100%{transform:scale(2);opacity:0}}:host{cursor:pointer;display:block;position:relative}:host button{position:relative;background:transparent;color:#000;padding:10px 20px;border:2px solid transparent;font-size:16px;outline:none;cursor:pointer;overflow:hidden;width:100%;height:100%}:host button.primary{background-color:var(--button-primary-bg, #000);border:var(--button-primary-border, 1px solid black);color:var(--button-primary-text, #fff)}:host button.primary .ripple{background-color:var(--button-primary-ripple, #fff)}:host button.secondary{background-color:var(--button-secondary-bg, transparent);border:var(--button-secondary-border, 1px solid #9b9b9b);color:var(--button-secondary-text, #000)}:host button.secondary .ripple{background-color:var(--button-secondary-ripple, #000)}:host button.respond-yes{background:var(--button-respond-yes-bg, #fff);border:var(--button-respond-yes-border, 1px solid white);color:var(--button-respond-yes-text, #2c394e)}:host button.respond-yes .ripple{background-color:var(--button-respond-yes-ripple, #2c394e)}:host button.respond-no{background:var(--button-respond-no-bg, transparent);border:var(--button-respond-no-border, 1px solid white);color:var(--button-respond-no-text, #fff)}:host button.respond-no .ripple{background-color:var(--button-respond-no-ripple, #fff)}:host button.selected{background-color:var(--button-selected-bg, #fff);border:var(--button-selected-border, 1px solid white);color:var(--button-selected-text, #000)}:host button.selected .ripple{background-color:var(--button-selected-ripple, #000)}:host button.cancel{background-color:var(--button-cancel-bg, transparent);border:var(--button-cancel-border, 1px solid white);color:var(--button-cancel-text, #000)}:host button.cancel .ripple{background-color:var(--button-cancel-ripple, #000)}:host button.headerBack{background-color:#231f20;border:none;color:white}:host button.headerBack .ripple{background-color:white}:host button[disabled]{opacity:0.5;cursor:not-allowed}:host button .ripple{background-color:white;border-radius:50%;opacity:0.4;transform:scale(0.01);position:absolute;pointer-events:none}:host button .ripple.animate{animation:ripple 0.6s ease-out}
        `;
    }
    pagerComponentMarkup() {
        const cssClasses = [
            this.type
        ];
        if (this.selected) {
            cssClasses.push("selected");
        }
        if (this.isWaiting) {
            cssClasses.push("waiting");
        }
        return (window.__CTRender("button", { class: cssClasses.join(" "), disabled: this.isWaiting || this.disabled, onClick: e => this.handleButtonClick(e) },
            renderUtils_1.renderIf(this.icon.length > 0, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "18", height: "18", icon: this.icon })),
            renderUtils_1.renderIfElse(this.isWaiting, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "18", height: "18", spin: true, icon: Icons_1.Icons.FONTAWESOME.CircleNotch }), window.__CTRender("slot", null))));
    }
    // === Event handlers === //
    handleButtonClick(e) {
        if (!this.disabled) {
            this._ripple(e.offsetX, e.offsetY, e.target);
            if (typeof (this.onClick) === "function") {
                const clickEvent = Object.assign({}, e, { target: this });
                this.onClick(clickEvent);
            }
        }
    }
    // === Helper functions === //
    _ripple(clickX, clickY, button) {
        const previousRipple = button.querySelector(".ripple");
        if (previousRipple) {
            previousRipple.remove();
        }
        const width = button.clientWidth;
        const height = button.clientHeight;
        const size = Math.max(width, height);
        const x = clickX - (size / 2);
        const y = clickY - (size / 2);
        clearTimeout(this._rippleTimeout);
        this._rippleTimeout = setTimeout(() => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            button.insertBefore(ripple, button.firstChild);
            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
            ripple.classList.add("animate");
        }, 0);
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true, default: "primary" })
], CTPGButton.prototype, "type", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: false })
], CTPGButton.prototype, "selected", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: false })
], CTPGButton.prototype, "disabled", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: true, default: [] })
], CTPGButton.prototype, "icon", void 0);
__decorate([
    base_1.prop({ type: Function, attribute: true })
], CTPGButton.prototype, "onClick", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: false, default: false })
], CTPGButton.prototype, "isWaiting", void 0);
exports.CTPGButton = CTPGButton;
CTPGButton.register();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Moment = __webpack_require__(72);
function padLeft(value, length, char = " ") {
    let result = value;
    const lengthDiff = (length - value.length);
    if (lengthDiff > 0) {
        result = Array(lengthDiff + 1).join(char) + result;
    }
    return result;
}
exports.padLeft = padLeft;
/**
 * Generates a unique 6 character string
 */
function generateRandomSixString() {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}
exports.generateRandomSixString = generateRandomSixString;
function formatDate(date, format) {
    if (date === null || date === undefined)
        return "";
    return Moment(date).format(format);
}
exports.formatDate = formatDate;
function formatDateForTimeOrDate(date) {
    if (date === null || date === undefined)
        return "";
    const now = Moment().date();
    const then = Moment(date).date();
    if (now !== then) {
        return formatDate(date, "DD/MM/YYYY HH:mm");
    }
    else {
        return formatDate(date, "HH:mm");
    }
}
exports.formatDateForTimeOrDate = formatDateForTimeOrDate;
// tslint:disable-next-line: no-any
function deepCloneArray(array) {
    return array.map(x => {
        if (x instanceof Array)
            return deepCloneArray(x);
        else if (typeof (x) === "object")
            return Object.assign({}, x);
        else
            return x;
    });
}
exports.deepCloneArray = deepCloneArray;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseEventArgs {
    constructor() {
        this.eventDate = new Date().getTime();
    }
}
exports.BaseEventArgs = BaseEventArgs;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = skate;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseHandler {
    constructor(pagerLayer) {
        this.pagerLayer = pagerLayer;
    }
    // === Public functions to invoke the above implementations === //
    //     These allows us to introduce "before" and "after" hooks to all calls if we want to
    callCreateMessage(data) {
        return this.createMessage(data);
    }
    callHandleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleMessage(message);
        });
    }
    callHandleMessageReceipt(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleMessageReceipt(message);
        });
    }
    callHandleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleEvent(eventType, eventData);
        });
    }
}
exports.BaseHandler = BaseHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ConnectivityHandler_1 = __webpack_require__(57);
const ReadPageDetailHandler_1 = __webpack_require__(58);
const ReceiveNewPageHandler_1 = __webpack_require__(59);
const SendNewPageHandler_1 = __webpack_require__(60);
const SendPageResponseHandler_1 = __webpack_require__(61);
// tslint:disable no-any
var MessageType;
(function (MessageType) {
    MessageType[MessageType["NewPage"] = "newpage"] = "NewPage";
    MessageType[MessageType["PageResponse"] = "pageresponse"] = "PageResponse";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
function get(pagerLayer) {
    return [
        new ConnectivityHandler_1.ConnectivityHandler(pagerLayer),
        new ReadPageDetailHandler_1.ReadPageDetailHandler(pagerLayer),
        new ReceiveNewPageHandler_1.ReceiveNewPageHandler(pagerLayer),
        new SendNewPageHandler_1.SendNewPageHandler(pagerLayer),
        new SendPageResponseHandler_1.SendPageResponseHandler(pagerLayer)
    ];
}
exports.get = get;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const renderUtils_1 = __webpack_require__(4);
class CTPGOnlineIndicator extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.attemptCount = 0;
    }
    static get is() {
        return "ct-pg-online-indicator";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.status = this.pagerLayer.getConnectionStatus();
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.ConnectionStatusChange, (status) => {
            if (status !== Models_1.ConnectionStatus.Connected) {
                this.status = Models_1.ConnectionStatus.Connecting;
            }
            else
                this.status = status;
        });
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:block}:host .online-indicator{display:flex;align-items:center;color:var(--primary-font-color, #fff)}:host .online-indicator ct-pg-icon{flex:0 0;margin:0 10px 0 0}:host .online-indicator ct-pg-icon.offline{opacity:0.5}:host .online-indicator ct-pg-icon.connecting{margin:6px auto auto 10px}:host .online-indicator h6{font-size:20px;font-weight:400;margin:0;flex:1 1}:host .online-indicator h6 span{font-weight:600}
        `;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", { class: "online-indicator" },
            renderUtils_1.renderIf(this.showIcon, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "25", height: "20", icon: Models_1.Icons.FONTAWESOME.Wifi, class: this.status === Models_1.ConnectionStatus.Connected ? "online" : "offline" })),
            window.__CTRender("h6", null,
                "Status: ",
                window.__CTRender("span", null, this._getStatusLabel())),
            renderUtils_1.renderIf(this.status === Models_1.ConnectionStatus.Connecting, window.__CTRender(ct_pg_icon_1.CTPGIcon, { className: "connecting", width: "18", height: "18", icon: Models_1.Icons.FONTAWESOME.CircleNotch, spin: true }))));
    }
    // === Private functions === //
    _getStatusLabel() {
        switch (this.status) {
            case Models_1.ConnectionStatus.Connected:
                return "Online";
            case Models_1.ConnectionStatus.Connecting:
                return "Connecting";
            default:
                return "Offline";
        }
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true, default: Models_1.ConnectionStatus.Disconnected })
], CTPGOnlineIndicator.prototype, "status", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: true })
], CTPGOnlineIndicator.prototype, "showIcon", void 0);
exports.CTPGOnlineIndicator = CTPGOnlineIndicator;
CTPGOnlineIndicator.register();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const renderUtils_1 = __webpack_require__(4);
class CTPGTextbox extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-textbox";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    updateValue(e) {
        this.value = e.value;
        this.isValidated();
        this.callback({
            key: e.key,
            value: e.value,
            validated: this.validated
        });
    }
    clear() {
        let input;
        if (this.type !== "textarea") {
            input = this.shadowRoot.querySelector("input");
        }
        else {
            input = this.shadowRoot.querySelector("textarea");
        }
        input.value = "";
        input.focus();
        input.dispatchEvent(new Event("change"));
    }
    toggleFocus(focused) {
        focused ? this.shadowRoot.querySelector("div.input").classList.add("focus") : this.shadowRoot.querySelector("div.input").classList.remove("focus");
    }
    isValidated() {
        this.validated = this.value.length <= this.max;
    }
    get pagerComponentStyles() {
        return `:host label{color:#9b9b9b}:host div div.input{display:flex;flex-direction:row;margin:2% 0 1%;border-bottom:1px solid #9b9b9b}:host div div.input.focus{border-color:green}:host div div.input input,:host div div.input textarea{flex-basis:95%;flex-grow:1;padding:1%;font-size:1em;background-color:transparent;border:none;margin:auto;outline:none;resize:none;color:inherit}:host div div.input input:focus,:host div div.input textarea:focus{border:none;outline-offset:0}:host div div.input input:focus+ct-pg-icon,:host div div.input textarea:focus+ct-pg-icon{transition:all 0.25s ease-in;transform:rotate(180deg);opacity:0.5;cursor:pointer}:host div div.input ct-pg-icon{opacity:0;margin:auto;flex-basis:5%}:host div.disabled div.input{border-bottom:none}:host div .validation{margin-bottom:1%;color:red}:host([full-border]) div div.input{border:1px solid #9b9b9b}
        `;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", { className: this.disabled ? "disabled" : "" },
            renderUtils_1.renderIf(this.label !== undefined, window.__CTRender("label", { htmlFor: this.name }, this.label)),
            window.__CTRender("div", { className: "input" },
                renderUtils_1.renderIfElse(this.type !== "textarea", window.__CTRender("input", { type: this.type, placeholder: this.placeholder, name: this.name, onFocus: (e) => this.toggleFocus(true), onBlur: (e) => this.toggleFocus(false), onInput: (e) => this.updateValue({ key: e.target.name, value: e.target.value }), onkeydown: (e) => {
                        e.keyCode === 13 ? this.returnKeypress() : false;
                    }, value: this.value, disabled: this.disabled }), window.__CTRender("textarea", { placeholder: this.placeholder, name: this.name, onFocus: (e) => this.toggleFocus(true), onBlur: (e) => this.toggleFocus(false), onInput: (e) => this.updateValue({ key: e.target.name, value: e.target.value }), onkeydown: (e) => {
                        e.keyCode === 13 ? this.returnKeypress() : false;
                    }, value: this.value, disabled: this.disabled, rows: 5 })),
                renderUtils_1.renderIf(this.showClearOptions, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "20", height: "20", icon: Models_1.Icons.FONTAWESOME.Cross, onClick: (e) => this.clear() }))),
            renderUtils_1.renderIf(!this.validated, window.__CTRender("div", { className: "validation" },
                window.__CTRender("span", null,
                    "This field has a max length of ",
                    this.max,
                    ".")))));
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGTextbox.prototype, "placeholder", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGTextbox.prototype, "type", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGTextbox.prototype, "label", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGTextbox.prototype, "name", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: true })
], CTPGTextbox.prototype, "showClearOptions", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true })
], CTPGTextbox.prototype, "value", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGTextbox.prototype, "disabled", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGTextbox.prototype, "fullBorder", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: true, default: 4000 })
], CTPGTextbox.prototype, "max", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: true })
], CTPGTextbox.prototype, "validated", void 0);
exports.CTPGTextbox = CTPGTextbox;
CTPGTextbox.register();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Icons;
(function (Icons) {
    Icons.ICOMOON = {
        CheckBoxEmpty: [
            "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM896 896h-768v-768h768v768z"
        ],
        CheckBoxChecked: [
            "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
        ],
        CheckCircleFilled: [
            "M733.714 419.429q0-16-10.286-26.286l-52-51.429q-10.857-10.857-25.714-10.857t-25.714 10.857l-233.143 232.571-129.143-129.143q-10.857-10.857-25.714-10.857t-25.714 10.857l-52 51.429q-10.286 10.286-10.286 26.286 0 15.429 10.286 25.714l206.857 206.857q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l310.286-310.286q10.286-10.286 10.286-25.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        CrossCircleFilled: [
            "M656.571 641.143q0-14.857-10.857-25.714l-103.429-103.429 103.429-103.429q10.857-10.857 10.857-25.714 0-15.429-10.857-26.286l-51.429-51.429q-10.857-10.857-26.286-10.857-14.857 0-25.714 10.857l-103.429 103.429-103.429-103.429q-10.857-10.857-25.714-10.857-15.429 0-26.286 10.857l-51.429 51.429q-10.857 10.857-10.857 26.286 0 14.857 10.857 25.714l103.429 103.429-103.429 103.429q-10.857 10.857-10.857 25.714 0 15.429 10.857 26.286l51.429 51.429q10.857 10.857 26.286 10.857 14.857 0 25.714-10.857l103.429-103.429 103.429 103.429q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l51.429-51.429q10.857-10.857 10.857-26.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        ExclamationCircleFilled: [
            "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM576 832h-128v-128h128v128zM576 576h-128v-384h128v384z"
        ],
        QuestionCircleFilled: [
            "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 832c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM617.538 504.158c-39.112 24.57-57.538 38.114-57.538 56.092v32c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-33.618 12.964-63.854 38.532-89.87 18.864-19.194 41.778-33.59 63.936-47.512 45.564-28.624 65.532-43.978 65.532-70.868 0-29.252-16.88-48.788-31.042-60.026-22.734-18.040-54.328-27.974-88.958-27.974-52.534 0-99.792 35.082-114.924 85.314-7.648 25.382-34.422 39.758-59.806 32.114-25.382-7.648-39.76-34.422-32.114-59.806 13.112-43.52 40.398-82.63 76.832-110.124 37.71-28.456 82.668-43.498 130.012-43.498 56.208 0 108.994 17.322 148.63 48.776 43.444 34.474 67.37 82.496 67.37 135.224 0 82.76-63.846 122.872-110.462 152.158z"
        ]
    };
    Icons.FONTAWESOME = {
        BellFilled: [
            "M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
        ],
        CircleNotch: [
            "M1005.714 512c0 272.571-221.143 493.714-493.714 493.714s-493.714-221.143-493.714-493.714c0-248 182.857-453.143 420.571-488.571v130.286c-166.857 33.714-292.571 181.714-292.571 358.286 0 201.714 164 365.714 365.714 365.714s365.714-164 365.714-365.714c0-176.571-125.714-324.571-292.571-358.286v-130.286c237.714 35.429 420.571 240.571 420.571 488.571z"
        ],
        CheckBoxEmpty: [
            "M640 146.286h-475.429q-37.714 0-64.571 26.857t-26.857 64.571v475.429q0 37.714 26.857 64.571t64.571 26.857h475.429q37.714 0 64.571-26.857t26.857-64.571v-475.429q0-37.714-26.857-64.571t-64.571-26.857zM804.571 237.714v475.429q0 68-48.286 116.286t-116.286 48.286h-475.429q-68 0-116.286-48.286t-48.286-116.286v-475.429q0-68 48.286-116.286t116.286-48.286h475.429q68 0 116.286 48.286t48.286 116.286z"
        ],
        CheckBoxChecked: [
            "M391.429 742.286l350.857-350.857q10.857-10.857 10.857-25.714t-10.857-25.714l-58.286-58.286q-10.857-10.857-25.714-10.857t-25.714 10.857l-266.857 266.857-120.571-120.571q-10.857-10.857-25.714-10.857t-25.714 10.857l-58.286 58.286q-10.857 10.857-10.857 25.714t10.857 25.714l204.571 204.571q10.857 10.857 25.714 10.857t25.714-10.857zM877.714 237.714v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571q68 0 116.286 48.286t48.286 116.286z"
        ],
        CheckCircleFilled: [
            "M733.714 419.429q0-16-10.286-26.286l-52-51.429q-10.857-10.857-25.714-10.857t-25.714 10.857l-233.143 232.571-129.143-129.143q-10.857-10.857-25.714-10.857t-25.714 10.857l-52 51.429q-10.286 10.286-10.286 26.286 0 15.429 10.286 25.714l206.857 206.857q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l310.286-310.286q10.286-10.286 10.286-25.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        ChevonLeft: [
            "M669.143 172l-303.429 303.429 303.429 303.429q10.857 10.857 10.857 25.714t-10.857 25.714l-94.857 94.857q-10.857 10.857-25.714 10.857t-25.714-10.857l-424-424q-10.857-10.857-10.857-25.714t10.857-25.714l424-424q10.857-10.857 25.714-10.857t25.714 10.857l94.857 94.857q10.857 10.857 10.857 25.714t-10.857 25.714z"
        ],
        Cross: [
            "M741.714 755.429q0 22.857-16 38.857l-77.714 77.714q-16 16-38.857 16t-38.857-16l-168-168-168 168q-16 16-38.857 16t-38.857-16l-77.714-77.714q-16-16-16-38.857t16-38.857l168-168-168-168q-16-16-16-38.857t16-38.857l77.714-77.714q16-16 38.857-16t38.857 16l168 168 168-168q16-16 38.857-16t38.857 16l77.714 77.714q16 16 16 38.857t-16 38.857l-168 168 168 168q16 16 16 38.857z"
        ],
        CrossCircleFilled: [
            "M656.571 641.143q0-14.857-10.857-25.714l-103.429-103.429 103.429-103.429q10.857-10.857 10.857-25.714 0-15.429-10.857-26.286l-51.429-51.429q-10.857-10.857-26.286-10.857-14.857 0-25.714 10.857l-103.429 103.429-103.429-103.429q-10.857-10.857-25.714-10.857-15.429 0-26.286 10.857l-51.429 51.429q-10.857 10.857-10.857 26.286 0 14.857 10.857 25.714l103.429 103.429-103.429 103.429q-10.857 10.857-10.857 25.714 0 15.429 10.857 26.286l51.429 51.429q10.857 10.857 26.286 10.857 14.857 0 25.714-10.857l103.429-103.429 103.429 103.429q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l51.429-51.429q10.857-10.857 10.857-26.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        Ellipsis: [
            "M219.429 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857zM512 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857zM804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857z"
        ],
        ExclamationCircleFilled: [
            "M438.857 73.143q119.429 0 220.286 58.857t159.714 159.714 58.857 220.286-58.857 220.286-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857zM512 785.714v-108.571q0-8-5.143-13.429t-12.571-5.429h-109.714q-7.429 0-13.143 5.714t-5.714 13.143v108.571q0 7.429 5.714 13.143t13.143 5.714h109.714q7.429 0 12.571-5.429t5.143-13.429zM510.857 589.143l10.286-354.857q0-6.857-5.714-10.286-5.714-4.571-13.714-4.571h-125.714q-8 0-13.714 4.571-5.714 3.429-5.714 10.286l9.714 354.857q0 5.714 5.714 10t13.714 4.286h105.714q8 0 13.429-4.286t6-10z"
        ],
        InfoCircleFilled: [
            "M585.143 786.286v-91.429c0-10.286-8-18.286-18.286-18.286h-54.857v-292.571c0-10.286-8-18.286-18.286-18.286h-182.857c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h54.857v182.857h-54.857c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h256c10.286 0 18.286-8 18.286-18.286zM512 274.286v-91.429c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
        ],
        Paperclip: [
            "M802.286 791.429q0 66.857-45.143 112t-112 45.143q-77.143 0-134.286-57.143l-444-443.429q-64.571-65.714-64.571-154.857 0-90.857 62.857-154.286t153.714-63.429q90.286 0 156 64.571l345.714 346.286q5.714 5.714 5.714 12.571 0 9.143-17.429 26.571t-26.571 17.429q-7.429 0-13.143-5.714l-346.286-346.857q-45.143-44-103.429-44-60.571 0-102.286 42.857t-41.714 103.429q0 60 43.429 103.429l443.429 444q36 36 82.857 36 36.571 0 60.571-24t24-60.571q0-46.857-36-82.857l-332-332q-14.857-13.714-34.286-13.714-16.571 0-27.429 10.857t-10.857 27.429q0 18.286 14.286 33.714l234.286 234.286q5.714 5.714 5.714 12.571 0 9.143-17.714 26.857t-26.857 17.714q-6.857 0-12.571-5.714l-234.286-234.286q-36-34.857-36-85.143 0-46.857 32.571-79.429t79.429-32.571q50.286 0 85.143 36l332 332q57.143 56 57.143 134.286z"
        ],
        PlusSign: [
            "M804.571 420.571v109.714q0 22.857-16 38.857t-38.857 16h-237.714v237.714q0 22.857-16 38.857t-38.857 16h-109.714q-22.857 0-38.857-16t-16-38.857v-237.714h-237.714q-22.857 0-38.857-16t-16-38.857v-109.714q0-22.857 16-38.857t38.857-16h237.714v-237.714q0-22.857 16-38.857t38.857-16h109.714q22.857 0 38.857 16t16 38.857v237.714h237.714q22.857 0 38.857 16t16 38.857z"
        ],
        QuestionCircleFilled: [
            "M512 786.286v-109.714q0-8-5.143-13.143t-13.143-5.143h-109.714q-8 0-13.143 5.143t-5.143 13.143v109.714q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143zM658.286 402.286q0-50.286-31.714-93.143t-79.143-66.286-97.143-23.429q-138.857 0-212 121.714-8.571 13.714 4.571 24l75.429 57.143q4 3.429 10.857 3.429 9.143 0 14.286-6.857 30.286-38.857 49.143-52.571 19.429-13.714 49.143-13.714 27.429 0 48.857 14.857t21.429 33.714q0 21.714-11.429 34.857t-38.857 25.714q-36 16-66 49.429t-30 71.714v20.571q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143q0-10.857 12.286-28.286t31.143-28.286q18.286-10.286 28-16.286t26.286-20 25.429-27.429 16-34.571 7.143-46.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        UserIconEmpty: [
            "M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"
        ],
        WarningTriangle: [
            "M585.143 785.714v-108.571c0-10.286-8-18.857-18.286-18.857h-109.714c-10.286 0-18.286 8.571-18.286 18.857v108.571c0 10.286 8 18.857 18.286 18.857h109.714c10.286 0 18.286-8.571 18.286-18.857zM584 572l10.286-262.286c0-3.429-1.714-8-5.714-10.857-3.429-2.857-8.571-6.286-13.714-6.286h-125.714c-5.143 0-10.286 3.429-13.714 6.286-4 2.857-5.714 8.571-5.714 12l9.714 261.143c0 7.429 8.571 13.143 19.429 13.143h105.714c10.286 0 18.857-5.714 19.429-13.143zM576 38.286l438.857 804.571c12.571 22.286 12 49.714-1.143 72s-37.143 36-62.857 36h-877.714c-25.714 0-49.714-13.714-62.857-36s-13.714-49.714-1.143-72l438.857-804.571c12.571-23.429 37.143-38.286 64-38.286s51.429 14.857 64 38.286z"
        ],
        Wifi: [
            "M585.143 870.286c-14.857 0-94.857-80-94.857-95.429 0-28 73.143-43.429 94.857-43.429s94.857 15.429 94.857 43.429c0 15.429-80 95.429-94.857 95.429zM739.429 715.429c-8 0-70.286-57.143-154.286-57.143-84.571 0-145.714 57.143-154.286 57.143-13.714 0-96.571-82.286-96.571-96 0-5.143 2.286-9.714 5.714-13.143 61.143-60.571 160.571-94.286 245.143-94.286s184 33.714 245.143 94.286c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96.571 96zM895.429 560c-4.571 0-9.714-2.286-13.143-4.571-94.286-73.143-173.714-116.571-297.143-116.571-172.571 0-304 121.143-310.286 121.143-13.143 0-95.429-82.286-95.429-96 0-4.571 2.286-9.143 5.714-12.571 102.286-102.286 256.571-158.857 400-158.857s297.714 56.571 400 158.857c3.429 3.429 5.714 8 5.714 12.571 0 13.714-82.286 96-95.429 96zM1050.286 405.143c-4.571 0-9.143-2.286-12.571-5.143-132-116-274.286-180.571-452.571-180.571s-320.571 64.571-452.571 180.571c-3.429 2.857-8 5.143-12.571 5.143-13.143 0-96-82.286-96-96 0-5.143 2.286-9.714 5.714-13.143 144.571-143.429 353.143-222.857 555.429-222.857s410.857 79.429 555.429 222.857c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96 96z"
        ]
    };
})(Icons = exports.Icons || (exports.Icons = {}));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const ct_pg_button_1 = __webpack_require__(6);
class CTPGAlertModal extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-alert-modal";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:none;width:100%;height:100%;flex-direction:column;background-color:var(--modal-bg, #fff)}:host div{overflow:hidden}:host div.remaining{position:absolute;width:35px;height:35px;background-color:red;border-radius:50%;text-align:center;line-height:35px;color:white;right:-5%;top:-5%}:host div.error .title{background-color:var(--alert-error-bg, #c80031);color:var(--alert-error-text, #fff)}:host div.info .title{background-color:var(--alert-info-bg, #15233b);color:var(--alert-info-text, #fff)}:host div.question .title{background-color:var(--alert-question-bg, #15233b);color:var(--alert-question-text, #fff)}:host div.success .title{background-color:var(--alert-success-bg, #bcdf90);color:var(--alert-success-text, #fff)}:host div .title{padding:10px}:host div .title h4{display:flex;justify-content:center;font-size:18px;margin:0 auto}:host div .title h4 ct-pg-icon{margin:0 5px 0 0}:host div .title h4,:host div .body p{text-align:center}:host div .body p{padding:10px 10px 0;font-size:14px}:host div .buttons{padding:10px 10px 0 10px;display:flex;flex-wrap:wrap}:host div .buttons ct-pg-button{font-size:14px;border:none;padding:0 10px 10px 0;width:100%;flex-basis:50%;flex-grow:1}:host div .buttons ct-pg-button:last-child{padding:0 0 10px 0}:host div .buttons ct-pg-button.overflex{flex-basis:75%;padding:0 10px 10px 10px}:host div .buttons ct-pg-button.overflex:last-child{padding:0 10px 10px 10px}:host([showing]){display:flex;z-index:10}:host([stacked]){display:flex;position:absolute;bottom:5px;right:5px;z-index:1;background-color:#D3D3D3;border:1px solid black}
        `;
    }
    pagerComponentMarkup() {
        const offset = (this.positionInStack * 5);
        this.style.right = `${offset}px`;
        this.style.bottom = `${offset}px`;
        this.style.zIndex = `${this.remaining - this.positionInStack}`;
        if (this.positionInStack === 0)
            this.showing = true;
        else
            this.stacked = true;
        return (window.__CTRender("div", { className: this.type },
            this.remaining > 1 && this.showing ? window.__CTRender("div", { className: "remaining" }, this.remaining) : null,
            window.__CTRender("div", { className: "title" },
                window.__CTRender("h4", null,
                    window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "15", height: "15", icon: this.icon }),
                    this.title)),
            window.__CTRender("div", { className: "body" },
                window.__CTRender("p", null, this.body)),
            window.__CTRender("div", { className: "buttons" }, this.buttons.map((btn, idx) => {
                return (window.__CTRender(ct_pg_button_1.CTPGButton, { type: btn.type, className: `${this.buttons.length > 2 ? "overflex" : ""} ${this.buttons.length === 2 && idx === 0 ? "right-border" : ""}`, onClick: (e) => {
                        btn.action(e.target.textContent);
                    } }, btn.text));
            }))));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGAlertModal.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: false, default: 0 })
], CTPGAlertModal.prototype, "raisedOn", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: false, default: 0 })
], CTPGAlertModal.prototype, "priority", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false, default: "info" })
], CTPGAlertModal.prototype, "type", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false })
], CTPGAlertModal.prototype, "icon", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false, default: "" })
], CTPGAlertModal.prototype, "title", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false, default: "" })
], CTPGAlertModal.prototype, "body", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGAlertModal.prototype, "buttons", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: false, default: 0 })
], CTPGAlertModal.prototype, "remaining", void 0);
__decorate([
    base_1.prop({ type: Number, attribute: false, default: 0 })
], CTPGAlertModal.prototype, "positionInStack", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGAlertModal.prototype, "stacked", void 0);
exports.CTPGAlertModal = CTPGAlertModal;
CTPGAlertModal.register();


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const ct_pg_button_1 = __webpack_require__(6);
const renderUtils_1 = __webpack_require__(4);
const utils_1 = __webpack_require__(7);
var TabNames;
(function (TabNames) {
    // tslint:disable no-any
    TabNames[TabNames["Individuals"] = "individuals"] = "Individuals";
    TabNames[TabNames["Groups"] = "groups"] = "Groups";
    // tslint:enable no-any
})(TabNames || (TabNames = {}));
class CTPGContactSelection extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.tabSelected = TabNames.Individuals;
    }
    static get is() {
        return "ct-pg-contact-selection";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    setupListeners() { }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        if (name === "showing") {
            this.tabSelected = TabNames.Individuals;
            this.contacts = this.pagerLayer.getAllContacts();
            this.individualContacts = this._getContactIndividuals();
            this.individualContacts.map((contact) => {
                const selected = this.selectedContacts.find(x => x.jid === contact.jid);
                if (selected)
                    contact.selected = true;
                else
                    contact.selected = false;
                return contact;
            });
        }
    }
    close() {
        this.showing = false;
        this.resetContactSelections();
        if (this.closeFunction)
            this.closeFunction();
    }
    selectTab(name) {
        this.tabSelected = name;
    }
    toggleContactSelection(nameOrId, isGroup = false) {
        if (!isGroup) {
            const contact = this.individualContacts.find(x => x.jid === nameOrId);
            contact.selected = !contact.selected;
        }
        else {
            const group = this.contacts.find(x => x.id === nameOrId);
            group.selected = !group.selected;
            group.contacts.map(contact => {
                contact.selected = group.selected;
                this.contacts.map(group => {
                    group.contacts.map(other => {
                        if (other.jid === contact.jid) {
                            other.selected = contact.selected;
                        }
                    });
                });
            });
        }
        this.forceRedraw();
    }
    resetContactSelections() {
        this.contacts.map((group) => {
            group.selected = false;
            group.contacts.map((contact) => contact.selected = false);
        });
    }
    confirmSelectedContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedContacts = [];
            this.contacts.map((group) => {
                group.contacts.map((contact) => {
                    if (contact.selected) {
                        const existing = selectedContacts.find(x => x.jid === contact.jid);
                        if (!existing) {
                            selectedContacts.push(contact);
                        }
                    }
                });
            });
            this.selectedContacts = utils_1.deepCloneArray(selectedContacts);
            yield this.pagerLayer.setSelectedContacts(this.selectedContacts);
            this.close();
        });
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.6);opacity:0;visibility:hidden;position:fixed;z-index:2}:host .container{display:flex;flex-direction:column;margin:auto;width:50vw;height:90vh;min-width:500px;background-color:var(--modal-bg, #fff);transform:translateY(100%);will-change:transform;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);visibility:hidden}:host .container .title{display:flex;justify-content:flex-end;flex:0 0 var(--header-height, 60px);background-color:var(--primary-color, #15233b);color:var(--primary-font-color, #fff);padding:10px 0 10px 20px}:host .container .title h2{position:absolute;left:50%;top:0;transform:translateX(-50%)}:host .container .tabs{display:flex;flex:0 0 var(--header-height, 60px);background-color:var(--primary-color, #15233b);color:var(--primary-font-color, #fff)}:host .container .tabs .tab{flex-basis:50%;display:flex;cursor:pointer}:host .container .tabs .tab.selected{background-color:white;color:var(--primary-color, #15233b)}:host .container .tabs .tab h4{margin:auto}:host .container .contacts{overflow:auto}:host .container .contacts div.inner{display:flex;flex-direction:column;width:100%}:host .container .contacts div.inner div.row{width:100%;padding:15px 30px;margin:auto;border-bottom:2px solid #eee;cursor:pointer;display:flex;justify-content:space-between}:host .container .contacts div.inner div.row:hover{background-color:#f2f2f2}:host .container .buttonsContainer{display:flex;flex:0 0 10vh;margin-top:auto;width:100%;background-color:#eee;justify-content:flex-end}:host .container .buttonsContainer div{width:50%;margin:auto}:host([showing]){visibility:visible;transition:opacity 0.25s ease-in;opacity:1}:host([showing]) div.container{visibility:visible;transform:translateY(0)}
        `;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: "title" },
                window.__CTRender("h2", null, "To:"),
                window.__CTRender(ct_pg_button_1.CTPGButton, { type: "secondary", icon: Models_1.Icons.FONTAWESOME.Cross, onClick: () => this.close() })),
            window.__CTRender("div", { className: "tabs" },
                window.__CTRender("div", { className: `tab ${this.tabSelected === TabNames.Individuals ? "selected" : ""}`, onClick: (e) => this.selectTab(TabNames.Individuals) },
                    window.__CTRender("h4", null, "Individuals")),
                window.__CTRender("div", { className: `tab ${this.tabSelected === TabNames.Groups ? "selected" : ""}`, onClick: (e) => this.selectTab(TabNames.Groups) },
                    window.__CTRender("h4", null, "Groups"))),
            window.__CTRender("div", { className: "contacts" }, this._renderContactsList()),
            window.__CTRender("div", { className: "buttonsContainer" },
                window.__CTRender("div", null,
                    window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", onClick: () => this.confirmSelectedContacts() }, "Done")))));
    }
    _renderContactsList() {
        return renderUtils_1.renderIfElse(this.tabSelected === TabNames.Individuals, window.__CTRender("div", { className: "inner" }, this._getContactIndividuals().map((item) => this._renderContactRow(item.jid, item.displayName, item.selected))), window.__CTRender("div", { className: "inner" },
            " ",
            this._getContactGroups().map((item) => this._renderContactRow(item.id, item.name, item.selected, true))));
    }
    _renderContactRow(jidOrId, display, selected, group = false) {
        return (window.__CTRender("div", { className: `row ${selected ? "selected" : ""}`, onClick: (e) => this.toggleContactSelection(jidOrId, group) },
            display,
            renderUtils_1.renderIf(selected, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "18", height: "18", icon: Models_1.Icons.FONTAWESOME.CheckCircleFilled, color: "#15233B" }))));
    }
    _getContactIndividuals() {
        const contacts = [];
        this.contacts.map((group) => {
            group.contacts.map(contact => {
                const existing = contacts.find(x => x.jid === contact.jid);
                if (!existing) {
                    contacts.push(contact);
                }
            });
        });
        return contacts;
    }
    _getContactGroups() {
        return this.contacts;
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGContactSelection.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGContactSelection.prototype, "contacts", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false })
], CTPGContactSelection.prototype, "selectedContacts", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false })
], CTPGContactSelection.prototype, "tabSelected", void 0);
exports.CTPGContactSelection = CTPGContactSelection;
CTPGContactSelection.register();


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const Icons_1 = __webpack_require__(14);
const Models_1 = __webpack_require__(0);
const ct_pg_button_1 = __webpack_require__(6);
class CTPGFilePicker extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.btnClick = () => {
            this.filePicker.click();
        };
        this.onChange = (e) => {
            const input = e.target;
            this.callback(input.files);
            this.filePicker.value = null;
        };
    }
    static get is() {
        return "ct-pg-file-picker";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Add some actual logic to work out device types
            this.deviceType = Models_1.DeviceType.Electron;
            if (this.deviceType === Models_1.DeviceType.Electron) {
                this.filePicker = document.createElement("input");
                this.filePicker.type = "file";
                this.filePicker.multiple = false;
                this.filePicker.accept = this.fileTypes;
                this.filePicker.onchange = this.onChange;
            }
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return ``;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", null,
            window.__CTRender(ct_pg_button_1.CTPGButton, { icon: Icons_1.Icons.FONTAWESOME.PlusSign, onClick: this.btnClick })));
    }
}
__decorate([
    base_1.prop({ type: String, attribute: true, default: ".jpg,.jpeg,.png" })
], CTPGFilePicker.prototype, "fileTypes", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false, default: Models_1.DeviceType.Electron })
], CTPGFilePicker.prototype, "deviceType", void 0);
__decorate([
    base_1.prop({ type: Function, attribute: false })
], CTPGFilePicker.prototype, "callback", void 0);
exports.CTPGFilePicker = CTPGFilePicker;
CTPGFilePicker.register();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_button_1 = __webpack_require__(6);
const renderUtils_1 = __webpack_require__(4);
class CTPGSelectionList extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-selection-list";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:block;width:100%}:host .selection-list{display:flex;flex-direction:row;flex-wrap:wrap}:host .selection-list .dropdown-contanier{flex:1 1 100%}:host .selection-list .dropdown-contanier select{width:100%;height:30px;background-color:transparent;color:#000;font-size:14px;border-radius:0;border:0;outline:1px solid #9b9b9b}:host .selection-list .button-container{position:relative;flex:0 1 50%}:host .selection-list .button-container:nth-child(2n-1){padding:10px 5px 0 0}:host .selection-list .button-container:nth-child(2n-2){padding:10px 0 0 5px}:host .selection-list .button-container:nth-child(1),:host .selection-list .button-container:nth-child(2){padding-top:0}:host .selection-list.button-list{display:block}:host .selection-list.button-list .button-container{display:block;padding:0 0 1px 0}:host .selection-list.button-list .button-container:last-child{padding:0}
        `;
    }
    pagerComponentMarkup() {
        const maxButtonOptions = 4;
        const showAsButtons = this.forceDropdown ? false : (this.buttonList || (this.options.length <= maxButtonOptions));
        const cssClasses = [
            "selection-list"
        ];
        if (this.buttonList) {
            cssClasses.push("button-list");
        }
        return (window.__CTRender("div", { class: cssClasses.join(" ") }, renderUtils_1.renderIfElse(showAsButtons, this._renderButtons(), this._renderDropDown())));
    }
    _renderDropDown() {
        return (window.__CTRender("div", { class: "dropdown-contanier" },
            window.__CTRender("select", { onChange: e => this._onMakeSelection(e), value: this.selected.toString() }, this.options.map(opt => (window.__CTRender("option", { "data-key": opt.key, value: opt.key.toString(), defaultSelected: this.selected === opt.key }, opt.value))))));
    }
    _renderButtons() {
        return this.options.map(opt => (window.__CTRender("div", { class: "button-container" },
            window.__CTRender(ct_pg_button_1.CTPGButton, { "data-key": opt.key, type: "secondary", selected: this.selected === opt.key, onClick: e => this._onMakeSelection(e) }, opt.value))));
    }
    // === Event handlers === //
    _onMakeSelection(e) {
        const target = e.target;
        if (!target)
            return;
        let selection = null;
        switch (target.nodeName) {
            case "CT-PG_BUTTON":
                selection = parseInt(target.getAttribute("data-key"));
                break;
            case "SELECT":
                selection = parseInt(target.value);
                break;
        }
        if (isNaN(selection))
            return;
        const selectedOption = this.options.find(x => x.key === selection);
        if (!selectedOption)
            return;
        this._makeSelection(selectedOption.key.toString());
        this.selected = selectedOption.key;
    }
    // === Private functions === //
    _makeSelection(selection) {
        if (typeof (this.onSelect) === "function") {
            this.onSelect(selection);
        }
    }
}
__decorate([
    base_1.prop({ type: Number, attribute: true, default: Number.MIN_VALUE })
], CTPGSelectionList.prototype, "selected", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: false })
], CTPGSelectionList.prototype, "buttonList", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGSelectionList.prototype, "forceDropdown", void 0);
__decorate([
    base_1.prop({ type: Function, attribute: true })
], CTPGSelectionList.prototype, "onSelect", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGSelectionList.prototype, "options", void 0);
exports.CTPGSelectionList = CTPGSelectionList;
CTPGSelectionList.register();


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppMode_1 = __webpack_require__(44);
exports.AppMode = AppMode_1.AppMode;
var AlertModel_1 = __webpack_require__(43);
exports.DefaultAlerts = AlertModel_1.DefaultAlerts;
var ConnectionStatus_1 = __webpack_require__(45);
exports.ConnectionStatus = ConnectionStatus_1.ConnectionStatus;
var IncidentStatus_1 = __webpack_require__(47);
exports.IncidentStatus = IncidentStatus_1.IncidentStatus;
var ResponseStatus_1 = __webpack_require__(48);
exports.ResponseStatus = ResponseStatus_1.ResponseStatus;
var RoomRole_1 = __webpack_require__(49);
exports.RoomRole = RoomRole_1.RoomRole;
var Icons_1 = __webpack_require__(46);
exports.Icons = Icons_1.Icons;
// tslint:disable no-any
var TimerDirection;
(function (TimerDirection) {
    TimerDirection[TimerDirection["Up"] = "Up"] = "Up";
    TimerDirection[TimerDirection["Down"] = "Down"] = "Down";
})(TimerDirection = exports.TimerDirection || (exports.TimerDirection = {}));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Models_1 = __webpack_require__(0);
const Handlers_1 = __webpack_require__(11);
const INCIDENT_RESPONSE_STATUS_ORDER = [
    Models_1.ResponseStatus.NotReceivedNotification,
    Models_1.ResponseStatus.Received,
    Models_1.ResponseStatus.Displayed,
    Models_1.ResponseStatus.Acknowledged,
    Models_1.ResponseStatus.Unable,
    Models_1.ResponseStatus.Attending
];
function getMessageType(data) {
    const messageKeys = Object.keys(data);
    if (messageKeys.length > 0) {
        const validMessageTypes = Object.values(Handlers_1.MessageType).filter((x, idx) => idx % 2 === 0);
        // tslint:disable-next-line no-any
        return messageKeys.find(x => validMessageTypes.includes(x));
    }
    else {
        return null;
    }
}
exports.getMessageType = getMessageType;
function getResponse(contact, type) {
    const res = contact.responses.find(x => x.type === type);
    return res || null;
}
exports.getResponse = getResponse;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(73);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70), __webpack_require__(71)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_alert_modal_1 = __webpack_require__(15);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
class CTPGAlertModalManager extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-alert-modal-manager";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.RaiseAlert, (e) => this.raiseAlert(e));
        this.addListener(Events_1.PagerEvents.UpdateAlertSupression, (e) => this.updateSupression(e));
    }
    /**
     * Raise any type of alert from the supplied model
     *
     * @param {AlertModel} newAlert - an object representing the alert to raise
     */
    raiseAlert(newAlert) {
        if (newAlert) {
            if (newAlert.buttons) {
                for (const b of newAlert.buttons) {
                    if (!b.action) {
                        b.action = () => this.dismissAlert();
                    }
                    else {
                        const buttonAction = b.action.bind(this);
                        b.action = (e) => {
                            buttonAction(e);
                            this.dismissAlert();
                        };
                    }
                }
            }
            this.alerts = [...this.alerts, newAlert];
            this.alertsToShow = (this.suppressAlerts === false);
        }
    }
    /**
     * Raise an error alert which by default dismisses
     *
     * @param {string} title - Alert title
     * @param {string} body - Alert message body
     * @param {BtnCallbackContainer} actions - Object containing callback functions mapping to okay button
     */
    raiseErrorAlert(title, body, actions = {}) {
        const newAlert = Models_1.DefaultAlerts.AlertErrorWithOkayButton(title, body, 1, actions);
        this.raiseAlert(newAlert);
    }
    /**
     * Raise a Yes / No alert where both options by default dismisses
     *
     * @param {string} title - Alert title
     * @param {string} body - Alert message body
     * @param {BtnCallbackContainer} actions - Object containing callback functions mapping to yes and no buttons
     */
    raiseYesNoAlert(title, body, actions = {}) {
        const newAlert = Models_1.DefaultAlerts.AlertYesNoQuestion(title, body, 0, actions);
        this.raiseAlert(newAlert);
    }
    /**
     * Basic function that dismisses the currently displayed alert
     */
    dismissAlert() {
        this.alerts.splice(0, 1);
        if (this.alerts.length === 0)
            this.alertsToShow = false;
        else {
            this.alerts = this.alerts.map((alert, idx) => {
                alert.remaining = this.alerts.length;
                return alert;
            });
        }
    }
    /**
     * Toggles supression of alerts on or off
     *
     * @param {boolean} supress - Supress alerts with true or not with false
     */
    updateSupression(supress) {
        this.suppressAlerts = supress;
        if (this.alerts.length > 0) {
            this.alertsToShow = true;
        }
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:none;width:100%;height:100%;background-color:rgba(0,0,0,0.6);position:fixed;top:0}:host .alerts{display:flex;width:60%;margin:auto;position:relative}:host([alerts-to-show]){display:flex}
        `;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", { class: "alerts" }, this.alerts.map((alert, idx) => window.__CTRender(ct_pg_alert_modal_1.CTPGAlertModal, { raisedOn: alert.raisedOn, priority: alert.priority, type: alert.type, icon: alert.icon, title: alert.title, body: alert.body, buttons: alert.buttons, remaining: this.alerts.length, positionInStack: idx }))));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGAlertModalManager.prototype, "alertsToShow", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGAlertModalManager.prototype, "alerts", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: false })
], CTPGAlertModalManager.prototype, "suppressAlerts", void 0);
exports.CTPGAlertModalManager = CTPGAlertModalManager;
CTPGAlertModalManager.register();


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const Events_1 = __webpack_require__(3);
class CTPGCountDownTimer extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-count-down-timer";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.StopTimer, (timerId) => {
            this.stopTimer({ id: timerId, reachedZero: false });
        });
    }
    startTimer() {
        if (this.interval === undefined) {
            this.start = new Date().getTime();
            this.end = this.start + this.duration;
            const distance = this.end - new Date().getTime();
            if (distance > 0 && this.runTimer) {
                this.timer();
                this.interval = setInterval(() => {
                    this.timer();
                }, 1000);
            }
        }
    }
    stopTimer(timerArgs) {
        if (timerArgs.id === this.id) {
            clearInterval(this.interval);
            delete this.interval;
            this.emitEvent(Events_1.PagerEvents.TimerComplete, timerArgs);
        }
    }
    timer() {
        const distance = this.end - new Date().getTime();
        if (distance >= 0) {
            const seconds = Math.floor((distance / 1000) % 60);
            const minutes = Math.floor((distance / 1000 / 60) % 60);
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.currentTime = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }
        else {
            this.currentTime = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            this.stopTimer({ id: this.id, reachedZero: true });
        }
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex;user-select:none}:host div p{text-align:center}
        `;
    }
    build() {
        const markup = [];
        if (this.displayDays) {
            markup.push(window.__CTRender("span", null,
                this.currentTime.days,
                "d: "));
        }
        if (this.currentTime.hours > 0) {
            markup.push(window.__CTRender("span", null,
                this.currentTime.hours,
                ":"));
        }
        markup.push(window.__CTRender("span", null, ("0" + this.currentTime.minutes).slice(-2)));
        if (this.displaySeconds) {
            markup.push(window.__CTRender("span", null,
                ":",
                ("0" + this.currentTime.seconds).slice(-2)));
        }
        return markup;
    }
    pagerComponentMarkup() {
        this.startTimer();
        return (window.__CTRender("div", null,
            window.__CTRender("p", null, this.build())));
    }
}
__decorate([
    base_1.prop({ type: Number, attribute: true, default: 0 })
], CTPGCountDownTimer.prototype, "duration", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGCountDownTimer.prototype, "displayDays", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGCountDownTimer.prototype, "displaySeconds", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: false })
], CTPGCountDownTimer.prototype, "runTimer", void 0);
__decorate([
    base_1.prop({ type: Object, attribute: false })
], CTPGCountDownTimer.prototype, "currentTime", void 0);
exports.CTPGCountDownTimer = CTPGCountDownTimer;
CTPGCountDownTimer.register();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const renderUtils = __webpack_require__(4);
const Models = __webpack_require__(0);
class CTPGCustomToggle extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-custom-toggle";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setupListeners() {
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex;height:100%;width:100%;cursor:pointer;user-select:none}:host div{display:flex;height:100%;width:100%;flex-direction:row;margin:auto}:host div p{flex-basis:80%;margin:auto;text-align:right}
        `;
    }
    toggle() {
        this.checked = !this.checked;
        this.onToggle(this.checked);
    }
    pagerComponentMarkup() {
        this.onclick = this.toggle;
        const styles = renderUtils.buildStyles({
            color: this.color
        });
        return (window.__CTRender("div", { style: styles },
            window.__CTRender("p", null, this.label),
            window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "15", height: "15", icon: this.checked ? Models.Icons.FONTAWESOME.CheckBoxChecked : Models.Icons.FONTAWESOME.CheckBoxEmpty })));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGCustomToggle.prototype, "checked", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true, default: "" })
], CTPGCustomToggle.prototype, "label", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true, default: "Black" })
], CTPGCustomToggle.prototype, "color", void 0);
__decorate([
    base_1.prop({ type: Function, attribute: true })
], CTPGCustomToggle.prototype, "onToggle", void 0);
exports.CTPGCustomToggle = CTPGCustomToggle;
CTPGCustomToggle.register();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(7);
const renderUtils_1 = __webpack_require__(4);
class CTPGList extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-list";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPages();
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.PageUpdate, () => this.getPages());
        this.addListener(Events_1.PagerEvents.ConnectionResult, (result) => {
            this.getPages();
        });
    }
    getPages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pages = utils_1.deepCloneArray(yield this.pagerLayer.getPages());
        });
    }
    rowClick(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pagerLayer.setSelectedPage(page);
            this.emitEvent(Events_1.PagerEvents._Request_ReadPageDetail, new Events_1.ReadPageDetailEventArgs(page));
        });
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;width:100%}:host div div.header{display:none;background-color:var(--secondary-color, #2c394e);height:40px}:host div div.header h3{color:white;margin:auto auto}@media screen and (max-width: 640px){:host div div.header{display:flex}}:host div p{text-align:center}:host div div.row{display:flex;justify-content:space-between;border-bottom:2px solid #eee;padding:15px 0;cursor:pointer}:host div div.row:hover{background-color:#f2f2f2}:host div div.row.header{padding:5px 0;background-color:#eee;font-size:12px;color:#646566}:host div div.row div{padding:0 10px;display:flex;justify-content:flex-start;overflow:hidden;white-space:nowrap;color:black}:host div div.row div span{overflow:hidden;text-overflow:ellipsis;margin:auto 0}:host div div.row div.type{flex-basis:10%;order:1;flex:1 1 250px}:host div div.row div.type span.color{margin:auto 5px auto 0;height:8px;width:8px;border-radius:50%}:host div div.row div.to{flex-basis:20%;order:2}:host div div.row div.subject{flex-basis:25%;order:3}:host div div.row div.message{flex-basis:30%;order:4}:host div div.row div.attachment{flex-basis:10%;order:5;flex:1 1 100px}:host div div.row div.attachment ct-pg-icon{margin:auto}:host div div.row div.raised{flex-basis:5%;order:6;flex:1 1 150px}@media screen and (max-width: 640px){:host div div.row{flex-wrap:wrap}:host div div.row.header{display:none}:host div div.row div.type{order:1;flex-basis:50%}:host div div.row div.attachment{order:2;flex-basis:10%;margin:auto 0 auto auto}:host div div.row div.attachment ct-pg-icon{margin:auto 0 auto auto}:host div div.row div.raised{order:3;flex-basis:40%;flex:1 1}:host div div.row div.raised span{margin-left:auto}:host div div.row div.to{order:4;flex-basis:100%;display:none}:host div div.row div.subject{order:5;flex-basis:100%}:host div div.row div.message{order:6;flex-basis:100%;color:#646566}:host div div.row div.subject span,:host div div.row div.message span{padding-left:14px}}
        `;
    }
    pagerComponentMarkup() {
        // if (this.pages.length === 0) return null;
        return (window.__CTRender("div", null,
            renderUtils_1.renderIf(this.pages.length > 0, window.__CTRender("div", { className: "header" },
                window.__CTRender("h3", null, "Recent Messages"))),
            renderUtils_1.renderIf(this.pages.length > 0, window.__CTRender("div", { className: "row header" },
                window.__CTRender("div", { className: "type" },
                    window.__CTRender("span", null, "Type")),
                window.__CTRender("div", { className: "to" },
                    window.__CTRender("span", null, "To")),
                window.__CTRender("div", { className: "subject" },
                    window.__CTRender("span", null, "Subject")),
                window.__CTRender("div", { className: "message" },
                    window.__CTRender("span", null, "Message")),
                window.__CTRender("div", { className: "attachment" },
                    window.__CTRender("span", null, "Attachment")),
                window.__CTRender("div", { className: "raised" },
                    window.__CTRender("span", null, "Raised")))),
            this._renderPageList()));
    }
    _renderPageList() {
        if (this.pages.length === 0) {
            return [
                window.__CTRender("p", null, "There are no pages to display.")
            ];
        }
        return this.pages.map((item) => window.__CTRender("div", { className: "row", onClick: () => this.rowClick(item) },
            window.__CTRender("div", { className: "type" },
                window.__CTRender("span", { className: "color", style: renderUtils_1.buildStyles({ backgroundColor: item.pageType.colorCode }) }),
                window.__CTRender("span", null, item.pageType.name)),
            window.__CTRender("div", { className: "to" },
                window.__CTRender("span", null, item.to.map(contact => contact.displayName).join(", "))),
            window.__CTRender("div", { className: "subject" },
                window.__CTRender("span", null, item.subject)),
            window.__CTRender("div", { className: "message" },
                window.__CTRender("span", null, item.message)),
            window.__CTRender("div", { className: "attachment" }, renderUtils_1.renderIf(item.attachments, window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "20", height: "20", icon: Models_1.Icons.FONTAWESOME.Paperclip }))),
            window.__CTRender("div", { className: "raised" },
                window.__CTRender("span", null, utils_1.formatDateForTimeOrDate(new Date(item.openedDate))))));
    }
}
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGList.prototype, "pages", void 0);
exports.CTPGList = CTPGList;
CTPGList.register();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_textbox_1 = __webpack_require__(13);
const ct_pg_button_1 = __webpack_require__(6);
const Events = __webpack_require__(3);
const renderUtils = __webpack_require__(4);
class CTPGLoginForm extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        // === End properties === //
        this.hasPrefilledUsername = false;
    }
    static get is() {
        return "ct-pg-login-form";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!!this.username)
                this.hasPrefilledUsername = true;
        });
    }
    setupListeners() {
    }
    onChange(e) {
        this[e.key] = e.value;
        this._disabled = (!this.username || !this.password);
    }
    clearFields() {
        if (!this.hasPrefilledUsername)
            this.username = "";
        this.password = "";
        this._disabled = true;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.password) {
                this.isWaiting = true;
                // todo: change where the domain is found
                const username = this.autoAppendDomainName
                    ? `${this.username}@${this.pagerLayer.config.xmpp.user.domain}`.toLowerCase()
                    : this.username.toLowerCase();
                try {
                    this.pagerLayer.config.xmpp.user.id = this.username;
                    yield this.pagerLayer.login(username, this.password);
                    this.emitEvent(Events.PagerEvents.ConnectionResult, new Events.CommsEventArgs(true), true);
                    this.isWaiting = false;
                    this.clearFields();
                }
                catch (ex) {
                    document.activeElement.blur();
                    this.emitEvent(Events.PagerEvents.ConnectionResult, new Events.CommsEventArgs(false, ex), true);
                    this.isWaiting = false;
                }
            }
            return;
        });
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;width:100%;margin:auto}:host div{display:flex;flex-direction:column;width:100%}:host div div{margin:3% 0}
        `;
    }
    pagerComponentMarkup() {
        const usernameStyles = renderUtils.buildStyles({
            display: this.hideUsername
                ? "none"
                : "flex"
        });
        return (window.__CTRender("div", null,
            window.__CTRender("div", { style: usernameStyles },
                window.__CTRender(ct_pg_textbox_1.CTPGTextbox, { type: "text", placeholder: "Username", name: "username", value: this.username, disabled: this.disableUsername, callback: (e) => this.onChange(e), returnKeypress: (e) => this.login() })),
            window.__CTRender("div", null,
                window.__CTRender(ct_pg_textbox_1.CTPGTextbox, { type: "password", placeholder: "Password", name: "password", value: this.password, callback: (e) => this.onChange(e), returnKeypress: (e) => this.login() })),
            window.__CTRender("div", null,
                window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", disabled: this._disabled, onClick: e => this.login(), isWaiting: this.isWaiting }, "Login"))));
    }
}
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: true })
], CTPGLoginForm.prototype, "autoAppendDomainName", void 0);
__decorate([
    base_1.prop({ type: String, attribute: true, default: "" })
], CTPGLoginForm.prototype, "username", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: false })
], CTPGLoginForm.prototype, "hideUsername", void 0);
__decorate([
    base_1.prop({ type: base_1.Stroolean, attribute: true, default: false })
], CTPGLoginForm.prototype, "disableUsername", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: false })
], CTPGLoginForm.prototype, "isWaiting", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: true })
], CTPGLoginForm.prototype, "_disabled", void 0);
exports.CTPGLoginForm = CTPGLoginForm;
CTPGLoginForm.register();


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const ct_pg_button_1 = __webpack_require__(6);
const ct_pg_online_indicator_1 = __webpack_require__(12);
const utils_1 = __webpack_require__(7);
const renderUtils_1 = __webpack_require__(4);
class CTPGNewPageModal extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        // === End properties === //
        this.buttonsDisabled = false;
        this.viewImage = (e) => {
            const img = e.target;
            window.fileopener.openFile(() => { }, () => this.emitEvent(Events_1.PagerEvents.RaiseAlert, Models_1.DefaultAlerts.AlertErrorWithOkayButton("Error", "Could not open image file.", 1, {})), img.src);
        };
    }
    static get is() {
        return "ct-pg-new-page-modal";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connectivityStatus = this.pagerLayer.getConnectionStatus();
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.NewPageReceived, (page) => __awaiter(this, void 0, void 0, function* () {
            yield this.checkForPendingPages();
        }));
        this.addListener(Events_1.PagerEvents.PageUpdate, (page) => __awaiter(this, void 0, void 0, function* () {
            yield this.checkForPendingPages();
        }));
        this.addListener(Events_1.PagerEvents._Request_CheckForPendingPages, () => __awaiter(this, void 0, void 0, function* () {
            yield this.checkForPendingPages();
        }));
        this.addListener(Events_1.PagerEvents.ConnectionStatusChange, (status) => {
            this.connectivityStatus = status;
            this.connectivityStatus === Models_1.ConnectionStatus.Connected
                ? this.buttonsDisabled = false
                : this.buttonsDisabled = true;
        });
    }
    checkForPendingPages() {
        return __awaiter(this, void 0, void 0, function* () {
            const pendingPages = yield this.pagerLayer.getPendingPages();
            if (!this.replyMenuShowing) {
                if (pendingPages.length > 0) {
                    this.page = pendingPages[0];
                }
                else {
                    this.page = null;
                }
                this.showing = this.page ? true : false;
            }
        });
    }
    respondToPage(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                ts: new Date().getTime(),
                content: value,
                type: Models_1.ContactResponseType.Response
            };
            yield this.pagerLayer.addContactResponseToPage(this.page, response);
            this.emitEvent(Events_1.PagerEvents.PageResponse, new Events_1.SendPageResponseEventArgs(this.page._id, response, this.page.sender));
            this.replyMenuShowing = false;
            if (this.page.audio.length > 0) {
                const audio = this.shadowRoot.querySelector("audio");
                if (audio) {
                    audio.pause();
                    audio.parentElement.removeChild(audio);
                }
            }
        });
    }
    toggleReplyMenu() {
        this.replyMenuShowing = !this.replyMenuShowing;
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{background-color:var(--primary-color, #000);height:100%;width:100%;display:flex;flex-direction:column;transform:translateY(100%);will-change:transform;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);visibility:hidden;position:fixed;top:0;z-index:1;overflow:hidden}:host .container{height:100%;width:100%;display:flex;flex-direction:column;background-color:white}:host .container .title{display:flex;width:100%;flex:0 0 var(--header-height, 60px);padding:0 20px;justify-content:space-between;align-items:center}:host .container .content{flex:1 1;display:flex;flex-direction:column;background-color:white;margin:5px}:host .container .content .panel{flex:1 1;display:flex;flex-direction:column;overflow:auto}:host .container .content .panel .data{display:flex;flex-direction:row;font-size:18px;margin:0 0 1px 0;padding:10px 20px;flex:0 0 var(--header-height, 60px)}:host .container .content .panel .data ct-pg-icon{margin-left:10px}:host .container .content .panel .data ct-pg-online-indicator{margin:auto 0}:host .container .content .panel .data.subject{display:flex;flex:0 1 auto}:host .container .content .panel .data.subject span{margin:auto 0}:host .container .content .panel .data.severity .name{margin:auto 0}:host .container .content .panel .data.severity .time{margin:auto 0 auto auto;font-weight:300}@media screen and (max-width: 640px){:host .container .content .panel .data.severity .name{font-size:16px}:host .container .content .panel .data.severity .time{font-size:12px}}:host .container .content .panel .message{padding:10px 20px;overflow:auto;flex:1 1}:host .container .content .panel .message span{display:block;margin-bottom:15px}:host .container .content .panel .message ct-pg-icon{margin:auto}:host .container .content .panel .message audio,:host .container .content .panel .message img{width:100%}:host .container .content .panel .replyContainer{margin:auto 0 20px;padding:20px 20px 0}:host .container .replyMenuContainer{background-color:rgba(0,0,0,0.6);position:absolute;top:0;width:inherit;height:inherit;opacity:0;visibility:hidden}:host .container .replyMenuContainer.showing{visibility:visible;transition:opacity 0.25s ease-in;opacity:1}:host .container .replyMenuContainer .panel{position:absolute;bottom:0;width:100vw;background-color:white;display:flex;flex-direction:column;padding:25px 20px}:host .container .replyMenuContainer .panel ct-pg-button{margin-top:15px}:host .container .replyMenuContainer .panel ct-pg-button:first-child{margin-top:0}:host([showing]){visibility:visible;transform:translateY(0)}
        `;
    }
    pagerComponentMarkup() {
        if (!this.page)
            return null;
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: "content" },
                window.__CTRender("div", { className: "panel" },
                    this._renderHeader(),
                    this._renderSubject(),
                    window.__CTRender("div", { className: "message" },
                        window.__CTRender("span", null, this.page.message),
                        this._renderAttachments()),
                    window.__CTRender("div", { className: "replyContainer" }, this._renderReplyButton()))),
            this._buildReplyMenu()));
    }
    _renderHeader() {
        if (this.connectivityStatus === Models_1.ConnectionStatus.Connected) {
            return (window.__CTRender("div", { className: "data severity", style: renderUtils_1.buildStyles({ backgroundColor: this.page.pageType.colorCode, color: renderUtils_1.decideTextColorFromBgColor(this.page.pageType.colorCode) }) },
                window.__CTRender("div", { className: "name" }, this.page.pageType.name),
                window.__CTRender("div", { className: "time" }, utils_1.formatDate(this.page.openedDate, "HH:mm")),
                window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "18", height: "18", icon: Models_1.Icons.FONTAWESOME.BellFilled })));
        }
        else {
            return (window.__CTRender("div", { className: "data severity", style: renderUtils_1.buildStyles({ backgroundColor: "#9b9b9b", color: renderUtils_1.decideTextColorFromBgColor("#9b9b9b") }) },
                window.__CTRender(ct_pg_online_indicator_1.CTPGOnlineIndicator, null)));
        }
    }
    _renderSubject() {
        if (this.page.subject) {
            return (window.__CTRender("div", { className: "data subject", style: renderUtils_1.buildStyles({ backgroundColor: this.page.pageType.colorCode, color: renderUtils_1.decideTextColorFromBgColor(this.page.pageType.colorCode) }) },
                window.__CTRender("span", null, this.page.subject)));
        }
        else
            return null;
    }
    _renderAttachments() {
        if (!this.page.attachments)
            return null;
        let markup = (window.__CTRender("div", null,
            window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: 20, height: 20, icon: Models_1.Icons.FONTAWESOME.CircleNotch, spin: true })));
        if (this.page.attachmentsLoaded) {
            markup = (window.__CTRender("div", null,
                renderUtils_1.renderIf(this.page.audio.length > 0, window.__CTRender("audio", { controls: true },
                    window.__CTRender("source", { src: this.page.audio[0], type: "audio/mpeg" }))),
                renderUtils_1.renderIf(this.page.image.length > 0, window.__CTRender("img", { onclick: this.viewImage, src: this.page.image[0] }))));
        }
        return markup;
    }
    _renderReplyButton() {
        if (this.page.replyTemplate.buttons.length === 1) {
            const btn = this.page.replyTemplate.buttons[0];
            return window.__CTRender(ct_pg_button_1.CTPGButton, { disabled: this.buttonsDisabled, type: "primary", onClick: () => this.respondToPage(btn.value) }, btn.label);
        }
        else {
            return window.__CTRender(ct_pg_button_1.CTPGButton, { disabled: this.buttonsDisabled, type: "primary", onClick: () => this.toggleReplyMenu() }, "Reply");
        }
    }
    _buildReplyMenu() {
        const buttons = [];
        this.page.replyTemplate.buttons.map((btn) => {
            buttons.push(window.__CTRender(ct_pg_button_1.CTPGButton, { disabled: this.buttonsDisabled, type: "primary", onClick: () => this.respondToPage(btn.value) }, btn.label));
        });
        buttons.push(window.__CTRender(ct_pg_button_1.CTPGButton, { type: "cancel", onClick: () => this.toggleReplyMenu() }, "Cancel"));
        return (window.__CTRender("div", { className: `replyMenuContainer ${this.replyMenuShowing ? "showing" : ""}` },
            window.__CTRender("div", { className: "panel" }, buttons)));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGNewPageModal.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Object, attribute: false, default: null })
], CTPGNewPageModal.prototype, "page", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: false })
], CTPGNewPageModal.prototype, "replyMenuShowing", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false })
], CTPGNewPageModal.prototype, "connectivityStatus", void 0);
exports.CTPGNewPageModal = CTPGNewPageModal;
CTPGNewPageModal.register();


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const ct_pg_button_1 = __webpack_require__(6);
const ct_pg_online_indicator_1 = __webpack_require__(12);
const ct_pg_textbox_1 = __webpack_require__(13);
const ct_pg_selection_list_1 = __webpack_require__(18);
const ct_pg_contact_selection_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(7);
const ct_pg_file_picker_1 = __webpack_require__(17);
var AttachmentType;
(function (AttachmentType) {
    // tslint:disable no-any
    AttachmentType[AttachmentType["Audio"] = "audio"] = "Audio";
    AttachmentType[AttachmentType["Image"] = "image"] = "Image";
    // tslint:enable no-any
})(AttachmentType || (AttachmentType = {}));
class CTPGRaiseNewPage extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.closeContacts = () => __awaiter(this, void 0, void 0, function* () {
            this.selectedContacts = utils_1.deepCloneArray(yield this.pagerLayer.getSelectedContacts());
            this.newPage.to = this.selectedContacts;
            this.contactSelectionShowing = false;
            this.validate();
        });
        this.addAttachments = (type, files) => {
            this.newPage[type] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                this.newPage[type].push(file.path);
            }
            this.forceRedraw();
        };
        this.sendPage = () => {
            const page = {
                _id: null,
                sender: this.pagerLayer.getCurrentXmppUser(),
                to: this.newPage.to,
                openedDate: new Date().getTime(),
                expirationDate: null,
                closedDate: null,
                pageType: this.pagerLayer.config.pageTypes[this.newPage.type],
                replyTemplate: this.pagerLayer.config.replyTemplates[this.newPage.replyTemplate],
                subject: this.newPage.subject,
                message: this.newPage.message,
                image: this.newPage.image,
                audio: this.newPage.audio,
                attachments: (this.newPage.image.length > 0 || this.newPage.audio.length > 0),
                attachmentsLoaded: false
            };
            this.emitEvent(Events_1.PagerEvents._Request_SendNewPage, new Events_1.SendNewPageEventArgs(page));
            this.selectedContacts = [];
            this.pagerLayer.setSelectedContacts(this.selectedContacts);
            this.close();
        };
    }
    static get is() {
        return "ct-pg-raise-new-page";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.types = this.pagerLayer.config.pageTypes.map((item, idx) => {
                return { key: idx, value: item.name };
            });
            this.replyTemplates = this.pagerLayer.config.replyTemplates.map((item, idx) => {
                return { key: idx, value: item.name };
            });
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.ConnectionStatusChange, (status) => {
            this.connectivityStatus = status;
            this.validate();
        });
    }
    createNewPage() {
        this.newPage = Object.assign({}, {
            to: [],
            type: 0,
            replyTemplate: 0,
            subject: "",
            message: "",
            image: [],
            audio: []
        });
        this.isValidated = false;
        this.showing = true;
    }
    close() {
        this.showing = false;
        this.selectedContacts = [];
        this.pagerLayer.setSelectedContacts(this.selectedContacts);
    }
    showContactSelection() {
        this.contactSelectionShowing = true;
    }
    removeContact(jid) {
        this.selectedContacts = this.selectedContacts.filter(x => x.jid !== jid);
        this.newPage.to = this.selectedContacts;
        this.validate();
        // this.forceRedraw();
    }
    selectionAction(target, selection) {
        this.newPage[target] = parseInt(selection);
    }
    validate() {
        let validated = true;
        if (this.newPage) {
            if (this.newPage.subject.length > 255) {
                validated = false;
            }
            if (!this.newPage.message || this.newPage.message.length > 4000) {
                validated = false;
            }
            if (this.newPage.to.length === 0) {
                validated = false;
            }
            if (this.connectivityStatus !== Models_1.ConnectionStatus.Connected) {
                validated = false;
            }
        }
        else {
            validated = false;
        }
        this.isValidated = validated;
    }
    textFieldInput(e) {
        switch (e.key) {
            case "subject":
                this.newPage.subject = e.value;
                break;
            case "message":
                this.newPage.message = e.value;
                break;
        }
        this.validate();
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.6);opacity:0;visibility:hidden;position:fixed;z-index:1}:host .container{display:flex;flex-direction:column;margin:auto;width:95vw;height:95vh;min-width:500px;background-color:var(--modal-bg, #fff);transform:translateY(100%);will-change:transform;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);visibility:hidden}:host .container .title{display:flex;justify-content:space-between;align-items:center;flex:0 0 var(--header-height, 60px);background-color:var(--primary-color, #15233b);color:var(--primary-font-color, #fff);padding:10px 0 10px 20px}:host .container .title h2{position:absolute;left:50%;top:0;transform:translateX(-50%)}:host .container .content{background-color:white;overflow:auto}:host .container .content div.columns{display:flex;flex-direction:row;flex-wrap:wrap;overflow:auto;margin-bottom:10vh}:host .container .content div.columns h4{font-weight:400;margin:8px 0 0}:host .container .content div.columns .to{display:flex;flex:1 1 100%;justify-content:flex-start;width:100%;border-bottom:2px solid #eee;padding:20px;min-height:87px}:host .container .content div.columns .to h4{margin:auto 20px auto 0}:host .container .content div.columns .to div.contactContainer{display:flex;flex-grow:1;margin-right:20px;flex-wrap:wrap}:host .container .content div.columns .to div.contactContainer span.contactPill{display:flex;justify-content:space-between;font-size:12px;height:30px;padding:0 15px;border-radius:20px;margin:0 5px 5px 0;background-color:var(--primary-color, #15233b);color:var(--primary-font-color, #fff);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}:host .container .content div.columns .to div.contactContainer span.contactPill:hover{background-color:#223961}:host .container .content div.columns .to div.contactContainer span.contactPill span,:host .container .content div.columns .to div.contactContainer span.contactPill ct-pg-icon{margin:auto 10px auto 0;height:15px}:host .container .content div.columns .to div.contactContainer span.contactPill ct-pg-icon{margin:auto 0}:host .container .content div.columns .to ct-pg-button{margin:auto 0 auto auto}:host .container .content div.columns .types{display:flex;flex-wrap:wrap;border-bottom:2px solid #eee;flex:1 1 100%}:host .container .content div.columns .types div{flex:1 1 100%;padding:10px 20px;display:flex;overflow:auto}:host .container .content div.columns .types div h4{margin:auto;flex-basis:30%}:host .container .content div.columns .types div ct-pg-selection-list{margin:auto 0 auto 2%}:host .container .content div.columns .types div:first-child{border-right:2px solid #eee}:host .container .content div.columns .subject{display:flex;flex-basis:100%;flex-direction:column;padding:0 20px;border-bottom:2px solid #eee}:host .container .content div.columns .pageContent{display:flex;flex-basis:100%;flex-direction:column;padding:0 20px;border-bottom:2px solid #eee;overflow:auto}:host .container .content div.columns .attachments{display:flex;flex:1 1 100%;min-height:150px;justify-content:flex-start;align-items:flex-start}:host .container .content div.columns .attachments div{flex:0 0 50%;padding:10px 20px;display:flex;overflow:auto;flex-direction:column}:host .container .content div.columns .attachments div:first-child{border-right:2px solid #eee}:host .container .content div.columns .attachments div h4{flex:1 1 100%}:host .container .content div.columns .attachments div ct-pg-file-picker{margin:20px 0;flex:0 1 15%;width:15%}:host .container .content div.columns .attachments div img{flex:0 0 auto}:host .container .buttonsContainer{display:flex;height:10vh;width:100%;background-color:#eee;justify-content:flex-end;position:fixed;bottom:0}:host .container .buttonsContainer div{margin:auto 20px}:host .container .buttonsContainer div ct-pg-button{flex:1 1 40%}@media screen and (max-width: 640px){:host .container{width:100%;height:100%;min-width:100%;max-height:100%}}:host([showing]){visibility:visible;transition:opacity 0.25s ease-in;opacity:1}:host([showing]) div.container{visibility:visible;transform:translateY(0)}
        `;
    }
    pagerComponentMarkup() {
        if (!this.newPage)
            return null;
        return (window.__CTRender("div", { className: `container` },
            window.__CTRender("div", { className: "title" }, this._renderTitle()),
            window.__CTRender("div", { class: "content" }, this._renderBody()),
            window.__CTRender("div", { className: "buttonsContainer" },
                window.__CTRender("div", null,
                    window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", disabled: !this.isValidated, onClick: this.sendPage }, "Send Message"))),
            window.__CTRender(ct_pg_contact_selection_1.CTPGContactSelection, { showing: this.contactSelectionShowing, closeFunction: this.closeContacts, selectedContacts: this.selectedContacts })));
    }
    _renderTitle() {
        return [
            window.__CTRender(ct_pg_online_indicator_1.CTPGOnlineIndicator, null),
            window.__CTRender("h2", null, "New Message"),
            window.__CTRender(ct_pg_button_1.CTPGButton, { type: "secondary", icon: Models_1.Icons.FONTAWESOME.Cross, onClick: () => this.close() })
        ];
    }
    _renderBody() {
        return (window.__CTRender("div", { className: "columns" },
            window.__CTRender("div", { className: "to" },
                window.__CTRender("h4", null, "To:"),
                window.__CTRender("div", { className: "contactContainer" }, this.newPage.to.map((contact) => window.__CTRender("span", { className: "contactPill", onClick: () => this.removeContact(contact.jid) },
                    window.__CTRender("span", null, contact.displayName),
                    window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "13", height: "13", icon: Models_1.Icons.FONTAWESOME.Cross })))),
                window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", icon: Models_1.Icons.FONTAWESOME.Ellipsis, onClick: () => this.showContactSelection() })),
            window.__CTRender("div", { className: "types" },
                window.__CTRender("div", null,
                    window.__CTRender("h4", null, "Type:"),
                    window.__CTRender(ct_pg_selection_list_1.CTPGSelectionList, { options: this.types, selected: this.newPage.type, forceDropdown: true, onSelect: (e) => this.selectionAction("type", e) })),
                window.__CTRender("div", null,
                    window.__CTRender("h4", null, "Reply Template:"),
                    window.__CTRender(ct_pg_selection_list_1.CTPGSelectionList, { options: this.replyTemplates, selected: this.newPage.replyTemplate, forceDropdown: true, onSelect: (e) => this.selectionAction("replyTemplate", e) }))),
            window.__CTRender("div", { className: "subject" },
                window.__CTRender("h4", null, "Subject:"),
                window.__CTRender(ct_pg_textbox_1.CTPGTextbox, { fullBorder: true, type: "text", name: "subject", value: this.newPage.subject, showClearOptions: false, callback: (e) => this.textFieldInput(e), max: 255 })),
            window.__CTRender("div", { className: "pageContent" },
                window.__CTRender("h4", null, "Message:"),
                window.__CTRender(ct_pg_textbox_1.CTPGTextbox, { fullBorder: true, type: "textarea", name: "message", value: this.newPage.message, showClearOptions: false, callback: (e) => this.textFieldInput(e), max: 4000 })),
            window.__CTRender("div", { className: "attachments" },
                window.__CTRender("div", null,
                    window.__CTRender("h4", null, "Audio Message:"),
                    window.__CTRender(ct_pg_file_picker_1.CTPGFilePicker, { fileTypes: ".mp3,.mpeg3,.mpg,.mpeg", callback: (files) => this.addAttachments(AttachmentType.Audio, files) }),
                    this._renderAudioAttachments()),
                window.__CTRender("div", null,
                    window.__CTRender("h4", null, "Image Attachment:"),
                    window.__CTRender(ct_pg_file_picker_1.CTPGFilePicker, { callback: (files) => this.addAttachments(AttachmentType.Image, files) }),
                    this._renderImageAttachments()))));
    }
    _renderAudioAttachments() {
        return this.newPage.audio.map(x => window.__CTRender("audio", { controls: true },
            window.__CTRender("source", { src: x, type: "audio/mpeg" })));
    }
    _renderImageAttachments() {
        return this.newPage.image.map(x => window.__CTRender("img", { src: x, width: 150 }));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGRaiseNewPage.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGRaiseNewPage.prototype, "isValidated", void 0);
__decorate([
    base_1.prop({ type: Boolean, attribute: false, default: false })
], CTPGRaiseNewPage.prototype, "contactSelectionShowing", void 0);
__decorate([
    base_1.prop({ type: Array, attribute: false, default: [] })
], CTPGRaiseNewPage.prototype, "selectedContacts", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false })
], CTPGRaiseNewPage.prototype, "connectivityStatus", void 0);
exports.CTPGRaiseNewPage = CTPGRaiseNewPage;
CTPGRaiseNewPage.register();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const ct_pg_button_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(7);
const renderUtils_1 = __webpack_require__(4);
const Models_2 = __webpack_require__(19);
class CTPGReadOnlyClient extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.close = () => {
            this.showing = false;
            if (this.page.audio.length > 0) {
                const audio = this.shadowRoot.querySelector("audio");
                audio.pause();
            }
        };
        this.viewImage = (e) => {
            const img = e.target;
            window.fileopener.openFile(() => { }, () => this.emitEvent(Events_1.PagerEvents.RaiseAlert, Models_2.DefaultAlerts.AlertErrorWithOkayButton("Error", "Could not open image file.", 1, {})), img.src);
        };
    }
    static get is() {
        return "ct-pg-read-only-client";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents._Request_OpenClientReadModal, (page) => {
            this.page = Object.assign({}, page);
            this.response = this.page.to.find(x => x.jid === this.pagerLayer.getCurrentXmppUser()).responses
                .find(x => x.type === Models_1.ContactResponseType.Response);
            this.showing = true;
        });
        this.addListener(Events_1.PagerEvents.PageUpdate, () => {
            this.forceRedraw();
        });
    }
    renderedCallback() {
        super.renderCallback();
        const audio = this.shadowRoot.querySelector("audio");
        if (audio) {
            audio.load();
            setTimeout(() => {
                audio.removeAttribute("controls");
                audio.setAttribute("controls", "");
            }, 0);
            // tslint:disable-next-line no-console
            console.log("Audio loaded");
        }
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{background-color:var(--primary-color, #000);height:100%;width:100%;display:flex;flex-direction:column;transform:translateX(100%);will-change:transform;transition:transform 0.15s linear;visibility:hidden;position:fixed;top:0;z-index:1;overflow:hidden}:host .container{height:100%;width:100%;display:flex;flex-direction:column;background-color:white}:host .container .content{flex:1 1;display:flex;flex-direction:column;background-color:white}:host .container .content .panel{flex:1 1;display:flex;flex-direction:column;overflow:auto}:host .container .content .panel .data{display:flex;flex-direction:row;font-size:18px;margin:0 0 1px 0;padding:10px 20px;flex:0 0 var(--header-height, 60px)}:host .container .content .panel .data.title{background-color:#231f20;color:white;flex:0 0 var(--header-height, 60px);justify-content:flex-start;padding:10px 20px 10px 0}:host .container .content .panel .data.title .name{margin:auto 0}:host .container .content .panel .data.title .colorCircle{width:20px;height:20px;border-radius:50%;margin:auto auto auto 10px}:host .container .content .panel .data.title .time{margin:auto 0 auto auto}@media screen and (max-width: 640px){:host .container .content .panel .data.title .name{font-size:16px}:host .container .content .panel .data.title .time{font-size:12px}}:host .container .content .panel .data.subject{background-color:white;border-bottom:2px solid #eee;display:flex;flex:0 1 auto}:host .container .content .panel .data.subject span{margin:auto 0}:host .container .content .panel .data ct-pg-icon{margin-right:10px}:host .container .content .panel .data.severity .time{margin:0 0 0 auto;font-weight:300}:host .container .content .panel .message{padding:10px 20px;overflow:auto;flex:1 1}:host .container .content .panel .message span{display:block;margin-bottom:15px}:host .container .content .panel .message audio,:host .container .content .panel .message img{width:100%}:host .container .content .panel .replyContainer{margin:auto 0 40px;padding:0 20px}:host .container .content .panel .replyContainer h4{text-align:center;font-weight:400;color:#646566;margin-bottom:10px}:host .container .content .panel .replyContainer .replyPill{display:flex;justify-content:center;background-color:#646566;color:white;padding:5px 20px;border-radius:20px;font-weight:300;max-width:70%;margin:0 auto;text-align:center}:host([showing]){visibility:visible;transform:translateX(0)}
        `;
    }
    pagerComponentMarkup() {
        if (!this.page)
            return null;
        return (window.__CTRender("div", { className: "container" },
            window.__CTRender("div", { className: "content" },
                window.__CTRender("div", { className: "panel" },
                    window.__CTRender("div", { className: "data title" },
                        window.__CTRender(ct_pg_button_1.CTPGButton, { type: "headerBack", icon: Models_1.Icons.FONTAWESOME.ChevonLeft, onClick: this.close }),
                        window.__CTRender("div", { className: "name" }, this.page.pageType.name),
                        window.__CTRender("div", { className: "colorCircle", style: renderUtils_1.buildStyles({ backgroundColor: this.page.pageType.colorCode }) }),
                        window.__CTRender("div", { className: "time" }, utils_1.formatDateForTimeOrDate(this.page.openedDate))),
                    this.page.subject
                        ?
                            window.__CTRender("div", { className: "data subject" },
                                window.__CTRender("span", null, this.page.subject))
                        : null,
                    window.__CTRender("div", { className: "message" },
                        window.__CTRender("span", null, this.page.message),
                        this._renderAttachments()),
                    this._generateResponseDisplay()))));
    }
    _renderAttachments() {
        return (window.__CTRender("div", null,
            renderUtils_1.renderIf(this.page.audio.length > 0 && this.page.attachmentsLoaded, window.__CTRender("audio", { controls: true },
                window.__CTRender("source", { src: this.page.audio[0], type: "audio/mpeg" }))),
            renderUtils_1.renderIf(this.page.image.length > 0 && this.page.attachmentsLoaded, window.__CTRender("img", { onclick: this.viewImage, src: this.page.image[0] }))));
    }
    _generateResponseDisplay() {
        if (this.response) {
            return (window.__CTRender("div", { className: "replyContainer" },
                window.__CTRender("h4", null,
                    "You replied at ",
                    utils_1.formatDateForTimeOrDate(this.response.ts)),
                window.__CTRender("div", { className: "replyPill" },
                    window.__CTRender("span", null, this.response.content))));
        }
        else
            return null;
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGReadOnlyClient.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Object, attribute: false, default: null })
], CTPGReadOnlyClient.prototype, "page", void 0);
exports.CTPGReadOnlyClient = CTPGReadOnlyClient;
CTPGReadOnlyClient.register();


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const ct_pg_button_1 = __webpack_require__(6);
const ct_pg_online_indicator_1 = __webpack_require__(12);
const utils_1 = __webpack_require__(7);
const renderUtils_1 = __webpack_require__(4);
const pagerUtils_1 = __webpack_require__(20);
var ReadViewOptions;
(function (ReadViewOptions) {
    // tslint:disable no-any
    ReadViewOptions[ReadViewOptions["Replies"] = "replies"] = "Replies";
    ReadViewOptions[ReadViewOptions["MessageContent"] = "message-content"] = "MessageContent";
    // tslint:enable no-any
})(ReadViewOptions || (ReadViewOptions = {}));
class CTPGReadOnlyPage extends CTPGComponent_1.CTPGComponent {
    constructor() {
        super(...arguments);
        this.viewOption = ReadViewOptions.Replies;
    }
    static get is() {
        return "ct-pg-read-only-page";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents._Request_OpenBroadcasterReadModal, (page) => {
            this.page = Object.assign({}, page);
            this.viewOption = ReadViewOptions.Replies;
            this.showing = true;
        });
        this.addListener(Events_1.PagerEvents.PageUpdate, () => {
            this.forceRedraw();
        });
    }
    close() {
        this.showing = false;
    }
    viewOptionBtnClick(option) {
        this.viewOption = option;
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.6);opacity:0;visibility:hidden;position:fixed;z-index:1}:host .container{display:flex;flex-direction:column;margin:auto;width:95vw;height:95vh;min-width:500px;background-color:var(--modal-bg, #fff);will-change:transform;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);visibility:hidden}:host .container .title{display:flex;justify-content:space-between;align-items:center;flex:0 0 var(--header-height, 60px);background-color:var(--primary-color, #15233b);color:var(--primary-font-color, #fff);padding:10px 0 10px 20px}:host .container .title .tabs{position:absolute;display:flex;align-items:flex-end;top:0;left:50%;height:60px;transform:translateX(-50%)}:host .container .title h2{position:absolute;left:50%;top:0;transform:translateX(-50%)}:host .container .content{background-color:white;overflow:auto;display:flex;flex-direction:column;padding:20px}:host .container .content div.row{display:flex;justify-content:flex-start;padding:15px 0;border-bottom:2px solid #eee;min-height:62px;overflow:auto}:host .container .content div.row.header{min-height:30px;padding:5px 0;font-size:12px;color:#646566}:host .container .content div.row div{margin:auto 0}:host .container .content div.row .user{flex-basis:40%}:host .container .content div.row .received{flex-basis:20%}:host .container .content div.row .reply{flex-basis:35%}:host .container .content div.row .label{flex-basis:15%;color:#646566}:host .container .content div.row .value{flex-basis:70%}:host .container .content div.row .responsePill{display:flex;justify-content:space-between;background-color:#646566;color:white;padding:5px 20px;border-radius:20px;font-weight:300}:host([showing]){visibility:visible;transition:opacity 0.25s ease-in;opacity:1}:host([showing]) div.container{visibility:visible}
        `;
    }
    pagerComponentMarkup() {
        if (Object.keys(this.page).length === 0)
            return null;
        return (window.__CTRender("div", { className: `container` },
            window.__CTRender("div", { className: "title" }, this._renderTitle()),
            window.__CTRender("div", { class: "content" }, this._renderBody())));
    }
    _renderTitle() {
        return [
            window.__CTRender(ct_pg_online_indicator_1.CTPGOnlineIndicator, null),
            window.__CTRender("div", { className: "tabs" },
                window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", selected: this.viewOption === ReadViewOptions.Replies, onClick: () => this.viewOptionBtnClick(ReadViewOptions.Replies) }, "Replies"),
                window.__CTRender(ct_pg_button_1.CTPGButton, { type: "primary", selected: this.viewOption === ReadViewOptions.MessageContent, onClick: () => this.viewOptionBtnClick(ReadViewOptions.MessageContent) }, "Message Content")),
            window.__CTRender(ct_pg_button_1.CTPGButton, { type: "secondary", icon: Models_1.Icons.FONTAWESOME.Cross, onClick: () => this.close() })
        ];
    }
    _renderBody() {
        return renderUtils_1.renderIfElse(this.viewOption === ReadViewOptions.Replies, window.__CTRender("div", null, this._renderReplies()), window.__CTRender("div", null, this._renderReadOnlyMessage()));
    }
    _renderReplies() {
        const elements = [];
        elements.push(window.__CTRender("div", { className: "row header" },
            window.__CTRender("div", { className: "user" },
                window.__CTRender("span", null, "User")),
            window.__CTRender("div", { className: "received" },
                window.__CTRender("span", null, "Received")),
            window.__CTRender("div", { className: "reply" },
                window.__CTRender("span", null, "Reply"))));
        this.page.to.map((item) => {
            const received = pagerUtils_1.getResponse(item, Models_1.ContactResponseType.Received);
            const response = pagerUtils_1.getResponse(item, Models_1.ContactResponseType.Response);
            elements.push(window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "user" },
                    window.__CTRender("span", null, item.displayName)),
                window.__CTRender("div", { className: "received" },
                    window.__CTRender("span", null, received !== null ? utils_1.formatDateForTimeOrDate(new Date(received.ts)) : "")),
                window.__CTRender("div", { className: "reply" }, response
                    ?
                        window.__CTRender("div", { className: "responsePill" },
                            window.__CTRender("span", null, response.content),
                            window.__CTRender("span", null, utils_1.formatDateForTimeOrDate(new Date(response.ts))))
                    :
                        null)));
        });
        return elements;
    }
    _renderReadOnlyMessage() {
        return [
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Sent:"),
                window.__CTRender("div", { className: "value" }, utils_1.formatDateForTimeOrDate(new Date(this.page.openedDate)))),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Type:"),
                window.__CTRender("div", { className: "value" }, this.page.pageType.name)),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Reply Template:"),
                window.__CTRender("div", { className: "value" }, this.page.replyTemplate.name)),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Subject:"),
                window.__CTRender("div", { className: "value" }, this.page.subject)),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Message:"),
                window.__CTRender("div", { className: "value" }, this.page.message)),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Audio:"),
                window.__CTRender("div", { className: "value" }, this._renderAudioAttachments())),
            window.__CTRender("div", { className: "row" },
                window.__CTRender("div", { className: "label" }, "Images:"),
                window.__CTRender("div", { className: "value" }, this._renderImageAttachments()))
        ];
    }
    _renderAudioAttachments() {
        return this.page.audio.map(x => window.__CTRender("audio", { controls: true },
            window.__CTRender("source", { src: x, type: "audio/mpeg" })));
    }
    _renderImageAttachments() {
        return this.page.image.map(x => window.__CTRender("img", { src: x, width: 150 }));
    }
}
__decorate([
    base_1.prop({ type: Boolean, attribute: true, default: false })
], CTPGReadOnlyPage.prototype, "showing", void 0);
__decorate([
    base_1.prop({ type: Object, attribute: false })
], CTPGReadOnlyPage.prototype, "page", void 0);
__decorate([
    base_1.prop({ type: String, attribute: false })
], CTPGReadOnlyPage.prototype, "viewOption", void 0);
exports.CTPGReadOnlyPage = CTPGReadOnlyPage;
CTPGReadOnlyPage.register();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(1);
const CTPGComponent_1 = __webpack_require__(2);
const ct_pg_icon_1 = __webpack_require__(5);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
class CTPGUserDisplay extends CTPGComponent_1.CTPGComponent {
    static get is() {
        return "ct-pg-user-display";
    }
    // === End properties === //
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.username = this.pagerLayer.getCurrentXmppDisplayName();
        });
    }
    setupListeners() {
        this.addListener(Events_1.PagerEvents.ConnectionResult, (result) => {
            this.username = this.pagerLayer.getCurrentXmppDisplayName();
        });
    }
    get pagerComponentStyles() {
        return `:host{color:#212121;font-weight:400}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host,:host *{box-sizing:border-box}:host{display:flex}:host div{display:flex;align-items:center;color:var(--primary-font-color, #fff)}:host div ct-pg-icon{flex:0 0;margin:auto 5px auto 0}:host div h6{font-size:20px;font-weight:400;margin:auto;flex:1 1}
        `;
    }
    pagerComponentMarkup() {
        return (window.__CTRender("div", null,
            window.__CTRender(ct_pg_icon_1.CTPGIcon, { width: "20", height: "20", icon: Models_1.Icons.FONTAWESOME.UserIconEmpty }),
            window.__CTRender("h6", null, this.username)));
    }
}
__decorate([
    base_1.prop({ type: String, attribute: false })
], CTPGUserDisplay.prototype, "username", void 0);
exports.CTPGUserDisplay = CTPGUserDisplay;
CTPGUserDisplay.register();


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leon.Revill on 25/01/2017.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const es6_promise_1 = __webpack_require__(21);
const File = __webpack_require__(34);
if (!window.Strophe) {
    throw new Error("Strophe.js must be loaded before ct-xmpp-client.js");
}
if (!window.Promise) {
    throw new Error("ct-xmpp-client.js has a dependency on Promise, did you forget to include the polyfill?");
}
if (!window.PouchDB) {
    throw new Error("ct-xmpp-client.js has a dependency on PouchDB, please ensure PouchDB is included before ct-xmpp-client.js");
}
class CtXmppClient {
    /**
     * Client constructor method.
     * @param clientId - Unique identifier for this instance of CtXmppClient
     * @param endpoint - The server location (e.g. wss://chat.commontime.com:5281/websocket)
     * @param options
     */
    constructor(clientId, endpoint, options) {
        this._pingInterval = null;
        this._reconnectTimeout = null;
        this._reconnectBackOff = 1000;
        this._reLoginTimeout = null;
        this._reLoginBackOff = 1000;
        this._joinedRooms = {};
        this._saveDebounce = {};
        if (!clientId) {
            throw new Error("A client ID must be provided.");
        }
        if (!endpoint) {
            throw new Error("XMPP server hostname must be provided.");
        }
        this._clientId = clientId;
        this._eventListeners = {};
        this._options = CtXmppClient._merge({
            sendTimeout: 300000,
            debug: false,
            mucHost: null,
            uploadHost: null,
            mam: {
                auto: true,
                defaultTimeLimit: 2.628e+9 // 1 month
            },
            pingInterval: 3000,
            pingTimeout: 3000,
            dbPassword: null,
            autoLogin: false,
            autoReconnect: true
        }, options);
        this._endpoint = endpoint;
        this._connection = null;
        this.connected = false;
        this.loggedIn = false;
        this._reLoggingIn = false;
        this._loggingOut = false;
        this._jid = null;
        this._bareJid = null;
        this.username = null;
        this._initDbs();
        if (this._options.autoLogin === true)
            this._reLogin();
    }
    /**
     * Method which allows setting the send timeout
     * @param {number} value - The number of milliseconds to wait until marking a message as failed to send
     */
    set sendTimeout(value) {
        if (value === this._options.sendTimeout)
            return;
        this._options.sendTimeout = value;
    }
    /**
     * Getter method which retrieves the current connection status
     */
    get status() {
        return this._getCacheItem("connection_status");
    }
    /**
     * Private method to create all databases
     * @private
     */
    _initDbs() {
        this._msgDb = new window.PouchDB(`${this._clientId}_messages`);
        this._contactDb = new window.PouchDB(`${this._clientId}_contacts`);
        this._cacheDb = new window.PouchDB(`${this._clientId}_cache`);
        if (this._options.dbPassword !== null) {
            this._cacheDb.crypto(this._options.dbPassword);
        }
        else {
            console.warn("No encryption key specified! If you have auto-reconnect or auto-login enabled your password will be stored unencrypted!");
        }
        this._cache = {};
        this._roomDb = new window.PouchDB(`${this._clientId}_rooms`);
        this._participantDb = new window.PouchDB(`${this._clientId}_participants`);
    }
    /**
     * Private method which takes the Strophe status ID and adds a human readable label, saving it to the store
     * @param {number} statusId
     * @param {boolean} dispatch - Whether the status change should be dispatched as an event
     * @private
     */
    _setStatus(statusId, dispatch = true) {
        return new es6_promise_1.Promise((resolve, reject) => {
            const statusObj = {
                "id": statusId,
                "label": null
            };
            switch (statusId) {
                case window.Strophe.Status.CONNECTING:
                    statusObj.label = "Connecting";
                    break;
                case window.Strophe.Status.CONNFAIL:
                    statusObj.label = "Connection failed";
                    break;
                case window.Strophe.Status.DISCONNECTING:
                    statusObj.label = "Disconnecting";
                    break;
                case window.Strophe.Status.DISCONNECTED:
                    statusObj.label = "Disconnected";
                    break;
                case window.Strophe.Status.CONNECTED:
                    statusObj.label = "Connected";
                    break;
                case window.Strophe.Status.AUTHFAIL:
                    statusObj.label = "Authentication failed.";
                    break;
            }
            this._getCacheItem("connection_status").then(value => {
                if (value !== statusObj && dispatch !== false) {
                    this._dispatchEvent(CtXmppClient.EVENT_TYPES.STATUS, statusObj);
                }
                this._setCacheItem("connection_status", statusObj).then(resolve).catch(reject);
            });
        });
    }
    /**
     * Private method which is used to initiate a WebSocket connection to the XMPP server using the Strophe API
     * @param {String} jid
     * @param {String} password
     * @returns {Promise}
     * @private
     */
    _connect(jid, password) {
        return new es6_promise_1.Promise((resolve, reject) => {
            // Create a fresh connection object
            this._connection = new Strophe.Connection(this._endpoint);
            // Attach various event handlers
            this._connection.addHandler(this._onMessage.bind(this), null, "message");
            this._connection.addHandler(($xml) => {
                return this._onPresence(CtXmppClient.xmlToJson($xml));
            }, null, "presence");
            // We only attempt to connect for this duration and assume connection
            // has failed if we reach this limit
            const connectTimeout = setTimeout(() => {
                reject();
            }, 5000);
            // Start the connection process
            this._connection.connect(jid, password, (status) => {
                if (this._reLoggingIn !== true)
                    this._setStatus(status);
                switch (status) {
                    case window.Strophe.Status.ERROR:
                    case window.Strophe.Status.AUTHFAIL:
                    case window.Strophe.Status.CONNFAIL:
                    case window.Strophe.Status.DISCONNECTED:
                        clearTimeout(connectTimeout);
                        this.connected = false;
                        // Clear any reconnect timeout so it stops trying to reconnect, we've been fully disconnected
                        // so we need to re-login to create a new socket.
                        clearTimeout(this._reconnectTimeout);
                        this._stopPing();
                        // If the user didn't initiate the logout manually, we are not already re-logging in, have previously been logged in and autoReconnect is enabled, start the re-login process.
                        this._log("Disconnected...");
                        if (this._reLoggingIn === false && this.loggedIn === true && this._loggingOut === false && this._options.autoReconnect === true) {
                            // If we've had a disconnect status change then we have lost the WebSocket completely so the "reconnect" phase is over
                            // We now need to re-login to create a new socket.
                            this._log("Attemping to re-login...");
                            this._reLogin();
                        }
                        reject("Connection failed.");
                        break;
                    case window.Strophe.Status.CONNECTED:
                        clearTimeout(connectTimeout);
                        this.connected = true;
                        resolve();
                }
            });
        });
    }
    /**
     * Private method used as part of the login process to setup and handle stream management - stream management is a requirement of this XMPP client implementation
     * @returns {Promise}
     * @private
     */
    _handleStreamManagement() {
        return new es6_promise_1.Promise((resolve) => {
            if (!this._connection.streamManagement) {
                throw new Error("Stream management is required.");
            }
            try {
                this._connection.streamManagement.requestResponseInterval = 0;
                this._connection.streamManagement.logging = false;
                // this._connection.streamManagement.allowResume = this._options.allowResume;
                this._connection.addHandler(() => {
                    // this._setCache("smId", $enabled.getAttribute("id"));
                    resolve();
                    return false;
                }, "urn:xmpp:sm:3", "enabled");
                this._connection.streamManagement.enable();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    /**
     * Method to start the ping process to detect when we lose connection
     * @returns {Promise}
     * @private
     */
    _initialisePing() {
        return new es6_promise_1.Promise((resolve) => {
            // Clear any existing interval
            if (this._pingInterval !== null)
                clearInterval(this._pingInterval);
            // Start the interval which sends the ping
            this._pingInterval = setTimeout(() => {
                this._sendPing().then(() => {
                    this._initialisePing();
                }).catch(() => {
                    // If a ping fails then start the reconnect process
                    this._log("Ping failed.");
                    // Stop pinging
                    // clearInterval(this._pingInterval);
                    // Start the reconnect process
                    if (this._options.autoReconnect === true) {
                        this._log("Auto-reconnect enabled, so let's try and reconnect!");
                        this._reconnect();
                    }
                });
            }, this._options.pingInterval);
            resolve();
        });
    }
    /**
     * Method which sends a ping IQ
     * @returns {Promise}
     * @private
     */
    _sendPing() {
        return new es6_promise_1.Promise((resolve, reject) => {
            // Create our own timeout here because the Strophe timeout for IQ messages doesn't work when the WebSocket dies in Safari
            const pingTimeout = setTimeout(() => {
                this.connected = false;
                this._setStatus(window.Strophe.Status.DISCONNECTED);
                if (this._options.autoReconnect === true)
                    this._setStatus(window.Strophe.Status.CONNECTING);
                reject();
            }, this._options.pingTimeout);
            this.sendIq(this._domain, "get", {
                ping: {
                    $attributes: {
                        xmlns: CtXmppClient.NAMESPACES.PING
                    }
                }
            }).then(() => {
                // Clear any existing timeout
                clearTimeout(pingTimeout);
                resolve();
            });
        });
    }
    /**
     * Method which sends a ping to see if we can successfully send messages down an active WebSocket
     * @private
     */
    _reconnect() {
        // Create a timeout with the back off value so we can send a ping to figure out if we can send down the same socket again
        this._reconnectTimeout = setTimeout(() => {
            this._sendPing().then(() => {
                // If we can then mark us as connected and reset everything
                this._reconnectBackOff = 1000;
                this._reconnectTimeout = null;
                this.connected = true;
                this._setStatus(window.Strophe.Status.CONNECTED);
                this._dispatchEvent(CtXmppClient.EVENT_TYPES.AUTO_RECONNECTED, null);
                // Start the ping process again so we'll know if we lose connection again
                this._initialisePing();
            }).catch(() => {
                // If we still can't jump back on the same socket then increase the back off value and try again
                this._reconnectBackOff += 3000;
                this._log(`Couldn't reconnect, trying again in ${(this._reconnectBackOff) / 1000} seconds...`);
                this._reconnect();
            });
        }, this._reconnectBackOff);
    }
    /**
     * Method used either on app start or after the WebSocket has died
     * @private
     */
    _reLogin() {
        // Don't do this if the user manually logged out
        if (this._loggingOut === true)
            return;
        // Create a timeout with the back off value to retry the login process
        this._reLoginTimeout = setTimeout(() => {
            const proms = [this._getCacheItem("user_jid"), this._getCacheItem("user_password")];
            es6_promise_1.Promise.all(proms).then((data) => {
                const jid = data[0];
                const password = data[1];
                this._log(`Auto-logging in with JID '${jid}'.`);
                if (jid !== undefined && password !== undefined) {
                    this._reLoggingIn = true;
                    this._setStatus(window.Strophe.Status.CONNECTING);
                    this.login(jid, password).then(() => {
                        // If auto-login is successful reset everything and continue
                        this._reLoginBackOff = 1000;
                        this._reconnectTimeout = null;
                        this._log(`Auto-login success.`);
                        this._reLoggingIn = false;
                        this.connected = true;
                        this._setStatus(window.Strophe.Status.CONNECTED);
                        this._dispatchEvent(CtXmppClient.EVENT_TYPES.AUTO_RECONNECTED, null);
                        const proms = [];
                        for (let room in this._joinedRooms) {
                            proms.push(this.joinRoom(room));
                        }
                        es6_promise_1.Promise.all(proms).then(() => {
                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.AUTO_RECONNECTED, null);
                        }).catch((e) => {
                            this._onError("Couldn't join all rooms on re-login, logging out.", e);
                            this.logout();
                        });
                    }).catch(() => {
                        // If we still cannot login then increase the back off value so we can try again soon
                        this._reLoginBackOff += 3000;
                        this._log(`Couldn't re-login, trying again in ${(this._reLoginBackOff) / 1000} seconds...`);
                        this._reLogin();
                    });
                }
            });
        }, this._reLoginBackOff);
    }
    /**
     * Simple method which stops the pinging process
     * @private
     */
    _stopPing() {
        // if (this._pingTimeout !== null) clearTimeout(this._pingTimeout);
        if (this._pingInterval !== null)
            clearInterval(this._pingInterval);
    }
    /**
     * Convenience method to create a presence object using cached data
     * @returns {Promise}
     * @private
     */
    _createPresenceObject() {
        return new es6_promise_1.Promise((resolve) => {
            const pres = {
                "$attributes": {
                    "from": this._jid,
                    "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                }
            };
            pres.show = "chat";
            pres.status = "Available";
            this._getCacheItem("chat_status").then((statusObject) => {
                if (statusObject !== undefined) {
                    if (statusObject.status) {
                        pres.show = statusObject.status;
                    }
                    if (statusObject.label) {
                        pres.status = statusObject.label;
                    }
                    if (statusObject.metadata) {
                        pres.metadata = CtXmppClient._merge({
                            "$attributes": {
                                "xmlns": CtXmppClient.NAMESPACES.CT_METADATA
                            }
                        }, statusObject.metadata);
                    }
                }
                resolve(pres);
            });
        });
    }
    /**
     * Convenience method to send presence to contacts and joined rooms
     * @private
     */
    _sendPresence() {
        this._createPresenceObject().then((pres) => {
            this._connection.send(CtXmppClient.jsonToXml("presence", pres));
            if (!this._options.mucHost)
                return;
            for (let room in this._joinedRooms) {
                pres.$attributes["to"] = `${room}@${this._options.mucHost}`;
                pres["x"] = {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC
                    }
                };
                const $pres = CtXmppClient.jsonToXml("presence", pres);
                this._connection.send($pres);
            }
        });
    }
    /**
     * Method to log the user in
     * @param jid
     * @param password
     * @returns {Promise}
     */
    login(jid, password) {
        if (!jid)
            throw new Error("Parameter 'jid' must be provided.");
        if (!password)
            throw new Error("Parameter 'password' must be provided.");
        this._loggingOut = false;
        return new es6_promise_1.Promise((resolve, reject) => {
            const previousJid = this._cache["user_jid"];
            // If we are already logged in with the same user, just continue.
            if (this.connected === true && this.loggedIn === true && previousJid === Strophe.getBareJidFromJid(jid)) {
                resolve();
            }
            else {
                // Use the instance client ID for the resource if one hasn't been specified
                if (Strophe.getResourceFromJid(jid) === null) {
                    jid += "/" + this._clientId;
                }
                this._jid = jid;
                this._bareJid = Strophe.getBareJidFromJid(this._jid);
                this.username = Strophe.getNodeFromJid(this._jid);
                this._domain = this._bareJid.split("@")[1];
                const __completeLogin = () => {
                    // Ensure we are logged out before we try and login
                    this.logout().then(() => {
                        return this._connect(jid, password);
                    })
                        .then(() => {
                        return this._setCacheItem("user_jid", this._bareJid);
                    })
                        .then(() => {
                        return new es6_promise_1.Promise((_resolve, _reject) => {
                            if (this._options.autoReconnect === true) {
                                this._setCacheItem("user_password", password, true).then(_resolve).catch(_reject);
                            }
                            else {
                                _resolve();
                            }
                        });
                    })
                        .then(() => {
                        return this._initialisePing();
                    })
                        .then(() => {
                        return this._handleStreamManagement();
                    })
                        .then(() => {
                        return this._getCacheItem("roster_version").then((value) => {
                            return this.sendIq(this._bareJid, "get", {
                                "query": {
                                    "$attributes": {
                                        "xmlns": "jabber:iq:roster",
                                        "ver": value || ""
                                    }
                                }
                            });
                        });
                    })
                        .then(($roster) => {
                        return this._processRoster($roster);
                    })
                        .then(() => {
                        this._sendPresence();
                        // TODO: Figure out how best to handle this
                        // This will retrieve all missed messages, peer-to-peer messages, room and subscription messages
                        // this.findMessages({
                        //     "type": "chat"
                        // }).then((messages: Interfaces.XmppMessageObject[]) => {
                        //
                        //     //TODO: Get PouchDB doing this for us
                        //     const results = messages.sort((a:Interfaces.XmppMessageObject, b:Interfaces.XmppMessageObject) => {
                        //         // Sort on the updated_at field
                        //         const x = a.updated_at - b.updated_at;
                        //         // Then sort on the ts field
                        //         return (x === 0) ? a.ts - b.ts : x;
                        //     });
                        //
                        //     const lastMessage = results[0];
                        //     let timestamp = null;
                        //     if (lastMessage !== undefined) {
                        //         timestamp = lastMessage.updated_at || lastMessage.ts;
                        //     }
                        //
                        //     this.queryMam(null, timestamp).then(() => {
                        //         resolve();
                        //     }).catch((e) => {
                        //         this._onError(`Unable to query the MAM for missed messages.`, e);
                        //         reject(e);
                        //     });
                        //
                        // });
                        this.loggedIn = true;
                        resolve();
                    })
                        .catch((e) => {
                        if (this._reLoggingIn === false)
                            this._onError(`Unable to complete login process with JID '${jid}'.`, e);
                        reject(e);
                    });
                };
                // If we are logging in with a different person than last time we need to clear out the database
                if (previousJid !== undefined && previousJid !== this._bareJid) {
                    this.destroyDbs().then(() => {
                        __completeLogin();
                    });
                }
                else {
                    __completeLogin();
                }
            }
        });
    }
    /**
     * Method to initiate the logout process
     * @returns {Promise}
     */
    logout() {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (this.connected === false || this._loggingOut === true) {
                resolve();
            }
            else {
                this._loggingOut = true;
                const onDisconnect = (status) => {
                    if (status.id === window.Strophe.Status.DISCONNECTED) {
                        this._joinedRooms = {};
                        this._reLoggingIn = false;
                        this.connected = false;
                        this.loggedIn = false;
                        // Remove password from cache so it can't auto-login
                        this._deleteCacheItem("user_password").then(() => {
                            resolve();
                        }).catch(reject);
                        this.removeEventListener("status", onDisconnect);
                    }
                };
                this.addEventListener("status", onDisconnect);
                this._stopPing();
                clearTimeout(this._reconnectTimeout);
                clearTimeout(this._reLoginTimeout);
                this._connection.disconnect("user_logout");
                this._connection = null;
            }
        });
    }
    /**
     * Method to (re)send a message given its id
     * @param messageId
     * @returns {Promise}
     */
    resendMessage(messageId) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this.getMessageById(messageId).then(message => {
                this._log(`Resending message with ID '${messageId}':`, message);
                const stanza = {
                    "$attributes": {
                        "id": message._id,
                        "to": message.recipient_id,
                        "from": message.sender_id,
                        "type": message.type,
                        "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                    },
                    "markable": {
                        "$attributes": {
                            "xmlns": CtXmppClient.NAMESPACES.CHAT_MARKERS
                        }
                    },
                    "body": message.body,
                    "data": message.data,
                    "attachments": []
                };
                message.attachments.forEach((attachment) => {
                    stanza.attachments.push({
                        name: attachment.name,
                        type: attachment.type,
                        size: "" + attachment.size,
                        get: attachment.get
                    });
                });
                this.sendMessage(stanza).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    /**
    * Method which converts a JSON stanza to XML and then sends it over the socket
    * @param stanza
    * @returns {Promise}
    */
    sendMessage(stanza) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (this.connected === true) {
                let _sent = false;
                try {
                    // Add the store hint to ensure all messages get persisted in the MAM
                    stanza.store = {
                        "$attributes": {
                            "xmlns": CtXmppClient.NAMESPACES.HINTS
                        },
                        "$value": ""
                    };
                    // Add a client timestamp to all messages
                    stanza.timestamp = {
                        "$attributes": {
                            "xmlns": CtXmppClient.NAMESPACES.CT_CLIENT_TIMESTAMP
                        },
                        "$value": Date.now()
                    };
                    const $xml = CtXmppClient.jsonToXml("message", stanza);
                    if (stanza.$attributes && stanza.$attributes.type === "chat") {
                        // This way we will know that the message is the one we sent and can handle room errors
                        this._connection.addHandler(() => {
                            this._persistStreamManagementCounters();
                            if (this._connection.streamManagement.getOutgoingCounter() === this._connection.streamManagement.getServerProcessedCounter()) {
                                _sent = true;
                                resolve(stanza);
                            }
                            return false;
                        }, null, "a");
                        setTimeout(() => {
                            if (_sent === false) {
                                reject(`Message was not received by the server within ${this._options.sendTimeout}ms.`);
                            }
                        }, this._options.sendTimeout);
                        this._connection.send($xml);
                        this._connection.streamManagement.requestAcknowledgement();
                    }
                    else {
                        // Don't use stream management for group chat messages
                        this._connection.send($xml);
                        resolve(stanza);
                    }
                }
                catch (e) {
                    this._onError("Unable to send XMPP message", e);
                    reject(e);
                }
            }
            else {
                const msg = "You're not currently connected, please connect and try again.";
                this._onError(msg);
                reject(msg);
            }
        });
    }
    /**
     * Upload a message's attachments and then send the message
     * @param message
     * @param files
     * @returns {Promise<U>}
     * @private
     */
    _sendMessageWithAttachments(message, files) {
        if (!this._options.uploadHost)
            throw new Error("Cannot send attachments without a upload host configured.");
        let promiseChain = es6_promise_1.Promise.resolve({});
        files.forEach((file, index) => {
            promiseChain = promiseChain
                .then(() => {
                return new es6_promise_1.Promise((resolve, reject) => {
                    // Ask for an upload slot for each of the attachments
                    const uploadIq = {
                        "$attributes": {
                            "id": this.getUniqueId(),
                            "to": this._options.uploadHost,
                            "from": this._jid,
                            "type": "get",
                            "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                        },
                        "request": {
                            "$attributes": {
                                "xmlns": CtXmppClient.NAMESPACES.HTTP_UPLOAD,
                            },
                            "filename": file.name,
                            "size": "" + file.size,
                            "content-type": file.type
                        }
                    };
                    this.sendIq(this._options.uploadHost, "get", uploadIq).then(resolve).catch(reject);
                });
            })
                .then((_stanza) => {
                return new es6_promise_1.Promise((resolve, reject) => {
                    // The spec appears not to match reality - there are no headers?
                    // But here is the code that would match the XEP spec
                    // const headers = {};
                    //
                    // if (_stanza.iq.slot.put.header) {
                    //     _stanza.iq.slot.put.header.forEach(function (header) {
                    //         headers[header.name] = header.value;
                    //     });
                    // }
                    const __updateMessage = (result) => {
                        this.saveMessage(message._id, (_message) => {
                            _message.attachments[index].state = result;
                            _message.attachments[index].get = get;
                            _message.attachments[index].put = put;
                            return _message;
                        }).then(resolve).catch(reject);
                    };
                    const put = _stanza.iq.slot.put;
                    const get = _stanza.iq.slot.get;
                    File.upload(file.path, put, {
                        "Content-Type": file.type
                    }).then(() => {
                        __updateMessage("transfered");
                    }).catch((e) => {
                        __updateMessage("failed");
                        this._onError(`Couldn't successfully upload file '${file.path}' to the server:`, e);
                        reject(e);
                    });
                    // const xhr = new XMLHttpRequest();
                    // xhr.addEventListener("load", (e) => {
                    //     this.saveMessage(message._id, (oldMessage) => {
                    //         oldMessage.attachments[index].state = "transferred";
                    //         oldMessage.attachments[index].get = get;
                    //         return oldMessage;
                    //     })
                    //     .then(resolve)
                    //     .catch(reject);
                    // });
                    // xhr.addEventListener("error", reject);
                    // xhr.open("PUT", put, true);
                    // xhr.send(file);
                });
            });
        });
        return promiseChain.then(() => {
            return this.resendMessage(message._id);
        });
    }
    _prepareMessageAttachmentsForSend(stanza, attachments) {
        return new es6_promise_1.Promise((resolve, reject) => {
            const proms = [];
            attachments.forEach((filePath) => {
                proms.push(new es6_promise_1.Promise((_resolve, _reject) => {
                    File.getFileInfo(filePath).then((fileInfo) => {
                        _resolve(Object.assign({ get: "", put: "", state: "transferring" }, fileInfo));
                    }).catch(_reject);
                }));
            });
            es6_promise_1.Promise.all(proms).then((_attachments) => {
                // Put the message in the database, we don't want to send it until the attachments have finished uploading to the server
                this._messageStanzaToDbObject({
                    "message": stanza
                }, {
                    "mine": true,
                    "attachments": _attachments
                }).then((message) => {
                    // Resolve now so the message can be shown in the UI with an "uploading" state
                    resolve(message);
                    // Upload and send the message
                    this._sendMessageWithAttachments(message, _attachments);
                }).catch(reject);
            });
        });
    }
    /**
     * Abstraction of the sendMessage method to make sending a peer-to-peer chat message easier
     * @param to
     * @param body
     * @param data
     * @returns {Promise}
     */
    sendChatMessage(to, body, data, attachments = []) {
        if (!to)
            throw new Error("Parameter 'to' is required.");
        // if (typeof payload !== "object") throw new Error("Parameter 'payload' is required and must be an object.");
        if (this._options.mucHost && to.indexOf(this._options.mucHost) > -1)
            throw new Error("You are trying to send a peer-to-peer chat message to a room, please use the 'sendGroupChatMessage' method instead.");
        return new es6_promise_1.Promise((resolve, reject) => {
            // Construct the message stanza
            const stanza = {
                "$attributes": {
                    "id": this.getUniqueId(),
                    "to": to,
                    "from": this._jid,
                    "type": "chat",
                    "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                },
                "markable": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.CHAT_MARKERS
                    }
                },
            };
            if (body !== null) {
                stanza.body = body;
            }
            if (data !== null) {
                stanza.data = data;
            }
            // If we don't have any attachments, just send the message
            if (attachments.length < 1) {
                this.sendMessage(stanza).then(() => {
                    // Persist the message in the DB and set its sent status to true
                    this._messageStanzaToDbObject({
                        "message": stanza
                    }, { "state": { "sent": true }, "mine": true }).then(resolve).catch(reject);
                });
                // If we do then prepare the attachments and message object then start the upload and send process
            }
            else {
                this._prepareMessageAttachmentsForSend(stanza, attachments).then(resolve).catch(reject);
            }
        });
    }
    /**
    * Abstraction of the sendMessage method to make sending a group message easier
    * @param roomName
    * @param body
    * @param data
    * @param attachments
    * @returns {Promise}
    */
    sendGroupChatMessage(roomName, body, data, attachments = []) {
        if (!this._options.mucHost)
            throw new Error("'mucHost' must be provided as an option.");
        if (!roomName)
            throw new Error("Parameter 'roomName' is required.");
        return new es6_promise_1.Promise((resolve, reject) => {
            const stanza = {
                "$attributes": {
                    "id": this.getUniqueId(),
                    "to": `${roomName}@${this._options.mucHost}`,
                    "from": this._jid,
                    "type": "groupchat",
                    "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                },
                "markable": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.CHAT_MARKERS
                    }
                },
            };
            if (body !== null) {
                stanza.body = body;
            }
            if (data !== null) {
                stanza.data = data;
            }
            // If we don't have any attachments, just send the message
            if (attachments.length < 1) {
                this.sendMessage(stanza).then(() => {
                    // Persist the message in the DB and set its sent status to true
                    this._messageStanzaToDbObject({
                        "message": stanza
                    }, { "state": { "sent": true }, "mine": true }).then(resolve).catch(reject);
                });
                // If we do then prepare the attachments and message object then start the upload and send process
            }
            else {
                this._prepareMessageAttachmentsForSend(stanza, attachments).then(resolve).catch(reject);
            }
        });
    }
    /**
     * Method to send an IQ message over the socket and return its response
     * @param to
     * @param type
     * @param payload
     * @param timeout
     * @param id
     * @returns {Promise}
     */
    sendIq(to, type, payload, timeout, id) {
        const _id = (id === undefined) ? this.getUniqueId() : id;
        return new es6_promise_1.Promise((resolve, reject) => {
            let _iq = null;
            try {
                _iq = {
                    "$attributes": {
                        "id": _id,
                        "type": type,
                        "from": this._connection.jid
                    }
                };
                if (to) {
                    _iq.$attributes.to = to;
                }
                for (let key in payload) {
                    _iq[key] = payload[key];
                }
            }
            catch (e) {
                this._onError("Couldn't construct IQ message:", e);
                reject(e);
            }
            if (_iq !== null) {
                const $xml = CtXmppClient.jsonToXml("iq", _iq);
                this._connection.sendIQ($xml, ($stanza) => {
                    this._persistStreamManagementCounters();
                    try {
                        resolve(CtXmppClient.xmlToJson($stanza));
                    }
                    catch (e) {
                        this._onError("Couldn't convert IQ response to JSON.", e);
                        reject(e);
                    }
                }, reject, timeout);
            }
        });
    }
    /**
     * Method used to add an event listener for valid event types
     * @param type
     * @param callback
     */
    addEventListener(type, callback) {
        if (!CtXmppClient._validateEventType(type)) {
            throw new Error("Invalid event type provided.");
        }
        if (this._eventListeners[type] === undefined) {
            this._eventListeners[type] = [];
        }
        this._eventListeners[type].push(callback);
    }
    /**
     * Method used to remove event listeners
     * @param type
     * @param callback
     */
    removeEventListener(type, callback) {
        if (!CtXmppClient._validateEventType(type)) {
            throw new Error("Invalid event type provided.");
        }
        this._eventListeners[type].forEach((cCallback, idx) => {
            if (cCallback === callback) {
                this._eventListeners[type].splice(idx, 1);
            }
        });
    }
    /**
     * Base method used to search all databases
     * @param db
     * @param query
     * @param sortFields
     * @param includeFields
     * @param limit
     * @param skip
     * @returns {Promise}
     * @private
     */
    _searchDb(db, query, sortFields, includeFields, limit, skip) {
        return new es6_promise_1.Promise((resolve, reject) => {
            const fields = [];
            for (let field in query) {
                if (field.indexOf("$") !== 0) {
                    fields.push(field);
                }
                else if (["$or", "$and", "$not", "$nor", "$all"].indexOf(field) > -1 && Array.isArray(query[field]) && query[field].length > 0) {
                    query[field].forEach((o) => {
                        for (let k in o) {
                            fields.push(k);
                        }
                    });
                }
            }
            if (fields.length > 0) {
                db.createIndex({
                    index: {
                        "fields": fields
                    }
                }).then(() => {
                    let findObj = {
                        "selector": query
                    };
                    if (Array.isArray(sortFields) && sortFields.length > 0) {
                        findObj.sort = sortFields;
                    }
                    if (Array.isArray(includeFields) && includeFields.length > 0) {
                        findObj.fields = includeFields;
                    }
                    if (skip) {
                        findObj.skip = skip;
                    }
                    if (limit) {
                        findObj.limit = limit;
                    }
                    db.find(findObj).then((result) => {
                        resolve(result.docs);
                    }).catch(reject);
                }).catch(reject);
            }
        });
    }
    /**
     * Interactions with the messages database
     */
    /**
     * Method to query the messages database to retrieve specific messages
     * @param {Object} query An object signature to match messages on
     * @param {string[]} [sortFields] Defines a list of fields defining how you want to sort. Note that sorted fields also have to be selected in the query.
     * @param {string[]} [includeFields] Defines a list of fields that you want to receive. If omitted, you get the full documents.
     * @param {number} [skip] Number of docs to skip before returning.
     * @param {number} [limit] Maximum number of documents to return.
     * @returns {Promise}
     */
    findMessages(query, sortFields, includeFields, limit, skip) {
        return this._searchDb(this._msgDb, query, sortFields, includeFields, limit, skip);
    }
    /**
     * Convenience method to get all message IDs in the local database
     */
    getAllMessageIds() {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._msgDb.allDocs().then((results) => {
                let ids = [];
                if (results.rows && results.rows.length > 0) {
                    ids = results.rows.map((row) => {
                        return row.id;
                    });
                }
                resolve(ids);
            }).catch(reject);
        });
    }
    /**
     * Method used to fetch chat history for a specific recipient
     * @param recipient
     * @param sortFields
     * @param unread
     * @param limit
     * @param skip
     * @returns {Promise}
     */
    getChatHistory(recipient, sortFields, unread, limit, skip) {
        //TODO: Implement the $or functionality so we can do proper queries here
        // For example I want to be able to get the chat history with a limit of 1
        // which is tricky given that I have to currently do two separate queries
        // $or is currently broken and won't work with index's so we
        // have to do the two query's separately, merge and sort them
        // if (!sortFields) {
        //     sortFields = [{"ts": "desc"}];
        // }
        // let query = {
        //     "$or": [
        //         {"sender_id": recipient},
        //         {"recipient_id": recipient}
        //     ]
        // };
        // if (unread === true) {
        //     query["state.read"] = true;
        // }
        // return this.findMessages(query, sortFields, null, limit, skip);
        return new es6_promise_1.Promise((resolve, reject) => {
            const recipientMessages = this.findMessages({
                "sender_id": recipient
            });
            const userMessages = this.findMessages({
                "recipient_id": recipient
            });
            es6_promise_1.Promise.all([recipientMessages, userMessages]).then((results) => {
                const mergedData = [...results[0], ...results[1]].sort((a, b) => {
                    return a.ts - b.ts;
                });
                resolve(mergedData);
            });
        });
    }
    /**
     * Get a message by its ID
     * @param id
     */
    getMessageById(id) {
        if (!id)
            throw new Error(`A message ID must be provided.`);
        this._log("Getting message with ID:", id);
        return this._msgDb.get(id);
    }
    /**
     * Method used to delete a single message by passing in the message object
     * @param message
     * @returns {Promise}
     */
    deleteMessage(message) {
        return new es6_promise_1.Promise((resolve, reject) => {
            // Also delete any attached files
            const proms = [];
            if (message.attachments !== undefined) {
                message.attachments.forEach((file) => {
                    if (file.path !== undefined) {
                        proms.push(File.deleteFile(file.path));
                    }
                });
            }
            es6_promise_1.Promise.all(proms).then(() => {
                this._msgDb.remove(message).then(() => {
                    this._log("Message successfully deleted with ID:", message._id);
                    resolve();
                }).catch(e => {
                    this._onError(`Couldn't delete message with ID '${message._id}'.`, e);
                    reject(e);
                });
            }).catch(e => {
                this._onError(`Couldn't delete attachment(s) for message with ID '${message._id}':`, e);
                reject(e);
            });
        });
    }
    /**
     * Delete a message locally by the _id
     * @param {string} id
     * @returns {Promise}
     */
    deleteMessageById(id) {
        this._log("Deleting message with ID:", id);
        return new es6_promise_1.Promise((resolve, reject) => {
            this.getMessageById(id).then(message => {
                this.deleteMessage(message).then(resolve).catch(reject);
            }).catch(e => {
                this._onError(`Couldn't get message with ID '${id}' to delete it.`, e);
                reject(e);
            });
        });
    }
    /**
     * Delete multiple messages locally based on a search query
     * @param {object} query
     * @returns {Promise}
     */
    deleteMessages(query) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._searchDb(this._msgDb, query).then((results) => {
                const proms = [];
                results.forEach((message) => {
                    proms.push(this.deleteMessage(message));
                });
                es6_promise_1.Promise.all(proms).then(resolve).catch((e) => {
                    this._onError(`Couldn't delete messages from database.`, e);
                    reject(e);
                });
            });
        });
    }
    /**
     * Used for efficient partial updates to a message object
     * @param messageId - The ID of the message
     * @param delta - Function which provides the current message as an argument and should return the updated message
     */
    saveMessage(messageId, delta) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._saveObject(CtXmppClient.OBJECT_TYPES.MESSAGE, messageId, delta, (object) => {
                resolve(object);
            }, (e) => {
                reject(e);
            });
        });
    }
    /**
     * Convenience method used to destroy all databases, an app repload is required after this method is called
     * @returns {Promise}
     */
    destroyDbs() {
        const proms = [this._msgDb.destroy(), this._contactDb.destroy(), this._cacheDb.destroy(), this._roomDb.destroy(), this._participantDb.destroy()];
        return new es6_promise_1.Promise((resolve, reject) => {
            es6_promise_1.Promise.all(proms).then(() => {
                this._initDbs();
                this._dispatchEvent(CtXmppClient.EVENT_TYPES.DBS_DESTROYED, null);
                resolve();
            }).catch(reject);
        });
    }
    /**
     * Set the users current chat status
     * @param status
     * @param label
     * @param send
     * @param metadata
     * @returns {Promise}
     */
    setChatStatus(status, label, send, metadata) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (CtXmppClient._validateChatStatus(status)) {
                const statusObject = {
                    status: status,
                    label: label,
                    metadata: metadata
                };
                if (!statusObject.label) {
                    switch (status) {
                        case CtXmppClient.CHAT_STATUSES.CHAT:
                            statusObject.label = "Available";
                            break;
                        case CtXmppClient.CHAT_STATUSES.AWAY:
                            statusObject.label = "Away";
                            break;
                        case CtXmppClient.CHAT_STATUSES.XA:
                            statusObject.label = "Extended Away";
                            break;
                        case CtXmppClient.CHAT_STATUSES.DND:
                            statusObject.label = "Do Not Disturb";
                            break;
                    }
                }
                this._setCacheItem("chat_status", statusObject).then(() => {
                    if (send === true)
                        this._sendPresence();
                    resolve(statusObject);
                }).catch(reject);
            }
            else {
                reject("Invalid chat status provided, one of 'away', 'chat', 'dnd' or 'xa' should be specified.");
            }
        });
    }
    /**
     * Method to return the users current chat status
     * @returns {Promise}
     */
    getChatStatus() {
        return this._getCacheItem("chat_status");
    }
    /**
     * Interactions with the roster database
     */
    /**
     * Method to query the roster database to retrieve specific contacts
     * @param {Object} query An object signature to match contacts on
     * @param {string[]} [sortFields] Defines a list of fields defining how you want to sort. Note that sorted fields also have to be selected in the query.
     * @param {string[]} [includeFields] Defines a list of fields that you want to receive. If omitted, you get the full documents.
     * @param {number} [skip] Number of docs to skip before returning.
     * @param {number} [limit] Maximum number of documents to return.
     * @returns {Promise}
     */
    findContacts(query, sortFields, includeFields, limit, skip) {
        return this._searchDb(this._contactDb, query, sortFields, includeFields, limit, skip);
    }
    /**
     * Method used to return a list of the users contacts
     * @returns {Promise}
     */
    getContacts() {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._contactDb.allDocs({ "include_docs": true }).then((results) => {
                const contacts = results.rows.filter((row) => {
                    //TODO: Figure out what to do with PouchDB views? Filtering them out for now
                    return (!row.doc.language);
                }).map((row) => {
                    return row.doc;
                });
                resolve(contacts);
            }).catch((error) => {
                this._onError(`Unable to get contacts from database.`, error);
                reject(error);
            });
        });
    }
    /**
     * Methods to deal with chat markers: Read & Acknowledged
     */
    /**
     * Convenience method to determine if a message should be marked or not
     * @param message
     * @param type
     * @returns {boolean}
     * @private
     */
    _shouldMarkMessage(message, type) {
        let result = true;
        // We need to figure out if we've already marked this message with this type
        message.state.markers.every((marker) => {
            if (marker.type === type) {
                if (message.type === "groupchat" && marker.sender_resource === this.username) {
                    result = false;
                    return false;
                }
                else if (marker.sender_id === this._jid) {
                    result = false;
                    return false;
                }
            }
            return true;
        });
        return result;
    }
    /**
     * Mark a single message
     * @param {Object} message - The entire message object to be marked as received
     * @param {String} type - The type of marker (i.e. received, read or acknowledged)
     * @param {Boolean} dispatch - Whether or not to dispatch the message updated event
     * @returns {Promise}
     */
    _markMessage(message, type, dispatch = true) {
        return new es6_promise_1.Promise((resolve, reject) => {
            // If this is our message, or if this message has already been marked with this type before, just resolve
            if (message.mine === true || this._shouldMarkMessage(message, type) === false) {
                resolve(message);
            }
            else {
                // Mark the message as received via chat markers
                const markerMessage = {
                    "$attributes": {
                        "id": this.getUniqueId(),
                        "to": Strophe.getBareJidFromJid(message.stanza.message.$attributes.from),
                        "from": this._connection.jid,
                    },
                    "timestamp": {
                        "$attributes": {
                            "xmlns": CtXmppClient.NAMESPACES.CT_CLIENT_TIMESTAMP
                        },
                        "$value": Date.now()
                    },
                };
                markerMessage[type] = {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.CHAT_MARKERS,
                        "id": message._id
                    }
                };
                if (message.type === "groupchat") {
                    markerMessage.$attributes.type = "groupchat";
                }
                this.sendMessage(markerMessage).then(() => {
                    this.saveMessage(message._id, (doc) => {
                        doc.state[type] = true;
                        return doc;
                    }).then((message) => {
                        if (dispatch !== false)
                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, message);
                        resolve(message);
                    }).catch(reject);
                }).catch(reject);
            }
        });
    }
    /**
     * Mark Message Read
     */
    /**
     * Abstraction of the markMessage method to quickly mark a single message as read
     * @param message - The message object
     * @returns {Promise<Interfaces.XmppMessageObject>}
     */
    markMessageRead(message) {
        console.log("MARK MESSAGE READ:", message);
        return this._markMessage(message, CtXmppClient.MARKER_TYPES.READ);
    }
    /**
     * Abstraction of the markMessage method to quick mark a single message as read by message ID
     * @param messageId - The ID of the message
     * @returns {Promise<Interfaces.XmppMessageObject>}
     */
    markMessageReadById(messageId) {
        return this.getMessageById(messageId).then((message) => {
            return this.markMessageRead(message);
        });
    }
    /**
     * Mark Message Acknowledged
     */
    /**
     * Abstraction of the markMessage method to quickly mark a single message as acknowledged
     * @param message - The message object
     * @returns {Promise<Interfaces.XmppMessageObject>}
     */
    markMessageAcknowleged(message) {
        return this._markMessage(message, CtXmppClient.MARKER_TYPES.ACKNOWLEDGED);
    }
    /**
     * Abstraction of the markMessage method to quick mark a single message as acknowledged by message ID
     * @param messageId - The ID of the message
     * @returns {Promise<Interfaces.XmppMessageObject>}
     */
    markMessageAcknowledgedById(messageId) {
        return this.getMessageById(messageId).then((message) => {
            return this.markMessageAcknowleged(message);
        });
    }
    /**
     * Private method used to dispatch an event of a specific type
     * @param type
     * @param data
     * @private
     */
    _dispatchEvent(type, data) {
        if (!CtXmppClient._validateEventType(type)) {
            throw new Error("Invalid event type provided.");
        }
        if (this._eventListeners[type] !== undefined) {
            this._eventListeners[type].forEach((callback) => {
                callback(data);
            });
        }
    }
    /**
     * MUCSub - Multi-User Chat Subscription
     * Methods which interface with MUCSub allowing for the creation of and subscription to chat rooms
     */
    /**
     * Method used to create a non-anonymous room
     * @param roomName
     * @returns {Promise}
     */
    createRoom(roomName) {
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            const to = `${roomName}@${this._options.mucHost}`;
            let $pres = {
                "$attributes": {
                    "to": `${to}/${this.username}`,
                    "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT
                },
                "x": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC
                    }
                }
            };
            this._connection.addHandler($stanza => {
                const stanza = CtXmppClient.xmlToJson($stanza);
                if (stanza.$attributes !== undefined && stanza.$attributes.type === "error") {
                    const error = new Error(`Failed to create room '${roomName}'.`);
                    this._onError(`Unable to create room with name '${roomName}'.`, error);
                    reject(error);
                }
                else {
                    // Query the room for configuration options
                    this.sendIq(to, "get", {
                        "query": {
                            "$attributes": {
                                "xmlns": CtXmppClient.NAMESPACES.MUC_OWNER
                            }
                        }
                    }).then(() => {
                        // Set the whois configuration to be anyone so we can get users actual JIDs
                        this.sendIq(to, "set", {
                            "query": {
                                "$attributes": {
                                    "xmlns": CtXmppClient.NAMESPACES.MUC_OWNER
                                },
                                "x": {
                                    "$attributes": {
                                        "xmlns": CtXmppClient.NAMESPACES.X_DATA,
                                        "type": "submit"
                                    },
                                    "field": [
                                        {
                                            "$attributes": {
                                                "var": "muc#roomconfig_whois"
                                            },
                                            "value": "anyone"
                                        }
                                    ]
                                }
                            }
                        }).then(() => {
                            // TODO: Handle room creation errors and on success add new room to local DB
                            this._log(`Room '${roomName}' successfully created.`);
                            resolve();
                        }).catch((error) => reject);
                    }).catch((error) => reject);
                }
                return false;
            }, CtXmppClient.NAMESPACES.MUC, "presence", null, null, `${to}/${this.username}`, { ignoreNamespaceFragment: true });
            this._connection.send(CtXmppClient.jsonToXml("presence", $pres));
        });
    }
    /**
     * Method used to destroy a room on the server
     * @param roomName
     * @returns {Promise}
     */
    destroyRoom(roomName) {
        if (!roomName)
            throw new Error("Parameter 'roomName' must be provided.");
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            this.sendIq(`${roomName}@${this._options.mucHost}`, "set", {
                "query": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC_OWNER
                    },
                    "destroy": {}
                }
            }).then(() => {
                // TODO: Handle room destroy errors and on success remove room from local DB
                resolve();
            }).catch((error) => reject);
        });
    }
    /**
     * Method used to list all rooms the client knows about and also query the server for the list of rooms
     * @param queryServer
     * @returns {Promise}
     */
    listRooms(queryServer) {
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            const fetchFromDb = () => {
                this._roomDb.allDocs({
                    include_docs: true
                }).then(docs => {
                    const rooms = docs.rows.map(row => {
                        return row.doc;
                    });
                    resolve(rooms);
                }).catch(error => {
                    this._onError(`Couldn't fetch list of rooms from database.`, error);
                    reject(error);
                });
            };
            // If we don't have an active connection or the user request we don't contact the server then we just get the local results
            if (this.connected === true && queryServer !== false) {
                // Otherwise contact the server and merge any updates to the local database
                this.sendIq(this._options.mucHost, "get", {
                    "query": {
                        "$attributes": {
                            "xmlns": "http://jabber.org/protocol/disco#items"
                        }
                    }
                }).then((stanza) => {
                    if (stanza.iq && stanza.iq.query && stanza.iq.query.item) {
                        let rooms = [];
                        // If there are multiple rooms then iterate over them
                        if (Array.isArray(stanza.iq.query.item)) {
                            rooms = stanza.iq.query.item.map((room) => {
                                return {
                                    "_id": room.$attributes.jid,
                                    "name": Strophe.getNodeFromJid(room.$attributes.jid)
                                };
                            });
                            // Or if there is just one, add it to the array
                        }
                        else {
                            rooms = [{
                                    "_id": stanza.iq.query.item.$attributes.jid,
                                    "name": Strophe.getNodeFromJid(stanza.iq.query.item.$attributes.jid)
                                }];
                        }
                        this._roomDb.allDocs({
                            include_docs: true
                        }).then(docs => {
                            const proms = [];
                            // Go through each of the current rooms and compare against the rooms from the server
                            // to figure out which ones we want need to delete
                            docs.rows.forEach((row) => {
                                let cRoom = row.doc;
                                let nRoom = null;
                                rooms.every((room) => {
                                    if (room._id === cRoom._id) {
                                        nRoom = room;
                                        return false;
                                    }
                                    return true;
                                });
                                if (nRoom === null) {
                                    // Room doesn't exist on the server anymore, so delete it locally
                                    proms.push(this._roomDb.remove(cRoom));
                                }
                            });
                            // For either of the new rooms, either add them or update them
                            rooms.forEach((nRoom) => {
                                const update = new es6_promise_1.Promise((resolve, reject) => {
                                    this.saveRoom(nRoom._id, (cRoom) => {
                                        if (cRoom._id !== undefined) {
                                            // Need to update the room
                                            if (cRoom.name !== nRoom.name) {
                                                cRoom.name = nRoom.name;
                                            }
                                            cRoom.updated_at = Date.now();
                                        }
                                        else {
                                            // Need to create the room
                                            cRoom = {
                                                "_id": nRoom._id,
                                                "name": nRoom.name,
                                                "ts": Date.now(),
                                                "updated_at": null
                                            };
                                        }
                                        return cRoom;
                                    }).then(resolve).catch(reject);
                                });
                                proms.push(update);
                            });
                            es6_promise_1.Promise.all(proms).then(() => {
                                fetchFromDb();
                            }).catch((e) => {
                                this._onError("Couldn't merge list of rooms from server with locally stored list of rooms.", e);
                                reject(e);
                            });
                        });
                        resolve(rooms);
                    }
                    else {
                        // No rooms on the server
                        resolve([]);
                    }
                }).catch(reject);
            }
            else {
                fetchFromDb();
            }
        });
    }
    /**
     * Method used to list users MUC subscriptions
     * @returns {Promise}
     */
    listSubscriptions() {
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            this.sendIq(this._options.mucHost, "get", {
                "subscriptions": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC_SUB
                    }
                }
            }).then((stanza) => {
                let subscriptions = [];
                if (stanza.iq && stanza.iq.subscriptions && stanza.iq.subscriptions.subscription) {
                    if (Array.isArray(stanza.iq.subscriptions.subscription)) {
                        subscriptions = stanza.iq.subscriptions.subscription.map(sub => {
                            if (sub.$attributes && sub.$attributes.jid) {
                                return {
                                    "name": Strophe.getNodeFromJid(sub.$attributes.jid),
                                    "jid": sub.$attributes.jid
                                };
                            }
                        });
                    }
                    else {
                        if (stanza.iq.subscriptions.subscription.$attributes && stanza.iq.subscriptions.subscription.$attributes.jid) {
                            subscriptions = [{
                                    "name": Strophe.getNodeFromJid(stanza.iq.subscriptions.subscription.$attributes.jid),
                                    "jid": stanza.iq.subscriptions.subscription.$attributes.jid
                                }];
                        }
                    }
                }
                resolve(subscriptions);
            }).catch(reject);
        });
    }
    /**
     * Method used to join a room by name as a participant
     * @param roomName
     * @returns {Promise}
     */
    joinRoom(roomName) {
        if (!this._options.mucHost)
            throw new Error("'mucHost' must be provided as an option.");
        if (!roomName)
            throw new Error("Parameter 'roomName' must be provided.");
        return new es6_promise_1.Promise((resolve, reject) => {
            // NOTE: I've not implemented reserved nick functionality, see https://xmpp.org/extensions/xep-0045.html#reservednick
            // The reason for this is that the current XMPP server doesn't appear to support this it returns "service-unavailable"
            // and we don't yet have a requirement for this
            const roomJid = `${roomName}@${this._options.mucHost}`;
            this._createPresenceObject().then(($pres) => {
                $pres.$attributes.to = `${roomJid}/${this.username}`;
                $pres.x = {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC
                    },
                    "history": {
                        "$attributes": {
                            "maxchars": 0 // Don't get any history from the room we will do this with the MAM so we can get chat markers too
                        }
                    }
                };
                // Handler used to catch initial room join presence
                this._connection.addHandler(($stanza) => {
                    try {
                        const stanza = CtXmppClient.xmlToJson($stanza);
                        if (!stanza.presence || stanza.presence.error !== undefined) {
                            this._onError(`Couldn't join room '${roomName}' with nick '${this.username}'.`, $stanza);
                            reject($stanza);
                        }
                        else {
                            this.saveRoom(roomJid, (_room) => {
                                //TODO: Merge duplicate code with listRooms
                                if (_room._id !== undefined) {
                                    if (_room.name !== roomName) {
                                        _room.name = roomName;
                                        _room.updated_at = Date.now();
                                    }
                                }
                                else {
                                    // Need to create the room
                                    _room = {
                                        "_id": roomJid,
                                        "name": roomName,
                                        "ts": Date.now(),
                                        "updated_at": null
                                    };
                                }
                                return _room;
                            }).then((room) => {
                                // Add this room to the _joinedRooms object so we know what rooms to send presence to
                                this._joinedRooms[roomName] = Date.now();
                                if (this._options.mam.auto !== false) {
                                    // Query the MAM for any missed messages
                                    this.queryMamByRoomName(roomName).then(() => {
                                        resolve(room);
                                    }).catch(reject);
                                }
                                else {
                                    resolve(room);
                                }
                            }).catch(reject);
                        }
                    }
                    catch (e) {
                        this._onError("Couldn't convert stanza XML to JSON", e);
                        reject(e);
                    }
                    return false;
                }, CtXmppClient.NAMESPACES.JABBER_CLIENT, "presence", null, null, `${roomName}@${this._options.mucHost}/${this.username}`, { ignoreNamespaceFragment: true });
                this._connection.send(CtXmppClient.jsonToXml("presence", $pres));
            });
        });
    }
    /**
     * Method used to leave an already joined room
     * @param roomName
     * @returns {Promise}
     */
    leaveRoom(roomName) {
        if (!this._options.mucHost)
            throw new Error("'mucHost' must be provided as an option.");
        if (!roomName)
            throw new Error("Parameter 'roomName' must be provided.");
        return new es6_promise_1.Promise((resolve) => {
            const $pres = {
                "$attributes": {
                    "from": this._jid,
                    "xmlns": CtXmppClient.NAMESPACES.JABBER_CLIENT,
                    "to": `${roomName}@${this._options.mucHost}/${this.username}`,
                    "type": "unavailable"
                }
            };
            this._connection.send(CtXmppClient.jsonToXml("presence", $pres));
            // Remove the room from the _joinedRoom object
            delete this._joinedRooms[roomName];
            resolve();
        });
    }
    /**
     * Method used to create a new subscription to a room by name
     * @param roomName
     * @param nodes
     * @returns {Promise}
     */
    subscribeToRoom(roomName, nodes) {
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        if (!roomName)
            throw new Error("Parameter 'roomName' must be provided.");
        return new es6_promise_1.Promise((resolve, reject) => {
            const payload = {
                "subscribe": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC_SUB,
                        "nick": this.username
                    }
                }
            };
            if (!nodes) {
                nodes = [];
                for (let key in CtXmppClient.MUC_NODES) {
                    nodes.push(CtXmppClient.MUC_NODES[key]);
                }
            }
            if (nodes.length > 0) {
                payload.subscribe.event = [];
                nodes.forEach((node) => {
                    payload.subscribe.event.push({
                        "$attributes": {
                            "node": node
                        }
                    });
                });
            }
            this.sendIq(`${roomName}@${this._options.mucHost}`, "set", payload).then((stanza) => {
                if (stanza.iq && stanza.iq.subscribe) {
                    if (this._options.mam.auto !== false) {
                        // Figure out if we subscribed to the message node, if we did we want to query the MAM for any missed messages
                        let queryMam = false;
                        nodes.every((node) => {
                            if (node === CtXmppClient.MUC_NODES.MESSAGES) {
                                queryMam = true;
                                return false;
                            }
                            return true;
                        });
                        if (queryMam) {
                            this.queryMamByRoomName(roomName).then(() => {
                                resolve(stanza);
                            }).catch(reject);
                        }
                        else {
                            resolve(stanza);
                        }
                    }
                    else {
                        resolve(stanza);
                    }
                }
                else {
                    this._onError(`Couldn't subscribe to room '${roomName}.'`, stanza);
                }
            }).catch(reject);
        });
    }
    /**
     * Method used to remove a subscription to a room by name
     * @param roomName
     * @returns {Promise}
     */
    unsubscribeFromRoom(roomName) {
        if (!this._options.mucHost)
            throw new Error("mucHost must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            this.sendIq(`${roomName}@${this._options.mucHost}`, "set", {
                "unsubscribe": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MUC_SUB
                    },
                }
            }).then(resolve).catch(reject);
        });
    }
    /**
     * Get a room by its DB ID (_id)
     * @param id
     */
    getRoomById(id) {
        if (!id)
            throw new Error(`A room ID must be provided.`);
        this._log("Getting room with ID:", id);
        return this._roomDb.get(id);
    }
    /**
     * Method to query the room database to retrieve specific rooms
     * @param {Object} query An object signature to match rooms on
     * @param {string[]} [sortFields] Defines a list of fields defining how you want to sort. Note that sorted fields also have to be selected in the query.
     * @param {string[]} [includeFields] Defines a list of fields that you want to receive. If omitted, you get the full documents.
     * @param {number} [skip] Number of docs to skip before returning.
     * @param {number} [limit] Maximum number of documents to return.
     * @returns {Promise}
     */
    findRooms(query, sortFields, includeFields, limit, skip) {
        return this._searchDb(this._roomDb, query, sortFields, includeFields, limit, skip);
    }
    /**
     * User to either save a new room object or udpate an existing one
     * @param roomJid - The JID of the room
     * @param delta - Function which provides the current room as an argument and should return the updated room
     */
    saveRoom(roomJid, delta) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._saveObject(CtXmppClient.OBJECT_TYPES.ROOM, roomJid, delta, (object) => {
                resolve(object);
            }, (e) => {
                reject(e);
            });
        });
    }
    /**
     * User to either save a new room object or udpate an existing one
     * @param participantRoomJid - The participants room JID (e.g. test_room@conference.commontime.com/john_doe)
     * @param delta - Function which provides the current room as an argument and should return the updated room
     */
    saveParticipant(participantRoomJid, delta) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._saveObject(CtXmppClient.OBJECT_TYPES.PARTICIPANT, participantRoomJid, delta, (object) => {
                resolve(object);
            }, (e) => {
                reject(e);
            });
        });
    }
    /**
     * Method use to list all participants assoicated to a room
     * @param roomName
     * @returns {Promise}
     */
    listParticipantsByRoom(roomName) {
        return this._searchDb(this._participantDb, {
            "room_name": roomName
        });
    }
    /**
     * Method to get a single participant by room name and user JID
     * @param roomName
     * @param jid
     * @returns {Promise}
     */
    getParticipantByRoomAndJid(roomName, jid) {
        return new es6_promise_1.Promise((resolve, reject) => {
            return this._searchDb(this._participantDb, {
                "room_name": roomName,
                "jid": jid
            }).then((results) => {
                if (results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    resolve(null);
                }
            }).catch(reject);
        });
    }
    /**
     * Convenience method used to clean up the list of room participants based on a timestamp
     * @param ts
     * @returns {Promise}
     */
    purgeParticipantsByUpdatedAt(ts) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._searchDb(this._participantDb, {
                "updated_at": {
                    "$lt": ts
                }
            }).then((results) => {
                const proms = results.map((doc) => {
                    return this._participantDb.remove(doc);
                });
                es6_promise_1.Promise.all(proms).then(resolve).catch(reject);
            }).catch((e) => {
                console.error(e);
            });
        });
    }
    /**
     * Methods interfacing with the Message Archive (XEP-0313)
     */
    /**
     *
     * @param to - The room JID or null if you want all messages
     * @param timestamp {Number} - (ms) The time you want to start receiving messages from, null if you want everything up to the limit
     * @param timeLimitTs {Number} - (ms) The maximum number of milliseconds (e.g. 3.6e+6 for 1 hour)
     * @param dispatch
     * @returns {Promise}
     */
    queryMam(to, timestamp = null, jid = null, timeLimitTs, dispatch = true) {
        const queryId = this.getUniqueId();
        return new es6_promise_1.Promise((resolve, reject) => {
            const limit = (timeLimitTs || this._options.mam.defaultTimeLimit);
            if (timestamp === null || timestamp < (Date.now() - limit)) {
                timestamp = (Date.now() - limit);
            }
            const timestampWithPadding = (timestamp - 300000); // Minus 5 minutes to account for any time difference on clients and servers
            const endTs = Date.now();
            if (timestampWithPadding >= endTs)
                throw new Error(`The start timestamp (${timestampWithPadding}) cannot be equal to or larger than the end timestamp (${endTs}).`);
            const startDate = new Date(timestampWithPadding);
            const endDate = new Date(endTs);
            this._log(`Querying the message archive for start date '${startDate}' and end date '${endDate}'.`);
            // Array to store the stanzas from the MAM query we need to process
            const _stanzasToProcess = [];
            // Array of message IDs we need to post-process (i.e. Mark any that don't already have markers)
            const _messagesToPostProcess = [];
            // Set-up the connection handler to listen for the MAM messages
            this._connection.addHandler(($stanza) => {
                // Convert the stanza to JSON
                const stanza = CtXmppClient.xmlToJson($stanza);
                // Add any processable stanzas to the array
                if (stanza.message.result && stanza.message.result.forwarded && stanza.message.result.forwarded.message) {
                    _stanzasToProcess.push(stanza.message.result.forwarded);
                }
                // Detect when we get the finished message from the MAM query so we know when we've got everything we asked for
                const finished = (stanza.message.fin !== undefined && stanza.message.fin.$attributes !== undefined && stanza.message.fin.$attributes.xmlns === CtXmppClient.NAMESPACES.MAM);
                // If we've finished then its time to process the messages
                if (finished === true) {
                    // Now we've got all the historic messages from the MAM we can go back and mark any we've not seen before
                    const proms = [];
                    _stanzasToProcess.forEach((stanza) => {
                        proms.push(new es6_promise_1.Promise((resolve, reject) => {
                            const defaults = { state: { sent: true } };
                            // If the message doesn't have a timestamp node then we should use the one provided by the MAM
                            // TODO: Use server provided timestamps when implemented
                            let clientTs = false;
                            try {
                                clientTs = (stanza.message.timestamp.$value !== undefined);
                            }
                            catch (e) { }
                            if (clientTs === false) {
                                if (stanza.delay && stanza.delay.$attributes.stamp) {
                                    let ts = null;
                                    try {
                                        ts = new Date(stanza.delay.$attributes.stamp).getTime();
                                    }
                                    catch (e) {
                                        console.error("Couldn't parse stanza timestamp to integer.");
                                    }
                                    if (ts !== null) {
                                        defaults.ts = ts;
                                    }
                                }
                            }
                            if (CtXmppClient._isMarkerMessage(stanza)) {
                                this._processMarkerMessage(stanza, false).then(resolve).catch(reject);
                            }
                            else if (stanza.message.$attributes && stanza.message.$attributes.type === "groupchat") {
                                this._processGroupMessage(stanza, defaults, false, false).then((message) => {
                                    _messagesToPostProcess.push(message._id);
                                    resolve();
                                }).catch(reject);
                            }
                            else if (stanza.message.$attributes && stanza.message.$attributes.type === "chat") {
                                this._processNewMessage(stanza, defaults, false, false).then((message) => {
                                    _messagesToPostProcess.push(message._id);
                                    resolve();
                                }).catch(reject);
                            }
                            else {
                                resolve();
                            }
                        }));
                    });
                    // TODO: Handle errors
                    // Once we've processed all the messages its time to go back and mark any messages using chat markers
                    // We have to do this after the fact because otherwise we won't know if the next message in the MAM query is actually a chat marker
                    // for the message we want to mark and we'd end up marking it twice
                    es6_promise_1.Promise.all(proms).then(() => {
                        const postProcessProms = [];
                        _messagesToPostProcess.forEach((messageId) => {
                            postProcessProms.push(new es6_promise_1.Promise((resolve, reject) => {
                                this.getMessageById(messageId).then((message) => {
                                    // Dispatch an event to indicate a new or updated message as we suppressed these earlier
                                    if (dispatch !== false) {
                                        // Is it new?
                                        if (message.ts > timestamp) {
                                            // Yes
                                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.NEW_MESSAGE, message);
                                        }
                                        else {
                                            // No, so its an update
                                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, message);
                                        }
                                    }
                                    resolve(message);
                                    // Mark the message if we haven't already
                                    this._markMessage(message, CtXmppClient.MARKER_TYPES.RECEIVED, dispatch);
                                }).catch(reject);
                            }));
                        });
                        es6_promise_1.Promise.all(postProcessProms).then(resolve).catch(reject);
                    }).catch(e => console.error(e));
                }
                // Stop listening for message when we get the <fin> node (i.e. the server has finished sending messages from the MAM)
                return !finished;
            }, CtXmppClient.NAMESPACES.JABBER_CLIENT, "message", null, null, to);
            const payload = {
                "query": {
                    "$attributes": {
                        "xmlns": CtXmppClient.NAMESPACES.MAM
                    },
                    "x": {
                        "$attributes": {
                            "xmlns": "jabber:x:data",
                            "type": "submit"
                        },
                        "field": [
                            {
                                "$attributes": {
                                    "var": "FORM_TYPE",
                                    "type": "hidden"
                                },
                                "value": CtXmppClient.NAMESPACES.MAM
                            },
                            {
                                "$attributes": {
                                    "var": "start"
                                },
                                "value": startDate.toISOString()
                            },
                            {
                                "$attributes": {
                                    "var": "end"
                                },
                                "value": endDate.toISOString()
                            }
                        ]
                    },
                    "set": {
                        "$attributes": {
                            "xmlns": CtXmppClient.NAMESPACES.RESULT_SET_MANAGEMENT
                        },
                        "before": ""
                    }
                }
            };
            if (jid !== null) {
                payload.query.x.field.push({
                    "$attributes": {
                        "var": "with"
                    },
                    "value": jid
                });
            }
            // Send the actual MAM query to start the whole process
            this.sendIq(to, "set", payload, null, queryId).catch((e) => {
                this._onError("Couldn't query the MAM:", e);
                reject(e);
            });
        });
    }
    /**
     * Method to get missed messages for a specific room
     * @param roomName
     * @param dispatch
     * @returns {Promise}
     */
    queryMamByRoomName(roomName, dispatch = true) {
        if (!this._options.mucHost)
            throw new Error("'mucHost' must be provided as an option.");
        return new es6_promise_1.Promise((resolve, reject) => {
            const to = `${roomName}@${this._options.mucHost}`;
            this.getChatHistory(to).then((results) => {
                let timestamp = null;
                if (results.length > 0) {
                    // Chat history only sorts by the timestamp, we also need to filter on updated_at so we know when we last stanza
                    // for this room was received. We also want the last message first.
                    const filteredItems = results.sort((a, b) => {
                        // Sort on the updated_at field
                        const x = b.updated_at - a.updated_at;
                        // Then sort on the ts field
                        return (x === 0) ? b.ts - a.ts : x;
                    });
                    const lastMessage = filteredItems[0];
                    timestamp = lastMessage.updated_at || lastMessage.ts;
                }
                this.queryMam(to, timestamp, null, null, dispatch).then(resolve).catch(reject);
            }).catch((e) => console.error);
        });
    }
    /**
     * Convenience method to retrieve messages from the MAM by recipient
     * @param recipient
     * @param dispatch
     * @returns {Promise}
     */
    queryMamByRecipient(recipient, dispatch = true) {
        if (this.connected === false)
            throw new Error("You must have an active connection to query the MAM.");
        return new es6_promise_1.Promise((resolve, reject) => {
            this.getChatHistory(recipient).then((results) => {
                let timestamp = null;
                if (results.length > 0) {
                    // Chat history only sorts by the timestamp, we also need to filter on updated_at so we know when we last stanza
                    // for this room was received. We also want the last message first.
                    const filteredItems = results.sort((a, b) => {
                        // Sort on the updated_at field
                        const x = b.updated_at - a.updated_at;
                        // Then sort on the ts field
                        return (x === 0) ? b.ts - a.ts : x;
                    });
                    const lastMessage = filteredItems[0];
                    timestamp = lastMessage.updated_at || lastMessage.ts;
                }
                this.queryMam(null, timestamp, recipient, null, dispatch).then(resolve).catch(reject);
            }).catch((e) => console.error);
        });
    }
    /**
     * Base method used to persist objects to a database
     * @param object
     * @param id
     * @param delta
     * @param successCb
     * @param errorCb
     * @private
     */
    _saveObject(object, id, delta, successCb, errorCb) {
        let _db = null;
        switch (object) {
            case CtXmppClient.OBJECT_TYPES.MESSAGE:
                _db = this._msgDb;
                break;
            case CtXmppClient.OBJECT_TYPES.CONTACT:
                _db = this._contactDb;
                break;
            case CtXmppClient.OBJECT_TYPES.ROOM:
                _db = this._roomDb;
                break;
            case CtXmppClient.OBJECT_TYPES.PARTICIPANT:
                _db = this._participantDb;
                break;
            case CtXmppClient.OBJECT_TYPES.CACHE_ITEM:
                _db = this._cacheDb;
                break;
        }
        if (_db === null)
            throw new Error(`The object type provided (${object}) is not valid.`);
        if (this._saveDebounce[object] === undefined)
            this._saveDebounce[object] = {};
        if (!this._saveDebounce[object][id]) {
            this._saveDebounce[object][id] = true;
            _db.upsert(id, delta).then((res) => {
                // There might be a case where we returned false in the upsert delta and therefore a message was never created
                // if that's the case there won't be a revision and nothing to get, so just ignore
                if (res.rev !== undefined) {
                    _db.get(id).then((doc) => {
                        delete this._saveDebounce[object][id];
                        if (successCb)
                            successCb(doc);
                    }).catch((e) => {
                        this._onError(`Couldn't get ${object} with ID '${id}' after performing an update.`, e);
                        if (errorCb)
                            errorCb(e);
                    });
                }
                else {
                    delete this._saveDebounce[object][id];
                    if (successCb)
                        successCb(null);
                }
            }).catch((e) => {
                this._log(`Couldn't update ${object} with ID '${id}'.`, e);
                if (errorCb)
                    errorCb(e);
            });
        }
        else {
            setTimeout(() => {
                this._saveObject(object, id, delta, successCb, errorCb);
            }, 250);
        }
    }
    _downloadAttachments(message, dispatch = true) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (Array.isArray(message.attachments) && message.attachments.length > 0) {
                // Download attachments
                let promiseChain = es6_promise_1.Promise.resolve({});
                message.attachments.forEach((attachment, index) => {
                    promiseChain = promiseChain.then(() => {
                        return new es6_promise_1.Promise((resolve, reject) => {
                            // Only download the file if we haven't done already
                            // TODO: Figure out if this is robust enough
                            if (attachment.path === undefined) {
                                File.download(attachment.get).then((result) => {
                                    message.attachments[index].path = result.source;
                                    resolve();
                                }).catch(reject);
                            }
                            else {
                                resolve();
                            }
                        });
                    });
                });
                promiseChain.then(() => {
                    this.saveMessage(message._id, () => {
                        // Update message with attachments by returning the updated object
                        return message;
                    }).then((_message) => {
                        // Dispatch the appropriate event
                        if (dispatch !== false) {
                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, _message);
                        }
                        this._log(`Successfully updated message '${_message._id}' with attachments.`, _message);
                        resolve(_message);
                    }).catch((e) => {
                        this._onError(`Unable to update message '${message._id}' with attachments:`, e);
                        reject(e);
                    });
                }).catch((e) => {
                    this._onError("Unable to download all message attachments:", e);
                    reject(e);
                });
            }
            else {
                // No attachments so no modifications needed
                resolve(message);
            }
        });
    }
    /**
     * Private method used to internally process a new message
     * @param stanza
     * @param overrides
     * @param mark
     * @param dispatch
     * @returns {Promise}
     * @private
     */
    _processNewMessage(stanza, overrides, mark = true, dispatch = true) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._messageStanzaToDbObject(stanza, overrides)
                .then((message) => {
                // Dispatch the appropriate event
                if (dispatch !== false) {
                    if (message.updated_at === null) {
                        this._dispatchEvent(CtXmppClient.EVENT_TYPES.NEW_MESSAGE, message);
                    }
                    else {
                        this._dispatchEvent(CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, message);
                    }
                }
                return this._downloadAttachments(message, dispatch);
            })
                .then((message) => {
                // Only mark the message if the sender say's it can be marked based on XEP-0333 and its not our message
                if (stanza.message.markable && mark === true) {
                    this._markMessage(message, CtXmppClient.MARKER_TYPES.RECEIVED, dispatch).then(resolve).catch(reject);
                }
                else {
                    resolve(message);
                }
            }).catch((e) => this._onError);
        });
    }
    /**
     * Abstraction of the _processNewMessage method to specifically handle group messages
     * @param stanza
     * @param overrides
     * @param mark
     * @param dispatch
     * @returns {Promise}
     * @private
     */
    _processGroupMessage(stanza, overrides, mark = true, dispatch = true) {
        // Get the nickname from the room JID to determine if we sent this message
        const _overrides = CtXmppClient._merge({
            type: "groupchat",
            mine: (Strophe.getResourceFromJid(stanza.message.$attributes.from) === this.username)
        }, overrides);
        return this._processNewMessage(stanza, _overrides, mark, dispatch);
    }
    /**
     * Private method used to process incoming marker messages and mark local messages accordingly
     * @param stanza
     * @param dispatch
     * @returns {Promise}
     * @private
     */
    _processMarkerMessage(stanza, dispatch = true) {
        return new es6_promise_1.Promise((resolve, reject) => {
            // Figure out if and which type of chat marker we are dealing with
            let markerType = null;
            if (stanza.message.received) {
                markerType = CtXmppClient.MARKER_TYPES.RECEIVED;
            }
            else if (stanza.message.read) {
                markerType = CtXmppClient.MARKER_TYPES.READ;
            }
            else if (stanza.message.acknowledged) {
                markerType = CtXmppClient.MARKER_TYPES.ACKNOWLEDGED;
            }
            // If we are dealing with a chat marker then let's do it
            if (markerType !== null) {
                // We've received a chat marker telling us the recipient has either received, read or acknowledged one of our messages, let's find that message and mark it so
                const messageId = (stanza.message[markerType].$attributes !== undefined && stanza.message[markerType].$attributes.id !== undefined) ? stanza.message[markerType].$attributes.id : null;
                if (messageId !== null) {
                    const from = Strophe.getBareJidFromJid(stanza.message.$attributes.from);
                    const resource = Strophe.getResourceFromJid(stanza.message.$attributes.from);
                    this.saveMessage(messageId, (message) => {
                        // If the message doesn't already exists then ignore
                        if (!message._id)
                            return false;
                        // Don't mark the message unless its been marked as markable
                        if (!message.stanza.message.markable)
                            return false;
                        // If we've already had a marker of this type for this message from the same person, ignore it.
                        const ignore = message.state.markers.some(function (_marker) {
                            if (_marker.type === markerType && (_marker.sender_id === from && _marker.sender_resource === resource)) {
                                return true;
                            }
                        });
                        if (ignore === true)
                            return false;
                        let ts = null;
                        try {
                            ts = parseInt(stanza.message.timestamp.$value);
                        }
                        catch (e) { }
                        const marker = {
                            type: markerType,
                            sender_id: from,
                            sender_resource: resource,
                            recipient_id: stanza.message.$attributes.to,
                            ts: ts,
                            priority: CtXmppClient.MARKER_PRIORITIES[markerType]
                        };
                        // Add the new marker to the markers array
                        message.state.markers.push(marker);
                        // Sort the markers based on priority and then timestamp
                        message.state.markers = message.state.markers.sort(function (a, b) {
                            if (a.priority !== b.priority) {
                                return (a.priority - b.priority);
                            }
                            else if (b.ts !== null && a.ts !== null) {
                                return (b.ts - a.ts);
                            }
                        });
                        // Update the flag to indicate we have had at least one of this type of marker
                        message.state[markerType] = true;
                        return message;
                    }).then((message) => {
                        if (message !== null) {
                            const receipt = {
                                message_id: message._id,
                                message: message,
                                type: markerType,
                                sender_id: from,
                                sender_resource: resource
                            };
                            if (dispatch !== false)
                                this._dispatchEvent(CtXmppClient.EVENT_TYPES.RECEIPT_RECIEVED, receipt);
                            if (dispatch !== false)
                                this._dispatchEvent(CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, message);
                            resolve(receipt);
                        }
                        else {
                            // We got a marker for a message we don't know about, so just ignore it
                            resolve();
                        }
                    }).catch(reject);
                }
            }
        });
    }
    /**
     * Private method used to process error stanzas
     * @param stanza
     * @returns {Promise}
     * @private
     */
    _processErrorMessage(stanza) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (stanza.message.error && stanza.message.error.text && stanza.message.error.text.$value) {
                this._onError(stanza.message.error.text.$value, stanza.message.error);
                const messageId = (stanza.message.$attributes && stanza.message.$attributes.id) ? stanza.message.$attributes.id : null;
                if (messageId !== null) {
                    this.saveMessage(messageId, (message) => {
                        // We only want to update existing messages
                        if (message._id === undefined)
                            return false;
                        // There was an error so mark it as failed to send
                        message.state.sent = false;
                        return message;
                    }).then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }
            else {
                resolve();
            }
        });
    }
    /**
     * Method used to handle incoming messages
     * @param $stanza
     * @returns {boolean}
     * @private
     */
    _onMessage($stanza) {
        // If any stanza is received then we must be connected
        this.connected = true;
        this._setStatus(window.Strophe.Status.CONNECTED);
        try {
            const stanza = CtXmppClient.xmlToJson($stanza);
            // Process a standard XMPP chat message
            if (stanza.message.$attributes && stanza.message.$attributes.type === "chat") {
                // Save the message to the database and mark the message if it is markable (Chat Markers)
                this._processNewMessage(stanza);
                // Process a groupchat message received as a room subscription (MUC/Sub)
            }
            else if (stanza.message.event && stanza.message.event.items) {
                const __processItem = (item) => {
                    if (CtXmppClient._isMarkerMessage(item)) {
                        this._processMarkerMessage(item);
                    }
                    else {
                        this._processGroupMessage(item);
                    }
                };
                if (Array.isArray(stanza.message.event.items.item)) {
                    stanza.message.event.items.forEach(item => {
                        if (item.message && item.message.$attributes && item.message.$attributes.type === "groupchat") {
                            __processItem(item);
                        }
                        else if (item.presence) {
                            this._onPresence(item);
                        }
                    });
                }
                else if (typeof stanza.message.event.items.item === "object" && stanza.message.event.items.item.message && stanza.message.event.items.item.message.$attributes && stanza.message.event.items.item.message.$attributes.type === "groupchat") {
                    __processItem(stanza.message.event.items.item);
                }
                else if (typeof stanza.message.event.items.item === "object" && stanza.message.event.items.item.presence) {
                    this._onPresence(stanza.message.event.items.item);
                }
                // Deal with chat markers
            }
            else if (CtXmppClient._isMarkerMessage(stanza)) {
                this._processMarkerMessage(stanza);
                // Process a groupchat message received as a room participant (MUC)
            }
            else if (stanza.message.$attributes && stanza.message.$attributes.type === "groupchat" && stanza.message.$attributes.id) {
                this._processGroupMessage(stanza);
            }
            else if (stanza.message.$attributes && stanza.message.$attributes.type === "error") {
                this._processErrorMessage(stanza);
            }
        }
        catch (error) {
            this._onError("An error occurred when processing an incoming message stanza:", error);
        }
        return true;
    }
    /**
     * Convenience method used to determine if a message is in a group chat
     * @param messageStanza
     * @returns {string|boolean}
     * @private
     */
    _messageIsGroupChat(messageStanza) {
        return (this._options.mucHost && messageStanza.$attributes && typeof messageStanza.$attributes.from === "string" && messageStanza.$attributes.from.indexOf(this._options.mucHost) > -1);
    }
    /**
     * Private method used to handle all incoming presence updates
     * @param json
     * @returns {boolean}
     * @private
     */
    _onPresence(json) {
        if (json.presence !== undefined) {
            const presence = json.presence;
            if (presence.$attributes !== undefined && presence.$attributes.from !== undefined) {
                if (presence.$attributes.type === "error") {
                    this._onError("An error from the server was received in a presence stanza:", presence);
                    return true;
                }
                // Ensure the jid is present and its not the currently logged in user
                const jid = Strophe.getBareJidFromJid(presence.$attributes.from);
                if (!jid || presence.$attributes.from === this._connection.jid)
                    return true;
                // Figure out if we are dealing with room presence or standard presence
                const domain = CtXmppClient._getDomainFromJid(jid);
                if (this._options.mucHost === domain) {
                    this.saveParticipant(presence.$attributes.from, (participant) => {
                        if (participant._id !== undefined) {
                            // Update
                            try {
                                participant.show = presence.show;
                                participant.status = presence.status;
                                participant.affiliation = presence.x.item.$attributes.affiliation;
                                participant.room_role = presence.x.item.$attributes.role;
                                participant.last_stanza = presence;
                                if (presence.metadata !== undefined) {
                                    const metadata = presence.metadata;
                                    delete metadata.$attributes;
                                    participant.metadata = metadata;
                                }
                                participant.updated_at = Date.now();
                            }
                            catch (e) {
                                this._onError(`Presence stanza wasn't in the expected format when trying to update participant with ID '${participant._id}' and JID '${participant.jid}'.`, e);
                            }
                        }
                        else {
                            // Create
                            try {
                                participant._id = presence.$attributes.from;
                                participant.jid = Strophe.getBareJidFromJid(presence.x.item.$attributes.jid);
                                participant.is_current_user = (participant.jid === this._jid);
                                participant.username = Strophe.getNodeFromJid(participant.jid);
                                participant.room_name = Strophe.getNodeFromJid(presence.$attributes.from);
                                participant.affiliation = presence.x.item.$attributes.affiliation;
                                participant.room_role = presence.x.item.$attributes.role;
                                participant.show = presence.show;
                                participant.status = presence.status;
                                participant.ts = Date.now();
                                if (presence.metadata !== undefined) {
                                    const metadata = presence.metadata;
                                    delete metadata.$attributes;
                                    participant.metadata = metadata;
                                }
                                participant.updated_at = null;
                                participant.last_stanza = presence;
                            }
                            catch (e) {
                                this._onError(`Presence stanza wasn't in the expected format when trying to create a new participant with ID '${participant._id}' and JID '${participant.jid}'.`, e);
                            }
                        }
                        return participant;
                    }).then((participant) => {
                        if (participant.updated_at === null) {
                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.NEW_PARTICIPANT, participant);
                        }
                        else {
                            this._dispatchEvent(CtXmppClient.EVENT_TYPES.PARTICIPANT_UPDATED, participant);
                        }
                    }).catch((e) => {
                        this._onError("Couldn't upsert participant database.", e);
                    });
                }
                else {
                    // Else find the contact and update their presence
                    //TODO: Convert this to the upsert method of saving an object
                    this.findContacts({
                        "id": jid
                    }).then((results) => {
                        let contact = results[0];
                        if (contact !== undefined) {
                            if (presence.show !== undefined) {
                                contact.show = presence.show;
                            }
                            if (presence.status !== undefined) {
                                contact.status = presence.status;
                            }
                            if (presence.metadata !== undefined) {
                                const metadata = presence.metadata;
                                delete metadata.$attributes;
                                contact.metadata = metadata;
                            }
                            this._contactDb.post(contact).then(() => {
                                this._dispatchEvent(CtXmppClient.EVENT_TYPES.PRESENCE_UPDATE, contact);
                            }).catch((e) => {
                                this._onError("Could update contact database.", e);
                            });
                        }
                    });
                }
            }
        }
        return true;
    }
    /**
     * Private method to process the roster and convert items to contacts
     * @param roster
     * @returns {Promise}
     * @private
     */
    _processRoster(roster) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (roster.iq !== undefined && roster.iq.query !== undefined) {
                // Cache the current roster version if we've been given one by the server
                if (roster.iq.query.$attributes !== undefined && roster.iq.query.$attributes.ver !== undefined) {
                    this._setCacheItem("roster_version", roster.iq.query.$attributes.ver).catch(reject);
                }
                if (Array.isArray(roster.iq.query.item)) {
                    const contacts = [];
                    roster.iq.query.item.forEach((item) => {
                        if (item.$attributes["jid"] !== undefined) {
                            const contact = {
                                "id": item.$attributes["jid"],
                                "subscription": item.$attributes["subscription"]
                            };
                            if (item.group !== undefined) {
                                if (typeof item.group === "string") {
                                    contact.groups = [item.group];
                                }
                                else if (Array.isArray(item.group)) {
                                    contact.groups = item.group;
                                }
                                // TODO: Replace this with a getRosterGroups method
                                // contact.groups.forEach((group) => {
                                //     if (this._store.roster.groups.indexOf(group) === -1) {
                                //         this._store.roster.groups.push(group);
                                //     }
                                // });
                            }
                            contacts.push(contact);
                        }
                    });
                    // Get the local list of contacts
                    this._contactDb.allDocs({
                        "include_docs": true
                    }).then((docs) => {
                        const proms = [];
                        // Go through each of the current contacts and compare against the contacts from the server
                        docs.rows.forEach((row) => {
                            let cContact = row.doc;
                            let nContact = null;
                            contacts.every((contact, idx) => {
                                if (contact.id === cContact.id) {
                                    nContact = contact;
                                    // Remove the nContact from the contacts array so we know which ones are new
                                    delete contacts[idx];
                                    return false;
                                }
                                return true;
                            });
                            if (nContact === null) {
                                // Contact doesn't exist on the server anymore, so delete it locally
                                proms.push(this._contactDb.remove(cContact));
                                // If something has changed then merge the new contact into the current one
                            }
                            else if (cContact.subscription !== nContact.subscription || !CtXmppClient._arraysEqual(cContact.groups, nContact.groups)) {
                                // Server is the master, update properties changed on the server but don't remove local properties
                                cContact = CtXmppClient._merge(cContact, nContact);
                                this._log("MERGED CONTACT:", cContact);
                                // Save the updated contact to the database
                                proms.push(this._contactDb.post(cContact));
                            }
                        });
                        // Find out which contacts are left, these are new ones which need adding
                        contacts.forEach((contact) => {
                            this._log("ADDING NEW CONTACT:", contact);
                            proms.push(this._contactDb.post(contact));
                        });
                        es6_promise_1.Promise.all(proms).then(resolve).catch((error) => {
                            this._onError("Couldn't merge contacts from server with locally sorted contacts.", error);
                            reject(error);
                        });
                    });
                }
                else {
                    // Nothing in the roster to process so just resolve
                    resolve();
                }
            }
            else {
                // We could get an empty response because we are using roster versioning
                // An empty response means nothing has changed since we last requested the roster
                resolve();
            }
        });
    }
    /**
     * Private method used to dispatch error events
     * @param errorDesc
     * @param errorObj
     * @private
     */
    _onError(errorDesc, errorObj) {
        console.error(errorDesc, errorObj || "");
        this._dispatchEvent(CtXmppClient.EVENT_TYPES.ERROR, errorObj);
    }
    _persistStreamManagementCounters() {
        // this._setCache("sent", this._connection.streamManagement.getOutgoingCounter());
        // this._setCache("received", this._connection.streamManagement.getServerProcessedCounter());
    }
    /**
     * Private method used to set an item in the cache
     * @param id
     * @param value
     * @param secret
     * @returns {Promise}
     * @private
     */
    _setCacheItem(id, value, secret = false) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._saveObject(CtXmppClient.OBJECT_TYPES.CACHE_ITEM, id, (item) => {
                item.value = value;
                item.secret = (secret === true);
                return item;
            }, (item) => {
                const value = item.value;
                if (item.secret === false) {
                    this._cache[id] = value;
                }
                resolve(value);
            }, (e) => {
                this._onError(`Couldn't set cache item '${id}' with value '${value}'.`);
                reject(e);
            });
        });
    }
    /**
     * Private method used to get an item from the cache
     * @param id
     * @returns {Promise}
     * @private
     */
    _getCacheItem(id) {
        return new es6_promise_1.Promise((resolve) => {
            if (this._cache[id] !== undefined) {
                resolve(this._cache[id]);
            }
            else {
                this._cacheDb.get(id).then((item) => {
                    const value = item.value;
                    if (item.secret === false) {
                        this._cache[id] = value;
                    }
                    resolve(value);
                }).catch(() => {
                    // Cache item doesn't exist, resolve nothing.
                    resolve();
                });
            }
        });
    }
    /**
     * Private method used to delete an item from the cache
     * @param id
     * @returns {Promise}
     * @private
     */
    _deleteCacheItem(id) {
        return new es6_promise_1.Promise((resolve, reject) => {
            this._cacheDb.get(id).then((item) => {
                this._cacheDb.remove(item).then(() => {
                    delete this._cache[id];
                    resolve();
                }).catch(reject);
            }).catch(() => {
                // Cache item doesn't exist, resolve nothing.
                resolve();
            });
        });
    }
    /**
     * Convenience method used to convert an XMPP stanza to a message database object
     * @param stanza
     * @param defaults
     * @returns {Promise}
     * @private
     */
    _messageStanzaToDbObject(stanza, defaults) {
        return new es6_promise_1.Promise((resolve, reject) => {
            if (stanza.message !== undefined) {
                const messageId = stanza.message.$attributes.id;
                this.saveMessage(messageId, (message) => {
                    // Does the message already exist?
                    if (message._id !== undefined) {
                        // Yes, so update the bits which need updating
                        if (stanza !== message.stanza) {
                            message.stanza = stanza;
                        }
                        if (stanza.message.body !== undefined && stanza.message.body !== message.body) {
                            message.body = stanza.message.body;
                        }
                        if (message.type === "groupchat") {
                            message.state.sent = true;
                        }
                        if (stanza.message.data !== undefined && stanza.message.data !== message.data) {
                            message.data = stanza.message.data;
                        }
                        message.updated_at = Date.now();
                        message = CtXmppClient._merge(message, defaults);
                        // TODO: Put this back in when we have server timestamps
                        // The server might have added a timestamp, if so we should use that one instead
                        // if (stanza.message.timestamp && stanza.message.timestamp.$value) {
                        //     let ts = null;
                        //     try {
                        //         ts = parseInt(stanza.message.timestamp.$value);
                        //     } catch (e) {
                        //         console.error("Couldn't parse stanza timestamp to integer.");
                        //     }
                        //     if (ts !== null) {
                        //         message.ts = ts;
                        //     }
                        // }
                    }
                    else {
                        // No, so create a new one
                        const fullJid = stanza.message.$attributes.from;
                        const senderId = Strophe.getBareJidFromJid(fullJid);
                        const senderResource = Strophe.getResourceFromJid(fullJid);
                        let ts = (stanza.message.timestamp && stanza.message.timestamp.$value) ? stanza.message.timestamp.$value : Date.now();
                        if (typeof ts === "string") {
                            ts = parseInt(ts);
                        }
                        let attachments = [];
                        if (stanza.message.attachments !== undefined) {
                            if (!Array.isArray(stanza.message.attachments)) {
                                attachments.push(stanza.message.attachments);
                            }
                            else {
                                attachments = stanza.message.attachments;
                            }
                        }
                        let messageSkeleton = {
                            "_id": messageId,
                            "stanza": stanza,
                            "jid": fullJid,
                            "sender_id": senderId,
                            "sender_resource": senderResource,
                            "recipient_id": stanza.message.$attributes.to,
                            "body": stanza.message.body || null,
                            "updated_at": null,
                            "ts": ts,
                            "state": {
                                "sent": null,
                                "markers": [],
                                "received": null,
                                "read": null,
                                "acknowledged": null
                            },
                            "data": stanza.message.data || {},
                            "attachments": attachments,
                            "type": stanza.message.$attributes.type || "chat",
                            "mine": (senderId === this._bareJid)
                        };
                        message = CtXmppClient._merge(messageSkeleton, defaults);
                    }
                    return message;
                }).then(resolve).catch((e) => {
                    this._onError("Unable to convert message stanza to DB object.", e);
                    reject(e);
                });
            }
            else {
                const msg = "No message part present in the stanza.";
                this._onError(msg);
                reject(msg);
            }
        });
    }
    /**
     * Private method used to output debugging information to the console
     * @param detail
     * @param value
     * @private
     */
    _log(detail, value) {
        if (this._options.debug === true) {
            console.debug("[" + new Date().toString() + "] ", detail, value || "");
        }
    }
    /**
     * Method used to generate a unique GUID to be used as message IDs
     * @returns {string}
     */
    getUniqueId() {
        if (!this._connection)
            throw new Error("You must have an active connection to generate a unique ID.");
        return this._connection.getUniqueId(`${this._clientId}-${performance.now()}`);
    }
    /**
     * Static method used to convert JSON stanza to XML stanzas
     * @param type
     * @param json
     * @returns {any}
     */
    static jsonToXml(type, json) {
        return CtXmppClient._parseJsonNode(json, CtXmppClient._createElement(type, json.$attributes));
    }
    static _parseJsonNode(json, $parent) {
        for (let key in json) {
            let value = json[key];
            if (key.indexOf("$") !== 0) {
                if (Array.isArray(value) && value.length > 0) {
                    value.forEach((item) => {
                        let $item = CtXmppClient._createElement(key, item.$attributes);
                        $item = CtXmppClient._parseJsonNode(item, $item);
                        $parent.appendChild($item);
                    });
                }
                else {
                    const $attrs = (typeof value === "object" && value !== null) ? value.$attributes : undefined;
                    let $element = CtXmppClient._createElement(key, $attrs);
                    if (typeof value === "object" && value !== null && Object.keys(value).length > 0) {
                        $element = CtXmppClient._parseJsonNode(value, $element);
                    }
                    else if (typeof value === "string") {
                        const $txt = CtXmppClient.doc.createTextNode(value);
                        $element.appendChild($txt);
                    }
                    $parent.appendChild($element);
                }
            }
            else if (key === "$value") {
                const $txt = CtXmppClient.doc.createTextNode(value);
                $parent.appendChild($txt);
            }
        }
        return $parent;
    }
    static xmlToJson($xml) {
        return CtXmppClient._parseXmlNode($xml, {});
    }
    static _parseXmlNode($xml, obj) {
        let _node = {};
        if ($xml.attributes !== undefined && $xml.attributes.length > 0) {
            _node.$attributes = {};
            for (let i = 0; i < $xml.attributes.length; i++) {
                const attr = $xml.attributes[i];
                _node.$attributes[attr.nodeName] = attr.value;
            }
        }
        if ($xml.childNodes.length > 0) {
            for (let j = 0; j < $xml.childNodes.length; j++) {
                const $child = $xml.childNodes[j];
                if ($child.nodeType === 3) {
                    if (_node.$attributes !== undefined) {
                        _node.$value = $xml.textContent;
                    }
                    else {
                        _node = $xml.textContent;
                    }
                }
                else {
                    CtXmppClient._parseXmlNode($child, _node);
                }
            }
        }
        if (obj[$xml.nodeName] !== undefined && Array.isArray(obj[$xml.nodeName]) === false) {
            obj[$xml.nodeName] = [obj[$xml.nodeName]];
        }
        if (Array.isArray(obj[$xml.nodeName])) {
            obj[$xml.nodeName].push(_node);
        }
        else {
            obj[$xml.nodeName] = _node;
        }
        return obj;
    }
    static _createElement(name, attributes) {
        if (CtXmppClient.doc === null) {
            CtXmppClient.doc = document.implementation.createDocument('ct:xmpp:client', 'infinity', null);
        }
        const $element = CtXmppClient.doc.createElement(name);
        if (attributes !== undefined && Object.keys(attributes).length > 0) {
            for (let attr in attributes) {
                $element.setAttribute(attr, attributes[attr]);
            }
        }
        return $element;
    }
    static _getContactFromRosterByJid(jid, roster) {
        let result = null;
        if (roster !== undefined && roster.contacts !== undefined && roster.contacts.length > 0) {
            roster.contacts.forEach((contact) => {
                if (contact.jid === jid) {
                    result = contact;
                }
            });
        }
        return result;
    }
    static _isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    static _merge(target, ...sources) {
        if (!sources.length)
            return target;
        const source = sources.shift();
        if (CtXmppClient._isObject(target) && CtXmppClient._isObject(source)) {
            for (const key in source) {
                if (CtXmppClient._isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, { [key]: {} });
                    CtXmppClient._merge(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return CtXmppClient._merge(target, ...sources);
    }
    static _arraysEqual(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            return (arr1 === arr2);
        }
        if (arr1.length !== arr2.length)
            return false;
        for (let i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }
    /**
     * Static method used to validate a user provided event type against the constants
     * @param type
     * @returns {boolean}
     * @private
     */
    static _validateEventType(type) {
        for (let t in CtXmppClient.EVENT_TYPES) {
            if (CtXmppClient.EVENT_TYPES[t] === type) {
                return true;
            }
        }
        return false;
    }
    /**
     * Static method used to validate a user provided chat status against the constants
     * @param type
     * @returns {boolean}
     * @private
     */
    static _validateChatStatus(type) {
        for (let t in CtXmppClient.CHAT_STATUSES) {
            if (CtXmppClient.CHAT_STATUSES[t] === type) {
                return true;
            }
        }
        return false;
    }
    ;
    /**
     * Static method to get the domain from the provided JID
     * @param jid
     * @private
     */
    static _getDomainFromJid(jid) {
        const bare = Strophe.getBareJidFromJid(jid);
        return bare.split("@")[1];
    }
    static _isMarkerMessage(stanza) {
        return (stanza.message.received && stanza.message.received.$attributes && stanza.message.received.$attributes.xmlns === CtXmppClient.NAMESPACES.CHAT_MARKERS)
            || (stanza.message.read && stanza.message.read.$attributes && stanza.message.read.$attributes.xmlns === CtXmppClient.NAMESPACES.CHAT_MARKERS)
            || (stanza.message.acknowledged && stanza.message.acknowledged.$attributes && stanza.message.acknowledged.$attributes.xmlns === CtXmppClient.NAMESPACES.CHAT_MARKERS);
    }
}
CtXmppClient.doc = null;
CtXmppClient.MARKER_TYPES = {
    "RECEIVED": "received",
    "READ": "read",
    "ACKNOWLEDGED": "acknowledged"
};
CtXmppClient.EVENT_TYPES = {
    "STATUS": "status",
    "NEW_MESSAGE": "newmessage",
    "ERROR": "error",
    "MESSAGE_UPDATED": "messageupdated",
    "PRESENCE_UPDATE": "presenceupdate",
    "NEW_PARTICIPANT": "newparticipant",
    "PARTICIPANT_UPDATED": "participantupdated",
    "RECEIPT_RECIEVED": "receiptrecieved",
    "AUTO_RECONNECTED": "autoreconnected",
    "DBS_DESTROYED": "dbsdestroyed",
};
CtXmppClient.CHAT_STATUSES = {
    "AWAY": "away",
    "CHAT": "chat",
    "DND": "dnd",
    "XA": "xa"
};
CtXmppClient.NAMESPACES = {
    "MUC": "http://jabber.org/protocol/muc",
    "MUC_SUB": "urn:xmpp:mucsub:0",
    "MUC_OWNER": "http://jabber.org/protocol/muc#owner",
    "X_DATA": "jabber:x:data",
    "DISCO_INFO": "http://jabber.org/protocol/disco#info",
    "DISCO_ITEMS": "http://jabber.org/protocol/disco#items",
    "JABBER_CLIENT": "jabber:client",
    "MAM": "urn:xmpp:mam:0",
    "RESULT_SET_MANAGEMENT": "http://jabber.org/protocol/rsm",
    "CHAT_MARKERS": "urn:xmpp:chat-markers:0",
    "CT_METADATA": "ct:metadata:0",
    "HINTS": "urn:xmpp:hints",
    "CT_CLIENT_TIMESTAMP": "ct:client-timestamp:0",
    "HTTP_UPLOAD": "urn:xmpp:http:upload",
    "PING": "urn:xmpp:ping"
};
CtXmppClient.MUC_NODES = {
    "PRESENCE": "urn:xmpp:mucsub:nodes:presence",
    "MESSAGES": "urn:xmpp:mucsub:nodes:messages",
    "AFFILIATIONS": "urn:xmpp:mucsub:nodes:affiliations",
    "CONFIG": "urn:xmpp:mucsub:nodes:config",
    "SUBJECT": "urn:xmpp:mucsub:nodes:subject",
    "SYSTEM": "urn:xmpp:mucsub:nodes:system"
};
CtXmppClient.MARKER_PRIORITIES = {
    "received": 3,
    "read": 2,
    "acknowledged": 1
};
CtXmppClient.OBJECT_TYPES = {
    "MESSAGE": "message",
    "CONTACT": "contact",
    "ROOM": "room",
    "PARTICIPANT": "participant",
    "CACHE_ITEM": "cache_item"
};
exports.CtXmppClient = CtXmppClient;
window.CtXmppClient = CtXmppClient;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leon.Revill on 19/06/2017.
 */

Object.defineProperty(exports, "__esModule", { value: true });
const cWindow = window;
const eWindow = window;
function getPlatformName() {
    const userAgent = window.navigator.userAgent;
    if (/Android/i.test(userAgent)) {
        return "android";
    }
    else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "ios";
    }
    else if (/Electron/i.test(userAgent)) {
        return "electron";
    }
    else {
        return null;
    }
}
exports.getPlatformName = getPlatformName;
function isElectron() {
    return (getPlatformName() === "electron");
}
exports.isElectron = isElectron;
function isDevice() {
    const platformName = getPlatformName();
    return (platformName === "android" || platformName === "ios");
}
exports.isDevice = isDevice;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leon.Revill on 19/06/2017.
 */

Object.defineProperty(exports, "__esModule", { value: true });
const es6_promise_1 = __webpack_require__(21);
const Environment = __webpack_require__(33);
const Plugin = __webpack_require__(35);
const eWindow = window;
const cWindow = window;
let FileTransfer = null;
const MEDIA_TYPES = {
    IMAGE: "image",
    AUDIO: "audio",
    VIDEO: "video"
};
const MIME_TYPE_MAP = {
    "a": { mimeType: "application/octet-stream", mediaType: null },
    "ai": { mimeType: "application/postscript", mediaType: null },
    "aif": { mimeType: "audio/x-aiff", mediaType: MEDIA_TYPES.AUDIO },
    "aifc": { mimeType: "audio/x-aiff", mediaType: MEDIA_TYPES.AUDIO },
    "aiff": { mimeType: "audio/x-aiff", mediaType: MEDIA_TYPES.AUDIO },
    "au": { mimeType: "audio/basic", mediaType: MEDIA_TYPES.AUDIO },
    "avi": { mimeType: "video/x-msvideo", mediaType: null },
    "bat": { mimeType: "text/plain", mediaType: null },
    "bin": { mimeType: "application/octet-stream", mediaType: null },
    "bmp": { mimeType: "image/x-ms-bmp", mediaType: MEDIA_TYPES.IMAGE },
    "c": { mimeType: "text/plain", mediaType: null },
    "cdf": { mimeType: "application/x-cdf", mediaType: null },
    "csh": { mimeType: "application/x-csh", mediaType: null },
    "css": { mimeType: "text/css", mediaType: null },
    "dll": { mimeType: "application/octet-stream", mediaType: null },
    "doc": { mimeType: "application/msword", mediaType: null },
    "docm": { mimeType: "application/vnd.ms-word.document.macroEnabled.12", mediaType: null },
    "docx": { mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", mediaType: null },
    "dot": { mimeType: "application/msword", mediaType: null },
    "dotx": { mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", mediaType: null },
    "dvi": { mimeType: "application/x-dvi", mediaType: null },
    "eml": { mimeType: "message/rfc822", mediaType: null },
    "eps": { mimeType: "application/postscript", mediaType: null },
    "etx": { mimeType: "text/x-setext", mediaType: null },
    "exe": { mimeType: "application/octet-stream", mediaType: null },
    "gif": { mimeType: "image/gif", mediaType: MEDIA_TYPES.IMAGE },
    "gtar": { mimeType: "application/x-gtar", mediaType: null },
    "h": { mimeType: "text/plain", mediaType: null },
    "hdf": { mimeType: "application/x-hdf", mediaType: null },
    "htm": { mimeType: "text/html", mediaType: null },
    "html": { mimeType: "text/html", mediaType: null },
    "jpe": { mimeType: "image/jpe", mediaType: MEDIA_TYPES.IMAGE },
    "jpeg": { mimeType: "image/jpeg", mediaType: MEDIA_TYPES.IMAGE },
    "jpg": { mimeType: "image/jpeg", mediaType: MEDIA_TYPES.IMAGE, preferred: true },
    "js": { mimeType: "application/javascript", mediaType: null },
    "json": { mimeType: "application/json", mediaType: null },
    "ksh": { mimeType: "text/plain", mediaType: null },
    "latex": { mimeType: "application/x-latex", mediaType: null },
    "m1v": { mimeType: "video/mpeg", mediaType: MEDIA_TYPES.VIDEO },
    "m4a": { mimeType: "audio/mpeg", mediaType: MEDIA_TYPES.AUDIO, preferred: true },
    "man": { mimeType: "application/x-troff-man", mediaType: null },
    "me": { mimeType: "application/x-troff-me", mediaType: null },
    "mht": { mimeType: "message/rfc822", mediaType: null },
    "mhtml": { mimeType: "message/rfc822", mediaType: null },
    "mif": { mimeType: "application/x-mif", mediaType: null },
    "mov": { mimeType: "video/quicktime", mediaType: MEDIA_TYPES.VIDEO },
    "movie": { mimeType: "video/x-sgi-movie", mediaType: MEDIA_TYPES.VIDEO },
    "mp2": { mimeType: "audio/mpeg", mediaType: MEDIA_TYPES.AUDIO },
    "mp3": { mimeType: "audio/mp3", mediaType: MEDIA_TYPES.AUDIO },
    "mp4": { mimeType: "video/mp4", mediaType: MEDIA_TYPES.VIDEO },
    "mpa": { mimeType: "video/mpeg", mediaType: MEDIA_TYPES.VIDEO },
    "mpe": { mimeType: "video/mpeg", mediaType: MEDIA_TYPES.VIDEO },
    "mpeg": { mimeType: "video/mpeg", mediaType: MEDIA_TYPES.VIDEO },
    "mpg": { mimeType: "video/mpeg", mediaType: MEDIA_TYPES.VIDEO, preferred: true },
    "ms": { mimeType: "application/x-troff-ms", mediaType: null },
    "nc": { mimeType: "application/x-netcdf", mediaType: null },
    "nws": { mimeType: "message/rfc822", mediaType: null },
    "o": { mimeType: "application/octet-stream", mediaType: null },
    "obj": { mimeType: "application/octet-stream", mediaType: null },
    "oda": { mimeType: "application/oda", mediaType: null },
    "otf": { mimeType: "application/x-font-opentype", mediaType: null },
    "pbm": { mimeType: "image/x-portable-bitmap", mediaType: MEDIA_TYPES.IMAGE },
    "pdf": { mimeType: "application/pdf", mediaType: null },
    "pfx": { mimeType: "application/x-pkcs12", mediaType: null },
    "pgm": { mimeType: "image/x-portable-graymap", mediaType: MEDIA_TYPES.IMAGE },
    "png": { mimeType: "image/png", mediaType: MEDIA_TYPES.IMAGE },
    "pnm": { mimeType: "image/x-portable-anymap", mediaType: MEDIA_TYPES.IMAGE },
    "po": { mimeType: "text/x-gettext-translation", mediaType: null },
    "pot": { mimeType: "application/vnd.ms-powerpoint", mediaType: null },
    "ppa": { mimeType: "application/vnd.ms-powerpoint", mediaType: null },
    "ppm": { mimeType: "image/x-portable-pixmap", mediaType: MEDIA_TYPES.IMAGE },
    "pps": { mimeType: "application/vnd.ms-powerpoint", mediaType: null },
    "ppt": { mimeType: "application/vnd.ms-powerpoint", mediaType: null },
    "pptm": { mimeType: "application/vnd.ms-powerpoint.presentation.macroEnabled.12", mediaType: null },
    "pptx": { mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation", mediaType: null },
    "ps": { mimeType: "application/postscript", mediaType: null },
    "pwz": { mimeType: "application/vnd.ms-powerpoint", mediaType: null },
    "py": { mimeType: "text/x-python", mediaType: null },
    "pyc": { mimeType: "application/x-python-code", mediaType: null },
    "pyo": { mimeType: "application/x-python-code", mediaType: null },
    "qt": { mimeType: "video/quicktime", mediaType: MEDIA_TYPES.VIDEO },
    "ra": { mimeType: "audio/x-pn-realaudio", mediaType: MEDIA_TYPES.AUDIO },
    "ram": { mimeType: "application/x-pn-realaudio", mediaType: MEDIA_TYPES.AUDIO },
    "ras": { mimeType: "image/x-cmu-raster", mediaType: MEDIA_TYPES.IMAGE },
    "rdf": { mimeType: "application/xml", mediaType: null },
    "rgb": { mimeType: "image/x-rgb", mediaType: MEDIA_TYPES.IMAGE },
    "roff": { mimeType: "application/x-troff", mediaType: null },
    "rtx": { mimeType: "text/richtext", mediaType: null },
    "sgm": { mimeType: "text/x-sgml", mediaType: null },
    "sgml": { mimeType: "text/x-sgml", mediaType: null },
    "sh": { mimeType: "application/x-sh", mediaType: null },
    "shar": { mimeType: "application/x-shar", mediaType: null },
    "snd": { mimeType: "audio/basic", mediaType: MEDIA_TYPES.AUDIO },
    "so": { mimeType: "application/octet-stream", mediaType: null },
    "src": { mimeType: "application/x-wais-source", mediaType: null },
    "svg": { mimeType: "image/svg+xml", mediaType: MEDIA_TYPES.IMAGE },
    "swf": { mimeType: "application/x-shockwave-flash", mediaType: null },
    "t": { mimeType: "application/x-troff", mediaType: null },
    "tar": { mimeType: "application/x-tar", mediaType: null },
    "tcl": { mimeType: "application/x-tcl", mediaType: null },
    "tex": { mimeType: "application/x-tex", mediaType: null },
    "texi": { mimeType: "application/x-texinfo", mediaType: null },
    "texinfo": { mimeType: "application/x-texinfo", mediaType: null },
    "tif": { mimeType: "image/tiff", mediaType: MEDIA_TYPES.IMAGE },
    "tiff": { mimeType: "image/tiff", mediaType: MEDIA_TYPES.IMAGE },
    "tr": { mimeType: "application/x-troff", mediaType: null },
    "tsv": { mimeType: "text/tab-separated-values", mediaType: null },
    "ttf": { mimeType: "application/x-font-truetype", mediaType: null },
    "txt": { mimeType: "text/plain", mediaType: null, preferred: true },
    "ustar": { mimeType: "application/x-ustar", mediaType: null },
    "vcf": { mimeType: "text/x-vcard", mediaType: null },
    "wav": { mimeType: "audio/x-wav", mediaType: MEDIA_TYPES.AUDIO },
    "woff": { mimeType: "application/font-woff", mediaType: null, preferred: true },
    "woff2": { mimeType: "application/font-woff", mediaType: null },
    "wsdl": { mimeType: "application/xml", mediaType: null },
    "xbm": { mimeType: "image/x-xbitmap", mediaType: MEDIA_TYPES.IMAGE },
    "xlb": { mimeType: "application/vnd.ms-excel", mediaType: null },
    "xls": { mimeType: "application/vnd.ms-excel", mediaType: null },
    "xlsm": { mimeType: "application/vnd.ms-excel.sheet.macroEnabled.12", mediaType: null },
    "xlsx": { mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", mediaType: null },
    "xml": { mimeType: "text/xml", mediaType: null },
    "xpdl": { mimeType: "application/xml", mediaType: null },
    "xpm": { mimeType: "image/x-xpixmap", mediaType: MEDIA_TYPES.IMAGE },
    "xsl": { mimeType: "application/xml", mediaType: null },
    "xwd": { mimeType: "image/x-xwindowdump", mediaType: MEDIA_TYPES.IMAGE },
    "zip": { mimeType: "application/zip", mediaType: null }
};
/**
 * Obtains an appropriate mime type given a file extension
 * @param {string} extensionOrPath - The file name or file path of the file including the file extension
 * @returns {string|null} - An appropriate mime type for the file extension, or null if one not found
 */
function getMimeTypeFromExtension(extensionOrPath) {
    if (extensionOrPath.indexOf(".") != -1) {
        extensionOrPath = extensionOrPath.split(".").pop().toLowerCase();
    }
    if (MIME_TYPE_MAP.hasOwnProperty(extensionOrPath)) {
        return MIME_TYPE_MAP[extensionOrPath].mimeType;
    }
    return null;
}
exports.getMimeTypeFromExtension = getMimeTypeFromExtension;
/**
 * Obtains just the file name part given a file path
 * @param {string} filePath - The full file path
 * @returns {string} - The file name portion of the file path (including file extension)
 */
function getFileNameFromPath(filePath) {
    return filePath.replace(/\\/g, "/").split("/").pop();
}
exports.getFileNameFromPath = getFileNameFromPath;
/**
 * Obtains the path to the default storage location for the current platform
 * @returns {Promise} - A promise to resolve with the path of the default storage platform
 */
function getStorageLocation() {
    return new es6_promise_1.Promise((resolve, reject) => {
        if (Environment.isElectron()) {
            // Bend over backwards to get the electron storage location
            try {
                const app = eWindow.require("electron").remote.app;
                const path = eWindow.require("path");
                const pathSeparator = path.sep;
                const applicationDataPath = app.getPath("userData");
                const location = applicationDataPath + pathSeparator;
                resolve(location);
            }
            catch (e) {
                reject(e);
            }
        }
        else {
            const platformName = Environment.getPlatformName();
            const File = Plugin.getSource("file");
            if (File !== false) {
                if (platformName === "ios") {
                    resolve(File.documentsDirectory);
                }
                else if (platformName === "android") {
                    resolve(File.externalDataDirectory);
                }
                else {
                    reject("Unsupported platform, expected Android or iOS.");
                }
            }
            else {
                reject("No file plugin available.");
            }
        }
    });
}
function upload(filePath, putUrl, headers) {
    return new es6_promise_1.Promise((resolve, reject) => {
        if (FileTransfer === null)
            FileTransfer = (Environment.isElectron()) ? Plugin.getSource("@commontimeltd/com.commontime.filetransfer") : Plugin.getSource("FileTransfer");
        if (FileTransfer !== false) {
            const uploadOptions = {
                httpMethod: "PUT",
                fileName: getFileNameFromPath(filePath),
                fileKey: "file",
                headers: headers
            };
            const ft = new FileTransfer();
            ft.upload(filePath, putUrl, (result) => {
                resolve({
                    source: filePath,
                    target: putUrl,
                    response: result.response
                });
            }, reject, uploadOptions);
        }
        else {
            reject("No file transfer plugin available for the platform, attachments are not supported.");
        }
    });
}
exports.upload = upload;
function download(getUrl) {
    return new es6_promise_1.Promise((resolve, reject) => {
        if (FileTransfer === null)
            FileTransfer = (Environment.isElectron()) ? Plugin.getSource("@commontimeltd/com.commontime.filetransfer") : Plugin.getSource("FileTransfer");
        if (FileTransfer !== false) {
            getStorageLocation().then((path) => {
                const ft = new FileTransfer();
                const filePath = path + Date.now() + "_" + getFileNameFromPath(getUrl);
                ft.download(getUrl, filePath, (result) => {
                    if (Environment.isElectron()) {
                        resolve({
                            source: result.filePath,
                            target: getUrl
                        });
                    }
                    else if (Environment.isDevice()) {
                        resolve({
                            source: result.nativeURL,
                            target: getUrl
                        });
                    }
                    else {
                        console.warn("Attachments are not currently supported on this platform.");
                        reject();
                    }
                }, (e) => {
                    console.error(`Unable to download file '${filePath}' from '${getUrl}':`, e);
                    reject(e);
                });
            }).catch(reject);
        }
        else {
            reject("No file transfer plugin available for the platform, attachments are not supported.");
        }
    });
}
exports.download = download;
function getFileInfo(filePath) {
    return new es6_promise_1.Promise((resolve, reject) => {
        if (Environment.isElectron()) {
            try {
                const fsplus = eWindow.require("fs-plus");
                fsplus.stat(filePath, (e, stats) => {
                    if (e) {
                        reject(e);
                    }
                    else {
                        resolve({
                            name: getFileNameFromPath(filePath),
                            path: filePath,
                            size: stats.size,
                            type: getMimeTypeFromExtension(filePath)
                        });
                    }
                });
            }
            catch (e) {
                reject("Couldn't require 'fs-plus' module.");
            }
        }
        else if (Environment.isDevice()) {
            cWindow.resolveLocalFileSystemURL(filePath, function (fileEntry) {
                fileEntry.file(function (file) {
                    resolve(file);
                });
            }, reject);
        }
        else {
            console.warn("Attachments are not currently supported on this platform.");
            reject();
        }
    });
}
exports.getFileInfo = getFileInfo;
function deleteFile(filePath) {
    return new es6_promise_1.Promise((resolve, reject) => {
        if (Environment.isElectron()) {
            try {
                const fsplus = eWindow.require("fs-plus");
                const fileExists = fsplus.existsSync(filePath);
                if (fileExists) {
                    fsplus.unlinkSync(filePath);
                    resolve();
                }
                else {
                    reject(`File '${filePath}' doesn't exist and cannot be deleted.`);
                }
            }
            catch (e) {
                reject(`Something went wrong while trying to delete the file '${filePath}': ${e}`);
            }
        }
        else if (Environment.isDevice()) {
            cWindow.resolveLocalFileSystemURL(filePath, (fileEntry) => {
                if (fileEntry.isDirectory) {
                    reject(`File path '${filePath}' is a directory and cannot be deleted.`);
                }
                else {
                    fileEntry.remove(resolve, reject);
                }
            });
        }
        else {
            console.warn("Attachments are not currently supported on this platform.");
            reject();
        }
    });
}
exports.deleteFile = deleteFile;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leon.Revill on 19/06/2017.
 */

Object.defineProperty(exports, "__esModule", { value: true });
const cWindow = window;
const eWindow = window;
function getSource(pluginName) {
    if (cWindow[pluginName] !== undefined) {
        return cWindow[pluginName];
    }
    else if (cWindow.cordova !== undefined && cWindow.cordova[pluginName] !== undefined) {
        return cWindow.cordova[pluginName];
    }
    else if (cWindow.cordova !== undefined && cWindow.cordova.plugins !== undefined && cWindow.cordova.plugins[pluginName] !== undefined) {
        return cWindow.cordova.plugins[pluginName];
    }
    else if (cWindow.plugins !== undefined && cWindow.plugins[pluginName] !== undefined) {
        return cWindow.plugins[pluginName];
    }
    else if (navigator !== undefined && navigator[pluginName] !== undefined) {
        return navigator[pluginName];
    }
    else if (eWindow.require !== undefined) {
        let plugin = false;
        try {
            plugin = eWindow.require(pluginName);
            return plugin;
        }
        catch (err) {
            if (plugin === false || plugin === undefined) {
                const fixedName = pluginName.replace(/\-/g, "").toLowerCase();
                try {
                    return eWindow.require("@commontimeltd/com.commontime." + fixedName);
                }
                catch (err) {
                    return false;
                }
            }
            return false;
        }
    }
    else {
        console.warn(`Plugin '${pluginName}' is not available.`);
        return false;
    }
}
exports.getSource = getSource;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
const mixins_1 = __webpack_require__(40);
// tslint:disable typedef
// tslint:disable no-any
window.__CTRender = window.skate.h;
const allMixins = [
    mixins_1.OverridingStylesMixin,
    mixins_1.ComponentStylesMixin,
    mixins_1.RenderMixin
];
const allMixinsBase = allMixins.reduce((cls, mixin) => mixin(cls), skate.Component);
class CTComponent extends allMixinsBase {
    static register() {
        if (this.is === null) {
            // tslint:disable-next-line no-console
            console.error("Could not register component, please ensure that it has a static is property");
            return;
        }
        customElements.define(this.is, this);
    }
}
CTComponent.is = null;
exports.CTComponent = CTComponent;
// tslint:enable no-any
// tslint:enable typedef


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
// tslint:disable no-any variable-name
/**
 * This represents a SkateJS type which will bind to a boolean property using
 * the string representation of "true" or "false in an attribute. This works around
 * the default "boolean" SkateJS type which is only false if the attribute does
 * not exist.
 *
 * Usage (using typescript decorators):
 *
 * @prop({ type: Stroolean, attribute: true, default: false })
 * myBooleanProperty: boolean
 */
exports.Stroolean = skate.prop.create({
    coerce: val => (typeof (val) === "string" && val.toLowerCase() === "true"),
    default: false,
    deserialize: val => (typeof (val) === "string" && val.toLowerCase() === "true"),
    serialize: val => (val ? "true" : "false")
});
/**
 * This represents a SkateJS type which will bind to a numerical property using
 * the string representation of the number, or a "null" value. This works around
 * the default "number" SkateJS type which is always 0 even if a null default is
 * specified.
 *
 * Usage (using typescript decorators):
 *
 * @prop({ type: Strumber, attribute: true, default: null })
 * myBooleanProperty: boolean
 */
exports.NullableNumber = skate.prop.create({
    coerce: val => (val === "null") ? null : parseInt(val),
    default: null,
    deserialize: val => (val === "null") ? null : parseInt(val),
    serialize: val => (val === null || val === undefined) ? "null" : val.toString()
});
// tslint:enabel no-any variable-name


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
const identityFn = (x) => x;
function prop(property) {
    return function (target, propertyKey) {
        // obtain properties provide by the @prop decorator
        const { type } = property, skPropConfig = __rest(property, ["type"]);
        // parse to find out the type of property
        const configType = parseType(type);
        // reference the skatejs prop function, e.g. prop.string
        const skatePropTypeFn = skate.prop[configType] || identityFn;
        // get constructor of element
        const ctor = target.constructor;
        // grab any existing props previously defined
        const existingProps = (ctor.props || {});
        // concatenate all props together
        const newProps = Object.assign({}, existingProps, { [propertyKey]: skatePropTypeFn(skPropConfig) });
        // apply to the current instance of the component
        Object.defineProperty(ctor, "props", {
            configurable: true,
            get() {
                return newProps;
            }
        });
    };
}
exports.prop = prop;
function parseType(type) {
    if (typeof type !== "function") {
        return;
    }
    const inst = type();
    if (inst instanceof Array) {
        return "array";
    }
    if (typeof inst === "object") {
        return "object";
    }
    return (typeof inst);
}
// tslint:enable no-any


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
// tslint:disable no-any
function ComponentStylesMixin(base) {
    class ComponentStyles extends base {
        constructor(...args) {
            super(...args);
            const shadyCSS = window.ShadyCSS;
            const hasNativeShadowDOMSupport = !shadyCSS;
            if (!this.styleElements)
                this.styleElements = [];
            // if no styles have been specified for the component then do nothing.
            if (!this.componentStyles)
                return;
            if (hasNativeShadowDOMSupport) {
                this.styleElements = [
                    skate.h("style", this.componentStyles),
                    ...this.styleElements
                ];
            }
            else {
                // if the OverridingStylesMixin is also being applied, then we need to stop this mixin and let the OverridingStylesMixin
                // apply the component styles, otherwise the overriding styles will get added to the head before the component styles,
                // therefore overriding nothing
                if (!this.overridingStylesMixinApplied)
                    return;
                const elementName = this.localName; // _this_ should ultimately be of type HTMLElement
                if (ComponentStyles._seenTags[elementName] !== true) {
                    ComponentStyles._seenTags[elementName] = true;
                    const $template = document.createElement("template");
                    $template.innerHTML = `<style>${this.componentStyles}</style>`;
                    shadyCSS.prepareTemplate($template, elementName);
                }
            }
        }
        // used the inform other mixins of the presence of this one
        get componentStylesMixinApplied() {
            return true;
        }
    }
    ComponentStyles._seenTags = {};
    return ComponentStyles;
}
exports.ComponentStylesMixin = ComponentStylesMixin;
// tslint:enable no-any


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var renderMixin_1 = __webpack_require__(42);
exports.RenderMixin = renderMixin_1.RenderMixin;
var componentStylesMixin_1 = __webpack_require__(39);
exports.ComponentStylesMixin = componentStylesMixin_1.ComponentStylesMixin;
var overridingStylesMixin_1 = __webpack_require__(41);
exports.OverridingStylesMixin = overridingStylesMixin_1.OverridingStylesMixin;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(9);
// tslint:disable no-any
function OverridingStylesMixin(base) {
    class OverridingStyles extends base {
        constructor(...args) {
            super(...args);
            const elementName = this.localName; // _this_ should ultimately be of type HTMLElement
            const shadyCSS = window.ShadyCSS;
            const hasNativeShadowDOMSupport = !shadyCSS;
            // look for __CtOverridingStyles property on the window object
            const overridingStylesObject = (window.__CtOverridingStyles) || {};
            const componentOverridingStyleSheets = [
                ...overridingStylesObject["*"] || [],
                ...overridingStylesObject[elementName.toLowerCase()] || []
            ];
            // we don't initially check for overrriding style sheets here because we need this code to execute if ComponentStylesMixin is depending on it
            if (hasNativeShadowDOMSupport) {
                // have any overriding stylesheets been added to this tag?
                if (componentOverridingStyleSheets) {
                    if (!this.styleElements)
                        this.styleElements = [];
                    componentOverridingStyleSheets.forEach(x => {
                        const isFile = /^(.*?)\.css$/.test(x);
                        const content = isFile
                            ? `@import url('${x}');`
                            : x;
                        this.styleElements = [
                            ...this.styleElements,
                            skate.h("style", content)
                        ];
                    });
                }
            }
            else {
                if (OverridingStyles._seenTags[elementName] !== true) {
                    OverridingStyles._seenTags[elementName] = true;
                    // multiple sheets can be provided so we need to queue them all up
                    const promises = [];
                    function fetchSheet(url) {
                        return new Promise(resolve => {
                            const xhr = new XMLHttpRequest();
                            xhr.onreadystatechange = () => {
                                if (xhr.readyState === XMLHttpRequest.DONE) {
                                    if (xhr.status === 200) {
                                        resolve(xhr.responseText);
                                    }
                                    else {
                                        resolve(`:host { content: 'Error: could not load stylesheet: ${url}' }`);
                                    }
                                }
                            };
                            xhr.open("GET", url);
                            xhr.send();
                        });
                    }
                    if (componentOverridingStyleSheets) {
                        componentOverridingStyleSheets.forEach(x => {
                            const isFile = /^(.*?)\.css$/.test(x);
                            const promise = isFile
                                ? fetchSheet(x)
                                : Promise.resolve(x);
                            promises.push(promise);
                        });
                    }
                    Promise
                        .all(promises)
                        .then(styles => {
                        // once we have all the CSS we need to mash them into a template element for the ShadyCSS polyfill
                        const $template = document.createElement("template");
                        // if component styles are available and the ComponentStylesMixin has been applied then we need to apply the styles here *before* we apply the overriding styles
                        if (this.componentStyles && this.componentStylesMixinApplied === true) {
                            $template.innerHTML += this.componentStyles;
                        }
                        if (styles.length > 0) {
                            const css = styles.join("\n");
                            $template.innerHTML += `<style>${css}</style>`;
                        }
                        if ($template.innerHTML.length) {
                            shadyCSS.prepareTemplate($template, elementName);
                        }
                    });
                }
            }
        }
        // used the inform other mixins of the presence of this one
        get overridingStylesMixinApplied() {
            return true;
        }
    }
    OverridingStyles._seenTags = {};
    return OverridingStyles;
}
exports.OverridingStylesMixin = OverridingStylesMixin;
// tslint:enable no-any


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable no-any
function RenderMixin(base) {
    class Render extends base {
        renderCallback() {
            const styles = ensureArray(this.styleElements || []);
            const html = ensureArray(this.componentMarkup
                ? this.componentMarkup() || []
                : []);
            return [
                ...styles,
                ...html
            ];
        }
    }
    function ensureArray(value) {
        return (value instanceof Array)
            ? value
            : [value];
    }
    return Render;
}
exports.RenderMixin = RenderMixin;
// tslint:enable no-any


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Models_1 = __webpack_require__(19);
var DefaultAlerts;
(function (DefaultAlerts) {
    function AlertErrorWithOkayButton(title = "Error", body = "An error occurred.", priority = 1, action) {
        return {
            raisedOn: new Date().getTime(),
            priority: priority,
            type: "error",
            icon: Models_1.Icons.FONTAWESOME.WarningTriangle,
            title: title,
            body: body,
            buttons: [
                {
                    text: "Okay",
                    icon: "accept",
                    action: action.okay,
                    type: "primary"
                }
            ]
        };
    }
    DefaultAlerts.AlertErrorWithOkayButton = AlertErrorWithOkayButton;
    function AlertYesNoQuestion(title = "Info", body = "", priority = 0, action) {
        return {
            raisedOn: new Date().getTime(),
            priority: priority,
            type: "question",
            icon: Models_1.Icons.FONTAWESOME.QuestionCircleFilled,
            title: title,
            body: body,
            buttons: [
                {
                    text: "No",
                    icon: "decline",
                    action: action.no,
                    type: "secondary"
                },
                {
                    text: "Yes",
                    icon: "accept",
                    action: action.yes,
                    type: "primary"
                }
            ]
        };
    }
    DefaultAlerts.AlertYesNoQuestion = AlertYesNoQuestion;
})(DefaultAlerts = exports.DefaultAlerts || (exports.DefaultAlerts = {}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppMode;
(function (AppMode) {
    // tslint:disable no-any
    AppMode[AppMode["Broadcaster"] = "broadcaster"] = "Broadcaster";
    AppMode[AppMode["Responder"] = "responder"] = "Responder";
    // tslint:enable no-any
})(AppMode = exports.AppMode || (exports.AppMode = {}));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// tslint:disable no-any

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Connecting"] = "connecting"] = "Connecting";
    ConnectionStatus[ConnectionStatus["Connected"] = "connected"] = "Connected";
    ConnectionStatus[ConnectionStatus["Disconnected"] = "disconnected"] = "Disconnected";
    ConnectionStatus[ConnectionStatus["Disconnecting"] = "disconnecting"] = "Disconnecting";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Icons;
(function (Icons) {
    Icons.ICOMOON = {
        CheckBoxEmpty: [
            "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM896 896h-768v-768h768v768z"
        ],
        CheckBoxChecked: [
            "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
        ],
        CheckCircleFilled: [
            "M733.714 419.429q0-16-10.286-26.286l-52-51.429q-10.857-10.857-25.714-10.857t-25.714 10.857l-233.143 232.571-129.143-129.143q-10.857-10.857-25.714-10.857t-25.714 10.857l-52 51.429q-10.286 10.286-10.286 26.286 0 15.429 10.286 25.714l206.857 206.857q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l310.286-310.286q10.286-10.286 10.286-25.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        CrossCircleFilled: [
            "M656.571 641.143q0-14.857-10.857-25.714l-103.429-103.429 103.429-103.429q10.857-10.857 10.857-25.714 0-15.429-10.857-26.286l-51.429-51.429q-10.857-10.857-26.286-10.857-14.857 0-25.714 10.857l-103.429 103.429-103.429-103.429q-10.857-10.857-25.714-10.857-15.429 0-26.286 10.857l-51.429 51.429q-10.857 10.857-10.857 26.286 0 14.857 10.857 25.714l103.429 103.429-103.429 103.429q-10.857 10.857-10.857 25.714 0 15.429 10.857 26.286l51.429 51.429q10.857 10.857 26.286 10.857 14.857 0 25.714-10.857l103.429-103.429 103.429 103.429q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l51.429-51.429q10.857-10.857 10.857-26.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        ExclamationCircleFilled: [
            "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM576 832h-128v-128h128v128zM576 576h-128v-384h128v384z"
        ],
        QuestionCircleFilled: [
            "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 832c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM617.538 504.158c-39.112 24.57-57.538 38.114-57.538 56.092v32c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-33.618 12.964-63.854 38.532-89.87 18.864-19.194 41.778-33.59 63.936-47.512 45.564-28.624 65.532-43.978 65.532-70.868 0-29.252-16.88-48.788-31.042-60.026-22.734-18.040-54.328-27.974-88.958-27.974-52.534 0-99.792 35.082-114.924 85.314-7.648 25.382-34.422 39.758-59.806 32.114-25.382-7.648-39.76-34.422-32.114-59.806 13.112-43.52 40.398-82.63 76.832-110.124 37.71-28.456 82.668-43.498 130.012-43.498 56.208 0 108.994 17.322 148.63 48.776 43.444 34.474 67.37 82.496 67.37 135.224 0 82.76-63.846 122.872-110.462 152.158z"
        ]
    };
    Icons.FONTAWESOME = {
        BellFilled: [
            "M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
        ],
        CircleNotch: [
            "M1005.714 512c0 272.571-221.143 493.714-493.714 493.714s-493.714-221.143-493.714-493.714c0-248 182.857-453.143 420.571-488.571v130.286c-166.857 33.714-292.571 181.714-292.571 358.286 0 201.714 164 365.714 365.714 365.714s365.714-164 365.714-365.714c0-176.571-125.714-324.571-292.571-358.286v-130.286c237.714 35.429 420.571 240.571 420.571 488.571z"
        ],
        CheckBoxEmpty: [
            "M640 146.286h-475.429q-37.714 0-64.571 26.857t-26.857 64.571v475.429q0 37.714 26.857 64.571t64.571 26.857h475.429q37.714 0 64.571-26.857t26.857-64.571v-475.429q0-37.714-26.857-64.571t-64.571-26.857zM804.571 237.714v475.429q0 68-48.286 116.286t-116.286 48.286h-475.429q-68 0-116.286-48.286t-48.286-116.286v-475.429q0-68 48.286-116.286t116.286-48.286h475.429q68 0 116.286 48.286t48.286 116.286z"
        ],
        CheckBoxChecked: [
            "M391.429 742.286l350.857-350.857q10.857-10.857 10.857-25.714t-10.857-25.714l-58.286-58.286q-10.857-10.857-25.714-10.857t-25.714 10.857l-266.857 266.857-120.571-120.571q-10.857-10.857-25.714-10.857t-25.714 10.857l-58.286 58.286q-10.857 10.857-10.857 25.714t10.857 25.714l204.571 204.571q10.857 10.857 25.714 10.857t25.714-10.857zM877.714 237.714v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571q68 0 116.286 48.286t48.286 116.286z"
        ],
        CheckCircleFilled: [
            "M733.714 419.429q0-16-10.286-26.286l-52-51.429q-10.857-10.857-25.714-10.857t-25.714 10.857l-233.143 232.571-129.143-129.143q-10.857-10.857-25.714-10.857t-25.714 10.857l-52 51.429q-10.286 10.286-10.286 26.286 0 15.429 10.286 25.714l206.857 206.857q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l310.286-310.286q10.286-10.286 10.286-25.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        Cross: [
            "M741.714 755.429q0 22.857-16 38.857l-77.714 77.714q-16 16-38.857 16t-38.857-16l-168-168-168 168q-16 16-38.857 16t-38.857-16l-77.714-77.714q-16-16-16-38.857t16-38.857l168-168-168-168q-16-16-16-38.857t16-38.857l77.714-77.714q16-16 38.857-16t38.857 16l168 168 168-168q16-16 38.857-16t38.857 16l77.714 77.714q16 16 16 38.857t-16 38.857l-168 168 168 168q16 16 16 38.857z"
        ],
        CrossCircleFilled: [
            "M656.571 641.143q0-14.857-10.857-25.714l-103.429-103.429 103.429-103.429q10.857-10.857 10.857-25.714 0-15.429-10.857-26.286l-51.429-51.429q-10.857-10.857-26.286-10.857-14.857 0-25.714 10.857l-103.429 103.429-103.429-103.429q-10.857-10.857-25.714-10.857-15.429 0-26.286 10.857l-51.429 51.429q-10.857 10.857-10.857 26.286 0 14.857 10.857 25.714l103.429 103.429-103.429 103.429q-10.857 10.857-10.857 25.714 0 15.429 10.857 26.286l51.429 51.429q10.857 10.857 26.286 10.857 14.857 0 25.714-10.857l103.429-103.429 103.429 103.429q10.857 10.857 25.714 10.857 15.429 0 26.286-10.857l51.429-51.429q10.857-10.857 10.857-26.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        ExclamationCircleFilled: [
            "M438.857 73.143q119.429 0 220.286 58.857t159.714 159.714 58.857 220.286-58.857 220.286-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857zM512 785.714v-108.571q0-8-5.143-13.429t-12.571-5.429h-109.714q-7.429 0-13.143 5.714t-5.714 13.143v108.571q0 7.429 5.714 13.143t13.143 5.714h109.714q7.429 0 12.571-5.429t5.143-13.429zM510.857 589.143l10.286-354.857q0-6.857-5.714-10.286-5.714-4.571-13.714-4.571h-125.714q-8 0-13.714 4.571-5.714 3.429-5.714 10.286l9.714 354.857q0 5.714 5.714 10t13.714 4.286h105.714q8 0 13.429-4.286t6-10z"
        ],
        InfoCircleFilled: [
            "M585.143 786.286v-91.429c0-10.286-8-18.286-18.286-18.286h-54.857v-292.571c0-10.286-8-18.286-18.286-18.286h-182.857c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h54.857v182.857h-54.857c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h256c10.286 0 18.286-8 18.286-18.286zM512 274.286v-91.429c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v91.429c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
        ],
        QuestionCircleFilled: [
            "M512 786.286v-109.714q0-8-5.143-13.143t-13.143-5.143h-109.714q-8 0-13.143 5.143t-5.143 13.143v109.714q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143zM658.286 402.286q0-50.286-31.714-93.143t-79.143-66.286-97.143-23.429q-138.857 0-212 121.714-8.571 13.714 4.571 24l75.429 57.143q4 3.429 10.857 3.429 9.143 0 14.286-6.857 30.286-38.857 49.143-52.571 19.429-13.714 49.143-13.714 27.429 0 48.857 14.857t21.429 33.714q0 21.714-11.429 34.857t-38.857 25.714q-36 16-66 49.429t-30 71.714v20.571q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143q0-10.857 12.286-28.286t31.143-28.286q18.286-10.286 28-16.286t26.286-20 25.429-27.429 16-34.571 7.143-46.286zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"
        ],
        WarningTriangle: [
            "M585.143 785.714v-108.571c0-10.286-8-18.857-18.286-18.857h-109.714c-10.286 0-18.286 8.571-18.286 18.857v108.571c0 10.286 8 18.857 18.286 18.857h109.714c10.286 0 18.286-8.571 18.286-18.857zM584 572l10.286-262.286c0-3.429-1.714-8-5.714-10.857-3.429-2.857-8.571-6.286-13.714-6.286h-125.714c-5.143 0-10.286 3.429-13.714 6.286-4 2.857-5.714 8.571-5.714 12l9.714 261.143c0 7.429 8.571 13.143 19.429 13.143h105.714c10.286 0 18.857-5.714 19.429-13.143zM576 38.286l438.857 804.571c12.571 22.286 12 49.714-1.143 72s-37.143 36-62.857 36h-877.714c-25.714 0-49.714-13.714-62.857-36s-13.714-49.714-1.143-72l438.857-804.571c12.571-23.429 37.143-38.286 64-38.286s51.429 14.857 64 38.286z"
        ],
        Wifi: [
            "M585.143 870.286c-14.857 0-94.857-80-94.857-95.429 0-28 73.143-43.429 94.857-43.429s94.857 15.429 94.857 43.429c0 15.429-80 95.429-94.857 95.429zM739.429 715.429c-8 0-70.286-57.143-154.286-57.143-84.571 0-145.714 57.143-154.286 57.143-13.714 0-96.571-82.286-96.571-96 0-5.143 2.286-9.714 5.714-13.143 61.143-60.571 160.571-94.286 245.143-94.286s184 33.714 245.143 94.286c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96.571 96zM895.429 560c-4.571 0-9.714-2.286-13.143-4.571-94.286-73.143-173.714-116.571-297.143-116.571-172.571 0-304 121.143-310.286 121.143-13.143 0-95.429-82.286-95.429-96 0-4.571 2.286-9.143 5.714-12.571 102.286-102.286 256.571-158.857 400-158.857s297.714 56.571 400 158.857c3.429 3.429 5.714 8 5.714 12.571 0 13.714-82.286 96-95.429 96zM1050.286 405.143c-4.571 0-9.143-2.286-12.571-5.143-132-116-274.286-180.571-452.571-180.571s-320.571 64.571-452.571 180.571c-3.429 2.857-8 5.143-12.571 5.143-13.143 0-96-82.286-96-96 0-5.143 2.286-9.714 5.714-13.143 144.571-143.429 353.143-222.857 555.429-222.857s410.857 79.429 555.429 222.857c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96 96z"
        ]
    };
})(Icons = exports.Icons || (exports.Icons = {}));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IncidentStatus;
(function (IncidentStatus) {
    IncidentStatus[IncidentStatus["Closed"] = 0] = "Closed";
    IncidentStatus[IncidentStatus["Open"] = 1] = "Open";
})(IncidentStatus = exports.IncidentStatus || (exports.IncidentStatus = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseStatus;
(function (ResponseStatus) {
    // tslint:disable no-any
    ResponseStatus[ResponseStatus["NotReceivedNotification"] = "not-received"] = "NotReceivedNotification";
    ResponseStatus[ResponseStatus["Received"] = "received"] = "Received";
    ResponseStatus[ResponseStatus["Displayed"] = "displayed"] = "Displayed";
    ResponseStatus[ResponseStatus["Unable"] = "unable"] = "Unable";
    ResponseStatus[ResponseStatus["Attending"] = "attending"] = "Attending";
    ResponseStatus[ResponseStatus["Acknowledged"] = "acknowledged"] = "Acknowledged";
    ResponseStatus[ResponseStatus["AutoDismissed"] = "auto-dismissed"] = "AutoDismissed";
    // tslint:enable no-any
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoomRole;
(function (RoomRole) {
    // tslint:disable no-any
    RoomRole[RoomRole["None"] = "none"] = "None";
    RoomRole[RoomRole["Participant"] = "participant"] = "Participant";
    RoomRole[RoomRole["Moderator"] = "moderator"] = "Moderator";
    // tslint:enable
})(RoomRole = exports.RoomRole || (exports.RoomRole = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ct_xmpp_client_1 = __webpack_require__(32);
const Models_1 = __webpack_require__(0);
class Comms {
    constructor(name, server, xmpp, store) {
        const clientOptions = {
            debug: true,
            mucHost: xmpp.mucHost,
            mam: {
                auto: false,
                defaultTimeLimit: (1000 * 60 * 60 * 24) // 24 hours
            },
            autoLogin: xmpp.autoLogin,
            autoReconnect: true,
            pingInterval: 3000,
            pingTimeout: 3000,
            uploadHost: xmpp.uploadHost
        };
        this._clientName = name;
        this._client = new ct_xmpp_client_1.CtXmppClient(this._clientName, server, clientOptions);
        this._broadcastRoom = xmpp.broadcastRoom;
        this._responseRoom = xmpp.responseRoom;
        this._store = store;
    }
    login(user, password) {
        this.username = user;
        return this._client.login(user, password);
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.status === Models_1.ConnectionStatus.Connected) {
                yield this._client.logout();
            }
        });
    }
    clearAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            this._client.destroyDbs();
        });
    }
    onNewMessage(handler) {
        this._client.addEventListener(ct_xmpp_client_1.CtXmppClient.EVENT_TYPES.NEW_MESSAGE, (message) => __awaiter(this, void 0, void 0, function* () {
            yield this._store.setLastProcessedMessageId(message._id);
            Comms._log(`%c✊ MESSAGE RECEIEVED: %c${message._id}`, "color: #060; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            Comms._log(message.stanza.message);
            handler(message);
        }));
    }
    onMessageUpdate(handler) {
        this._client.addEventListener(ct_xmpp_client_1.CtXmppClient.EVENT_TYPES.MESSAGE_UPDATED, (update) => {
            Comms._log(`%c🎉 MESSAGE UPDATED: %c${update.sender_resource} > ${update.type}`, "color: #669; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            handler(update);
        });
    }
    onChatMarkerUpdate(handler) {
        this._client.addEventListener(ct_xmpp_client_1.CtXmppClient.EVENT_TYPES.RECEIPT_RECIEVED, (update) => {
            Comms._log(`%c📖 CHAT MARKER RECEIVED: %c${update.sender_resource} > ${update.type}`, "color: #669; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            handler(update);
        });
    }
    onError(handler) {
        this._client.addEventListener(ct_xmpp_client_1.CtXmppClient.EVENT_TYPES.ERROR, handler);
    }
    onStatusUpdate(handler) {
        this._client.addEventListener(ct_xmpp_client_1.CtXmppClient.EVENT_TYPES.STATUS, (status) => {
            this.status = Models_1.ConnectionStatus[status.label];
            if (this.status === Models_1.ConnectionStatus.Connected) {
                this.username = this._client.username.toLowerCase();
            }
            Comms._log(`%c💻 CONNECTIVITY CHANGE: %c${this.status}`, "color: #669; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            handler(Models_1.ConnectionStatus[status.label]);
        });
    }
    sendMessage(to, payload, isBroadcaster, attachments = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const sentMessage = yield this._client.sendChatMessage(to, null, payload, attachments);
            yield this._store.setLastProcessedMessageId(sentMessage._id);
            Comms._log(`%c👈 MESSAGE SENT: %c${sentMessage._id}`, "color: #600; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            Comms._log(sentMessage.stanza.message);
            return sentMessage;
        });
    }
    // tslint:disable-next-line no-any
    updateStatus(status, label, broadcast = false, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.setChatStatus(status, label, broadcast, metadata);
            Comms._log(`%c👌 CHAT STATUS RESPONSE: %c${JSON.stringify(response)}`, "color: #669; font-weight: bold;", "color: #999; font-weight: normal; font-size: 0.8em;");
            return response;
        });
    }
    // tslint:disable-next-line no-any
    static _log(...logArgs) {
        // tslint:disable-next-line no-console
        console.log.call(null, ...logArgs);
    }
}
exports.Comms = Comms;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class BasePageEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(messageId) {
        super();
        this.messageId = messageId;
    }
}
exports.BasePageEventArgs = BasePageEventArgs;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class CommsEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(success, exception) {
        super();
        this.success = success;
        if (exception)
            this.exception = exception;
    }
}
exports.CommsEventArgs = CommsEventArgs;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class ReadPageDetailEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(page) {
        super();
        this.page = page;
    }
}
exports.ReadPageDetailEventArgs = ReadPageDetailEventArgs;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class SendNewPageEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(page) {
        super();
        this.page = page;
    }
}
exports.SendNewPageEventArgs = SendNewPageEventArgs;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class SendPageResponseEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(pageId, response, sender) {
        super();
        this.response = response;
        this.pageId = pageId;
        this.sender = sender;
    }
}
exports.SendPageResponseEventArgs = SendPageResponseEventArgs;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventArgs_1 = __webpack_require__(8);
class UserActivityEventArgs extends BaseEventArgs_1.BaseEventArgs {
    constructor(jid, date) {
        super();
        this.jid = jid;
        this.date = date;
    }
}
exports.UserActivityEventArgs = UserActivityEventArgs;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = __webpack_require__(10);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
class ConnectivityHandler extends BaseHandler_1.BaseHandler {
    constructor() {
        super(...arguments);
        this.messageKey = null;
        this.eventType = [
            Events_1.PagerEvents._Request_Logout,
            Events_1.PagerEvents.ConnectionResult
        ];
    }
    createMessage(data) {
        return {};
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleMessageReceipt(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (eventType === Events_1.PagerEvents._Request_Logout) {
                this.pagerLayer.emit(Events_1.PagerEvents.RaiseAlert, Models_1.DefaultAlerts.AlertYesNoQuestion("Logout", "Do you wish to logout?", 1, {
                    yes: () => __awaiter(this, void 0, void 0, function* () {
                        yield this.pagerLayer.comms.logout();
                        this.pagerLayer.emit(Events_1.PagerEvents.LogoutResult);
                    })
                }));
            }
            if (eventType === Events_1.PagerEvents.ConnectionResult) {
                const data = eventData;
                if (!data.success) {
                    const message = `Unable to login. Please check your connectivity and try again.`;
                    this.pagerLayer.emit(Events_1.PagerEvents.RaiseAlert, Models_1.DefaultAlerts.AlertErrorWithOkayButton("Login Error", message, 1, {}));
                }
            }
        });
    }
}
exports.ConnectivityHandler = ConnectivityHandler;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = __webpack_require__(10);
const Events_1 = __webpack_require__(3);
class ReadPageDetailHandler extends BaseHandler_1.BaseHandler {
    constructor() {
        super(...arguments);
        this.messageKey = null;
        this.eventType = [
            Events_1.PagerEvents._Request_ReadPageDetail
        ];
    }
    createMessage(data) {
        return {};
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleMessageReceipt(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (eventType === Events_1.PagerEvents._Request_ReadPageDetail) {
                const data = eventData;
                if (this.pagerLayer.config.isBroadcaster) {
                    this.pagerLayer.emit(Events_1.PagerEvents._Request_OpenBroadcasterReadModal, data.page);
                }
                else {
                    this.pagerLayer.emit(Events_1.PagerEvents._Request_OpenClientReadModal, data.page);
                }
            }
        });
    }
}
exports.ReadPageDetailHandler = ReadPageDetailHandler;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = __webpack_require__(10);
const _1 = __webpack_require__(11);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
class ReceiveNewPageHandler extends BaseHandler_1.BaseHandler {
    constructor() {
        super(...arguments);
        this.messageKey = _1.MessageType.NewPage;
        this.eventType = [
            Events_1.PagerEvents._Request_SendNewPage
        ];
    }
    createMessage(data) {
        return Object.assign({}, data.page);
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.pagerLayer.config.isBroadcaster) {
                const page = message.data[this.messageKey];
                const pendingPages = yield this.pagerLayer.getPendingPages();
                const existing = pendingPages.find(x => x._id === page._id);
                if (existing) {
                    if (message.attachments.length > 0) {
                        page.image = [];
                        page.audio = [];
                        message.attachments.map(x => {
                            if (x.type.includes("image")) {
                                page.image.push(x.path);
                            }
                            else {
                                page.audio.push(x.path);
                            }
                        });
                        page.attachmentsLoaded = true;
                        yield this.pagerLayer.store.updatePage(page);
                    }
                    this.pagerLayer.emit(Events_1.PagerEvents.PageUpdate, page);
                }
                else {
                    yield this.pagerLayer.store.addPage(page);
                    yield this.pagerLayer.store.addToPendingPages(page);
                    this.pagerLayer.emit(Events_1.PagerEvents.NewPageReceived, page);
                }
            }
        });
    }
    handleMessageReceipt(receipt) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = receipt.message.data[this.messageKey];
            const userReceived = receipt.message.recipient_id;
            const response = {
                ts: receipt.message.ts,
                type: Models_1.ContactResponseType.Received
            };
            const updatedPage = yield this.pagerLayer.addContactResponseToPage(page, response, userReceived);
            this.pagerLayer.emit(Events_1.PagerEvents.PageUpdate, updatedPage);
        });
    }
    handleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.ReceiveNewPageHandler = ReceiveNewPageHandler;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = __webpack_require__(10);
const _1 = __webpack_require__(11);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(7);
class SendNewPageHandler extends BaseHandler_1.BaseHandler {
    constructor() {
        super(...arguments);
        this.messageKey = null;
        this.eventType = [
            Events_1.PagerEvents._Request_SendNewPage
        ];
    }
    createMessage(data) {
        return {};
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleMessageReceipt(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (eventType === Events_1.PagerEvents._Request_SendNewPage) {
                const data = eventData;
                try {
                    const jids = data.page.to.map(contact => contact.jid);
                    const attachments = data.page.image.concat(data.page.audio);
                    data.page._id = utils_1.generateRandomSixString();
                    const existing = yield this.pagerLayer.store.getPageById(data.page._id);
                    if (!existing) {
                        yield this.pagerLayer.store.addPage(data.page);
                        yield this.pagerLayer.sendMessage(_1.MessageType.NewPage, { page: data.page }, jids, attachments);
                        this.pagerLayer.emit(Events_1.PagerEvents.PageUpdate, data.page);
                    }
                }
                catch (ex) {
                    this.pagerLayer.emit(Events_1.PagerEvents.RaiseAlert, Models_1.DefaultAlerts.AlertErrorWithOkayButton("Send Error", ex, 1, {}));
                }
            }
        });
    }
}
exports.SendNewPageHandler = SendNewPageHandler;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = __webpack_require__(10);
const _1 = __webpack_require__(11);
const Models_1 = __webpack_require__(0);
const Events_1 = __webpack_require__(3);
class SendPageResponseHandler extends BaseHandler_1.BaseHandler {
    constructor() {
        super(...arguments);
        this.messageKey = _1.MessageType.PageResponse;
        this.eventType = [
            Events_1.PagerEvents.PageResponse
        ];
    }
    createMessage(data) {
        return data;
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = message.data[this.messageKey];
            const page = yield this.pagerLayer.store.getPageById(data.pageId);
            yield this.pagerLayer.addContactResponseToPage(page, data.response, data.from);
            this.pagerLayer.emit(Events_1.PagerEvents.PageUpdate);
        });
    }
    handleMessageReceipt(message) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    handleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (eventType === Events_1.PagerEvents.PageResponse) {
                const data = eventData;
                try {
                    yield this.pagerLayer.sendMessage(_1.MessageType.PageResponse, { pageId: data.pageId, response: data.response, from: this.pagerLayer.getCurrentXmppUser() }, [data.sender]);
                    yield this.pagerLayer.store.removePendingPage(data.pageId);
                    this.pagerLayer.emit(Events_1.PagerEvents.PageUpdate, null);
                    this.pagerLayer.emit(Events_1.PagerEvents.RespondedToPage, data.pageId);
                    const pendingPages = yield this.pagerLayer.getPendingPages();
                    if (pendingPages.length === 0) {
                        this.pagerLayer.emit(Events_1.PagerEvents.RespondedToAllPages);
                    }
                }
                catch (ex) {
                    this.pagerLayer.emit(Events_1.PagerEvents.RaiseAlert, Models_1.DefaultAlerts.AlertErrorWithOkayButton("Send Error", ex, 1, {}));
                }
            }
        });
    }
}
exports.SendPageResponseHandler = SendPageResponseHandler;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Models_1 = __webpack_require__(0);
var DefaultAlerts;
(function (DefaultAlerts) {
    function AlertErrorWithOkayButton(title = "Error", body = "An error occurred.", priority = 1, action) {
        return {
            raisedOn: new Date().getTime(),
            priority: priority,
            type: "error",
            icon: Models_1.Icons.FONTAWESOME.WarningTriangle,
            title: title,
            body: body,
            buttons: [
                {
                    text: "Okay",
                    icon: "accept",
                    action: action.okay,
                    type: "primary"
                }
            ]
        };
    }
    DefaultAlerts.AlertErrorWithOkayButton = AlertErrorWithOkayButton;
    function AlertYesNoQuestion(title = "Info", body = "", priority = 0, action) {
        return {
            raisedOn: new Date().getTime(),
            priority: priority,
            type: "question",
            icon: Models_1.Icons.FONTAWESOME.QuestionCircleFilled,
            title: title,
            body: body,
            buttons: [
                {
                    text: "No",
                    icon: "decline",
                    action: action.no,
                    type: "cancel"
                },
                {
                    text: "Yes",
                    icon: "accept",
                    action: action.yes,
                    type: "primary"
                }
            ]
        };
    }
    DefaultAlerts.AlertYesNoQuestion = AlertYesNoQuestion;
})(DefaultAlerts = exports.DefaultAlerts || (exports.DefaultAlerts = {}));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppMode;
(function (AppMode) {
    // tslint:disable no-any
    AppMode[AppMode["Broadcaster"] = "broadcaster"] = "Broadcaster";
    AppMode[AppMode["Responder"] = "responder"] = "Responder";
    // tslint:enable no-any
})(AppMode = exports.AppMode || (exports.AppMode = {}));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// tslint:disable no-any

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Connecting"] = "connecting"] = "Connecting";
    ConnectionStatus[ConnectionStatus["Connected"] = "connected"] = "Connected";
    ConnectionStatus[ConnectionStatus["Disconnected"] = "disconnected"] = "Disconnected";
    ConnectionStatus[ConnectionStatus["Disconnecting"] = "disconnecting"] = "Disconnecting";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactResponseType;
(function (ContactResponseType) {
    // tslint:disable no-any
    ContactResponseType[ContactResponseType["Received"] = "received"] = "Received";
    ContactResponseType[ContactResponseType["Response"] = "response"] = "Response";
    // tslint:enable no-any
})(ContactResponseType = exports.ContactResponseType || (exports.ContactResponseType = {}));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeviceType;
(function (DeviceType) {
    // tslint:disable no-any
    DeviceType[DeviceType["Android"] = "android"] = "Android";
    DeviceType[DeviceType["Electron"] = "electon"] = "Electron";
    DeviceType[DeviceType["iOS"] = "ios"] = "iOS";
    // tslint:enable no-any
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseStatus;
(function (ResponseStatus) {
    // tslint:disable no-any
    ResponseStatus[ResponseStatus["NotReceivedNotification"] = "not-received"] = "NotReceivedNotification";
    ResponseStatus[ResponseStatus["Received"] = "received"] = "Received";
    ResponseStatus[ResponseStatus["Displayed"] = "displayed"] = "Displayed";
    ResponseStatus[ResponseStatus["Unable"] = "unable"] = "Unable";
    ResponseStatus[ResponseStatus["Attending"] = "attending"] = "Attending";
    ResponseStatus[ResponseStatus["Acknowledged"] = "acknowledged"] = "Acknowledged";
    ResponseStatus[ResponseStatus["AutoDismissed"] = "auto-dismissed"] = "AutoDismissed";
    // tslint:enable no-any
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(name) {
        this._saveToPersistentQueue = Promise.resolve();
        this._name = name;
        if (window.PouchDB) {
            this.db = new window.PouchDB(`${this._name}`);
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this._state = yield this._getFromPersistent();
        });
    }
    getLastProcessedMessageId() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._state.lastProcessedMessageId;
        });
    }
    setLastProcessedMessageId(messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.lastProcessedMessageId = messageId;
            yield this._saveToPersistent();
        });
    }
    clearAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                return yield this.db.destroy();
            }
            else {
                return new Promise(resolve => {
                    // simulate async persistence until we implement pouchDB
                    setTimeout(() => {
                        localStorage.removeItem(this._name);
                    }, 0);
                });
            }
        });
    }
    setSelectedContacts(selectedContacts) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.selectedContacts = selectedContacts;
            yield this._saveToPersistent();
        });
    }
    getSelectedContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._state.selectedContacts.map(contact => {
                contact.responses = [];
                return contact;
            });
        });
    }
    addPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.pages = [
                page,
                ...this._state.pages
            ];
            yield this._saveToPersistent();
        });
    }
    updatePage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const idx = this._state.pages.findIndex(x => x._id === page._id);
            if (idx > -1) {
                this._state.pages[idx] = page;
                yield this._saveToPersistent();
            }
        });
    }
    getPages(jid) {
        return __awaiter(this, void 0, void 0, function* () {
            // Only return Pages sent to or by the current user
            return yield this._state.pages.filter(x => x.sender === jid || x.to.find(t => t.jid === jid));
        });
    }
    getPageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._state.pages.find(x => x._id === id);
        });
    }
    setSelectedPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.selectedPage = page;
            yield this._saveToPersistent();
        });
    }
    getSelectedPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._state.selectedPage;
        });
    }
    addToPendingPages(page) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.pendingPages = [
                page._id,
                ...this._state.pendingPages
            ];
            yield this._saveToPersistent();
        });
    }
    getPendingPages(jid) {
        return __awaiter(this, void 0, void 0, function* () {
            const _pages = [];
            this._state.pendingPages.map((id) => {
                _pages.push(this._state.pages.find(x => x._id === id));
            });
            return _pages.filter(x => x.sender === jid || x.to.find(t => t.jid === jid));
        });
    }
    addContactResponseToPage(page, response, jid) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPage = this._state.pages.find(x => x._id === page._id);
            if (existingPage) {
                const contact = existingPage.to.find(x => x.jid === jid);
                if (contact) {
                    const existingResponse = contact.responses.find(x => x.type === response.type);
                    if (!existingResponse) {
                        contact.responses.push(response);
                        yield this._saveToPersistent();
                    }
                }
                return existingPage;
            }
            else
                return null;
        });
    }
    removePendingPage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this._state.pendingPages = this._state.pendingPages.filter((pageId) => pageId !== id ? pageId : null);
            yield this._saveToPersistent();
        });
    }
    // === Private functions === //
    _generateInitialState() {
        return {
            _id: this._name,
            _rev: "",
            lastProcessedMessageId: null,
            selectedContacts: [],
            pages: [],
            selectedPage: null,
            pendingPages: []
        };
    }
    _getFromPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                try {
                    return yield this.db.get(this._name);
                }
                catch (ex) {
                    const state = this._generateInitialState();
                    const res = yield this.db.put(state);
                    state._rev = res.rev;
                    return state;
                }
            }
            else {
                return new Promise(resolve => {
                    // simulate async persistence until we implement pouchDB
                    setTimeout(() => {
                        const state = localStorage.getItem(this._name)
                            ? JSON.parse(localStorage.getItem(this._name))
                            : this._generateInitialState();
                        resolve(state);
                    }, 0);
                });
            }
        });
    }
    _saveToPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                this._saveToPersistentQueue = this._saveToPersistentQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const res = yield this.db.put(this._state);
                        this._state._rev = res.rev;
                    }
                    catch (ex) {
                        throw new Error(ex);
                    }
                }));
            }
            else {
                return new Promise(resolve => {
                    // simulate async persistence until we implement pouchDB
                    setTimeout(() => {
                        // tslint:disable-next-line no-console
                        console.log("Cannot find PouchDB, using localStorage instead");
                        localStorage[this._name] = JSON.stringify(this._state);
                        resolve();
                    }, 0);
                });
            }
        });
    }
}
exports.Store = Store;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comms_1 = __webpack_require__(50);
const Store_1 = __webpack_require__(68);
const pagerUtils_1 = __webpack_require__(20);
const Models = __webpack_require__(0);
const Handlers = __webpack_require__(11);
const Events = __webpack_require__(3);
const Utils = __webpack_require__(7);
const index_1 = __webpack_require__(3);
class PagerLayer {
    // === Constructor === //
    constructor(name, config, dependencyInjections) {
        // === Public fields === //
        this._version = "0.1.5";
        this._messageHandlers = new Map();
        this._messageProcessorQueue = Promise.resolve();
        this._sendMessageQueue = Promise.resolve();
        this.name = name;
        this._eventListeners = {};
        PagerLayer._instances[name] = this;
        if (!config)
            this.config = this._generateDefaultConfig();
        else
            this.config = config;
        this.store = (dependencyInjections && dependencyInjections.store) || new Store_1.Store(this.name);
        this.comms = (dependencyInjections && dependencyInjections.comms) || new Comms_1.Comms(this.name, this.config.xmpp.endpoint, this.config.xmpp, this.store);
        this.comms.onNewMessage((msg) => {
            this._handleNewMessage(msg);
        });
        this.comms.onMessageUpdate((update) => {
            this._handleMessageUpdate(update);
        });
        this.comms.onChatMarkerUpdate((update) => {
            this._handleChatMarkerUpdate(update);
        });
        this.comms.onStatusUpdate((e) => {
            this._handleConnectionChange(e);
        });
        this.comms.onStatusUpdate((status) => {
            if (status === Models.ConnectionStatus.Connected) {
                this.config.xmpp.user.id = this.comms.username;
                this.emit(index_1.PagerEvents.ConnectionResult, new Events.CommsEventArgs(true));
            }
        });
        this._setUpHandlers();
        this.store.init()
            .then(() => {
            this._generateCommonComponents();
            PagerLayer._fireReady(this.name);
        });
    }
    static getInstance(name) {
        return PagerLayer._instances[name] || null;
    }
    static onReady(name, callback) {
        const isReady = PagerLayer._isReady.get(name) || false;
        if (isReady) {
            callback();
        }
        else {
            document.addEventListener(`pager-layer-ready:${name}`, callback);
        }
    }
    static _fireReady(name) {
        PagerLayer._isReady.set(name, true);
        document.dispatchEvent(new CustomEvent(`pager-layer-ready:${name}`));
    }
    // === Event/action handlers === //
    on(name, callback, oneTimeOnly = false) {
        if (Events.PagerEvents[name] === undefined) {
            throw new Error(`Invalid event name provided: "${name}"`);
        }
        if (this._eventListeners[name] === undefined) {
            this._eventListeners[name] = [];
        }
        this._eventListeners[name].push({
            oneTimeOnly: oneTimeOnly,
            callback: (evt) => {
                callback(evt.detail);
            }
        });
    }
    emit(name, data) {
        if (Events.PagerEvents[name] === undefined) {
            throw new Error(`Invalid event name provided: "${name}"`);
        }
        if (this._eventListeners[name] !== undefined) {
            const indexesToRemove = [];
            for (let i = 0; i < this._eventListeners[name].length; i++) {
                const eventListener = this._eventListeners[name][i];
                eventListener.callback({ detail: data });
                if (eventListener.oneTimeOnly === true) {
                    indexesToRemove.push(i);
                }
            }
            if (indexesToRemove.length) {
                this._eventListeners[name] = this._eventListeners[name].filter((x, idx) => !indexesToRemove.includes(idx));
            }
        }
    }
    get connectionStatus() {
        return this.comms.status;
    }
    login(user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.comms.login(user, password);
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.comms.logout();
        });
    }
    clearAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.clearAllData();
            yield this.comms.clearAllData();
        });
    }
    getConnectionStatus() {
        return this.comms.status;
    }
    /**
     * Returns the current XMPP user JID
     *
     * @param {boolean} domain - set to true to get the current domain name
     * @param {boolean} resource - set to true to get the current resource as well
     */
    getCurrentXmppUser(domain = true, resource) {
        return `${this.config.xmpp.user.id}${domain && this.config.xmpp.user.id.indexOf("@") === -1 ? `@${this.config.xmpp.user.domain}${resource ? `/${this.config.xmpp.user.resource}` : ``}` : ``}`;
    }
    /**
     * Returns the current XMPP display name
     */
    getCurrentXmppDisplayName() {
        return this.config.xmpp.user.displayName;
    }
    // tslint:disable-next-line no-any
    sendMessage(messageType, data, to = [], attachments = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const handler = this._messageHandlers.get(messageType);
            const payload = handler.callCreateMessage(data);
            // tslint:disable-next-line no-any
            const message = {
                [handler.messageKey]: JSON.stringify(payload)
            };
            try {
                for (const t of to) {
                    this._sendMessageQueue = this._sendMessageQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                        yield this.comms.sendMessage(t, message, this.config.isBroadcaster, attachments);
                    }));
                }
            }
            catch (ex) {
                throw new Error(ex);
            }
        });
    }
    createNewPage() {
        this._raiseNewPageModal.createNewPage();
    }
    getAllContacts() {
        return this.config.contacts;
    }
    setSelectedContacts(contacts) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.setSelectedContacts(contacts);
        });
    }
    getSelectedContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.getSelectedContacts();
        });
    }
    getPages() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.getPages(this.getCurrentXmppUser());
        });
    }
    setSelectedPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.setSelectedPage(page);
        });
    }
    getSelectedPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.getSelectedPage();
        });
    }
    getPendingPages() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.getPendingPages(this.getCurrentXmppUser());
        });
    }
    addContactResponseToPage(page, response, jid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!jid)
                jid = this.getCurrentXmppUser();
            return yield this.store.addContactResponseToPage(page, response, jid);
        });
    }
    // === Private methods === //
    /**
     * Generates a default config for the incident layer to use.
     * A big assumption is that this will all be configured via
     * CTI in the "real world" and fed via initialisation
     */
    _generateDefaultConfig() {
        return {
            isBroadcaster: true,
            pageTypes: [
                {
                    id: 1,
                    name: "Code Red",
                    colorCode: "#d0021b",
                    default: true
                },
                {
                    id: 2,
                    name: "Code Amber",
                    colorCode: "#f5a623",
                    default: true
                }
            ],
            replyTemplates: [
                {
                    id: 1,
                    name: "Yes / No",
                    buttons: [
                        { name: "Yes", label: "Yes", value: "Yes" },
                        { name: "No", label: "No", value: "No" }
                    ]
                },
                {
                    id: 2,
                    name: "Attend / Unable",
                    buttons: [
                        { name: "Attend", label: "Attend", value: "Attend" },
                        { name: "Unable", label: "Unable", value: "Unable" }
                    ]
                },
                {
                    id: 3,
                    name: "Acknowledge",
                    buttons: [
                        { name: "Acknowledge", label: "Acknowledge", value: "Acknowledge" }
                    ]
                }
            ],
            contacts: [
                {
                    id: 1,
                    name: "Bed Managers",
                    contacts: [
                        { jid: "user01@pagerpoc.com", displayName: "Stevie Heidler" },
                        { jid: "user02@pagerpoc.com", displayName: "Yi Yard" }
                    ]
                },
                {
                    id: 2,
                    name: "Consultants",
                    contacts: [
                        { jid: "user03@pagerpoc.com", displayName: "Hana Kimmel" },
                        { jid: "user04@pagerpoc.com", displayName: "Norma Giorgio" }
                    ]
                },
                {
                    id: 3,
                    name: "Crash Team A",
                    contacts: [
                        { jid: "user05@pagerpoc.com", displayName: "Mitch Fredenburg" },
                        { jid: "user06@pagerpoc.com", displayName: "Octavio Ben" }
                    ]
                },
                {
                    id: 4,
                    name: "Crash Team B",
                    contacts: [
                        { jid: "user07@pagerpoc.com", displayName: "Jenelle Spade" },
                        { jid: "user08@pagerpoc.com", displayName: "Dorcas Summitt" }
                    ]
                },
                {
                    id: 5,
                    name: "Emergency Department",
                    contacts: [
                        { jid: "user09@pagerpoc.com", displayName: "Lashell Alcantara" },
                        { jid: "user10@pagerpoc.com", displayName: "Wava Guidry" }
                    ]
                },
                {
                    id: 6,
                    name: "Trauma Team A",
                    contacts: [
                        { jid: "user11@pagerpoc.com", displayName: "Keesha Pelc" },
                        { jid: "user12@pagerpoc.com", displayName: "Ilda Coatney" }
                    ]
                },
                {
                    id: 7,
                    name: "Trauma Team B",
                    contacts: [
                        { jid: "user13@pagerpoc.com", displayName: "Vicente Yann" },
                        { jid: "user14@pagerpoc.com", displayName: "Thomasine Ciesielski" }
                    ]
                },
                {
                    id: 8,
                    name: "Trauma Team C",
                    contacts: [
                        { jid: "user15@pagerpoc.com", displayName: "Nickole Mcmichael" },
                        { jid: "user16@pagerpoc.com", displayName: "Elidia Broxton" }
                    ]
                },
                {
                    id: 9,
                    name: "Ward Managers",
                    contacts: [
                        { jid: "user17@pagerpoc.com", displayName: "Conrad Butters" },
                        { jid: "user18@pagerpoc.com", displayName: "Jesse Matas" }
                    ]
                },
                {
                    id: 10,
                    name: "General",
                    contacts: [
                        { jid: "user19@pagerpoc.com", displayName: "Lyn Hewey" },
                        { jid: "user20@pagerpoc.com", displayName: "Letha Errico" }
                    ]
                }
            ],
            behaviour: {
                clientReadPageIsModal: true
            },
            xmpp: {
                endpoint: "ws://192.168.3.29:5280/websocket",
                user: {
                    id: "console1",
                    displayName: "",
                    domain: "pacgerpoc.com",
                    resource: Utils.generateRandomSixString()
                },
                password: "ct",
                broadcastRoom: null,
                responseRoom: null,
                mucHost: null,
                uploadHost: "upload.pagerpoc.com",
                autoLogin: true
            }
        };
    }
    _generateCommonComponents() {
        const containerTag = "div";
        const containerId = "___ct_pager_modal_container";
        let container = document.querySelector(`${containerTag}#${containerId}`);
        if (!container) {
            container = document.createElement(containerTag);
            container.id = containerId;
            container.setAttribute("style", "position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: 99999;");
            document.body.appendChild(container);
        }
        this._raiseNewPageModal = document.querySelector("ct-pg-raise-new-page");
        if (this.config.isBroadcaster && !this._raiseNewPageModal) {
            this._raiseNewPageModal = document.createElement("ct-pg-raise-new-page");
            this._raiseNewPageModal.owner = this.name;
            container.insertBefore(this._raiseNewPageModal, container.firstChild);
        }
        this._readOnlyPageModal = document.querySelector("ct-pg-read-only-page");
        if (this.config.isBroadcaster && !this._readOnlyPageModal) {
            this._readOnlyPageModal = document.createElement("ct-pg-read-only-page");
            this._readOnlyPageModal.owner = this.name;
            container.insertBefore(this._readOnlyPageModal, container.firstChild);
        }
        this._newPageModal = document.querySelector("ct-pg-new-page-modal");
        if (!this.config.isBroadcaster && !this._newPageModal) {
            this._newPageModal = document.createElement("ct-pg-new-page-modal");
            this._newPageModal.owner = this.name;
            container.insertBefore(this._newPageModal, container.firstChild);
        }
        this._clientReadOnlyModal = document.querySelector("ct-pg-read-only-client");
        if (!this.config.isBroadcaster && !this._clientReadOnlyModal) {
            this._clientReadOnlyModal = document.createElement("ct-pg-read-only-client");
            this._clientReadOnlyModal.owner = this.name;
            container.insertBefore(this._clientReadOnlyModal, container.firstChild);
        }
        // get or add modal manager component
        this._alertModalManager = document.querySelector("ct-pg-alert-modal-manager");
        if (!this._alertModalManager) {
            this._alertModalManager = document.createElement("ct-pg-alert-modal-manager");
            this._alertModalManager.owner = this.name;
            container.insertBefore(this._alertModalManager, container.firstChild);
        }
    }
    _setUpHandlers() {
        this._messageHandlers = new Map();
        Handlers.get(this).forEach(handler => {
            // add to message handlers
            if (handler.messageKey)
                this._messageHandlers.set(handler.messageKey, handler);
            // set up event handlers
            if (handler.eventType && handler.eventType.length) {
                handler.eventType.forEach(eventType => {
                    this.on(eventType, (e) => {
                        handler.callHandleEvent(eventType, e);
                    });
                });
            }
        });
    }
    /**
     * A generic handler which is called every time an XMPP message is received.
     * This will route messages to the invididual message type handlers.
     *
     * @param message - the JSONified XMPP stanza
     */
    _handleNewMessage(message) {
        this.emit(Events.PagerEvents.UserActivity, new Events.UserActivityEventArgs(message.jid, message.ts));
        const messageType = pagerUtils_1.getMessageType(message.data);
        if (messageType) {
            message.data[messageType] = JSON.parse(message.data[messageType]);
            const handler = this._messageHandlers.get(messageType);
            if (handler) {
                // chain message handling to end of promise queue
                this._messageProcessorQueue = this._messageProcessorQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                    return yield handler.callHandleMessage(message);
                }));
            }
        }
    }
    _handleMessageUpdate(message) {
        this.emit(Events.PagerEvents.UserActivity, new Events.UserActivityEventArgs(message.jid, message.ts));
        const messageType = pagerUtils_1.getMessageType(message.data);
        if (messageType) {
            if (typeof message.data[messageType] !== "string") {
                const handler = this._messageHandlers.get(messageType);
                if (handler) {
                    // chain message handling to end of promise queue
                    this._messageProcessorQueue = this._messageProcessorQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                        return yield handler.callHandleMessage(message);
                    }));
                }
            }
            else {
                this._messageProcessorQueue = this._messageProcessorQueue.then();
            }
        }
    }
    _handleChatMarkerUpdate(update) {
        const receipt = Object.assign({}, update);
        receipt.sender_resource = `${receipt.sender_resource}@${this.config.xmpp.user.domain}`;
        this.emit(Events.PagerEvents.UserActivity, new Events.UserActivityEventArgs(receipt.sender_resource, receipt.message.updated_at || receipt.message.ts));
        const messageType = pagerUtils_1.getMessageType(receipt.message.data);
        if (messageType) {
            receipt.message.data[messageType] = JSON.parse(receipt.message.data[messageType]);
            const handler = this._messageHandlers.get(messageType);
            if (handler) {
                // chain message handling to end of promise queue
                this._messageProcessorQueue = this._messageProcessorQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                    return yield handler.callHandleMessageReceipt(receipt);
                }));
            }
        }
    }
    _handleConnectionChange(status) {
        this.comms.status = status;
        this.emit(Events.PagerEvents.ConnectionStatusChange, status);
    }
}
// === Static instance registration === //
PagerLayer._instances = {};
PagerLayer._isReady = new Map();
exports.PagerLayer = PagerLayer;
window.CtPagerLayer = PagerLayer;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 71 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
__webpack_require__(22);
__webpack_require__(6);
__webpack_require__(16);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(17);
__webpack_require__(5);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(12);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(18);
__webpack_require__(13);
module.exports = __webpack_require__(31);


/***/ })
/******/ ]);