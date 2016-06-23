(this.nativeLog || function(s) {console.log(s)})('START WEEX HTML5: 0.2.18 BUILD 20160609');
/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;
/******/
/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };
/******/
/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/        // Flag the module as loaded
/******/        module.loaded = true;
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }
/******/
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(1)
    var Weex = __webpack_require__(2)
    module.exports = Weex

/***/ },
/* 1 */
/***/ function(module, exports) {

    (this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.13.9');
    /******/ (function(modules) { // webpackBootstrap
    /******/    // The module cache
    /******/    var installedModules = {};
    /******/
    /******/    // The require function
    /******/    function __webpack_require__(moduleId) {
    /******/
    /******/        // Check if module is in cache
    /******/        if(installedModules[moduleId])
    /******/            return installedModules[moduleId].exports;
    /******/
    /******/        // Create a new module (and put it into the cache)
    /******/        var module = installedModules[moduleId] = {
    /******/            exports: {},
    /******/            id: moduleId,
    /******/            loaded: false
    /******/        };
    /******/
    /******/        // Execute the module function
    /******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/        // Flag the module as loaded
    /******/        module.loaded = true;
    /******/
    /******/        // Return the exports of the module
    /******/        return module.exports;
    /******/    }
    /******/
    /******/
    /******/    // expose the modules object (__webpack_modules__)
    /******/    __webpack_require__.m = modules;
    /******/
    /******/    // expose the module cache
    /******/    __webpack_require__.c = installedModules;
    /******/
    /******/    // __webpack_public_path__
    /******/    __webpack_require__.p = "";
    /******/
    /******/    // Load entry module and return exports
    /******/    return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        __webpack_require__(1);
        
        var _framework = __webpack_require__(76);
        
        var framework = _interopRequireWildcard(_framework);
        
        var _package = __webpack_require__(105);
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        var _loop = function _loop(methodName) {
            global[methodName] = function () {
                var ret = framework[methodName].apply(framework, arguments);
                if (ret instanceof Error) {
                    console.error(ret.toString());
                } else if (ret instanceof Array) {
                    ret.forEach(function (r) {
                        if (r instanceof Error) {
                            console.error(r.toString());
                        }
                    });
                }
                return ret;
            };
        };
        
        for (var methodName in framework) {
            _loop(methodName);
        }
        
        Object.assign(global, {
            frameworkVersion: _package.version,
            needTransformerVersion: _package.optionalDependencies['weex-transformer']
        });
        
        /**
         * register methods
         */
        var methods = __webpack_require__(106);
        var _global = global;
        var registerMethods = _global.registerMethods;
        
        registerMethods(methods);
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        __webpack_require__(2);
        
        __webpack_require__(40);
        
        __webpack_require__(74);
        
        __webpack_require__(75);
    
    /***/ },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        __webpack_require__(3);
    
    /***/ },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        __webpack_require__(4);
        module.exports = __webpack_require__(7).Object.assign;
    
    /***/ },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__(5);
        
        $export($export.S + $export.F, 'Object', { assign: __webpack_require__(23) });
    
    /***/ },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var global = __webpack_require__(6),
            core = __webpack_require__(7),
            hide = __webpack_require__(8),
            redefine = __webpack_require__(18),
            ctx = __webpack_require__(21),
            PROTOTYPE = 'prototype';
        
        var $export = function $export(type, name, source) {
          var IS_FORCED = type & $export.F,
              IS_GLOBAL = type & $export.G,
              IS_STATIC = type & $export.S,
              IS_PROTO = type & $export.P,
              IS_BIND = type & $export.B,
              target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
              exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
              expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
              key,
              own,
              out,
              exp;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
            // extend global
            if (target) redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;
    
    /***/ },
    /* 6 */
    /***/ function(module, exports) {
    
        'use strict';
        
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    
    /***/ },
    /* 7 */
    /***/ function(module, exports) {
    
        'use strict';
        
        var core = module.exports = { version: '2.1.5' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    
    /***/ },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var dP = __webpack_require__(9),
            createDesc = __webpack_require__(17);
        module.exports = __webpack_require__(13) ? function (object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };
    
    /***/ },
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var anObject = __webpack_require__(10),
            IE8_DOM_DEFINE = __webpack_require__(12),
            toPrimitive = __webpack_require__(16),
            dP = Object.defineProperty;
        
        exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
          } catch (e) {/* empty */}
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };
    
    /***/ },
    /* 10 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var isObject = __webpack_require__(11);
        module.exports = function (it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!');
          return it;
        };
    
    /***/ },
    /* 11 */
    /***/ function(module, exports) {
    
        'use strict';
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
        
        module.exports = function (it) {
          return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
        };
    
    /***/ },
    /* 12 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        module.exports = !__webpack_require__(13) && !__webpack_require__(14)(function () {
          return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function get() {
              return 7;
            } }).a != 7;
        });
    
    /***/ },
    /* 13 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(14)(function () {
          return Object.defineProperty({}, 'a', { get: function get() {
              return 7;
            } }).a != 7;
        });
    
    /***/ },
    /* 14 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
    
    /***/ },
    /* 15 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var isObject = __webpack_require__(11),
            document = __webpack_require__(6).document
        // in old IE typeof document.createElement is 'object'
        ,
            is = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };
    
    /***/ },
    /* 16 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(11);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
          if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          throw TypeError("Can't convert object to primitive value");
        };
    
    /***/ },
    /* 17 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };
    
    /***/ },
    /* 18 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var global = __webpack_require__(6),
            hide = __webpack_require__(8),
            has = __webpack_require__(19),
            SRC = __webpack_require__(20)('src'),
            TO_STRING = 'toString',
            $toString = Function[TO_STRING],
            TPL = ('' + $toString).split(TO_STRING);
        
        __webpack_require__(7).inspectSource = function (it) {
          return $toString.call(it);
        };
        
        (module.exports = function (O, key, val, safe) {
          var isFunction = typeof val == 'function';
          if (isFunction) has(val, 'name') || hide(val, 'name', key);
          if (O[key] === val) return;
          if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
          if (O === global) {
            O[key] = val;
          } else {
            if (!safe) {
              delete O[key];
              hide(O, key, val);
            } else {
              if (O[key]) O[key] = val;else hide(O, key, val);
            }
          }
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == 'function' && this[SRC] || $toString.call(this);
        });
    
    /***/ },
    /* 19 */
    /***/ function(module, exports) {
    
        "use strict";
        
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };
    
    /***/ },
    /* 20 */
    /***/ function(module, exports) {
    
        'use strict';
        
        var id = 0,
            px = Math.random();
        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };
    
    /***/ },
    /* 21 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // optional / simple context binding
        var aFunction = __webpack_require__(22);
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function () /* ...args */{
            return fn.apply(that, arguments);
          };
        };
    
    /***/ },
    /* 22 */
    /***/ function(module, exports) {
    
        'use strict';
        
        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };
    
    /***/ },
    /* 23 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        // 19.1.2.1 Object.assign(target, source, ...)
        
        var getKeys = __webpack_require__(24),
            gOPS = __webpack_require__(37),
            pIE = __webpack_require__(38),
            toObject = __webpack_require__(39),
            IObject = __webpack_require__(27),
            $assign = Object.assign;
        
        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports = !$assign || __webpack_require__(14)(function () {
          var A = {},
              B = {},
              S = Symbol(),
              K = 'abcdefghijklmnopqrst';
          A[S] = 7;
          K.split('').forEach(function (k) {
            B[k] = k;
          });
          return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target),
              aLen = arguments.length,
              index = 1,
              getSymbols = gOPS.f,
              isEnum = pIE.f;
          while (aLen > index) {
            var S = IObject(arguments[index++]),
                keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
                length = keys.length,
                j = 0,
                key;
            while (length > j) {
              if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
            }
          }return T;
        } : $assign;
    
    /***/ },
    /* 24 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(25),
            enumBugKeys = __webpack_require__(36);
        
        module.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
    
    /***/ },
    /* 25 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var has = __webpack_require__(19),
            toIObject = __webpack_require__(26),
            arrayIndexOf = __webpack_require__(30)(false),
            IE_PROTO = __webpack_require__(34)('IE_PROTO');
        
        module.exports = function (object, names) {
          var O = toIObject(object),
              i = 0,
              result = [],
              key;
          for (key in O) {
            if (key != IE_PROTO) has(O, key) && result.push(key);
          } // Don't enum bug & hidden keys
          while (names.length > i) {
            if (has(O, key = names[i++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          }return result;
        };
    
    /***/ },
    /* 26 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(27),
            defined = __webpack_require__(29);
        module.exports = function (it) {
          return IObject(defined(it));
        };
    
    /***/ },
    /* 27 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(28);
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
          return cof(it) == 'String' ? it.split('') : Object(it);
        };
    
    /***/ },
    /* 28 */
    /***/ function(module, exports) {
    
        "use strict";
        
        var toString = {}.toString;
        
        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };
    
    /***/ },
    /* 29 */
    /***/ function(module, exports) {
    
        "use strict";
        
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };
    
    /***/ },
    /* 30 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(26),
            toLength = __webpack_require__(31),
            toIndex = __webpack_require__(33);
        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIObject($this),
                length = toLength(O.length),
                index = toIndex(fromIndex, length),
                value;
            // Array#includes uses SameValueZero equality algorithm
            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++];
              if (value != value) return true;
              // Array#toIndex ignores holes, Array#includes - not
            } else for (; length > index; index++) {
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index;
                }
              }return !IS_INCLUDES && -1;
          };
        };
    
    /***/ },
    /* 31 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(32),
            min = Math.min;
        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };
    
    /***/ },
    /* 32 */
    /***/ function(module, exports) {
    
        "use strict";
        
        // 7.1.4 ToInteger
        var ceil = Math.ceil,
            floor = Math.floor;
        module.exports = function (it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    
    /***/ },
    /* 33 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var toInteger = __webpack_require__(32),
            max = Math.max,
            min = Math.min;
        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
    
    /***/ },
    /* 34 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var shared = __webpack_require__(35)('keys'),
            uid = __webpack_require__(20);
        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };
    
    /***/ },
    /* 35 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var global = __webpack_require__(6),
            SHARED = '__core-js_shared__',
            store = global[SHARED] || (global[SHARED] = {});
        module.exports = function (key) {
          return store[key] || (store[key] = {});
        };
    
    /***/ },
    /* 36 */
    /***/ function(module, exports) {
    
        'use strict';
        
        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    
    /***/ },
    /* 37 */
    /***/ function(module, exports) {
    
        "use strict";
        
        exports.f = Object.getOwnPropertySymbols;
    
    /***/ },
    /* 38 */
    /***/ function(module, exports) {
    
        "use strict";
        
        exports.f = {}.propertyIsEnumerable;
    
    /***/ },
    /* 39 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(29);
        module.exports = function (it) {
          return Object(defined(it));
        };
    
    /***/ },
    /* 40 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        // fix Promise Problem on JSContext of iOS7~8
        // @see https://bugs.webkit.org/show_bug.cgi?id=135866
        global.Promise = null;
        __webpack_require__(41);
        __webpack_require__(44);
        __webpack_require__(55);
        __webpack_require__(59);
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 41 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        // 19.1.3.6 Object.prototype.toString()
        
        var classof = __webpack_require__(42),
            test = {};
        test[__webpack_require__(43)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
          __webpack_require__(18)(Object.prototype, 'toString', function toString() {
            return '[object ' + classof(this) + ']';
          }, true);
        }
    
    /***/ },
    /* 42 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(28),
            TAG = __webpack_require__(43)('toStringTag')
        // ES3 wrong here
        ,
            ARG = cof(function () {
          return arguments;
        }()) == 'Arguments';
        
        // fallback for IE11 Script Access Denied error
        var tryGet = function tryGet(it, key) {
          try {
            return it[key];
          } catch (e) {/* empty */}
        };
        
        module.exports = function (it) {
          var O, T, B;
          return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
          // builtinTag case
          : ARG ? cof(O)
          // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };
    
    /***/ },
    /* 43 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var store = __webpack_require__(35)('wks'),
            uid = __webpack_require__(20),
            _Symbol = __webpack_require__(6).Symbol,
            USE_SYMBOL = typeof _Symbol == 'function';
        module.exports = function (name) {
          return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
        };
    
    /***/ },
    /* 44 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var $at = __webpack_require__(45)(true);
        
        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(46)(String, 'String', function (iterated) {
          this._t = String(iterated); // target
          this._i = 0; // next index
          // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
          var O = this._t,
              index = this._i,
              point;
          if (index >= O.length) return { value: undefined, done: true };
          point = $at(O, index);
          this._i += point.length;
          return { value: point, done: false };
        });
    
    /***/ },
    /* 45 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var toInteger = __webpack_require__(32),
            defined = __webpack_require__(29);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function (TO_STRING) {
          return function (that, pos) {
            var s = String(defined(that)),
                i = toInteger(pos),
                l = s.length,
                a,
                b;
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
          };
        };
    
    /***/ },
    /* 46 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var LIBRARY = __webpack_require__(47),
            $export = __webpack_require__(5),
            redefine = __webpack_require__(18),
            hide = __webpack_require__(8),
            has = __webpack_require__(19),
            Iterators = __webpack_require__(48),
            $iterCreate = __webpack_require__(49),
            setToStringTag = __webpack_require__(53),
            getPrototypeOf = __webpack_require__(54),
            ITERATOR = __webpack_require__(43)('iterator'),
            BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
        ,
            FF_ITERATOR = '@@iterator',
            KEYS = 'keys',
            VALUES = 'values';
        
        var returnThis = function returnThis() {
          return this;
        };
        
        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function getMethod(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + ' Iterator',
              DEF_VALUES = DEFAULT == VALUES,
              VALUES_BUG = false,
              proto = Base.prototype,
              $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
              $default = $native || getMethod(DEFAULT),
              $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
              $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
              methods,
              key,
              IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };
    
    /***/ },
    /* 47 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = false;
    
    /***/ },
    /* 48 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = {};
    
    /***/ },
    /* 49 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var create = __webpack_require__(50),
            descriptor = __webpack_require__(17),
            setToStringTag = __webpack_require__(53),
            IteratorPrototype = {};
        
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(8)(IteratorPrototype, __webpack_require__(43)('iterator'), function () {
          return this;
        });
        
        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + ' Iterator');
        };
    
    /***/ },
    /* 50 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(10),
            dPs = __webpack_require__(51),
            enumBugKeys = __webpack_require__(36),
            IE_PROTO = __webpack_require__(34)('IE_PROTO'),
            Empty = function Empty() {/* empty */},
            PROTOTYPE = 'prototype';
        
        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var _createDict = function createDict() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__(15)('iframe'),
              i = enumBugKeys.length,
              gt = '>',
              iframeDocument;
          iframe.style.display = 'none';
          __webpack_require__(52).appendChild(iframe);
          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write('<script>document.F=Object</script' + gt);
          iframeDocument.close();
          _createDict = iframeDocument.F;
          while (i--) {
            delete _createDict[PROTOTYPE][enumBugKeys[i]];
          }return _createDict();
        };
        
        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = _createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };
    
    /***/ },
    /* 51 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var dP = __webpack_require__(9),
            anObject = __webpack_require__(10),
            getKeys = __webpack_require__(24);
        
        module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties),
              length = keys.length,
              i = 0,
              P;
          while (length > i) {
            dP.f(O, P = keys[i++], Properties[P]);
          }return O;
        };
    
    /***/ },
    /* 52 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        module.exports = __webpack_require__(6).document && document.documentElement;
    
    /***/ },
    /* 53 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var def = __webpack_require__(9).f,
            has = __webpack_require__(19),
            TAG = __webpack_require__(43)('toStringTag');
        
        module.exports = function (it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };
    
    /***/ },
    /* 54 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(19),
            toObject = __webpack_require__(39),
            IE_PROTO = __webpack_require__(34)('IE_PROTO'),
            ObjectProto = Object.prototype;
        
        module.exports = Object.getPrototypeOf || function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }return O instanceof Object ? ObjectProto : null;
        };
    
    /***/ },
    /* 55 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var $iterators = __webpack_require__(56),
            redefine = __webpack_require__(18),
            global = __webpack_require__(6),
            hide = __webpack_require__(8),
            Iterators = __webpack_require__(48),
            wks = __webpack_require__(43),
            ITERATOR = wks('iterator'),
            TO_STRING_TAG = wks('toStringTag'),
            ArrayValues = Iterators.Array;
        
        for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
          var NAME = collections[i],
              Collection = global[NAME],
              proto = Collection && Collection.prototype,
              key;
          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            for (key in $iterators) {
              if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
          }
        }
    
    /***/ },
    /* 56 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var addToUnscopables = __webpack_require__(57),
            step = __webpack_require__(58),
            Iterators = __webpack_require__(48),
            toIObject = __webpack_require__(26);
        
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
          this._t = toIObject(iterated); // target
          this._i = 0; // next index
          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
          var O = this._t,
              kind = this._k,
              index = this._i++;
          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }
          if (kind == 'keys') return step(0, index);
          if (kind == 'values') return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, 'values');
        
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;
        
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');
    
    /***/ },
    /* 57 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__(43)('unscopables'),
            ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
        module.exports = function (key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };
    
    /***/ },
    /* 58 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = function (done, value) {
          return { value: value, done: !!done };
        };
    
    /***/ },
    /* 59 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var LIBRARY = __webpack_require__(47),
            global = __webpack_require__(6),
            ctx = __webpack_require__(21),
            classof = __webpack_require__(42),
            $export = __webpack_require__(5),
            isObject = __webpack_require__(11),
            anObject = __webpack_require__(10),
            aFunction = __webpack_require__(22),
            anInstance = __webpack_require__(60),
            forOf = __webpack_require__(61),
            setProto = __webpack_require__(65).set,
            speciesConstructor = __webpack_require__(67),
            task = __webpack_require__(68).set,
            microtask = __webpack_require__(70),
            PROMISE = 'Promise',
            TypeError = global.TypeError,
            process = global.process,
            $Promise = global[PROMISE],
            process = global.process,
            isNode = classof(process) == 'process',
            empty = function empty() {/* empty */},
            Internal,
            GenericPromiseCapability,
            Wrapper;
        
        var USE_NATIVE = !!function () {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1),
                FakePromise = (promise.constructor = {})[__webpack_require__(43)('species')] = function (exec) {
              exec(empty, empty);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
          } catch (e) {/* empty */}
        }();
        
        // helpers
        var sameConstructor = function sameConstructor(a, b) {
          // with library wrapper special case
          return a === b || a === $Promise && b === Wrapper;
        };
        var isThenable = function isThenable(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };
        var newPromiseCapability = function newPromiseCapability(C) {
          return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
        };
        var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        };
        var perform = function perform(exec) {
          try {
            exec();
          } catch (e) {
            return { error: e };
          }
        };
        var notify = function notify(promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function () {
            var value = promise._v,
                ok = promise._s == 1,
                i = 0;
            var run = function run(reaction) {
              var handler = ok ? reaction.ok : reaction.fail,
                  resolve = reaction.resolve,
                  reject = reaction.reject,
                  domain = reaction.domain,
                  result,
                  then;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true) result = value;else {
                    if (domain) domain.enter();
                    result = handler(value);
                    if (domain) domain.exit();
                  }
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                reject(e);
              }
            };
            while (chain.length > i) {
              run(chain[i++]);
            } // variable length - can't use forEach
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };
        var onUnhandled = function onUnhandled(promise) {
          task.call(global, function () {
            var value = promise._v,
                abrupt,
                handler,
                console;
            if (isUnhandled(promise)) {
              abrupt = perform(function () {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if (handler = global.onunhandledrejection) {
                  handler({ promise: promise, reason: value });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }promise._a = undefined;
            if (abrupt) throw abrupt.error;
          });
        };
        var isUnhandled = function isUnhandled(promise) {
          if (promise._h == 1) return false;
          var chain = promise._a || promise._c,
              i = 0,
              reaction;
          while (chain.length > i) {
            reaction = chain[i++];
            if (reaction.fail || !isUnhandled(reaction.promise)) return false;
          }return true;
        };
        var onHandleUnhandled = function onHandleUnhandled(promise) {
          task.call(global, function () {
            var handler;
            if (isNode) {
              process.emit('rejectionHandled', promise);
            } else if (handler = global.onrejectionhandled) {
              handler({ promise: promise, reason: promise._v });
            }
          });
        };
        var $reject = function $reject(value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function $resolve(value) {
          var promise = this,
              then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          try {
            if (promise === value) throw TypeError("Promise can't be resolved itself");
            if (then = isThenable(value)) {
              microtask(function () {
                var wrapper = { _w: promise, _d: false }; // wrap
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e); // wrap
          }
        };
        
        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h');
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          Internal = function Promise(executor) {
            this._c = []; // <- awaiting reactions
            this._a = undefined; // <- checked in isUnhandled reactions
            this._s = 0; // <- state
            this._d = false; // <- done
            this._v = undefined; // <- value
            this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false; // <- notify
          };
          Internal.prototype = __webpack_require__(71)($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            'catch': function _catch(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          PromiseCapability = function PromiseCapability() {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
        }
        
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__(53)($Promise, PROMISE);
        __webpack_require__(72)(PROMISE);
        Wrapper = __webpack_require__(7)[PROMISE];
        
        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this),
                $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            // instanceof instead of internal slot check because we should fix it without replacement native Promise core
            if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
            var capability = newPromiseCapability(this),
                $$resolve = capability.resolve;
            $$resolve(x);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(73)(function (iter) {
          $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
          // 25.4.4.1 Promise.all(iterable)
          all: function all(iterable) {
            var C = this,
                capability = newPromiseCapability(C),
                resolve = capability.resolve,
                reject = capability.reject;
            var abrupt = perform(function () {
              var values = [],
                  index = 0,
                  remaining = 1;
              forOf(iterable, false, function (promise) {
                var $index = index++,
                    alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (abrupt) reject(abrupt.error);
            return capability.promise;
          },
          // 25.4.4.4 Promise.race(iterable)
          race: function race(iterable) {
            var C = this,
                capability = newPromiseCapability(C),
                reject = capability.reject;
            var abrupt = perform(function () {
              forOf(iterable, false, function (promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (abrupt) reject(abrupt.error);
            return capability.promise;
          }
        });
    
    /***/ },
    /* 60 */
    /***/ function(module, exports) {
    
        'use strict';
        
        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
            throw TypeError(name + ': incorrect invocation!');
          }return it;
        };
    
    /***/ },
    /* 61 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var ctx = __webpack_require__(21),
            call = __webpack_require__(62),
            isArrayIter = __webpack_require__(63),
            anObject = __webpack_require__(10),
            toLength = __webpack_require__(31),
            getIterFn = __webpack_require__(64);
        module.exports = function (iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function () {
            return iterable;
          } : getIterFn(iterable),
              f = ctx(fn, that, entries ? 2 : 1),
              index = 0,
              length,
              step,
              iterator;
          if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
            entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            call(iterator, f, step.value, entries);
          }
        };
    
    /***/ },
    /* 62 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(10);
        module.exports = function (iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return'];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };
    
    /***/ },
    /* 63 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // check on default Array iterator
        var Iterators = __webpack_require__(48),
            ITERATOR = __webpack_require__(43)('iterator'),
            ArrayProto = Array.prototype;
        
        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };
    
    /***/ },
    /* 64 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var classof = __webpack_require__(42),
            ITERATOR = __webpack_require__(43)('iterator'),
            Iterators = __webpack_require__(48);
        module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };
    
    /***/ },
    /* 65 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(11),
            anObject = __webpack_require__(10);
        var check = function check(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
          set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          function (test, buggy, set) {
            try {
              set = __webpack_require__(21)(Function.call, __webpack_require__(66).f(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;else set(O, proto);
              return O;
            };
          }({}, false) : undefined),
          check: check
        };
    
    /***/ },
    /* 66 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var pIE = __webpack_require__(38),
            createDesc = __webpack_require__(17),
            toIObject = __webpack_require__(26),
            toPrimitive = __webpack_require__(16),
            has = __webpack_require__(19),
            IE8_DOM_DEFINE = __webpack_require__(12),
            gOPD = Object.getOwnPropertyDescriptor;
        
        exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE) try {
            return gOPD(O, P);
          } catch (e) {/* empty */}
          if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    
    /***/ },
    /* 67 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__(10),
            aFunction = __webpack_require__(22),
            SPECIES = __webpack_require__(43)('species');
        module.exports = function (O, D) {
          var C = anObject(O).constructor,
              S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };
    
    /***/ },
    /* 68 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var ctx = __webpack_require__(21),
            invoke = __webpack_require__(69),
            html = __webpack_require__(52),
            cel = __webpack_require__(15),
            global = __webpack_require__(6),
            process = global.process,
            setTask = global.setImmediate,
            clearTask = global.clearImmediate,
            MessageChannel = global.MessageChannel,
            counter = 0,
            queue = {},
            ONREADYSTATECHANGE = 'onreadystatechange',
            defer,
            channel,
            port;
        var run = function run() {
          var id = +this;
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function listener(event) {
          run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [],
                i = 1;
            while (arguments.length > i) {
              args.push(arguments[i++]);
            }queue[++counter] = function () {
              invoke(typeof fn == 'function' ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (__webpack_require__(28)(process) == 'process') {
            defer = function defer(id) {
              process.nextTick(ctx(run, id, 1));
            };
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
              channel = new MessageChannel();
              port = channel.port2;
              channel.port1.onmessage = listener;
              defer = ctx(port.postMessage, port, 1);
              // Browsers with postMessage, skip WebWorkers
              // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function defer(id) {
                  global.postMessage(id + '', '*');
                };
                global.addEventListener('message', listener, false);
                // IE8-
              } else if (ONREADYSTATECHANGE in cel('script')) {
                  defer = function defer(id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                      html.removeChild(this);
                      run.call(id);
                    };
                  };
                  // Rest old browsers
                } else {
                    defer = function defer(id) {
                      setTimeout(ctx(run, id, 1), 0);
                    };
                  }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        };
    
    /***/ },
    /* 69 */
    /***/ function(module, exports) {
    
        "use strict";
        
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function (fn, args, that) {
                          var un = that === undefined;
                          switch (args.length) {
                                            case 0:
                                                              return un ? fn() : fn.call(that);
                                            case 1:
                                                              return un ? fn(args[0]) : fn.call(that, args[0]);
                                            case 2:
                                                              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                            case 3:
                                                              return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                            case 4:
                                                              return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                          }return fn.apply(that, args);
        };
    
    /***/ },
    /* 70 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var global = __webpack_require__(6),
            macrotask = __webpack_require__(68).set,
            Observer = global.MutationObserver || global.WebKitMutationObserver,
            process = global.process,
            Promise = global.Promise,
            isNode = __webpack_require__(28)(process) == 'process',
            head,
            last,
            notify;
        
        var flush = function flush() {
          var parent, fn;
          if (isNode && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            fn(); // <- currently we use it only for Promise - try / catch not required
            head = head.next;
          }last = undefined;
          if (parent) parent.enter();
        };
        
        // Node.js
        if (isNode) {
          notify = function notify() {
            process.nextTick(flush);
          };
          // browsers with MutationObserver
        } else if (Observer) {
            var toggle = true,
                node = document.createTextNode('');
            new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
            notify = function notify() {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
              notify = function notify() {
                Promise.resolve().then(flush);
              };
              // for other environments - macrotask based on:
              // - setImmediate
              // - MessageChannel
              // - window.postMessag
              // - onreadystatechange
              // - setTimeout
            } else {
                notify = function notify() {
                  // strange IE + webpack dev server bug - use .call(global)
                  macrotask.call(global, flush);
                };
              }
        
        module.exports = function (fn) {
          var task = { fn: fn, next: undefined };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          }last = task;
        };
    
    /***/ },
    /* 71 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var redefine = __webpack_require__(18);
        module.exports = function (target, src, safe) {
          for (var key in src) {
            redefine(target, key, src[key], safe);
          }return target;
        };
    
    /***/ },
    /* 72 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var global = __webpack_require__(6),
            dP = __webpack_require__(9),
            DESCRIPTORS = __webpack_require__(13),
            SPECIES = __webpack_require__(43)('species');
        
        module.exports = function (KEY) {
          var C = global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        };
    
    /***/ },
    /* 73 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var ITERATOR = __webpack_require__(43)('iterator'),
            SAFE_CLOSING = false;
        
        try {
          var riter = [7][ITERATOR]();
          riter['return'] = function () {
            SAFE_CLOSING = true;
          };
          Array.from(riter, function () {
            throw 2;
          });
        } catch (e) {/* empty */}
        
        module.exports = function (exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7],
                iter = arr[ITERATOR]();
            iter.next = function () {
              safe = true;
            };
            arr[ITERATOR] = function () {
              return iter;
            };
            exec(arr);
          } catch (e) {/* empty */}
          return safe;
        };
    
    /***/ },
    /* 74 */
    /***/ function(module, exports) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        var _global = global;
        var setTimeout = _global.setTimeout;
        var setTimeoutNative = _global.setTimeoutNative;
        
        // fix no setTimeout on Android V8
        
        if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
          (function () {
            var timeoutMap = {};
            var timeoutId = 0;
            global.setTimeout = function (cb, time) {
              timeoutMap[++timeoutId] = cb;
              setTimeoutNative(timeoutId.toString(), time);
            };
            global.setTimeoutCallback = function (id) {
              if (typeof timeoutMap[id] === 'function') {
                timeoutMap[id]();
                delete timeoutMap[id];
              }
            };
          })();
        }
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 75 */
    /***/ function(module, exports) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        var _global = global;
        var console = _global.console;
        
        
        if (typeof console === 'undefined') {
          global.console = {
            log: function log() {
              if (typeof nativeLog === 'function') {
                nativeLog.apply(undefined, arguments);
              }
            },
            error: function error() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
        
              throw new Error(args);
            }
          };
        }
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 76 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                           * @fileOverview Main entry, instance manager
                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                           * - createInstance(instanceId, code, options, data)
                                                                                                                                                                                                                                                           * - refreshInstance(instanceId, data)
                                                                                                                                                                                                                                                           * - destroyInstance(instanceId)
                                                                                                                                                                                                                                                           * - registerComponents(components)
                                                                                                                                                                                                                                                           * - registerModules(modules)
                                                                                                                                                                                                                                                           * - getRoot(instanceId)
                                                                                                                                                                                                                                                           * - instanceMap
                                                                                                                                                                                                                                                           * - callJS(instanceId, tasks)
                                                                                                                                                                                                                                                           *   - fireEvent(ref, type, data)
                                                                                                                                                                                                                                                           *   - callback(funcId, data)
                                                                                                                                                                                                                                                           */
        
        exports.createInstance = createInstance;
        exports.refreshInstance = refreshInstance;
        exports.destroyInstance = destroyInstance;
        exports.registerComponents = registerComponents;
        exports.registerModules = registerModules;
        exports.registerMethods = registerMethods;
        exports.getRoot = getRoot;
        exports.callJS = callJS;
        
        var _perf = __webpack_require__(77);
        
        var perf = _interopRequireWildcard(_perf);
        
        var _config = __webpack_require__(79);
        
        var config = _interopRequireWildcard(_config);
        
        var _app = __webpack_require__(80);
        
        var _app2 = _interopRequireDefault(_app);
        
        var _vm = __webpack_require__(85);
        
        var _vm2 = _interopRequireDefault(_vm);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
        
        var nativeComponentMap = config.nativeComponentMap;
        
        var instanceMap = {};
        
        /**
         * create a Weex instance
         *
         * @param  {string} instanceId
         * @param  {string} code
         * @param  {object} [options] option `HAS_LOG` enable print log
         * @param  {object} [data]
         */
        function createInstance(instanceId, code, options, data) {
          var instance = instanceMap[instanceId];
          options = options || {};
        
          config.debug = options.debug;
        
          var result;
          if (!instance) {
            perf.start('createInstance', instanceId);
            instance = new _app2.default(instanceId, options);
            instanceMap[instanceId] = instance;
            result = instance.init(code, data);
            perf.end('createInstance', instanceId);
          } else {
            result = new Error('invalid instance id "' + instanceId + '"');
          }
        
          return result;
        }
        
        /**
         * refresh a Weex instance
         *
         * @param  {string} instanceId
         * @param  {object} data
         */
        function refreshInstance(instanceId, data) {
          var instance = instanceMap[instanceId];
          var result;
          if (instance) {
            perf.start('refreshData', instanceId);
            result = instance.refreshData(data);
            perf.end('refreshData', instanceId);
          } else {
            result = new Error('invalid instance id "' + instanceId + '"');
          }
          return result;
        }
        
        /**
         * destroy a Weex instance
         * @param  {string} instanceId
         */
        function destroyInstance(instanceId) {
          var instance = instanceMap[instanceId];
          if (!instance) {
            return new Error('invalid instance id "' + instanceId + '"');
          }
        
          perf.start('destroyInstance', instanceId);
          instance.destroy();
          delete instanceMap[instanceId];
          perf.end('destroyInstance', instanceId);
        
          return instanceMap;
        }
        
        /**
         * register the name of each native component
         * @param  {array} components array of name
         */
        function registerComponents(components) {
          if (Array.isArray(components)) {
            components.forEach(function register(name) {
              /* istanbul ignore if */
              if (!name) {
                return;
              }
              if (typeof name === 'string') {
                nativeComponentMap[name] = true;
              } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
                nativeComponentMap[name.type] = name;
              }
            });
          }
        }
        
        /**
         * register the name and methods of each module
         * @param  {object} modules a object of modules
         */
        function registerModules(modules) {
          if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
            _vm2.default.registerModules(modules);
          }
        }
        
        /**
         * register the name and methods of each api
         * @param  {object} apis a object of apis
         */
        function registerMethods(apis) {
          if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
            _vm2.default.registerMethods(apis);
          }
        }
        
        /**
         * get a whole element tree of an instance
         * for debugging
         * @param  {string} instanceId
         * @return {object} a virtual dom tree
         */
        function getRoot(instanceId) {
          var instance = instanceMap[instanceId];
          var result;
          if (instance) {
            result = instance.getRootElement();
          } else {
            result = new Error('invalid instance id "' + instanceId + '"');
          }
          return result;
        }
        
        var jsHandlers = {
          fireEvent: function fireEvent(instanceId, ref, type, data) {
            var instance = instanceMap[instanceId];
            var result;
            perf.start('fireEvent', instanceId + '-' + ref + '-' + type);
            result = instance.fireEvent(ref, type, data);
            perf.end('fireEvent', instanceId + '-' + ref + '-' + type);
            return result;
          },
        
          callback: function callback(instanceId, funcId, data, ifLast) {
            var instance = instanceMap[instanceId];
            var result;
            perf.start('callback', instanceId + '-' + funcId + '-' + data + '-' + ifLast);
            result = instance.callback(funcId, data, ifLast);
            perf.end('callback', instanceId + '-' + funcId + '-' + data + '-' + ifLast);
            return result;
          }
        };
        
        /**
         * accept calls from native (event or callback)
         *
         * @param  {string} instanceId
         * @param  {array} tasks list with `method` and `args`
         */
        function callJS(instanceId, tasks) {
          var instance = instanceMap[instanceId];
          var results = [];
          if (instance && Array.isArray(tasks)) {
            tasks.forEach(function (task) {
              var handler = jsHandlers[task.method];
              var args = [].concat(_toConsumableArray(task.args));
              if (typeof handler === 'function') {
                log('javascript:', task.method, task.args);
                args.unshift(instanceId);
                results.push(handler.apply(undefined, _toConsumableArray(args)));
              }
            });
          } else {
            results.push(new Error('invalid instance id "' + instanceId + '" or tasks'));
          }
        
          return results;
        }
    
    /***/ },
    /* 77 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.start = start;
        exports.end = end;
        exports.reset = reset;
        exports.toJSON = toJSON;
        
        var _log = __webpack_require__(78);
        
        var _log2 = _interopRequireDefault(_log);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        var data = { type: 'root', children: [] };
        var current = data;
        var stack = [current];
        
        function spaces(num) {
          return Array(num).join(' ');
        }
        
        function start(type, id) {
          var task = { type: type, id: id, children: [], start: Date.now() };
          current.children.push(task);
          stack.push(task);
          current = task;
          (0, _log2.default)('perf:' + spaces(stack.length - 1), 'start', task.type, task.id);
        }
        
        function end(type, id) {
          var task = stack.pop();
          task.end = Date.now();
          current = stack[stack.length - 1];
          (0, _log2.default)('perf:' + spaces(stack.length), 'end', task.end - task.start + 'ms', task.type, task.id);
        }
        
        function reset() {
          data.children = [];
          current = data;
          stack.length = 0;
          stack.push(current);
        }
        
        function toJSON() {
          return JSON.parse(JSON.stringify(data));
        }
    
    /***/ },
    /* 78 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = log;
        
        var _config = __webpack_require__(79);
        
        var config = _interopRequireWildcard(_config);
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function log() {
          if (config.debug) {
            var _global$console;
        
            (_global$console = global.console).log.apply(_global$console, arguments);
          }
        }
        
        global.log = log;
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 79 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var nativeComponentMap = exports.nativeComponentMap = {
          text: true,
          image: true,
          container: true,
          slider: {
            type: 'slider',
            append: 'tree'
          },
          cell: {
            type: 'cell',
            append: 'tree'
          }
        };
        
        var customComponentMap = exports.customComponentMap = {};
        
        var debug = exports.debug = false;
    
    /***/ },
    /* 80 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = AppInstance;
        
        var _util = __webpack_require__(81);
        
        var _perf = __webpack_require__(77);
        
        var perf = _interopRequireWildcard(_perf);
        
        var _bundle = __webpack_require__(82);
        
        var bundle = _interopRequireWildcard(_bundle);
        
        var _ctrl = __webpack_require__(100);
        
        var ctrl = _interopRequireWildcard(_ctrl);
        
        var _differ = __webpack_require__(102);
        
        var _differ2 = _interopRequireDefault(_differ);
        
        var _event = __webpack_require__(103);
        
        var _event2 = _interopRequireDefault(_event);
        
        var _domListener = __webpack_require__(101);
        
        var _domListener2 = _interopRequireDefault(_domListener);
        
        var _dom = __webpack_require__(104);
        
        var _register = __webpack_require__(98);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function AppInstance(instanceId, options) {
          var _this = this;
        
          perf.start('initInstance', instanceId);
          this.id = instanceId;
          this.options = options || {};
          this.vm = null;
          this.doc = new _dom.Document(instanceId);
          this.customComponentMap = {};
          this.callbacks = {};
          this.differ = new _differ2.default(instanceId);
          this.uid = 0;
          this.rendered = false;
          this.eventManager = new _event2.default();
          this.listener = new _domListener2.default(this.id, function (tasks) {
            _this.callTasks(tasks);
          });
          this.doc.setEventManager(this.eventManager);
          this.doc.setListener(this.listener);
        
          perf.end('initInstance', instanceId);
        } /**
           * @fileOverview
           * Weex instance constructor & definition
           */
        
        function normalize(app, v) {
          var type = (0, _util.typof)(v);
        
          switch (type) {
            case 'undefined':
            case 'null':
              return '';
            case 'regexp':
              return v.toString();
            case 'date':
              return v.toISOString();
            case 'number':
            case 'string':
            case 'boolean':
            case 'array':
            case 'object':
              if (v instanceof _dom.Node) {
                return v.ref;
              }
              return v;
            case 'function':
              app.callbacks[++app.uid] = v;
              return app.uid.toString();
            default:
              return JSON.stringify(v);
          }
        }
        
        AppInstance.prototype.callTasks = function (tasks) {
          var _this2 = this;
        
          if ((0, _util.typof)(tasks) !== 'array') {
            tasks = [tasks];
          }
        
          tasks.forEach(function (task) {
            task.args = task.args.map(function (arg) {
              return normalize(_this2, arg);
            });
          });
        
          callNative(this.id, tasks, '-1');
        };
        
        (0, _util.extend)(AppInstance.prototype, bundle, ctrl, {
          registerComponent: _register.registerComponent,
          requireComponent: _register.requireComponent,
          requireModule: _register.requireModule
        });
    
    /***/ },
    /* 81 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.warn = exports.log = exports.indexOf = exports.define = exports.normalize = exports.typof = exports.stringify = exports.isArray = exports.isPlainObject = exports.isObject = exports.extend = exports.toArray = exports.bind = exports.camelize = exports.isReserved = undefined;
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /// lang.js
        
        
        var _config2 = __webpack_require__(79);
        
        var _config3 = _interopRequireDefault(_config2);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        /**
         * Check is a string starts with $ or _
         *
         * @param {String} str
         * @return {Boolean}
         */
        
        var isReserved = exports.isReserved = function isReserved(str) {
          str += '';
          var c = (str + '').charCodeAt(0);
          return c === 0x24 || c === 0x5F;
        };
        
        /**
         * Camelize a hyphen-delmited string.
         *
         * @param {String} str
         * @return {String}
         */
        
        var camelRE = /-(\w)/g;
        function toUpper(_, c) {
          return c ? c.toUpperCase() : '';
        }
        var camelize = exports.camelize = function camelize(str) {
          return str.replace(camelRE, toUpper);
        };
        
        /**
         * Simple bind, faster than native
         *
         * @param {Function} fn
         * @param {Object} ctx
         * @return {Function}
         */
        
        var bind = exports.bind = function bind(fn, ctx) {
          return function (a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          };
        };
        
        /**
         * Convert an Array-like object to a real Array.
         *
         * @param {Array-like} list
         * @param {Number} [start] - start index
         * @return {Array}
         */
        
        var toArray = exports.toArray = function toArray(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        };
        
        /**
         * Mix properties into target object.
         *
         * @param {Object} to
         * @param {Object} from
         */
        
        var extend = exports.extend = function extend(target) {
          for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            src[_key - 1] = arguments[_key];
          }
        
          if (typeof Object.assign === 'function') {
            Object.assign.apply(Object, [target].concat(src));
          } else {
            var first = src.shift();
            for (var key in first) {
              target[key] = first[key];
            }
            if (src.length) {
              extend.apply(undefined, [target].concat(src));
            }
          }
          return target;
        };
        
        /**
         * Quick object check - this is primarily used to tell
         * Objects from primitive values when we know the value
         * is a JSON-compliant type.
         *
         * @param {*} obj
         * @return {Boolean}
         */
        
        var isObject = exports.isObject = function isObject(obj) {
          return !!(obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object');
        };
        
        /**
         * Strict object type check. Only returns true
         * for plain JavaScript objects.
         *
         * @param {*} obj
         * @return {Boolean}
         */
        
        var toString = Object.prototype.toString;
        var isPlainObject = exports.isPlainObject = function isPlainObject(obj) {
          return toString.call(obj) === '[object Object]';
        };
        
        /**
         * Array type check.
         *
         * @param {*} obj
         * @return {Boolean}
         */
        
        var isArray = exports.isArray = function isArray(obj) {
          return Array.isArray(obj);
        };
        
        var stringify = exports.stringify = function stringify(x) {
          return typeof x === 'undefined' || x === null || typeof x === 'function' ? '' : (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? x instanceof RegExp ? x.toString() : x instanceof Date ? JSON.parse(JSON.stringify(x)) : JSON.stringify(x) : x.toString();
        };
        
        var typof = exports.typof = function typof(v) {
          var s = Object.prototype.toString.call(v);
          return s.substring(8, s.length - 1).toLowerCase();
        };
        
        var normalize = exports.normalize = function normalize(v) {
          var type = typof(v);
        
          switch (type) {
            case 'undefined':
            case 'null':
              return '';
            case 'regexp':
              return v.toString();
            case 'date':
              return v.toISOString();
            case 'number':
            case 'string':
            case 'boolean':
            case 'array':
            case 'object':
            case 'function':
              return v;
            default:
              return JSON.stringify(v);
          }
        };
        
        /**
         * Define a non-enumerable property
         *
         * @param {Object} obj
         * @param {String} key
         * @param {*} val
         * @param {Boolean} [enumerable]
         */
        
        var define = exports.define = function define(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        };
        
        /**
         * Manual indexOf because it's slightly faster than
         * native.
         *
         * @param {Array} arr
         * @param {*} obj
         */
        
        var indexOf = exports.indexOf = function indexOf(arr, obj) {
          for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] === obj) return i;
          }
          return -1;
        };
        
        /// debug.js
        
        var hasConsole = typeof console !== 'undefined';
        
        /**
         * Log a message.
         *
         * @param {String} msg
         */
        
        var log = exports.log = function log(msg) {
          var _config = _config3.default || {};
          if (hasConsole && _config.debug) {
            console.log.call(undefined, '[info]: ', msg);
          }
        };
        
        /**
         * We've got a problem here.
         *
         * @param {String} msg
         */
        
        var warn = exports.warn = function warn(msg) {
          // if (hasConsole && (!config.silent || config.debug)) {
          if (hasConsole) {
            console.warn.call(undefined, '[warn]: ', msg);
            /* istanbul ignore if */
            // if (config.debug) {
            //   /* jshint debug: true */
            //   debugger
            // }
          }
        };
    
    /***/ },
    /* 82 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.require = exports.define = undefined;
        exports.clearCommonModules = clearCommonModules;
        exports.bootstrap = bootstrap;
        exports.register = register;
        exports.render = render;
        
        var _semver = __webpack_require__(83);
        
        var _semver2 = _interopRequireDefault(_semver);
        
        var _util = __webpack_require__(81);
        
        var _ = _interopRequireWildcard(_util);
        
        var _config = __webpack_require__(79);
        
        var config = _interopRequireWildcard(_config);
        
        var _perf = __webpack_require__(77);
        
        var perf = _interopRequireWildcard(_perf);
        
        var _vm = __webpack_require__(85);
        
        var _vm2 = _interopRequireDefault(_vm);
        
        var _downgrade = __webpack_require__(99);
        
        var downgrade = _interopRequireWildcard(_downgrade);
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                           * @fileOverview
                                                                                                                                                                                                                           * api that invoked by js bundle code
                                                                                                                                                                                                                           *
                                                                                                                                                                                                                           * - define(name, factory): define a new composed component type
                                                                                                                                                                                                                           * - bootstrap(type, config, data): require a certain type &
                                                                                                                                                                                                                           *         render with (optional) data
                                                                                                                                                                                                                           *
                                                                                                                                                                                                                           * deprecated:
                                                                                                                                                                                                                           * - register(type, options): register a new composed component type
                                                                                                                                                                                                                           * - render(type, data): render by a certain type with (optional) data
                                                                                                                                                                                                                           * - require(type)(data): require a type then render with data
                                                                                                                                                                                                                           */
        
        var WEEX_COMPONENT_REG = /^\@weex-component\//;
        var WEEX_MODULE_REG = /^\@weex-module\//;
        var NORMAL_MODULE_REG = /^\.{1,2}\//;
        var JS_SURFIX_REG = /\.js$/;
        
        var isWeexComponent = function isWeexComponent(name) {
          return !!name.match(WEEX_COMPONENT_REG);
        };
        var isWeexModule = function isWeexModule(name) {
          return !!name.match(WEEX_MODULE_REG);
        };
        var isNormalModule = function isNormalModule(name) {
          return !!name.match(NORMAL_MODULE_REG);
        };
        var isNpmModule = function isNpmModule(name) {
          return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
        };
        
        function removeWeexPrefix(str) {
          return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
        }
        
        function removeJSSurfix(str) {
          return str.replace(JS_SURFIX_REG, '');
        }
        
        var commonModules = {};
        
        function clearCommonModules() {
          commonModules = {};
        }
        
        // define(name, factory) for primary usage
        // or
        // define(name, deps, factory) for compatibility
        // Notice: DO NOT use function define() {},
        // it will cause error after builded by webpack
        var define = exports.define = function define(name, deps, factory) {
          var _this = this;
        
          perf.start('define', name);
        
          if (_.typof(deps) === 'function') {
            factory = deps;
            deps = [];
          }
        
          var _require = function _require(name) {
            var cleanName = void 0;
        
            if (isWeexComponent(name)) {
              cleanName = removeWeexPrefix(name);
              return _this.requireComponent(cleanName);
            }
            if (isWeexModule(name)) {
              cleanName = removeWeexPrefix(name);
              return _this.requireModule(cleanName);
            }
            if (isNormalModule(name)) {
              cleanName = removeJSSurfix(name);
              return commonModules[name];
            }
            if (isNpmModule(name)) {
              cleanName = removeJSSurfix(name);
              return commonModules[name];
            }
          };
          var _module = { exports: {} };
        
          var cleanName = void 0;
          if (isWeexComponent(name)) {
            cleanName = removeWeexPrefix(name);
        
            factory(_require, _module.exports, _module);
        
            this.registerComponent(cleanName, _module.exports);
          } else if (isWeexModule(name)) {
            cleanName = removeWeexPrefix(name);
        
            factory(_require, _module.exports, _module);
        
            _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
          } else if (isNormalModule(name)) {
            cleanName = removeJSSurfix(name);
        
            factory(_require, _module.exports, _module);
        
            commonModules[cleanName] = _module.exports;
          } else if (isNpmModule(name)) {
            cleanName = removeJSSurfix(name);
        
            factory(_require, _module.exports, _module);
        
            var exports = _module.exports;
            if (exports.template || exports.style || exports.methods) {
              // downgrade to old define method (define('componentName', factory))
              // the exports contain one key of template, style or methods
              // but it has risk!!!
              this.registerComponent(cleanName, exports);
            } else {
              commonModules[cleanName] = _module.exports;
            }
          }
        
          perf.end('define', name);
        };
        
        function bootstrap(name, config, data) {
          var cleanName = void 0;
        
          if (isWeexComponent(name)) {
            cleanName = removeWeexPrefix(name);
          } else if (isNpmModule(name)) {
            cleanName = removeJSSurfix(name);
            // check if define by old 'define' method
            if (!this.customComponentMap[cleanName]) {
              return new Error('It\'s not a component: ' + name);
            }
          } else {
            return new Error('Wrong component name: ' + name);
          }
        
          config = _.isPlainObject(config) ? config : {};
        
          if (typeof config.transformerVersion === 'string' && typeof global.needTransformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.needTransformerVersion)) {
            return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.needTransformerVersion));
          }
        
          var _checkDowngrade = downgrade.check(config.downgrade);
          if (_checkDowngrade.isDowngrade) {
            this.callTasks([{
              module: 'instanceWrap',
              method: 'error',
              args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
            }]);
            return new Error('Downgrade: ' + config.downgrade);
          }
        
          perf.start('create vm', cleanName);
        
          this.vm = new _vm2.default(cleanName, { _app: this }, null, data, {
            'hook:ready': function hookReady() {
              perf.end('create vm', cleanName);
            }
          });
        }
        
        /**
         * @deprecated
         */
        function register(type, options) {
          perf.start('register', type);
          this.registerComponent(type, options);
          perf.end('register', type);
        }
        
        /**
         * @deprecated
         */
        function render(type, data) {
          return this.bootstrap(type, {}, data);
        }
        
        /**
         * @deprecated
         */
        function _require2(type) {
          var _this2 = this;
        
          return function (data) {
            return _this2.bootstrap(type, {}, data);
          };
        }
        exports.require = _require2;
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 83 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(process) {'use strict';
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
        
        exports = module.exports = SemVer;
        
        // The debug function is excluded entirely from the minified version.
        /* nomin */var debug;
        /* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
        /* nomin */process.env &&
        /* nomin */process.env.NODE_DEBUG &&
        /* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
          /* nomin */debug = function debug() {
            /* nomin */var args = Array.prototype.slice.call(arguments, 0);
            /* nomin */args.unshift('SEMVER');
            /* nomin */console.log.apply(console, args);
            /* nomin */
          };
          /* nomin */else
          /* nomin */debug = function debug() {};
        
        // Note: this is the semver.org version of the spec that it implements
        // Not necessarily the package version of this code.
        exports.SEMVER_SPEC_VERSION = '2.0.0';
        
        var MAX_LENGTH = 256;
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
        
        // The actual regexps go on exports.re
        var re = exports.re = [];
        var src = exports.src = [];
        var R = 0;
        
        // The following Regular Expressions can be used for tokenizing,
        // validating, and parsing SemVer version strings.
        
        // ## Numeric Identifier
        // A single `0`, or a non-zero digit followed by zero or more digits.
        
        var NUMERICIDENTIFIER = R++;
        src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
        var NUMERICIDENTIFIERLOOSE = R++;
        src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
        
        // ## Non-numeric Identifier
        // Zero or more digits, followed by a letter or hyphen, and then zero or
        // more letters, digits, or hyphens.
        
        var NONNUMERICIDENTIFIER = R++;
        src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
        
        // ## Main Version
        // Three dot-separated numeric identifiers.
        
        var MAINVERSION = R++;
        src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
        
        var MAINVERSIONLOOSE = R++;
        src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
        
        // ## Pre-release Version Identifier
        // A numeric identifier, or a non-numeric identifier.
        
        var PRERELEASEIDENTIFIER = R++;
        src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
        
        var PRERELEASEIDENTIFIERLOOSE = R++;
        src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
        
        // ## Pre-release Version
        // Hyphen, followed by one or more dot-separated pre-release version
        // identifiers.
        
        var PRERELEASE = R++;
        src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
        
        var PRERELEASELOOSE = R++;
        src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
        
        // ## Build Metadata Identifier
        // Any combination of digits, letters, or hyphens.
        
        var BUILDIDENTIFIER = R++;
        src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
        
        // ## Build Metadata
        // Plus sign, followed by one or more period-separated build metadata
        // identifiers.
        
        var BUILD = R++;
        src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
        
        // ## Full Version String
        // A main version, followed optionally by a pre-release version and
        // build metadata.
        
        // Note that the only major, minor, patch, and pre-release sections of
        // the version string are capturing groups.  The build metadata is not a
        // capturing group, because it should not ever be used in version
        // comparison.
        
        var FULL = R++;
        var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
        
        src[FULL] = '^' + FULLPLAIN + '$';
        
        // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
        // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
        // common in the npm registry.
        var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
        
        var LOOSE = R++;
        src[LOOSE] = '^' + LOOSEPLAIN + '$';
        
        var GTLT = R++;
        src[GTLT] = '((?:<|>)?=?)';
        
        // Something like "2.*" or "1.2.x".
        // Note that "x.x" is a valid xRange identifer, meaning "any version"
        // Only the first item is strictly required.
        var XRANGEIDENTIFIERLOOSE = R++;
        src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
        var XRANGEIDENTIFIER = R++;
        src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
        
        var XRANGEPLAIN = R++;
        src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
        
        var XRANGEPLAINLOOSE = R++;
        src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
        
        var XRANGE = R++;
        src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
        var XRANGELOOSE = R++;
        src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
        
        // Tilde ranges.
        // Meaning is "reasonably at or greater than"
        var LONETILDE = R++;
        src[LONETILDE] = '(?:~>?)';
        
        var TILDETRIM = R++;
        src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
        re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
        var tildeTrimReplace = '$1~';
        
        var TILDE = R++;
        src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
        var TILDELOOSE = R++;
        src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
        
        // Caret ranges.
        // Meaning is "at least and backwards compatible with"
        var LONECARET = R++;
        src[LONECARET] = '(?:\\^)';
        
        var CARETTRIM = R++;
        src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
        re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
        var caretTrimReplace = '$1^';
        
        var CARET = R++;
        src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
        var CARETLOOSE = R++;
        src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
        
        // A simple gt/lt/eq thing, or just "" to indicate "any version"
        var COMPARATORLOOSE = R++;
        src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
        var COMPARATOR = R++;
        src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
        
        // An expression to strip any whitespace between the gtlt and the thing
        // it modifies, so that `> 1.2.3` ==> `>1.2.3`
        var COMPARATORTRIM = R++;
        src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
        
        // this one has to use the /g flag
        re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
        var comparatorTrimReplace = '$1$2$3';
        
        // Something like `1.2.3 - 1.2.4`
        // Note that these all use the loose form, because they'll be
        // checked against either the strict or loose comparator form
        // later.
        var HYPHENRANGE = R++;
        src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
        
        var HYPHENRANGELOOSE = R++;
        src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
        
        // Star ranges basically just allow anything at all.
        var STAR = R++;
        src[STAR] = '(<|>)?=?\\s*\\*';
        
        // Compile to actual regexp objects.
        // All are flag-free, unless they were created above with a flag.
        for (var i = 0; i < R; i++) {
          debug(i, src[i]);
          if (!re[i]) re[i] = new RegExp(src[i]);
        }
        
        exports.parse = parse;
        function parse(version, loose) {
          if (version instanceof SemVer) return version;
        
          if (typeof version !== 'string') return null;
        
          if (version.length > MAX_LENGTH) return null;
        
          var r = loose ? re[LOOSE] : re[FULL];
          if (!r.test(version)) return null;
        
          try {
            return new SemVer(version, loose);
          } catch (er) {
            return null;
          }
        }
        
        exports.valid = valid;
        function valid(version, loose) {
          var v = parse(version, loose);
          return v ? v.version : null;
        }
        
        exports.clean = clean;
        function clean(version, loose) {
          var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
          return s ? s.version : null;
        }
        
        exports.SemVer = SemVer;
        
        function SemVer(version, loose) {
          if (version instanceof SemVer) {
            if (version.loose === loose) return version;else version = version.version;
          } else if (typeof version !== 'string') {
            throw new TypeError('Invalid Version: ' + version);
          }
        
          if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
        
          if (!(this instanceof SemVer)) return new SemVer(version, loose);
        
          debug('SemVer', version, loose);
          this.loose = loose;
          var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
        
          if (!m) throw new TypeError('Invalid Version: ' + version);
        
          this.raw = version;
        
          // these are actually numbers
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
        
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
        
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
        
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
        
          // numberify any prerelease numeric ids
          if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
            if (/^[0-9]+$/.test(id)) {
              var num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
            }
            return id;
          });
        
          this.build = m[5] ? m[5].split('.') : [];
          this.format();
        }
        
        SemVer.prototype.format = function () {
          this.version = this.major + '.' + this.minor + '.' + this.patch;
          if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
          return this.version;
        };
        
        SemVer.prototype.toString = function () {
          return this.version;
        };
        
        SemVer.prototype.compare = function (other) {
          debug('SemVer.compare', this.version, this.loose, other);
          if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
        
          return this.compareMain(other) || this.comparePre(other);
        };
        
        SemVer.prototype.compareMain = function (other) {
          if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
        
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        };
        
        SemVer.prototype.comparePre = function (other) {
          if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
        
          // NOT having a prerelease is > having one
          if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
        
          var i = 0;
          do {
            var a = this.prerelease[i];
            var b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
          } while (++i);
        };
        
        // preminor will bump the version up to the next minor release, and immediately
        // down to pre-release. premajor and prepatch work the same way.
        SemVer.prototype.inc = function (release, identifier) {
          switch (release) {
            case 'premajor':
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc('pre', identifier);
              break;
            case 'preminor':
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc('pre', identifier);
              break;
            case 'prepatch':
              // If this is already a prerelease, it will bump to the next version
              // drop any prereleases that might already exist, since they are not
              // relevant at this point.
              this.prerelease.length = 0;
              this.inc('patch', identifier);
              this.inc('pre', identifier);
              break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
              if (this.prerelease.length === 0) this.inc('patch', identifier);
              this.inc('pre', identifier);
              break;
        
            case 'major':
              // If this is a pre-major version, bump up to the same major version.
              // Otherwise increment major.
              // 1.0.0-5 bumps to 1.0.0
              // 1.1.0 bumps to 2.0.0
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case 'minor':
              // If this is a pre-minor version, bump up to the same minor version.
              // Otherwise increment minor.
              // 1.2.0-5 bumps to 1.2.0
              // 1.2.1 bumps to 1.3.0
              if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
              this.patch = 0;
              this.prerelease = [];
              break;
            case 'patch':
              // If this is not a pre-release version, it will increment the patch.
              // If it is a pre-release it will bump up to the same patch version.
              // 1.2.0-5 patches to 1.2.0
              // 1.2.0 patches to 1.2.1
              if (this.prerelease.length === 0) this.patch++;
              this.prerelease = [];
              break;
            // This probably shouldn't be used publicly.
            // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
            case 'pre':
              if (this.prerelease.length === 0) this.prerelease = [0];else {
                var i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === 'number') {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) // didn't increment anything
                  this.prerelease.push(0);
              }
              if (identifier) {
                // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                if (this.prerelease[0] === identifier) {
                  if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
                } else this.prerelease = [identifier, 0];
              }
              break;
        
            default:
              throw new Error('invalid increment argument: ' + release);
          }
          this.format();
          this.raw = this.version;
          return this;
        };
        
        exports.inc = inc;
        function inc(version, release, loose, identifier) {
          if (typeof loose === 'string') {
            identifier = loose;
            loose = undefined;
          }
        
          try {
            return new SemVer(version, loose).inc(release, identifier).version;
          } catch (er) {
            return null;
          }
        }
        
        exports.diff = diff;
        function diff(version1, version2) {
          if (eq(version1, version2)) {
            return null;
          } else {
            var v1 = parse(version1);
            var v2 = parse(version2);
            if (v1.prerelease.length || v2.prerelease.length) {
              for (var key in v1) {
                if (key === 'major' || key === 'minor' || key === 'patch') {
                  if (v1[key] !== v2[key]) {
                    return 'pre' + key;
                  }
                }
              }
              return 'prerelease';
            }
            for (var key in v1) {
              if (key === 'major' || key === 'minor' || key === 'patch') {
                if (v1[key] !== v2[key]) {
                  return key;
                }
              }
            }
          }
        }
        
        exports.compareIdentifiers = compareIdentifiers;
        
        var numeric = /^[0-9]+$/;
        function compareIdentifiers(a, b) {
          var anum = numeric.test(a);
          var bnum = numeric.test(b);
        
          if (anum && bnum) {
            a = +a;
            b = +b;
          }
        
          return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
        }
        
        exports.rcompareIdentifiers = rcompareIdentifiers;
        function rcompareIdentifiers(a, b) {
          return compareIdentifiers(b, a);
        }
        
        exports.major = major;
        function major(a, loose) {
          return new SemVer(a, loose).major;
        }
        
        exports.minor = minor;
        function minor(a, loose) {
          return new SemVer(a, loose).minor;
        }
        
        exports.patch = patch;
        function patch(a, loose) {
          return new SemVer(a, loose).patch;
        }
        
        exports.compare = compare;
        function compare(a, b, loose) {
          return new SemVer(a, loose).compare(b);
        }
        
        exports.compareLoose = compareLoose;
        function compareLoose(a, b) {
          return compare(a, b, true);
        }
        
        exports.rcompare = rcompare;
        function rcompare(a, b, loose) {
          return compare(b, a, loose);
        }
        
        exports.sort = sort;
        function sort(list, loose) {
          return list.sort(function (a, b) {
            return exports.compare(a, b, loose);
          });
        }
        
        exports.rsort = rsort;
        function rsort(list, loose) {
          return list.sort(function (a, b) {
            return exports.rcompare(a, b, loose);
          });
        }
        
        exports.gt = gt;
        function gt(a, b, loose) {
          return compare(a, b, loose) > 0;
        }
        
        exports.lt = lt;
        function lt(a, b, loose) {
          return compare(a, b, loose) < 0;
        }
        
        exports.eq = eq;
        function eq(a, b, loose) {
          return compare(a, b, loose) === 0;
        }
        
        exports.neq = neq;
        function neq(a, b, loose) {
          return compare(a, b, loose) !== 0;
        }
        
        exports.gte = gte;
        function gte(a, b, loose) {
          return compare(a, b, loose) >= 0;
        }
        
        exports.lte = lte;
        function lte(a, b, loose) {
          return compare(a, b, loose) <= 0;
        }
        
        exports.cmp = cmp;
        function cmp(a, op, b, loose) {
          var ret;
          switch (op) {
            case '===':
              if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
              if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
              ret = a === b;
              break;
            case '!==':
              if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
              if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
              ret = a !== b;
              break;
            case '':case '=':case '==':
              ret = eq(a, b, loose);break;
            case '!=':
              ret = neq(a, b, loose);break;
            case '>':
              ret = gt(a, b, loose);break;
            case '>=':
              ret = gte(a, b, loose);break;
            case '<':
              ret = lt(a, b, loose);break;
            case '<=':
              ret = lte(a, b, loose);break;
            default:
              throw new TypeError('Invalid operator: ' + op);
          }
          return ret;
        }
        
        exports.Comparator = Comparator;
        function Comparator(comp, loose) {
          if (comp instanceof Comparator) {
            if (comp.loose === loose) return comp;else comp = comp.value;
          }
        
          if (!(this instanceof Comparator)) return new Comparator(comp, loose);
        
          debug('comparator', comp, loose);
          this.loose = loose;
          this.parse(comp);
        
          if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
        
          debug('comp', this);
        }
        
        var ANY = {};
        Comparator.prototype.parse = function (comp) {
          var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
          var m = comp.match(r);
        
          if (!m) throw new TypeError('Invalid comparator: ' + comp);
        
          this.operator = m[1];
          if (this.operator === '=') this.operator = '';
        
          // if it literally is just '>' or '' then allow anything.
          if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
        };
        
        Comparator.prototype.toString = function () {
          return this.value;
        };
        
        Comparator.prototype.test = function (version) {
          debug('Comparator.test', version, this.loose);
        
          if (this.semver === ANY) return true;
        
          if (typeof version === 'string') version = new SemVer(version, this.loose);
        
          return cmp(version, this.operator, this.semver, this.loose);
        };
        
        exports.Range = Range;
        function Range(range, loose) {
          if (range instanceof Range && range.loose === loose) return range;
        
          if (!(this instanceof Range)) return new Range(range, loose);
        
          this.loose = loose;
        
          // First, split based on boolean or ||
          this.raw = range;
          this.set = range.split(/\s*\|\|\s*/).map(function (range) {
            return this.parseRange(range.trim());
          }, this).filter(function (c) {
            // throw out any that are not relevant for whatever reason
            return c.length;
          });
        
          if (!this.set.length) {
            throw new TypeError('Invalid SemVer Range: ' + range);
          }
        
          this.format();
        }
        
        Range.prototype.format = function () {
          this.range = this.set.map(function (comps) {
            return comps.join(' ').trim();
          }).join('||').trim();
          return this.range;
        };
        
        Range.prototype.toString = function () {
          return this.range;
        };
        
        Range.prototype.parseRange = function (range) {
          var loose = this.loose;
          range = range.trim();
          debug('range', range, loose);
          // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
          var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
          range = range.replace(hr, hyphenReplace);
          debug('hyphen replace', range);
          // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
          range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
          debug('comparator trim', range, re[COMPARATORTRIM]);
        
          // `~ 1.2.3` => `~1.2.3`
          range = range.replace(re[TILDETRIM], tildeTrimReplace);
        
          // `^ 1.2.3` => `^1.2.3`
          range = range.replace(re[CARETTRIM], caretTrimReplace);
        
          // normalize spaces
          range = range.split(/\s+/).join(' ');
        
          // At this point, the range is completely trimmed and
          // ready to be split into comparators.
        
          var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
          var set = range.split(' ').map(function (comp) {
            return parseComparator(comp, loose);
          }).join(' ').split(/\s+/);
          if (this.loose) {
            // in loose mode, throw out any that are not valid comparators
            set = set.filter(function (comp) {
              return !!comp.match(compRe);
            });
          }
          set = set.map(function (comp) {
            return new Comparator(comp, loose);
          });
        
          return set;
        };
        
        // Mostly just for testing and legacy API reasons
        exports.toComparators = toComparators;
        function toComparators(range, loose) {
          return new Range(range, loose).set.map(function (comp) {
            return comp.map(function (c) {
              return c.value;
            }).join(' ').trim().split(' ');
          });
        }
        
        // comprised of xranges, tildes, stars, and gtlt's at this point.
        // already replaced the hyphen ranges
        // turn into a set of JUST comparators.
        function parseComparator(comp, loose) {
          debug('comp', comp);
          comp = replaceCarets(comp, loose);
          debug('caret', comp);
          comp = replaceTildes(comp, loose);
          debug('tildes', comp);
          comp = replaceXRanges(comp, loose);
          debug('xrange', comp);
          comp = replaceStars(comp, loose);
          debug('stars', comp);
          return comp;
        }
        
        function isX(id) {
          return !id || id.toLowerCase() === 'x' || id === '*';
        }
        
        // ~, ~> --> * (any, kinda silly)
        // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
        // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
        // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
        // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
        // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
        function replaceTildes(comp, loose) {
          return comp.trim().split(/\s+/).map(function (comp) {
            return replaceTilde(comp, loose);
          }).join(' ');
        }
        
        function replaceTilde(comp, loose) {
          var r = loose ? re[TILDELOOSE] : re[TILDE];
          return comp.replace(r, function (_, M, m, p, pr) {
            debug('tilde', comp, _, M, m, p, pr);
            var ret;
        
            if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
              // ~1.2 == >=1.2.0- <1.3.0-
              ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
              debug('replaceTilde pr', pr);
              if (pr.charAt(0) !== '-') pr = '-' + pr;
              ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
            } else
              // ~1.2.3 == >=1.2.3 <1.3.0
              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        
            debug('tilde return', ret);
            return ret;
          });
        }
        
        // ^ --> * (any, kinda silly)
        // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
        // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
        // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
        // ^1.2.3 --> >=1.2.3 <2.0.0
        // ^1.2.0 --> >=1.2.0 <2.0.0
        function replaceCarets(comp, loose) {
          return comp.trim().split(/\s+/).map(function (comp) {
            return replaceCaret(comp, loose);
          }).join(' ');
        }
        
        function replaceCaret(comp, loose) {
          debug('caret', comp, loose);
          var r = loose ? re[CARETLOOSE] : re[CARET];
          return comp.replace(r, function (_, M, m, p, pr) {
            debug('caret', comp, _, M, m, p, pr);
            var ret;
        
            if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
              if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
            } else if (pr) {
              debug('replaceCaret pr', pr);
              if (pr.charAt(0) !== '-') pr = '-' + pr;
              if (M === '0') {
                if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
              } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
            } else {
              debug('no pr');
              if (M === '0') {
                if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
              } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
            }
        
            debug('caret return', ret);
            return ret;
          });
        }
        
        function replaceXRanges(comp, loose) {
          debug('replaceXRanges', comp, loose);
          return comp.split(/\s+/).map(function (comp) {
            return replaceXRange(comp, loose);
          }).join(' ');
        }
        
        function replaceXRange(comp, loose) {
          comp = comp.trim();
          var r = loose ? re[XRANGELOOSE] : re[XRANGE];
          return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
            debug('xRange', comp, ret, gtlt, M, m, p, pr);
            var xM = isX(M);
            var xm = xM || isX(m);
            var xp = xm || isX(p);
            var anyX = xp;
        
            if (gtlt === '=' && anyX) gtlt = '';
        
            if (xM) {
              if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0';
              } else {
                // nothing is forbidden
                ret = '*';
              }
            } else if (gtlt && anyX) {
              // replace X with 0
              if (xm) m = 0;
              if (xp) p = 0;
        
              if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                // >1.2.3 => >= 1.2.4
                gtlt = '>=';
                if (xm) {
                  M = +M + 1;
                  m = 0;
                  p = 0;
                } else if (xp) {
                  m = +m + 1;
                  p = 0;
                }
              } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) M = +M + 1;else m = +m + 1;
              }
        
              ret = gtlt + M + '.' + m + '.' + p;
            } else if (xm) {
              ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
            } else if (xp) {
              ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
            }
        
            debug('xRange return', ret);
        
            return ret;
          });
        }
        
        // Because * is AND-ed with everything else in the comparator,
        // and '' means "any version", just remove the *s entirely.
        function replaceStars(comp, loose) {
          debug('replaceStars', comp, loose);
          // Looseness is ignored here.  star is always as loose as it gets!
          return comp.trim().replace(re[STAR], '');
        }
        
        // This function is passed to string.replace(re[HYPHENRANGE])
        // M, m, patch, prerelease, build
        // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
        // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
        // 1.2 - 3.4 => >=1.2.0 <3.5.0
        function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
        
          if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
        
          if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
        
          return (from + ' ' + to).trim();
        }
        
        // if ANY of the sets match ALL of its comparators, then pass
        Range.prototype.test = function (version) {
          if (!version) return false;
        
          if (typeof version === 'string') version = new SemVer(version, this.loose);
        
          for (var i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version)) return true;
          }
          return false;
        };
        
        function testSet(set, version) {
          for (var i = 0; i < set.length; i++) {
            if (!set[i].test(version)) return false;
          }
        
          if (version.prerelease.length) {
            // Find the set of versions that are allowed to have prereleases
            // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
            // That should allow `1.2.3-pr.2` to pass.
            // However, `1.2.4-alpha.notready` should NOT be allowed,
            // even though it's within the range set by the comparators.
            for (var i = 0; i < set.length; i++) {
              debug(set[i].semver);
              if (set[i].semver === ANY) continue;
        
              if (set[i].semver.prerelease.length > 0) {
                var allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
              }
            }
        
            // Version has a -pre, but it's not one of the ones we like.
            return false;
          }
        
          return true;
        }
        
        exports.satisfies = satisfies;
        function satisfies(version, range, loose) {
          try {
            range = new Range(range, loose);
          } catch (er) {
            return false;
          }
          return range.test(version);
        }
        
        exports.maxSatisfying = maxSatisfying;
        function maxSatisfying(versions, range, loose) {
          return versions.filter(function (version) {
            return satisfies(version, range, loose);
          }).sort(function (a, b) {
            return rcompare(a, b, loose);
          })[0] || null;
        }
        
        exports.validRange = validRange;
        function validRange(range, loose) {
          try {
            // Return '*' instead of '' so that truthiness works.
            // This will throw if it's invalid anyway
            return new Range(range, loose).range || '*';
          } catch (er) {
            return null;
          }
        }
        
        // Determine if version is less than all the versions possible in the range
        exports.ltr = ltr;
        function ltr(version, range, loose) {
          return outside(version, range, '<', loose);
        }
        
        // Determine if version is greater than all the versions possible in the range.
        exports.gtr = gtr;
        function gtr(version, range, loose) {
          return outside(version, range, '>', loose);
        }
        
        exports.outside = outside;
        function outside(version, range, hilo, loose) {
          version = new SemVer(version, loose);
          range = new Range(range, loose);
        
          var gtfn, ltefn, ltfn, comp, ecomp;
          switch (hilo) {
            case '>':
              gtfn = gt;
              ltefn = lte;
              ltfn = lt;
              comp = '>';
              ecomp = '>=';
              break;
            case '<':
              gtfn = lt;
              ltefn = gte;
              ltfn = gt;
              comp = '<';
              ecomp = '<=';
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
        
          // If it satisifes the range it is not outside
          if (satisfies(version, range, loose)) {
            return false;
          }
        
          // From now on, variable terms are as if we're in "gtr" mode.
          // but note that everything is flipped for the "ltr" function.
        
          for (var i = 0; i < range.set.length; ++i) {
            var comparators = range.set[i];
        
            var high = null;
            var low = null;
        
            comparators.forEach(function (comparator) {
              if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
              }
              high = high || comparator;
              low = low || comparator;
              if (gtfn(comparator.semver, high.semver, loose)) {
                high = comparator;
              } else if (ltfn(comparator.semver, low.semver, loose)) {
                low = comparator;
              }
            });
        
            // If the edge version comparator has a operator then our version
            // isn't outside it
            if (high.operator === comp || high.operator === ecomp) {
              return false;
            }
        
            // If the lowest version comparator has an operator and our version
            // is less than it then it isn't higher than the range
            if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
              return false;
            } else if (low.operator === ecomp && ltfn(version, low.semver)) {
              return false;
            }
          }
          return true;
        }
        /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)))
    
    /***/ },
    /* 84 */
    /***/ function(module, exports) {
    
        'use strict';
        
        // shim for using process in browser
        
        var process = module.exports = {};
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
            var timeout = setTimeout(cleanUpNextTick);
            draining = true;
        
            var len = queue.length;
            while (len) {
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
            clearTimeout(timeout);
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
                setTimeout(drainQueue, 0);
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
        
        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };
        
        process.cwd = function () {
            return '/';
        };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
            return 0;
        };
    
    /***/ },
    /* 85 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Vm;
        
        var _util = __webpack_require__(81);
        
        var _scope = __webpack_require__(86);
        
        var scope = _interopRequireWildcard(_scope);
        
        var _compiler = __webpack_require__(93);
        
        var compiler = _interopRequireWildcard(_compiler);
        
        var _directive = __webpack_require__(94);
        
        var directive = _interopRequireWildcard(_directive);
        
        var _domHelper = __webpack_require__(96);
        
        var domHelper = _interopRequireWildcard(_domHelper);
        
        var _events = __webpack_require__(97);
        
        var events = _interopRequireWildcard(_events);
        
        var _register = __webpack_require__(98);
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function callOldReadyEntry(vm, component) {
          if (component.methods && component.methods.ready) {
            component.methods.ready.call(vm);
          }
        }
        
        /**
         * ViewModel constructor
         *
         * @param {string} type
         * @param {object} parentVm   which contains _app
         * @param {object} parentEl   root element or frag block
         * @param {object} mergedData external data
         * @param {object} externalEvents external events
         */
        
        // import * as modules from './../api/modules'
        // import * as api from './../api/api'
        
        /**
         * @fileOverview
         * ViewModel Constructor & definition
         */
        
        function Vm(type, parentVm, parentEl, mergedData, externalEvents) {
          this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
          this._app = parentVm._app;
          parentVm._childrenVms && parentVm._childrenVms.push(this);
        
          var component = this._app.customComponentMap[type] || {};
          var data = component.data || {};
        
          this._options = component;
          this._methods = component.methods || {};
          this._computed = component.computed || {};
          this._css = component.style || {};
          this._ids = {};
          this._watchers = [];
          this._vmEvents = {};
          this._childrenVms = [];
          this._type = type;
        
          // bind events and lifecycles
          this._initEvents(externalEvents);
        
          this.$emit('hook:init');
          this._inited = true;
          // proxy data and methods
          // observe data and add this to vms
          this._data = typeof data === 'function' ? data() : data;
          if (mergedData) {
            (0, _util.extend)(this._data, mergedData);
          }
          this._initScope();
        
          this.$emit('hook:created');
          this._created = true;
          // backward old ready entry
          callOldReadyEntry(this, component);
        
          // if no parentElement then specify the documentElement
          this._parentEl = parentEl || this._app.doc.documentElement;
          this._build();
        }
        
        (0, _util.extend)(Vm.prototype, scope, compiler, directive, domHelper, events);
        (0, _util.extend)(Vm, {
          registerModules: _register.registerModules,
          registerMethods: _register.registerMethods
        });
        // Vm.registerModules(modules)
    
    /***/ },
    /* 86 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var _ = __webpack_require__(87);
        var Observer = __webpack_require__(88);
        var Dep = __webpack_require__(90);
        
        /**
         * Setup the scope of an instance, which contains:
         * - observed data
         * - computed properties
         * - user methods
         * - meta properties
         */
        
        exports._initScope = function () {
          this._initData();
          this._initComputed();
          this._initMethods();
          // this._initMeta()
        };
        
        /**
         * Initialize the data. 
         */
        
        var KEY_WORDS = ['$index', '$value', '$event'];
        exports._initData = function () {
          // proxy data on instance
          var data = this._data;
          var i, key;
          // // make sure all props properties are observed
          // var props = this.$options.props
          // if (props) {
          //   i = props.length
          //   while (i--) {
          //     key = _.camelize(props[i])
          //     if (!(key in data)) {
          //       data[key] = null
          //     }
          //   }
          // }
          var keys = Object.keys(data);
          i = keys.length;
          while (i--) {
            key = keys[i];
            if (KEY_WORDS.indexOf(key) > -1 || !_.isReserved(key)) {
              this._proxy(key);
            }
          }
          // observe data
          Observer.create(data).addVm(this);
        };
        
        // /**
        //  * Swap the isntance's $data. Called in $data's setter.
        //  *
        //  * @param {Object} newData
        //  */
        
        // exports._setData = function (newData) {
        //   newData = newData || {}
        //   var oldData = this._data
        //   this._data = newData
        //   var keys, key, i
        //   // unproxy keys not present in new data
        //   keys = Object.keys(oldData)
        //   i = keys.length
        //   while (i--) {
        //     key = keys[i]
        //     if (!_.isReserved(key) && !(key in newData)) {
        //       this._unproxy(key)
        //     }
        //   }
        //   // proxy keys not already proxied,
        //   // and trigger change for changed values
        //   keys = Object.keys(newData)
        //   i = keys.length
        //   while (i--) {
        //     key = keys[i]
        //     if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
        //       // new property
        //       this._proxy(key)
        //     }
        //   }
        //   oldData.__ob__.removeVm(this)
        //   Observer.create(newData).addVm(this)
        //   this._digest()
        // }
        
        /**
         * Proxy a property, so that
         * vm.prop === vm._data.prop
         *
         * @param {String} key
         */
        
        exports._proxy = function (key) {
          // need to store ref to self here
          // because these getter/setters might
          // be called by child instances!
          var self = this;
          Object.defineProperty(self, key, {
            configurable: true,
            enumerable: true,
            get: function proxyGetter() {
              return self._data[key];
            },
            set: function proxySetter(val) {
              self._data[key] = val;
            }
          });
        };
        
        /**
         * Unproxy a property.
         *
         * @param {String} key
         */
        
        exports._unproxy = function (key) {
          delete this[key];
        };
        
        // /**
        //  * Force update on every watcher in scope.
        //  */
        
        // exports._digest = function () {
        //   var i = this._watchers.length
        //   while (i--) {
        //     this._watchers[i].update()
        //   }
        //   var children = this._children
        //   i = children.length
        //   while (i--) {
        //     var child = children[i]
        //     if (child.$options.inherit) {
        //       child._digest()
        //     }
        //   }
        // }
        
        /**
         * Setup computed properties. They are essentially
         * special getter/setters
         */
        
        function noop() {}
        exports._initComputed = function () {
          // var computed = this.$options.computed
          var computed = this._computed;
          if (computed) {
            for (var key in computed) {
              var userDef = computed[key];
              var def = {
                enumerable: true,
                configurable: true
              };
              if (typeof userDef === 'function') {
                def.get = _.bind(userDef, this);
                def.set = noop;
              } else {
                def.get = userDef.get ? _.bind(userDef.get, this) : noop;
                def.set = userDef.set ? _.bind(userDef.set, this) : noop;
              }
              Object.defineProperty(this, key, def);
            }
          }
        };
        
        /**
         * Setup instance methods. Methods must be bound to the
         * instance since they might be called by children
         * inheriting them.
         */
        
        exports._initMethods = function () {
          // var methods = this.$options.methods
          var methods = this._methods;
          if (methods) {
            for (var key in methods) {
              this[key] = _.bind(methods[key], this);
            }
          }
        };
        
        // /**
        //  * Initialize meta information like $index, $key & $value.
        //  */
    
        // exports._initMeta = function () {
        //   var metas = this.$options._meta
        //   if (metas) {
        //     for (var key in metas) {
        //       this._defineMeta(key, metas[key])
        //     }
        //   }
        // }
    
        // /**
        //  * Define a meta property, e.g $index, $key, $value
        //  * which only exists on the vm instance but not in $data.
        //  *
        //  * @param {String} key
        //  * @param {*} value
        //  */
    
        // exports._defineMeta = function (key, value) {
        //   var dep = new Dep()
        //   Object.defineProperty(this, key, {
        //     enumerable: true,
        //     configurable: true,
        //     get: function metaGetter () {
        //       if (Observer.target) {
        //         Observer.target.addDep(dep)
        //       }
        //       return value
        //     },
        //     set: function metaSetter (val) {
        //       if (val !== value) {
        //         value = val
        //         dep.notify()
        //       }
        //     }
        //   })
        // }
    
    /***/ },
    /* 87 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        // required for code in instance/observer
        module.exports = __webpack_require__(81);
    
    /***/ },
    /* 88 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var _ = __webpack_require__(87);
        var config = __webpack_require__(89);
        var Dep = __webpack_require__(90);
        var arrayMethods = __webpack_require__(91);
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        __webpack_require__(92);
        
        var uid = 0;
        
        /**
         * Type enums
         */
        
        var ARRAY = 0;
        var OBJECT = 1;
        
        /**
         * Augment an target Object or Array by intercepting
         * the prototype chain using __proto__
         *
         * @param {Object|Array} target
         * @param {Object} proto
         */
        
        function protoAugment(target, src) {
          target.__proto__ = src;
        }
        
        /**
         * Augment an target Object or Array by defining
         * hidden properties.
         *
         * @param {Object|Array} target
         * @param {Object} proto
         */
        
        function copyAugment(target, src, keys) {
          var i = keys.length;
          var key;
          while (i--) {
            key = keys[i];
            _.define(target, key, src[key]);
          }
        }
        
        /**
         * Observer class that are attached to each observed
         * object. Once attached, the observer converts target
         * object's property keys into getter/setters that
         * collect dependencies and dispatches updates.
         *
         * @param {Array|Object} value
         * @param {Number} type
         * @constructor
         */
        
        function Observer(value, type) {
          this.id = ++uid;
          this.value = value;
          this.active = true;
          this.deps = [];
          _.define(value, '__ob__', this);
          if (type === ARRAY) {
            var augment = config.proto && _.hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
            this.observeArray(value);
          } else if (type === OBJECT) {
            this.walk(value);
          }
        }
        
        Observer.target = null;
        
        var p = Observer.prototype;
        
        /**
         * Attempt to create an observer instance for a value,
         * returns the new observer if successfully observed,
         * or the existing observer if the value already has one.
         *
         * @param {*} value
         * @return {Observer|undefined}
         * @static
         */
        
        Observer.create = function (value) {
          if (value && value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
            return value.__ob__;
          } else if (_.isArray(value)) {
            return new Observer(value, ARRAY);
          } else if (_.isPlainObject(value) && !value._isVue // avoid Vue instance
          ) {
              return new Observer(value, OBJECT);
            }
        };
        
        /**
         * Walk through each property and convert them into
         * getter/setters. This method should only be called when
         * value type is Object. Properties prefixed with `$` or `_`
         * and accessor properties are ignored.
         *
         * @param {Object} obj
         */
        
        p.walk = function (obj) {
          var keys = Object.keys(obj);
          var i = keys.length;
          var key, prefix;
          while (i--) {
            key = keys[i];
            prefix = key.charCodeAt(0);
            if (prefix !== 0x24 && prefix !== 0x5F) {
              // skip $ or _
              this.convert(key, obj[key]);
            }
          }
        };
        
        /**
         * Try to carete an observer for a child value,
         * and if value is array, link dep to the array.
         *
         * @param {*} val
         * @return {Dep|undefined}
         */
        
        p.observe = function (val) {
          return Observer.create(val);
        };
        
        /**
         * Observe a list of Array items.
         *
         * @param {Array} items
         */
        
        p.observeArray = function (items) {
          var i = items.length;
          while (i--) {
            this.observe(items[i]);
          }
        };
        
        /**
         * Convert a property into getter/setter so we can emit
         * the events when the property is accessed/changed.
         *
         * @param {String} key
         * @param {*} val
         */
        
        p.convert = function (key, val) {
          var ob = this;
          var childOb = ob.observe(val);
          var dep = new Dep();
          if (childOb) {
            childOb.deps.push(dep);
          }
          Object.defineProperty(ob.value, key, {
            enumerable: true,
            configurable: true,
            get: function get() {
              // Observer.target is a watcher whose getter is
              // currently being evaluated.
              if (ob.active && Observer.target) {
                Observer.target.addDep(dep);
              }
              return val;
            },
            set: function set(newVal) {
              if (newVal === val) return;
              // remove dep from old value
              var oldChildOb = val && val.__ob__;
              if (oldChildOb) {
                oldChildOb.deps.$remove(dep);
              }
              val = newVal;
              // add dep to new value
              var newChildOb = ob.observe(newVal);
              if (newChildOb) {
                newChildOb.deps.push(dep);
              }
              dep.notify();
            }
          });
        };
        
        /**
         * Notify change on all self deps on an observer.
         * This is called when a mutable value mutates. e.g.
         * when an Array's mutating methods are called, or an
         * Object's $add/$delete are called.
         */
        
        p.notify = function () {
          var deps = this.deps;
          for (var i = 0, l = deps.length; i < l; i++) {
            deps[i].notify();
          }
        };
        
        /**
         * Add an owner vm, so that when $add/$delete mutations
         * happen we can notify owner vms to proxy the keys and
         * digest the watchers. This is only called when the object
         * is observed as an instance's root $data.
         *
         * @param {Vue} vm
         */
        
        p.addVm = function (vm) {
          (this.vms = this.vms || []).push(vm);
        };
        
        /**
         * Remove an owner vm. This is called when the object is
         * swapped out as an instance's $data object.
         *
         * @param {Vue} vm
         */
        
        p.removeVm = function (vm) {
          this.vms.$remove(vm);
        };
        
        module.exports = Observer;
    
    /***/ },
    /* 89 */
    /***/ function(module, exports) {
    
        "use strict";
        
        module.exports = { proto: true };
    
    /***/ },
    /* 90 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var _ = __webpack_require__(87);
        
        /**
         * A dep is an observable that can have multiple
         * directives subscribing to it.
         *
         * @constructor
         */
        
        function Dep() {
          this.subs = [];
        }
        
        var p = Dep.prototype;
        
        /**
         * Add a directive subscriber.
         *
         * @param {Directive} sub
         */
        
        p.addSub = function (sub) {
          this.subs.push(sub);
        };
        
        /**
         * Remove a directive subscriber.
         *
         * @param {Directive} sub
         */
        
        p.removeSub = function (sub) {
          this.subs.$remove(sub);
        };
        
        /**
         * Notify all subscribers of a new value.
         */
        
        p.notify = function () {
          // stablize the subscriber list first
          var subs = _.toArray(this.subs);
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };
        
        module.exports = Dep;
    
    /***/ },
    /* 91 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var _ = __webpack_require__(87);
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto)
        
        /**
         * Intercept mutating methods and emit events
         */
        
        ;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
          // cache original method
          var original = arrayProto[method];
          _.define(arrayMethods, method, function mutator() {
            // avoid leaking arguments:
            // http://jsperf.com/closure-with-arguments
            var i = arguments.length;
            var args = new Array(i);
            while (i--) {
              args[i] = arguments[i];
            }
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case 'push':
                inserted = args;
                break;
              case 'unshift':
                inserted = args;
                break;
              case 'splice':
                inserted = args.slice(2);
                break;
            }
            if (inserted) ob.observeArray(inserted);
            // notify change
            ob.notify();
            return result;
          });
        });
        
        /**
         * Swap the element at the given index with a new value
         * and emits corresponding event.
         *
         * @param {Number} index
         * @param {*} val
         * @return {*} - replaced element
         */
        
        _.define(arrayProto, '$set', function $set(index, val) {
          if (index >= this.length) {
            this.length = index + 1;
          }
          return this.splice(index, 1, val)[0];
        });
        
        /**
         * Convenience method to remove the element at given index.
         *
         * @param {Number} index
         * @param {*} val
         */
        
        _.define(arrayProto, '$remove', function $remove(index) {
          /* istanbul ignore if */
          if (!this.length) return;
          if (typeof index !== 'number') {
            index = _.indexOf(this, index);
          }
          if (index > -1) {
            this.splice(index, 1);
          }
        });
        
        module.exports = arrayMethods;
    
    /***/ },
    /* 92 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        var _ = __webpack_require__(87);
        var objProto = Object.prototype;
        
        /**
         * Add a new property to an observed object
         * and emits corresponding event
         *
         * @param {String} key
         * @param {*} val
         * @public
         */
        
        _.define(objProto, '$add', function $add(key, val) {
          if (this.hasOwnProperty(key)) return;
          var ob = this.__ob__;
          if (!ob || _.isReserved(key)) {
            this[key] = val;
            return;
          }
          ob.convert(key, val);
          ob.notify();
          if (ob.vms) {
            var i = ob.vms.length;
            while (i--) {
              var vm = ob.vms[i];
              vm._proxy(key);
              // vm._digest() // todo
            }
          }
        });
        
        /**
         * Set a property on an observed object, calling add to
         * ensure the property is observed.
         *
         * @param {String} key
         * @param {*} val
         * @public
         */
        
        _.define(objProto, '$set', function $set(key, val) {
          this.$add(key, val);
          this[key] = val;
        });
        
        /**
         * Deletes a property from an observed object
         * and emits corresponding event
         *
         * @param {String} key
         * @public
         */
        
        _.define(objProto, '$delete', function $delete(key) {
          if (!this.hasOwnProperty(key)) return;
          delete this[key];
          var ob = this.__ob__;
          if (!ob || _.isReserved(key)) {
            return;
          }
          ob.notify();
          if (ob.vms) {
            var i = ob.vms.length;
            while (i--) {
              var vm = ob.vms[i];
              vm._unproxy(key);
              // vm._digest() // todo
            }
          }
        });
    
    /***/ },
    /* 93 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
        
        exports._build = _build;
        exports._compile = _compile;
        exports._targetIsFragment = _targetIsFragment;
        exports._targetIsContent = _targetIsContent;
        exports._targetNeedCheckRepeat = _targetNeedCheckRepeat;
        exports._targetNeedCheckShown = _targetNeedCheckShown;
        exports._targetNeedCheckType = _targetNeedCheckType;
        exports._targetIsComposed = _targetIsComposed;
        exports._compileFragment = _compileFragment;
        exports._compileRepeat = _compileRepeat;
        exports._compileShown = _compileShown;
        exports._compileType = _compileType;
        exports._compileCustomComponent = _compileCustomComponent;
        exports._compileNativeComponent = _compileNativeComponent;
        exports._compileChildren = _compileChildren;
        exports._bindRepeat = _bindRepeat;
        exports._bindShown = _bindShown;
        exports._watchBlock = _watchBlock;
        exports._mergeContext = _mergeContext;
        /**
         * @fileOverview
         * ViewModel template parser & data-binding process
         *
         * required:
         * index.js: Vm
         * dom-helper.js: _createElement, _createBlock
         * dom-helper.js: _attachTarget, _moveTarget, _removeTarget
         * directive.js: _bindElement, _bindSubVm, _watch
         * events.js: $on
         */
        
        /**
         * build(externalDirs)
         *   createVm()
         *   merge(externalDirs, dirs)
         *   compile(template, parentNode)
         *     if (type is content) create contentNode
         *     else if (dirs have v-for) foreach -> create context
         *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
         *     else if (dirs have v-if) assert
         *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
         *     else if (type is native)
         *       set(dirs): update(id/attr/style/class) onchange
         *       append(template, parentNode)
         *       foreach childNodes -> compile(childNode, template)
         *     else if (type is custom)
         *       addChildVm(vm, parentVm)
         *       build(externalDirs)
         *       foreach childNodes -> compile(childNode, template)
         */
        function _build() {
          var opt = this._options || {};
          var template = opt.template || {};
        
          if (opt.replace) {
            if (template.children && template.children.length === 1) {
              this._compile(template.children[0], this._parentEl);
            } else {
              this._compile(template.children, this._parentEl);
            }
          } else {
            this._compile(template, this._parentEl);
          }
        
          this.$emit('hook:ready');
          this._ready = true;
        }
        
        /**
         * Generate elements by child or children and append to parent elements.
         * Root element info would be merged if has. The first argument may be an array
         * if the root element with options.replace has not only one child.
         *
         * @param {object|array} target
         * @param {object}       dest
         * @param {object}       meta
         */
        function _compile(target, dest, meta) {
          var context = this;
          if (context._targetIsFragment(target)) {
            context._compileFragment(target, dest, meta);
            return;
          }
          meta = meta || {};
          if (context._targetIsContent(target)) {
            context._content = context._createBlock(dest);
            return;
          }
        
          if (context._targetNeedCheckRepeat(target, meta)) {
            context._compileRepeat(target, dest);
            return;
          }
          if (context._targetNeedCheckShown(target, meta)) {
            context._compileShown(target, dest, meta);
            return;
          }
          var typeGetter = meta.type || target.type;
          if (context._targetNeedCheckType(typeGetter, meta)) {
            context._compileType(target, dest, typeGetter, meta);
            return;
          }
          var type = typeGetter;
          if (context._targetIsComposed(target, type)) {
            context._compileCustomComponent(target, dest, type, meta);
            return;
          }
          context._compileNativeComponent(target, dest, type);
        }
        
        /**
         * Check if target is a fragment (an array).
         *
         * @param  {object}  target
         * @return {boolean}
         */
        function _targetIsFragment(target) {
          return Array.isArray(target);
        }
        
        /**
         * Check if target type is content/slot.
         *
         * @param  {object}  target
         * @return {boolean}
         */
        function _targetIsContent(target) {
          return target.type === 'content' || target.type === 'slot';
        }
        
        /**
         * Check if target need to compile by a list.
         *
         * @param  {object}  target
         * @param  {object}  meta
         * @return {boolean}
         */
        function _targetNeedCheckRepeat(target, meta) {
          return !meta.hasOwnProperty('repeat') && target.repeat;
        }
        
        /**
         * Check if target need to compile by a boolean value.
         *
         * @param  {object}  target
         * @param  {object}  meta
         * @return {boolean}
         */
        function _targetNeedCheckShown(target, meta) {
          return !meta.hasOwnProperty('shown') && target.shown;
        }
        
        /**
         * Check if target need to compile by a dynamic type.
         *
         * @param  {string|function} typeGetter
         * @param  {object}          meta
         * @return {boolean}
         */
        function _targetNeedCheckType(typeGetter, meta) {
          return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
        }
        
        /**
         * Check if this kind of component is composed.
         *
         * @param  {string}  type
         * @return {boolean}
         */
        function _targetIsComposed(target, type) {
          if (this._app && this._app.customComponentMap && type) {
            return !!this._app.customComponentMap[type];
          }
          return !!target.component;
        }
        
        /**
         * Compile a list of targets.
         *
         * @param {object} target
         * @param {object} dest
         * @param {object} meta
         */
        function _compileFragment(target, dest, meta) {
          var _this = this;
        
          var fragBlock = this._createBlock(dest);
          target.forEach(function (child) {
            _this._compile(child, fragBlock, meta);
          });
        }
        
        /**
         * Compile a target with repeat directive.
         *
         * @param {object} target
         * @param {object} dest
         */
        function _compileRepeat(target, dest) {
          var repeat = target.repeat;
          var oldStyle = typeof repeat === 'function';
          var getter = repeat.getter || repeat.expression || repeat;
          if (typeof getter !== 'function') {
            getter = function getter() {
              return [];
            };
          }
          var key = repeat.key || '$index';
          var value = repeat.value || '$value';
          var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy || key;
        
          var fragBlock = this._createBlock(dest);
          fragBlock.children = [];
          fragBlock.data = [];
          fragBlock.vms = [];
        
          this._bindRepeat(target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
        }
        
        /**
         * Compile a target with if directive.
         *
         * @param {object} target
         * @param {object} dest
         * @param {object} meta
         */
        function _compileShown(target, dest, meta) {
          var newMeta = { shown: true };
          var fragBlock = this._createBlock(dest);
        
          if (dest.element && dest.children) {
            dest.children.push(fragBlock);
          }
        
          if (meta.repeat) {
            newMeta.repeat = meta.repeat;
          }
        
          this._bindShown(target, fragBlock, newMeta);
        }
        
        /**
         * Compile a target with dynamic component type.
         *
         * @param {object}   target
         * @param {object}   dest
         * @param {function} typeGetter
         */
        function _compileType(target, dest, typeGetter, meta) {
          var _this2 = this;
        
          var type = typeGetter.call(this);
          var newMeta = Object.assign({ type: type }, meta);
          var fragBlock = this._createBlock(dest);
        
          if (dest.element && dest.children) {
            dest.children.push(fragBlock);
          }
        
          this._watch(typeGetter, function (value) {
            var newMeta = Object.assign({ type: value }, meta);
            _this2._removeBlock(fragBlock, true);
            _this2._compile(target, fragBlock, newMeta);
          });
        
          this._compile(target, fragBlock, newMeta);
        }
        
        /**
         * Compile a composed component.
         *
         * @param {object} target
         * @param {object} dest
         * @param {string} type
         */
        function _compileCustomComponent(target, dest, type, meta) {
          var Vm = this.constructor;
          var context = this;
          var subVm = new Vm(type, context, dest, undefined, {
            'hook:init': function hookInit() {
              context._setId(target.id, null, this);
            },
            'hook:created': function hookCreated() {
              context._bindSubVm(this, target, meta.repeat);
            },
            'hook:ready': function hookReady() {
              if (this._content) {
                context._compileChildren(target, this._content);
              }
            }
          });
          this._bindSubVmAfterInitialized(subVm, target);
        }
        
        /**
         * Generate element from template and attach to the dest if needed.
         * The time to attach depends on whether the mode status is node or tree.
         *
         * @param {object} template
         * @param {object} dest
         * @param {string} type
         */
        function _compileNativeComponent(template, dest, type) {
        
          this._applyNaitveComponentOptions(template);
        
          var element = void 0;
          if (dest.ref === '_documentElement') {
            // if its parent is documentElement then it's a body
            element = this._createBody(type);
          } else {
            element = this._createElement(type);
          }
          // TODO it was a root element when not in a fragment
          if (!this._rootEl) {
            this._rootEl = element;
          }
        
          this._bindElement(element, template);
        
          if (template.attr && template.attr.append) {
            // backward, append prop in attr
            template.append = template.attr.append;
          }
        
          if (template.append) {
            // give the append attribute for ios adaptation
            element.attr = element.attr || {};
            element.attr.append = template.append;
          }
        
          var treeMode = template.append === 'tree';
          if (!treeMode) {
            this._attachTarget(element, dest);
          }
          this._compileChildren(template, element);
          if (treeMode) {
            this._attachTarget(element, dest);
          }
        }
        
        /**
         * Set all children to a certain parent element.
         *
         * @param {object} template
         * @param {object} dest
         */
        function _compileChildren(template, dest) {
          var _this3 = this;
        
          var children = template.children;
          if (children && children.length) {
            children.forEach(function (child) {
              _this3._compile(child, dest);
            });
          }
        }
        
        /**
         * Watch the list update and refresh the changes.
         *
         * @param {object} target
         * @param {object} fragBlock {vms, data, children}
         * @param {object} info      {getter, key, value, trackBy, oldStyle}
         */
        function _bindRepeat(target, fragBlock, info) {
          var _this4 = this;
        
          var vms = fragBlock.vms;
          var children = fragBlock.children;
          var getter = info.getter;
          var trackBy = info.trackBy;
          var oldStyle = info.oldStyle;
        
          var keyName = info.key;
          var valueName = info.value;
        
          function compileItem(item, index, context) {
            var mergedData = void 0;
            if (oldStyle) {
              mergedData = item;
              if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
                mergedData[keyName] = index;
                if (!mergedData.hasOwnProperty('INDEX')) {
                  Object.defineProperty(mergedData, 'INDEX', {
                    value: function value() {
                      nativeLog('[WARNING] "INDEX" in repeat is deprecated,' + ' please use "$index" instead');
                    }
                  });
                }
              }
            } else {
              mergedData = {};
              mergedData[keyName] = index;
              mergedData[valueName] = item;
            }
            context = context._mergeContext(mergedData);
            // console.log(context)
            vms.push(context);
            context._compile(target, fragBlock, { repeat: item });
          }
        
          function diffItem(vm, item) {
            var oldItem = vm._data;
            var oldKeys = [];
            for (var key in oldItem) {
              if (!item.hasOwnProperty(key)) {
                vm[key] = undefined;
              }
            }
            for (var _key in item) {
              vm[_key] = item[_key];
            }
          }
        
          function setItemValue(item, index, vm) {
            var mergedData = void 0;
            if (oldStyle) {
              if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
                diffItem(vm, item);
                vm.INDEX = index;
              }
            } else {
              vm[keyName] = index;
              vm[valueName] = item;
            }
          }
        
          var list = this._watchBlock(fragBlock, getter, 'repeat', function (data) {
            if (!fragBlock) {
              return;
            }
        
            var oldChildren = children.slice();
            var oldVms = vms.slice();
            var oldData = fragBlock.data.slice();
            // 1. collect all new refs track by
            var trackMap = {};
            var reusedMap = {};
            data.forEach(function (item, index) {
              var key = trackBy ? item[trackBy] : index;
              /* istanbul ignore if */
              if (key == null || key === '') {
                return;
              }
              trackMap[key] = item;
            });
        
            // 2. remove unused element foreach old item
            var reusedList = [];
            oldData.forEach(function (item, index) {
              var key = trackBy ? item[trackBy] : index;
              if (trackMap.hasOwnProperty(key)) {
                reusedMap[key] = {
                  item: item, index: index, key: key,
                  target: oldChildren[index],
                  vm: oldVms[index]
                };
                reusedList.push(item);
              } else {
                _this4._removeTarget(oldChildren[index]);
              }
            });
        
            // 3. create new element foreach new item
            children.length = 0;
            vms.length = 0;
            fragBlock.data = data.slice();
            fragBlock.updateMark = fragBlock.start;
        
            data.forEach(function (item, index) {
              var key = trackBy ? item[trackBy] : index;
              var reused = reusedMap[key];
              if (reused) {
                if (reused.item === reusedList[0]) {
                  reusedList.shift();
                } else {
                  reusedList.$remove(reused.item);
                  _this4._moveTarget(reused.target, fragBlock.updateMark, true);
                }
                children.push(reused.target);
                vms.push(reused.vm);
                reused.vm[keyName] = index;
                fragBlock.updateMark = reused.target;
              } else {
                compileItem(item, index, _this4);
              }
            });
        
            delete fragBlock.updateMark;
          });
        
          fragBlock.data = list.slice(0);
          list.forEach(function (item, index) {
            compileItem(item, index, _this4);
          });
        }
        
        /**
         * Watch the display update and add/remove the element.
         *
         * @param  {object} target
         * @param  {object} fragBlock
         * @param  {object} context
         */
        function _bindShown(target, fragBlock, meta) {
          var _this5 = this;
        
          var display = this._watchBlock(fragBlock, target.shown, 'shown', function (display) {
            if (!fragBlock || !!fragBlock.display === !!display) {
              return;
            }
            fragBlock.display = !!display;
            if (display) {
              _this5._compile(target, fragBlock, meta);
            } else {
              _this5._removeBlock(fragBlock, true);
            }
          });
        
          fragBlock.display = !!display;
          if (display) {
            this._compile(target, fragBlock, meta);
          }
        }
        
        /**
         * Watch calc value changes and append certain type action to differ.
         * It is used for if or repeat data-binding generator.
         *
         * @param  {object}   fragBlock
         * @param  {function} calc
         * @param  {string}   type
         * @param  {function} handler
         * @return {any}      init value of calc
         */
        function _watchBlock(fragBlock, calc, type, handler) {
          var differ = this && this._app && this._app.differ;
          var config = {};
          var depth = (fragBlock.element.depth || 0) + 1;
        
          return this._watch(calc, function (value) {
            config.latestValue = value;
            if (differ && !config.recorded) {
              differ.append(type, depth, fragBlock.blockId, function () {
                var latestValue = config.latestValue;
                handler(latestValue);
                config.recorded = false;
                config.latestValue = undefined;
              });
            }
            config.recorded = true;
          });
        }
        
        /**
         * Clone a context and merge certain data.
         *
         * @param  {object} mergedData
         * @return {object}
         */
        function _mergeContext(mergedData) {
          var context = Object.create(this);
          context._data = mergedData;
          context._initData();
          context._realParent = this;
          return context;
        }
    
    /***/ },
    /* 94 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                           * @fileOverview
                                                                                                                                                                                                                                                           * Directive Parser
                                                                                                                                                                                                                                                           */
        
        exports._applyNaitveComponentOptions = _applyNaitveComponentOptions;
        exports._bindElement = _bindElement;
        exports._bindSubVm = _bindSubVm;
        exports._bindSubVmAfterInitialized = _bindSubVmAfterInitialized;
        exports._setId = _setId;
        exports._setAttr = _setAttr;
        exports._setClass = _setClass;
        exports._setStyle = _setStyle;
        exports._setEvent = _setEvent;
        exports._bindEvents = _bindEvents;
        exports._bindDir = _bindDir;
        exports._bindKey = _bindKey;
        exports._watch = _watch;
        
        var _util = __webpack_require__(81);
        
        var _watcher = __webpack_require__(95);
        
        var _watcher2 = _interopRequireDefault(_watcher);
        
        var _config = __webpack_require__(79);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        var SETTERS = {
          attr: 'setAttr',
          style: 'setStyle',
          event: 'addEvent'
        };
        
        /**
         * apply the native component's options(specified by template.type)
         * to the template
         */
        function _applyNaitveComponentOptions(template) {
          var type = template.type;
        
          var options = _config.nativeComponentMap[type];
        
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            (0, _util.extend)(template, options);
          }
        }
        
        /**
         * bind all id, attr, classnames, style, events to an element
         */
        function _bindElement(el, template) {
          this._setId(template.id, el, this);
          this._setAttr(el, template.attr);
          this._setClass(el, template.classList);
          this._setStyle(el, template.style);
          this._bindEvents(el, template.events);
        }
        
        /**
         * bind all props to sub vm and bind all style, events to the root element
         * of the sub vm if it doesn't have a replaced multi-node fragment
         */
        function _bindSubVm(subVm, template, repeatItem) {
          subVm = subVm || {};
          template = template || {};
        
          var options = subVm._options || {};
        
          // bind props
          var props = options.props;
        
          if (Array.isArray(props)) {
            props = props.reduce(function (result, value) {
              result[value] = true;
              return result;
            }, {});
          }
        
          mergeProps(repeatItem, props, this, subVm);
          mergeProps(template.attr, props, this, subVm);
        }
        
        function _bindSubVmAfterInitialized(subVm, template) {
          mergeClassStyle(template.classList, this, subVm);
          mergeStyle(template.style, this, subVm);
          mergeEvent(template.events, this, subVm);
        }
        
        function mergeProps(target, props, vm, subVm) {
          if (!target) {
            return;
          }
        
          var _loop = function _loop(key) {
            if (!props || props[key]) {
              var value = target[key];
              if (typeof value === 'function') {
                var returnValue = vm._watch(value, function (v) {
                  subVm[key] = v;
                });
                subVm[key] = returnValue;
              } else {
                subVm[key] = value;
              }
            }
          };
        
          for (var key in target) {
            _loop(key);
          }
        }
        
        function mergeStyle(target, vm, subVm) {
          var _loop2 = function _loop2(key) {
            var value = target[key];
            if (typeof value === 'function') {
              var returnValue = vm._watch(value, function (v) {
                if (subVm._rootEl) {
                  subVm._rootEl.setStyle(key, v);
                }
              });
              subVm._rootEl.setStyle(key, returnValue);
            } else {
              if (subVm._rootEl) {
                subVm._rootEl.setStyle(key, value);
              }
            }
          };
        
          for (var key in target) {
            _loop2(key);
          }
        }
        
        function mergeClassStyle(target, vm, subVm) {
          var css = vm._options && vm._options.style || {};
        
          if (!subVm._rootEl) {
            return;
          }
        
          if (typeof target === 'function') {
            var _value = vm._watch(target, function (v) {
              setClassStyle(subVm._rootEl, css, v);
            });
            setClassStyle(subVm._rootEl, css, _value);
          } else if (target) {
            setClassStyle(subVm._rootEl, css, target);
          }
        }
        
        function mergeEvent(target, vm, subVm) {
          if (target && subVm._rootEl) {
            for (var type in target) {
              var handler = vm[target[type]];
              if (handler) {
                subVm._rootEl.addEvent(type, (0, _util.bind)(handler, vm));
              }
            }
          }
        }
        
        /**
         * bind id to an element
         * each id is unique in a whole vm
         */
        function _setId(id, el, vm) {
          var _this = this;
        
          var map = Object.create(null);
        
          Object.defineProperties(map, {
            vm: {
              value: vm,
              writable: false,
              configurable: false
            },
            el: {
              get: function get() {
                return el || vm._rootEl;
              },
              configurable: false
            }
          });
        
          if (typeof id === 'function') {
            var handler = id;
            id = handler.call(this);
            if (id) {
              this._ids[id] = map;
            }
            this._watch(handler, function (newId) {
              if (newId) {
                _this._ids[newId] = map;
              }
            });
          } else if (id && typeof id === 'string') {
            this._ids[id] = map;
          }
        }
        
        /**
         * bind attr to an element
         */
        function _setAttr(el, attr) {
          this._bindDir(el, 'attr', attr);
        }
        
        function setClassStyle(el, css, classList) {
          var classStyle = {};
          var length = classList.length;
        
          for (var i = 0; i < length; i++) {
            var style = css[classList[i]];
            if (style) {
              for (var key in style) {
                classStyle[key] = style[key];
              }
            }
          }
          el.setClassStyle(classStyle);
        }
        
        /**
         * bind classnames to an element
         */
        function _setClass(el, classList) {
        
          if (typeof classList !== 'function' && !Array.isArray(classList)) {
            return;
          }
          if (Array.isArray(classList) && !classList.length) {
            el.setClassStyle({});
            return;
          }
        
          var style = this._options && this._options.style || {};
          if (typeof classList === 'function') {
            var _value2 = this._watch(classList, function (v) {
              setClassStyle(el, style, v);
            });
            setClassStyle(el, style, _value2);
          } else {
            setClassStyle(el, style, classList);
          }
        }
        
        /**
         * bind style to an element
         */
        function _setStyle(el, style) {
          this._bindDir(el, 'style', style);
        }
        
        /**
         * add an event type and handler to an element and generate a dom update
         */
        function _setEvent(el, type, handler) {
          el.addEvent(type, (0, _util.bind)(handler, this));
        }
        
        /**
         * add all events of an element
         */
        function _bindEvents(el, events) {
          if (!events) {
            return;
          }
          var keys = Object.keys(events);
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            var handler = events[key];
            if (typeof handler === 'string') {
              handler = this[handler];
            }
            this._setEvent(el, key, handler);
          }
        }
        
        /**
         * set a series of members as a kind of an element
         * for example: style, attr, ...
         * if the value is a function then bind the data changes
         */
        function _bindDir(el, name, data) {
          if (!data) {
            return;
          }
          var keys = Object.keys(data);
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            var _value3 = data[key];
            if (typeof _value3 === 'function') {
              var update = _value3;
              this._bindKey(el, name, key, update);
            } else {
              el[SETTERS[name]](key, _value3);
            }
          }
        }
        
        /**
         * bind data changes to a certain key to a name series in an element
         */
        function _bindKey(el, name, key, calc) {
          var _this2 = this;
        
          var methodName = SETTERS[name];
          var obj = el[name];
          // watch the calc, and returns a value by calc.call()
          var value = this._watch(calc, function (value) {
            function handler() {
              el[methodName](key, value);
            }
            var differ = _this2 && _this2._app && _this2._app.differ;
            if (differ) {
              differ.append('element', el.depth, el.ref, handler);
            } else {
              handler();
            }
          });
        
          el[methodName](key, value);
        }
        
        /**
         * watch a calc function and callback if the calc value changes
         */
        function _watch(calc, callback) {
          var watcher = new _watcher2.default(this, calc, function (value, oldValue) {
            /* istanbul ignore if */
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
              return;
            }
            callback(value);
          });
        
          return watcher.value;
        }
    
    /***/ },
    /* 95 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        /**
         * The MIT License (MIT)
         *
         * Copyright (c) 2013-2015 Yuxi Evan You
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
        
        var _ = __webpack_require__(87);
        // var config = require('./config')
        var Observer = __webpack_require__(88);
        // var expParser = require('./parsers/expression')
        // var batcher = require('./batcher')
        var uid = 0;
        
        /**
         * A watcher parses an expression, collects dependencies,
         * and fires callback when the expression value changes.
         * This is used for both the $watch() api and directives.
         *
         * @param {Vue} vm
         * @param {String} expression
         * @param {Function} cb
         * @param {Object} options
         *                 - {Array} filters
         *                 - {Boolean} twoWay
         *                 - {Boolean} deep
         *                 - {Boolean} user
         *                 - {Function} [preProcess]
         * @constructor
         */
        
        // function Watcher (vm, expression, cb, options) {
        function Watcher(vm, update, cb) {
          this.vm = vm;
          vm._watchers.push(this);
          // this.expression = expression
          this.cb = cb;
          this.id = ++uid; // uid for batching
          this.active = true;
          // options = options || {}
          // this.deep = !!options.deep
          // this.user = !!options.user
          // this.twoWay = !!options.twoWay
          // this.filters = options.filters
          // this.preProcess = options.preProcess
          this.deps = [];
          this.newDeps = [];
          // parse expression for getter/setter
          // var res = expParser.parse(expression, options.twoWay)
          // this.getter = res.get
          // this.setter = res.set
          this.getter = update;
          this.value = this.get();
        }
        
        var p = Watcher.prototype;
        
        /**
         * Add a dependency to this directive.
         *
         * @param {Dep} dep
         */
        
        p.addDep = function (dep) {
          var newDeps = this.newDeps;
          var old = this.deps;
          if (_.indexOf(newDeps, dep) < 0) {
            newDeps.push(dep);
            var i = _.indexOf(old, dep);
            if (i < 0) {
              dep.addSub(this);
            } else {
              old[i] = null;
            }
          }
        };
        
        /**
         * Evaluate the getter, and re-collect dependencies.
         */
        
        p.get = function () {
          this.beforeGet();
          var vm = this.vm;
          var value;
          try {
            value = this.getter.call(vm, vm);
          } catch (e) {
            // if (config.warnExpressionErrors) {
            //   _.warn(
            //     'Error when evaluating expression "' +
            //     this.expression + '":\n   ' + e
            //   )
            // }
            _.warn('Error when update"');
          }
          // "touch" every property so they are all tracked as
          // dependencies for deep watching
          if (this.deep) {
            traverse(value);
          }
          if (this.preProcess) {
            value = this.preProcess(value);
          }
          if (this.filters) {
            value = vm._applyFilters(value, null, this.filters, false);
          }
          this.afterGet();
          return value;
        };
        
        // /**
        //  * Set the corresponding value with the setter.
        //  *
        //  * @param {*} value
        //  */
        
        // p.set = function (value) {
        //   var vm = this.vm
        //   if (this.filters) {
        //     value = vm._applyFilters(
        //       value, this.value, this.filters, true)
        //   }
        //   try {
        //     this.setter.call(vm, vm, value)
        //   } catch (e) {
        //     // if (config.warnExpressionErrors) {
        //       _.warn(
        //         'Error when evaluating setter "' +
        //         this.expression + '":\n   ' + e
        //       )
        //     // }
        //   }
        // }
        
        /**
         * Prepare for dependency collection.
         */
        
        p.beforeGet = function () {
          Observer.target = this;
        };
        
        /**
         * Clean up for dependency collection.
         */
        
        p.afterGet = function () {
          Observer.target = null;
          var i = this.deps.length;
          while (i--) {
            var dep = this.deps[i];
            if (dep) {
              dep.removeSub(this);
            }
          }
          this.deps = this.newDeps;
          this.newDeps = [];
        };
        
        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */
        
        // p.update = function () {
        //   if (!config.async || config.debug) {
        //     this.run()
        //   } else {
        //     batcher.push(this)
        //   }
        // }
        
        // /**
        //  * Batcher job interface.
        //  * Will be called by the batcher.
        //  */
        
        // p.run = function () {
        p.update = function () {
          if (this.active) {
            var value = this.get();
            if (value !== this.value || Array.isArray(value) || this.deep) {
              var oldValue = this.value;
              this.value = value;
              this.cb(value, oldValue);
            }
          }
        };
        
        /**
         * Remove self from all dependencies' subcriber list.
         */
        
        p.teardown = function () {
          if (this.active) {
            // remove self from vm's watcher list
            // we can skip this if the vm if being destroyed
            // which can improve teardown performance.
            if (!this.vm._isBeingDestroyed) {
              this.vm._watchers.$remove(this);
            }
            var i = this.deps.length;
            while (i--) {
              this.deps[i].removeSub(this);
            }
            this.active = false;
            this.vm = this.cb = this.value = null;
          }
        };
        
        /**
         * Recrusively traverse an object to evoke all converted
         * getters, so that every nested property inside the object
         * is collected as a "deep" dependency.
         *
         * @param {Object} obj
         */
        
        function traverse(obj) {
          var key, val, i;
          for (key in obj) {
            val = obj[key];
            if (_.isArray(val)) {
              i = val.length;
              while (i--) {
                traverse(val[i]);
              }
            } else if (_.isObject(val)) {
              traverse(val);
            }
          }
        }
        
        module.exports = Watcher;
    
    /***/ },
    /* 96 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports._createBody = _createBody;
        exports._createElement = _createElement;
        exports._createBlock = _createBlock;
        exports._createBlockStart = _createBlockStart;
        exports._createBlockEnd = _createBlockEnd;
        exports._attachTarget = _attachTarget;
        exports._moveTarget = _moveTarget;
        exports._moveElement = _moveElement;
        exports._moveBlock = _moveBlock;
        exports._removeTarget = _removeTarget;
        exports._removeElement = _removeElement;
        exports._removeBlock = _removeBlock;
        /**
         * @fileOverview Document & Element Helpers.
         *
         * required:
         * Document#: createElement, createComment, getRef
         * Element#: appendChild, insertBefore, removeChild, nextSibling
         */
        
        /**
         * Create a body by type
         * Using this._app.doc
         *
         * @param  {string} type
         */
        function _createBody(type) {
          var doc = this._app.doc;
          return doc.createBody(type);
        }
        
        /**
         * Create an element by type
         * Using this._app.doc
         *
         * @param  {string} type
         */
        function _createElement(type) {
          var doc = this._app.doc;
          return doc.createElement(type);
        }
        
        /**
         * Create and return a frag block for an element.
         * The frag block has a starter, ender and the element itself.
         *
         * @param  {object} element
         */
        function _createBlock(element) {
          var start = this._createBlockStart();
          var end = this._createBlockEnd();
          var blockId = lastestBlockId++;
          if (element.element) {
            element.element.insertBefore(start, element.end);
            element.element.insertBefore(end, element.end);
            element = element.element;
          } else {
            element.appendChild(start);
            element.appendChild(end);
          }
          return { start: start, end: end, element: element, blockId: blockId };
        }
        
        var lastestBlockId = 1;
        
        /**
         * Create and return a block starter.
         * Using this._app.doc
         */
        function _createBlockStart() {
          var doc = this._app.doc;
          var anchor = doc.createComment('start');
          return anchor;
        }
        
        /**
         * Create and return a block ender.
         * Using this._app.doc
         */
        function _createBlockEnd() {
          var doc = this._app.doc;
          var anchor = doc.createComment('end');
          return anchor;
        }
        
        /**
         * Attach target to a certain dest using appendChild by default.
         * If the dest is a frag block then insert before the ender.
         * If the target is a frag block then attach the starter and ender in order.
         *
         * @param  {object} target
         * @param  {object} dest
         */
        function _attachTarget(target, dest) {
        
          if (dest.element) {
            var before = dest.end;
            var after = dest.updateMark;
            // push new target for watch list update later
            if (dest.children) {
              dest.children.push(target);
            }
            // for check repeat case
            if (after) {
              this._moveTarget(target, after);
              dest.updateMark = target.element ? target.end : target;
            } else if (target.element) {
              dest.element.insertBefore(target.start, before);
              dest.element.insertBefore(target.end, before);
            } else {
              dest.element.insertBefore(target, before);
            }
          } else {
            if (target.element) {
              dest.appendChild(target.start);
              dest.appendChild(target.end);
            } else {
              dest.appendChild(target);
            }
          }
        }
        
        /**
         * Move target before a certain element. The target maybe block or element.
         *
         * @param  {object} target
         * @param  {object} before
         */
        function _moveTarget(target, after) {
          if (target.element) {
            this._moveBlock(target, after);
          } else {
            this._moveElement(target, after);
          }
        }
        
        /**
         * Move element before a certain element.
         *
         * @param  {object} element
         * @param  {object} before
         */
        function _moveElement(element, after) {
          var doc = this._app.doc;
          var parent = doc.getRef(after.parentRef);
        
          if (parent) {
            parent.insertAfter(element, after);
          }
        }
        
        /**
         * Move all elements of the block before a certain element.
         *
         * @param  {object} fragBlock
         * @param  {object} before
         */
        function _moveBlock(fragBlock, after) {
          var doc = this._app.doc;
          var parent = doc.getRef(after.parentRef);
        
          if (parent) {
            (function () {
              var el = fragBlock.start;
              var group = [el];
        
              while (el && el !== fragBlock.end) {
                el = el.next();
                group.push(el);
              }
        
              var temp = after;
              group.forEach(function (el) {
                parent.insertAfter(el, temp);
                temp = el;
              });
            })();
          }
        }
        
        /**
         * Remove target from DOM tree.
         * If the target is a frag block then call _removeBlock
         *
         * @param  {object} target
         */
        function _removeTarget(target) {
        
          if (target.element) {
            this._removeBlock(target);
          } else {
            this._removeElement(target);
          }
        }
        
        /**
         * Remove a certain element.
         * Using this._app.doc
         *
         * @param  {object} target
         */
        function _removeElement(target) {
          var doc = this._app.doc;
          var parent = doc.getRef(target.parentRef);
        
          if (parent) {
            parent.removeChild(target);
          }
        }
        
        /**
         * Remove a frag block.
         * The second param decides whether the block self should be removed too.
         *
         * @param  {object}  fragBlock
         * @param  {Boolean} preserveBlock=false
         */
        function _removeBlock(fragBlock) {
          var _this = this;
        
          var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        
          var result = [];
          var el = fragBlock.start.next();
        
          while (el && el !== fragBlock.end) {
            result.push(el);
            el = el.next();
          }
        
          if (!preserveBlock) {
            this._removeElement(fragBlock.start);
          }
          result.forEach(function (el) {
            _this._removeElement(el);
          });
          if (!preserveBlock) {
            this._removeElement(fragBlock.end);
          }
        }
    
    /***/ },
    /* 97 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.$emit = $emit;
        exports.$dispatch = $dispatch;
        exports.$broadcast = $broadcast;
        exports.$on = $on;
        exports.$off = $off;
        exports._initEvents = _initEvents;
        function Evt(type, detail) {
          if (detail instanceof Evt) {
            return detail;
          }
        
          this.timestamp = Date.now();
          this.detail = detail;
          this.type = type;
        
          var shouldStop = false;
          this.stop = function () {
            shouldStop = true;
          };
          this.hasStopped = function () {
            return shouldStop;
          };
        }
        
        function $emit(type, detail) {
          var _this = this;
        
          var events = this._vmEvents;
          var handlerList = events[type];
          if (handlerList) {
            (function () {
              var evt = new Evt(type, detail);
              handlerList.forEach(function (handler) {
                handler.call(_this, evt);
              });
            })();
          }
        }
        
        function $dispatch(type, detail) {
          var evt = new Evt(type, detail);
          this.$emit(type, evt);
        
          if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
            this._parent.$dispatch(type, evt);
          }
        }
        
        function $broadcast(type, detail) {
          var evt = new Evt(type, detail);
          this.$emit(type, evt);
        
          if (!evt.hasStopped() && this._childrenVms) {
            this._childrenVms.forEach(function (subVm) {
              subVm.$broadcast(type, evt);
            });
          }
        }
        
        function $on(type, handler) {
          if (!type || typeof handler !== 'function') {
            return;
          }
          var events = this._vmEvents;
          var handlerList = events[type] || [];
          handlerList.push(handler);
          events[type] = handlerList;
        
          // fixed old version lifecycle design
          if (type === 'hook:ready' && this._ready) {
            this.$emit('hook:ready');
          }
        }
        
        function $off(type, handler) {
          if (!type) {
            return;
          }
          var events = this._vmEvents;
          if (!handler) {
            delete events[type];
            return;
          }
          var handlerList = events[type];
          if (!handlerList) {
            return;
          }
          handlerList.$remove(handler);
        }
        
        var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];
        
        function _initEvents(externalEvents) {
          var _this2 = this;
        
          var options = this._options || {};
          var events = options.events || {};
          for (var type1 in events) {
            this.$on(type1, events[type1]);
          }
          for (var type2 in externalEvents) {
            this.$on(type2, externalEvents[type2]);
          }
          LIFE_CYCLE_TYPES.forEach(function (type) {
            _this2.$on('hook:' + type, options[type]);
          });
        }
    
    /***/ },
    /* 98 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.clearModules = clearModules;
        exports.getModule = getModule;
        exports.requireModule = requireModule;
        exports.registerModules = registerModules;
        exports.registerMethods = registerMethods;
        exports.requireComponent = requireComponent;
        exports.registerComponent = registerComponent;
        var nativeModules = {};
        
        function assignModules(modules, ifReplace) {
          var _loop = function _loop(moduleName) {
        
            // init `modules[moduleName][]`
            var methods = nativeModules[moduleName];
            if (!methods) {
              methods = {};
              nativeModules[moduleName] = methods;
            }
        
            // push each non-existed new method
            modules[moduleName].forEach(function (method) {
              if (typeof method === 'string') {
                method = {
                  name: method
                };
              }
        
              if (!methods[method.name] || ifReplace) {
                methods[method.name] = method;
              }
            });
          };
        
          for (var moduleName in modules) {
            _loop(moduleName);
          }
        }
        
        function assignApis(Ctor, apis) {
          var p = Ctor.prototype;
        
          for (var apiName in apis) {
            if (!p.hasOwnProperty(apiName)) {
              p[apiName] = apis[apiName];
            }
          }
        }
        
        function clearModules() {
          nativeModules = {};
        }
        
        function getModule(moduleName) {
          return nativeModules[moduleName];
        }
        
        /**
         * @context a instance of AppInstance
         */
        function requireModule(moduleName) {
          var _this = this;
        
          var methods = nativeModules[moduleName];
          var target = {};
        
          var _loop2 = function _loop2(methodName) {
            target[methodName] = function () {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
        
              return _this.callTasks({
                module: moduleName,
                method: methodName,
                args: args
              });
            };
          };
        
          for (var methodName in methods) {
            _loop2(methodName);
          }
        
          return target;
        }
        
        /**
         * @context Vm
         */
        function registerModules(modules, ifReplace) {
          assignModules(modules, ifReplace);
        }
        
        /**
         * @context Vm
         */
        function registerMethods(apis) {
          assignApis(this, apis);
        }
        
        /**
         * @context a instance of AppInstance
         */
        function requireComponent(name) {
          var customComponentMap = this.customComponentMap;
        
          return customComponentMap[name];
        }
        
        /**
         * @context a instance of AppInstance
         */
        function registerComponent(name, exports) {
          var customComponentMap = this.customComponentMap;
        
        
          if (customComponentMap[name]) {
            throw new Error('define a component(' + name + ') that already exists');
          }
        
          customComponentMap[name] = exports;
        }
    
    /***/ },
    /* 99 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.normalizeVersion = normalizeVersion;
        exports.getError = getError;
        exports.check = check;
        
        var _semver = __webpack_require__(83);
        
        var _semver2 = _interopRequireDefault(_semver);
        
        var _util = __webpack_require__(81);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        /**
         * [normalizeVersion description]
         * @param  {String} Version. ie: 1, 1.0, 1.0.0
         * @return {String} Version
         */
        function normalizeVersion(v) {
          var isValid = _semver2.default.valid(v) ? true : false;
          if (isValid) {
            return v;
          }
        
          v = typeof v === 'string' ? v : '';
          var split = v.split('.');
          var i = 0;
          var result = [];
        
          while (i < 3) {
            var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
            result.push(s);
            i++;
          }
        
          return result.join('.');
        }
        
        function getError(key, val, criteria) {
          var result = {
            isDowngrade: true,
            errorType: 1,
            code: 1000
          };
          var getMsg = function getMsg(key, val, criteria) {
            return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
          };
          var _key = key.toLowerCase();
        
          result.errorMessage = getMsg(key, val, criteria);
        
          if (_key.indexOf('osversion') >= 0) {
            result.code = 1001;
          } else if (_key.indexOf('appversion') >= 0) {
            result.code = 1002;
          } else if (_key.indexOf('weexversion') >= 0) {
            result.code = 1003;
          } else if (_key.indexOf('devicemodel') >= 0) {
            result.code = 1004;
          }
        
          return result;
        }
        
        /**
         * WEEX framework input(deviceInfo)
         * {
         *   platform: 'iOS' or 'android'
         *   osVersion: '1.0.0' or '1.0' or '1'
         *   appVersion: '1.0.0' or '1.0' or '1'
         *   weexVersion: '1.0.0' or '1.0' or '1'
         *   dDeviceModel: 'MODEL_NAME'
         * }
         *
         * downgrade config(config)
         * {
         *   ios: {
         *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     deviceModel: ['modelA', 'modelB', ...]
         *   },
         *   android: {
         *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
         *     deviceModel: ['modelA', 'modelB', ...]
         *   }
         * }
         *
         *
         * @param  {object} deviceInfo Weex SDK framework input
         * @param  {object} config     user input
         * @return {Object}            { isDowngrade: true/false, errorMessage... }
         */
        function check(config, deviceInfo) {
          deviceInfo = deviceInfo || global.WXEnvironment;
          deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
          config = (0, _util.isPlainObject)(config) ? config : {};
          var platform = deviceInfo.platform || 'unknow';
          var dPlatform = platform.toLowerCase();
          var cObj = config[dPlatform] || {};
        
          var result = {
            isDowngrade: false // defautl is pass
          };
        
          for (var i in deviceInfo) {
            var key = i;
            var keyLower = key.toLowerCase();
            var val = deviceInfo[i];
            var isVersion = keyLower.indexOf('version') >= 0 ? true : false;
            var isDeviceModel = keyLower.indexOf('devicemodel') >= 0 ? true : false;
            var criteria = cObj[i];
        
            if (criteria && isVersion) {
              var c = this.normalizeVersion(criteria);
              var d = this.normalizeVersion(deviceInfo[i]);
        
              if (_semver2.default.satisfies(d, c)) {
                result = (0, _util.extend)(this.getError(key, val, criteria));
                break;
              }
            } else if (isDeviceModel) {
              var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
              if (_criteria.indexOf(val) >= 0) {
                result = (0, _util.extend)(this.getError(key, val, criteria));
                break;
              }
            }
          }
        
          return result;
        }
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ },
    /* 100 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.init = init;
        exports.destroy = destroy;
        exports.getRootElement = getRootElement;
        exports.updateActions = updateActions;
        exports.fireEvent = fireEvent;
        exports.callback = callback;
        exports.refreshData = refreshData;
        
        var _util = __webpack_require__(81);
        
        var _perf = __webpack_require__(77);
        
        var perf = _interopRequireWildcard(_perf);
        
        var _domListener = __webpack_require__(101);
        
        var _domListener2 = _interopRequireDefault(_domListener);
        
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                             * @fileOverview
                                                                                                                                                                                                             * instance controls from native
                                                                                                                                                                                                             *
                                                                                                                                                                                                             * - init bundle
                                                                                                                                                                                                             * - fire event
                                                                                                                                                                                                             * - callback
                                                                                                                                                                                                             * - destroy
                                                                                                                                                                                                             *
                                                                                                                                                                                                             * corresponded with the API of instance manager (framework.js)
                                                                                                                                                                                                             */
        
        function init(code, data) {
          var _this = this;
        
          var result;
          // @see: lib/app/bundle.js
          var define = (0, _util.bind)(this.define, this);
          var bootstrap = function bootstrap(name, config, _data) {
            result = _this.bootstrap(name, config, _data || data);
            _this.updateActions();
            _this.doc.listener.createFinish();
            _this.doc.close();
          };
        
          // backward(register/render)
          var register = (0, _util.bind)(this.register, this);
          var render = function render(name, _data) {
            result = _this.bootstrap(name, {}, _data);
          };
        
          var require = function require(name) {
            return function (_data) {
              result = _this.bootstrap(name, {}, _data);
            };
          };
        
          var document = this.doc;
        
          perf.start('run bundle', this.id);
        
          var functionBody = void 0;
          /* istanbul ignore if */
          if (typeof code === 'function') {
            // `function () {...}` -> `{...}`
            // not very strict
            functionBody = code.toString().substr(12);
          } else if (code) {
            functionBody = code.toString();
          }
        
          var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
          '__weex_bootstrap__', // alias for bootstrap
          functionBody);
        
          fn(define, require, document, bootstrap, register, render, define, bootstrap);
        
          perf.end('run bundle', this.id);
          return result;
        }
        
        function destroy() {
          this.id = '';
          this.eventManager = null;
          this.options = null;
          this.blocks = null;
          this.vm = null;
          this.doc = null;
          this.customComponentMap = null;
          this.callbacks = null;
        }
        
        function getRootElement() {
          var doc = this.doc || {};
          var body = doc.body || {};
          return body.toJSON ? body.toJSON() : {};
        }
        
        function updateActions(addonTasks) {
          this.differ.flush();
          var tasks = [];
          if (this.listener && this.listener.updates.length) {
            tasks.push.apply(tasks, _toConsumableArray(this.listener.updates));
            this.listener.updates = [];
          }
          if (addonTasks && addonTasks.length) {
            tasks.push.apply(tasks, _toConsumableArray(addonTasks));
          }
          if (tasks.length) {
            this.callTasks(tasks);
          }
        }
        
        function fireEvent(ref, type, e, domChanges) {
          var _this2 = this;
        
          if (Array.isArray(ref)) {
            ref.some(function (ref) {
              return _this2.fireEvent(ref, type, e) !== false;
            });
            return;
          }
        
          var el = this.doc.getRef(ref);
        
          if (el) {
            perf.start('manage event', ref + '-' + type);
            e = e || {};
            e.type = type;
            e.target = el;
            e.timestamp = Date.now();
            if (domChanges) {
              updateElement(el, domChanges);
            }
            var result = this.eventManager.fire(el, type, e);
            perf.end('manage event', ref + '-' + type);
            this.updateActions();
            return result;
          }
        
          return new Error('invalid element reference "' + ref + '"');
        }
        
        function callback(callbackId, data, ifKeepAlive) {
          var callback = this.callbacks[callbackId];
        
          if (typeof callback === 'function') {
            callback(data); // data is already a object, @see: lib/framework.js
        
            if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
              this.callbacks[callbackId] = undefined;
            }
        
            this.updateActions();
            return;
          }
        
          return new Error('invalid callback id "' + callbackId + '"');
        }
        
        function refreshData(data) {
          var vm = this.vm;
        
          if (vm && data) {
            if (typeof vm.refreshData === 'function') {
              vm.refreshData(data);
            } else {
              (0, _util.extend)(vm, data);
            }
            this.updateActions([(0, _domListener.createAction)('refreshFinish', [])]);
            return;
          }
        
          return new Error('invalid data "' + data + '"');
        }
        
        function updateElement(el, changes) {
          var attrs = changes.attrs || {};
          for (var name in attrs) {
            el.setAttr(name, attrs);
          }
          var style = changes.style || {};
          for (var _name in style) {
            el.setStyle(_name, style[_name]);
          }
        }
    
    /***/ },
    /* 101 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Listener;
        exports.createAction = createAction;
        function Listener(id, handler) {
          this.id = id;
          this.batched = false;
          this.updates = [];
          if (typeof handler === 'function') {
            this.handler = handler;
          }
        }
        
        Listener.prototype.createFinish = function (callback) {
          var handler = this.handler;
          handler([createAction('createFinish', [])], callback);
        };
        
        Listener.prototype.createBody = function (element, ref) {
          var actions = [createAction('createBody', [element.toJSON()])];
          this.addActions(actions);
        };
        
        Listener.prototype.addElement = function (element, ref, index) {
          if (!(index >= 0)) {
            index = -1;
          }
          this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
        };
        
        Listener.prototype.removeElement = function (ref) {
          if (Array.isArray(ref)) {
            var actions = ref.map(function (r) {
              return createAction('removeElement', [r]);
            });
            this.addActions(actions);
          } else {
            this.addActions(createAction('removeElement', [ref]));
          }
        };
        
        Listener.prototype.moveElement = function (targetRef, parentRef, index) {
          this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
        };
        
        Listener.prototype.setAttr = function (ref, key, value) {
          var result = {};
          result[key] = value;
          this.addActions(createAction('updateAttrs', [ref, result]));
        };
        
        Listener.prototype.setStyle = function (ref, key, value) {
          var result = {};
          result[key] = value;
          this.addActions(createAction('updateStyle', [ref, result]));
        };
        
        Listener.prototype.setStyles = function (ref, style) {
          this.addActions(createAction('updateStyle', [ref, style]));
        };
        
        Listener.prototype.addEvent = function (ref, type) {
          this.addActions(createAction('addEvent', [ref, type]));
        };
        
        Listener.prototype.removeEvent = function (ref, type) {
          this.addActions(createAction('removeEvent', [ref, type]));
        };
        
        Listener.prototype.handler = function (actions, cb) {
          cb && cb();
        };
        
        Listener.prototype.addActions = function (actions) {
          var updates = this.updates;
          var handler = this.handler;
        
          if (!Array.isArray(actions)) {
            actions = [actions];
          }
        
          if (this.batched) {
            updates.push.apply(updates, actions);
          } else {
            handler(actions);
          }
        };
        
        function createAction(name, args) {
          return { module: 'dom', method: name, args: args };
        }
    
    /***/ },
    /* 102 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        
        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
        
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
        
        var Differ = function () {
          function Differ(id) {
            _classCallCheck(this, Differ);
        
            this.id = id;
            this.map = [];
            this.hooks = [];
          }
        
          _createClass(Differ, [{
            key: 'isEmpty',
            value: function isEmpty() {
              return this.map.length === 0;
            }
          }, {
            key: 'append',
            value: function append(type, depth, ref, handler) {
              var map = this.map;
              if (!map[depth]) {
                map[depth] = {};
              }
              var group = map[depth];
              if (!group[type]) {
                group[type] = {};
              }
              if (type === 'element') {
                if (!group[type][ref]) {
                  group[type][ref] = [];
                }
                group[type][ref].push(handler);
              } else {
                group[type][ref] = handler;
              }
            }
          }, {
            key: 'flush',
            value: function flush() {
              var map = this.map.slice();
              this.map.length = 0;
              map.forEach(function (group) {
                callTypeMap(group, 'repeat');
                callTypeMap(group, 'shown');
                callTypeList(group, 'element');
              });
        
              var hooks = this.hooks.slice();
              this.hooks.length = 0;
              hooks.forEach(function (fn) {
                fn();
              });
        
              if (!this.isEmpty()) {
                this.flush();
              }
            }
          }, {
            key: 'then',
            value: function then(fn) {
              this.hooks.push(fn);
            }
          }]);
        
          return Differ;
        }();
        
        exports.default = Differ;
        
        
        function callTypeMap(group, type) {
          var map = group[type];
          for (var ref in map) {
            map[ref]();
          }
        }
        
        function callTypeList(group, type) {
          var map = group[type];
          for (var ref in map) {
            var list = map[ref];
            list.forEach(function (handler) {
              handler();
            });
          }
        }
    
    /***/ },
    /* 103 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                           * @fileOverview event manager
                                                                                                                                                                                                                                                           */
        
        exports.default = EventManager;
        
        var _util = __webpack_require__(81);
        
        var _ = _interopRequireWildcard(_util);
        
        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
        
        function EventManager() {
          this.els = [];
          this.targets = [];
        }
        
        EventManager.prototype._get = function (el, force) {
          var index = _.indexOf(this.els, el);
          var target;
          if (index >= 0) {
            target = this.targets[index];
          } else if (force) {
            target = { el: el, events: {} };
            this.els.push(el);
            this.targets.push(target);
          }
          return target;
        };
        
        EventManager.prototype.add = function (el, type, handler) {
          if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object' || !el || typeof type !== 'string' || !type || typeof handler !== 'function') {
            return;
          }
          var target = this._get(el, true);
          target.events[type] = handler;
        };
        
        EventManager.prototype.remove = function (el, type) {
          if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object' || !el || typeof type !== 'string' || !type) {
            return;
          }
          var target = this._get(el);
          if (target) {
            delete target.events[type];
          }
        };
        
        EventManager.prototype.fire = function (el, type, e) {
          var target = this._get(el);
          var handler, el;
          if (target) {
            el = target.el;
            handler = target.events[type];
            if (typeof handler === 'function') {
              return handler.call(el, e);
            }
          }
        };
    
    /***/ },
    /* 104 */
    /***/ function(module, exports) {
    
        'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Document = Document;
        exports.destroyDocument = destroyDocument;
        exports.Node = Node;
        exports.Element = Element;
        exports.Comment = Comment;
        /**
         * @fileOverview
         * A simple virtual dom implementation
         */
        
        var DEFAULT_TAG_NAME = 'div';
        
        var instanceMap = exports.instanceMap = {};
        
        function Document(id) {
          id = id ? id.toString() : '';
          this.id = id;
          this.nextRef = 1;
          this.nodeMap = {};
          this.listener = null;
          this.eventManager = null;
          this.closed = false;
          instanceMap[id] = this;
        
          this.createDocumentElement();
        }
        
        function destroyDocument(id) {
          delete instanceMap[id];
        }
        
        Document.prototype.open = function () {
          this.closed = false;
          if (this.listener) {
            this.listener.batched = false;
          }
        };
        Document.prototype.close = function () {
          this.closed = true;
          if (this.listener) {
            this.listener.batched = true;
          }
        };
        
        Document.prototype.setEventManager = function (eventManager) {
          this.eventManager = eventManager;
        };
        
        Document.prototype.setListener = function (listener) {
          this.listener = listener;
          listener.batched = !!this.closed;
        };
        
        Document.prototype.addRef = function (el) {
          el.ref = this.nextRef.toString();
          this.nodeMap[el.ref] = el;
          this.nextRef++;
        };
        
        Document.prototype.getRef = function (ref) {
          return this.nodeMap[ref];
        };
        
        Document.prototype.removeRef = function (ref) {
          delete this.nodeMap[ref];
        };
        
        Document.prototype.createDocumentElement = function (type, props) {
          if (!this.documentElement) {
            this.documentElement = new Element(type, props, this);
            this.nodeMap._documentElement = this.documentElement;
            this.documentElement.ref = '_documentElement';
            this.documentElement.attached = true;
          }
        
          return this.documentElement;
        };
        
        Document.prototype.createBody = function (type, props) {
          if (!this.body) {
            this.body = new Element(type, props, this);
            this.nodeMap._root = this.body;
            this.body.ref = '_root';
            this.body.depth = 1;
          }
        
          return this.body;
        };
        
        Document.prototype.createElement = function (tagName, props) {
          return new Element(tagName, props, this);
        };
        
        Document.prototype.createComment = function (text) {
          return new Comment(text, this);
        };
        
        function Node() {}
        
        Node.prototype.create = function (instanceId) {
          this.parentRef = null;
          this.attached = false;
          if (instanceId) {
            this.instanceId = instanceId;
            var doc = instanceMap[instanceId];
            doc.addRef(this);
          }
        };
        
        Node.prototype.destroy = function () {
          var ref = this.ref;
          var instanceId = this.instanceId;
          if (instanceId) {
            var doc = instanceMap[instanceId];
            doc.removeRef(ref);
          }
        
          var children = this.children || [];
          var length = children.length;
          for (var i = 0; i < length; i++) {
            children[i].destroy();
          }
        };
        
        Node.prototype.getRenderer = function () {
          var doc = instanceMap[this.instanceId];
          return doc.listener;
        };
        
        Node.prototype.next = function () {
          var instanceId = this.instanceId;
          var doc = instanceMap[instanceId];
          var parent = doc.getRef(this.parentRef);
          if (parent) {
            return parent.children[parent.children.indexOf(this) + 1];
          }
        };
        
        Node.prototype.prev = function () {
          var instanceId = this.instanceId;
          var doc = instanceMap[instanceId];
          var parent = doc.getRef(this.parentRef);
          if (parent) {
            return parent.children[parent.children.indexOf(this) - 1];
          }
        };
        
        function Element() {
          var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
          var props = arguments[1];
          var ownerDocument = arguments[2];
        
          props = props || {};
          this.create(ownerDocument.id);
          this.ownerDocument = ownerDocument;
          this.type = type;
          this.attr = props.attr || {};
          this.classStyle = props.classStyle || {};
          this.style = props.style || {};
          this.event = [];
          this.children = [];
          this.pureChildren = [];
        }
        
        Element.prototype = new Node();
        
        Element.prototype.appendChild = function (node) {
        
          removeIfExisted(node);
          node.parentRef = this.ref;
          this.children.push(node);
        
          if (this.attached) {
            setAttached(node, this.depth);
          } else {
            setDetached(node);
          }
        
          if (node instanceof Element) {
            this.pureChildren.push(node);
        
            if (this.attached) {
              var renderer = this.getRenderer();
              if (renderer) {
                if (this.ref === '_documentElement') {
                  // if its parent is documentElement then it's a body
                  renderer.createBody(node, this.ref);
                } else {
                  renderer.addElement(node, this.ref);
                }
              }
            }
          }
        };
        
        Element.prototype.insertBefore = function (node, before) {
        
          if (node.parentRef === this.ref) {
            moveBefore(node, before, this.children);
            if (node instanceof Element) {
              var pureBeforeIndex = movePureBefore(node, before, this.pureChildren);
              if (pureBeforeIndex >= 0 && this.attached) {
                var renderer = this.getRenderer();
                if (renderer) {
                  renderer.moveElement(node.ref, this.ref, pureBeforeIndex);
                }
              }
            }
            return;
          }
        
          removeIfExisted(node);
        
          var children = this.children;
          var index = children.indexOf(before);
        
          node.parentRef = this.ref;
          if (this.attached) {
            setAttached(node, this.depth);
          } else {
            setDetached(node);
          }
          children.splice(index, 0, node);
        
          if (node instanceof Element) {
            var pureChildren = this.pureChildren;
            var pureIndex = getPureAfter(before, pureChildren);
        
            pureChildren.splice(pureIndex, 0, node);
        
            if (this.attached) {
              var _renderer = this.getRenderer();
              if (_renderer) {
                _renderer.addElement(node, this.ref, pureIndex);
              }
            }
          }
        };
        
        Element.prototype.insertAfter = function (node, after) {
        
          if (node.parentRef === this.ref) {
            moveAfter(node, after, this.children);
            if (node instanceof Element) {
              var pureAfterIndex = movePureAfter(node, after, this.pureChildren);
              if (pureAfterIndex >= 0 && this.attached) {
                var renderer = this.getRenderer();
                if (renderer) {
                  renderer.moveElement(node.ref, this.ref, pureAfterIndex);
                }
              }
            }
            return;
          }
        
          removeIfExisted(node);
        
          var children = this.children;
          var index = children.indexOf(after);
        
          node.parentRef = this.ref;
          if (this.attached) {
            setAttached(node, this.depth);
          } else {
            setDetached(node);
          }
          children.splice(index + 1, 0, node);
        
          if (node instanceof Element) {
            var pureChildren = this.pureChildren;
            var pureIndex = getPureBefore(after, pureChildren);
        
            pureChildren.splice(pureIndex + 1, 0, node);
        
            if (this.attached) {
              var _renderer2 = this.getRenderer();
              if (_renderer2) {
                _renderer2.addElement(node, this.ref, pureIndex + 1);
              }
            }
          }
        };
        
        Element.prototype.removeChild = function (node, preserved) {
          var children = this.children;
          var index = children.indexOf(node);
        
          setDetached(node);
        
          if (index >= 0) {
            node.parentRef = null;
            children.splice(index, 1);
            if (!preserved) {
              node.destroy();
            }
          }
        
          if (node instanceof Element) {
            this.pureChildren.$remove(node);
            if (this.attached) {
              var renderer = this.getRenderer();
              if (renderer) {
                renderer.removeElement(node.ref);
              }
            }
          }
        };
        
        Element.prototype.clear = function () {
          var children = this.children;
          var length = children.length;
          for (var i = 0; i < length; i++) {
            var child = children[i];
            child.parentRef = null;
            setDetached(child);
            child.destroy();
          }
          children.length = 0;
        
          if (this.attached) {
            var refs = this.pureChildren.map(function (child) {
              return child.ref;
            });
            this.pureChildren.length = 0;
            var renderer = this.getRenderer();
            if (renderer) {
              renderer.removeElement(refs);
            }
          }
        };
        
        function moveBefore(node, before, children) {
          var targetIndex = children.indexOf(node);
          var beforeIndex = children.indexOf(before);
        
          /* istanbul ignore next */
          if (targetIndex === beforeIndex || targetIndex + 1 === beforeIndex) {
            return -1;
          }
        
          var newIndex = targetIndex < beforeIndex ? beforeIndex - 1 : beforeIndex;
          children.splice(targetIndex, 1);
          children.splice(newIndex, 0, node);
        
          return beforeIndex;
        }
        
        function movePureBefore(node, before, pureChildren) {
          var pureTargetIndex = pureChildren.indexOf(node);
          var pureBeforeIndex = getPureAfter(before, pureChildren);
        
          /* istanbul ignore next */
          if (pureTargetIndex === pureBeforeIndex || pureTargetIndex + 1 === pureBeforeIndex) {
            return -1;
          }
        
          var pureNewIndex = pureTargetIndex < pureBeforeIndex ? pureBeforeIndex - 1 : pureBeforeIndex;
        
          pureChildren.splice(pureTargetIndex, 1);
          pureChildren.splice(pureNewIndex, 0, node);
        
          return pureBeforeIndex;
        }
        
        function getPureAfter(node, pureChildren) {
          var pureIndex = pureChildren.indexOf(node);
          while (node && pureIndex < 0) {
            node = node.next();
            pureIndex = pureChildren.indexOf(node);
          }
          if (pureIndex < 0) {
            pureIndex = pureChildren.length;
          }
          return pureIndex;
        }
        
        function moveAfter(node, after, children) {
          var targetIndex = children.indexOf(node);
          var afterIndex = children.indexOf(after);
        
          /* istanbul ignore next */
          if (targetIndex === afterIndex || targetIndex === afterIndex + 1) {
            return -1;
          }
        
          var newIndex = targetIndex < afterIndex ? afterIndex : afterIndex + 1;
          children.splice(targetIndex, 1);
          children.splice(newIndex, 0, node);
        
          return afterIndex;
        }
        
        function movePureAfter(node, after, pureChildren) {
          var pureTargetIndex = pureChildren.indexOf(node);
          var pureAfterIndex = getPureBefore(after, pureChildren);
        
          /* istanbul ignore next */
          if (pureTargetIndex === pureAfterIndex || pureTargetIndex === pureAfterIndex + 1) {
            return -1;
          }
        
          var pureNewIndex = pureTargetIndex < pureAfterIndex ? pureAfterIndex : pureAfterIndex + 1;
        
          pureChildren.splice(pureTargetIndex, 1);
          pureChildren.splice(pureNewIndex, 0, node);
        
          return pureAfterIndex + 1;
        }
        
        function getPureBefore(node, pureChildren) {
          var pureIndex = pureChildren.indexOf(node);
          while (node && pureIndex < 0) {
            node = node.prev();
            pureIndex = pureChildren.indexOf(node);
          }
          /* istanbul ignore next */
          if (pureIndex < 0) {
            pureIndex = -1;
          }
          return pureIndex;
        }
        
        function setAttached(node, depth) {
          if (node.ref === '_root') {
            depth = 1;
          } else {
            depth = depth > 0 ? depth + 1 : 0;
          }
          node.attached = true;
          node.depth = depth;
          if (node.children) {
            node.children.forEach(function (sub) {
              setAttached(sub, depth);
            });
          }
        }
        
        function setDetached(node) {
          node.attached = false;
          node.depth = 0;
          if (node.children) {
            node.children.forEach(function (sub) {
              setDetached(sub);
            });
          }
        }
        
        function removeIfExisted(node) {
          var doc = instanceMap[node.instanceId];
          if (doc) {
            var existedNode = doc.getRef(node.ref);
            if (existedNode) {
              var existedParent = doc.getRef(existedNode.parentRef);
              if (existedParent && existedParent.removeChild) {
                existedParent.removeChild(existedNode, true);
              }
            }
          }
        }
        
        Element.prototype.setAttr = function (key, value) {
          if (this.attr[key] === value) {
            return;
          }
          this.attr[key] = value;
          if (this.attached) {
            var renderer = this.getRenderer();
            if (renderer) {
              renderer.setAttr(this.ref, key, value);
            }
          }
        };
        
        Element.prototype.setStyle = function (key, value) {
          if (this.style[key] === value) {
            return;
          }
          this.style[key] = value;
          if (this.attached) {
            var renderer = this.getRenderer();
            if (renderer) {
              renderer.setStyle(this.ref, key, value);
            }
          }
        };
        
        Element.prototype.setClassStyle = function (classStyle) {
          this.classStyle = classStyle;
          if (this.attached) {
            var renderer = this.getRenderer();
            if (renderer) {
              renderer.setStyles(this.ref, this.toStyle());
            }
          }
        };
        
        Element.prototype.addEvent = function (type, handler) {
          var index = this.event.indexOf(type);
        
          if (index < 0) {
            this.event.push(type);
            var eventManager = this.ownerDocument.eventManager;
            eventManager.add(this, type, handler);
        
            if (this.attached) {
              var renderer = this.getRenderer();
              if (renderer) {
                renderer.addEvent(this.ref, type);
              }
            }
          }
        };
        
        Element.prototype.removeEvent = function (type) {
          var index = this.event.indexOf(type);
        
          if (index >= 0) {
            this.event.splice(index, 1);
            var eventManager = this.ownerDocument.eventManager;
            eventManager.remove(this, type);
        
            if (this.attached) {
              var renderer = this.getRenderer();
              if (renderer) {
                renderer.removeEvent(this.ref, type);
              }
            }
          }
        };
        
        Element.prototype.toStyle = function () {
          var result = {};
          var classStyle = this.classStyle;
          var style = this.style;
          for (var name in classStyle) {
            result[name] = classStyle[name];
          }
          for (var _name in style) {
            result[_name] = style[_name];
          }
          return result;
        };
        
        Element.prototype.toJSON = function () {
          var result = {
            ref: this.ref.toString(),
            type: this.type,
            attr: this.attr,
            style: this.toStyle()
          };
        
          if (this.event && this.event.length) {
            result.event = this.event;
          }
          if (this.pureChildren && this.pureChildren.length) {
            result.children = this.pureChildren.map(function (child) {
              return child.toJSON();
            });
          }
        
          return result;
        };
        
        Element.prototype.toString = function () {
          return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
            return child.toString();
          }).join('') + '</' + this.type + '>';
        };
        
        function Comment(value, ownerDocument) {
          this.create(ownerDocument.id);
          this.type = 'comment';
          this.value = value;
        }
        
        Comment.prototype = new Node();
        
        Comment.prototype.toString = function () {
          return '<!-- ' + this.value + ' -->';
        };
    
    /***/ },
    /* 105 */
    /***/ function(module, exports) {
    
        module.exports = {
            "name": "weex-jsframework",
            "version": "0.13.9",
            "description": "JS Framework for Weex solution which is a extendable cross-platform solution for dynamic programming and publishing projects",
            "main": "index.js",
            "scripts": {
                "dev": "webpack --watch --config ./webpack.config.js",
                "build": "webpack --config ./webpack.config.js",
                "compress": "uglifyjs dist/index.js -o dist/index.min.js",
                "lint": "jscs --config .jscsrc polyfill/*.js polyfill/__test__/*.js lib/*.js lib/__test__/*.js lib/app/*.js lib/app/__test__/*.js lib/vm/*.js lib/vm/__test__/*.js",
                "test": "mocha --compilers js:babel-core/register polyfill/__test__/*.js lib/__test__/*.js lib/**/__test__/*.js",
                "cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot lib/__test__/*.js lib/**/__test__/*.js",
                "ci": "npm run lint && npm run cover"
            },
            "repository": {
                "type": "git",
                "url": "git@github.com:alibaba/weex.git"
            },
            "author": [
                {
                    "name": "jinjiang",
                    "email": "zhaojinjiang@me.com"
                },
                {
                    "name": "Terry King",
                    "email": "terrykingcha@gmail.com"
                }
            ],
            "contributors": [
                {
                    "name": "pushiming",
                    "email": "pushiming@gmail.com"
                },
                {
                    "name": "iskenhuang",
                    "email": "iskenhuang@gmail.com"
                },
                {
                    "name": "yuanyan",
                    "email": "yuanyan.cao@gmail.com"
                }
            ],
            "keywords": [
                "weex",
                "mvvm",
                "browser",
                "hybrid",
                "framework"
            ],
            "license": "Apache-2.0",
            "dependencies": {
                "semver": "~5.1.0",
                "core-js": "~2.1.1"
            },
            "devDependencies": {
                "babel-cli": "~6.4.5",
                "babel-core": "~6.4.5",
                "babel-loader": "~6.2.1",
                "babel-preset-es2015": "~6.3.13",
                "chai": "~3.2.0",
                "isparta": "~4.0.0",
                "istanbul": "~0.4.2",
                "jscs": "~2.9.0",
                "json-loader": "^0.5.4",
                "mocha": "~2.3.4",
                "sinon": "~1.17.2",
                "sinon-chai": "~2.8.0",
                "uglify-js": "^2.6.2",
                "watch-cli": "~0.2.1",
                "webpack": "~1.12.12"
            },
            "optionalDependencies": {
                "weex-transformer": ">=0.1.5 <0.4"
            }
        };
    
    /***/ },
    /* 106 */
    /***/ function(module, exports, __webpack_require__) {
    
        /* WEBPACK VAR INJECTION */(function(global) {'use strict';
        
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.$ = $;
        exports.$el = $el;
        exports.$vm = $vm;
        exports.$renderThen = $renderThen;
        exports.$scrollTo = $scrollTo;
        exports.$transition = $transition;
        exports.$getConfig = $getConfig;
        exports.$sendHttp = $sendHttp;
        exports.$openURL = $openURL;
        exports.$setTitle = $setTitle;
        exports.$call = $call;
        
        var _util = __webpack_require__(81);
        
        /**
         * ==========================================================
         * common
         * ==========================================================
         */
        
        /**
         * @deprecated use $vm instead
         * find the vm by id
         * Note: there is only one id in whole component
         * @param  {string} id
         * @return {Vm}
         */
        function $(id) {
          nativeLog('[WARNING] the Vm#$ api is deprecated, please use Vm#$vm instead');
          var info = this._ids[id];
          if (info) {
            return info.vm;
          }
        }
        
        /**
         * find the element by id
         * Note: there is only one id in whole component
         * @param  {string} id
         * @return {Element}
         */
        /**
         * @fileOverview The api for invoking with "$" prefix
         */
        function $el(id) {
          var info = this._ids[id];
          if (info) {
            return info.el;
          }
        }
        
        /**
         * find the vm of the custom component by id
         * Note: there is only one id in whole component
         * @param  {string} id
         * @return {Vm}
         */
        function $vm(id) {
          var info = this._ids[id];
          if (info) {
            return info.vm;
          }
        }
        
        /**
         * Fire when differ rendering finished
         *
         * @param  {Function} fn
         */
        function $renderThen(fn) {
          var app = this._app;
          var differ = app.differ;
          return differ.then(function () {
            fn();
          });
        }
        
        /**
         * scroll an element specified by id into view, 
         * moreover specify a number of offset optionally
         * @param  {string} id
         * @param  {number} offset
         */
        function $scrollTo(id, offset) {
          var el = this.$el(id);
          if (el) {
            var dom = this._app.requireModule('dom');
            dom.scrollToElement(el.ref, { offset: offset });
          }
        }
        
        /**
         * perform transition animation on an element specified by id
         * @param  {string}   id
         * @param  {object}   options
         * @param  {object}   options.styles
         * @param  {object}   options.duration(ms)
         * @param  {object}   [options.timingFunction]
         * @param  {object}   [options.delay=0(ms)]
         * @param  {Function} callback
         */
        function $transition(id, options, callback) {
          var _this = this;
        
          var el = this.$el(id);
          if (el && options && options.styles) {
            var animation = this._app.requireModule('animation');
            animation.transition(el.ref, options, function () {
              _this._setStyle(el, options.styles);
              callback && callback.apply(undefined, arguments);
            });
          }
        }
        
        /**
         * get some config
         * @return {object} some config for app instance
         * @property {string} bundleUrl
         * @property {boolean} debug
         * @property {object} env
         * @property {string} env.weexVersion(ex. 1.0.0)
         * @property {string} env.appName(ex. TB/TM)
         * @property {string} env.appVersion(ex. 5.0.0)
         * @property {string} env.platform(ex. iOS/Android)
         * @property {string} env.osVersion(ex. 7.0.0)
         * @property {string} env.deviceModel **native only**
         * @property {number} env.[deviceWidth=750]
         * @property {number} env.deviceHeight
         */
        function $getConfig(callback) {
          var config = (0, _util.extend)({
            env: global.WXEnvironment || {}
          }, this._app.options);
          if ((0, _util.typof)(callback) === 'function') {
            nativeLog('[WARNING] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
            callback(config);
          }
          return config;
        }
        
        /**
         * request network via http protocol
         * @param  {object}   params
         * @param  {Function} callback
         */
        function $sendHttp(params, callback) {
          var stream = this._app.requireModule('stream');
          stream.sendHttp(params, callback);
        }
        
        /**
         * open a url
         * @param  {string} url
         */
        function $openURL(url) {
          var event = this._app.requireModule('event');
          event.openURL(url);
        }
        
        /**
         * set a title for page
         * @param  {string} title
         */
        function $setTitle(title) {
          var pageInfo = this._app.requireModule('pageInfo');
          pageInfo.setTitle(title);
        }
        
        /**
         * invoke a native method by specifing the name of module and method
         * @param  {string} moduleName
         * @param  {string} methodName
         * @param  {...*} the rest arguments
         */
        function $call(moduleName, methodName) {
          var module = this._app.requireModule(moduleName);
          if (module && module[methodName]) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }
        
            module[methodName].apply(module, args);
          }
        }
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
    
    /***/ }
    /******/ ]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global) {'use strict'
    
    __webpack_require__(3)
    
    // require('./polyfill')
    __webpack_require__(7)
    __webpack_require__(12)
    
    var config = __webpack_require__(13)
    var Loader = __webpack_require__(14)
    var utils = __webpack_require__(15)
    var protocol = __webpack_require__(16)
    var ComponentManager = __webpack_require__(17)
    var Component = __webpack_require__(24)
    var Sender = __webpack_require__(28)
    var receiver = __webpack_require__(29)
    
    // Components and apis.
    var components = __webpack_require__(30)
    var api = __webpack_require__(90)
    __webpack_require__(124)
    __webpack_require__(102)
    
    var WEAPP_STYLE_ID = 'weapp-style'
    
    var DEFAULT_DESIGN_WIDTH = 750
    var DEFAULT_SCALE = window.innerWidth / DEFAULT_DESIGN_WIDTH
    var DEFAULT_ROOT_ID = 'weex'
    var DEFAULT_JSONP_CALLBACK_NAME = 'weexJsonpCallback'
    
    window.WXEnvironment = {
      weexVersion: config.weexVersion,
      appName: lib.env.aliapp ? lib.env.aliapp.appname : null,
      appVersion: lib.env.aliapp ? lib.env.aliapp.version.val : null,
      platform: 'Web',
      osName: lib.env.browser ? lib.env.browser.name : null,
      osVersion: lib.env.browser ? lib.env.browser.version.val : null,
      deviceWidth: DEFAULT_DESIGN_WIDTH,
      deviceHeight: window.innerHeight / DEFAULT_SCALE
    }
    
    var _instanceMap = {}
    var _downgrades = {}
    
    var downgradable = ['list', 'scroller']
    
    ; (function initializeWithUrlParams() {
    
      var params = lib.httpurl(location.href).params
      for (var k in params) {
        // Get global _downgrades from url's params.
        var match = k.match(/downgrade_(\w+)/)
        if (!match || !match[1]) {
          continue
        }
        if (params[k] !== true && params[k] !== 'true') {
          continue
        }
        var downk = match[1]
        if (downk && (downgradable.indexOf(downk) !== -1)) {
          _downgrades[downk] = true
        }
      }
    
      // set global 'debug' config to true if there's a debug flag in current url.
      var debug = params['debug']
      if (debug === true || debug === 'true') {
        config.debug = true
      }
    
    })()
    
    __webpack_require__(32).init()
    
    function Weex(options) {
    
      if (!(this instanceof Weex)) {
        return new Weex(options)
      }
    
      // Width of the root container. Default is window.innerWidth.
      this.width = options.width || window.innerWidth
      this.bundleUrl = options.bundleUrl || location.href
      this.instanceId = options.appId
      this.rootId = options.rootId || (DEFAULT_ROOT_ID + utils.getRandom(10))
      this.designWidth = options.designWidth || DEFAULT_DESIGN_WIDTH
      this.jsonpCallback = options.jsonpCallback || DEFAULT_JSONP_CALLBACK_NAME
      this.source = options.source
      this.loader = options.loader
      this.embed = options.embed ? true : false
    
      this.data = options.data
    
      this.initDowngrades(options.downgrade)
      this.initScale()
      this.initComponentManager()
      this.initBridge()
      Weex.addInstance(this)
    
      protocol.injectWeexInstance(this)
    
      this.loadBundle(function (err, appCode) {
        if (!err) {
          this.createApp(config, appCode)
        } else {
          console.error('load bundle err:', err)
        }
      }.bind(this))
    
    }
    
    Weex.init = function (options) {
      if (utils.isArray(options)) {
        options.forEach(function (config) {
          new Weex(config)
        })
      } else if (
          Object.prototype.toString.call(options).slice(8, -1) === 'Object'
        ) {
        new Weex(options)
      }
    }
    
    Weex.addInstance = function (instance) {
      _instanceMap[instance.instanceId] = instance
    }
    
    Weex.getInstance = function (instanceId) {
      return _instanceMap[instanceId]
    }
    
    Weex.prototype = {
    
      initDowngrades: function (dg) {
        this.downgrades = utils.extend({}, _downgrades)
        // Get downgrade component type from user's specification
        // in weex's init options.
        if (!utils.isArray(dg)) {
          return
        }
        for (var i = 0, l = dg.length; i < l; i++) {
          var downk = dg[i]
          if (downgradable.indexOf(downk) !== -1) {
            this.downgrades[downk] = true
          }
        }
      },
    
      initBridge: function () {
        receiver.init(this)
        this.sender = new Sender(this)
      },
    
      loadBundle: function (cb) {
        Loader.load({
          jsonpCallback: this.jsonpCallback,
          source: this.source,
          loader: this.loader
        }, cb)
      },
    
      createApp: function (config, appCode) {
        var root = document.querySelector('#' + this.rootId)
        if (!root) {
          root = document.createElement('div')
          root.id = this.rootId
          document.body.appendChild(root)
        }
    
        var promise = window.createInstance(
          this.instanceId
          , appCode
          , {
            bundleUrl: this.bundleUrl,
            debug: config.debug
          }
          , this.data
        )
    
        if (Promise && promise instanceof Promise) {
          promise.then(function () {
            // Weex._instances[this.instanceId] = this.root
          }.bind(this)).catch(function (err) {
            if (err && config.debug) {
              console.error(err)
            }
          })
        }
    
        // Do not destroy instance here, because in most browser
        // press back button to back to this page will not refresh
        // the window and the instance will not be recreated then.
        // window.addEventListener('beforeunload', function (e) {
        // })
    
      },
    
      initScale: function () {
        this.scale = this.width / this.designWidth
      },
    
      initComponentManager: function () {
        this._componentManager = new ComponentManager(this)
      },
    
      getComponentManager: function () {
        return this._componentManager
      },
    
      getRoot: function () {
        return document.querySelector('#' + this.rootId)
      }
    }
    
    Weex.appendStyle = function (css) {
      utils.appendStyle(css, WEAPP_STYLE_ID)
    },
    
    // Register a new component with the specified name.
    Weex.registerComponent = function (name, comp) {
      ComponentManager.registerComponent(name, comp)
    },
    
    // Register a new api module.
    // If the module already exists, just add methods from the
    // new module to the old one.
    Weex.registerApiModule = function (name, module, meta) {
      if (!protocol.apiModule[name]) {
        protocol.apiModule[name] = module
      } else {
        for (var key in module) {
          if (module.hasOwnProperty(key)) {
            protocol.apiModule[name][key] = module[key]
          }
        }
      }
      // register API module's meta info to jsframework
      if (meta) {
        protocol.setApiModuleMeta(meta)
        window.registerModules(protocol.getApiModuleMeta(name), true)
      }
    },
    
    // Register a new api method for the specified module.
    // opts:
    //  - args: type of arguments the API method takes such
    //    as ['string', 'function']
    Weex.registerApi = function (moduleName, name, method, args) {
      if (typeof method !== 'function') {
        return
      }
      if (!protocol.apiModule[moduleName]) {
        protocol.apiModule[moduleName] = {}
        protocol._meta[moduleName] = []
      }
      protocol.apiModule[moduleName][name] = method
      if (!args) {
        return
      }
      // register API meta info to jsframework
      protocol.setApiMeta(moduleName, {
        name: name,
        args: args
      })
      window.registerModules(protocol.getApiModuleMeta(moduleName, meta), true)
    },
    
    // Register a new weex-bundle-loader.
    Weex.registerLoader = function (name, loaderFunc) {
      Loader.registerLoader(name, loaderFunc)
    }
    
    // To install components and plugins.
    Weex.install = function (mod) {
      mod.init(Weex)
    }
    
    Weex.stopTheWorld = function () {
      for (var instanceId in _instanceMap) {
        if (_instanceMap.hasOwnProperty(instanceId)) {
          window.destroyInstance(instanceId)
        }
      }
    }
    
    (function startRefreshController() {
      if (location.search.indexOf('hot-reload_controller') === -1)  {
        return
      }
      if (!window.WebSocket) {
        console.info('auto refresh need WebSocket support')
        return
      }
      var host = location.hostname
      var port = 8082
      var client = new WebSocket('ws://' + host + ':' + port + '/',
        'echo-protocol'
      )
      client.onerror = function () {
        console.log('refresh controller websocket connection error')
      }
      client.onmessage = function (e) {
        console.log('Received: \'' + e.data + '\'')
        if (e.data  === 'refresh') {
          location.reload()
        }
      }
    }())
    
    // Weex.install(require('weex-components'))
    Weex.install(components)
    Weex.install(api)
    
    Weex.Component = Component
    Weex.ComponentManager = ComponentManager
    Weex.utils = utils
    Weex.config = config
    
    global.weex = Weex
    module.exports = Weex
    
    /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(4);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./base.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./base.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  text-size-adjust: none;\n}\n\nul, ol {\n  list-style: none;\n}\n", ""]);
    
    // exports


/***/ },
/* 5 */
/***/ function(module, exports) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function() {
        var list = [];
    
        // return the list of modules as css string
        list.toString = function toString() {
            var result = [];
            for(var i = 0; i < this.length; i++) {
                var item = this[i];
                if(item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };
    
        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
            if(typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for(var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if(typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for(i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if(mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if(mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    var stylesInDom = {},
        memoize = function(fn) {
            var memo;
            return function () {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        },
        isOldIE = memoize(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        getHeadElement = memoize(function () {
            return document.head || document.getElementsByTagName("head")[0];
        }),
        singletonElement = null,
        singletonCounter = 0,
        styleElementsInsertedAtTop = [];
    
    module.exports = function(list, options) {
        if(false) {
            if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
    
        options = options || {};
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (typeof options.singleton === "undefined") options.singleton = isOldIE();
    
        // By default, add <style> tags to the bottom of <head>.
        if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
    
        var styles = listToStyles(list);
        addStylesToDom(styles, options);
    
        return function update(newList) {
            var mayRemove = [];
            for(var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
            if(newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for(var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if(domStyle.refs === 0) {
                    for(var j = 0; j < domStyle.parts.length; j++)
                        domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    }
    
    function addStylesToDom(styles, options) {
        for(var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if(domStyle) {
                domStyle.refs++;
                for(var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
                for(; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
                for(var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }
    
    function listToStyles(list) {
        var styles = [];
        var newStyles = {};
        for(var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {css: css, media: media, sourceMap: sourceMap};
            if(!newStyles[id])
                styles.push(newStyles[id] = {id: id, parts: [part]});
            else
                newStyles[id].parts.push(part);
        }
        return styles;
    }
    
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement();
        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if (options.insertAt === "top") {
            if(!lastStyleElementInsertedAtTop) {
                head.insertBefore(styleElement, head.firstChild);
            } else if(lastStyleElementInsertedAtTop.nextSibling) {
                head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
            } else {
                head.appendChild(styleElement);
            }
            styleElementsInsertedAtTop.push(styleElement);
        } else if (options.insertAt === "bottom") {
            head.appendChild(styleElement);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }
    
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        if(idx >= 0) {
            styleElementsInsertedAtTop.splice(idx, 1);
        }
    }
    
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        insertStyleElement(options, styleElement);
        return styleElement;
    }
    
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        insertStyleElement(options, linkElement);
        return linkElement;
    }
    
    function addStyle(obj, options) {
        var styleElement, update, remove;
    
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options));
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else if(obj.sourceMap &&
            typeof URL === "function" &&
            typeof URL.createObjectURL === "function" &&
            typeof URL.revokeObjectURL === "function" &&
            typeof Blob === "function" &&
            typeof btoa === "function") {
            styleElement = createLinkElement(options);
            update = updateLink.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
                if(styleElement.href)
                    URL.revokeObjectURL(styleElement.href);
            };
        } else {
            styleElement = createStyleElement(options);
            update = applyToTag.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
            };
        }
    
        update(obj);
    
        return function updateStyle(newObj) {
            if(newObj) {
                if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                    return;
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }
    
    var replaceText = (function () {
        var textStore = [];
    
        return function (index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
        };
    })();
    
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
    
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index]) styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
                styleElement.appendChild(cssNode);
            }
        }
    }
    
    function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
    
        if(media) {
            styleElement.setAttribute("media", media)
        }
    
        if(styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            while(styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    
    function updateLink(linkElement, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;
    
        if(sourceMap) {
            // http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
    
        var blob = new Blob([css], { type: "text/css" });
    
        var oldSrc = linkElement.href;
    
        linkElement.href = URL.createObjectURL(blob);
    
        if(oldSrc)
            URL.revokeObjectURL(oldSrc);
    }


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

    var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
     * @version   3.2.1
     */
    
    (function() {
        "use strict";
        function lib$es6$promise$utils$$objectOrFunction(x) {
          return typeof x === 'function' || (typeof x === 'object' && x !== null);
        }
    
        function lib$es6$promise$utils$$isFunction(x) {
          return typeof x === 'function';
        }
    
        function lib$es6$promise$utils$$isMaybeThenable(x) {
          return typeof x === 'object' && x !== null;
        }
    
        var lib$es6$promise$utils$$_isArray;
        if (!Array.isArray) {
          lib$es6$promise$utils$$_isArray = function (x) {
            return Object.prototype.toString.call(x) === '[object Array]';
          };
        } else {
          lib$es6$promise$utils$$_isArray = Array.isArray;
        }
    
        var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
        var lib$es6$promise$asap$$len = 0;
        var lib$es6$promise$asap$$vertxNext;
        var lib$es6$promise$asap$$customSchedulerFn;
    
        var lib$es6$promise$asap$$asap = function asap(callback, arg) {
          lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
          lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
          lib$es6$promise$asap$$len += 2;
          if (lib$es6$promise$asap$$len === 2) {
            // If len is 2, that means that we need to schedule an async flush.
            // If additional callbacks are queued before the queue is flushed, they
            // will be processed by this flush that we are scheduling.
            if (lib$es6$promise$asap$$customSchedulerFn) {
              lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
            } else {
              lib$es6$promise$asap$$scheduleFlush();
            }
          }
        }
    
        function lib$es6$promise$asap$$setScheduler(scheduleFn) {
          lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
        }
    
        function lib$es6$promise$asap$$setAsap(asapFn) {
          lib$es6$promise$asap$$asap = asapFn;
        }
    
        var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
        var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
        var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
        var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
    
        // test for web worker but not in IE10
        var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
          typeof importScripts !== 'undefined' &&
          typeof MessageChannel !== 'undefined';
    
        // node
        function lib$es6$promise$asap$$useNextTick() {
          // node version 0.10.x displays a deprecation warning when nextTick is used recursively
          // see https://github.com/cujojs/when/issues/410 for details
          return function() {
            process.nextTick(lib$es6$promise$asap$$flush);
          };
        }
    
        // vertx
        function lib$es6$promise$asap$$useVertxTimer() {
          return function() {
            lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
          };
        }
    
        function lib$es6$promise$asap$$useMutationObserver() {
          var iterations = 0;
          var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
          var node = document.createTextNode('');
          observer.observe(node, { characterData: true });
    
          return function() {
            node.data = (iterations = ++iterations % 2);
          };
        }
    
        // web worker
        function lib$es6$promise$asap$$useMessageChannel() {
          var channel = new MessageChannel();
          channel.port1.onmessage = lib$es6$promise$asap$$flush;
          return function () {
            channel.port2.postMessage(0);
          };
        }
    
        function lib$es6$promise$asap$$useSetTimeout() {
          return function() {
            setTimeout(lib$es6$promise$asap$$flush, 1);
          };
        }
    
        var lib$es6$promise$asap$$queue = new Array(1000);
        function lib$es6$promise$asap$$flush() {
          for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
            var callback = lib$es6$promise$asap$$queue[i];
            var arg = lib$es6$promise$asap$$queue[i+1];
    
            callback(arg);
    
            lib$es6$promise$asap$$queue[i] = undefined;
            lib$es6$promise$asap$$queue[i+1] = undefined;
          }
    
          lib$es6$promise$asap$$len = 0;
        }
    
        function lib$es6$promise$asap$$attemptVertx() {
          try {
            var r = require;
            var vertx = __webpack_require__(10);
            lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
            return lib$es6$promise$asap$$useVertxTimer();
          } catch(e) {
            return lib$es6$promise$asap$$useSetTimeout();
          }
        }
    
        var lib$es6$promise$asap$$scheduleFlush;
        // Decide what async method to use to triggering processing of queued callbacks:
        if (lib$es6$promise$asap$$isNode) {
          lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
        } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
          lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
        } else if (lib$es6$promise$asap$$isWorker) {
          lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
        } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
          lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
        } else {
          lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
        }
        function lib$es6$promise$then$$then(onFulfillment, onRejection) {
          var parent = this;
    
          var child = new this.constructor(lib$es6$promise$$internal$$noop);
    
          if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
            lib$es6$promise$$internal$$makePromise(child);
          }
    
          var state = parent._state;
    
          if (state) {
            var callback = arguments[state - 1];
            lib$es6$promise$asap$$asap(function(){
              lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
            });
          } else {
            lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
          }
    
          return child;
        }
        var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
        function lib$es6$promise$promise$resolve$$resolve(object) {
          /*jshint validthis:true */
          var Constructor = this;
    
          if (object && typeof object === 'object' && object.constructor === Constructor) {
            return object;
          }
    
          var promise = new Constructor(lib$es6$promise$$internal$$noop);
          lib$es6$promise$$internal$$resolve(promise, object);
          return promise;
        }
        var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
        var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);
    
        function lib$es6$promise$$internal$$noop() {}
    
        var lib$es6$promise$$internal$$PENDING   = void 0;
        var lib$es6$promise$$internal$$FULFILLED = 1;
        var lib$es6$promise$$internal$$REJECTED  = 2;
    
        var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
    
        function lib$es6$promise$$internal$$selfFulfillment() {
          return new TypeError("You cannot resolve a promise with itself");
        }
    
        function lib$es6$promise$$internal$$cannotReturnOwn() {
          return new TypeError('A promises callback cannot return that same promise.');
        }
    
        function lib$es6$promise$$internal$$getThen(promise) {
          try {
            return promise.then;
          } catch(error) {
            lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
            return lib$es6$promise$$internal$$GET_THEN_ERROR;
          }
        }
    
        function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
          try {
            then.call(value, fulfillmentHandler, rejectionHandler);
          } catch(e) {
            return e;
          }
        }
    
        function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
           lib$es6$promise$asap$$asap(function(promise) {
            var sealed = false;
            var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
              if (sealed) { return; }
              sealed = true;
              if (thenable !== value) {
                lib$es6$promise$$internal$$resolve(promise, value);
              } else {
                lib$es6$promise$$internal$$fulfill(promise, value);
              }
            }, function(reason) {
              if (sealed) { return; }
              sealed = true;
    
              lib$es6$promise$$internal$$reject(promise, reason);
            }, 'Settle: ' + (promise._label || ' unknown promise'));
    
            if (!sealed && error) {
              sealed = true;
              lib$es6$promise$$internal$$reject(promise, error);
            }
          }, promise);
        }
    
        function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
          if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
            lib$es6$promise$$internal$$fulfill(promise, thenable._result);
          } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
            lib$es6$promise$$internal$$reject(promise, thenable._result);
          } else {
            lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
              lib$es6$promise$$internal$$resolve(promise, value);
            }, function(reason) {
              lib$es6$promise$$internal$$reject(promise, reason);
            });
          }
        }
    
        function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
          if (maybeThenable.constructor === promise.constructor &&
              then === lib$es6$promise$then$$default &&
              constructor.resolve === lib$es6$promise$promise$resolve$$default) {
            lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
          } else {
            if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
              lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
            } else if (then === undefined) {
              lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
            } else if (lib$es6$promise$utils$$isFunction(then)) {
              lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
            } else {
              lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
            }
          }
        }
    
        function lib$es6$promise$$internal$$resolve(promise, value) {
          if (promise === value) {
            lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
          } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
            lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }
    
        function lib$es6$promise$$internal$$publishRejection(promise) {
          if (promise._onerror) {
            promise._onerror(promise._result);
          }
    
          lib$es6$promise$$internal$$publish(promise);
        }
    
        function lib$es6$promise$$internal$$fulfill(promise, value) {
          if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
    
          promise._result = value;
          promise._state = lib$es6$promise$$internal$$FULFILLED;
    
          if (promise._subscribers.length !== 0) {
            lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
          }
        }
    
        function lib$es6$promise$$internal$$reject(promise, reason) {
          if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
          promise._state = lib$es6$promise$$internal$$REJECTED;
          promise._result = reason;
    
          lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
        }
    
        function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
          var subscribers = parent._subscribers;
          var length = subscribers.length;
    
          parent._onerror = null;
    
          subscribers[length] = child;
          subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
          subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
    
          if (length === 0 && parent._state) {
            lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
          }
        }
    
        function lib$es6$promise$$internal$$publish(promise) {
          var subscribers = promise._subscribers;
          var settled = promise._state;
    
          if (subscribers.length === 0) { return; }
    
          var child, callback, detail = promise._result;
    
          for (var i = 0; i < subscribers.length; i += 3) {
            child = subscribers[i];
            callback = subscribers[i + settled];
    
            if (child) {
              lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
            } else {
              callback(detail);
            }
          }
    
          promise._subscribers.length = 0;
        }
    
        function lib$es6$promise$$internal$$ErrorObject() {
          this.error = null;
        }
    
        var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
    
        function lib$es6$promise$$internal$$tryCatch(callback, detail) {
          try {
            return callback(detail);
          } catch(e) {
            lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
            return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
          }
        }
    
        function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
          var hasCallback = lib$es6$promise$utils$$isFunction(callback),
              value, error, succeeded, failed;
    
          if (hasCallback) {
            value = lib$es6$promise$$internal$$tryCatch(callback, detail);
    
            if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
              failed = true;
              error = value.error;
              value = null;
            } else {
              succeeded = true;
            }
    
            if (promise === value) {
              lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
              return;
            }
    
          } else {
            value = detail;
            succeeded = true;
          }
    
          if (promise._state !== lib$es6$promise$$internal$$PENDING) {
            // noop
          } else if (hasCallback && succeeded) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else if (failed) {
            lib$es6$promise$$internal$$reject(promise, error);
          } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
            lib$es6$promise$$internal$$fulfill(promise, value);
          } else if (settled === lib$es6$promise$$internal$$REJECTED) {
            lib$es6$promise$$internal$$reject(promise, value);
          }
        }
    
        function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
          try {
            resolver(function resolvePromise(value){
              lib$es6$promise$$internal$$resolve(promise, value);
            }, function rejectPromise(reason) {
              lib$es6$promise$$internal$$reject(promise, reason);
            });
          } catch(e) {
            lib$es6$promise$$internal$$reject(promise, e);
          }
        }
    
        var lib$es6$promise$$internal$$id = 0;
        function lib$es6$promise$$internal$$nextId() {
          return lib$es6$promise$$internal$$id++;
        }
    
        function lib$es6$promise$$internal$$makePromise(promise) {
          promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
          promise._state = undefined;
          promise._result = undefined;
          promise._subscribers = [];
        }
    
        function lib$es6$promise$promise$all$$all(entries) {
          return new lib$es6$promise$enumerator$$default(this, entries).promise;
        }
        var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
        function lib$es6$promise$promise$race$$race(entries) {
          /*jshint validthis:true */
          var Constructor = this;
    
          if (!lib$es6$promise$utils$$isArray(entries)) {
            return new Constructor(function(resolve, reject) {
              reject(new TypeError('You must pass an array to race.'));
            });
          } else {
            return new Constructor(function(resolve, reject) {
              var length = entries.length;
              for (var i = 0; i < length; i++) {
                Constructor.resolve(entries[i]).then(resolve, reject);
              }
            });
          }
        }
        var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
        function lib$es6$promise$promise$reject$$reject(reason) {
          /*jshint validthis:true */
          var Constructor = this;
          var promise = new Constructor(lib$es6$promise$$internal$$noop);
          lib$es6$promise$$internal$$reject(promise, reason);
          return promise;
        }
        var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
    
    
        function lib$es6$promise$promise$$needsResolver() {
          throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
        }
    
        function lib$es6$promise$promise$$needsNew() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }
    
        var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
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
          var promise = new Promise(function(resolve, reject) {
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
              var xhr = new XMLHttpRequest();
    
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
        function lib$es6$promise$promise$$Promise(resolver) {
          this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
          this._result = this._state = undefined;
          this._subscribers = [];
    
          if (lib$es6$promise$$internal$$noop !== resolver) {
            typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
            this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
          }
        }
    
        lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
        lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
        lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
        lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
        lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
        lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
        lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
    
        lib$es6$promise$promise$$Promise.prototype = {
          constructor: lib$es6$promise$promise$$Promise,
    
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
          var result;
    
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
          var author, books;
    
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
          then: lib$es6$promise$then$$default,
    
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
          'catch': function(onRejection) {
            return this.then(null, onRejection);
          }
        };
        var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
        function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
          this._instanceConstructor = Constructor;
          this.promise = new Constructor(lib$es6$promise$$internal$$noop);
    
          if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
            lib$es6$promise$$internal$$makePromise(this.promise);
          }
    
          if (lib$es6$promise$utils$$isArray(input)) {
            this._input     = input;
            this.length     = input.length;
            this._remaining = input.length;
    
            this._result = new Array(this.length);
    
            if (this.length === 0) {
              lib$es6$promise$$internal$$fulfill(this.promise, this._result);
            } else {
              this.length = this.length || 0;
              this._enumerate();
              if (this._remaining === 0) {
                lib$es6$promise$$internal$$fulfill(this.promise, this._result);
              }
            }
          } else {
            lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
          }
        }
    
        function lib$es6$promise$enumerator$$validationError() {
          return new Error('Array Methods must be provided an Array');
        }
    
        lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
          var length  = this.length;
          var input   = this._input;
    
          for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
            this._eachEntry(input[i], i);
          }
        };
    
        lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
          var c = this._instanceConstructor;
          var resolve = c.resolve;
    
          if (resolve === lib$es6$promise$promise$resolve$$default) {
            var then = lib$es6$promise$$internal$$getThen(entry);
    
            if (then === lib$es6$promise$then$$default &&
                entry._state !== lib$es6$promise$$internal$$PENDING) {
              this._settledAt(entry._state, i, entry._result);
            } else if (typeof then !== 'function') {
              this._remaining--;
              this._result[i] = entry;
            } else if (c === lib$es6$promise$promise$$default) {
              var promise = new c(lib$es6$promise$$internal$$noop);
              lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
              this._willSettleAt(promise, i);
            } else {
              this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
            }
          } else {
            this._willSettleAt(resolve(entry), i);
          }
        };
    
        lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
          var promise = this.promise;
    
          if (promise._state === lib$es6$promise$$internal$$PENDING) {
            this._remaining--;
    
            if (state === lib$es6$promise$$internal$$REJECTED) {
              lib$es6$promise$$internal$$reject(promise, value);
            } else {
              this._result[i] = value;
            }
          }
    
          if (this._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(promise, this._result);
          }
        };
    
        lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
          var enumerator = this;
    
          lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
            enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
          }, function(reason) {
            enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
          });
        };
        function lib$es6$promise$polyfill$$polyfill() {
          var local;
    
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
    
          if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
            return;
          }
    
          local.Promise = lib$es6$promise$promise$$default;
        }
        var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
    
        var lib$es6$promise$umd$$ES6Promise = {
          'Promise': lib$es6$promise$promise$$default,
          'polyfill': lib$es6$promise$polyfill$$default
        };
    
        /* global define:true module:true window: true */
        if ("function" === 'function' && __webpack_require__(11)['amd']) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module !== 'undefined' && module['exports']) {
          module['exports'] = lib$es6$promise$umd$$ES6Promise;
        } else if (typeof this !== 'undefined') {
          this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
        }
    
        lib$es6$promise$polyfill$$default();
    }).call(this);
    
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), (function() { return this; }()), __webpack_require__(9)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

    // shim for using process in browser
    
    var process = module.exports = {};
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
        var timeout = setTimeout(cleanUpNextTick);
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
        clearTimeout(timeout);
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
            setTimeout(drainQueue, 0);
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
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports) {

    module.exports = function(module) {
        if(!module.webpackPolyfill) {
            module.deprecate = function() {};
            module.paths = [];
            // module.parent = undefined by default
            module.children = [];
            module.webpackPolyfill = 1;
        }
        return module;
    }


/***/ },
/* 10 */
/***/ function(module, exports) {

    /* (ignored) */

/***/ },
/* 11 */
/***/ function(module, exports) {

    module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 12 */
/***/ function(module, exports) {

    ; (function(win, lib) {
      var doc = win.document
      var docEl = doc.documentElement
      var metaEl = doc.querySelector('meta[name="viewport"]')
      var flexibleEl = doc.querySelector('meta[name="flexible"]')
      var dpr = 0
      var scale = 0
      var tid
      var flexible = lib.flexible || (lib.flexible = {})
      
      if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例')
        var match = metaEl.getAttribute('content')
          .match(/initial\-scale=([\d\.]+)/)
        if (match) {
          scale = parseFloat(match[1])
          dpr = parseInt(1 / scale)
        }
      } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content')
        if (content) {
          var initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
          var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
          if (initialDpr) {
            dpr = parseFloat(initialDpr[1])
            scale = parseFloat((1 / dpr).toFixed(2))    
          }
          if (maximumDpr) {
            dpr = parseFloat(maximumDpr[1])
            scale = parseFloat((1 / dpr).toFixed(2))    
          }
        }
      }
    
      if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi)
        var isIPhone = win.navigator.appVersion.match(/iphone/gi)
        var devicePixelRatio = win.devicePixelRatio
        if (isIPhone) {
          // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
            dpr = 3
          } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
            dpr = 2
          } else {
            dpr = 1
          }
        } else {
          // 其他设备下，仍旧使用1倍的方案
          dpr = 1
        }
        scale = 1 / dpr
      }
    
      docEl.setAttribute('data-dpr', dpr)
      if (!metaEl) {
        metaEl = doc.createElement('meta')
        metaEl.setAttribute('name', 'viewport')
        metaEl.setAttribute(
          'content',
          'initial-scale='
            + scale + ', maximum-scale='
            + scale + ', minimum-scale='
            + scale + ', user-scalable=no'
          )
        if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl)
        } else {
          var wrap = doc.createElement('div')
          wrap.appendChild(metaEl)
          doc.write(wrap.innerHTML)
        }
      }
    
      function refreshRem(){
        var width = docEl.getBoundingClientRect().width
        if (width / dpr > 540) {
          width = 540 * dpr
        }
        var rem = width / 10
        docEl.style.fontSize = rem + 'px'
        flexible.rem = win.rem = rem
      }
    
      win.addEventListener('resize', function() {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }, false)
      win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
          clearTimeout(tid)
          tid = setTimeout(refreshRem, 300)
        }
      }, false)
    
      if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px'
      } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
          doc.body.style.fontSize = 12 * dpr + 'px'
        }, false)
      }
      
      refreshRem()
    
      flexible.dpr = win.dpr = dpr
      flexible.refreshRem = refreshRem
      flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem
        if (typeof d === 'string' && d.match(/rem$/)) {
          val += 'px'
        }
        return val
      }
      flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem
        if (typeof d === 'string' && d.match(/px$/)) {
          val += 'rem'
        }
        return val
      }
    
    })(window, window['lib'] || (window['lib'] = {}))

/***/ },
/* 13 */
/***/ function(module, exports) {

    'use strict'
    
    var config = {
    
      weexVersion: '0.5.0',
    
      debug: false
    
    }
    
    module.exports = config

/***/ },
/* 14 */
/***/ function(module, exports) {

    'use strict'
    
    function loadByXHR(config, callback) {
      if (!config.source) {
        callback(new Error('xhr loader: missing config.source.'))
      }
      var xhr = new XMLHttpRequest()
      xhr.open('GET', config.source)
      xhr.onload = function () {
        callback(null, this.responseText)
      }
      xhr.onerror = function (error) {
        callback(error)
      }
      xhr.send()
    }
    
    function loadByJsonp(config, callback) {
      if (!config.source) {
        callback(new Error('jsonp loader: missing config.source.'))
      }
      var callbackName = config.jsonpCallback || 'weexJsonpCallback'
      window[callbackName] = function (code) {
        if (code) {
          callback(null, code)
        } else {
          callback(new Error('load by jsonp error'))
        }
      }
      var script = document.createElement('script')
      script.src = decodeURIComponent(config.source)
      script.type = 'text/javascript'
      document.body.appendChild(script)
    }
    
    function loadBySourceCode(config, callback) {
      // src is the jsbundle.
      // no need to fetch from anywhere.
      if (config.source) {
        callback(null, config.source)
      } else {
        callback(new Error('source code laoder: missing config.source.'))
      }
    }
    
    var callbackMap = {
      xhr: loadByXHR,
      jsonp: loadByJsonp,
      source: loadBySourceCode
    }
    
    function load(options, callback) {
      var loadFn = callbackMap[options.loader]
      loadFn(options, callback)
    }
    
    function registerLoader(name, loaderFunc) {
      if (typeof loaderFunc === 'function') {
        callbackMap[name] = loaderFunc
      }
    }
    
    module.exports = {
      load: load,
      registerLoader: registerLoader
    }


/***/ },
/* 15 */
/***/ function(module, exports) {

    'use strict'
    
    var WEAPP_STYLE_ID = 'weapp-style'
    
    var _isWebpSupported = false
    
    ; (function isSupportWebp() {
      try {
        var webP = new Image()
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdA'
                  + 'SoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
        webP.onload = function () {
          if (webP.height === 2) {
            _isWebpSupported = true
          }
        }
      } catch (e) {
        // do nothing.
      }
    })()
    
    function extend(to, from) {
      for (var key in from) {
        to[key] = from[key]
      }
      return to
    }
    
    function isArray(arr) {
      return Array.isArray
        ? Array.isArray(arr)
        : (Object.prototype.toString.call(arr) === '[object Array]')
    }
    
    function appendStyle(css, styleId, replace) {
      var style = document.getElementById(styleId)
      if (style && replace) {
        style.parentNode.removeChild(style)
        style = null
      }
      if (!style) {
        style = document.createElement('style')
        style.type = 'text/css'
        styleId && (style.id = styleId)
        document.getElementsByTagName('head')[0].appendChild(style)
      }
      style.appendChild(document.createTextNode(css))
    }
    
    function getUniqueFromArray(arr) {
      if (!isArray(arr)) {
        return []
      }
      var res = []
      var unique = {}
      var val
      for (var i = 0, l = arr.length; i < l; i++) {
        val = arr[i]
        if (unique[val]) {
          continue
        }
        unique[val] = true
        res.push(val)
      }
      return res
    }
    
    function transitionize(element, props) {
      var transitions = []
      for (var key in props) {
        transitions.push(key + ' ' + props[key])
      }
      element.style.transition = transitions.join(', ')
      element.style.webkitTransition = transitions.join(', ')
    }
    
    function detectWebp() {
      return _isWebpSupported
    }
    
    function getRandom(num) {
      var _defaultNum = 10
      if (typeof num !== 'number' || num <= 0) {
        num = _defaultNum
      }
      var _max = Math.pow(10, num)
      return Math.floor(Date.now() + Math.random() * _max) % _max
    }
    
    function getRgb(color) {
      var match
      color = color + ''
      if (match = color.match(/#(\d{2})(\d{2})(\d{2})/)) {
        return {
          r: parseInt(match[1], 16),
          g: parseInt(match[2], 16),
          b: parseInt(match[3], 16)
        }
      }
      if (match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)) {
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3])
        }
      }
    }
    
    // direction: 'l' | 'r', default is 'r'
    // num: how many times to loop, should be a positive integer
    function loopArray(arr, num, direction) {
      if (!isArray(arr)) {
        return
      }
      var isLeft = (direction + '').toLowerCase() === 'l'
      var len = arr.length
      num = num % len
      if (num < 0) {
        num = -num
        isLeft = !isLeft
      }
      if (num === 0) {
        return arr
      }
      var res, lp, rp
      if (isLeft) {
        lp = arr.slice(0, num)
        rp = arr.slice(num)
      } else {
        lp = arr.slice(0, len - num)
        rp = arr.slice(len - num)
      }
      return rp.concat(lp)
    }
    
    // pad a integer number with zeros on the left.
    // example: fillInt(12, 3) -> '012'
    // - num: the number to pad
    // - len: the specified length
    function leftPad(num, len) {
      if (len <= 0) {
        return num
      }
      var numLen = (num + '').length
      if (numLen >= len) {
        return num
      }
      return new Array(len - numLen + 1).join('0') + num
    }
    
    // get DateStr with specified separator like '2016-06-03'
    function getDateStr(separator) {
      var dt = new Date()
      var y = dt.getFullYear()
      var m = leftPad(dt.getMonth() + 1, 2)
      var d = leftPad(dt.getDate(), 2)
      return [y, m, d].join(separator || '')
    }
    
    module.exports = {
      extend: extend,
      isArray: isArray,
      appendStyle: appendStyle,
      getUniqueFromArray: getUniqueFromArray,
      transitionize: transitionize,
      detectWebp: detectWebp,
      getRandom: getRandom,
      getRgb: getRgb,
      loopArray: loopArray,
      leftPad: leftPad,
      getDateStr: getDateStr
    }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var extend = __webpack_require__(15).extend
    var isArray = __webpack_require__(15).isArray
    var ComponentManager = __webpack_require__(17)
    
    // for jsframework to register modules.
    var _registerModules = function (config) {
      if (isArray(config)) {
        for (var i = 0, l = config.length; i < l; i++) {
          window.registerModules(config[i])
        }
      } else {
        window.registerModules(config)
      }
    }
    
    var protocol = {
    
      // weex instances
      _instances: {},
    
      // api meta info
      _meta: {},
    
      // Weex.registerApiModule used this to register and access apiModules.
      apiModule: {},
    
      injectWeexInstance: function (instance) {
        this._instances[instance.instanceId] = instance
      },
    
      getWeexInstance: function (instanceId) {
        return this._instances[instanceId]
      },
    
      // get the api method meta info array for the module.
      getApiModuleMeta: function (moduleName) {
        var metaObj = {}
        metaObj[moduleName] = this._meta[moduleName]
        return metaObj
      },
    
      // Set meta info for a api module.
      // If there is a same named api, just replace it.
      // opts:
      // - metaObj: meta object like
      // {
      //    dom: [{
      //      name: 'addElement',
      //      args: ['string', 'object']
      //    }]
      // }
      setApiModuleMeta: function (metaObj) {
        var moduleName
        for (var k in metaObj) {
          if (metaObj.hasOwnProperty(k)) {
            moduleName = k
          }
        }
        var metaArray = this._meta[moduleName]
        if (!metaArray) {
          this._meta[moduleName] = metaObj[moduleName]
        } else {
          var nameObj = {}
          metaObj[moduleName].forEach(function (api) {
            nameObj[api.name] = api
          })
          metaArray.forEach(function (api, i) {
            if (nameObj[api.name]) {
              metaArray[i] = nameObj[api.name]
              delete nameObj[api.name]
            }
          })
          for (var k in metaObj) {
            if (metaObj.hasOwnProperty(k)) {
              metaArray.push(metaObj[k])
            }
          }
        }
        this._meta[moduleName] = metaObj[moduleName]
      },
    
      // Set meta info for a single api.
      // opts:
      //  - moduleName: api module name.
      //  - meta: a meta object like:
      //  {
      //    name: 'addElement',
      //    args: ['string', 'object']
      //  }
      setApiMeta: function (moduleName, meta) {
        var metaArray = this._meta[moduleName]
        if (!metaArray) {
          this._meta[moduleName] = [meta]
        } else {
          var metaIdx = -1
          metaArray.forEach(function (api, i) {
            if (meta.name === name) {
              metaIdx = i
            }
          })
          if (metaIdx !== -1) {
            metaArray[metaIdx] = meta
          } else {
            metaArray.push(meta)
          }
        }
      }
    }
    
    _registerModules([{
      modal: [{
        name: 'toast',
        args: ['object', 'function']
      }, {
        name: 'alert',
        args: ['object', 'function']
      }, {
        name: 'confirm',
        args: ['object', 'function']
      }, {
        name: 'prompt',
        args: ['object', 'function']
      }]
    }, {
      animation: [{
        name: 'transition',
        args: ['string', 'object', 'function']
      }]
    }])
    
    module.exports = protocol


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var config = __webpack_require__(13)
    var FrameUpdater = __webpack_require__(18)
    var AppearWatcher = __webpack_require__(19)
    var utils = __webpack_require__(15)
    var LazyLoad = __webpack_require__(20)
    var animation = __webpack_require__(23)
    
    var RENDERING_INDENT = 800
    
    var _instanceMap = {}
    var typeMap = {}
    var scrollableTypes = [
      'scroller',
      'hscroller',
      'vscroller',
      'list',
      'hlist',
      'vlist'
    ]
    
    function ComponentManager(instance) {
      this.instanceId = instance.instanceId
      this.weexInstance = instance
      this.componentMap = {}
      _instanceMap[this.instanceId] = this
    }
    
    ComponentManager.getInstance = function (instanceId) {
      return _instanceMap[instanceId]
    }
    
    ComponentManager.getWeexInstance = function (instanceId) {
      return _instanceMap[instanceId].weexInstance
    }
    
    ComponentManager.registerComponent = function (type, definition) {
      typeMap[type] = definition
    }
    
    ComponentManager.getScrollableTypes = function () {
      return scrollableTypes
    }
    
    ComponentManager.prototype = {
    
      // Fire a event 'renderbegin'/'renderend' on body element.
      rendering: function () {
        function _renderingEnd() {
          // get weex instance root
          window.dispatchEvent(new Event('renderend'))
          this._renderingTimer = null
        }
        if (this._renderingTimer) {
          clearTimeout(this._renderingTimer)
          this._renderingTimer = setTimeout(
            _renderingEnd.bind(this),
            RENDERING_INDENT
          )
        } else {
          window.dispatchEvent(new Event('renderbegin'))
          this._renderingTimer = setTimeout(
            _renderingEnd.bind(this),
            RENDERING_INDENT
          )
        }
      },
    
      getElementByRef: function (ref) {
        return this.componentMap[ref]
      },
    
      removeElementByRef: function (ref) {
        var cmp
        var self = this
        if (!ref || !(cmp = this.componentMap[ref])) {
          return
        }
        // remove from this.componentMap cursively
        (function _removeCursively(_ref) {
          var child = self.componentMap[_ref]
          var listeners = child._listeners
          var children = child.data.children
          if (children && children.length) {
            for (var i = 0, l = children.length; i < l; i++) {
              _removeCursively(children[i].ref)
            }
          }
          // remove events from _ref component
          if (listeners) {
            for (var type in listeners) {
              child.node.removeEventListener(type, listeners[type])
            }
          }
          delete child._listeners
          delete child.node._listeners
          // remove _ref component
          delete self.componentMap[_ref]
        })(ref)
    
      },
    
      createElement: function (data, nodeType) {
        var ComponentType = typeMap[data.type]
        if (!ComponentType) {
          ComponentType = typeMap['container']
        }
    
        var ref = data.ref
        var component = new ComponentType(data, nodeType)
    
        this.componentMap[ref] = component
        component.node.setAttribute('data-ref', ref)
    
        return component
      },
    
      /**
       * createBody: generate root component
       * @param  {object} element
       */
      createBody: function (element) {
    
        // TODO: creatbody on document.body
        // no need to create a extra div
        var root, body, nodeType
        if (this.componentMap['_root']) {
          return
        }
    
        nodeType = element.type
        element.type = 'root'
        element.rootId = this.weexInstance.rootId
        element.ref = '_root'
    
        var root = this.createElement(element, nodeType)
        body = document.querySelector('#' + this.weexInstance.rootId)
              || document.body
        body.appendChild(root.node)
        root._appended = true
      },
    
      appendChild: function (parentRef, data) {
        var parent = this.componentMap[parentRef]
    
        if (this.componentMap[data.ref] || !parent) {
          return
        }
    
        if (parentRef === '_root' && !parent) {
          parent = this.createElement({
            type: 'root',
            rootId: this.weexInstance.rootId,
            ref: '_root'
          })
          parent._appended = true
        }
    
        var child = parent.appendChild(data)
    
        // In some parent component the implementation of method
        // appendChild didn't return the component at all, therefor
        // child maybe a undefined object.
        if (child) {
          child.parentRef = parentRef
        }
    
        if (child && parent._appended) {
          this.handleAppend(child)
        }
      },
    
      appendChildren: function (ref, elements) {
        for (var i = 0; i < elements.length; i++) {
          this.appendChild(ref, elements[i])
        }
      },
    
      removeElement: function (ref) {
        var component = this.componentMap[ref]
    
        // fire event for rendering dom on body elment.
        this.rendering()
    
        if (component && component.parentRef) {
          var parent = this.componentMap[component.parentRef]
          component.onRemove && component.onRemove()
          parent.removeChild(component)
        } else {
          console.warn('ref: ', ref)
        }
      },
    
      moveElement: function (ref, parentRef, index) {
        var component = this.componentMap[ref]
        var newParent = this.componentMap[parentRef]
        var oldParentRef = component.parentRef
        var children, before, i, l
        if (!component || !newParent) {
          console.warn('ref: ', ref)
          return
        }
    
        // fire event for rendering.
        this.rendering()
    
        if (index < -1) {
          index = -1
          console.warn('index cannot be less than -1.')
        }
    
        children = newParent.data.children
        if (children
            && children.length
            && index !== -1
            && index < children.length) {
          before = this.componentMap[newParent.data.children[index].ref]
        }
    
        // remove from oldParent.data.children
        if (oldParentRef && this.componentMap[oldParentRef]) {
          children = this.componentMap[oldParentRef].data.children
          if (children && children.length) {
            for (i = 0, l = children.length; i < l; i++) {
              if (children[i].ref === ref) {
                break
              }
            }
            if (l > i) {
              children.splice(i, 1)
            }
          }
        }
    
        newParent.insertBefore(component, before)
    
        component.onMove && component.onMove(parentRef, index)
    
      },
    
      insertBefore: function (ref, data) {
        var child, before, parent
        before = this.componentMap[ref]
        child = this.componentMap[data.ref]
        before && (parent = this.componentMap[before.parentRef])
        if (child || !parent || !before) {
          return
        }
    
        child = this.createElement(data)
        if (child) {
          child.parentRef = before.parentRef
          parent.insertBefore(child, before)
        } else {
          return
        }
    
        if (this.componentMap[before.parentRef]._appended) {
          this.handleAppend(child)
        }
      },
    
      /**
       * addElement
       * If index is larget than any child's index, the
       * element will be appended behind.
       * @param {string} parentRef
       * @param {obj} element (data of the component)
       * @param {number} index
       */
      addElement: function (parentRef, element, index) {
        var parent, children, before
    
        // fire event for rendering dom on body elment.
        this.rendering()
    
        parent = this.componentMap[parentRef]
        if (!parent) {
          return
        }
        children = parent.data.children
        // -1 means append as the last.
        if (index < -1) {
          index = -1
          console.warn('index cannot be less than -1.')
        }
        if (children && children.length
            && children.length > index
            && index !== -1) {
          this.insertBefore(children[index].ref, element)
        } else {
          this.appendChild(parentRef, element)
        }
      },
    
      clearChildren: function (ref) {
        var component = this.componentMap[ref]
        if (component) {
          component.node.innerHTML = ''
          if (component.data) {
            component.data.children = null
          }
        }
      },
    
      addEvent: function (ref, type) {
        var component
        if (typeof ref === 'string' || typeof ref === 'number') {
          component = this.componentMap[ref]
        } else if (Object.prototype.toString.call(ref).slice(8, -1) === 'Object') {
          component = ref
          ref = component.data.ref
        }
        if (component && component.node) {
          var sender = this.weexInstance.sender
          var listener = sender.fireEvent.bind(sender, ref, type)
          var listeners = component._listeners
          component.node.addEventListener(type, listener, false, false)
          if (!listeners) {
            listeners = component._listeners = {}
            component.node._listeners = {}
          }
          listeners[type] = listener
          component.node._listeners[type] = listener
        }
      },
    
      removeEvent: function (ref, type) {
        var component = this.componentMap[ref]
        var listener = component._listeners[type]
        if (component && listener) {
          component.node.removeEventListener(type, listener)
          component._listeners[type] = null
          component.node._listeners[type] = null
        }
      },
    
      updateAttrs: function (ref, attr) {
        var component = this.componentMap[ref]
        if (component) {
          component.updateAttrs(attr)
          if (component.data.type === 'image' && attr.src) {
            LazyLoad.startIfNeeded(component)
          }
        }
      },
    
      updateStyle: function (ref, style) {
        var component = this.componentMap[ref]
        if (component) {
          component.updateStyle(style)
        }
      },
    
      updateFullAttrs: function (ref, attr) {
        var component = this.componentMap[ref]
        if (component) {
          component.clearAttr()
          component.updateAttrs(attr)
          if (component.data.type === 'image' && attr.src) {
            LazyLoad.startIfNeeded(component)
          }
        }
      },
    
      updateFullStyle: function (ref, style) {
        var component = this.componentMap[ref]
        if (component) {
          component.clearStyle()
          component.updateStyle(style)
        }
      },
    
      handleAppend: function (component) {
        component._appended = true
        component.onAppend && component.onAppend()
    
        // invoke onAppend on children recursively
        var children = component.data.children
        if (children) {
          for (var i = 0; i < children.length; i++) {
            var child = this.componentMap[children[i].ref]
            if (child) {
              this.handleAppend(child)
            }
          }
        }
    
        // watch appear/disappear of the component if needed
        AppearWatcher.watchIfNeeded(component)
    
        // do lazyload if needed
        LazyLoad.startIfNeeded(component)
      },
    
      transition: function (ref, config, callback) {
        var component = this.componentMap[ref]
        animation.transitionOnce(component, config, callback)
      },
    
      renderFinish: function () {
        FrameUpdater.pause()
      }
    }
    
    module.exports = ComponentManager


/***/ },
/* 18 */
/***/ function(module, exports) {

    'use strict'
    
    var raf = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (calllback) {
                setTimeout(calllback, 16)
              }
    
    var rafId
    var observers = []
    var paused = false
    
    var FrameUpdater = {
      start: function () {
        if (rafId) {
          return
        }
    
        rafId = raf(function runLoop() {
          if (!paused) {
            for (var i = 0; i < observers.length; i++) {
              observers[i]()
            }
            raf(runLoop)
          }
        })
      },
    
      isActive: function () {
        return !paused
      },
    
      pause: function () {
        paused = true
        rafId = undefined
      },
    
      resume: function () {
        paused = false
        this.start()
      },
    
      addUpdateObserver: function (observeMethod) {
        observers.push(observeMethod)
      }
    }
    
    module.exports = FrameUpdater


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var utils = __webpack_require__(15)
    
    var componentsInScroller = []
    var componentsOutOfScroller = []
    var listened = false
    var direction = 'up'
    var scrollY = 0
    
    var AppearWatcher = {
      watchIfNeeded: function (component) {
        if (needWatch(component)) {
          if (component.isInScrollable()) {
            componentsInScroller.push(component)
          } else {
            componentsOutOfScroller.push(component)
          }
          if (!listened) {
            listened = true
            // var handler = throttle(onScroll, 25)
            var handler = throttle(onScroll, 100)
            window.addEventListener('scroll', handler, false)
          }
        }
      }
    }
    
    function needWatch(component) {
      var events = component.data.event
      if (events
          && (events.indexOf('appear') != -1
            || events.indexOf('disappear') != -1)) {
        return true
      }
      return false
    }
    
    function onScroll(e) {
      // If the scroll event is dispatched from a scrollable component
      // implemented through scrollerjs, then the appear/disappear events
      // should be treated specially by handleScrollerScroll.
      if (e.originalType === 'scrolling') {
        handleScrollerScroll(e)
      } else {
        handleWindowScroll()
      }
    }
    
    function handleScrollerScroll(e) {
      var cmps = componentsInScroller
      var len = cmps.length
      direction = e.direction
      for (var i = 0; i < len; i++) {
        var component = cmps[i]
        var appear = isComponentInScrollerAppear(component)
        if (appear && !component._appear) {
          component._appear = true
          fireEvent(component, 'appear')
        } else if (!appear && component._appear) {
          component._appear = false
          fireEvent(component, 'disappear')
        }
      }
    }
    
    function handleWindowScroll() {
      var y = window.scrollY
      direction = y >= scrollY ? 'up' : 'down'
      scrollY = y
    
      var len = componentsOutOfScroller.length
      if (len === 0) {
        return
      }
      for (var i = 0; i < len; i++) {
        var component = componentsOutOfScroller[i]
        var appear = isComponentInWindow(component)
        if (appear && !component._appear) {
          component._appear = true
          fireEvent(component, 'appear')
        } else if (!appear && component._appear) {
          component._appear = false
          fireEvent(component, 'disappear')
        }
      }
    }
    
    function isComponentInScrollerAppear(component) {
      var parentScroller = component._parentScroller
      var cmpRect = component.node.getBoundingClientRect()
      if (!isComponentInWindow(component)) {
        return false
      }
      while (parentScroller) {
        var parentRect = parentScroller.node.getBoundingClientRect()
        if (!(cmpRect.right > parentRect.left
            && cmpRect.left < parentRect.right
            && cmpRect.bottom > parentRect.top
            && cmpRect.top < parentRect.bottom)) {
          return false
        }
        parentScroller = parentScroller._parentScroller
      }
      return true
    }
    
    function isComponentInWindow(component) {
      var rect = component.node.getBoundingClientRect()
      return rect.right > 0 && rect.left < window.innerWidth &&
             rect.bottom > 0 && rect.top < window.innerHeight
    }
    
    function fireEvent(component, type) {
      var evt = document.createEvent('HTMLEvents')
      var data = { direction: direction }
      evt.initEvent(type, false, false)
      evt.data = data
      utils.extend(evt, data)
      component.node.dispatchEvent(evt)
    }
    
    function throttle(func, wait) {
      var context, args, result
      var timeout = null
      var previous = 0
      var later = function () {
        previous = Date.now()
        timeout = null
        result = func.apply(context, args)
      }
      return function () {
        var now = Date.now()
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0) {
          clearTimeout(timeout)
          timeout = null
          previous = now
          result = func.apply(context, args)
        } else if (!timeout) {
          timeout = setTimeout(later, remaining)
        }
        return result
      }
    }
    
    module.exports = AppearWatcher

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(21)
    
    var lazyloadTimer
    
    var LazyLoad = {
      makeImageLazy: function (image, src) {
        image.removeAttribute('img-src')
        image.removeAttribute('i-lazy-src')
        image.removeAttribute('src')
        image.setAttribute('img-src', src)
        // should replace 'src' with 'img-src'. but for now lib.img.fire is
        // not working for the situation that the appear event has been
        // already triggered.
        // image.setAttribute('src', src)
        // image.setAttribute('img-src', src)
        this.fire()
      },
    
      // we don't know when all image are appended
      // just use setTimeout to do delay lazyload
      //
      // -- actually everytime we add a element or update styles,
      // the component manager will call startIfNeed to fire
      // lazyload once again in the handleAppend function. so there
      // is no way that any image element can miss it. See source
      // code in componentMangager.js.
      startIfNeeded: function (component) {
        var that = this
        if (component.data.type === 'image') {
          if (!lazyloadTimer) {
            lazyloadTimer = setTimeout(function () {
              that.fire()
              clearTimeout(lazyloadTimer)
              lazyloadTimer = null
            }, 16)
          }
        }
      },
    
      loadIfNeeded: function (elementScope) {
        var notPreProcessed = elementScope.querySelectorAll('[img-src]')
        var that = this
        // image elements which have attribute 'i-lazy-src' were elements
        // that had been preprocessed by lib-img-core, but not loaded yet, and
        // must be loaded when 'appear' events were fired. It turns out the
        // 'appear' event was not fired correctly in the css-translate-transition
        // situation, so 'i-lazy-src' must be checked and lazyload must be
        // fired manually.
        var preProcessed = elementScope.querySelectorAll('[i-lazy-src]')
        if (notPreProcessed.length > 0 || preProcessed.length > 0) {
          that.fire()
        }
      },
    
      // fire lazyload.
      fire: function () {
        lib.img.fire()
      }
    
    }
    
    module.exports = LazyLoad


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

    "undefined"==typeof window&&(window={ctrl:{},lib:{}}),!window.ctrl&&(window.ctrl={}),!window.lib&&(window.lib={}),function(t,i){function e(t,i){i&&("IMG"==t.nodeName.toUpperCase()?t.setAttribute("src",i):t.style.backgroundImage='url("'+i+'")')}function a(){r=i.appear.init({cls:"imgtmp",once:!0,x:o.lazyWidth,y:o.lazyHeight,onAppear:function(t){var i=this;e(i,i.getAttribute("i-lazy-src")),i.removeAttribute("i-lazy-src")}})}__webpack_require__(22);var r,A={},o={dataSrc:"img-src",lazyHeight:0,lazyWidth:0};A.logConfig=function(){console.log("lib-img Config\n",o)},A.fire=function(){r||a();var t="i_"+Date.now()%1e5,i=document.querySelectorAll("["+o.dataSrc+"]");[].forEach.call(i,function(i){"false"==i.dataset.lazy&&"true"!=i.dataset.lazy?e(i,processSrc(i,i.getAttribute(o.dataSrc))):(i.classList.add(t),i.setAttribute("i-lazy-src",i.getAttribute(o.dataSrc))),i.removeAttribute(o.dataSrc)}),r.bind("."+t),r.fire()},A.defaultSrc="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",i.img=A,module.exports=A}(window,window.lib||(window.lib={}));

/***/ },
/* 22 */
/***/ function(module, exports) {

    "undefined"==typeof window&&(window={ctrl:{},lib:{}}),!window.ctrl&&(window.ctrl={}),!window.lib&&(window.lib={}),function(n,e){function i(){d=w.createEvent("HTMLEvents"),v=w.createEvent("HTMLEvents"),d.initEvent("_appear",!1,!0),v.initEvent("_disappear",!1,!0)}function a(t,n){var e,i,a,s=(Date.now(),0),o=null,r=function(){s=Date.now(),o=null,t.apply(e,i)};return function(){var l=Date.now();e=this,i=arguments;var c=n-(l-s);return 0>=c||c>=n?(clearTimeout(o),o=null,a=t.apply(e,i)):null==o&&(o=setTimeout(r,c)),a}}function s(n,e){var n,i,a,s;if(n)return e||(e={x:0,y:0}),n!=window?(n=n.getBoundingClientRect(),i=n.left,t=n.top,a=n.right,s=n.bottom):(i=0,t=0,a=i+n.innerWidth,s=t+n.innerHeight),{left:i,top:t,right:a+e.x,bottom:s+e.y}}function o(t,n){var e=n.right>t.left&&n.left<t.right,i=n.bottom>t.top&&n.top<t.bottom;return e&&i}function r(t,n){var e="none",i=t.left-n.left,a=t.top-n.top;return 0==a&&(e=0!=i?i>0?"left":"right":"none"),0==i&&(e=0!=a?a>0?"up":"down":"none"),e}function l(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function c(){var t=this,n=a(function(){f.apply(t,arguments)},this.options.wait);this.__handle&&(this.container.removeEventListener("scroll",this.__handle),this.__handle=null),this.__handle=n,this.container.addEventListener("scroll",n,!1),this.container.addEventListener("resize",function(n){f.apply(t,arguments)},!1),this.container.addEventListener("animationEnd",function(){f.apply(t,arguments)},!1),this.container.addEventListener("webkitAnimationEnd",function(){f.apply(t,arguments)},!1),this.container.addEventListener("transitionend",function(){f.apply(t,arguments)},!1)}function p(t){var n=this,e=this.options.container;if("string"==typeof e?this.container=w.querySelector(e):this.container=e,this.container==window)var i=w.querySelectorAll(t);else var i=this.container.querySelectorAll(t);var i=[].slice.call(i,null);return i=i.filter(function(t){return"1"==t.dataset.bind?(delete t._hasAppear,delete t._hasDisAppear,delete t._appear,t.classList.remove(n.options.cls),!1):!0})}function h(t){var n=this;t&&t.length>0&&[].forEach.call(t,function(t){t._eleOffset=s(t),t.classList.remove(n.options.cls),t.dataset.bind=1})}function f(){var t=this.container,n=this.appearWatchElements,e=this.options.onAppear,i=this.options.onDisappear,a=s(t,{x:this.options.x,y:this.options.y}),l=this.options.once,c=arguments[0]||{};n&&n.length>0&&[].forEach.call(n,function(t,n){var p=s(t),h=r(t._eleOffset,p);t._eleOffset=p;var f=o(a,p),u=t._appear,w=t._hasAppear,E=t._hasDisAppear;d.data={direction:h},v.data={direction:h},f&&!u?(l&&!w||!l)&&(e&&e.call(t,c),t.dispatchEvent(d),t._hasAppear=!0,t._appear=!0):!f&&u&&(l&&!E||!l)&&(i&&i.call(t,c),t.dispatchEvent(v),t._hasDisAppear=!0,t._appear=!1)})}function u(t){l(this.options,t||(t={})),this.appearWatchElements=this.appearWatchElements||p.call(this,"."+this.options.cls),h.call(this,this.appearWatchElements),c.call(this)}var d,v,w=document,E=function(){u.apply(this,arguments)},_={instances:[],init:function(t){var n={options:{container:window,wait:100,x:0,y:0,cls:"lib-appear",once:!1,onReset:function(){},onAppear:function(){},onDisappear:function(){}},container:null,appearWatchElements:null,bind:function(t){var n=this.options.cls;if("string"==typeof t){var e=p.call(this,t);[].forEach.call(e,function(t,e){t.classList.contains(n)||t.classList.add(n)})}else{if(1!=t.nodeType||!this.container.contains(t))return this;t.classList.contains(n)||t.classList.add(n)}var i=p.call(this,"."+this.options.cls);return this.appearWatchElements=this.appearWatchElements.concat(i),h.call(this,i),this},reset:function(t){return u.call(this,t),this.appearWatchElements.forEach(function(t){delete t._hasAppear,delete t._hasDisAppear,delete t._appear}),this},fire:function(){this.appearWatchElements||(this.appearWatchElements=[]);var t=p.call(this,"."+this.options.cls);return this.appearWatchElements=this.appearWatchElements.concat(t),h.call(this,t),f.call(this),this}};E.prototype=n;var e=new E(t);return this.instances.push(e),e},fireAll:function(){var t=this.instances;t.forEach(function(t){t.fire()})}};i(),e.appear=_}(window,window.lib||(window.lib={}));

/***/ },
/* 23 */
/***/ function(module, exports) {

    'use strict'
    
    module.exports = {
    
      /**
       * config:
       *   - styles
       *   - duration [Number] milliseconds(ms)
       *   - timingFunction [string]
       *   - dealy [Number] milliseconds(ms)
       */
      transitionOnce: function (comp, config, callback) {
        var styles = config.styles || {}
        var duration = config.duration || 1000 // ms
        var timingFunction = config.timingFunction || 'ease'
        var delay = config.delay || 0  // ms
        var transitionValue = 'all ' + duration + 'ms '
            + timingFunction + ' ' + delay + 'ms'
        var dom = comp.node
        var transitionEndHandler = function (e) {
          e.stopPropagation()
          dom.removeEventListener('webkitTransitionEnd', transitionEndHandler)
          dom.removeEventListener('transitionend', transitionEndHandler)
          dom.style.transition = ''
          dom.style.webkitTransition = ''
          callback()
        }
        dom.style.transition = transitionValue
        dom.style.webkitTransition = transitionValue
        dom.addEventListener('webkitTransitionEnd', transitionEndHandler)
        dom.addEventListener('transitionend', transitionEndHandler)
        comp.updateStyle(styles)
      }
    
    }

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var config = __webpack_require__(13)
    var utils = __webpack_require__(15)
    var ComponentManager = __webpack_require__(17)
    var flexbox = __webpack_require__(25)
    var valueFilter = __webpack_require__(26)
    __webpack_require__(27)
    
    function Component(data, nodeType) {
      this.data = data
      this.node = this.create(nodeType)
    
      this.createChildren()
      this.updateAttrs(this.data.attr)
      // issue: when add element to a list in lifetime hook 'ready', the
      // styles is set to the classStyle, not style. This is a issue
      // that jsframework should do something about.
      var classStyle = this.data.classStyle
      classStyle && this.updateStyle(this.data.classStyle)
      this.updateStyle(this.data.style)
      this.bindEvents(this.data.event)
    }
    
    Component.prototype = {
    
      create: function (nodeType) {
        var node = document.createElement(nodeType || 'div')
        return node
      },
    
      getComponentManager: function () {
        return ComponentManager.getInstance(this.data.instanceId)
      },
    
      getParent: function () {
        return this.getComponentManager().componentMap[this.parentRef]
      },
    
      getParentScroller: function () {
        if (this.isInScrollable()) {
          return this._parentScroller
        }
        return null
      },
    
      getRootScroller: function () {
        if (this.isInScrollable()) {
          var scroller = this._parentScroller
          var parent = scroller._parentScroller
          while (parent) {
            scroller = parent
            parent = scroller._parentScroller
          }
          return scroller
        }
        return null
      },
    
      getRootContainer: function () {
        var root = this.getComponentManager().weexInstance.getRoot()
          || document.body
        return root
      },
    
      isScrollable: function () {
        var t = this.data.type
        return ComponentManager.getScrollableTypes().indexOf(t) !== -1
      },
    
      isInScrollable: function () {
        if (typeof this._isInScrollable === 'boolean') {
          return this._isInScrollable
        }
        var parent = this.getParent()
        if (parent
            && (typeof parent._isInScrollable !== 'boolean')
            && !parent.isScrollable()) {
          if (parent.data.ref === '_root') {
            this._isInScrollable = false
            return false
          }
          this._isInScrollable = parent.isInScrollable()
          this._parentScroller = parent._parentScroller
          return this._isInScrollable
        }
        if (parent && typeof parent._isInScrollable === 'boolean') {
          this._isInScrollable = parent._isInScrollable
          this._parentScroller = parent._parentScroller
          return this._isInScrollable
        }
        if (parent && parent.isScrollable()) {
          this._isInScrollable = true
          this._parentScroller = parent
          return true
        }
        if (!parent) {
          console && console.error('isInScrollable - parent not exist.')
          return
        }
      },
    
      createChildren: function () {
        var children = this.data.children
        var parentRef = this.data.ref
        var componentManager = this.getComponentManager()
        if (children && children.length) {
          var fragment = document.createDocumentFragment()
          var isFlex = false
          for (var i = 0; i < children.length; i++) {
            children[i].instanceId = this.data.instanceId
            children[i].scale = this.data.scale
            var child = componentManager.createElement(children[i])
            fragment.appendChild(child.node)
            child.parentRef = parentRef
            if (!isFlex
                && child.data.style
                && child.data.style.hasOwnProperty('flex')
              ) {
              isFlex = true
            }
          }
          this.node.appendChild(fragment)
        }
      },
    
      // @todo: changed param data to child
      appendChild: function (data) {
        var children = this.data.children
        var componentManager = this.getComponentManager()
        var child = componentManager.createElement(data)
        this.node.appendChild(child.node)
        // update this.data.children
        if (!children || !children.length) {
          this.data.children = [data]
        } else {
          children.push(data)
        }
    
        return child
      },
    
      insertBefore: function (child, before) {
        var children = this.data.children
        var i = 0
        var l
        var isAppend = false
    
        // update this.data.children
        if (!children || !children.length || !before) {
          isAppend = true
        } else {
          for (l = children.length; i < l; i++) {
            if (children[i].ref === before.data.ref) {
              break
            }
          }
          if (i === l) {
            isAppend = true
          }
        }
    
        if (isAppend) {
          this.node.appendChild(child.node)
          children.push(child.data)
        } else {
          if (before.fixedPlaceholder) {
            this.node.insertBefore(child.node, before.fixedPlaceholder)
          } else {
            this.node.insertBefore(child.node, before.node)
          }
          children.splice(i, 0, child.data)
        }
    
      },
    
      removeChild: function (child) {
        var children = this.data.children
        // remove from this.data.children
        var i = 0
        var componentManager = this.getComponentManager()
        if (children && children.length) {
          for (var l = children.length; i < l; i++) {
            if (children[i].ref === child.data.ref) {
              break
            }
          }
          if (i < l) {
            children.splice(i, 1)
          }
        }
        // remove from componentMap recursively
        componentManager.removeElementByRef(child.data.ref)
        if (child.fixedPlaceholder) {
          this.node.removeChild(child.fixedPlaceholder)
        }
        child.node.parentNode.removeChild(child.node)
      },
    
      updateAttrs: function (attrs) {
        // Note：attr must be injected into the dom element because
        // it will be accessed from the outside developer by event.target.attr.
        if (!this.node.attr) {
          this.node.attr = {}
        }
        for (var key in attrs) {
          var value = attrs[key]
          var attrSetter = this.attr[key]
          if (typeof attrSetter === 'function') {
            attrSetter.call(this, value)
          } else {
            if (typeof value === 'boolean') {
              this.node[key] = value
            } else {
              this.node.setAttribute(key, value)
            }
            this.node.attr[key] = value
          }
        }
      },
    
      updateStyle: function (style) {
    
        for (var key in style) {
          var value = style[key]
          var styleSetter = this.style[key]
          if (typeof styleSetter === 'function') {
            styleSetter.call(this, value)
            continue
          }
          var parser = valueFilter.getFilters(key,
              { scale: this.data.scale })[typeof value]
          if (typeof parser === 'function') {
            value = parser(value)
          }
          this.node.style[key] = value
        }
      },
    
      bindEvents: function (evts) {
        var componentManager = this.getComponentManager()
        if (evts
            && Object.prototype.toString.call(evts).slice(8, -1) === 'Array'
          ) {
          for (var i = 0, l = evts.length; i < l; i++) {
            componentManager.addEvent(this, evts[i])
          }
        }
      },
    
      // dispatch a specified event on this.node
      //  - type: event type
      //  - data: event data
      //  - config: event config object
      //     - bubbles
      //     - cancelable
      dispatchEvent: function (type, data, config) {
        var event = document.createEvent('HTMLEvents')
        config = config || {}
        event.initEvent(type, config.bubbles || false, config.cancelable || false)
        !data && (data = {})
        event.data = utils.extend({}, data)
        utils.extend(event, data)
        this.node.dispatchEvent(event)
      },
    
      updateRecursiveAttr: function (data) {
        this.updateAttrs(data.attr)
        var componentManager = this.getComponentManager()
        var children = this.data.children
        if (children) {
          for (var i = 0; i < children.length; i++) {
            var child = componentManager.getElementByRef(children[i].ref)
            if (child) {
              child.updateRecursiveAttr(data.children[i])
            }
          }
        }
      },
    
      updateRecursiveStyle: function (data) {
        this.updateStyle(data.style)
        var componentManager = this.getComponentManager()
        var children = this.data.children
        if (children) {
          for (var i = 0; i < children.length; i++) {
            var child = componentManager.getElementByRef(children[i].ref)
            if (child) {
              child.updateRecursiveStyle(data.children[i])
            }
          }
        }
      },
    
      updateRecursiveAll: function (data) {
        this.updateAttrs(data.attr)
        this.updateStyle(data.style)
        var componentManager = this.getComponentManager()
    
        // var oldRef = this.data.ref
        // if (componentMap[oldRef]) {
        //   delete componentMap[oldRef]
        // }
        // this.data.ref = data.ref
        // componentMap[data.ref] = this
    
        var children = this.data.children
        if (children) {
          for (var i = 0; i < children.length; i++) {
            var child = componentManager.getElementByRef(children[i].ref)
            if (child) {
              child.updateRecursiveAll(data.children[i])
            }
          }
        }
      },
    
      attr: {}, // attr setters
    
      style: Object.create(flexbox), // style setters
    
      clearAttr: function () {
      },
    
      clearStyle: function () {
        this.node.cssText = ''
      }
    }
    
    Component.prototype.style.position = function (value) {
    
      // For the elements who are fixed elements before, now
      // are not fixed: the fixedPlaceholder has to be replaced
      // by this element.
      // This is a peace of hacking to fix the problem about
      // mixing fixed and transform. See 'http://stackoverflo
      // w.com/questions/15194313/webkit-css-transform3d-posi
      // tion-fixed-issue' for more info.
      if (value !== 'fixed') {
        if (this.fixedPlaceholder) {
          var parent = this.fixedPlaceholder.parentNode
          parent.insertBefore(this.node, this.fixedPlaceholder)
          parent.removeChild(this.fixedPlaceholder)
          this.fixedPlaceholder = null
        }
      } else { // value === 'fixed'
        // For the elements who are fixed: this fixedPlaceholder
        // shoud be inserted, and the fixed element itself should
        // be placed out in root container.
        this.node.style.position = 'fixed'
        var parent = this.node.parentNode
        var replaceWithFixedPlaceholder = function () {
          this.fixedPlaceholder = document.createElement('div')
          this.fixedPlaceholder.classList.add('weex-fixed-placeholder')
          this.fixedPlaceholder.style.display = 'none'
          this.fixedPlaceholder.style.width = '0px'
          this.fixedPlaceholder.style.height = '0px'
          parent.insertBefore(this.fixedPlaceholder, this.node)
          this.getRootContainer().appendChild(this.node)
        }.bind(this)
        if (!parent) {
          if (this.onAppend) {
            var pre = this.onAppend.bind(this)
          }
          this.onAppend = function () {
            parent = this.node.parentNode
            replaceWithFixedPlaceholder()
            pre && pre()
          }.bind(this)
        } else {
          replaceWithFixedPlaceholder()
        }
        return
      }
    
      if (value === 'sticky') {
        this.node.style.zIndex = 100
        setTimeout(function () {
          this.sticky = new lib.sticky(this.node, {
            top: 0
          })
        }.bind(this), 0)
      } else {
        this.node.style.position = value
      }
    }
    
    module.exports = Component
    
    
    


/***/ },
/* 25 */
/***/ function(module, exports) {

    'use strict'
    
    // Flexbox polyfill
    var flexboxSetters = (function () {
      var BOX_ALIGN = {
        stretch: 'stretch',
        'flex-start': 'start',
        'flex-end': 'end',
        center: 'center'
      }
      var BOX_ORIENT = {
        row: 'horizontal',
        column: 'vertical'
      }
      var BOX_PACK = {
        'flex-start': 'start',
        'flex-end': 'end',
        center: 'center',
        'space-between': 'justify',
        'space-around': 'justify' // Just same as `space-between`
      }
      return {
        flex: function (value) {
          this.node.style.webkitBoxFlex = value
          this.node.style.webkitFlex = value
          this.node.style.flex = value
        },
        alignItems: function (value) {
          this.node.style.webkitBoxAlign = BOX_ALIGN[value]
          this.node.style.webkitAlignItems = value
          this.node.style.alignItems = value
        },
        alignSelf: function (value) {
          this.node.style.webkitAlignSelf = value
          this.node.style.alignSelf = value
        },
        flexDirection: function (value) {
          this.node.style.webkitBoxOrient = BOX_ORIENT[value]
          this.node.style.webkitFlexDirection = value
          this.node.style.flexDirection = value
        },
        justifyContent: function (value) {
          this.node.style.webkitBoxPack = BOX_PACK[value]
          this.node.style.webkitJustifyContent = value
          this.node.style.justifyContent = value
        }
      }
    })()
    
    module.exports = flexboxSetters


/***/ },
/* 26 */
/***/ function(module, exports) {

    'use strict'
    
    var NOT_PX_NUMBER_PROPERTIES = ['flex', 'opacity', 'zIndex', 'fontWeight']
    
    var valueFilter = {
    
      filterStyles: function (styles, config) {
        for (var key in styles) {
          var value = styles[key]
          var parser = this.getFilters(key, config)[typeof value]
          if (typeof parser === 'function') {
            styles[key] = parser(value)
          }
        }
      },
    
      getFilters: function (key, config) {
    
        if (NOT_PX_NUMBER_PROPERTIES.indexOf(key) !== -1) {
          return {}
        }
        return {
          number: function (val) {
            return val * config.scale + 'px'
          },
          string: function (val) {
            // string of a pure number or a number suffixed with a 'px' unit
            if (val.match(/^\-?\d*\.?\d+(?:px)?$/)) {
              return parseFloat(val) * config.scale + 'px'
            }
            if (key.match(/transform/) && val.match(/translate/)) {
              return val.replace(/\d*\.?\d+px/g, function (match) {
                return parseInt(parseFloat(match) * config.scale) + 'px'
              })
            }
            return val
          }
        }
      }
    }
    
    module.exports = valueFilter


/***/ },
/* 27 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b,c){function d(a){return null!=a&&"object"==typeof a&&Object.getPrototypeOf(a)==Object.prototype}function e(a,b){var c,d,e,f=null,g=0,h=function(){g=Date.now(),f=null,e=a.apply(c,d)};return function(){var i=Date.now(),j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}function f(a){var b="";return Object.keys(a).forEach(function(c){b+=c+":"+a[c]+";"}),b}function g(a,c){!c&&d(a)&&(c=a,a=c.element),c=c||{},a.nodeType!=b.ELEMENT_NODE&&"string"==typeof a&&(a=b.querySelector(a));var e=this;e.element=a,e.top=c.top||0,e.withinParent=void 0==c.withinParent?!1:c.withinParent,e.init()}var h=a.parseInt,i=navigator.userAgent,j=!!i.match(/Firefox/i),k=!!i.match(/IEMobile/i),l=j?"-moz-":k?"-ms-":"-webkit-",m=j?"Moz":k?"ms":"webkit",n=function(){var a=b.createElement("div"),c=a.style;return c.cssText="position:"+l+"sticky;position:sticky;",-1!=c.position.indexOf("sticky")}();g.prototype={constructor:g,init:function(){var a=this,b=a.element,c=b.style;c[m+"Transform"]="translateZ(0)",c.transform="translateZ(0)",a._originCssText=c.cssText,n?(c.position=l+"sticky",c.position="sticky",c.top=a.top+"px"):(a._simulateSticky(),a._bindResize())},_bindResize:function(){var b=this,c=/android/gi.test(navigator.appVersion),d=b._resizeEvent="onorientationchange"in a?"orientationchange":"resize",e=b._resizeHandler=function(){setTimeout(function(){b.refresh()},c?200:0)};a.addEventListener(d,e,!1)},refresh:function(){var a=this;n||(a._detach(),a._simulateSticky())},_addPlaceholder:function(a){var c,d=this,e=d.element,g=a.position;if(-1!=["static","relative"].indexOf(g)){c=d._placeholderElement=b.createElement("div");var i=h(a.width)+h(a.marginLeft)+h(a.marginRight),j=h(a.height);"border-box"!=a.boxSizing&&(i+=h(a.borderLeftWidth)+h(a.borderRightWidth)+h(a.paddingLeft)+h(a.paddingRight),j+=h(a.borderTopWidth)+h(a.borderBottomWidth)+h(a.paddingTop)+h(a.paddingBottom)),c.style.cssText=f({display:"none",visibility:"hidden",width:i+"px",height:j+"px",margin:0,"margin-top":a.marginTop,"margin-bottom":a.marginBottom,border:0,padding:0,"float":a["float"]||a.cssFloat}),e.parentNode.insertBefore(c,e)}return c},_simulateSticky:function(){var c=this,d=c.element,g=c.top,i=d.style,j=d.getBoundingClientRect(),k=getComputedStyle(d,""),l=d.parentNode,m=getComputedStyle(l,""),n=c._addPlaceholder(k),o=c.withinParent,p=c._originCssText,q=j.top-g+a.pageYOffset,r=l.getBoundingClientRect().bottom-h(m.paddingBottom)-h(m.borderBottomWidth)-h(k.marginBottom)-j.height-g+a.pageYOffset,s=p+f({position:"fixed",top:g+"px",width:k.width,"margin-top":0}),t=p+f({position:"absolute",top:r+"px",width:k.width}),u=1,v=c._scrollHandler=e(function(){var b=a.pageYOffset;q>b?1!=u&&(i.cssText=p,n&&(n.style.display="none"),u=1):!o&&b>=q||o&&b>=q&&r>b?2!=u&&(i.cssText=s,n&&3!=u&&(n.style.display="block"),u=2):o&&3!=u&&(i.cssText=t,n&&2!=u&&(n.style.display="block"),u=3)},100);if(a.addEventListener("scroll",v,!1),a.pageYOffset>=q){var w=b.createEvent("HTMLEvents");w.initEvent("scroll",!0,!0),a.dispatchEvent(w)}},_detach:function(){var b=this,c=b.element;if(c.style.cssText=b._originCssText,!n){var d=b._placeholderElement;d&&c.parentNode.removeChild(d),a.removeEventListener("scroll",b._scrollHandler,!1)}},destroy:function(){var b=this;b._detach();var c=b.element.style;c.removeProperty(l+"transform"),c.removeProperty("transform"),n||a.removeEventListener(b._resizeEvent,b._resizeHandler,!1)}},c.sticky=g}(window,document,window.lib||(window.lib={}));;module.exports = window.lib['sticky'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var utils = __webpack_require__(15)
    
    var _senderMap = {}
    
    function Sender(instance) {
      if (!(this instanceof Sender)) {
        return new Sender(instance)
      }
      this.instanceId = instance.instanceId
      this.weexInstance = instance
      _senderMap[this.instanceId] = this
    }
    
    function _send(instanceId, msg) {
      callJS(instanceId, [msg])
    }
    
    Sender.getSender = function (instanceId) {
      return _senderMap[instanceId]
    }
    
    Sender.prototype = {
    
      // perform a callback to jsframework.
      performCallback: function (callbackId, data, keepAlive) {
        var args = [callbackId]
        data && args.push(data)
        keepAlive && args.push(keepAlive)
        _send(this.instanceId, {
          method: 'callback',
          args: args
        })
      },
    
      fireEvent: function (ref, type, event) {
        if (event._alreadyFired) {
          // stop bubbling up in virtual dom tree.
          return
        }
        // do not prevent default, otherwise the touchstart
        // event will no longer trigger a click event
        event._alreadyFired = true
        var evt = utils.extend({}, event)
        // The event.target must be the standard event's currentTarget.
        evt.target = evt.currentTarget
        evt.value = event.target.value
        evt.timestamp = Date.now()
        _send(this.instanceId, {
          method: 'fireEvent',
          args: [ref, type, evt]
        })
      }
    
    }
    
    module.exports = Sender

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global) {'use strict'
    
    var config = __webpack_require__(13)
    var protocol = __webpack_require__(16)
    var utils = __webpack_require__(15)
    var FrameUpdater = __webpack_require__(18)
    var Sender = __webpack_require__(28)
    
    var callQueue = []
    // Need a task counter?
    // When FrameUpdater is not activated, tasks will not be push
    // into callQueue and there will be no trace for situation of
    // execution of tasks.
    
    // give 10ms for call handling, and rest 6ms for others
    var MAX_TIME_FOR_EACH_FRAME = 10
    
    // callNative: jsFramework will call this method to talk to
    // this renderer.
    // params:
    //  - instanceId: string.
    //  - tasks: array of object.
    //  - callbackId: number.
    function callNative(instanceId, tasks, callbackId) {
      var calls = []
      if (typeof tasks === 'string') {
        try {
          calls = JSON.parse(tasks)
        } catch (e) {
          console.error('invalid tasks:', tasks)
        }
      } else if (Object.prototype.toString.call(tasks).slice(8, -1) === 'Array') {
        calls = tasks
      }
      var len = calls.length
      calls[len - 1].callbackId = (!callbackId && callbackId !== 0)
                                  ? -1
                                  : callbackId
      // To solve the problem of callapp, the two-way time loop rule must
      // be replaced by calling directly except the situation of page loading.
      // 2015-11-03
      for (var i = 0; i < len; i++) {
        if (FrameUpdater.isActive()) {
          callQueue.push({
            instanceId: instanceId,
            call: calls[i]
          })
        }
        else {
          processCall(instanceId, calls[i])
        }
      }
    
    }
    
    function processCallQueue() {
      var len = callQueue.length
      if (len === 0) {
        return
      }
      var start = Date.now()
      var elapsed = 0
    
      while (--len >= 0 && elapsed < MAX_TIME_FOR_EACH_FRAME) {
        var callObj = callQueue.shift()
        processCall(callObj.instanceId, callObj.call)
        elapsed = Date.now() - start
      }
    }
    
    function processCall(instanceId, call) {
      var moduleName = call.module
      var methodName = call.method
      var module, method
      var args = call.args || call.arguments || []
    
      if (!(module = protocol.apiModule[moduleName])) {
        return
      }
      if (!(method = module[methodName])) {
        return
      }
    
      method.apply(protocol.getWeexInstance(instanceId), args)
    
      var callbackId = call.callbackId
      if ((callbackId
        || callbackId === 0
        || callbackId === '0')
        && callbackId !== '-1'
        && callbackId !== -1) {
        performNextTick(instanceId, callbackId)
      }
    }
    
    function performNextTick(instanceId, callbackId) {
      Sender.getSender(instanceId).performCallback(callbackId)
    }
    
    function nativeLog() {
      if (config.debug) {
        if (arguments[0].match(/^perf/)) {
          console.info.apply(console, arguments)
          return
        }
        console.debug.apply(console, arguments)
      }
    }
    
    function exportsBridgeMethodsToGlobal() {
      global.callNative = callNative
      global.nativeLog = nativeLog
    }
    
    module.exports = {
    
      init: function () {
    
        // process callQueue every 16 milliseconds.
        FrameUpdater.addUpdateObserver(processCallQueue)
        FrameUpdater.start()
    
        // exports methods to global(window).
        exportsBridgeMethodsToGlobal()
      }
    
    }
    
    /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

    var RootComponent = __webpack_require__(31)
    var Container = __webpack_require__(33)
    var Image = __webpack_require__(36)
    var Text = __webpack_require__(40)
    var Vlist = __webpack_require__(41)
    var Hlist = __webpack_require__(47)
    var Countdown = __webpack_require__(48)
    var Marquee = __webpack_require__(50)
    var Slider = __webpack_require__(51)
    var Indicator = __webpack_require__(58)
    var Tabheader = __webpack_require__(61)
    var Scroller = __webpack_require__(65)
    var Input = __webpack_require__(68)
    var Select = __webpack_require__(69)
    var Datepicker = __webpack_require__(70)
    var Timepicker = __webpack_require__(71)
    var Video = __webpack_require__(72)
    var Switch = __webpack_require__(75)
    var A = __webpack_require__(78)
    var Embed = __webpack_require__(79)
    var Refresh = __webpack_require__(80)
    var Loading = __webpack_require__(83)
    var Spinner = __webpack_require__(86)
    var Web = __webpack_require__(89)
    
    var components = {
      init: function (Weex) {
        Weex.registerComponent('root', RootComponent)
        Weex.registerComponent('container', Container)
        Weex.registerComponent('div', Container)
        Weex.registerComponent('image', Image)
        Weex.registerComponent('text', Text)
        Weex.registerComponent('list', Vlist)
        Weex.registerComponent('vlist', Vlist)
        Weex.registerComponent('hlist', Hlist)
        Weex.registerComponent('countdown', Countdown)
        Weex.registerComponent('marquee', Marquee)
        Weex.registerComponent('slider', Slider)
        Weex.registerComponent('indicator', Indicator)
        Weex.registerComponent('tabheader', Tabheader)
        Weex.registerComponent('scroller', Scroller)
        Weex.registerComponent('input', Input)
        Weex.registerComponent('select', Select)
        Weex.registerComponent('datepicker', Datepicker)
        Weex.registerComponent('timepicker', Timepicker)
        Weex.registerComponent('video', Video)
        Weex.registerComponent('switch', Switch)
        Weex.registerComponent('a', A)
        Weex.registerComponent('embed', Embed)
        Weex.registerComponent('refresh', Refresh)
        Weex.registerComponent('loading', Loading)
        Weex.registerComponent('spinner', Spinner)
        Weex.registerComponent('loading-indicator', Spinner)
        Weex.registerComponent('web', Web)
      }
    }
    
    module.exports = components


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var ComponentManager = __webpack_require__(17)
    var Component = __webpack_require__(24)
    var utils = __webpack_require__(15)
    var logger = __webpack_require__(32)
    
    var rootCandidates = ['div', 'list', 'vlist', 'scroller']
    
    function RootComponent(data, nodeType) {
      var id = data.rootId + '-root'
      var componentManager = ComponentManager.getInstance(data.instanceId)
    
      // If nodeType is in the downgrades map, just ignore it and
      // replace it with a div component.
      var downgrades = componentManager.weexInstance.downgrades
      this.data = data
    
      // In some situation the root component should be implemented as
      // its own type, otherwise it has to be a div component as a root.
      if (!nodeType) {
        nodeType = 'div'
      } else if (rootCandidates.indexOf(nodeType) === -1) {
        logger.warn('the root component type \'' + nodeType + '\' is not one of '
          + 'the types in [' + rootCandidates + '] list. It is auto downgraded '
          + 'to \'div\'.')
        nodeType = 'div'
      } else if (downgrades[nodeType]) {
        logger.warn('Thanks to the downgrade flags for ['
          + Object.keys(downgrades)
          + '], the root component type \'' + nodeType
          + '\' is auto downgraded to \'div\'.')
        nodeType = 'div'
      } else {
        // If the root component is not a embed element in a webpage, then
        // the html and body height should be fixed to the max height
        // of viewport.
        if (!componentManager.weexInstance.embed) {
          window.addEventListener('renderend', function () {
            this.detectRootHeight()
          }.bind(this))
        }
        if (nodeType !== 'div') {
          logger.warn('the root component type \'' + nodeType + '\' may have '
            + 'some performance issue on some of the android devices when there '
            + 'is a huge amount of dom elements. Try to add downgrade '
            + 'flags by adding param \'downgrade_' + nodeType + '=true\' in the '
            + 'url or setting downgrade config to a array contains \'' + nodeType
            + '\' in the \'weex.init\' function. This will downgrade the root \''
            + nodeType + '\' to a \'div\', and may elevate the level of '
            + 'performance, although it has some other issues.')
        }
        !this.data.style.height && (this.data.style.height = '100%')
      }
    
      data.type = nodeType
      var cmp = componentManager.createElement(data)
      cmp.node.id = id
      return cmp
    }
    
    RootComponent.prototype = Object.create(Component.prototype)
    
    RootComponent.prototype.detectRootHeight = function () {
      var rootQuery = '#' + this.getComponentManager().weexInstance.rootId
      var rootContainer = document.querySelector(rootQuery) || document.body
      var height = rootContainer.getBoundingClientRect().height
      if (height > window.innerHeight) {
        logger.warn([
          'for scrollable root like \'list\' and \'scroller\', the height of ',
          'the root container must be a user-specified value. Otherwise ',
          'the scrollable element may not be able to work correctly. ',
          'Current height of the root element \'' + rootQuery + '\' is ',
          height + 'px, and mostly its height should be less than the ',
          'viewport\'s height ' + window.innerHeight + 'px. Please ',
          'make sure the height is correct.'
          ].join(''))
      }
    }
    
    module.exports = RootComponent


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

    var config = __webpack_require__(13)
    var utils = __webpack_require__(15)
    
    var _initialized = false
    
    var logger = {
      log: function () {},
      warn: function () {},
      error: function () {}
    }
    
    function hijack(k) {
      if (utils.isArray(k)) {
        k.forEach(function (key) {
          hijack(key)
        })
      } else {
        if (console[k]) {
          logger[k] = function () {
            console[k].apply(
              console,
              ['[h5-render]'].concat(Array.prototype.slice.call(arguments, 0))
            )
          }
        }
      }
    }
    
    logger.init = function () {
      if (_initialized) {
        return
      }
      _initialized = true
      if (config.debug && console) {
        hijack(['log', 'warn', 'error'])
      }
    }
    
    module.exports = logger

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(34)
    
    var Component = __webpack_require__(24)
    
    function Container (data, nodeType) {
      Component.call(this, data, nodeType)
      this.node.classList.add('weex-container')
    }
    
    Container.prototype = Object.create(Component.prototype)
    
    module.exports = Container


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(35);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./container.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./container.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-container {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  position: relative;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-element {\n  box-sizing: border-box;\n  position: relative;\n}\n", ""]);
    
    // exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var LazyLoad = __webpack_require__(20)
    var config = __webpack_require__(13)
    var utils = __webpack_require__(15)
    
    __webpack_require__(38)
    
    var DEFAULT_SIZE = 200
    var RESIZE_MODES = ['stretch', 'cover', 'contain']
    var DEFAULT_RESIZE_MODE = 'stretch'
    
    /**
     * resize: 'cover' | 'contain' | 'stretch', default is 'stretch'
     * src: url
     */
    
    function Image (data) {
      this.resize = DEFAULT_RESIZE_MODE
      Atomic.call(this, data)
    }
    
    Image.prototype = Object.create(Atomic.prototype)
    
    Image.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-img')
      return node
    }
    
    Image.prototype.attr = {
      src: function (val) {
        if (!this.src) {
          this.src = lib.img.defaultSrc
          this.node.style.backgroundImage = 'url(' + this.src + ')'
        }
        LazyLoad.makeImageLazy(this.node, val)
      },
    
      resize: function (val) {
        if (RESIZE_MODES.indexOf(val) === -1) {
          val = 'stretch'
        }
        this.node.style.backgroundSize = val === 'stretch'
                                        ? '100% 100%'
                                        : val
      }
    }
    
    Image.prototype.style = utils.extend(Object.create(Atomic.prototype.style), {
      width: function (val) {
        val = parseFloat(val) * this.data.scale
        if (val < 0 || val !== val) {
          val = DEFAULT_SIZE
        }
        this.node.style.width = val + 'px'
      },
    
      height: function (val) {
        val = parseFloat(val) * this.data.scale
        if (val < 0 || val !== val) {
          val = DEFAULT_SIZE
        }
        this.node.style.height = val + 'px'
      }
    })
    
    Image.prototype.clearAttr = function () {
      this.src = ''
      this.node.style.backgroundImage = ''
    }
    
    module.exports = Image


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Component = __webpack_require__(24)
    
    // Component which can have no subcomponents.
    // This component should not be instantiated directly, since
    // it is designed to be used as a base class to extend from.
    function Atomic (data) {
      Component.call(this, data)
    }
    
    Atomic.prototype = Object.create(Component.prototype)
    
    Atomic.prototype.appendChild = function (data) {
      // do nothing
      return
    }
    
    Atomic.prototype.insertBefore = function (child, before) {
      // do nothing
      return
    }
    
    Atomic.prototype.removeChild = function (child) {
      // do nothing
      return
    }
    
    module.exports = Atomic


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(39);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./image.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./image.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-img {\n\tbox-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: 50%;\n  border: 0 solid black;\n}", ""]);
    
    // exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(24)
    var utils = __webpack_require__(15)
    
    var DEFAULT_FONT_SIZE = 32
    var DEFAULT_TEXT_OVERFLOW = 'ellipsis'
    
    // attr
    //  - value: text content.
    //  - lines: maximum lines of the text.
    function Text (data) {
      Atomic.call(this, data)
    }
    
    Text.prototype = Object.create(Atomic.prototype)
    
    Text.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-container')
      node.style.fontSize = DEFAULT_FONT_SIZE * this.data.scale + 'px'
      this.textNode = document.createElement('span')
      // Give the developers the ability to control space
      // and line-breakers.
      this.textNode.style.whiteSpace = 'pre-wrap'
      this.textNode.style.wordWrap = 'break-word'
      this.textNode.style.display = '-webkit-box'
      this.textNode.style.webkitBoxOrient = 'vertical'
      this.style.lines.call(this, this.data.style.lines)
      node.appendChild(this.textNode)
      return node
    }
    
    Text.prototype.attr = {
      value: function (value) {
        var span = this.node.firstChild
        span.innerHTML = ''
        if (value == null || value === '') {
          return
        }
        span.textContent = value
        /**
         * Developers are supposed to have the ability to break text
         * lines manually. Using ``&nbsp;`` to replace text space is
         * not compatible with the ``-webkit-line-clamp``. Therefor
         * we use ``white-space: no-wrap`` instead (instead of the
         * code bellow).
    
          var frag = document.createDocumentFragment()
            text.split(' ').forEach(function(str) {
              var textNode = document.createTextNode(str)
              var space = document.createElement('i')
              space.innerHTML = '&nbsp;'
              frag.appendChild(space)
              frag.appendChild(textNode)
            })
            frag.removeChild(frag.firstChild)
            span.appendChild(document.createElement('br'))
            span.appendChild(frag)
          })
          span.removeChild(span.firstChild)
         */
      }
    }
    
    Text.prototype.clearAttr = function () {
      this.node.firstChild.textContent = ''
    }
    
    Text.prototype.style = utils.extend(Object.create(Atomic.prototype.style), {
    
      lines: function (val) {
        val = parseInt(val)
        if (val !== val) { // NaN
          return
        }
        if (val <= 0) {
          this.textNode.style.textOverflow = ''
          this.textNode.style.overflow = 'visible'
          this.textNode.style.webkitLineClamp = ''
        } else {
          var style = this.data ? this.data.style : null
          this.textNode.style.overflow = 'hidden'
          this.textNode.style.textOverflow = style
            ? style.textOverflow
            : DEFAULT_TEXT_OVERFLOW
          this.textNode.style.webkitLineClamp = val
        }
      },
    
      textOverflow: function (val) {
        this.textNode.style.textOverflow = val
      }
    
    })
    
    module.exports = Text


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

    var List = __webpack_require__(42)
    
    function Vlist(data, nodeType) {
      data.attr.direction = 'v'
      List.call(this, data, nodeType)
    }
    
    Vlist.prototype = Object.create(List.prototype)
    
    module.exports = Vlist

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(43)
    __webpack_require__(45)
    
    var Component = __webpack_require__(24)
    var LazyLoad = __webpack_require__(20)
    
    var DEFAULT_LOAD_MORE_OFFSET = 500
    
    var directionMap = {
      h: ['row', 'horizontal', 'h', 'x'],
      v: ['column', 'vertical', 'v', 'y']
    }
    
    // direction: 'v' or 'h', default is 'v'
    function List(data, nodeType) {
      // this.loadmoreOffset = Number(data.attr.loadmoreoffset)
      // this.isAvailableToFireloadmore = true
      this.direction = directionMap.h.indexOf(data.attr.direction) === -1
        ? 'v'
        : 'h'
      Component.call(this, data, nodeType)
    }
    
    List.prototype = Object.create(Component.prototype)
    
    List.prototype.create = function (nodeType) {
      var Scroll = lib.scroll
      var node = Component.prototype.create.call(this, nodeType)
      node.classList.add('weex-container', 'list-wrap')
      this.listElement = document.createElement('div')
      this.listElement.classList.add(
        'weex-container'
        , 'list-element'
        , this.direction + '-list'
      )
    
      // Flex will cause a bug to rescale children's size if their total
      // size exceed the limit of their parent. So to use box instead.
      this.listElement.style.display = '-webkit-box'
      this.listElement.style.display = 'box'
      this.listElement.style.webkitBoxOrient = this.direction === 'h'
        ? 'horizontal'
        : 'vertical'
      this.listElement.style.boxOrient = this.listElement.style.webkitBoxOrient
    
      node.appendChild(this.listElement)
      this.scroller = new Scroll({
        scrollElement: this.listElement
        , direction: this.direction === 'h' ? 'x' : 'y'
      })
      this.scroller.init()
      this.offset = 0
      return node
    }
    
    List.prototype.bindEvents = function (evts) {
      Component.prototype.bindEvents.call(this, evts)
      // to enable lazyload for Images.
      this.scroller.addEventListener('scrolling', function (e) {
        var so = e.scrollObj
        var scrollTop = so.getScrollTop()
        var scrollLeft = so.getScrollLeft()
        var offset = this.direction === 'v' ? scrollTop : scrollLeft
        var diff = offset - this.offset
        var dir
        if (diff >= 0) {
          dir = this.direction === 'v' ? 'up' : 'left'
        } else {
          dir = this.direction === 'v' ? 'down' : 'right'
        }
        this.dispatchEvent('scroll', {
          originalType: 'scrolling',
          scrollTop: so.getScrollTop(),
          scrollLeft: so.getScrollLeft(),
          offset: offset,
          direction: dir
        }, {
          bubbles: true
        })
        this.offset = offset
      }.bind(this))
    
      var pullendEvent = 'pull' + ({ v: 'up', h: 'left' })[this.direction] + 'end'
      this.scroller.addEventListener(pullendEvent, function (e) {
        this.dispatchEvent('loadmore')
      }.bind(this))
    }
    
    List.prototype.createChildren = function () {
      var children = this.data.children
      var parentRef = this.data.ref
      var componentManager = this.getComponentManager()
      if (children && children.length) {
        var fragment = document.createDocumentFragment()
        var isFlex = false
        for (var i = 0; i < children.length; i++) {
          children[i].instanceId = this.data.instanceId
          children[i].scale = this.data.scale
          var child = componentManager.createElement(children[i])
          fragment.appendChild(child.node)
          child.parentRef = parentRef
          if (!isFlex
              && child.data.style
              && child.data.style.hasOwnProperty('flex')
            ) {
            isFlex = true
          }
        }
        this.listElement.appendChild(fragment)
      }
      // wait for fragment to appended on listElement on UI thread.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    List.prototype.appendChild = function (data) {
      var children = this.data.children
      var componentManager = this.getComponentManager()
      var child = componentManager.createElement(data)
      this.listElement.appendChild(child.node)
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    
      // update this.data.children
      if (!children || !children.length) {
        this.data.children = [data]
      } else {
        children.push(data)
      }
    
      return child
    }
    
    List.prototype.insertBefore = function (child, before) {
      var children = this.data.children
      var i = 0
      var isAppend = false
    
      // update this.data.children
      if (!children || !children.length || !before) {
        isAppend = true
      } else {
        for (var l = children.length; i < l; i++) {
          if (children[i].ref === before.data.ref) {
            break
          }
        }
        if (i === l) {
          isAppend = true
        }
      }
    
      if (isAppend) {
        this.listElement.appendChild(child.node)
        children.push(child.data)
      } else {
        if (before.fixedPlaceholder) {
          this.listElement.insertBefore(child.node, before.fixedPlaceholder)
        } else {
          this.listElement.insertBefore(child.node, before.node)
        }
        children.splice(i, 0, child.data)
      }
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    List.prototype.removeChild = function (child) {
      var children = this.data.children
      // remove from this.data.children
      var i = 0
      var componentManager = this.getComponentManager()
      if (children && children.length) {
        for (var l = children.length; i < l; i++) {
          if (children[i].ref === child.data.ref) {
            break
          }
        }
        if (i < l) {
          children.splice(i, 1)
        }
      }
      // remove from componentMap recursively
      componentManager.removeElementByRef(child.data.ref)
      if (child.fixedPlaceholder) {
        this.listElement.removeChild(child.fixedPlaceholder)
      }
      child.node.parentNode.removeChild(child.node)
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    module.exports = List


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(44);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./list.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./list.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".list-wrap {\n  display: block;\n  overflow: hidden;\n}\n\n.list-element {\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n", ""]);
    
    // exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(46)
    
    var logger = __webpack_require__(32)
    
    var doc = window.document
    var ua = window.navigator.userAgent
    var scrollObjs = {}
    var plugins = {}
    var dpr = window.dpr
      || (!!window.navigator.userAgent.match(/iPhone|iPad|iPod/)
        ? document.documentElement.clientWidth / window.screen.availWidth
        : 1)
    var inertiaCoefficient = {
      normal: [2 * dpr, 0.0015 * dpr],
      slow: [1.5 * dpr, 0.003 * dpr],
      veryslow: [1.5 * dpr, 0.005 * dpr]
    }
    var timeFunction = {
      ease: [.25,.1,.25,1],
      liner: [0,0,1,1],
      'ease-in': [.42,0,1,1],
      'ease-out': [0,0,.58,1],
      'ease-in-out': [.42,0,.58,1]
    }
    var Firefox = !!ua.match(/Firefox/i)
    var IEMobile = !!ua.match(/IEMobile/i)
    var cssPrefix = Firefox ? '-moz-' : IEMobile ? '-ms-' : '-webkit-'
    var stylePrefix = Firefox ? 'Moz' : IEMobile ? 'ms' : 'webkit'
    
    function debugLog() {
      if (lib.scroll.outputDebugLog) {
        logger.log.apply(logger, arguments)
      }
    }
    
    function getBoundingClientRect(el) {
      var rect = el.getBoundingClientRect()
      if (!rect) {
        rect = {}
        rect.width = el.offsetWidth
        rect.height = el.offsetHeight
    
        rect.left = el.offsetLeft
        rect.top = el.offsetTop
        var parent = el.offsetParent
        while (parent) {
          rect.left += parent.offsetLeft
          rect.top += parent.offsetTop
          parent = parent.offsetParent
        }
    
        rect.right = rect.left + rect.width
        rect.bottom = rect.top + rect.height
      }
      return rect
    }
    
    function getMinScrollOffset(scrollObj) {
      return 0 - scrollObj.options[scrollObj.axis + 'PaddingTop']
    }
    
    function getMaxScrollOffset(scrollObj) {
      var rect = getBoundingClientRect(scrollObj.element)
      var pRect = getBoundingClientRect(scrollObj.viewport)
      var min = getMinScrollOffset(scrollObj)
      if (scrollObj.axis === 'y') {
        var max = 0 - rect.height + pRect.height
      } else {
        var max = 0 - rect.width + pRect.width
      }
      return Math.min(
        max + scrollObj.options[scrollObj.axis + 'PaddingBottom'],
        min
      )
    }
    
    function getBoundaryOffset(scrollObj, offset) {
      if (offset > scrollObj.minScrollOffset) {
        return offset - scrollObj.minScrollOffset
      }
      if (offset < scrollObj.maxScrollOffset) {
        return offset - scrollObj.maxScrollOffset
      }
    }
    
    function touchBoundary(scrollObj, offset) {
      if (offset > scrollObj.minScrollOffset) {
        offset = scrollObj.minScrollOffset
      } else if (offset < scrollObj.maxScrollOffset) {
        offset = scrollObj.maxScrollOffset
      }
      return offset
    }
    
    function fireEvent(scrollObj, eventName, extra) {
      debugLog(scrollObj.element.scrollId, eventName, extra)
      var event = doc.createEvent('HTMLEvents')
      event.initEvent(eventName, false, true)
      event.scrollObj = scrollObj
      if (extra) {
        for (var key in extra) {
          event[key] = extra[key]
        }
      }
      scrollObj.element.dispatchEvent(event)
      scrollObj.viewport.dispatchEvent(event)
    }
    
    function getTransformOffset(scrollObj) {
      var offset = {x: 0, y: 0}
      var transform = getComputedStyle(scrollObj.element)
        [stylePrefix + 'Transform']
      var matched
      var reg1 = new RegExp('^matrix3d'
        + '\\((?:[-\\d.]+,\\s*){12}([-\\d.]+),'
        + '\\s*([-\\d.]+)(?:,\\s*[-\\d.]+){2}\\)')
      var reg2 = new RegExp('^matrix'
        + '\\((?:[-\\d.]+,\\s*){4}([-\\d.]+),\\s*([-\\d.]+)\\)$')
      if (transform !== 'none') {
        if ((matched = transform.match(reg1) ||
            transform.match(reg2))) {
          offset.x = parseFloat(matched[1]) || 0
          offset.y = parseFloat(matched[2]) || 0
        }
      }
    
      return offset
    }
    
    var CSSMatrix = IEMobile ? 'MSCSSMatrix' : 'WebKitCSSMatrix'
    var has3d = !!Firefox
      || CSSMatrix in window
      && 'm11' in new window[CSSMatrix]()
    function getTranslate(x, y) {
      x = parseFloat(x)
      y = parseFloat(y)
    
      if (x != 0) {
        x += 'px'
      }
    
      if (y != 0) {
        y += 'px'
      }
    
      if (has3d) {
        return 'translate3d(' + x + ', ' + y + ', 0)'
      }
      return 'translate(' + x + ', ' + y + ')'
    }
    
    function setTransitionStyle(scrollObj, duration, timingFunction) {
      if (duration === '' && timingFunction === '') {
        scrollObj.element.style[stylePrefix + 'Transition'] = ''
      } else {
        scrollObj.element.style[stylePrefix + 'Transition']
          = cssPrefix + 'transform ' + duration + ' ' + timingFunction + ' 0s'
      }
    }
    
    function setTransformStyle(scrollObj, offset) {
      var x = 0
      var y = 0
      if (typeof offset === 'object') {
        x = offset.x
        y = offset.y
      } else {
        if (scrollObj.axis === 'y') {
          y = offset
        } else {
          x = offset
        }
      }
      scrollObj.element.style[stylePrefix + 'Transform'] = getTranslate(x, y)
    }
    
    var panning = false
    doc.addEventListener('touchmove', function (e) {
      if (panning) {
        e.preventDefault()
        return false
      }
      return true
    }, false)
    
    function Scroll(element, options) {
      var that = this
    
      options = options || {}
      options.noBounce = !!options.noBounce
      options.padding = options.padding || {}
    
      if (options.isPrevent == null) {
        options.isPrevent = true
      } else {
        options.isPrevent = !!options.isPrevent
      }
    
      if (options.isFixScrollendClick == null) {
        options.isFixScrollendClick = true
      } else {
        options.isFixScrollendClick = !!options.isFixScrollendClick
      }
    
      if (options.padding) {
        options.yPaddingTop = -options.padding.top || 0
        options.yPaddingBottom = -options.padding.bottom || 0
        options.xPaddingTop = -options.padding.left || 0
        options.xPaddingBottom = -options.padding.right || 0
      } else {
        options.yPaddingTop = 0
        options.yPaddingBottom = 0
        options.xPaddingTop = 0
        options.xPaddingBottom = 0
      }
    
      options.direction = options.direction || 'y'
      options.inertia = options.inertia || 'normal'
    
      this.options = options
      that.axis = options.direction
      this.element = element
      this.viewport = element.parentNode
      this.plugins = {}
    
      this.element.scrollId = setTimeout(function () {
        scrollObjs[that.element.scrollId + ''] = that
      }, 1)
    
      this.viewport.addEventListener('touchstart', touchstartHandler, false)
      this.viewport.addEventListener('touchend', touchendHandler, false)
      this.viewport.addEventListener('touchcancel', touchendHandler, false)
      this.viewport.addEventListener('panstart', panstartHandler, false)
      this.viewport.addEventListener('panmove', panHandler, false)
      this.viewport.addEventListener('panend', panendHandler, false)
    
      if (options.isPrevent) {
        this.viewport.addEventListener('touchstart', function (e) {
          panning = true
        }, false)
        that.viewport.addEventListener('touchend', function (e) {
          panning = false
        }, false)
      }
    
      // if (options.isPrevent) {
      //   var d = this.axis === 'y'?'vertical':'horizontal'
      //   this.viewport.addEventListener(d + 'panstart', function (e) {
      //     panning = true
      //   }, false)
      //   that.viewport.addEventListener('panend', function (e) {
      //     panning = false
      //   }, false)
      // }
    
      if (options.isFixScrollendClick) {
        var preventScrollendClick
        var fixScrollendClickTimeoutId
    
        this.viewport.addEventListener('scrolling', function () {
          preventScrollendClick = true
          fixScrollendClickTimeoutId && clearTimeout(fixScrollendClickTimeoutId)
          fixScrollendClickTimeoutId = setTimeout(function (e) {
            preventScrollendClick = false
          }, 400)
        }, false)
    
        function preventScrollendClickHandler(e) {
          if (preventScrollendClick || isScrolling) {
            e.preventDefault()
            e.stopPropagation()
            return false
          }
          return true
        }
    
        function fireNiceTapEventHandler(e) {
          if (!preventScrollendClick && !isScrolling) {
            setTimeout(function () {
              var niceTapEvent = document.createEvent('HTMLEvents')
              niceTapEvent.initEvent('niceclick', true, true)
              e.target.dispatchEvent(niceTapEvent)
            }, 300)
          }
        }
    
        this.viewport.addEventListener('click', preventScrollendClickHandler)
        this.viewport.addEventListener('tap', fireNiceTapEventHandler)
      }
    
      if (options.useFrameAnimation) {
        var scrollAnimation
    
        Object.defineProperty(this, 'animation', {
          get: function () {
            return scrollAnimation
          }
        })
      } else {
        var transitionEndHandler
        var transitionEndTimeoutId = 0
    
        function setTransitionEndHandler(h, t) {
          transitionEndHandler = null
          clearTimeout(transitionEndTimeoutId)
    
          transitionEndTimeoutId = setTimeout(function () {
            if (transitionEndHandler) {
              transitionEndHandler = null
              lib.animation.requestFrame(h)
            }
          }, (t || 400))
    
          transitionEndHandler = h
        }
    
        element.addEventListener(
            Firefox
              ? 'transitionend'
              : (stylePrefix + 'TransitionEnd'), function (e) {
          if (transitionEndHandler) {
            var handler = transitionEndHandler
    
            transitionEndHandler = null
            clearTimeout(transitionEndTimeoutId)
    
            lib.animation.requestFrame(function () {
              handler(e)
            })
          }
        }, false)
      }
    
      var panFixRatio
      var isScrolling
      var isFlickScrolling
      var cancelScrollEnd
    
      Object.defineProperty(this, 'isScrolling', {
        get: function () {
          return !!isScrolling
        }
      })
    
      function isEnabled(e) {
        if (!that.enabled) {
          return false
        }
    
        if (typeof e.isVertical != 'undefined') {
          if (that.axis === 'y' && e.isVertical
              || that.axis === 'x' && !e.isVertical) {
            // gesture in same direction, stop bubbling up
            e.stopPropagation()
          } else {
            // gesture in different direction, bubbling up
            // to the top, without any other process
            return false
          }
        }
    
        return true
      }
    
      function touchstartHandler(e) {
        if (!isEnabled(e)) {
          return
        }
    
        if (isScrolling) {
          scrollEnd()
        }
    
        if (options.useFrameAnimation) {
          scrollAnimation && scrollAnimation.stop()
          scrollAnimation = null
        } else {
          var transform = getTransformOffset(that)
          setTransformStyle(that, transform)
          setTransitionStyle(that, '', '')
          transitionEndHandler = null
          clearTimeout(transitionEndTimeoutId)
        }
      }
    
      function touchendHandler(e) {
        if (!isEnabled(e)) {
          return
        }
    
        var s0 = getTransformOffset(that)[that.axis]
        var boundaryOffset = getBoundaryOffset(that, s0)
    
        if (boundaryOffset) {
          // dragging out of boundray, bounce is needed
          var s1 = touchBoundary(that, s0)
    
          if (options.useFrameAnimation) {
            // frame
            var _s = s1 - s0
            scrollAnimation = new lib.animation(
                400,
                lib.cubicbezier.ease,
                0,
                function (i1, i2) {
              var offset = (s0 + _s * i2).toFixed(2)
              setTransformStyle(that, offset)
              fireEvent(that, 'scrolling')
            })
            scrollAnimation.onend(scrollEnd)
            scrollAnimation.play()
          } else {
            // css
            var offset =  s1.toFixed(0)
            setTransitionStyle(that, '0.4s', 'ease')
            setTransformStyle(that, offset)
            setTransitionEndHandler(scrollEnd, 400)
    
            lib.animation.requestFrame(function () {
              if (isScrolling && that.enabled) {
                fireEvent(that, 'scrolling')
                lib.animation.requestFrame(arguments.callee)
              }
            })
          }
    
          if (boundaryOffset > 0) {
            fireEvent(that, that.axis === 'y' ? 'pulldownend' : 'pullrightend')
          } else if (boundaryOffset < 0) {
            fireEvent(that, that.axis === 'y' ? 'pullupend' : 'pullleftend')
          }
        } else if (isScrolling) {
          // without exceeding the boundary, just end it
          scrollEnd()
        }
      }
    
      var lastDisplacement
      function panstartHandler(e) {
        if (!isEnabled(e)) {
          return
        }
    
        that.transformOffset = getTransformOffset(that)
        that.minScrollOffset = getMinScrollOffset(that)
        that.maxScrollOffset = getMaxScrollOffset(that)
        panFixRatio = 2.5
        cancelScrollEnd = true
        isScrolling = true
        isFlickScrolling = false
        fireEvent(that, 'scrollstart')
    
        lastDisplacement = e['displacement' + that.axis.toUpperCase()]
      }
    
    
      function panHandler(e) {
        if (!isEnabled(e)) {
          return
        }
    
        // finger move less than 5 px. just ignore that.
        var displacement = e['displacement' + that.axis.toUpperCase()]
        if (Math.abs(displacement - lastDisplacement) < 5) {
          e.stopPropagation()
          return
        }
        lastDisplacement = displacement
    
        var offset = that.transformOffset[that.axis] + displacement
        if (offset > that.minScrollOffset) {
          offset = that.minScrollOffset
            + (offset - that.minScrollOffset) / panFixRatio
          panFixRatio *= 1.003
        } else if (offset < that.maxScrollOffset) {
          offset = that.maxScrollOffset
            - (that.maxScrollOffset - offset) / panFixRatio
          panFixRatio *= 1.003
        }
        if (panFixRatio > 4) {
          panFixRatio = 4
        }
    
        // tell whether or not reach the fringe
        var boundaryOffset = getBoundaryOffset(that, offset)
        if (boundaryOffset) {
          fireEvent(
              that,
              boundaryOffset > 0
              ? (that.axis === 'y' ? 'pulldown' : 'pullright')
              : (that.axis === 'y' ? 'pullup' : 'pullleft'), {
            boundaryOffset: Math.abs(boundaryOffset)
          })
          if (that.options.noBounce) {
            offset = touchBoundary(that, offset)
          }
        }
    
        setTransformStyle(that, offset.toFixed(2))
        fireEvent(that, 'scrolling')
      }
    
      function panendHandler(e) {
        if (!isEnabled(e)) {
          return
        }
    
        if (e.isflick) {
          flickHandler(e)
        }
      }
    
      function flickHandler(e) {
        cancelScrollEnd = true
    
        var v0, a0, t0, s0, s, motion0
        var v1, a1, t1, s1, motion1,sign
        var v2, a2, t2, s2, motion2, ft
    
        s0 = getTransformOffset(that)[that.axis]
        var boundaryOffset0 = getBoundaryOffset(that, s0)
        if (!boundaryOffset0) {
          // when fingers left the range of screen, let touch end handler
          // to deal with it.
          // when fingers left the screen, but still in the range of
          // screen, calculate the intertia.
          v0 = e['velocity' + that.axis.toUpperCase()]
    
          var maxV = 2
          var friction = 0.0015
          if (options.inertia && inertiaCoefficient[options.inertia]) {
            maxV = inertiaCoefficient[options.inertia][0]
            friction = inertiaCoefficient[options.inertia][1]
          }
    
          if (v0 > maxV) {
            v0 = maxV
          }
          if (v0 < -maxV) {
            v0 = -maxV
          }
          a0 = friction * (v0 / Math.abs(v0))
          motion0 = new lib.motion({
            v: v0,
            a: -a0
          })
          t0 = motion0.t
          s = s0 + motion0.s
    
          var boundaryOffset1 = getBoundaryOffset(that, s)
          if (boundaryOffset1) {
            debugLog('inertial calculation has exceeded the boundary',
              boundaryOffset1)
    
            v1 = v0
            a1 = a0
            if (boundaryOffset1 > 0) {
              s1 = that.minScrollOffset
              sign = 1
            } else {
              s1 = that.maxScrollOffset
              sign = -1
            }
            motion1 = new lib.motion({
              v: sign * v1,
              a: -sign * a1,
              s: Math.abs(s1 - s0)
            })
            t1 = motion1.t
            var timeFunction1 = motion1.generateCubicBezier()
    
            v2 = v1 - a1 * t1
            a2 = 0.03 * (v2 / Math.abs(v2))
            motion2 = new lib.motion({
              v: v2,
              a: -a2
            })
            t2 = motion2.t
            s2 = s1 + motion2.s
            var timeFunction2 = motion2.generateCubicBezier()
    
            if (options.noBounce) {
              debugLog('no bounce effect')
    
              if (s0 !== s1) {
                if (options.useFrameAnimation) {
                  // frame
                  var _s = s1 - s0
                  var bezier = lib.cubicbezier(
                    timeFunction1[0][0],
                    timeFunction1[0][1],
                    timeFunction1[1][0],
                    timeFunction1[1][1]
                  )
                  scrollAnimation = new lib.animation(
                      t1.toFixed(0),
                      bezier,
                      0,
                      function (i1, i2) {
                    var offset = (s0 + _s * i2)
                    getTransformOffset(that, offset.toFixed(2))
                    fireEvent(that, 'scrolling', {
                      afterFlick: true
                    })
                  })
    
                  scrollAnimation.onend(scrollEnd)
    
                  scrollAnimation.play()
                } else {
                  // css
                  var offset = s1.toFixed(0)
                  setTransitionStyle(
                    that,
                    (t1 / 1000).toFixed(2) + 's',
                    'cubic-bezier(' + timeFunction1 + ')'
                  )
                  setTransformStyle(that, offset)
                  setTransitionEndHandler(
                    scrollEnd,
                    (t1 / 1000).toFixed(2) * 1000
                  )
                }
              } else {
                scrollEnd()
              }
            } else if (s0 !== s2) {
              debugLog(
                'scroll for inertia',
                's=' + s2.toFixed(0),
                't=' + ((t1 + t2) / 1000).toFixed(2)
              )
    
              if (options.useFrameAnimation) {
                var _s = s2 - s0
                var bezier = lib.cubicbezier.easeOut
                scrollAnimation = new lib.animation(
                    (t1 + t2).toFixed(0),
                    bezier,
                    0,
                    function (i1, i2) {
                  var offset = s0 + _s * i2
                  setTransformStyle(that, offset.toFixed(2))
                  fireEvent(that, 'scrolling',{
                    afterFlick: true
                  })
                })
    
                scrollAnimation.onend(function () {
                  if (!that.enabled) {
                    return
                  }
    
                  var _s = s1 - s2
                  var bezier = lib.cubicbezier.ease
                  scrollAnimation = new lib.animation(
                      400,
                      bezier,
                      0,
                      function (i1, i2) {
                    var offset = s2 + _s * i2
                    setTransformStyle(that, offset.toFixed(2))
                    fireEvent(that, 'scrolling',{
                      afterFlick: true
                    })
                  })
    
                  scrollAnimation.onend(scrollEnd)
    
                  scrollAnimation.play()
                })
    
                scrollAnimation.play()
              } else {
                var offset = s2.toFixed(0)
                setTransitionStyle(
                  that,
                  ((t1 + t2) / 1000).toFixed(2) + 's',
                  'ease-out'
                )
                setTransformStyle(that, offset)
    
                setTransitionEndHandler(function (e) {
                  if (!that.enabled) {
                    return
                  }
    
                  debugLog('inertial bounce',
                    's=' + s1.toFixed(0),
                    't=400'
                  )
    
                  if (s2 !== s1) {
                    var offset = s1.toFixed(0)
                    setTransitionStyle(that, '0.4s', 'ease')
                    setTransformStyle(that, offset)
                    setTransitionEndHandler(scrollEnd, 400)
                  } else {
                    scrollEnd()
                  }
                }, ((t1 + t2) / 1000).toFixed(2) * 1000)
              }
            } else {
              scrollEnd()
            }
          } else {
            debugLog('inertial calculation hasn\'t exceeded the boundary')
            var timeFunction = motion0.generateCubicBezier()
    
            if (options.useFrameAnimation) {
              // frame
              var _s = s - s0
              var bezier = lib.cubicbezier(
                timeFunction[0][0],
                timeFunction[0][1],
                timeFunction[1][0],
                timeFunction[1][1]
              )
              scrollAnimation = new lib.animation(
                  t0.toFixed(0),
                  bezier,
                  0,
                  function (i1, i2) {
                var offset = (s0 + _s * i2).toFixed(2)
                setTransformStyle(that, offset)
                fireEvent(that, 'scrolling',{
                  afterFlick: true
                })
              })
    
              scrollAnimation.onend(scrollEnd)
    
              scrollAnimation.play()
            } else {
              // css
              var offset = s.toFixed(0)
              setTransitionStyle(
                that,
                (t0 / 1000).toFixed(2) + 's',
                'cubic-bezier(' + timeFunction + ')'
              )
              setTransformStyle(that, offset)
              setTransitionEndHandler(scrollEnd, (t0 / 1000).toFixed(2) * 1000)
            }
          }
    
    
          isFlickScrolling = true
          if (!options.useFrameAnimation) {
            lib.animation.requestFrame(function () {
              if (isScrolling && isFlickScrolling && that.enabled) {
                fireEvent(that, 'scrolling', {
                  afterFlick: true
                })
                lib.animation.requestFrame(arguments.callee)
              }
            })
          }
        }
      }
    
      function scrollEnd() {
        if (!that.enabled) {
          return
        }
    
        cancelScrollEnd = false
    
        setTimeout(function () {
          if (!cancelScrollEnd && isScrolling) {
            isScrolling = false
            isFlickScrolling = false
    
            if (options.useFrameAnimation) {
              scrollAnimation && scrollAnimation.stop()
              scrollAnimation = null
            } else {
              setTransitionStyle(that, '', '')
            }
            fireEvent(that, 'scrollend')
          }
        }, 50)
      }
    
      var proto = {
        init: function () {
          this.enable()
          this.refresh()
          this.scrollTo(0)
          return this
        },
    
        enable: function () {
          this.enabled = true
          return this
        },
    
        disable: function () {
          var el = this.element
          this.enabled = false
    
          if (this.options.useFrameAnimation) {
            scrollAnimation && scrollAnimation.stop()
          } else {
            lib.animation.requestFrame(function () {
              el.style[stylePrefix + 'Transform']
                = getComputedStyle(el)[stylePrefix + 'Transform']
            })
          }
    
          return this
        },
    
        getScrollWidth: function () {
          return getBoundingClientRect(this.element).width
        },
    
        getScrollHeight: function () {
          return getBoundingClientRect(this.element).height
        },
    
        getScrollLeft: function () {
          return -getTransformOffset(this).x - this.options.xPaddingTop
        },
    
        getScrollTop: function () {
          return -getTransformOffset(this).y - this.options.yPaddingTop
        },
    
        getMaxScrollLeft: function () {
          return -that.maxScrollOffset - this.options.xPaddingTop
        },
    
        getMaxScrollTop: function () {
          return -that.maxScrollOffset - this.options.yPaddingTop
        },
    
        getBoundaryOffset: function () {
          return Math.abs(
            getBoundaryOffset(this, getTransformOffset(this)[this.axis]) || 0
          )
        },
    
        refresh: function () {
          var el = this.element
          var isVertical = (this.axis === 'y')
          var type = isVertical?'height':'width'
    
          if (this.options[type] != null) {
            // use options
            el.style[type] = this.options[type] + 'px'
          } else if (!!this.options.useElementRect) {
            el.style[type] = 'auto'
            el.style[type] = getBoundingClientRect(el)[type] + 'px'
          } else if (el.childElementCount > 0) {
            var range
            var rect
            var firstEl = el.firstElementChild
            var lastEl = el.lastElementChild
    
            if (document.createRange && !this.options.ignoreOverflow) {
              // use range
              range = document.createRange()
              range.selectNodeContents(el)
              rect = getBoundingClientRect(range)
            }
    
            if (rect) {
              el.style[type] = rect[type] + 'px'
            } else {
              // use child offsets
              while (firstEl) {
                if (getBoundingClientRect(firstEl)[type] === 0
                    && firstEl.nextElementSibling) {
                  firstEl = firstEl.nextElementSibling
                } else {
                  break
                }
              }
    
              while (lastEl && lastEl !== firstEl) {
                if (getBoundingClientRect(lastEl)[type] === 0
                    && lastEl.previousElementSibling) {
                  lastEl = lastEl.previousElementSibling
                } else {
                  break
                }
              }
    
              el.style[type] = (getBoundingClientRect(lastEl)[
                  isVertical ? 'bottom' : 'right']
                - getBoundingClientRect(firstEl)[
                  isVertical ? 'top' : 'left'])
                + 'px'
            }
          }
    
          this.transformOffset = getTransformOffset(this)
          this.minScrollOffset = getMinScrollOffset(this)
          this.maxScrollOffset = getMaxScrollOffset(this)
          this.scrollTo(
            -this.transformOffset[this.axis]
            - this.options[this.axis + 'PaddingTop']
          )
          fireEvent(this, 'contentrefresh')
    
          return this
        },
    
        offset: function (childEl) {
          var elRect = getBoundingClientRect(this.element)
          var childRect = getBoundingClientRect(childEl)
          if (this.axis === 'y') {
            var offsetRect = {
              top: childRect.top - elRect.top - this.options.yPaddingTop,
              left: childRect.left - elRect.left,
              right: elRect.right - childRect.right,
              width: childRect.width,
              height: childRect.height
            }
    
            offsetRect.bottom = offsetRect.top + offsetRect.height
          } else {
            var offsetRect = {
              top: childRect.top - elRect.top,
              bottom: elRect.bottom - childRect.bottom,
              left: childRect.left - elRect.left - this.options.xPaddingTop,
              width: childRect.width,
              height: childRect.height
            }
    
            offsetRect.right = offsetRect.left + offsetRect.width
          }
          return offsetRect
        },
    
        getRect: function (childEl) {
          var viewRect = getBoundingClientRect(this.viewport)
          var childRect = getBoundingClientRect(childEl)
          if (this.axis === 'y') {
            var offsetRect = {
              top: childRect.top - viewRect.top,
              left: childRect.left - viewRect.left,
              right: viewRect.right - childRect.right,
              width: childRect.width,
              height: childRect.height
            }
    
            offsetRect.bottom = offsetRect.top + offsetRect.height
          } else {
            var offsetRect = {
              top: childRect.top - viewRect.top,
              bottom: viewRect.bottom - childRect.bottom,
              left: childRect.left - viewRect.left,
              width: childRect.width,
              height: childRect.height
            }
    
            offsetRect.right = offsetRect.left + offsetRect.width
          }
          return offsetRect
        },
    
        isInView: function (childEl) {
          var viewRect = this.getRect(this.viewport)
          var childRect = this.getRect(childEl)
          if (this.axis === 'y') {
            return viewRect.top < childRect.bottom
              && viewRect.bottom > childRect.top
          }
          return viewRect.left < childRect.right
            && viewRect.right > childRect.left
        },
    
        scrollTo: function (offset, isSmooth) {
          var that = this
          var element = this.element
    
          offset = -offset - this.options[this.axis + 'PaddingTop']
          offset = touchBoundary(this, offset)
    
          isScrolling = true
          if (isSmooth === true) {
            if (this.options.useFrameAnimation) {
              var s0 = getTransformOffset(that)[this.axis]
              var _s = offset - s0
              scrollAnimation = new lib.animation(
                  400,
                  lib.cubicbezier.easeInOut,
                  0,
                  function (i1, i2) {
                var offset = (s0 + _s * i2).toFixed(2)
                setTransformStyle(that, offset)
                fireEvent(that, 'scrolling')
              })
    
              scrollAnimation.onend(scrollEnd)
    
              scrollAnimation.play()
            } else {
              setTransitionStyle(that, '0.4s', 'ease-in-out')
              setTransformStyle(that, offset)
              setTransitionEndHandler(scrollEnd, 400)
    
              lib.animation.requestFrame(function () {
                if (isScrolling && that.enabled) {
                  fireEvent(that, 'scrolling')
                  lib.animation.requestFrame(arguments.callee)
                }
              })
            }
          } else {
            if (!this.options.useFrameAnimation) {
              setTransitionStyle(that, '', '')
            }
            setTransformStyle(that, offset)
            scrollEnd()
          }
    
          return this
        },
    
        scrollToElement: function (childEl, isSmooth) {
          var offset = this.offset(childEl)
          offset = offset[this.axis === 'y'?'top':'left']
          return this.scrollTo(offset, isSmooth)
        },
    
        getViewWidth: function () {
          return getBoundingClientRect(this.viewport).width
        },
    
        getViewHeight: function () {
          return getBoundingClientRect(this.viewport).height
        },
    
        addPulldownHandler: function (handler) {
          var that = this
          this.element.addEventListener('pulldownend', function (e) {
            that.disable()
            handler.call(that, e, function () {
              that.scrollTo(0, true)
              that.refresh()
              that.enable()
            })
          }, false)
    
          return this
        },
    
        addPullupHandler: function (handler) {
          var that = this
    
          this.element.addEventListener('pullupend', function (e) {
            that.disable()
            handler.call(that, e, function () {
              that.scrollTo(that.getScrollHeight(), true)
              that.refresh()
              that.enable()
            })
          }, false)
    
          return this
        },
    
        addScrollstartHandler: function (handler) {
          var that = this
          this.element.addEventListener('scrollstart', function (e) {
            handler.call(that, e)
          }, false)
    
          return this
        },
    
        addScrollingHandler: function (handler) {
          var that = this
          this.element.addEventListener('scrolling', function (e) {
            handler.call(that, e)
          }, false)
    
          return this
        },
    
        addScrollendHandler: function (handler) {
          var that = this
          this.element.addEventListener('scrollend', function (e) {
            handler.call(that, e)
          }, false)
    
          return this
        },
    
        addContentrenfreshHandler: function (handler) {
          var that = this
          this.element.addEventListener('contentrefresh', function (e) {
            handler.call(that, e)
          }, false)
        },
    
        addEventListener: function (name, handler, useCapture) {
          var that = this
          this.element.addEventListener(name, function (e) {
            handler.call(that, e)
          }, !!useCapture)
        },
    
        removeEventListener: function (name, handler) {
          var that = this
          this.element.removeEventListener(name, function (e) {
            handler.call(that, e)
          })
        },
    
        enablePlugin: function (name, options) {
          var plugin = plugins[name]
          if (plugin && !this.plugins[name]) {
            this.plugins[name] = true
            options = options || {}
            plugin.call(this, name, options)
          }
          return this
        }
      }
    
      for (var k in proto) {
        this[k] = proto[k]
      }
      delete proto
    }
    
    lib.scroll = function (el, options) {
      if (arguments.length === 1 && !(arguments[0] instanceof HTMLElement)) {
        options = arguments[0]
        if (options.scrollElement) {
          el = options.scrollElement
        } else if (options.scrollWrap) {
          el = options.scrollWrap.firstElementChild
        } else {
          throw new Error('no scroll element')
        }
      }
    
      if (!el.parentNode) {
        throw new Error('wrong dom tree')
      }
      if (options
          && options.direction
          && ['x', 'y'].indexOf(options.direction) < 0) {
        throw new Error('wrong direction')
      }
    
      var scroll
      if (options.downgrade === true
          && lib.scroll.downgrade) {
        scroll = lib.scroll.downgrade(el, options)
      } else {
        if (el.scrollId) {
          scroll = scrollObjs[el.scrollId]
        } else {
          scroll = new Scroll(el, options)
        }
      }
      return scroll
    }
    
    lib.scroll.plugin = function (name, constructor) {
      if (constructor) {
        name = name.split(',')
        name.forEach(function (n) {
          plugins[n] = constructor
        })
      } else {
        return plugins[name]
      }
    }
    


/***/ },
/* 46 */
/***/ function(module, exports) {

    'use strict'
    
    /**
     * transfer Quadratic Bezier Curve to Cubic Bezier Curve
     *
     * @param  {number} a abscissa of p1
     * @param  {number} b ordinate of p1
     * @return {Array} parameter matrix for cubic bezier curve
     *   like [[p1x, p1y], [p2x, p2y]]
     */
    function quadratic2cubicBezier(a, b) {
      return [
        [
          (a / 3 + (a + b) / 3 - a) / (b - a),
          (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)
        ], [
          (b / 3 + (a + b) / 3 - a) / (b - a),
          (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)
        ]
      ]
    }
    
    /**
     * derive position data from knowing motion parameters
     * base on Newton's second law: s = vt + at^2/2
     *
     * @param {object} config object of { v, a, s, t }
     *   - v: initial velocity
     *   - a: accelerate speed
     *   - t: time
     *   - s: shifting
     */
    function Motion(config) {
    
      this.v = config.v || 0
      this.a = config.a || 0
    
      if (typeof config.t !== 'undefined') {
        this.t = config.t
      }
    
      if (typeof config.s !== 'undefined') {
        this.s = config.s
      }
    
      // derive time from shifting
      if (typeof this.t === 'undefined') {
        if (typeof this.s === 'undefined') {
          this.t = -this.v / this.a
        } else {
          var t1 = (Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v)
            / this.a
          var t2 = (-Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v)
            / this.a
          this.t = Math.min(t1, t2)
        }
      }
    
      // derive shifting from time
      if (typeof this.s === 'undefined') {
        this.s = this.a * this.t * this.t / 2 + this.v * this.t
      }
    }
    
    /**
     * derive cubic bezier parameters from motion parameters
     * @return {Array} parameter matrix for cubic bezier curve
     *   like [[p1x, p1y], [p2x, p2y]]
     */
    Motion.prototype.generateCubicBezier = function () {
      return quadratic2cubicBezier(
        this.v / this.a, this.t + this.v / this.a
      )
    }
    
    !lib && (lib = {})
    lib.motion = Motion
    
    module.exports = Motion

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

    var List = __webpack_require__(42)
    
    function Hlist(data, nodeType) {
      data.attr.direction = 'h'
      List.call(this, data, nodeType)
    }
    
    Hlist.prototype = Object.create(List.prototype)
    
    module.exports = Hlist

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    __webpack_require__(49)
    
    var FORMATTER_REGEXP = /(\\)?(dd*|hh?|mm?|ss?)/gi
    
    function formatDateTime(data, formatter, timeColor) {
      return formatter.replace(FORMATTER_REGEXP, function (m) {
        var len = m.length
        var firstChar = m.charAt(0)
        // escape character
        if (firstChar === '\\') {
          return m.replace('\\', '')
        }
        var value = (firstChar === 'd' ? data.days :
                    firstChar === 'h' ? data.hours :
                    firstChar === 'm' ? data.minutes :
                    firstChar === 's' ? data.seconds : 0) + ''
    
        // 5 zero should be enough
        return '<span style="margin:4px;color:'
          + timeColor + '" >'
          + ('00000' + value).substr(-Math.max(value.length, len))
          + '</span>'
      })
    }
    
    function Countdown (data) {
      Atomic.call(this, data)
    }
    
    Countdown.prototype = Object.create(Atomic.prototype)
    
    Countdown.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-element')
      var data = this.data
      var time = Number(data.attr.countdownTime) || 0
      var endTime = Date.now() / 1000 + time
      var cd = lib.countdown({
        endDate: endTime,
        onUpdate: function (time) {
          var timeColor = data.style.timeColor || '#000'
          var result = formatDateTime(time, data.attr.formatterValue, timeColor)
          node.innerHTML = result
        },
        onEnd: function () {
        }
      }).start()
    
      return node
    }
    
    Countdown.prototype.style = {
      textColor: function (value) {
        this.node.style.color = value
      }
    }
    
    module.exports = Countdown


/***/ },
/* 49 */
/***/ function(module, exports) {

    !function(a,b){function c(a){var b;if("number"==typeof a)b=new Date(1e3*a);else if("string"==typeof a){var c=a.charAt(0),d="+"===c,h="-"===c;if(d||h){for(var i,j=a.substr(1),k=j.split(":"),l=[0,0,0,0],m=4;k.length&&--m>=0;)l[m]=parseInt(k.pop())||0;i=e*l[0]+f*l[1]+g*l[2]+l[3],b=new Date,b.setSeconds(b.getSeconds()+i*(h?-1:1)),b.setMilliseconds(0)}}return b||(b=new Date(a)),b}function d(a,b){return b.replace(FORMATTER_REGEXP,function(b){var c=b.length,d=b.charAt(0);if("\\"===d)return b.replace("\\","");var e=("d"===d?a.days:"h"===d?a.hours:"m"===d?a.minutes:"s"===d?a.seconds:0)+"";return("00000"+e).substr(-Math.max(e.length,c))})}var e=86400,f=3600,g=60,h="d天hh时mm分ss秒";FORMATTER_REGEXP=/(\\)?(dd*|hh?|mm?|ss?)/gi;var i=function(a){a=a||{};var b=this,d=c(a.endDate);if(!d||!d.getTime())throw new Error("Invalid endDate");b.endDate=d,b.onUpdate=a.onUpdate,b.onEnd=a.onEnd,b.interval=a.interval||1e3,b.stringFormatter=a.stringFormatter||h,b.correctDateOffset=a.correctDateOffset||0,b.updateElement=a.updateElement,b._data={days:0,hours:0,minutes:0,seconds:0}};i.prototype={start:function(){var a=this;return a.stop(),a._update()&&(a._intervalId=setInterval(function(){a._update()},a.interval)),a},_update:function(){var a,b=this,c=b._data,h=b.updateElement,i=+new Date+1e3*b.correctDateOffset,j=Math.max(0,Math.round((b.endDate.getTime()-i)/1e3)),k=0>=j;return c.totalSeconds=j,j-=(c.days=Math.floor(j/e))*e,j-=(c.hours=Math.floor(j/f))*f,j-=(c.minutes=Math.floor(j/g))*g,c.seconds=j,c.stringValue=d(c,b.stringFormatter),h&&(h.innerHTML=c.stringValue),(a=b.onUpdate)&&a.call(b,c),k?(b.stop(),(a=b.onEnd)&&a.call(b),!1):!0},stop:function(){var a=this;return a._intervalId&&(clearInterval(a._intervalId),a._intervalId=null),a},setEndDate:function(a){var b=this;return b.endDate=c(a),b}},b.countdown=function(a){return new i(a)}}(window,window.lib||(window.lib={}));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var config = __webpack_require__(13)
    var Component = __webpack_require__(24)
    var ComponentManager = __webpack_require__(17)
    var LazyLoad = __webpack_require__(20)
    
    function Marquee (data) {
      this.interval = Number(data.attr.interval) || 5 * 1000
      this.transitionDuration = Number(data.attr.transitionDuration) || 500
      this.delay = Number(data.attr.delay) || 0
      Component.call(this, data)
    }
    
    Marquee.prototype = Object.create(Component.prototype)
    
    Marquee.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-container')
      node.style.overflow = 'hidden'
      // fix page shaking during slider's playing
      node.style.webkitTransform = 'translate3D(0,0,0)'
      node.addEventListener('webkitTransitionEnd', this.end.bind(this), false)
      return node
    }
    
    Marquee.prototype.createChildren = function () {
      // first run:
      // - create each child
      // - append to parentNode
      // - find current and next
      // - set current and next shown and others hidden
      var children = this.data.children
      var parentRef = this.data.ref
      var instanceId = this.data.instanceId
      var items = []
      var componentManager = this.getComponentManager()
    
      var fragment, isFlex, child, node, i
    
      if (children && children.length) {
        fragment = document.createDocumentFragment()
        isFlex = false
        for (i = 0; i < children.length; i++) {
          children[i].scale = this.data.scale
          children[i].instanceId = instanceId
          child = componentManager.createElement(children[i])
          child.parentRef = parentRef
          this.initChild(child)
          // append and push
          items.push(child)
          fragment.appendChild(child.node)
          if (!isFlex && child.data.style.hasOwnProperty('flex')) {
            isFlex = true
          }
        }
        this.node.appendChild(fragment)
      }
    
      // set items
      this.items = items
    
      // reset the clock for first transition
      this.reset()
    }
    
    Marquee.prototype.initChild = function (child) {
      var node = child.node
      node.style.position = 'absolute'
      node.style.top = '0'
      node.style.left = '0'
    }
    
    Marquee.prototype.appendChild = function (data) {
      // dom + items
      var componentManager = ComponentManager.getInstance(this.data.instanceId)
      var child = componentManager.createElement(data)
      this.initChild(child)
      this.node.appendChild(child.node)
      this.items.push(child)
      this.reset()
      return child // @todo redesign Component#appendChild(component)
    }
    
    Marquee.prototype.insertBefore = function (child, before) {
      // dom + items
      var index = this.items.indexOf(before)
      this.items.splice(index, 0, child)
      this.initChild(child)
      this.node.insertBefore(child.node, before.node)
      this.reset()
    }
    
    Marquee.prototype.removeChild = function (child) {
      // dom + items
      var index = this.items.indexOf(child)
      this.items.splice(index, 1)
      this.node.removeChild(child.node)
      this.reset()
    }
    
    /**
     * status: {
     *   current: {translateY: 0, shown: true},
     *   next: {translateY: height, shown: true},
     *   others[]: {shown: false}
     *   index: index
     * }
     */
    Marquee.prototype.reset = function () {
      var interval = this.interval - 0
      var delay = this.delay - 0
      var items = this.items
      var self = this
    
      var loop = function () {
        self.next()
        self.timerId = setTimeout(loop, self.interval)
      }
    
      // reset display and transform
      items.forEach(function (item, index) {
        var node = item.node
        // set non-current(0)|next(1) item hidden
        node.style.display = index > 1 ? 'none' : ''
        // set next(1) item translateY
        // TODO: it supposed to use item.data.style
        // but somehow the style object is empty.
        // This problem relies on jsframework's bugfix.
    
        // node.style.transform = index === 1
        //     ? 'translate3D(0,' + config.scale * item.data.style.height + 'px,0)'
        //     : ''
        // node.style.webkitTransform = index === 1
        //     ? 'translate3D(0,' + config.scale * item.data.style.height + 'px,0)'
        //     : ''
        node.style.transform = index === 1
            ? 'translate3D(0,' + self.data.scale * self.data.style.height + 'px,0)'
            : ''
        node.style.webkitTransform = index === 1
            ? 'translate3D(0,' + self.data.scale * self.data.style.height + 'px,0)'
            : ''
      })
    
      setTimeout(function () {
        // reset current, next, index
        self.currentItem = items[0]
        self.nextItem = items[1]
        self.currentIndex = 0
    
        items.forEach(function (item, index) {
          var node = item.node
          // set transition
          node.style.transition = 'transform '
              + self.transitionDuration
              + 'ms ease'
          node.style.webkitTransition = '-webkit-transform '
              + self.transitionDuration
              + 'ms ease'
        })
    
        clearTimeout(self.timerId)
    
        if (items.length > 1) {
          self.timerId = setTimeout(loop, delay + interval)
        }
      }, 13)
    
    }
    
    /**
     * next:
     * - current: {translateY: -height}
     * - next: {translateY: 0}
     */
    Marquee.prototype.next = function () {
      // - update state
      //   - set current and next transition
      //   - hide current when transition end
      //   - set next to current
      //   - find new next
      var next = this.nextItem.node
      var current = this.currentItem.node
      this.transitionIndex = this.currentIndex
    
      // Use setTimeout to fix the problem that when the
      // page recover from backstage, the slider will
      // not work any longer.
      setTimeout(function () {
        next.style.transform = 'translate3D(0,0,0)'
        next.style.webkitTransform = 'translate3D(0,0,0)'
        current.style.transform = 'translate3D(0,-'
            + this.data.scale * this.data.style.height
            + 'px,0)'
        current.style.webkitTransform = 'translate3D(0,-'
            + this.data.scale * this.data.style.height
            + 'px,0)'
        this.fireEvent('change')
      }.bind(this), 300)
    }
    
    Marquee.prototype.fireEvent = function (type) {
      var length = this.items.length
      var nextIndex = (this.currentIndex + 1) % length
      var evt = document.createEvent('HTMLEvents')
      evt.initEvent(type, false, false)
      evt.data = {
        prevIndex: this.currentIndex,
        index: nextIndex
      }
      this.node.dispatchEvent(evt)
    }
    
    /**
     * end:
     * - old current: {shown: false}
     * - old current: {translateY: 0}
     * - index++ % length
     * - new current = old next
     * - new next = items[index+1 % length]
     * - new next: {translateY: height}
     * - new next: {shown: true}
     */
    Marquee.prototype.end = function (e) {
      var target = e.target
      var items = this.items
      var length = items.length
      var current, next
      var currentIndex, nextIndex
    
      currentIndex = this.transitionIndex
    
      if (isNaN(currentIndex)) {
        return
      }
      delete this.transitionIndex
    
      current = this.currentItem.node
      current.style.display = 'none'
      current.style.webkitTransform = ''
    
      currentIndex = (currentIndex + 1) % length
      nextIndex = (currentIndex + 1) % length
    
      this.currentIndex = currentIndex
      this.currentItem = this.nextItem
      this.nextItem = items[nextIndex]
    
      setTimeout(function () {
        next = this.nextItem.node
        // TODO: it supposed to use this.nextItem.data.style
        // but somehow the style object is empty.
        // This problem relies on jsframework's bugfix.
    
        next.style.webkitTransform = 'translate3D(0,'
            + this.data.scale * this.data.style.height
            + 'px,0)'
        next.style.display = ''
        LazyLoad.loadIfNeeded(next)
      }.bind(this))
    }
    
    Marquee.prototype.attr = {
      interval: function (value) {
        this.interval = value
      },
      transitionDuration: function (value) {
        this.transitionDuration = value
      },
      delay: function (value) {
        this.delay = value
      }
    }
    
    Marquee.prototype.clearAttr = function () {
      this.interval = 5 * 1000
      this.transitionDuration = 500
      this.delay = 0
    }
    
    module.exports = Marquee


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var extend = __webpack_require__(15).extend
    var config = __webpack_require__(13)
    var Component = __webpack_require__(24)
    var ComponentManager = __webpack_require__(17)
    var LazyLoad = __webpack_require__(20)
    __webpack_require__(52)
    __webpack_require__(56)
    
    var DEFAULT_INTERVAL = 3000
    
    function Slider (data) {
      this.autoPlay = false  // default value is false.
      this.interval = DEFAULT_INTERVAL
      this.direction = 'row' // 'column' is not temporarily supported.
      this.children = []
      this.isPageShow = true
      this.isDomRendering = true
    
      // bind event 'pageshow' and 'pagehide' on window.
      this._idleWhenPageDisappear()
      // bind event 'renderBegin' and 'renderEnd' on window.
      this._idleWhenDomRendering()
    
      Component.call(this, data)
    }
    
    Slider.prototype = Object.create(Component.prototype)
    
    Slider.prototype._idleWhenPageDisappear = function () {
      var _this = this
      window.addEventListener('pageshow', function () {
        _this.isPageShow = true
        _this.autoPlay && !_this.isDomRendering && _this.play()
      })
      window.addEventListener('pagehide', function () {
        _this.isPageShow = false
        _this.stop()
      })
    }
    
    Slider.prototype._idleWhenDomRendering = function () {
      var _this = this
      window.addEventListener('renderend', function () {
        _this.isDomRendering = false
        _this.autoPlay && _this.isPageShow && _this.play()
      })
      window.addEventListener('renderbegin', function () {
        _this.isDomRendering = true
        _this.stop()
      })
    }
    
    Slider.prototype.attr = {
      interval: function (val) {
        this.interval = parseInt(val) || DEFAULT_INTERVAL
        if (this.carrousel) {
          this.carrousel.playInterval = this.interval
        }
      },
    
      playstatus: function (val) {
        this.playstatus = val && val !== 'false' ? true : false
        this.autoPlay = this.playstatus
        if (this.carrousel) {
          if (this.playstatus) {
            this.play()
          } else {
            this.stop()
          }
        }
      },
    
      // support playstatus' alias auto-play for compatibility
      autoPlay: function (val) {
        this.attr.playstatus.call(this, val)
      }
    }
    
    Slider.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('slider')
      node.style.position = 'relative'
      node.style.overflow = 'hidden'
      return node
    }
    
    Slider.prototype._doRender = function () {
      var _this = this
      _this.createChildren()
      _this.onAppend()
    }
    
    Slider.prototype.removeChild = function (child) {
      var children = this.data.children
      if (children) {
        for (var i = 0; i < children.length; i++) {
          if (child.data.ref === children[i].ref) {
            children.splice(i, 1)
            break
          }
        }
      }
    
      this._doRender()
    }
    
    Slider.prototype.insertBefore = function (child, before) {
      var children = this.data.children
      // var childIndex = this.children.indexOf(before.data)
      var childIndex = -1
      for (var i = 0, l = children.length; i < l; i++) {
        if (children[i].ref === before.data.ref) {
          childIndex = i
          break
        }
      }
      children.splice(childIndex, 0, child.data)
    
      this._doRender()
      if (this.children.length > 0) {
        return this.children[this.children.length - 1]
      }
    }
    
    Slider.prototype.appendChild = function (data) {
      var children = this.data.children || (this.data.children = [])
      children.push(data)
      this._doRender()
      if (this.children.length > 0) {
        return this.children[this.children.length - 1]
      }
    }
    
    Slider.prototype.createChildren = function () {
    
      var componentManager = this.getComponentManager()
    
      // recreate slider container.
      if (this.sliderContainer) {
        this.node.removeChild(this.sliderContainer)
      }
      if (this.indicator) {
        this.indicator.node.parentNode.removeChild(this.indicator.node)
      }
      this.children = []
    
      var sliderContainer = document.createElement('ul')
      sliderContainer.style.listStyle = 'none'
      this.node.appendChild(sliderContainer)
      this.sliderContainer = sliderContainer
    
      var children = this.data.children
      var scale = this.data.scale
      var fragment = document.createDocumentFragment()
      var indicatorData, width, height
      var childWidth = 0
      var childHeight = 0
    
      if (children && children.length) {
        for (var i = 0; i < children.length; i++) {
          var child
          children[i].scale = this.data.scale
          children[i].instanceId = this.data.instanceId
          if (children[i].type === 'indicator') {
            indicatorData = extend(children[i], {
              extra: {
                amount: children.length - 1,
                index: 0
              }
            })
          } else {
            child = componentManager.createElement(children[i], 'li')
            this.children.push(child)
            fragment.appendChild(child.node)
            width = child.data.style.width || 0
            height = child.data.style.height || 0
            width > childWidth && (childWidth = width)
            height > childHeight && (childHeight = height)
            child.parentRef = this.data.ref
          }
        }
        // append indicator
        if (indicatorData) {
          indicatorData.extra.width = this.data.style.width || childWidth
          indicatorData.extra.height = this.data.style.height || childHeight
          this.indicator = componentManager.createElement(indicatorData)
          this.indicator.parentRef = this.data.ref
          this.indicator.slider = this
          this.node.appendChild(this.indicator.node)
        }
    
        sliderContainer.style.height = scale * this.data.style.height + 'px'
        sliderContainer.appendChild(fragment)
      }
    }
    
    Slider.prototype.onAppend = function () {
      if (this.carrousel) {
        this.carrousel.removeEventListener('change', this._getSliderChangeHandler())
        this.carrousel.stop()
        this.carrousel = null
      }
      this.carrousel = new lib.carrousel(this.sliderContainer, {
        autoplay: this.autoPlay,
        useGesture: true
      })
    
      this.carrousel.playInterval = this.interval
      this.carrousel.addEventListener('change', this._getSliderChangeHandler())
      this.currentIndex = 0
    
      // preload all images for slider
      // because:
      // 1. lib-img doesn't listen to event transitionend
      // 2. even if we fire lazy load in slider's change event handler,
      //    the next image still won't be preloaded utill the moment it
      //    slides into the view, which is too late.
      if (this.preloadImgsTimer) {
        clearTimeout(this.preloadImgsTimer)
      }
      // The time just before the second slide appear and enough
      // for all child elements to append is ok.
      var preloadTime = 0.8
      this.preloadImgsTimer = setTimeout(function () {
        var imgs = this.carrousel.element.querySelectorAll('.weex-img')
        for (var i = 0, l = imgs.length; i < l; i++) {
          var img = imgs[i]
          var iLazySrc = img.getAttribute('i-lazy-src')
          var imgSrc = img.getAttribute('img-src')
          if (iLazySrc) {
            img.style.backgroundImage = 'url(' + iLazySrc + ')'
          } else if (imgSrc) {
            img.style.backgroundImage = 'url(' + imgSrc + ')'
          }
          img.removeAttribute('i-lazy-src')
          img.removeAttribute('img-src')
        }
      }.bind(this), preloadTime * 1000)
    
      // avoid page scroll when panning
      var panning = false
      this.carrousel.element.addEventListener('panstart', function (e) {
        if (!e.isVertical) {
          panning = true
        }
      })
      this.carrousel.element.addEventListener('panend', function (e) {
        if (!e.isVertical) {
          panning = false
        }
      })
    
      document.addEventListener('touchmove', function (e) {
        if (panning) {
          e.preventDefault()
          return false
        }
        return true
      }.bind(this))
    
    }
    
    Slider.prototype._updateIndicators = function () {
      this.indicator && this.indicator.setIndex(this.currentIndex)
    }
    
    Slider.prototype._getSliderChangeHandler = function (e) {
      if (!this.sliderChangeHandler) {
        this.sliderChangeHandler = (function (e) {
          var index = this.carrousel.items.index
          this.currentIndex = index
    
          // updateIndicators
          this._updateIndicators()
    
          this.dispatchEvent('change', { index: index })
        }).bind(this)
      }
      return this.sliderChangeHandler
    }
    
    Slider.prototype.play = function () {
      this.carrousel.play()
    }
    
    Slider.prototype.stop = function () {
      this.carrousel.stop()
    }
    
    Slider.prototype.slideTo = function (index) {
      var offset = index - this.currentIndex
      this.carrousel.items.slide(offset)
    }
    
    module.exports = Slider


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});__webpack_require__(53);__webpack_require__(54);__webpack_require__(55);!function(){var a="[data-ctrl-name=carrousel]{position:relative;-webkit-transform:translateZ(1px);-ms-transform:translateZ(1px);transform:translateZ(1px)}",b=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet)b.styleSheet.disabled||(b.styleSheet.cssText=a);else try{b.innerHTML=a}catch(c){b.innerText=a}}();!function(a,b,c){function d(a){var b,c={x:0,y:0},d=getComputedStyle(a)[l+"Transform"];return"none"!==d&&(b=d.match(/^matrix3d\((?:[-\d.]+,\s*){12}([-\d.]+),\s*([-\d.]+)(?:,\s*[-\d.]+){2}\)/)||d.match(/^matrix\((?:[-\d.]+,\s*){4}([-\d.]+),\s*([-\d.]+)\)$/))&&(c.x=parseFloat(b[1])||0,c.y=parseFloat(b[2])||0),c}function e(a,b){return a=parseFloat(a),b=parseFloat(b),0!=a&&(a+="px"),0!=b&&(b+="px"),n?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"}function f(a){return o.call(a)}function g(a,c){function g(a,b){var c=h.createEvent("HTMLEvents");if(c.initEvent(a,!1,!1),b)for(var d in b)c[d]=b[d];n.dispatchEvent(c)}function i(a){for(;0>a;)a+=r;for(;a>=r;)a-=r;return a}function j(a){if(0!==r){var b,c,d=q.get(a);r>1&&(b=q.get(a-1),c=2===r?q.getCloned(a+1):q.get(a+1),d.style.left=-o+"px",b.style.left=-o-s+"px",c.style.left=-o+s+"px"),t=d.index,g("change",{prevItem:b,curItem:d,nextItem:c})}}var k=this,m=Date.now()+"-"+ ++p,n=document.createDocumentFragment();1!==arguments.length||arguments[0]instanceof HTMLElement||(c=arguments[0],a=null),a||(a=document.createElement("ul"),n.appendChild(a)),c=c||{},a.setAttribute("data-ctrl-name","carrousel"),a.setAttribute("data-ctrl-id",m),a.style.position="relative",a.style[l+"Transform"]=e(0,0);var o=0,q={},r=0,s=c.step||a.getBoundingClientRect().width,t=0;q.add=function(b){var c=document.createElement("li");return c.style.display="none",c.style["float"]="left",c.index=r,"string"==typeof b?c.innerHTML=b:b instanceof HTMLElement&&c.appendChild(b),a.appendChild(c),Object.defineProperty(q,r+"",{get:function(){return c}}),r++,c},q.get=function(a){return q[i(a)]},q.getCloned=function(b){function c(a,b,d){var e=a._listeners;if(e){b._listeners=e;for(var f in e)b.addEventListener(f,e[f])}if(d&&a.children&&a.children.length)for(var g=0,h=a.children.length;h>g;g++)c(a.children[g],b.children[g],d)}var b=i(b),d=a.querySelector('[cloned="cloned-'+b+'"]'),e=q[b];return d||(d=e.cloneNode(!0),c(e,d,!0),a.appendChild(d),d.setAttribute("cloned","cloned-"+b),d.index=b),d},q.slide=function(c){if(0!==r){1===r&&(c=0);var f=d(a).x,g=o+s*-c,h=g-f;if(0!==h){new b.animation(400,b.cubicbezier.ease,function(b,c){a.style[l+"Transform"]=e(f+h*c,0)}).play().then(function(){o=g,a.style[l+"Transform"]=e(g,0),c&&j(t+c)})}}},q.next=function(){q.slide(1)},q.prev=function(){q.slide(-1)},f(a.querySelectorAll("li")).forEach(function(a){a.style.position="absolute",a.style.top="0",a.style.left=r*s+"px",a.style["float"]="left",a.index=r,Object.defineProperty(q,r+"",{get:function(){return a}}),r++}),Object.defineProperty(this,"items",{get:function(){return q}}),Object.defineProperty(q,"length",{get:function(){return r}}),Object.defineProperty(q,"index",{get:function(){return t}}),Object.defineProperty(q,"step",{get:function(){return s},set:function(a){s=a}});var u=!1,v=!1,w=!1;this.play=function(){return u?void(v||(v=setTimeout(function(){w=!0,q.next(),setTimeout(function(){w=!1},500),v=setTimeout(arguments.callee,400+z)},400+z))):(u=!0,j(0))},this.stop=function(){v&&(clearTimeout(v),setTimeout(function(){v=!1},500))};var x=!1,y=!1;Object.defineProperty(this,"autoplay",{get:function(){return x},set:function(a){x=!!a,y&&(clearTimeout(y),y=!1),x?y=setTimeout(function(){k.play()},2e3):k.stop()}}),this.autoplay=!!c.autoplay;var z=1500;if(Object.defineProperty(this,"playInterval",{get:function(){return z},set:function(a){z=a}}),this.playInterval=!!c.playInterval||1500,c.useGesture){var A,B=!1;a.addEventListener("panstart",function(a){a.isVertical||B&&w||(a.preventDefault(),a.stopPropagation(),x&&k.stop(),A=0,B=!0)}),a.addEventListener("panmove",function(b){!b.isVertical&&B&&(b.preventDefault(),b.stopPropagation(),A=b.displacementX,a.style[l+"Transform"]=e(o+A,0))}),a.addEventListener("panend",function(a){!a.isVertical&&B&&(a.preventDefault(),a.stopPropagation(),B=!1,a.isflick?0>A?q.next():q.prev():Math.abs(A)<s/2?q.slide(0):q.slide(0>A?1:-1),x&&setTimeout(function(){k.play()},2e3))},!1),a.addEventListener("swipe",function(a){a.isVertical||(a.preventDefault(),a.stopPropagation())})}this.addEventListener=function(a,b){this.root.addEventListener(a,b,!1)},this.removeEventListener=function(a,b){this.root.removeEventListener(a,b,!1)},this.root=n,this.element=a}var h=a.document,i=a.navigator.userAgent,j=!!i.match(/Firefox/i),k=!!i.match(/IEMobile/i),l=j?"Moz":k?"ms":"webkit",m=k?"MSCSSMatrix":"WebKitCSSMatrix",n=!!j||m in a&&"m11"in new a[m],o=Array.prototype.slice,p=0;b.carrousel=g}(window,window.lib,window.ctrl||(window.ctrl={}));;module.exports = window.lib['carrousel'];

/***/ },
/* 53 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){return setTimeout(a,l)}function d(a){clearTimeout(a)}function e(){var a={},b=new m(function(b,c){a.resolve=b,a.reject=c});return a.promise=b,a}function f(a,b){return["then","catch"].forEach(function(c){b[c]=function(){return a[c].apply(a,arguments)}}),b}function g(b){var c,d,h=!1;this.request=function(){h=!1;var g=arguments;return c=e(),f(c.promise,this),d=n(function(){h||c&&c.resolve(b.apply(a,g))}),this},this.cancel=function(){return d&&(h=!0,o(d),c&&c.reject("CANCEL")),this},this.clone=function(){return new g(b)}}function h(a,b){"function"==typeof b&&(b={0:b});for(var c=a/l,d=1/c,e=[],f=Object.keys(b).map(function(a){return parseInt(a)}),h=0;c>h;h++){var i=f[0],j=d*h;if(null!=i&&100*j>=i){var k=b[""+i];k instanceof g||(k=new g(k)),e.push(k),f.shift()}else e.length&&e.push(e[e.length-1].clone())}return e}function i(a){var c;return"string"==typeof a||a instanceof Array?b.cubicbezier?"string"==typeof a?b.cubicbezier[a]&&(c=b.cubicbezier[a]):a instanceof Array&&4===a.length&&(c=b.cubicbezier.apply(b.cubicbezier,a)):console.error("require lib.cubicbezier"):"function"==typeof a&&(c=a),c}function j(a,b,c){var d,g=h(a,c),j=1/(a/l),k=0,m=i(b);if(!m)throw new Error("unexcept timing function");var n=!1;this.play=function(){function a(){var c=j*(k+1).toFixed(10),e=g[k];e.request(c.toFixed(10),b(c).toFixed(10)).then(function(){n&&(k===g.length-1?(n=!1,d&&d.resolve("FINISH"),d=null):(k++,a()))},function(){})}if(!n)return n=!0,d||(d=e(),f(d.promise,this)),a(),this},this.stop=function(){return n?(n=!1,g[k]&&g[k].cancel(),this):void 0}}var k=60,l=1e3/k,m=a.Promise||b.promise&&b.promise.ES6Promise,n=window.requestAnimationFrame||window.msRequestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c,o=window.cancelAnimationFrame||window.msCancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||d;(n===c||o===d)&&(n=c,o=d),b.animation=function(a,b,c){return new j(a,b,c)},b.animation.frame=function(a){return new g(a)},b.animation.requestFrame=function(a){var b=new g(a);return b.request()}}(window,window.lib||(window.lib={}));;module.exports = window.lib['animation'];

/***/ },
/* 54 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a,b,c,d){function e(a){return(3*k*a+2*l)*a+m}function f(a){return((k*a+l)*a+m)*a}function g(a){return((n*a+o)*a+p)*a}function h(a){for(var b,c,d=a,g=0;8>g;g++){if(c=f(d)-a,Math.abs(c)<j)return d;if(b=e(d),Math.abs(b)<j)break;d-=c/b}var h=1,i=0;for(d=a;h>i;){if(c=f(d)-a,Math.abs(c)<j)return d;c>0?h=d:i=d,d=(h+i)/2}return d}function i(a){return g(h(a))}var j=1e-6,k=3*a-3*c+1,l=3*c-6*a,m=3*a,n=3*b-3*d+1,o=3*d-6*b,p=3*b;return i}b.cubicbezier=c,b.cubicbezier.linear=c(0,0,1,1),b.cubicbezier.ease=c(.25,.1,.25,1),b.cubicbezier.easeIn=c(.42,0,1,1),b.cubicbezier.easeOut=c(0,0,.58,1),b.cubicbezier.easeInOut=c(.42,0,.58,1)}(window,window.lib||(window.lib={}));;module.exports = window.lib['cubicbezier'];

/***/ },
/* 55 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a){"use strict";function b(a,b){for(var c=a;c;){if(c.contains(b)||c==b)return c;c=c.parentNode}return null}function c(a,b,c){var d=i.createEvent("HTMLEvents");if(d.initEvent(b,!0,!0),"object"==typeof c)for(var e in c)d[e]=c[e];a.dispatchEvent(d)}function d(a,b,c,d,e,f,g,h){var i=Math.atan2(h-f,g-e)-Math.atan2(d-b,c-a),j=Math.sqrt((Math.pow(h-f,2)+Math.pow(g-e,2))/(Math.pow(d-b,2)+Math.pow(c-a,2))),k=[e-j*a*Math.cos(i)+j*b*Math.sin(i),f-j*b*Math.cos(i)-j*a*Math.sin(i)];return{rotate:i,scale:j,translate:k,matrix:[[j*Math.cos(i),-j*Math.sin(i),k[0]],[j*Math.sin(i),j*Math.cos(i),k[1]],[0,0,1]]}}function e(a){0===Object.keys(l).length&&(j.addEventListener("touchmove",f,!1),j.addEventListener("touchend",g,!1),j.addEventListener("touchcancel",h,!1));for(var d=0;d<a.changedTouches.length;d++){var e=a.changedTouches[d],i={};for(var m in e)i[m]=e[m];var n={startTouch:i,startTime:Date.now(),status:"tapping",element:a.srcElement||a.target,pressingHandler:setTimeout(function(b,d){return function(){"tapping"===n.status&&(n.status="pressing",c(b,"longpress",{touch:d,touches:a.touches,changedTouches:a.changedTouches,touchEvent:a})),clearTimeout(n.pressingHandler),n.pressingHandler=null}}(a.srcElement||a.target,a.changedTouches[d]),500)};l[e.identifier]=n}if(2==Object.keys(l).length){var o=[];for(var m in l)o.push(l[m].element);c(b(o[0],o[1]),"dualtouchstart",{touches:k.call(a.touches),touchEvent:a})}}function f(a){for(var e=0;e<a.changedTouches.length;e++){var f=a.changedTouches[e],g=l[f.identifier];if(!g)return;g.lastTouch||(g.lastTouch=g.startTouch),g.lastTime||(g.lastTime=g.startTime),g.velocityX||(g.velocityX=0),g.velocityY||(g.velocityY=0),g.duration||(g.duration=0);var h=Date.now()-g.lastTime,i=(f.clientX-g.lastTouch.clientX)/h,j=(f.clientY-g.lastTouch.clientY)/h,k=70;h>k&&(h=k),g.duration+h>k&&(g.duration=k-h),g.velocityX=(g.velocityX*g.duration+i*h)/(g.duration+h),g.velocityY=(g.velocityY*g.duration+j*h)/(g.duration+h),g.duration+=h,g.lastTouch={};for(var m in f)g.lastTouch[m]=f[m];g.lastTime=Date.now();var n=f.clientX-g.startTouch.clientX,o=f.clientY-g.startTouch.clientY,p=Math.sqrt(Math.pow(n,2)+Math.pow(o,2));("tapping"===g.status||"pressing"===g.status)&&p>10&&(g.status="panning",g.isVertical=!(Math.abs(n)>Math.abs(o)),c(g.element,"panstart",{touch:f,touches:a.touches,changedTouches:a.changedTouches,touchEvent:a,isVertical:g.isVertical}),c(g.element,(g.isVertical?"vertical":"horizontal")+"panstart",{touch:f,touchEvent:a})),"panning"===g.status&&(g.panTime=Date.now(),c(g.element,"panmove",{displacementX:n,displacementY:o,touch:f,touches:a.touches,changedTouches:a.changedTouches,touchEvent:a,isVertical:g.isVertical}),g.isVertical?c(g.element,"verticalpanmove",{displacementY:o,touch:f,touchEvent:a}):c(g.element,"horizontalpanmove",{displacementX:n,touch:f,touchEvent:a}))}if(2==Object.keys(l).length){for(var q,r=[],s=[],t=[],e=0;e<a.touches.length;e++){var f=a.touches[e],g=l[f.identifier];r.push([g.startTouch.clientX,g.startTouch.clientY]),s.push([f.clientX,f.clientY])}for(var m in l)t.push(l[m].element);q=d(r[0][0],r[0][1],r[1][0],r[1][1],s[0][0],s[0][1],s[1][0],s[1][1]),c(b(t[0],t[1]),"dualtouch",{transform:q,touches:a.touches,touchEvent:a})}}function g(a){if(2==Object.keys(l).length){var d=[];for(var e in l)d.push(l[e].element);c(b(d[0],d[1]),"dualtouchend",{touches:k.call(a.touches),touchEvent:a})}for(var i=0;i<a.changedTouches.length;i++){var n=a.changedTouches[i],o=n.identifier,p=l[o];if(p){if(p.pressingHandler&&(clearTimeout(p.pressingHandler),p.pressingHandler=null),"tapping"===p.status&&(p.timestamp=Date.now(),c(p.element,"tap",{touch:n,touchEvent:a}),m&&p.timestamp-m.timestamp<300&&c(p.element,"doubletap",{touch:n,touchEvent:a}),m=p),"panning"===p.status){var q=Date.now(),r=q-p.startTime,s=((n.clientX-p.startTouch.clientX)/r,(n.clientY-p.startTouch.clientY)/r,n.clientX-p.startTouch.clientX),t=n.clientY-p.startTouch.clientY,u=Math.sqrt(p.velocityY*p.velocityY+p.velocityX*p.velocityX),v=u>.5&&q-p.lastTime<100,w={duration:r,isflick:v,velocityX:p.velocityX,velocityY:p.velocityY,displacementX:s,displacementY:t,touch:n,touches:a.touches,changedTouches:a.changedTouches,touchEvent:a,isVertical:p.isVertical};c(p.element,"panend",w),v&&(c(p.element,"swipe",w),p.isVertical?c(p.element,"verticalswipe",w):c(p.element,"horizontalswipe",w))}"pressing"===p.status&&c(p.element,"pressend",{touch:n,touchEvent:a}),delete l[o]}}0===Object.keys(l).length&&(j.removeEventListener("touchmove",f,!1),j.removeEventListener("touchend",g,!1),j.removeEventListener("touchcancel",h,!1))}function h(a){if(2==Object.keys(l).length){var d=[];for(var e in l)d.push(l[e].element);c(b(d[0],d[1]),"dualtouchend",{touches:k.call(a.touches),touchEvent:a})}for(var i=0;i<a.changedTouches.length;i++){var m=a.changedTouches[i],n=m.identifier,o=l[n];o&&(o.pressingHandler&&(clearTimeout(o.pressingHandler),o.pressingHandler=null),"panning"===o.status&&c(o.element,"panend",{touch:m,touches:a.touches,changedTouches:a.changedTouches,touchEvent:a}),"pressing"===o.status&&c(o.element,"pressend",{touch:m,touchEvent:a}),delete l[n])}0===Object.keys(l).length&&(j.removeEventListener("touchmove",f,!1),j.removeEventListener("touchend",g,!1),j.removeEventListener("touchcancel",h,!1))}var i=a.document,j=i.documentElement,k=Array.prototype.slice,l={},m=null;j.addEventListener("touchstart",e,!1)}(window);;module.exports = window.lib['gesturejs'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(57);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./slider.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./slider.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".slider {\n  position: relative;\n}\n\n.slider .indicator-container {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  font-size: 0;\n}\n.slider .indicator-container .indicator {\n  border-radius: 50%;\n}\n.slider .indicator-container.row {\n  -webkit-box-orient: horizontal;\n  box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n.slider .indicator-container.column {\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n", ""]);
    
    // exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var extend = __webpack_require__(15).extend
    var config = __webpack_require__(13)
    var Atomic = __webpack_require__(37)
    var Component = __webpack_require__(24)
    
    __webpack_require__(59)
    
    var DEFAULT_ITEM_COLOR = '#999'
    var DEFAULT_ITEM_SELECTED_COLOR = '#0000ff'
    var DEFAULT_ITEM_SIZE = 20
    var DEFAULT_MARGIN_SIZE = 10
    
    // Style supported:
    //   position: (default - absolute)
    //   itemColor: color of indicator dots
    //   itemSelectedColor: color of the selected indicator dot
    //   itemSize: size of indicators
    //   other layout styles
    function Indicator (data) {
      this.direction = 'row' // 'column' is not temporarily supported.
      this.amount = data.extra.amount
      this.index = data.extra.index
      this.sliderWidth = data.extra.width
      this.sliderHeight = data.extra.height
      var styles = data.style || {}
      this.data = data
      this.style.width.call(this, styles.width)
      this.style.height.call(this, styles.height)
      this.items = []
      Atomic.call(this, data)
    }
    
    Indicator.prototype = Object.create(Atomic.prototype)
    
    Indicator.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-indicators')
      node.classList.add('weex-element')
      node.style.position = 'absolute'
      this.node = node
      this.style.itemSize.call(this, 0)
      this.itemColor = DEFAULT_ITEM_COLOR
      this.itemSelectedColor = DEFAULT_ITEM_SELECTED_COLOR
      this.updateStyle({
        left: 0,
        top: 0,
        itemSize: 0
      })
      return node
    }
    
    Indicator.prototype.createChildren = function () {
      var root = document.createDocumentFragment()
      for (var i = 0; i < this.amount; i++) {
        var indicator = document.createElement('div')
        indicator.classList.add('weex-indicator')
        indicator.style.boxSizing = 'border-box'
        indicator.style.margin = '0 '
                                + (DEFAULT_MARGIN_SIZE * this.data.scale)
                                + 'px'
        indicator.style.width = this.itemSize + 'px'
        indicator.style.height = this.itemSize + 'px'
        indicator.setAttribute('index', i)
        if (this.index === i) {
          indicator.style.backgroundColor = this.itemSelectedColor
        } else {
          indicator.style.backgroundColor = this.itemColor
        }
        indicator.addEventListener('click', this._clickHandler.bind(this, i))
        this.items[i] = indicator
        root.appendChild(indicator)
      }
      this.node.appendChild(root)
    }
    
    Indicator.prototype.style
        = extend(Object.create(Atomic.prototype.style), {
      itemColor: function (val) {
        this.itemColor = val || DEFAULT_ITEM_COLOR
        for (var i = 0, l = this.items.length; i < l; i++) {
          this.items[i].style.backgroundColor = this.itemColor
        }
      },
    
      itemSelectedColor: function (val) {
        this.itemSelectedColor = val || DEFAULT_ITEM_SELECTED_COLOR
        if (typeof this.index !== 'undefined'
            && this.items.length > this.index) {
          this.items[this.index].style.backgroundColor
              = this.itemSelectedColor
        }
      },
    
      itemSize: function (val) {
        val = parseInt(val) * this.data.scale
              || DEFAULT_ITEM_SIZE * this.data.scale
        this.itemSize = val
        this.node.style.height = val + 'px'
        for (var i = 0, l = this.items.length; i < l; i++) {
          this.items[i].style.width = val + 'px'
          this.items[i].style.height = val + 'px'
        }
      },
    
      width: function (val) {
        val = parseInt(val) * this.data.scale || parseInt(this.sliderWidth)
        this.virtualWrapperWidth = val
      },
    
      height: function (val) {
        val = parseInt(val) * this.data.scale || parseInt(this.sliderHeight)
        this.virtualWrapperHeight = val
      },
    
      top: function (val) {
        val = this.virtualWrapperHeight / 2 - this.itemSize / 2
            + val * this.data.scale
        this.node.style.bottom = ''
        this.node.style.top = val + 'px'
      },
    
      bottom: function (val) {
        val = this.virtualWrapperHeight / 2 - this.itemSize / 2
            + val * this.data.scale
        this.node.style.top = ''
        this.node.style.bottom = val + 'px'
      },
    
      left: function (val) {
        val = this.virtualWrapperWidth / 2
              - (this.itemSize + 2 * DEFAULT_MARGIN_SIZE * this.data.scale)
                  * this.amount / 2
              + val * this.data.scale
        this.node.style.right = ''
        this.node.style.left = val + 'px'
      },
    
      right: function (val) {
        val = this.virtualWrapperWidth / 2
              - (this.itemSize + 2 * DEFAULT_MARGIN_SIZE * this.data.scale)
                  * this.amount / 2
              + val * this.data.scale
        this.node.style.left = ''
        this.node.style.right = val + 'px'
      }
    })
    
    Indicator.prototype.setIndex = function (idx) {
      if (idx >= this.amount) {
        return
      }
      var prev = this.items[this.index]
      var cur = this.items[idx]
      prev.classList.remove('active')
      prev.style.backgroundColor = this.itemColor
      cur.classList.add('active')
      cur.style.backgroundColor = this.itemSelectedColor
      this.index = idx
    }
    
    Indicator.prototype._clickHandler = function (idx) {
      this.slider.slideTo(idx)
    }
    
    module.exports = Indicator


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(60);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./indicator.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./indicator.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-indicators {\n  position: absolute;\n  white-space: nowrap;\n}\n.weex-indicators .weex-indicator {\n  float: left;\n  border-radius: 50%;\n}\n", ""]);
    
    // exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var msgQueue = __webpack_require__(62)
    var config = __webpack_require__(13)
    var utils = __webpack_require__(15)
    
    // TODO: refactor this scss code since this is strongly
    // dependent on lib.flexible other than the value of
    // scale.
    __webpack_require__(63)
    
    function TabHeader(data) {
      Atomic.call(this, data)
    }
    
    var proto = TabHeader.prototype = Object.create(Atomic.prototype)
    
    proto.create = function () {
      // outside container.
      var node = document.createElement('div')
      node.className = 'tab-header'
      // tip on the top.
      var bar = document.createElement('div')
      bar.className = 'header-bar'
      bar.textContent = 'CHANGE FLOOR'
      // middle layer.
      var body = document.createElement('div')
      body.className = 'header-body'
      var box = document.createElement('ul')
      box.className = 'tabheader'
    
      body.appendChild(box)
      node.appendChild(bar)
      node.appendChild(body)
      this._bar = bar
      this._body = body
      this.box = box
      this.node = node
      // init events.
      this._initFoldBtn()
      this._initEvent()
      return node
    }
    
    proto._initFoldBtn = function () {
      var _this = this
      var node = this.node
      var btn = document.createElement('span')
      btn.className = 'fold-toggle iconfont'
      btn.innerHTML = '&#xe661;'
      node.appendChild(btn)
    
      btn.addEventListener('click', function () {
        if (_this.unfolding) {
          _this._folding()
        } else {
          _this._unfolding()
        }
      })
    }
    
    proto._initMask = function () {
      var mask = document.createElement('div')
      mask.className = 'tabheader-mask'
      this.mask = mask
      // stop default behavior: page moving.
      mask.addEventListener('touchmove', function (evt) {
        evt.preventDefault()
      })
      // click to unfold.
      var _this = this
      mask.addEventListener('click', function () {
        _this._folding()
      })
    
      document.body.appendChild(mask)
    }
    
    proto._unfolding = function () {
      // mark the initial posiiton of tabheader
      if (!this.flag) {
        var flag = document.createComment('tabheader')
        this.flag = flag
        this.node.parentNode.insertBefore(flag, this.node)
      }
      if (!this.mask) {
        this._initMask()
      }
    
      // record the scroll position.
      this._scrollVal = this._body.scrollLeft
      // record the position in document.
      this._topVal = this.node.getBoundingClientRect().top
      this._styleTop = this.node.style.top
    
      document.body.appendChild(this.node)
      this.node.classList.add('unfold-header')
      this.node.style.height = 'auto'
      // recalc the position when it is unfolded.
      var thHeight = this.node.getBoundingClientRect().height
      if (thHeight + this._topVal > window.innerHeight) {
        this._topVal = this._topVal
            + (window.innerHeight - thHeight - this._topVal)
      }
    
      this.node.style.top = this._topVal + 'px'
      // process mask style
      this.mask.classList.add('unfold-header')
      this.mask.style.height = window.innerHeight + 'px'
      this.unfolding = true
    }
    
    proto._folding = function () {
      if (this.unfolding !== true) {
        return
      }
    
      this.mask.classList.remove('unfold-header')
      this.node.classList.remove('unfold-header')
    
      this.node.style.height = ''
      this.node.style.top = this._styleTop
    
      // recover the position of tabheader.
      this.flag.parentNode.insertBefore(this.node, this.flag)
      // recover the position of scoller.
      this._body.scrollLeft = this._scrollVal
    
      this._scrollToView()
      this.unfolding = false
    }
    
    proto._initEvent = function () {
      this._initClickEvent()
      this._initSelectEvent()
    }
    
    // init events.
    proto._initClickEvent = function () {
      var box = this.box
      var _this = this
    
      box.addEventListener('click', function (evt) {
        var target = evt.target
        if (target.nodeName === 'UL') {
          return
        }
    
        if (target.parentNode.nodeName === 'LI') {
          target = target.parentNode
        }
    
        var floor = target.getAttribute('data-floor')
    
        if (_this.data.attr.selectedIndex == floor) {
          // Duplicated clicking, not to trigger select event.
          return
        }
    
        fireEvent(target, 'select', {index:  floor})
      })
    }
    
    proto._initSelectEvent = function () {
      var node = this.node
      var _this = this
      node.addEventListener('select', function (evt) {
        var index
        if (evt.index !== undefined) {
          index = evt.index
        } else if (evt.data && evt.data.index !== undefined) {
          index = evt.data.index
        }
    
        if (index === undefined) {
          return
        }
    
        _this.attr.selectedIndex.call(_this, index)
      })
    }
    
    proto.attr = {
      highlightIcon: function () {
        return createHighlightIcon()
      },
      data: function () {
        var attr = this.data.attr
        // Ensure there is a default selected value.
        if (attr.selectedIndex === undefined) {
          attr.selectedIndex = 0
        }
    
        var list = attr.data || []
        var curItem = attr.selectedIndex
    
        var ret = []
        var itemTmpl = '<li class="th-item" data-floor="{{floor}}">'
            + '{{hlIcon}}{{floorName}}</li>'
    
        list.forEach(function (item, idx) {
          var html = itemTmpl.replace('{{floor}}', idx)
          if (curItem == idx) {
            html = html.replace('{{hlIcon}}', createHighlightIcon())
          } else {
            html = html.replace('{{hlIcon}}', '')
          }
    
          html = html.replace('{{floorName}}', item)
    
          ret.push(html)
        }, this)
    
        this.box.innerHTML = ret.join('')
      },
      selectedIndex: function (val) {
        var attr = this.data.attr
    
        if (val === undefined) {
          val = 0
        }
    
        // if (val == attr.selectedIndex) {
        //   return
        // }
    
        attr.selectedIndex = val
    
        this.attr.data.call(this)
    
        this._folding()
        this.style.textHighlightColor.call(this, this.textHighlightColor)
      }
    }
    
    proto.style = Object.create(Atomic.prototype.style)
    
    proto.style.opacity = function (val) {
      if (val === undefined || val < 0 || val > 1) {
        val = 1
      }
    
      this.node.style.opacity = val
    }
    
    proto.style.textColor = function (val) {
      if (!isValidColor(val)) {
        return
      }
    
      this.node.style.color = val
    }
    
    proto.style.textHighlightColor = function (val) {
      if (!isValidColor(val)) {
        return
      }
      this.textHighlightColor = val
      var attr = this.data.attr
    
      var node = this.node.querySelector('[data-floor="'
          + attr.selectedIndex + '"]')
      if (node) {
        node.style.color = val
        this._scrollToView(node)
      }
    }
    
    proto._scrollToView = function (node) {
      if (!node) {
        var attr = this.data.attr
        node = this.node.querySelector('[data-floor="' + attr.selectedIndex + '"]')
      }
      if (!node) {
        return
      }
    
      var defaultVal = this._body.scrollLeft
      var leftVal = defaultVal  - node.offsetLeft + 300
    
      var scrollVal = getScrollVal(this._body.getBoundingClientRect(), node)
      doScroll(this._body, scrollVal)
    }
    
    // scroll the tabheader.
    // positive val means to scroll right.
    // negative val means to scroll left.
    function doScroll(node, val, finish) {
      if (!val) {
        return
      }
      if (finish === undefined) {
        finish = Math.abs(val)
      }
    
      if (finish <= 0) {
        return
      }
    
      setTimeout(function () {
        if (val > 0) {
          node.scrollLeft += 2
        } else {
          node.scrollLeft -= 2
        }
        finish -= 2
    
        doScroll(node, val, finish)
      })
    }
    
    // get scroll distance.
    function getScrollVal(rect, node) {
      var left = node.previousSibling
      var right = node.nextSibling
      var scrollVal
    
      // process left-side element first.
      if (left) {
        var leftRect = left.getBoundingClientRect()
        // only need to compare the value of left.
        if (leftRect.left < rect.left) {
          scrollVal = leftRect.left
          return scrollVal
        }
      }
    
      if (right) {
        var rightRect = right.getBoundingClientRect()
        // compare the value of right.
        if (rightRect.right > rect.right) {
          scrollVal = rightRect.right - rect.right
          return scrollVal
        }
      }
    
      // process current node, from left to right.
      var nodeRect = node.getBoundingClientRect()
      if (nodeRect.left < rect.left) {
        scrollVal = nodeRect.left
      } else if (nodeRect.right > rect.right) {
        scrollVal = nodeRect.right - rect.right
      }
    
      return scrollVal
    }
    
    // trigger and broadcast events.
    function fireEvent(element, type, data) {
      var evt = document.createEvent('Event')
      evt.data = data
      utils.extend(evt, data)
      // need bubble.
      evt.initEvent(type, true, true)
    
      element.dispatchEvent(evt)
    }
    
    function createHighlightIcon(code) {
      var html = '<i class="hl-icon iconfont">' + '&#xe650' + '</i>'
      return html
    }
    
    function isValidColor(color) {
      if (!color) {
        return false
      }
    
      if (color.charAt(0) !== '#') {
        return false
      }
    
      if (color.length !== 7) {
        return false
      }
    
      return true
    }
    
    module.exports = TabHeader


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var config = __webpack_require__(13)
    var messageQueue = []
    
    function flushMessage() {
      if (typeof callJS === 'function' && messageQueue.length > 0) {
        callJS(config.instanceId, JSON.stringify(messageQueue))
        messageQueue.length = 0
      }
    }
    
    function push(msg) {
      messageQueue.push(msg)
    }
    
    /**
     * To fix the problem of callapp, the two-way time loop mechanism must
     * be replaced by directly procedure call except the situation of
     * page loading.
     * 2015-11-03
     */
    function pushDirectly(msg) {
      callJS(config.instanceId, [msg])
    }
    
    module.exports = {
      push: pushDirectly
    }


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(64);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./tabheader.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./tabheader.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".tab-header {\n  position: relative;\n  width: 10rem;\n  font-size: 14px;\n  color: #333;\n}\n.tab-header .header-bar {\n  height: 1.17rem;\n  line-height: 1.17rem;\n  display: none;\n  color: #999;\n  padding-left: 0.4rem;\n}\n.tab-header .header-body {\n  margin-right: 1.07rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.tab-header .header-body::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.tab-header .fold-toggle {\n  position: absolute;\n  top: 0.59rem;\n  -webkit-transform: translateY(-50%);\n  right: 0.29rem;\n  width: 0.48rem;\n  height: 0.48rem;\n  line-height: 0.48rem;\n  text-align: center;\n  z-index: 99;\n  font-size: 14px;\n}\n.tab-header.unfold-header {\n  position: fixed !important;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tabheader {\n  list-style: none;\n  white-space: nowrap;\n  height: 1.17rem;\n  line-height: 1.17rem;\n}\n.tabheader .th-item {\n  padding-left: 0.72rem;\n  position: relative;\n  display: inline-block;\n}\n.tabheader .hl-icon {\n  width: 0.4rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  left: 0.24rem;\n  font-size: 14px;\n}\n\n.unfold-header .header-bar {\n  display: block;\n}\n.unfold-header .fold-toggle {\n  -webkit-transform: translateY(-50%) rotate(180deg);\n}\n.unfold-header .header-body {\n  margin-right: 0;\n  padding: 0.24rem;\n}\n.unfold-header .tabheader {\n  display: block;\n  height: auto;\n}\n.unfold-header .th-item {\n  box-sizing: border-box;\n  float: left;\n  width: 33.3333%;\n  height: 1.01rem;\n  line-height: 1.01rem;\n}\n.unfold-header .hl-icon {\n  margin-right: 0;\n  position: absolute;\n}\n.unfold-header.tabheader-mask {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.tabheader-mask {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n@font-face {\n  font-family: \"iconfont\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAPAIAAAwBwRkZUTXBD98UAAAD8AAAAHE9TLzJXL1zIAAABGAAAAGBjbWFws6IHbgAAAXgAAAFaY3Z0IAyV/swAAApQAAAAJGZwZ20w956VAAAKdAAACZZnYXNwAAAAEAAACkgAAAAIZ2x5ZuxoPFIAAALUAAAEWGhlYWQHA5h3AAAHLAAAADZoaGVhBzIDcgAAB2QAAAAkaG10eAs2AW0AAAeIAAAAGGxvY2EDcAQeAAAHoAAAABBtYXhwASkKKwAAB7AAAAAgbmFtZQl/3hgAAAfQAAACLnBvc3Tm7f0bAAAKAAAAAEhwcmVwpbm+ZgAAFAwAAACVAAAAAQAAAADMPaLPAAAAANIDKnoAAAAA0gMqewAEA/oB9AAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAgAGAwAAAAAAAAAAAAEQAAAAAAAAAAAAAABQZkVkAMAAeObeAyz/LABcAxgAlAAAAAEAAAAAAxgAAAAAACAAAQAAAAMAAAADAAAAHAABAAAAAABUAAMAAQAAABwABAA4AAAACgAIAAIAAgB45lDmYebe//8AAAB45lDmYebe////ixm0GaQZKAABAAAAAAAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACIAAAEyAqoAAwAHAClAJgAAAAMCAANXAAIBAQJLAAICAU8EAQECAUMAAAcGBQQAAwADEQUPKzMRIREnMxEjIgEQ7szMAqr9ViICZgAAAAUALP/hA7wDGAAWADAAOgBSAF4Bd0uwE1BYQEoCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoGCV4RAQwGBAYMXgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtLsBdQWEBLAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKCAkKZhEBDAYEBgxeAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0uwGFBYQEwCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0BOAgEADQ4NAA5mAAMOAQ4DAWYAAQgOAQhkEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CWVlZQChTUzs7MjEXF1NeU15bWDtSO1JLQzc1MToyOhcwFzBRETEYESgVQBMWKwEGKwEiDgIdASE1NCY1NC4CKwEVIQUVFBYUDgIjBiYrASchBysBIiciLgI9ARciBhQWMzI2NCYXBgcOAx4BOwYyNicuAScmJwE1ND4COwEyFh0BARkbGlMSJRwSA5ABChgnHoX+SgKiARUfIw4OHw4gLf5JLB0iFBkZIBMIdwwSEgwNEhKMCAYFCwQCBA8OJUNRUEAkFxYJBQkFBQb+pAUPGhW8HykCHwEMGScaTCkQHAQNIBsSYYg0Fzo6JRcJAQGAgAETGyAOpz8RGhERGhF8GhYTJA4QDQgYGg0jERMUAXfkCxgTDB0m4wAAAgCg/2wDYALsABIAGgAhQB4AAAADAgADWQACAQECTQACAgFRAAECAUUTFjkQBBIrACAGFRQeAxcWOwEyPwESNTQAIiY0NjIWFAKS/tzORFVvMRAJDgEOCW3b/uKEXl6EXgLszpI1lXyJNhEKC30BDIyS/s5ehF5ehAAAAAEAggBJA4QB6AAdABtAGBIRAgEAAUAFAQA+AAABAGgAAQFfEx8CECsBJgcGBwkBLgEGBwYUFwEwMxcVFjI3AT4DLgIDehEWAwP+uP60BhEQBgoKAWEBAQoaCQFeAwQCAQECBAHhEg0DAv61AUkHBAUGCRsJ/qIBAQkJAWICBwYHCAYGAAEAfwCLA4ECJwAhAB1AGhYPAgEAAUAFAQA+AAABAGgCAQEBXyQuEwMRKyUBMCcjNSYHBgcBDgEUFhceAjMyNwkBFjMyNjc+Ai4BA3f+nwEBEhUEAv6iBQUFBQMHCAQOCQFIAUwKDQYMBQMFAQEFwwFeAQERDQID/p8FDAwMBAMEAgkBS/62CQUFAwoJCgkAAAEAAAABAAALIynoXw889QALBAAAAAAA0gMqewAAAADSAyp7ACL/bAO8AxgAAAAIAAIAAAAAAAAAAQAAAxj/bABcBAAAAAAAA7wAAQAAAAAAAAAAAAAAAAAAAAUBdgAiAAAAAAFVAAAD6QAsBAAAoACCAH8AAAAoACgAKAFkAaIB5AIsAAEAAAAHAF8ABQAAAAAAAgAmADQAbAAAAIoJlgAAAAAAAAAMAJYAAQAAAAAAAQAIAAAAAQAAAAAAAgAGAAgAAQAAAAAAAwAkAA4AAQAAAAAABAAIADIAAQAAAAAABQBGADoAAQAAAAAABgAIAIAAAwABBAkAAQAQAIgAAwABBAkAAgAMAJgAAwABBAkAAwBIAKQAAwABBAkABAAQAOwAAwABBAkABQCMAPwAAwABBAkABgAQAYhpY29uZm9udE1lZGl1bUZvbnRGb3JnZSAyLjAgOiBpY29uZm9udCA6IDI2LTgtMjAxNWljb25mb250VmVyc2lvbiAxLjAgOyB0dGZhdXRvaGludCAodjAuOTQpIC1sIDggLXIgNTAgLUcgMjAwIC14IDE0IC13ICJHIiAtZiAtc2ljb25mb250AGkAYwBvAG4AZgBvAG4AdABNAGUAZABpAHUAbQBGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAGkAYwBvAG4AZgBvAG4AdAAgADoAIAAyADYALQA4AC0AMgAwADEANQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwACAAOwAgAHQAdABmAGEAdQB0AG8AaABpAG4AdAAgACgAdgAwAC4AOQA0ACkAIAAtAGwAIAA4ACAALQByACAANQAwACAALQBHACAAMgAwADAAIAAtAHgAIAAxADQAIAAtAHcAIAAiAEcAIgAgAC0AZgAgAC0AcwBpAGMAbwBuAGYAbwBuAHQAAAACAAAAAAAA/4MAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAABAAIAWwECAQMBBAd1bmlFNjUwB3VuaUU2NjEHdW5pRTZERQABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAyADIDGP/hAxj/bAMY/+EDGP9ssAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA==\") format(\"truetype\");\n}\n.iconfont {\n  font-family: iconfont !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n[data-dpr=\"2\"] .tab-header {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tab-header {\n  font-size: 42px;\n}\n\n[data-dpr=\"2\"] .tabheader .hl-icon {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tabheader .hl-icon {\n  font-size: 42px;\n}\n\n[data-dpr=\"2\"] .tab-header .fold-toggle {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tab-header .fold-toggle {\n  font-size: 42px;\n}\n", ""]);
    
    // exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(66)
    __webpack_require__(45)
    
    // lib.scroll events:
    //  - scrollstart
    //  - scrolling
    //  - pulldownend
    //  - pullupend
    //  - pullleftend
    //  - pullrightend
    //  - pulldown
    //  - pullup
    //  - pullleft
    //  - pullright
    //  - contentrefresh
    
    var Component = __webpack_require__(24)
    var utils = __webpack_require__(15)
    
    var directionMap = {
      h: ['row', 'horizontal', 'h', 'x'],
      v: ['column', 'vertical', 'v', 'y']
    }
    
    var DEFAULT_DIRECTION = 'column'
    
    // attrs:
    //  - scroll-direciton: none|vertical|horizontal (default is vertical)
    //  - show-scrollbar: true|false (default is true)
    function Scroller (data, nodeType) {
      var attrs = data.attr || {}
      var direction = attrs.scrollDirection
        || attrs.direction
        || DEFAULT_DIRECTION
      this.direction = directionMap.h.indexOf(direction) === -1
        ? 'v'
        : 'h'
      this.showScrollbar = attrs.showScrollbar || true
      Component.call(this, data, nodeType)
    }
    
    Scroller.prototype = Object.create(Component.prototype)
    
    Scroller.prototype.create = function (nodeType) {
      var Scroll = lib.scroll
      var node = Component.prototype.create.call(this, nodeType)
      node.classList.add('weex-container', 'scroll-wrap')
      this.scrollElement = document.createElement('div')
      this.scrollElement.classList.add(
        'weex-container',
        'scroll-element',
        this.direction + '-scroller'
      )
    
      // Flex will cause a bug to rescale children's size if their total
      // size exceed the limit of their parent. So to use box instead.
      this.scrollElement.style.display = '-webkit-box'
      this.scrollElement.style.display = 'box'
      this.scrollElement.style.webkitBoxOrient = this.direction === 'h'
        ? 'horizontal'
        : 'vertical'
      this.scrollElement.style.boxOrient = this.scrollElement.style.webkitBoxOrient
    
      node.appendChild(this.scrollElement)
      this.scroller = new Scroll({
        // if the direction is x, then the bounding rect of the scroll element
        // should be got by the 'Range' API other than the 'getBoundingClientRect'
        // API, because the width outside the viewport won't be count in by
        // 'getBoundingClientRect'.
        // Otherwise should use the element rect in case there is a child scroller
        // or list in this scroller. If using 'Range', the whole scroll element
        // including the hiding part will be count in the rect.
        useElementRect: this.direction === 'v',
        scrollElement: this.scrollElement,
        direction: this.direction === 'h' ? 'x' : 'y'
      })
      this.scroller.init()
      this.offset = 0
      return node
    }
    
    Scroller.prototype.bindEvents = function (evts) {
      Component.prototype.bindEvents.call(this, evts)
      // to enable lazyload for Images
      this.scroller.addEventListener('scrolling', function (e) {
        var so = e.scrollObj
        var scrollTop = so.getScrollTop()
        var scrollLeft = so.getScrollLeft()
        var offset = this.direction === 'v' ? scrollTop : scrollLeft
        var diff = offset - this.offset
        var dir
        if (diff >= 0) {
          dir = this.direction === 'v' ? 'up' : 'left'
        } else {
          dir = this.direction === 'v' ? 'down' : 'right'
        }
        this.dispatchEvent('scroll', {
          originalType: 'scrolling',
          scrollTop: so.getScrollTop(),
          scrollLeft: so.getScrollLeft(),
          offset: offset,
          direction: dir
        }, {
          bubbles: true
        })
        this.offset = offset
      }.bind(this))
    
      var pullendEvent = 'pull'
        + ({ v: 'up', h: 'left' })[this.direction]
        + 'end'
      this.scroller.addEventListener(pullendEvent, function (e) {
        this.dispatchEvent('loadmore')
      }.bind(this))
    }
    
    Scroller.prototype.createChildren = function () {
      var children = this.data.children
      var parentRef = this.data.ref
      var componentManager = this.getComponentManager()
      if (children && children.length) {
        var fragment = document.createDocumentFragment()
        var isFlex = false
        for (var i = 0; i < children.length; i++) {
          children[i].instanceId = this.data.instanceId
          children[i].scale = this.data.scale
          var child = componentManager.createElement(children[i])
          fragment.appendChild(child.node)
          child.parentRef = parentRef
          if (!isFlex
              && child.data.style
              && child.data.style.hasOwnProperty('flex')
            ) {
            isFlex = true
          }
        }
        this.scrollElement.appendChild(fragment)
      }
      // wait for fragment to appended on scrollElement on UI thread.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    Scroller.prototype.appendChild = function (data) {
      var children = this.data.children
      var componentManager = this.getComponentManager()
      var child = componentManager.createElement(data)
      this.scrollElement.appendChild(child.node)
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    
      // update this.data.children
      if (!children || !children.length) {
        this.data.children = [data]
      } else {
        children.push(data)
      }
    
      return child
    }
    
    Scroller.prototype.insertBefore = function (child, before) {
      var children = this.data.children
      var i = 0
      var isAppend = false
    
      // update this.data.children
      if (!children || !children.length || !before) {
        isAppend = true
      } else {
        for (var l = children.length; i < l; i++) {
          if (children[i].ref === before.data.ref) {
            break
          }
        }
        if (i === l) {
          isAppend = true
        }
      }
    
      if (isAppend) {
        this.scrollElement.appendChild(child.node)
        children.push(child.data)
      } else {
        if (before.fixedPlaceholder) {
          this.scrollElement.insertBefore(child.node, before.fixedPlaceholder)
        } else {
          this.scrollElement.insertBefore(child.node, before.node)
        }
        children.splice(i, 0, child.data)
      }
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    Scroller.prototype.removeChild = function (child) {
      var children = this.data.children
      // remove from this.data.children
      var i = 0
      var componentManager = this.getComponentManager()
      if (children && children.length) {
        for (var l = children.length; i < l; i++) {
          if (children[i].ref === child.data.ref) {
            break
          }
        }
        if (i < l) {
          children.splice(i, 1)
        }
      }
      // remove from componentMap recursively
      componentManager.removeElementByRef(child.data.ref)
      if (child.fixedPlaceholder) {
        this.scrollElement.removeChild(child.fixedPlaceholder)
      }
      child.node.parentNode.removeChild(child.node)
    
      // wait for UI thread to update.
      setTimeout(function () {
        this.scroller.refresh()
      }.bind(this), 0)
    }
    
    module.exports = Scroller


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(67);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./scroller.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./scroller.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".scroll-wrap {\n  display: block;\n  overflow: hidden;\n}\n\n.scroll-element.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n.scroll-element.vertical {\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n", ""]);
    
    // exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var utils = __webpack_require__(15)
    
    // attrs:
    //   - type: text|password|tel|email|url
    //   - value
    //   - placeholder
    //   - disabled
    //   - autofocus
    function Input (data) {
      var attrs = data.attr || {}
      this.type = attrs.type || 'text'
      this.value = attrs.value
      this.placeholder = attrs.placeholder
      this.autofocus = attrs.autofocus && (attrs.autofocus !== 'false')
                        ? true
                        : false
      Atomic.call(this, data)
    }
    
    Input.prototype = Object.create(Atomic.prototype)
    
    Input.prototype.create = function () {
      var node = document.createElement('input')
      var uuid = Math.floor(10000000000000 * Math.random()) + Date.now()
      this.className = 'weex-ipt-' + uuid
      this.styleId = 'weex-style-' + uuid
      node.classList.add(this.className)
      node.setAttribute('type', this.type)
      node.type = this.type
      // For the consistency of input component's width.
      // The date and time type of input will have a bigger width
      // when the 'box-sizing' is not set to 'border-box'
      node.classList.add('weex-element')
      this.value && (node.value = this.value)
      this.placeholder && (node.placeholder = this.placeholder)
      return node
    }
    
    Input.prototype.updateStyle = function (style) {
      Atomic.prototype.updateStyle.call(this, style)
      if (style && style.placeholderColor) {
        this.placeholderColor = style.placeholderColor
        this.setPlaceholderColor()
      }
    }
    
    Input.prototype.attr = {
      disabled: function (val) {
        this.node.disabled = val && val !== 'false'
                        ? true
                        : false
      }
    }
    
    Input.prototype.setPlaceholderColor = function () {
      if (!this.placeholderColor) {
        return
      }
      var vendors = [
        '::-webkit-input-placeholder',
        ':-moz-placeholder',
        '::-moz-placeholder',
        ':-ms-input-placeholder',
        ':placeholder-shown'
      ]
      var css = ''
      var cssRule = 'color: ' + this.placeholderColor + ';'
      for (var i = 0, l = vendors.length; i < l; i++) {
        css += '.' + this.className + vendors[i] + '{'
               + cssRule + '}'
      }
      utils.appendStyle(css, this.styleId, true)
    }
    
    module.exports = Input


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(24)
    var sender = __webpack_require__(28)
    
    // attrs:
    //   - options: the options to be listed, as a array of strings.
    //   - selectedIndex: the selected options' index number.
    //   - disabled
    function Select (data) {
      var attrs = data.attr || {}
      this.options = []
      this.selectedIndex = 0
      Atomic.call(this, data)
    }
    
    Select.prototype = Object.create(Atomic.prototype)
    
    Select.prototype.create = function () {
      var node = document.createElement('select')
      var uuid = Math.floor(10000000000000 * Math.random()) + Date.now()
      this.className = 'weex-slct-' + uuid
      this.styleId = 'weex-style-' + uuid
      node.classList.add(this.className)
      // For the consistency of input component's width.
      // The date and time type of input will have a bigger width
      // when the 'box-sizing' is not set to 'border-box'
      node.style['box-sizing'] = 'border-box'
      return node
    }
    
    Select.prototype.attr = {
      disabled: function (val) {
        this.node.disabled = val && val !== 'false'
                        ? true
                        : false
      },
      options: function (val) {
        if (Object.prototype.toString.call(val) !== '[object Array]') {
          return
        }
        this.options = val
        this.node.innerHTML = ''
        this.createOptions(val)
      },
      selectedIndex: function (val) {
        val = parseInt(val)
        if (typeof val !== 'number' || val !== val || val >= this.options.length) {
          return
        }
        this.node.value = this.options[val]
      }
    }
    
    Select.prototype.bindEvents = function (evts) {
      var isListenToChange = false
      Atomic.prototype.bindEvents.call(
          this,
          evts.filter(function (val) {
            var pass = val !== 'change'
            !pass && (isListenToChange = true)
            return pass
          }))
      if (isListenToChange) {
        this.node.addEventListener('change', function (e) {
          e.index = this.options.indexOf(this.node.value)
          sender.fireEvent(this.data.ref, 'change', e)
        }.bind(this))
      }
    }
    
    Select.prototype.createOptions = function (opts) {
      var optDoc = document.createDocumentFragment()
      var opt
      for (var i = 0, l = opts.length; i < l; i++) {
        opt = document.createElement('option')
        opt.appendChild(document.createTextNode(opts[i]))
        optDoc.appendChild(opt)
      }
      this.node.appendChild(optDoc)
    }
    
    module.exports = Select


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    
    // attrs:
    //   - value
    //   - disabled
    function Datepicker (data) {
      Atomic.call(this, data)
    }
    
    Datepicker.prototype = Object.create(Atomic.prototype)
    
    Datepicker.prototype.create = function () {
      var node = document.createElement('input')
      var uuid = Math.floor(10000000000000 * Math.random()) + Date.now()
      this.className = 'weex-ipt-' + uuid
      this.styleId = 'weex-style-' + uuid
      node.classList.add(this.className)
      node.setAttribute('type', 'date')
      node.type = 'date'
      // For the consistency of input component's width.
      // The date and time type of input will have a bigger width
      // when the 'box-sizing' is not set to 'border-box'
      node.classList.add('weex-element')
      return node
    }
    
    Datepicker.prototype.attr = {
      disabled: function (val) {
        this.node.disabled = val && val !== 'false'
                        ? true
                        : false
      }
    }
    
    module.exports = Datepicker


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    
    // attrs:
    //   - value
    //   - disabled
    function Timepicker (data) {
      Atomic.call(this, data)
    }
    
    Timepicker.prototype = Object.create(Atomic.prototype)
    
    Timepicker.prototype.create = function () {
      var node = document.createElement('input')
      var uuid = Math.floor(10000000000000 * Math.random()) + Date.now()
      this.className = 'weex-ipt-' + uuid
      this.styleId = 'weex-style-' + uuid
      node.classList.add(this.className)
      node.setAttribute('type', 'time')
      node.type = 'time'
      // For the consistency of input component's width.
      // The date and time type of input will have a bigger width
      // when the 'box-sizing' is not set to 'border-box'
      node.classList.add('weex-element')
      return node
    }
    
    Timepicker.prototype.attr = {
      disabled: function (val) {
        this.node.disabled = val && val !== 'false'
                        ? true
                        : false
      }
    }
    
    module.exports = Timepicker


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var utils = __webpack_require__(15)
    __webpack_require__(73)
    
    // attrs:
    //   - autoPlay: true | false (default: false)
    //   - playStatus: play | pause | stop
    //   - src: {string}
    //   - poster: {string}
    //   - loop: true | false (default: false)
    //   - muted: true | false (default: false)
    // events:
    //   - start
    //   - pause
    //   - finish
    //   - fail
    function Video (data) {
      var autoPlay = data.attr.autoPlay
      var playStatus = data.attr.playStatus
      this.autoPlay = autoPlay === true || autoPlay === 'true'
      if (playStatus !== 'play'
          && playStatus !== 'stop'
          && playStatus !== 'pause') {
        this.playStatus = 'pause'
      } else {
        this.playStatus = playStatus
      }
      Atomic.call(this, data)
    }
    
    Video.prototype = Object.create(Atomic.prototype)
    
    Video.prototype.attr = {
      playStatus: function (val) {
        if (val !== 'play' && val !== 'stop' && val !== 'pause') {
          val = 'pause'
        }
        if (this.playStatus === val) {
          return
        }
        this.playStatus = val
        this.node.setAttribute('play-status', val)
        this[this.playStatus]()
      },
      autoPlay: function (val) {
        // DO NOTHING
      }
    }
    
    Video.prototype.create = function () {
      var node = document.createElement('video')
      node.classList.add('weex-video', 'weex-element')
      node.controls = true
      node.autoplay = this.autoPlay
      node.setAttribute('play-status', this.playStatus)
      this.node = node
      if (this.autoPlay && this.playStatus === 'play') {
        this.play()
      }
      return node
    }
    
    Video.prototype.bindEvents = function (evts) {
      Atomic.prototype.bindEvents.call(this, evts)
    
      // convert w3c-video events to weex-video events.
      var evtsMap = {
        start: 'play',
        finish: 'ended',
        fail: 'error'
      }
      for (var evtName in evtsMap) {
        this.node.addEventListener(evtsMap[evtName], function (type, e) {
          this.dispatchEvent(type, e.data)
        }.bind(this, evtName))
      }
    }
    
    Video.prototype.play = function () {
      var src = this.node.getAttribute('src')
      if (!src) {
        src = this.node.getAttribute('data-src')
        src && this.node.setAttribute('src', src)
      }
      this.node.play()
    }
    
    Video.prototype.pause = function () {
      this.node.pause()
    }
    
    Video.prototype.stop = function () {
      this.node.pause()
      this.node.autoplay = false
      this.node.setAttribute('data-src', this.node.src)
      this.node.src = ''
    }
    
    module.exports = Video


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(74);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./video.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./video.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-video {\n\tbackground-color: #000;\n}", ""]);
    
    // exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var utils = __webpack_require__(15)
    __webpack_require__(76)
    
    var defaults = {
      color: '#64bd63'
      , secondaryColor: '#dfdfdf'
      , jackColor: '#fff'
      , jackSecondaryColor: null
      , className: 'weex-switch'
      , disabledOpacity: 0.5
      , speed: '0.4s'
      , width: 100
      , height: 60
      // is width and height scalable ?
      , scalable: false
    }
    
    // attrs:
    //   - checked: if is checked.
    //   - disabled: if true, this component is not available for interaction.
    function Switch (data) {
      this.options = utils.extend({}, defaults)
      this.checked = data.attr.checked
          && data.attr.checked !== 'false' ? true : false
      this.data = data
      this.width = this.options.width * data.scale
      this.height = this.options.height * data.scale
      Atomic.call(this, data)
    }
    
    Switch.prototype = Object.create(Atomic.prototype)
    
    Switch.prototype.create = function () {
      var node = document.createElement('span')
      this.jack = document.createElement('small')
      node.appendChild(this.jack)
      node.className = this.options.className
      this.node = node
      this.attr.disabled.call(this, this.data.attr.disabled)
      return node
    }
    
    Switch.prototype.onAppend = function () {
      this.setSize()
      this.setPosition()
    }
    
    Switch.prototype.attr = {
      disabled: function (val) {
        this.disabled = val && val !== 'false'
                        ? true
                        : false
        this.disabled ? this.disable() : this.enable()
      }
    }
    
    Switch.prototype.setSize = function () {
      var min = Math.min(this.width, this.height)
      var max = Math.max(this.width, this.height)
      this.node.style.width = max + 'px'
      this.node.style.height = min + 'px'
      this.node.style.borderRadius = min / 2 + 'px'
      this.jack.style.width
          = this.jack.style.height
          = min + 'px'
    }
    
    Switch.prototype.setPosition = function (clicked) {
      var checked = this.checked
      var node = this.node
      var jack = this.jack
    
      if (clicked && checked) {
        checked = false
      } else if (clicked && !checked) {
        checked = true
      }
    
      if (checked === true) {
        this.checked = true
    
        if (window.getComputedStyle) {
          jack.style.left = parseInt(window.getComputedStyle(node).width)
                            - parseInt(window.getComputedStyle(jack).width) + 'px'
        } else {
          jack.style.left = parseInt(node.currentStyle['width'])
                            - parseInt(jack.currentStyle['width']) + 'px'
        }
    
        this.options.color && this.colorize()
        this.setSpeed()
      } else {
        this.checked = false
        jack.style.left = 0
        node.style.boxShadow = 'inset 0 0 0 0 ' + this.options.secondaryColor
        node.style.borderColor = this.options.secondaryColor
        node.style.backgroundColor
            = (this.options.secondaryColor !== defaults.secondaryColor)
              ? this.options.secondaryColor
              : '#fff'
        jack.style.backgroundColor
            = (this.options.jackSecondaryColor !== this.options.jackColor)
              ? this.options.jackSecondaryColor
              : this.options.jackColor
        this.setSpeed()
      }
    }
    
    Switch.prototype.colorize = function () {
      var nodeHeight = this.node.offsetHeight / 2
    
      this.node.style.backgroundColor = this.options.color
      this.node.style.borderColor = this.options.color
      this.node.style.boxShadow = 'inset 0 0 0 '
                                  + nodeHeight
                                  + 'px '
                                  + this.options.color
      this.jack.style.backgroundColor = this.options.jackColor
    }
    
    Switch.prototype.setSpeed = function () {
      var switcherProp = {}
      var jackProp = {
          'background-color': this.options.speed
          , left: this.options.speed.replace(/[a-z]/, '') / 2 + 's'
        }
    
      if (this.checked) {
        switcherProp = {
          border: this.options.speed
          , 'box-shadow': this.options.speed
          , 'background-color': this.options.speed.replace(/[a-z]/, '') * 3 + 's'
        }
      } else {
        switcherProp = {
          border: this.options.speed
          , 'box-shadow': this.options.speed
        }
      }
    
      utils.transitionize(this.node, switcherProp)
      utils.transitionize(this.jack, jackProp)
    }
    
    Switch.prototype.disable = function () {
      !this.disabled && (this.disabled = true)
      this.node.style.opacity = defaults.disabledOpacity
      this.node.removeEventListener('click', this.getClickHandler())
    }
    
    Switch.prototype.enable = function () {
      this.disabled && (this.disabled = false)
      this.node.style.opacity = 1
      this.node.addEventListener('click', this.getClickHandler())
    }
    
    Switch.prototype.getClickHandler = function () {
      if (!this._clickHandler) {
        this._clickHandler = function () {
          // var parent = this.node.parentNode.tagName.toLowerCase()
          // var labelParent = (parent === 'label') ? false : true
          this.setPosition(true)
          this.dispatchEvent('change', {
            checked: this.checked
          })
        }.bind(this)
      }
      return this._clickHandler
    }
    
    Switch.prototype.style
        = utils.extend(Object.create(Atomic.prototype.style), {
    
          width: function (val) {
            if (!this.options.scalable) {
              return
            }
            val = parseFloat(val)
            if (val !== val || val < 0) { // NaN
              val = this.options.width
            }
            this.width = val * this.data.scale
            this.setSize()
          },
    
          height: function (val) {
            if (!this.options.scalable) {
              return
            }
            val = parseFloat(val)
            if (val !== val || val < 0) { // NaN
              val = this.options.height
            }
            this.height = val * this.data.scale
            this.setSize()
          }
    
        })
    
    module.exports = Switch


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(77);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./switch.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./switch.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, "/* switch defaults. */\n.weex-switch {\n  background-color: #fff;\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n}\n\n.weex-switch > small {\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n}\n", ""]);
    
    // exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var logger = __webpack_require__(32)
    var Component = __webpack_require__(24)
    
    // attrs:
    //   - href
    function A (data) {
      Component.call(this, data)
    }
    
    A.prototype = Object.create(Component.prototype)
    
    A.prototype.create = function () {
      var node = document.createElement('a')
      node.classList.add('weex-container')
      node.style.textDecoration = 'none'
      return node
    }
    
    A.prototype.attr = {
      href: function (val) {
        if (!val) {
          return logger.warn('href of <a> should not be a null value.')
        }
        this.href = val
        this.node.setAttribute('data-href', val)
      }
    }
    
    A.prototype.bindEvents = function (evts) {
      // event handler for click event will be processed
      // before the url redirection.
      Component.prototype.bindEvents.call(this, evts)
      this.node.addEventListener('click', function (evt) {
        if (evt._alreadyFired && evt.target !== this.node) {
          // if the event target is this.node, then this is
          // just another click event handler for the same
          // target, not a handler for a bubbling up event,
          // otherwise it is a bubbling up event, and it
          // should be disregarded.
          return
        }
        evt._alreadyFired = true
        location.href = this.href
      }.bind(this))
    }
    
    module.exports = A


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Component = __webpack_require__(24)
    var utils = __webpack_require__(15)
    
    var ID_PREFIX = 'weex_embed_'
    
    function _generateId() {
      return ID_PREFIX + utils.getRandom(10)
    }
    
    function Embed (data, nodeType) {
      var attr = data.attr
      if (attr) {
        this.source = attr.src
        this.loader = attr.loader || 'xhr'
        this.jsonpCallback = attr.jsonpCallback
      }
      Component.call(this, data, nodeType)
    }
    
    Embed.prototype = Object.create(Component.prototype)
    
    Embed.prototype.create = function () {
      var node = document.createElement('div')
      node.id = this.id
      node.style.overflow = 'scroll'
      return node
    }
    
    Embed.prototype.initWeex = function () {
      this.id = _generateId()
      this.node.id = this.id
      var config = {
        appId: this.id,
        source: this.source,
        bundleUrl: this.source,
        loader: this.loader,
        jsonpCallback: this.jsonpCallback,
        width: this.node.getBoundingClientRect().width,
        rootId: this.id,
        embed: true
      }
      window.weex.init(config)
    }
    
    Embed.prototype.destroyWeex = function () {
      this.id && window.destroyInstance(this.id)
      // TODO: unbind events and clear doms.
      this.node.innerHTML = ''
    }
    
    Embed.prototype.reloadWeex = function () {
      if (this.id) {
        this.destroyWeex()
        this.id = null
        this.node.id = null
        this.node.innerHTML = ''
      }
      this.initWeex()
    }
    
    // not recommended, because of the leak of memory.
    Embed.prototype.attr = {
      src: function (value) {
        this.source = value
        this.reloadWeex()
      }
    }
    
    module.exports = Embed


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Component = __webpack_require__(24)
    
    __webpack_require__(81)
    
    var parents = ['scroller', 'list']
    
    // Only if pulldown offset is larger than this value can this
    // component trigger the 'refresh' event, otherwise just recover
    // to the start point.
    var CLAMP = 130
    
    var ua = window.navigator.userAgent
    var Firefox = !!ua.match(/Firefox/i)
    var IEMobile = !!ua.match(/IEMobile/i)
    var cssPrefix = Firefox ? '-moz-' : IEMobile ? '-ms-' : '-webkit-'
    
    function Refresh (data) {
      Component.call(this, data)
    }
    
    Refresh.prototype = Object.create(Component.prototype)
    
    Refresh.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-container', 'weex-refresh')
      return node
    }
    
    Refresh.prototype.onAppend = function () {
      var parent = this.getParent()
      var self = this
      if (parents.indexOf(parent.data.type) === -1) {
        return
      }
      parent.scroller.addEventListener('pulldown', function (e) {
        self.adjustHeight(Math.abs(e.scrollObj.getScrollTop()))
        if (!this.display) {
          self.show()
        }
      })
      parent.scroller.addEventListener('pulldownend', function (e) {
        var top = Math.abs(e.scrollObj.getScrollTop())
        if (top > CLAMP) {
          self.handleRefresh(e)
        }
      })
    }
    
    Refresh.prototype.adjustHeight = function (val) {
      this.node.style.height = val + 'px'
      this.node.style.top = -val + 'px'
    }
    
    Refresh.prototype.handleRefresh = function (e) {
      var scrollObj = e.scrollObj
      var parent = this.getParent()
      var scrollElement = parent.scrollElement || parent.listElement
      this.node.style.height = CLAMP + 'px'
      this.node.style.top = -CLAMP + 'px'
      var translateStr = 'translate3d(0px,' + CLAMP + 'px,0px)'
      scrollElement.style[cssPrefix + 'transform']
        = cssPrefix + translateStr
      scrollElement.style.transform = translateStr
      this.dispatchEvent('refresh')
    }
    
    Refresh.prototype.show = function () {
      this.display = true
      this.node.style.display = '-webkit-box'
      this.node.style.display = '-webkit-flex'
      this.node.style.display = 'flex'
    }
    
    Refresh.prototype.hide = function () {
      this.display = false
      var parent = this.getParent()
      if (parent) {
        var scrollElement = parent.scrollElement || parent.listElement
        var translateStr = 'translate3d(0px,0px,0px)'
        scrollElement.style[cssPrefix + 'transform']
          = cssPrefix + translateStr
        scrollElement.style.transform = translateStr
      }
      this.node.style.display = 'none'
    }
    
    Refresh.prototype.attr = {
      display: function (val) {
        if (val === 'show') {
          setTimeout(function () {
            this.show()
          }.bind(this), 0)
        } else if (val === 'hide') {
          setTimeout(function () {
            this.hide()
          }.bind(this), 0)
        } else {
          // TODO
          console.error('h5render:attribute value of refresh \'display\' '
              + val
              + ' is invalid. Should be \'show\' or \'hide\'')
        }
      }
    }
    
    module.exports = Refresh


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(82);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./refresh.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./refresh.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-refresh {\n  // -webkit-box-align: center;\n  // -webkit-align-items: center;\n  // align-items: center;\n  // -webkit-box-pack: center;\n  // -webkit-justify-content: center;\n  // justify-content: center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n}", ""]);
    
    // exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Component = __webpack_require__(24)
    
    __webpack_require__(84)
    
    var parents = ['scroller', 'list']
    
    var DEFAULT_HEIGHT = 130
    
    var ua = window.navigator.userAgent
    var Firefox = !!ua.match(/Firefox/i)
    var IEMobile = !!ua.match(/IEMobile/i)
    var cssPrefix = Firefox ? '-moz-' : IEMobile ? '-ms-' : '-webkit-'
    
    function Loading (data) {
      Component.call(this, data)
    }
    
    Loading.prototype = Object.create(Component.prototype)
    
    Loading.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-container', 'weex-loading')
      return node
    }
    
    Loading.prototype.onAppend = function () {
      var parent = this.getParent()
      var self = this
      var scrollWrapHeight = parent.node.getBoundingClientRect().height
      if (parents.indexOf(parent.data.type) === -1) {
        return
      }
      parent.scroller.addEventListener('pullup', function (e) {
        var obj = e.scrollObj
        self.adjustHeight(Math.abs(
          obj.getScrollHeight() - obj.getScrollTop() - scrollWrapHeight))
        if (!self.display) {
          self.show()
        }
      })
      parent.scroller.addEventListener('pullupend', function (e) {
        self.handleLoading(e)
      })
    }
    
    Loading.prototype.adjustHeight = function (val) {
      this.node.style.height = val + 'px'
      this.node.style.bottom = -val + 'px'
    }
    
    Loading.prototype.handleLoading = function (e) {
      var parent = this.getParent()
      var scrollElement = parent.scrollElement || parent.listElement
      var offset = scrollElement.getBoundingClientRect().height
                - parent.node.getBoundingClientRect().height
                + DEFAULT_HEIGHT
      this.node.style.height = DEFAULT_HEIGHT + 'px'
      this.node.style.bottom = -DEFAULT_HEIGHT + 'px'
      var translateStr = 'translate3d(0px,-' + offset + 'px,0px)'
      scrollElement.style[cssPrefix + 'transform']
        = cssPrefix + translateStr
      scrollElement.style.transform = translateStr
      this.dispatchEvent('loading')
    }
    
    Loading.prototype.show = function () {
      this.display = true
      this.node.style.display = '-webkit-box'
      this.node.style.display = '-webkit-flex'
      this.node.style.display = 'flex'
    }
    
    Loading.prototype.hide = function () {
      this.display = false
      var parent = this.getParent()
      if (parent) {
        var scrollElement = parent.scrollElement || parent.listElement
        var scrollElementHeight = scrollElement.getBoundingClientRect().height
        var scrollWrapHeight = parent.node.getBoundingClientRect().height
        var left = scrollElementHeight
          - parent.scroller.getScrollTop()
          - scrollWrapHeight
        if (left < 0) {
          var offset = scrollElementHeight
                  - parent.node.getBoundingClientRect().height
          var translateStr = 'translate3d(0px,-' + offset + 'px,0px)'
          scrollElement.style[cssPrefix + 'transform']
            = cssPrefix + translateStr
          scrollElement.style.transform = translateStr
        }
      }
      this.node.style.display = 'none'
    }
    
    Loading.prototype.attr = {
      display: function (val) {
        if (val === 'show') {
          setTimeout(function () {
            this.show()
          }.bind(this), 0)
        } else if (val === 'hide') {
          setTimeout(function () {
            this.hide()
          }.bind(this), 0)
        } else {
          // TODO
          console.error('h5render:attribute value of refresh \'display\' '
              + val
              + ' is invalid. Should be \'show\' or \'hide\'')
        }
      }
    }
    
    module.exports = Loading


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(85);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./loading.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./loading.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-loading {\n  // -webkit-box-align: center;\n  // -webkit-align-items: center;\n  // align-items: center;\n  // -webkit-box-pack: center;\n  // -webkit-justify-content: center;\n  // justify-content: center;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n}", ""]);
    
    // exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var utils = __webpack_require__(15)
    
    __webpack_require__(87)
    
    function Spinner (data) {
      Atomic.call(this, data)
    }
    
    Spinner.prototype = Object.create(Atomic.prototype)
    
    Spinner.prototype.create = function () {
      var node = document.createElement('div')
      node.classList.add('weex-container', 'weex-spinner-wrap')
      this.spinner = document.createElement('div')
      this.spinner.classList.add('weex-element', 'weex-spinner')
      node.appendChild(this.spinner)
      return node
    }
    
    Spinner.prototype.updateStyle = function (style) {
      Atomic.prototype.updateStyle.call(this, style)
      if (style && style.color) {
        this.setKeyframeColor(utils.getRgb(this.node.style.color))
      }
    }
    
    Spinner.prototype.getStyleSheet = function () {
      if (this.styleSheet) {
        return
      }
      var styles = document.styleSheets
      outer: for (var i = 0, l = styles.length; i < l; i++) {
        var rules = styles[i].rules
        for (var j = 0, m = rules.length; j < m; j++) {
          var item = rules.item(j)
          if (
            (item.type === CSSRule.KEYFRAMES_RULE
              || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
            && item.name === 'spinner') {
            break outer
          }
        }
      }
      this.styleSheet = styles[i]
    }
    
    Spinner.prototype.setKeyframeColor = function (val) {
      this.getStyleSheet()
      var keyframeRules = this.computeKeyFrameRules(val)
      var rules, item, cssRules, keyframe
      rules = this.styleSheet.rules
      for (var i = 0, l = rules.length; i < l; i++) {
        item = rules.item(i)
        if ((item.type === CSSRule.KEYFRAMES_RULE
              || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
            && item.name === 'spinner') {
          cssRules = item.cssRules
          for (var j = 0, m = cssRules.length; j < m; j++) {
            keyframe = cssRules[j]
            if (keyframe.type === CSSRule.KEYFRAME_RULE
              || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
              keyframe.style.boxShadow = keyframeRules[j]
            }
          }
        }
      }
    }
    
    Spinner.prototype.computeKeyFrameRules = function (rgb) {
      if (!rgb) {
        return
      }
      var scaleArr = [
        '0em -2.6em 0em 0em',
        '1.8em -1.8em 0 0em',
        '2.5em 0em 0 0em',
        '1.75em 1.75em 0 0em',
        '0em 2.5em 0 0em',
        '-1.8em 1.8em 0 0em',
        '-2.6em 0em 0 0em',
        '-1.8em -1.8em 0 0em']
      var colorArr = [
        '1',
        '0.2',
        '0.2',
        '0.2',
        '0.2',
        '0.2',
        '0.5',
        '0.7'].map(function (e) {
          return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')'
        })
      var rules = []
      for (var i = 0; i < scaleArr.length; i++) {
        var tmpColorArr = utils.loopArray(colorArr, i, 'r')
        rules.push(scaleArr.map(function (scaleStr, i) {
          return scaleStr + ' ' + tmpColorArr[i]
        }).join(', '))
      }
      return rules
    }
    
    module.exports = Spinner


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(88);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../node_modules/css-loader/index.js!./spinner.css", function() {
                var newContent = require("!!./../../node_modules/css-loader/index.js!./spinner.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".weex-spinner-wrap {\n  width: 1.013333rem; /* 76px */\n  height: 1.013333rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  overflow: visible;\n}\n\n.weex-spinner {\n  font-size: 0.16rem; /* 12px */\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: spinner 1.1s infinite ease;\n  animation: spinner 1.1s infinite ease;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n@keyframes spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n", ""]);
    
    // exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Atomic = __webpack_require__(37)
    var utils = __webpack_require__(15)
    var logger = __webpack_require__(32)
    
    // A component to import web pages, which works like
    // a iframe element or a webview.
    // attrs:
    //   - src
    // events:
    //   - pagestart
    //   - pagefinish
    //   - error
    function Web (data) {
      Atomic.call(this, data)
    }
    
    Web.prototype = Object.create(Atomic.prototype)
    
    Web.prototype.create = function () {
      // Iframe's defect: can't use position:absolute and top, left, right,
      // bottom all setting to zero and use margin to leave specified
      // height for a blank area, and have to use 100% to fill the parent
      // container, otherwise it will use a unwanted default size instead.
      // Therefore a div as a iframe wrapper is needed here.
      var node = document.createElement('div')
      node.classList.add('weex-container')
      this.web = document.createElement('iframe')
      node.appendChild(this.web)
      this.web.classList.add('weex-element')
      this.web.style.width = '100%'
      this.web.style.height = '100%'
      this.web.style.border = 'none'
      return node
    }
    
    Web.prototype.bindEvents = function (evts) {
      Atomic.prototype.bindEvents.call(this, evts)
      var that = this
      this.web.addEventListener('load', function (e) {
        that.dispatchEvent('pagefinish', utils.extend({
          url: that.web.src
        }))
      })
      window.addEventListener('message', this.msgHandler.bind(this))
    }
    
    Web.prototype.msgHandler = function (evt) {
      var msg = evt.data
      if (typeof msg === 'string') {
        try {
          msg = JSON.parse(msg)
        } catch (e) {}
      }
      if (!msg) {
        return
      }
      if (msg.type === 'weex') {
        if (!utils.isArray(msg.content)) {
          return logger.error('weex msg received by web component. msg.content'
            + ' should be a array:', msg.content)
        }
        callNative(this.getComponentManager().instanceId, msg.content)
      }
    }
    
    Web.prototype.attr = {
      src: function (val) {
        this.web.src = val
        setTimeout(function () {
          this.dispatchEvent('pagestart', { url: val })
        }.bind(this), 0)
      }
    }
    
    Web.prototype.goBack = function () {
      this.web.contentWindow.history.back()
    }
    
    Web.prototype.goForward = function () {
      this.web.contentWindow.history.forward()
    }
    
    Web.prototype.reload = function () {
      this.web.contentWindow.location.reload()
    }
    
    module.exports = Web


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

    var dom = __webpack_require__(91)
    var event = __webpack_require__(99)
    var pageInfo = __webpack_require__(100)
    var stream = __webpack_require__(101)
    var modal = __webpack_require__(103)
    var animation = __webpack_require__(120)
    var webview = __webpack_require__(121)
    var timer = __webpack_require__(122)
    var navigator = __webpack_require__(123)
    
    var api = {
      init: function (Weex) {
        Weex.registerApiModule('dom', dom, dom._meta)
        Weex.registerApiModule('event', event, event._meta)
        Weex.registerApiModule('pageInfo', pageInfo, pageInfo._meta)
        Weex.registerApiModule('stream', stream, stream._meta)
        Weex.registerApiModule('modal', modal, modal._meta)
        Weex.registerApiModule('animation', animation, animation._meta)
        Weex.registerApiModule('webview', webview, webview._meta)
        Weex.registerApiModule('timer', timer, timer._meta)
        Weex.registerApiModule('navigator', navigator, navigator._meta)
      }
    }
    
    module.exports = api

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var messageQueue = __webpack_require__(62)
    var FrameUpdater = __webpack_require__(18)
    var Component = __webpack_require__(24)
    var scroll = __webpack_require__(92)
    var config = __webpack_require__(13)
    var logger = __webpack_require__(32)
    
    var dom = {
    
      /**
       * createBody: create root component
       * @param  {object} element
       *    container|listview|scrollview
       * @return {[type]}      [description]
       */
      createBody: function (element) {
        var componentManager = this.getComponentManager()
        element.scale = this.scale
        element.instanceId = componentManager.instanceId
        return componentManager.createBody(element)
      },
    
      addElement: function (parentRef, element, index) {
        var componentManager = this.getComponentManager()
        element.scale = this.scale
        element.instanceId = componentManager.instanceId
        return componentManager.addElement(parentRef, element, index)
      },
    
      removeElement: function (ref) {
        var componentManager = this.getComponentManager()
        return componentManager.removeElement(ref)
      },
    
      moveElement: function (ref, parentRef, index) {
        var componentManager = this.getComponentManager()
        return componentManager.moveElement(ref, parentRef, index)
      },
    
      addEvent: function (ref, type) {
        var componentManager = this.getComponentManager()
        return componentManager.addEvent(ref, type)
      },
    
      removeEvent: function (ref, type) {
        var componentManager = this.getComponentManager()
        return componentManager.removeEvent(ref, type)
      },
    
      /**
       * updateAttrs: update attributes of component
       * @param  {string} ref
       * @param  {obj} attr
       */
      updateAttrs: function (ref, attr) {
        var componentManager = this.getComponentManager()
        return componentManager.updateAttrs(ref, attr)
      },
    
      /**
       * updateStyle: udpate style of component
       * @param {string} ref
       * @param {obj} style
       */
      updateStyle: function (ref, style) {
        var componentManager = this.getComponentManager()
        return componentManager.updateStyle(ref, style)
      },
    
      createFinish: function () {
        // TODO
        // FrameUpdater.pause()
      },
    
      refreshFinish: function () {
        // TODO
      },
    
      /**
       * scrollToElement
       * @param  {string} ref
       * @param  {obj} options {offset:Number}
       *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
       */
      scrollToElement: function (ref, options) {
        !options && (options = {})
        var componentManager = this.getComponentManager()
        var elem = componentManager.getElementByRef(ref)
        if (!elem) {
          return logger.error('component of ref ' + ref + ' doesn\'t exist.')
        }
        var parentScroller = elem.getParentScroller()
        if (parentScroller) {
          parentScroller.scroller.scrollToElement(elem.node, true)
        } else {
          var offsetTop = elem.node.getBoundingClientRect().top
              + document.body.scrollTop
          var offset = (Number(options.offset) || 0) * this.scale
          var tween = scroll(0, offsetTop + offset, options)
          tween.on('end', function () {
            logger.log('scroll end.')
          })
        }
      }
    
    }
    
    dom._meta = {
      dom: [{
        name: 'createBody',
        args: ['object']
      }, {
        name: 'addElement',
        args: ['string', 'object', 'number']
      }, {
        name: 'removeElement',
        args: ['string']
      }, {
        name: 'moveElement',
        args: ['string', 'string', 'number']
      }, {
        name: 'addEvent',
        args: ['string', 'string']
      }, {
        name: 'removeEvent',
        args: ['string', 'string']
      }, {
        name: 'updateAttrs',
        args: ['string', 'object']
      }, {
        name: 'updateStyle',
        args: ['string', 'object']
      }, {
        name: 'createFinish',
        args: []
      }, {
        name: 'refreshFinish',
        args: []
      }, {
        name: 'scrollToElement',
        args: ['string', 'object']
      }]
    }
    
    module.exports = dom


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

    /**
     * Module dependencies.
     */
    
    var Tween = __webpack_require__(93);
    var raf = __webpack_require__(98);
    
    /**
     * Expose `scrollTo`.
     */
    
    module.exports = scrollTo;
    
    /**
     * Scroll to `(x, y)`.
     *
     * @param {Number} x
     * @param {Number} y
     * @api public
     */
    
    function scrollTo(x, y, options) {
      options = options || {};
    
      // start position
      var start = scroll();
    
      // setup tween
      var tween = Tween(start)
        .ease(options.ease || 'out-circ')
        .to({ top: y, left: x })
        .duration(options.duration || 1000);
    
      // scroll
      tween.update(function(o){
        window.scrollTo(o.left | 0, o.top | 0);
      });
    
      // handle end
      tween.on('end', function(){
        animate = function(){};
      });
    
      // animate
      function animate() {
        raf(animate);
        tween.update();
      }
    
      animate();
      
      return tween;
    }
    
    /**
     * Return scroll position.
     *
     * @return {Object}
     * @api private
     */
    
    function scroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      var x = window.pageXOffset || document.documentElement.scrollLeft;
      return { top: y, left: x };
    }


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

    
    /**
     * Module dependencies.
     */
    
    var Emitter = __webpack_require__(94);
    var clone = __webpack_require__(95);
    var type = __webpack_require__(96);
    var ease = __webpack_require__(97);
    
    /**
     * Expose `Tween`.
     */
    
    module.exports = Tween;
    
    /**
     * Initialize a new `Tween` with `obj`.
     *
     * @param {Object|Array} obj
     * @api public
     */
    
    function Tween(obj) {
      if (!(this instanceof Tween)) return new Tween(obj);
      this._from = obj;
      this.ease('linear');
      this.duration(500);
    }
    
    /**
     * Mixin emitter.
     */
    
    Emitter(Tween.prototype);
    
    /**
     * Reset the tween.
     *
     * @api public
     */
    
    Tween.prototype.reset = function(){
      this.isArray = 'array' === type(this._from);
      this._curr = clone(this._from);
      this._done = false;
      this._start = Date.now();
      return this;
    };
    
    /**
     * Tween to `obj` and reset internal state.
     *
     *    tween.to({ x: 50, y: 100 })
     *
     * @param {Object|Array} obj
     * @return {Tween} self
     * @api public
     */
    
    Tween.prototype.to = function(obj){
      this.reset();
      this._to = obj;
      return this;
    };
    
    /**
     * Set duration to `ms` [500].
     *
     * @param {Number} ms
     * @return {Tween} self
     * @api public
     */
    
    Tween.prototype.duration = function(ms){
      this._duration = ms;
      return this;
    };
    
    /**
     * Set easing function to `fn`.
     *
     *    tween.ease('in-out-sine')
     *
     * @param {String|Function} fn
     * @return {Tween}
     * @api public
     */
    
    Tween.prototype.ease = function(fn){
      fn = 'function' == typeof fn ? fn : ease[fn];
      if (!fn) throw new TypeError('invalid easing function');
      this._ease = fn;
      return this;
    };
    
    /**
     * Stop the tween and immediately emit "stop" and "end".
     *
     * @return {Tween}
     * @api public
     */
    
    Tween.prototype.stop = function(){
      this.stopped = true;
      this._done = true;
      this.emit('stop');
      this.emit('end');
      return this;
    };
    
    /**
     * Perform a step.
     *
     * @return {Tween} self
     * @api private
     */
    
    Tween.prototype.step = function(){
      if (this._done) return;
    
      // duration
      var duration = this._duration;
      var now = Date.now();
      var delta = now - this._start;
      var done = delta >= duration;
    
      // complete
      if (done) {
        this._from = this._to;
        this._update(this._to);
        this._done = true;
        this.emit('end');
        return this;
      }
    
      // tween
      var from = this._from;
      var to = this._to;
      var curr = this._curr;
      var fn = this._ease;
      var p = (now - this._start) / duration;
      var n = fn(p);
    
      // array
      if (this.isArray) {
        for (var i = 0; i < from.length; ++i) {
          curr[i] = from[i] + (to[i] - from[i]) * n;
        }
    
        this._update(curr);
        return this;
      }
    
      // objech
      for (var k in from) {
        curr[k] = from[k] + (to[k] - from[k]) * n;
      }
    
      this._update(curr);
      return this;
    };
    
    /**
     * Set update function to `fn` or
     * when no argument is given this performs
     * a "step".
     *
     * @param {Function} fn
     * @return {Tween} self
     * @api public
     */
    
    Tween.prototype.update = function(fn){
      if (0 == arguments.length) return this.step();
      this._update = fn;
      return this;
    };

/***/ },
/* 94 */
/***/ function(module, exports) {

    
    /**
     * Expose `Emitter`.
     */
    
    module.exports = Emitter;
    
    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */
    
    function Emitter(obj) {
      if (obj) return mixin(obj);
    };
    
    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */
    
    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
      return obj;
    }
    
    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
    
    Emitter.prototype.on =
    Emitter.prototype.addEventListener = function(event, fn){
      this._callbacks = this._callbacks || {};
      (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
        .push(fn);
      return this;
    };
    
    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
    
    Emitter.prototype.once = function(event, fn){
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
    
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    
    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
    
    Emitter.prototype.off =
    Emitter.prototype.removeListener =
    Emitter.prototype.removeAllListeners =
    Emitter.prototype.removeEventListener = function(event, fn){
      this._callbacks = this._callbacks || {};
    
      // all
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
    
      // specific event
      var callbacks = this._callbacks['$' + event];
      if (!callbacks) return this;
    
      // remove all handlers
      if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
      }
    
      // remove specific handler
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };
    
    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */
    
    Emitter.prototype.emit = function(event){
      this._callbacks = this._callbacks || {};
      var args = [].slice.call(arguments, 1)
        , callbacks = this._callbacks['$' + event];
    
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
    
      return this;
    };
    
    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */
    
    Emitter.prototype.listeners = function(event){
      this._callbacks = this._callbacks || {};
      return this._callbacks['$' + event] || [];
    };
    
    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */
    
    Emitter.prototype.hasListeners = function(event){
      return !! this.listeners(event).length;
    };


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

    /**
     * Module dependencies.
     */
    
    var type;
    try {
      type = __webpack_require__(96);
    } catch (_) {
      type = __webpack_require__(96);
    }
    
    /**
     * Module exports.
     */
    
    module.exports = clone;
    
    /**
     * Clones objects.
     *
     * @param {Mixed} any object
     * @api public
     */
    
    function clone(obj){
      switch (type(obj)) {
        case 'object':
          var copy = {};
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              copy[key] = clone(obj[key]);
            }
          }
          return copy;
    
        case 'array':
          var copy = new Array(obj.length);
          for (var i = 0, l = obj.length; i < l; i++) {
            copy[i] = clone(obj[i]);
          }
          return copy;
    
        case 'regexp':
          // from millermedeiros/amd-utils - MIT
          var flags = '';
          flags += obj.multiline ? 'm' : '';
          flags += obj.global ? 'g' : '';
          flags += obj.ignoreCase ? 'i' : '';
          return new RegExp(obj.source, flags);
    
        case 'date':
          return new Date(obj.getTime());
    
        default: // string, number, boolean, …
          return obj;
      }
    }


/***/ },
/* 96 */
/***/ function(module, exports) {

    /**
     * toString ref.
     */
    
    var toString = Object.prototype.toString;
    
    /**
     * Return the type of `val`.
     *
     * @param {Mixed} val
     * @return {String}
     * @api public
     */
    
    module.exports = function(val){
      switch (toString.call(val)) {
        case '[object Date]': return 'date';
        case '[object RegExp]': return 'regexp';
        case '[object Arguments]': return 'arguments';
        case '[object Array]': return 'array';
        case '[object Error]': return 'error';
      }
    
      if (val === null) return 'null';
      if (val === undefined) return 'undefined';
      if (val !== val) return 'nan';
      if (val && val.nodeType === 1) return 'element';
    
      val = val.valueOf
        ? val.valueOf()
        : Object.prototype.valueOf.apply(val)
    
      return typeof val;
    };


/***/ },
/* 97 */
/***/ function(module, exports) {

    
    // easing functions from "Tween.js"
    
    exports.linear = function(n){
      return n;
    };
    
    exports.inQuad = function(n){
      return n * n;
    };
    
    exports.outQuad = function(n){
      return n * (2 - n);
    };
    
    exports.inOutQuad = function(n){
      n *= 2;
      if (n < 1) return 0.5 * n * n;
      return - 0.5 * (--n * (n - 2) - 1);
    };
    
    exports.inCube = function(n){
      return n * n * n;
    };
    
    exports.outCube = function(n){
      return --n * n * n + 1;
    };
    
    exports.inOutCube = function(n){
      n *= 2;
      if (n < 1) return 0.5 * n * n * n;
      return 0.5 * ((n -= 2 ) * n * n + 2);
    };
    
    exports.inQuart = function(n){
      return n * n * n * n;
    };
    
    exports.outQuart = function(n){
      return 1 - (--n * n * n * n);
    };
    
    exports.inOutQuart = function(n){
      n *= 2;
      if (n < 1) return 0.5 * n * n * n * n;
      return -0.5 * ((n -= 2) * n * n * n - 2);
    };
    
    exports.inQuint = function(n){
      return n * n * n * n * n;
    }
    
    exports.outQuint = function(n){
      return --n * n * n * n * n + 1;
    }
    
    exports.inOutQuint = function(n){
      n *= 2;
      if (n < 1) return 0.5 * n * n * n * n * n;
      return 0.5 * ((n -= 2) * n * n * n * n + 2);
    };
    
    exports.inSine = function(n){
      return 1 - Math.cos(n * Math.PI / 2 );
    };
    
    exports.outSine = function(n){
      return Math.sin(n * Math.PI / 2);
    };
    
    exports.inOutSine = function(n){
      return .5 * (1 - Math.cos(Math.PI * n));
    };
    
    exports.inExpo = function(n){
      return 0 == n ? 0 : Math.pow(1024, n - 1);
    };
    
    exports.outExpo = function(n){
      return 1 == n ? n : 1 - Math.pow(2, -10 * n);
    };
    
    exports.inOutExpo = function(n){
      if (0 == n) return 0;
      if (1 == n) return 1;
      if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
      return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
    };
    
    exports.inCirc = function(n){
      return 1 - Math.sqrt(1 - n * n);
    };
    
    exports.outCirc = function(n){
      return Math.sqrt(1 - (--n * n));
    };
    
    exports.inOutCirc = function(n){
      n *= 2
      if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
      return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
    };
    
    exports.inBack = function(n){
      var s = 1.70158;
      return n * n * (( s + 1 ) * n - s);
    };
    
    exports.outBack = function(n){
      var s = 1.70158;
      return --n * n * ((s + 1) * n + s) + 1;
    };
    
    exports.inOutBack = function(n){
      var s = 1.70158 * 1.525;
      if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
      return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
    };
    
    exports.inBounce = function(n){
      return 1 - exports.outBounce(1 - n);
    };
    
    exports.outBounce = function(n){
      if ( n < ( 1 / 2.75 ) ) {
        return 7.5625 * n * n;
      } else if ( n < ( 2 / 2.75 ) ) {
        return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
      } else if ( n < ( 2.5 / 2.75 ) ) {
        return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
      } else {
        return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
      }
    };
    
    exports.inOutBounce = function(n){
      if (n < .5) return exports.inBounce(n * 2) * .5;
      return exports.outBounce(n * 2 - 1) * .5 + .5;
    };
    
    // aliases
    
    exports['in-quad'] = exports.inQuad;
    exports['out-quad'] = exports.outQuad;
    exports['in-out-quad'] = exports.inOutQuad;
    exports['in-cube'] = exports.inCube;
    exports['out-cube'] = exports.outCube;
    exports['in-out-cube'] = exports.inOutCube;
    exports['in-quart'] = exports.inQuart;
    exports['out-quart'] = exports.outQuart;
    exports['in-out-quart'] = exports.inOutQuart;
    exports['in-quint'] = exports.inQuint;
    exports['out-quint'] = exports.outQuint;
    exports['in-out-quint'] = exports.inOutQuint;
    exports['in-sine'] = exports.inSine;
    exports['out-sine'] = exports.outSine;
    exports['in-out-sine'] = exports.inOutSine;
    exports['in-expo'] = exports.inExpo;
    exports['out-expo'] = exports.outExpo;
    exports['in-out-expo'] = exports.inOutExpo;
    exports['in-circ'] = exports.inCirc;
    exports['out-circ'] = exports.outCirc;
    exports['in-out-circ'] = exports.inOutCirc;
    exports['in-back'] = exports.inBack;
    exports['out-back'] = exports.outBack;
    exports['in-out-back'] = exports.inOutBack;
    exports['in-bounce'] = exports.inBounce;
    exports['out-bounce'] = exports.outBounce;
    exports['in-out-bounce'] = exports.inOutBounce;


/***/ },
/* 98 */
/***/ function(module, exports) {

    /**
     * Expose `requestAnimationFrame()`.
     */
    
    exports = module.exports = window.requestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.mozRequestAnimationFrame
      || fallback;
    
    /**
     * Fallback implementation.
     */
    
    var prev = new Date().getTime();
    function fallback(fn) {
      var curr = new Date().getTime();
      var ms = Math.max(0, 16 - (curr - prev));
      var req = setTimeout(fn, ms);
      prev = curr;
      return req;
    }
    
    /**
     * Cancel.
     */
    
    var cancel = window.cancelAnimationFrame
      || window.webkitCancelAnimationFrame
      || window.mozCancelAnimationFrame
      || window.clearTimeout;
    
    exports.cancel = function(id){
      cancel.call(window, id);
    };


/***/ },
/* 99 */
/***/ function(module, exports) {

    'use strict'
    
    var event = {
      /**
       * openUrl
       * @param  {string} url
       */
      openURL: function (url) {
        location.href = url
      }
    
    }
    
    event._meta = {
      event: [{
        name: 'openURL',
        args: ['string']
      }]
    }
    
    module.exports = event

/***/ },
/* 100 */
/***/ function(module, exports) {

    'use strict'
    
    var pageInfo = {
    
      setTitle: function (title) {
        title = title || 'Weex HTML5'
        try {
          title = decodeURIComponent(title)
        } catch (e) {}
        document.title = title
      }
    }
    
    pageInfo._meta = {
      pageInfo: [{
        name: 'setTitle',
        args: ['string']
      }]
    }
    
    module.exports = pageInfo

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global) {'use strict'
    
    var utils = __webpack_require__(15)
    var logger = __webpack_require__(32)
    
    __webpack_require__(102)
    
    var jsonpCnt = 0
    var ERROR_STATE = -1
    
    function _jsonp(config, callback, progressCallback) {
      var cbName = 'jsonp_' + (++jsonpCnt)
      var script, url, head
    
      if (!config.url) {
        logger.error('config.url should be set in _jsonp for \'fetch\' API.')
      }
    
      global[cbName] = (function (cb) {
        return function (response) {
          callback(response)
          delete global[cb]
        }
      })(cbName)
    
      script = document.createElement('script')
      try {
        url = lib.httpurl(config.url)
      } catch (err) {
        logger.error('invalid config.url in _jsonp for \'fetch\' API: '
          + config.url)
      }
      url.params.callback = cbName
      script.type = 'text/javascript'
      script.src = url.toString()
      // script.onerror is not working on IE or safari.
      // but they are not considered here.
      script.onerror = (function (cb) {
        return function (err) {
          logger.error('unexpected error in _jsonp for \'fetch\' API', err)
          callback(err)
          delete global[cb]
        }
      })(cbName)
      head = document.getElementsByTagName('head')[0]
      head.insertBefore(script, null)
    }
    
    function _xhr(config, callback, progressCallback) {
      var xhr = new XMLHttpRequest()
      xhr.responseType = config.type
      xhr.open(config.method, config.url, true)
    
      xhr.onload = function (res) {
        callback({
          status: xhr.status,
          ok: xhr.status >= 200 && xhr.status < 300,
          statusText: xhr.statusText,
          data: xhr.response,
          headers: xhr.getAllResponseHeaders().split('\n')
            .reduce(function (obj, headerStr) {
              var headerArr = headerStr.match(/(.+): (.+)/)
              if (headerArr) {
                obj[headerArr[1]] = headerArr[2]
              }
              return obj
            }, {})
        })
      }
    
      if (progressCallback) {
        xhr.onprogress = function (e) {
          progressCallback({
            readyState: xhr.readyState,
            status: xhr.status,
            length: e.loaded,
            total: e.total,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders().split('\n')
              .reduce(function (obj, headerStr) {
                var headerArr = headerStr.match(/(.+): (.+)/)
                if (headerArr) {
                  obj[headerArr[1]] = headerArr[2]
                }
                return obj
              }, {})
          })
        }
      }
    
      xhr.onerror = function (err) {
        logger.error('unexpected error in _xhr for \'fetch\' API', err)
        callback({
          status: ERROR_STATE,
          ok: false,
          statusText: '',
          data: '',
          headers: {}
        })
      }
    
      xhr.send(config.body)
    }
    
    var stream = {
    
      /**
       * sendHttp
       * Note: This API is deprecated. Please use stream.fetch instead.
       * send a http request through XHR.
       * @deprecated
       * @param  {obj} params
       *  - method: 'GET' | 'POST',
       *  - url: url requested
       * @param  {string} callbackId
       */
      sendHttp: function (param, callbackId) {
        if (typeof param === 'string') {
          try {
            param = JSON.parse(param)
          } catch (e) {
            return
          }
        }
        if (typeof param !== 'object' || !param.url) {
          return logger.error(
            'invalid config or invalid config.url for sendHttp API')
        }
    
        var sender = this.sender
        var method = param.method || 'GET'
        var xhr = new XMLHttpRequest()
        xhr.open(method, param.url, true)
        xhr.onload = function () {
          sender.performCallback(callbackId, this.responseText)
        }
        xhr.onerror = function (error) {
          return logger.error('unexpected error in sendHttp API', error)
          sender.performCallback(
            callbackId,
            new Error('unexpected error in sendHttp API')
          )
        }
        xhr.send()
      },
    
      /**
       * fetch
       * use stream.fetch to request for a json file, a plain text file or
       * a arraybuffer for a file stream. (You can use Blob and FileReader
       * API implemented by most modern browsers to read a arraybuffer.)
       * @param  {object} options config options
       *   - method {string} 'GET' | 'POST'
       *   - headers {obj}
       *   - url {string}
       *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
       *   - body
       *   - type {string} 'json' | 'jsonp' | 'text'
       * @param  {string} callbackId
       * @param  {string} progressCallbackId
       */
      fetch: function (options, callbackId, progressCallbackId) {
    
        var DEFAULT_METHOD = 'GET'
        var DEFAULT_MODE = 'cors'
        var DEFAULT_TYPE = 'text'
    
        var methodOptions = ['GET', 'POST']
        var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate']
        var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer']
    
        var fallback = false  // fallback from 'fetch' API to XHR.
        var sender = this.sender
    
        var config = utils.extend({}, options)
    
        // validate options.method
        if (typeof config.method === 'undefined') {
          config.method = DEFAULT_METHOD
          logger.warn('options.method for \'fetch\' API has been set to '
            + 'default value \'' + config.method + '\'')
        } else if (methodOptions.indexOf((config.method + '')
            .toUpperCase()) === -1) {
          return logger.error('options.method \''
            + config.method
            + '\' for \'fetch\' API should be one of '
            + methodOptions + '.')
        }
    
        // validate options.url
        if (!config.url) {
          return logger.error('options.url should be set for \'fetch\' API.')
        }
    
        // validate options.mode
        if (typeof config.mode === 'undefined') {
          config.mode = DEFAULT_MODE
        } else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
          return logger.error('options.mode \''
            + config.mode
            + '\' for \'fetch\' API should be one of '
            + modeOptions + '.')
        }
    
        // validate options.type
        if (typeof config.type === 'undefined') {
          config.type = DEFAULT_TYPE
          logger.warn('options.type for \'fetch\' API has been set to '
            + 'default value \'' + config.type + '\'.')
        } else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
          return logger.error('options.type \''
              + config.type
              + '\' for \'fetch\' API should be one of '
              + typeOptions + '.')
        }
    
        var _callArgs = [config, function (res) {
          sender.performCallback(callbackId, res)
        }]
        if (progressCallbackId) {
          _callArgs.push(function (res) {
            // Set 'keepAlive' to true for sending continuous callbacks
            sender.performCallback(progressCallbackId, res, true)
          })
        }
    
        if (config.type === 'jsonp') {
          _jsonp.apply(this, _callArgs)
        } else {
          _xhr.apply(this, _callArgs)
        }
      }
    
    }
    
    stream._meta = {
      stream: [{
        name: 'sendHttp',
        args: ['object', 'function']
      }, {
        name: 'fetch',
        args: ['object', 'function', 'function']
      }]
    }
    
    module.exports = stream
    /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b)delete b[c];for(var c in a)b[c]=a[c]}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b)delete b[d];for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0])try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1])}catch(g){b[f[0]]=f[1]}}}},get:function(){var a=[];for(var c in b)if(void 0!==b[c])if(""!==b[c])try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]))}catch(d){a.push(c+"="+b[c])}else try{a.push(encodeURIComponent(c))}catch(d){a.push(c)}return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"")},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2,3}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i"))))throw new Error("Wrong uri scheme.");this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString())}b.httpurl=function(a){return new c(a)}}(window,window.lib||(window.lib={}));;module.exports = window.lib['httpurl'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var modal = __webpack_require__(104)
    
    var msg = {
    
      // duration: default is 0.8 seconds.
      toast: function (config) {
        modal.toast(config.message, config.duration)
      },
    
      // config:
      //  - message: string
      //  - okTitle: title of ok button
      //  - callback
      alert: function (config, callbackId) {
        var sender =  this.sender
        config.callback = function () {
          sender.performCallback(callbackId)
        }
        modal.alert(config)
      },
    
      // config:
      //  - message: string
      //  - okTitle: title of ok button
      //  - cancelTitle: title of cancel button
      //  - callback
      confirm: function (config, callbackId) {
        var sender =  this.sender
        config.callback = function (val) {
          sender.performCallback(callbackId, val)
        }
        modal.confirm(config)
      },
    
      // config:
      //  - message: string
      //  - okTitle: title of ok button
      //  - cancelTitle: title of cancel button
      //  - callback
      prompt: function (config, callbackId) {
        var sender =  this.sender
        config.callback = function (val) {
          sender.performCallback(callbackId, val)
        }
        modal.prompt(config)
      }
    
    }
    
    msg._meta = {
      modal: [{
        name: 'toast',
        args: ['object']
      }, {
        name: 'alert',
        args: ['object', 'string']
      }, {
        name: 'confirm',
        args: ['object', 'string']
      }, {
        name: 'prompt',
        args: ['object', 'string']
      }]
    }
    
    module.exports = msg


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Alert = __webpack_require__(105)
    var Confirm = __webpack_require__(111)
    var Prompt = __webpack_require__(114)
    var toast = __webpack_require__(117)
    
    var modal = {
    
      toast: function (msg, duration) {
        toast.push(msg, duration)
      },
    
      alert: function (config) {
        new Alert(config).show()
      },
    
      prompt: function (config) {
        new Prompt(config).show()
      },
    
      confirm: function (config) {
        new Confirm(config).show()
      }
    
    }
    
    !window.lib && (window.lib = {})
    window.lib.modal = modal
    
    module.exports = modal

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Modal = __webpack_require__(106)
    __webpack_require__(109)
    
    var CONTENT_CLASS = 'content'
    var MSG_CLASS = 'content-msg'
    var BUTTON_GROUP_CLASS = 'btn-group'
    var BUTTON_CLASS = 'btn'
    
    function Alert(config) {
      this.msg = config.message || ''
      this.callback = config.callback
      this.okTitle = config.okTitle || 'OK'
      Modal.call(this)
      this.node.classList.add('amfe-alert')
    }
    
    Alert.prototype = Object.create(Modal.prototype)
    
    Alert.prototype.createNodeContent = function () {
      var content = document.createElement('div')
      content.classList.add(CONTENT_CLASS)
      this.node.appendChild(content)
    
      var msg = document.createElement('div')
      msg.classList.add(MSG_CLASS)
      msg.appendChild(document.createTextNode(this.msg))
      content.appendChild(msg)
    
      var buttonGroup = document.createElement('div')
      buttonGroup.classList.add(BUTTON_GROUP_CLASS)
      this.node.appendChild(buttonGroup)
      var button = document.createElement('div')
      button.classList.add(BUTTON_CLASS, 'alert-ok')
      button.appendChild(document.createTextNode(this.okTitle))
      buttonGroup.appendChild(button)
    }
    
    Alert.prototype.bindEvents = function () {
      Modal.prototype.bindEvents.call(this)
      var button = this.node.querySelector('.' + BUTTON_CLASS)
      button.addEventListener('click', function () {
        this.destroy()
        this.callback && this.callback()
      }.bind(this))
    }
    
    module.exports = Alert


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(107)
    
    // there will be only one instance of modal.
    var MODAL_WRAP_CLASS = 'amfe-modal-wrap'
    var MODAL_NODE_CLASS = 'amfe-modal-node'
    
    function Modal() {
      this.wrap = document.querySelector(MODAL_WRAP_CLASS)
      this.node = document.querySelector(MODAL_NODE_CLASS)
      if (!this.wrap) {
        this.createWrap()
      }
      if (!this.node) {
        this.createNode()
      }
      this.clearNode()
      this.createNodeContent()
      this.bindEvents()
    }
    
    Modal.prototype = {
    
      show: function () {
        this.wrap.style.display = 'block'
        this.node.classList.remove('hide')
      },
    
      destroy: function () {
        document.body.removeChild(this.wrap)
        document.body.removeChild(this.node)
        this.wrap = null
        this.node = null
      },
    
      createWrap: function () {
        this.wrap = document.createElement('div')
        this.wrap.className = MODAL_WRAP_CLASS
        document.body.appendChild(this.wrap)
      },
    
      createNode: function () {
        this.node = document.createElement('div')
        this.node.classList.add(MODAL_NODE_CLASS, 'hide')
        document.body.appendChild(this.node)
      },
    
      clearNode: function () {
        this.node.innerHTML = ''
      },
    
      createNodeContent: function () {
    
        // do nothing.
        // child classes can override this method.
      },
    
      bindEvents: function () {
        this.wrap.addEventListener('click', function (e) {
          e.preventDefault()
          e.stopPropagation()
        })
      }
    }
    
    module.exports = Modal


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(108);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../css-loader/index.js!./modal.css", function() {
                var newContent = require("!!./../../css-loader/index.js!./modal.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".amfe-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.amfe-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n.amfe-modal-node.hide {\n  display: none;\n}\n.amfe-modal-node .content {\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n.amfe-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n}\n.amfe-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n", ""]);
    
    // exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(110);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../css-loader/index.js!./alert.css", function() {
                var newContent = require("!!./../../css-loader/index.js!./alert.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".amfe-alert .amfe-alert-ok {\n  width: 100%;\n}\n", ""]);
    
    // exports


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Modal = __webpack_require__(106)
    __webpack_require__(112)
    
    var CONTENT_CLASS = 'content'
    var MSG_CLASS = 'content-msg'
    var BUTTON_GROUP_CLASS = 'btn-group'
    var BUTTON_CLASS = 'btn'
    
    function Confirm(config) {
      this.msg = config.message || ''
      this.callback = config.callback
      this.okTitle = config.okTitle || 'OK'
      this.cancelTitle = config.cancelTitle || 'Cancel'
      Modal.call(this)
      this.node.classList.add('amfe-confirm')
    }
    
    Confirm.prototype = Object.create(Modal.prototype)
    
    Confirm.prototype.createNodeContent = function () {
      var content = document.createElement('div')
      content.classList.add(CONTENT_CLASS)
      this.node.appendChild(content)
    
      var msg = document.createElement('div')
      msg.classList.add(MSG_CLASS)
      msg.appendChild(document.createTextNode(this.msg))
      content.appendChild(msg)
    
      var buttonGroup = document.createElement('div')
      buttonGroup.classList.add(BUTTON_GROUP_CLASS)
      this.node.appendChild(buttonGroup)
      var btnOk = document.createElement('div')
      btnOk.appendChild(document.createTextNode(this.okTitle))
      btnOk.classList.add('btn-ok', BUTTON_CLASS)
      var btnCancel = document.createElement('div')
      btnCancel.appendChild(document.createTextNode(this.cancelTitle))
      btnCancel.classList.add('btn-cancel', BUTTON_CLASS)
      buttonGroup.appendChild(btnOk)
      buttonGroup.appendChild(btnCancel)
      this.node.appendChild(buttonGroup)
    }
    
    Confirm.prototype.bindEvents = function () {
      Modal.prototype.bindEvents.call(this)
      var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
      var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
      btnOk.addEventListener('click', function () {
        this.destroy()
        this.callback && this.callback(this.okTitle)
      }.bind(this))
      btnCancel.addEventListener('click', function () {
        this.destroy()
        this.callback && this.callback(this.cancelTitle)
      }.bind(this))
    }
    
    module.exports = Confirm


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(113);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../css-loader/index.js!./confirm.css", function() {
                var newContent = require("!!./../../css-loader/index.js!./confirm.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".amfe-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n", ""]);
    
    // exports


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Modal = __webpack_require__(106)
    __webpack_require__(115)
    
    var CONTENT_CLASS = 'content'
    var MSG_CLASS = 'content-msg'
    var BUTTON_GROUP_CLASS = 'btn-group'
    var BUTTON_CLASS = 'btn'
    var INPUT_WRAP_CLASS = 'input-wrap'
    var INPUT_CLASS = 'input'
    
    function Prompt(config) {
      this.msg = config.message || ''
      this.defaultMsg = config.default || ''
      this.callback = config.callback
      this.okTitle = config.okTitle || 'OK'
      this.cancelTitle = config.cancelTitle || 'Cancel'
      Modal.call(this)
      this.node.classList.add('amfe-prompt')
    }
    
    Prompt.prototype = Object.create(Modal.prototype)
    
    Prompt.prototype.createNodeContent = function () {
    
      var content = document.createElement('div')
      content.classList.add(CONTENT_CLASS)
      this.node.appendChild(content)
    
      var msg = document.createElement('div')
      msg.classList.add(MSG_CLASS)
      msg.appendChild(document.createTextNode(this.msg))
      content.appendChild(msg)
    
      var inputWrap = document.createElement('div')
      inputWrap.classList.add(INPUT_WRAP_CLASS)
      content.appendChild(inputWrap)
      var input = document.createElement('input')
      input.classList.add(INPUT_CLASS)
      input.type = 'text'
      input.autofocus = true
      input.placeholder = this.defaultMsg
      inputWrap.appendChild(input)
    
      var buttonGroup = document.createElement('div')
      buttonGroup.classList.add(BUTTON_GROUP_CLASS)
      var btnOk = document.createElement('div')
      btnOk.appendChild(document.createTextNode(this.okTitle))
      btnOk.classList.add('btn-ok', BUTTON_CLASS)
      var btnCancel = document.createElement('div')
      btnCancel.appendChild(document.createTextNode(this.cancelTitle))
      btnCancel.classList.add('btn-cancel', BUTTON_CLASS)
      buttonGroup.appendChild(btnOk)
      buttonGroup.appendChild(btnCancel)
      this.node.appendChild(buttonGroup)
    }
    
    Prompt.prototype.bindEvents = function () {
      Modal.prototype.bindEvents.call(this)
      var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
      var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
      var that = this
      btnOk.addEventListener('click', function () {
        var val = document.querySelector('input').value
        this.destroy()
        this.callback && this.callback({
          result: that.okTitle,
          data: val
        })
      }.bind(this))
      btnCancel.addEventListener('click', function () {
        var val = document.querySelector('input').value
        this.destroy()
        this.callback && this.callback({
          result: that.cancelTitle
        })
      }.bind(this))
    }
    
    module.exports = Prompt


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(116);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../css-loader/index.js!./prompt.css", function() {
                var newContent = require("!!./../../css-loader/index.js!./prompt.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".amfe-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.24rem 0.213333rem 0.213333rem;\n  height: 0.96rem;\n}\n.amfe-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n}\n.amfe-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n", ""]);
    
    // exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    __webpack_require__(118)
    
    var queue = []
    var timer
    var isProcessing = false
    var toastWin
    var TOAST_WIN_CLASS_NAME = 'amfe-toast'
    
    var DEFAULT_DURATION = 0.8
    
    function showToastWindow(msg, callback) {
      var handleTransitionEnd = function () {
        toastWin.removeEventListener('transitionend', handleTransitionEnd)
        callback && callback()
      }
      if (!toastWin) {
        toastWin = document.createElement('div')
        toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide')
        document.body.appendChild(toastWin)
      }
      toastWin.innerHTML = msg
      toastWin.addEventListener('transitionend', handleTransitionEnd)
      setTimeout(function () {
        toastWin.classList.remove('hide')
      }, 0)
    }
    
    function hideToastWindow(callback) {
      var handleTransitionEnd = function () {
        toastWin.removeEventListener('transitionend', handleTransitionEnd)
        callback && callback()
      }
      if (!toastWin) {
        return
      }
      toastWin.addEventListener('transitionend', handleTransitionEnd)
      toastWin.classList.add('hide')
    }
    
    var toast = {
    
      push: function (msg, duration) {
        queue.push({
          msg: msg,
          duration: duration || DEFAULT_DURATION
        })
        this.show()
      },
    
      show: function () {
        var that = this
    
        // All messages had been toasted already, so remove the toast window,
        if (!queue.length) {
          toastWin && toastWin.parentNode.removeChild(toastWin)
          toastWin = null
          return
        }
    
        // the previous toast is not ended yet.
        if (isProcessing) {
          return
        }
        isProcessing = true
    
        var toastInfo = queue.shift()
        showToastWindow(toastInfo.msg, function () {
          timer = setTimeout(function () {
            timer = null
            hideToastWindow(function () {
              isProcessing = false
              that.show()
            })
          }, toastInfo.duration * 1000)
        })
      }
    
    }
    
    module.exports = {
      push: toast.push.bind(toast)
    }


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(119);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(6)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../../css-loader/index.js!./toast.css", function() {
                var newContent = require("!!./../../css-loader/index.js!./toast.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(5)();
    // imports
    
    
    // module
    exports.push([module.id, ".amfe-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.amfe-toast.hide {\n  opacity: 0;\n}\n", ""]);
    
    // exports


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var Sender = __webpack_require__(28)
    
    var _data = {}
    
    var animation = {
    
      /**
       * transition
       * @param  {string} ref        [description]
       * @param  {obj} config     [description]
       * @param  {string} callbackId [description]
       */
      transition: function (ref, config, callbackId) {
        var refData = _data[ref]
        var stylesKey = JSON.stringify(config.styles)
        var weexInstance = this
        // If the same component perform a animation with exactly the same
        // styles in a sequence with so short interval that the prev animation
        // is still in playing, then the next animation should be ignored.
        if (refData && refData[stylesKey]) {
          return
        }
        if (!refData) {
          refData = _data[ref] = {}
        }
        refData[stylesKey] = true
        return this.getComponentManager().transition(ref, config, function () {
          // Remove the stylesKey in refData so that the same animation
          // can be played again after current animation is already finished.
          delete refData[stylesKey]
          weexInstance.sender.performCallback(callbackId)
        })
      }
    
    }
    
    animation._meta = {
      animation: [{
        name: 'transition',
        args: ['string', 'object', 'string']
      }]
    }
    
    module.exports = animation


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

    'use strict'
    
    var sender = __webpack_require__(28)
    
    var webview = {
    
      // ref: ref of the web component.
      goBack: function (ref) {
        var webComp = this.getComponentManager().getElementByRef(ref)
        if (!webComp.goBack) {
          console.error('error: the specified component has no method of'
              + ' goBack. Please make sure it is a webview component.')
          return
        }
        webComp.goBack()
      },
    
      // ref: ref of the web component.
      goForward: function (ref) {
        var webComp = this.getComponentManager().getElementByRef(ref)
        if (!webComp.goForward) {
          console.error('error: the specified component has no method of'
              + ' goForward. Please make sure it is a webview component.')
          return
        }
        webComp.goForward()
      },
    
      // ref: ref of the web component.
      reload: function (ref) {
        var webComp = this.getComponentManager().getElementByRef(ref)
        if (!webComp.reload) {
          console.error('error: the specified component has no method of'
              + ' reload. Please make sure it is a webview component.')
          return
        }
        webComp.reload()
      }
    
    }
    
    webview._meta = {
      webview: [{
        name: 'goBack',
        args: ['string']
      }, {
        name: 'goForward',
        args: ['string']
      }, {
        name: 'reload',
        args: ['string']
      }]
    }
    
    module.exports = webview


/***/ },
/* 122 */
/***/ function(module, exports) {

    'use strict'
    
    var timer = {
    
      setTimeout: function (timeoutCallbackId, delay) {
        var sender = this.sender
        var timerId = setTimeout(function () {
          sender.performCallback(timeoutCallbackId)
        }, delay)
      },
    
      clearTimeout: function (timerId) {
        clearTimeout(timerId)
      }
    
    }
    
    timer._meta = {
      timer: [{
        name: 'setTimeout',
        args: ['function', 'number']
      }, {
        name: 'clearTimeout',
        args: ['number']
      }]
    }
    
    module.exports = timer


/***/ },
/* 123 */
/***/ function(module, exports) {

    'use strict'
    
    var navigator = {
    
      // config
      //  - url: the url to push
      //  - animated: this configuration item is native only
      //  callback is not currently supported
      push: function (config, callbackId) {
        window.location.href = config.url
        this.sender.performCallback(callbackId)
      },
    
      // config
      //  - animated: this configuration item is native only
      //  callback is note currently supported
      pop: function (config, callbackId) {
        window.history.back()
        this.sender.performCallback(callbackId)
      }
    
    }
    
    navigator._meta = {
      navigator: [{
        name: 'push',
        args: ['object', 'function']
      }, {
        name: 'pop',
        args: ['object', 'function']
      }]
    }
    
    module.exports = navigator


/***/ },
/* 124 */
/***/ function(module, exports) {

    (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)}}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".")}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d)return-1;if(d>e)return 1}return 0},b.version=function(a){return new c(a)}}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c)for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1])}catch(f){b.env.params[d[e][0]]=d[e][1]}}}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]};else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/)))b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0);else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")}}else b.env.os={name:"unknown",version:"0.0.0"};b.version&&(b.env.os.version=b.version(b.env.os.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp}(window,window.lib||(window.lib={}));;module.exports = window.lib['env'];

/***/ }
/******/ ]);