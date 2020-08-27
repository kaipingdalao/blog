(function (e) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = e()
    } else if (typeof define === "function" && define.amd) {
        define([], e)
    } else {
        var t;
        if (typeof window !== "undefined") {
            t = window
        } else if (typeof global !== "undefined") {
            t = global
        } else if (typeof self !== "undefined") {
            t = self
        } else {
            t = this
        }
        t.katex = e()
    }
})(function () {
    var e, t, r;
    return function e(t, r, a) {
        function n(l, s) {
            if (!r[l]) {
                if (!t[l]) {
                    var o = typeof require == "function" && require;
                    if (!s && o) return o(l, !0);
                    if (i) return i(l, !0);
                    var u = new Error("Cannot find module '" + l + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[l] = {exports: {}};
                t[l][0].call(c.exports, function (e) {
                    var r = t[l][1][e];
                    return n(r ? r : e)
                }, c, c.exports, e, t, r, a)
            }
            return r[l].exports
        }

        var i = typeof require == "function" && require;
        for (var l = 0; l < a.length; l++) n(a[l]);
        return n
    }({
        1: [function (e, t, r) {
            "use strict";
            var a = e("./src/ParseError");
            var n = v(a);
            var i = e("./src/Settings");
            var l = v(i);
            var s = e("./src/buildTree");
            var o = v(s);
            var u = e("./src/parseTree");
            var c = v(u);
            var f = e("./src/utils");
            var h = v(f);

            function v(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var d = function e(t, r, a) {
                h.default.clearNode(r);
                var n = new l.default(a);
                var i = (0, c.default)(t, n);
                var s = (0, o.default)(i, t, n).toNode();
                r.appendChild(s)
            };
            if (typeof document !== "undefined") {
                if (document.compatMode !== "CSS1Compat") {
                    typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your " + "website has a suitable doctype.");
                    d = function e() {
                        throw new n.default("KaTeX doesn't work in quirks mode.")
                    }
                }
            }
            var p = function e(t, r) {
                var a = new l.default(r);
                var n = (0, c.default)(t, a);
                return (0, o.default)(n, t, a).toMarkup()
            };
            var m = function e(t, r) {
                var a = new l.default(r);
                return (0, c.default)(t, a)
            };
            t.exports = {render: d, renderToString: p, __parse: m, ParseError: n.default}
        }, {
            "./src/ParseError": 29,
            "./src/Settings": 32,
            "./src/buildTree": 37,
            "./src/parseTree": 46,
            "./src/utils": 51
        }],
        2: [function (e, t, r) {
            t.exports = {default: e("core-js/library/fn/json/stringify"), __esModule: true}
        }, {"core-js/library/fn/json/stringify": 6}],
        3: [function (e, t, r) {
            t.exports = {default: e("core-js/library/fn/object/define-property"), __esModule: true}
        }, {"core-js/library/fn/object/define-property": 7}],
        4: [function (e, t, r) {
            "use strict";
            r.__esModule = true;
            r.default = function (e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
        }, {}],
        5: [function (e, t, r) {
            "use strict";
            r.__esModule = true;
            var a = e("../core-js/object/define-property");
            var n = i(a);

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.default = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        a.enumerable = a.enumerable || false;
                        a.configurable = true;
                        if ("value" in a) a.writable = true;
                        (0, n.default)(e, a.key, a)
                    }
                }

                return function (t, r, a) {
                    if (r) e(t.prototype, r);
                    if (a) e(t, a);
                    return t
                }
            }()
        }, {"../core-js/object/define-property": 3}],
        6: [function (e, t, r) {
            var a = e("../../modules/_core"), n = a.JSON || (a.JSON = {stringify: JSON.stringify});
            t.exports = function e(t) {
                return n.stringify.apply(n, arguments)
            }
        }, {"../../modules/_core": 10}],
        7: [function (e, t, r) {
            e("../../modules/es6.object.define-property");
            var a = e("../../modules/_core").Object;
            t.exports = function e(t, r, n) {
                return a.defineProperty(t, r, n)
            }
        }, {"../../modules/_core": 10, "../../modules/es6.object.define-property": 23}],
        8: [function (e, t, r) {
            t.exports = function (e) {
                if (typeof e != "function") throw TypeError(e + " is not a function!");
                return e
            }
        }, {}],
        9: [function (e, t, r) {
            var a = e("./_is-object");
            t.exports = function (e) {
                if (!a(e)) throw TypeError(e + " is not an object!");
                return e
            }
        }, {"./_is-object": 19}],
        10: [function (e, t, r) {
            var a = t.exports = {version: "2.4.0"};
            if (typeof __e == "number") __e = a
        }, {}],
        11: [function (e, t, r) {
            var a = e("./_a-function");
            t.exports = function (e, t, r) {
                a(e);
                if (t === undefined) return e;
                switch (r) {
                    case 1:
                        return function (r) {
                            return e.call(t, r)
                        };
                    case 2:
                        return function (r, a) {
                            return e.call(t, r, a)
                        };
                    case 3:
                        return function (r, a, n) {
                            return e.call(t, r, a, n)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        }, {"./_a-function": 8}],
        12: [function (e, t, r) {
            t.exports = !e("./_fails")(function () {
                return Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a != 7
            })
        }, {"./_fails": 15}],
        13: [function (e, t, r) {
            var a = e("./_is-object"), n = e("./_global").document, i = a(n) && a(n.createElement);
            t.exports = function (e) {
                return i ? n.createElement(e) : {}
            }
        }, {"./_global": 16, "./_is-object": 19}],
        14: [function (e, t, r) {
            var a = e("./_global"), n = e("./_core"), i = e("./_ctx"), l = e("./_hide"), s = "prototype";
            var o = function (e, t, r) {
                var u = e & o.F, c = e & o.G, f = e & o.S, h = e & o.P, v = e & o.B, d = e & o.W,
                    p = c ? n : n[t] || (n[t] = {}), m = p[s], g = c ? a : f ? a[t] : (a[t] || {})[s], y, x, w;
                if (c) r = t;
                for (y in r) {
                    x = !u && g && g[y] !== undefined;
                    if (x && y in p) continue;
                    w = x ? g[y] : r[y];
                    p[y] = c && typeof g[y] != "function" ? r[y] : v && x ? i(w, a) : d && g[y] == w ? function (e) {
                        var t = function (t, r, a) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, r)
                                }
                                return new e(t, r, a)
                            }
                            return e.apply(this, arguments)
                        };
                        t[s] = e[s];
                        return t
                    }(w) : h && typeof w == "function" ? i(Function.call, w) : w;
                    if (h) {
                        (p.virtual || (p.virtual = {}))[y] = w;
                        if (e & o.R && m && !m[y]) l(m, y, w)
                    }
                }
            };
            o.F = 1;
            o.G = 2;
            o.S = 4;
            o.P = 8;
            o.B = 16;
            o.W = 32;
            o.U = 64;
            o.R = 128;
            t.exports = o
        }, {"./_core": 10, "./_ctx": 11, "./_global": 16, "./_hide": 17}],
        15: [function (e, t, r) {
            t.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return true
                }
            }
        }, {}],
        16: [function (e, t, r) {
            var a = t.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = a
        }, {}],
        17: [function (e, t, r) {
            var a = e("./_object-dp"), n = e("./_property-desc");
            t.exports = e("./_descriptors") ? function (e, t, r) {
                return a.f(e, t, n(1, r))
            } : function (e, t, r) {
                e[t] = r;
                return e
            }
        }, {"./_descriptors": 12, "./_object-dp": 20, "./_property-desc": 21}],
        18: [function (e, t, r) {
            t.exports = !e("./_descriptors") && !e("./_fails")(function () {
                return Object.defineProperty(e("./_dom-create")("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a != 7
            })
        }, {"./_descriptors": 12, "./_dom-create": 13, "./_fails": 15}],
        19: [function (e, t, r) {
            t.exports = function (e) {
                return typeof e === "object" ? e !== null : typeof e === "function"
            }
        }, {}],
        20: [function (e, t, r) {
            var a = e("./_an-object"), n = e("./_ie8-dom-define"), i = e("./_to-primitive"), l = Object.defineProperty;
            r.f = e("./_descriptors") ? Object.defineProperty : function e(t, r, s) {
                a(t);
                r = i(r, true);
                a(s);
                if (n) try {
                    return l(t, r, s)
                } catch (e) {
                }
                if ("get" in s || "set" in s) throw TypeError("Accessors not supported!");
                if ("value" in s) t[r] = s.value;
                return t
            }
        }, {"./_an-object": 9, "./_descriptors": 12, "./_ie8-dom-define": 18, "./_to-primitive": 22}],
        21: [function (e, t, r) {
            t.exports = function (e, t) {
                return {enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t}
            }
        }, {}],
        22: [function (e, t, r) {
            var a = e("./_is-object");
            t.exports = function (e, t) {
                if (!a(e)) return e;
                var r, n;
                if (t && typeof (r = e.toString) == "function" && !a(n = r.call(e))) return n;
                if (typeof (r = e.valueOf) == "function" && !a(n = r.call(e))) return n;
                if (!t && typeof (r = e.toString) == "function" && !a(n = r.call(e))) return n;
                throw TypeError("Can't convert object to primitive value")
            }
        }, {"./_is-object": 19}],
        23: [function (e, t, r) {
            var a = e("./_export");
            a(a.S + a.F * !e("./_descriptors"), "Object", {defineProperty: e("./_object-dp").f})
        }, {"./_descriptors": 12, "./_export": 14, "./_object-dp": 20}],
        24: [function (e, t, r) {
            "use strict";

            function a(e) {
                if (!e.__matchAtRelocatable) {
                    var t = e.source + "|()";
                    var r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
                    e.__matchAtRelocatable = new RegExp(t, r)
                }
                return e.__matchAtRelocatable
            }

            function n(e, t, r) {
                if (e.global || e.sticky) {
                    throw new Error("matchAt(...): Only non-global regexes are supported")
                }
                var n = a(e);
                n.lastIndex = r;
                var i = n.exec(t);
                if (i[i.length - 1] == null) {
                    i.length = i.length - 1;
                    return i
                } else {
                    return null
                }
            }

            t.exports = n
        }, {}],
        25: [function (e, t, r) {
            "use strict";
            var a = Object.prototype.hasOwnProperty;
            var n = Object.prototype.propertyIsEnumerable;

            function i(e) {
                if (e === null || e === undefined) {
                    throw new TypeError("Object.assign cannot be called with null or undefined")
                }
                return Object(e)
            }

            function l() {
                try {
                    if (!Object.assign) {
                        return false
                    }
                    var e = new String("abc");
                    e[5] = "de";
                    if (Object.getOwnPropertyNames(e)[0] === "5") {
                        return false
                    }
                    var t = {};
                    for (var r = 0; r < 10; r++) {
                        t["_" + String.fromCharCode(r)] = r
                    }
                    var a = Object.getOwnPropertyNames(t).map(function (e) {
                        return t[e]
                    });
                    if (a.join("") !== "0123456789") {
                        return false
                    }
                    var n = {};
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        n[e] = e
                    });
                    if (Object.keys(Object.assign({}, n)).join("") !== "abcdefghijklmnopqrst") {
                        return false
                    }
                    return true
                } catch (e) {
                    return false
                }
            }

            t.exports = l() ? Object.assign : function (e, t) {
                var r;
                var l = i(e);
                var s;
                for (var o = 1; o < arguments.length; o++) {
                    r = Object(arguments[o]);
                    for (var u in r) {
                        if (a.call(r, u)) {
                            l[u] = r[u]
                        }
                    }
                    if (Object.getOwnPropertySymbols) {
                        s = Object.getOwnPropertySymbols(r);
                        for (var c = 0; c < s.length; c++) {
                            if (n.call(r, s[c])) {
                                l[s[c]] = r[s[c]]
                            }
                        }
                    }
                }
                return l
            }
        }, {}],
        26: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = f(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = f(i);
            var s = e("match-at");
            var o = f(s);
            var u = e("./ParseError");
            var c = f(u);

            function f(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var h = function () {
                function e(t, r, a, i) {
                    (0, n.default)(this, e);
                    this.text = t;
                    this.start = r;
                    this.end = a;
                    this.lexer = i
                }

                (0, l.default)(e, [{
                    key: "range", value: function t(r, a) {
                        if (r.lexer !== this.lexer) {
                            return new e(a)
                        }
                        return new e(a, this.start, r.end, this.lexer)
                    }
                }]);
                return e
            }();
            var v = new RegExp("([ \r\n\t]+)|" + "([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]" + "|[\ud800-\udbff][\udc00-\udfff]" + "|\\\\(?:[a-zA-Z]+|[^\ud800-\udfff])" + ")");
            var d = function () {
                function e(t) {
                    (0, n.default)(this, e);
                    this.input = t;
                    this.pos = 0
                }

                (0, l.default)(e, [{
                    key: "lex", value: function e() {
                        var t = this.input;
                        var r = this.pos;
                        if (r === t.length) {
                            return new h("EOF", r, r, this)
                        }
                        var a = (0, o.default)(v, t, r);
                        if (a === null) {
                            throw new c.default("Unexpected character: '" + t[r] + "'", new h(t[r], r, r + 1, this))
                        }
                        var n = a[2] || " ";
                        var i = this.pos;
                        this.pos += a[0].length;
                        var l = this.pos;
                        return new h(n, i, l, this)
                    }
                }]);
                return e
            }();
            t.exports = d
        }, {
            "./ParseError": 29,
            "babel-runtime/helpers/classCallCheck": 4,
            "babel-runtime/helpers/createClass": 5,
            "match-at": 24
        }],
        27: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = p(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = p(i);
            var s = e("./Lexer");
            var o = p(s);
            var u = e("./macros");
            var c = p(u);
            var f = e("./ParseError");
            var h = p(f);
            var v = e("object-assign");
            var d = p(v);

            function p(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var m = function () {
                function e(t, r) {
                    (0, n.default)(this, e);
                    this.lexer = new o.default(t);
                    this.macros = (0, d.default)({}, c.default, r);
                    this.stack = [];
                    this.discardedWhiteSpace = []
                }

                (0, l.default)(e, [{
                    key: "nextToken", value: function e() {
                        for (; ;) {
                            if (this.stack.length === 0) {
                                this.stack.push(this.lexer.lex())
                            }
                            var t = this.stack.pop();
                            var r = t.text;
                            if (!(r.charAt(0) === "\\" && this.macros.hasOwnProperty(r))) {
                                return t
                            }
                            var a = void 0;
                            var n = this.macros[r];
                            if (typeof n === "string") {
                                var i = 0;
                                if (n.indexOf("#") !== -1) {
                                    var l = n.replace(/##/g, "");
                                    while (l.indexOf("#" + (i + 1)) !== -1) {
                                        ++i
                                    }
                                }
                                var s = new o.default(n);
                                n = [];
                                a = s.lex();
                                while (a.text !== "EOF") {
                                    n.push(a);
                                    a = s.lex()
                                }
                                n.reverse();
                                n.numArgs = i;
                                this.macros[r] = n
                            }
                            if (n.numArgs) {
                                var u = [];
                                var c = void 0;
                                for (c = 0; c < n.numArgs; ++c) {
                                    var f = this.get(true);
                                    if (f.text === "{") {
                                        var v = [];
                                        var d = 1;
                                        while (d !== 0) {
                                            a = this.get(false);
                                            v.push(a);
                                            if (a.text === "{") {
                                                ++d
                                            } else if (a.text === "}") {
                                                --d
                                            } else if (a.text === "EOF") {
                                                throw new h.default("End of input in macro argument", f)
                                            }
                                        }
                                        v.pop();
                                        v.reverse();
                                        u[c] = v
                                    } else if (f.text === "EOF") {
                                        throw new h.default("End of input expecting macro argument", t)
                                    } else {
                                        u[c] = [f]
                                    }
                                }
                                n = n.slice();
                                for (c = n.length - 1; c >= 0; --c) {
                                    a = n[c];
                                    if (a.text === "#") {
                                        if (c === 0) {
                                            throw new h.default("Incomplete placeholder at end of macro body", a)
                                        }
                                        a = n[--c];
                                        if (a.text === "#") {
                                            n.splice(c + 1, 1)
                                        } else if (/^[1-9]$/.test(a.text)) {
                                            n.splice.apply(n, [c, 2].concat(u[a.text - 1]))
                                        } else {
                                            throw new h.default("Not a valid argument number", a)
                                        }
                                    }
                                }
                            }
                            this.stack = this.stack.concat(n)
                        }
                    }
                }, {
                    key: "get", value: function e(t) {
                        this.discardedWhiteSpace = [];
                        var r = this.nextToken();
                        if (t) {
                            while (r.text === " ") {
                                this.discardedWhiteSpace.push(r);
                                r = this.nextToken()
                            }
                        }
                        return r
                    }
                }, {
                    key: "unget", value: function e(t) {
                        this.stack.push(t);
                        while (this.discardedWhiteSpace.length !== 0) {
                            this.stack.push(this.discardedWhiteSpace.pop())
                        }
                    }
                }]);
                return e
            }();
            t.exports = m
        }, {
            "./Lexer": 26,
            "./ParseError": 29,
            "./macros": 44,
            "babel-runtime/helpers/classCallCheck": 4,
            "babel-runtime/helpers/createClass": 5,
            "object-assign": 25
        }],
        28: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = u(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = u(i);
            var s = e("./fontMetrics");
            var o = u(s);

            function u(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var c = 6;
            var f = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]];
            var h = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488];
            var v = function e(t, r) {
                return r.size < 2 ? t : f[t - 1][r.size - 1]
            };
            var d = function () {
                function e(t) {
                    (0, n.default)(this, e);
                    this.style = t.style;
                    this.color = t.color;
                    this.size = t.size || c;
                    this.textSize = t.textSize || this.size;
                    this.phantom = t.phantom;
                    this.font = t.font;
                    this.sizeMultiplier = h[this.size - 1];
                    this._fontMetrics = null
                }

                (0, l.default)(e, [{
                    key: "extend", value: function t(r) {
                        var a = {
                            style: this.style,
                            size: this.size,
                            textSize: this.textSize,
                            color: this.color,
                            phantom: this.phantom,
                            font: this.font
                        };
                        for (var n in r) {
                            if (r.hasOwnProperty(n)) {
                                a[n] = r[n]
                            }
                        }
                        return new e(a)
                    }
                }, {
                    key: "havingStyle", value: function e(t) {
                        if (this.style === t) {
                            return this
                        } else {
                            return this.extend({style: t, size: v(this.textSize, t)})
                        }
                    }
                }, {
                    key: "havingCrampedStyle", value: function e() {
                        return this.havingStyle(this.style.cramp())
                    }
                }, {
                    key: "havingSize", value: function e(t) {
                        if (this.size === t && this.textSize === t) {
                            return this
                        } else {
                            return this.extend({style: this.style.text(), size: t, textSize: t})
                        }
                    }
                }, {
                    key: "havingBaseStyle", value: function e(t) {
                        t = t || this.style.text();
                        var r = v(c, t);
                        if (this.size === r && this.textSize === c && this.style === t) {
                            return this
                        } else {
                            return this.extend({style: t, size: r, baseSize: c})
                        }
                    }
                }, {
                    key: "withColor", value: function e(t) {
                        return this.extend({color: t})
                    }
                }, {
                    key: "withPhantom", value: function e() {
                        return this.extend({phantom: true})
                    }
                }, {
                    key: "withFont", value: function e(t) {
                        return this.extend({font: t || this.font})
                    }
                }, {
                    key: "sizingClasses", value: function e(t) {
                        if (t.size !== this.size) {
                            return ["sizing", "reset-size" + t.size, "size" + this.size]
                        } else {
                            return []
                        }
                    }
                }, {
                    key: "baseSizingClasses", value: function e() {
                        if (this.size !== c) {
                            return ["sizing", "reset-size" + this.size, "size" + c]
                        } else {
                            return []
                        }
                    }
                }, {
                    key: "fontMetrics", value: function e() {
                        if (!this._fontMetrics) {
                            this._fontMetrics = o.default.getFontMetrics(this.size)
                        }
                        return this._fontMetrics
                    }
                }, {
                    key: "getColor", value: function t() {
                        if (this.phantom) {
                            return "transparent"
                        } else {
                            return e.colorMap[this.color] || this.color
                        }
                    }
                }]);
                return e
            }();
            d.colorMap = {
                "katex-blue": "#6495ed",
                "katex-orange": "#ffa500",
                "katex-pink": "#ff00af",
                "katex-red": "#df0030",
                "katex-green": "#28ae7b",
                "katex-gray": "gray",
                "katex-purple": "#9d38bd",
                "katex-blueA": "#ccfaff",
                "katex-blueB": "#80f6ff",
                "katex-blueC": "#63d9ea",
                "katex-blueD": "#11accd",
                "katex-blueE": "#0c7f99",
                "katex-tealA": "#94fff5",
                "katex-tealB": "#26edd5",
                "katex-tealC": "#01d1c1",
                "katex-tealD": "#01a995",
                "katex-tealE": "#208170",
                "katex-greenA": "#b6ffb0",
                "katex-greenB": "#8af281",
                "katex-greenC": "#74cf70",
                "katex-greenD": "#1fab54",
                "katex-greenE": "#0d923f",
                "katex-goldA": "#ffd0a9",
                "katex-goldB": "#ffbb71",
                "katex-goldC": "#ff9c39",
                "katex-goldD": "#e07d10",
                "katex-goldE": "#a75a05",
                "katex-redA": "#fca9a9",
                "katex-redB": "#ff8482",
                "katex-redC": "#f9685d",
                "katex-redD": "#e84d39",
                "katex-redE": "#bc2612",
                "katex-maroonA": "#ffbde0",
                "katex-maroonB": "#ff92c6",
                "katex-maroonC": "#ed5fa6",
                "katex-maroonD": "#ca337c",
                "katex-maroonE": "#9e034e",
                "katex-purpleA": "#ddd7ff",
                "katex-purpleB": "#c6b9fc",
                "katex-purpleC": "#aa87ff",
                "katex-purpleD": "#7854ab",
                "katex-purpleE": "#543b78",
                "katex-mintA": "#f5f9e8",
                "katex-mintB": "#edf2df",
                "katex-mintC": "#e0e5cc",
                "katex-grayA": "#f6f7f7",
                "katex-grayB": "#f0f1f2",
                "katex-grayC": "#e3e5e6",
                "katex-grayD": "#d6d8da",
                "katex-grayE": "#babec2",
                "katex-grayF": "#888d93",
                "katex-grayG": "#626569",
                "katex-grayH": "#3b3e40",
                "katex-grayI": "#21242c",
                "katex-kaBlue": "#314453",
                "katex-kaGreen": "#71B307"
            };
            d.BASESIZE = c;
            t.exports = d
        }, {"./fontMetrics": 41, "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5}],
        29: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = i(a);

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var l = function e(t, r) {
                (0, n.default)(this, e);
                var a = "KaTeX parse error: " + t;
                var i = void 0;
                var l = void 0;
                if (r && r.lexer && r.start <= r.end) {
                    var s = r.lexer.input;
                    i = r.start;
                    l = r.end;
                    if (i === s.length) {
                        a += " at end of input: "
                    } else {
                        a += " at position " + (i + 1) + ": "
                    }
                    var o = s.slice(i, l).replace(/[^]/g, "$&\u0332");
                    var u = void 0;
                    if (i > 15) {
                        u = "\u2026" + s.slice(i - 15, i)
                    } else {
                        u = s.slice(0, i)
                    }
                    var c = void 0;
                    if (l + 15 < s.length) {
                        c = s.slice(l, l + 15) + "\u2026"
                    } else {
                        c = s.slice(l)
                    }
                    a += u + o + c
                }
                var f = new Error(a);
                f.name = "ParseError";
                f.__proto__ = e.prototype;
                f.position = i;
                return f
            };
            l.prototype.__proto__ = Error.prototype;
            t.exports = l
        }, {"babel-runtime/helpers/classCallCheck": 4}],
        30: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: true});
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = i(a);

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var l = function e(t, r, a, i, l) {
                (0, n.default)(this, e);
                this.type = t;
                this.value = r;
                this.mode = a;
                if (i && (!l || l.lexer === i.lexer)) {
                    this.lexer = i.lexer;
                    this.start = i.start;
                    this.end = (l || i).end
                }
            };
            r.default = l
        }, {"babel-runtime/helpers/classCallCheck": 4}],
        31: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = z(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = z(i);
            var s = e("./functions");
            var o = z(s);
            var u = e("./environments");
            var c = z(u);
            var f = e("./MacroExpander");
            var h = z(f);
            var v = e("./symbols");
            var d = z(v);
            var p = e("./utils");
            var m = z(p);
            var g = e("./units");
            var y = z(g);
            var x = e("./unicodeRegexes");
            var w = e("./ParseNode");
            var b = z(w);
            var k = e("./ParseError");
            var M = z(k);

            function z(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function S(e, t, r) {
                this.result = e;
                this.isFunction = t;
                this.token = r
            }

            var A = function () {
                function e(t, r) {
                    (0, n.default)(this, e);
                    this.gullet = new h.default(t, r.macros);
                    if (r.colorIsTextColor) {
                        this.gullet.macros["\\color"] = "\\textcolor"
                    }
                    this.settings = r;
                    this.leftrightDepth = 0
                }

                (0, l.default)(e, [{
                    key: "expect", value: function e(t, r) {
                        if (this.nextToken.text !== t) {
                            throw new M.default("Expected '" + t + "', got '" + this.nextToken.text + "'", this.nextToken)
                        }
                        if (r !== false) {
                            this.consume()
                        }
                    }
                }, {
                    key: "consume", value: function e() {
                        this.nextToken = this.gullet.get(this.mode === "math")
                    }
                }, {
                    key: "switchMode", value: function e(t) {
                        this.gullet.unget(this.nextToken);
                        this.mode = t;
                        this.consume()
                    }
                }, {
                    key: "parse", value: function e() {
                        this.mode = "math";
                        this.consume();
                        var e = this.parseInput();
                        return e
                    }
                }, {
                    key: "parseInput", value: function e() {
                        var t = this.parseExpression(false);
                        this.expect("EOF", false);
                        return t
                    }
                }, {
                    key: "parseExpression", value: function t(r, a) {
                        var n = [];
                        while (true) {
                            var i = this.nextToken;
                            if (e.endOfExpression.indexOf(i.text) !== -1) {
                                break
                            }
                            if (a && i.text === a) {
                                break
                            }
                            if (r && o.default[i.text] && o.default[i.text].infix) {
                                break
                            }
                            var l = this.parseAtom();
                            if (!l) {
                                if (!this.settings.throwOnError && i.text[0] === "\\") {
                                    var s = this.handleUnsupportedCmd();
                                    n.push(s);
                                    continue
                                }
                                break
                            }
                            n.push(l)
                        }
                        return this.handleInfixNodes(n)
                    }
                }, {
                    key: "handleInfixNodes", value: function e(t) {
                        var r = -1;
                        var a = void 0;
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (i.type === "infix") {
                                if (r !== -1) {
                                    throw new M.default("only one infix operator per group", i.value.token)
                                }
                                r = n;
                                a = i.value.replaceWith
                            }
                        }
                        if (r !== -1) {
                            var l = void 0;
                            var s = void 0;
                            var o = t.slice(0, r);
                            var u = t.slice(r + 1);
                            if (o.length === 1 && o[0].type === "ordgroup") {
                                l = o[0]
                            } else {
                                l = new b.default("ordgroup", o, this.mode)
                            }
                            if (u.length === 1 && u[0].type === "ordgroup") {
                                s = u[0]
                            } else {
                                s = new b.default("ordgroup", u, this.mode)
                            }
                            var c = this.callFunction(a, [l, s], null);
                            return [new b.default(c.type, c, this.mode)]
                        } else {
                            return t
                        }
                    }
                }, {
                    key: "handleSupSubscript", value: function t(r) {
                        var a = this.nextToken;
                        var n = a.text;
                        this.consume();
                        var i = this.parseGroup();
                        if (!i) {
                            if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                                return this.handleUnsupportedCmd()
                            } else {
                                throw new M.default("Expected group after '" + n + "'", a)
                            }
                        } else if (i.isFunction) {
                            var l = o.default[i.result].greediness;
                            if (l > e.SUPSUB_GREEDINESS) {
                                return this.parseFunction(i)
                            } else {
                                throw new M.default("Got function '" + i.result + "' with no arguments " + "as " + r, a)
                            }
                        } else {
                            return i.result
                        }
                    }
                }, {
                    key: "handleUnsupportedCmd", value: function e() {
                        var t = this.nextToken.text;
                        var r = [];
                        for (var a = 0; a < t.length; a++) {
                            r.push(new b.default("textord", t[a], "text"))
                        }
                        var n = new b.default("text", {body: r, type: "text"}, this.mode);
                        var i = new b.default("color", {
                            color: this.settings.errorColor,
                            value: [n],
                            type: "color"
                        }, this.mode);
                        this.consume();
                        return i
                    }
                }, {
                    key: "parseAtom", value: function e() {
                        var t = this.parseImplicitGroup();
                        if (this.mode === "text") {
                            return t
                        }
                        var r = void 0;
                        var a = void 0;
                        while (true) {
                            var n = this.nextToken;
                            if (n.text === "\\limits" || n.text === "\\nolimits") {
                                if (!t || t.type !== "op") {
                                    throw new M.default("Limit controls must follow a math operator", n)
                                } else {
                                    var i = n.text === "\\limits";
                                    t.value.limits = i;
                                    t.value.alwaysHandleSupSub = true
                                }
                                this.consume()
                            } else if (n.text === "^") {
                                if (r) {
                                    throw new M.default("Double superscript", n)
                                }
                                r = this.handleSupSubscript("superscript")
                            } else if (n.text === "_") {
                                if (a) {
                                    throw new M.default("Double subscript", n)
                                }
                                a = this.handleSupSubscript("subscript")
                            } else if (n.text === "'") {
                                if (r) {
                                    throw new M.default("Double superscript", n)
                                }
                                var l = new b.default("textord", "\\prime", this.mode);
                                var s = [l];
                                this.consume();
                                while (this.nextToken.text === "'") {
                                    s.push(l);
                                    this.consume()
                                }
                                if (this.nextToken.text === "^") {
                                    s.push(this.handleSupSubscript("superscript"))
                                }
                                r = new b.default("ordgroup", s, this.mode)
                            } else {
                                break
                            }
                        }
                        if (r || a) {
                            return new b.default("supsub", {base: t, sup: r, sub: a}, this.mode)
                        } else {
                            return t
                        }
                    }
                }, {
                    key: "parseImplicitGroup", value: function t() {
                        var r = this.parseSymbol();
                        if (r == null) {
                            return this.parseFunction()
                        }
                        var a = r.result;
                        if (a === "\\left") {
                            var n = this.parseFunction(r);
                            ++this.leftrightDepth;
                            var i = this.parseExpression(false);
                            --this.leftrightDepth;
                            this.expect("\\right", false);
                            var l = this.parseFunction();
                            return new b.default("leftright", {
                                body: i,
                                left: n.value.value,
                                right: l.value.value
                            }, this.mode)
                        } else if (a === "\\begin") {
                            var s = this.parseFunction(r);
                            var o = s.value.name;
                            if (!c.default.hasOwnProperty(o)) {
                                throw new M.default("No such environment: " + o, s.value.nameGroup)
                            }
                            var u = c.default[o];
                            var f = this.parseArguments("\\begin{" + o + "}", u);
                            var h = {mode: this.mode, envName: o, parser: this, positions: f.pop()};
                            var v = u.handler(h, f);
                            this.expect("\\end", false);
                            var d = this.nextToken;
                            var p = this.parseFunction();
                            if (p.value.name !== o) {
                                throw new M.default("Mismatch: \\begin{" + o + "} matched " + "by \\end{" + p.value.name + "}", d)
                            }
                            v.position = p.position;
                            return v
                        } else if (m.default.contains(e.sizeFuncs, a)) {
                            this.consumeSpaces();
                            var g = this.parseExpression(false);
                            return new b.default("sizing", {
                                size: m.default.indexOf(e.sizeFuncs, a) + 1,
                                value: g
                            }, this.mode)
                        } else if (m.default.contains(e.styleFuncs, a)) {
                            this.consumeSpaces();
                            var y = this.parseExpression(true);
                            return new b.default("styling", {style: a.slice(1, a.length - 5), value: y}, this.mode)
                        } else if (a in e.oldFontFuncs) {
                            var x = e.oldFontFuncs[a];
                            this.consumeSpaces();
                            var w = this.parseExpression(true);
                            if (x.slice(0, 4) === "text") {
                                return new b.default("text", {
                                    style: x,
                                    body: new b.default("ordgroup", w, this.mode)
                                }, this.mode)
                            } else {
                                return new b.default("font", {
                                    font: x,
                                    body: new b.default("ordgroup", w, this.mode)
                                }, this.mode)
                            }
                        } else if (a === "\\color") {
                            var k = this.parseColorGroup(false);
                            if (!k) {
                                throw new M.default("\\color not followed by color")
                            }
                            var z = this.parseExpression(true);
                            return new b.default("color", {type: "color", color: k.result.value, value: z}, this.mode)
                        } else if (a === "$") {
                            if (this.mode === "math") {
                                throw new M.default("$ within math mode")
                            }
                            this.consume();
                            var S = this.mode;
                            this.switchMode("math");
                            var A = this.parseExpression(false, "$");
                            this.expect("$", true);
                            this.switchMode(S);
                            return new b.default("styling", {style: "text", value: A}, "math")
                        } else {
                            return this.parseFunction(r)
                        }
                    }
                }, {
                    key: "parseFunction", value: function e(t) {
                        if (!t) {
                            t = this.parseGroup()
                        }
                        if (t) {
                            if (t.isFunction) {
                                var r = t.result;
                                var a = o.default[r];
                                if (this.mode === "text" && !a.allowedInText) {
                                    throw new M.default("Can't use function '" + r + "' in text mode", t.token)
                                } else if (this.mode === "math" && a.allowedInMath === false) {
                                    throw new M.default("Can't use function '" + r + "' in math mode", t.token)
                                }
                                var n = this.parseArguments(r, a);
                                var i = t.token;
                                var l = this.callFunction(r, n, n.pop(), i);
                                return new b.default(l.type, l, this.mode)
                            } else {
                                return t.result
                            }
                        } else {
                            return null
                        }
                    }
                }, {
                    key: "callFunction", value: function e(t, r, a, n) {
                        var i = {funcName: t, parser: this, positions: a, token: n};
                        return o.default[t].handler(i, r)
                    }
                }, {
                    key: "parseArguments", value: function e(t, r) {
                        var a = r.numArgs + r.numOptionalArgs;
                        if (a === 0) {
                            return [[this.pos]]
                        }
                        var n = r.greediness;
                        var i = [this.pos];
                        var l = [];
                        for (var s = 0; s < a; s++) {
                            var u = this.nextToken;
                            var c = r.argTypes && r.argTypes[s];
                            var f = void 0;
                            if (s < r.numOptionalArgs) {
                                if (c) {
                                    f = this.parseGroupOfType(c, true)
                                } else {
                                    f = this.parseGroup(true)
                                }
                                if (!f) {
                                    l.push(null);
                                    i.push(this.pos);
                                    continue
                                }
                            } else {
                                if (c) {
                                    f = this.parseGroupOfType(c)
                                } else {
                                    f = this.parseGroup()
                                }
                                if (!f) {
                                    if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                                        f = new S(this.handleUnsupportedCmd(this.nextToken.text), false)
                                    } else {
                                        throw new M.default("Expected group after '" + t + "'", u)
                                    }
                                }
                            }
                            var h = void 0;
                            if (f.isFunction) {
                                var v = o.default[f.result].greediness;
                                if (v > n) {
                                    h = this.parseFunction(f)
                                } else {
                                    throw new M.default("Got function '" + f.result + "' as " + "argument to '" + t + "'", u)
                                }
                            } else {
                                h = f.result
                            }
                            l.push(h);
                            i.push(this.pos)
                        }
                        l.push(i);
                        return l
                    }
                }, {
                    key: "parseGroupOfType", value: function e(t, r) {
                        var a = this.mode;
                        if (t === "original") {
                            t = a
                        }
                        if (t === "color") {
                            return this.parseColorGroup(r)
                        }
                        if (t === "size") {
                            return this.parseSizeGroup(r)
                        }
                        this.switchMode(t);
                        if (t === "text") {
                            this.consumeSpaces()
                        }
                        var n = this.parseGroup(r);
                        this.switchMode(a);
                        return n
                    }
                }, {
                    key: "consumeSpaces", value: function e() {
                        while (this.nextToken.text === " ") {
                            this.consume()
                        }
                    }
                }, {
                    key: "parseStringGroup", value: function e(t, r) {
                        if (r && this.nextToken.text !== "[") {
                            return null
                        }
                        var a = this.mode;
                        this.mode = "text";
                        this.expect(r ? "[" : "{");
                        var n = "";
                        var i = this.nextToken;
                        var l = i;
                        while (this.nextToken.text !== (r ? "]" : "}")) {
                            if (this.nextToken.text === "EOF") {
                                throw new M.default("Unexpected end of input in " + t, i.range(this.nextToken, n))
                            }
                            l = this.nextToken;
                            n += l.text;
                            this.consume()
                        }
                        this.mode = a;
                        this.expect(r ? "]" : "}");
                        return i.range(l, n)
                    }
                }, {
                    key: "parseRegexGroup", value: function e(t, r) {
                        var a = this.mode;
                        this.mode = "text";
                        var n = this.nextToken;
                        var i = n;
                        var l = "";
                        while (this.nextToken.text !== "EOF" && t.test(l + this.nextToken.text)) {
                            i = this.nextToken;
                            l += i.text;
                            this.consume()
                        }
                        if (l === "") {
                            throw new M.default("Invalid " + r + ": '" + n.text + "'", n)
                        }
                        this.mode = a;
                        return n.range(i, l)
                    }
                }, {
                    key: "parseColorGroup", value: function e(t) {
                        var r = this.parseStringGroup("color", t);
                        if (!r) {
                            return null
                        }
                        var a = /^(#[a-z0-9]+|[a-z]+)$/i.exec(r.text);
                        if (!a) {
                            throw new M.default("Invalid color: '" + r.text + "'", r)
                        }
                        return new S(new b.default("color", a[0], this.mode), false)
                    }
                }, {
                    key: "parseSizeGroup", value: function e(t) {
                        var r = void 0;
                        if (!t && this.nextToken.text !== "{") {
                            r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size")
                        } else {
                            r = this.parseStringGroup("size", t)
                        }
                        if (!r) {
                            return null
                        }
                        var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
                        if (!a) {
                            throw new M.default("Invalid size: '" + r.text + "'", r)
                        }
                        var n = {number: +(a[1] + a[2]), unit: a[3]};
                        if (!y.default.validUnit(n)) {
                            throw new M.default("Invalid unit: '" + n.unit + "'", r)
                        }
                        return new S(new b.default("size", n, this.mode), false)
                    }
                }, {
                    key: "parseGroup", value: function e(t) {
                        var r = this.nextToken;
                        if (this.nextToken.text === (t ? "[" : "{")) {
                            this.consume();
                            var a = this.parseExpression(false, t ? "]" : null);
                            var n = this.nextToken;
                            this.expect(t ? "]" : "}");
                            if (this.mode === "text") {
                                this.formLigatures(a)
                            }
                            return new S(new b.default("ordgroup", a, this.mode, r, n), false)
                        } else {
                            return t ? null : this.parseSymbol()
                        }
                    }
                }, {
                    key: "formLigatures", value: function e(t) {
                        var r = t.length - 1;
                        for (var a = 0; a < r; ++a) {
                            var n = t[a];
                            var i = n.value;
                            if (i === "-" && t[a + 1].value === "-") {
                                if (a + 1 < r && t[a + 2].value === "-") {
                                    t.splice(a, 3, new b.default("textord", "---", "text", n, t[a + 2]));
                                    r -= 2
                                } else {
                                    t.splice(a, 2, new b.default("textord", "--", "text", n, t[a + 1]));
                                    r -= 1
                                }
                            }
                            if ((i === "'" || i === "`") && t[a + 1].value === i) {
                                t.splice(a, 2, new b.default("textord", i + i, "text", n, t[a + 1]));
                                r -= 1
                            }
                        }
                    }
                }, {
                    key: "parseSymbol", value: function e() {
                        var t = this.nextToken;
                        if (o.default[t.text]) {
                            this.consume();
                            return new S(t.text, true, t)
                        } else if (d.default[this.mode][t.text]) {
                            this.consume();
                            return new S(new b.default(d.default[this.mode][t.text].group, t.text, this.mode, t), false, t)
                        } else if (this.mode === "text" && x.cjkRegex.test(t.text)) {
                            this.consume();
                            return new S(new b.default("textord", t.text, this.mode, t), false, t)
                        } else if (t.text === "$") {
                            return new S(t.text, false, t)
                        } else {
                            return null
                        }
                    }
                }]);
                return e
            }();
            A.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
            A.SUPSUB_GREEDINESS = 1;
            A.sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
            A.styleFuncs = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
            A.oldFontFuncs = {"\\rm": "mathrm", "\\sf": "mathsf", "\\tt": "mathtt", "\\bf": "mathbf", "\\it": "mathit"};
            A.prototype.ParseNode = b.default;
            t.exports = A
        }, {
            "./MacroExpander": 27,
            "./ParseError": 29,
            "./ParseNode": 30,
            "./environments": 40,
            "./functions": 43,
            "./symbols": 48,
            "./unicodeRegexes": 49,
            "./units": 50,
            "./utils": 51,
            "babel-runtime/helpers/classCallCheck": 4,
            "babel-runtime/helpers/createClass": 5
        }],
        32: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = s(a);
            var i = e("./utils");
            var l = s(i);

            function s(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var o = function e(t) {
                (0, n.default)(this, e);
                t = t || {};
                this.displayMode = l.default.deflt(t.displayMode, false);
                this.throwOnError = l.default.deflt(t.throwOnError, true);
                this.errorColor = l.default.deflt(t.errorColor, "#cc0000");
                this.macros = t.macros || {};
                this.colorIsTextColor = l.default.deflt(t.colorIsTextColor, false)
            };
            t.exports = o
        }, {"./utils": 51, "babel-runtime/helpers/classCallCheck": 4}],
        33: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = s(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = s(i);

            function s(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var o = function () {
                function e(t, r, a) {
                    (0, n.default)(this, e);
                    this.id = t;
                    this.size = r;
                    this.cramped = a
                }

                (0, l.default)(e, [{
                    key: "sup", value: function e() {
                        return g[y[this.id]]
                    }
                }, {
                    key: "sub", value: function e() {
                        return g[x[this.id]]
                    }
                }, {
                    key: "fracNum", value: function e() {
                        return g[w[this.id]]
                    }
                }, {
                    key: "fracDen", value: function e() {
                        return g[b[this.id]]
                    }
                }, {
                    key: "cramp", value: function e() {
                        return g[k[this.id]]
                    }
                }, {
                    key: "text", value: function e() {
                        return g[M[this.id]]
                    }
                }, {
                    key: "isTight", value: function e() {
                        return this.size >= 2
                    }
                }]);
                return e
            }();
            var u = 0;
            var c = 1;
            var f = 2;
            var h = 3;
            var v = 4;
            var d = 5;
            var p = 6;
            var m = 7;
            var g = [new o(u, 0, false), new o(c, 0, true), new o(f, 1, false), new o(h, 1, true), new o(v, 2, false), new o(d, 2, true), new o(p, 3, false), new o(m, 3, true)];
            var y = [v, d, v, d, p, m, p, m];
            var x = [d, d, d, d, m, m, m, m];
            var w = [f, h, v, d, p, m, p, m];
            var b = [h, h, d, d, m, m, m, m];
            var k = [c, c, h, h, d, d, m, m];
            var M = [u, c, f, h, f, h, f, h];
            t.exports = {DISPLAY: g[u], TEXT: g[f], SCRIPT: g[v], SCRIPTSCRIPT: g[p]}
        }, {"babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5}],
        34: [function (e, t, r) {
            "use strict";
            var a = e("./domTree");
            var n = f(a);
            var i = e("./fontMetrics");
            var l = f(i);
            var s = e("./symbols");
            var o = f(s);
            var u = e("./utils");
            var c = f(u);

            function f(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var h = ["\\imath", "\\jmath", "\\pounds"];
            var v = function e(t, r, a) {
                if (o.default[a][t] && o.default[a][t].replace) {
                    t = o.default[a][t].replace
                }
                return {value: t, metrics: l.default.getCharacterMetrics(t, r)}
            };
            var d = function e(t, r, a, i, l) {
                var s = v(t, r, a);
                var o = s.metrics;
                t = s.value;
                var u = void 0;
                if (o) {
                    var c = o.italic;
                    if (a === "text") {
                        c = 0
                    }
                    u = new n.default.symbolNode(t, o.height, o.depth, c, o.skew, l)
                } else {
                    typeof console !== "undefined" && console.warn("No character metrics for '" + t + "' in style '" + r + "'");
                    u = new n.default.symbolNode(t, 0, 0, 0, 0, l)
                }
                if (i) {
                    u.maxFontSize = i.sizeMultiplier;
                    if (i.style.isTight()) {
                        u.classes.push("mtight")
                    }
                    if (i.getColor()) {
                        u.style.color = i.getColor()
                    }
                }
                return u
            };
            var p = function e(t, r, a, n) {
                if (t === "\\" || o.default[r][t].font === "main") {
                    return d(t, "Main-Regular", r, a, n)
                } else {
                    return d(t, "AMS-Regular", r, a, n.concat(["amsrm"]))
                }
            };
            var m = function e(t, r, a, n, i) {
                if (i === "mathord") {
                    var l = g(t, r, a, n);
                    return d(t, l.fontName, r, a, n.concat([l.fontClass]))
                } else if (i === "textord") {
                    var s = o.default[r][t] && o.default[r][t].font;
                    if (s === "ams") {
                        return d(t, "AMS-Regular", r, a, n.concat(["amsrm"]))
                    } else {
                        return d(t, "Main-Regular", r, a, n.concat(["mathrm"]))
                    }
                } else {
                    throw new Error("unexpected type: " + i + " in mathDefault")
                }
            };
            var g = function e(t, r, a, n) {
                if (/[0-9]/.test(t.charAt(0)) || c.default.contains(h, t)) {
                    return {fontName: "Main-Italic", fontClass: "mainit"}
                } else {
                    return {fontName: "Math-Italic", fontClass: "mathit"}
                }
            };
            var y = function e(t, r, a) {
                var n = t.mode;
                var i = t.value;
                var l = ["mord"];
                var s = r.font;
                if (s) {
                    var o = void 0;
                    if (s === "mathit" || c.default.contains(h, i)) {
                        o = g(i, n, r, l)
                    } else {
                        o = S[s]
                    }
                    if (v(i, o.fontName, n).metrics) {
                        return d(i, o.fontName, n, r, l.concat([o.fontClass || s]))
                    } else {
                        return m(i, n, r, l, a)
                    }
                } else {
                    return m(i, n, r, l, a)
                }
            };
            var x = function e(t) {
                var r = 0;
                var a = 0;
                var n = 0;
                if (t.children) {
                    for (var i = 0; i < t.children.length; i++) {
                        if (t.children[i].height > r) {
                            r = t.children[i].height
                        }
                        if (t.children[i].depth > a) {
                            a = t.children[i].depth
                        }
                        if (t.children[i].maxFontSize > n) {
                            n = t.children[i].maxFontSize
                        }
                    }
                }
                t.height = r;
                t.depth = a;
                t.maxFontSize = n
            };
            var w = function e(t, r, a) {
                var i = new n.default.span(t, r, a);
                x(i);
                return i
            };
            var b = function e(t, r) {
                t.children = r.concat(t.children);
                x(t)
            };
            var k = function e(t) {
                var r = new n.default.documentFragment(t);
                x(r);
                return r
            };
            var M = function e(t, r, a, i) {
                var l = void 0;
                var s = void 0;
                var o = void 0;
                if (r === "individualShift") {
                    var u = t;
                    t = [u[0]];
                    l = -u[0].shift - u[0].elem.depth;
                    s = l;
                    for (o = 1; o < u.length; o++) {
                        var c = -u[o].shift - s - u[o].elem.depth;
                        var f = c - (u[o - 1].elem.height + u[o - 1].elem.depth);
                        s = s + c;
                        t.push({type: "kern", size: f});
                        t.push(u[o])
                    }
                } else if (r === "top") {
                    var h = a;
                    for (o = 0; o < t.length; o++) {
                        if (t[o].type === "kern") {
                            h -= t[o].size
                        } else {
                            h -= t[o].elem.height + t[o].elem.depth
                        }
                    }
                    l = h
                } else if (r === "bottom") {
                    l = -a
                } else if (r === "shift") {
                    l = -t[0].elem.depth - a
                } else if (r === "firstBaseline") {
                    l = -t[0].elem.depth
                } else {
                    l = 0
                }
                var v = 0;
                for (o = 0; o < t.length; o++) {
                    if (t[o].type === "elem") {
                        var d = t[o].elem;
                        v = Math.max(v, d.maxFontSize, d.height)
                    }
                }
                v += 2;
                var p = w(["pstrut"], []);
                p.style.height = v + "em";
                var m = [];
                var g = l;
                var y = l;
                s = l;
                for (o = 0; o < t.length; o++) {
                    if (t[o].type === "kern") {
                        s += t[o].size
                    } else {
                        var x = t[o].elem;
                        var b = w([], [p, x]);
                        b.style.top = -v - s - x.depth + "em";
                        if (t[o].marginLeft) {
                            b.style.marginLeft = t[o].marginLeft
                        }
                        if (t[o].marginRight) {
                            b.style.marginRight = t[o].marginRight
                        }
                        m.push(b);
                        s += x.height + x.depth
                    }
                    g = Math.min(g, s);
                    y = Math.max(y, s)
                }
                var k = w(["vlist"], m);
                k.style.height = y + "em";
                var M = void 0;
                if (g < 0) {
                    var z = w(["vlist"], []);
                    z.style.height = -g + "em";
                    var S = w(["vlist-s"], [new n.default.symbolNode("\u200b")]);
                    M = [w(["vlist-r"], [k, S]), w(["vlist-r"], [z])]
                } else {
                    M = [w(["vlist-r"], [k])]
                }
                var A = w(["vlist-t"], M);
                if (M.length === 2) {
                    A.classes.push("vlist-t2")
                }
                A.height = y;
                A.depth = -g;
                return A
            };
            var z = {
                "\\qquad": {size: "2em", className: "qquad"},
                "\\quad": {size: "1em", className: "quad"},
                "\\enspace": {size: "0.5em", className: "enspace"},
                "\\;": {size: "0.277778em", className: "thickspace"},
                "\\:": {size: "0.22222em", className: "mediumspace"},
                "\\,": {size: "0.16667em", className: "thinspace"},
                "\\!": {size: "-0.16667em", className: "negativethinspace"}
            };
            var S = {
                mathbf: {variant: "bold", fontName: "Main-Bold"},
                mathrm: {variant: "normal", fontName: "Main-Regular"},
                textit: {variant: "italic", fontName: "Main-Italic"},
                mathbb: {variant: "double-struck", fontName: "AMS-Regular"},
                mathcal: {variant: "script", fontName: "Caligraphic-Regular"},
                mathfrak: {variant: "fraktur", fontName: "Fraktur-Regular"},
                mathscr: {variant: "script", fontName: "Script-Regular"},
                mathsf: {variant: "sans-serif", fontName: "SansSerif-Regular"},
                mathtt: {variant: "monospace", fontName: "Typewriter-Regular"}
            };
            t.exports = {
                fontMap: S,
                makeSymbol: d,
                mathsym: p,
                makeSpan: w,
                makeFragment: k,
                makeVList: M,
                makeOrd: y,
                prependChildren: b,
                spacingFunctions: z
            }
        }, {"./domTree": 39, "./fontMetrics": 41, "./symbols": 48, "./utils": 51}],
        35: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/core-js/json/stringify");
            var n = b(a);
            var i = e("./ParseError");
            var l = b(i);
            var s = e("./Style");
            var o = b(s);
            var u = e("./buildCommon");
            var c = b(u);
            var f = e("./delimiter");
            var h = b(f);
            var v = e("./domTree");
            var d = b(v);
            var p = e("./units");
            var m = b(p);
            var g = e("./utils");
            var y = b(g);
            var x = e("./stretchy");
            var w = b(x);

            function b(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var k = function e(t) {
                return t instanceof d.default.span && t.classes[0] === "mspace"
            };
            var M = function e(t) {
                return t && t.classes[0] === "mbin"
            };
            var z = function e(t, r) {
                if (t) {
                    return y.default.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], t.classes[0])
                } else {
                    return r
                }
            };
            var S = function e(t, r) {
                if (t) {
                    return y.default.contains(["mrel", "mclose", "mpunct"], t.classes[0])
                } else {
                    return r
                }
            };
            var A = function e(t, r) {
                var a = r;
                while (a < t.length && k(t[a])) {
                    a++
                }
                if (a === r) {
                    return null
                } else {
                    return t.splice(r, a - r)
                }
            };
            var C = function e(t, r, a) {
                var n = [];
                for (var i = 0; i < t.length; i++) {
                    var l = t[i];
                    var s = L(l, r);
                    if (s instanceof d.default.documentFragment) {
                        Array.prototype.push.apply(n, s.children)
                    } else {
                        n.push(s)
                    }
                }
                for (var o = 0; o < n.length; o++) {
                    var f = A(n, o);
                    if (f) {
                        if (o < n.length) {
                            if (n[o] instanceof d.default.symbolNode) {
                                n[o] = (0, u.makeSpan)([].concat(n[o].classes), [n[o]])
                            }
                            c.default.prependChildren(n[o], f)
                        } else {
                            Array.prototype.push.apply(n, f);
                            break
                        }
                    }
                }
                for (var h = 0; h < n.length; h++) {
                    if (M(n[h]) && (z(n[h - 1], a) || S(n[h + 1], a))) {
                        n[h].classes[0] = "mord"
                    }
                }
                for (var v = 0; v < n.length; v++) {
                    if (n[v].value === "\u0338" && v + 1 < n.length) {
                        var p = n.slice(v, v + 2);
                        p[0].classes = ["mainrm"];
                        p[0].style.position = "absolute";
                        p[0].style.right = "0";
                        var m = n[v + 1].classes;
                        var g = (0, u.makeSpan)(m, p);
                        if (m.indexOf("mord") !== -1) {
                            g.style.paddingLeft = "0.277771em"
                        }
                        g.style.position = "relative";
                        n.splice(v, 2, g)
                    }
                }
                return n
            };
            var T = function e(t) {
                if (t instanceof d.default.documentFragment) {
                    if (t.children.length) {
                        return e(t.children[t.children.length - 1])
                    }
                } else {
                    if (y.default.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], t.classes[0])) {
                        return t.classes[0]
                    }
                }
                return null
            };
            var N = function e(t, r) {
                if (!t.value.base) {
                    return false
                } else {
                    var a = t.value.base;
                    if (a.type === "op") {
                        return a.value.limits && (r.style.size === o.default.DISPLAY.size || a.value.alwaysHandleSupSub)
                    } else if (a.type === "accent") {
                        return q(a.value.base)
                    } else if (a.type === "horizBrace") {
                        var n = t.value.sub ? false : true;
                        return n === a.value.isOver
                    } else {
                        return null
                    }
                }
            };
            var R = function e(t) {
                if (!t) {
                    return false
                } else if (t.type === "ordgroup") {
                    if (t.value.length === 1) {
                        return e(t.value[0])
                    } else {
                        return t
                    }
                } else if (t.type === "color") {
                    if (t.value.value.length === 1) {
                        return e(t.value.value[0])
                    } else {
                        return t
                    }
                } else if (t.type === "font") {
                    return e(t.value.body)
                } else {
                    return t
                }
            };
            var q = function e(t) {
                var r = R(t);
                return r.type === "mathord" || r.type === "textord" || r.type === "bin" || r.type === "rel" || r.type === "inner" || r.type === "open" || r.type === "close" || r.type === "punct"
            };
            var _ = function e(t, r) {
                var a = ["nulldelimiter"].concat(t.baseSizingClasses());
                return (0, u.makeSpan)(r.concat(a))
            };
            var E = {};
            E.mathord = function (e, t) {
                return c.default.makeOrd(e, t, "mathord")
            };
            E.textord = function (e, t) {
                return c.default.makeOrd(e, t, "textord")
            };
            E.bin = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["mbin"])
            };
            E.rel = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["mrel"])
            };
            E.open = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["mopen"])
            };
            E.close = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["mclose"])
            };
            E.inner = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["minner"])
            };
            E.punct = function (e, t) {
                return c.default.mathsym(e.value, e.mode, t, ["mpunct"])
            };
            E.ordgroup = function (e, t) {
                return (0, u.makeSpan)(["mord"], C(e.value, t, true), t)
            };
            E.text = function (e, t) {
                var r = t.withFont(e.value.style);
                var a = C(e.value.body, r, true);
                for (var n = 0; n < a.length - 1; n++) {
                    if (a[n].tryCombine(a[n + 1])) {
                        a.splice(n + 1, 1);
                        n--
                    }
                }
                return (0, u.makeSpan)(["mord", "text"], a, r)
            };
            E.color = function (e, t) {
                var r = C(e.value.value, t.withColor(e.value.color), false);
                return new c.default.makeFragment(r)
            };
            E.supsub = function (e, t) {
                if (N(e, t)) {
                    return E[e.value.base.type](e, t)
                }
                var r = L(e.value.base, t);
                var a = void 0;
                var n = void 0;
                var i = t.fontMetrics();
                var l = void 0;
                var s = 0;
                var f = 0;
                if (e.value.sup) {
                    l = t.havingStyle(t.style.sup());
                    a = L(e.value.sup, l, t);
                    if (!q(e.value.base)) {
                        s = r.height - l.fontMetrics().supDrop * l.sizeMultiplier / t.sizeMultiplier
                    }
                }
                if (e.value.sub) {
                    l = t.havingStyle(t.style.sub());
                    n = L(e.value.sub, l, t);
                    if (!q(e.value.base)) {
                        f = r.depth + l.fontMetrics().subDrop * l.sizeMultiplier / t.sizeMultiplier
                    }
                }
                var h = void 0;
                if (t.style === o.default.DISPLAY) {
                    h = i.sup1
                } else if (t.style.cramped) {
                    h = i.sup3
                } else {
                    h = i.sup2
                }
                var v = t.sizeMultiplier;
                var p = .5 / i.ptPerEm / v + "em";
                var m = void 0;
                if (!e.value.sup) {
                    f = Math.max(f, i.sub1, n.height - .8 * i.xHeight);
                    var g = [{type: "elem", elem: n, marginRight: p}];
                    if (r instanceof d.default.symbolNode) {
                        g[0].marginLeft = -r.italic + "em"
                    }
                    m = c.default.makeVList(g, "shift", f, t)
                } else if (!e.value.sub) {
                    s = Math.max(s, h, a.depth + .25 * i.xHeight);
                    m = c.default.makeVList([{type: "elem", elem: a, marginRight: p}], "shift", -s, t)
                } else {
                    s = Math.max(s, h, a.depth + .25 * i.xHeight);
                    f = Math.max(f, i.sub2);
                    var y = i.defaultRuleThickness;
                    if (s - a.depth - (n.height - f) < 4 * y) {
                        f = 4 * y - (s - a.depth) + n.height;
                        var x = .8 * i.xHeight - (s - a.depth);
                        if (x > 0) {
                            s += x;
                            f -= x
                        }
                    }
                    var w = [{type: "elem", elem: n, shift: f, marginRight: p}, {
                        type: "elem",
                        elem: a,
                        shift: -s,
                        marginRight: p
                    }];
                    if (r instanceof d.default.symbolNode) {
                        w[0].marginLeft = -r.italic + "em"
                    }
                    m = c.default.makeVList(w, "individualShift", null, t)
                }
                var b = T(r) || "mord";
                return (0, u.makeSpan)([b], [r, (0, u.makeSpan)(["msupsub"], [m])], t)
            };
            E.genfrac = function (e, t) {
                var r = t.style;
                if (e.value.size === "display") {
                    r = o.default.DISPLAY
                } else if (e.value.size === "text") {
                    r = o.default.TEXT
                }
                var a = r.fracNum();
                var n = r.fracDen();
                var i = void 0;
                i = t.havingStyle(a);
                var l = L(e.value.numer, i, t);
                i = t.havingStyle(n);
                var s = L(e.value.denom, i, t);
                var f = void 0;
                var v = void 0;
                var d = void 0;
                if (e.value.hasBarLine) {
                    f = B("frac-line", t);
                    v = f.height;
                    d = f.height
                } else {
                    f = null;
                    v = 0;
                    d = t.fontMetrics().defaultRuleThickness
                }
                var p = void 0;
                var m = void 0;
                var g = void 0;
                if (r.size === o.default.DISPLAY.size) {
                    p = t.fontMetrics().num1;
                    if (v > 0) {
                        m = 3 * d
                    } else {
                        m = 7 * d
                    }
                    g = t.fontMetrics().denom1
                } else {
                    if (v > 0) {
                        p = t.fontMetrics().num2;
                        m = d
                    } else {
                        p = t.fontMetrics().num3;
                        m = 3 * d
                    }
                    g = t.fontMetrics().denom2
                }
                var y = void 0;
                if (v === 0) {
                    var x = p - l.depth - (s.height - g);
                    if (x < m) {
                        p += .5 * (m - x);
                        g += .5 * (m - x)
                    }
                    y = c.default.makeVList([{type: "elem", elem: s, shift: g}, {
                        type: "elem",
                        elem: l,
                        shift: -p
                    }], "individualShift", null, t)
                } else {
                    var w = t.fontMetrics().axisHeight;
                    if (p - l.depth - (w + .5 * v) < m) {
                        p += m - (p - l.depth - (w + .5 * v))
                    }
                    if (w - .5 * v - (s.height - g) < m) {
                        g += m - (w - .5 * v - (s.height - g))
                    }
                    var b = -(w - .5 * v);
                    y = c.default.makeVList([{type: "elem", elem: s, shift: g}, {
                        type: "elem",
                        elem: f,
                        shift: b
                    }, {type: "elem", elem: l, shift: -p}], "individualShift", null, t)
                }
                i = t.havingStyle(r);
                y.height *= i.sizeMultiplier / t.sizeMultiplier;
                y.depth *= i.sizeMultiplier / t.sizeMultiplier;
                var k = void 0;
                if (r.size === o.default.DISPLAY.size) {
                    k = t.fontMetrics().delim1
                } else {
                    k = t.fontMetrics().delim2
                }
                var M = void 0;
                var z = void 0;
                if (e.value.leftDelim == null) {
                    M = _(t, ["mopen"])
                } else {
                    M = h.default.customSizedDelim(e.value.leftDelim, k, true, t.havingStyle(r), e.mode, ["mopen"])
                }
                if (e.value.rightDelim == null) {
                    z = _(t, ["mclose"])
                } else {
                    z = h.default.customSizedDelim(e.value.rightDelim, k, true, t.havingStyle(r), e.mode, ["mclose"])
                }
                return (0, u.makeSpan)(["mord"].concat(i.sizingClasses(t)), [M, (0, u.makeSpan)(["mfrac"], [y]), z], t)
            };
            E.array = function (e, t) {
                var r = void 0;
                var a = void 0;
                var n = e.value.body.length;
                var i = 0;
                var s = new Array(n);
                var o = 1 / t.fontMetrics().ptPerEm;
                var f = 5 * o;
                var h = 12 * o;
                var v = 3 * o;
                var d = y.default.deflt(e.value.arraystretch, 1);
                var p = d * h;
                var g = .7 * p;
                var x = .3 * p;
                var w = 0;
                for (r = 0; r < e.value.body.length; ++r) {
                    var b = e.value.body[r];
                    var k = g;
                    var M = x;
                    if (i < b.length) {
                        i = b.length
                    }
                    var z = new Array(b.length);
                    for (a = 0; a < b.length; ++a) {
                        var S = L(b[a], t);
                        if (M < S.depth) {
                            M = S.depth
                        }
                        if (k < S.height) {
                            k = S.height
                        }
                        z[a] = S
                    }
                    var A = 0;
                    if (e.value.rowGaps[r]) {
                        A = m.default.calculateSize(e.value.rowGaps[r].value, t);
                        if (A > 0) {
                            A += x;
                            if (M < A) {
                                M = A
                            }
                            A = 0
                        }
                    }
                    if (e.value.addJot) {
                        M += v
                    }
                    z.height = k;
                    z.depth = M;
                    w += k;
                    z.pos = w;
                    w += M + A;
                    s[r] = z
                }
                var C = w / 2 + t.fontMetrics().axisHeight;
                var T = e.value.cols || [];
                var N = [];
                var R = void 0;
                var q = void 0;
                for (a = 0, q = 0; a < i || q < T.length; ++a, ++q) {
                    var _ = T[q] || {};
                    var E = true;
                    while (_.type === "separator") {
                        if (!E) {
                            R = (0, u.makeSpan)(["arraycolsep"], []);
                            R.style.width = t.fontMetrics().doubleRuleSep + "em";
                            N.push(R)
                        }
                        if (_.separator === "|") {
                            var B = (0, u.makeSpan)(["vertical-separator"], []);
                            B.style.height = w + "em";
                            B.style.verticalAlign = -(w - C) + "em";
                            N.push(B)
                        } else {
                            throw new l.default("Invalid separator type: " + _.separator)
                        }
                        q++;
                        _ = T[q] || {};
                        E = false
                    }
                    if (a >= i) {
                        continue
                    }
                    var O = void 0;
                    if (a > 0 || e.value.hskipBeforeAndAfter) {
                        O = y.default.deflt(_.pregap, f);
                        if (O !== 0) {
                            R = (0, u.makeSpan)(["arraycolsep"], []);
                            R.style.width = O + "em";
                            N.push(R)
                        }
                    }
                    var P = [];
                    for (r = 0; r < n; ++r) {
                        var F = s[r];
                        var H = F[a];
                        if (!H) {
                            continue
                        }
                        var D = F.pos - C;
                        H.depth = F.depth;
                        H.height = F.height;
                        P.push({type: "elem", elem: H, shift: D})
                    }
                    P = c.default.makeVList(P, "individualShift", null, t);
                    P = (0, u.makeSpan)(["col-align-" + (_.align || "c")], [P]);
                    N.push(P);
                    if (a < i - 1 || e.value.hskipBeforeAndAfter) {
                        O = y.default.deflt(_.postgap, f);
                        if (O !== 0) {
                            R = (0, u.makeSpan)(["arraycolsep"], []);
                            R.style.width = O + "em";
                            N.push(R)
                        }
                    }
                }
                s = (0, u.makeSpan)(["mtable"], N);
                return (0, u.makeSpan)(["mord"], [s], t)
            };
            E.spacing = function (e, t) {
                if (e.value === "\\ " || e.value === "\\space" || e.value === " " || e.value === "~") {
                    if (e.mode === "text") {
                        return c.default.makeOrd(e, t, "textord")
                    } else {
                        return (0, u.makeSpan)(["mspace"], [c.default.mathsym(e.value, e.mode, t)], t)
                    }
                } else {
                    return (0, u.makeSpan)(["mspace", c.default.spacingFunctions[e.value].className], [], t)
                }
            };
            E.llap = function (e, t) {
                var r = (0, u.makeSpan)(["inner"], [L(e.value.body, t)]);
                var a = (0, u.makeSpan)(["fix"], []);
                return (0, u.makeSpan)(["mord", "llap"], [r, a], t)
            };
            E.rlap = function (e, t) {
                var r = (0, u.makeSpan)(["inner"], [L(e.value.body, t)]);
                var a = (0, u.makeSpan)(["fix"], []);
                return (0, u.makeSpan)(["mord", "rlap"], [r, a], t)
            };
            E.op = function (e, t) {
                var r = void 0;
                var a = void 0;
                var n = false;
                if (e.type === "supsub") {
                    r = e.value.sup;
                    a = e.value.sub;
                    e = e.value.base;
                    n = true
                }
                var i = t.style;
                var l = ["\\smallint"];
                var s = false;
                if (i.size === o.default.DISPLAY.size && e.value.symbol && !y.default.contains(l, e.value.body)) {
                    s = true
                }
                var f = void 0;
                if (e.value.symbol) {
                    var h = s ? "Size2-Regular" : "Size1-Regular";
                    f = c.default.makeSymbol(e.value.body, h, "math", t, ["mop", "op-symbol", s ? "large-op" : "small-op"])
                } else if (e.value.value) {
                    var v = C(e.value.value, t, true);
                    if (v.length === 1 && v[0] instanceof d.default.symbolNode) {
                        f = v[0];
                        f.classes[0] = "mop"
                    } else {
                        f = (0, u.makeSpan)(["mop"], v, t)
                    }
                } else {
                    var p = [];
                    for (var m = 1; m < e.value.body.length; m++) {
                        p.push(c.default.mathsym(e.value.body[m], e.mode))
                    }
                    f = (0, u.makeSpan)(["mop"], p, t)
                }
                var g = 0;
                var x = 0;
                if (f instanceof d.default.symbolNode) {
                    g = (f.height - f.depth) / 2 - t.fontMetrics().axisHeight;
                    x = f.italic
                }
                if (n) {
                    f = (0, u.makeSpan)([], [f]);
                    var w = void 0;
                    var b = void 0;
                    var k = void 0;
                    var M = void 0;
                    var z = void 0;
                    if (r) {
                        z = t.havingStyle(i.sup());
                        w = L(r, z, t);
                        b = Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - w.depth)
                    }
                    if (a) {
                        z = t.havingStyle(i.sub());
                        k = L(a, z, t);
                        M = Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - k.height)
                    }
                    var S = void 0;
                    var A = void 0;
                    var T = void 0;
                    if (!r) {
                        A = f.height - g;
                        S = c.default.makeVList([{type: "kern", size: t.fontMetrics().bigOpSpacing5}, {
                            type: "elem",
                            elem: k,
                            marginLeft: -x + "em"
                        }, {type: "kern", size: M}, {type: "elem", elem: f}], "top", A, t)
                    } else if (!a) {
                        T = f.depth + g;
                        S = c.default.makeVList([{type: "elem", elem: f}, {type: "kern", size: b}, {
                            type: "elem",
                            elem: w,
                            marginLeft: x + "em"
                        }, {type: "kern", size: t.fontMetrics().bigOpSpacing5}], "bottom", T, t)
                    } else if (!r && !a) {
                        return f
                    } else {
                        T = t.fontMetrics().bigOpSpacing5 + k.height + k.depth + M + f.depth + g;
                        S = c.default.makeVList([{type: "kern", size: t.fontMetrics().bigOpSpacing5}, {
                            type: "elem",
                            elem: k,
                            marginLeft: -x + "em"
                        }, {type: "kern", size: M}, {type: "elem", elem: f}, {type: "kern", size: b}, {
                            type: "elem",
                            elem: w,
                            marginLeft: x + "em"
                        }, {type: "kern", size: t.fontMetrics().bigOpSpacing5}], "bottom", T, t)
                    }
                    return (0, u.makeSpan)(["mop", "op-limits"], [S], t)
                } else {
                    if (g) {
                        f.style.position = "relative";
                        f.style.top = g + "em"
                    }
                    return f
                }
            };
            E.mod = function (e, t) {
                var r = [];
                if (e.value.modType === "bmod") {
                    if (!t.style.isTight()) {
                        r.push((0, u.makeSpan)(["mspace", "negativemediumspace"], [], t))
                    }
                    r.push((0, u.makeSpan)(["mspace", "thickspace"], [], t))
                } else if (t.style.size === o.default.DISPLAY.size) {
                    r.push((0, u.makeSpan)(["mspace", "quad"], [], t))
                } else if (e.value.modType === "mod") {
                    r.push((0, u.makeSpan)(["mspace", "twelvemuspace"], [], t))
                } else {
                    r.push((0, u.makeSpan)(["mspace", "eightmuspace"], [], t))
                }
                if (e.value.modType === "pod" || e.value.modType === "pmod") {
                    r.push(c.default.mathsym("(", e.mode))
                }
                if (e.value.modType !== "pod") {
                    var a = [c.default.mathsym("m", e.mode), c.default.mathsym("o", e.mode), c.default.mathsym("d", e.mode)];
                    if (e.value.modType === "bmod") {
                        r.push((0, u.makeSpan)(["mbin"], a, t));
                        r.push((0, u.makeSpan)(["mspace", "thickspace"], [], t));
                        if (!t.style.isTight()) {
                            r.push((0, u.makeSpan)(["mspace", "negativemediumspace"], [], t))
                        }
                    } else {
                        Array.prototype.push.apply(r, a);
                        r.push((0, u.makeSpan)(["mspace", "sixmuspace"], [], t))
                    }
                }
                if (e.value.value) {
                    Array.prototype.push.apply(r, C(e.value.value, t, false))
                }
                if (e.value.modType === "pod" || e.value.modType === "pmod") {
                    r.push(c.default.mathsym(")", e.mode))
                }
                return c.default.makeFragment(r)
            };
            E.katex = function (e, t) {
                var r = (0, u.makeSpan)(["k"], [c.default.mathsym("K", e.mode)], t);
                var a = (0, u.makeSpan)(["a"], [c.default.mathsym("A", e.mode)], t);
                a.height = (a.height + .2) * .75;
                a.depth = (a.height - .2) * .75;
                var n = (0, u.makeSpan)(["t"], [c.default.mathsym("T", e.mode)], t);
                var i = (0, u.makeSpan)(["e"], [c.default.mathsym("E", e.mode)], t);
                i.height = i.height - .2155;
                i.depth = i.depth + .2155;
                var l = (0, u.makeSpan)(["x"], [c.default.mathsym("X", e.mode)], t);
                return (0, u.makeSpan)(["mord", "katex-logo"], [r, a, n, i, l], t)
            };
            var B = function e(t, r, a) {
                var n = (0, u.makeSpan)([t], [], r);
                n.height = a || r.fontMetrics().defaultRuleThickness;
                n.style.borderBottomWidth = n.height + "em";
                n.maxFontSize = 1;
                return n
            };
            E.overline = function (e, t) {
                var r = L(e.value.body, t.havingCrampedStyle());
                var a = B("overline-line", t);
                var n = c.default.makeVList([{type: "elem", elem: r}, {type: "kern", size: 3 * a.height}, {
                    type: "elem",
                    elem: a
                }, {type: "kern", size: a.height}], "firstBaseline", null, t);
                return (0, u.makeSpan)(["mord", "overline"], [n], t)
            };
            E.underline = function (e, t) {
                var r = L(e.value.body, t);
                var a = B("underline-line", t);
                var n = c.default.makeVList([{type: "kern", size: a.height}, {type: "elem", elem: a}, {
                    type: "kern",
                    size: 3 * a.height
                }, {type: "elem", elem: r}], "top", r.height, t);
                return (0, u.makeSpan)(["mord", "underline"], [n], t)
            };
            E.sqrt = function (e, t) {
                var r = L(e.value.body, t.havingCrampedStyle());
                if (r instanceof d.default.documentFragment) {
                    r = (0, u.makeSpan)([], [r], t)
                }
                var a = t.fontMetrics();
                var n = a.defaultRuleThickness;
                var i = n;
                if (t.style.id < o.default.TEXT.id) {
                    i = t.fontMetrics().xHeight
                }
                var l = n + i / 4;
                var s = (r.height + r.depth + l + n) * t.sizeMultiplier;
                var f = h.default.customSizedDelim("\\surd", s, false, t, e.mode);
                var v = t.fontMetrics().sqrtRuleThickness * f.sizeMultiplier;
                var p = f.height - v;
                if (p > r.height + r.depth + l) {
                    l = (l + p - r.height - r.depth) / 2
                }
                var m = f.height - r.height - l - v;
                var g = void 0;
                if (r.height === 0 && r.depth === 0) {
                    g = (0, u.makeSpan)()
                } else {
                    r.style.paddingLeft = f.surdWidth + "em";
                    g = c.default.makeVList([{type: "elem", elem: r}, {
                        type: "kern",
                        size: -(r.height + m)
                    }, {type: "elem", elem: f}, {type: "kern", size: v}], "firstBaseline", null, t);
                    g.children[0].children[0].classes.push("svg-align")
                }
                if (!e.value.index) {
                    return (0, u.makeSpan)(["mord", "sqrt"], [g], t)
                } else {
                    var y = t.havingStyle(o.default.SCRIPTSCRIPT);
                    var x = L(e.value.index, y, t);
                    var w = .6 * (g.height - g.depth);
                    var b = c.default.makeVList([{type: "elem", elem: x}], "shift", -w, t);
                    var k = (0, u.makeSpan)(["root"], [b]);
                    return (0, u.makeSpan)(["mord", "sqrt"], [k, g], t)
                }
            };

            function O(e, t, r) {
                var a = C(e, t, false);
                var n = t.sizeMultiplier / r.sizeMultiplier;
                for (var i = 0; i < a.length; i++) {
                    var l = y.default.indexOf(a[i].classes, "sizing");
                    if (l < 0) {
                        Array.prototype.push.apply(a[i].classes, t.sizingClasses(r))
                    } else if (a[i].classes[l + 1] === "reset-size" + t.size) {
                        a[i].classes[l + 1] = "reset-size" + r.size
                    }
                    a[i].height *= n;
                    a[i].depth *= n
                }
                return c.default.makeFragment(a)
            }

            E.sizing = function (e, t) {
                var r = t.havingSize(e.value.size);
                return O(e.value.value, r, t)
            };
            E.styling = function (e, t) {
                var r = {
                    display: o.default.DISPLAY,
                    text: o.default.TEXT,
                    script: o.default.SCRIPT,
                    scriptscript: o.default.SCRIPTSCRIPT
                };
                var a = r[e.value.style];
                var n = t.havingStyle(a);
                return O(e.value.value, n, t)
            };
            E.font = function (e, t) {
                var r = e.value.font;
                return L(e.value.body, t.withFont(r))
            };
            E.delimsizing = function (e, t) {
                var r = e.value.value;
                if (r === ".") {
                    return (0, u.makeSpan)([e.value.mclass])
                }
                return h.default.sizedDelim(r, e.value.size, t, e.mode, [e.value.mclass])
            };
            E.leftright = function (e, t) {
                var r = C(e.value.body, t, true);
                var a = 0;
                var n = 0;
                var i = false;
                for (var l = 0; l < r.length; l++) {
                    if (r[l].isMiddle) {
                        i = true
                    } else {
                        a = Math.max(r[l].height, a);
                        n = Math.max(r[l].depth, n)
                    }
                }
                a *= t.sizeMultiplier;
                n *= t.sizeMultiplier;
                var s = void 0;
                if (e.value.left === ".") {
                    s = _(t, ["mopen"])
                } else {
                    s = h.default.leftRightDelim(e.value.left, a, n, t, e.mode, ["mopen"])
                }
                r.unshift(s);
                if (i) {
                    for (var o = 1; o < r.length; o++) {
                        var f = r[o];
                        if (f.isMiddle) {
                            r[o] = h.default.leftRightDelim(f.isMiddle.value, a, n, f.isMiddle.options, e.mode, []);
                            var v = A(f.children, 0);
                            if (v) {
                                c.default.prependChildren(r[o], v)
                            }
                        }
                    }
                }
                var d = void 0;
                if (e.value.right === ".") {
                    d = _(t, ["mclose"])
                } else {
                    d = h.default.leftRightDelim(e.value.right, a, n, t, e.mode, ["mclose"])
                }
                r.push(d);
                return (0, u.makeSpan)(["minner"], r, t)
            };
            E.middle = function (e, t) {
                var r = void 0;
                if (e.value.value === ".") {
                    r = _(t, [])
                } else {
                    r = h.default.sizedDelim(e.value.value, 1, t, e.mode, []);
                    r.isMiddle = {value: e.value.value, options: t}
                }
                return r
            };
            E.rule = function (e, t) {
                var r = (0, u.makeSpan)(["mord", "rule"], [], t);
                var a = 0;
                if (e.value.shift) {
                    a = m.default.calculateSize(e.value.shift, t)
                }
                var n = m.default.calculateSize(e.value.width, t);
                var i = m.default.calculateSize(e.value.height, t);
                r.style.borderRightWidth = n + "em";
                r.style.borderTopWidth = i + "em";
                r.style.bottom = a + "em";
                r.width = n;
                r.height = i + a;
                r.depth = -a;
                r.maxFontSize = i * 1.125 * t.sizeMultiplier;
                return r
            };
            E.kern = function (e, t) {
                var r = (0, u.makeSpan)(["mord", "rule"], [], t);
                if (e.value.dimension) {
                    var a = m.default.calculateSize(e.value.dimension, t);
                    r.style.marginLeft = a + "em"
                }
                return r
            };
            E.accent = function (e, t) {
                var r = e.value.base;
                var a = void 0;
                if (e.type === "supsub") {
                    var n = e;
                    e = n.value.base;
                    r = e.value.base;
                    n.value.base = r;
                    a = L(n, t)
                }
                var i = L(r, t.havingCrampedStyle());
                var l = e.value.isShifty && q(r);
                var s = 0;
                if (l) {
                    var o = R(r);
                    var f = L(o, t.havingCrampedStyle());
                    s = f.skew
                }
                var h = Math.min(i.height, t.fontMetrics().xHeight);
                var v = void 0;
                if (!e.value.isStretchy) {
                    var d = c.default.makeSymbol(e.value.label, "Main-Regular", e.mode, t);
                    d.italic = 0;
                    var p = null;
                    if (e.value.label === "\\vec") {
                        p = "accent-vec"
                    } else if (e.value.label === "\\H") {
                        p = "accent-hungarian"
                    }
                    v = (0, u.makeSpan)([], [d]);
                    v = (0, u.makeSpan)(["accent-body", p], [v]);
                    v.style.marginLeft = 2 * s + "em";
                    v = c.default.makeVList([{type: "elem", elem: i}, {type: "kern", size: -h}, {
                        type: "elem",
                        elem: v
                    }], "firstBaseline", null, t)
                } else {
                    v = w.default.svgSpan(e, t);
                    v = c.default.makeVList([{type: "elem", elem: i}, {
                        type: "elem",
                        elem: v
                    }], "firstBaseline", null, t);
                    var m = v.children[0].children[0].children[1];
                    m.classes.push("svg-align");
                    if (s > 0) {
                        m.style.width = "calc(100% - " + 2 * s + "em)";
                        m.style.marginLeft = 2 * s + "em"
                    }
                }
                var g = (0, u.makeSpan)(["mord", "accent"], [v], t);
                if (a) {
                    a.children[0] = g;
                    a.height = Math.max(g.height, a.height);
                    a.classes[0] = "mord";
                    return a
                } else {
                    return g
                }
            };
            E.horizBrace = function (e, t) {
                var r = t.style;
                var a = e.type === "supsub";
                var n = void 0;
                var i = void 0;
                if (a) {
                    if (e.value.sup) {
                        i = t.havingStyle(r.sup());
                        n = L(e.value.sup, i, t)
                    } else {
                        i = t.havingStyle(r.sub());
                        n = L(e.value.sub, i, t)
                    }
                    e = e.value.base
                }
                var l = L(e.value.base, t.havingBaseStyle(o.default.DISPLAY));
                var s = w.default.svgSpan(e, t);
                var f = void 0;
                if (e.value.isOver) {
                    f = c.default.makeVList([{type: "elem", elem: l}, {type: "kern", size: .1}, {
                        type: "elem",
                        elem: s
                    }], "firstBaseline", null, t);
                    f.children[0].children[0].children[1].classes.push("svg-align")
                } else {
                    f = c.default.makeVList([{type: "elem", elem: s}, {type: "kern", size: .1}, {
                        type: "elem",
                        elem: l
                    }], "bottom", l.depth + .1 + s.height, t);
                    f.children[0].children[0].children[0].classes.push("svg-align")
                }
                if (a) {
                    var h = (0, u.makeSpan)(["mord", e.value.isOver ? "mover" : "munder"], [f], t);
                    if (e.value.isOver) {
                        f = c.default.makeVList([{type: "elem", elem: h}, {type: "kern", size: .2}, {
                            type: "elem",
                            elem: n
                        }], "firstBaseline", null, t)
                    } else {
                        f = c.default.makeVList([{type: "elem", elem: n}, {type: "kern", size: .2}, {
                            type: "elem",
                            elem: h
                        }], "bottom", h.depth + .2 + n.height, t)
                    }
                }
                return (0, u.makeSpan)(["mord", e.value.isOver ? "mover" : "munder"], [f], t)
            };
            E.accentUnder = function (e, t) {
                var r = L(e.value.body, t);
                var a = w.default.svgSpan(e, t);
                var n = /tilde/.test(e.value.label) ? .12 : 0;
                var i = c.default.makeVList([{type: "elem", elem: a}, {type: "kern", size: n}, {
                    type: "elem",
                    elem: r
                }], "bottom", a.height + n, t);
                i.children[0].children[0].children[0].classes.push("svg-align");
                return (0, u.makeSpan)(["mord", "accentunder"], [i], t)
            };
            E.enclose = function (e, t) {
                var r = L(e.value.body, t);
                var a = e.value.label.substr(1);
                var n = t.sizeMultiplier;
                var i = void 0;
                var l = 0;
                var s = 0;
                if (a === "sout") {
                    i = (0, u.makeSpan)(["stretchy", "sout"]);
                    i.height = t.fontMetrics().defaultRuleThickness / n;
                    s = -.5 * t.fontMetrics().xHeight
                } else {
                    r.classes.push(a === "fbox" ? "boxpad" : "cancel-pad");
                    var o = q(e.value.body);
                    l = a === "fbox" ? .34 : o ? .2 : 0;
                    s = r.depth + l;
                    i = w.default.encloseSpan(r, a, l, t)
                }
                var f = c.default.makeVList([{type: "elem", elem: r, shift: 0}, {
                    type: "elem",
                    elem: i,
                    shift: s
                }], "individualShift", null, t);
                if (a !== "fbox") {
                    f.children[0].children[0].children[1].classes.push("svg-align")
                }
                if (/cancel/.test(a)) {
                    return (0, u.makeSpan)(["mord", "cancel-lap"], [f], t)
                } else {
                    return (0, u.makeSpan)(["mord"], [f], t)
                }
            };
            E.xArrow = function (e, t) {
                var r = t.style;
                var a = t.havingStyle(r.sup());
                var n = L(e.value.body, a, t);
                n.classes.push("x-arrow-pad");
                var i = void 0;
                if (e.value.below) {
                    a = t.havingStyle(r.sub());
                    i = L(e.value.below, a, t);
                    i.classes.push("x-arrow-pad")
                }
                var l = w.default.svgSpan(e, t);
                var s = -t.fontMetrics().axisHeight + l.depth;
                var o = -t.fontMetrics().axisHeight - l.height - .111;
                var f = void 0;
                if (e.value.below) {
                    var h = -t.fontMetrics().axisHeight + i.height + l.height + .111;
                    f = c.default.makeVList([{type: "elem", elem: n, shift: o}, {
                        type: "elem",
                        elem: l,
                        shift: s
                    }, {type: "elem", elem: i, shift: h}], "individualShift", null, t)
                } else {
                    f = c.default.makeVList([{type: "elem", elem: n, shift: o}, {
                        type: "elem",
                        elem: l,
                        shift: s
                    }], "individualShift", null, t)
                }
                f.children[0].children[0].children[1].classes.push("svg-align");
                return (0, u.makeSpan)(["mrel", "x-arrow"], [f], t)
            };
            E.phantom = function (e, t) {
                var r = C(e.value.value, t.withPhantom(), false);
                return new c.default.makeFragment(r)
            };
            E.mclass = function (e, t) {
                var r = C(e.value.value, t, true);
                return (0, u.makeSpan)([e.value.mclass], r, t)
            };
            var L = function e(t, r, a) {
                if (!t) {
                    return (0, u.makeSpan)()
                }
                if (E[t.type]) {
                    var n = E[t.type](t, r);
                    if (a && r.size !== a.size) {
                        n = (0, u.makeSpan)(r.sizingClasses(a), [n], r);
                        var i = r.sizeMultiplier / a.sizeMultiplier;
                        n.height *= i;
                        n.depth *= i
                    }
                    return n
                } else {
                    throw new l.default("Got group of unknown type: '" + t.type + "'")
                }
            };
            var P = function e(t, r) {
                t = JSON.parse((0, n.default)(t));
                var a = C(t, r, true);
                var i = (0, u.makeSpan)(["base"], a, r);
                var l = (0, u.makeSpan)(["strut"]);
                var s = (0, u.makeSpan)(["strut", "bottom"]);
                l.style.height = i.height + "em";
                s.style.height = i.height + i.depth + "em";
                s.style.verticalAlign = -i.depth + "em";
                var o = (0, u.makeSpan)(["katex-html"], [l, s, i]);
                o.setAttribute("aria-hidden", "true");
                return o
            };
            t.exports = P
        }, {
            "./ParseError": 29,
            "./Style": 33,
            "./buildCommon": 34,
            "./delimiter": 38,
            "./domTree": 39,
            "./stretchy": 47,
            "./units": 50,
            "./utils": 51,
            "babel-runtime/core-js/json/stringify": 2
        }],
        36: [function (e, t, r) {
            "use strict";
            var a = e("./buildCommon");
            var n = x(a);
            var i = e("./fontMetrics");
            var l = x(i);
            var s = e("./mathMLTree");
            var o = x(s);
            var u = e("./ParseError");
            var c = x(u);
            var f = e("./Style");
            var h = x(f);
            var v = e("./symbols");
            var d = x(v);
            var p = e("./utils");
            var m = x(p);
            var g = e("./stretchy");
            var y = x(g);

            function x(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var w = function e(t, r) {
                if (d.default[r][t] && d.default[r][t].replace) {
                    t = d.default[r][t].replace
                }
                return new o.default.TextNode(t)
            };
            var b = function e(t, r) {
                var n = r.font;
                if (!n) {
                    return null
                }
                var i = t.mode;
                if (n === "mathit") {
                    return "italic"
                }
                var s = t.value;
                if (m.default.contains(["\\imath", "\\jmath"], s)) {
                    return null
                }
                if (d.default[i][s] && d.default[i][s].replace) {
                    s = d.default[i][s].replace
                }
                var o = a.fontMap[n].fontName;
                if (l.default.getCharacterMetrics(s, o)) {
                    return a.fontMap[r.font].variant
                }
                return null
            };
            var k = {};
            var M = {mi: "italic", mn: "normal", mtext: "normal"};
            k.mathord = function (e, t) {
                var r = new o.default.MathNode("mi", [w(e.value, e.mode)]);
                var a = b(e, t) || "italic";
                if (a !== M[r.type]) {
                    r.setAttribute("mathvariant", a)
                }
                return r
            };
            k.textord = function (e, t) {
                var r = w(e.value, e.mode);
                var a = b(e, t) || "normal";
                var n = void 0;
                if (e.mode === "text") {
                    n = new o.default.MathNode("mtext", [r])
                } else if (/[0-9]/.test(e.value)) {
                    n = new o.default.MathNode("mn", [r])
                } else if (e.value === "\\prime") {
                    n = new o.default.MathNode("mo", [r])
                } else {
                    n = new o.default.MathNode("mi", [r])
                }
                if (a !== M[n.type]) {
                    n.setAttribute("mathvariant", a)
                }
                return n
            };
            k.bin = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                return t
            };
            k.rel = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                return t
            };
            k.open = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                return t
            };
            k.close = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                return t
            };
            k.inner = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                return t
            };
            k.punct = function (e) {
                var t = new o.default.MathNode("mo", [w(e.value, e.mode)]);
                t.setAttribute("separator", "true");
                return t
            };
            k.ordgroup = function (e, t) {
                var r = z(e.value, t);
                var a = new o.default.MathNode("mrow", r);
                return a
            };
            k.text = function (e, t) {
                var r = e.value.body;
                var a = [];
                var n = null;
                for (var i = 0; i < r.length; i++) {
                    var l = S(r[i], t);
                    if (l.type === "mtext" && n != null) {
                        Array.prototype.push.apply(n.children, l.children)
                    } else {
                        a.push(l);
                        if (l.type === "mtext") {
                            n = l
                        }
                    }
                }
                if (a.length === 1) {
                    return a[0]
                } else {
                    return new o.default.MathNode("mrow", a)
                }
            };
            k.color = function (e, t) {
                var r = z(e.value.value, t);
                var a = new o.default.MathNode("mstyle", r);
                a.setAttribute("mathcolor", e.value.color);
                return a
            };
            k.supsub = function (e, t) {
                var r = false;
                var a = void 0;
                var n = void 0;
                if (e.value.base) {
                    if (e.value.base.value.type === "horizBrace") {
                        n = e.value.sup ? true : false;
                        if (n === e.value.base.value.isOver) {
                            r = true;
                            a = e.value.base.value.isOver
                        }
                    }
                }
                var i = true;
                var l = [S(e.value.base, t, i)];
                if (e.value.sub) {
                    l.push(S(e.value.sub, t, i))
                }
                if (e.value.sup) {
                    l.push(S(e.value.sup, t, i))
                }
                var s = void 0;
                if (r) {
                    s = a ? "mover" : "munder"
                } else if (!e.value.sub) {
                    s = "msup"
                } else if (!e.value.sup) {
                    s = "msub"
                } else {
                    var u = e.value.base;
                    if (u && u.value.limits && t.style === h.default.DISPLAY) {
                        s = "munderover"
                    } else {
                        s = "msubsup"
                    }
                }
                var c = new o.default.MathNode(s, l);
                return c
            };
            k.genfrac = function (e, t) {
                var r = new o.default.MathNode("mfrac", [S(e.value.numer, t), S(e.value.denom, t)]);
                if (!e.value.hasBarLine) {
                    r.setAttribute("linethickness", "0px")
                }
                if (e.value.leftDelim != null || e.value.rightDelim != null) {
                    var a = [];
                    if (e.value.leftDelim != null) {
                        var n = new o.default.MathNode("mo", [new o.default.TextNode(e.value.leftDelim)]);
                        n.setAttribute("fence", "true");
                        a.push(n)
                    }
                    a.push(r);
                    if (e.value.rightDelim != null) {
                        var i = new o.default.MathNode("mo", [new o.default.TextNode(e.value.rightDelim)]);
                        i.setAttribute("fence", "true");
                        a.push(i)
                    }
                    var l = new o.default.MathNode("mrow", a);
                    return l
                }
                return r
            };
            k.array = function (e, t) {
                return new o.default.MathNode("mtable", e.value.body.map(function (e) {
                    return new o.default.MathNode("mtr", e.map(function (e) {
                        return new o.default.MathNode("mtd", [S(e, t)])
                    }))
                }))
            };
            k.sqrt = function (e, t) {
                var r = void 0;
                if (e.value.index) {
                    r = new o.default.MathNode("mroot", [S(e.value.body, t), S(e.value.index, t)])
                } else {
                    r = new o.default.MathNode("msqrt", [S(e.value.body, t)])
                }
                return r
            };
            k.leftright = function (e, t) {
                var r = z(e.value.body, t);
                if (e.value.left !== ".") {
                    var a = new o.default.MathNode("mo", [w(e.value.left, e.mode)]);
                    a.setAttribute("fence", "true");
                    r.unshift(a)
                }
                if (e.value.right !== ".") {
                    var n = new o.default.MathNode("mo", [w(e.value.right, e.mode)]);
                    n.setAttribute("fence", "true");
                    r.push(n)
                }
                var i = new o.default.MathNode("mrow", r);
                return i
            };
            k.middle = function (e, t) {
                var r = new o.default.MathNode("mo", [w(e.value.middle, e.mode)]);
                r.setAttribute("fence", "true");
                return r
            };
            k.accent = function (e, t) {
                var r = void 0;
                if (e.value.isStretchy) {
                    r = y.default.mathMLnode(e.value.label)
                } else {
                    r = new o.default.MathNode("mo", [w(e.value.label, e.mode)])
                }
                var a = new o.default.MathNode("mover", [S(e.value.base, t), r]);
                a.setAttribute("accent", "true");
                return a
            };
            k.spacing = function (e) {
                var t = void 0;
                if (e.value === "\\ " || e.value === "\\space" || e.value === " " || e.value === "~") {
                    t = new o.default.MathNode("mtext", [new o.default.TextNode("\xa0")])
                } else {
                    t = new o.default.MathNode("mspace");
                    t.setAttribute("width", n.default.spacingFunctions[e.value].size)
                }
                return t
            };
            k.op = function (e, t) {
                var r = void 0;
                if (e.value.symbol) {
                    r = new o.default.MathNode("mo", [w(e.value.body, e.mode)])
                } else if (e.value.value) {
                    r = new o.default.MathNode("mo", z(e.value.value, t))
                } else {
                    r = new o.default.MathNode("mi", [new o.default.TextNode(e.value.body.slice(1))])
                }
                return r
            };
            k.mod = function (e, t) {
                var r = [];
                if (e.value.modType === "pod" || e.value.modType === "pmod") {
                    r.push(new o.default.MathNode("mo", [w("(", e.mode)]))
                }
                if (e.value.modType !== "pod") {
                    r.push(new o.default.MathNode("mo", [w("mod", e.mode)]))
                }
                if (e.value.value) {
                    var a = new o.default.MathNode("mspace");
                    a.setAttribute("width", "0.333333em");
                    r.push(a);
                    r = r.concat(z(e.value.value, t))
                }
                if (e.value.modType === "pod" || e.value.modType === "pmod") {
                    r.push(new o.default.MathNode("mo", [w(")", e.mode)]));
                }
                return new o.default.MathNode("mo", r)
            };
            k.katex = function (e) {
                var t = new o.default.MathNode("mtext", [new o.default.TextNode("KaTeX")]);
                return t
            };
            k.font = function (e, t) {
                var r = e.value.font;
                return S(e.value.body, t.withFont(r))
            };
            k.delimsizing = function (e) {
                var t = [];
                if (e.value.value !== ".") {
                    t.push(w(e.value.value, e.mode))
                }
                var r = new o.default.MathNode("mo", t);
                if (e.value.mclass === "mopen" || e.value.mclass === "mclose") {
                    r.setAttribute("fence", "true")
                } else {
                    r.setAttribute("fence", "false")
                }
                return r
            };
            k.styling = function (e, t) {
                var r = {
                    display: h.default.DISPLAY,
                    text: h.default.TEXT,
                    script: h.default.SCRIPT,
                    scriptscript: h.default.SCRIPTSCRIPT
                };
                var a = r[e.value.style];
                var n = t.havingStyle(a);
                var i = z(e.value.value, n);
                var l = new o.default.MathNode("mstyle", i);
                var s = {
                    display: ["0", "true"],
                    text: ["0", "false"],
                    script: ["1", "false"],
                    scriptscript: ["2", "false"]
                };
                var u = s[e.value.style];
                l.setAttribute("scriptlevel", u[0]);
                l.setAttribute("displaystyle", u[1]);
                return l
            };
            k.sizing = function (e, t) {
                var r = t.havingSize(e.value.size);
                var a = z(e.value.value, r);
                var n = new o.default.MathNode("mstyle", a);
                n.setAttribute("mathsize", r.sizeMultiplier + "em");
                return n
            };
            k.overline = function (e, t) {
                var r = new o.default.MathNode("mo", [new o.default.TextNode("\u203e")]);
                r.setAttribute("stretchy", "true");
                var a = new o.default.MathNode("mover", [S(e.value.body, t), r]);
                a.setAttribute("accent", "true");
                return a
            };
            k.underline = function (e, t) {
                var r = new o.default.MathNode("mo", [new o.default.TextNode("\u203e")]);
                r.setAttribute("stretchy", "true");
                var a = new o.default.MathNode("munder", [S(e.value.body, t), r]);
                a.setAttribute("accentunder", "true");
                return a
            };
            k.accentUnder = function (e, t) {
                var r = y.default.mathMLnode(e.value.label);
                var a = new o.default.MathNode("munder", [S(e.value.body, t), r]);
                a.setAttribute("accentunder", "true");
                return a
            };
            k.enclose = function (e, t) {
                var r = new o.default.MathNode("menclose", [S(e.value.body, t)]);
                var a = "";
                switch (e.value.label) {
                    case"\\bcancel":
                        a = "downdiagonalstrike";
                        break;
                    case"\\sout":
                        a = "horizontalstrike";
                        break;
                    case"\\fbox":
                        a = "box";
                        break;
                    default:
                        a = "updiagonalstrike"
                }
                r.setAttribute("notation", a);
                return r
            };
            k.horizBrace = function (e, t) {
                var r = y.default.mathMLnode(e.value.label);
                return new o.default.MathNode(e.value.isOver ? "mover" : "munder", [S(e.value.base, t), r])
            };
            k.xArrow = function (e, t) {
                var r = y.default.mathMLnode(e.value.label);
                var a = void 0;
                var n = void 0;
                if (e.value.body) {
                    var i = S(e.value.body, t);
                    if (e.value.below) {
                        n = S(e.value.below, t);
                        a = new o.default.MathNode("munderover", [r, n, i])
                    } else {
                        a = new o.default.MathNode("mover", [r, i])
                    }
                } else if (e.value.below) {
                    n = S(e.value.below, t);
                    a = new o.default.MathNode("munder", [r, n])
                } else {
                    a = new o.default.MathNode("mover", [r])
                }
                return a
            };
            k.rule = function (e) {
                var t = new o.default.MathNode("mrow");
                return t
            };
            k.kern = function (e) {
                var t = new o.default.MathNode("mrow");
                return t
            };
            k.llap = function (e, t) {
                var r = new o.default.MathNode("mpadded", [S(e.value.body, t)]);
                r.setAttribute("lspace", "-1width");
                r.setAttribute("width", "0px");
                return r
            };
            k.rlap = function (e, t) {
                var r = new o.default.MathNode("mpadded", [S(e.value.body, t)]);
                r.setAttribute("width", "0px");
                return r
            };
            k.phantom = function (e, t) {
                var r = z(e.value.value, t);
                return new o.default.MathNode("mphantom", r)
            };
            k.mclass = function (e, t) {
                var r = z(e.value.value, t);
                return new o.default.MathNode("mstyle", r)
            };
            var z = function e(t, r) {
                var a = [];
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    a.push(S(i, r))
                }
                return a
            };
            var S = function e(t, r) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (!t) {
                    return new o.default.MathNode("mrow")
                }
                if (k[t.type]) {
                    var n = k[t.type](t, r);
                    if (a) {
                        if (n.type === "mrow" && n.children.length === 1) {
                            return n.children[0]
                        }
                    }
                    return n
                } else {
                    throw new c.default("Got group of unknown type: '" + t.type + "'")
                }
            };
            var A = function e(t, r, n) {
                var i = z(t, n);
                var l = new o.default.MathNode("mrow", i);
                var s = new o.default.MathNode("annotation", [new o.default.TextNode(r)]);
                s.setAttribute("encoding", "application/x-tex");
                var u = new o.default.MathNode("semantics", [l, s]);
                var c = new o.default.MathNode("math", [u]);
                return (0, a.makeSpan)(["katex-mathml"], [c])
            };
            t.exports = A
        }, {
            "./ParseError": 29,
            "./Style": 33,
            "./buildCommon": 34,
            "./fontMetrics": 41,
            "./mathMLTree": 45,
            "./stretchy": 47,
            "./symbols": 48,
            "./utils": 51
        }],
        37: [function (e, t, r) {
            "use strict";
            var a = e("./buildHTML");
            var n = d(a);
            var i = e("./buildMathML");
            var l = d(i);
            var s = e("./buildCommon");
            var o = e("./Options");
            var u = d(o);
            var c = e("./Settings");
            var f = d(c);
            var h = e("./Style");
            var v = d(h);

            function d(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var p = function e(t, r, a) {
                a = a || new f.default({});
                var i = v.default.TEXT;
                if (a.displayMode) {
                    i = v.default.DISPLAY
                }
                var o = new u.default({style: i});
                var c = (0, l.default)(t, r, o);
                var h = (0, n.default)(t, o);
                var d = (0, s.makeSpan)(["katex"], [c, h]);
                if (a.displayMode) {
                    return (0, s.makeSpan)(["katex-display"], [d])
                } else {
                    return d
                }
            };
            t.exports = p
        }, {
            "./Options": 28,
            "./Settings": 32,
            "./Style": 33,
            "./buildCommon": 34,
            "./buildHTML": 35,
            "./buildMathML": 36
        }],
        38: [function (e, t, r) {
            "use strict";
            var a = e("./ParseError");
            var n = p(a);
            var i = e("./Style");
            var l = p(i);
            var s = e("./buildCommon");
            var o = p(s);
            var u = e("./fontMetrics");
            var c = p(u);
            var f = e("./symbols");
            var h = p(f);
            var v = e("./utils");
            var d = p(v);

            function p(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var m = function e(t, r) {
                if (h.default.math[t] && h.default.math[t].replace) {
                    return c.default.getCharacterMetrics(h.default.math[t].replace, r)
                } else {
                    return c.default.getCharacterMetrics(t, r)
                }
            };
            var g = function e(t, r, a, n) {
                var i = a.havingBaseStyle(r);
                var l = (0, s.makeSpan)((n || []).concat(i.sizingClasses(a)), [t], a);
                l.delimSizeMultiplier = i.sizeMultiplier / a.sizeMultiplier;
                l.height *= l.delimSizeMultiplier;
                l.depth *= l.delimSizeMultiplier;
                l.maxFontSize = i.sizeMultiplier;
                return l
            };
            var y = function e(t, r, a) {
                var n = r.havingBaseStyle(a);
                var i = (1 - r.sizeMultiplier / n.sizeMultiplier) * r.fontMetrics().axisHeight;
                t.classes.push("delimcenter");
                t.style.top = i + "em";
                t.height -= i;
                t.depth += i
            };
            var x = function e(t, r, a, n, i, l) {
                var s = o.default.makeSymbol(t, "Main-Regular", i, n);
                var u = g(s, r, n, l);
                if (a) {
                    y(u, n, r)
                }
                return u
            };
            var w = function e(t, r, a, n) {
                return o.default.makeSymbol(t, "Size" + r + "-Regular", a, n)
            };
            var b = function e(t, r, a, n, i, o) {
                var u = w(t, r, i, n);
                var c = g((0, s.makeSpan)(["delimsizing", "size" + r], [u], n), l.default.TEXT, n, o);
                if (a) {
                    y(c, n, l.default.TEXT)
                }
                return c
            };
            var k = function e(t, r, a) {
                var n = void 0;
                if (r === "Size1-Regular") {
                    n = "delim-size1"
                } else if (r === "Size4-Regular") {
                    n = "delim-size4"
                }
                var i = (0, s.makeSpan)(["delimsizinginner", n], [(0, s.makeSpan)([], [o.default.makeSymbol(t, r, a)])]);
                return {type: "elem", elem: i}
            };
            var M = function e(t, r, a, n, i, u) {
                var c = void 0;
                var f = void 0;
                var h = void 0;
                var v = void 0;
                c = h = v = t;
                f = null;
                var d = "Size1-Regular";
                if (t === "\\uparrow") {
                    h = v = "\u23d0"
                } else if (t === "\\Uparrow") {
                    h = v = "\u2016"
                } else if (t === "\\downarrow") {
                    c = h = "\u23d0"
                } else if (t === "\\Downarrow") {
                    c = h = "\u2016"
                } else if (t === "\\updownarrow") {
                    c = "\\uparrow";
                    h = "\u23d0";
                    v = "\\downarrow"
                } else if (t === "\\Updownarrow") {
                    c = "\\Uparrow";
                    h = "\u2016";
                    v = "\\Downarrow"
                } else if (t === "[" || t === "\\lbrack") {
                    c = "\u23a1";
                    h = "\u23a2";
                    v = "\u23a3";
                    d = "Size4-Regular"
                } else if (t === "]" || t === "\\rbrack") {
                    c = "\u23a4";
                    h = "\u23a5";
                    v = "\u23a6";
                    d = "Size4-Regular"
                } else if (t === "\\lfloor") {
                    h = c = "\u23a2";
                    v = "\u23a3";
                    d = "Size4-Regular"
                } else if (t === "\\lceil") {
                    c = "\u23a1";
                    h = v = "\u23a2";
                    d = "Size4-Regular"
                } else if (t === "\\rfloor") {
                    h = c = "\u23a5";
                    v = "\u23a6";
                    d = "Size4-Regular"
                } else if (t === "\\rceil") {
                    c = "\u23a4";
                    h = v = "\u23a5";
                    d = "Size4-Regular"
                } else if (t === "(") {
                    c = "\u239b";
                    h = "\u239c";
                    v = "\u239d";
                    d = "Size4-Regular"
                } else if (t === ")") {
                    c = "\u239e";
                    h = "\u239f";
                    v = "\u23a0";
                    d = "Size4-Regular"
                } else if (t === "\\{" || t === "\\lbrace") {
                    c = "\u23a7";
                    f = "\u23a8";
                    v = "\u23a9";
                    h = "\u23aa";
                    d = "Size4-Regular"
                } else if (t === "\\}" || t === "\\rbrace") {
                    c = "\u23ab";
                    f = "\u23ac";
                    v = "\u23ad";
                    h = "\u23aa";
                    d = "Size4-Regular"
                } else if (t === "\\lgroup") {
                    c = "\u23a7";
                    v = "\u23a9";
                    h = "\u23aa";
                    d = "Size4-Regular"
                } else if (t === "\\rgroup") {
                    c = "\u23ab";
                    v = "\u23ad";
                    h = "\u23aa";
                    d = "Size4-Regular"
                } else if (t === "\\lmoustache") {
                    c = "\u23a7";
                    v = "\u23ad";
                    h = "\u23aa";
                    d = "Size4-Regular"
                } else if (t === "\\rmoustache") {
                    c = "\u23ab";
                    v = "\u23a9";
                    h = "\u23aa";
                    d = "Size4-Regular"
                }
                var p = m(c, d);
                var y = p.height + p.depth;
                var x = m(h, d);
                var w = x.height + x.depth;
                var b = m(v, d);
                var M = b.height + b.depth;
                var z = 0;
                var S = 1;
                if (f !== null) {
                    var A = m(f, d);
                    z = A.height + A.depth;
                    S = 2
                }
                var C = y + M + z;
                var T = Math.ceil((r - C) / (S * w));
                var N = C + T * S * w;
                var R = n.fontMetrics().axisHeight;
                if (a) {
                    R *= n.sizeMultiplier
                }
                var q = N / 2 - R;
                var _ = [];
                _.push(k(v, d, i));
                if (f === null) {
                    for (var E = 0; E < T; E++) {
                        _.push(k(h, d, i))
                    }
                } else {
                    for (var B = 0; B < T; B++) {
                        _.push(k(h, d, i))
                    }
                    _.push(k(f, d, i));
                    for (var O = 0; O < T; O++) {
                        _.push(k(h, d, i))
                    }
                }
                _.push(k(c, d, i));
                var L = n.havingBaseStyle(l.default.TEXT);
                var P = o.default.makeVList(_, "bottom", q, L);
                return g((0, s.makeSpan)(["delimsizing", "mult"], [P], L), l.default.TEXT, n, u)
            };
            var z = {
                main: "<svg viewBox='0 0 400000 1000' preserveAspectRatio='xMinYMin\nslice'><path d='M95 622c-2.667 0-7.167-2.667-13.5\n-8S72 604 72 600c0-2 .333-3.333 1-4 1.333-2.667 23.833-20.667 67.5-54s\n65.833-50.333 66.5-51c1.333-1.333 3-2 5-2 4.667 0 8.667 3.333 12 10l173\n378c.667 0 35.333-71 104-213s137.5-285 206.5-429S812 17.333 812 14c5.333\n-9.333 12-14 20-14h399166v40H845.272L620 507 385 993c-2.667 4.667-9 7-19\n7-6 0-10-1-12-3L160 575l-65 47zM834 0h399166v40H845z'/></svg>",
                1: "<svg viewBox='0 0 400000 1200' preserveAspectRatio='xMinYMin\nslice'><path d='M263 601c.667 0 18 39.667 52 119s68.167\n 158.667 102.5 238 51.833 119.333 52.5 120C810 373.333 980.667 17.667 982 11\nc4.667-7.333 11-11 19-11h398999v40H1012.333L741 607c-38.667 80.667-84 175-136\n 283s-89.167 185.333-111.5 232-33.833 70.333-34.5 71c-4.667 4.667-12.333 7-23\n 7l-12-1-109-253c-72.667-168-109.333-252-110-252-10.667 8-22 16.667-34 26-22\n 17.333-33.333 26-34 26l-26-26 76-59 76-60zM1001 0h398999v40H1012z'/></svg>",
                2: "<svg viewBox='0 0 400000 1800' preserveAspectRatio='xMinYMin\nslice'><path d='M1001 0h398999v40H1013.084S929.667 308 749\n 880s-277 876.333-289 913c-4.667 4.667-12.667 7-24 7h-12c-1.333-3.333-3.667\n-11.667-7-25-35.333-125.333-106.667-373.333-214-744-10 12-21 25-33 39l-32 39\nc-6-5.333-15-14-27-26l25-30c26.667-32.667 52-63 76-91l52-60 208 722c56-175.333\n 126.333-397.333 211-666s153.833-488.167 207.5-658.5C944.167 129.167 975 32.667\n 983 10c4-6.667 10-10 18-10zm0 0h398999v40H1013z'/></svg>",
                3: "<svg viewBox='0 0 400000 2400' preserveAspectRatio='xMinYMin\nslice'><path d='M424 2398c-1.333-.667-38.5-172-111.5-514\nS202.667 1370.667 202 1370c0-2-10.667 14.333-32 49-4.667 7.333-9.833 15.667\n-15.5 25s-9.833 16-12.5 20l-5 7c-4-3.333-8.333-7.667-13-13l-13-13 76-122 77-121\n 209 968c0-2 84.667-361.667 254-1079C896.333 373.667 981.667 13.333 983 10\nc4-6.667 10-10 18-10h398999v40H1014.622S927.332 418.667 742 1206c-185.333\n 787.333-279.333 1182.333-282 1185-2 6-10 9-24 9-8 0-12-.667-12-2z\nM1001 0h398999v40H1014z'/></svg>",
                4: "<svg viewBox='0 0 400000 3000' preserveAspectRatio='xMinYMin\nslice'><path d='M473 2713C812.333 913.667 982.333 13 983 11\nc3.333-7.333 9.333-11 18-11h399110v40H1017.698S927.168 518 741.5 1506C555.833\n 2494 462 2989 460 2991c-2 6-10 9-24 9-8 0-12-.667-12-2s-5.333-32-16-92c-50.667\n-293.333-119.667-693.333-207-1200 0-1.333-5.333 8.667-16 30l-32 64-16 33-26-26\n 76-153 77-151c.667.667 35.667 202 105 604 67.333 400.667 102 602.667 104 606z\nM1001 0h398999v40H1017z'/></svg>",
                tall: "l-4 4-4 4c-.667.667-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h\n-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170c-4-3.333-8.333\n-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667 219 661 l218 661z\nM702 0H400000v40H742z'/></svg>"
            };
            var S = function e(t, r, a) {
                var n = o.default.makeSpan([], [], a);
                var i = a.sizeMultiplier;
                if (r.type === "small") {
                    var l = a.havingBaseStyle(r.style);
                    i = l.sizeMultiplier / a.sizeMultiplier;
                    n.height = 1 * i;
                    n.style.height = n.height + "em";
                    n.surdWidth = .833 * i;
                    n.innerHTML = "<svg width='100%' height='" + n.height + "em'>\n            " + z["main"] + "</svg>"
                } else if (r.type === "large") {
                    n.height = N[r.size] / i;
                    n.style.height = n.height + "em";
                    n.surdWidth = 1 / i;
                    n.innerHTML = '<svg width="100%" height="' + n.height + 'em">\n            ' + z[r.size] + "</svg>"
                } else {
                    n.height = t / i;
                    n.style.height = n.height + "em";
                    n.surdWidth = 1.056 / i;
                    var s = Math.floor(n.height * 1e3);
                    var u = s - 54;
                    n.innerHTML = "<svg width='100%' height='" + n.height + "em'>\n            <svg viewBox='0 0 400000 " + s + "'\n            preserveAspectRatio='xMinYMax slice'>\n            <path d='M702 0H400000v40H742v" + u + "\n            " + z["tall"] + "</svg>"
                }
                n.sizeMultiplier = i;
                return n
            };
            var A = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"];
            var C = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"];
            var T = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
            var N = [0, 1.2, 1.8, 2.4, 3];
            var R = function e(t, r, a, i, l) {
                if (t === "<" || t === "\\lt") {
                    t = "\\langle"
                } else if (t === ">" || t === "\\gt") {
                    t = "\\rangle"
                }
                if (d.default.contains(A, t) || d.default.contains(T, t)) {
                    return b(t, r, false, a, i, l)
                } else if (d.default.contains(C, t)) {
                    return M(t, N[r], false, a, i, l)
                } else {
                    throw new n.default("Illegal delimiter: '" + t + "'")
                }
            };
            var q = [{type: "small", style: l.default.SCRIPTSCRIPT}, {
                type: "small",
                style: l.default.SCRIPT
            }, {type: "small", style: l.default.TEXT}, {type: "large", size: 1}, {
                type: "large",
                size: 2
            }, {type: "large", size: 3}, {type: "large", size: 4}];
            var _ = [{type: "small", style: l.default.SCRIPTSCRIPT}, {
                type: "small",
                style: l.default.SCRIPT
            }, {type: "small", style: l.default.TEXT}, {type: "stack"}];
            var E = [{type: "small", style: l.default.SCRIPTSCRIPT}, {
                type: "small",
                style: l.default.SCRIPT
            }, {type: "small", style: l.default.TEXT}, {type: "large", size: 1}, {
                type: "large",
                size: 2
            }, {type: "large", size: 3}, {type: "large", size: 4}, {type: "stack"}];
            var B = function e(t) {
                if (t.type === "small") {
                    return "Main-Regular"
                } else if (t.type === "large") {
                    return "Size" + t.size + "-Regular"
                } else if (t.type === "stack") {
                    return "Size4-Regular"
                }
            };
            var O = function e(t, r, a, n) {
                var i = Math.min(2, 3 - n.style.size);
                for (var l = i; l < a.length; l++) {
                    if (a[l].type === "stack") {
                        break
                    }
                    var s = m(t, B(a[l]));
                    var o = s.height + s.depth;
                    if (a[l].type === "small") {
                        var u = n.havingBaseStyle(a[l].style);
                        o *= u.sizeMultiplier
                    }
                    if (o > r) {
                        return a[l]
                    }
                }
                return a[a.length - 1]
            };
            var L = function e(t, r, a, n, i, l) {
                if (t === "<" || t === "\\lt") {
                    t = "\\langle"
                } else if (t === ">" || t === "\\gt") {
                    t = "\\rangle"
                }
                var s = void 0;
                if (d.default.contains(T, t)) {
                    s = q
                } else if (d.default.contains(A, t)) {
                    s = E
                } else {
                    s = _
                }
                var o = O(t, r, s, n);
                if (t === "\\surd") {
                    return S(r, o, n)
                } else {
                    if (o.type === "small") {
                        return x(t, o.style, a, n, i, l)
                    } else if (o.type === "large") {
                        return b(t, o.size, a, n, i, l)
                    } else if (o.type === "stack") {
                        return M(t, r, a, n, i, l)
                    }
                }
            };
            var P = function e(t, r, a, n, i, l) {
                var s = n.fontMetrics().axisHeight * n.sizeMultiplier;
                var o = 901;
                var u = 5 / n.fontMetrics().ptPerEm;
                var c = Math.max(r - s, a + s);
                var f = Math.max(c / 500 * o, 2 * c - u);
                return L(t, f, true, n, i, l)
            };
            t.exports = {sizedDelim: R, customSizedDelim: L, leftRightDelim: P}
        }, {
            "./ParseError": 29,
            "./Style": 33,
            "./buildCommon": 34,
            "./fontMetrics": 41,
            "./symbols": 48,
            "./utils": 51
        }],
        39: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = f(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = f(i);
            var s = e("./unicodeRegexes");
            var o = f(s);
            var u = e("./utils");
            var c = f(u);

            function f(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var h = function e(t) {
                t = t.slice();
                for (var r = t.length - 1; r >= 0; r--) {
                    if (!t[r]) {
                        t.splice(r, 1)
                    }
                }
                return t.join(" ")
            };
            var v = function () {
                function e(t, r, a) {
                    (0, n.default)(this, e);
                    this.classes = t || [];
                    this.children = r || [];
                    this.height = 0;
                    this.depth = 0;
                    this.maxFontSize = 0;
                    this.style = {};
                    this.attributes = {};
                    this.innerHTML;
                    if (a) {
                        if (a.style.isTight()) {
                            this.classes.push("mtight")
                        }
                        if (a.getColor()) {
                            this.style.color = a.getColor()
                        }
                    }
                }

                (0, l.default)(e, [{
                    key: "setAttribute", value: function e(t, r) {
                        this.attributes[t] = r
                    }
                }, {
                    key: "tryCombine", value: function e(t) {
                        return false
                    }
                }, {
                    key: "toNode", value: function e() {
                        var t = document.createElement("span");
                        t.className = h(this.classes);
                        for (var r in this.style) {
                            if (Object.prototype.hasOwnProperty.call(this.style, r)) {
                                t.style[r] = this.style[r]
                            }
                        }
                        for (var a in this.attributes) {
                            if (Object.prototype.hasOwnProperty.call(this.attributes, a)) {
                                t.setAttribute(a, this.attributes[a])
                            }
                        }
                        if (this.innerHTML) {
                            t.innerHTML = this.innerHTML
                        }
                        for (var n = 0; n < this.children.length; n++) {
                            t.appendChild(this.children[n].toNode())
                        }
                        return t
                    }
                }, {
                    key: "toMarkup", value: function e() {
                        var t = "<span";
                        if (this.classes.length) {
                            t += ' class="';
                            t += c.default.escape(h(this.classes));
                            t += '"'
                        }
                        var r = "";
                        for (var a in this.style) {
                            if (this.style.hasOwnProperty(a)) {
                                r += c.default.hyphenate(a) + ":" + this.style[a] + ";"
                            }
                        }
                        if (r) {
                            t += ' style="' + c.default.escape(r) + '"'
                        }
                        for (var n in this.attributes) {
                            if (Object.prototype.hasOwnProperty.call(this.attributes, n)) {
                                t += " " + n + '="';
                                t += c.default.escape(this.attributes[n]);
                                t += '"'
                            }
                        }
                        t += ">";
                        if (this.innerHTML) {
                            t += this.innerHTML
                        }
                        for (var i = 0; i < this.children.length; i++) {
                            t += this.children[i].toMarkup()
                        }
                        t += "</span>";
                        return t
                    }
                }]);
                return e
            }();
            var d = function () {
                function e(t) {
                    (0, n.default)(this, e);
                    this.children = t || [];
                    this.height = 0;
                    this.depth = 0;
                    this.maxFontSize = 0
                }

                (0, l.default)(e, [{
                    key: "toNode", value: function e() {
                        var t = document.createDocumentFragment();
                        for (var r = 0; r < this.children.length; r++) {
                            t.appendChild(this.children[r].toNode())
                        }
                        return t
                    }
                }, {
                    key: "toMarkup", value: function e() {
                        var t = "";
                        for (var r = 0; r < this.children.length; r++) {
                            t += this.children[r].toMarkup()
                        }
                        return t
                    }
                }]);
                return e
            }();
            var p = {"\xee": "\u0131\u0302", "\xef": "\u0131\u0308", "\xed": "\u0131\u0301", "\xec": "\u0131\u0300"};
            var m = function () {
                function e(t, r, a, i, l, s, u) {
                    (0, n.default)(this, e);
                    this.value = t || "";
                    this.height = r || 0;
                    this.depth = a || 0;
                    this.italic = i || 0;
                    this.skew = l || 0;
                    this.classes = s || [];
                    this.style = u || {};
                    this.maxFontSize = 0;
                    if (o.default.cjkRegex.test(t)) {
                        if (o.default.hangulRegex.test(t)) {
                            this.classes.push("hangul_fallback")
                        } else {
                            this.classes.push("cjk_fallback")
                        }
                    }
                    if (/[\xee\xef\xed\xec]/.test(this.value)) {
                        this.value = p[this.value]
                    }
                }

                (0, l.default)(e, [{
                    key: "tryCombine", value: function t(r) {
                        if (!r || !(r instanceof e) || this.italic > 0 || h(this.classes) !== h(r.classes) || this.skew !== r.skew || this.maxFontSize !== r.maxFontSize) {
                            return false
                        }
                        for (var a in this.style) {
                            if (this.style.hasOwnProperty(a) && this.style[a] !== r.style[a]) {
                                return false
                            }
                        }
                        for (var n in r.style) {
                            if (r.style.hasOwnProperty(n) && this.style[n] !== r.style[n]) {
                                return false
                            }
                        }
                        this.value += r.value;
                        this.height = Math.max(this.height, r.height);
                        this.depth = Math.max(this.depth, r.depth);
                        this.italic = r.italic;
                        return true
                    }
                }, {
                    key: "toNode", value: function e() {
                        var t = document.createTextNode(this.value);
                        var r = null;
                        if (this.italic > 0) {
                            r = document.createElement("span");
                            r.style.marginRight = this.italic + "em"
                        }
                        if (this.classes.length > 0) {
                            r = r || document.createElement("span");
                            r.className = h(this.classes)
                        }
                        for (var a in this.style) {
                            if (this.style.hasOwnProperty(a)) {
                                r = r || document.createElement("span");
                                r.style[a] = this.style[a]
                            }
                        }
                        if (r) {
                            r.appendChild(t);
                            return r
                        } else {
                            return t
                        }
                    }
                }, {
                    key: "toMarkup", value: function e() {
                        var t = false;
                        var r = "<span";
                        if (this.classes.length) {
                            t = true;
                            r += ' class="';
                            r += c.default.escape(h(this.classes));
                            r += '"'
                        }
                        var a = "";
                        if (this.italic > 0) {
                            a += "margin-right:" + this.italic + "em;"
                        }
                        for (var n in this.style) {
                            if (this.style.hasOwnProperty(n)) {
                                a += c.default.hyphenate(n) + ":" + this.style[n] + ";"
                            }
                        }
                        if (a) {
                            t = true;
                            r += ' style="' + c.default.escape(a) + '"'
                        }
                        var i = c.default.escape(this.value);
                        if (t) {
                            r += ">";
                            r += i;
                            r += "</span>";
                            return r
                        } else {
                            return i
                        }
                    }
                }]);
                return e
            }();
            t.exports = {span: v, documentFragment: d, symbolNode: m}
        }, {
            "./unicodeRegexes": 49,
            "./utils": 51,
            "babel-runtime/helpers/classCallCheck": 4,
            "babel-runtime/helpers/createClass": 5
        }],
        40: [function (e, t, r) {
            "use strict";
            var a = e("./ParseNode");
            var n = s(a);
            var i = e("./ParseError");
            var l = s(i);

            function s(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t, r) {
                var a = [];
                var i = [a];
                var s = [];
                while (true) {
                    var o = e.parseExpression(false, null);
                    o = new n.default("ordgroup", o, e.mode);
                    if (r) {
                        o = new n.default("styling", {style: r, value: [o]}, e.mode)
                    }
                    a.push(o);
                    var u = e.nextToken.text;
                    if (u === "&") {
                        e.consume()
                    } else if (u === "\\end") {
                        break
                    } else if (u === "\\\\" || u === "\\cr") {
                        var c = e.parseFunction();
                        s.push(c.value.size);
                        a = [];
                        i.push(a)
                    } else {
                        throw new l.default("Expected & or \\\\ or \\end", e.nextToken)
                    }
                }
                t.body = i;
                t.rowGaps = s;
                return new n.default(t.type, t, e.mode)
            }

            function u(e, r, a) {
                if (typeof e === "string") {
                    e = [e]
                }
                if (typeof r === "number") {
                    r = {numArgs: r}
                }
                var n = {
                    numArgs: r.numArgs || 0,
                    argTypes: r.argTypes,
                    greediness: 1,
                    allowedInText: !!r.allowedInText,
                    numOptionalArgs: r.numOptionalArgs || 0,
                    handler: a
                };
                for (var i = 0; i < e.length; ++i) {
                    t.exports[e[i]] = n
                }
            }

            function c(e) {
                if (e.substr(0, 1) === "d") {
                    return "display"
                } else {
                    return "text"
                }
            }

            u(["array", "darray"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                r = r.value.map ? r.value : [r];
                var a = r.map(function (e) {
                    var t = e.value;
                    if ("lcr".indexOf(t) !== -1) {
                        return {type: "align", align: t}
                    } else if (t === "|") {
                        return {type: "separator", separator: "|"}
                    }
                    throw new l.default("Unknown column alignment: " + e.value, e)
                });
                var n = {type: "array", cols: a, hskipBeforeAndAfter: true};
                n = o(e.parser, n, c(e.envName));
                return n
            });
            u(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], {}, function (e) {
                var t = {
                    matrix: null,
                    pmatrix: ["(", ")"],
                    bmatrix: ["[", "]"],
                    Bmatrix: ["\\{", "\\}"],
                    vmatrix: ["|", "|"],
                    Vmatrix: ["\\Vert", "\\Vert"]
                }[e.envName];
                var r = {type: "array", hskipBeforeAndAfter: false};
                r = o(e.parser, r, c(e.envName));
                if (t) {
                    r = new n.default("leftright", {body: [r], left: t[0], right: t[1]}, e.mode)
                }
                return r
            });
            u(["cases", "dcases"], {}, function (e) {
                var t = {
                    type: "array",
                    arraystretch: 1.2,
                    cols: [{type: "align", align: "l", pregap: 0, postgap: 1}, {
                        type: "align",
                        align: "l",
                        pregap: 0,
                        postgap: 0
                    }]
                };
                t = o(e.parser, t, c(e.envName));
                t = new n.default("leftright", {body: [t], left: "\\{", right: "."}, e.mode);
                return t
            });
            u("aligned", {}, function (e) {
                var t = {type: "array", cols: [], addJot: true};
                t = o(e.parser, t, "display");
                var r = new n.default("ordgroup", [], e.mode);
                var a = 0;
                t.value.body.forEach(function (e) {
                    for (var t = 1; t < e.length; t += 2) {
                        var n = e[t].value.value[0];
                        n.value.unshift(r)
                    }
                    if (a < e.length) {
                        a = e.length
                    }
                });
                for (var i = 0; i < a; ++i) {
                    var l = "r";
                    var s = 0;
                    if (i % 2 === 1) {
                        l = "l"
                    } else if (i > 0) {
                        s = 2
                    }
                    t.value.cols[i] = {type: "align", align: l, pregap: s, postgap: 0}
                }
                return t
            });
            u("gathered", {}, function (e) {
                var t = {type: "array", cols: [{type: "align", align: "c"}], addJot: true};
                t = o(e.parser, t, "display");
                return t
            })
        }, {"./ParseError": 29, "./ParseNode": 30}],
        41: [function (e, t, r) {
            "use strict";
            var a = e("./unicodeRegexes");
            var n = e("./fontMetricsData");
            var i = l(n);

            function l(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var s = {
                slant: [.25, .25, .25],
                space: [0, 0, 0],
                stretch: [0, 0, 0],
                shrink: [0, 0, 0],
                xHeight: [.431, .431, .431],
                quad: [1, 1.171, 1.472],
                extraSpace: [0, 0, 0],
                num1: [.677, .732, .925],
                num2: [.394, .384, .387],
                num3: [.444, .471, .504],
                denom1: [.686, .752, 1.025],
                denom2: [.345, .344, .532],
                sup1: [.413, .503, .504],
                sup2: [.363, .431, .404],
                sup3: [.289, .286, .294],
                sub1: [.15, .143, .2],
                sub2: [.247, .286, .4],
                supDrop: [.386, .353, .494],
                subDrop: [.05, .071, .1],
                delim1: [2.39, 1.7, 1.98],
                delim2: [1.01, 1.157, 1.42],
                axisHeight: [.25, .25, .25],
                defaultRuleThickness: [.04, .049, .049],
                bigOpSpacing1: [.111, .111, .111],
                bigOpSpacing2: [.166, .166, .166],
                bigOpSpacing3: [.2, .2, .2],
                bigOpSpacing4: [.6, .611, .611],
                bigOpSpacing5: [.1, .143, .143],
                sqrtRuleThickness: [.04, .04, .04],
                ptPerEm: [10, 10, 10],
                doubleRuleSep: [.2, .2, .2]
            };
            var o = {
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xc6": "A",
                "\xc7": "C",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xd0": "D",
                "\xd1": "N",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xdd": "Y",
                "\xde": "o",
                "\xdf": "B",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xe6": "a",
                "\xe7": "c",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xf0": "d",
                "\xf1": "n",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xfd": "y",
                "\xfe": "o",
                "\xff": "y",
                "\u0410": "A",
                "\u0411": "B",
                "\u0412": "B",
                "\u0413": "F",
                "\u0414": "A",
                "\u0415": "E",
                "\u0416": "K",
                "\u0417": "3",
                "\u0418": "N",
                "\u0419": "N",
                "\u041a": "K",
                "\u041b": "N",
                "\u041c": "M",
                "\u041d": "H",
                "\u041e": "O",
                "\u041f": "N",
                "\u0420": "P",
                "\u0421": "C",
                "\u0422": "T",
                "\u0423": "y",
                "\u0424": "O",
                "\u0425": "X",
                "\u0426": "U",
                "\u0427": "h",
                "\u0428": "W",
                "\u0429": "W",
                "\u042a": "B",
                "\u042b": "X",
                "\u042c": "B",
                "\u042d": "3",
                "\u042e": "X",
                "\u042f": "R",
                "\u0430": "a",
                "\u0431": "b",
                "\u0432": "a",
                "\u0433": "r",
                "\u0434": "y",
                "\u0435": "e",
                "\u0436": "m",
                "\u0437": "e",
                "\u0438": "n",
                "\u0439": "n",
                "\u043a": "n",
                "\u043b": "n",
                "\u043c": "m",
                "\u043d": "n",
                "\u043e": "o",
                "\u043f": "n",
                "\u0440": "p",
                "\u0441": "c",
                "\u0442": "o",
                "\u0443": "y",
                "\u0444": "b",
                "\u0445": "x",
                "\u0446": "n",
                "\u0447": "n",
                "\u0448": "w",
                "\u0449": "w",
                "\u044a": "a",
                "\u044b": "m",
                "\u044c": "a",
                "\u044d": "e",
                "\u044e": "m",
                "\u044f": "r"
            };
            var u = function e(t, r) {
                var n = t.charCodeAt(0);
                if (t[0] in o) {
                    n = o[t[0]].charCodeAt(0)
                } else if (a.cjkRegex.test(t[0])) {
                    n = "M".charCodeAt(0)
                }
                var l = i.default[r][n];
                if (l) {
                    return {depth: l[0], height: l[1], italic: l[2], skew: l[3], width: l[4]}
                }
            };
            var c = {};
            var f = function e(t) {
                var r = void 0;
                if (t >= 5) {
                    r = 0
                } else if (t >= 3) {
                    r = 1
                } else {
                    r = 2
                }
                if (!c[r]) {
                    var a = c[r] = {};
                    for (var n in s) {
                        if (s.hasOwnProperty(n)) {
                            a[n] = s[n][r]
                        }
                    }
                    a.cssEmPerMu = a.quad / 18
                }
                return c[r]
            };
            t.exports = {getFontMetrics: f, getCharacterMetrics: u}
        }, {"./fontMetricsData": 42, "./unicodeRegexes": 49}],
        42: [function (e, t, r) {
            "use strict";
            t.exports = {
                "AMS-Regular": {
                    65: [0, .68889, 0, 0],
                    66: [0, .68889, 0, 0],
                    67: [0, .68889, 0, 0],
                    68: [0, .68889, 0, 0],
                    69: [0, .68889, 0, 0],
                    70: [0, .68889, 0, 0],
                    71: [0, .68889, 0, 0],
                    72: [0, .68889, 0, 0],
                    73: [0, .68889, 0, 0],
                    74: [.16667, .68889, 0, 0],
                    75: [0, .68889, 0, 0],
                    76: [0, .68889, 0, 0],
                    77: [0, .68889, 0, 0],
                    78: [0, .68889, 0, 0],
                    79: [.16667, .68889, 0, 0],
                    80: [0, .68889, 0, 0],
                    81: [.16667, .68889, 0, 0],
                    82: [0, .68889, 0, 0],
                    83: [0, .68889, 0, 0],
                    84: [0, .68889, 0, 0],
                    85: [0, .68889, 0, 0],
                    86: [0, .68889, 0, 0],
                    87: [0, .68889, 0, 0],
                    88: [0, .68889, 0, 0],
                    89: [0, .68889, 0, 0],
                    90: [0, .68889, 0, 0],
                    107: [0, .68889, 0, 0],
                    165: [0, .675, .025, 0],
                    174: [.15559, .69224, 0, 0],
                    240: [0, .68889, 0, 0],
                    295: [0, .68889, 0, 0],
                    710: [0, .825, 0, 0],
                    732: [0, .9, 0, 0],
                    770: [0, .825, 0, 0],
                    771: [0, .9, 0, 0],
                    989: [.08167, .58167, 0, 0],
                    1008: [0, .43056, .04028, 0],
                    8245: [0, .54986, 0, 0],
                    8463: [0, .68889, 0, 0],
                    8487: [0, .68889, 0, 0],
                    8498: [0, .68889, 0, 0],
                    8502: [0, .68889, 0, 0],
                    8503: [0, .68889, 0, 0],
                    8504: [0, .68889, 0, 0],
                    8513: [0, .68889, 0, 0],
                    8592: [-.03598, .46402, 0, 0],
                    8594: [-.03598, .46402, 0, 0],
                    8602: [-.13313, .36687, 0, 0],
                    8603: [-.13313, .36687, 0, 0],
                    8606: [.01354, .52239, 0, 0],
                    8608: [.01354, .52239, 0, 0],
                    8610: [.01354, .52239, 0, 0],
                    8611: [.01354, .52239, 0, 0],
                    8619: [0, .54986, 0, 0],
                    8620: [0, .54986, 0, 0],
                    8621: [-.13313, .37788, 0, 0],
                    8622: [-.13313, .36687, 0, 0],
                    8624: [0, .69224, 0, 0],
                    8625: [0, .69224, 0, 0],
                    8630: [0, .43056, 0, 0],
                    8631: [0, .43056, 0, 0],
                    8634: [.08198, .58198, 0, 0],
                    8635: [.08198, .58198, 0, 0],
                    8638: [.19444, .69224, 0, 0],
                    8639: [.19444, .69224, 0, 0],
                    8642: [.19444, .69224, 0, 0],
                    8643: [.19444, .69224, 0, 0],
                    8644: [.1808, .675, 0, 0],
                    8646: [.1808, .675, 0, 0],
                    8647: [.1808, .675, 0, 0],
                    8648: [.19444, .69224, 0, 0],
                    8649: [.1808, .675, 0, 0],
                    8650: [.19444, .69224, 0, 0],
                    8651: [.01354, .52239, 0, 0],
                    8652: [.01354, .52239, 0, 0],
                    8653: [-.13313, .36687, 0, 0],
                    8654: [-.13313, .36687, 0, 0],
                    8655: [-.13313, .36687, 0, 0],
                    8666: [.13667, .63667, 0, 0],
                    8667: [.13667, .63667, 0, 0],
                    8669: [-.13313, .37788, 0, 0],
                    8672: [-.064, .437, 0, 0],
                    8674: [-.064, .437, 0, 0],
                    8705: [0, .825, 0, 0],
                    8708: [0, .68889, 0, 0],
                    8709: [.08167, .58167, 0, 0],
                    8717: [0, .43056, 0, 0],
                    8722: [-.03598, .46402, 0, 0],
                    8724: [.08198, .69224, 0, 0],
                    8726: [.08167, .58167, 0, 0],
                    8733: [0, .69224, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8737: [0, .69224, 0, 0],
                    8738: [.03517, .52239, 0, 0],
                    8739: [.08167, .58167, 0, 0],
                    8740: [.25142, .74111, 0, 0],
                    8741: [.08167, .58167, 0, 0],
                    8742: [.25142, .74111, 0, 0],
                    8756: [0, .69224, 0, 0],
                    8757: [0, .69224, 0, 0],
                    8764: [-.13313, .36687, 0, 0],
                    8765: [-.13313, .37788, 0, 0],
                    8769: [-.13313, .36687, 0, 0],
                    8770: [-.03625, .46375, 0, 0],
                    8774: [.30274, .79383, 0, 0],
                    8776: [-.01688, .48312, 0, 0],
                    8778: [.08167, .58167, 0, 0],
                    8782: [.06062, .54986, 0, 0],
                    8783: [.06062, .54986, 0, 0],
                    8785: [.08198, .58198, 0, 0],
                    8786: [.08198, .58198, 0, 0],
                    8787: [.08198, .58198, 0, 0],
                    8790: [0, .69224, 0, 0],
                    8791: [.22958, .72958, 0, 0],
                    8796: [.08198, .91667, 0, 0],
                    8806: [.25583, .75583, 0, 0],
                    8807: [.25583, .75583, 0, 0],
                    8808: [.25142, .75726, 0, 0],
                    8809: [.25142, .75726, 0, 0],
                    8812: [.25583, .75583, 0, 0],
                    8814: [.20576, .70576, 0, 0],
                    8815: [.20576, .70576, 0, 0],
                    8816: [.30274, .79383, 0, 0],
                    8817: [.30274, .79383, 0, 0],
                    8818: [.22958, .72958, 0, 0],
                    8819: [.22958, .72958, 0, 0],
                    8822: [.1808, .675, 0, 0],
                    8823: [.1808, .675, 0, 0],
                    8828: [.13667, .63667, 0, 0],
                    8829: [.13667, .63667, 0, 0],
                    8830: [.22958, .72958, 0, 0],
                    8831: [.22958, .72958, 0, 0],
                    8832: [.20576, .70576, 0, 0],
                    8833: [.20576, .70576, 0, 0],
                    8840: [.30274, .79383, 0, 0],
                    8841: [.30274, .79383, 0, 0],
                    8842: [.13597, .63597, 0, 0],
                    8843: [.13597, .63597, 0, 0],
                    8847: [.03517, .54986, 0, 0],
                    8848: [.03517, .54986, 0, 0],
                    8858: [.08198, .58198, 0, 0],
                    8859: [.08198, .58198, 0, 0],
                    8861: [.08198, .58198, 0, 0],
                    8862: [0, .675, 0, 0],
                    8863: [0, .675, 0, 0],
                    8864: [0, .675, 0, 0],
                    8865: [0, .675, 0, 0],
                    8872: [0, .69224, 0, 0],
                    8873: [0, .69224, 0, 0],
                    8874: [0, .69224, 0, 0],
                    8876: [0, .68889, 0, 0],
                    8877: [0, .68889, 0, 0],
                    8878: [0, .68889, 0, 0],
                    8879: [0, .68889, 0, 0],
                    8882: [.03517, .54986, 0, 0],
                    8883: [.03517, .54986, 0, 0],
                    8884: [.13667, .63667, 0, 0],
                    8885: [.13667, .63667, 0, 0],
                    8888: [0, .54986, 0, 0],
                    8890: [.19444, .43056, 0, 0],
                    8891: [.19444, .69224, 0, 0],
                    8892: [.19444, .69224, 0, 0],
                    8901: [0, .54986, 0, 0],
                    8903: [.08167, .58167, 0, 0],
                    8905: [.08167, .58167, 0, 0],
                    8906: [.08167, .58167, 0, 0],
                    8907: [0, .69224, 0, 0],
                    8908: [0, .69224, 0, 0],
                    8909: [-.03598, .46402, 0, 0],
                    8910: [0, .54986, 0, 0],
                    8911: [0, .54986, 0, 0],
                    8912: [.03517, .54986, 0, 0],
                    8913: [.03517, .54986, 0, 0],
                    8914: [0, .54986, 0, 0],
                    8915: [0, .54986, 0, 0],
                    8916: [0, .69224, 0, 0],
                    8918: [.0391, .5391, 0, 0],
                    8919: [.0391, .5391, 0, 0],
                    8920: [.03517, .54986, 0, 0],
                    8921: [.03517, .54986, 0, 0],
                    8922: [.38569, .88569, 0, 0],
                    8923: [.38569, .88569, 0, 0],
                    8926: [.13667, .63667, 0, 0],
                    8927: [.13667, .63667, 0, 0],
                    8928: [.30274, .79383, 0, 0],
                    8929: [.30274, .79383, 0, 0],
                    8934: [.23222, .74111, 0, 0],
                    8935: [.23222, .74111, 0, 0],
                    8936: [.23222, .74111, 0, 0],
                    8937: [.23222, .74111, 0, 0],
                    8938: [.20576, .70576, 0, 0],
                    8939: [.20576, .70576, 0, 0],
                    8940: [.30274, .79383, 0, 0],
                    8941: [.30274, .79383, 0, 0],
                    8994: [.19444, .69224, 0, 0],
                    8995: [.19444, .69224, 0, 0],
                    9416: [.15559, .69224, 0, 0],
                    9484: [0, .69224, 0, 0],
                    9488: [0, .69224, 0, 0],
                    9492: [0, .37788, 0, 0],
                    9496: [0, .37788, 0, 0],
                    9585: [.19444, .68889, 0, 0],
                    9586: [.19444, .74111, 0, 0],
                    9632: [0, .675, 0, 0],
                    9633: [0, .675, 0, 0],
                    9650: [0, .54986, 0, 0],
                    9651: [0, .54986, 0, 0],
                    9654: [.03517, .54986, 0, 0],
                    9660: [0, .54986, 0, 0],
                    9661: [0, .54986, 0, 0],
                    9664: [.03517, .54986, 0, 0],
                    9674: [.11111, .69224, 0, 0],
                    9733: [.19444, .69224, 0, 0],
                    10003: [0, .69224, 0, 0],
                    10016: [0, .69224, 0, 0],
                    10731: [.11111, .69224, 0, 0],
                    10846: [.19444, .75583, 0, 0],
                    10877: [.13667, .63667, 0, 0],
                    10878: [.13667, .63667, 0, 0],
                    10885: [.25583, .75583, 0, 0],
                    10886: [.25583, .75583, 0, 0],
                    10887: [.13597, .63597, 0, 0],
                    10888: [.13597, .63597, 0, 0],
                    10889: [.26167, .75726, 0, 0],
                    10890: [.26167, .75726, 0, 0],
                    10891: [.48256, .98256, 0, 0],
                    10892: [.48256, .98256, 0, 0],
                    10901: [.13667, .63667, 0, 0],
                    10902: [.13667, .63667, 0, 0],
                    10933: [.25142, .75726, 0, 0],
                    10934: [.25142, .75726, 0, 0],
                    10935: [.26167, .75726, 0, 0],
                    10936: [.26167, .75726, 0, 0],
                    10937: [.26167, .75726, 0, 0],
                    10938: [.26167, .75726, 0, 0],
                    10949: [.25583, .75583, 0, 0],
                    10950: [.25583, .75583, 0, 0],
                    10955: [.28481, .79383, 0, 0],
                    10956: [.28481, .79383, 0, 0],
                    57350: [.08167, .58167, 0, 0],
                    57351: [.08167, .58167, 0, 0],
                    57352: [.08167, .58167, 0, 0],
                    57353: [0, .43056, .04028, 0],
                    57356: [.25142, .75726, 0, 0],
                    57357: [.25142, .75726, 0, 0],
                    57358: [.41951, .91951, 0, 0],
                    57359: [.30274, .79383, 0, 0],
                    57360: [.30274, .79383, 0, 0],
                    57361: [.41951, .91951, 0, 0],
                    57366: [.25142, .75726, 0, 0],
                    57367: [.25142, .75726, 0, 0],
                    57368: [.25142, .75726, 0, 0],
                    57369: [.25142, .75726, 0, 0],
                    57370: [.13597, .63597, 0, 0],
                    57371: [.13597, .63597, 0, 0]
                },
                "Caligraphic-Regular": {
                    48: [0, .43056, 0, 0],
                    49: [0, .43056, 0, 0],
                    50: [0, .43056, 0, 0],
                    51: [.19444, .43056, 0, 0],
                    52: [.19444, .43056, 0, 0],
                    53: [.19444, .43056, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [.19444, .43056, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [.19444, .43056, 0, 0],
                    65: [0, .68333, 0, .19445],
                    66: [0, .68333, .03041, .13889],
                    67: [0, .68333, .05834, .13889],
                    68: [0, .68333, .02778, .08334],
                    69: [0, .68333, .08944, .11111],
                    70: [0, .68333, .09931, .11111],
                    71: [.09722, .68333, .0593, .11111],
                    72: [0, .68333, .00965, .11111],
                    73: [0, .68333, .07382, 0],
                    74: [.09722, .68333, .18472, .16667],
                    75: [0, .68333, .01445, .05556],
                    76: [0, .68333, 0, .13889],
                    77: [0, .68333, 0, .13889],
                    78: [0, .68333, .14736, .08334],
                    79: [0, .68333, .02778, .11111],
                    80: [0, .68333, .08222, .08334],
                    81: [.09722, .68333, 0, .11111],
                    82: [0, .68333, 0, .08334],
                    83: [0, .68333, .075, .13889],
                    84: [0, .68333, .25417, 0],
                    85: [0, .68333, .09931, .08334],
                    86: [0, .68333, .08222, 0],
                    87: [0, .68333, .08222, .08334],
                    88: [0, .68333, .14643, .13889],
                    89: [.09722, .68333, .08222, .08334],
                    90: [0, .68333, .07944, .13889]
                },
                "Fraktur-Regular": {
                    33: [0, .69141, 0, 0],
                    34: [0, .69141, 0, 0],
                    38: [0, .69141, 0, 0],
                    39: [0, .69141, 0, 0],
                    40: [.24982, .74947, 0, 0],
                    41: [.24982, .74947, 0, 0],
                    42: [0, .62119, 0, 0],
                    43: [.08319, .58283, 0, 0],
                    44: [0, .10803, 0, 0],
                    45: [.08319, .58283, 0, 0],
                    46: [0, .10803, 0, 0],
                    47: [.24982, .74947, 0, 0],
                    48: [0, .47534, 0, 0],
                    49: [0, .47534, 0, 0],
                    50: [0, .47534, 0, 0],
                    51: [.18906, .47534, 0, 0],
                    52: [.18906, .47534, 0, 0],
                    53: [.18906, .47534, 0, 0],
                    54: [0, .69141, 0, 0],
                    55: [.18906, .47534, 0, 0],
                    56: [0, .69141, 0, 0],
                    57: [.18906, .47534, 0, 0],
                    58: [0, .47534, 0, 0],
                    59: [.12604, .47534, 0, 0],
                    61: [-.13099, .36866, 0, 0],
                    63: [0, .69141, 0, 0],
                    65: [0, .69141, 0, 0],
                    66: [0, .69141, 0, 0],
                    67: [0, .69141, 0, 0],
                    68: [0, .69141, 0, 0],
                    69: [0, .69141, 0, 0],
                    70: [.12604, .69141, 0, 0],
                    71: [0, .69141, 0, 0],
                    72: [.06302, .69141, 0, 0],
                    73: [0, .69141, 0, 0],
                    74: [.12604, .69141, 0, 0],
                    75: [0, .69141, 0, 0],
                    76: [0, .69141, 0, 0],
                    77: [0, .69141, 0, 0],
                    78: [0, .69141, 0, 0],
                    79: [0, .69141, 0, 0],
                    80: [.18906, .69141, 0, 0],
                    81: [.03781, .69141, 0, 0],
                    82: [0, .69141, 0, 0],
                    83: [0, .69141, 0, 0],
                    84: [0, .69141, 0, 0],
                    85: [0, .69141, 0, 0],
                    86: [0, .69141, 0, 0],
                    87: [0, .69141, 0, 0],
                    88: [0, .69141, 0, 0],
                    89: [.18906, .69141, 0, 0],
                    90: [.12604, .69141, 0, 0],
                    91: [.24982, .74947, 0, 0],
                    93: [.24982, .74947, 0, 0],
                    94: [0, .69141, 0, 0],
                    97: [0, .47534, 0, 0],
                    98: [0, .69141, 0, 0],
                    99: [0, .47534, 0, 0],
                    100: [0, .62119, 0, 0],
                    101: [0, .47534, 0, 0],
                    102: [.18906, .69141, 0, 0],
                    103: [.18906, .47534, 0, 0],
                    104: [.18906, .69141, 0, 0],
                    105: [0, .69141, 0, 0],
                    106: [0, .69141, 0, 0],
                    107: [0, .69141, 0, 0],
                    108: [0, .69141, 0, 0],
                    109: [0, .47534, 0, 0],
                    110: [0, .47534, 0, 0],
                    111: [0, .47534, 0, 0],
                    112: [.18906, .52396, 0, 0],
                    113: [.18906, .47534, 0, 0],
                    114: [0, .47534, 0, 0],
                    115: [0, .47534, 0, 0],
                    116: [0, .62119, 0, 0],
                    117: [0, .47534, 0, 0],
                    118: [0, .52396, 0, 0],
                    119: [0, .52396, 0, 0],
                    120: [.18906, .47534, 0, 0],
                    121: [.18906, .47534, 0, 0],
                    122: [.18906, .47534, 0, 0],
                    8216: [0, .69141, 0, 0],
                    8217: [0, .69141, 0, 0],
                    58112: [0, .62119, 0, 0],
                    58113: [0, .62119, 0, 0],
                    58114: [.18906, .69141, 0, 0],
                    58115: [.18906, .69141, 0, 0],
                    58116: [.18906, .47534, 0, 0],
                    58117: [0, .69141, 0, 0],
                    58118: [0, .62119, 0, 0],
                    58119: [0, .47534, 0, 0]
                },
                "Main-Bold": {
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.13333, .63333, 0, 0],
                    44: [.19444, .15556, 0, 0],
                    45: [0, .44444, 0, 0],
                    46: [0, .15556, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .64444, 0, 0],
                    49: [0, .64444, 0, 0],
                    50: [0, .64444, 0, 0],
                    51: [0, .64444, 0, 0],
                    52: [0, .64444, 0, 0],
                    53: [0, .64444, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [0, .64444, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [0, .64444, 0, 0],
                    58: [0, .44444, 0, 0],
                    59: [.19444, .44444, 0, 0],
                    60: [.08556, .58556, 0, 0],
                    61: [-.10889, .39111, 0, 0],
                    62: [.08556, .58556, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .68611, 0, 0],
                    66: [0, .68611, 0, 0],
                    67: [0, .68611, 0, 0],
                    68: [0, .68611, 0, 0],
                    69: [0, .68611, 0, 0],
                    70: [0, .68611, 0, 0],
                    71: [0, .68611, 0, 0],
                    72: [0, .68611, 0, 0],
                    73: [0, .68611, 0, 0],
                    74: [0, .68611, 0, 0],
                    75: [0, .68611, 0, 0],
                    76: [0, .68611, 0, 0],
                    77: [0, .68611, 0, 0],
                    78: [0, .68611, 0, 0],
                    79: [0, .68611, 0, 0],
                    80: [0, .68611, 0, 0],
                    81: [.19444, .68611, 0, 0],
                    82: [0, .68611, 0, 0],
                    83: [0, .68611, 0, 0],
                    84: [0, .68611, 0, 0],
                    85: [0, .68611, 0, 0],
                    86: [0, .68611, .01597, 0],
                    87: [0, .68611, .01597, 0],
                    88: [0, .68611, 0, 0],
                    89: [0, .68611, .02875, 0],
                    90: [0, .68611, 0, 0],
                    91: [.25, .75, 0, 0],
                    92: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.31, .13444, .03194, 0],
                    96: [0, .69444, 0, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [0, .69444, .10903, 0],
                    103: [.19444, .44444, .01597, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .69444, 0, 0],
                    106: [.19444, .69444, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, 0, 0],
                    114: [0, .44444, 0, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .63492, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .01597, 0],
                    119: [0, .44444, .01597, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .01597, 0],
                    122: [0, .44444, 0, 0],
                    123: [.25, .75, 0, 0],
                    124: [.25, .75, 0, 0],
                    125: [.25, .75, 0, 0],
                    126: [.35, .34444, 0, 0],
                    168: [0, .69444, 0, 0],
                    172: [0, .44444, 0, 0],
                    175: [0, .59611, 0, 0],
                    176: [0, .69444, 0, 0],
                    177: [.13333, .63333, 0, 0],
                    180: [0, .69444, 0, 0],
                    215: [.13333, .63333, 0, 0],
                    247: [.13333, .63333, 0, 0],
                    305: [0, .44444, 0, 0],
                    567: [.19444, .44444, 0, 0],
                    710: [0, .69444, 0, 0],
                    711: [0, .63194, 0, 0],
                    713: [0, .59611, 0, 0],
                    714: [0, .69444, 0, 0],
                    715: [0, .69444, 0, 0],
                    728: [0, .69444, 0, 0],
                    729: [0, .69444, 0, 0],
                    730: [0, .69444, 0, 0],
                    732: [0, .69444, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .69444, 0, 0],
                    772: [0, .59611, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .69444, 0, 0],
                    776: [0, .69444, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .63194, 0, 0],
                    824: [.19444, .69444, 0, 0],
                    915: [0, .68611, 0, 0],
                    916: [0, .68611, 0, 0],
                    920: [0, .68611, 0, 0],
                    923: [0, .68611, 0, 0],
                    926: [0, .68611, 0, 0],
                    928: [0, .68611, 0, 0],
                    931: [0, .68611, 0, 0],
                    933: [0, .68611, 0, 0],
                    934: [0, .68611, 0, 0],
                    936: [0, .68611, 0, 0],
                    937: [0, .68611, 0, 0],
                    8211: [0, .44444, .03194, 0],
                    8212: [0, .44444, .03194, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0],
                    8224: [.19444, .69444, 0, 0],
                    8225: [.19444, .69444, 0, 0],
                    8242: [0, .55556, 0, 0],
                    8407: [0, .72444, .15486, 0],
                    8463: [0, .69444, 0, 0],
                    8465: [0, .69444, 0, 0],
                    8467: [0, .69444, 0, 0],
                    8472: [.19444, .44444, 0, 0],
                    8476: [0, .69444, 0, 0],
                    8501: [0, .69444, 0, 0],
                    8592: [-.10889, .39111, 0, 0],
                    8593: [.19444, .69444, 0, 0],
                    8594: [-.10889, .39111, 0, 0],
                    8595: [.19444, .69444, 0, 0],
                    8596: [-.10889, .39111, 0, 0],
                    8597: [.25, .75, 0, 0],
                    8598: [.19444, .69444, 0, 0],
                    8599: [.19444, .69444, 0, 0],
                    8600: [.19444, .69444, 0, 0],
                    8601: [.19444, .69444, 0, 0],
                    8636: [-.10889, .39111, 0, 0],
                    8637: [-.10889, .39111, 0, 0],
                    8640: [-.10889, .39111, 0, 0],
                    8641: [-.10889, .39111, 0, 0],
                    8656: [-.10889, .39111, 0, 0],
                    8657: [.19444, .69444, 0, 0],
                    8658: [-.10889, .39111, 0, 0],
                    8659: [.19444, .69444, 0, 0],
                    8660: [-.10889, .39111, 0, 0],
                    8661: [.25, .75, 0, 0],
                    8704: [0, .69444, 0, 0],
                    8706: [0, .69444, .06389, 0],
                    8707: [0, .69444, 0, 0],
                    8709: [.05556, .75, 0, 0],
                    8711: [0, .68611, 0, 0],
                    8712: [.08556, .58556, 0, 0],
                    8715: [.08556, .58556, 0, 0],
                    8722: [.13333, .63333, 0, 0],
                    8723: [.13333, .63333, 0, 0],
                    8725: [.25, .75, 0, 0],
                    8726: [.25, .75, 0, 0],
                    8727: [-.02778, .47222, 0, 0],
                    8728: [-.02639, .47361, 0, 0],
                    8729: [-.02639, .47361, 0, 0],
                    8730: [.18, .82, 0, 0],
                    8733: [0, .44444, 0, 0],
                    8734: [0, .44444, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8739: [.25, .75, 0, 0],
                    8741: [.25, .75, 0, 0],
                    8743: [0, .55556, 0, 0],
                    8744: [0, .55556, 0, 0],
                    8745: [0, .55556, 0, 0],
                    8746: [0, .55556, 0, 0],
                    8747: [.19444, .69444, .12778, 0],
                    8764: [-.10889, .39111, 0, 0],
                    8768: [.19444, .69444, 0, 0],
                    8771: [.00222, .50222, 0, 0],
                    8776: [.02444, .52444, 0, 0],
                    8781: [.00222, .50222, 0, 0],
                    8801: [.00222, .50222, 0, 0],
                    8804: [.19667, .69667, 0, 0],
                    8805: [.19667, .69667, 0, 0],
                    8810: [.08556, .58556, 0, 0],
                    8811: [.08556, .58556, 0, 0],
                    8826: [.08556, .58556, 0, 0],
                    8827: [.08556, .58556, 0, 0],
                    8834: [.08556, .58556, 0, 0],
                    8835: [.08556, .58556, 0, 0],
                    8838: [.19667, .69667, 0, 0],
                    8839: [.19667, .69667, 0, 0],
                    8846: [0, .55556, 0, 0],
                    8849: [.19667, .69667, 0, 0],
                    8850: [.19667, .69667, 0, 0],
                    8851: [0, .55556, 0, 0],
                    8852: [0, .55556, 0, 0],
                    8853: [.13333, .63333, 0, 0],
                    8854: [.13333, .63333, 0, 0],
                    8855: [.13333, .63333, 0, 0],
                    8856: [.13333, .63333, 0, 0],
                    8857: [.13333, .63333, 0, 0],
                    8866: [0, .69444, 0, 0],
                    8867: [0, .69444, 0, 0],
                    8868: [0, .69444, 0, 0],
                    8869: [0, .69444, 0, 0],
                    8900: [-.02639, .47361, 0, 0],
                    8901: [-.02639, .47361, 0, 0],
                    8902: [-.02778, .47222, 0, 0],
                    8968: [.25, .75, 0, 0],
                    8969: [.25, .75, 0, 0],
                    8970: [.25, .75, 0, 0],
                    8971: [.25, .75, 0, 0],
                    8994: [-.13889, .36111, 0, 0],
                    8995: [-.13889, .36111, 0, 0],
                    9651: [.19444, .69444, 0, 0],
                    9657: [-.02778, .47222, 0, 0],
                    9661: [.19444, .69444, 0, 0],
                    9667: [-.02778, .47222, 0, 0],
                    9711: [.19444, .69444, 0, 0],
                    9824: [.12963, .69444, 0, 0],
                    9825: [.12963, .69444, 0, 0],
                    9826: [.12963, .69444, 0, 0],
                    9827: [.12963, .69444, 0, 0],
                    9837: [0, .75, 0, 0],
                    9838: [.19444, .69444, 0, 0],
                    9839: [.19444, .69444, 0, 0],
                    10216: [.25, .75, 0, 0],
                    10217: [.25, .75, 0, 0],
                    10815: [0, .68611, 0, 0],
                    10927: [.19667, .69667, 0, 0],
                    10928: [.19667, .69667, 0, 0]
                },
                "Main-Italic": {
                    33: [0, .69444, .12417, 0],
                    34: [0, .69444, .06961, 0],
                    35: [.19444, .69444, .06616, 0],
                    37: [.05556, .75, .13639, 0],
                    38: [0, .69444, .09694, 0],
                    39: [0, .69444, .12417, 0],
                    40: [.25, .75, .16194, 0],
                    41: [.25, .75, .03694, 0],
                    42: [0, .75, .14917, 0],
                    43: [.05667, .56167, .03694, 0],
                    44: [.19444, .10556, 0, 0],
                    45: [0, .43056, .02826, 0],
                    46: [0, .10556, 0, 0],
                    47: [.25, .75, .16194, 0],
                    48: [0, .64444, .13556, 0],
                    49: [0, .64444, .13556, 0],
                    50: [0, .64444, .13556, 0],
                    51: [0, .64444, .13556, 0],
                    52: [.19444, .64444, .13556, 0],
                    53: [0, .64444, .13556, 0],
                    54: [0, .64444, .13556, 0],
                    55: [.19444, .64444, .13556, 0],
                    56: [0, .64444, .13556, 0],
                    57: [0, .64444, .13556, 0],
                    58: [0, .43056, .0582, 0],
                    59: [.19444, .43056, .0582, 0],
                    61: [-.13313, .36687, .06616, 0],
                    63: [0, .69444, .1225, 0],
                    64: [0, .69444, .09597, 0],
                    65: [0, .68333, 0, 0],
                    66: [0, .68333, .10257, 0],
                    67: [0, .68333, .14528, 0],
                    68: [0, .68333, .09403, 0],
                    69: [0, .68333, .12028, 0],
                    70: [0, .68333, .13305, 0],
                    71: [0, .68333, .08722, 0],
                    72: [0, .68333, .16389, 0],
                    73: [0, .68333, .15806, 0],
                    74: [0, .68333, .14028, 0],
                    75: [0, .68333, .14528, 0],
                    76: [0, .68333, 0, 0],
                    77: [0, .68333, .16389, 0],
                    78: [0, .68333, .16389, 0],
                    79: [0, .68333, .09403, 0],
                    80: [0, .68333, .10257, 0],
                    81: [.19444, .68333, .09403, 0],
                    82: [0, .68333, .03868, 0],
                    83: [0, .68333, .11972, 0],
                    84: [0, .68333, .13305, 0],
                    85: [0, .68333, .16389, 0],
                    86: [0, .68333, .18361, 0],
                    87: [0, .68333, .18361, 0],
                    88: [0, .68333, .15806, 0],
                    89: [0, .68333, .19383, 0],
                    90: [0, .68333, .14528, 0],
                    91: [.25, .75, .1875, 0],
                    93: [.25, .75, .10528, 0],
                    94: [0, .69444, .06646, 0],
                    95: [.31, .12056, .09208, 0],
                    97: [0, .43056, .07671, 0],
                    98: [0, .69444, .06312, 0],
                    99: [0, .43056, .05653, 0],
                    100: [0, .69444, .10333, 0],
                    101: [0, .43056, .07514, 0],
                    102: [.19444, .69444, .21194, 0],
                    103: [.19444, .43056, .08847, 0],
                    104: [0, .69444, .07671, 0],
                    105: [0, .65536, .1019, 0],
                    106: [.19444, .65536, .14467, 0],
                    107: [0, .69444, .10764, 0],
                    108: [0, .69444, .10333, 0],
                    109: [0, .43056, .07671, 0],
                    110: [0, .43056, .07671, 0],
                    111: [0, .43056, .06312, 0],
                    112: [.19444, .43056, .06312, 0],
                    113: [.19444, .43056, .08847, 0],
                    114: [0, .43056, .10764, 0],
                    115: [0, .43056, .08208, 0],
                    116: [0, .61508, .09486, 0],
                    117: [0, .43056, .07671, 0],
                    118: [0, .43056, .10764, 0],
                    119: [0, .43056, .10764, 0],
                    120: [0, .43056, .12042, 0],
                    121: [.19444, .43056, .08847, 0],
                    122: [0, .43056, .12292, 0],
                    126: [.35, .31786, .11585, 0],
                    163: [0, .69444, 0, 0],
                    305: [0, .43056, 0, .02778],
                    567: [.19444, .43056, 0, .08334],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, .09694, 0],
                    770: [0, .69444, .06646, 0],
                    771: [0, .66786, .11585, 0],
                    772: [0, .56167, .10333, 0],
                    774: [0, .69444, .10806, 0],
                    775: [0, .66786, .11752, 0],
                    776: [0, .66786, .10474, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, .1225, 0],
                    780: [0, .62847, .08295, 0],
                    915: [0, .68333, .13305, 0],
                    916: [0, .68333, 0, 0],
                    920: [0, .68333, .09403, 0],
                    923: [0, .68333, 0, 0],
                    926: [0, .68333, .15294, 0],
                    928: [0, .68333, .16389, 0],
                    931: [0, .68333, .12028, 0],
                    933: [0, .68333, .11111, 0],
                    934: [0, .68333, .05986, 0],
                    936: [0, .68333, .11111, 0],
                    937: [0, .68333, .10257, 0],
                    8211: [0, .43056, .09208, 0],
                    8212: [0, .43056, .09208, 0],
                    8216: [0, .69444, .12417, 0],
                    8217: [0, .69444, .12417, 0],
                    8220: [0, .69444, .1685, 0],
                    8221: [0, .69444, .06961, 0],
                    8463: [0, .68889, 0, 0]
                },
                "Main-Regular": {
                    32: [0, 0, 0, 0],
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.08333, .58333, 0, 0],
                    44: [.19444, .10556, 0, 0],
                    45: [0, .43056, 0, 0],
                    46: [0, .10556, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .64444, 0, 0],
                    49: [0, .64444, 0, 0],
                    50: [0, .64444, 0, 0],
                    51: [0, .64444, 0, 0],
                    52: [0, .64444, 0, 0],
                    53: [0, .64444, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [0, .64444, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [0, .64444, 0, 0],
                    58: [0, .43056, 0, 0],
                    59: [.19444, .43056, 0, 0],
                    60: [.0391, .5391, 0, 0],
                    61: [-.13313, .36687, 0, 0],
                    62: [.0391, .5391, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .68333, 0, 0],
                    66: [0, .68333, 0, 0],
                    67: [0, .68333, 0, 0],
                    68: [0, .68333, 0, 0],
                    69: [0, .68333, 0, 0],
                    70: [0, .68333, 0, 0],
                    71: [0, .68333, 0, 0],
                    72: [0, .68333, 0, 0],
                    73: [0, .68333, 0, 0],
                    74: [0, .68333, 0, 0],
                    75: [0, .68333, 0, 0],
                    76: [0, .68333, 0, 0],
                    77: [0, .68333, 0, 0],
                    78: [0, .68333, 0, 0],
                    79: [0, .68333, 0, 0],
                    80: [0, .68333, 0, 0],
                    81: [.19444, .68333, 0, 0],
                    82: [0, .68333, 0, 0],
                    83: [0, .68333, 0, 0],
                    84: [0, .68333, 0, 0],
                    85: [0, .68333, 0, 0],
                    86: [0, .68333, .01389, 0],
                    87: [0, .68333, .01389, 0],
                    88: [0, .68333, 0, 0],
                    89: [0, .68333, .025, 0],
                    90: [0, .68333, 0, 0],
                    91: [.25, .75, 0, 0],
                    92: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.31, .12056, .02778, 0],
                    96: [0, .69444, 0, 0],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .43056, 0, 0],
                    102: [0, .69444, .07778, 0],
                    103: [.19444, .43056, .01389, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .66786, 0, 0],
                    106: [.19444, .66786, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, 0],
                    112: [.19444, .43056, 0, 0],
                    113: [.19444, .43056, 0, 0],
                    114: [0, .43056, 0, 0],
                    115: [0, .43056, 0, 0],
                    116: [0, .61508, 0, 0],
                    117: [0, .43056, 0, 0],
                    118: [0, .43056, .01389, 0],
                    119: [0, .43056, .01389, 0],
                    120: [0, .43056, 0, 0],
                    121: [.19444, .43056, .01389, 0],
                    122: [0, .43056, 0, 0],
                    123: [.25, .75, 0, 0],
                    124: [.25, .75, 0, 0],
                    125: [.25, .75, 0, 0],
                    126: [.35, .31786, 0, 0],
                    160: [0, 0, 0, 0],
                    168: [0, .66786, 0, 0],
                    172: [0, .43056, 0, 0],
                    175: [0, .56778, 0, 0],
                    176: [0, .69444, 0, 0],
                    177: [.08333, .58333, 0, 0],
                    180: [0, .69444, 0, 0],
                    215: [.08333, .58333, 0, 0],
                    247: [.08333, .58333, 0, 0],
                    305: [0, .43056, 0, 0],
                    567: [.19444, .43056, 0, 0],
                    710: [0, .69444, 0, 0],
                    711: [0, .62847, 0, 0],
                    713: [0, .56778, 0, 0],
                    714: [0, .69444, 0, 0],
                    715: [0, .69444, 0, 0],
                    728: [0, .69444, 0, 0],
                    729: [0, .66786, 0, 0],
                    730: [0, .69444, 0, 0],
                    732: [0, .66786, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .66786, 0, 0],
                    772: [0, .56778, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .66786, 0, 0],
                    776: [0, .66786, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .62847, 0, 0],
                    824: [.19444, .69444, 0, 0],
                    915: [0, .68333, 0, 0],
                    916: [0, .68333, 0, 0],
                    920: [0, .68333, 0, 0],
                    923: [0, .68333, 0, 0],
                    926: [0, .68333, 0, 0],
                    928: [0, .68333, 0, 0],
                    931: [0, .68333, 0, 0],
                    933: [0, .68333, 0, 0],
                    934: [0, .68333, 0, 0],
                    936: [0, .68333, 0, 0],
                    937: [0, .68333, 0, 0],
                    8211: [0, .43056, .02778, 0],
                    8212: [0, .43056, .02778, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0],
                    8224: [.19444, .69444, 0, 0],
                    8225: [.19444, .69444, 0, 0],
                    8230: [0, .12, 0, 0],
                    8242: [0, .55556, 0, 0],
                    8407: [0, .71444, .15382, 0],
                    8463: [0, .68889, 0, 0],
                    8465: [0, .69444, 0, 0],
                    8467: [0, .69444, 0, .11111],
                    8472: [.19444, .43056, 0, .11111],
                    8476: [0, .69444, 0, 0],
                    8501: [0, .69444, 0, 0],
                    8592: [-.13313, .36687, 0, 0],
                    8593: [.19444, .69444, 0, 0],
                    8594: [-.13313, .36687, 0, 0],
                    8595: [.19444, .69444, 0, 0],
                    8596: [-.13313, .36687, 0, 0],
                    8597: [.25, .75, 0, 0],
                    8598: [.19444, .69444, 0, 0],
                    8599: [.19444, .69444, 0, 0],
                    8600: [.19444, .69444, 0, 0],
                    8601: [.19444, .69444, 0, 0],
                    8614: [.011, .511, 0, 0],
                    8617: [.011, .511, 0, 0],
                    8618: [.011, .511, 0, 0],
                    8636: [-.13313, .36687, 0, 0],
                    8637: [-.13313, .36687, 0, 0],
                    8640: [-.13313, .36687, 0, 0],
                    8641: [-.13313, .36687, 0, 0],
                    8652: [.011, .671, 0, 0],
                    8656: [-.13313, .36687, 0, 0],
                    8657: [.19444, .69444, 0, 0],
                    8658: [-.13313, .36687, 0, 0],
                    8659: [.19444, .69444, 0, 0],
                    8660: [-.13313, .36687, 0, 0],
                    8661: [.25, .75, 0, 0],
                    8704: [0, .69444, 0, 0],
                    8706: [0, .69444, .05556, .08334],
                    8707: [0, .69444, 0, 0],
                    8709: [.05556, .75, 0, 0],
                    8711: [0, .68333, 0, 0],
                    8712: [.0391, .5391, 0, 0],
                    8715: [.0391, .5391, 0, 0],
                    8722: [.08333, .58333, 0, 0],
                    8723: [.08333, .58333, 0, 0],
                    8725: [.25, .75, 0, 0],
                    8726: [.25, .75, 0, 0],
                    8727: [-.03472, .46528, 0, 0],
                    8728: [-.05555, .44445, 0, 0],
                    8729: [-.05555, .44445, 0, 0],
                    8730: [.2, .8, 0, 0],
                    8733: [0, .43056, 0, 0],
                    8734: [0, .43056, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8739: [.25, .75, 0, 0],
                    8741: [.25, .75, 0, 0],
                    8743: [0, .55556, 0, 0],
                    8744: [0, .55556, 0, 0],
                    8745: [0, .55556, 0, 0],
                    8746: [0, .55556, 0, 0],
                    8747: [.19444, .69444, .11111, 0],
                    8764: [-.13313, .36687, 0, 0],
                    8768: [.19444, .69444, 0, 0],
                    8771: [-.03625, .46375, 0, 0],
                    8773: [-.022, .589, 0, 0],
                    8776: [-.01688, .48312, 0, 0],
                    8781: [-.03625, .46375, 0, 0],
                    8784: [-.133, .67, 0, 0],
                    8800: [.215, .716, 0, 0],
                    8801: [-.03625, .46375, 0, 0],
                    8804: [.13597, .63597, 0, 0],
                    8805: [.13597, .63597, 0, 0],
                    8810: [.0391, .5391, 0, 0],
                    8811: [.0391, .5391, 0, 0],
                    8826: [.0391, .5391, 0, 0],
                    8827: [.0391, .5391, 0, 0],
                    8834: [.0391, .5391, 0, 0],
                    8835: [.0391, .5391, 0, 0],
                    8838: [.13597, .63597, 0, 0],
                    8839: [.13597, .63597, 0, 0],
                    8846: [0, .55556, 0, 0],
                    8849: [.13597, .63597, 0, 0],
                    8850: [.13597, .63597, 0, 0],
                    8851: [0, .55556, 0, 0],
                    8852: [0, .55556, 0, 0],
                    8853: [.08333, .58333, 0, 0],
                    8854: [.08333, .58333, 0, 0],
                    8855: [.08333, .58333, 0, 0],
                    8856: [.08333, .58333, 0, 0],
                    8857: [.08333, .58333, 0, 0],
                    8866: [0, .69444, 0, 0],
                    8867: [0, .69444, 0, 0],
                    8868: [0, .69444, 0, 0],
                    8869: [0, .69444, 0, 0],
                    8872: [.249, .75, 0, 0],
                    8900: [-.05555, .44445, 0, 0],
                    8901: [-.05555, .44445, 0, 0],
                    8902: [-.03472, .46528, 0, 0],
                    8904: [.005, .505, 0, 0],
                    8942: [.03, .9, 0, 0],
                    8943: [-.19, .31, 0, 0],
                    8945: [-.1, .82, 0, 0],
                    8968: [.25, .75, 0, 0],
                    8969: [.25, .75, 0, 0],
                    8970: [.25, .75, 0, 0],
                    8971: [.25, .75, 0, 0],
                    8994: [-.14236, .35764, 0, 0],
                    8995: [-.14236, .35764, 0, 0],
                    9136: [.244, .744, 0, 0],
                    9137: [.244, .744, 0, 0],
                    9651: [.19444, .69444, 0, 0],
                    9657: [-.03472, .46528, 0, 0],
                    9661: [.19444, .69444, 0, 0],
                    9667: [-.03472, .46528, 0, 0],
                    9711: [.19444, .69444, 0, 0],
                    9824: [.12963, .69444, 0, 0],
                    9825: [.12963, .69444, 0, 0],
                    9826: [.12963, .69444, 0, 0],
                    9827: [.12963, .69444, 0, 0],
                    9837: [0, .75, 0, 0],
                    9838: [.19444, .69444, 0, 0],
                    9839: [.19444, .69444, 0, 0],
                    10216: [.25, .75, 0, 0],
                    10217: [.25, .75, 0, 0],
                    10222: [.244, .744, 0, 0],
                    10223: [.244, .744, 0, 0],
                    10229: [.011, .511, 0, 0],
                    10230: [.011, .511, 0, 0],
                    10231: [.011, .511, 0, 0],
                    10232: [.024, .525, 0, 0],
                    10233: [.024, .525, 0, 0],
                    10234: [.024, .525, 0, 0],
                    10236: [.011, .511, 0, 0],
                    10815: [0, .68333, 0, 0],
                    10927: [.13597, .63597, 0, 0],
                    10928: [.13597, .63597, 0, 0]
                },
                "Math-BoldItalic": {
                    47: [.19444, .69444, 0, 0],
                    65: [0, .68611, 0, 0],
                    66: [0, .68611, .04835, 0],
                    67: [0, .68611, .06979, 0],
                    68: [0, .68611, .03194, 0],
                    69: [0, .68611, .05451, 0],
                    70: [0, .68611, .15972, 0],
                    71: [0, .68611, 0, 0],
                    72: [0, .68611, .08229, 0],
                    73: [0, .68611, .07778, 0],
                    74: [0, .68611, .10069, 0],
                    75: [0, .68611, .06979, 0],
                    76: [0, .68611, 0, 0],
                    77: [0, .68611, .11424, 0],
                    78: [0, .68611, .11424, 0],
                    79: [0, .68611, .03194, 0],
                    80: [0, .68611, .15972, 0],
                    81: [.19444, .68611, 0, 0],
                    82: [0, .68611, .00421, 0],
                    83: [0, .68611, .05382, 0],
                    84: [0, .68611, .15972, 0],
                    85: [0, .68611, .11424, 0],
                    86: [0, .68611, .25555, 0],
                    87: [0, .68611, .15972, 0],
                    88: [0, .68611, .07778, 0],
                    89: [0, .68611, .25555, 0],
                    90: [0, .68611, .06979, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [.19444, .69444, .11042, 0],
                    103: [.19444, .44444, .03704, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .69326, 0, 0],
                    106: [.19444, .69326, .0622, 0],
                    107: [0, .69444, .01852, 0],
                    108: [0, .69444, .0088, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, .03704, 0],
                    114: [0, .44444, .03194, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .63492, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .03704, 0],
                    119: [0, .44444, .02778, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .03704, 0],
                    122: [0, .44444, .04213, 0],
                    915: [0, .68611, .15972, 0],
                    916: [0, .68611, 0, 0],
                    920: [0, .68611, .03194, 0],
                    923: [0, .68611, 0, 0],
                    926: [0, .68611, .07458, 0],
                    928: [0, .68611, .08229, 0],
                    931: [0, .68611, .05451, 0],
                    933: [0, .68611, .15972, 0],
                    934: [0, .68611, 0, 0],
                    936: [0, .68611, .11653, 0],
                    937: [0, .68611, .04835, 0],
                    945: [0, .44444, 0, 0],
                    946: [.19444, .69444, .03403, 0],
                    947: [.19444, .44444, .06389, 0],
                    948: [0, .69444, .03819, 0],
                    949: [0, .44444, 0, 0],
                    950: [.19444, .69444, .06215, 0],
                    951: [.19444, .44444, .03704, 0],
                    952: [0, .69444, .03194, 0],
                    953: [0, .44444, 0, 0],
                    954: [0, .44444, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .44444, 0, 0],
                    957: [0, .44444, .06898, 0],
                    958: [.19444, .69444, .03021, 0],
                    959: [0, .44444, 0, 0],
                    960: [0, .44444, .03704, 0],
                    961: [.19444, .44444, 0, 0],
                    962: [.09722, .44444, .07917, 0],
                    963: [0, .44444, .03704, 0],
                    964: [0, .44444, .13472, 0],
                    965: [0, .44444, .03704, 0],
                    966: [.19444, .44444, 0, 0],
                    967: [.19444, .44444, 0, 0],
                    968: [.19444, .69444, .03704, 0],
                    969: [0, .44444, .03704, 0],
                    977: [0, .69444, 0, 0],
                    981: [.19444, .69444, 0, 0],
                    982: [0, .44444, .03194, 0],
                    1009: [.19444, .44444, 0, 0],
                    1013: [0, .44444, 0, 0]
                },
                "Math-Italic": {
                    47: [.19444, .69444, 0, 0],
                    65: [0, .68333, 0, .13889],
                    66: [0, .68333, .05017, .08334],
                    67: [0, .68333, .07153, .08334],
                    68: [0, .68333, .02778, .05556],
                    69: [0, .68333, .05764, .08334],
                    70: [0, .68333, .13889, .08334],
                    71: [0, .68333, 0, .08334],
                    72: [0, .68333, .08125, .05556],
                    73: [0, .68333, .07847, .11111],
                    74: [0, .68333, .09618, .16667],
                    75: [0, .68333, .07153, .05556],
                    76: [0, .68333, 0, .02778],
                    77: [0, .68333, .10903, .08334],
                    78: [0, .68333, .10903, .08334],
                    79: [0, .68333, .02778, .08334],
                    80: [0, .68333, .13889, .08334],
                    81: [.19444, .68333, 0, .08334],
                    82: [0, .68333, .00773, .08334],
                    83: [0, .68333, .05764, .08334],
                    84: [0, .68333, .13889, .08334],
                    85: [0, .68333, .10903, .02778],
                    86: [0, .68333, .22222, 0],
                    87: [0, .68333, .13889, 0],
                    88: [0, .68333, .07847, .08334],
                    89: [0, .68333, .22222, 0],
                    90: [0, .68333, .07153, .08334],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, .05556],
                    100: [0, .69444, 0, .16667],
                    101: [0, .43056, 0, .05556],
                    102: [.19444, .69444, .10764, .16667],
                    103: [.19444, .43056, .03588, .02778],
                    104: [0, .69444, 0, 0],
                    105: [0, .65952, 0, 0],
                    106: [.19444, .65952, .05724, 0],
                    107: [0, .69444, .03148, 0],
                    108: [0, .69444, .01968, .08334],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, .05556],
                    112: [.19444, .43056, 0, .08334],
                    113: [.19444, .43056, .03588, .08334],
                    114: [0, .43056, .02778, .05556],
                    115: [0, .43056, 0, .05556],
                    116: [0, .61508, 0, .08334],
                    117: [0, .43056, 0, .02778],
                    118: [0, .43056, .03588, .02778],
                    119: [0, .43056, .02691, .08334],
                    120: [0, .43056, 0, .02778],
                    121: [.19444, .43056, .03588, .05556],
                    122: [0, .43056, .04398, .05556],
                    915: [0, .68333, .13889, .08334],
                    916: [0, .68333, 0, .16667],
                    920: [0, .68333, .02778, .08334],
                    923: [0, .68333, 0, .16667],
                    926: [0, .68333, .07569, .08334],
                    928: [0, .68333, .08125, .05556],
                    931: [0, .68333, .05764, .08334],
                    933: [0, .68333, .13889, .05556],
                    934: [0, .68333, 0, .08334],
                    936: [0, .68333, .11, .05556],
                    937: [0, .68333, .05017, .08334],
                    945: [0, .43056, .0037, .02778],
                    946: [.19444, .69444, .05278, .08334],
                    947: [.19444, .43056, .05556, 0],
                    948: [0, .69444, .03785, .05556],
                    949: [0, .43056, 0, .08334],
                    950: [.19444, .69444, .07378, .08334],
                    951: [.19444, .43056, .03588, .05556],
                    952: [0, .69444, .02778, .08334],
                    953: [0, .43056, 0, .05556],
                    954: [0, .43056, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .43056, 0, .02778],
                    957: [0, .43056, .06366, .02778],
                    958: [.19444, .69444, .04601, .11111],
                    959: [0, .43056, 0, .05556],
                    960: [0, .43056, .03588, 0],
                    961: [.19444, .43056, 0, .08334],
                    962: [.09722, .43056, .07986, .08334],
                    963: [0, .43056, .03588, 0],
                    964: [0, .43056, .1132, .02778],
                    965: [0, .43056, .03588, .02778],
                    966: [.19444, .43056, 0, .08334],
                    967: [.19444, .43056, 0, .05556],
                    968: [.19444, .69444, .03588, .11111],
                    969: [0, .43056, .03588, 0],
                    977: [0, .69444, 0, .08334],
                    981: [.19444, .69444, 0, .08334],
                    982: [0, .43056, .02778, 0],
                    1009: [.19444, .43056, 0, .08334],
                    1013: [0, .43056, 0, .05556]
                },
                "Math-Regular": {
                    65: [0, .68333, 0, .13889],
                    66: [0, .68333, .05017, .08334],
                    67: [0, .68333, .07153, .08334],
                    68: [0, .68333, .02778, .05556],
                    69: [0, .68333, .05764, .08334],
                    70: [0, .68333, .13889, .08334],
                    71: [0, .68333, 0, .08334],
                    72: [0, .68333, .08125, .05556],
                    73: [0, .68333, .07847, .11111],
                    74: [0, .68333, .09618, .16667],
                    75: [0, .68333, .07153, .05556],
                    76: [0, .68333, 0, .02778],
                    77: [0, .68333, .10903, .08334],
                    78: [0, .68333, .10903, .08334],
                    79: [0, .68333, .02778, .08334],
                    80: [0, .68333, .13889, .08334],
                    81: [.19444, .68333, 0, .08334],
                    82: [0, .68333, .00773, .08334],
                    83: [0, .68333, .05764, .08334],
                    84: [0, .68333, .13889, .08334],
                    85: [0, .68333, .10903, .02778],
                    86: [0, .68333, .22222, 0],
                    87: [0, .68333, .13889, 0],
                    88: [0, .68333, .07847, .08334],
                    89: [0, .68333, .22222, 0],
                    90: [0, .68333, .07153, .08334],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, .05556],
                    100: [0, .69444, 0, .16667],
                    101: [0, .43056, 0, .05556],
                    102: [.19444, .69444, .10764, .16667],
                    103: [.19444, .43056, .03588, .02778],
                    104: [0, .69444, 0, 0],
                    105: [0, .65952, 0, 0],
                    106: [.19444, .65952, .05724, 0],
                    107: [0, .69444, .03148, 0],
                    108: [0, .69444, .01968, .08334],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, .05556],
                    112: [.19444, .43056, 0, .08334],
                    113: [.19444, .43056, .03588, .08334],
                    114: [0, .43056, .02778, .05556],
                    115: [0, .43056, 0, .05556],
                    116: [0, .61508, 0, .08334],
                    117: [0, .43056, 0, .02778],
                    118: [0, .43056, .03588, .02778],
                    119: [0, .43056, .02691, .08334],
                    120: [0, .43056, 0, .02778],
                    121: [.19444, .43056, .03588, .05556],
                    122: [0, .43056, .04398, .05556],
                    915: [0, .68333, .13889, .08334],
                    916: [0, .68333, 0, .16667],
                    920: [0, .68333, .02778, .08334],
                    923: [0, .68333, 0, .16667],
                    926: [0, .68333, .07569, .08334],
                    928: [0, .68333, .08125, .05556],
                    931: [0, .68333, .05764, .08334],
                    933: [0, .68333, .13889, .05556],
                    934: [0, .68333, 0, .08334],
                    936: [0, .68333, .11, .05556],
                    937: [0, .68333, .05017, .08334],
                    945: [0, .43056, .0037, .02778],
                    946: [.19444, .69444, .05278, .08334],
                    947: [.19444, .43056, .05556, 0],
                    948: [0, .69444, .03785, .05556],
                    949: [0, .43056, 0, .08334],
                    950: [.19444, .69444, .07378, .08334],
                    951: [.19444, .43056, .03588, .05556],
                    952: [0, .69444, .02778, .08334],
                    953: [0, .43056, 0, .05556],
                    954: [0, .43056, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .43056, 0, .02778],
                    957: [0, .43056, .06366, .02778],
                    958: [.19444, .69444, .04601, .11111],
                    959: [0, .43056, 0, .05556],
                    960: [0, .43056, .03588, 0],
                    961: [.19444, .43056, 0, .08334],
                    962: [.09722, .43056, .07986, .08334],
                    963: [0, .43056, .03588, 0],
                    964: [0, .43056, .1132, .02778],
                    965: [0, .43056, .03588, .02778],
                    966: [.19444, .43056, 0, .08334],
                    967: [.19444, .43056, 0, .05556],
                    968: [.19444, .69444, .03588, .11111],
                    969: [0, .43056, .03588, 0],
                    977: [0, .69444, 0, .08334],
                    981: [.19444, .69444, 0, .08334],
                    982: [0, .43056, .02778, 0],
                    1009: [.19444, .43056, 0, .08334],
                    1013: [0, .43056, 0, .05556]
                },
                "SansSerif-Regular": {
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.08333, .58333, 0, 0],
                    44: [.125, .08333, 0, 0],
                    45: [0, .44444, 0, 0],
                    46: [0, .08333, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .65556, 0, 0],
                    49: [0, .65556, 0, 0],
                    50: [0, .65556, 0, 0],
                    51: [0, .65556, 0, 0],
                    52: [0, .65556, 0, 0],
                    53: [0, .65556, 0, 0],
                    54: [0, .65556, 0, 0],
                    55: [0, .65556, 0, 0],
                    56: [0, .65556, 0, 0],
                    57: [0, .65556, 0, 0],
                    58: [0, .44444, 0, 0],
                    59: [.125, .44444, 0, 0],
                    61: [-.13, .37, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .69444, 0, 0],
                    66: [0, .69444, 0, 0],
                    67: [0, .69444, 0, 0],
                    68: [0, .69444, 0, 0],
                    69: [0, .69444, 0, 0],
                    70: [0, .69444, 0, 0],
                    71: [0, .69444, 0, 0],
                    72: [0, .69444, 0, 0],
                    73: [0, .69444, 0, 0],
                    74: [0, .69444, 0, 0],
                    75: [0, .69444, 0, 0],
                    76: [0, .69444, 0, 0],
                    77: [0, .69444, 0, 0],
                    78: [0, .69444, 0, 0],
                    79: [0, .69444, 0, 0],
                    80: [0, .69444, 0, 0],
                    81: [.125, .69444, 0, 0],
                    82: [0, .69444, 0, 0],
                    83: [0, .69444, 0, 0],
                    84: [0, .69444, 0, 0],
                    85: [0, .69444, 0, 0],
                    86: [0, .69444, .01389, 0],
                    87: [0, .69444, .01389, 0],
                    88: [0, .69444, 0, 0],
                    89: [0, .69444, .025, 0],
                    90: [0, .69444, 0, 0],
                    91: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.35, .09444, .02778, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [0, .69444, .06944, 0],
                    103: [.19444, .44444, .01389, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .67937, 0, 0],
                    106: [.19444, .67937, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, 0, 0],
                    114: [0, .44444, .01389, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .57143, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .01389, 0],
                    119: [0, .44444, .01389, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .01389, 0],
                    122: [0, .44444, 0, 0],
                    126: [.35, .32659, 0, 0],
                    305: [0, .44444, 0, 0],
                    567: [.19444, .44444, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .67659, 0, 0],
                    772: [0, .60889, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .67937, 0, 0],
                    776: [0, .67937, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .63194, 0, 0],
                    915: [0, .69444, 0, 0],
                    916: [0, .69444, 0, 0],
                    920: [0, .69444, 0, 0],
                    923: [0, .69444, 0, 0],
                    926: [0, .69444, 0, 0],
                    928: [0, .69444, 0, 0],
                    931: [0, .69444, 0, 0],
                    933: [0, .69444, 0, 0],
                    934: [0, .69444, 0, 0],
                    936: [0, .69444, 0, 0],
                    937: [0, .69444, 0, 0],
                    8211: [0, .44444, .02778, 0],
                    8212: [0, .44444, .02778, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0]
                },
                "Script-Regular": {
                    65: [0, .7, .22925, 0],
                    66: [0, .7, .04087, 0],
                    67: [0, .7, .1689, 0],
                    68: [0, .7, .09371, 0],
                    69: [0, .7, .18583, 0],
                    70: [0, .7, .13634, 0],
                    71: [0, .7, .17322, 0],
                    72: [0, .7, .29694, 0],
                    73: [0, .7, .19189, 0],
                    74: [.27778, .7, .19189, 0],
                    75: [0, .7, .31259, 0],
                    76: [0, .7, .19189, 0],
                    77: [0, .7, .15981, 0],
                    78: [0, .7, .3525, 0],
                    79: [0, .7, .08078, 0],
                    80: [0, .7, .08078, 0],
                    81: [0, .7, .03305, 0],
                    82: [0, .7, .06259, 0],
                    83: [0, .7, .19189, 0],
                    84: [0, .7, .29087, 0],
                    85: [0, .7, .25815, 0],
                    86: [0, .7, .27523, 0],
                    87: [0, .7, .27523, 0],
                    88: [0, .7, .26006, 0],
                    89: [0, .7, .2939, 0],
                    90: [0, .7, .24037, 0]
                },
                "Size1-Regular": {
                    40: [.35001, .85, 0, 0],
                    41: [.35001, .85, 0, 0],
                    47: [.35001, .85, 0, 0],
                    91: [.35001, .85, 0, 0],
                    92: [.35001, .85, 0, 0],
                    93: [.35001, .85, 0, 0],
                    123: [.35001, .85, 0, 0],
                    125: [.35001, .85, 0, 0],
                    710: [0, .72222, 0, 0],
                    732: [0, .72222, 0, 0],
                    770: [0, .72222, 0, 0],
                    771: [0, .72222, 0, 0],
                    8214: [-99e-5, .601, 0, 0],
                    8593: [1e-5, .6, 0, 0],
                    8595: [1e-5, .6, 0, 0],
                    8657: [1e-5, .6, 0, 0],
                    8659: [1e-5, .6, 0, 0],
                    8719: [.25001, .75, 0, 0],
                    8720: [.25001, .75, 0, 0],
                    8721: [.25001, .75, 0, 0],
                    8730: [.35001, .85, 0, 0],
                    8739: [-.00599, .606, 0, 0],
                    8741: [-.00599, .606, 0, 0],
                    8747: [.30612, .805, .19445, 0],
                    8748: [.306, .805, .19445, 0],
                    8749: [.306, .805, .19445, 0],
                    8750: [.30612, .805, .19445, 0],
                    8896: [.25001, .75, 0, 0],
                    8897: [.25001, .75, 0, 0],
                    8898: [.25001, .75, 0, 0],
                    8899: [.25001, .75, 0, 0],
                    8968: [.35001, .85, 0, 0],
                    8969: [.35001, .85, 0, 0],
                    8970: [.35001, .85, 0, 0],
                    8971: [.35001, .85, 0, 0],
                    9168: [-99e-5, .601, 0, 0],
                    10216: [.35001, .85, 0, 0],
                    10217: [.35001, .85, 0, 0],
                    10752: [.25001, .75, 0, 0],
                    10753: [.25001, .75, 0, 0],
                    10754: [.25001, .75, 0, 0],
                    10756: [.25001, .75, 0, 0],
                    10758: [.25001, .75, 0, 0]
                },
                "Size2-Regular": {
                    40: [.65002, 1.15, 0, 0],
                    41: [.65002, 1.15, 0, 0],
                    47: [.65002, 1.15, 0, 0],
                    91: [.65002, 1.15, 0, 0],
                    92: [.65002, 1.15, 0, 0],
                    93: [.65002, 1.15, 0, 0],
                    123: [.65002, 1.15, 0, 0],
                    125: [.65002, 1.15, 0, 0],
                    710: [0, .75, 0, 0],
                    732: [0, .75, 0, 0],
                    770: [0, .75, 0, 0],
                    771: [0, .75, 0, 0],
                    8719: [.55001, 1.05, 0, 0],
                    8720: [.55001, 1.05, 0, 0],
                    8721: [.55001, 1.05, 0, 0],
                    8730: [.65002, 1.15, 0, 0],
                    8747: [.86225, 1.36, .44445, 0],
                    8748: [.862, 1.36, .44445, 0],
                    8749: [.862, 1.36, .44445, 0],
                    8750: [.86225, 1.36, .44445, 0],
                    8896: [.55001, 1.05, 0, 0],
                    8897: [.55001, 1.05, 0, 0],
                    8898: [.55001, 1.05, 0, 0],
                    8899: [.55001, 1.05, 0, 0],
                    8968: [.65002, 1.15, 0, 0],
                    8969: [.65002, 1.15, 0, 0],
                    8970: [.65002, 1.15, 0, 0],
                    8971: [.65002, 1.15, 0, 0],
                    10216: [.65002, 1.15, 0, 0],
                    10217: [.65002, 1.15, 0, 0],
                    10752: [.55001, 1.05, 0, 0],
                    10753: [.55001, 1.05, 0, 0],
                    10754: [.55001, 1.05, 0, 0],
                    10756: [.55001, 1.05, 0, 0],
                    10758: [.55001, 1.05, 0, 0]
                },
                "Size3-Regular": {
                    40: [.95003, 1.45, 0, 0],
                    41: [.95003, 1.45, 0, 0],
                    47: [.95003, 1.45, 0, 0],
                    91: [.95003, 1.45, 0, 0],
                    92: [.95003, 1.45, 0, 0],
                    93: [.95003, 1.45, 0, 0],
                    123: [.95003, 1.45, 0, 0],
                    125: [.95003, 1.45, 0, 0],
                    710: [0, .75, 0, 0],
                    732: [0, .75, 0, 0],
                    770: [0, .75, 0, 0],
                    771: [0, .75, 0, 0],
                    8730: [.95003, 1.45, 0, 0],
                    8968: [.95003, 1.45, 0, 0],
                    8969: [.95003, 1.45, 0, 0],
                    8970: [.95003, 1.45, 0, 0],
                    8971: [.95003, 1.45, 0, 0],
                    10216: [.95003, 1.45, 0, 0],
                    10217: [.95003, 1.45, 0, 0]
                },
                "Size4-Regular": {
                    40: [1.25003, 1.75, 0, 0],
                    41: [1.25003, 1.75, 0, 0],
                    47: [1.25003, 1.75, 0, 0],
                    91: [1.25003, 1.75, 0, 0],
                    92: [1.25003, 1.75, 0, 0],
                    93: [1.25003, 1.75, 0, 0],
                    123: [1.25003, 1.75, 0, 0],
                    125: [1.25003, 1.75, 0, 0],
                    710: [0, .825, 0, 0],
                    732: [0, .825, 0, 0],
                    770: [0, .825, 0, 0],
                    771: [0, .825, 0, 0],
                    8730: [1.25003, 1.75, 0, 0],
                    8968: [1.25003, 1.75, 0, 0],
                    8969: [1.25003, 1.75, 0, 0],
                    8970: [1.25003, 1.75, 0, 0],
                    8971: [1.25003, 1.75, 0, 0],
                    9115: [.64502, 1.155, 0, 0],
                    9116: [1e-5, .6, 0, 0],
                    9117: [.64502, 1.155, 0, 0],
                    9118: [.64502, 1.155, 0, 0],
                    9119: [1e-5, .6, 0, 0],
                    9120: [.64502, 1.155, 0, 0],
                    9121: [.64502, 1.155, 0, 0],
                    9122: [-99e-5, .601, 0, 0],
                    9123: [.64502, 1.155, 0, 0],
                    9124: [.64502, 1.155, 0, 0],
                    9125: [-99e-5, .601, 0, 0],
                    9126: [.64502, 1.155, 0, 0],
                    9127: [1e-5, .9, 0, 0],
                    9128: [.65002, 1.15, 0, 0],
                    9129: [.90001, 0, 0, 0],
                    9130: [0, .3, 0, 0],
                    9131: [1e-5, .9, 0, 0],
                    9132: [.65002, 1.15, 0, 0],
                    9133: [.90001, 0, 0, 0],
                    9143: [.88502, .915, 0, 0],
                    10216: [1.25003, 1.75, 0, 0],
                    10217: [1.25003, 1.75, 0, 0],
                    57344: [-.00499, .605, 0, 0],
                    57345: [-.00499, .605, 0, 0],
                    57680: [0, .12, 0, 0],
                    57681: [0, .12, 0, 0],
                    57682: [0, .12, 0, 0],
                    57683: [0, .12, 0, 0]
                },
                "Typewriter-Regular": {
                    33: [0, .61111, 0, 0],
                    34: [0, .61111, 0, 0],
                    35: [0, .61111, 0, 0],
                    36: [.08333, .69444, 0, 0],
                    37: [.08333, .69444, 0, 0],
                    38: [0, .61111, 0, 0],
                    39: [0, .61111, 0, 0],
                    40: [.08333, .69444, 0, 0],
                    41: [.08333, .69444, 0, 0],
                    42: [0, .52083, 0, 0],
                    43: [-.08056, .53055, 0, 0],
                    44: [.13889, .125, 0, 0],
                    45: [-.08056, .53055, 0, 0],
                    46: [0, .125, 0, 0],
                    47: [.08333, .69444, 0, 0],
                    48: [0, .61111, 0, 0],
                    49: [0, .61111, 0, 0],
                    50: [0, .61111, 0, 0],
                    51: [0, .61111, 0, 0],
                    52: [0, .61111, 0, 0],
                    53: [0, .61111, 0, 0],
                    54: [0, .61111, 0, 0],
                    55: [0, .61111, 0, 0],
                    56: [0, .61111, 0, 0],
                    57: [0, .61111, 0, 0],
                    58: [0, .43056, 0, 0],
                    59: [.13889, .43056, 0, 0],
                    60: [-.05556, .55556, 0, 0],
                    61: [-.19549, .41562, 0, 0],
                    62: [-.05556, .55556, 0, 0],
                    63: [0, .61111, 0, 0],
                    64: [0, .61111, 0, 0],
                    65: [0, .61111, 0, 0],
                    66: [0, .61111, 0, 0],
                    67: [0, .61111, 0, 0],
                    68: [0, .61111, 0, 0],
                    69: [0, .61111, 0, 0],
                    70: [0, .61111, 0, 0],
                    71: [0, .61111, 0, 0],
                    72: [0, .61111, 0, 0],
                    73: [0, .61111, 0, 0],
                    74: [0, .61111, 0, 0],
                    75: [0, .61111, 0, 0],
                    76: [0, .61111, 0, 0],
                    77: [0, .61111, 0, 0],
                    78: [0, .61111, 0, 0],
                    79: [0, .61111, 0, 0],
                    80: [0, .61111, 0, 0],
                    81: [.13889, .61111, 0, 0],
                    82: [0, .61111, 0, 0],
                    83: [0, .61111, 0, 0],
                    84: [0, .61111, 0, 0],
                    85: [0, .61111, 0, 0],
                    86: [0, .61111, 0, 0],
                    87: [0, .61111, 0, 0],
                    88: [0, .61111, 0, 0],
                    89: [0, .61111, 0, 0],
                    90: [0, .61111, 0, 0],
                    91: [.08333, .69444, 0, 0],
                    92: [.08333, .69444, 0, 0],
                    93: [.08333, .69444, 0, 0],
                    94: [0, .61111, 0, 0],
                    95: [.09514, 0, 0, 0],
                    96: [0, .61111, 0, 0],
                    97: [0, .43056, 0, 0],
                    98: [0, .61111, 0, 0],
                    99: [0, .43056, 0, 0],
                    100: [0, .61111, 0, 0],
                    101: [0, .43056, 0, 0],
                    102: [0, .61111, 0, 0],
                    103: [.22222, .43056, 0, 0],
                    104: [0, .61111, 0, 0],
                    105: [0, .61111, 0, 0],
                    106: [.22222, .61111, 0, 0],
                    107: [0, .61111, 0, 0],
                    108: [0, .61111, 0, 0],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, 0],
                    112: [.22222, .43056, 0, 0],
                    113: [.22222, .43056, 0, 0],
                    114: [0, .43056, 0, 0],
                    115: [0, .43056, 0, 0],
                    116: [0, .55358, 0, 0],
                    117: [0, .43056, 0, 0],
                    118: [0, .43056, 0, 0],
                    119: [0, .43056, 0, 0],
                    120: [0, .43056, 0, 0],
                    121: [.22222, .43056, 0, 0],
                    122: [0, .43056, 0, 0],
                    123: [.08333, .69444, 0, 0],
                    124: [.08333, .69444, 0, 0],
                    125: [.08333, .69444, 0, 0],
                    126: [0, .61111, 0, 0],
                    127: [0, .61111, 0, 0],
                    305: [0, .43056, 0, 0],
                    567: [.22222, .43056, 0, 0],
                    768: [0, .61111, 0, 0],
                    769: [0, .61111, 0, 0],
                    770: [0, .61111, 0, 0],
                    771: [0, .61111, 0, 0],
                    772: [0, .56555, 0, 0],
                    774: [0, .61111, 0, 0],
                    776: [0, .61111, 0, 0],
                    778: [0, .61111, 0, 0],
                    780: [0, .56597, 0, 0],
                    915: [0, .61111, 0, 0],
                    916: [0, .61111, 0, 0],
                    920: [0, .61111, 0, 0],
                    923: [0, .61111, 0, 0],
                    926: [0, .61111, 0, 0],
                    928: [0, .61111, 0, 0],
                    931: [0, .61111, 0, 0],
                    933: [0, .61111, 0, 0],
                    934: [0, .61111, 0, 0],
                    936: [0, .61111, 0, 0],
                    937: [0, .61111, 0, 0],
                    2018: [0, .61111, 0, 0],
                    2019: [0, .61111, 0, 0],
                    8242: [0, .61111, 0, 0]
                }
            }
        }, {}],
        43: [function (e, t, r) {
            "use strict";
            var a = e("./utils");
            var n = u(a);
            var i = e("./ParseError");
            var l = u(i);
            var s = e("./ParseNode");
            var o = u(s);

            function u(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function c(e, r, a) {
                if (typeof e === "string") {
                    e = [e]
                }
                if (typeof r === "number") {
                    r = {numArgs: r}
                }
                var n = {
                    numArgs: r.numArgs,
                    argTypes: r.argTypes,
                    greediness: r.greediness === undefined ? 1 : r.greediness,
                    allowedInText: !!r.allowedInText,
                    allowedInMath: r.allowedInMath,
                    numOptionalArgs: r.numOptionalArgs || 0,
                    infix: !!r.infix,
                    handler: a
                };
                for (var i = 0; i < e.length; ++i) {
                    t.exports[e[i]] = n
                }
            }

            var f = function e(t) {
                if (t.type === "ordgroup") {
                    return t.value
                } else {
                    return [t]
                }
            };
            c("\\sqrt", {numArgs: 1, numOptionalArgs: 1}, function (e, t) {
                var r = t[0];
                var a = t[1];
                return {type: "sqrt", body: a, index: r}
            });
            var h = {
                "\\text": undefined,
                "\\textrm": "mathrm",
                "\\textsf": "mathsf",
                "\\texttt": "mathtt",
                "\\textnormal": "mathrm",
                "\\textbf": "mathbf",
                "\\textit": "textit"
            };
            c(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], {
                numArgs: 1, argTypes: ["text"], greediness: 2, allowedInText: true
            }, function (e, t) {
                var r = t[0];
                return {type: "text", body: f(r), style: h[e.funcName]}
            });
            c("\\textcolor", {
                numArgs: 2,
                allowedInText: true,
                greediness: 3,
                argTypes: ["color", "original"]
            }, function (e, t) {
                var r = t[0];
                var a = t[1];
                return {type: "color", color: r.value, value: f(a)}
            });
            c("\\color", {numArgs: 1, allowedInText: true, greediness: 3, argTypes: ["color"]}, null);
            c("\\overline", {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "overline", body: r}
            });
            c("\\underline", {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "underline", body: r}
            });
            c("\\rule", {numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"]}, function (e, t) {
                var r = t[0];
                var a = t[1];
                var n = t[2];
                return {type: "rule", shift: r && r.value, width: a.value, height: n.value}
            });
            c(["\\kern", "\\mkern"], {numArgs: 1, argTypes: ["size"]}, function (e, t) {
                return {type: "kern", dimension: t[0].value}
            });
            c("\\KaTeX", {numArgs: 0}, function (e) {
                return {type: "katex"}
            });
            c("\\phantom", {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "phantom", value: f(r)}
            });
            c(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "mclass", mclass: "m" + e.funcName.substr(5), value: f(r)}
            });
            c("\\stackrel", {numArgs: 2}, function (e, t) {
                var r = t[0];
                var a = t[1];
                var n = new o.default("op", {
                    type: "op",
                    limits: true,
                    alwaysHandleSupSub: true,
                    symbol: false,
                    value: f(a)
                }, a.mode);
                var i = new o.default("supsub", {base: n, sup: r, sub: null}, r.mode);
                return {type: "mclass", mclass: "mrel", value: [i]}
            });
            c("\\bmod", {numArgs: 0}, function (e, t) {
                return {type: "mod", modType: "bmod", value: null}
            });
            c(["\\pod", "\\pmod", "\\mod"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "mod", modType: e.funcName.substr(1), value: f(r)}
            });
            var v = {
                "\\bigl": {mclass: "mopen", size: 1},
                "\\Bigl": {mclass: "mopen", size: 2},
                "\\biggl": {mclass: "mopen", size: 3},
                "\\Biggl": {mclass: "mopen", size: 4},
                "\\bigr": {mclass: "mclose", size: 1},
                "\\Bigr": {mclass: "mclose", size: 2},
                "\\biggr": {mclass: "mclose", size: 3},
                "\\Biggr": {mclass: "mclose", size: 4},
                "\\bigm": {mclass: "mrel", size: 1},
                "\\Bigm": {mclass: "mrel", size: 2},
                "\\biggm": {mclass: "mrel", size: 3},
                "\\Biggm": {mclass: "mrel", size: 4},
                "\\big": {mclass: "mord", size: 1},
                "\\Big": {mclass: "mord", size: 2},
                "\\bigg": {mclass: "mord", size: 3},
                "\\Bigg": {mclass: "mord", size: 4}
            };
            var d = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
            var p = {"\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak"};
            c(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], {
                numArgs: 1,
                allowedInText: true,
                greediness: 3
            }, function (e, t) {
                var r = t[0];
                return {type: "color", color: "katex-" + e.funcName.slice(1), value: f(r)}
            });
            c(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {numArgs: 0}, function (e) {
                return {type: "op", limits: false, symbol: false, body: e.funcName}
            });
            c(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], {numArgs: 0}, function (e) {
                return {type: "op", limits: true, symbol: false, body: e.funcName}
            });
            c(["\\int", "\\iint", "\\iiint", "\\oint"], {numArgs: 0}, function (e) {
                return {type: "op", limits: false, symbol: true, body: e.funcName}
            });
            c(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], {numArgs: 0}, function (e) {
                return {type: "op", limits: true, symbol: true, body: e.funcName}
            });
            c("\\mathop", {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "op", limits: false, symbol: false, value: f(r)}
            });
            c(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"], {
                numArgs: 2,
                greediness: 2
            }, function (e, t) {
                var r = t[0];
                var a = t[1];
                var n = void 0;
                var i = null;
                var l = null;
                var s = "auto";
                switch (e.funcName) {
                    case"\\dfrac":
                    case"\\frac":
                    case"\\tfrac":
                        n = true;
                        break;
                    case"\\\\atopfrac":
                        n = false;
                        break;
                    case"\\dbinom":
                    case"\\binom":
                    case"\\tbinom":
                        n = false;
                        i = "(";
                        l = ")";
                        break;
                    default:
                        throw new Error("Unrecognized genfrac command")
                }
                switch (e.funcName) {
                    case"\\dfrac":
                    case"\\dbinom":
                        s = "display";
                        break;
                    case"\\tfrac":
                    case"\\tbinom":
                        s = "text";
                        break
                }
                return {type: "genfrac", numer: r, denom: a, hasBarLine: n, leftDelim: i, rightDelim: l, size: s}
            });
            c(["\\llap", "\\rlap"], {numArgs: 1, allowedInText: true}, function (e, t) {
                var r = t[0];
                return {type: e.funcName.slice(1), body: r}
            });
            var m = function e(t, r) {
                if (n.default.contains(d, t.value)) {
                    return t
                } else {
                    throw new l.default("Invalid delimiter: '" + t.value + "' after '" + r.funcName + "'", t)
                }
            };
            c(["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], {numArgs: 1}, function (e, t) {
                var r = m(t[0], e);
                return {type: "delimsizing", size: v[e.funcName].size, mclass: v[e.funcName].mclass, value: r.value}
            });
            c(["\\left", "\\right"], {numArgs: 1}, function (e, t) {
                var r = m(t[0], e);
                return {type: "leftright", value: r.value}
            });
            c("\\middle", {numArgs: 1}, function (e, t) {
                var r = m(t[0], e);
                if (!e.parser.leftrightDepth) {
                    throw new l.default("\\middle without preceding \\left", r)
                }
                return {type: "middle", value: r.value}
            });
            c(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], 0, null);
            c(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], 0, null);
            c(["\\rm", "\\sf", "\\tt", "\\bf", "\\it"], 0, null);
            c(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], {
                numArgs: 1,
                greediness: 2
            }, function (e, t) {
                var r = t[0];
                var a = e.funcName;
                if (a in p) {
                    a = p[a]
                }
                return {type: "font", font: a.slice(1), body: r}
            });
            c(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                var a = !n.default.contains(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], e.funcName);
                var i = !a || n.default.contains(["\\widehat", "\\widetilde"], e.funcName);
                return {type: "accent", label: e.funcName, isStretchy: a, isShifty: i, value: f(r), base: r}
            });
            c(["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"], {
                numArgs: 1,
                allowedInText: true,
                allowedInMath: false
            }, function (e, t) {
                var r = t[0];
                return {type: "accent", label: e.funcName, isStretchy: false, isShifty: true, value: f(r), base: r}
            });
            c(["\\overbrace", "\\underbrace"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "horizBrace", label: e.funcName, isOver: /^\\over/.test(e.funcName), base: r}
            });
            c(["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\undertilde"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "accentUnder", label: e.funcName, value: f(r), body: r}
            });
            c(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xLongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xLongequal", "\\xtofrom"], {
                numArgs: 1,
                numOptionalArgs: 1
            }, function (e, t) {
                var r = t[0];
                var a = t[1];
                return {type: "xArrow", label: e.funcName, body: a, below: r}
            });
            c(["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"], {numArgs: 1}, function (e, t) {
                var r = t[0];
                return {type: "enclose", label: e.funcName, body: r}
            });
            c(["\\over", "\\choose", "\\atop"], {numArgs: 0, infix: true}, function (e) {
                var t = void 0;
                switch (e.funcName) {
                    case"\\over":
                        t = "\\frac";
                        break;
                    case"\\choose":
                        t = "\\binom";
                        break;
                    case"\\atop":
                        t = "\\\\atopfrac";
                        break;
                    default:
                        throw new Error("Unrecognized infix genfrac command")
                }
                return {type: "infix", replaceWith: t, token: e.token}
            });
            c(["\\\\", "\\cr"], {numArgs: 0, numOptionalArgs: 1, argTypes: ["size"]}, function (e, t) {
                var r = t[0];
                return {type: "cr", size: r}
            });
            c(["\\begin", "\\end"], {numArgs: 1, argTypes: ["text"]}, function (e, t) {
                var r = t[0];
                if (r.type !== "ordgroup") {
                    throw new l.default("Invalid environment name", r)
                }
                var a = "";
                for (var n = 0; n < r.value.length; ++n) {
                    a += r.value[n].value
                }
                return {type: "environment", name: a, nameGroup: r}
            })
        }, {"./ParseError": 29, "./ParseNode": 30, "./utils": 51}],
        44: [function (e, t, r) {
            "use strict";

            function a(e, r) {
                t.exports[e] = r
            }

            a("\\bgroup", "{");
            a("\\egroup", "}");
            a("\\begingroup", "{");
            a("\\endgroup", "}");
            a("\\mkern", "\\kern");
            a("\\overset", "\\mathop{#2}\\limits^{#1}");
            a("\\underset", "\\mathop{#2}\\limits_{#1}");
            a("\\boxed", "\\fbox{\\displaystyle{#1}}");
            a("\\iff", "\\;\\Longleftrightarrow\\;");
            a("\\implies", "\\;\\Longrightarrow\\;");
            a("\\impliedby", "\\;\\Longleftarrow\\;");
            a("\\ordinarycolon", ":");
            a("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
            a("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon");
            a("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}=");
            a("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}=");
            a("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");
            a("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");
            a("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon");
            a("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon");
            a("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon");
            a("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon");
            a("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx");
            a("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx");
            a("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim");
            a("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim");
            a("\\ratio", "\\vcentcolon");
            a("\\coloncolon", "\\dblcolon");
            a("\\colonequals", "\\coloneqq");
            a("\\coloncolonequals", "\\Coloneqq");
            a("\\equalscolon", "\\eqqcolon");
            a("\\equalscoloncolon", "\\Eqqcolon");
            a("\\colonminus", "\\coloneq");
            a("\\coloncolonminus", "\\Coloneq");
            a("\\minuscolon", "\\eqcolon");
            a("\\minuscoloncolon", "\\Eqcolon");
            a("\\coloncolonapprox", "\\Colonapprox");
            a("\\coloncolonsim", "\\Colonsim");
            a("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon");
            a("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon");
            a("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon");
            a("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon")
        }, {}],
        45: [function (e, t, r) {
            "use strict";
            var a = e("babel-runtime/helpers/classCallCheck");
            var n = u(a);
            var i = e("babel-runtime/helpers/createClass");
            var l = u(i);
            var s = e("./utils");
            var o = u(s);

            function u(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var c = function () {
                function e(t, r) {
                    (0, n.default)(this, e);
                    this.type = t;
                    this.attributes = {};
                    this.children = r || []
                }

                (0, l.default)(e, [{
                    key: "setAttribute", value: function e(t, r) {
                        this.attributes[t] = r
                    }
                }, {
                    key: "toNode", value: function e() {
                        var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                        for (var r in this.attributes) {
                            if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
                                t.setAttribute(r, this.attributes[r])
                            }
                        }
                        for (var a = 0; a < this.children.length; a++) {
                            t.appendChild(this.children[a].toNode())
                        }
                        return t
                    }
                }, {
                    key: "toMarkup", value: function e() {
                        var t = "<" + this.type;
                        for (var r in this.attributes) {
                            if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
                                t += " " + r + '="';
                                t += o.default.escape(this.attributes[r]);
                                t += '"'
                            }
                        }
                        t += ">";
                        for (var a = 0; a < this.children.length; a++) {
                            t += this.children[a].toMarkup()
                        }
                        t += "</" + this.type + ">";
                        return t
                    }
                }]);
                return e
            }();
            var f = function () {
                function e(t) {
                    (0, n.default)(this, e);
                    this.text = t
                }

                (0, l.default)(e, [{
                    key: "toNode", value: function e() {
                        return document.createTextNode(this.text)
                    }
                }, {
                    key: "toMarkup", value: function e() {
                        return o.default.escape(this.text)
                    }
                }]);
                return e
            }();
            t.exports = {MathNode: c, TextNode: f}
        }, {"./utils": 51, "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5}],
        46: [function (e, t, r) {
            "use strict";
            var a = e("./Parser");
            var n = i(a);

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var l = function e(t, r) {
                if (!(typeof t === "string" || t instanceof String)) {
                    throw new TypeError("KaTeX can only parse string typed expression")
                }
                var a = new n.default(t, r);
                return a.parse()
            };
            t.exports = l
        }, {"./Parser": 31}],
        47: [function (e, t, r) {
            "use strict";
            var a = e("./buildCommon");
            var n = e("./mathMLTree");
            var i = e("./utils");
            var l = {
                widehat: "^",
                widetilde: "~",
                undertilde: "~",
                overleftarrow: "\u2190",
                underleftarrow: "\u2190",
                xleftarrow: "\u2190",
                overrightarrow: "\u2192",
                underrightarrow: "\u2192",
                xrightarrow: "\u2192",
                underbrace: "\u23b5",
                overbrace: "\u23de",
                overleftrightarrow: "\u2194",
                underleftrightarrow: "\u2194",
                xleftrightarrow: "\u2194",
                Overrightarrow: "\u21d2",
                xRightarrow: "\u21d2",
                overleftharpoon: "\u21bc",
                xleftharpoonup: "\u21bc",
                overrightharpoon: "\u21c0",
                xrightharpoonup: "\u21c0",
                xLeftarrow: "\u21d0",
                xLeftrightarrow: "\u21d4",
                xhookleftarrow: "\u21a9",
                xhookrightarrow: "\u21aa",
                xmapsto: "\u21a6",
                xrightharpoondown: "\u21c1",
                xleftharpoondown: "\u21bd",
                xrightleftharpoons: "\u21cc",
                xleftrightharpoons: "\u21cb",
                xtwoheadleftarrow: "\u219e",
                xtwoheadrightarrow: "\u21a0",
                xLongequal: "=",
                xtofrom: "\u21c4"
            };
            var s = function e(t) {
                var r = new n.MathNode("mo", [new n.TextNode(l[t.substr(1)])]);
                r.setAttribute("stretchy", "true");
                return r
            };
            var o = {
                overleftarrow: [.522, 0, "leftarrow", .5],
                underleftarrow: [.522, 0, "leftarrow", .5],
                xleftarrow: [.261, .261, "leftarrow", .783],
                overrightarrow: [.522, 0, "rightarrow", .5],
                underrightarrow: [.522, 0, "rightarrow", .5],
                xrightarrow: [.261, .261, "rightarrow", .783],
                overbrace: [.548, 0, "overbrace", 1.6],
                underbrace: [.548, 0, "underbrace", 1.6],
                overleftrightarrow: [.522, 0, "leftrightarrow", .5],
                underleftrightarrow: [.522, 0, "leftrightarrow", .5],
                xleftrightarrow: [.261, .261, "leftrightarrow", .783],
                Overrightarrow: [.56, 0, "doublerightarrow", .5],
                xLeftarrow: [.28, .28, "doubleleftarrow", .783],
                xRightarrow: [.28, .28, "doublerightarrow", .783],
                xLeftrightarrow: [.28, .28, "doubleleftrightarrow", .955],
                overleftharpoon: [.522, 0, "leftharpoon", .5],
                overrightharpoon: [.522, 0, "rightharpoon", .5],
                xleftharpoonup: [.261, .261, "leftharpoon", .783],
                xrightharpoonup: [.261, .261, "rightharpoon", .783],
                xhookleftarrow: [.261, .261, "hookleftarrow", .87],
                xhookrightarrow: [.261, .261, "hookrightarrow", .87],
                overlinesegment: [.414, 0, "linesegment", .5],
                underlinesegment: [.414, 0, "linesegment", .5],
                xmapsto: [.261, .261, "mapsto", .783],
                xrightharpoondown: [.261, .261, "rightharpoondown", .783],
                xleftharpoondown: [.261, .261, "leftharpoondown", .783],
                xrightleftharpoons: [.358, .358, "rightleftharpoons", .716],
                xleftrightharpoons: [.358, .358, "leftrightharpoons", .716],
                overgroup: [.342, 0, "overgroup", .87],
                undergroup: [.342, 0, "undergroup", .87],
                xtwoheadleftarrow: [.167, .167, "twoheadleftarrow", .86],
                xtwoheadrightarrow: [.167, .167, "twoheadrightarrow", .86],
                xLongequal: [.167, .167, "longequal", .5],
                xtofrom: [.264, .264, "tofrom", .86]
            };
            var u = {
                doubleleftarrow: "<path d='M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z'/>",
                doublerightarrow: "<path d='M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z'/>",
                leftarrow: "<path d='M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z'/>",
                rightarrow: "<path d='M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z'/>"
            };
            var c = {
                bcancel: "<line x1='0' y1='0' x2='100%' y2='100%' stroke-width='0.046em'/>",
                cancel: "<line x1='0' y1='100%' x2='100%' y2='0' stroke-width='0.046em'/>",
                doubleleftarrow: "><svg viewBox='0 0 400000 549'\npreserveAspectRatio='xMinYMin slice'>" + u["doubleleftarrow"] + "</svg>",
                doubleleftrightarrow: "><svg width='50.1%' viewBox='0 0 400000 549'\npreserveAspectRatio='xMinYMin slice'>" + u["doubleleftarrow"] + "</svg>\n<svg x='50%' width='50%' viewBox='0 0 400000 549' preserveAspectRatio='xMaxYMin\n slice'>" + u["doublerightarrow"] + "</svg>",
                doublerightarrow: "><svg viewBox='0 0 400000 549'\npreserveAspectRatio='xMaxYMin slice'>" + u["doublerightarrow"] + "</svg>",
                hookleftarrow: "><svg width='50.1%' viewBox='0 0 400000 522'\npreserveAspectRatio='xMinYMin slice'>" + u["leftarrow"] + "</svg>\n<svg x='50%' width='50%' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin\n slice'><path d='M399859 241c-764 0 0 0 0 0 40-3.3 68.7\n -15.7 86-37 10-12 15-25.3 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5\n -23-17.3-1.3-26-8-26-20 0-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21\n 16.7 14 11.2 21 33.5 21 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z\n M0 281v-40h399859v40z'/></svg>",
                hookrightarrow: "><svg width='50.1%' viewBox='0 0 400000 522'\npreserveAspectRatio='xMinYMin slice'><path d='M400000 281\nH103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5-83.5C70.8 58.2 104 47 142 47\nc16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3-68.7 15.7-86 37-10 12-15 25.3\n-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21 71.5 23h399859zM103 281v-40\nh399897v40z'/></svg><svg x='50%' width='50%' viewBox='0 0 400000 522'\npreserveAspectRatio='xMaxYMin slice'>" + u["rightarrow"] + "</svg>",
                leftarrow: "><svg viewBox='0 0 400000 522' preserveAspectRatio='xMinYMin\n slice'>" + u["leftarrow"] + "</svg>",
                leftharpoon: "><svg viewBox='0 0 400000 522' preserveAspectRatio='xMinYMin\n slice'><path d='M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z'/></svg>",
                leftharpoondown: "><svg viewBox='0 0 400000 522'\npreserveAspectRatio='xMinYMin slice'><path d=\"M7 241c-4 4-6.333 8.667-7 14\n 0 5.333.667 9 2 11s5.333 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667\n 6.333 16.333 9 17 2 .667 5 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21\n -32-87.333-82.667-157.667-152-211l-3-3h399907v-40z\nM93 281 H400000 v-40L7 241z\"/></svg>",
                leftrightarrow: "><svg width='50.1%' viewBox='0 0 400000 522'\npreserveAspectRatio='xMinYMin slice'>" + u["leftarrow"] + "</svg>\n<svg x='50%' width='50%' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin\n slice'>" + u["rightarrow"] + "</svg>",
                leftrightharpoons: "><svg width='50.1%' viewBox='0 0 400000 716'\npreserveAspectRatio='xMinYMin slice'><path d='M0 267c.7 5.3\n 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52\n 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8\n 16c-42 98.7-107.3 174.7-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26\nv40h399900v-40zM0 435v40h400000v-40zm0 0v40h400000v-40z'/></svg>\n<svg x='50%' width='50%' viewBox='0 0 400000 716' preserveAspectRatio='xMaxYMin\n slice'><path d='M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z'/></svg>",
                linesegment: "><svg width='50.1%' viewBox='0 0 400000 414'\npreserveAspectRatio='xMinYMin slice'><path d='M40 187V40H0\nv334h40V227h399960v-40zm0 0V40H0v334h40V227h399960v-40z'/></svg><svg x='50%'\nwidth='50%' viewBox='0 0 400000 414' preserveAspectRatio='xMaxYMin slice'>\n<path d='M0 187v40h399960v147h40V40h-40v147zm0\n 0v40h399960v147h40V40h-40v147z'/></svg>",
                longequal: " viewBox='0 0 100 334' preserveAspectRatio='none'>\n<path d='M0 50h100v40H0zm0 194h100v40H0z'/>",
                mapsto: "><svg width='50.1%' viewBox='0 0 400000 522'\npreserveAspectRatio='xMinYMin slice'><path d='M40 241c740\n 0 0 0 0 0v-75c0-40.7-.2-64.3-.5-71-.3-6.7-2.2-11.7-5.5-15-4-4-8.7-6-14-6-5.3 0\n-10 2-14 6C2.7 83.3.8 91.3.5 104 .2 116.7 0 169 0 261c0 114 .7 172.3 2 175 4 8\n 10 12 18 12 5.3 0 10-2 14-6 3.3-3.3 5.2-8.3 5.5-15 .3-6.7.5-30.3.5-71v-75\nh399960zm0 0v40h399960v-40z'/></svg><svg x='50%' width='50%' viewBox='0 0\n 400000 522' preserveAspectRatio='xMaxYMin slice'>" + u["rightarrow"] + "</svg>",
                overbrace: "><svg width='25.5%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMinYMin slice'><path d='M6 548l-6-6\nv-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117-45 179-50h399577v120H403\nc-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7 5-6 9-10 13-.7 1-7.3 1-20 1\nH6z'/></svg><svg x='25%' width='50%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMidYMin slice'><path d='M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z'/></svg>\n<svg x='74.9%' width='24.1%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMaxYMin slice'><path d='M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z'/></svg>",
                overgroup: "><svg width='50.1%' viewBox='0 0 400000 342'\npreserveAspectRatio='xMinYMin slice'><path d='M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z'/></svg><svg x='50%' width='50%' viewBox='0 0 400000 342'\npreserveAspectRatio='xMaxYMin slice'><path d='M0 80h399565\nc371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0 3-1 3-3v-38\nc-76-158-257-219-435-219H0z'/></svg>",
                rightarrow: "><svg viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin\n slice'>" + u["rightarrow"] + "</svg>",
                rightharpoon: "><svg viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin\n slice'><path d='M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z'/></svg>",
                rightharpoondown: "><svg viewBox='0 0 400000 522'\npreserveAspectRatio='xMaxYMin slice'><path d='M399747 511\nc0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217\n 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3\n -10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3\n 8.7-5 14-5 16zM0 241v40h399900v-40z'/></svg>",
                rightleftharpoons: "><svg width='50%' viewBox='0 0 400000 716'\npreserveAspectRatio='xMinYMin slice'><path d='M7 435c-4 4\n-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12 10c90.7 54 156 130 196 228 3.3 10.7 6.3\n 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7\n-157.7-152-211l-3-3h399907v-40H7zm93 0v40h399900v-40zM0 241v40h399900v-40z\nm0 0v40h399900v-40z'/></svg><svg x='50%' width='50%' viewBox='0 0 400000 716'\npreserveAspectRatio='xMaxYMin slice'><path d='M0 241v40\nh399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3\n-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42\n 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5zm0 0v40h399900v-40z\n m100 194v40h399900v-40zm0 0v40h399900v-40z'/></svg>",
                tilde1: " viewBox='0 0 600 260' preserveAspectRatio='none'>\n<path d='M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z'/>",
                tilde2: " viewBox='0 0 1033 286' preserveAspectRatio='none'>\n<path d='M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z'/>",
                tilde3: " viewBox='0 0 2339 306' preserveAspectRatio='none'>\n<path d='M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z'/>",
                tilde4: " viewBox='0 0 2340 312' preserveAspectRatio='none'>\n<path d='M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z'/>",
                tofrom: "><svg width='50.1%' viewBox='0 0 400000 528'\npreserveAspectRatio='xMinYMin slice'><path d='M0 147h400000\nv40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37\n-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8c28.7-32 52-65.7 70-101 10.7-23.3\n 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3 68 321 0 361zm0-174v-40h399900\nv40zm100 154v40h399900v-40z'/></svg><svg x='50%' width='50%' viewBox='0 0\n 400000 528' preserveAspectRatio='xMaxYMin slice'><path\nd='M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7\n 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32-52 65.7-70 101-10.7\n 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142-167z\n M100 147v40h399900v-40zM0 341v40h399900v-40z'/></svg>",
                twoheadleftarrow: "><svg viewBox='0 0 400000 334'\npreserveAspectRatio='xMinYMin slice'><path d='M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z'/>\n</svg>",
                twoheadrightarrow: "><svg viewBox='0 0 400000 334'\npreserveAspectRatio='xMaxYMin slice'><path d='M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z'/>\n</svg>",
                underbrace: "><svg width='25.1%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMinYMin slice'><path d='M0 6l6-6h17\nc12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13 35.313 51.3 80.813 93.8 136.5 127.5\n 55.688 33.7 117.188 55.8 184.5 66.5.688 0 2 .3 4 1 18.688 2.7 76 4.3 172 5\nh399450v120H429l-6-1c-124.688-8-235-61.7-331-161C60.687 138.7 32.312 99.3 7 54\nL0 41V6z'/></svg><svg x='25%' width='50%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMidYMin slice'><path d='M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z'/></svg>\n<svg x='74.9%' width='25.1%' viewBox='0 0 400000 548'\npreserveAspectRatio='xMaxYMin slice'><path d='M399994 0l6 6\nv35l-6 11c-56 104-135.3 181.3-238 232-57.3 28.7-117 45-179 50H-300V214h399897\nc43.3-7 81-15 113-26 100.7-33 179.7-91 237-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1\nh17z'/></svg>",
                undergroup: "><svg width='50.1%' viewBox='0 0 400000 342'\npreserveAspectRatio='xMinYMin slice'><path d='M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z'/></svg><svg x='50%' width='50%' viewBox='0 0 400000 342'\npreserveAspectRatio='xMaxYMin slice'><path d='M0 262h399565\nc371 0 266.7-149.4 414-180 5.9-1.2 18 0 18 0 2 0 3 1 3 3v38c-76 158-257\n 219-435 219H0z'/></svg>",
                widehat1: " viewBox='0 0 1062 239' preserveAspectRatio='none'>\n<path d='M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z'/>",
                widehat2: " viewBox='0 0 2364 300' preserveAspectRatio='none'>\n<path d='M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z'/>",
                widehat3: " viewBox='0 0 2364 360' preserveAspectRatio='none'>\n<path d='M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z'/>",
                widehat4: " viewBox='0 0 2364 420' preserveAspectRatio='none'>\n<path d='M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z'/>",
                xcancel: "<line x1='0' y1='0' x2='100%' y2='100%' stroke-width='0.046em'/>\n<line x1='0' y1='100%' x2='100%' y2='0' stroke-width='0.046em'/>"
            };
            var f = function e(t, r) {
                var n = t.value.label.substr(1);
                var l = 0;
                var s = 0;
                var u = "";
                var f = 0;
                if (i.contains(["widehat", "widetilde", "undertilde"], n)) {
                    var h = t.value.value.length;
                    if (h > 5) {
                        l = .312;
                        u = (n === "widehat" ? "widehat" : "tilde") + "4"
                    } else {
                        var v = [1, 1, 2, 2, 3, 3][h];
                        if (n === "widehat") {
                            l = [0, .24, .3, .3, .36, .36][h];
                            u = "widehat" + v
                        } else {
                            l = [0, .26, .3, .3, .34, .34][h];
                            u = "tilde" + v
                        }
                    }
                } else {
                    var d = o[n];
                    l = d[0];
                    s = d[1];
                    u = d[2];
                    f = d[3]
                }
                var p = a.makeSpan([], [], r);
                p.height = l;
                p.depth = s;
                var m = l + s;
                p.style.height = m + "em";
                if (f > 0) {
                    p.style.minWidth = f + "em"
                }
                p.innerHTML = "<svg width='100%' height='" + m + "em'" + c[u] + "</svg>";
                return p
            };
            var h = function e(t, r, n, i) {
                var l = void 0;
                var s = t.height + t.depth + 2 * n;
                if (r === "fbox") {
                    l = a.makeSpan(["stretchy", r], [], i);
                    if (i.color) {
                        l.style.borderColor = i.getColor()
                    }
                } else {
                    l = a.makeSpan([], [], i);
                    l.innerHTML = "<svg width='100%' height='" + s + "em'>" + c[r] + "</svg>"
                }
                l.height = s;
                l.style.height = s + "em";
                return l
            };
            t.exports = {encloseSpan: h, mathMLnode: s, svgSpan: f}
        }, {"./buildCommon": 34, "./mathMLTree": 45, "./utils": 51}],
        48: [function (e, t, r) {
            "use strict";
            t.exports = {math: {}, text: {}};

            function a(e, r, a, n, i, l) {
                t.exports[e][i] = {
                    font: r, group: a, replace: n
                };
                if (l) {
                    t.exports[e][n] = t.exports[e][i]
                }
            }

            var n = "math";
            var i = "text";
            var l = "main";
            var s = "ams";
            var o = "accent";
            var u = "bin";
            var c = "close";
            var f = "inner";
            var h = "mathord";
            var v = "op";
            var d = "open";
            var p = "punct";
            var m = "rel";
            var g = "spacing";
            var y = "textord";
            a(n, l, m, "\u2261", "\\equiv");
            a(n, l, m, "\u227a", "\\prec");
            a(n, l, m, "\u227b", "\\succ");
            a(n, l, m, "\u223c", "\\sim");
            a(n, l, m, "\u22a5", "\\perp");
            a(n, l, m, "\u2aaf", "\\preceq");
            a(n, l, m, "\u2ab0", "\\succeq");
            a(n, l, m, "\u2243", "\\simeq");
            a(n, l, m, "\u2223", "\\mid");
            a(n, l, m, "\u226a", "\\ll");
            a(n, l, m, "\u226b", "\\gg");
            a(n, l, m, "\u224d", "\\asymp");
            a(n, l, m, "\u2225", "\\parallel");
            a(n, l, m, "\u22c8", "\\bowtie");
            a(n, l, m, "\u2323", "\\smile");
            a(n, l, m, "\u2291", "\\sqsubseteq");
            a(n, l, m, "\u2292", "\\sqsupseteq");
            a(n, l, m, "\u2250", "\\doteq");
            a(n, l, m, "\u2322", "\\frown");
            a(n, l, m, "\u220b", "\\ni");
            a(n, l, m, "\u221d", "\\propto");
            a(n, l, m, "\u22a2", "\\vdash");
            a(n, l, m, "\u22a3", "\\dashv");
            a(n, l, m, "\u220b", "\\owns");
            a(n, l, p, ".", "\\ldotp");
            a(n, l, p, "\u22c5", "\\cdotp");
            a(n, l, y, "#", "\\#");
            a(i, l, y, "#", "\\#");
            a(n, l, y, "&", "\\&");
            a(i, l, y, "&", "\\&");
            a(n, l, y, "\u2135", "\\aleph");
            a(n, l, y, "\u2200", "\\forall");
            a(n, l, y, "\u210f", "\\hbar");
            a(n, l, y, "\u2203", "\\exists");
            a(n, l, y, "\u2207", "\\nabla");
            a(n, l, y, "\u266d", "\\flat");
            a(n, l, y, "\u2113", "\\ell");
            a(n, l, y, "\u266e", "\\natural");
            a(n, l, y, "\u2663", "\\clubsuit");
            a(n, l, y, "\u2118", "\\wp");
            a(n, l, y, "\u266f", "\\sharp");
            a(n, l, y, "\u2662", "\\diamondsuit");
            a(n, l, y, "\u211c", "\\Re");
            a(n, l, y, "\u2661", "\\heartsuit");
            a(n, l, y, "\u2111", "\\Im");
            a(n, l, y, "\u2660", "\\spadesuit");
            a(n, l, y, "\u2020", "\\dag");
            a(i, l, y, "\u2020", "\\dag");
            a(i, l, y, "\u2020", "\\textdagger");
            a(n, l, y, "\u2021", "\\ddag");
            a(i, l, y, "\u2021", "\\ddag");
            a(i, l, y, "\u2020", "\\textdaggerdbl");
            a(n, l, c, "\u23b1", "\\rmoustache");
            a(n, l, d, "\u23b0", "\\lmoustache");
            a(n, l, c, "\u27ef", "\\rgroup");
            a(n, l, d, "\u27ee", "\\lgroup");
            a(n, l, u, "\u2213", "\\mp");
            a(n, l, u, "\u2296", "\\ominus");
            a(n, l, u, "\u228e", "\\uplus");
            a(n, l, u, "\u2293", "\\sqcap");
            a(n, l, u, "\u2217", "\\ast");
            a(n, l, u, "\u2294", "\\sqcup");
            a(n, l, u, "\u25ef", "\\bigcirc");
            a(n, l, u, "\u2219", "\\bullet");
            a(n, l, u, "\u2021", "\\ddagger");
            a(n, l, u, "\u2240", "\\wr");
            a(n, l, u, "\u2a3f", "\\amalg");
            a(n, l, m, "\u27f5", "\\longleftarrow");
            a(n, l, m, "\u21d0", "\\Leftarrow");
            a(n, l, m, "\u27f8", "\\Longleftarrow");
            a(n, l, m, "\u27f6", "\\longrightarrow");
            a(n, l, m, "\u21d2", "\\Rightarrow");
            a(n, l, m, "\u27f9", "\\Longrightarrow");
            a(n, l, m, "\u2194", "\\leftrightarrow");
            a(n, l, m, "\u27f7", "\\longleftrightarrow");
            a(n, l, m, "\u21d4", "\\Leftrightarrow");
            a(n, l, m, "\u27fa", "\\Longleftrightarrow");
            a(n, l, m, "\u21a6", "\\mapsto");
            a(n, l, m, "\u27fc", "\\longmapsto");
            a(n, l, m, "\u2197", "\\nearrow");
            a(n, l, m, "\u21a9", "\\hookleftarrow");
            a(n, l, m, "\u21aa", "\\hookrightarrow");
            a(n, l, m, "\u2198", "\\searrow");
            a(n, l, m, "\u21bc", "\\leftharpoonup");
            a(n, l, m, "\u21c0", "\\rightharpoonup");
            a(n, l, m, "\u2199", "\\swarrow");
            a(n, l, m, "\u21bd", "\\leftharpoondown");
            a(n, l, m, "\u21c1", "\\rightharpoondown");
            a(n, l, m, "\u2196", "\\nwarrow");
            a(n, l, m, "\u21cc", "\\rightleftharpoons");
            a(n, s, m, "\u226e", "\\nless");
            a(n, s, m, "\ue010", "\\nleqslant");
            a(n, s, m, "\ue011", "\\nleqq");
            a(n, s, m, "\u2a87", "\\lneq");
            a(n, s, m, "\u2268", "\\lneqq");
            a(n, s, m, "\ue00c", "\\lvertneqq");
            a(n, s, m, "\u22e6", "\\lnsim");
            a(n, s, m, "\u2a89", "\\lnapprox");
            a(n, s, m, "\u2280", "\\nprec");
            a(n, s, m, "\u22e0", "\\npreceq");
            a(n, s, m, "\u22e8", "\\precnsim");
            a(n, s, m, "\u2ab9", "\\precnapprox");
            a(n, s, m, "\u2241", "\\nsim");
            a(n, s, m, "\ue006", "\\nshortmid");
            a(n, s, m, "\u2224", "\\nmid");
            a(n, s, m, "\u22ac", "\\nvdash");
            a(n, s, m, "\u22ad", "\\nvDash");
            a(n, s, m, "\u22ea", "\\ntriangleleft");
            a(n, s, m, "\u22ec", "\\ntrianglelefteq");
            a(n, s, m, "\u228a", "\\subsetneq");
            a(n, s, m, "\ue01a", "\\varsubsetneq");
            a(n, s, m, "\u2acb", "\\subsetneqq");
            a(n, s, m, "\ue017", "\\varsubsetneqq");
            a(n, s, m, "\u226f", "\\ngtr");
            a(n, s, m, "\ue00f", "\\ngeqslant");
            a(n, s, m, "\ue00e", "\\ngeqq");
            a(n, s, m, "\u2a88", "\\gneq");
            a(n, s, m, "\u2269", "\\gneqq");
            a(n, s, m, "\ue00d", "\\gvertneqq");
            a(n, s, m, "\u22e7", "\\gnsim");
            a(n, s, m, "\u2a8a", "\\gnapprox");
            a(n, s, m, "\u2281", "\\nsucc");
            a(n, s, m, "\u22e1", "\\nsucceq");
            a(n, s, m, "\u22e9", "\\succnsim");
            a(n, s, m, "\u2aba", "\\succnapprox");
            a(n, s, m, "\u2246", "\\ncong");
            a(n, s, m, "\ue007", "\\nshortparallel");
            a(n, s, m, "\u2226", "\\nparallel");
            a(n, s, m, "\u22af", "\\nVDash");
            a(n, s, m, "\u22eb", "\\ntriangleright");
            a(n, s, m, "\u22ed", "\\ntrianglerighteq");
            a(n, s, m, "\ue018", "\\nsupseteqq");
            a(n, s, m, "\u228b", "\\supsetneq");
            a(n, s, m, "\ue01b", "\\varsupsetneq");
            a(n, s, m, "\u2acc", "\\supsetneqq");
            a(n, s, m, "\ue019", "\\varsupsetneqq");
            a(n, s, m, "\u22ae", "\\nVdash");
            a(n, s, m, "\u2ab5", "\\precneqq");
            a(n, s, m, "\u2ab6", "\\succneqq");
            a(n, s, m, "\ue016", "\\nsubseteqq");
            a(n, s, u, "\u22b4", "\\unlhd");
            a(n, s, u, "\u22b5", "\\unrhd");
            a(n, s, m, "\u219a", "\\nleftarrow");
            a(n, s, m, "\u219b", "\\nrightarrow");
            a(n, s, m, "\u21cd", "\\nLeftarrow");
            a(n, s, m, "\u21cf", "\\nRightarrow");
            a(n, s, m, "\u21ae", "\\nleftrightarrow");
            a(n, s, m, "\u21ce", "\\nLeftrightarrow");
            a(n, s, m, "\u25b3", "\\vartriangle");
            a(n, s, y, "\u210f", "\\hslash");
            a(n, s, y, "\u25bd", "\\triangledown");
            a(n, s, y, "\u25ca", "\\lozenge");
            a(n, s, y, "\u24c8", "\\circledS");
            a(n, s, y, "\xae", "\\circledR");
            a(i, s, y, "\xae", "\\circledR");
            a(n, s, y, "\u2221", "\\measuredangle");
            a(n, s, y, "\u2204", "\\nexists");
            a(n, s, y, "\u2127", "\\mho");
            a(n, s, y, "\u2132", "\\Finv");
            a(n, s, y, "\u2141", "\\Game");
            a(n, s, y, "k", "\\Bbbk");
            a(n, s, y, "\u2035", "\\backprime");
            a(n, s, y, "\u25b2", "\\blacktriangle");
            a(n, s, y, "\u25bc", "\\blacktriangledown");
            a(n, s, y, "\u25a0", "\\blacksquare");
            a(n, s, y, "\u29eb", "\\blacklozenge");
            a(n, s, y, "\u2605", "\\bigstar");
            a(n, s, y, "\u2222", "\\sphericalangle");
            a(n, s, y, "\u2201", "\\complement");
            a(n, s, y, "\xf0", "\\eth");
            a(n, s, y, "\u2571", "\\diagup");
            a(n, s, y, "\u2572", "\\diagdown");
            a(n, s, y, "\u25a1", "\\square");
            a(n, s, y, "\u25a1", "\\Box");
            a(n, s, y, "\u25ca", "\\Diamond");
            a(n, s, y, "\xa5", "\\yen");
            a(n, s, y, "\u2713", "\\checkmark");
            a(i, s, y, "\u2713", "\\checkmark");
            a(n, s, y, "\u2136", "\\beth");
            a(n, s, y, "\u2138", "\\daleth");
            a(n, s, y, "\u2137", "\\gimel");
            a(n, s, y, "\u03dd", "\\digamma");
            a(n, s, y, "\u03f0", "\\varkappa");
            a(n, s, d, "\u250c", "\\ulcorner");
            a(n, s, c, "\u2510", "\\urcorner");
            a(n, s, d, "\u2514", "\\llcorner");
            a(n, s, c, "\u2518", "\\lrcorner");
            a(n, s, m, "\u2266", "\\leqq");
            a(n, s, m, "\u2a7d", "\\leqslant");
            a(n, s, m, "\u2a95", "\\eqslantless");
            a(n, s, m, "\u2272", "\\lesssim");
            a(n, s, m, "\u2a85", "\\lessapprox");
            a(n, s, m, "\u224a", "\\approxeq");
            a(n, s, u, "\u22d6", "\\lessdot");
            a(n, s, m, "\u22d8", "\\lll");
            a(n, s, m, "\u2276", "\\lessgtr");
            a(n, s, m, "\u22da", "\\lesseqgtr");
            a(n, s, m, "\u2a8b", "\\lesseqqgtr");
            a(n, s, m, "\u2251", "\\doteqdot");
            a(n, s, m, "\u2253", "\\risingdotseq");
            a(n, s, m, "\u2252", "\\fallingdotseq");
            a(n, s, m, "\u223d", "\\backsim");
            a(n, s, m, "\u22cd", "\\backsimeq");
            a(n, s, m, "\u2ac5", "\\subseteqq");
            a(n, s, m, "\u22d0", "\\Subset");
            a(n, s, m, "\u228f", "\\sqsubset");
            a(n, s, m, "\u227c", "\\preccurlyeq");
            a(n, s, m, "\u22de", "\\curlyeqprec");
            a(n, s, m, "\u227e", "\\precsim");
            a(n, s, m, "\u2ab7", "\\precapprox");
            a(n, s, m, "\u22b2", "\\vartriangleleft");
            a(n, s, m, "\u22b4", "\\trianglelefteq");
            a(n, s, m, "\u22a8", "\\vDash");
            a(n, s, m, "\u22aa", "\\Vvdash");
            a(n, s, m, "\u2323", "\\smallsmile");
            a(n, s, m, "\u2322", "\\smallfrown");
            a(n, s, m, "\u224f", "\\bumpeq");
            a(n, s, m, "\u224e", "\\Bumpeq");
            a(n, s, m, "\u2267", "\\geqq");
            a(n, s, m, "\u2a7e", "\\geqslant");
            a(n, s, m, "\u2a96", "\\eqslantgtr");
            a(n, s, m, "\u2273", "\\gtrsim");
            a(n, s, m, "\u2a86", "\\gtrapprox");
            a(n, s, u, "\u22d7", "\\gtrdot");
            a(n, s, m, "\u22d9", "\\ggg");
            a(n, s, m, "\u2277", "\\gtrless");
            a(n, s, m, "\u22db", "\\gtreqless");
            a(n, s, m, "\u2a8c", "\\gtreqqless");
            a(n, s, m, "\u2256", "\\eqcirc");
            a(n, s, m, "\u2257", "\\circeq");
            a(n, s, m, "\u225c", "\\triangleq");
            a(n, s, m, "\u223c", "\\thicksim");
            a(n, s, m, "\u2248", "\\thickapprox");
            a(n, s, m, "\u2ac6", "\\supseteqq");
            a(n, s, m, "\u22d1", "\\Supset");
            a(n, s, m, "\u2290", "\\sqsupset");
            a(n, s, m, "\u227d", "\\succcurlyeq");
            a(n, s, m, "\u22df", "\\curlyeqsucc");
            a(n, s, m, "\u227f", "\\succsim");
            a(n, s, m, "\u2ab8", "\\succapprox");
            a(n, s, m, "\u22b3", "\\vartriangleright");
            a(n, s, m, "\u22b5", "\\trianglerighteq");
            a(n, s, m, "\u22a9", "\\Vdash");
            a(n, s, m, "\u2223", "\\shortmid");
            a(n, s, m, "\u2225", "\\shortparallel");
            a(n, s, m, "\u226c", "\\between");
            a(n, s, m, "\u22d4", "\\pitchfork");
            a(n, s, m, "\u221d", "\\varpropto");
            a(n, s, m, "\u25c0", "\\blacktriangleleft");
            a(n, s, m, "\u2234", "\\therefore");
            a(n, s, m, "\u220d", "\\backepsilon");
            a(n, s, m, "\u25b6", "\\blacktriangleright");
            a(n, s, m, "\u2235", "\\because");
            a(n, s, m, "\u22d8", "\\llless");
            a(n, s, m, "\u22d9", "\\gggtr");
            a(n, s, u, "\u22b2", "\\lhd");
            a(n, s, u, "\u22b3", "\\rhd");
            a(n, s, m, "\u2242", "\\eqsim");
            a(n, l, m, "\u22c8", "\\Join");
            a(n, s, m, "\u2251", "\\Doteq");
            a(n, s, u, "\u2214", "\\dotplus");
            a(n, s, u, "\u2216", "\\smallsetminus");
            a(n, s, u, "\u22d2", "\\Cap");
            a(n, s, u, "\u22d3", "\\Cup");
            a(n, s, u, "\u2a5e", "\\doublebarwedge");
            a(n, s, u, "\u229f", "\\boxminus");
            a(n, s, u, "\u229e", "\\boxplus");
            a(n, s, u, "\u22c7", "\\divideontimes");
            a(n, s, u, "\u22c9", "\\ltimes");
            a(n, s, u, "\u22ca", "\\rtimes");
            a(n, s, u, "\u22cb", "\\leftthreetimes");
            a(n, s, u, "\u22cc", "\\rightthreetimes");
            a(n, s, u, "\u22cf", "\\curlywedge");
            a(n, s, u, "\u22ce", "\\curlyvee");
            a(n, s, u, "\u229d", "\\circleddash");
            a(n, s, u, "\u229b", "\\circledast");
            a(n, s, u, "\u22c5", "\\centerdot");
            a(n, s, u, "\u22ba", "\\intercal");
            a(n, s, u, "\u22d2", "\\doublecap");
            a(n, s, u, "\u22d3", "\\doublecup");
            a(n, s, u, "\u22a0", "\\boxtimes");
            a(n, s, m, "\u21e2", "\\dashrightarrow");
            a(n, s, m, "\u21e0", "\\dashleftarrow");
            a(n, s, m, "\u21c7", "\\leftleftarrows");
            a(n, s, m, "\u21c6", "\\leftrightarrows");
            a(n, s, m, "\u21da", "\\Lleftarrow");
            a(n, s, m, "\u219e", "\\twoheadleftarrow");
            a(n, s, m, "\u21a2", "\\leftarrowtail");
            a(n, s, m, "\u21ab", "\\looparrowleft");
            a(n, s, m, "\u21cb", "\\leftrightharpoons");
            a(n, s, m, "\u21b6", "\\curvearrowleft");
            a(n, s, m, "\u21ba", "\\circlearrowleft");
            a(n, s, m, "\u21b0", "\\Lsh");
            a(n, s, m, "\u21c8", "\\upuparrows");
            a(n, s, m, "\u21bf", "\\upharpoonleft");
            a(n, s, m, "\u21c3", "\\downharpoonleft");
            a(n, s, m, "\u22b8", "\\multimap");
            a(n, s, m, "\u21ad", "\\leftrightsquigarrow");
            a(n, s, m, "\u21c9", "\\rightrightarrows");
            a(n, s, m, "\u21c4", "\\rightleftarrows");
            a(n, s, m, "\u21a0", "\\twoheadrightarrow");
            a(n, s, m, "\u21a3", "\\rightarrowtail");
            a(n, s, m, "\u21ac", "\\looparrowright");
            a(n, s, m, "\u21b7", "\\curvearrowright");
            a(n, s, m, "\u21bb", "\\circlearrowright");
            a(n, s, m, "\u21b1", "\\Rsh");
            a(n, s, m, "\u21ca", "\\downdownarrows");
            a(n, s, m, "\u21be", "\\upharpoonright");
            a(n, s, m, "\u21c2", "\\downharpoonright");
            a(n, s, m, "\u21dd", "\\rightsquigarrow");
            a(n, s, m, "\u21dd", "\\leadsto");
            a(n, s, m, "\u21db", "\\Rrightarrow");
            a(n, s, m, "\u21be", "\\restriction");
            a(n, l, y, "\u2018", "`");
            a(n, l, y, "$", "\\$");
            a(i, l, y, "$", "\\$");
            a(i, l, y, "$", "\\textdollar");
            a(n, l, y, "%", "\\%");
            a(i, l, y, "%", "\\%");
            a(n, l, y, "_", "\\_");
            a(i, l, y, "_", "\\_");
            a(i, l, y, "_", "\\textunderscore");
            a(n, l, y, "\u2220", "\\angle");
            a(n, l, y, "\u221e", "\\infty");
            a(n, l, y, "\u2032", "\\prime");
            a(n, l, y, "\u25b3", "\\triangle");
            a(n, l, y, "\u0393", "\\Gamma", true);
            a(n, l, y, "\u0394", "\\Delta", true);
            a(n, l, y, "\u0398", "\\Theta", true);
            a(n, l, y, "\u039b", "\\Lambda", true);
            a(n, l, y, "\u039e", "\\Xi", true);
            a(n, l, y, "\u03a0", "\\Pi", true);
            a(n, l, y, "\u03a3", "\\Sigma", true);
            a(n, l, y, "\u03a5", "\\Upsilon", true);
            a(n, l, y, "\u03a6", "\\Phi", true);
            a(n, l, y, "\u03a8", "\\Psi", true);
            a(n, l, y, "\u03a9", "\\Omega", true);
            a(n, l, y, "\xac", "\\neg");
            a(n, l, y, "\xac", "\\lnot");
            a(n, l, y, "\u22a4", "\\top");
            a(n, l, y, "\u22a5", "\\bot");
            a(n, l, y, "\u2205", "\\emptyset");
            a(n, s, y, "\u2205", "\\varnothing");
            a(n, l, h, "\u03b1", "\\alpha", true);
            a(n, l, h, "\u03b2", "\\beta", true);
            a(n, l, h, "\u03b3", "\\gamma", true);
            a(n, l, h, "\u03b4", "\\delta", true);
            a(n, l, h, "\u03f5", "\\epsilon", true);
            a(n, l, h, "\u03b6", "\\zeta", true);
            a(n, l, h, "\u03b7", "\\eta", true);
            a(n, l, h, "\u03b8", "\\theta", true);
            a(n, l, h, "\u03b9", "\\iota", true);
            a(n, l, h, "\u03ba", "\\kappa", true);
            a(n, l, h, "\u03bb", "\\lambda", true);
            a(n, l, h, "\u03bc", "\\mu", true);
            a(n, l, h, "\u03bd", "\\nu", true);
            a(n, l, h, "\u03be", "\\xi", true);
            a(n, l, h, "\u03bf", "\\omicron", true);
            a(n, l, h, "\u03c0", "\\pi", true);
            a(n, l, h, "\u03c1", "\\rho", true);
            a(n, l, h, "\u03c3", "\\sigma", true);
            a(n, l, h, "\u03c4", "\\tau", true);
            a(n, l, h, "\u03c5", "\\upsilon", true);
            a(n, l, h, "\u03d5", "\\phi", true);
            a(n, l, h, "\u03c7", "\\chi", true);
            a(n, l, h, "\u03c8", "\\psi", true);
            a(n, l, h, "\u03c9", "\\omega", true);
            a(n, l, h, "\u03b5", "\\varepsilon", true);
            a(n, l, h, "\u03d1", "\\vartheta", true);
            a(n, l, h, "\u03d6", "\\varpi", true);
            a(n, l, h, "\u03f1", "\\varrho", true);
            a(n, l, h, "\u03c2", "\\varsigma", true);
            a(n, l, h, "\u03c6", "\\varphi", true);
            a(n, l, u, "\u2217", "*");
            a(n, l, u, "+", "+");
            a(n, l, u, "\u2212", "-");
            a(n, l, u, "\u22c5", "\\cdot");
            a(n, l, u, "\u2218", "\\circ");
            a(n, l, u, "\xf7", "\\div");
            a(n, l, u, "\xb1", "\\pm");
            a(n, l, u, "\xd7", "\\times");
            a(n, l, u, "\u2229", "\\cap");
            a(n, l, u, "\u222a", "\\cup");
            a(n, l, u, "\u2216", "\\setminus");
            a(n, l, u, "\u2227", "\\land");
            a(n, l, u, "\u2228", "\\lor");
            a(n, l, u, "\u2227", "\\wedge");
            a(n, l, u, "\u2228", "\\vee");
            a(n, l, y, "\u221a", "\\surd");
            a(n, l, d, "(", "(");
            a(n, l, d, "[", "[");
            a(n, l, d, "\u27e8", "\\langle");
            a(n, l, d, "\u2223", "\\lvert");
            a(n, l, d, "\u2225", "\\lVert");
            a(n, l, c, ")", ")");
            a(n, l, c, "]", "]");
            a(n, l, c, "?", "?");
            a(n, l, c, "!", "!");
            a(n, l, c, "\u27e9", "\\rangle");
            a(n, l, c, "\u2223", "\\rvert");
            a(n, l, c, "\u2225", "\\rVert");
            a(n, l, m, "=", "=");
            a(n, l, m, "<", "<");
            a(n, l, m, ">", ">");
            a(n, l, m, ":", ":");
            a(n, l, m, "\u2248", "\\approx");
            a(n, l, m, "\u2245", "\\cong");
            a(n, l, m, "\u2265", "\\ge");
            a(n, l, m, "\u2265", "\\geq");
            a(n, l, m, "\u2190", "\\gets");
            a(n, l, m, ">", "\\gt");
            a(n, l, m, "\u2208", "\\in");
            a(n, l, m, "\u2209", "\\notin");
            a(n, l, m, "\u0338", "\\not");
            a(n, l, m, "\u2282", "\\subset");
            a(n, l, m, "\u2283", "\\supset");
            a(n, l, m, "\u2286", "\\subseteq");
            a(n, l, m, "\u2287", "\\supseteq");
            a(n, s, m, "\u2288", "\\nsubseteq");
            a(n, s, m, "\u2289", "\\nsupseteq");
            a(n, l, m, "\u22a8", "\\models");
            a(n, l, m, "\u2190", "\\leftarrow");
            a(n, l, m, "\u2264", "\\le");
            a(n, l, m, "\u2264", "\\leq");
            a(n, l, m, "<", "\\lt");
            a(n, l, m, "\u2260", "\\ne");
            a(n, l, m, "\u2260", "\\neq");
            a(n, l, m, "\u2192", "\\rightarrow");
            a(n, l, m, "\u2192", "\\to");
            a(n, s, m, "\u2271", "\\ngeq");
            a(n, s, m, "\u2270", "\\nleq");
            a(n, l, g, null, "\\!");
            a(n, l, g, "\xa0", "\\ ");
            a(n, l, g, "\xa0", "~");
            a(n, l, g, null, "\\,");
            a(n, l, g, null, "\\:");
            a(n, l, g, null, "\\;");
            a(n, l, g, null, "\\enspace");
            a(n, l, g, null, "\\qquad");
            a(n, l, g, null, "\\quad");
            a(n, l, g, "\xa0", "\\space");
            a(n, l, p, ",", ",");
            a(n, l, p, ";", ";");
            a(n, l, p, ":", "\\colon");
            a(n, s, u, "\u22bc", "\\barwedge");
            a(n, s, u, "\u22bb", "\\veebar");
            a(n, l, u, "\u2299", "\\odot");
            a(n, l, u, "\u2295", "\\oplus");
            a(n, l, u, "\u2297", "\\otimes");
            a(n, l, y, "\u2202", "\\partial");
            a(n, l, u, "\u2298", "\\oslash");
            a(n, s, u, "\u229a", "\\circledcirc");
            a(n, s, u, "\u22a1", "\\boxdot");
            a(n, l, u, "\u25b3", "\\bigtriangleup");
            a(n, l, u, "\u25bd", "\\bigtriangledown");
            a(n, l, u, "\u2020", "\\dagger");
            a(n, l, u, "\u22c4", "\\diamond");
            a(n, l, u, "\u22c6", "\\star");
            a(n, l, u, "\u25c3", "\\triangleleft");
            a(n, l, u, "\u25b9", "\\triangleright");
            a(n, l, d, "{", "\\{");
            a(i, l, y, "{", "\\{");
            a(i, l, y, "{", "\\textbraceleft");
            a(n, l, c, "}", "\\}");
            a(i, l, y, "}", "\\}");
            a(i, l, y, "}", "\\textbraceright");
            a(n, l, d, "{", "\\lbrace");
            a(n, l, c, "}", "\\rbrace");
            a(n, l, d, "[", "\\lbrack");
            a(n, l, c, "]", "\\rbrack");
            a(i, l, y, "<", "\\textless");
            a(i, l, y, ">", "\\textgreater");
            a(n, l, d, "\u230a", "\\lfloor");
            a(n, l, c, "\u230b", "\\rfloor");
            a(n, l, d, "\u2308", "\\lceil");
            a(n, l, c, "\u2309", "\\rceil");
            a(n, l, y, "\\", "\\backslash");
            a(n, l, y, "\u2223", "|");
            a(n, l, y, "\u2223", "\\vert");
            a(i, l, y, "|", "\\textbar");
            a(n, l, y, "\u2225", "\\|");
            a(n, l, y, "\u2225", "\\Vert");
            a(i, l, y, "\u2225", "\\textbardbl");
            a(n, l, m, "\u2191", "\\uparrow");
            a(n, l, m, "\u21d1", "\\Uparrow");
            a(n, l, m, "\u2193", "\\downarrow");
            a(n, l, m, "\u21d3", "\\Downarrow");
            a(n, l, m, "\u2195", "\\updownarrow");
            a(n, l, m, "\u21d5", "\\Updownarrow");
            a(n, l, v, "\u2210", "\\coprod");
            a(n, l, v, "\u22c1", "\\bigvee");
            a(n, l, v, "\u22c0", "\\bigwedge");
            a(n, l, v, "\u2a04", "\\biguplus");
            a(n, l, v, "\u22c2", "\\bigcap");
            a(n, l, v, "\u22c3", "\\bigcup");
            a(n, l, v, "\u222b", "\\int");
            a(n, l, v, "\u222b", "\\intop");
            a(n, l, v, "\u222c", "\\iint");
            a(n, l, v, "\u222d", "\\iiint");
            a(n, l, v, "\u220f", "\\prod");
            a(n, l, v, "\u2211", "\\sum");
            a(n, l, v, "\u2a02", "\\bigotimes");
            a(n, l, v, "\u2a01", "\\bigoplus");
            a(n, l, v, "\u2a00", "\\bigodot");
            a(n, l, v, "\u222e", "\\oint");
            a(n, l, v, "\u2a06", "\\bigsqcup");
            a(n, l, v, "\u222b", "\\smallint");
            a(i, l, f, "\u2026", "\\textellipsis");
            a(n, l, f, "\u2026", "\\mathellipsis");
            a(i, l, f, "\u2026", "\\ldots", true);
            a(n, l, f, "\u2026", "\\ldots", true);
            a(n, l, f, "\u22ef", "\\cdots", true);
            a(n, l, f, "\u22f1", "\\ddots", true);
            a(n, l, y, "\u22ee", "\\vdots", true);
            a(n, l, o, "\xb4", "\\acute");
            a(n, l, o, "`", "\\grave");
            a(n, l, o, "\xa8", "\\ddot");
            a(n, l, o, "~", "\\tilde");
            a(n, l, o, "\xaf", "\\bar");
            a(n, l, o, "\u02d8", "\\breve");
            a(n, l, o, "\u02c7", "\\check");
            a(n, l, o, "^", "\\hat");
            a(n, l, o, "\u20d7", "\\vec");
            a(n, l, o, "\u02d9", "\\dot");
            a(n, l, h, "\u0131", "\\imath");
            a(n, l, h, "\u0237", "\\jmath");
            a(i, l, o, "\u02ca", "\\'");
            a(i, l, o, "\u02cb", "\\`");
            a(i, l, o, "\u02c6", "\\^");
            a(i, l, o, "\u02dc", "\\~");
            a(i, l, o, "\u02c9", "\\=");
            a(i, l, o, "\u02d8", "\\u");
            a(i, l, o, "\u02d9", "\\.");
            a(i, l, o, "\u02da", "\\r");
            a(i, l, o, "\u02c7", "\\v");
            a(i, l, o, "\xa8", '\\"');
            a(i, l, o, "\u030b", "\\H");
            a(i, l, y, "\u2013", "--");
            a(i, l, y, "\u2013", "\\textendash");
            a(i, l, y, "\u2014", "---");
            a(i, l, y, "\u2014", "\\textemdash");
            a(i, l, y, "\u2018", "`");
            a(i, l, y, "\u2018", "\\textquoteleft");
            a(i, l, y, "\u2019", "'");
            a(i, l, y, "\u2019", "\\textquoteright");
            a(i, l, y, "\u201c", "``");
            a(i, l, y, "\u201c", "\\textquotedblleft");
            a(i, l, y, "\u201d", "''");
            a(i, l, y, "\u201d", "\\textquotedblright");
            a(n, l, y, "\xb0", "\\degree");
            a(i, l, y, "\xb0", "\\degree");
            a(n, l, h, "\xa3", "\\pounds");
            a(n, l, h, "\xa3", "\\mathsterling");
            a(i, l, h, "\xa3", "\\pounds");
            a(i, l, h, "\xa3", "\\textsterling");
            a(n, s, y, "\u2720", "\\maltese");
            a(i, s, y, "\u2720", "\\maltese");
            a(i, l, g, "\xa0", "\\ ");
            a(i, l, g, "\xa0", " ");
            a(i, l, g, "\xa0", "~");
            var x = '0123456789/@."';
            for (var w = 0; w < x.length; w++) {
                var b = x.charAt(w);
                a(n, l, y, b, b)
            }
            var k = '0123456789!@*()-=+[]<>|";:?/.,';
            for (var M = 0; M < k.length; M++) {
                var z = k.charAt(M);
                a(i, l, y, z, z)
            }
            var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var A = 0; A < S.length; A++) {
                var C = S.charAt(A);
                a(n, l, h, C, C);
                a(i, l, y, C, C)
            }
            for (var T = 192; T <= 214; T++) {
                var N = String.fromCharCode(T);
                a(n, l, h, N, N);
                a(i, l, y, N, N)
            }
            for (var R = 216; R <= 246; R++) {
                var q = String.fromCharCode(R);
                a(n, l, h, q, q);
                a(i, l, y, q, q)
            }
            for (var _ = 248; _ <= 255; _++) {
                var E = String.fromCharCode(_);
                a(n, l, h, E, E);
                a(i, l, y, E, E)
            }
            for (var B = 1040; B <= 1103; B++) {
                var O = String.fromCharCode(B);
                a(i, l, y, O, O)
            }
            a(i, l, y, "\u2013", "\u2013");
            a(i, l, y, "\u2014", "\u2014");
            a(i, l, y, "\u2018", "\u2018");
            a(i, l, y, "\u2019", "\u2019");
            a(i, l, y, "\u201c", "\u201c");
            a(i, l, y, "\u201d", "\u201d")
        }, {}],
        49: [function (e, t, r) {
            "use strict";
            var a = /[\uAC00-\uD7AF]/;
            var n = /[\u3000-\u30FF\u4E00-\u9FAF\uAC00-\uD7AF\uFF00-\uFF60]/;
            t.exports = {cjkRegex: n, hangulRegex: a}
        }, {}],
        50: [function (e, t, r) {
            "use strict";
            var a = e("./ParseError");
            var n = i(a);

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var l = {
                pt: 1,
                mm: 7227 / 2540,
                cm: 7227 / 254,
                in: 72.27,
                bp: 803 / 800,
                pc: 12,
                dd: 1238 / 1157,
                cc: 14856 / 1157,
                nd: 685 / 642,
                nc: 1370 / 107,
                sp: 1 / 65536,
                px: 803 / 800
            };
            var s = {ex: true, em: true, mu: true};
            var o = function e(t) {
                if (t.unit) {
                    t = t.unit
                }
                return t in l || t in s || t === "ex"
            };
            var u = function e(t, r) {
                var a = void 0;
                if (t.unit in l) {
                    a = l[t.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier
                } else if (t.unit === "mu") {
                    a = r.fontMetrics().cssEmPerMu
                } else {
                    var i = void 0;
                    if (r.style.isTight()) {
                        i = r.havingStyle(r.style.text())
                    } else {
                        i = r
                    }
                    if (t.unit === "ex") {
                        a = i.fontMetrics().xHeight
                    } else if (t.unit === "em") {
                        a = i.fontMetrics().quad
                    } else {
                        throw new n.default("Invalid unit: '" + t.unit + "'")
                    }
                    if (i !== r) {
                        a *= i.sizeMultiplier / r.sizeMultiplier
                    }
                }
                return t.number * a
            };
            t.exports = {validUnit: o, calculateSize: u}
        }, {"./ParseError": 29}],
        51: [function (e, t, r) {
            "use strict";
            var a = Array.prototype.indexOf;
            var n = function e(t, r) {
                if (t == null) {
                    return -1
                }
                if (a && t.indexOf === a) {
                    return t.indexOf(r)
                }
                var n = t.length;
                for (var i = 0; i < n; i++) {
                    if (t[i] === r) {
                        return i
                    }
                }
                return -1
            };
            var i = function e(t, r) {
                return n(t, r) !== -1
            };
            var l = function e(t, r) {
                return t === undefined ? r : t
            };
            var s = /([A-Z])/g;
            var o = function e(t) {
                return t.replace(s, "-$1").toLowerCase()
            };
            var u = {"&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;"};
            var c = /[&><"']/g;

            function f(e) {
                return u[e]
            }

            function h(e) {
                return ("" + e).replace(c, f)
            }

            var v = void 0;
            if (typeof document !== "undefined") {
                var d = document.createElement("span");
                if ("textContent" in d) {
                    v = function e(t, r) {
                        t.textContent = r
                    }
                } else {
                    v = function e(t, r) {
                        t.innerText = r
                    }
                }
            }

            function p(e) {
                v(e, "")
            }

            t.exports = {contains: i, deflt: l, escape: h, hyphenate: o, indexOf: n, setTextContent: v, clearNode: p}
        }, {}]
    }, {}, [1])(1)
});
