(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";var r=n(1),a=n(19),o=n(35),l=n(13),c=n(21),u=n(36),i=n(38),s=n(9),p=n(39),f=n(40),d=n(41),h=n(14),b=n(22),m=n(24),y=n(25);e.exports=Object.assign(i.default,r,{addCallback:o.default.bind(null,s.default),addReducer:l.default.bind(null,s.default),addReducers:c.default.bind(null,s.default),Component:a.ReactNComponent,createProvider:u.default,default:i.default,getGlobal:p.default.bind(null,s.default),PureComponent:a.ReactNPureComponent,removeCallback:f.default.bind(null,s.default),resetGlobal:d.default.bind(null,s.default),setGlobal:h.default.bind(null,s.default),useGlobal:b.default.bind(null,null),useGlobalReducer:m.default.bind(null,null),withGlobal:y.default.bind(null,null)})},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);t.default=new r.default},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(9);t.default=r.createContext(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),a=n(9),o=function(){return r.default._currentValue2||a.default};t.ReactNComponentWillUnmount=function(e){o().removePropertyListener(e._globalCallback)},t.ReactNComponentWillUpdate=function(e){o().removePropertyListener(e._globalCallback)},t.ReactNDispatch=function(){return o().dispatchers},t.ReactNGlobalCallback=function(e){e.updater.enqueueForceUpdate(e,null,"forceUpdate")},t.ReactNGlobal=function(e,t){return void 0===t&&(t=o()),t.spyState(e._globalCallback)},t.ReactNSetGlobal=function(e,t,n,r){return void 0===r&&(r=o()),t?r.set(e).then(function(e){return a=e,e}).then(t).then(function(){return a}):r.set(e);var a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return e.addDispatcher(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return void 0===n&&(n=null),null===n?e.set(t):e.set(t).then(function(e){return r=e,e}).then(n).then(function(){return r});var r}},,,,,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=n(12),u=function(e){!function(e){if(Object.prototype.hasOwnProperty.call(e,"componentWillUnmount")){var t=e.componentWillUnmount;return e.componentWillUnmount=function(){c.ReactNComponentWillUnmount(e),t()},!0}return!1}(e)&&function(e){var t=Object.getPrototypeOf(e);!!Object.prototype.hasOwnProperty.call(t,"componentWillUnmount")&&(e.componentWillUnmount=function(){c.ReactNComponentWillUnmount(e),t.componentWillUnmount.bind(e)()})}(e),!function(e){if(Object.prototype.hasOwnProperty.call(e,"componentWillUpdate")){var t=e.componentWillUpdate;return e.componentWillUpdate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];c.ReactNComponentWillUpdate(e),t.apply(void 0,o(n))},!0}return!1}(e)&&function(e){var t=Object.getPrototypeOf(e);!!Object.prototype.hasOwnProperty.call(t,"componentWillUpdate")&&(e.componentWillUpdate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];c.ReactNComponentWillUpdate(e),t.componentWillUpdate.bind(e).apply(void 0,o(n))})}(e)},i=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._globalCallback=r._globalCallback.bind(r),u(r),r}return r(t,e),Object.defineProperty(t.prototype,"dispatch",{get:function(){return c.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"global",{get:function(){return c.ReactNGlobal(this)},enumerable:!0,configurable:!0}),t.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),c.ReactNSetGlobal(e,t,!0)},t.prototype._globalCallback=function(){return c.ReactNGlobalCallback(this)},t}(l.Component);t.ReactNComponent=i;var s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._globalCallback=r._globalCallback.bind(r),u(r),r}return r(t,e),Object.defineProperty(t.prototype,"dispatch",{get:function(){return c.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"global",{get:function(){return c.ReactNGlobal(this)},enumerable:!0,configurable:!0}),t.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),c.ReactNSetGlobal(e,t,!0)},t.prototype._globalCallback=function(){return c.ReactNGlobalCallback(this)},t}(l.PureComponent);t.ReactNPureComponent=s},function(e,t,n){"use strict";var r=this&&this.__values||function(e){var t="function"===typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(34),c=function(e){return Object.assign(Object.create(null),e)};t.INVALID_NEW_GLOBAL_STATE=new Error("ReactN global state must be a function, null, object, or Promise.");var u=function(){function e(e,t){void 0===e&&(e=Object.create(null)),void 0===t&&(t=Object.create(null));var n=this;if(this._callbacks=new Set,this._dispatchers=Object.create(null),this._propertyListeners=new Map,this._queue=new Map,this._reduxDevToolsDispatch=null,"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__){var r=window.__REDUX_DEVTOOLS_EXTENSION__({name:"ReactN state"});this._reduxDevToolsDispatch=r(function(e,t){return{dispatch:function(e){return e},getState:function(){return n.state},replaceReducer:function(){return null},subscribe:function(){return null}}})(function(){return n.state},e).dispatch}this._initialReducers=c(t),this._initialState=c(e),this._state=c(e),this.addDispatchers(t)}return e.prototype.addCallback=function(e){var t=this;return this._callbacks.add(e),function(){return t.removeCallback(e)}},e.prototype.addPropertyListener=function(e,t){this.propertyListeners.has(e)?this.propertyListeners.get(e).add(t):this.propertyListeners.set(e,new Set([t]))},e.prototype.addDispatcher=function(e,t){var n=this;return this._dispatchers[e]=this.createDispatcher(t),function(){return n.removeDispatcher(e)}},e.prototype.addDispatchers=function(e){var t,n;try{for(var o=r(Object.entries(e)),l=o.next();!l.done;l=o.next()){var c=a(l.value,2),u=c[0],i=c[1];this.addDispatcher(u,i)}}catch(s){t={error:s}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},e.prototype.clearQueue=function(){return this.queue.clear()},e.prototype.createDispatcher=function(e){var t=this;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.set(e.apply(void 0,o([t.state],n)))}},Object.defineProperty(e.prototype,"dispatchers",{get:function(){return c(this._dispatchers)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e,t){this._queue.set(e,t)},e.prototype.flush=function(){var e,t,n,o,l,c,u,i,s=new Set;try{for(var p=r(this.queue.entries()),f=p.next();!f.done;f=p.next()){var d=a(f.value,2),h=d[0],b=d[1];if(this._state[h]=b,this.propertyListeners.has(h))try{for(var m=r(this.propertyListeners.get(h)),y=m.next();!y.done;y=m.next()){var v=y.value;s.add(v)}}catch(C){n={error:C}}finally{try{y&&!y.done&&(o=m.return)&&o.call(m)}finally{if(n)throw n.error}}}}catch(j){e={error:j}}finally{try{f&&!f.done&&(t=p.return)&&t.call(p)}finally{if(e)throw e.error}}this.clearQueue();try{for(var _=r(s),g=_.next();!g.done;g=_.next()){(v=g.value)()}}catch(P){l={error:P}}finally{try{g&&!g.done&&(c=_.return)&&c.call(_)}finally{if(l)throw l.error}}try{for(var E=r(this._callbacks),O=E.next();!O.done;O=E.next()){var w=O.value;this.set(w(this.state))}}catch(R){u={error:R}}finally{try{O&&!O.done&&(i=E.return)&&i.call(E)}finally{if(u)throw u.error}}},e.prototype.getDispatcher=function(e){if(this.hasDispatcher(e))return this._dispatchers[e];throw new Error("Cannot return unknown ReactN reducer `"+e+"`.")},e.prototype.hasCallback=function(e){return this._callbacks.has(e)},e.prototype.hasDispatcher=function(e){return Object.prototype.hasOwnProperty.call(this._dispatchers,e)},e.prototype.hasPropertyListener=function(e){var t,n,a,o;try{for(var l=r(this.propertyListeners.values()),c=l.next();!c.done;c=l.next()){var u=c.value;try{for(var i=r(u),s=i.next();!s.done;s=i.next()){if(s.value===e)return!0}}catch(p){a={error:p}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(a)throw a.error}}}}catch(f){t={error:f}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return!1},Object.defineProperty(e.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"propertyListeners",{get:function(){return this._propertyListeners},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reduxDevToolsDispatch",{get:function(){return this._reduxDevToolsDispatch},enumerable:!0,configurable:!0}),e.prototype.removeCallback=function(e){return this._callbacks.delete(e)},e.prototype.removeDispatcher=function(e){return!!this.hasDispatcher(e)&&(delete this._dispatchers[e],!0)},e.prototype.removePropertyListener=function(e){var t,n,a=!1;try{for(var o=r(this.propertyListeners.values()),l=o.next();!l.done;l=o.next()){var c=l.value;a=a||c.delete(e)}}catch(u){t={error:u}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return a},e.prototype.reset=function(){this._callbacks.clear(),this._dispatchers=Object.create(null),this._propertyListeners.clear(),this._queue.clear(),this.addDispatchers(this._initialReducers),this._state=c(this._initialState)},e.prototype.set=function(e){if(null===e||"undefined"===typeof e)return Promise.resolve(this.state);if(e instanceof Promise)return this.setPromise(e);if("function"===typeof e)return this.setFunction(e);var n=this.reduxDevToolsDispatch;if(n&&n({stateChange:e,type:"STATE_CHANGE"}),"object"===typeof e)return this.setObject(e);throw t.INVALID_NEW_GLOBAL_STATE},e.prototype.setFunction=function(e){return this.set(e(this.state))},e.prototype.setObject=function(e){var t,n,a=Object.keys(e);try{for(var o=r(a),l=o.next();!l.done;l=o.next()){var c=l.value,u=e[c];this.enqueue(c,u)}}catch(i){t={error:i}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return this.flush(),Promise.resolve(this.state)},e.prototype.setPromise=function(e){var t=this;return e.then(function(e){return t.set(e)})},e.prototype.spyState=function(e){var t=this;return l.default(this._state,function(n){t.addPropertyListener(n,e)})},Object.defineProperty(e.prototype,"state",{get:function(){return c(this._state)},enumerable:!0,configurable:!0}),e}();t.default=u},function(e,t,n){"use strict";var r=this&&this.__values||function(e){var t="function"===typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);t.default=function(e,t){var n,l,c=new Set;try{for(var u=r(Object.entries(t)),i=u.next();!i.done;i=u.next()){var s=a(i.value,2),p=s[0],f=s[1];c.add(o.default(e,p,f))}}catch(d){n={error:d}}finally{try{i&&!i.done&&(l=u.return)&&l.call(u)}finally{if(n)throw n.error}}return function(){var e,t,n=!0;try{for(var a=r(c),o=a.next();!o.done;o=a.next()){var l=o.value;n=n&&l()}}catch(u){e={error:u}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(37),o=n(11),l=n(9),c=n(14),u=n(23);t.default=function(e,t){if(!r.useContext)throw u.default;var n=e||r.useContext(o.default)||l.default,i=a.default();if(r.useEffect(function(){return function(){n.removePropertyListener(i)}}),"undefined"===typeof t)return[n.spyState(i),function(e,t){return void 0===t&&(t=null),c.default(n,e,t)}];return[n.spyState(i)[t],function(e,r){void 0===r&&(r=null);var a=Object.create(null);return a[t]=e,c.default(n,a,r)}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Error("The installed version of React does not support Hooks, which are required for useGlobal.")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(11),o=n(9),l=n(23);t.default=function(e,t){if(!r.useContext)throw l.default;var n=e||r.useContext(a.default)||o.default;return"function"===typeof t?n.createDispatcher(t):n.getDispatcher(t)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n(19),c=n(11),u=n(9),i=n(12),s=function(e){return"string"===typeof e?e:e.displayName||e.name},p=!1,f=!1,d=!1;t.default=function(e,t,n){return void 0===e&&(e=null),void 0===t&&(t=function(e){return e}),void 0===n&&(n=function(){return null}),function(h){var b;return(b=function(l){function c(){var t=null!==l&&l.apply(this,arguments)||this;return t.setGlobal=function(n,r){return void 0===r&&(r=null),i.ReactNSetGlobal(n,r,!p&&!f&&!d,e||t.context||u.default)},t}return r(c,l),Object.defineProperty(c.prototype,"global",{get:function(){return i.ReactNGlobal(this,e||this.context||u.default)},enumerable:!0,configurable:!0}),c.prototype.render=function(){var e=a({},this.props,t(this.global,this.props),n(this.setGlobal,this.props));return o.createElement(h,e)},c}(l.ReactNComponent)).contextType=c.default,b.displayName=s(h)+"-ReactN",b}}},,,,,,,function(e,t,n){e.exports=n(61)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Object.keys(e).reduce(function(n,r){return Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){return t(r),e[r]}}),n},Object.create(null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.addCallback(t)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(11),l=n(13),c=n(21),u=n(20),i=n(14),s=n(22),p=n(24),f=n(25);t.default=function(e,t){void 0===e&&(e=Object.create(null)),void 0===t&&(t=Object.create(null));var n=new u.default(e,t);return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.addCallback=function(e){return n.addCallback(e)},t.addReducer=function(e,t){return l.default(n,e,t)},t.addReducers=function(e){return c.default(n,e)},Object.defineProperty(t,"dispatch",{get:function(){return n.dispatchers},enumerable:!0,configurable:!0}),t.getDispatch=function(){return n.dispatchers},t.getGlobal=function(){return n.state},Object.defineProperty(t,"global",{get:function(){return n.state},enumerable:!0,configurable:!0}),t.removeCallback=function(e){return n.removeCallback(e)},t.reset=function(){return n.reset()},t.setGlobal=function(e,t){return void 0===t&&(t=null),i.default(n,e,t)},t.useGlobal=function(e){return s.default(n,e)},t.useGlobalReducer=function(e){return p.default(n,e)},t.withGlobal=function(e,t){return void 0===e&&(e=function(e){return e}),void 0===t&&(t=function(){return null}),f.default(n,e,t)},t.prototype.render=function(){return a.createElement(o.default.Provider,{value:n},this.props.children)},t}(a.Component)}},,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(12),c=!1,u=!1,i=!1,s=function(e){return"string"===typeof e?e:e.displayName||e.name};t.default=function(e){return function(t){function n(e,n){var r=t.call(this,e,n)||this;return r._globalCallback=r._globalCallback.bind(r),r}return r(n,t),n.prototype.componentWillUnmount=function(){l.ReactNComponentWillUnmount(this),t.prototype.componentWillUnmount&&t.prototype.componentWillUnmount.call(this)},n.prototype.componentWillUpdate=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];l.ReactNComponentWillUpdate(this),t.prototype.componentWillUpdate&&t.prototype.componentWillUpdate.apply(this,o(e))},Object.defineProperty(n.prototype,"dispatch",{get:function(){return l.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"global",{get:function(){return l.ReactNGlobal(this)},enumerable:!0,configurable:!0}),n.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),l.ReactNSetGlobal(e,t,!c&&!u&&!i)},n.prototype._globalCallback=function(){return l.ReactNGlobalCallback(this)},n.displayName=s(e)+"-ReactN",n}(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.state}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.removeCallback(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.reset()}},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),l=n.n(o),c=n(7),u=n(8);function i(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"ReactN")," ","is a global state management solution for"," ",a.a.createElement("strong",null,"ReactJS"),".")}function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Use ",a.a.createElement("code",null,"addCallback")," to execute a function whenever the state changes. The return value of the callback will update the global state, so be sure to only return ",a.a.createElement("code",null,"undefined")," or"," ",a.a.createElement("code",null,"null")," if you do not want the global state to change. Be aware that always returning a new state value will result in an infinite loop, as the new global state will trigger the very same callback."),a.a.createElement("p",null,"The only parameter is the callback function."),"EXAMPLE1",a.a.createElement("p",null,"The return value of ",a.a.createElement("code",null,"addCallback")," is a function that, when executed, removes the callback."),"EXAMPLE2")}function p(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Use ",a.a.createElement("code",null,"addReducer")," to add a reducer to your global state."),a.a.createElement("p",null,"The first parameter is the name of your reducer. You will access your reducer by this name: ",a.a.createElement("code",null,"this.global.reducerName")," or",a.a.createElement("code",null,"useGlobalReducer('reducerName')"),"."),a.a.createElement("p",null,"The second parameter is the reducer function. The reducer function that you write has two parameters: first, the global state; second, the value passed to the reducer. The reducer function that you use has one parameter: the value to pass to the reducer."),"EXAMPLE1",a.a.createElement("p",null,"For a class component, the analogous method is"," ",a.a.createElement("code",null,"this.global.increment(value)"),"."))}function f(){return a.a.createElement("p",null,"Coming soon...")}function d(){return a.a.createElement("p",null,"Coming soon...")}function h(){return a.a.createElement("p",null,"Coming soon...")}function b(){return a.a.createElement("p",null,"Coming soon...")}function m(){return a.a.createElement("p",null,"Coming soon...")}function y(){return a.a.createElement("p",null,"Coming soon...")}function v(){return a.a.createElement("p",null,"Coming soon...")}function _(){return a.a.createElement("p",null,"Coming soon...")}function g(){return a.a.createElement("p",null,"Coming soon...")}function E(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("code",null,"yarn add reactn"))}n(45);var O=n(6),w=(n(46),n(47),"M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"),C="#202020",j="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",P=69;function R(){var e=Object(r.useGlobal)("rainbow"),t=Object(O.a)(e,1)[0];return a.a.createElement("a",{className:"app-header-github-banner",href:"https://github.com/CharlesStover/reactn",rel:"nofollower nofollower noopener",target:"_blank",title:"ReactN on GitHub"},a.a.createElement("svg",{fill:C,height:P,width:P,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 250"},a.a.createElement("path",{className:"app-header-github-banner-background",d:"M0 0l115 115h15l12 27 108 108V0z",style:{fill:t}}),a.a.createElement("path",{className:"app-header-github-banner-arm",d:w}),a.a.createElement("path",{d:j})))}n(48);var N="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3 c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9 c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6 c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11 c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6 c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4 c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6 c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5 c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2 c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8 c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9 c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3 c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9 c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7 c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9 C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6 c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1 c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6 C644,312.2,621.1,332.1,585.7,347.1z",x=300/267,G=426.15,k=135.475,S=(585.3-267)/2/2,D=570.95;function M(e){var t=e.className,n={fill:e.fill};return a.a.createElement("svg",{className:t,enableBackground:"new "+"".concat(k," ").concat(S," ").concat(D," ").concat(G),height:"1em",version:"1.1",viewBox:"".concat(k," ").concat(S," ").concat(D," ").concat(G),width:"".concat(x,"em"),x:"0px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",y:"0px"},a.a.createElement("g",null,a.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7",style:n}),a.a.createElement("path",{d:N,style:n}),a.a.createElement("polygon",{points:"320.8,78.4 320.8,78.4 320.8,78.4",style:n}),a.a.createElement("polygon",{points:"520.5,78.1 520.5,78.1 520.5,78.1",style:n})))}function T(){var e=Object(r.useGlobal)("rainbow"),t=Object(O.a)(e,1)[0];return a.a.createElement("header",{className:"app-header",style:{backgroundColor:t}},a.a.createElement("div",null,a.a.createElement("h1",null,a.a.createElement(c.b,{title:"ReactN Documentation",to:"/"},"React",a.a.createElement(M,{className:"header-react-logo",fill:t}),"N"))),a.a.createElement(R,null))}n(57);var U=n(31),L=n.n(U),W=(n(59),"app-navigation-list-item"),A="".concat(W," ").concat(W,"-selected"),z="".concat(W," ").concat(W,"-unselected"),I=function(e){return Object.prototype.hasOwnProperty.call(e,"pages")},q=function(e,t){return e.reduce(function(e,n){var r=Object(O.a)(n,1)[0];return e||t.substring(1)===r},!1)};function X(e){var t=Object(r.useGlobal)(),n=Object(O.a)(t,1)[0],o=L()().location;if(I(e)){var l=q(e.pages,o.pathname);return a.a.createElement("li",{className:l?A:z},a.a.createElement("strong",null,a.a.createElement(c.b,{title:"".concat(e.pages[0][1]," - ReactN Documentation"),to:"/".concat(e.pages[0][0])},e.children)),a.a.createElement("ul",null,e.pages.map(function(e){var t=Object(O.a)(e,2),r=t[0],l=t[1];return o.pathname.substring(1)===r?a.a.createElement("li",{className:A,key:r,style:{color:n.rainbow}},"\u2b9e ",l):a.a.createElement("li",{className:z,key:r},a.a.createElement(c.b,{key:r,title:"".concat(l," - ReactN Documentation"),to:"/".concat(r)},l))})))}return o.pathname.substring(1)===e.to?a.a.createElement("li",{className:A},a.a.createElement("strong",{style:{color:n.rainbow}},"\u2b9e ",e.children)):a.a.createElement("li",{className:z},a.a.createElement("strong",null,a.a.createElement(c.b,{title:"".concat(e.children," - ReactN Documentation"),to:"/".concat(e.to)},e.children)))}var F={API:[["addCallback","addCallback"],["addReducer","addReducer"],["createProvider","createProvider"],["getGlobal","getGlobal"],["removeCallback","removeCallback"],["resetGlobal","resetGlobal"],["setGlobal","setGlobal"],["useGlobal","useGlobal"],["useGlobalReducer","useGlobalReducer"],["withGlobal","withGlobal"]],EXAMPLES:[["async-example","Asynchronous"],["counter-example","Counter"],["shopping-cart-example","Shopping Cart"],["todo-example","TODO"]],GETTING_STARTED:[["install","Installation"]]};function B(){var e=Object(r.useGlobal)("rainbow"),t=Object(O.a)(e,1)[0];return a.a.createElement("nav",{className:"app-navigation",style:{backgroundColor:t}},a.a.createElement("ul",null,a.a.createElement(X,{to:""},"About"),a.a.createElement(X,{pages:F.GETTING_STARTED},"Getting Started"),a.a.createElement(X,{pages:F.API},"API"),a.a.createElement(X,{pages:F.EXAMPLES},"Examples"),a.a.createElement(X,{to:"support"},"Support")))}n(60);Object(r.setGlobal)({rainbow:"#61DAFB"}),l.a.render(a.a.createElement(c.a,null,a.a.createElement(function(){return a.a.createElement("div",{className:"app"},a.a.createElement(T,null),a.a.createElement("div",null,a.a.createElement("main",null,a.a.createElement(u.Switch,null,a.a.createElement(u.Route,{component:E,path:"/install"}),a.a.createElement(u.Route,{component:s,path:"/addCallback"}),a.a.createElement(u.Route,{component:p,path:"/addReducer"}),a.a.createElement(u.Route,{component:f,path:"/createProvider"}),a.a.createElement(u.Route,{component:d,path:"/getGlobal"}),a.a.createElement(u.Route,{component:h,path:"/removeCallback"}),a.a.createElement(u.Route,{component:b,path:"/resetGlobal"}),a.a.createElement(u.Route,{component:m,path:"/setGlobal"}),a.a.createElement(u.Route,{component:y,path:"/useGlobal"}),a.a.createElement(u.Route,{component:v,path:"/useGlobalReducer"}),a.a.createElement(u.Route,{component:_,path:"/withGlobal"}),a.a.createElement(u.Route,{component:g,path:"/support"}),a.a.createElement(u.Route,{component:i}))),a.a.createElement(B,null)))},null)),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.a4c64d46.chunk.js.map