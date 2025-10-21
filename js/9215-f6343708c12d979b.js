(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9215],
    {
        70350: function (t, e) {
            var n = function (t) {
                    (this.message = t),
                        (this.toString = function () {
                            return this.constructor.name + ": " + this.message;
                        });
                },
                r = function (t) {
                    this.firstWeekDay = t || 0;
                };
            r.prototype = {
                constructor: r,
                weekStartDate: function (t) {
                    for (var e = new Date(t.getTime()); e.getDay() !== this.firstWeekDay; ) e.setDate(e.getDate() - 1);
                    return e;
                },
                monthDates: function (t, e, r, i) {
                    if ("number" != typeof t || t < 1970) throw new n("year must be a number >= 1970");
                    if ("number" != typeof e || e < 0 || e > 11) throw new n("month must be a number (Jan is 0)");
                    var o = [],
                        s = [],
                        a = 0,
                        l = this.weekStartDate(new Date(t, e, 1));
                    do {
                        for (a = 0; a < 7; a++) s.push(r ? r(l) : l), (l = new Date(l.getTime())).setDate(l.getDate() + 1);
                        o.push(i ? i(s) : s), (s = []);
                    } while (l.getMonth() <= e && l.getFullYear() === t);
                    return o;
                },
                monthDays: function (t, e) {
                    return this.monthDates(t, e, function (t) {
                        return t.getMonth() === e ? t.getDate() : 0;
                    });
                },
                monthText: function (t, e) {
                    if (void 0 === t) {
                        var n = new Date();
                        (t = n.getFullYear()), (e = n.getMonth());
                    }
                    return this.monthDates(
                        t,
                        e,
                        function (t) {
                            for (var n = t.getMonth() === e ? t.getDate().toString() : "  "; n.length < 2; ) n = " " + n;
                            return n;
                        },
                        function (t) {
                            return t.join(" ");
                        }
                    ).join("\n");
                },
            };
            for (var i = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" "), o = 0; o < i.length; o++) r[i[o]] = o;
            e.f = r;
        },
        84772: function (t, e) {
            var n;
            !(function () {
                "use strict";
                var r = {}.hasOwnProperty;
                function i() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) t.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var s = i.apply(null, n);
                                    s && t.push(s);
                                }
                            } else if ("object" === o) {
                                if (n.toString === Object.prototype.toString) for (var a in n) r.call(n, a) && n[a] && t.push(a);
                                else t.push(n.toString());
                            }
                        }
                    }
                    return t.join(" ");
                }
                t.exports
                    ? ((i.default = i), (t.exports = i))
                    : void 0 !==
                          (n = function () {
                              return i;
                          }.apply(e, [])) && (t.exports = n);
            })();
        },
        4078: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            let r = t => parseFloat(t.toFixed(1));
            class i {
                constructor(t, e) {
                    (this.days = () => r(this.difference / 864e5)),
                        (this.weeks = () => r(this.days() / 7)),
                        (this.hours = () => r(this.difference / 36e5)),
                        (this.minutes = () => r(this.difference / 6e4)),
                        (this.seconds = () => r(this.difference / 1e3)),
                        (this.months = () => {
                            let t = (this.date1.getFullYear() - this.date2.getFullYear()) * 12;
                            t += this.date1.getMonth() - this.date2.getMonth();
                            let e = this.endOfMonth(this.date2).getDate();
                            return r((t += this.date1.getDate() / e - this.date2.getDate() / e));
                        }),
                        (this.years = () => {
                            let t = this.date1.getFullYear() - this.date2.getFullYear();
                            return r((t += (this.dayOfYear(this.date1) - this.dayOfYear(this.date2)) / this.daysInYear(this.date2)));
                        }),
                        (this.endOfMonth = t => new Date(t.getFullYear(), t.getMonth() + 1, 0)),
                        (this.dayOfYear = t => (t.getTime() - this.beginOfYear(t).getTime()) / 864e5),
                        (this.daysInYear = t => (this.endOfYear(t).getTime() - this.beginOfYear(t).getTime()) / 864e5),
                        (this.beginOfYear = t => new Date(t.getFullYear(), 0, 0)),
                        (this.endOfYear = t => new Date(t.getFullYear() + 1, 0, 0)),
                        (this.date1 = t),
                        (this.date2 = e),
                        (this.difference = Math.floor(t.getTime() - e.getTime()));
                }
            }
            Date.diff = (t, e) => new i(t, e);
        },
        51567: function (t) {
            "use strict";
            var e = function (t) {
                    var e;
                    return !!t && "object" == typeof t && "[object RegExp]" !== (e = Object.prototype.toString.call(t)) && "[object Date]" !== e && t.$$typeof !== n;
                },
                n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
            function r(t, e) {
                return !1 !== e.clone && e.isMergeableObject(t) ? a(Array.isArray(t) ? [] : {}, t, e) : t;
            }
            function i(t, e, n) {
                return t.concat(e).map(function (t) {
                    return r(t, n);
                });
            }
            function o(t) {
                return Object.keys(t).concat(
                    Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(t).filter(function (e) {
                              return Object.propertyIsEnumerable.call(t, e);
                          })
                        : []
                );
            }
            function s(t, e) {
                try {
                    return e in t;
                } catch (t) {
                    return !1;
                }
            }
            function a(t, n, l) {
                ((l = l || {}).arrayMerge = l.arrayMerge || i), (l.isMergeableObject = l.isMergeableObject || e), (l.cloneUnlessOtherwiseSpecified = r);
                var c,
                    u,
                    h = Array.isArray(n);
                return h !== Array.isArray(t)
                    ? r(n, l)
                    : h
                    ? l.arrayMerge(t, n, l)
                    : ((u = {}),
                      (c = l).isMergeableObject(t) &&
                          o(t).forEach(function (e) {
                              u[e] = r(t[e], c);
                          }),
                      o(n).forEach(function (e) {
                          (!s(t, e) || (Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))) &&
                              (s(t, e) && c.isMergeableObject(n[e])
                                  ? (u[e] = (function (t, e) {
                                        if (!e.customMerge) return a;
                                        var n = e.customMerge(t);
                                        return "function" == typeof n ? n : a;
                                    })(e, c)(t[e], n[e], c))
                                  : (u[e] = r(n[e], c)));
                      }),
                      u);
            }
            (a.all = function (t, e) {
                if (!Array.isArray(t)) throw Error("first argument should be an array");
                return t.reduce(function (t, n) {
                    return a(t, n, e);
                }, {});
            }),
                (t.exports = a);
        },
        99504: function (t, e) {
            "use strict";
            var n, r;
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0),
                ((r = n = e.ElementType || (e.ElementType = {})).Root = "root"),
                (r.Text = "text"),
                (r.Directive = "directive"),
                (r.Comment = "comment"),
                (r.Script = "script"),
                (r.Style = "style"),
                (r.Tag = "tag"),
                (r.CDATA = "cdata"),
                (r.Doctype = "doctype"),
                (e.isTag = function (t) {
                    return t.type === n.Tag || t.type === n.Script || t.type === n.Style;
                }),
                (e.Root = n.Root),
                (e.Text = n.Text),
                (e.Directive = n.Directive),
                (e.Comment = n.Comment),
                (e.Script = n.Script),
                (e.Style = n.Style),
                (e.Tag = n.Tag),
                (e.CDATA = n.CDATA),
                (e.Doctype = n.Doctype);
        },
        43390: function (t, e, n) {
            "use strict";
            var r =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function (t, e, n, r) {
                              void 0 === r && (r = n);
                              var i = Object.getOwnPropertyDescriptor(e, n);
                              (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
                                  (i = {
                                      enumerable: !0,
                                      get: function () {
                                          return e[n];
                                      },
                                  }),
                                  Object.defineProperty(t, r, i);
                          }
                        : function (t, e, n, r) {
                              void 0 === r && (r = n), (t[r] = e[n]);
                          }),
                i =
                    (this && this.__exportStar) ||
                    function (t, e) {
                        for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || r(e, t, n);
                    };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.DomHandler = void 0);
            var o = n(99504),
                s = n(8471);
            i(n(8471), e);
            var a = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
                l = (function () {
                    function t(t, e, n) {
                        (this.dom = []),
                            (this.root = new s.Document(this.dom)),
                            (this.done = !1),
                            (this.tagStack = [this.root]),
                            (this.lastNode = null),
                            (this.parser = null),
                            "function" == typeof e && ((n = e), (e = a)),
                            "object" == typeof t && ((e = t), (t = void 0)),
                            (this.callback = null != t ? t : null),
                            (this.options = null != e ? e : a),
                            (this.elementCB = null != n ? n : null);
                    }
                    return (
                        (t.prototype.onparserinit = function (t) {
                            this.parser = t;
                        }),
                        (t.prototype.onreset = function () {
                            (this.dom = []), (this.root = new s.Document(this.dom)), (this.done = !1), (this.tagStack = [this.root]), (this.lastNode = null), (this.parser = null);
                        }),
                        (t.prototype.onend = function () {
                            this.done || ((this.done = !0), (this.parser = null), this.handleCallback(null));
                        }),
                        (t.prototype.onerror = function (t) {
                            this.handleCallback(t);
                        }),
                        (t.prototype.onclosetag = function () {
                            this.lastNode = null;
                            var t = this.tagStack.pop();
                            this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t);
                        }),
                        (t.prototype.onopentag = function (t, e) {
                            var n = this.options.xmlMode ? o.ElementType.Tag : void 0,
                                r = new s.Element(t, e, void 0, n);
                            this.addNode(r), this.tagStack.push(r);
                        }),
                        (t.prototype.ontext = function (t) {
                            var e = this.lastNode;
                            if (e && e.type === o.ElementType.Text) (e.data += t), this.options.withEndIndices && (e.endIndex = this.parser.endIndex);
                            else {
                                var n = new s.Text(t);
                                this.addNode(n), (this.lastNode = n);
                            }
                        }),
                        (t.prototype.oncomment = function (t) {
                            if (this.lastNode && this.lastNode.type === o.ElementType.Comment) {
                                this.lastNode.data += t;
                                return;
                            }
                            var e = new s.Comment(t);
                            this.addNode(e), (this.lastNode = e);
                        }),
                        (t.prototype.oncommentend = function () {
                            this.lastNode = null;
                        }),
                        (t.prototype.oncdatastart = function () {
                            var t = new s.Text(""),
                                e = new s.CDATA([t]);
                            this.addNode(e), (t.parent = e), (this.lastNode = t);
                        }),
                        (t.prototype.oncdataend = function () {
                            this.lastNode = null;
                        }),
                        (t.prototype.onprocessinginstruction = function (t, e) {
                            var n = new s.ProcessingInstruction(t, e);
                            this.addNode(n);
                        }),
                        (t.prototype.handleCallback = function (t) {
                            if ("function" == typeof this.callback) this.callback(t, this.dom);
                            else if (t) throw t;
                        }),
                        (t.prototype.addNode = function (t) {
                            var e = this.tagStack[this.tagStack.length - 1],
                                n = e.children[e.children.length - 1];
                            this.options.withStartIndices && (t.startIndex = this.parser.startIndex),
                                this.options.withEndIndices && (t.endIndex = this.parser.endIndex),
                                e.children.push(t),
                                n && ((t.prev = n), (n.next = t)),
                                (t.parent = e),
                                (this.lastNode = null);
                        }),
                        t
                    );
                })();
            (e.DomHandler = l), (e.default = l);
        },
        8471: function (t, e, n) {
            "use strict";
            var r,
                i =
                    (this && this.__extends) ||
                    ((r = function (t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function (t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                    }),
                o =
                    (this && this.__assign) ||
                    function () {
                        return (o =
                            Object.assign ||
                            function (t) {
                                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                return t;
                            }).apply(this, arguments);
                    };
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.cloneNode =
                    e.hasChildren =
                    e.isDocument =
                    e.isDirective =
                    e.isComment =
                    e.isText =
                    e.isCDATA =
                    e.isTag =
                    e.Element =
                    e.Document =
                    e.CDATA =
                    e.NodeWithChildren =
                    e.ProcessingInstruction =
                    e.Comment =
                    e.Text =
                    e.DataNode =
                    e.Node =
                        void 0);
            var s = n(99504),
                a = (function () {
                    function t() {
                        (this.parent = null), (this.prev = null), (this.next = null), (this.startIndex = null), (this.endIndex = null);
                    }
                    return (
                        Object.defineProperty(t.prototype, "parentNode", {
                            get: function () {
                                return this.parent;
                            },
                            set: function (t) {
                                this.parent = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "previousSibling", {
                            get: function () {
                                return this.prev;
                            },
                            set: function (t) {
                                this.prev = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "nextSibling", {
                            get: function () {
                                return this.next;
                            },
                            set: function (t) {
                                this.next = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.cloneNode = function (t) {
                            return void 0 === t && (t = !1), S(this, t);
                        }),
                        t
                    );
                })();
            e.Node = a;
            var l = (function (t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return (n.data = e), n;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeValue", {
                        get: function () {
                            return this.data;
                        },
                        set: function (t) {
                            this.data = t;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(a);
            e.DataNode = l;
            var c = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.type = s.ElementType.Text), e;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 3;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(l);
            e.Text = c;
            var u = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.type = s.ElementType.Comment), e;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 8;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(l);
            e.Comment = u;
            var h = (function (t) {
                function e(e, n) {
                    var r = t.call(this, n) || this;
                    return (r.name = e), (r.type = s.ElementType.Directive), r;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 1;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(l);
            e.ProcessingInstruction = h;
            var d = (function (t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return (n.children = e), n;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "firstChild", {
                        get: function () {
                            var t;
                            return null !== (t = this.children[0]) && void 0 !== t ? t : null;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lastChild", {
                        get: function () {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "childNodes", {
                        get: function () {
                            return this.children;
                        },
                        set: function (t) {
                            this.children = t;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(a);
            e.NodeWithChildren = d;
            var p = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.type = s.ElementType.CDATA), e;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 4;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(d);
            e.CDATA = p;
            var f = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.type = s.ElementType.Root), e;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 9;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(d);
            e.Document = f;
            var m = (function (t) {
                function e(e, n, r, i) {
                    void 0 === r && (r = []), void 0 === i && (i = "script" === e ? s.ElementType.Script : "style" === e ? s.ElementType.Style : s.ElementType.Tag);
                    var o = t.call(this, r) || this;
                    return (o.name = e), (o.attribs = n), (o.type = i), o;
                }
                return (
                    i(e, t),
                    Object.defineProperty(e.prototype, "nodeType", {
                        get: function () {
                            return 1;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "tagName", {
                        get: function () {
                            return this.name;
                        },
                        set: function (t) {
                            this.name = t;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "attributes", {
                        get: function () {
                            var t = this;
                            return Object.keys(this.attribs).map(function (e) {
                                var n, r;
                                return {
                                    name: e,
                                    value: t.attribs[e],
                                    namespace: null === (n = t["x-attribsNamespace"]) || void 0 === n ? void 0 : n[e],
                                    prefix: null === (r = t["x-attribsPrefix"]) || void 0 === r ? void 0 : r[e],
                                };
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })(d);
            function g(t) {
                return (0, s.isTag)(t);
            }
            function y(t) {
                return t.type === s.ElementType.CDATA;
            }
            function v(t) {
                return t.type === s.ElementType.Text;
            }
            function b(t) {
                return t.type === s.ElementType.Comment;
            }
            function w(t) {
                return t.type === s.ElementType.Directive;
            }
            function x(t) {
                return t.type === s.ElementType.Root;
            }
            function S(t, e) {
                if ((void 0 === e && (e = !1), v(t))) n = new c(t.data);
                else if (b(t)) n = new u(t.data);
                else if (g(t)) {
                    var n,
                        r = e ? k(t.children) : [],
                        i = new m(t.name, o({}, t.attribs), r);
                    r.forEach(function (t) {
                        return (t.parent = i);
                    }),
                        null != t.namespace && (i.namespace = t.namespace),
                        t["x-attribsNamespace"] && (i["x-attribsNamespace"] = o({}, t["x-attribsNamespace"])),
                        t["x-attribsPrefix"] && (i["x-attribsPrefix"] = o({}, t["x-attribsPrefix"])),
                        (n = i);
                } else if (y(t)) {
                    var r = e ? k(t.children) : [],
                        s = new p(r);
                    r.forEach(function (t) {
                        return (t.parent = s);
                    }),
                        (n = s);
                } else if (x(t)) {
                    var r = e ? k(t.children) : [],
                        a = new f(r);
                    r.forEach(function (t) {
                        return (t.parent = a);
                    }),
                        t["x-mode"] && (a["x-mode"] = t["x-mode"]),
                        (n = a);
                } else if (w(t)) {
                    var l = new h(t.name, t.data);
                    null != t["x-name"] && ((l["x-name"] = t["x-name"]), (l["x-publicId"] = t["x-publicId"]), (l["x-systemId"] = t["x-systemId"])), (n = l);
                } else throw Error("Not implemented yet: ".concat(t.type));
                return (n.startIndex = t.startIndex), (n.endIndex = t.endIndex), null != t.sourceCodeLocation && (n.sourceCodeLocation = t.sourceCodeLocation), n;
            }
            function k(t) {
                for (
                    var e = t.map(function (t) {
                            return S(t, !0);
                        }),
                        n = 1;
                    n < e.length;
                    n++
                )
                    (e[n].prev = e[n - 1]), (e[n - 1].next = e[n]);
                return e;
            }
            (e.Element = m),
                (e.isTag = g),
                (e.isCDATA = y),
                (e.isText = v),
                (e.isComment = b),
                (e.isDirective = w),
                (e.isDocument = x),
                (e.hasChildren = function (t) {
                    return Object.prototype.hasOwnProperty.call(t, "children");
                }),
                (e.cloneNode = S);
        },
        63752: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0),
                (e.CASE_SENSITIVE_TAG_NAMES = [
                    "animateMotion",
                    "animateTransform",
                    "clipPath",
                    "feBlend",
                    "feColorMatrix",
                    "feComponentTransfer",
                    "feComposite",
                    "feConvolveMatrix",
                    "feDiffuseLighting",
                    "feDisplacementMap",
                    "feDropShadow",
                    "feFlood",
                    "feFuncA",
                    "feFuncB",
                    "feFuncG",
                    "feFuncR",
                    "feGaussianBlur",
                    "feImage",
                    "feMerge",
                    "feMergeNode",
                    "feMorphology",
                    "feOffset",
                    "fePointLight",
                    "feSpecularLighting",
                    "feSpotLight",
                    "feTile",
                    "feTurbulence",
                    "foreignObject",
                    "linearGradient",
                    "radialGradient",
                    "textPath",
                ]),
                (e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function (t, e) {
                    return (t[e.toLowerCase()] = e), t;
                }, {}));
        },
        15426: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n,
                r = "html",
                i = "head",
                o = "body",
                s = /<([a-zA-Z]+[0-9]?)/,
                a = /<head[^]*>/i,
                l = /<body[^]*>/i,
                c = function (t, e) {
                    throw Error("This browser does not support `document.implementation.createHTMLDocument`");
                },
                u = function (t, e) {
                    throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
                },
                h = "object" == typeof window && window.DOMParser;
            if ("function" == typeof h) {
                var d = new h();
                c = u = function (t, e) {
                    return e && (t = "<".concat(e, ">").concat(t, "</").concat(e, ">")), d.parseFromString(t, "text/html");
                };
            }
            if ("object" == typeof document && document.implementation) {
                var p = document.implementation.createHTMLDocument();
                c = function (t, e) {
                    if (e) {
                        var n = p.documentElement.querySelector(e);
                        return n && (n.innerHTML = t), p;
                    }
                    return (p.documentElement.innerHTML = t), p;
                };
            }
            var f = "object" == typeof document && document.createElement("template");
            f &&
                f.content &&
                (n = function (t) {
                    return (f.innerHTML = t), f.content.childNodes;
                }),
                (e.default = function (t) {
                    var e,
                        h,
                        d = t.match(s),
                        p = d && d[1] ? d[1].toLowerCase() : "";
                    switch (p) {
                        case r:
                            var f = u(t);
                            if (!a.test(t)) {
                                var m = f.querySelector(i);
                                null === (e = null == m ? void 0 : m.parentNode) || void 0 === e || e.removeChild(m);
                            }
                            if (!l.test(t)) {
                                var m = f.querySelector(o);
                                null === (h = null == m ? void 0 : m.parentNode) || void 0 === h || h.removeChild(m);
                            }
                            return f.querySelectorAll(r);
                        case i:
                        case o:
                            var g = c(t).querySelectorAll(p);
                            if (l.test(t) && a.test(t)) return g[0].parentNode.childNodes;
                            return g;
                        default:
                            if (n) return n(t);
                            var m = c(t, o).querySelector(o);
                            return m.childNodes;
                    }
                });
        },
        23082: function (t, e, n) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = r(n(15426)),
                o = n(56373),
                s = /<(![a-zA-Z\s]+)>/;
            e.default = function (t) {
                if ("string" != typeof t) throw TypeError("First argument must be a string");
                if (!t) return [];
                var e = t.match(s),
                    n = e ? e[1] : void 0;
                return (0, o.formatDOM)((0, i.default)(t), null, n);
            };
        },
        56373: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.formatDOM = e.formatAttributes = void 0);
            var r = n(43390),
                i = n(63752);
            function o(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    e[i.name] = i.value;
                }
                return e;
            }
            (e.formatAttributes = o),
                (e.formatDOM = function t(e, n, s) {
                    void 0 === n && (n = null);
                    for (var a, l = [], c = 0, u = e.length; c < u; c++) {
                        var h = e[c];
                        switch (h.nodeType) {
                            case 1:
                                var d = (function (t) {
                                    var e;
                                    return (e = t = t.toLowerCase()), i.CASE_SENSITIVE_TAG_NAMES_MAP[e] || t;
                                })(h.nodeName);
                                (a = new r.Element(d, o(h.attributes))).children = t("template" === d ? h.content.childNodes : h.childNodes, a);
                                break;
                            case 3:
                                a = new r.Text(h.nodeValue);
                                break;
                            case 8:
                                a = new r.Comment(h.nodeValue);
                                break;
                            default:
                                continue;
                        }
                        var p = l[c - 1] || null;
                        p && (p.next = a), (a.parent = n), (a.prev = p), (a.next = null), l.push(a);
                    }
                    return s && (((a = new r.ProcessingInstruction(s.substring(0, s.indexOf(" ")).toLowerCase(), s)).next = l[0] || null), (a.parent = n), l.unshift(a), l[1] && (l[1].prev = l[0])), l;
                });
        },
        17642: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(49455),
                i = n(29355),
                o = ["checked", "value"],
                s = ["input", "select", "textarea"],
                a = { reset: !0, submit: !0 };
            function l(t) {
                return r.possibleStandardNames[t];
            }
            e.default = function (t, e) {
                void 0 === t && (t = {});
                var n = {},
                    c = !!(t.type && a[t.type]);
                for (var u in t) {
                    var h = t[u];
                    if ((0, r.isCustomAttribute)(u)) {
                        n[u] = h;
                        continue;
                    }
                    var d = u.toLowerCase(),
                        p = l(d);
                    if (p) {
                        var f = (0, r.getPropertyInfo)(p);
                        switch ((o.includes(p) && s.includes(e) && !c && (p = l("default" + d)), (n[p] = h), f && f.type)) {
                            case r.BOOLEAN:
                                n[p] = !0;
                                break;
                            case r.OVERLOADED_BOOLEAN:
                                "" === h && (n[p] = !0);
                        }
                        continue;
                    }
                    i.PRESERVE_CUSTOM_ATTRIBUTES && (n[u] = h);
                }
                return (0, i.setStyleProp)(t.style, n), n;
            };
        },
        34471: function (t, e, n) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(2265),
                o = r(n(17642)),
                s = n(29355),
                a = { cloneElement: i.cloneElement, createElement: i.createElement, isValidElement: i.isValidElement };
            e.default = function t(e, n) {
                void 0 === n && (n = {});
                for (
                    var r = [],
                        i = "function" == typeof n.replace,
                        l = n.transform || s.returnFirstArg,
                        c = n.library || a,
                        u = c.cloneElement,
                        h = c.createElement,
                        d = c.isValidElement,
                        p = e.length,
                        f = 0;
                    f < p;
                    f++
                ) {
                    var m = e[f];
                    if (i) {
                        var g = n.replace(m, f);
                        if (d(g)) {
                            p > 1 && (g = u(g, { key: g.key || f })), r.push(l(g, m, f));
                            continue;
                        }
                    }
                    if ("text" === m.type) {
                        var y = !m.data.trim().length;
                        if ((y && m.parent && !(0, s.canTextBeChildOfNode)(m.parent)) || (n.trim && y)) continue;
                        r.push(l(m.data, m, f));
                        continue;
                    }
                    var v = {};
                    s.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === m.type && (0, s.isCustomComponent)(m.name, m.attribs)
                        ? ((0, s.setStyleProp)(m.attribs.style, m.attribs), (v = m.attribs))
                        : m.attribs && (v = (0, o.default)(m.attribs, m.name));
                    var b = void 0;
                    switch (m.type) {
                        case "script":
                        case "style":
                            m.children[0] && (v.dangerouslySetInnerHTML = { __html: m.children[0].data });
                            break;
                        case "tag":
                            "textarea" === m.name && m.children[0] ? (v.defaultValue = m.children[0].data) : m.children && m.children.length && (b = t(m.children, n));
                            break;
                        default:
                            continue;
                    }
                    p > 1 && (v.key = f), r.push(l(h(m.name, v, b), m, f));
                }
                return 1 === r.length ? r[0] : r;
            };
        },
        24441: function (t, e, n) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0);
            var i = r(n(23082));
            e.htmlToDOM = i.default;
            var o = r(n(17642));
            e.attributesToProps = o.default;
            var s = r(n(34471));
            e.domToReact = s.default;
            var a = n(43390);
            Object.defineProperty(e, "Comment", {
                enumerable: !0,
                get: function () {
                    return a.Comment;
                },
            }),
                Object.defineProperty(e, "Element", {
                    enumerable: !0,
                    get: function () {
                        return a.Element;
                    },
                }),
                Object.defineProperty(e, "ProcessingInstruction", {
                    enumerable: !0,
                    get: function () {
                        return a.ProcessingInstruction;
                    },
                }),
                Object.defineProperty(e, "Text", {
                    enumerable: !0,
                    get: function () {
                        return a.Text;
                    },
                });
            var l = { lowerCaseAttributeNames: !1 };
            e.default = function (t, e) {
                if ("string" != typeof t) throw TypeError("First argument must be a string");
                return t ? (0, s.default)((0, i.default)(t, (null == e ? void 0 : e.htmlparser2) || l), e) : [];
            };
        },
        29355: function (t, e, n) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = e.setStyleProp = e.isCustomComponent = void 0);
            var i = n(2265),
                o = r(n(95693)),
                s = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
            e.isCustomComponent = function (t, e) {
                return t.includes("-") ? !s.has(t) : !!(e && "string" == typeof e.is);
            };
            var a = { reactCompat: !0 };
            (e.setStyleProp = function (t, e) {
                if ("string" == typeof t) {
                    if (!t.trim()) {
                        e.style = {};
                        return;
                    }
                    try {
                        e.style = (0, o.default)(t, a);
                    } catch (t) {
                        e.style = {};
                    }
                }
            }),
                (e.PRESERVE_CUSTOM_ATTRIBUTES = Number(i.version.split(".")[0]) >= 16),
                (e.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"])),
                (e.canTextBeChildOfNode = function (t) {
                    return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name);
                }),
                (e.returnFirstArg = function (t) {
                    return t;
                });
        },
        80662: function (t) {
            var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                a = /^[;\s]*/,
                l = /^\s+|\s+$/g;
            function c(t) {
                return t ? t.replace(l, "") : "";
            }
            t.exports = function (t, l) {
                if ("string" != typeof t) throw TypeError("First argument must be a string");
                if (!t) return [];
                l = l || {};
                var u = 1,
                    h = 1;
                function d(t) {
                    var e = t.match(n);
                    e && (u += e.length);
                    var r = t.lastIndexOf("\n");
                    h = ~r ? t.length - r : h + t.length;
                }
                function p() {
                    var t = { line: u, column: h };
                    return function (e) {
                        return (e.position = new f(t)), y(r), e;
                    };
                }
                function f(t) {
                    (this.start = t), (this.end = { line: u, column: h }), (this.source = l.source);
                }
                f.prototype.content = t;
                var m = [];
                function g(e) {
                    var n = Error(l.source + ":" + u + ":" + h + ": " + e);
                    if (((n.reason = e), (n.filename = l.source), (n.line = u), (n.column = h), (n.source = t), l.silent)) m.push(n);
                    else throw n;
                }
                function y(e) {
                    var n = e.exec(t);
                    if (n) {
                        var r = n[0];
                        return d(r), (t = t.slice(r.length)), n;
                    }
                }
                function v(t) {
                    var e;
                    for (t = t || []; (e = b()); ) !1 !== e && t.push(e);
                    return t;
                }
                function b() {
                    var e = p();
                    if ("/" == t.charAt(0) && "*" == t.charAt(1)) {
                        for (var n = 2; "" != t.charAt(n) && ("*" != t.charAt(n) || "/" != t.charAt(n + 1)); ) ++n;
                        if (((n += 2), "" === t.charAt(n - 1))) return g("End of comment missing");
                        var r = t.slice(2, n - 2);
                        return (h += 2), d(r), (t = t.slice(n)), (h += 2), e({ type: "comment", comment: r });
                    }
                }
                return (
                    y(r),
                    (function () {
                        var t,
                            n = [];
                        for (
                            v(n);
                            (t = (function () {
                                var t = p(),
                                    n = y(i);
                                if (n) {
                                    if ((b(), !y(o))) return g("property missing ':'");
                                    var r = y(s),
                                        l = t({ type: "declaration", property: c(n[0].replace(e, "")), value: r ? c(r[0].replace(e, "")) : "" });
                                    return y(a), l;
                                }
                            })());

                        )
                            !1 !== t && (n.push(t), v(n));
                        return n;
                    })()
                );
            };
        },
        26649: function (t) {
            function e(t, e) {
                (t.onload = function () {
                    (this.onerror = this.onload = null), e(null, t);
                }),
                    (t.onerror = function () {
                        (this.onerror = this.onload = null), e(Error("Failed to load " + this.src), t);
                    });
            }
            t.exports = function (t, n, r) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                "function" == typeof n && ((r = n), (n = {})),
                    (n = n || {}),
                    (r = r || function () {}),
                    (o.type = n.type || "text/javascript"),
                    (o.charset = n.charset || "utf8"),
                    (o.async = !("async" in n) || !!n.async),
                    (o.src = t),
                    n.attrs &&
                        (function (t, e) {
                            for (var n in e) t.setAttribute(n, e[n]);
                        })(o, n.attrs),
                    n.text && (o.text = "" + n.text),
                    ("onload" in o
                        ? e
                        : function (t, e) {
                              t.onreadystatechange = function () {
                                  ("complete" == this.readyState || "loaded" == this.readyState) && ((this.onreadystatechange = null), e(null, t));
                              };
                          })(o, r),
                    o.onload || e(o, r),
                    i.appendChild(o);
            };
        },
        34357: function (t, e, n) {
            t = n.nmd(t);
            var r,
                i = "__lodash_hash_undefined__",
                o = "[object Arguments]",
                s = "[object Boolean]",
                a = "[object Date]",
                l = "[object Function]",
                c = "[object GeneratorFunction]",
                u = "[object Map]",
                h = "[object Number]",
                d = "[object Object]",
                p = "[object Promise]",
                f = "[object RegExp]",
                m = "[object Set]",
                g = "[object String]",
                y = "[object Symbol]",
                v = "[object WeakMap]",
                b = "[object ArrayBuffer]",
                w = "[object DataView]",
                x = "[object Float32Array]",
                S = "[object Float64Array]",
                k = "[object Int8Array]",
                M = "[object Int16Array]",
                C = "[object Int32Array]",
                E = "[object Uint8Array]",
                O = "[object Uint8ClampedArray]",
                _ = "[object Uint16Array]",
                T = "[object Uint32Array]",
                P = /\w*$/,
                A = /^\[object .+?Constructor\]$/,
                D = /^(?:0|[1-9]\d*)$/,
                I = {};
            (I[o] = I["[object Array]"] = I[b] = I[w] = I[s] = I[a] = I[x] = I[S] = I[k] = I[M] = I[C] = I[u] = I[h] = I[d] = I[f] = I[m] = I[g] = I[y] = I[E] = I[O] = I[_] = I[T] = !0),
                (I["[object Error]"] = I[l] = I[v] = !1);
            var R = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                N = "object" == typeof self && self && self.Object === Object && self,
                z = R || N || Function("return this")(),
                j = e && !e.nodeType && e,
                L = j && t && !t.nodeType && t,
                F = L && L.exports === j;
            function H(t, e) {
                return t.set(e[0], e[1]), t;
            }
            function B(t, e) {
                return t.add(e), t;
            }
            function $(t, e, n, r) {
                var i = -1,
                    o = t ? t.length : 0;
                for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
                return n;
            }
            function W(t) {
                var e = !1;
                if (null != t && "function" != typeof t.toString)
                    try {
                        e = !!(t + "");
                    } catch (t) {}
                return e;
            }
            function Z(t) {
                var e = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function (t, r) {
                        n[++e] = [r, t];
                    }),
                    n
                );
            }
            function V(t, e) {
                return function (n) {
                    return t(e(n));
                };
            }
            function U(t) {
                var e = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function (t) {
                        n[++e] = t;
                    }),
                    n
                );
            }
            var Y = Array.prototype,
                J = Function.prototype,
                q = Object.prototype,
                K = z["__core-js_shared__"],
                X = (r = /[^.]+$/.exec((K && K.keys && K.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "",
                G = J.toString,
                Q = q.hasOwnProperty,
                tt = q.toString,
                te = RegExp(
                    "^" +
                        G.call(Q)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$"
                ),
                tn = F ? z.Buffer : void 0,
                tr = z.Symbol,
                ti = z.Uint8Array,
                to = V(Object.getPrototypeOf, Object),
                ts = Object.create,
                ta = q.propertyIsEnumerable,
                tl = Y.splice,
                tc = Object.getOwnPropertySymbols,
                tu = tn ? tn.isBuffer : void 0,
                th = V(Object.keys, Object),
                td = tR(z, "DataView"),
                tp = tR(z, "Map"),
                tf = tR(z, "Promise"),
                tm = tR(z, "Set"),
                tg = tR(z, "WeakMap"),
                ty = tR(Object, "create"),
                tv = tL(td),
                tb = tL(tp),
                tw = tL(tf),
                tx = tL(tm),
                tS = tL(tg),
                tk = tr ? tr.prototype : void 0,
                tM = tk ? tk.valueOf : void 0;
            function tC(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            function tE(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            function tO(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            function t_(t) {
                this.__data__ = new tE(t);
            }
            function tT(t, e, n) {
                var r = t[e];
                (Q.call(t, e) && tF(r, n) && (void 0 !== n || e in t)) || (t[e] = n);
            }
            function tP(t, e) {
                for (var n = t.length; n--; ) if (tF(t[n][0], e)) return n;
                return -1;
            }
            function tA(t) {
                var e = new t.constructor(t.byteLength);
                return new ti(e).set(new ti(t)), e;
            }
            function tD(t, e, n, r) {
                n || (n = {});
                for (var i = -1, o = e.length; ++i < o; ) {
                    var s = e[i],
                        a = r ? r(n[s], t[s], s, n, t) : void 0;
                    tT(n, s, void 0 === a ? t[s] : a);
                }
                return n;
            }
            function tI(t, e) {
                var n,
                    r = t.__data__;
                return ("string" == (n = typeof e) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
            }
            function tR(t, e) {
                var n = null == t ? void 0 : t[e];
                return !(!tZ(n) || (X && X in n)) && (tW(n) || W(n) ? te : A).test(tL(n)) ? n : void 0;
            }
            (tC.prototype.clear = function () {
                this.__data__ = ty ? ty(null) : {};
            }),
                (tC.prototype.delete = function (t) {
                    return this.has(t) && delete this.__data__[t];
                }),
                (tC.prototype.get = function (t) {
                    var e = this.__data__;
                    if (ty) {
                        var n = e[t];
                        return n === i ? void 0 : n;
                    }
                    return Q.call(e, t) ? e[t] : void 0;
                }),
                (tC.prototype.has = function (t) {
                    var e = this.__data__;
                    return ty ? void 0 !== e[t] : Q.call(e, t);
                }),
                (tC.prototype.set = function (t, e) {
                    return (this.__data__[t] = ty && void 0 === e ? i : e), this;
                }),
                (tE.prototype.clear = function () {
                    this.__data__ = [];
                }),
                (tE.prototype.delete = function (t) {
                    var e = this.__data__,
                        n = tP(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : tl.call(e, n, 1), !0);
                }),
                (tE.prototype.get = function (t) {
                    var e = this.__data__,
                        n = tP(e, t);
                    return n < 0 ? void 0 : e[n][1];
                }),
                (tE.prototype.has = function (t) {
                    return tP(this.__data__, t) > -1;
                }),
                (tE.prototype.set = function (t, e) {
                    var n = this.__data__,
                        r = tP(n, t);
                    return r < 0 ? n.push([t, e]) : (n[r][1] = e), this;
                }),
                (tO.prototype.clear = function () {
                    this.__data__ = { hash: new tC(), map: new (tp || tE)(), string: new tC() };
                }),
                (tO.prototype.delete = function (t) {
                    return tI(this, t).delete(t);
                }),
                (tO.prototype.get = function (t) {
                    return tI(this, t).get(t);
                }),
                (tO.prototype.has = function (t) {
                    return tI(this, t).has(t);
                }),
                (tO.prototype.set = function (t, e) {
                    return tI(this, t).set(t, e), this;
                }),
                (t_.prototype.clear = function () {
                    this.__data__ = new tE();
                }),
                (t_.prototype.delete = function (t) {
                    return this.__data__.delete(t);
                }),
                (t_.prototype.get = function (t) {
                    return this.__data__.get(t);
                }),
                (t_.prototype.has = function (t) {
                    return this.__data__.has(t);
                }),
                (t_.prototype.set = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof tE) {
                        var r = n.__data__;
                        if (!tp || r.length < 199) return r.push([t, e]), this;
                        n = this.__data__ = new tO(r);
                    }
                    return n.set(t, e), this;
                });
            var tN = tc
                    ? V(tc, Object)
                    : function () {
                          return [];
                      },
                tz = function (t) {
                    return tt.call(t);
                };
            function tj(t) {
                var e = t && t.constructor;
                return t === (("function" == typeof e && e.prototype) || q);
            }
            function tL(t) {
                if (null != t) {
                    try {
                        return G.call(t);
                    } catch (t) {}
                    try {
                        return t + "";
                    } catch (t) {}
                }
                return "";
            }
            function tF(t, e) {
                return t === e || (t != t && e != e);
            }
            ((td && tz(new td(new ArrayBuffer(1))) != w) || (tp && tz(new tp()) != u) || (tf && tz(tf.resolve()) != p) || (tm && tz(new tm()) != m) || (tg && tz(new tg()) != v)) &&
                (tz = function (t) {
                    var e = tt.call(t),
                        n = e == d ? t.constructor : void 0,
                        r = n ? tL(n) : void 0;
                    if (r)
                        switch (r) {
                            case tv:
                                return w;
                            case tb:
                                return u;
                            case tw:
                                return p;
                            case tx:
                                return m;
                            case tS:
                                return v;
                        }
                    return e;
                });
            var tH = Array.isArray;
            function tB(t) {
                var e;
                return null != t && "number" == typeof (e = t.length) && e > -1 && e % 1 == 0 && e <= 9007199254740991 && !tW(t);
            }
            var t$ =
                tu ||
                function () {
                    return !1;
                };
            function tW(t) {
                var e = tZ(t) ? tt.call(t) : "";
                return e == l || e == c;
            }
            function tZ(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e);
            }
            function tV(t) {
                return tB(t)
                    ? (function (t, e) {
                          var n,
                              r =
                                  tH(t) || (t && "object" == typeof t && tB(t) && Q.call(t, "callee") && (!ta.call(t, "callee") || tt.call(t) == o))
                                      ? (function (t, e) {
                                            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                                            return r;
                                        })(t.length, String)
                                      : [],
                              i = r.length,
                              s = !!i;
                          for (var a in t)
                              Q.call(t, a) &&
                                  !(s && ("length" == a || ((n = null == (n = i) ? 9007199254740991 : n) && ("number" == typeof a || D.test(a)) && a > -1 && a % 1 == 0 && a < n))) &&
                                  r.push(a);
                          return r;
                      })(t)
                    : (function (t) {
                          if (!tj(t)) return th(t);
                          var e = [];
                          for (var n in Object(t)) Q.call(t, n) && "constructor" != n && e.push(n);
                          return e;
                      })(t);
            }
            t.exports = function (t) {
                return (function t(e, n, r, i, p, v, A) {
                    if ((i && (D = v ? i(e, p, v, A) : i(e)), void 0 !== D)) return D;
                    if (!tZ(e)) return e;
                    var D,
                        R = tH(e);
                    if (R) {
                        if (((N = e.length), (z = e.constructor(N)), N && "string" == typeof e[0] && Q.call(e, "index") && ((z.index = e.index), (z.input = e.input)), (D = z), !n))
                            return (function (t, e) {
                                var n = -1,
                                    r = t.length;
                                for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
                                return e;
                            })(e, D);
                    } else {
                        var N,
                            z,
                            j,
                            L,
                            F,
                            V,
                            Y = tz(e),
                            J = Y == l || Y == c;
                        if (t$(e))
                            return (function (t, e) {
                                if (e) return t.slice();
                                var n = new t.constructor(t.length);
                                return t.copy(n), n;
                            })(e, n);
                        if (Y == d || Y == o || (J && !v)) {
                            if (W(e)) return v ? e : {};
                            if (((D = "function" != typeof (j = J ? {} : e).constructor || tj(j) ? {} : tZ((L = to(j))) ? ts(L) : {}), !n)) return (F = (V = D) && tD(e, tV(e), V)), tD(e, tN(e), F);
                        } else {
                            if (!I[Y]) return v ? e : {};
                            D = (function (t, e, n, r) {
                                var i,
                                    o,
                                    l,
                                    c = t.constructor;
                                switch (e) {
                                    case b:
                                        return tA(t);
                                    case s:
                                    case a:
                                        return new c(+t);
                                    case w:
                                        return (i = r ? tA(t.buffer) : t.buffer), new t.constructor(i, t.byteOffset, t.byteLength);
                                    case x:
                                    case S:
                                    case k:
                                    case M:
                                    case C:
                                    case E:
                                    case O:
                                    case _:
                                    case T:
                                        return (o = r ? tA(t.buffer) : t.buffer), new t.constructor(o, t.byteOffset, t.length);
                                    case u:
                                        return $(r ? n(Z(t), !0) : Z(t), H, new t.constructor());
                                    case h:
                                    case g:
                                        return new c(t);
                                    case f:
                                        return ((l = new t.constructor(t.source, P.exec(t))).lastIndex = t.lastIndex), l;
                                    case m:
                                        return $(r ? n(U(t), !0) : U(t), B, new t.constructor());
                                    case y:
                                        return tM ? Object(tM.call(t)) : {};
                                }
                            })(e, Y, t, n);
                        }
                    }
                    A || (A = new t_());
                    var q = A.get(e);
                    if (q) return q;
                    if ((A.set(e, D), !R)) {
                        var K,
                            X,
                            G = r
                                ? ((X = tV((K = e))),
                                  tH(K)
                                      ? X
                                      : (function (t, e) {
                                            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
                                            return t;
                                        })(X, tN(K)))
                                : tV(e);
                    }
                    return (
                        !(function (t, e) {
                            for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t); );
                        })(G || e, function (o, s) {
                            G && (o = e[(s = o)]), tT(D, s, t(o, n, r, i, s, e, A));
                        }),
                        D
                    );
                })(t, !0, !0);
            };
        },
        17513: function (t, e, n) {
            "use strict";
            var r =
                    (this && this.__spreadArrays) ||
                    function () {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                        for (var r = Array(t), i = 0, e = 0; e < n; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                        return r;
                    },
                i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.getColors = e.flatten = e.replaceColor = e.colorify = void 0);
            var o = i(n(34357));
            e.colorify = function (t, e) {
                void 0 === t && (t = []);
                for (var n = [], r = 0, i = t; r < i.length; r++) {
                    var a = i[r];
                    n.push(s(a));
                }
                return l(n, o.default(e));
            };
            var s = function (t) {
                    if ("string" == typeof t && t.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        if (!e) throw Error("Color can be only hex or rgb array (ex. [10,20,30])");
                        return [Math.round((parseInt(e[1], 16) / 255) * 1e3) / 1e3, Math.round((parseInt(e[2], 16) / 255) * 1e3) / 1e3, Math.round((parseInt(e[3], 16) / 255) * 1e3) / 1e3];
                    }
                    if (
                        "object" == typeof t &&
                        3 === t.length &&
                        t.every(function (t) {
                            return t >= 0 && t <= 255;
                        })
                    )
                        return [Math.round((t[0] / 255) * 1e3) / 1e3, Math.round((t[1] / 255) * 1e3) / 1e3, Math.round((t[2] / 255) * 1e3) / 1e3];
                    if (t) throw Error("Color can be only hex or rgb array (ex. [10,20,30])");
                },
                a = function (t) {
                    return Math.round(1e3 * t) / 1e3;
                };
            (e.replaceColor = function (t, e, n) {
                var i = s(t),
                    l = s(e);
                if (!i || !l) throw Error("Proper colors must be used for both source and target");
                return (function t(e, n, i) {
                    if (i.s && Array.isArray(i.s) && 4 === i.s.length) e[0] === i.s[0] && e[1] === i.s[1] && e[2] === i.s[2] && (i.s = r(n, [1]));
                    else if (i.c && i.c.k) Array.isArray(i.c.k) && "number" != typeof i.c.k[0] ? t(e, n, i.c.k) : e[0] === a(i.c.k[0]) && e[1] === a(i.c.k[1]) && e[2] === a(i.c.k[2]) && (i.c.k = n);
                    else for (var o in i) "object" == typeof i[o] && t(e, n, i[o]);
                    return i;
                })(i, l, o.default(n));
            }),
                (e.flatten = function (t, e) {
                    var n = s(t);
                    if (!n) throw Error("Proper colors must be used for target");
                    return (function t(e, n) {
                        if (n.s && Array.isArray(n.s) && 4 === n.s.length) n.s = r(e, [1]);
                        else if (n.c && n.c.k) Array.isArray(n.c.k) && "number" != typeof n.c.k[0] ? t(e, n.c.k) : (n.c.k = e);
                        else for (var i in n) "object" == typeof n[i] && t(e, n[i]);
                        return n;
                    })(n, o.default(e));
                });
            var l = function (t, e) {
                var n = 0;
                return (function t(e, i) {
                    for (var o in (i.s && Array.isArray(i.s) && 4 === i.s.length
                        ? (e[n] && (i.s = r(e[n], [1])), n++)
                        : i.c && i.c.k && (Array.isArray(i.c.k) && "number" != typeof i.c.k[0] ? t(e, i.c.k) : (e[n] && (i.c.k = e[n]), n++)),
                    i))
                        "object" == typeof i[o] && t(e, i[o]);
                    return i;
                })(t, e);
            };
            e.getColors = function (t) {
                var e = [];
                return (
                    !(function t(n) {
                        var r, i;
                        if (n.s && Array.isArray(n.s) && 4 === n.s.length) e.push([Math.round(255 * (r = n.s)[0]), Math.round(255 * r[1]), Math.round(255 * r[2]), r[3]]);
                        else if (n.c && n.c.k)
                            Array.isArray(n.c.k) && "number" != typeof n.c.k[0] ? t(n.c.k) : e.push([Math.round(255 * (i = n.c.k)[0]), Math.round(255 * i[1]), Math.round(255 * i[2])]);
                        else for (var o in n) "object" == typeof n[o] && t(n[o]);
                        return e;
                    })(t),
                    e
                );
            };
        },
        22252: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("AlertCircle", [
                ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
                ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
            ]);
        },
        58310: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("AlignCenter", [
                ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
                ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
                ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }],
            ]);
        },
        31734: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("AlignLeft", [
                ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
                ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
                ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }],
            ]);
        },
        17881: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("AlignRight", [
                ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
                ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
                ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }],
            ]);
        },
        32660: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("ArrowLeft", [
                ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
                ["path", { d: "M19 12H5", key: "x3x0zl" }],
            ]);
        },
        76858: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("ArrowRight", [
                ["path", { d: "M5 12h14", key: "1ays0h" }],
                ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
            ]);
        },
        88501: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("CalendarDays", [
                ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
                ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
                ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
                ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
                ["path", { d: "M8 14h.01", key: "6423bh" }],
                ["path", { d: "M12 14h.01", key: "1etili" }],
                ["path", { d: "M16 14h.01", key: "1gbofw" }],
                ["path", { d: "M8 18h.01", key: "lrp35t" }],
                ["path", { d: "M12 18h.01", key: "mhygvu" }],
                ["path", { d: "M16 18h.01", key: "kzsmim" }],
            ]);
        },
        66901: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("CheckCircle2", [
                ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
            ]);
        },
        97418: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("CheckSquare", [
                ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
                ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }],
            ]);
        },
        40875: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
        },
        88997: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Heart", [
                ["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", key: "c3ymky" }],
            ]);
        },
        53113: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Image", [
                ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
                ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
                ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
            ]);
        },
        98335: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Link", [
                ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
                ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }],
            ]);
        },
        45554: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("ListChecks", [
                ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
                ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
                ["path", { d: "M13 6h8", key: "15sg57" }],
                ["path", { d: "M13 12h8", key: "h98zly" }],
                ["path", { d: "M13 18h8", key: "oe0vm4" }],
            ]);
        },
        20893: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("MailOpen", [
                ["path", { d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z", key: "1jhwl8" }],
                ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }],
            ]);
        },
        83774: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("MapPin", [
                ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
                ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
            ]);
        },
        14168: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("MapPinned", [
                ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
                ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
                ["path", { d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835", key: "112zkj" }],
            ]);
        },
        57109: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("MessageCircleHeart", [
                ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
                ["path", { d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7", key: "43lnbm" }],
            ]);
        },
        21047: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
        },
        22106: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Music", [
                ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
                ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
                ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
            ]);
        },
        13041: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Phone", [
                [
                    "path",
                    {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                        key: "foiqr5",
                    },
                ],
            ]);
        },
        22568: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("PiggyBank", [
                ["path", { d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z", key: "uf6l00" }],
                ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
                ["path", { d: "M16 11h0", key: "k2aug8" }],
            ]);
        },
        49550: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("PlaySquare", [
                ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
                ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }],
            ]);
        },
        99397: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Plus", [
                ["path", { d: "M5 12h14", key: "1ays0h" }],
                ["path", { d: "M12 5v14", key: "s699le" }],
            ]);
        },
        49998: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Sparkle", [
                ["path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z", key: "nraa5p" }],
            ]);
        },
        86595: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Star", [["polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", key: "8f66p6" }]]);
        },
        49137: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Text", [
                ["path", { d: "M17 6.1H3", key: "wptmhv" }],
                ["path", { d: "M21 12.1H3", key: "1j38uz" }],
                ["path", { d: "M15.1 18H3", key: "1nb16a" }],
            ]);
        },
        75277: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Type", [
                ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
                ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
                ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
            ]);
        },
        42820: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(39763).Z)("Wand2", [
                ["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z", key: "1bcowg" }],
                ["path", { d: "m14 7 3 3", key: "1r5n42" }],
                ["path", { d: "M5 6v4", key: "ilb8ba" }],
                ["path", { d: "M19 14v4", key: "blhpug" }],
                ["path", { d: "M10 2v2", key: "7u0qdc" }],
                ["path", { d: "M7 8H3", key: "zfb6yr" }],
                ["path", { d: "M21 16h-4", key: "1cnmox" }],
                ["path", { d: "M11 3H9", key: "1obp7u" }],
            ]);
        },
        1410: function (t, e, n) {
            "use strict";
            n.r(e);
            var r =
                Number.isNaN ||
                function (t) {
                    return "number" == typeof t && t != t;
                };
            function i(t, e) {
                if (t.length !== e.length) return !1;
                for (var n, i, o = 0; o < t.length; o++) if (!((n = t[o]) === (i = e[o]) || (r(n) && r(i)))) return !1;
                return !0;
            }
            e.default = function (t, e) {
                void 0 === e && (e = i);
                var n,
                    r,
                    o = [],
                    s = !1;
                return function () {
                    for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                    return (s && n === this && e(i, o)) || ((r = t.apply(this, i)), (s = !0), (n = this), (o = i)), r;
                };
            };
        },
        30166: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return i.a;
                },
            });
            var r = n(55775),
                i = n.n(r);
        },
        55775: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(47043);
            n(57437), n(2265);
            let i = r._(n(15602));
            function o(t, e) {
                var n;
                let r = {
                    loading: t => {
                        let { error: e, isLoading: n, pastDelay: r } = t;
                        return null;
                    },
                };
                "function" == typeof t && (r.loader = t);
                let o = { ...r, ...e };
                return (0, i.default)({ ...o, modules: null == (n = o.loadableGenerated) ? void 0 : n.modules });
            }
            ("function" == typeof e.default || ("object" == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
        81523: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let r = n(18993);
            function i(t) {
                let { reason: e, children: n } = t;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(e);
                return n;
            }
        },
        15602: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return c;
                    },
                });
            let r = n(57437),
                i = n(2265),
                o = n(81523),
                s = n(70049);
            function a(t) {
                return { default: t && "default" in t ? t.default : t };
            }
            let l = { loader: () => Promise.resolve(a(() => null)), loading: null, ssr: !0 },
                c = function (t) {
                    let e = { ...l, ...t },
                        n = (0, i.lazy)(() => e.loader().then(a)),
                        c = e.loading;
                    function u(t) {
                        let a = c ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = e.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: ["undefined" == typeof window ? (0, r.jsx)(s.PreloadCss, { moduleIds: e.modules }) : null, (0, r.jsx)(n, { ...t })] })
                                : (0, r.jsx)(o.BailoutToCSR, { reason: "next/dynamic", children: (0, r.jsx)(n, { ...t }) });
                        return (0, r.jsx)(i.Suspense, { fallback: a, children: l });
                    }
                    return (u.displayName = "LoadableComponent"), u;
                };
        },
        70049: function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "PreloadCss", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(57437),
                i = n(20544);
            function o(t) {
                let { moduleIds: e } = t;
                if ("undefined" != typeof window) return null;
                let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
                    o = [];
                if (n.reactLoadableManifest && e) {
                    let t = n.reactLoadableManifest;
                    for (let n of e) {
                        if (!t[n]) continue;
                        let e = t[n].files.filter(t => t.endsWith(".css"));
                        o.push(...e);
                    }
                }
                return 0 === o.length
                    ? null
                    : (0, r.jsx)(r.Fragment, {
                          children: o.map(t => (0, r.jsx)("link", { precedence: "dynamic", rel: "stylesheet", href: n.assetPrefix + "/css/" + encodeURI(t), as: "style" }, t)),
                      });
            }
        },
        24012: function (t, e, n) {
            t.exports = n(11264);
        },
        89727: function (t) {
            "use strict";
            var e = !!("undefined" != typeof window && window.document && window.document.createElement),
                n = {
                    canUseDOM: e,
                    canUseWorkers: "undefined" != typeof Worker,
                    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
                    canUseViewport: e && !!window.screen,
                    isInWorker: !e,
                };
            t.exports = n;
        },
        14699: function (t) {
            var e,
                n,
                r,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                p,
                f,
                m,
                g = !1;
            function y() {
                if (!g) {
                    g = !0;
                    var t = navigator.userAgent,
                        y =
                            /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                                t
                            ),
                        v = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                    if (((d = /\b(iPhone|iP[ao]d)/.exec(t)), (p = /\b(iP[ao]d)/.exec(t)), (u = /Android/i.exec(t)), (f = /FBAN\/\w+;/i.exec(t)), (m = /Mobile/i.exec(t)), (h = !!/Win64/.exec(t)), y)) {
                        (e = y[1] ? parseFloat(y[1]) : y[5] ? parseFloat(y[5]) : NaN) && document && document.documentMode && (e = document.documentMode);
                        var b = /(?:Trident\/(\d+.\d+))/.exec(t);
                        (s = b ? parseFloat(b[1]) + 4 : e),
                            (n = y[2] ? parseFloat(y[2]) : NaN),
                            (r = y[3] ? parseFloat(y[3]) : NaN),
                            (o = (i = y[4] ? parseFloat(y[4]) : NaN) && (y = /(?:Chrome\/(\d+\.\d+))/.exec(t)) && y[1] ? parseFloat(y[1]) : NaN);
                    } else e = n = r = o = i = NaN;
                    if (v) {
                        if (v[1]) {
                            var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                            a = !w || parseFloat(w[1].replace("_", "."));
                        } else a = !1;
                        (l = !!v[2]), (c = !!v[3]);
                    } else a = l = c = !1;
                }
            }
            var v = {
                ie: function () {
                    return y() || e;
                },
                ieCompatibilityMode: function () {
                    return y() || s > e;
                },
                ie64: function () {
                    return v.ie() && h;
                },
                firefox: function () {
                    return y() || n;
                },
                opera: function () {
                    return y() || r;
                },
                webkit: function () {
                    return y() || i;
                },
                safari: function () {
                    return v.webkit();
                },
                chrome: function () {
                    return y() || o;
                },
                windows: function () {
                    return y() || l;
                },
                osx: function () {
                    return y() || a;
                },
                linux: function () {
                    return y() || c;
                },
                iphone: function () {
                    return y() || d;
                },
                mobile: function () {
                    return y() || d || p || u || m;
                },
                nativeApp: function () {
                    return y() || f;
                },
                android: function () {
                    return y() || u;
                },
                ipad: function () {
                    return y() || p;
                },
            };
            t.exports = v;
        },
        51198: function (t, e, n) {
            "use strict";
            var r,
                i = n(89727);
            i.canUseDOM && (r = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")),
                (t.exports = function (t, e) {
                    if (!i.canUseDOM || (e && !("addEventListener" in document))) return !1;
                    var n = "on" + t,
                        o = n in document;
                    if (!o) {
                        var s = document.createElement("div");
                        s.setAttribute(n, "return;"), (o = "function" == typeof s[n]);
                    }
                    return !o && r && "wheel" === t && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
                });
        },
        11264: function (t, e, n) {
            "use strict";
            var r = n(14699),
                i = n(51198);
            function o(t) {
                var e = 0,
                    n = 0,
                    r = 0,
                    i = 0;
                return (
                    "detail" in t && (n = t.detail),
                    "wheelDelta" in t && (n = -t.wheelDelta / 120),
                    "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120),
                    "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                    "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = n), (n = 0)),
                    (r = 10 * e),
                    (i = 10 * n),
                    "deltaY" in t && (i = t.deltaY),
                    "deltaX" in t && (r = t.deltaX),
                    (r || i) && t.deltaMode && (1 == t.deltaMode ? ((r *= 40), (i *= 40)) : ((r *= 800), (i *= 800))),
                    r && !e && (e = r < 1 ? -1 : 1),
                    i && !n && (n = i < 1 ? -1 : 1),
                    { spinX: e, spinY: n, pixelX: r, pixelY: i }
                );
            }
            (o.getEventType = function () {
                return r.firefox() ? "DOMMouseScroll" : i("wheel") ? "wheel" : "mousewheel";
            }),
                (t.exports = o);
        },
        97046: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return v;
                },
            });
            var r = function (t, e) {
                    return (r =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        })(t, e);
                },
                i = function () {
                    return (i =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t;
                        }).apply(this, arguments);
                },
                o = n(2265),
                s = n(24012),
                a = n.n(s);
            function l(t, e, n, r, i) {
                void 0 === i && (i = 0);
                var o = m(e.width, e.height, i),
                    s = o.width,
                    a = o.height;
                return { x: c(t.x, s, n.width, r), y: c(t.y, a, n.height, r) };
            }
            function c(t, e, n, r) {
                var i = (e * r) / 2 - n / 2;
                return g(t, -i, i);
            }
            function u(t, e) {
                return Math.sqrt(Math.pow(t.y - e.y, 2) + Math.pow(t.x - e.x, 2));
            }
            function h(t, e) {
                return (180 * Math.atan2(e.y - t.y, e.x - t.x)) / Math.PI;
            }
            function d(t, e) {
                return Math.min(t, Math.max(0, e));
            }
            function p(t, e) {
                return e;
            }
            function f(t, e) {
                return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
            }
            function m(t, e, n) {
                var r = (n * Math.PI) / 180;
                return { width: Math.abs(Math.cos(r) * t) + Math.abs(Math.sin(r) * e), height: Math.abs(Math.sin(r) * t) + Math.abs(Math.cos(r) * e) };
            }
            function g(t, e, n) {
                return Math.min(Math.max(t, e), n);
            }
            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return t
                    .filter(function (t) {
                        return "string" == typeof t && t.length > 0;
                    })
                    .join(" ")
                    .trim();
            }
            var v = (function (t) {
                function e() {
                    var n = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (n.imageRef = o.createRef()),
                        (n.videoRef = o.createRef()),
                        (n.containerPosition = { x: 0, y: 0 }),
                        (n.containerRef = null),
                        (n.styleRef = null),
                        (n.containerRect = null),
                        (n.mediaSize = { width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 }),
                        (n.dragStartPosition = { x: 0, y: 0 }),
                        (n.dragStartCrop = { x: 0, y: 0 }),
                        (n.gestureZoomStart = 0),
                        (n.gestureRotationStart = 0),
                        (n.isTouching = !1),
                        (n.lastPinchDistance = 0),
                        (n.lastPinchRotation = 0),
                        (n.rafDragTimeout = null),
                        (n.rafPinchTimeout = null),
                        (n.wheelTimer = null),
                        (n.currentDoc = "undefined" != typeof document ? document : null),
                        (n.currentWindow = "undefined" != typeof window ? window : null),
                        (n.resizeObserver = null),
                        (n.state = { cropSize: null, hasWheelJustStarted: !1, mediaObjectFit: void 0 }),
                        (n.initResizeObserver = function () {
                            if (void 0 !== window.ResizeObserver && n.containerRef) {
                                var t = !0;
                                (n.resizeObserver = new window.ResizeObserver(function (e) {
                                    if (t) {
                                        t = !1;
                                        return;
                                    }
                                    n.computeSizes();
                                })),
                                    n.resizeObserver.observe(n.containerRef);
                            }
                        }),
                        (n.preventZoomSafari = function (t) {
                            return t.preventDefault();
                        }),
                        (n.cleanEvents = function () {
                            n.currentDoc &&
                                (n.currentDoc.removeEventListener("mousemove", n.onMouseMove),
                                n.currentDoc.removeEventListener("mouseup", n.onDragStopped),
                                n.currentDoc.removeEventListener("touchmove", n.onTouchMove),
                                n.currentDoc.removeEventListener("touchend", n.onDragStopped),
                                n.currentDoc.removeEventListener("gesturemove", n.onGestureMove),
                                n.currentDoc.removeEventListener("gestureend", n.onGestureEnd),
                                n.currentDoc.removeEventListener("scroll", n.onScroll));
                        }),
                        (n.clearScrollEvent = function () {
                            n.containerRef && n.containerRef.removeEventListener("wheel", n.onWheel), n.wheelTimer && clearTimeout(n.wheelTimer);
                        }),
                        (n.onMediaLoad = function () {
                            var t = n.computeSizes();
                            t && (n.emitCropData(), n.setInitialCrop(t)), n.props.onMediaLoaded && n.props.onMediaLoaded(n.mediaSize);
                        }),
                        (n.setInitialCrop = function (t) {
                            if (n.props.initialCroppedAreaPercentages) {
                                var e,
                                    r,
                                    i,
                                    o,
                                    s,
                                    a,
                                    l,
                                    c =
                                        ((e = n.props.initialCroppedAreaPercentages),
                                        (r = n.mediaSize),
                                        (i = n.props.rotation),
                                        (o = n.props.minZoom),
                                        (s = n.props.maxZoom),
                                        (a = m(r.width, r.height, i)),
                                        {
                                            crop: {
                                                x: ((l = g((t.width / a.width) * (100 / e.width), o, s)) * a.width) / 2 - t.width / 2 - a.width * l * (e.x / 100),
                                                y: (l * a.height) / 2 - t.height / 2 - a.height * l * (e.y / 100),
                                            },
                                            zoom: l,
                                        }),
                                    u = c.crop,
                                    h = c.zoom;
                                n.props.onCropChange(u), n.props.onZoomChange && n.props.onZoomChange(h);
                            } else if (n.props.initialCroppedAreaPixels) {
                                var d,
                                    p,
                                    f,
                                    y,
                                    v,
                                    b,
                                    w,
                                    x,
                                    S,
                                    k =
                                        ((d = n.props.initialCroppedAreaPixels),
                                        (p = n.mediaSize),
                                        (f = n.props.rotation),
                                        (y = n.props.minZoom),
                                        (v = n.props.maxZoom),
                                        void 0 === f && (f = 0),
                                        (b = m(p.naturalWidth, p.naturalHeight, f)),
                                        (x = g(
                                            ((w = p.width > p.height ? p.width / p.naturalWidth : p.height / p.naturalHeight),
                                            t.height > t.width ? t.height / (d.height * w) : t.width / (d.width * w)),
                                            y,
                                            v
                                        )),
                                        (S = t.height > t.width ? t.height / d.height : t.width / d.width),
                                        { crop: { x: ((b.width - d.width) / 2 - d.x) * S, y: ((b.height - d.height) / 2 - d.y) * S }, zoom: x }),
                                    u = k.crop,
                                    h = k.zoom;
                                n.props.onCropChange(u), n.props.onZoomChange && n.props.onZoomChange(h);
                            }
                        }),
                        (n.computeSizes = function () {
                            var t,
                                e,
                                r,
                                o,
                                s,
                                a,
                                l = n.imageRef.current || n.videoRef.current;
                            if (l && n.containerRef) {
                                (n.containerRect = n.containerRef.getBoundingClientRect()), n.saveContainerPosition();
                                var c,
                                    u,
                                    h,
                                    d,
                                    p,
                                    f,
                                    g,
                                    y,
                                    v,
                                    b,
                                    w,
                                    x = n.containerRect.width / n.containerRect.height,
                                    S =
                                        (null === (t = n.imageRef.current) || void 0 === t ? void 0 : t.naturalWidth) ||
                                        (null === (e = n.videoRef.current) || void 0 === e ? void 0 : e.videoWidth) ||
                                        0,
                                    k =
                                        (null === (r = n.imageRef.current) || void 0 === r ? void 0 : r.naturalHeight) ||
                                        (null === (o = n.videoRef.current) || void 0 === o ? void 0 : o.videoHeight) ||
                                        0,
                                    M = l.offsetWidth < S || l.offsetHeight < k,
                                    C = S / k,
                                    E = void 0;
                                if (M)
                                    switch (n.state.mediaObjectFit) {
                                        default:
                                        case "contain":
                                            E = x > C ? { width: n.containerRect.height * C, height: n.containerRect.height } : { width: n.containerRect.width, height: n.containerRect.width / C };
                                            break;
                                        case "horizontal-cover":
                                            E = { width: n.containerRect.width, height: n.containerRect.width / C };
                                            break;
                                        case "vertical-cover":
                                            E = { width: n.containerRect.height * C, height: n.containerRect.height };
                                    }
                                else E = { width: l.offsetWidth, height: l.offsetHeight };
                                (n.mediaSize = i(i({}, E), { naturalWidth: S, naturalHeight: k })), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
                                var O = n.props.cropSize
                                    ? n.props.cropSize
                                    : ((c = n.mediaSize.width),
                                      (u = n.mediaSize.height),
                                      (h = n.containerRect.width),
                                      (d = n.containerRect.height),
                                      (p = n.props.aspect),
                                      void 0 === (f = n.props.rotation) && (f = 0),
                                      (y = (g = m(c, u, f)).width),
                                      (v = g.height),
                                      (b = Math.min(y, h)) > (w = Math.min(v, d)) * p ? { width: w * p, height: w } : { width: b, height: b / p });
                                return (
                                    ((null === (s = n.state.cropSize) || void 0 === s ? void 0 : s.height) !== O.height ||
                                        (null === (a = n.state.cropSize) || void 0 === a ? void 0 : a.width) !== O.width) &&
                                        n.props.onCropSizeChange &&
                                        n.props.onCropSizeChange(O),
                                    n.setState({ cropSize: O }, n.recomputeCropPosition),
                                    n.props.setCropSize && n.props.setCropSize(O),
                                    O
                                );
                            }
                        }),
                        (n.saveContainerPosition = function () {
                            if (n.containerRef) {
                                var t = n.containerRef.getBoundingClientRect();
                                n.containerPosition = { x: t.left, y: t.top };
                            }
                        }),
                        (n.onMouseDown = function (t) {
                            n.currentDoc &&
                                (t.preventDefault(),
                                n.currentDoc.addEventListener("mousemove", n.onMouseMove),
                                n.currentDoc.addEventListener("mouseup", n.onDragStopped),
                                n.saveContainerPosition(),
                                n.onDragStart(e.getMousePoint(t)));
                        }),
                        (n.onMouseMove = function (t) {
                            return n.onDrag(e.getMousePoint(t));
                        }),
                        (n.onScroll = function (t) {
                            n.currentDoc && (t.preventDefault(), n.saveContainerPosition());
                        }),
                        (n.onTouchStart = function (t) {
                            n.currentDoc &&
                                ((n.isTouching = !0),
                                (!n.props.onTouchRequest || n.props.onTouchRequest(t)) &&
                                    (n.currentDoc.addEventListener("touchmove", n.onTouchMove, { passive: !1 }),
                                    n.currentDoc.addEventListener("touchend", n.onDragStopped),
                                    n.saveContainerPosition(),
                                    2 === t.touches.length ? n.onPinchStart(t) : 1 === t.touches.length && n.onDragStart(e.getTouchPoint(t.touches[0]))));
                        }),
                        (n.onTouchMove = function (t) {
                            t.preventDefault(), 2 === t.touches.length ? n.onPinchMove(t) : 1 === t.touches.length && n.onDrag(e.getTouchPoint(t.touches[0]));
                        }),
                        (n.onGestureStart = function (t) {
                            n.currentDoc &&
                                (t.preventDefault(),
                                n.currentDoc.addEventListener("gesturechange", n.onGestureMove),
                                n.currentDoc.addEventListener("gestureend", n.onGestureEnd),
                                (n.gestureZoomStart = n.props.zoom),
                                (n.gestureRotationStart = n.props.rotation));
                        }),
                        (n.onGestureMove = function (t) {
                            if ((t.preventDefault(), !n.isTouching)) {
                                var r = e.getMousePoint(t),
                                    i = n.gestureZoomStart - 1 + t.scale;
                                if ((n.setNewZoom(i, r, { shouldUpdatePosition: !0 }), n.props.onRotationChange)) {
                                    var o = n.gestureRotationStart + t.rotation;
                                    n.props.onRotationChange(o);
                                }
                            }
                        }),
                        (n.onGestureEnd = function (t) {
                            n.cleanEvents();
                        }),
                        (n.onDragStart = function (t) {
                            var e,
                                r,
                                o = t.x,
                                s = t.y;
                            (n.dragStartPosition = { x: o, y: s }), (n.dragStartCrop = i({}, n.props.crop)), null === (r = (e = n.props).onInteractionStart) || void 0 === r || r.call(e);
                        }),
                        (n.onDrag = function (t) {
                            var e = t.x,
                                r = t.y;
                            n.currentWindow &&
                                (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),
                                (n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function () {
                                    if (n.state.cropSize && void 0 !== e && void 0 !== r) {
                                        var t = e - n.dragStartPosition.x,
                                            i = r - n.dragStartPosition.y,
                                            o = { x: n.dragStartCrop.x + t, y: n.dragStartCrop.y + i },
                                            s = n.props.restrictPosition ? l(o, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : o;
                                        n.props.onCropChange(s);
                                    }
                                })));
                        }),
                        (n.onDragStopped = function () {
                            var t, e;
                            (n.isTouching = !1), n.cleanEvents(), n.emitCropData(), null === (e = (t = n.props).onInteractionEnd) || void 0 === e || e.call(t);
                        }),
                        (n.onWheel = function (t) {
                            if (n.currentWindow && (!n.props.onWheelRequest || n.props.onWheelRequest(t))) {
                                t.preventDefault();
                                var r = e.getMousePoint(t),
                                    i = a()(t).pixelY,
                                    o = n.props.zoom - (i * n.props.zoomSpeed) / 200;
                                n.setNewZoom(o, r, { shouldUpdatePosition: !0 }),
                                    n.state.hasWheelJustStarted ||
                                        n.setState({ hasWheelJustStarted: !0 }, function () {
                                            var t, e;
                                            return null === (e = (t = n.props).onInteractionStart) || void 0 === e ? void 0 : e.call(t);
                                        }),
                                    n.wheelTimer && clearTimeout(n.wheelTimer),
                                    (n.wheelTimer = n.currentWindow.setTimeout(function () {
                                        return n.setState({ hasWheelJustStarted: !1 }, function () {
                                            var t, e;
                                            return null === (e = (t = n.props).onInteractionEnd) || void 0 === e ? void 0 : e.call(t);
                                        });
                                    }, 250));
                            }
                        }),
                        (n.getPointOnContainer = function (t, e) {
                            var r = t.x,
                                i = t.y;
                            if (!n.containerRect) throw Error("The Cropper is not mounted");
                            return { x: n.containerRect.width / 2 - (r - e.x), y: n.containerRect.height / 2 - (i - e.y) };
                        }),
                        (n.getPointOnMedia = function (t) {
                            var e = t.x,
                                r = t.y,
                                i = n.props,
                                o = i.crop,
                                s = i.zoom;
                            return { x: (e + o.x) / s, y: (r + o.y) / s };
                        }),
                        (n.setNewZoom = function (t, e, r) {
                            var i = (void 0 === r ? {} : r).shouldUpdatePosition;
                            if (n.state.cropSize && n.props.onZoomChange) {
                                var o = g(t, n.props.minZoom, n.props.maxZoom);
                                if (void 0 === i || i) {
                                    var s = n.getPointOnContainer(e, n.containerPosition),
                                        a = n.getPointOnMedia(s),
                                        c = { x: a.x * o - s.x, y: a.y * o - s.y },
                                        u = n.props.restrictPosition ? l(c, n.mediaSize, n.state.cropSize, o, n.props.rotation) : c;
                                    n.props.onCropChange(u);
                                }
                                n.props.onZoomChange(o);
                            }
                        }),
                        (n.getCropData = function () {
                            var t, e, r, o, s, a, c, u, h, f, g, y, v, b, w;
                            return n.state.cropSize
                                ? ((t = n.props.restrictPosition ? l(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop),
                                  (e = n.mediaSize),
                                  (r = n.state.cropSize),
                                  (o = n.getAspect()),
                                  (s = n.props.zoom),
                                  (a = n.props.rotation),
                                  (c = n.props.restrictPosition),
                                  void 0 === a && (a = 0),
                                  void 0 === c && (c = !0),
                                  (u = c ? d : p),
                                  (h = m(e.width, e.height, a)),
                                  (f = m(e.naturalWidth, e.naturalHeight, a)),
                                  (g = {
                                      x: u(100, (((h.width - r.width / s) / 2 - t.x / s) / h.width) * 100),
                                      y: u(100, (((h.height - r.height / s) / 2 - t.y / s) / h.height) * 100),
                                      width: u(100, ((r.width / h.width) * 100) / s),
                                      height: u(100, ((r.height / h.height) * 100) / s),
                                  }),
                                  (y = Math.round(u(f.width, (g.width * f.width) / 100))),
                                  (v = Math.round(u(f.height, (g.height * f.height) / 100))),
                                  (b = f.width >= f.height * o ? { width: Math.round(v * o), height: v } : { width: y, height: Math.round(y / o) }),
                                  (w = i(i({}, b), { x: Math.round(u(f.width - b.width, (g.x * f.width) / 100)), y: Math.round(u(f.height - b.height, (g.y * f.height) / 100)) })),
                                  { croppedAreaPercentages: g, croppedAreaPixels: w })
                                : null;
                        }),
                        (n.emitCropData = function () {
                            var t = n.getCropData();
                            if (t) {
                                var e = t.croppedAreaPercentages,
                                    r = t.croppedAreaPixels;
                                n.props.onCropComplete && n.props.onCropComplete(e, r), n.props.onCropAreaChange && n.props.onCropAreaChange(e, r);
                            }
                        }),
                        (n.emitCropAreaChange = function () {
                            var t = n.getCropData();
                            if (t) {
                                var e = t.croppedAreaPercentages,
                                    r = t.croppedAreaPixels;
                                n.props.onCropAreaChange && n.props.onCropAreaChange(e, r);
                            }
                        }),
                        (n.recomputeCropPosition = function () {
                            if (n.state.cropSize) {
                                var t = n.props.restrictPosition ? l(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
                                n.props.onCropChange(t), n.emitCropData();
                            }
                        }),
                        n
                    );
                }
                return (
                    !(function (t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                    })(e, t),
                    (e.prototype.componentDidMount = function () {
                        this.currentDoc &&
                            this.currentWindow &&
                            (this.containerRef &&
                                (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument),
                                this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView),
                                this.initResizeObserver(),
                                void 0 === window.ResizeObserver && this.currentWindow.addEventListener("resize", this.computeSizes),
                                this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, { passive: !1 }),
                                this.containerRef.addEventListener("gesturestart", this.onGestureStart)),
                            this.currentDoc.addEventListener("scroll", this.onScroll),
                            this.props.disableAutomaticStylesInjection ||
                                ((this.styleRef = this.currentDoc.createElement("style")),
                                this.styleRef.setAttribute("type", "text/css"),
                                this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce),
                                (this.styleRef.innerHTML =
                                    ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n"),
                                this.currentDoc.head.appendChild(this.styleRef)),
                            this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(),
                            this.props.setImageRef && this.props.setImageRef(this.imageRef),
                            this.props.setVideoRef && this.props.setVideoRef(this.videoRef));
                    }),
                    (e.prototype.componentWillUnmount = function () {
                        var t, e;
                        this.currentDoc &&
                            this.currentWindow &&
                            (void 0 === window.ResizeObserver && this.currentWindow.removeEventListener("resize", this.computeSizes),
                            null === (t = this.resizeObserver) || void 0 === t || t.disconnect(),
                            this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari),
                            this.styleRef && (null === (e = this.styleRef.parentNode) || void 0 === e || e.removeChild(this.styleRef)),
                            this.cleanEvents(),
                            this.props.zoomWithScroll && this.clearScrollEvent());
                    }),
                    (e.prototype.componentDidUpdate = function (t) {
                        t.rotation !== this.props.rotation
                            ? (this.computeSizes(), this.recomputeCropPosition())
                            : t.aspect !== this.props.aspect
                            ? this.computeSizes()
                            : t.objectFit !== this.props.objectFit
                            ? this.computeSizes()
                            : t.zoom !== this.props.zoom
                            ? this.recomputeCropPosition()
                            : (null === (e = t.cropSize) || void 0 === e ? void 0 : e.height) !== (null === (n = this.props.cropSize) || void 0 === n ? void 0 : n.height) ||
                              (null === (r = t.cropSize) || void 0 === r ? void 0 : r.width) !== (null === (i = this.props.cropSize) || void 0 === i ? void 0 : i.width)
                            ? this.computeSizes()
                            : ((null === (o = t.crop) || void 0 === o ? void 0 : o.x) !== (null === (s = this.props.crop) || void 0 === s ? void 0 : s.x) ||
                                  (null === (a = t.crop) || void 0 === a ? void 0 : a.y) !== (null === (l = this.props.crop) || void 0 === l ? void 0 : l.y)) &&
                              this.emitCropAreaChange(),
                            t.zoomWithScroll !== this.props.zoomWithScroll &&
                                this.containerRef &&
                                (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, { passive: !1 }) : this.clearScrollEvent()),
                            t.video !== this.props.video && (null === (c = this.videoRef.current) || void 0 === c || c.load());
                        var e,
                            n,
                            r,
                            i,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u = this.getObjectFit();
                        u !== this.state.mediaObjectFit && this.setState({ mediaObjectFit: u }, this.computeSizes);
                    }),
                    (e.prototype.getAspect = function () {
                        var t = this.props,
                            e = t.cropSize,
                            n = t.aspect;
                        return e ? e.width / e.height : n;
                    }),
                    (e.prototype.getObjectFit = function () {
                        var t, e, n, r;
                        if ("cover" === this.props.objectFit) {
                            if ((this.imageRef.current || this.videoRef.current) && this.containerRef) {
                                this.containerRect = this.containerRef.getBoundingClientRect();
                                var i = this.containerRect.width / this.containerRect.height;
                                return ((null === (t = this.imageRef.current) || void 0 === t ? void 0 : t.naturalWidth) ||
                                    (null === (e = this.videoRef.current) || void 0 === e ? void 0 : e.videoWidth) ||
                                    0) /
                                    ((null === (n = this.imageRef.current) || void 0 === n ? void 0 : n.naturalHeight) ||
                                        (null === (r = this.videoRef.current) || void 0 === r ? void 0 : r.videoHeight) ||
                                        0) <
                                    i
                                    ? "horizontal-cover"
                                    : "vertical-cover";
                            }
                            return "horizontal-cover";
                        }
                        return this.props.objectFit;
                    }),
                    (e.prototype.onPinchStart = function (t) {
                        var n = e.getTouchPoint(t.touches[0]),
                            r = e.getTouchPoint(t.touches[1]);
                        (this.lastPinchDistance = u(n, r)), (this.lastPinchRotation = h(n, r)), this.onDragStart(f(n, r));
                    }),
                    (e.prototype.onPinchMove = function (t) {
                        var n = this;
                        if (this.currentDoc && this.currentWindow) {
                            var r = e.getTouchPoint(t.touches[0]),
                                i = e.getTouchPoint(t.touches[1]),
                                o = f(r, i);
                            this.onDrag(o),
                                this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),
                                (this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function () {
                                    var t = u(r, i),
                                        e = n.props.zoom * (t / n.lastPinchDistance);
                                    n.setNewZoom(e, o, { shouldUpdatePosition: !1 }), (n.lastPinchDistance = t);
                                    var s = h(r, i),
                                        a = n.props.rotation + (s - n.lastPinchRotation);
                                    n.props.onRotationChange && n.props.onRotationChange(a), (n.lastPinchRotation = s);
                                }));
                        }
                    }),
                    (e.prototype.render = function () {
                        var t = this,
                            e = this.props,
                            n = e.image,
                            r = e.video,
                            s = e.mediaProps,
                            a = e.transform,
                            l = e.crop,
                            c = l.x,
                            u = l.y,
                            h = e.rotation,
                            d = e.zoom,
                            p = e.cropShape,
                            f = e.showGrid,
                            m = e.style,
                            g = m.containerStyle,
                            v = m.cropAreaStyle,
                            b = m.mediaStyle,
                            w = e.classes,
                            x = w.containerClassName,
                            S = w.cropAreaClassName,
                            k = w.mediaClassName,
                            M = this.state.mediaObjectFit;
                        return o.createElement(
                            "div",
                            {
                                onMouseDown: this.onMouseDown,
                                onTouchStart: this.onTouchStart,
                                ref: function (e) {
                                    return (t.containerRef = e);
                                },
                                "data-testid": "container",
                                style: g,
                                className: y("reactEasyCrop_Container", x),
                            },
                            n
                                ? o.createElement(
                                      "img",
                                      i(
                                          {
                                              alt: "",
                                              className: y(
                                                  "reactEasyCrop_Image",
                                                  "contain" === M && "reactEasyCrop_Contain",
                                                  "horizontal-cover" === M && "reactEasyCrop_Cover_Horizontal",
                                                  "vertical-cover" === M && "reactEasyCrop_Cover_Vertical",
                                                  k
                                              ),
                                          },
                                          s,
                                          {
                                              src: n,
                                              ref: this.imageRef,
                                              style: i(i({}, b), { transform: a || "translate(".concat(c, "px, ").concat(u, "px) rotate(").concat(h, "deg) scale(").concat(d, ")") }),
                                              onLoad: this.onMediaLoad,
                                          }
                                      )
                                  )
                                : r &&
                                      o.createElement(
                                          "video",
                                          i(
                                              {
                                                  autoPlay: !0,
                                                  loop: !0,
                                                  muted: !0,
                                                  className: y(
                                                      "reactEasyCrop_Video",
                                                      "contain" === M && "reactEasyCrop_Contain",
                                                      "horizontal-cover" === M && "reactEasyCrop_Cover_Horizontal",
                                                      "vertical-cover" === M && "reactEasyCrop_Cover_Vertical",
                                                      k
                                                  ),
                                              },
                                              s,
                                              {
                                                  ref: this.videoRef,
                                                  onLoadedMetadata: this.onMediaLoad,
                                                  style: i(i({}, b), { transform: a || "translate(".concat(c, "px, ").concat(u, "px) rotate(").concat(h, "deg) scale(").concat(d, ")") }),
                                                  controls: !1,
                                              }
                                          ),
                                          (Array.isArray(r) ? r : [{ src: r }]).map(function (t) {
                                              return o.createElement("source", i({ key: t.src }, t));
                                          })
                                      ),
                            this.state.cropSize &&
                                o.createElement("div", {
                                    style: i(i({}, v), { width: this.state.cropSize.width, height: this.state.cropSize.height }),
                                    "data-testid": "cropper",
                                    className: y("reactEasyCrop_CropArea", "round" === p && "reactEasyCrop_CropAreaRound", f && "reactEasyCrop_CropAreaGrid", S),
                                })
                        );
                    }),
                    (e.defaultProps = {
                        zoom: 1,
                        rotation: 0,
                        aspect: 4 / 3,
                        maxZoom: 3,
                        minZoom: 1,
                        cropShape: "rect",
                        objectFit: "contain",
                        showGrid: !0,
                        style: {},
                        classes: {},
                        mediaProps: {},
                        zoomSpeed: 1,
                        restrictPosition: !0,
                        zoomWithScroll: !0,
                    }),
                    (e.getMousePoint = function (t) {
                        return { x: Number(t.clientX), y: Number(t.clientY) };
                    }),
                    (e.getTouchPoint = function (t) {
                        return { x: Number(t.clientX), y: Number(t.clientY) };
                    }),
                    e
                );
            })(o.Component);
        },
        8727: function (t) {
            var e = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            t.exports = function (t, o) {
                try {
                    return (function t(o, s) {
                        if (o === s) return !0;
                        if (o && s && "object" == typeof o && "object" == typeof s) {
                            var a, l, c, u;
                            if (o.constructor !== s.constructor) return !1;
                            if (Array.isArray(o)) {
                                if ((a = o.length) != s.length) return !1;
                                for (l = a; 0 != l--; ) if (!t(o[l], s[l])) return !1;
                                return !0;
                            }
                            if (n && o instanceof Map && s instanceof Map) {
                                if (o.size !== s.size) return !1;
                                for (u = o.entries(); !(l = u.next()).done; ) if (!s.has(l.value[0])) return !1;
                                for (u = o.entries(); !(l = u.next()).done; ) if (!t(l.value[1], s.get(l.value[0]))) return !1;
                                return !0;
                            }
                            if (r && o instanceof Set && s instanceof Set) {
                                if (o.size !== s.size) return !1;
                                for (u = o.entries(); !(l = u.next()).done; ) if (!s.has(l.value[0])) return !1;
                                return !0;
                            }
                            if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(s)) {
                                if ((a = o.length) != s.length) return !1;
                                for (l = a; 0 != l--; ) if (o[l] !== s[l]) return !1;
                                return !0;
                            }
                            if (o.constructor === RegExp) return o.source === s.source && o.flags === s.flags;
                            if (o.valueOf !== Object.prototype.valueOf && "function" == typeof o.valueOf && "function" == typeof s.valueOf) return o.valueOf() === s.valueOf();
                            if (o.toString !== Object.prototype.toString && "function" == typeof o.toString && "function" == typeof s.toString) return o.toString() === s.toString();
                            if ((a = (c = Object.keys(o)).length) !== Object.keys(s).length) return !1;
                            for (l = a; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(s, c[l])) return !1;
                            if (e && o instanceof Element) return !1;
                            for (l = a; 0 != l--; ) if ((("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l]) || !o.$$typeof) && !t(o[c[l]], s[c[l]])) return !1;
                            return !0;
                        }
                        return o != o && s != s;
                    })(t, o);
                } catch (t) {
                    if ((t.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw t;
                }
            };
        },
        49164: function (t, e, n) {
            var r = Object.create,
                i = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                a = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                c = (t, e, n) => (e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
                u = (t, e, n, r) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let a of s(e)) l.call(t, a) || a === n || i(t, a, { get: () => e[a], enumerable: !(r = o(e, a)) || r.enumerable });
                    return t;
                },
                h = (t, e, n) => ((n = null != t ? r(a(t)) : {}), u(!e && t && t.__esModule ? n : i(n, "default", { value: t, enumerable: !0 }), t)),
                d = (t, e, n) => (c(t, "symbol" != typeof e ? e + "" : e, n), n),
                p = {};
            ((t, e) => {
                for (var n in e) i(t, n, { get: e[n], enumerable: !0 });
            })(p, { default: () => v }),
                (t.exports = u(i({}, "__esModule", { value: !0 }), p));
            var f = h(n(2265)),
                m = h(n(8727)),
                g = n(61105),
                y = n(65700);
            class v extends f.Component {
                constructor() {
                    super(...arguments),
                        d(this, "mounted", !1),
                        d(this, "isReady", !1),
                        d(this, "isPlaying", !1),
                        d(this, "isLoading", !0),
                        d(this, "loadOnReady", null),
                        d(this, "startOnPlay", !0),
                        d(this, "seekOnPlay", null),
                        d(this, "onDurationCalled", !1),
                        d(this, "handlePlayerMount", t => {
                            if (this.player) {
                                this.progress();
                                return;
                            }
                            (this.player = t), this.player.load(this.props.url), this.progress();
                        }),
                        d(this, "getInternalPlayer", t => (this.player ? this.player[t] : null)),
                        d(this, "progress", () => {
                            if (this.props.url && this.player && this.isReady) {
                                let t = this.getCurrentTime() || 0,
                                    e = this.getSecondsLoaded(),
                                    n = this.getDuration();
                                if (n) {
                                    let r = { playedSeconds: t, played: t / n };
                                    null !== e && ((r.loadedSeconds = e), (r.loaded = e / n)),
                                        (r.playedSeconds !== this.prevPlayed || r.loadedSeconds !== this.prevLoaded) && this.props.onProgress(r),
                                        (this.prevPlayed = r.playedSeconds),
                                        (this.prevLoaded = r.loadedSeconds);
                                }
                            }
                            this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
                        }),
                        d(this, "handleReady", () => {
                            if (!this.mounted) return;
                            (this.isReady = !0), (this.isLoading = !1);
                            let { onReady: t, playing: e, volume: n, muted: r } = this.props;
                            t(),
                                r || null === n || this.player.setVolume(n),
                                this.loadOnReady ? (this.player.load(this.loadOnReady, !0), (this.loadOnReady = null)) : e && this.player.play(),
                                this.handleDurationCheck();
                        }),
                        d(this, "handlePlay", () => {
                            (this.isPlaying = !0), (this.isLoading = !1);
                            let { onStart: t, onPlay: e, playbackRate: n } = this.props;
                            this.startOnPlay && (this.player.setPlaybackRate && 1 !== n && this.player.setPlaybackRate(n), t(), (this.startOnPlay = !1)),
                                e(),
                                this.seekOnPlay && (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
                                this.handleDurationCheck();
                        }),
                        d(this, "handlePause", t => {
                            (this.isPlaying = !1), this.isLoading || this.props.onPause(t);
                        }),
                        d(this, "handleEnded", () => {
                            let { activePlayer: t, loop: e, onEnded: n } = this.props;
                            t.loopOnEnded && e && this.seekTo(0), e || ((this.isPlaying = !1), n());
                        }),
                        d(this, "handleError", (...t) => {
                            (this.isLoading = !1), this.props.onError(...t);
                        }),
                        d(this, "handleDurationCheck", () => {
                            clearTimeout(this.durationCheckTimeout);
                            let t = this.getDuration();
                            t ? this.onDurationCalled || (this.props.onDuration(t), (this.onDurationCalled = !0)) : (this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100));
                        }),
                        d(this, "handleLoaded", () => {
                            this.isLoading = !1;
                        });
                }
                componentDidMount() {
                    this.mounted = !0;
                }
                componentWillUnmount() {
                    clearTimeout(this.progressTimeout),
                        clearTimeout(this.durationCheckTimeout),
                        this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()),
                        (this.mounted = !1);
                }
                componentDidUpdate(t) {
                    if (!this.player) return;
                    let { url: e, playing: n, volume: r, muted: i, playbackRate: o, pip: s, loop: a, activePlayer: l, disableDeferredLoading: c } = this.props;
                    if (!(0, m.default)(t.url, e)) {
                        if (this.isLoading && !l.forceLoad && !c && !(0, y.isMediaStream)(e)) {
                            console.warn(`ReactPlayer: the attempt to load ${e} is being deferred until the player has loaded`), (this.loadOnReady = e);
                            return;
                        }
                        (this.isLoading = !0), (this.startOnPlay = !0), (this.onDurationCalled = !1), this.player.load(e, this.isReady);
                    }
                    t.playing || !n || this.isPlaying || this.player.play(),
                        t.playing && !n && this.isPlaying && this.player.pause(),
                        !t.pip && s && this.player.enablePIP && this.player.enablePIP(),
                        t.pip && !s && this.player.disablePIP && this.player.disablePIP(),
                        t.volume !== r && null !== r && this.player.setVolume(r),
                        t.muted !== i && (i ? this.player.mute() : (this.player.unmute(), null !== r && setTimeout(() => this.player.setVolume(r)))),
                        t.playbackRate !== o && this.player.setPlaybackRate && this.player.setPlaybackRate(o),
                        t.loop !== a && this.player.setLoop && this.player.setLoop(a);
                }
                getDuration() {
                    return this.isReady ? this.player.getDuration() : null;
                }
                getCurrentTime() {
                    return this.isReady ? this.player.getCurrentTime() : null;
                }
                getSecondsLoaded() {
                    return this.isReady ? this.player.getSecondsLoaded() : null;
                }
                seekTo(t, e, n) {
                    if (!this.isReady) {
                        0 !== t &&
                            ((this.seekOnPlay = t),
                            setTimeout(() => {
                                this.seekOnPlay = null;
                            }, 5e3));
                        return;
                    }
                    if (e ? "fraction" === e : t > 0 && t < 1) {
                        let e = this.player.getDuration();
                        if (!e) {
                            console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                            return;
                        }
                        this.player.seekTo(e * t, n);
                        return;
                    }
                    this.player.seekTo(t, n);
                }
                render() {
                    let t = this.props.activePlayer;
                    return t
                        ? f.default.createElement(t, {
                              ...this.props,
                              onMount: this.handlePlayerMount,
                              onReady: this.handleReady,
                              onPlay: this.handlePlay,
                              onPause: this.handlePause,
                              onEnded: this.handleEnded,
                              onLoaded: this.handleLoaded,
                              onError: this.handleError,
                          })
                        : null;
                }
            }
            d(v, "displayName", "Player"), d(v, "propTypes", g.propTypes), d(v, "defaultProps", g.defaultProps);
        },
        10947: function (t, e, n) {
            var r = Object.create,
                i = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                a = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                c = (t, e, n) => (e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
                u = (t, e, n, r) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let a of s(e)) l.call(t, a) || a === n || i(t, a, { get: () => e[a], enumerable: !(r = o(e, a)) || r.enumerable });
                    return t;
                },
                h = (t, e, n) => ((n = null != t ? r(a(t)) : {}), u(!e && t && t.__esModule ? n : i(n, "default", { value: t, enumerable: !0 }), t)),
                d = (t, e, n) => (c(t, "symbol" != typeof e ? e + "" : e, n), n),
                p = {};
            ((t, e) => {
                for (var n in e) i(t, n, { get: e[n], enumerable: !0 });
            })(p, { createReactPlayer: () => O }),
                (t.exports = u(i({}, "__esModule", { value: !0 }), p));
            var f = h(n(2265)),
                m = h(n(51567)),
                g = h(n(1410)),
                y = h(n(8727)),
                v = n(61105),
                b = n(65700),
                w = h(n(49164));
            let x = (0, b.lazy)(() => n.e(7664).then(n.t.bind(n, 24732, 23))),
                S = "undefined" != typeof window && window.document && "undefined" != typeof document,
                k = void 0 !== n.g && n.g.window && n.g.window.document,
                M = Object.keys(v.propTypes),
                C = S || k ? f.Suspense : () => null,
                E = [],
                O = (t, e) => {
                    var n;
                    return (
                        (n = class extends f.Component {
                            constructor() {
                                super(...arguments),
                                    d(this, "state", { showPreview: !!this.props.light }),
                                    d(this, "references", {
                                        wrapper: t => {
                                            this.wrapper = t;
                                        },
                                        player: t => {
                                            this.player = t;
                                        },
                                    }),
                                    d(this, "handleClickPreview", t => {
                                        this.setState({ showPreview: !1 }), this.props.onClickPreview(t);
                                    }),
                                    d(this, "showPreview", () => {
                                        this.setState({ showPreview: !0 });
                                    }),
                                    d(this, "getDuration", () => (this.player ? this.player.getDuration() : null)),
                                    d(this, "getCurrentTime", () => (this.player ? this.player.getCurrentTime() : null)),
                                    d(this, "getSecondsLoaded", () => (this.player ? this.player.getSecondsLoaded() : null)),
                                    d(this, "getInternalPlayer", (t = "player") => (this.player ? this.player.getInternalPlayer(t) : null)),
                                    d(this, "seekTo", (t, e, n) => {
                                        if (!this.player) return null;
                                        this.player.seekTo(t, e, n);
                                    }),
                                    d(this, "handleReady", () => {
                                        this.props.onReady(this);
                                    }),
                                    d(
                                        this,
                                        "getActivePlayer",
                                        (0, g.default)(n => {
                                            for (let e of [...E, ...t]) if (e.canPlay(n)) return e;
                                            return e || null;
                                        })
                                    ),
                                    d(
                                        this,
                                        "getConfig",
                                        (0, g.default)((t, e) => {
                                            let { config: n } = this.props;
                                            return m.default.all([v.defaultProps.config, v.defaultProps.config[e] || {}, n, n[e] || {}]);
                                        })
                                    ),
                                    d(
                                        this,
                                        "getAttributes",
                                        (0, g.default)(t => (0, b.omit)(this.props, M))
                                    ),
                                    d(this, "renderActivePlayer", t => {
                                        if (!t) return null;
                                        let e = this.getActivePlayer(t);
                                        if (!e) return null;
                                        let n = this.getConfig(t, e.key);
                                        return f.default.createElement(w.default, {
                                            ...this.props,
                                            key: e.key,
                                            ref: this.references.player,
                                            config: n,
                                            activePlayer: e.lazyPlayer || e,
                                            onReady: this.handleReady,
                                        });
                                    });
                            }
                            shouldComponentUpdate(t, e) {
                                return !(0, y.default)(this.props, t) || !(0, y.default)(this.state, e);
                            }
                            componentDidUpdate(t) {
                                let { light: e } = this.props;
                                !t.light && e && this.setState({ showPreview: !0 }), t.light && !e && this.setState({ showPreview: !1 });
                            }
                            renderPreview(t) {
                                if (!t) return null;
                                let { light: e, playIcon: n, previewTabIndex: r, oEmbedUrl: i, previewAriaLabel: o } = this.props;
                                return f.default.createElement(x, { url: t, light: e, playIcon: n, previewTabIndex: r, previewAriaLabel: o, oEmbedUrl: i, onClick: this.handleClickPreview });
                            }
                            render() {
                                let { url: t, style: e, width: n, height: r, fallback: i, wrapper: o } = this.props,
                                    { showPreview: s } = this.state,
                                    a = this.getAttributes(t),
                                    l = "string" == typeof o ? this.references.wrapper : void 0;
                                return f.default.createElement(
                                    o,
                                    { ref: l, style: { ...e, width: n, height: r }, ...a },
                                    f.default.createElement(C, { fallback: i }, s ? this.renderPreview(t) : this.renderActivePlayer(t))
                                );
                            }
                        }),
                        d(n, "displayName", "ReactPlayer"),
                        d(n, "propTypes", v.propTypes),
                        d(n, "defaultProps", v.defaultProps),
                        d(n, "addCustomPlayer", t => {
                            E.push(t);
                        }),
                        d(n, "removeCustomPlayers", () => {
                            E.length = 0;
                        }),
                        d(n, "canPlay", e => {
                            for (let n of [...E, ...t]) if (n.canPlay(e)) return !0;
                            return !1;
                        }),
                        d(n, "canEnablePIP", e => {
                            for (let n of [...E, ...t]) if (n.canEnablePIP && n.canEnablePIP(e)) return !0;
                            return !1;
                        }),
                        n
                    );
                };
        },
        91846: function (t, e, n) {
            let r, i, o;
            var s = Object.create,
                a = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                c = Object.getOwnPropertyNames,
                u = Object.getPrototypeOf,
                h = Object.prototype.hasOwnProperty,
                d = (t, e, n, r) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let i of c(e)) h.call(t, i) || i === n || a(t, i, { get: () => e[i], enumerable: !(r = l(e, i)) || r.enumerable });
                    return t;
                },
                p = {};
            ((t, e) => {
                for (var n in e) a(t, n, { get: e[n], enumerable: !0 });
            })(p, { default: () => y }),
                (t.exports = d(a({}, "__esModule", { value: !0 }), p));
            var f = ((o = null != (r = n(12329)) ? s(u(r)) : {}), d(!i && r && r.__esModule ? o : a(o, "default", { value: r, enumerable: !0 }), r)),
                m = n(10947);
            let g = f.default[f.default.length - 1];
            var y = (0, m.createReactPlayer)(f.default, g);
        },
        59375: function (t, e, n) {
            var r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                a = {};
            ((t, e) => {
                for (var n in e) r(t, n, { get: e[n], enumerable: !0 });
            })(a, {
                AUDIO_EXTENSIONS: () => k,
                DASH_EXTENSIONS: () => E,
                FLV_EXTENSIONS: () => O,
                HLS_EXTENSIONS: () => C,
                MATCH_URL_DAILYMOTION: () => b,
                MATCH_URL_FACEBOOK: () => p,
                MATCH_URL_FACEBOOK_WATCH: () => f,
                MATCH_URL_KALTURA: () => S,
                MATCH_URL_MIXCLOUD: () => w,
                MATCH_URL_MUX: () => d,
                MATCH_URL_SOUNDCLOUD: () => u,
                MATCH_URL_STREAMABLE: () => m,
                MATCH_URL_TWITCH_CHANNEL: () => v,
                MATCH_URL_TWITCH_VIDEO: () => y,
                MATCH_URL_VIDYARD: () => x,
                MATCH_URL_VIMEO: () => h,
                MATCH_URL_WISTIA: () => g,
                MATCH_URL_YOUTUBE: () => c,
                VIDEO_EXTENSIONS: () => M,
                canPlay: () => T,
            }),
                (t.exports = ((t, e, n, a) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let l of o(e)) s.call(t, l) || l === n || r(t, l, { get: () => e[l], enumerable: !(a = i(e, l)) || a.enumerable });
                    return t;
                })(r({}, "__esModule", { value: !0 }), a));
            var l = n(65700);
            let c =
                    /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
                h = /vimeo\.com\/(?!progressive_redirect).+/,
                d = /stream\.mux\.com\/(\w+)/,
                p = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
                f = /^https?:\/\/fb\.watch\/.+$/,
                m = /streamable\.com\/([a-z0-9]+)$/,
                g = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                y = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
                v = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
                b = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
                w = /mixcloud\.com\/([^/]+\/[^/]+)/,
                x = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
                S = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
                k = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                M = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                C = /\.(m3u8)($|\?)/i,
                E = /\.(mpd)($|\?)/i,
                O = /\.(flv)($|\?)/i,
                _ = t => {
                    if (t instanceof Array) {
                        for (let e of t) if (("string" == typeof e && _(e)) || _(e.src)) return !0;
                        return !1;
                    }
                    return !!((0, l.isMediaStream)(t) || (0, l.isBlobUrl)(t)) || k.test(t) || M.test(t) || C.test(t) || E.test(t) || O.test(t);
                },
                T = {
                    youtube: t => (t instanceof Array ? t.every(t => c.test(t)) : c.test(t)),
                    soundcloud: t => u.test(t) && !k.test(t),
                    vimeo: t => h.test(t) && !M.test(t) && !C.test(t),
                    mux: t => d.test(t),
                    facebook: t => p.test(t) || f.test(t),
                    streamable: t => m.test(t),
                    wistia: t => g.test(t),
                    twitch: t => y.test(t) || v.test(t),
                    dailymotion: t => b.test(t),
                    mixcloud: t => w.test(t),
                    vidyard: t => x.test(t),
                    kaltura: t => S.test(t),
                    file: _,
                };
        },
        12329: function (t, e, n) {
            var r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                a = {};
            ((t, e) => {
                for (var n in e) r(t, n, { get: e[n], enumerable: !0 });
            })(a, { default: () => u }),
                (t.exports = ((t, e, n, a) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let l of o(e)) s.call(t, l) || l === n || r(t, l, { get: () => e[l], enumerable: !(a = i(e, l)) || a.enumerable });
                    return t;
                })(r({}, "__esModule", { value: !0 }), a));
            var l = n(65700),
                c = n(59375),
                u = [
                    { key: "youtube", name: "YouTube", canPlay: c.canPlay.youtube, lazyPlayer: (0, l.lazy)(() => n.e(4439).then(n.t.bind(n, 72473, 23))) },
                    { key: "soundcloud", name: "SoundCloud", canPlay: c.canPlay.soundcloud, lazyPlayer: (0, l.lazy)(() => n.e(6125).then(n.t.bind(n, 34121, 23))) },
                    { key: "vimeo", name: "Vimeo", canPlay: c.canPlay.vimeo, lazyPlayer: (0, l.lazy)(() => n.e(3743).then(n.t.bind(n, 38529, 23))) },
                    { key: "mux", name: "Mux", canPlay: c.canPlay.mux, lazyPlayer: (0, l.lazy)(() => n.e(4258).then(n.t.bind(n, 12637, 23))) },
                    { key: "facebook", name: "Facebook", canPlay: c.canPlay.facebook, lazyPlayer: (0, l.lazy)(() => n.e(2121).then(n.t.bind(n, 78660, 23))) },
                    { key: "streamable", name: "Streamable", canPlay: c.canPlay.streamable, lazyPlayer: (0, l.lazy)(() => n.e(2546).then(n.t.bind(n, 32982, 23))) },
                    { key: "wistia", name: "Wistia", canPlay: c.canPlay.wistia, lazyPlayer: (0, l.lazy)(() => n.e(8055).then(n.t.bind(n, 90571, 23))) },
                    { key: "twitch", name: "Twitch", canPlay: c.canPlay.twitch, lazyPlayer: (0, l.lazy)(() => n.e(6216).then(n.t.bind(n, 94691, 23))) },
                    { key: "dailymotion", name: "DailyMotion", canPlay: c.canPlay.dailymotion, lazyPlayer: (0, l.lazy)(() => n.e(7596).then(n.t.bind(n, 3224, 23))) },
                    { key: "mixcloud", name: "Mixcloud", canPlay: c.canPlay.mixcloud, lazyPlayer: (0, l.lazy)(() => n.e(4667).then(n.t.bind(n, 60405, 23))) },
                    { key: "vidyard", name: "Vidyard", canPlay: c.canPlay.vidyard, lazyPlayer: (0, l.lazy)(() => n.e(8888).then(n.t.bind(n, 91281, 23))) },
                    { key: "kaltura", name: "Kaltura", canPlay: c.canPlay.kaltura, lazyPlayer: (0, l.lazy)(() => n.e(261).then(n.t.bind(n, 31388, 23))) },
                    {
                        key: "file",
                        name: "FilePlayer",
                        canPlay: c.canPlay.file,
                        canEnablePIP: t => c.canPlay.file(t) && (document.pictureInPictureEnabled || (0, l.supportsWebKitPresentationMode)()) && !c.AUDIO_EXTENSIONS.test(t),
                        lazyPlayer: (0, l.lazy)(() => n.e(6011).then(n.t.bind(n, 32851, 23))),
                    },
                ];
        },
        61105: function (t, e, n) {
            let r, i, o;
            var s = Object.create,
                a = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                c = Object.getOwnPropertyNames,
                u = Object.getPrototypeOf,
                h = Object.prototype.hasOwnProperty,
                d = (t, e, n, r) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let i of c(e)) h.call(t, i) || i === n || a(t, i, { get: () => e[i], enumerable: !(r = l(e, i)) || r.enumerable });
                    return t;
                },
                p = {};
            ((t, e) => {
                for (var n in e) a(t, n, { get: e[n], enumerable: !0 });
            })(p, { defaultProps: () => C, propTypes: () => k }),
                (t.exports = d(a({}, "__esModule", { value: !0 }), p));
            let {
                    string: f,
                    bool: m,
                    number: g,
                    array: y,
                    oneOfType: v,
                    shape: b,
                    object: w,
                    func: x,
                    node: S,
                } = ((o = null != (r = n(40718)) ? s(u(r)) : {}), d(!i && r && r.__esModule ? o : a(o, "default", { value: r, enumerable: !0 }), r)).default,
                k = {
                    url: v([f, y, w]),
                    playing: m,
                    loop: m,
                    controls: m,
                    volume: g,
                    muted: m,
                    playbackRate: g,
                    width: v([f, g]),
                    height: v([f, g]),
                    style: w,
                    progressInterval: g,
                    playsinline: m,
                    pip: m,
                    stopOnUnmount: m,
                    light: v([m, f, w]),
                    playIcon: S,
                    previewTabIndex: g,
                    previewAriaLabel: f,
                    fallback: S,
                    oEmbedUrl: f,
                    wrapper: v([f, x, b({ render: x.isRequired })]),
                    config: b({
                        soundcloud: b({ options: w }),
                        youtube: b({ playerVars: w, embedOptions: w, onUnstarted: x }),
                        facebook: b({ appId: f, version: f, playerId: f, attributes: w }),
                        dailymotion: b({ params: w }),
                        vimeo: b({ playerOptions: w, title: f }),
                        mux: b({ attributes: w, version: f }),
                        file: b({
                            attributes: w,
                            tracks: y,
                            forceVideo: m,
                            forceAudio: m,
                            forceHLS: m,
                            forceSafariHLS: m,
                            forceDisableHls: m,
                            forceDASH: m,
                            forceFLV: m,
                            hlsOptions: w,
                            hlsVersion: f,
                            dashVersion: f,
                            flvVersion: f,
                        }),
                        wistia: b({ options: w, playerId: f, customControls: y }),
                        mixcloud: b({ options: w }),
                        twitch: b({ options: w, playerId: f }),
                        vidyard: b({ options: w }),
                    }),
                    onReady: x,
                    onStart: x,
                    onPlay: x,
                    onPause: x,
                    onBuffer: x,
                    onBufferEnd: x,
                    onEnded: x,
                    onError: x,
                    onDuration: x,
                    onSeek: x,
                    onPlaybackRateChange: x,
                    onPlaybackQualityChange: x,
                    onProgress: x,
                    onClickPreview: x,
                    onEnablePIP: x,
                    onDisablePIP: x,
                },
                M = () => {},
                C = {
                    playing: !1,
                    loop: !1,
                    controls: !1,
                    volume: null,
                    muted: !1,
                    playbackRate: 1,
                    width: "640px",
                    height: "360px",
                    style: {},
                    progressInterval: 1e3,
                    playsinline: !1,
                    pip: !1,
                    stopOnUnmount: !0,
                    light: !1,
                    fallback: null,
                    wrapper: "div",
                    previewTabIndex: 0,
                    previewAriaLabel: "",
                    oEmbedUrl: "https://noembed.com/embed?url={url}",
                    config: {
                        soundcloud: { options: { visual: !0, buying: !1, liking: !1, download: !1, sharing: !1, show_comments: !1, show_playcount: !1 } },
                        youtube: { playerVars: { playsinline: 1, showinfo: 0, rel: 0, iv_load_policy: 3, modestbranding: 1 }, embedOptions: {}, onUnstarted: M },
                        facebook: { appId: "1309697205772819", version: "v3.3", playerId: null, attributes: {} },
                        dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
                        vimeo: { playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 }, title: null },
                        mux: { attributes: {}, version: "2" },
                        file: {
                            attributes: {},
                            tracks: [],
                            forceVideo: !1,
                            forceAudio: !1,
                            forceHLS: !1,
                            forceDASH: !1,
                            forceFLV: !1,
                            hlsOptions: {},
                            hlsVersion: "1.1.4",
                            dashVersion: "3.1.3",
                            flvVersion: "1.5.0",
                            forceDisableHls: !1,
                        },
                        wistia: { options: {}, playerId: null, customControls: null },
                        mixcloud: { options: { hide_cover: 1 } },
                        twitch: { options: {}, playerId: null },
                        vidyard: { options: {} },
                    },
                    onReady: M,
                    onStart: M,
                    onPlay: M,
                    onPause: M,
                    onBuffer: M,
                    onBufferEnd: M,
                    onEnded: M,
                    onError: M,
                    onDuration: M,
                    onSeek: M,
                    onPlaybackRateChange: M,
                    onPlaybackQualityChange: M,
                    onProgress: M,
                    onClickPreview: M,
                    onEnablePIP: M,
                    onDisablePIP: M,
                };
        },
        65700: function (t, e, n) {
            var r = Object.create,
                i = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                a = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                c = (t, e, n, r) => {
                    if ((e && "object" == typeof e) || "function" == typeof e) for (let a of s(e)) l.call(t, a) || a === n || i(t, a, { get: () => e[a], enumerable: !(r = o(e, a)) || r.enumerable });
                    return t;
                },
                u = (t, e, n) => ((n = null != t ? r(a(t)) : {}), c(!e && t && t.__esModule ? n : i(n, "default", { value: t, enumerable: !0 }), t)),
                h = {};
            ((t, e) => {
                for (var n in e) i(t, n, { get: e[n], enumerable: !0 });
            })(h, {
                callPlayer: () => P,
                getConfig: () => _,
                getSDK: () => O,
                isBlobUrl: () => D,
                isMediaStream: () => A,
                lazy: () => m,
                omit: () => T,
                parseEndTime: () => S,
                parseStartTime: () => x,
                queryString: () => M,
                randomString: () => k,
                supportsWebKitPresentationMode: () => I,
            }),
                (t.exports = c(i({}, "__esModule", { value: !0 }), h));
            var d = u(n(2265)),
                p = u(n(26649)),
                f = u(n(51567));
            let m = t =>
                    d.default.lazy(async () => {
                        let e = await t();
                        return "function" == typeof e.default ? e : e.default;
                    }),
                g = /[?&#](?:start|t)=([0-9hms]+)/,
                y = /[?&#]end=([0-9hms]+)/,
                v = /(\d+)(h|m|s)/g,
                b = /^\d+$/;
            function w(t, e) {
                if (t instanceof Array) return;
                let n = t.match(e);
                if (n) {
                    let t = n[1];
                    if (t.match(v))
                        return (function (t) {
                            let e = 0,
                                n = v.exec(t);
                            for (; null !== n; ) {
                                let [, r, i] = n;
                                "h" === i && (e += 3600 * parseInt(r, 10)), "m" === i && (e += 60 * parseInt(r, 10)), "s" === i && (e += parseInt(r, 10)), (n = v.exec(t));
                            }
                            return e;
                        })(t);
                    if (b.test(t)) return parseInt(t);
                }
            }
            function x(t) {
                return w(t, g);
            }
            function S(t) {
                return w(t, y);
            }
            function k() {
                return Math.random().toString(36).substr(2, 5);
            }
            function M(t) {
                return Object.keys(t)
                    .map(e => `${e}=${t[e]}`)
                    .join("&");
            }
            function C(t) {
                return window[t]
                    ? window[t]
                    : window.exports && window.exports[t]
                    ? window.exports[t]
                    : window.module && window.module.exports && window.module.exports[t]
                    ? window.module.exports[t]
                    : null;
            }
            let E = {},
                O = function (t, e, n = null, r = () => !0, i = p.default) {
                    let o = C(e);
                    return o && r(o)
                        ? Promise.resolve(o)
                        : new Promise((r, o) => {
                              if (E[t]) {
                                  E[t].push({ resolve: r, reject: o });
                                  return;
                              }
                              E[t] = [{ resolve: r, reject: o }];
                              let s = e => {
                                  E[t].forEach(t => t.resolve(e));
                              };
                              if (n) {
                                  let t = window[n];
                                  window[n] = function () {
                                      t && t(), s(C(e));
                                  };
                              }
                              i(t, r => {
                                  r ? (E[t].forEach(t => t.reject(r)), (E[t] = null)) : n || s(C(e));
                              });
                          });
                };
            function _(t, e) {
                return (0, f.default)(e.config, t.config);
            }
            function T(t, ...e) {
                let n = [].concat(...e),
                    r = {};
                for (let e of Object.keys(t)) -1 === n.indexOf(e) && (r[e] = t[e]);
                return r;
            }
            function P(t, ...e) {
                if (!this.player || !this.player[t]) {
                    let e = `ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c \u2013 `;
                    return this.player ? this.player[t] || (e += "The method was not available") : (e += "The player was not available"), console.warn(e, "font-weight: bold", ""), null;
                }
                return this.player[t](...e);
            }
            function A(t) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && t instanceof window.MediaStream;
            }
            function D(t) {
                return /^blob:/.test(t);
            }
            function I(t = document.createElement("video")) {
                let e = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return t.webkitSupportsPresentationMode && "function" == typeof t.webkitSetPresentationMode && e;
            }
        },
        49455: function (t, e, n) {
            "use strict";
            function r(t, e, n, r, i, o, s) {
                (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
                    (this.attributeName = r),
                    (this.attributeNamespace = i),
                    (this.mustUseProperty = n),
                    (this.propertyName = t),
                    (this.type = e),
                    (this.sanitizeURL = o),
                    (this.removeEmptyString = s);
            }
            let i = {};
            ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(t => {
                i[t] = new r(t, 0, !1, t, null, !1, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(([t, e]) => {
                    i[t] = new r(t, 1, !1, e, null, !1, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(t => {
                    i[t] = new r(t, 2, !1, t.toLowerCase(), null, !1, !1);
                }),
                ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(t => {
                    i[t] = new r(t, 2, !1, t, null, !1, !1);
                }),
                [
                    "allowFullScreen",
                    "async",
                    "autoFocus",
                    "autoPlay",
                    "controls",
                    "default",
                    "defer",
                    "disabled",
                    "disablePictureInPicture",
                    "disableRemotePlayback",
                    "formNoValidate",
                    "hidden",
                    "loop",
                    "noModule",
                    "noValidate",
                    "open",
                    "playsInline",
                    "readOnly",
                    "required",
                    "reversed",
                    "scoped",
                    "seamless",
                    "itemScope",
                ].forEach(t => {
                    i[t] = new r(t, 3, !1, t.toLowerCase(), null, !1, !1);
                }),
                ["checked", "multiple", "muted", "selected"].forEach(t => {
                    i[t] = new r(t, 3, !0, t, null, !1, !1);
                }),
                ["capture", "download"].forEach(t => {
                    i[t] = new r(t, 4, !1, t, null, !1, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(t => {
                    i[t] = new r(t, 6, !1, t, null, !1, !1);
                }),
                ["rowSpan", "start"].forEach(t => {
                    i[t] = new r(t, 5, !1, t.toLowerCase(), null, !1, !1);
                });
            let o = /[\-\:]([a-z])/g,
                s = t => t[1].toUpperCase();
            [
                "accent-height",
                "alignment-baseline",
                "arabic-form",
                "baseline-shift",
                "cap-height",
                "clip-path",
                "clip-rule",
                "color-interpolation",
                "color-interpolation-filters",
                "color-profile",
                "color-rendering",
                "dominant-baseline",
                "enable-background",
                "fill-opacity",
                "fill-rule",
                "flood-color",
                "flood-opacity",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "glyph-name",
                "glyph-orientation-horizontal",
                "glyph-orientation-vertical",
                "horiz-adv-x",
                "horiz-origin-x",
                "image-rendering",
                "letter-spacing",
                "lighting-color",
                "marker-end",
                "marker-mid",
                "marker-start",
                "overline-position",
                "overline-thickness",
                "paint-order",
                "panose-1",
                "pointer-events",
                "rendering-intent",
                "shape-rendering",
                "stop-color",
                "stop-opacity",
                "strikethrough-position",
                "strikethrough-thickness",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "text-anchor",
                "text-decoration",
                "text-rendering",
                "underline-position",
                "underline-thickness",
                "unicode-bidi",
                "unicode-range",
                "units-per-em",
                "v-alphabetic",
                "v-hanging",
                "v-ideographic",
                "v-mathematical",
                "vector-effect",
                "vert-adv-y",
                "vert-origin-x",
                "vert-origin-y",
                "word-spacing",
                "writing-mode",
                "xmlns:xlink",
                "x-height",
            ].forEach(t => {
                let e = t.replace(o, s);
                i[e] = new r(e, 1, !1, t, null, !1, !1);
            }),
                ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(t => {
                    let e = t.replace(o, s);
                    i[e] = new r(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(t => {
                    let e = t.replace(o, s);
                    i[e] = new r(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
                }),
                ["tabIndex", "crossOrigin"].forEach(t => {
                    i[t] = new r(t, 1, !1, t.toLowerCase(), null, !1, !1);
                }),
                (i.xlinkHref = new r("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
                ["src", "href", "action", "formAction"].forEach(t => {
                    i[t] = new r(t, 1, !1, t.toLowerCase(), null, !0, !0);
                });
            let { CAMELCASE: a, SAME: l, possibleStandardNames: c } = n(46626),
                u = RegExp.prototype.test.bind(
                    RegExp(
                        "^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
                    )
                ),
                h = Object.keys(c).reduce((t, e) => {
                    let n = c[e];
                    return n === l ? (t[e] = e) : n === a ? (t[e.toLowerCase()] = e) : (t[e] = n), t;
                }, {});
            (e.BOOLEAN = 3),
                (e.BOOLEANISH_STRING = 2),
                (e.NUMERIC = 5),
                (e.OVERLOADED_BOOLEAN = 4),
                (e.POSITIVE_NUMERIC = 6),
                (e.RESERVED = 0),
                (e.STRING = 1),
                (e.getPropertyInfo = function (t) {
                    return i.hasOwnProperty(t) ? i[t] : null;
                }),
                (e.isCustomAttribute = u),
                (e.possibleStandardNames = h);
        },
        46626: function (t, e) {
            (e.SAME = 0),
                (e.CAMELCASE = 1),
                (e.possibleStandardNames = {
                    accept: 0,
                    acceptCharset: 1,
                    "accept-charset": "acceptCharset",
                    accessKey: 1,
                    action: 0,
                    allowFullScreen: 1,
                    alt: 0,
                    as: 0,
                    async: 0,
                    autoCapitalize: 1,
                    autoComplete: 1,
                    autoCorrect: 1,
                    autoFocus: 1,
                    autoPlay: 1,
                    autoSave: 1,
                    capture: 0,
                    cellPadding: 1,
                    cellSpacing: 1,
                    challenge: 0,
                    charSet: 1,
                    checked: 0,
                    children: 0,
                    cite: 0,
                    class: "className",
                    classID: 1,
                    className: 1,
                    cols: 0,
                    colSpan: 1,
                    content: 0,
                    contentEditable: 1,
                    contextMenu: 1,
                    controls: 0,
                    controlsList: 1,
                    coords: 0,
                    crossOrigin: 1,
                    dangerouslySetInnerHTML: 1,
                    data: 0,
                    dateTime: 1,
                    default: 0,
                    defaultChecked: 1,
                    defaultValue: 1,
                    defer: 0,
                    dir: 0,
                    disabled: 0,
                    disablePictureInPicture: 1,
                    disableRemotePlayback: 1,
                    download: 0,
                    draggable: 0,
                    encType: 1,
                    enterKeyHint: 1,
                    for: "htmlFor",
                    form: 0,
                    formMethod: 1,
                    formAction: 1,
                    formEncType: 1,
                    formNoValidate: 1,
                    formTarget: 1,
                    frameBorder: 1,
                    headers: 0,
                    height: 0,
                    hidden: 0,
                    high: 0,
                    href: 0,
                    hrefLang: 1,
                    htmlFor: 1,
                    httpEquiv: 1,
                    "http-equiv": "httpEquiv",
                    icon: 0,
                    id: 0,
                    innerHTML: 1,
                    inputMode: 1,
                    integrity: 0,
                    is: 0,
                    itemID: 1,
                    itemProp: 1,
                    itemRef: 1,
                    itemScope: 1,
                    itemType: 1,
                    keyParams: 1,
                    keyType: 1,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 0,
                    low: 0,
                    manifest: 0,
                    marginWidth: 1,
                    marginHeight: 1,
                    max: 0,
                    maxLength: 1,
                    media: 0,
                    mediaGroup: 1,
                    method: 0,
                    min: 0,
                    minLength: 1,
                    multiple: 0,
                    muted: 0,
                    name: 0,
                    noModule: 1,
                    nonce: 0,
                    noValidate: 1,
                    open: 0,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 1,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 1,
                    readOnly: 1,
                    referrerPolicy: 1,
                    rel: 0,
                    required: 0,
                    reversed: 0,
                    role: 0,
                    rows: 0,
                    rowSpan: 1,
                    sandbox: 0,
                    scope: 0,
                    scoped: 0,
                    scrolling: 0,
                    seamless: 0,
                    selected: 0,
                    shape: 0,
                    size: 0,
                    sizes: 0,
                    span: 0,
                    spellCheck: 1,
                    src: 0,
                    srcDoc: 1,
                    srcLang: 1,
                    srcSet: 1,
                    start: 0,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 1,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 1,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    accentHeight: 1,
                    "accent-height": "accentHeight",
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 1,
                    "alignment-baseline": "alignmentBaseline",
                    allowReorder: 1,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 1,
                    "arabic-form": "arabicForm",
                    ascent: 0,
                    attributeName: 1,
                    attributeType: 1,
                    autoReverse: 1,
                    azimuth: 0,
                    baseFrequency: 1,
                    baselineShift: 1,
                    "baseline-shift": "baselineShift",
                    baseProfile: 1,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 1,
                    capHeight: 1,
                    "cap-height": "capHeight",
                    clip: 0,
                    clipPath: 1,
                    "clip-path": "clipPath",
                    clipPathUnits: 1,
                    clipRule: 1,
                    "clip-rule": "clipRule",
                    color: 0,
                    colorInterpolation: 1,
                    "color-interpolation": "colorInterpolation",
                    colorInterpolationFilters: 1,
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorProfile: 1,
                    "color-profile": "colorProfile",
                    colorRendering: 1,
                    "color-rendering": "colorRendering",
                    contentScriptType: 1,
                    contentStyleType: 1,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    datatype: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 1,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 1,
                    "dominant-baseline": "dominantBaseline",
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 1,
                    elevation: 0,
                    enableBackground: 1,
                    "enable-background": "enableBackground",
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 1,
                    fill: 0,
                    fillOpacity: 1,
                    "fill-opacity": "fillOpacity",
                    fillRule: 1,
                    "fill-rule": "fillRule",
                    filter: 0,
                    filterRes: 1,
                    filterUnits: 1,
                    floodOpacity: 1,
                    "flood-opacity": "floodOpacity",
                    floodColor: 1,
                    "flood-color": "floodColor",
                    focusable: 0,
                    fontFamily: 1,
                    "font-family": "fontFamily",
                    fontSize: 1,
                    "font-size": "fontSize",
                    fontSizeAdjust: 1,
                    "font-size-adjust": "fontSizeAdjust",
                    fontStretch: 1,
                    "font-stretch": "fontStretch",
                    fontStyle: 1,
                    "font-style": "fontStyle",
                    fontVariant: 1,
                    "font-variant": "fontVariant",
                    fontWeight: 1,
                    "font-weight": "fontWeight",
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 1,
                    "glyph-name": "glyphName",
                    glyphOrientationHorizontal: 1,
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphOrientationVertical: 1,
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphRef: 1,
                    gradientTransform: 1,
                    gradientUnits: 1,
                    hanging: 0,
                    horizAdvX: 1,
                    "horiz-adv-x": "horizAdvX",
                    horizOriginX: 1,
                    "horiz-origin-x": "horizOriginX",
                    ideographic: 0,
                    imageRendering: 1,
                    "image-rendering": "imageRendering",
                    in2: 0,
                    in: 0,
                    inlist: 0,
                    intercept: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    k: 0,
                    kernelMatrix: 1,
                    kernelUnitLength: 1,
                    kerning: 0,
                    keyPoints: 1,
                    keySplines: 1,
                    keyTimes: 1,
                    lengthAdjust: 1,
                    letterSpacing: 1,
                    "letter-spacing": "letterSpacing",
                    lightingColor: 1,
                    "lighting-color": "lightingColor",
                    limitingConeAngle: 1,
                    local: 0,
                    markerEnd: 1,
                    "marker-end": "markerEnd",
                    markerHeight: 1,
                    markerMid: 1,
                    "marker-mid": "markerMid",
                    markerStart: 1,
                    "marker-start": "markerStart",
                    markerUnits: 1,
                    markerWidth: 1,
                    mask: 0,
                    maskContentUnits: 1,
                    maskUnits: 1,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 1,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 1,
                    "overline-position": "overlinePosition",
                    overlineThickness: 1,
                    "overline-thickness": "overlineThickness",
                    paintOrder: 1,
                    "paint-order": "paintOrder",
                    panose1: 0,
                    "panose-1": "panose1",
                    pathLength: 1,
                    patternContentUnits: 1,
                    patternTransform: 1,
                    patternUnits: 1,
                    pointerEvents: 1,
                    "pointer-events": "pointerEvents",
                    points: 0,
                    pointsAtX: 1,
                    pointsAtY: 1,
                    pointsAtZ: 1,
                    prefix: 0,
                    preserveAlpha: 1,
                    preserveAspectRatio: 1,
                    primitiveUnits: 1,
                    property: 0,
                    r: 0,
                    radius: 0,
                    refX: 1,
                    refY: 1,
                    renderingIntent: 1,
                    "rendering-intent": "renderingIntent",
                    repeatCount: 1,
                    repeatDur: 1,
                    requiredExtensions: 1,
                    requiredFeatures: 1,
                    resource: 0,
                    restart: 0,
                    result: 0,
                    results: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    security: 0,
                    seed: 0,
                    shapeRendering: 1,
                    "shape-rendering": "shapeRendering",
                    slope: 0,
                    spacing: 0,
                    specularConstant: 1,
                    specularExponent: 1,
                    speed: 0,
                    spreadMethod: 1,
                    startOffset: 1,
                    stdDeviation: 1,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 1,
                    stopColor: 1,
                    "stop-color": "stopColor",
                    stopOpacity: 1,
                    "stop-opacity": "stopOpacity",
                    strikethroughPosition: 1,
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughThickness: 1,
                    "strikethrough-thickness": "strikethroughThickness",
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 1,
                    "stroke-dasharray": "strokeDasharray",
                    strokeDashoffset: 1,
                    "stroke-dashoffset": "strokeDashoffset",
                    strokeLinecap: 1,
                    "stroke-linecap": "strokeLinecap",
                    strokeLinejoin: 1,
                    "stroke-linejoin": "strokeLinejoin",
                    strokeMiterlimit: 1,
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokeWidth: 1,
                    "stroke-width": "strokeWidth",
                    strokeOpacity: 1,
                    "stroke-opacity": "strokeOpacity",
                    suppressContentEditableWarning: 1,
                    suppressHydrationWarning: 1,
                    surfaceScale: 1,
                    systemLanguage: 1,
                    tableValues: 1,
                    targetX: 1,
                    targetY: 1,
                    textAnchor: 1,
                    "text-anchor": "textAnchor",
                    textDecoration: 1,
                    "text-decoration": "textDecoration",
                    textLength: 1,
                    textRendering: 1,
                    "text-rendering": "textRendering",
                    to: 0,
                    transform: 0,
                    typeof: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 1,
                    "underline-position": "underlinePosition",
                    underlineThickness: 1,
                    "underline-thickness": "underlineThickness",
                    unicode: 0,
                    unicodeBidi: 1,
                    "unicode-bidi": "unicodeBidi",
                    unicodeRange: 1,
                    "unicode-range": "unicodeRange",
                    unitsPerEm: 1,
                    "units-per-em": "unitsPerEm",
                    unselectable: 0,
                    vAlphabetic: 1,
                    "v-alphabetic": "vAlphabetic",
                    values: 0,
                    vectorEffect: 1,
                    "vector-effect": "vectorEffect",
                    version: 0,
                    vertAdvY: 1,
                    "vert-adv-y": "vertAdvY",
                    vertOriginX: 1,
                    "vert-origin-x": "vertOriginX",
                    vertOriginY: 1,
                    "vert-origin-y": "vertOriginY",
                    vHanging: 1,
                    "v-hanging": "vHanging",
                    vIdeographic: 1,
                    "v-ideographic": "vIdeographic",
                    viewBox: 1,
                    viewTarget: 1,
                    visibility: 0,
                    vMathematical: 1,
                    "v-mathematical": "vMathematical",
                    vocab: 0,
                    widths: 0,
                    wordSpacing: 1,
                    "word-spacing": "wordSpacing",
                    writingMode: 1,
                    "writing-mode": "writingMode",
                    x1: 0,
                    x2: 0,
                    x: 0,
                    xChannelSelector: 1,
                    xHeight: 1,
                    "x-height": "xHeight",
                    xlinkActuate: 1,
                    "xlink:actuate": "xlinkActuate",
                    xlinkArcrole: 1,
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkHref: 1,
                    "xlink:href": "xlinkHref",
                    xlinkRole: 1,
                    "xlink:role": "xlinkRole",
                    xlinkShow: 1,
                    "xlink:show": "xlinkShow",
                    xlinkTitle: 1,
                    "xlink:title": "xlinkTitle",
                    xlinkType: 1,
                    "xlink:type": "xlinkType",
                    xmlBase: 1,
                    "xml:base": "xmlBase",
                    xmlLang: 1,
                    "xml:lang": "xmlLang",
                    xmlns: 0,
                    "xml:space": "xmlSpace",
                    xmlnsXlink: 1,
                    "xmlns:xlink": "xmlnsXlink",
                    xmlSpace: 1,
                    y1: 0,
                    y2: 0,
                    y: 0,
                    yChannelSelector: 1,
                    z: 0,
                    zoomAndPan: 1,
                });
        },
        65647: function (t, e, n) {
            var r,
                i,
                o = n(98799),
                s = n(84772),
                a = n(2265),
                l = n(79780);
            function c(t) {
                return t && t.__esModule ? t.default : t;
            }
            function u(t, e, n, r) {
                Object.defineProperty(t, e, { get: n, set: r, enumerable: !0, configurable: !0 });
            }
            function h(t) {
                null !== t.parentElement && t.parentElement.removeChild(t);
            }
            function d(t) {
                t.forEach(t => h(t.element));
            }
            function p(t) {
                t.forEach(t => {
                    !(function (t, e, n) {
                        let r = t.children[n] || null;
                        t.insertBefore(e, r);
                    })(t.parentElement, t.element, t.oldIndex);
                });
            }
            function f(t, e) {
                let n = y(t),
                    r = { parentElement: t.from },
                    i = [];
                switch (n) {
                    case "normal":
                        i = [{ element: t.item, newIndex: t.newIndex, oldIndex: t.oldIndex, parentElement: t.from }];
                        break;
                    case "swap":
                        i = [
                            { element: t.item, oldIndex: t.oldIndex, newIndex: t.newIndex, ...r },
                            { element: t.swapItem, oldIndex: t.newIndex, newIndex: t.oldIndex, ...r },
                        ];
                        break;
                    case "multidrag":
                        i = t.oldIndicies.map((e, n) => ({ element: e.multiDragElement, oldIndex: e.index, newIndex: t.newIndicies[n].index, ...r }));
                }
                return i.map(t => ({ ...t, item: e[t.oldIndex] })).sort((t, e) => t.oldIndex - e.oldIndex);
            }
            function m(t, e) {
                let n = [...e];
                return (
                    t
                        .concat()
                        .reverse()
                        .forEach(t => n.splice(t.oldIndex, 1)),
                    n
                );
            }
            function g(t, e, n, r) {
                let i = [...e];
                return (
                    t.forEach(t => {
                        let e = r && n && r(t.item, n);
                        i.splice(t.newIndex, 0, e || t.item);
                    }),
                    i
                );
            }
            function y(t) {
                return t.oldIndicies && t.oldIndicies.length > 0 ? "multidrag" : t.swapItem ? "swap" : "normal";
            }
            u(t.exports, "Sortable", () => $882b6d93070905b3$re_export$Sortable),
                u(t.exports, "Direction", () => $882b6d93070905b3$re_export$Direction),
                u(t.exports, "DOMRect", () => $882b6d93070905b3$re_export$DOMRect),
                u(t.exports, "GroupOptions", () => $882b6d93070905b3$re_export$GroupOptions),
                u(t.exports, "MoveEvent", () => $882b6d93070905b3$re_export$MoveEvent),
                u(t.exports, "Options", () => $882b6d93070905b3$re_export$Options),
                u(t.exports, "PullResult", () => $882b6d93070905b3$re_export$PullResult),
                u(t.exports, "PutResult", () => $882b6d93070905b3$re_export$PutResult),
                u(t.exports, "SortableEvent", () => $882b6d93070905b3$re_export$SortableEvent),
                u(t.exports, "SortableOptions", () => $882b6d93070905b3$re_export$SortableOptions),
                u(t.exports, "Utils", () => $882b6d93070905b3$re_export$Utils),
                u(t.exports, "ReactSortable", () => b);
            let v = { dragging: null };
            class b extends a.Component {
                static defaultProps = { clone: t => t };
                constructor(t) {
                    super(t), (this.ref = (0, a.createRef)());
                    let e = [...t.list].map(t => Object.assign(t, { chosen: !1, selected: !1 }));
                    t.setList(e, this.sortable, v),
                        c(l)(
                            !t.plugins,
                            `
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `
                        );
                }
                componentDidMount() {
                    if (null === this.ref.current) return;
                    let t = this.makeOptions();
                    c(o).create(this.ref.current, t);
                }
                componentDidUpdate(t) {
                    t.disabled !== this.props.disabled && this.sortable && this.sortable.option("disabled", this.props.disabled);
                }
                render() {
                    let { tag: t, style: e, className: n, id: r } = this.props;
                    return (0, a.createElement)(t && null !== t ? t : "div", { ref: this.ref, style: e, className: n, id: r }, this.getChildren());
                }
                getChildren() {
                    let {
                        children: t,
                        dataIdAttr: e,
                        selectedClass: n = "sortable-selected",
                        chosenClass: r = "sortable-chosen",
                        dragClass: i = "sortable-drag",
                        fallbackClass: o = "sortable-falback",
                        ghostClass: l = "sortable-ghost",
                        swapClass: u = "sortable-swap-highlight",
                        filter: h = "sortable-filter",
                        list: d,
                    } = this.props;
                    if (!t || null == t) return null;
                    let p = e || "data-id";
                    return (0, a.Children).map(t, (t, e) => {
                        if (void 0 === t) return;
                        let i = d[e] || {},
                            { className: o } = t.props,
                            l = "string" == typeof h && { [h.replace(".", "")]: !!i.filtered },
                            u = c(s)(o, { [n]: i.selected, [r]: i.chosen, ...l });
                        return (0, a.cloneElement)(t, { [p]: t.key, className: u });
                    });
                }
                get sortable() {
                    let t = this.ref.current;
                    if (null === t) return null;
                    let e = Object.keys(t).find(t => t.includes("Sortable"));
                    return e ? t[e] : null;
                }
                makeOptions() {
                    let t = (function (t) {
                        let {
                            list: e,
                            setList: n,
                            children: r,
                            tag: i,
                            style: o,
                            className: s,
                            clone: a,
                            onAdd: l,
                            onChange: c,
                            onChoose: u,
                            onClone: h,
                            onEnd: d,
                            onFilter: p,
                            onRemove: f,
                            onSort: m,
                            onStart: g,
                            onUnchoose: y,
                            onUpdate: v,
                            onMove: b,
                            onSpill: w,
                            onSelect: x,
                            onDeselect: S,
                            ...k
                        } = t;
                        return k;
                    })(this.props);
                    return (
                        ["onAdd", "onChoose", "onDeselect", "onEnd", "onRemove", "onSelect", "onSpill", "onStart", "onUnchoose", "onUpdate"].forEach(e => (t[e] = this.prepareOnHandlerPropAndDOM(e))),
                        ["onChange", "onClone", "onFilter", "onSort"].forEach(e => (t[e] = this.prepareOnHandlerProp(e))),
                        {
                            ...t,
                            onMove: (t, e) => {
                                let { onMove: n } = this.props,
                                    r = t.willInsertAfter || -1;
                                if (!n) return r;
                                let i = n(t, e, this.sortable, v);
                                return void 0 !== i && i;
                            },
                        }
                    );
                }
                prepareOnHandlerPropAndDOM(t) {
                    return e => {
                        this.callOnHandlerProp(e, t), this[t](e);
                    };
                }
                prepareOnHandlerProp(t) {
                    return e => {
                        this.callOnHandlerProp(e, t);
                    };
                }
                callOnHandlerProp(t, e) {
                    let n = this.props[e];
                    n && n(t, this.sortable, v);
                }
                onAdd(t) {
                    let { list: e, setList: n, clone: r } = this.props,
                        i = f(t, [...v.dragging.props.list]);
                    d(i),
                        n(
                            g(i, e, t, r).map(t => Object.assign(t, { selected: !1 })),
                            this.sortable,
                            v
                        );
                }
                onRemove(t) {
                    let { list: e, setList: n } = this.props,
                        r = y(t),
                        i = f(t, e);
                    p(i);
                    let o = [...e];
                    if ("clone" !== t.pullMode) o = m(i, o);
                    else {
                        let e = i;
                        switch (r) {
                            case "multidrag":
                                e = i.map((e, n) => ({ ...e, element: t.clones[n] }));
                                break;
                            case "normal":
                                e = i.map(e => ({ ...e, element: t.clone }));
                                break;
                            default:
                                c(l)(!0, `mode "${r}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${r}" plugin`);
                        }
                        d(e),
                            i.forEach(e => {
                                let n = e.oldIndex,
                                    r = this.props.clone(e.item, t);
                                o.splice(n, 1, r);
                            });
                    }
                    n((o = o.map(t => Object.assign(t, { selected: !1 }))), this.sortable, v);
                }
                onUpdate(t) {
                    let { list: e, setList: n } = this.props,
                        r = f(t, e);
                    return (
                        d(r),
                        p(r),
                        n(
                            (function (t, e) {
                                let n = m(t, e);
                                return g(t, n);
                            })(r, e),
                            this.sortable,
                            v
                        )
                    );
                }
                onStart() {
                    v.dragging = this;
                }
                onEnd() {
                    v.dragging = null;
                }
                onChoose(t) {
                    let { list: e, setList: n } = this.props;
                    n(
                        e.map((e, n) => {
                            let r = e;
                            return n === t.oldIndex && (r = Object.assign(e, { chosen: !0 })), r;
                        }),
                        this.sortable,
                        v
                    );
                }
                onUnchoose(t) {
                    let { list: e, setList: n } = this.props;
                    n(
                        e.map((e, n) => {
                            let r = e;
                            return n === t.oldIndex && (r = Object.assign(r, { chosen: !1 })), r;
                        }),
                        this.sortable,
                        v
                    );
                }
                onSpill(t) {
                    let { removeOnSpill: e, revertOnSpill: n } = this.props;
                    e && !n && h(t.item);
                }
                onSelect(t) {
                    let { list: e, setList: n } = this.props,
                        r = e.map(t => Object.assign(t, { selected: !1 }));
                    t.newIndicies.forEach(e => {
                        let n = e.index;
                        if (-1 === n) {
                            console.log(`"${t.type}" had indice of "${e.index}", which is probably -1 and doesn't usually happen here.`), console.log(t);
                            return;
                        }
                        r[n].selected = !0;
                    }),
                        n(r, this.sortable, v);
                }
                onDeselect(t) {
                    let { list: e, setList: n } = this.props,
                        r = e.map(t => Object.assign(t, { selected: !1 }));
                    t.newIndicies.forEach(t => {
                        let e = t.index;
                        -1 !== e && (r[e].selected = !0);
                    }),
                        n(r, this.sortable, v);
                }
            }
            (r = t.exports),
                Object.keys((i = {})).forEach(function (t) {
                    "default" === t ||
                        "__esModule" === t ||
                        r.hasOwnProperty(t) ||
                        Object.defineProperty(r, t, {
                            enumerable: !0,
                            get: function () {
                                return i[t];
                            },
                        });
                });
        },
        98799: function (t, e, n) {
            "use strict";
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? r(Object(n), !0).forEach(function (e) {
                              var r;
                              (r = n[e]), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : r(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function o(t) {
                return (o =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function s() {
                return (s =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function l(t) {
                if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t);
            }
            n.r(e),
                n.d(e, {
                    MultiDrag: function () {
                        return el;
                    },
                    Sortable: function () {
                        return tH;
                    },
                    Swap: function () {
                        return t9;
                    },
                });
            var c = l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
                u = l(/Edge/i),
                h = l(/firefox/i),
                d = l(/safari/i) && !l(/chrome/i) && !l(/android/i),
                p = l(/iP(ad|od|hone)/i),
                f = l(/chrome/i) && l(/android/i),
                m = { capture: !1, passive: !1 };
            function g(t, e, n) {
                t.addEventListener(e, n, !c && m);
            }
            function y(t, e, n) {
                t.removeEventListener(e, n, !c && m);
            }
            function v(t, e) {
                if (e) {
                    if ((">" === e[0] && (e = e.substring(1)), t))
                        try {
                            if (t.matches) return t.matches(e);
                            if (t.msMatchesSelector) return t.msMatchesSelector(e);
                            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                        } catch (t) {}
                    return !1;
                }
            }
            function b(t, e, n, r) {
                if (t) {
                    var i;
                    n = n || document;
                    do {
                        if ((null != e && (">" === e[0] ? t.parentNode === n && v(t, e) : v(t, e))) || (r && t === n)) return t;
                        if (t === n) break;
                    } while ((t = (i = t).host && i !== document && i.host.nodeType ? i.host : i.parentNode));
                }
                return null;
            }
            var w = /\s+/g;
            function x(t, e, n) {
                if (t && e) {
                    if (t.classList) t.classList[n ? "add" : "remove"](e);
                    else {
                        var r = (" " + t.className + " ").replace(w, " ").replace(" " + e + " ", " ");
                        t.className = (r + (n ? " " + e : "")).replace(w, " ");
                    }
                }
            }
            function S(t, e, n) {
                var r = t && t.style;
                if (r) {
                    if (void 0 === n)
                        return (
                            document.defaultView && document.defaultView.getComputedStyle ? (n = document.defaultView.getComputedStyle(t, "")) : t.currentStyle && (n = t.currentStyle),
                            void 0 === e ? n : n[e]
                        );
                    e in r || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), (r[e] = n + ("string" == typeof n ? "" : "px"));
                }
            }
            function k(t, e) {
                var n = "";
                if ("string" == typeof t) n = t;
                else
                    do {
                        var r = S(t, "transform");
                        r && "none" !== r && (n = r + " " + n);
                    } while (!e && (t = t.parentNode));
                var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
                return i && new i(n);
            }
            function M(t, e, n) {
                if (t) {
                    var r = t.getElementsByTagName(e),
                        i = 0,
                        o = r.length;
                    if (n) for (; i < o; i++) n(r[i], i);
                    return r;
                }
                return [];
            }
            function C() {
                return document.scrollingElement || document.documentElement;
            }
            function E(t, e, n, r, i) {
                if (t.getBoundingClientRect || t === window) {
                    if (
                        (t !== window && t.parentNode && t !== C()
                            ? ((s = (o = t.getBoundingClientRect()).top), (a = o.left), (l = o.bottom), (u = o.right), (h = o.height), (d = o.width))
                            : ((s = 0), (a = 0), (l = window.innerHeight), (u = window.innerWidth), (h = window.innerHeight), (d = window.innerWidth)),
                        (e || n) && t !== window && ((i = i || t.parentNode), !c))
                    )
                        do
                            if (i && i.getBoundingClientRect && ("none" !== S(i, "transform") || (n && "static" !== S(i, "position")))) {
                                var o,
                                    s,
                                    a,
                                    l,
                                    u,
                                    h,
                                    d,
                                    p = i.getBoundingClientRect();
                                (s -= p.top + parseInt(S(i, "border-top-width"))), (a -= p.left + parseInt(S(i, "border-left-width"))), (l = s + o.height), (u = a + o.width);
                                break;
                            }
                        while ((i = i.parentNode));
                    if (r && t !== window) {
                        var f = k(i || t),
                            m = f && f.a,
                            g = f && f.d;
                        f && ((s /= g), (a /= m), (d /= m), (h /= g), (l = s + h), (u = a + d));
                    }
                    return { top: s, left: a, bottom: l, right: u, width: d, height: h };
                }
            }
            function O(t, e, n) {
                for (var r = D(t, !0), i = E(t)[e]; r; ) {
                    var o = E(r)[n];
                    if (!("top" === n || "left" === n ? i >= o : i <= o)) return r;
                    if (r === C()) break;
                    r = D(r, !1);
                }
                return !1;
            }
            function _(t, e, n, r) {
                for (var i = 0, o = 0, s = t.children; o < s.length; ) {
                    if ("none" !== s[o].style.display && s[o] !== tH.ghost && (r || s[o] !== tH.dragged) && b(s[o], n.draggable, t, !1)) {
                        if (i === e) return s[o];
                        i++;
                    }
                    o++;
                }
                return null;
            }
            function T(t, e) {
                for (var n = t.lastElementChild; n && (n === tH.ghost || "none" === S(n, "display") || (e && !v(n, e))); ) n = n.previousElementSibling;
                return n || null;
            }
            function P(t, e) {
                var n = 0;
                if (!t || !t.parentNode) return -1;
                for (; (t = t.previousElementSibling); ) "TEMPLATE" !== t.nodeName.toUpperCase() && t !== tH.clone && (!e || v(t, e)) && n++;
                return n;
            }
            function A(t) {
                var e = 0,
                    n = 0,
                    r = C();
                if (t)
                    do {
                        var i = k(t),
                            o = i.a,
                            s = i.d;
                        (e += t.scrollLeft * o), (n += t.scrollTop * s);
                    } while (t !== r && (t = t.parentNode));
                return [e, n];
            }
            function D(t, e) {
                if (!t || !t.getBoundingClientRect) return C();
                var n = t,
                    r = !1;
                do
                    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                        var i = S(n);
                        if (
                            (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX)) ||
                            (n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY))
                        ) {
                            if (!n.getBoundingClientRect || n === document.body) return C();
                            if (r || e) return n;
                            r = !0;
                        }
                    }
                while ((n = n.parentNode));
                return C();
            }
            function I(t, e) {
                return (
                    Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
                );
            }
            function R(t, e) {
                return function () {
                    if (!J) {
                        var n = arguments;
                        1 === n.length ? t.call(this, n[0]) : t.apply(this, n),
                            (J = setTimeout(function () {
                                J = void 0;
                            }, e));
                    }
                };
            }
            function N(t, e, n) {
                (t.scrollLeft += e), (t.scrollTop += n);
            }
            function z(t) {
                var e = window.Polymer,
                    n = window.jQuery || window.Zepto;
                return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
            }
            function j(t, e) {
                S(t, "position", "absolute"), S(t, "top", e.top), S(t, "left", e.left), S(t, "width", e.width), S(t, "height", e.height);
            }
            function L(t) {
                S(t, "position", ""), S(t, "top", ""), S(t, "left", ""), S(t, "width", ""), S(t, "height", "");
            }
            function F(t, e, n) {
                var r = {};
                return (
                    Array.from(t.children).forEach(function (i) {
                        if (b(i, e.draggable, t, !1) && !i.animated && i !== n) {
                            var o,
                                s,
                                a,
                                l,
                                c = E(i);
                            (r.left = Math.min(null !== (o = r.left) && void 0 !== o ? o : 1 / 0, c.left)),
                                (r.top = Math.min(null !== (s = r.top) && void 0 !== s ? s : 1 / 0, c.top)),
                                (r.right = Math.max(null !== (a = r.right) && void 0 !== a ? a : -1 / 0, c.right)),
                                (r.bottom = Math.max(null !== (l = r.bottom) && void 0 !== l ? l : -1 / 0, c.bottom));
                        }
                    }),
                    (r.width = r.right - r.left),
                    (r.height = r.bottom - r.top),
                    (r.x = r.left),
                    (r.y = r.top),
                    r
                );
            }
            var H = "Sortable" + new Date().getTime(),
                B = [],
                $ = { initializeByDefault: !0 },
                W = {
                    mount: function (t) {
                        for (var e in $) !$.hasOwnProperty(e) || e in t || (t[e] = $[e]);
                        B.forEach(function (e) {
                            if (e.pluginName === t.pluginName) throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
                        }),
                            B.push(t);
                    },
                    pluginEvent: function (t, e, n) {
                        var r = this;
                        (this.eventCanceled = !1),
                            (n.cancel = function () {
                                r.eventCanceled = !0;
                            });
                        var o = t + "Global";
                        B.forEach(function (r) {
                            e[r.pluginName] &&
                                (e[r.pluginName][o] && e[r.pluginName][o](i({ sortable: e }, n)), e.options[r.pluginName] && e[r.pluginName][t] && e[r.pluginName][t](i({ sortable: e }, n)));
                        });
                    },
                    initializePlugins: function (t, e, n, r) {
                        for (var i in (B.forEach(function (r) {
                            var i = r.pluginName;
                            if (t.options[i] || r.initializeByDefault) {
                                var o = new r(t, e, t.options);
                                (o.sortable = t), (o.options = t.options), (t[i] = o), s(n, o.defaults);
                            }
                        }),
                        t.options))
                            if (t.options.hasOwnProperty(i)) {
                                var o = this.modifyOption(t, i, t.options[i]);
                                void 0 !== o && (t.options[i] = o);
                            }
                    },
                    getEventProperties: function (t, e) {
                        var n = {};
                        return (
                            B.forEach(function (r) {
                                "function" == typeof r.eventProperties && s(n, r.eventProperties.call(e[r.pluginName], t));
                            }),
                            n
                        );
                    },
                    modifyOption: function (t, e, n) {
                        var r;
                        return (
                            B.forEach(function (i) {
                                t[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[e] && (r = i.optionListeners[e].call(t[i.pluginName], n));
                            }),
                            r
                        );
                    },
                };
            function Z(t) {
                var e = t.sortable,
                    n = t.rootEl,
                    r = t.name,
                    o = t.targetEl,
                    s = t.cloneEl,
                    a = t.toEl,
                    l = t.fromEl,
                    h = t.oldIndex,
                    d = t.newIndex,
                    p = t.oldDraggableIndex,
                    f = t.newDraggableIndex,
                    m = t.originalEvent,
                    g = t.putSortable,
                    y = t.extraEventProperties;
                if ((e = e || (n && n[H]))) {
                    var v,
                        b = e.options,
                        w = "on" + r.charAt(0).toUpperCase() + r.substr(1);
                    !window.CustomEvent || c || u ? (v = document.createEvent("Event")).initEvent(r, !0, !0) : (v = new CustomEvent(r, { bubbles: !0, cancelable: !0 })),
                        (v.to = a || n),
                        (v.from = l || n),
                        (v.item = o || n),
                        (v.clone = s),
                        (v.oldIndex = h),
                        (v.newIndex = d),
                        (v.oldDraggableIndex = p),
                        (v.newDraggableIndex = f),
                        (v.originalEvent = m),
                        (v.pullMode = g ? g.lastPutMode : void 0);
                    var x = i(i({}, y), W.getEventProperties(r, e));
                    for (var S in x) v[S] = x[S];
                    n && n.dispatchEvent(v), b[w] && b[w].call(e, v);
                }
            }
            var V = ["evt"],
                U = function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.evt,
                        o = (function (t, e) {
                            if (null == t) return {};
                            var n,
                                r,
                                i = (function (t, e) {
                                    if (null == t) return {};
                                    var n,
                                        r,
                                        i = {},
                                        o = Object.keys(t);
                                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                                    return i;
                                })(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < o.length; r++) (n = o[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                            }
                            return i;
                        })(n, V);
                    W.pluginEvent.bind(tH)(
                        t,
                        e,
                        i(
                            {
                                dragEl: q,
                                parentEl: K,
                                ghostEl: X,
                                rootEl: G,
                                nextEl: Q,
                                lastDownEl: tt,
                                cloneEl: te,
                                cloneHidden: tn,
                                dragStarted: tm,
                                putSortable: tl,
                                activeSortable: tH.active,
                                originalEvent: r,
                                oldIndex: tr,
                                oldDraggableIndex: to,
                                newIndex: ti,
                                newDraggableIndex: ts,
                                hideGhostForTarget: tz,
                                unhideGhostForTarget: tj,
                                cloneNowHidden: function () {
                                    tn = !0;
                                },
                                cloneNowShown: function () {
                                    tn = !1;
                                },
                                dispatchSortableEvent: function (t) {
                                    Y({ sortable: e, name: t, originalEvent: r });
                                },
                            },
                            o
                        )
                    );
                };
            function Y(t) {
                Z(i({ putSortable: tl, cloneEl: te, targetEl: q, rootEl: G, oldIndex: tr, oldDraggableIndex: to, newIndex: ti, newDraggableIndex: ts }, t));
            }
            var J,
                q,
                K,
                X,
                G,
                Q,
                tt,
                te,
                tn,
                tr,
                ti,
                to,
                ts,
                ta,
                tl,
                tc,
                tu,
                th,
                td,
                tp,
                tf,
                tm,
                tg,
                ty,
                tv,
                tb,
                tw = !1,
                tx = !1,
                tS = [],
                tk = !1,
                tM = !1,
                tC = [],
                tE = !1,
                tO = [],
                t_ = "undefined" != typeof document,
                tT = u || c ? "cssFloat" : "float",
                tP = t_ && !f && !p && "draggable" in document.createElement("div"),
                tA = (function () {
                    if (t_) {
                        if (c) return !1;
                        var t = document.createElement("x");
                        return (t.style.cssText = "pointer-events:auto"), "auto" === t.style.pointerEvents;
                    }
                })(),
                tD = function (t, e) {
                    var n = S(t),
                        r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                        i = _(t, 0, e),
                        o = _(t, 1, e),
                        s = i && S(i),
                        a = o && S(o),
                        l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + E(i).width,
                        c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + E(o).width;
                    if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
                    if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
                    if (i && s.float && "none" !== s.float) {
                        var u = "left" === s.float ? "left" : "right";
                        return o && ("both" === a.clear || a.clear === u) ? "vertical" : "horizontal";
                    }
                    return i && ("block" === s.display || "flex" === s.display || "table" === s.display || "grid" === s.display || (l >= r && "none" === n[tT]) || (o && "none" === n[tT] && l + c > r))
                        ? "vertical"
                        : "horizontal";
                },
                tI = function (t, e, n) {
                    var r = n ? t.left : t.top,
                        i = n ? t.right : t.bottom,
                        o = n ? t.width : t.height,
                        s = n ? e.left : e.top,
                        a = n ? e.right : e.bottom,
                        l = n ? e.width : e.height;
                    return r === s || i === a || r + o / 2 === s + l / 2;
                },
                tR = function (t, e) {
                    var n;
                    return (
                        tS.some(function (r) {
                            var i = r[H].options.emptyInsertThreshold;
                            if (!(!i || T(r))) {
                                var o = E(r),
                                    s = t >= o.left - i && t <= o.right + i,
                                    a = e >= o.top - i && e <= o.bottom + i;
                                if (s && a) return (n = r);
                            }
                        }),
                        n
                    );
                },
                tN = function (t) {
                    function e(t, n) {
                        return function (r, i, o, s) {
                            var a = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
                            if (null == t && (n || a)) return !0;
                            if (null == t || !1 === t) return !1;
                            if (n && "clone" === t) return t;
                            if ("function" == typeof t) return e(t(r, i, o, s), n)(r, i, o, s);
                            var l = (n ? r : i).options.group.name;
                            return !0 === t || ("string" == typeof t && t === l) || (t.join && t.indexOf(l) > -1);
                        };
                    }
                    var n = {},
                        r = t.group;
                    (r && "object" == o(r)) || (r = { name: r }), (n.name = r.name), (n.checkPull = e(r.pull, !0)), (n.checkPut = e(r.put)), (n.revertClone = r.revertClone), (t.group = n);
                },
                tz = function () {
                    !tA && X && S(X, "display", "none");
                },
                tj = function () {
                    !tA && X && S(X, "display", "");
                };
            t_ &&
                !f &&
                document.addEventListener(
                    "click",
                    function (t) {
                        if (tx) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), (tx = !1), !1;
                    },
                    !0
                );
            var tL = function (t) {
                    if (q) {
                        var e = tR((t = t.touches ? t.touches[0] : t).clientX, t.clientY);
                        if (e) {
                            var n = {};
                            for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                            (n.target = n.rootEl = e), (n.preventDefault = void 0), (n.stopPropagation = void 0), e[H]._onDragOver(n);
                        }
                    }
                },
                tF = function (t) {
                    q && q.parentNode[H]._isOutsideThisEl(t.target);
                };
            function tH(t, e) {
                if (!(t && t.nodeType && 1 === t.nodeType)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
                (this.el = t), (this.options = e = s({}, e)), (t[H] = this);
                var n,
                    r,
                    o = {
                        group: null,
                        sort: !0,
                        disabled: !1,
                        store: null,
                        handle: null,
                        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
                        swapThreshold: 1,
                        invertSwap: !1,
                        invertedSwapThreshold: null,
                        removeCloneOnHide: !0,
                        direction: function () {
                            return tD(t, this.options);
                        },
                        ghostClass: "sortable-ghost",
                        chosenClass: "sortable-chosen",
                        dragClass: "sortable-drag",
                        ignore: "a, img",
                        filter: null,
                        preventOnFilter: !0,
                        animation: 0,
                        easing: null,
                        setData: function (t, e) {
                            t.setData("Text", e.textContent);
                        },
                        dropBubble: !1,
                        dragoverBubble: !1,
                        dataIdAttr: "data-id",
                        delay: 0,
                        delayOnTouchOnly: !1,
                        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                        forceFallback: !1,
                        fallbackClass: "sortable-fallback",
                        fallbackOnBody: !1,
                        fallbackTolerance: 0,
                        fallbackOffset: { x: 0, y: 0 },
                        supportPointer: !1 !== tH.supportPointer && "PointerEvent" in window && !d,
                        emptyInsertThreshold: 5,
                    };
                for (var a in (W.initializePlugins(this, t, o), o)) a in e || (e[a] = o[a]);
                for (var l in (tN(e), this)) "_" === l.charAt(0) && "function" == typeof this[l] && (this[l] = this[l].bind(this));
                (this.nativeDraggable = !e.forceFallback && tP),
                    this.nativeDraggable && (this.options.touchStartThreshold = 1),
                    e.supportPointer ? g(t, "pointerdown", this._onTapStart) : (g(t, "mousedown", this._onTapStart), g(t, "touchstart", this._onTapStart)),
                    this.nativeDraggable && (g(t, "dragover", this), g(t, "dragenter", this)),
                    tS.push(this.el),
                    e.store && e.store.get && this.sort(e.store.get(this) || []),
                    s(
                        this,
                        ((r = []),
                        {
                            captureAnimationState: function () {
                                (r = []),
                                    this.options.animation &&
                                        [].slice.call(this.el.children).forEach(function (t) {
                                            if ("none" !== S(t, "display") && t !== tH.ghost) {
                                                r.push({ target: t, rect: E(t) });
                                                var e = i({}, r[r.length - 1].rect);
                                                if (t.thisAnimationDuration) {
                                                    var n = k(t, !0);
                                                    n && ((e.top -= n.f), (e.left -= n.e));
                                                }
                                                t.fromRect = e;
                                            }
                                        });
                            },
                            addAnimationState: function (t) {
                                r.push(t);
                            },
                            removeAnimationState: function (t) {
                                r.splice(
                                    (function (t, e) {
                                        for (var n in t)
                                            if (t.hasOwnProperty(n)) {
                                                for (var r in e) if (e.hasOwnProperty(r) && e[r] === t[n][r]) return Number(n);
                                            }
                                        return -1;
                                    })(r, { target: t }),
                                    1
                                );
                            },
                            animateAll: function (t) {
                                var e = this;
                                if (!this.options.animation) {
                                    clearTimeout(n), "function" == typeof t && t();
                                    return;
                                }
                                var i = !1,
                                    o = 0;
                                r.forEach(function (t) {
                                    var n,
                                        r = 0,
                                        s = t.target,
                                        a = s.fromRect,
                                        l = E(s),
                                        c = s.prevFromRect,
                                        u = s.prevToRect,
                                        h = t.rect,
                                        d = k(s, !0);
                                    d && ((l.top -= d.f), (l.left -= d.e)),
                                        (s.toRect = l),
                                        s.thisAnimationDuration &&
                                            I(c, l) &&
                                            !I(a, l) &&
                                            (h.top - l.top) / (h.left - l.left) == (a.top - l.top) / (a.left - l.left) &&
                                            ((n = e.options),
                                            (r =
                                                (Math.sqrt(Math.pow(c.top - h.top, 2) + Math.pow(c.left - h.left, 2)) / Math.sqrt(Math.pow(c.top - u.top, 2) + Math.pow(c.left - u.left, 2))) *
                                                n.animation)),
                                        I(l, a) || ((s.prevFromRect = a), (s.prevToRect = l), r || (r = e.options.animation), e.animate(s, h, l, r)),
                                        r &&
                                            ((i = !0),
                                            (o = Math.max(o, r)),
                                            clearTimeout(s.animationResetTimer),
                                            (s.animationResetTimer = setTimeout(function () {
                                                (s.animationTime = 0), (s.prevFromRect = null), (s.fromRect = null), (s.prevToRect = null), (s.thisAnimationDuration = null);
                                            }, r)),
                                            (s.thisAnimationDuration = r));
                                }),
                                    clearTimeout(n),
                                    i
                                        ? (n = setTimeout(function () {
                                              "function" == typeof t && t();
                                          }, o))
                                        : "function" == typeof t && t(),
                                    (r = []);
                            },
                            animate: function (t, e, n, r) {
                                if (r) {
                                    S(t, "transition", ""), S(t, "transform", "");
                                    var i = k(this.el),
                                        o = i && i.a,
                                        s = i && i.d,
                                        a = (e.left - n.left) / (o || 1),
                                        l = (e.top - n.top) / (s || 1);
                                    (t.animatingX = !!a),
                                        (t.animatingY = !!l),
                                        S(t, "transform", "translate3d(" + a + "px," + l + "px,0)"),
                                        (this.forRepaintDummy = t.offsetWidth),
                                        S(t, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")),
                                        S(t, "transform", "translate3d(0,0,0)"),
                                        "number" == typeof t.animated && clearTimeout(t.animated),
                                        (t.animated = setTimeout(function () {
                                            S(t, "transition", ""), S(t, "transform", ""), (t.animated = !1), (t.animatingX = !1), (t.animatingY = !1);
                                        }, r));
                                }
                            },
                        })
                    );
            }
            function tB(t, e, n, r, i, o, s, a) {
                var l,
                    h,
                    d = t[H],
                    p = d.options.onMove;
                return (
                    !window.CustomEvent || c || u ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : (l = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
                    (l.to = e),
                    (l.from = t),
                    (l.dragged = n),
                    (l.draggedRect = r),
                    (l.related = i || e),
                    (l.relatedRect = o || E(e)),
                    (l.willInsertAfter = a),
                    (l.originalEvent = s),
                    t.dispatchEvent(l),
                    p && (h = p.call(d, l, s)),
                    h
                );
            }
            function t$(t) {
                t.draggable = !1;
            }
            function tW() {
                tE = !1;
            }
            function tZ(t) {
                return setTimeout(t, 0);
            }
            function tV(t) {
                return clearTimeout(t);
            }
            (tH.prototype = {
                constructor: tH,
                _isOutsideThisEl: function (t) {
                    this.el.contains(t) || t === this.el || (tg = null);
                },
                _getDirection: function (t, e) {
                    return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, q) : this.options.direction;
                },
                _onTapStart: function (t) {
                    if (t.cancelable) {
                        var e = this,
                            n = this.el,
                            r = this.options,
                            i = r.preventOnFilter,
                            o = t.type,
                            s = (t.touches && t.touches[0]) || (t.pointerType && "touch" === t.pointerType && t),
                            a = (s || t).target,
                            l = (t.target.shadowRoot && ((t.path && t.path[0]) || (t.composedPath && t.composedPath()[0]))) || a,
                            c = r.filter;
                        if (
                            ((function (t) {
                                tO.length = 0;
                                for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
                                    var r = e[n];
                                    r.checked && tO.push(r);
                                }
                            })(n),
                            !(
                                q ||
                                (/mousedown|pointerdown/.test(o) && 0 !== t.button) ||
                                r.disabled ||
                                l.isContentEditable ||
                                (!this.nativeDraggable && d && a && "SELECT" === a.tagName.toUpperCase()) ||
                                ((a = b(a, r.draggable, n, !1)) && a.animated)
                            ) && tt !== a)
                        ) {
                            if (((tr = P(a)), (to = P(a, r.draggable)), "function" == typeof c)) {
                                if (c.call(this, t, a, this)) {
                                    Y({ sortable: e, rootEl: l, name: "filter", targetEl: a, toEl: n, fromEl: n }), U("filter", e, { evt: t }), i && t.cancelable && t.preventDefault();
                                    return;
                                }
                            } else if (
                                c &&
                                (c = c.split(",").some(function (r) {
                                    if ((r = b(l, r.trim(), n, !1))) return Y({ sortable: e, rootEl: r, name: "filter", targetEl: a, fromEl: n, toEl: n }), U("filter", e, { evt: t }), !0;
                                }))
                            ) {
                                i && t.cancelable && t.preventDefault();
                                return;
                            }
                            (!r.handle || b(l, r.handle, n, !1)) && this._prepareDragStart(t, s, a);
                        }
                    }
                },
                _prepareDragStart: function (t, e, n) {
                    var r,
                        i = this,
                        o = i.el,
                        s = i.options,
                        a = o.ownerDocument;
                    if (n && !q && n.parentNode === o) {
                        var l = E(n);
                        if (
                            ((G = o),
                            (K = (q = n).parentNode),
                            (Q = q.nextSibling),
                            (tt = n),
                            (ta = s.group),
                            (tH.dragged = q),
                            (tp = (tc = { target: q, clientX: (e || t).clientX, clientY: (e || t).clientY }).clientX - l.left),
                            (tf = tc.clientY - l.top),
                            (this._lastX = (e || t).clientX),
                            (this._lastY = (e || t).clientY),
                            (q.style["will-change"] = "all"),
                            (r = function () {
                                if ((U("delayEnded", i, { evt: t }), tH.eventCanceled)) {
                                    i._onDrop();
                                    return;
                                }
                                i._disableDelayedDragEvents(),
                                    !h && i.nativeDraggable && (q.draggable = !0),
                                    i._triggerDragStart(t, e),
                                    Y({ sortable: i, name: "choose", originalEvent: t }),
                                    x(q, s.chosenClass, !0);
                            }),
                            s.ignore.split(",").forEach(function (t) {
                                M(q, t.trim(), t$);
                            }),
                            g(a, "dragover", tL),
                            g(a, "mousemove", tL),
                            g(a, "touchmove", tL),
                            g(a, "mouseup", i._onDrop),
                            g(a, "touchend", i._onDrop),
                            g(a, "touchcancel", i._onDrop),
                            h && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (q.draggable = !0)),
                            U("delayStart", this, { evt: t }),
                            !s.delay || (s.delayOnTouchOnly && !e) || (this.nativeDraggable && (u || c)))
                        )
                            r();
                        else {
                            if (tH.eventCanceled) {
                                this._onDrop();
                                return;
                            }
                            g(a, "mouseup", i._disableDelayedDrag),
                                g(a, "touchend", i._disableDelayedDrag),
                                g(a, "touchcancel", i._disableDelayedDrag),
                                g(a, "mousemove", i._delayedDragTouchMoveHandler),
                                g(a, "touchmove", i._delayedDragTouchMoveHandler),
                                s.supportPointer && g(a, "pointermove", i._delayedDragTouchMoveHandler),
                                (i._dragStartTimer = setTimeout(r, s.delay));
                        }
                    }
                },
                _delayedDragTouchMoveHandler: function (t) {
                    var e = t.touches ? t.touches[0] : t;
                    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >=
                        Math.floor(this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)) && this._disableDelayedDrag();
                },
                _disableDelayedDrag: function () {
                    q && t$(q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
                },
                _disableDelayedDragEvents: function () {
                    var t = this.el.ownerDocument;
                    y(t, "mouseup", this._disableDelayedDrag),
                        y(t, "touchend", this._disableDelayedDrag),
                        y(t, "touchcancel", this._disableDelayedDrag),
                        y(t, "mousemove", this._delayedDragTouchMoveHandler),
                        y(t, "touchmove", this._delayedDragTouchMoveHandler),
                        y(t, "pointermove", this._delayedDragTouchMoveHandler);
                },
                _triggerDragStart: function (t, e) {
                    (e = e || ("touch" == t.pointerType && t)),
                        !this.nativeDraggable || e
                            ? this.options.supportPointer
                                ? g(document, "pointermove", this._onTouchMove)
                                : e
                                ? g(document, "touchmove", this._onTouchMove)
                                : g(document, "mousemove", this._onTouchMove)
                            : (g(q, "dragend", this), g(G, "dragstart", this._onDragStart));
                    try {
                        document.selection
                            ? tZ(function () {
                                  document.selection.empty();
                              })
                            : window.getSelection().removeAllRanges();
                    } catch (t) {}
                },
                _dragStarted: function (t, e) {
                    if (((tw = !1), G && q)) {
                        U("dragStarted", this, { evt: e }), this.nativeDraggable && g(document, "dragover", tF);
                        var n = this.options;
                        t || x(q, n.dragClass, !1), x(q, n.ghostClass, !0), (tH.active = this), t && this._appendGhost(), Y({ sortable: this, name: "start", originalEvent: e });
                    } else this._nulling();
                },
                _emulateDragOver: function () {
                    if (tu) {
                        (this._lastX = tu.clientX), (this._lastY = tu.clientY), tz();
                        for (var t = document.elementFromPoint(tu.clientX, tu.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(tu.clientX, tu.clientY)) !== e; ) e = t;
                        if ((q.parentNode[H]._isOutsideThisEl(t), e))
                            do {
                                if (e[H] && e[H]._onDragOver({ clientX: tu.clientX, clientY: tu.clientY, target: t, rootEl: e }) && !this.options.dragoverBubble) break;
                                t = e;
                            } while ((e = e.parentNode));
                        tj();
                    }
                },
                _onTouchMove: function (t) {
                    if (tc) {
                        var e = this.options,
                            n = e.fallbackTolerance,
                            r = e.fallbackOffset,
                            i = t.touches ? t.touches[0] : t,
                            o = X && k(X, !0),
                            s = X && o && o.a,
                            a = X && o && o.d,
                            l = p && tb && A(tb),
                            c = (i.clientX - tc.clientX + r.x) / (s || 1) + (l ? l[0] - tC[0] : 0) / (s || 1),
                            u = (i.clientY - tc.clientY + r.y) / (a || 1) + (l ? l[1] - tC[1] : 0) / (a || 1);
                        if (!tH.active && !tw) {
                            if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                            this._onDragStart(t, !0);
                        }
                        if (X) {
                            o ? ((o.e += c - (th || 0)), (o.f += u - (td || 0))) : (o = { a: 1, b: 0, c: 0, d: 1, e: c, f: u });
                            var h = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
                            S(X, "webkitTransform", h), S(X, "mozTransform", h), S(X, "msTransform", h), S(X, "transform", h), (th = c), (td = u), (tu = i);
                        }
                        t.cancelable && t.preventDefault();
                    }
                },
                _appendGhost: function () {
                    if (!X) {
                        var t = this.options.fallbackOnBody ? document.body : G,
                            e = E(q, !0, p, !0, t),
                            n = this.options;
                        if (p) {
                            for (tb = t; "static" === S(tb, "position") && "none" === S(tb, "transform") && tb !== document; ) tb = tb.parentNode;
                            tb !== document.body && tb !== document.documentElement ? (tb === document && (tb = C()), (e.top += tb.scrollTop), (e.left += tb.scrollLeft)) : (tb = C()), (tC = A(tb));
                        }
                        x((X = q.cloneNode(!0)), n.ghostClass, !1),
                            x(X, n.fallbackClass, !0),
                            x(X, n.dragClass, !0),
                            S(X, "transition", ""),
                            S(X, "transform", ""),
                            S(X, "box-sizing", "border-box"),
                            S(X, "margin", 0),
                            S(X, "top", e.top),
                            S(X, "left", e.left),
                            S(X, "width", e.width),
                            S(X, "height", e.height),
                            S(X, "opacity", "0.8"),
                            S(X, "position", p ? "absolute" : "fixed"),
                            S(X, "zIndex", "100000"),
                            S(X, "pointerEvents", "none"),
                            (tH.ghost = X),
                            t.appendChild(X),
                            S(X, "transform-origin", (tp / parseInt(X.style.width)) * 100 + "% " + (tf / parseInt(X.style.height)) * 100 + "%");
                    }
                },
                _onDragStart: function (t, e) {
                    var n = this,
                        r = t.dataTransfer,
                        i = n.options;
                    if ((U("dragStart", this, { evt: t }), tH.eventCanceled)) {
                        this._onDrop();
                        return;
                    }
                    U("setupClone", this),
                        tH.eventCanceled ||
                            ((te = z(q)).removeAttribute("id"), (te.draggable = !1), (te.style["will-change"] = ""), this._hideClone(), x(te, this.options.chosenClass, !1), (tH.clone = te)),
                        (n.cloneId = tZ(function () {
                            U("clone", n), tH.eventCanceled || (n.options.removeCloneOnHide || G.insertBefore(te, q), n._hideClone(), Y({ sortable: n, name: "clone" }));
                        })),
                        e || x(q, i.dragClass, !0),
                        e
                            ? ((tx = !0), (n._loopId = setInterval(n._emulateDragOver, 50)))
                            : (y(document, "mouseup", n._onDrop),
                              y(document, "touchend", n._onDrop),
                              y(document, "touchcancel", n._onDrop),
                              r && ((r.effectAllowed = "move"), i.setData && i.setData.call(n, r, q)),
                              g(document, "drop", n),
                              S(q, "transform", "translateZ(0)")),
                        (tw = !0),
                        (n._dragStartId = tZ(n._dragStarted.bind(n, e, t))),
                        g(document, "selectstart", n),
                        (tm = !0),
                        d && S(document.body, "user-select", "none");
                },
                _onDragOver: function (t) {
                    var e,
                        n,
                        r,
                        o,
                        s = this.el,
                        a = t.target,
                        l = this.options,
                        c = l.group,
                        u = tH.active,
                        h = ta === c,
                        d = l.sort,
                        p = tl || u,
                        f = this,
                        m = !1;
                    if (!tE) {
                        if ((void 0 !== t.preventDefault && t.cancelable && t.preventDefault(), (a = b(a, l.draggable, s, !0)), tt("dragOver"), tH.eventCanceled)) return m;
                        if (q.contains(t.target) || (a.animated && a.animatingX && a.animatingY) || f._ignoreWhileAnimating === a) return tn(!1);
                        if (((tx = !1), u && !l.disabled && (h ? d || (r = K !== G) : tl === this || ((this.lastPutMode = ta.checkPull(this, u, q, t)) && c.checkPut(this, u, q, t))))) {
                            if (((o = "vertical" === this._getDirection(t, a)), (e = E(q)), tt("dragOverValid"), tH.eventCanceled)) return m;
                            if (r) return (K = G), te(), this._hideClone(), tt("revert"), tH.eventCanceled || (Q ? G.insertBefore(q, Q) : G.appendChild(q)), tn(!0);
                            var g = T(s, l.draggable);
                            if (
                                !g ||
                                ((v = o),
                                (w = E(T(this.el, this.options.draggable))),
                                (k = F(this.el, this.options, X)),
                                (v ? t.clientX > k.right + 10 || (t.clientY > w.bottom && t.clientX > w.left) : t.clientY > k.bottom + 10 || (t.clientX > w.right && t.clientY > w.top)) && !g.animated)
                            ) {
                                if (g === q) return tn(!1);
                                if ((g && s === t.target && (a = g), a && (n = E(a)), !1 !== tB(G, s, q, e, a, n, t, !!a)))
                                    return te(), g && g.nextSibling ? s.insertBefore(q, g.nextSibling) : s.appendChild(q), (K = s), tr(), tn(!0);
                            } else if (
                                g &&
                                ((M = o),
                                (C = E(_(this.el, 0, this.options, !0))),
                                (A = F(this.el, this.options, X)),
                                M ? t.clientX < A.left - 10 || (t.clientY < C.top && t.clientX < C.right) : t.clientY < A.top - 10 || (t.clientY < C.bottom && t.clientX < C.left))
                            ) {
                                var y = _(s, 0, l, !0);
                                if (y === q) return tn(!1);
                                if (((n = E((a = y))), !1 !== tB(G, s, q, e, a, n, t, !1))) return te(), s.insertBefore(q, y), (K = s), tr(), tn(!0);
                            } else if (a.parentNode === s) {
                                n = E(a);
                                var v,
                                    w,
                                    k,
                                    M,
                                    C,
                                    A,
                                    D,
                                    I,
                                    R = 0,
                                    z = q.parentNode !== s,
                                    j = !tI((q.animated && q.toRect) || e, (a.animated && a.toRect) || n, o),
                                    L = o ? "top" : "left",
                                    B = O(a, "top", "top") || O(q, "top", "top"),
                                    $ = B ? B.scrollTop : void 0;
                                if (
                                    (tg !== a && ((I = n[L]), (tk = !1), (tM = (!j && l.invertSwap) || z)),
                                    0 !==
                                        (R = (function (t, e, n, r, i, o, s, a) {
                                            var l = r ? t.clientY : t.clientX,
                                                c = r ? n.height : n.width,
                                                u = r ? n.top : n.left,
                                                h = r ? n.bottom : n.right,
                                                d = !1;
                                            if (!s) {
                                                if (a && tv < c * i) {
                                                    if ((!tk && (1 === ty ? l > u + (c * o) / 2 : l < h - (c * o) / 2) && (tk = !0), tk)) d = !0;
                                                    else if (1 === ty ? l < u + tv : l > h - tv) return -ty;
                                                } else if (l > u + (c * (1 - i)) / 2 && l < h - (c * (1 - i)) / 2) return P(q) < P(e) ? 1 : -1;
                                            }
                                            return (d = d || s) && (l < u + (c * o) / 2 || l > h - (c * o) / 2) ? (l > u + c / 2 ? 1 : -1) : 0;
                                        })(t, a, n, o, j ? 1 : l.swapThreshold, null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold, tM, tg === a)))
                                ) {
                                    var W = P(q);
                                    do (W -= R), (D = K.children[W]);
                                    while (D && ("none" === S(D, "display") || D === X));
                                }
                                if (0 === R || D === a) return tn(!1);
                                (tg = a), (ty = R);
                                var Z = a.nextElementSibling,
                                    V = !1,
                                    J = tB(G, s, q, e, a, n, t, (V = 1 === R));
                                if (!1 !== J)
                                    return (
                                        (1 === J || -1 === J) && (V = 1 === J),
                                        (tE = !0),
                                        setTimeout(tW, 30),
                                        te(),
                                        V && !Z ? s.appendChild(q) : a.parentNode.insertBefore(q, V ? Z : a),
                                        B && N(B, 0, $ - B.scrollTop),
                                        (K = q.parentNode),
                                        void 0 === I || tM || (tv = Math.abs(I - E(a)[L])),
                                        tr(),
                                        tn(!0)
                                    );
                            }
                            if (s.contains(q)) return tn(!1);
                        }
                        return !1;
                    }
                    function tt(l, c) {
                        U(
                            l,
                            f,
                            i(
                                {
                                    evt: t,
                                    isOwner: h,
                                    axis: o ? "vertical" : "horizontal",
                                    revert: r,
                                    dragRect: e,
                                    targetRect: n,
                                    canSort: d,
                                    fromSortable: p,
                                    target: a,
                                    completed: tn,
                                    onMove: function (n, r) {
                                        return tB(G, s, q, e, n, E(n), t, r);
                                    },
                                    changed: tr,
                                },
                                c
                            )
                        );
                    }
                    function te() {
                        tt("dragOverAnimationCapture"), f.captureAnimationState(), f !== p && p.captureAnimationState();
                    }
                    function tn(e) {
                        return (
                            tt("dragOverCompleted", { insertion: e }),
                            e &&
                                (h ? u._hideClone() : u._showClone(f),
                                f !== p && (x(q, tl ? tl.options.ghostClass : u.options.ghostClass, !1), x(q, l.ghostClass, !0)),
                                tl !== f && f !== tH.active ? (tl = f) : f === tH.active && tl && (tl = null),
                                p === f && (f._ignoreWhileAnimating = a),
                                f.animateAll(function () {
                                    tt("dragOverAnimationComplete"), (f._ignoreWhileAnimating = null);
                                }),
                                f !== p && (p.animateAll(), (p._ignoreWhileAnimating = null))),
                            ((a !== q || q.animated) && (a !== s || a.animated)) || (tg = null),
                            l.dragoverBubble || t.rootEl || a === document || (q.parentNode[H]._isOutsideThisEl(t.target), e || tL(t)),
                            !l.dragoverBubble && t.stopPropagation && t.stopPropagation(),
                            (m = !0)
                        );
                    }
                    function tr() {
                        (ti = P(q)), (ts = P(q, l.draggable)), Y({ sortable: f, name: "change", toEl: s, newIndex: ti, newDraggableIndex: ts, originalEvent: t });
                    }
                },
                _ignoreWhileAnimating: null,
                _offMoveEvents: function () {
                    y(document, "mousemove", this._onTouchMove),
                        y(document, "touchmove", this._onTouchMove),
                        y(document, "pointermove", this._onTouchMove),
                        y(document, "dragover", tL),
                        y(document, "mousemove", tL),
                        y(document, "touchmove", tL);
                },
                _offUpEvents: function () {
                    var t = this.el.ownerDocument;
                    y(t, "mouseup", this._onDrop), y(t, "touchend", this._onDrop), y(t, "pointerup", this._onDrop), y(t, "touchcancel", this._onDrop), y(document, "selectstart", this);
                },
                _onDrop: function (t) {
                    var e = this.el,
                        n = this.options;
                    if (((ti = P(q)), (ts = P(q, n.draggable)), U("drop", this, { evt: t }), (K = q && q.parentNode), (ti = P(q)), (ts = P(q, n.draggable)), tH.eventCanceled)) {
                        this._nulling();
                        return;
                    }
                    (tw = !1),
                        (tM = !1),
                        (tk = !1),
                        clearInterval(this._loopId),
                        clearTimeout(this._dragStartTimer),
                        tV(this.cloneId),
                        tV(this._dragStartId),
                        this.nativeDraggable && (y(document, "drop", this), y(e, "dragstart", this._onDragStart)),
                        this._offMoveEvents(),
                        this._offUpEvents(),
                        d && S(document.body, "user-select", ""),
                        S(q, "transform", ""),
                        t &&
                            (tm && (t.cancelable && t.preventDefault(), n.dropBubble || t.stopPropagation()),
                            X && X.parentNode && X.parentNode.removeChild(X),
                            (G === K || (tl && "clone" !== tl.lastPutMode)) && te && te.parentNode && te.parentNode.removeChild(te),
                            q &&
                                (this.nativeDraggable && y(q, "dragend", this),
                                t$(q),
                                (q.style["will-change"] = ""),
                                tm && !tw && x(q, tl ? tl.options.ghostClass : this.options.ghostClass, !1),
                                x(q, this.options.chosenClass, !1),
                                Y({ sortable: this, name: "unchoose", toEl: K, newIndex: null, newDraggableIndex: null, originalEvent: t }),
                                G !== K
                                    ? (ti >= 0 &&
                                          (Y({ rootEl: K, name: "add", toEl: K, fromEl: G, originalEvent: t }),
                                          Y({ sortable: this, name: "remove", toEl: K, originalEvent: t }),
                                          Y({ rootEl: K, name: "sort", toEl: K, fromEl: G, originalEvent: t }),
                                          Y({ sortable: this, name: "sort", toEl: K, originalEvent: t })),
                                      tl && tl.save())
                                    : ti !== tr && ti >= 0 && (Y({ sortable: this, name: "update", toEl: K, originalEvent: t }), Y({ sortable: this, name: "sort", toEl: K, originalEvent: t })),
                                tH.active && ((null == ti || -1 === ti) && ((ti = tr), (ts = to)), Y({ sortable: this, name: "end", toEl: K, originalEvent: t }), this.save()))),
                        this._nulling();
                },
                _nulling: function () {
                    U("nulling", this),
                        (G = q = K = X = Q = te = tt = tn = tc = tu = tm = ti = ts = tr = to = tg = ty = tl = ta = tH.dragged = tH.ghost = tH.clone = tH.active = null),
                        tO.forEach(function (t) {
                            t.checked = !0;
                        }),
                        (tO.length = th = td = 0);
                },
                handleEvent: function (t) {
                    switch (t.type) {
                        case "drop":
                        case "dragend":
                            this._onDrop(t);
                            break;
                        case "dragenter":
                        case "dragover":
                            q && (this._onDragOver(t), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault());
                            break;
                        case "selectstart":
                            t.preventDefault();
                    }
                },
                toArray: function () {
                    for (var t, e = [], n = this.el.children, r = 0, i = n.length, o = this.options; r < i; r++)
                        b((t = n[r]), o.draggable, this.el, !1) &&
                            e.push(
                                t.getAttribute(o.dataIdAttr) ||
                                    (function (t) {
                                        for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; ) r += e.charCodeAt(n);
                                        return r.toString(36);
                                    })(t)
                            );
                    return e;
                },
                sort: function (t, e) {
                    var n = {},
                        r = this.el;
                    this.toArray().forEach(function (t, e) {
                        var i = r.children[e];
                        b(i, this.options.draggable, r, !1) && (n[t] = i);
                    }, this),
                        e && this.captureAnimationState(),
                        t.forEach(function (t) {
                            n[t] && (r.removeChild(n[t]), r.appendChild(n[t]));
                        }),
                        e && this.animateAll();
                },
                save: function () {
                    var t = this.options.store;
                    t && t.set && t.set(this);
                },
                closest: function (t, e) {
                    return b(t, e || this.options.draggable, this.el, !1);
                },
                option: function (t, e) {
                    var n = this.options;
                    if (void 0 === e) return n[t];
                    var r = W.modifyOption(this, t, e);
                    void 0 !== r ? (n[t] = r) : (n[t] = e), "group" === t && tN(n);
                },
                destroy: function () {
                    U("destroy", this);
                    var t = this.el;
                    (t[H] = null),
                        y(t, "mousedown", this._onTapStart),
                        y(t, "touchstart", this._onTapStart),
                        y(t, "pointerdown", this._onTapStart),
                        this.nativeDraggable && (y(t, "dragover", this), y(t, "dragenter", this)),
                        Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function (t) {
                            t.removeAttribute("draggable");
                        }),
                        this._onDrop(),
                        this._disableDelayedDragEvents(),
                        tS.splice(tS.indexOf(this.el), 1),
                        (this.el = null);
                },
                _hideClone: function () {
                    tn || (U("hideClone", this), tH.eventCanceled || (S(te, "display", "none"), this.options.removeCloneOnHide && te.parentNode && te.parentNode.removeChild(te), (tn = !0)));
                },
                _showClone: function (t) {
                    if ("clone" !== t.lastPutMode) {
                        this._hideClone();
                        return;
                    }
                    if (tn) {
                        if ((U("showClone", this), tH.eventCanceled)) return;
                        q.parentNode != G || this.options.group.revertClone ? (Q ? G.insertBefore(te, Q) : G.appendChild(te)) : G.insertBefore(te, q),
                            this.options.group.revertClone && this.animate(q, te),
                            S(te, "display", ""),
                            (tn = !1);
                    }
                },
            }),
                t_ &&
                    g(document, "touchmove", function (t) {
                        (tH.active || tw) && t.cancelable && t.preventDefault();
                    }),
                (tH.utils = {
                    on: g,
                    off: y,
                    css: S,
                    find: M,
                    is: function (t, e) {
                        return !!b(t, e, t, !1);
                    },
                    extend: function (t, e) {
                        if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t;
                    },
                    throttle: R,
                    closest: b,
                    toggleClass: x,
                    clone: z,
                    index: P,
                    nextTick: tZ,
                    cancelNextTick: tV,
                    detectDirection: tD,
                    getChild: _,
                }),
                (tH.get = function (t) {
                    return t[H];
                }),
                (tH.mount = function () {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e[0].constructor === Array && (e = e[0]),
                        e.forEach(function (t) {
                            if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
                            t.utils && (tH.utils = i(i({}, tH.utils), t.utils)), W.mount(t);
                        });
                }),
                (tH.create = function (t, e) {
                    return new tH(t, e);
                }),
                (tH.version = "1.15.2");
            var tU,
                tY,
                tJ,
                tq,
                tK,
                tX,
                tG = [],
                tQ = !1;
            function t0() {
                tG.forEach(function (t) {
                    clearInterval(t.pid);
                }),
                    (tG = []);
            }
            function t1() {
                clearInterval(tX);
            }
            var t2 = R(function (t, e, n, r) {
                    if (e.scroll) {
                        var i,
                            o = (t.touches ? t.touches[0] : t).clientX,
                            s = (t.touches ? t.touches[0] : t).clientY,
                            a = e.scrollSensitivity,
                            l = e.scrollSpeed,
                            c = C(),
                            u = !1;
                        tY !== n && ((tY = n), t0(), (tU = e.scroll), (i = e.scrollFn), !0 === tU && (tU = D(n, !0)));
                        var h = 0,
                            d = tU;
                        do {
                            var p = d,
                                f = E(p),
                                m = f.top,
                                g = f.bottom,
                                y = f.left,
                                v = f.right,
                                b = f.width,
                                w = f.height,
                                x = void 0,
                                k = void 0,
                                M = p.scrollWidth,
                                O = p.scrollHeight,
                                _ = S(p),
                                T = p.scrollLeft,
                                P = p.scrollTop;
                            p === c
                                ? ((x = b < M && ("auto" === _.overflowX || "scroll" === _.overflowX || "visible" === _.overflowX)),
                                  (k = w < O && ("auto" === _.overflowY || "scroll" === _.overflowY || "visible" === _.overflowY)))
                                : ((x = b < M && ("auto" === _.overflowX || "scroll" === _.overflowX)), (k = w < O && ("auto" === _.overflowY || "scroll" === _.overflowY)));
                            var A = x && (Math.abs(v - o) <= a && T + b < M) - (Math.abs(y - o) <= a && !!T),
                                I = k && (Math.abs(g - s) <= a && P + w < O) - (Math.abs(m - s) <= a && !!P);
                            if (!tG[h]) for (var R = 0; R <= h; R++) tG[R] || (tG[R] = {});
                            (tG[h].vx != A || tG[h].vy != I || tG[h].el !== p) &&
                                ((tG[h].el = p),
                                (tG[h].vx = A),
                                (tG[h].vy = I),
                                clearInterval(tG[h].pid),
                                (0 != A || 0 != I) &&
                                    ((u = !0),
                                    (tG[h].pid = setInterval(
                                        function () {
                                            r && 0 === this.layer && tH.active._onTouchMove(tK);
                                            var e = tG[this.layer].vy ? tG[this.layer].vy * l : 0,
                                                n = tG[this.layer].vx ? tG[this.layer].vx * l : 0;
                                            ("function" != typeof i || "continue" === i.call(tH.dragged.parentNode[H], n, e, t, tK, tG[this.layer].el)) && N(tG[this.layer].el, n, e);
                                        }.bind({ layer: h }),
                                        24
                                    )))),
                                h++;
                        } while (e.bubbleScroll && d !== c && (d = D(d, !1)));
                        tQ = u;
                    }
                }, 30),
                t3 = function (t) {
                    var e = t.originalEvent,
                        n = t.putSortable,
                        r = t.dragEl,
                        i = t.activeSortable,
                        o = t.dispatchSortableEvent,
                        s = t.hideGhostForTarget,
                        a = t.unhideGhostForTarget;
                    if (e) {
                        var l = n || i;
                        s();
                        var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
                            u = document.elementFromPoint(c.clientX, c.clientY);
                        a(), l && !l.el.contains(u) && (o("spill"), this.onSpill({ dragEl: r, putSortable: n }));
                    }
                };
            function t5() {}
            function t6() {}
            function t9() {
                function t() {
                    this.defaults = { swapClass: "sortable-swap-highlight" };
                }
                return (
                    (t.prototype = {
                        dragStart: function (t) {
                            t7 = t.dragEl;
                        },
                        dragOverValid: function (t) {
                            var e = t.completed,
                                n = t.target,
                                r = t.onMove,
                                i = t.activeSortable,
                                o = t.changed,
                                s = t.cancel;
                            if (i.options.swap) {
                                var a = this.sortable.el,
                                    l = this.options;
                                if (n && n !== a) {
                                    var c = t7;
                                    !1 !== r(n) ? (x(n, l.swapClass, !0), (t7 = n)) : (t7 = null), c && c !== t7 && x(c, l.swapClass, !1);
                                }
                                o(), e(!0), s();
                            }
                        },
                        drop: function (t) {
                            var e,
                                n,
                                r,
                                i,
                                o,
                                s = t.activeSortable,
                                a = t.putSortable,
                                l = t.dragEl,
                                c = a || this.sortable,
                                u = this.options;
                            t7 && x(t7, u.swapClass, !1),
                                t7 &&
                                    (u.swap || (a && a.options.swap)) &&
                                    l !== t7 &&
                                    (c.captureAnimationState(),
                                    c !== s && s.captureAnimationState(),
                                    (e = t7),
                                    (i = l.parentNode),
                                    (o = e.parentNode),
                                    !i ||
                                        !o ||
                                        i.isEqualNode(e) ||
                                        o.isEqualNode(l) ||
                                        ((n = P(l)), (r = P(e)), i.isEqualNode(o) && n < r && r++, i.insertBefore(e, i.children[n]), o.insertBefore(l, o.children[r])),
                                    c.animateAll(),
                                    c !== s && s.animateAll());
                        },
                        nulling: function () {
                            t7 = null;
                        },
                    }),
                    s(t, {
                        pluginName: "swap",
                        eventProperties: function () {
                            return { swapItem: t7 };
                        },
                    })
                );
            }
            (t5.prototype = {
                startIndex: null,
                dragStart: function (t) {
                    var e = t.oldDraggableIndex;
                    this.startIndex = e;
                },
                onSpill: function (t) {
                    var e = t.dragEl,
                        n = t.putSortable;
                    this.sortable.captureAnimationState(), n && n.captureAnimationState();
                    var r = _(this.sortable.el, this.startIndex, this.options);
                    r ? this.sortable.el.insertBefore(e, r) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
                },
                drop: t3,
            }),
                s(t5, { pluginName: "revertOnSpill" }),
                (t6.prototype = {
                    onSpill: function (t) {
                        var e = t.dragEl,
                            n = t.putSortable || this.sortable;
                        n.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), n.animateAll();
                    },
                    drop: t3,
                }),
                s(t6, { pluginName: "removeOnSpill" });
            var t7,
                t4,
                t8,
                et,
                ee,
                en,
                er = [],
                ei = [],
                eo = !1,
                es = !1,
                ea = !1;
            function el() {
                function t(t) {
                    for (var e in this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this));
                    t.options.avoidImplicitDeselect ||
                        (t.options.supportPointer
                            ? g(document, "pointerup", this._deselectMultiDrag)
                            : (g(document, "mouseup", this._deselectMultiDrag), g(document, "touchend", this._deselectMultiDrag))),
                        g(document, "keydown", this._checkKeyDown),
                        g(document, "keyup", this._checkKeyUp),
                        (this.defaults = {
                            selectedClass: "sortable-selected",
                            multiDragKey: null,
                            avoidImplicitDeselect: !1,
                            setData: function (e, n) {
                                var r = "";
                                er.length && t8 === t
                                    ? er.forEach(function (t, e) {
                                          r += (e ? ", " : "") + t.textContent;
                                      })
                                    : (r = n.textContent),
                                    e.setData("Text", r);
                            },
                        });
                }
                return (
                    (t.prototype = {
                        multiDragKeyDown: !1,
                        isMultiDrag: !1,
                        delayStartGlobal: function (t) {
                            et = t.dragEl;
                        },
                        delayEnded: function () {
                            this.isMultiDrag = ~er.indexOf(et);
                        },
                        setupClone: function (t) {
                            var e = t.sortable,
                                n = t.cancel;
                            if (this.isMultiDrag) {
                                for (var r = 0; r < er.length; r++)
                                    ei.push(z(er[r])),
                                        (ei[r].sortableIndex = er[r].sortableIndex),
                                        (ei[r].draggable = !1),
                                        (ei[r].style["will-change"] = ""),
                                        x(ei[r], this.options.selectedClass, !1),
                                        er[r] === et && x(ei[r], this.options.chosenClass, !1);
                                e._hideClone(), n();
                            }
                        },
                        clone: function (t) {
                            var e = t.sortable,
                                n = t.rootEl,
                                r = t.dispatchSortableEvent,
                                i = t.cancel;
                            this.isMultiDrag && !this.options.removeCloneOnHide && er.length && t8 === e && (ec(!0, n), r("clone"), i());
                        },
                        showClone: function (t) {
                            var e = t.cloneNowShown,
                                n = t.rootEl,
                                r = t.cancel;
                            this.isMultiDrag &&
                                (ec(!1, n),
                                ei.forEach(function (t) {
                                    S(t, "display", "");
                                }),
                                e(),
                                (en = !1),
                                r());
                        },
                        hideClone: function (t) {
                            var e = this;
                            t.sortable;
                            var n = t.cloneNowHidden,
                                r = t.cancel;
                            this.isMultiDrag &&
                                (ei.forEach(function (t) {
                                    S(t, "display", "none"), e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t);
                                }),
                                n(),
                                (en = !0),
                                r());
                        },
                        dragStartGlobal: function (t) {
                            t.sortable,
                                !this.isMultiDrag && t8 && t8.multiDrag._deselectMultiDrag(),
                                er.forEach(function (t) {
                                    t.sortableIndex = P(t);
                                }),
                                (er = er.sort(function (t, e) {
                                    return t.sortableIndex - e.sortableIndex;
                                })),
                                (ea = !0);
                        },
                        dragStarted: function (t) {
                            var e = this,
                                n = t.sortable;
                            if (this.isMultiDrag) {
                                if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
                                    er.forEach(function (t) {
                                        t !== et && S(t, "position", "absolute");
                                    });
                                    var r = E(et, !1, !0, !0);
                                    er.forEach(function (t) {
                                        t !== et && j(t, r);
                                    }),
                                        (es = !0),
                                        (eo = !0);
                                }
                                n.animateAll(function () {
                                    (es = !1),
                                        (eo = !1),
                                        e.options.animation &&
                                            er.forEach(function (t) {
                                                L(t);
                                            }),
                                        e.options.sort && eu();
                                });
                            }
                        },
                        dragOver: function (t) {
                            var e = t.target,
                                n = t.completed,
                                r = t.cancel;
                            es && ~er.indexOf(e) && (n(!1), r());
                        },
                        revert: function (t) {
                            var e,
                                n = t.fromSortable,
                                r = t.rootEl,
                                i = t.sortable,
                                o = t.dragRect;
                            er.length > 1 &&
                                (er.forEach(function (t) {
                                    i.addAnimationState({ target: t, rect: es ? E(t) : o }), L(t), (t.fromRect = o), n.removeAnimationState(t);
                                }),
                                (es = !1),
                                (e = !this.options.removeCloneOnHide),
                                er.forEach(function (t, n) {
                                    var i = r.children[t.sortableIndex + (e ? Number(n) : 0)];
                                    i ? r.insertBefore(t, i) : r.appendChild(t);
                                }));
                        },
                        dragOverCompleted: function (t) {
                            var e = t.sortable,
                                n = t.isOwner,
                                r = t.insertion,
                                i = t.activeSortable,
                                o = t.parentEl,
                                s = t.putSortable,
                                a = this.options;
                            if (r) {
                                if ((n && i._hideClone(), (eo = !1), a.animation && er.length > 1 && (es || (!n && !i.options.sort && !s)))) {
                                    var l = E(et, !1, !0, !0);
                                    er.forEach(function (t) {
                                        t !== et && (j(t, l), o.appendChild(t));
                                    }),
                                        (es = !0);
                                }
                                if (!n) {
                                    if ((es || eu(), er.length > 1)) {
                                        var c = en;
                                        i._showClone(e),
                                            i.options.animation &&
                                                !en &&
                                                c &&
                                                ei.forEach(function (t) {
                                                    i.addAnimationState({ target: t, rect: ee }), (t.fromRect = ee), (t.thisAnimationDuration = null);
                                                });
                                    } else i._showClone(e);
                                }
                            }
                        },
                        dragOverAnimationCapture: function (t) {
                            var e = t.dragRect,
                                n = t.isOwner,
                                r = t.activeSortable;
                            if (
                                (er.forEach(function (t) {
                                    t.thisAnimationDuration = null;
                                }),
                                r.options.animation && !n && r.multiDrag.isMultiDrag)
                            ) {
                                ee = s({}, e);
                                var i = k(et, !0);
                                (ee.top -= i.f), (ee.left -= i.e);
                            }
                        },
                        dragOverAnimationComplete: function () {
                            es && ((es = !1), eu());
                        },
                        drop: function (t) {
                            var e = t.originalEvent,
                                n = t.rootEl,
                                r = t.parentEl,
                                i = t.sortable,
                                o = t.dispatchSortableEvent,
                                s = t.oldIndex,
                                a = t.putSortable,
                                l = a || this.sortable;
                            if (e) {
                                var c = this.options,
                                    u = r.children;
                                if (!ea) {
                                    if ((c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), x(et, c.selectedClass, !~er.indexOf(et)), ~er.indexOf(et)))
                                        er.splice(er.indexOf(et), 1), (t4 = null), Z({ sortable: i, rootEl: n, name: "deselect", targetEl: et, originalEvent: e });
                                    else {
                                        if ((er.push(et), Z({ sortable: i, rootEl: n, name: "select", targetEl: et, originalEvent: e }), e.shiftKey && t4 && i.el.contains(t4))) {
                                            var h,
                                                d,
                                                p = P(t4),
                                                f = P(et);
                                            if (~p && ~f && p !== f)
                                                for (f > p ? ((d = p), (h = f)) : ((d = f), (h = p + 1)); d < h; d++)
                                                    ~er.indexOf(u[d]) || (x(u[d], c.selectedClass, !0), er.push(u[d]), Z({ sortable: i, rootEl: n, name: "select", targetEl: u[d], originalEvent: e }));
                                        } else t4 = et;
                                        t8 = l;
                                    }
                                }
                                if (ea && this.isMultiDrag) {
                                    if (((es = !1), (r[H].options.sort || r !== n) && er.length > 1)) {
                                        var m = E(et),
                                            g = P(et, ":not(." + this.options.selectedClass + ")");
                                        if (
                                            (!eo && c.animation && (et.thisAnimationDuration = null),
                                            l.captureAnimationState(),
                                            !eo &&
                                                (c.animation &&
                                                    ((et.fromRect = m),
                                                    er.forEach(function (t) {
                                                        if (((t.thisAnimationDuration = null), t !== et)) {
                                                            var e = es ? E(t) : m;
                                                            (t.fromRect = e), l.addAnimationState({ target: t, rect: e });
                                                        }
                                                    })),
                                                eu(),
                                                er.forEach(function (t) {
                                                    u[g] ? r.insertBefore(t, u[g]) : r.appendChild(t), g++;
                                                }),
                                                s === P(et)))
                                        ) {
                                            var y = !1;
                                            er.forEach(function (t) {
                                                if (t.sortableIndex !== P(t)) {
                                                    y = !0;
                                                    return;
                                                }
                                            }),
                                                y && (o("update"), o("sort"));
                                        }
                                        er.forEach(function (t) {
                                            L(t);
                                        }),
                                            l.animateAll();
                                    }
                                    t8 = l;
                                }
                                (n === r || (a && "clone" !== a.lastPutMode)) &&
                                    ei.forEach(function (t) {
                                        t.parentNode && t.parentNode.removeChild(t);
                                    });
                            }
                        },
                        nullingGlobal: function () {
                            (this.isMultiDrag = ea = !1), (ei.length = 0);
                        },
                        destroyGlobal: function () {
                            this._deselectMultiDrag(),
                                y(document, "pointerup", this._deselectMultiDrag),
                                y(document, "mouseup", this._deselectMultiDrag),
                                y(document, "touchend", this._deselectMultiDrag),
                                y(document, "keydown", this._checkKeyDown),
                                y(document, "keyup", this._checkKeyUp);
                        },
                        _deselectMultiDrag: function (t) {
                            if (!((void 0 !== ea && ea) || t8 !== this.sortable || (t && b(t.target, this.options.draggable, this.sortable.el, !1))) && (!t || 0 === t.button))
                                for (; er.length; ) {
                                    var e = er[0];
                                    x(e, this.options.selectedClass, !1), er.shift(), Z({ sortable: this.sortable, rootEl: this.sortable.el, name: "deselect", targetEl: e, originalEvent: t });
                                }
                        },
                        _checkKeyDown: function (t) {
                            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
                        },
                        _checkKeyUp: function (t) {
                            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
                        },
                    }),
                    s(t, {
                        pluginName: "multiDrag",
                        utils: {
                            select: function (t) {
                                var e = t.parentNode[H];
                                !e || !e.options.multiDrag || ~er.indexOf(t) || (t8 && t8 !== e && (t8.multiDrag._deselectMultiDrag(), (t8 = e)), x(t, e.options.selectedClass, !0), er.push(t));
                            },
                            deselect: function (t) {
                                var e = t.parentNode[H],
                                    n = er.indexOf(t);
                                e && e.options.multiDrag && ~n && (x(t, e.options.selectedClass, !1), er.splice(n, 1));
                            },
                        },
                        eventProperties: function () {
                            var t,
                                e = this,
                                n = [],
                                r = [];
                            return (
                                er.forEach(function (t) {
                                    var i;
                                    n.push({ multiDragElement: t, index: t.sortableIndex }),
                                        (i = es && t !== et ? -1 : es ? P(t, ":not(." + e.options.selectedClass + ")") : P(t)),
                                        r.push({ multiDragElement: t, index: i });
                                }),
                                {
                                    items:
                                        (function (t) {
                                            if (Array.isArray(t)) return a(t);
                                        })((t = er)) ||
                                        (function (t) {
                                            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                                        })(t) ||
                                        (function (t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return a(t, void 0);
                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                if (("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n)) return Array.from(t);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, void 0);
                                            }
                                        })(t) ||
                                        (function () {
                                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })(),
                                    clones: [].concat(ei),
                                    oldIndicies: n,
                                    newIndicies: r,
                                }
                            );
                        },
                        optionListeners: {
                            multiDragKey: function (t) {
                                return "ctrl" === (t = t.toLowerCase()) ? (t = "Control") : t.length > 1 && (t = t.charAt(0).toUpperCase() + t.substr(1)), t;
                            },
                        },
                    })
                );
            }
            function ec(t, e) {
                ei.forEach(function (n, r) {
                    var i = e.children[n.sortableIndex + (t ? Number(r) : 0)];
                    i ? e.insertBefore(n, i) : e.appendChild(n);
                });
            }
            function eu() {
                er.forEach(function (t) {
                    t !== et && t.parentNode && t.parentNode.removeChild(t);
                });
            }
            tH.mount(
                new (function () {
                    function t() {
                        for (var t in ((this.defaults = { scroll: !0, forceAutoScrollFallback: !1, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: !0 }), this))
                            "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
                    }
                    return (
                        (t.prototype = {
                            dragStarted: function (t) {
                                var e = t.originalEvent;
                                this.sortable.nativeDraggable
                                    ? g(document, "dragover", this._handleAutoScroll)
                                    : this.options.supportPointer
                                    ? g(document, "pointermove", this._handleFallbackAutoScroll)
                                    : e.touches
                                    ? g(document, "touchmove", this._handleFallbackAutoScroll)
                                    : g(document, "mousemove", this._handleFallbackAutoScroll);
                            },
                            dragOverCompleted: function (t) {
                                var e = t.originalEvent;
                                this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e);
                            },
                            drop: function () {
                                this.sortable.nativeDraggable
                                    ? y(document, "dragover", this._handleAutoScroll)
                                    : (y(document, "pointermove", this._handleFallbackAutoScroll),
                                      y(document, "touchmove", this._handleFallbackAutoScroll),
                                      y(document, "mousemove", this._handleFallbackAutoScroll)),
                                    t1(),
                                    t0(),
                                    clearTimeout(J),
                                    (J = void 0);
                            },
                            nulling: function () {
                                (tK = tY = tU = tQ = tX = tJ = tq = null), (tG.length = 0);
                            },
                            _handleFallbackAutoScroll: function (t) {
                                this._handleAutoScroll(t, !0);
                            },
                            _handleAutoScroll: function (t, e) {
                                var n = this,
                                    r = (t.touches ? t.touches[0] : t).clientX,
                                    i = (t.touches ? t.touches[0] : t).clientY,
                                    o = document.elementFromPoint(r, i);
                                if (((tK = t), e || this.options.forceAutoScrollFallback || u || c || d)) {
                                    t2(t, this.options, o, e);
                                    var s = D(o, !0);
                                    tQ &&
                                        (!tX || r !== tJ || i !== tq) &&
                                        (tX && t1(),
                                        (tX = setInterval(function () {
                                            var o = D(document.elementFromPoint(r, i), !0);
                                            o !== s && ((s = o), t0()), t2(t, n.options, o, e);
                                        }, 10)),
                                        (tJ = r),
                                        (tq = i));
                                } else {
                                    if (!this.options.bubbleScroll || D(o, !0) === C()) {
                                        t0();
                                        return;
                                    }
                                    t2(t, this.options, D(o, !1), !1);
                                }
                            },
                        }),
                        s(t, { pluginName: "scroll", initializeByDefault: !0 })
                    );
                })()
            ),
                tH.mount(t6, t5),
                (e.default = tH);
        },
        95693: function (t, e, n) {
            "use strict";
            var r = (
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    }
                )(n(52744)),
                i = n(96172);
            function o(t, e) {
                var n = {};
                return (
                    t &&
                        "string" == typeof t &&
                        (0, r.default)(t, function (t, r) {
                            t && r && (n[(0, i.camelCase)(t, e)] = r);
                        }),
                    n
                );
            }
            (o.default = o), (t.exports = o);
        },
        96172: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.camelCase = void 0);
            var n = /^--[a-zA-Z0-9-]+$/,
                r = /-([a-z])/g,
                i = /^[^-]+$/,
                o = /^-(webkit|moz|ms|o|khtml)-/,
                s = /^-(ms)-/,
                a = function (t, e) {
                    return e.toUpperCase();
                },
                l = function (t, e) {
                    return "".concat(e, "-");
                };
            e.camelCase = function (t, e) {
                var c;
                return (void 0 === e && (e = {}), !(c = t) || i.test(c) || n.test(c)) ? t : ((t = t.toLowerCase()), (t = e.reactCompat ? t.replace(s, l) : t.replace(o, l)).replace(r, a));
            };
        },
        52744: function (t, e, n) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = r(n(80662));
            e.default = function (t, e) {
                var n = null;
                if (!t || "string" != typeof t) return n;
                var r = (0, i.default)(t),
                    o = "function" == typeof e;
                return (
                    r.forEach(function (t) {
                        if ("declaration" === t.type) {
                            var r = t.property,
                                i = t.value;
                            o ? e(r, i, t) : i && ((n = n || {})[r] = i);
                        }
                    }),
                    n
                );
            };
        },
        79780: function (t, e, n) {
            "use strict";
            function r(t, e) {
                if (!t) throw Error("Invariant failed");
            }
            n.r(e),
                n.d(e, {
                    default: function () {
                        return r;
                    },
                });
        },
        83135: function (t, e, n) {
            "use strict";
            var r = n(94725);
            n(13694);
            var i = r.hj.create({
                name: "fontSize",
                addOptions: function () {
                    return { types: ["textStyle"] };
                },
                addGlobalAttributes: function () {
                    return [
                        {
                            types: this.options.types,
                            attributes: {
                                fontSize: {
                                    default: null,
                                    parseHTML: function (t) {
                                        return t.style.fontSize.replace(/['"]+/g, "");
                                    },
                                    renderHTML: function (t) {
                                        return t.fontSize ? { style: "font-size: " + t.fontSize } : {};
                                    },
                                },
                            },
                        },
                    ];
                },
                addCommands: function () {
                    return {
                        setFontSize: function (t) {
                            return function (e) {
                                return (0, e.chain)().setMark("textStyle", { fontSize: t }).run();
                            };
                        },
                        unsetFontSize: function () {
                            return function (t) {
                                return (0, t.chain)().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run();
                            };
                        },
                    };
                },
            });
            e.Z = i;
        },
        38846: function (t, e, n) {
            "use strict";
            n.d(e, {
                bU: function () {
                    return Z;
                },
                e6: function () {
                    return W;
                },
                fC: function () {
                    return B;
                },
                fQ: function () {
                    return $;
                },
            });
            var r = n(1119),
                i = n(2265),
                o = n(62484),
                s = n(6741),
                a = n(98575),
                l = n(73966),
                c = n(80886),
                u = n(29114),
                h = n(6718),
                d = n(90420),
                p = n(66840),
                f = n(67822);
            let m = ["PageUp", "PageDown"],
                g = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                y = {
                    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
                    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
                },
                v = "Slider",
                [b, w, x] = (0, f.B)(v),
                [S, k] = (0, l.b)(v, [x]),
                [M, C] = S(v),
                E = (0, i.forwardRef)((t, e) => {
                    let {
                            name: n,
                            min: l = 0,
                            max: u = 100,
                            step: h = 1,
                            orientation: d = "horizontal",
                            disabled: p = !1,
                            minStepsBetweenThumbs: f = 0,
                            defaultValue: y = [l],
                            value: v,
                            onValueChange: w = () => {},
                            onValueCommit: x = () => {},
                            inverted: S = !1,
                            ...k
                        } = t,
                        [C, E] = (0, i.useState)(null),
                        O = (0, a.e)(e, t => E(t)),
                        _ = (0, i.useRef)(new Set()),
                        A = (0, i.useRef)(0),
                        D = "horizontal" === d,
                        I = !C || !!C.closest("form"),
                        [R = [], N] = (0, c.T)({
                            prop: v,
                            defaultProp: y,
                            onChange: t => {
                                var e;
                                null === (e = [..._.current][A.current]) || void 0 === e || e.focus(), w(t);
                            },
                        }),
                        z = (0, i.useRef)(R);
                    function j(t, e, { commit: n } = { commit: !1 }) {
                        let r = (String(h).split(".")[1] || "").length,
                            i = (function (t, e) {
                                let n = Math.pow(10, e);
                                return Math.round(t * n) / n;
                            })(Math.round((t - l) / h) * h + l, r),
                            s = (0, o.u)(i, [l, u]);
                        N((t = []) => {
                            var r, i;
                            let o = (function (t = [], e, n) {
                                let r = [...t];
                                return (r[n] = e), r.sort((t, e) => t - e);
                            })(t, s, e);
                            if (((r = o), !(!((i = f * h) > 0) || Math.min(...r.slice(0, -1).map((t, e) => r[e + 1] - t)) >= i))) return t;
                            {
                                A.current = o.indexOf(s);
                                let e = String(o) !== String(t);
                                return e && n && x(o), e ? o : t;
                            }
                        });
                    }
                    return (0, i.createElement)(
                        M,
                        { scope: t.__scopeSlider, disabled: p, min: l, max: u, valueIndexToChangeRef: A, thumbs: _.current, values: R, orientation: d },
                        (0, i.createElement)(
                            b.Provider,
                            { scope: t.__scopeSlider },
                            (0, i.createElement)(
                                b.Slot,
                                { scope: t.__scopeSlider },
                                (0, i.createElement)(
                                    D ? T : P,
                                    (0, r.Z)({ "aria-disabled": p, "data-disabled": p ? "" : void 0 }, k, {
                                        ref: O,
                                        onPointerDown: (0, s.M)(k.onPointerDown, () => {
                                            p || (z.current = R);
                                        }),
                                        min: l,
                                        max: u,
                                        inverted: S,
                                        onSlideStart: p
                                            ? void 0
                                            : function (t) {
                                                  let e = (function (t, e) {
                                                      if (1 === t.length) return 0;
                                                      let n = t.map(t => Math.abs(t - e));
                                                      return n.indexOf(Math.min(...n));
                                                  })(R, t);
                                                  j(t, e);
                                              },
                                        onSlideMove: p
                                            ? void 0
                                            : function (t) {
                                                  j(t, A.current);
                                              },
                                        onSlideEnd: p
                                            ? void 0
                                            : function () {
                                                  let t = z.current[A.current];
                                                  R[A.current] !== t && x(R);
                                              },
                                        onHomeKeyDown: () => !p && j(l, 0, { commit: !0 }),
                                        onEndKeyDown: () => !p && j(u, R.length - 1, { commit: !0 }),
                                        onStepKeyDown: ({ event: t, direction: e }) => {
                                            if (!p) {
                                                let n = m.includes(t.key) || (t.shiftKey && g.includes(t.key)),
                                                    r = A.current;
                                                j(R[r] + h * (n ? 10 : 1) * e, r, { commit: !0 });
                                            }
                                        },
                                    })
                                )
                            )
                        ),
                        I && R.map((t, e) => (0, i.createElement)(L, { key: e, name: n ? n + (R.length > 1 ? "[]" : "") : void 0, value: t }))
                    );
                }),
                [O, _] = S(v, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
                T = (0, i.forwardRef)((t, e) => {
                    let { min: n, max: o, dir: s, inverted: l, onSlideStart: c, onSlideMove: h, onSlideEnd: d, onStepKeyDown: p, ...f } = t,
                        [m, g] = (0, i.useState)(null),
                        v = (0, a.e)(e, t => g(t)),
                        b = (0, i.useRef)(),
                        w = (0, u.gm)(s),
                        x = "ltr" === w,
                        S = (x && !l) || (!x && l);
                    function k(t) {
                        let e = b.current || m.getBoundingClientRect(),
                            r = H([0, e.width], S ? [n, o] : [o, n]);
                        return (b.current = e), r(t - e.left);
                    }
                    return (0, i.createElement)(
                        O,
                        { scope: t.__scopeSlider, startEdge: S ? "left" : "right", endEdge: S ? "right" : "left", direction: S ? 1 : -1, size: "width" },
                        (0, i.createElement)(
                            A,
                            (0, r.Z)({ dir: w, "data-orientation": "horizontal" }, f, {
                                ref: v,
                                style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                                onSlideStart: t => {
                                    let e = k(t.clientX);
                                    null == c || c(e);
                                },
                                onSlideMove: t => {
                                    let e = k(t.clientX);
                                    null == h || h(e);
                                },
                                onSlideEnd: () => {
                                    (b.current = void 0), null == d || d();
                                },
                                onStepKeyDown: t => {
                                    let e = y[S ? "from-left" : "from-right"].includes(t.key);
                                    null == p || p({ event: t, direction: e ? -1 : 1 });
                                },
                            })
                        )
                    );
                }),
                P = (0, i.forwardRef)((t, e) => {
                    let { min: n, max: o, inverted: s, onSlideStart: l, onSlideMove: c, onSlideEnd: u, onStepKeyDown: h, ...d } = t,
                        p = (0, i.useRef)(null),
                        f = (0, a.e)(e, p),
                        m = (0, i.useRef)(),
                        g = !s;
                    function v(t) {
                        let e = m.current || p.current.getBoundingClientRect(),
                            r = H([0, e.height], g ? [o, n] : [n, o]);
                        return (m.current = e), r(t - e.top);
                    }
                    return (0, i.createElement)(
                        O,
                        { scope: t.__scopeSlider, startEdge: g ? "bottom" : "top", endEdge: g ? "top" : "bottom", size: "height", direction: g ? 1 : -1 },
                        (0, i.createElement)(
                            A,
                            (0, r.Z)({ "data-orientation": "vertical" }, d, {
                                ref: f,
                                style: { ...d.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                                onSlideStart: t => {
                                    let e = v(t.clientY);
                                    null == l || l(e);
                                },
                                onSlideMove: t => {
                                    let e = v(t.clientY);
                                    null == c || c(e);
                                },
                                onSlideEnd: () => {
                                    (m.current = void 0), null == u || u();
                                },
                                onStepKeyDown: t => {
                                    let e = y[g ? "from-bottom" : "from-top"].includes(t.key);
                                    null == h || h({ event: t, direction: e ? -1 : 1 });
                                },
                            })
                        )
                    );
                }),
                A = (0, i.forwardRef)((t, e) => {
                    let { __scopeSlider: n, onSlideStart: o, onSlideMove: a, onSlideEnd: l, onHomeKeyDown: c, onEndKeyDown: u, onStepKeyDown: h, ...d } = t,
                        f = C(v, n);
                    return (0, i.createElement)(
                        p.WV.span,
                        (0, r.Z)({}, d, {
                            ref: e,
                            onKeyDown: (0, s.M)(t.onKeyDown, t => {
                                "Home" === t.key ? (c(t), t.preventDefault()) : "End" === t.key ? (u(t), t.preventDefault()) : m.concat(g).includes(t.key) && (h(t), t.preventDefault());
                            }),
                            onPointerDown: (0, s.M)(t.onPointerDown, t => {
                                let e = t.target;
                                e.setPointerCapture(t.pointerId), t.preventDefault(), f.thumbs.has(e) ? e.focus() : o(t);
                            }),
                            onPointerMove: (0, s.M)(t.onPointerMove, t => {
                                t.target.hasPointerCapture(t.pointerId) && a(t);
                            }),
                            onPointerUp: (0, s.M)(t.onPointerUp, t => {
                                let e = t.target;
                                e.hasPointerCapture(t.pointerId) && (e.releasePointerCapture(t.pointerId), l(t));
                            }),
                        })
                    );
                }),
                D = (0, i.forwardRef)((t, e) => {
                    let { __scopeSlider: n, ...o } = t,
                        s = C("SliderTrack", n);
                    return (0, i.createElement)(p.WV.span, (0, r.Z)({ "data-disabled": s.disabled ? "" : void 0, "data-orientation": s.orientation }, o, { ref: e }));
                }),
                I = "SliderRange",
                R = (0, i.forwardRef)((t, e) => {
                    let { __scopeSlider: n, ...o } = t,
                        s = C(I, n),
                        l = _(I, n),
                        c = (0, i.useRef)(null),
                        u = (0, a.e)(e, c),
                        h = s.values.length,
                        d = s.values.map(t => F(t, s.min, s.max));
                    return (0, i.createElement)(
                        p.WV.span,
                        (0, r.Z)({ "data-orientation": s.orientation, "data-disabled": s.disabled ? "" : void 0 }, o, {
                            ref: u,
                            style: { ...t.style, [l.startEdge]: (h > 1 ? Math.min(...d) : 0) + "%", [l.endEdge]: 100 - Math.max(...d) + "%" },
                        })
                    );
                }),
                N = "SliderThumb",
                z = (0, i.forwardRef)((t, e) => {
                    let n = w(t.__scopeSlider),
                        [o, s] = (0, i.useState)(null),
                        l = (0, a.e)(e, t => s(t)),
                        c = (0, i.useMemo)(() => (o ? n().findIndex(t => t.ref.current === o) : -1), [n, o]);
                    return (0, i.createElement)(j, (0, r.Z)({}, t, { ref: l, index: c }));
                }),
                j = (0, i.forwardRef)((t, e) => {
                    var n;
                    let { __scopeSlider: o, index: l, ...c } = t,
                        u = C(N, o),
                        h = _(N, o),
                        [f, m] = (0, i.useState)(null),
                        g = (0, a.e)(e, t => m(t)),
                        y = (0, d.t)(f),
                        v = u.values[l],
                        w = void 0 === v ? 0 : F(v, u.min, u.max),
                        x = (n = u.values.length) > 2 ? `Value ${l + 1} of ${n}` : 2 === n ? ["Minimum", "Maximum"][l] : void 0,
                        S = null == y ? void 0 : y[h.size],
                        k = S
                            ? (function (t, e, n) {
                                  let r = t / 2,
                                      i = H([0, 50], [0, r]);
                                  return (r - i(e) * n) * n;
                              })(S, w, h.direction)
                            : 0;
                    return (
                        (0, i.useEffect)(() => {
                            if (f)
                                return (
                                    u.thumbs.add(f),
                                    () => {
                                        u.thumbs.delete(f);
                                    }
                                );
                        }, [f, u.thumbs]),
                        (0, i.createElement)(
                            "span",
                            { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [h.startEdge]: `calc(${w}% + ${k}px)` } },
                            (0, i.createElement)(
                                b.ItemSlot,
                                { scope: t.__scopeSlider },
                                (0, i.createElement)(
                                    p.WV.span,
                                    (0, r.Z)(
                                        {
                                            role: "slider",
                                            "aria-label": t["aria-label"] || x,
                                            "aria-valuemin": u.min,
                                            "aria-valuenow": v,
                                            "aria-valuemax": u.max,
                                            "aria-orientation": u.orientation,
                                            "data-orientation": u.orientation,
                                            "data-disabled": u.disabled ? "" : void 0,
                                            tabIndex: u.disabled ? void 0 : 0,
                                        },
                                        c,
                                        {
                                            ref: g,
                                            style: void 0 === v ? { display: "none" } : t.style,
                                            onFocus: (0, s.M)(t.onFocus, () => {
                                                u.valueIndexToChangeRef.current = l;
                                            }),
                                        }
                                    )
                                )
                            )
                        )
                    );
                }),
                L = t => {
                    let { value: e, ...n } = t,
                        o = (0, i.useRef)(null),
                        s = (0, h.D)(e);
                    return (
                        (0, i.useEffect)(() => {
                            let t = o.current,
                                n = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                            if (s !== e && n) {
                                let r = new Event("input", { bubbles: !0 });
                                n.call(t, e), t.dispatchEvent(r);
                            }
                        }, [s, e]),
                        (0, i.createElement)("input", (0, r.Z)({ style: { display: "none" } }, n, { ref: o, defaultValue: e }))
                    );
                };
            function F(t, e, n) {
                return (0, o.u)((100 / (n - e)) * (t - e), [0, 100]);
            }
            function H(t, e) {
                return n => {
                    if (t[0] === t[1] || e[0] === e[1]) return e[0];
                    let r = (e[1] - e[0]) / (t[1] - t[0]);
                    return e[0] + r * (n - t[0]);
                };
            }
            let B = E,
                $ = D,
                W = R,
                Z = z;
        },
        50721: function (t, e, n) {
            "use strict";
            n.d(e, {
                bU: function () {
                    return S;
                },
                fC: function () {
                    return x;
                },
            });
            var r = n(1119),
                i = n(2265),
                o = n(6741),
                s = n(98575),
                a = n(73966),
                l = n(80886),
                c = n(6718),
                u = n(90420),
                h = n(66840);
            let d = "Switch",
                [p, f] = (0, a.b)(d),
                [m, g] = p(d),
                y = (0, i.forwardRef)((t, e) => {
                    let { __scopeSwitch: n, name: a, checked: c, defaultChecked: u, required: d, disabled: p, value: f = "on", onCheckedChange: g, ...y } = t,
                        [v, x] = (0, i.useState)(null),
                        S = (0, s.e)(e, t => x(t)),
                        k = (0, i.useRef)(!1),
                        M = !v || !!v.closest("form"),
                        [C = !1, E] = (0, l.T)({ prop: c, defaultProp: u, onChange: g });
                    return (0, i.createElement)(
                        m,
                        { scope: n, checked: C, disabled: p },
                        (0, i.createElement)(
                            h.WV.button,
                            (0, r.Z)({ type: "button", role: "switch", "aria-checked": C, "aria-required": d, "data-state": w(C), "data-disabled": p ? "" : void 0, disabled: p, value: f }, y, {
                                ref: S,
                                onClick: (0, o.M)(t.onClick, t => {
                                    E(t => !t), M && ((k.current = t.isPropagationStopped()), k.current || t.stopPropagation());
                                }),
                            })
                        ),
                        M && (0, i.createElement)(b, { control: v, bubbles: !k.current, name: a, value: f, checked: C, required: d, disabled: p, style: { transform: "translateX(-100%)" } })
                    );
                }),
                v = (0, i.forwardRef)((t, e) => {
                    let { __scopeSwitch: n, ...o } = t,
                        s = g("SwitchThumb", n);
                    return (0, i.createElement)(h.WV.span, (0, r.Z)({ "data-state": w(s.checked), "data-disabled": s.disabled ? "" : void 0 }, o, { ref: e }));
                }),
                b = t => {
                    let { control: e, checked: n, bubbles: o = !0, ...s } = t,
                        a = (0, i.useRef)(null),
                        l = (0, c.D)(n),
                        h = (0, u.t)(e);
                    return (
                        (0, i.useEffect)(() => {
                            let t = a.current,
                                e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                            if (l !== n && e) {
                                let r = new Event("click", { bubbles: o });
                                e.call(t, n), t.dispatchEvent(r);
                            }
                        }, [l, n, o]),
                        (0, i.createElement)(
                            "input",
                            (0, r.Z)({ type: "checkbox", "aria-hidden": !0, defaultChecked: n }, s, {
                                tabIndex: -1,
                                ref: a,
                                style: { ...t.style, ...h, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 },
                            })
                        )
                    );
                };
            function w(t) {
                return t ? "checked" : "unchecked";
            }
            let x = y,
                S = v;
        },
        60808: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return l;
                },
            });
            var r = n(94725);
            let i = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                o = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,
                s = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,
                a = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,
                l = r.vc.create({
                    name: "bold",
                    addOptions: () => ({ HTMLAttributes: {} }),
                    parseHTML: () => [
                        { tag: "strong" },
                        { tag: "b", getAttrs: t => "normal" !== t.style.fontWeight && null },
                        { style: "font-weight", getAttrs: t => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null },
                    ],
                    renderHTML({ HTMLAttributes: t }) {
                        return ["strong", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                    },
                    addCommands() {
                        return {
                            setBold:
                                () =>
                                ({ commands: t }) =>
                                    t.setMark(this.name),
                            toggleBold:
                                () =>
                                ({ commands: t }) =>
                                    t.toggleMark(this.name),
                            unsetBold:
                                () =>
                                ({ commands: t }) =>
                                    t.unsetMark(this.name),
                        };
                    },
                    addKeyboardShortcuts() {
                        return { "Mod-b": () => this.editor.commands.toggleBold(), "Mod-B": () => this.editor.commands.toggleBold() };
                    },
                    addInputRules() {
                        return [(0, r.Cf)({ find: i, type: this.type }), (0, r.Cf)({ find: s, type: this.type })];
                    },
                    addPasteRules() {
                        return [(0, r.K9)({ find: o, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
                    },
                });
        },
        24475: function (t, e, n) {
            "use strict";
            n.d(e, {
                I: function () {
                    return r;
                },
            }),
                n(13694);
            let r = n(94725).hj.create({
                name: "color",
                addOptions: () => ({ types: ["textStyle"] }),
                addGlobalAttributes() {
                    return [
                        {
                            types: this.options.types,
                            attributes: {
                                color: {
                                    default: null,
                                    parseHTML: t => {
                                        var e;
                                        return null === (e = t.style.color) || void 0 === e ? void 0 : e.replace(/['"]+/g, "");
                                    },
                                    renderHTML: t => (t.color ? { style: `color: ${t.color}` } : {}),
                                },
                            },
                        },
                    ];
                },
                addCommands: () => ({
                    setColor:
                        t =>
                        ({ chain: e }) =>
                            e().setMark("textStyle", { color: t }).run(),
                    unsetColor:
                        () =>
                        ({ chain: t }) =>
                            t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run(),
                }),
            });
        },
        28098: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = n(94725).NB.create({ name: "doc", topNode: !0, content: "block+" });
        },
        11670: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            var r = n(94725);
            let i = r.NB.create({
                name: "heading",
                addOptions: () => ({ levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} }),
                content: "inline*",
                group: "block",
                defining: !0,
                addAttributes: () => ({ level: { default: 1, rendered: !1 } }),
                parseHTML() {
                    return this.options.levels.map(t => ({ tag: `h${t}`, attrs: { level: t } }));
                },
                renderHTML({ node: t, HTMLAttributes: e }) {
                    let n = this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0];
                    return [`h${n}`, (0, r.P1)(this.options.HTMLAttributes, e), 0];
                },
                addCommands() {
                    return {
                        setHeading:
                            t =>
                            ({ commands: e }) =>
                                !!this.options.levels.includes(t.level) && e.setNode(this.name, t),
                        toggleHeading:
                            t =>
                            ({ commands: e }) =>
                                !!this.options.levels.includes(t.level) && e.toggleNode(this.name, "paragraph", t),
                    };
                },
                addKeyboardShortcuts() {
                    return this.options.levels.reduce((t, e) => ({ ...t, [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e }) }), {});
                },
                addInputRules() {
                    return this.options.levels.map(t => (0, r.zK)({ find: RegExp(`^(#{1,${t}})\\s$`), type: this.type, getAttributes: { level: t } }));
                },
            });
        },
        66563: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return k;
                },
            });
            var r = n(94725),
                i = function () {};
            (i.prototype.append = function (t) {
                return t.length ? ((t = i.from(t)), (!this.length && t) || (t.length < 200 && this.leafAppend(t)) || (this.length < 200 && t.leafPrepend(this)) || this.appendInner(t)) : this;
            }),
                (i.prototype.prepend = function (t) {
                    return t.length ? i.from(t).append(this) : this;
                }),
                (i.prototype.appendInner = function (t) {
                    return new s(this, t);
                }),
                (i.prototype.slice = function (t, e) {
                    return (void 0 === t && (t = 0), void 0 === e && (e = this.length), t >= e) ? i.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e));
                }),
                (i.prototype.get = function (t) {
                    if (!(t < 0) && !(t >= this.length)) return this.getInner(t);
                }),
                (i.prototype.forEach = function (t, e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = this.length), e <= n ? this.forEachInner(t, e, n, 0) : this.forEachInvertedInner(t, e, n, 0);
                }),
                (i.prototype.map = function (t, e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = this.length);
                    var r = [];
                    return (
                        this.forEach(
                            function (e, n) {
                                return r.push(t(e, n));
                            },
                            e,
                            n
                        ),
                        r
                    );
                }),
                (i.from = function (t) {
                    return t instanceof i ? t : t && t.length ? new o(t) : i.empty;
                });
            var o = (function (t) {
                function e(e) {
                    t.call(this), (this.values = e);
                }
                t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e);
                var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
                return (
                    (e.prototype.flatten = function () {
                        return this.values;
                    }),
                    (e.prototype.sliceInner = function (t, n) {
                        return 0 == t && n == this.length ? this : new e(this.values.slice(t, n));
                    }),
                    (e.prototype.getInner = function (t) {
                        return this.values[t];
                    }),
                    (e.prototype.forEachInner = function (t, e, n, r) {
                        for (var i = e; i < n; i++) if (!1 === t(this.values[i], r + i)) return !1;
                    }),
                    (e.prototype.forEachInvertedInner = function (t, e, n, r) {
                        for (var i = e - 1; i >= n; i--) if (!1 === t(this.values[i], r + i)) return !1;
                    }),
                    (e.prototype.leafAppend = function (t) {
                        if (this.length + t.length <= 200) return new e(this.values.concat(t.flatten()));
                    }),
                    (e.prototype.leafPrepend = function (t) {
                        if (this.length + t.length <= 200) return new e(t.flatten().concat(this.values));
                    }),
                    (n.length.get = function () {
                        return this.values.length;
                    }),
                    (n.depth.get = function () {
                        return 0;
                    }),
                    Object.defineProperties(e.prototype, n),
                    e
                );
            })(i);
            i.empty = new o([]);
            var s = (function (t) {
                    function e(e, n) {
                        t.call(this), (this.left = e), (this.right = n), (this.length = e.length + n.length), (this.depth = Math.max(e.depth, n.depth) + 1);
                    }
                    return (
                        t && (e.__proto__ = t),
                        (e.prototype = Object.create(t && t.prototype)),
                        (e.prototype.constructor = e),
                        (e.prototype.flatten = function () {
                            return this.left.flatten().concat(this.right.flatten());
                        }),
                        (e.prototype.getInner = function (t) {
                            return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length);
                        }),
                        (e.prototype.forEachInner = function (t, e, n, r) {
                            var i = this.left.length;
                            if (
                                (e < i && !1 === this.left.forEachInner(t, e, Math.min(n, i), r)) ||
                                (n > i && !1 === this.right.forEachInner(t, Math.max(e - i, 0), Math.min(this.length, n) - i, r + i))
                            )
                                return !1;
                        }),
                        (e.prototype.forEachInvertedInner = function (t, e, n, r) {
                            var i = this.left.length;
                            if ((e > i && !1 === this.right.forEachInvertedInner(t, e - i, Math.max(n, i) - i, r + i)) || (n < i && !1 === this.left.forEachInvertedInner(t, Math.min(e, i), n, r)))
                                return !1;
                        }),
                        (e.prototype.sliceInner = function (t, e) {
                            if (0 == t && e == this.length) return this;
                            var n = this.left.length;
                            return e <= n ? this.left.slice(t, e) : t >= n ? this.right.slice(t - n, e - n) : this.left.slice(t, n).append(this.right.slice(0, e - n));
                        }),
                        (e.prototype.leafAppend = function (t) {
                            var n = this.right.leafAppend(t);
                            if (n) return new e(this.left, n);
                        }),
                        (e.prototype.leafPrepend = function (t) {
                            var n = this.left.leafPrepend(t);
                            if (n) return new e(n, this.right);
                        }),
                        (e.prototype.appendInner = function (t) {
                            return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t);
                        }),
                        e
                    );
                })(i),
                a = n(94536),
                l = n(17213);
            class c {
                constructor(t, e) {
                    (this.items = t), (this.eventCount = e);
                }
                popEvent(t, e) {
                    let n, r, i, o;
                    if (0 == this.eventCount) return null;
                    let s = this.items.length;
                    for (; ; s--)
                        if (this.items.get(s - 1).selection) {
                            --s;
                            break;
                        }
                    e && (r = (n = this.remapping(s, this.items.length)).maps.length);
                    let a = t.tr,
                        l = [],
                        h = [];
                    return (
                        this.items.forEach(
                            (t, e) => {
                                if (!t.step) {
                                    n || (r = (n = this.remapping(s, e + 1)).maps.length), r--, h.push(t);
                                    return;
                                }
                                if (n) {
                                    h.push(new u(t.map));
                                    let e = t.step.map(n.slice(r)),
                                        i;
                                    e && a.maybeStep(e).doc && ((i = a.mapping.maps[a.mapping.maps.length - 1]), l.push(new u(i, void 0, void 0, l.length + h.length))), r--, i && n.appendMap(i, r);
                                } else a.maybeStep(t.step);
                                if (t.selection) return (i = n ? t.selection.map(n.slice(r)) : t.selection), (o = new c(this.items.slice(0, s).append(h.reverse().concat(l)), this.eventCount - 1)), !1;
                            },
                            this.items.length,
                            0
                        ),
                        { remaining: o, transform: a, selection: i }
                    );
                }
                addTransform(t, e, n, r) {
                    var i, o;
                    let s,
                        a = [],
                        l = this.eventCount,
                        h = this.items,
                        p = !r && h.length ? h.get(h.length - 1) : null;
                    for (let n = 0; n < t.steps.length; n++) {
                        let i = t.steps[n].invert(t.docs[n]),
                            o = new u(t.mapping.maps[n], i, e),
                            s;
                        (s = p && p.merge(o)) && ((o = s), n ? a.pop() : (h = h.slice(0, h.length - 1))), a.push(o), e && (l++, (e = void 0)), r || (p = o);
                    }
                    let f = l - n.depth;
                    return (
                        f > d &&
                            ((i = h),
                            (o = f),
                            i.forEach((t, e) => {
                                if (t.selection && 0 == o--) return (s = e), !1;
                            }),
                            (h = i.slice(s)),
                            (l -= f)),
                        new c(h.append(a), l)
                    );
                }
                remapping(t, e) {
                    let n = new a.vs();
                    return (
                        this.items.forEach(
                            (e, r) => {
                                let i = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
                                n.appendMap(e.map, i);
                            },
                            t,
                            e
                        ),
                        n
                    );
                }
                addMaps(t) {
                    return 0 == this.eventCount ? this : new c(this.items.append(t.map(t => new u(t))), this.eventCount);
                }
                rebased(t, e) {
                    if (!this.eventCount) return this;
                    let n = [],
                        r = Math.max(0, this.items.length - e),
                        i = t.mapping,
                        o = t.steps.length,
                        s = this.eventCount;
                    this.items.forEach(t => {
                        t.selection && s--;
                    }, r);
                    let a = e;
                    this.items.forEach(e => {
                        let r = i.getMirror(--a);
                        if (null == r) return;
                        o = Math.min(o, r);
                        let l = i.maps[r];
                        if (e.step) {
                            let o = t.steps[r].invert(t.docs[r]),
                                c = e.selection && e.selection.map(i.slice(a + 1, r));
                            c && s++, n.push(new u(l, o, c));
                        } else n.push(new u(l));
                    }, r);
                    let l = [];
                    for (let t = e; t < o; t++) l.push(new u(i.maps[t]));
                    let h = new c(this.items.slice(0, r).append(l).append(n), s);
                    return h.emptyItemCount() > 500 && (h = h.compress(this.items.length - n.length)), h;
                }
                emptyItemCount() {
                    let t = 0;
                    return (
                        this.items.forEach(e => {
                            !e.step && t++;
                        }),
                        t
                    );
                }
                compress(t = this.items.length) {
                    let e = this.remapping(0, t),
                        n = e.maps.length,
                        r = [],
                        o = 0;
                    return (
                        this.items.forEach(
                            (i, s) => {
                                if (s >= t) r.push(i), i.selection && o++;
                                else if (i.step) {
                                    let t = i.step.map(e.slice(n)),
                                        s = t && t.getMap();
                                    if ((n--, s && e.appendMap(s, n), t)) {
                                        let a = i.selection && i.selection.map(e.slice(n));
                                        a && o++;
                                        let l = new u(s.invert(), t, a),
                                            c,
                                            h = r.length - 1;
                                        (c = r.length && r[h].merge(l)) ? (r[h] = c) : r.push(l);
                                    }
                                } else i.map && n--;
                            },
                            this.items.length,
                            0
                        ),
                        new c(i.from(r.reverse()), o)
                    );
                }
            }
            c.empty = new c(i.empty, 0);
            class u {
                constructor(t, e, n, r) {
                    (this.map = t), (this.step = e), (this.selection = n), (this.mirrorOffset = r);
                }
                merge(t) {
                    if (this.step && t.step && !t.selection) {
                        let e = t.step.merge(this.step);
                        if (e) return new u(e.getMap().invert(), e, this.selection);
                    }
                }
            }
            class h {
                constructor(t, e, n, r, i) {
                    (this.done = t), (this.undone = e), (this.prevRanges = n), (this.prevTime = r), (this.prevComposition = i);
                }
            }
            let d = 20;
            function p(t) {
                let e = [];
                return t.forEach((t, n, r, i) => e.push(r, i)), e;
            }
            function f(t, e) {
                if (!t) return null;
                let n = [];
                for (let r = 0; r < t.length; r += 2) {
                    let i = e.map(t[r], 1),
                        o = e.map(t[r + 1], -1);
                    i <= o && n.push(i, o);
                }
                return n;
            }
            function m(t, e, n, r) {
                let i = v(e),
                    o = b.get(e).spec.config,
                    s = (r ? t.undone : t.done).popEvent(e, i);
                if (!s) return;
                let a = s.selection.resolve(s.transform.doc),
                    l = (r ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), o, i),
                    c = new h(r ? l : s.remaining, r ? s.remaining : l, null, 0, -1);
                n(s.transform.setSelection(a).setMeta(b, { redo: r, historyState: c }).scrollIntoView());
            }
            let g = !1,
                y = null;
            function v(t) {
                let e = t.plugins;
                if (y != e) {
                    (g = !1), (y = e);
                    for (let t = 0; t < e.length; t++)
                        if (e[t].spec.historyPreserveItems) {
                            g = !0;
                            break;
                        }
                }
                return g;
            }
            let b = new l.H$("history"),
                w = new l.H$("closeHistory"),
                x = (t, e) => {
                    let n = b.getState(t);
                    return !!n && 0 != n.done.eventCount && (e && m(n, t, e, !1), !0);
                },
                S = (t, e) => {
                    let n = b.getState(t);
                    return !!n && 0 != n.undone.eventCount && (e && m(n, t, e, !0), !0);
                },
                k = r.hj.create({
                    name: "history",
                    addOptions: () => ({ depth: 100, newGroupDelay: 500 }),
                    addCommands: () => ({
                        undo:
                            () =>
                            ({ state: t, dispatch: e }) =>
                                x(t, e),
                        redo:
                            () =>
                            ({ state: t, dispatch: e }) =>
                                S(t, e),
                    }),
                    addProseMirrorPlugins() {
                        return [
                            (function (t = {}) {
                                return (
                                    (t = { depth: t.depth || 100, newGroupDelay: t.newGroupDelay || 500 }),
                                    new l.Sy({
                                        key: b,
                                        state: {
                                            init: () => new h(c.empty, c.empty, null, 0, -1),
                                            apply: (e, n, r) =>
                                                (function (t, e, n, r) {
                                                    let i = n.getMeta(b),
                                                        o;
                                                    if (i) return i.historyState;
                                                    n.getMeta(w) && (t = new h(t.done, t.undone, null, 0, -1));
                                                    let s = n.getMeta("appendedTransaction");
                                                    if (0 == n.steps.length) return t;
                                                    if (s && s.getMeta(b))
                                                        return s.getMeta(b).redo
                                                            ? new h(t.done.addTransform(n, void 0, r, v(e)), t.undone, p(n.mapping.maps[n.steps.length - 1]), t.prevTime, t.prevComposition)
                                                            : new h(t.done, t.undone.addTransform(n, void 0, r, v(e)), null, t.prevTime, t.prevComposition);
                                                    if (!1 === n.getMeta("addToHistory") || (s && !1 === s.getMeta("addToHistory")))
                                                        return (o = n.getMeta("rebased"))
                                                            ? new h(t.done.rebased(n, o), t.undone.rebased(n, o), f(t.prevRanges, n.mapping), t.prevTime, t.prevComposition)
                                                            : new h(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), f(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
                                                    {
                                                        let i = n.getMeta("composition"),
                                                            o =
                                                                0 == t.prevTime ||
                                                                (!s &&
                                                                    t.prevComposition != i &&
                                                                    (t.prevTime < (n.time || 0) - r.newGroupDelay ||
                                                                        !(function (t, e) {
                                                                            if (!e) return !1;
                                                                            if (!t.docChanged) return !0;
                                                                            let n = !1;
                                                                            return (
                                                                                t.mapping.maps[0].forEach((t, r) => {
                                                                                    for (let i = 0; i < e.length; i += 2) t <= e[i + 1] && r >= e[i] && (n = !0);
                                                                                }),
                                                                                n
                                                                            );
                                                                        })(n, t.prevRanges))),
                                                            a = s ? f(t.prevRanges, n.mapping) : p(n.mapping.maps[n.steps.length - 1]);
                                                        return new h(t.done.addTransform(n, o ? e.selection.getBookmark() : void 0, r, v(e)), c.empty, a, n.time, null == i ? t.prevComposition : i);
                                                    }
                                                })(n, r, e, t),
                                        },
                                        config: t,
                                        props: {
                                            handleDOMEvents: {
                                                beforeinput(t, e) {
                                                    let n = e.inputType,
                                                        r = "historyUndo" == n ? x : "historyRedo" == n ? S : null;
                                                    return !!r && (e.preventDefault(), r(t.state, t.dispatch));
                                                },
                                            },
                                        },
                                    })
                                );
                            })(this.options),
                        ];
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-z": () => this.editor.commands.undo(),
                            "Shift-Mod-z": () => this.editor.commands.redo(),
                            "Mod-y": () => this.editor.commands.redo(),
                            "Mod-я": () => this.editor.commands.undo(),
                            "Shift-Mod-я": () => this.editor.commands.redo(),
                        };
                    },
                });
        },
        68096: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return l;
                },
            });
            var r = n(94725);
            let i = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
                o = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,
                s = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,
                a = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,
                l = r.vc.create({
                    name: "italic",
                    addOptions: () => ({ HTMLAttributes: {} }),
                    parseHTML: () => [{ tag: "em" }, { tag: "i", getAttrs: t => "normal" !== t.style.fontStyle && null }, { style: "font-style=italic" }],
                    renderHTML({ HTMLAttributes: t }) {
                        return ["em", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                    },
                    addCommands() {
                        return {
                            setItalic:
                                () =>
                                ({ commands: t }) =>
                                    t.setMark(this.name),
                            toggleItalic:
                                () =>
                                ({ commands: t }) =>
                                    t.toggleMark(this.name),
                            unsetItalic:
                                () =>
                                ({ commands: t }) =>
                                    t.unsetMark(this.name),
                        };
                    },
                    addKeyboardShortcuts() {
                        return { "Mod-i": () => this.editor.commands.toggleItalic(), "Mod-I": () => this.editor.commands.toggleItalic() };
                    },
                    addInputRules() {
                        return [(0, r.Cf)({ find: i, type: this.type }), (0, r.Cf)({ find: s, type: this.type })];
                    },
                    addPasteRules() {
                        return [(0, r.K9)({ find: o, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
                    },
                });
        },
        85816: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            var r = n(94725);
            let i = r.NB.create({
                name: "paragraph",
                priority: 1e3,
                addOptions: () => ({ HTMLAttributes: {} }),
                group: "block",
                content: "inline*",
                parseHTML: () => [{ tag: "p" }],
                renderHTML({ HTMLAttributes: t }) {
                    return ["p", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                },
                addCommands() {
                    return {
                        setParagraph:
                            () =>
                            ({ commands: t }) =>
                                t.setNode(this.name),
                    };
                },
                addKeyboardShortcuts() {
                    return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
                },
            });
        },
        72673: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return s;
                },
            });
            var r = n(94725);
            let i = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,
                o = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,
                s = r.vc.create({
                    name: "strike",
                    addOptions: () => ({ HTMLAttributes: {} }),
                    parseHTML: () => [{ tag: "s" }, { tag: "del" }, { tag: "strike" }, { style: "text-decoration", consuming: !1, getAttrs: t => !!t.includes("line-through") && {} }],
                    renderHTML({ HTMLAttributes: t }) {
                        return ["s", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                    },
                    addCommands() {
                        return {
                            setStrike:
                                () =>
                                ({ commands: t }) =>
                                    t.setMark(this.name),
                            toggleStrike:
                                () =>
                                ({ commands: t }) =>
                                    t.toggleMark(this.name),
                            unsetStrike:
                                () =>
                                ({ commands: t }) =>
                                    t.unsetMark(this.name),
                        };
                    },
                    addKeyboardShortcuts() {
                        let t = {};
                        return (0, r.eE)() ? (t["Mod-Shift-s"] = () => this.editor.commands.toggleStrike()) : (t["Ctrl-Shift-s"] = () => this.editor.commands.toggleStrike()), t;
                    },
                    addInputRules() {
                        return [(0, r.Cf)({ find: i, type: this.type })];
                    },
                    addPasteRules() {
                        return [(0, r.K9)({ find: o, type: this.type })];
                    },
                });
        },
        65318: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = n(94725).hj.create({
                name: "textAlign",
                addOptions: () => ({ types: [], alignments: ["left", "center", "right", "justify"], defaultAlignment: "left" }),
                addGlobalAttributes() {
                    return [
                        {
                            types: this.options.types,
                            attributes: {
                                textAlign: {
                                    default: this.options.defaultAlignment,
                                    parseHTML: t => t.style.textAlign || this.options.defaultAlignment,
                                    renderHTML: t => (t.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${t.textAlign}` }),
                                },
                            },
                        },
                    ];
                },
                addCommands() {
                    return {
                        setTextAlign:
                            t =>
                            ({ commands: e }) =>
                                !!this.options.alignments.includes(t) && this.options.types.every(n => e.updateAttributes(n, { textAlign: t })),
                        unsetTextAlign:
                            () =>
                            ({ commands: t }) =>
                                this.options.types.every(e => t.resetAttributes(e, "textAlign")),
                    };
                },
                addKeyboardShortcuts() {
                    return {
                        "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
                        "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
                        "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
                        "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify"),
                    };
                },
            });
        },
        13694: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            var r = n(94725);
            let i = r.vc.create({
                name: "textStyle",
                addOptions: () => ({ HTMLAttributes: {} }),
                parseHTML: () => [{ tag: "span", getAttrs: t => !!t.hasAttribute("style") && {} }],
                renderHTML({ HTMLAttributes: t }) {
                    return ["span", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                },
                addCommands() {
                    return {
                        removeEmptyTextStyle:
                            () =>
                            ({ state: t, commands: e }) =>
                                !!Object.entries((0, r.Jo)(t, this.type)).some(([, t]) => !!t) || e.unsetMark(this.name),
                    };
                },
            });
        },
        95380: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r;
                },
            });
            let r = n(94725).NB.create({ name: "text", group: "inline" });
        },
        78234: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            var r = n(94725);
            let i = r.vc.create({
                name: "underline",
                addOptions: () => ({ HTMLAttributes: {} }),
                parseHTML: () => [{ tag: "u" }, { style: "text-decoration", consuming: !1, getAttrs: t => !!t.includes("underline") && {} }],
                renderHTML({ HTMLAttributes: t }) {
                    return ["u", (0, r.P1)(this.options.HTMLAttributes, t), 0];
                },
                addCommands() {
                    return {
                        setUnderline:
                            () =>
                            ({ commands: t }) =>
                                t.setMark(this.name),
                        toggleUnderline:
                            () =>
                            ({ commands: t }) =>
                                t.toggleMark(this.name),
                        unsetUnderline:
                            () =>
                            ({ commands: t }) =>
                                t.unsetMark(this.name),
                    };
                },
                addKeyboardShortcuts() {
                    return { "Mod-u": () => this.editor.commands.toggleUnderline(), "Mod-U": () => this.editor.commands.toggleUnderline() };
                },
            });
        },
        5015: function (t, e, n) {
            "use strict";
            n.d(e, {
                jE: function () {
                    return d;
                },
                kg: function () {
                    return u;
                },
            });
            var r = n(2265),
                i = n(54887),
                o = n(94725);
            let s =
                    (...t) =>
                    e => {
                        t.forEach(t => {
                            "function" == typeof t ? t(e) : t && (t.current = e);
                        });
                    },
                a = ({ renderers: t }) =>
                    r.createElement(
                        r.Fragment,
                        null,
                        Object.entries(t).map(([t, e]) => i.createPortal(e.reactElement, e.element, t))
                    );
            class l extends r.Component {
                constructor(t) {
                    super(t), (this.editorContentRef = r.createRef()), (this.initialized = !1), (this.state = { renderers: {} });
                }
                componentDidMount() {
                    this.init();
                }
                componentDidUpdate() {
                    this.init();
                }
                init() {
                    let { editor: t } = this.props;
                    if (t && t.options.element) {
                        if (t.contentComponent) return;
                        let e = this.editorContentRef.current;
                        e.append(...t.options.element.childNodes), t.setOptions({ element: e }), (t.contentComponent = this), t.createNodeViews(), (this.initialized = !0);
                    }
                }
                maybeFlushSync(t) {
                    this.initialized ? (0, i.flushSync)(t) : t();
                }
                setRenderer(t, e) {
                    this.maybeFlushSync(() => {
                        this.setState(({ renderers: n }) => ({ renderers: { ...n, [t]: e } }));
                    });
                }
                removeRenderer(t) {
                    this.maybeFlushSync(() => {
                        this.setState(({ renderers: e }) => {
                            let n = { ...e };
                            return delete n[t], { renderers: n };
                        });
                    });
                }
                componentWillUnmount() {
                    let { editor: t } = this.props;
                    if (!t || ((this.initialized = !1), t.isDestroyed || t.view.setProps({ nodeViews: {} }), (t.contentComponent = null), !t.options.element.firstChild)) return;
                    let e = document.createElement("div");
                    e.append(...t.options.element.childNodes), t.setOptions({ element: e });
                }
                render() {
                    let { editor: t, innerRef: e, ...n } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement("div", { ref: s(e, this.editorContentRef), ...n }), r.createElement(a, { renderers: this.state.renderers }));
                }
            }
            let c = (0, r.forwardRef)((t, e) => {
                    let n = r.useMemo(() => Math.floor(4294967295 * Math.random()).toString(), [t.editor]);
                    return r.createElement(l, { key: n, innerRef: e, ...t });
                }),
                u = r.memo(c);
            class h extends o.ML {
                constructor() {
                    super(...arguments), (this.contentComponent = null);
                }
            }
            let d = (t = {}, e = []) => {
                let n = (0, r.useRef)(null),
                    [, i] = (0, r.useState)({}),
                    { onBeforeCreate: o, onBlur: s, onCreate: a, onDestroy: l, onFocus: c, onSelectionUpdate: u, onTransaction: d, onUpdate: p } = t,
                    f = (0, r.useRef)(o),
                    m = (0, r.useRef)(s),
                    g = (0, r.useRef)(a),
                    y = (0, r.useRef)(l),
                    v = (0, r.useRef)(c),
                    b = (0, r.useRef)(u),
                    w = (0, r.useRef)(d),
                    x = (0, r.useRef)(p);
                return (
                    (0, r.useEffect)(() => {
                        n.current &&
                            (o && (n.current.off("beforeCreate", f.current), n.current.on("beforeCreate", o), (f.current = o)),
                            s && (n.current.off("blur", m.current), n.current.on("blur", s), (m.current = s)),
                            a && (n.current.off("create", g.current), n.current.on("create", a), (g.current = a)),
                            l && (n.current.off("destroy", y.current), n.current.on("destroy", l), (y.current = l)),
                            c && (n.current.off("focus", v.current), n.current.on("focus", c), (v.current = c)),
                            u && (n.current.off("selectionUpdate", b.current), n.current.on("selectionUpdate", u), (b.current = u)),
                            d && (n.current.off("transaction", w.current), n.current.on("transaction", d), (w.current = d)),
                            p && (n.current.off("update", x.current), n.current.on("update", p), (x.current = p)));
                    }, [o, s, a, l, c, u, d, p, n.current]),
                    (0, r.useEffect)(() => {
                        let e = !0;
                        return (
                            (n.current = new h(t)),
                            n.current.on("transaction", () => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e && i({});
                                    });
                                });
                            }),
                            () => {
                                e = !1;
                            }
                        );
                    }, e),
                    (0, r.useEffect)(
                        () => () => {
                            var t;
                            return null === (t = n.current) || void 0 === t ? void 0 : t.destroy();
                        },
                        []
                    ),
                    n.current
                );
            };
            (0, r.createContext)({ editor: null }).Consumer;
            let p = (0, r.createContext)({ onDragStart: void 0 }),
                f = () => (0, r.useContext)(p);
            r.forwardRef((t, e) => {
                let { onDragStart: n } = f(),
                    i = t.as || "div";
                return r.createElement(i, { ...t, ref: e, "data-node-view-wrapper": "", onDragStart: n, style: { whiteSpace: "normal", ...t.style } });
            });
        },
        8667: function (t, e, n) {
            "use strict";
            n.d(e, {
                $o: function () {
                    return u;
                },
                G1: function () {
                    return a;
                },
                QL: function () {
                    return f;
                },
                Re: function () {
                    return c;
                },
                VH: function () {
                    return d;
                },
                Wt: function () {
                    return l;
                },
                X5: function () {
                    return v;
                },
                YU: function () {
                    return r;
                },
                ZL: function () {
                    return i;
                },
                aM: function () {
                    return s;
                },
                gK: function () {
                    return m;
                },
                rR: function () {
                    return p;
                },
                tZ: function () {
                    return g;
                },
                vq: function () {
                    return y;
                },
                zX: function () {
                    return h;
                },
                zw: function () {
                    return o;
                },
            });
            let r = "generated",
                i = "pointerdown",
                o = "pointerup",
                s = "pointerleave",
                a = "pointerout",
                l = "pointermove",
                c = "touchstart",
                u = "touchend",
                h = "touchmove",
                d = "touchcancel",
                p = "resize",
                f = "visibilitychange",
                m = "tsParticles - Error",
                g = 100,
                y = 0.5,
                v = 1e3;
        },
        2579: function (t, e, n) {
            "use strict";
            n.d(e, {
                Ae: function () {
                    return s;
                },
                Cd: function () {
                    return o;
                },
            });
            var r = n(57242);
            class i {
                constructor(t, e, n) {
                    (this.position = { x: t, y: e }), (this.type = n);
                }
            }
            class o extends i {
                constructor(t, e, n) {
                    super(t, e, "circle"), (this.radius = n);
                }
                contains(t) {
                    return (0, r.Sp)(t, this.position) <= this.radius;
                }
                intersects(t) {
                    let e = this.position,
                        n = t.position,
                        r = { x: Math.abs(n.x - e.x), y: Math.abs(n.y - e.y) },
                        i = this.radius;
                    if (t instanceof o || "circle" === t.type) return i + t.radius > Math.sqrt(r.x ** 2 + r.y ** 2);
                    if (t instanceof s || "rectangle" === t.type) {
                        let { width: e, height: n } = t.size;
                        return Math.pow(r.x - e, 2) + Math.pow(r.y - n, 2) <= i ** 2 || (r.x <= i + e && r.y <= i + n) || r.x <= e || r.y <= n;
                    }
                    return !1;
                }
            }
            class s extends i {
                constructor(t, e, n, r) {
                    super(t, e, "rectangle"), (this.size = { height: r, width: n });
                }
                contains(t) {
                    let e = this.size.width,
                        n = this.size.height,
                        r = this.position;
                    return t.x >= r.x && t.x <= r.x + e && t.y >= r.y && t.y <= r.y + n;
                }
                intersects(t) {
                    if (t instanceof o) return t.intersects(this);
                    let e = this.size.width,
                        n = this.size.height,
                        r = this.position,
                        i = t.position,
                        a = t instanceof s ? t.size : { width: 0, height: 0 },
                        l = a.width,
                        c = a.height;
                    return i.x < r.x + e && i.x + l > r.x && i.y < r.y + n && i.y + c > r.y;
                }
            }
        },
        96860: function (t, e, n) {
            "use strict";
            n.d(e, {
                O: function () {
                    return a;
                },
                U: function () {
                    return s;
                },
            });
            var r = n(8667),
                i = n(21717);
            let o = { x: 0, y: 0, z: 0 };
            class s {
                constructor(t, e, n) {
                    if (
                        ((this._updateFromAngle = (t, e) => {
                            (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
                        }),
                        !(0, i.hj)(t) && t)
                    )
                        (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : o.z);
                    else if (void 0 !== t && void 0 !== e) (this.x = t), (this.y = e), (this.z = n ?? o.z);
                    else throw Error(`${r.gK} Vector3d not initialized correctly`);
                }
                static get origin() {
                    return s.create(o.x, o.y, o.z);
                }
                get angle() {
                    return Math.atan2(this.y, this.x);
                }
                set angle(t) {
                    this._updateFromAngle(t, this.length);
                }
                get length() {
                    return Math.sqrt(this.getLengthSq());
                }
                set length(t) {
                    this._updateFromAngle(this.angle, t);
                }
                static clone(t) {
                    return s.create(t.x, t.y, t.z);
                }
                static create(t, e, n) {
                    return new s(t, e, n);
                }
                add(t) {
                    return s.create(this.x + t.x, this.y + t.y, this.z + t.z);
                }
                addTo(t) {
                    (this.x += t.x), (this.y += t.y), (this.z += t.z);
                }
                copy() {
                    return s.clone(this);
                }
                distanceTo(t) {
                    return this.sub(t).length;
                }
                distanceToSq(t) {
                    return this.sub(t).getLengthSq();
                }
                div(t) {
                    return s.create(this.x / t, this.y / t, this.z / t);
                }
                divTo(t) {
                    (this.x /= t), (this.y /= t), (this.z /= t);
                }
                getLengthSq() {
                    return this.x ** 2 + this.y ** 2;
                }
                mult(t) {
                    return s.create(this.x * t, this.y * t, this.z * t);
                }
                multTo(t) {
                    (this.x *= t), (this.y *= t), (this.z *= t);
                }
                normalize() {
                    let t = this.length;
                    0 != t && this.multTo(1 / t);
                }
                rotate(t) {
                    return s.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), o.z);
                }
                setTo(t) {
                    (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : o.z);
                }
                sub(t) {
                    return s.create(this.x - t.x, this.y - t.y, this.z - t.z);
                }
                subFrom(t) {
                    (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
                }
            }
            class a extends s {
                constructor(t, e) {
                    super(t, e, o.z);
                }
                static get origin() {
                    return a.create(o.x, o.y);
                }
                static clone(t) {
                    return a.create(t.x, t.y);
                }
                static create(t, e) {
                    return new a(t, e);
                }
            }
        },
        48395: function (t, e, n) {
            "use strict";
            n.d(e, {
                R: function () {
                    return s;
                },
            });
            var r = n(21717),
                i = n(56894),
                o = n(3921);
            class s extends o.O {
                constructor() {
                    super(), (this.animation = new i.h());
                }
                static create(t, e) {
                    let n = new s();
                    return n.load(t), void 0 !== e && ((0, r.HD)(e) || (0, r.kJ)(e) ? n.load({ value: e }) : n.load(e)), n;
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation));
                }
            }
        },
        70737: function (t, e, n) {
            "use strict";
            n.d(e, {
                B: function () {
                    return o;
                },
                P: function () {
                    return i;
                },
            });
            var r = n(57242);
            class i {
                constructor() {
                    (this.count = 0), (this.enable = !1), (this.speed = 1), (this.decay = 0), (this.delay = 0), (this.sync = !1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.count && (this.count = (0, r.Cs)(t.count)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.speed && (this.speed = (0, r.Cs)(t.speed)),
                        void 0 !== t.decay && (this.decay = (0, r.Cs)(t.decay)),
                        void 0 !== t.delay && (this.delay = (0, r.Cs)(t.delay)),
                        void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class o extends i {
                constructor() {
                    super(), (this.mode = "auto"), (this.startValue = "random");
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.startValue && (this.startValue = t.startValue));
                }
            }
        },
        45946: function (t, e, n) {
            "use strict";
            n.d(e, {
                y: function () {
                    return o;
                },
            });
            var r = n(70737),
                i = n(57242);
            class o extends r.P {
                constructor() {
                    super(), (this.offset = 0), (this.sync = !0);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.offset && (this.offset = (0, i.Cs)(t.offset));
                }
            }
        },
        56894: function (t, e, n) {
            "use strict";
            n.d(e, {
                h: function () {
                    return i;
                },
            });
            var r = n(45946);
            class i {
                constructor() {
                    (this.h = new r.y()), (this.s = new r.y()), (this.l = new r.y());
                }
                load(t) {
                    t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
                }
            }
        },
        99533: function (t, e, n) {
            "use strict";
            n.d(e, {
                z: function () {
                    return c;
                },
            });
            class r {
                constructor() {
                    (this.enable = !1), (this.mode = []);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode));
                }
            }
            class i {
                constructor() {
                    (this.selectors = []), (this.enable = !1), (this.mode = []), (this.type = "circle");
                }
                load(t) {
                    t &&
                        (void 0 !== t.selectors && (this.selectors = t.selectors),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.mode && (this.mode = t.mode),
                        void 0 !== t.type && (this.type = t.type));
                }
            }
            class o {
                constructor() {
                    (this.enable = !1), (this.force = 2), (this.smooth = 10);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth));
                }
            }
            class s {
                constructor() {
                    (this.enable = !1), (this.mode = []), (this.parallax = new o());
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax));
                }
            }
            class a {
                constructor() {
                    (this.delay = 0.5), (this.enable = !0);
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable));
                }
            }
            var l = n(96066);
            class c {
                constructor() {
                    (this.onClick = new r()), (this.onDiv = new i()), (this.onHover = new s()), (this.resize = new a());
                }
                load(t) {
                    if (!t) return;
                    this.onClick.load(t.onClick);
                    let e = t.onDiv;
                    void 0 !== e &&
                        (this.onDiv = (0, l.KH)(e, t => {
                            let e = new i();
                            return e.load(t), e;
                        })),
                        this.onHover.load(t.onHover),
                        this.resize.load(t.resize);
                }
            }
        },
        20353: function (t, e, n) {
            "use strict";
            n.d(e, {
                o: function () {
                    return o;
                },
            });
            var r = n(99533);
            class i {
                constructor(t, e) {
                    (this._engine = t), (this._container = e);
                }
                load(t) {
                    if (!t || !this._container) return;
                    let e = this._engine.interactors.get(this._container);
                    if (e) for (let n of e) n.loadModeOptions && n.loadModeOptions(this, t);
                }
            }
            class o {
                constructor(t, e) {
                    (this.detectsOn = "window"), (this.events = new r.z()), (this.modes = new i(t, e));
                }
                load(t) {
                    if (!t) return;
                    let e = t.detectsOn;
                    void 0 !== e && (this.detectsOn = e), this.events.load(t.events), this.modes.load(t.modes);
                }
            }
        },
        347: function (t, e, n) {
            "use strict";
            n.d(e, {
                h: function () {
                    return i;
                },
            });
            var r = n(96066);
            class i {
                load(t) {
                    t && (t.position && (this.position = { x: t.position.x ?? 50, y: t.position.y ?? 50, mode: t.position.mode ?? "percent" }), t.options && (this.options = (0, r.ZB)({}, t.options)));
                }
            }
        },
        43942: function (t, e, n) {
            "use strict";
            n.d(e, {
                E: function () {
                    return g;
                },
            });
            var r = n(96066),
                i = n(3921);
            class o {
                constructor() {
                    (this.color = new i.O()), (this.color.value = ""), (this.image = ""), (this.position = ""), (this.repeat = ""), (this.size = ""), (this.opacity = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = i.O.create(this.color, t.color)),
                        void 0 !== t.image && (this.image = t.image),
                        void 0 !== t.position && (this.position = t.position),
                        void 0 !== t.repeat && (this.repeat = t.repeat),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class s {
                constructor() {
                    this.opacity = 1;
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = i.O.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            var a = n(21717);
            class l {
                constructor() {
                    (this.composite = "destination-out"), (this.cover = new s()), (this.enable = !1);
                }
                load(t) {
                    if (t) {
                        if ((void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover)) {
                            let e = t.cover,
                                n = (0, a.HD)(t.cover) ? { color: t.cover } : t.cover;
                            this.cover.load(void 0 !== e.color || void 0 !== e.image ? e : { color: n });
                        }
                        void 0 !== t.enable && (this.enable = t.enable);
                    }
                }
            }
            class c {
                constructor() {
                    (this.enable = !0), (this.zIndex = 0);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex));
                }
            }
            var u = n(20353),
                h = n(347),
                d = n(41005),
                p = n(44087),
                f = n(295),
                m = n(57242);
            class g {
                constructor(t, e) {
                    (this._findDefaultTheme = t => this.themes.find(e => e.default.value && e.default.mode === t) ?? this.themes.find(t => t.default.value && "any" === t.default.mode)),
                        (this._importPreset = t => {
                            this.load(this._engine.getPreset(t));
                        }),
                        (this._engine = t),
                        (this._container = e),
                        (this.autoPlay = !0),
                        (this.background = new o()),
                        (this.backgroundMask = new l()),
                        (this.clear = !0),
                        (this.defaultThemes = {}),
                        (this.delay = 0),
                        (this.fullScreen = new c()),
                        (this.detectRetina = !0),
                        (this.duration = 0),
                        (this.fpsLimit = 120),
                        (this.interactivity = new u.o(t, e)),
                        (this.manualParticles = []),
                        (this.particles = (0, f.x)(this._engine, this._container)),
                        (this.pauseOnBlur = !0),
                        (this.pauseOnOutsideViewport = !0),
                        (this.responsive = []),
                        (this.smooth = !1),
                        (this.style = {}),
                        (this.themes = []),
                        (this.zLayers = 100);
                }
                load(t) {
                    if (!t) return;
                    void 0 !== t.preset && (0, r.KH)(t.preset, t => this._importPreset(t)),
                        void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
                        void 0 !== t.clear && (this.clear = t.clear),
                        void 0 !== t.key && (this.key = t.key),
                        void 0 !== t.name && (this.name = t.name),
                        void 0 !== t.delay && (this.delay = (0, m.Cs)(t.delay));
                    let e = t.detectRetina;
                    void 0 !== e && (this.detectRetina = e), void 0 !== t.duration && (this.duration = (0, m.Cs)(t.duration));
                    let n = t.fpsLimit;
                    void 0 !== n && (this.fpsLimit = n),
                        void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
                        void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
                        void 0 !== t.zLayers && (this.zLayers = t.zLayers),
                        this.background.load(t.background);
                    let i = t.fullScreen;
                    (0, a.jn)(i) ? (this.fullScreen.enable = i) : this.fullScreen.load(i),
                        this.backgroundMask.load(t.backgroundMask),
                        this.interactivity.load(t.interactivity),
                        t.manualParticles &&
                            (this.manualParticles = t.manualParticles.map(t => {
                                let e = new h.h();
                                return e.load(t), e;
                            })),
                        this.particles.load(t.particles),
                        (this.style = (0, r.ZB)(this.style, t.style)),
                        this._engine.loadOptions(this, t),
                        void 0 !== t.smooth && (this.smooth = t.smooth);
                    let o = this._engine.interactors.get(this._container);
                    if (o) for (let e of o) e.loadOptions && e.loadOptions(this, t);
                    if (void 0 !== t.responsive)
                        for (let e of t.responsive) {
                            let t = new d.E();
                            t.load(e), this.responsive.push(t);
                        }
                    if ((this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes))
                        for (let e of t.themes) {
                            let t = this.themes.find(t => t.name === e.name);
                            if (t) t.load(e);
                            else {
                                let t = new p.Q();
                                t.load(e), this.themes.push(t);
                            }
                        }
                    (this.defaultThemes.dark = this._findDefaultTheme("dark")?.name), (this.defaultThemes.light = this._findDefaultTheme("light")?.name);
                }
                setResponsive(t, e, n) {
                    this.load(n);
                    let r = this.responsive.find(n => ("screen" === n.mode && screen ? n.maxWidth > screen.availWidth : n.maxWidth * e > t));
                    return this.load(r?.options), r?.maxWidth;
                }
                setTheme(t) {
                    if (t) {
                        let e = this.themes.find(e => e.name === t);
                        e && this.load(e.options);
                    } else {
                        let t = (0, r.HY)("(prefers-color-scheme: dark)"),
                            e = t && t.matches,
                            n = this._findDefaultTheme(e ? "dark" : "light");
                        n && this.load(n.options);
                    }
                }
            }
        },
        3921: function (t, e, n) {
            "use strict";
            n.d(e, {
                O: function () {
                    return i;
                },
            });
            var r = n(21717);
            class i {
                constructor() {
                    this.value = "";
                }
                static create(t, e) {
                    let n = new i();
                    return n.load(t), void 0 !== e && ((0, r.HD)(e) || (0, r.kJ)(e) ? n.load({ value: e }) : n.load(e)), n;
                }
                load(t) {
                    t?.value !== void 0 && (this.value = t.value);
                }
            }
        },
        97805: function (t, e, n) {
            "use strict";
            n.d(e, {
                b: function () {
                    return i;
                },
            });
            var r = n(22584);
            class i {
                constructor() {
                    (this.horizontal = new r.u()), (this.vertical = new r.u());
                }
                load(t) {
                    t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
                }
            }
        },
        22584: function (t, e, n) {
            "use strict";
            n.d(e, {
                u: function () {
                    return i;
                },
            });
            var r = n(69621);
            class i extends r.SW {
                constructor() {
                    super(), (this.value = 1);
                }
            }
        },
        92164: function (t, e, n) {
            "use strict";
            n.d(e, {
                y: function () {
                    return a;
                },
            });
            class r {
                constructor() {
                    this.speed = 2;
                }
                load(t) {
                    t && void 0 !== t.speed && (this.speed = t.speed);
                }
            }
            class i {
                constructor() {
                    (this.enable = !0), (this.retries = 0);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries));
                }
            }
            var o = n(97805),
                s = n(57242);
            class a {
                constructor() {
                    (this.absorb = new r()), (this.bounce = new o.b()), (this.enable = !1), (this.maxSpeed = 50), (this.mode = "bounce"), (this.overlap = new i());
                }
                load(t) {
                    t &&
                        (this.absorb.load(t.absorb),
                        this.bounce.load(t.bounce),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.maxSpeed && (this.maxSpeed = (0, s.Cs)(t.maxSpeed)),
                        void 0 !== t.mode && (this.mode = t.mode),
                        this.overlap.load(t.overlap));
                }
            }
        },
        62693: function (t, e, n) {
            "use strict";
            n.d(e, {
                A: function () {
                    return m;
                },
            });
            var r = n(21717),
                i = n(94254),
                o = n(87918);
            class s {
                constructor() {
                    (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
                }
                load(t) {
                    t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius));
                }
            }
            var a = n(34900),
                l = n(64815),
                c = n(3921);
            class u {
                load(t) {
                    t && (void 0 !== t.color && (this.color = c.O.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image));
                }
            }
            class h {
                constructor() {
                    (this.enable = !1), (this.length = 10), (this.fill = new u());
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.fill && this.fill.load(t.fill), void 0 !== t.length && (this.length = t.length));
                }
            }
            class d {
                constructor() {
                    this.default = "out";
                }
                load(t) {
                    t &&
                        (void 0 !== t.default && (this.default = t.default),
                        (this.bottom = t.bottom ?? t.default),
                        (this.left = t.left ?? t.default),
                        (this.right = t.right ?? t.default),
                        (this.top = t.top ?? t.default));
                }
            }
            var p = n(42149),
                f = n(57242);
            class m {
                constructor() {
                    (this.angle = new i.k()),
                        (this.attract = new o.k()),
                        (this.center = new s()),
                        (this.decay = 0),
                        (this.distance = {}),
                        (this.direction = "none"),
                        (this.drift = 0),
                        (this.enable = !1),
                        (this.gravity = new a.S()),
                        (this.path = new l.C()),
                        (this.outModes = new d()),
                        (this.random = !1),
                        (this.size = !1),
                        (this.speed = 2),
                        (this.spin = new p.y()),
                        (this.straight = !1),
                        (this.trail = new h()),
                        (this.vibrate = !1),
                        (this.warp = !1);
                }
                load(t) {
                    if (!t) return;
                    this.angle.load((0, r.hj)(t.angle) ? { value: t.angle } : t.angle),
                        this.attract.load(t.attract),
                        this.center.load(t.center),
                        void 0 !== t.decay && (this.decay = (0, f.Cs)(t.decay)),
                        void 0 !== t.direction && (this.direction = t.direction),
                        void 0 !== t.distance && (this.distance = (0, r.hj)(t.distance) ? { horizontal: t.distance, vertical: t.distance } : { ...t.distance }),
                        void 0 !== t.drift && (this.drift = (0, f.Cs)(t.drift)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        this.gravity.load(t.gravity);
                    let e = t.outModes;
                    void 0 !== e && ((0, r.Kn)(e) ? this.outModes.load(e) : this.outModes.load({ default: e })),
                        this.path.load(t.path),
                        void 0 !== t.random && (this.random = t.random),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.speed && (this.speed = (0, f.Cs)(t.speed)),
                        this.spin.load(t.spin),
                        void 0 !== t.straight && (this.straight = t.straight),
                        this.trail.load(t.trail),
                        void 0 !== t.vibrate && (this.vibrate = t.vibrate),
                        void 0 !== t.warp && (this.warp = t.warp);
                }
            }
        },
        94254: function (t, e, n) {
            "use strict";
            n.d(e, {
                k: function () {
                    return i;
                },
            });
            var r = n(57242);
            class i {
                constructor() {
                    (this.offset = 0), (this.value = 90);
                }
                load(t) {
                    t && (void 0 !== t.offset && (this.offset = (0, r.Cs)(t.offset)), void 0 !== t.value && (this.value = (0, r.Cs)(t.value)));
                }
            }
        },
        87918: function (t, e, n) {
            "use strict";
            n.d(e, {
                k: function () {
                    return i;
                },
            });
            var r = n(57242);
            class i {
                constructor() {
                    (this.distance = 200), (this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
                }
                load(t) {
                    if (t && (void 0 !== t.distance && (this.distance = (0, r.Cs)(t.distance)), void 0 !== t.enable && (this.enable = t.enable), t.rotate)) {
                        let e = t.rotate.x;
                        void 0 !== e && (this.rotate.x = e);
                        let n = t.rotate.y;
                        void 0 !== n && (this.rotate.y = n);
                    }
                }
            }
        },
        34900: function (t, e, n) {
            "use strict";
            n.d(e, {
                S: function () {
                    return i;
                },
            });
            var r = n(57242);
            class i {
                constructor() {
                    (this.acceleration = 9.81), (this.enable = !1), (this.inverse = !1), (this.maxSpeed = 50);
                }
                load(t) {
                    t &&
                        (void 0 !== t.acceleration && (this.acceleration = (0, r.Cs)(t.acceleration)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.inverse && (this.inverse = t.inverse),
                        void 0 !== t.maxSpeed && (this.maxSpeed = (0, r.Cs)(t.maxSpeed)));
                }
            }
        },
        64815: function (t, e, n) {
            "use strict";
            n.d(e, {
                C: function () {
                    return o;
                },
            });
            var r = n(69621),
                i = n(96066);
            class o {
                constructor() {
                    (this.clamp = !0), (this.delay = new r.SW()), (this.enable = !1), (this.options = {});
                }
                load(t) {
                    t &&
                        (void 0 !== t.clamp && (this.clamp = t.clamp),
                        this.delay.load(t.delay),
                        void 0 !== t.enable && (this.enable = t.enable),
                        (this.generator = t.generator),
                        t.options && (this.options = (0, i.ZB)(this.options, t.options)));
                }
            }
        },
        42149: function (t, e, n) {
            "use strict";
            n.d(e, {
                y: function () {
                    return o;
                },
            });
            var r = n(96066),
                i = n(57242);
            class o {
                constructor() {
                    (this.acceleration = 0), (this.enable = !1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.acceleration && (this.acceleration = (0, i.Cs)(t.acceleration)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        t.position && (this.position = (0, r.ZB)({}, t.position)));
                }
            }
        },
        32798: function (t, e, n) {
            "use strict";
            n.d(e, {
                D: function () {
                    return o;
                },
            });
            var r = n(71133),
                i = n(69621);
            class o extends i.md {
                constructor() {
                    super(), (this.animation = new r.O()), (this.value = 1);
                }
                load(t) {
                    if (!t) return;
                    super.load(t);
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
        },
        71133: function (t, e, n) {
            "use strict";
            n.d(e, {
                O: function () {
                    return i;
                },
            });
            var r = n(70737);
            class i extends r.B {
                constructor() {
                    super(), (this.destroy = "none"), (this.speed = 2);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
                }
            }
        },
        88835: function (t, e, n) {
            "use strict";
            n.d(e, {
                B: function () {
                    return b;
                },
            });
            var r = n(96066),
                i = n(48395),
                o = n(92164);
            class s {
                constructor() {
                    (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = []);
                }
                load(t) {
                    if (!t) return;
                    let e = t.options;
                    if (void 0 !== e)
                        for (let t in e) {
                            let n = e[t];
                            n && (this.options[t] = (0, r.ZB)(this.options[t] ?? {}, n));
                        }
                    void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
                }
            }
            var a = n(62693),
                l = n(32798),
                c = n(97805);
            class u {
                constructor() {
                    (this.enable = !1), (this.width = 1920), (this.height = 1080);
                }
                load(t) {
                    if (!t) return;
                    void 0 !== t.enable && (this.enable = t.enable);
                    let e = t.width;
                    void 0 !== e && (this.width = e);
                    let n = t.height;
                    void 0 !== n && (this.height = n);
                }
            }
            class h {
                constructor() {
                    (this.mode = "delete"), (this.value = 0);
                }
                load(t) {
                    t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
                }
            }
            class d {
                constructor() {
                    (this.density = new u()), (this.limit = new h()), (this.value = 0);
                }
                load(t) {
                    t && (this.density.load(t.density), this.limit.load(t.limit), void 0 !== t.value && (this.value = t.value));
                }
            }
            var p = n(3921);
            class f {
                constructor() {
                    (this.blur = 0), (this.color = new p.O()), (this.enable = !1), (this.offset = { x: 0, y: 0 }), (this.color.value = "#000");
                }
                load(t) {
                    t &&
                        (void 0 !== t.blur && (this.blur = t.blur),
                        (this.color = p.O.create(this.color, t.color)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
                }
            }
            var m = n(49050),
                g = n(90919),
                y = n(19702),
                v = n(6824);
            class b {
                constructor(t, e) {
                    (this._engine = t),
                        (this._container = e),
                        (this.bounce = new c.b()),
                        (this.collisions = new o.y()),
                        (this.color = new i.R()),
                        (this.color.value = "#fff"),
                        (this.effect = new s()),
                        (this.groups = {}),
                        (this.move = new a.A()),
                        (this.number = new d()),
                        (this.opacity = new l.D()),
                        (this.reduceDuplicates = !1),
                        (this.shadow = new f()),
                        (this.shape = new m.b()),
                        (this.size = new g.$()),
                        (this.stroke = new y.m()),
                        (this.zIndex = new v.K());
                }
                load(t) {
                    if (!t) return;
                    if (void 0 !== t.groups)
                        for (let e of Object.keys(t.groups)) {
                            if (!Object.hasOwn(t.groups, e)) continue;
                            let n = t.groups[e];
                            void 0 !== n && (this.groups[e] = (0, r.ZB)(this.groups[e] ?? {}, n));
                        }
                    void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates),
                        this.bounce.load(t.bounce),
                        this.color.load(i.R.create(this.color, t.color)),
                        this.effect.load(t.effect),
                        this.move.load(t.move),
                        this.number.load(t.number),
                        this.opacity.load(t.opacity),
                        this.shape.load(t.shape),
                        this.size.load(t.size),
                        this.shadow.load(t.shadow),
                        this.zIndex.load(t.zIndex),
                        this.collisions.load(t.collisions),
                        void 0 !== t.interactivity && (this.interactivity = (0, r.ZB)({}, t.interactivity));
                    let e = t.stroke;
                    if (
                        (e &&
                            (this.stroke = (0, r.KH)(e, t => {
                                let e = new y.m();
                                return e.load(t), e;
                            })),
                        this._container)
                    ) {
                        let e = this._engine.updaters.get(this._container);
                        if (e) for (let n of e) n.loadOptions && n.loadOptions(this, t);
                        let n = this._engine.interactors.get(this._container);
                        if (n) for (let e of n) e.loadParticlesOptions && e.loadParticlesOptions(this, t);
                    }
                }
            }
        },
        49050: function (t, e, n) {
            "use strict";
            n.d(e, {
                b: function () {
                    return i;
                },
            });
            var r = n(96066);
            class i {
                constructor() {
                    (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = "circle");
                }
                load(t) {
                    if (!t) return;
                    let e = t.options;
                    if (void 0 !== e)
                        for (let t in e) {
                            let n = e[t];
                            n && (this.options[t] = (0, r.ZB)(this.options[t] ?? {}, n));
                        }
                    void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
                }
            }
        },
        90919: function (t, e, n) {
            "use strict";
            n.d(e, {
                $: function () {
                    return o;
                },
            });
            var r = n(69621),
                i = n(34392);
            class o extends r.md {
                constructor() {
                    super(), (this.animation = new i.a()), (this.value = 3);
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
        },
        34392: function (t, e, n) {
            "use strict";
            n.d(e, {
                a: function () {
                    return i;
                },
            });
            var r = n(70737);
            class i extends r.B {
                constructor() {
                    super(), (this.destroy = "none"), (this.speed = 5);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
                }
            }
        },
        19702: function (t, e, n) {
            "use strict";
            n.d(e, {
                m: function () {
                    return o;
                },
            });
            var r = n(48395),
                i = n(57242);
            class o {
                constructor() {
                    this.width = 0;
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = r.R.create(this.color, t.color)),
                        void 0 !== t.width && (this.width = (0, i.Cs)(t.width)),
                        void 0 !== t.opacity && (this.opacity = (0, i.Cs)(t.opacity)));
                }
            }
        },
        6824: function (t, e, n) {
            "use strict";
            n.d(e, {
                K: function () {
                    return i;
                },
            });
            var r = n(69621);
            class i extends r.SW {
                constructor() {
                    super(), (this.opacityRate = 1), (this.sizeRate = 1), (this.velocityRate = 1);
                }
                load(t) {
                    super.load(t),
                        t &&
                            (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
                            void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
                            void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
                }
            }
        },
        41005: function (t, e, n) {
            "use strict";
            n.d(e, {
                E: function () {
                    return i;
                },
            });
            var r = n(96066);
            class i {
                constructor() {
                    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
                }
                load(t) {
                    t &&
                        (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
                        void 0 !== t.mode && ("screen" === t.mode ? (this.mode = "screen") : (this.mode = "canvas")),
                        void 0 !== t.options && (this.options = (0, r.ZB)({}, t.options)));
                }
            }
        },
        44087: function (t, e, n) {
            "use strict";
            n.d(e, {
                Q: function () {
                    return o;
                },
            });
            class r {
                constructor() {
                    (this.auto = !1), (this.mode = "any"), (this.value = !1);
                }
                load(t) {
                    t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
                }
            }
            var i = n(96066);
            class o {
                constructor() {
                    (this.name = ""), (this.default = new r());
                }
                load(t) {
                    t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = (0, i.ZB)({}, t.options)));
                }
            }
        },
        69621: function (t, e, n) {
            "use strict";
            n.d(e, {
                SW: function () {
                    return o;
                },
                md: function () {
                    return a;
                },
            });
            var r = n(70737),
                i = n(57242);
            class o {
                constructor() {
                    this.value = 0;
                }
                load(t) {
                    t && void 0 !== t.value && (this.value = (0, i.Cs)(t.value));
                }
            }
            class s extends o {
                constructor() {
                    super(), (this.animation = new r.P());
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
            class a extends s {
                constructor() {
                    super(), (this.animation = new r.B());
                }
                load(t) {
                    super.load(t);
                }
            }
        },
        47809: function (t, e, n) {
            "use strict";
            n.d(e, {
                $F: function () {
                    return u;
                },
                C3: function () {
                    return s;
                },
                PL: function () {
                    return h;
                },
                TQ: function () {
                    return o;
                },
                ZH: function () {
                    return a;
                },
                Zw: function () {
                    return c;
                },
                pS: function () {
                    return i;
                },
                zv: function () {
                    return l;
                },
            });
            var r = n(63792);
            function i(t, e, n) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath();
            }
            function o(t, e, n) {
                (t.fillStyle = n ?? "rgba(0,0,0,0)"), t.fillRect(0, 0, e.width, e.height);
            }
            function s(t, e, n, r) {
                n && ((t.globalAlpha = r), t.drawImage(n, 0, 0, e.width, e.height), (t.globalAlpha = 1));
            }
            function a(t, e) {
                t.clearRect(0, 0, e.width, e.height);
            }
            function l(t) {
                let { container: e, context: n, particle: i, delta: o, colorStyles: s, backgroundMask: a, composite: l, radius: c, opacity: u, shadow: h, transform: d } = t,
                    p = i.getPosition(),
                    f = i.rotation + (i.pathRotation ? i.velocity.angle : 0),
                    m = { sin: Math.sin(f), cos: Math.cos(f) },
                    g = { a: m.cos * (d.a ?? 1), b: m.sin * (d.b ?? 1), c: -m.sin * (d.c ?? 1), d: m.cos * (d.d ?? 1) };
                n.setTransform(g.a, g.b, g.c, g.d, p.x, p.y), a && (n.globalCompositeOperation = l);
                let y = i.shadowColor;
                h.enable && y && ((n.shadowBlur = h.blur), (n.shadowColor = (0, r.iz)(y)), (n.shadowOffsetX = h.offset.x), (n.shadowOffsetY = h.offset.y)), s.fill && (n.fillStyle = s.fill);
                let v = i.strokeWidth ?? 0;
                (n.lineWidth = v), s.stroke && (n.strokeStyle = s.stroke);
                let b = { container: e, context: n, particle: i, radius: c, opacity: u, delta: o, transformData: g, strokeWidth: v };
                (function (t) {
                    let { container: e, context: n, particle: r, radius: i, opacity: o, delta: s, strokeWidth: a, transformData: l } = t;
                    if (!r.shape) return;
                    let c = e.shapeDrawers.get(r.shape);
                    c &&
                        (n.beginPath(),
                        c.draw({ context: n, particle: r, radius: i, opacity: o, delta: s, pixelRatio: e.retina.pixelRatio, transformData: { ...l } }),
                        r.shapeClose && n.closePath(),
                        a > 0 && n.stroke(),
                        r.shapeFill && n.fill());
                })(b),
                    (function (t) {
                        let { container: e, context: n, particle: r, radius: i, opacity: o, delta: s, transformData: a } = t;
                        if (!r.shape) return;
                        let l = e.shapeDrawers.get(r.shape);
                        l?.afterDraw && l.afterDraw({ context: n, particle: r, radius: i, opacity: o, delta: s, pixelRatio: e.retina.pixelRatio, transformData: { ...a } });
                    })(b),
                    (function (t) {
                        let { container: e, context: n, particle: r, radius: i, opacity: o, delta: s, transformData: a } = t;
                        if (!r.effect) return;
                        let l = e.effectDrawers.get(r.effect);
                        l && l.draw({ context: n, particle: r, radius: i, opacity: o, delta: s, pixelRatio: e.retina.pixelRatio, transformData: { ...a } });
                    })(b),
                    (n.globalCompositeOperation = "source-over"),
                    n.resetTransform();
            }
            function c(t, e, n) {
                e.draw && e.draw(t, n);
            }
            function u(t, e, n, r) {
                e.drawParticle && e.drawParticle(t, n, r);
            }
            function h(t, e, n) {
                return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * n };
            }
        },
        63792: function (t, e, n) {
            "use strict";
            n.d(e, {
                BE: function () {
                    return b;
                },
                Dt: function () {
                    return w;
                },
                PB: function () {
                    return C;
                },
                VI: function () {
                    return c;
                },
                Y6: function () {
                    return f;
                },
                bS: function () {
                    return S;
                },
                gW: function () {
                    return x;
                },
                iz: function () {
                    return g;
                },
                lC: function () {
                    return d;
                },
                lN: function () {
                    return h;
                },
                oc: function () {
                    return v;
                },
                tX: function () {
                    return u;
                },
                ve: function () {
                    return p;
                },
                vz: function () {
                    return y;
                },
            });
            var r = n(57242),
                i = n(21717),
                o = n(8667),
                s = n(96066);
            let a = "random",
                l = new Map();
            function c(t) {
                l.set(t.key, t);
            }
            function u(t, e, n = !0) {
                if (!t) return;
                let r = (0, i.HD)(t) ? { value: t } : t;
                if ((0, i.HD)(r.value))
                    return (function t(e, n, r = !0) {
                        if (!e) return;
                        let o = (0, i.HD)(e) ? { value: e } : e;
                        if ((0, i.HD)(o.value))
                            return o.value === a
                                ? m()
                                : (function (t) {
                                      for (let [, e] of l) if (t.startsWith(e.stringPrefix)) return e.parseString(t);
                                      let e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, n, r, i) => e + e + n + n + r + r + (void 0 !== i ? i + i : "")),
                                          n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                                      return n ? { a: void 0 !== n[4] ? parseInt(n[4], 16) / 255 : 1, b: parseInt(n[3], 16), g: parseInt(n[2], 16), r: parseInt(n[1], 16) } : void 0;
                                  })(o.value);
                        if ((0, i.kJ)(o.value)) return t({ value: (0, s.c8)(o.value, n, r) });
                        for (let [, t] of l) {
                            let e = t.handleColor(o);
                            if (e) return e;
                        }
                    })(r.value, e, n);
                if ((0, i.kJ)(r.value)) return u({ value: (0, s.c8)(r.value, e, n) });
                for (let [, t] of l) {
                    let e = t.handleRangeColor(r);
                    if (e) return e;
                }
            }
            function h(t, e, n = !0) {
                let r = u(t, e, n);
                return r ? d(r) : void 0;
            }
            function d(t) {
                let e = t.r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    i = Math.max(e, n, r),
                    o = Math.min(e, n, r),
                    s = { h: 0, l: (i + o) * 0.5, s: 0 };
                return (
                    i !== o && ((s.s = s.l < 0.5 ? (i - o) / (i + o) : (i - o) / (2 - i - o)), (s.h = e === i ? (n - r) / (i - o) : (s.h = n === i ? 2 + (r - e) / (i - o) : 4 + (e - n) / (i - o)))),
                    (s.l *= 100),
                    (s.s *= 100),
                    (s.h *= 60),
                    s.h < 0 && (s.h += 360),
                    s.h >= 360 && (s.h -= 360),
                    s
                );
            }
            function p(t) {
                let e = ((t.h % 360) + 360) % 360,
                    n = Math.max(0, Math.min(100, t.s)),
                    r = Math.max(0, Math.min(100, t.l)),
                    i = e / 360,
                    o = n / 100,
                    s = r / 100;
                if (0 === n) {
                    let t = Math.round(255 * s);
                    return { r: t, g: t, b: t };
                }
                let a = (t, e, n) => ((n < 0 && n++, n > 1 && n--, 6 * n < 1) ? t + (e - t) * 6 * n : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (0.6666666666666666 - n) * 6 : t),
                    l = s < 0.5 ? s * (1 + o) : s + o - s * o,
                    c = 2 * s - l;
                return {
                    r: Math.round(Math.min(255, 255 * a(c, l, i + 0.3333333333333333))),
                    g: Math.round(Math.min(255, 255 * a(c, l, i))),
                    b: Math.round(Math.min(255, 255 * a(c, l, i - 0.3333333333333333))),
                };
            }
            function f(t) {
                let e = p(t);
                return { a: t.a, b: e.b, g: e.g, r: e.r };
            }
            function m(t) {
                let e = t ?? 0;
                return { b: Math.floor((0, r.vd)((0, r.Cs)(e, 256))), g: Math.floor((0, r.vd)((0, r.Cs)(e, 256))), r: Math.floor((0, r.vd)((0, r.Cs)(e, 256))) };
            }
            function g(t, e) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
            }
            function y(t, e) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
            }
            function v(t, e, n, i) {
                let o = t,
                    s = e;
                return void 0 === o.r && (o = p(t)), void 0 === s.r && (s = p(e)), { b: (0, r.CD)(o.b, s.b, n, i), g: (0, r.CD)(o.g, s.g, n, i), r: (0, r.CD)(o.r, s.r, n, i) };
            }
            function b(t, e, n) {
                if (n === a) return m();
                if ("mid" !== n) return n;
                {
                    let n = t.getFillColor() ?? t.getStrokeColor(),
                        r = e?.getFillColor() ?? e?.getStrokeColor();
                    if (n && r && e) return v(n, r, t.getRadius(), e.getRadius());
                    {
                        let t = n ?? r;
                        if (t) return p(t);
                    }
                }
            }
            function w(t, e, n) {
                let r = (0, i.HD)(t) ? t : t.value;
                return r === a ? (n ? u({ value: r }) : e ? a : "mid") : "mid" === r ? "mid" : u({ value: r });
            }
            function x(t) {
                return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
            }
            function S(t, e, n) {
                let r = { h: { enable: !1, value: t.h }, s: { enable: !1, value: t.s }, l: { enable: !1, value: t.l } };
                return e && (k(r.h, e.h, n), k(r.s, e.s, n), k(r.l, e.l, n)), r;
            }
            function k(t, e, n) {
                (t.enable = e.enable),
                    t.enable
                        ? ((t.velocity = ((0, r.Gu)(e.speed) / o.tZ) * n),
                          (t.decay = 1 - (0, r.Gu)(e.decay)),
                          (t.status = "increasing"),
                          (t.loops = 0),
                          (t.maxLoops = (0, r.Gu)(e.count)),
                          (t.time = 0),
                          (t.delayTime = (0, r.Gu)(e.delay) * o.X5),
                          e.sync || ((t.velocity *= (0, r.sZ)()), (t.value *= (0, r.sZ)())),
                          (t.initialValue = t.value),
                          (t.offset = (0, r.Cs)(e.offset)))
                        : (t.velocity = 0);
            }
            function M(t, e, n, i) {
                if (
                    !t ||
                    !t.enable ||
                    ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0)) ||
                    (t.time || (t.time = 0), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += i.value), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))
                )
                    return;
                let o = t.offset ? (0, r.vd)(t.offset) : 0,
                    s = (t.velocity ?? 0) * i.factor + 3.6 * o,
                    a = t.decay ?? 1,
                    l = (0, r.KI)(e),
                    c = (0, r.Uv)(e);
                n && "increasing" !== t.status
                    ? ((t.value -= s), t.value < 0 && (t.loops || (t.loops = 0), t.loops++, (t.status = "increasing")))
                    : ((t.value += s), t.value > l && (t.loops || (t.loops = 0), t.loops++, n ? (t.status = "decreasing") : (t.value -= l))),
                    t.velocity && 1 !== a && (t.velocity *= a),
                    (t.value = (0, r.uZ)(t.value, c, l));
            }
            function C(t, e) {
                if (!t) return;
                let { h: n, s: r, l: i } = t,
                    o = { h: { min: 0, max: 360 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } };
                n && M(n, o.h, !1, e), r && M(r, o.s, !0, e), i && M(i, o.l, !0, e);
            }
        },
        57242: function (t, e, n) {
            "use strict";
            n.d(e, {
                BV: function () {
                    return C;
                },
                CD: function () {
                    return p;
                },
                Cs: function () {
                    return function t(e, n) {
                        if (e === n || (void 0 === n && (0, i.hj)(e))) return e;
                        let r = g(e),
                            o = y(e);
                        return void 0 !== n ? { min: Math.min(r, n), max: Math.max(o, n) } : t(r, o);
                    };
                },
                Gk: function () {
                    return x;
                },
                Gu: function () {
                    return m;
                },
                Id: function () {
                    return w;
                },
                KI: function () {
                    return y;
                },
                Sp: function () {
                    return b;
                },
                Uv: function () {
                    return g;
                },
                _X: function () {
                    return u;
                },
                bx: function () {
                    return c;
                },
                hA: function () {
                    return k;
                },
                lQ: function () {
                    return S;
                },
                mC: function () {
                    return M;
                },
                oW: function () {
                    return v;
                },
                sZ: function () {
                    return h;
                },
                uZ: function () {
                    return d;
                },
                vd: function () {
                    return f;
                },
            });
            var r = n(96860),
                i = n(21717),
                o = n(8667);
            let s = Math.random,
                a = new Map(),
                l = 2 * Math.PI;
            function c(t, e) {
                a.get(t) || a.set(t, e);
            }
            function u(t) {
                return a.get(t) ?? (t => t);
            }
            function h() {
                return d(s(), 0, 1 - Number.EPSILON);
            }
            function d(t, e, n) {
                return Math.min(Math.max(t, e), n);
            }
            function p(t, e, n, r) {
                return Math.floor((t * n + e * r) / (n + r));
            }
            function f(t) {
                let e = y(t),
                    n = g(t);
                return e === n && (n = 0), h() * (e - n) + n;
            }
            function m(t) {
                return (0, i.hj)(t) ? t : f(t);
            }
            function g(t) {
                return (0, i.hj)(t) ? t : t.min;
            }
            function y(t) {
                return (0, i.hj)(t) ? t : t.max;
            }
            function v(t, e) {
                let n = t.x - e.x,
                    r = t.y - e.y;
                return { dx: n, dy: r, distance: Math.sqrt(n ** 2 + r ** 2) };
            }
            function b(t, e) {
                return v(t, e).distance;
            }
            function w(t) {
                return (t * Math.PI) / 180;
            }
            function x(t, e, n) {
                if ((0, i.hj)(t)) return w(t);
                switch (t) {
                    case "top":
                        return -(0.5 * Math.PI);
                    case "top-right":
                        return -(0.25 * Math.PI);
                    case "right":
                        return 0;
                    case "bottom-right":
                        return 0.25 * Math.PI;
                    case "bottom":
                        return 0.5 * Math.PI;
                    case "bottom-left":
                        return 0.75 * Math.PI;
                    case "left":
                        return Math.PI;
                    case "top-left":
                        return -(0.75 * Math.PI);
                    case "inside":
                        return Math.atan2(n.y - e.y, n.x - e.x);
                    case "outside":
                        return Math.atan2(e.y - n.y, e.x - n.x);
                    default:
                        return h() * l;
                }
            }
            function S(t) {
                let e = r.O.origin;
                return (e.length = 1), (e.angle = t), e;
            }
            function k(t, e, n, i) {
                return r.O.create((t.x * (n - i)) / (n + i) + (2 * e.x * i) / (n + i), t.y);
            }
            function M(t) {
                return { x: t.position?.x ?? h() * t.size.width, y: t.position?.y ?? h() * t.size.height };
            }
            function C(t) {
                return t ? (t.endsWith("%") ? parseFloat(t) / o.tZ : parseFloat(t)) : 1;
            }
        },
        295: function (t, e, n) {
            "use strict";
            n.d(e, {
                h: function () {
                    return i;
                },
                x: function () {
                    return o;
                },
            });
            var r = n(88835);
            function i(t, ...e) {
                for (let n of e) t.load(n);
            }
            function o(t, e, ...n) {
                let s = new r.B(t, e);
                return i(s, ...n), s;
            }
        },
        21717: function (t, e, n) {
            "use strict";
            function r(t) {
                return "boolean" == typeof t;
            }
            function i(t) {
                return "string" == typeof t;
            }
            function o(t) {
                return "number" == typeof t;
            }
            function s(t) {
                return "object" == typeof t && null !== t;
            }
            function a(t) {
                return Array.isArray(t);
            }
            n.d(e, {
                HD: function () {
                    return i;
                },
                Kn: function () {
                    return s;
                },
                hj: function () {
                    return o;
                },
                jn: function () {
                    return r;
                },
                kJ: function () {
                    return a;
                },
            });
        },
        96066: function (t, e, n) {
            "use strict";
            n.d(e, {
                Ac: function () {
                    return y;
                },
                Cr: function () {
                    return P;
                },
                HY: function () {
                    return h;
                },
                KH: function () {
                    return C;
                },
                Kr: function () {
                    return u;
                },
                M_: function () {
                    return v;
                },
                NM: function () {
                    return d;
                },
                V0: function () {
                    return _;
                },
                XD: function () {
                    return w;
                },
                ZB: function () {
                    return function t(e, ...n) {
                        for (let r of n) {
                            if (null == r) continue;
                            if (!(0, o.Kn)(r)) {
                                e = r;
                                continue;
                            }
                            let n = Array.isArray(r);
                            for (let i in (n && ((0, o.Kn)(e) || !e || !Array.isArray(e)) ? (e = []) : !n && ((0, o.Kn)(e) || !e || Array.isArray(e)) && (e = {}), r)) {
                                if ("__proto__" === i) continue;
                                let n = r[i],
                                    s = e;
                                s[i] = (0, o.Kn)(n) && Array.isArray(n) ? n.map(e => t(s[i], e)) : t(s[i], n);
                            }
                        }
                        return e;
                    };
                },
                bt: function () {
                    return T;
                },
                c8: function () {
                    return g;
                },
                dB: function () {
                    return f;
                },
                dp: function () {
                    return M;
                },
                gy: function () {
                    return S;
                },
                iC: function () {
                    return x;
                },
                jl: function () {
                    return l;
                },
                kR: function () {
                    return k;
                },
                mx: function () {
                    return m;
                },
                wA: function () {
                    return E;
                },
                wm: function () {
                    return b;
                },
                yf: function () {
                    return p;
                },
            });
            var r = n(57242),
                i = n(8667),
                o = n(21717),
                s = n(96860);
            let a = { debug: console.debug, error: console.error, info: console.info, log: console.log, verbose: console.log, warning: console.warn };
            function l() {
                return a;
            }
            function c(t) {
                let e = { bounced: !1 },
                    { pSide: n, pOtherSide: r, rectSide: i, rectOtherSide: o, velocity: s, factor: a } = t;
                return (
                    r.min < o.min ||
                        r.min > o.max ||
                        r.max < o.min ||
                        r.max > o.max ||
                        (((n.max >= i.min && n.max <= (i.max + i.min) * 0.5 && s > 0) || (n.min <= i.max && n.min > (i.max + i.min) * 0.5 && s < 0)) && ((e.velocity = -(s * a)), (e.bounced = !0))),
                    e
                );
            }
            function u() {
                return "undefined" == typeof window || !window || void 0 === window.document || !window.document;
            }
            function h(t) {
                if (!u() && "undefined" != typeof matchMedia) return matchMedia(t);
            }
            function d(t) {
                if (!u() && "undefined" != typeof IntersectionObserver) return new IntersectionObserver(t);
            }
            function p(t) {
                if (!u() && "undefined" != typeof MutationObserver) return new MutationObserver(t);
            }
            function f(t, e) {
                return t === e || ((0, o.kJ)(e) && e.indexOf(t) > -1);
            }
            async function m(t, e) {
                try {
                    await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
                } catch {}
            }
            function g(t, e, n = !0) {
                return t[void 0 !== e && n ? e % t.length : Math.floor((0, r.sZ)() * t.length)];
            }
            function y(t, e, n, r, i) {
                var o;
                let s;
                return (
                    (o = v(t, r ?? 0)),
                    (s = !0),
                    (i && "bottom" !== i) || (s = o.top < e.height + n.x),
                    s && (!i || "left" === i) && (s = o.right > n.x),
                    s && (!i || "right" === i) && (s = o.left < e.width + n.y),
                    s && (!i || "top" === i) && (s = o.bottom > n.y),
                    s
                );
            }
            function v(t, e) {
                return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
            }
            function b(t, e) {
                return !!O(e, e => e.enable && f(t, e.mode));
            }
            function w(t, e, n) {
                C(e, e => {
                    let r = e.mode;
                    e.enable &&
                        f(t, r) &&
                        C(e.selectors, t => {
                            n(t, e);
                        });
                });
            }
            function x(t, e) {
                if (e && t)
                    return O(t, t =>
                        (function (t, e) {
                            let n = C(e, e => t.matches(e));
                            return (0, o.kJ)(n) ? n.some(t => t) : n;
                        })(e, t.selectors)
                    );
            }
            function S(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: s.O.create((0, r.Gu)(t.options.bounce.horizontal.value), (0, r.Gu)(t.options.bounce.vertical.value)),
                };
            }
            function k(t, e) {
                let { x: n, y: i } = t.velocity.sub(e.velocity),
                    [o, s] = [t.position, e.position],
                    { dx: a, dy: l } = (0, r.oW)(s, o);
                if (n * a + i * l < 0) return;
                let c = -Math.atan2(l, a),
                    u = t.mass,
                    h = e.mass,
                    d = t.velocity.rotate(c),
                    p = e.velocity.rotate(c),
                    f = (0, r.hA)(d, p, u, h),
                    m = (0, r.hA)(p, d, u, h),
                    g = f.rotate(-c),
                    y = m.rotate(-c);
                (t.velocity.x = g.x * t.factor.x), (t.velocity.y = g.y * t.factor.y), (e.velocity.x = y.x * e.factor.x), (e.velocity.y = y.y * e.factor.y);
            }
            function M(t, e) {
                let n = v(t.getPosition(), t.getRadius()),
                    i = t.options.bounce,
                    o = c({
                        pSide: { min: n.left, max: n.right },
                        pOtherSide: { min: n.top, max: n.bottom },
                        rectSide: { min: e.left, max: e.right },
                        rectOtherSide: { min: e.top, max: e.bottom },
                        velocity: t.velocity.x,
                        factor: (0, r.Gu)(i.horizontal.value),
                    });
                o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
                let s = c({
                    pSide: { min: n.top, max: n.bottom },
                    pOtherSide: { min: n.left, max: n.right },
                    rectSide: { min: e.top, max: e.bottom },
                    rectOtherSide: { min: e.left, max: e.right },
                    velocity: t.velocity.y,
                    factor: (0, r.Gu)(i.vertical.value),
                });
                s.bounced && (void 0 !== s.velocity && (t.velocity.y = s.velocity), void 0 !== s.position && (t.position.y = s.position));
            }
            function C(t, e) {
                return (0, o.kJ)(t) ? t.map((t, n) => e(t, n)) : e(t, 0);
            }
            function E(t, e, n) {
                return (0, o.kJ)(t) ? g(t, e, n) : t;
            }
            function O(t, e) {
                return (0, o.kJ)(t) ? t.find((t, n) => e(t, n)) : e(t, 0) ? t : void 0;
            }
            function _(t, e) {
                let n = t.value,
                    o = t.animation,
                    s = {
                        delayTime: (0, r.Gu)(o.delay) * i.X5,
                        enable: o.enable,
                        value: (0, r.Gu)(t.value) * e,
                        max: (0, r.KI)(n) * e,
                        min: (0, r.Uv)(n) * e,
                        loops: 0,
                        maxLoops: (0, r.Gu)(o.count),
                        time: 0,
                    };
                if (o.enable) {
                    switch (((s.decay = 1 - (0, r.Gu)(o.decay)), o.mode)) {
                        case "increase":
                            s.status = "increasing";
                            break;
                        case "decrease":
                            s.status = "decreasing";
                            break;
                        case "random":
                            s.status = (0, r.sZ)() >= i.vq ? "increasing" : "decreasing";
                    }
                    let t = "auto" === o.mode;
                    switch (o.startValue) {
                        case "min":
                            (s.value = s.min), t && (s.status = "increasing");
                            break;
                        case "max":
                            (s.value = s.max), t && (s.status = "decreasing");
                            break;
                        default:
                            (s.value = (0, r.vd)(s)), t && (s.status = (0, r.sZ)() >= i.vq ? "increasing" : "decreasing");
                    }
                }
                return (s.initialValue = s.value), s;
            }
            function T(t, e) {
                return (function (t, e) {
                    if ("percent" !== t.mode) {
                        let { mode: e, ...n } = t;
                        return n;
                    }
                    return "x" in t ? { x: (t.x / i.tZ) * e.width, y: (t.y / i.tZ) * e.height } : { width: (t.width / i.tZ) * e.width, height: (t.height / i.tZ) * e.height };
                })(t, e);
            }
            function P(t, e, n, i, o) {
                if (t.destroyed || !e || !e.enable || ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))) return;
                let s = (e.velocity ?? 0) * o.factor,
                    a = e.min,
                    l = e.max,
                    c = e.decay ?? 1;
                if ((e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += o.value), !((e.delayTime ?? 0) > 0) || !(e.time < (e.delayTime ?? 0)))) {
                    switch (e.status) {
                        case "increasing":
                            e.value >= l ? (n ? (e.status = "decreasing") : (e.value -= l), e.loops || (e.loops = 0), e.loops++) : (e.value += s);
                            break;
                        case "decreasing":
                            e.value <= a ? (n ? (e.status = "increasing") : (e.value += l), e.loops || (e.loops = 0), e.loops++) : (e.value -= s);
                    }
                    e.velocity && 1 !== c && (e.velocity *= c),
                        (function (t, e, n, r, i) {
                            switch (e) {
                                case "max":
                                    n >= i && t.destroy();
                                    break;
                                case "min":
                                    n <= r && t.destroy();
                            }
                        })(t, i, e.value, a, l),
                        t.destroyed || (e.value = (0, r.uZ)(e.value, a, l));
                }
            }
        },
        56646: function (t, e, n) {
            "use strict";
            n.d(e, {
                Cd: function () {
                    return m.Cd;
                },
                L8: function () {
                    return p;
                },
                Oz: function () {
                    return y.O;
                },
                $S: function () {
                    return f;
                },
                Ae: function () {
                    return m.Ae;
                },
                SW: function () {
                    return v.SW;
                },
                OW: function () {
                    return g.O;
                },
                bx: function () {
                    return s.bx;
                },
                M_: function () {
                    return i.M_;
                },
                kR: function () {
                    return i.kR;
                },
                gy: function () {
                    return i.gy;
                },
                uZ: function () {
                    return s.uZ;
                },
                oc: function () {
                    return u.oc;
                },
                Id: function () {
                    return s.Id;
                },
                iC: function () {
                    return i.iC;
                },
                XD: function () {
                    return i.XD;
                },
                pS: function () {
                    return b.pS;
                },
                gK: function () {
                    return r.gK;
                },
                KH: function () {
                    return i.KH;
                },
                Sp: function () {
                    return s.Sp;
                },
                oW: function () {
                    return s.oW;
                },
                _X: function () {
                    return s._X;
                },
                bS: function () {
                    return u.bS;
                },
                BE: function () {
                    return u.BE;
                },
                Dt: function () {
                    return u.Dt;
                },
                jl: function () {
                    return i.jl;
                },
                sZ: function () {
                    return s.sZ;
                },
                KI: function () {
                    return s.KI;
                },
                Gu: function () {
                    return s.Gu;
                },
                vz: function () {
                    return u.vz;
                },
                iz: function () {
                    return u.iz;
                },
                V0: function () {
                    return i.V0;
                },
                kJ: function () {
                    return w.kJ;
                },
                wm: function () {
                    return i.wm;
                },
                dB: function () {
                    return i.dB;
                },
                Kn: function () {
                    return w.Kn;
                },
                Ac: function () {
                    return i.Ac;
                },
                Kr: function () {
                    return i.Kr;
                },
                c8: function () {
                    return i.c8;
                },
                wA: function () {
                    return i.wA;
                },
                mx: function () {
                    return i.mx;
                },
                X5: function () {
                    return r.X5;
                },
                aM: function () {
                    return r.aM;
                },
                Wt: function () {
                    return r.Wt;
                },
                tZ: function () {
                    return r.tZ;
                },
                vd: function () {
                    return s.vd;
                },
                lN: function () {
                    return u.lN;
                },
                tX: function () {
                    return u.tX;
                },
                dp: function () {
                    return i.dp;
                },
                lC: function () {
                    return u.lC;
                },
                Cs: function () {
                    return s.Cs;
                },
                S6: function () {
                    return x;
                },
                Cr: function () {
                    return i.Cr;
                },
                PB: function () {
                    return u.PB;
                },
            });
            var r = n(8667),
                i = n(96066);
            class o {
                constructor() {
                    this._listeners = new Map();
                }
                addEventListener(t, e) {
                    this.removeEventListener(t, e);
                    let n = this._listeners.get(t);
                    n || ((n = []), this._listeners.set(t, n)), n.push(e);
                }
                dispatchEvent(t, e) {
                    let n = this._listeners.get(t);
                    n?.forEach(t => t(e));
                }
                hasEventListener(t) {
                    return !!this._listeners.get(t);
                }
                removeAllEventListeners(t) {
                    t ? this._listeners.delete(t) : (this._listeners = new Map());
                }
                removeEventListener(t, e) {
                    let n = this._listeners.get(t);
                    if (!n) return;
                    let r = n.length,
                        i = n.indexOf(e);
                    i < 0 || (1 === r ? this._listeners.delete(t) : n.splice(i, 1));
                }
            }
            var s = n(57242);
            async function a(t, e, n, r = !1) {
                let i = e.get(t);
                return (!i || r) && ((i = await Promise.all([...n.values()].map(e => e(t)))), e.set(t, i)), i;
            }
            async function l(t) {
                let e = (0, i.wA)(t.url, t.index);
                if (!e) return t.fallback;
                let n = await fetch(e);
                return n.ok ? await n.json() : ((0, i.jl)().error(`${r.gK} ${n.status} while retrieving config file`), t.fallback);
            }
            class c {
                constructor() {
                    (this._configs = new Map()),
                        (this._domArray = []),
                        (this._eventDispatcher = new o()),
                        (this._initialized = !1),
                        (this.plugins = []),
                        (this._initializers = { interactors: new Map(), movers: new Map(), updaters: new Map() }),
                        (this.interactors = new Map()),
                        (this.movers = new Map()),
                        (this.updaters = new Map()),
                        (this.presets = new Map()),
                        (this.effectDrawers = new Map()),
                        (this.shapeDrawers = new Map()),
                        (this.pathGenerators = new Map());
                }
                get configs() {
                    let t = {};
                    for (let [e, n] of this._configs) t[e] = n;
                    return t;
                }
                get version() {
                    return "3.3.0";
                }
                addConfig(t) {
                    let e = t.key ?? t.name ?? "default";
                    this._configs.set(e, t), this._eventDispatcher.dispatchEvent("configAdded", { data: { name: e, config: t } });
                }
                async addEffect(t, e, n = !0) {
                    (0, i.KH)(t, t => {
                        this.getEffectDrawer(t) || this.effectDrawers.set(t, e);
                    }),
                        await this.refresh(n);
                }
                addEventListener(t, e) {
                    this._eventDispatcher.addEventListener(t, e);
                }
                async addInteractor(t, e, n = !0) {
                    this._initializers.interactors.set(t, e), await this.refresh(n);
                }
                async addMover(t, e, n = !0) {
                    this._initializers.movers.set(t, e), await this.refresh(n);
                }
                async addParticleUpdater(t, e, n = !0) {
                    this._initializers.updaters.set(t, e), await this.refresh(n);
                }
                async addPathGenerator(t, e, n = !0) {
                    this.getPathGenerator(t) || this.pathGenerators.set(t, e), await this.refresh(n);
                }
                async addPlugin(t, e = !0) {
                    this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e);
                }
                async addPreset(t, e, n = !1, r = !0) {
                    (n || !this.getPreset(t)) && this.presets.set(t, e), await this.refresh(r);
                }
                async addShape(t, e, n = !0) {
                    (0, i.KH)(t, t => {
                        this.getShapeDrawer(t) || this.shapeDrawers.set(t, e);
                    }),
                        await this.refresh(n);
                }
                clearPlugins(t) {
                    this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t);
                }
                dispatchEvent(t, e) {
                    this._eventDispatcher.dispatchEvent(t, e);
                }
                dom() {
                    return this._domArray;
                }
                domItem(t) {
                    let e = this.dom(),
                        n = e[t];
                    if (!n || n.destroyed) {
                        e.splice(t, 1);
                        return;
                    }
                    return n;
                }
                async getAvailablePlugins(t) {
                    let e = new Map();
                    for (let n of this.plugins) n.needsPlugin(t.actualOptions) && e.set(n.id, await n.getPlugin(t));
                    return e;
                }
                getEffectDrawer(t) {
                    return this.effectDrawers.get(t);
                }
                async getInteractors(t, e = !1) {
                    return await a(t, this.interactors, this._initializers.interactors, e);
                }
                async getMovers(t, e = !1) {
                    return await a(t, this.movers, this._initializers.movers, e);
                }
                getPathGenerator(t) {
                    return this.pathGenerators.get(t);
                }
                getPlugin(t) {
                    return this.plugins.find(e => e.id === t);
                }
                getPreset(t) {
                    return this.presets.get(t);
                }
                getShapeDrawer(t) {
                    return this.shapeDrawers.get(t);
                }
                getSupportedEffects() {
                    return this.effectDrawers.keys();
                }
                getSupportedShapes() {
                    return this.shapeDrawers.keys();
                }
                async getUpdaters(t, e = !1) {
                    return await a(t, this.updaters, this._initializers.updaters, e);
                }
                init() {
                    this._initialized || (this._initialized = !0);
                }
                async load(t) {
                    let e;
                    let o = t.id ?? t.element?.id ?? `tsparticles${Math.floor(1e4 * (0, s.sZ)())}`,
                        { index: a, url: c } = t,
                        u = c ? await l({ fallback: t.options, url: c, index: a }) : t.options,
                        h = t.element ?? document.getElementById(o);
                    h || (((h = document.createElement("div")).id = o), document.body.append(h));
                    let d = (0, i.wA)(u, a),
                        p = this.dom(),
                        f = p.findIndex(t => t.id.description === o);
                    if (f >= 0) {
                        let t = this.domItem(f);
                        t && !t.destroyed && (t.destroy(), p.splice(f, 1));
                    }
                    if ("canvas" === h.tagName.toLowerCase()) (e = h).dataset[r.YU] = "false";
                    else {
                        let t = h.getElementsByTagName("canvas");
                        t.length ? ((e = t[0]).dataset[r.YU] = "false") : (((e = document.createElement("canvas")).dataset[r.YU] = "true"), h.appendChild(e));
                    }
                    e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%");
                    let { Container: m } = await n.e(3821).then(n.bind(n, 43821)),
                        g = new m(this, o, d);
                    return f >= 0 ? p.splice(f, 0, g) : p.push(g), g.canvas.loadCanvas(e), await g.start(), g;
                }
                loadOptions(t, e) {
                    for (let n of this.plugins) n.loadOptions(t, e);
                }
                loadParticlesOptions(t, e, ...n) {
                    let r = this.updaters.get(t);
                    if (r) for (let t of r) t.loadOptions?.(e, ...n);
                }
                async refresh(t = !0) {
                    t && (await Promise.all(this.dom().map(t => t.refresh())));
                }
                removeEventListener(t, e) {
                    this._eventDispatcher.removeEventListener(t, e);
                }
                setOnClickHandler(t) {
                    let e = this.dom();
                    if (!e.length) throw Error(`${r.gK} can only set click handlers after calling tsParticles.load()`);
                    for (let n of e) n.addClickHandler(t);
                }
            }
            var u = n(63792);
            class h {
                constructor() {
                    (this.key = "hsl"), (this.stringPrefix = "hsl");
                }
                handleColor(t) {
                    let e = t.value.hsl ?? t.value;
                    if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return (0, u.ve)(e);
                }
                handleRangeColor(t) {
                    let e = t.value.hsl ?? t.value;
                    if (void 0 !== e.h && void 0 !== e.l) return (0, u.ve)({ h: (0, s.Gu)(e.h), l: (0, s.Gu)(e.l), s: (0, s.Gu)(e.s) });
                }
                parseString(t) {
                    if (!t.startsWith("hsl")) return;
                    let e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e ? (0, u.Y6)({ a: e.length > 4 ? (0, s.BV)(e[5]) : 1, h: parseInt(e[1], 10), l: parseInt(e[3], 10), s: parseInt(e[2], 10) }) : void 0;
                }
            }
            class d {
                constructor() {
                    (this.key = "rgb"), (this.stringPrefix = "rgb");
                }
                handleColor(t) {
                    let e = t.value.rgb ?? t.value;
                    if (void 0 !== e.r) return e;
                }
                handleRangeColor(t) {
                    let e = t.value.rgb ?? t.value;
                    if (void 0 !== e.r) return { r: (0, s.Gu)(e.r), g: (0, s.Gu)(e.g), b: (0, s.Gu)(e.b) };
                }
                parseString(t) {
                    if (!t.startsWith(this.stringPrefix)) return;
                    let e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e ? { a: e.length > 4 ? (0, s.BV)(e[5]) : 1, b: parseInt(e[3], 10), g: parseInt(e[2], 10), r: parseInt(e[1], 10) } : void 0;
                }
            }
            class p {
                constructor(t) {
                    (this.type = "external"), (this.container = t);
                }
            }
            class f {
                constructor(t) {
                    (this.type = "particles"), (this.container = t);
                }
            }
            var m = n(2579),
                g = n(96860);
            n(48395), n(70737), n(45946), n(56894), n(99533), n(20353), n(347), n(43942);
            var y = n(3921);
            n(97805), n(22584), n(92164), n(88835), n(19702), n(87918), n(62693), n(94254), n(34900), n(64815), n(42149), n(32798), n(71133), n(49050), n(90919), n(34392), n(6824), n(41005), n(44087);
            var v = n(69621),
                b = n(47809);
            n(295);
            var w = n(21717);
            let x = (function () {
                let t = new d(),
                    e = new h();
                (0, u.VI)(t), (0, u.VI)(e);
                let n = new c();
                return n.init(), n;
            })();
            (0, i.Kr)() || (window.tsParticles = x);
        },
        57271: function (t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function () {
                    return s;
                },
                bP: function () {
                    return a;
                },
            });
            var r = n(56646),
                i = n(57437),
                o = n(2265);
            let s = t => {
                let e = t.id ?? "tsparticles";
                return (
                    (0, o.useEffect)(() => {
                        let n;
                        return (
                            r.S6.load({ id: e, url: t.url, options: t.options }).then(e => {
                                var r;
                                (n = e), null == (r = t.particlesLoaded) || r.call(t, e);
                            }),
                            () => {
                                null == n || n.destroy();
                            }
                        );
                    }, [e, t, t.url, t.options]),
                    (0, i.jsx)("div", { id: e, className: t.className })
                );
            };
            async function a(t) {
                await t(r.S6);
            }
        },
        69581: function (t, e, n) {
            "use strict";
            async function r(t, e = !0) {
                let { loadParallaxMover: r } = await n.e(3911).then(n.bind(n, 23911)),
                    { loadExternalAttractInteraction: i } = await n.e(3546).then(n.bind(n, 93546)),
                    { loadExternalBounceInteraction: o } = await n.e(5869).then(n.bind(n, 25869)),
                    { loadExternalBubbleInteraction: s } = await n.e(5740).then(n.bind(n, 55740)),
                    { loadExternalConnectInteraction: a } = await n.e(3931).then(n.bind(n, 13931)),
                    { loadExternalGrabInteraction: l } = await n.e(3956).then(n.bind(n, 83956)),
                    { loadExternalPauseInteraction: c } = await n.e(7527).then(n.bind(n, 77527)),
                    { loadExternalPushInteraction: u } = await n.e(8769).then(n.bind(n, 68769)),
                    { loadExternalRemoveInteraction: h } = await n.e(1876).then(n.bind(n, 71876)),
                    { loadExternalRepulseInteraction: d } = await n.e(7552).then(n.bind(n, 7552)),
                    { loadExternalSlowInteraction: p } = await n.e(5205).then(n.bind(n, 45205)),
                    { loadParticlesAttractInteraction: f } = await n.e(9445).then(n.bind(n, 89445)),
                    { loadParticlesCollisionsInteraction: m } = await n.e(3184).then(n.bind(n, 63184)),
                    { loadParticlesLinksInteraction: g } = await n.e(5373).then(n.bind(n, 55373)),
                    { loadEasingQuadPlugin: y } = await n.e(5675).then(n.bind(n, 45675)),
                    { loadEmojiShape: v } = await n.e(5466).then(n.bind(n, 75466)),
                    { loadImageShape: b } = await n.e(7084).then(n.bind(n, 90321)),
                    { loadLineShape: w } = await n.e(5954).then(n.bind(n, 55954)),
                    { loadPolygonShape: x } = await n.e(6907).then(n.bind(n, 36907)),
                    { loadSquareShape: S } = await n.e(3462).then(n.bind(n, 73462)),
                    { loadStarShape: k } = await n.e(5271).then(n.bind(n, 15271)),
                    { loadLifeUpdater: M } = await n.e(5592).then(n.bind(n, 45592)),
                    { loadRotateUpdater: C } = await n.e(8093).then(n.bind(n, 98093)),
                    { loadStrokeColorUpdater: E } = await n.e(517).then(n.bind(n, 20517)),
                    { loadBasic: O } = await n.e(2434).then(n.bind(n, 72434));
                await r(t, !1),
                    await i(t, !1),
                    await o(t, !1),
                    await s(t, !1),
                    await a(t, !1),
                    await l(t, !1),
                    await c(t, !1),
                    await u(t, !1),
                    await h(t, !1),
                    await d(t, !1),
                    await p(t, !1),
                    await f(t, !1),
                    await m(t, !1),
                    await g(t, !1),
                    await y(),
                    await v(t, !1),
                    await b(t, !1),
                    await w(t, !1),
                    await x(t, !1),
                    await S(t, !1),
                    await k(t, !1),
                    await M(t, !1),
                    await C(t, !1),
                    await E(t, !1),
                    await O(t, e);
            }
            n.d(e, {
                S: function () {
                    return r;
                },
            });
        },
        24570: function (t, e, n) {
            "use strict";
            function r(t) {
                return e => {
                    let n = (t ? Math[t] : Math.trunc)(e);
                    return 0 === n ? 0 : n;
                };
            }
            n.d(e, {
                u: function () {
                    return r;
                },
            });
        },
        9340: function (t, e, n) {
            "use strict";
            n.d(e, {
                D: function () {
                    return i;
                },
            });
            var r = n(99649);
            function i(t) {
                let e = (0, r.Q)(t),
                    n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                return n.setUTCFullYear(e.getFullYear()), +t - +n;
            }
        },
        78198: function (t, e, n) {
            "use strict";
            n.d(e, {
                dP: function () {
                    return i;
                },
                jE: function () {
                    return r;
                },
                vh: function () {
                    return s;
                },
                yJ: function () {
                    return o;
                },
            });
            let r = 6048e5,
                i = 864e5,
                o = 6e4,
                s = 36e5;
        },
        19324: function (t, e, n) {
            "use strict";
            n.d(e, {
                w: function () {
                    return s;
                },
            });
            var r = n(78198),
                i = n(56942),
                o = n(9340);
            function s(t, e) {
                let n = (0, i.b)(t),
                    s = (0, i.b)(e);
                return Math.round((+n - (0, o.D)(n) - (+s - (0, o.D)(s))) / r.dP);
            }
        },
        31303: function (t, e, n) {
            "use strict";
            n.d(e, {
                j: function () {
                    return o;
                },
            });
            var r = n(19324),
                i = n(99649);
            function o(t, e) {
                let n = (0, i.Q)(t),
                    o = (0, i.Q)(e),
                    a = s(n, o),
                    l = Math.abs((0, r.w)(n, o));
                n.setDate(n.getDate() - a * l);
                let c = Number(s(n, o) === -a),
                    u = a * (l - c);
                return 0 === u ? 0 : u;
            }
            function s(t, e) {
                let n =
                    t.getFullYear() - e.getFullYear() ||
                    t.getMonth() - e.getMonth() ||
                    t.getDate() - e.getDate() ||
                    t.getHours() - e.getHours() ||
                    t.getMinutes() - e.getMinutes() ||
                    t.getSeconds() - e.getSeconds() ||
                    t.getMilliseconds() - e.getMilliseconds();
                return n < 0 ? -1 : n > 0 ? 1 : n;
            }
        },
        7535: function (t, e, n) {
            "use strict";
            n.d(e, {
                A: function () {
                    return s;
                },
            });
            var r = n(24570),
                i = n(78198),
                o = n(39960);
            function s(t, e, n) {
                let s = (0, o._)(t, e) / i.vh;
                return (0, r.u)(null == n ? void 0 : n.roundingMethod)(s);
            }
        },
        39960: function (t, e, n) {
            "use strict";
            n.d(e, {
                _: function () {
                    return i;
                },
            });
            var r = n(99649);
            function i(t, e) {
                return +(0, r.Q)(t) - +(0, r.Q)(e);
            }
        },
        86367: function (t, e, n) {
            "use strict";
            n.d(e, {
                X: function () {
                    return s;
                },
            });
            var r = n(24570),
                i = n(78198),
                o = n(39960);
            function s(t, e, n) {
                let s = (0, o._)(t, e) / i.yJ;
                return (0, r.u)(null == n ? void 0 : n.roundingMethod)(s);
            }
        },
        28199: function (t, e, n) {
            "use strict";
            n.d(e, {
                c: function () {
                    return o;
                },
            });
            var r = n(24570),
                i = n(39960);
            function o(t, e, n) {
                let o = (0, i._)(t, e) / 1e3;
                return (0, r.u)(null == n ? void 0 : n.roundingMethod)(o);
            }
        },
        56942: function (t, e, n) {
            "use strict";
            n.d(e, {
                b: function () {
                    return i;
                },
            });
            var r = n(99649);
            function i(t) {
                let e = (0, r.Q)(t);
                return e.setHours(0, 0, 0, 0), e;
            }
        },
        99649: function (t, e, n) {
            "use strict";
            function r(t) {
                let e = Object.prototype.toString.call(t);
                return t instanceof Date || ("object" == typeof t && "[object Date]" === e)
                    ? new t.constructor(+t)
                    : new Date("number" == typeof t || "[object Number]" === e || "string" == typeof t || "[object String]" === e ? t : NaN);
            }
            n.d(e, {
                Q: function () {
                    return r;
                },
            });
        },
        9467: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return C;
                },
            });
            var r = n(2265);
            function i(t) {
                return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t);
            }
            function o(t, e) {
                let n = Object.keys(t),
                    r = Object.keys(e);
                return (
                    n.length === r.length &&
                    JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) &&
                    n.every(n => {
                        let r = t[n],
                            s = e[n];
                        return "function" == typeof r ? `${r}` == `${s}` : i(r) && i(s) ? o(r, s) : r === s;
                    })
                );
            }
            function s(t) {
                return t
                    .concat()
                    .sort((t, e) => (t.name > e.name ? 1 : -1))
                    .map(t => t.options);
            }
            function a(t) {
                return "number" == typeof t;
            }
            function l(t) {
                return "string" == typeof t;
            }
            function c(t) {
                return "boolean" == typeof t;
            }
            function u(t) {
                return "[object Object]" === Object.prototype.toString.call(t);
            }
            function h(t) {
                return Math.abs(t);
            }
            function d(t) {
                return Math.sign(t);
            }
            function p(t) {
                return y(t).map(Number);
            }
            function f(t) {
                return t[m(t)];
            }
            function m(t) {
                return Math.max(0, t.length - 1);
            }
            function g(t, e = 0) {
                return Array.from(Array(t), (t, n) => e + n);
            }
            function y(t) {
                return Object.keys(t);
            }
            function v(t, e) {
                return void 0 !== e.MouseEvent && t instanceof e.MouseEvent;
            }
            function b() {
                let t = [],
                    e = {
                        add: function (n, r, i, o = { passive: !0 }) {
                            let s;
                            return (
                                "addEventListener" in n ? (n.addEventListener(r, i, o), (s = () => n.removeEventListener(r, i, o))) : (n.addListener(i), (s = () => n.removeListener(i))), t.push(s), e
                            );
                        },
                        clear: function () {
                            t = t.filter(t => t());
                        },
                    };
                return e;
            }
            function w(t = 0, e = 0) {
                let n = h(t - e);
                function r(n) {
                    return n < t || n > e;
                }
                return {
                    length: n,
                    max: e,
                    min: t,
                    constrain: function (n) {
                        return r(n) ? (n < t ? t : e) : n;
                    },
                    reachedAny: r,
                    reachedMax: function (t) {
                        return t > e;
                    },
                    reachedMin: function (e) {
                        return e < t;
                    },
                    removeOffset: function (t) {
                        return n ? t - n * Math.ceil((t - e) / n) : t;
                    },
                };
            }
            function x(t) {
                let e = t;
                function n(t) {
                    return a(t) ? t : t.get();
                }
                return {
                    get: function () {
                        return e;
                    },
                    set: function (t) {
                        e = n(t);
                    },
                    add: function (t) {
                        e += n(t);
                    },
                    subtract: function (t) {
                        e -= n(t);
                    },
                };
            }
            function S(t, e) {
                let n =
                        "x" === t.scroll
                            ? function (t) {
                                  return `translate3d(${t}px,0px,0px)`;
                              }
                            : function (t) {
                                  return `translate3d(0px,${t}px,0px)`;
                              },
                    r = e.style,
                    i = !1;
                return {
                    clear: function () {
                        i || ((r.transform = ""), e.getAttribute("style") || e.removeAttribute("style"));
                    },
                    to: function (e) {
                        i || (r.transform = n(t.direction(e)));
                    },
                    toggleActive: function (t) {
                        i = !t;
                    },
                };
            }
            let k = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: "trimSnaps",
                direction: "ltr",
                slidesToScroll: 1,
                inViewThreshold: 0,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0,
            };
            function M(t, e, n) {
                let r, i, o, s, C;
                let E = t.ownerDocument,
                    O = E.defaultView,
                    _ = (function (t) {
                        function e(t, e) {
                            return (function t(e, n) {
                                return [e, n].reduce(
                                    (e, n) => (
                                        y(n).forEach(r => {
                                            let i = e[r],
                                                o = n[r],
                                                s = u(i) && u(o);
                                            e[r] = s ? t(i, o) : o;
                                        }),
                                        e
                                    ),
                                    {}
                                );
                            })(t, e || {});
                        }
                        return {
                            mergeOptions: e,
                            optionsAtMedia: function (n) {
                                let r = n.breakpoints || {},
                                    i = y(r)
                                        .filter(e => t.matchMedia(e).matches)
                                        .map(t => r[t])
                                        .reduce((t, n) => e(t, n), {});
                                return e(n, i);
                            },
                            optionsMediaQueries: function (e) {
                                return e
                                    .map(t => y(t.breakpoints || {}))
                                    .reduce((t, e) => t.concat(e), [])
                                    .map(t.matchMedia);
                            },
                        };
                    })(O),
                    T =
                        ((C = []),
                        {
                            init: function (t, e) {
                                return (C = e.filter(({ options: t }) => !1 !== _.optionsAtMedia(t).active)).forEach(e => e.init(t, _)), e.reduce((t, e) => Object.assign(t, { [e.name]: e }), {});
                            },
                            destroy: function () {
                                C = C.filter(t => t.destroy());
                            },
                        }),
                    P = b(),
                    A = (function () {
                        let t;
                        let e = {},
                            n = {
                                init: function (e) {
                                    t = e;
                                },
                                emit: function (r) {
                                    return (e[r] || []).forEach(e => e(t, r)), n;
                                },
                                off: function (t, r) {
                                    return (e[t] = (e[t] || []).filter(t => t !== r)), n;
                                },
                                on: function (t, r) {
                                    return (e[t] = (e[t] || []).concat([r])), n;
                                },
                            };
                        return n;
                    })(),
                    { mergeOptions: D, optionsAtMedia: I, optionsMediaQueries: R } = _,
                    { on: N, off: z, emit: j } = A,
                    L = !1,
                    F = D(k, M.globalOptions),
                    H = D(F),
                    B = [];
                function $(e, n) {
                    !L &&
                        ((H = I((F = D(F, e)))),
                        (B = n || B),
                        (function () {
                            let { container: e, slides: n } = H;
                            o = (l(e) ? t.querySelector(e) : e) || t.children[0];
                            let r = l(n) ? o.querySelectorAll(n) : n;
                            s = [].slice.call(r || o.children);
                        })(),
                        (r = (function e(n) {
                            let r = (function (t, e, n, r, i, o, s) {
                                let u, k;
                                let {
                                        align: M,
                                        axis: C,
                                        direction: E,
                                        startIndex: O,
                                        loop: _,
                                        duration: T,
                                        dragFree: P,
                                        dragThreshold: A,
                                        inViewThreshold: D,
                                        slidesToScroll: I,
                                        skipSnaps: R,
                                        containScroll: N,
                                        watchResize: z,
                                        watchSlides: j,
                                        watchDrag: L,
                                    } = o,
                                    F = {
                                        measure: function (t) {
                                            let { offsetTop: e, offsetLeft: n, offsetWidth: r, offsetHeight: i } = t;
                                            return { top: e, right: n + r, bottom: e + i, left: n, width: r, height: i };
                                        },
                                    },
                                    H = F.measure(e),
                                    B = n.map(F.measure),
                                    $ = (function (t, e) {
                                        let n = "rtl" === e,
                                            r = "y" === t,
                                            i = !r && n ? -1 : 1;
                                        return {
                                            scroll: r ? "y" : "x",
                                            cross: r ? "x" : "y",
                                            startEdge: r ? "top" : n ? "right" : "left",
                                            endEdge: r ? "bottom" : n ? "left" : "right",
                                            measureSize: function (t) {
                                                let { height: e, width: n } = t;
                                                return r ? e : n;
                                            },
                                            direction: function (t) {
                                                return t * i;
                                            },
                                        };
                                    })(C, E),
                                    W = $.measureSize(H),
                                    Z = {
                                        measure: function (t) {
                                            return (t / 100) * W;
                                        },
                                    },
                                    V = (function (t, e) {
                                        let n = {
                                            start: function () {
                                                return 0;
                                            },
                                            center: function (t) {
                                                return (e - t) / 2;
                                            },
                                            end: function (t) {
                                                return e - t;
                                            },
                                        };
                                        return {
                                            measure: function (r, i) {
                                                return l(t) ? n[t](r) : t(e, r, i);
                                            },
                                        };
                                    })(M, W),
                                    U = !_ && !!N,
                                    {
                                        slideSizes: Y,
                                        slideSizesWithGaps: J,
                                        startGap: q,
                                        endGap: K,
                                    } = (function (t, e, n, r, i, o) {
                                        let { measureSize: s, startEdge: a, endEdge: l } = t,
                                            c = n[0] && i,
                                            u = (function () {
                                                if (!c) return 0;
                                                let t = n[0];
                                                return h(e[a] - t[a]);
                                            })(),
                                            d = c ? parseFloat(o.getComputedStyle(f(r)).getPropertyValue(`margin-${l}`)) : 0,
                                            p = n.map(s),
                                            g = n
                                                .map((t, e, n) => {
                                                    let r = e === m(n);
                                                    return e ? (r ? p[e] + d : n[e + 1][a] - t[a]) : p[e] + u;
                                                })
                                                .map(h);
                                        return { slideSizes: p, slideSizesWithGaps: g, startGap: u, endGap: d };
                                    })($, H, B, n, _ || !!N, i),
                                    X = (function (t, e, n, r, i, o, s, l, c) {
                                        let { startEdge: u, endEdge: d, direction: g } = t,
                                            y = a(n);
                                        return {
                                            groupSlides: function (t) {
                                                return y
                                                    ? p(t)
                                                          .filter(t => t % n == 0)
                                                          .map(e => t.slice(e, e + n))
                                                    : t.length
                                                    ? p(t)
                                                          .reduce((n, a, c) => {
                                                              let p = f(n) || 0,
                                                                  y = a === m(t),
                                                                  v = i[u] - o[p][u],
                                                                  b = i[u] - o[a][d],
                                                                  w = r || 0 !== p ? 0 : g(s),
                                                                  x = h(b - (!r && y ? g(l) : 0) - (v + w));
                                                              return c && x > e + 2 && n.push(a), y && n.push(t.length), n;
                                                          }, [])
                                                          .map((e, n, r) => {
                                                              let i = Math.max(r[n - 1] || 0);
                                                              return t.slice(i, e);
                                                          })
                                                    : [];
                                            },
                                        };
                                    })($, W, I, _, H, B, q, K, 0),
                                    { snaps: G, snapsAligned: Q } = (function (t, e, n, r, i) {
                                        let { startEdge: o, endEdge: s } = t,
                                            { groupSlides: a } = i,
                                            l = a(r)
                                                .map(t => f(t)[s] - t[0][o])
                                                .map(h)
                                                .map(e.measure),
                                            c = r.map(t => n[o] - t[o]).map(t => -h(t)),
                                            u = a(c)
                                                .map(t => t[0])
                                                .map((t, e) => t + l[e]);
                                        return { snaps: c, snapsAligned: u };
                                    })($, V, H, B, X),
                                    tt = -f(G) + f(J),
                                    { snapsContained: te, scrollContainLimit: tn } = (function (t, e, n, r, i) {
                                        let o = w(-e + t, 0),
                                            s = n
                                                .map((t, e) => {
                                                    let { min: r, max: i } = o,
                                                        s = o.constrain(t),
                                                        a = e === m(n);
                                                    return e ? (a || 1 > h(r - s) ? r : 1 > h(i - s) ? i : s) : i;
                                                })
                                                .map(t => parseFloat(t.toFixed(3))),
                                            a = (function () {
                                                let t = s[0],
                                                    e = f(s);
                                                return w(s.lastIndexOf(t), s.indexOf(e) + 1);
                                            })();
                                        return {
                                            snapsContained: (function () {
                                                if (e <= t + 2) return [o.max];
                                                if ("keepSnaps" === r) return s;
                                                let { min: n, max: i } = a;
                                                return s.slice(n, i);
                                            })(),
                                            scrollContainLimit: a,
                                        };
                                    })(W, tt, Q, N, 0),
                                    tr = U ? te : Q,
                                    { limit: ti } = (function (t, e, n) {
                                        let r = e[0];
                                        return { limit: w(n ? r - t : f(e), r) };
                                    })(tt, tr, _),
                                    to = (function t(e, n, r) {
                                        let { constrain: i } = w(0, e),
                                            o = e + 1,
                                            s = a(n);
                                        function a(t) {
                                            return r ? h((o + t) % o) : i(t);
                                        }
                                        function l() {
                                            return t(e, s, r);
                                        }
                                        let c = {
                                            get: function () {
                                                return s;
                                            },
                                            set: function (t) {
                                                return (s = a(t)), c;
                                            },
                                            add: function (t) {
                                                return l().set(s + t);
                                            },
                                            clone: l,
                                        };
                                        return c;
                                    })(m(tr), O, _),
                                    ts = to.clone(),
                                    ta = p(n),
                                    tl = ({ dragHandler: t, scrollBody: e, scrollBounds: n, options: { loop: r } }) => {
                                        r || n.constrain(t.pointerDown()), e.seek();
                                    },
                                    tc = (
                                        {
                                            scrollBody: t,
                                            translate: e,
                                            location: n,
                                            offsetLocation: r,
                                            scrollLooper: i,
                                            slideLooper: o,
                                            dragHandler: s,
                                            animation: a,
                                            eventHandler: l,
                                            options: { loop: c },
                                        },
                                        u
                                    ) => {
                                        let h = t.velocity(),
                                            d = t.settled();
                                        d && !s.pointerDown() && (a.stop(), l.emit("settle")), d || l.emit("scroll"), r.set(n.get() - h + h * u), c && (i.loop(t.direction()), o.loop()), e.to(r.get());
                                    },
                                    tu = (function (t, e, n, r) {
                                        let i = b(),
                                            o = 1e3 / 60,
                                            s = null,
                                            a = 0,
                                            l = 0;
                                        function c(t) {
                                            if (!l) return;
                                            s || (s = t);
                                            let i = t - s;
                                            for (s = t, a += i; a >= o; ) n(), (a -= o);
                                            r(h(a / o)), l && e.requestAnimationFrame(c);
                                        }
                                        function u() {
                                            e.cancelAnimationFrame(l), (s = null), (a = 0), (l = 0);
                                        }
                                        return {
                                            init: function () {
                                                i.add(t, "visibilitychange", () => {
                                                    t.hidden && ((s = null), (a = 0));
                                                });
                                            },
                                            destroy: function () {
                                                u(), i.clear();
                                            },
                                            start: function () {
                                                l || (l = e.requestAnimationFrame(c));
                                            },
                                            stop: u,
                                            update: n,
                                            render: r,
                                        };
                                    })(
                                        r,
                                        i,
                                        () => tl(tk),
                                        t => tc(tk, t)
                                    ),
                                    th = tr[to.get()],
                                    td = x(th),
                                    tp = x(th),
                                    tf = x(th),
                                    tm = (function (t, e, n, r, i) {
                                        let o = 0,
                                            s = 0,
                                            a = r,
                                            l = 0.68,
                                            c = t.get(),
                                            u = 0;
                                        function p(t) {
                                            return (a = t), m;
                                        }
                                        function f(t) {
                                            return (l = t), m;
                                        }
                                        let m = {
                                            direction: function () {
                                                return s;
                                            },
                                            duration: function () {
                                                return a;
                                            },
                                            velocity: function () {
                                                return o;
                                            },
                                            seek: function () {
                                                let e = n.get() - t.get(),
                                                    r = 0;
                                                return a ? ((o += e / a), (o *= l), (c += o), t.add(o), (r = c - u)) : ((o = 0), t.set(n), (r = e)), (s = d(r)), (u = c), m;
                                            },
                                            settled: function () {
                                                return 0.001 > h(n.get() - e.get());
                                            },
                                            useBaseFriction: function () {
                                                return f(0.68);
                                            },
                                            useBaseDuration: function () {
                                                return p(r);
                                            },
                                            useFriction: f,
                                            useDuration: p,
                                        };
                                        return m;
                                    })(td, tp, tf, T, 0),
                                    tg = (function (t, e, n, r, i) {
                                        let { reachedAny: o, removeOffset: s, constrain: a } = r;
                                        function l(t) {
                                            return t.concat().sort((t, e) => h(t) - h(e))[0];
                                        }
                                        function c(e, r) {
                                            let i = [e, e + n, e - n];
                                            if (!t) return i[0];
                                            if (!r) return l(i);
                                            let o = i.filter(t => d(t) === r);
                                            return o.length ? l(o) : f(i) - n;
                                        }
                                        return {
                                            byDistance: function (n, r) {
                                                let l = i.get() + n,
                                                    { index: u, distance: d } = (function (n) {
                                                        let r = t ? s(n) : a(n),
                                                            { index: i } = e.map((t, e) => ({ diff: c(t - r, 0), index: e })).sort((t, e) => h(t.diff) - h(e.diff))[0];
                                                        return { index: i, distance: r };
                                                    })(l),
                                                    p = !t && o(l);
                                                if (!r || p) return { index: u, distance: n };
                                                let f = n + c(e[u] - d, 0);
                                                return { index: u, distance: f };
                                            },
                                            byIndex: function (t, n) {
                                                let r = c(e[t] - i.get(), n);
                                                return { index: t, distance: r };
                                            },
                                            shortcut: c,
                                        };
                                    })(_, tr, tt, ti, tf),
                                    ty = (function (t, e, n, r, i, o, s) {
                                        function a(i) {
                                            let a = i.distance,
                                                l = i.index !== e.get();
                                            o.add(a), a && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), l && (n.set(e.get()), e.set(i.index), s.emit("select"));
                                        }
                                        return {
                                            distance: function (t, e) {
                                                a(i.byDistance(t, e));
                                            },
                                            index: function (t, n) {
                                                let r = e.clone().set(t);
                                                a(i.byIndex(r.get(), n));
                                            },
                                        };
                                    })(tu, to, ts, tm, tg, tf, s),
                                    tv = (function (t) {
                                        let { max: e, length: n } = t;
                                        return {
                                            get: function (t) {
                                                return n ? -((t - e) / n) : 0;
                                            },
                                        };
                                    })(ti),
                                    tb = b(),
                                    tw = (function (t, e, n, r) {
                                        let i;
                                        let o = {},
                                            s = null,
                                            a = null,
                                            l = !1;
                                        return {
                                            init: function () {
                                                (i = new IntersectionObserver(
                                                    t => {
                                                        l ||
                                                            (t.forEach(t => {
                                                                o[e.indexOf(t.target)] = t;
                                                            }),
                                                            (s = null),
                                                            (a = null),
                                                            n.emit("slidesInView"));
                                                    },
                                                    { root: t.parentElement, threshold: r }
                                                )),
                                                    e.forEach(t => i.observe(t));
                                            },
                                            destroy: function () {
                                                i && i.disconnect(), (l = !0);
                                            },
                                            get: function (t = !0) {
                                                if (t && s) return s;
                                                if (!t && a) return a;
                                                let e = y(o).reduce((e, n) => {
                                                    let r = parseInt(n),
                                                        { isIntersecting: i } = o[r];
                                                    return ((t && i) || (!t && !i)) && e.push(r), e;
                                                }, []);
                                                return t && (s = e), t || (a = e), e;
                                            },
                                        };
                                    })(e, n, s, D),
                                    { slideRegistry: tx } = (function (t, e, n, r, i, o) {
                                        let { groupSlides: s } = i,
                                            { min: a, max: l } = r;
                                        return {
                                            slideRegistry: (function () {
                                                let r = s(o);
                                                return 1 === n.length
                                                    ? [o]
                                                    : t && "keepSnaps" !== e
                                                    ? r.slice(a, l).map((t, e, n) => {
                                                          let r = e === m(n);
                                                          return e ? (r ? g(m(o) - f(n)[0] + 1, f(n)[0]) : t) : g(f(n[0]) + 1);
                                                      })
                                                    : r;
                                            })(),
                                        };
                                    })(U, N, tr, tn, X, ta),
                                    tS = (function (t, e, n, r, i, o) {
                                        let s = 0;
                                        function l(t) {
                                            "Tab" === t.code && (s = new Date().getTime());
                                        }
                                        function c(l) {
                                            o.add(
                                                l,
                                                "focus",
                                                () => {
                                                    if (new Date().getTime() - s > 10) return;
                                                    t.scrollLeft = 0;
                                                    let o = e.indexOf(l),
                                                        c = n.findIndex(t => t.includes(o));
                                                    a(c) && (i.useDuration(0), r.index(c, 0));
                                                },
                                                { passive: !0, capture: !0 }
                                            );
                                        }
                                        return {
                                            init: function () {
                                                o.add(document, "keydown", l, !1), e.forEach(c);
                                            },
                                        };
                                    })(t, n, tx, ty, tm, tb),
                                    tk = {
                                        ownerDocument: r,
                                        ownerWindow: i,
                                        eventHandler: s,
                                        containerRect: H,
                                        slideRects: B,
                                        animation: tu,
                                        axis: $,
                                        dragHandler: (function (t, e, n, r, i, o, s, a, l, u, p, f, m, g, y, x, S, k, M) {
                                            let { cross: C, direction: E } = t,
                                                O = ["INPUT", "SELECT", "TEXTAREA"],
                                                _ = { passive: !1 },
                                                T = b(),
                                                P = b(),
                                                A = w(50, 225).constrain(g.measure(20)),
                                                D = { mouse: 300, touch: 400 },
                                                I = { mouse: 500, touch: 600 },
                                                R = y ? 43 : 25,
                                                N = !1,
                                                z = 0,
                                                j = 0,
                                                L = !1,
                                                F = !1,
                                                H = !1,
                                                B = !1;
                                            function $(t) {
                                                if (!v(t, r) && t.touches.length >= 2) return W(t);
                                                let e = o.readPoint(t),
                                                    n = o.readPoint(t, C),
                                                    s = h(e - z),
                                                    l = h(n - j);
                                                if (!F && !B && (!t.cancelable || !(F = s > l))) return W(t);
                                                let c = o.pointerMove(t);
                                                s > x && (H = !0), u.useFriction(0.3).useDuration(1), a.start(), i.add(E(c)), t.preventDefault();
                                            }
                                            function W(t) {
                                                let e = p.byDistance(0, !1).index !== f.get(),
                                                    n = o.pointerUp(t) * (y ? I : D)[B ? "mouse" : "touch"],
                                                    r = (function (t, e) {
                                                        let n = f.add(-1 * d(t)),
                                                            r = p.byDistance(t, !y).distance;
                                                        return y || h(t) < A ? r : S && e ? 0.5 * r : p.byIndex(n.get(), 0).distance;
                                                    })(E(n), e),
                                                    i = (function (t, e) {
                                                        var n, r;
                                                        if (0 === t || 0 === e || h(t) <= h(e)) return 0;
                                                        let i = ((n = h(t)), (r = h(e)), h(n - r));
                                                        return h(i / t);
                                                    })(n, r);
                                                (F = !1), (L = !1), P.clear(), u.useDuration(R - 10 * i).useFriction(0.68 + i / 50), l.distance(r, !y), (B = !1), m.emit("pointerUp");
                                            }
                                            function Z(t) {
                                                H && (t.stopPropagation(), t.preventDefault(), (H = !1));
                                            }
                                            return {
                                                init: function (t) {
                                                    M &&
                                                        T.add(e, "dragstart", t => t.preventDefault(), _)
                                                            .add(e, "touchmove", () => void 0, _)
                                                            .add(e, "touchend", () => void 0)
                                                            .add(e, "touchstart", a)
                                                            .add(e, "mousedown", a)
                                                            .add(e, "touchcancel", W)
                                                            .add(e, "contextmenu", W)
                                                            .add(e, "click", Z, !0);
                                                    function a(a) {
                                                        (c(M) || M(t, a)) &&
                                                            (function (t) {
                                                                let a = v(t, r);
                                                                (B = a),
                                                                    (H = y && a && !t.buttons && N),
                                                                    (N = h(i.get() - s.get()) >= 2),
                                                                    (a && 0 !== t.button) ||
                                                                        (function (t) {
                                                                            let e = t.nodeName || "";
                                                                            return O.includes(e);
                                                                        })(t.target) ||
                                                                        ((L = !0),
                                                                        o.pointerDown(t),
                                                                        u.useFriction(0).useDuration(0),
                                                                        i.set(s),
                                                                        (function () {
                                                                            let t = B ? n : e;
                                                                            P.add(t, "touchmove", $, _).add(t, "touchend", W).add(t, "mousemove", $, _).add(t, "mouseup", W);
                                                                        })(),
                                                                        (z = o.readPoint(t)),
                                                                        (j = o.readPoint(t, C)),
                                                                        m.emit("pointerDown"));
                                                            })(a);
                                                    }
                                                },
                                                pointerDown: function () {
                                                    return L;
                                                },
                                                destroy: function () {
                                                    T.clear(), P.clear();
                                                },
                                            };
                                        })(
                                            $,
                                            t,
                                            r,
                                            i,
                                            tf,
                                            (function (t, e) {
                                                let n, r;
                                                function i(t) {
                                                    return t.timeStamp;
                                                }
                                                function o(n, r) {
                                                    let i = r || t.scroll,
                                                        o = `client${"x" === i ? "X" : "Y"}`;
                                                    return (v(n, e) ? n : n.touches[0])[o];
                                                }
                                                return {
                                                    pointerDown: function (t) {
                                                        return (n = t), (r = t), o(t);
                                                    },
                                                    pointerMove: function (t) {
                                                        let e = o(t) - o(r),
                                                            s = i(t) - i(n) > 170;
                                                        return (r = t), s && (n = t), e;
                                                    },
                                                    pointerUp: function (t) {
                                                        if (!n || !r) return 0;
                                                        let e = o(r) - o(n),
                                                            s = i(t) - i(n),
                                                            a = i(t) - i(r) > 170,
                                                            l = e / s;
                                                        return s && !a && h(l) > 0.1 ? l : 0;
                                                    },
                                                    readPoint: o,
                                                };
                                            })($, i),
                                            td,
                                            tu,
                                            ty,
                                            tm,
                                            tg,
                                            to,
                                            s,
                                            Z,
                                            P,
                                            A,
                                            R,
                                            0,
                                            L
                                        ),
                                        eventStore: tb,
                                        percentOfView: Z,
                                        index: to,
                                        indexPrevious: ts,
                                        limit: ti,
                                        location: td,
                                        offsetLocation: tp,
                                        options: o,
                                        resizeHandler: (function (t, e, n, r, i, o, s) {
                                            let a, l;
                                            let u = [],
                                                d = !1;
                                            function p(t) {
                                                return i.measureSize(s.measure(t));
                                            }
                                            return {
                                                init: function (i) {
                                                    o &&
                                                        ((l = p(t)),
                                                        (u = r.map(p)),
                                                        (a = new ResizeObserver(s => {
                                                            !d &&
                                                                (c(o) || o(i, s)) &&
                                                                (function (o) {
                                                                    for (let s of o) {
                                                                        let o = s.target === t,
                                                                            a = r.indexOf(s.target),
                                                                            c = o ? l : u[a];
                                                                        if (h(p(o ? t : r[a]) - c) >= 0.5) {
                                                                            n.requestAnimationFrame(() => {
                                                                                i.reInit(), e.emit("resize");
                                                                            });
                                                                            break;
                                                                        }
                                                                    }
                                                                })(s);
                                                        })),
                                                        [t].concat(r).forEach(t => a.observe(t)));
                                                },
                                                destroy: function () {
                                                    a && a.disconnect(), (d = !0);
                                                },
                                            };
                                        })(e, s, i, n, $, z, F),
                                        scrollBody: tm,
                                        scrollBounds: (function (t, e, n, r, i) {
                                            let o = i.measure(10),
                                                s = i.measure(50),
                                                a = w(0.1, 0.99),
                                                l = !1;
                                            return {
                                                constrain: function (i) {
                                                    if (!(!l && t.reachedAny(n.get()) && t.reachedAny(e.get()))) return;
                                                    let c = t.reachedMin(e.get()) ? "min" : "max",
                                                        u = h(t[c] - e.get()),
                                                        d = n.get() - e.get(),
                                                        p = a.constrain(u / s);
                                                    n.subtract(d * p), !i && h(d) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
                                                },
                                                toggleActive: function (t) {
                                                    l = !t;
                                                },
                                            };
                                        })(ti, tp, tf, tm, Z),
                                        scrollLooper: (function (t, e, n, r) {
                                            let { reachedMin: i, reachedMax: o } = w(e.min + 0.1, e.max + 0.1);
                                            return {
                                                loop: function (e) {
                                                    if (!(1 === e ? o(n.get()) : -1 === e && i(n.get()))) return;
                                                    let s = -1 * e * t;
                                                    r.forEach(t => t.add(s));
                                                },
                                            };
                                        })(tt, ti, tp, [td, tp, tf]),
                                        scrollProgress: tv,
                                        scrollSnapList: tr.map(tv.get),
                                        scrollSnaps: tr,
                                        scrollTarget: tg,
                                        scrollTo: ty,
                                        slideLooper: (function (t, e, n, r, i, o, s, a, l) {
                                            let c = p(i),
                                                u = f(d(p(i).reverse(), s[0]), n, !1).concat(f(d(c, e - s[0] - 1), -n, !0));
                                            function h(t, e) {
                                                return t.reduce((t, e) => t - i[e], e);
                                            }
                                            function d(t, e) {
                                                return t.reduce((t, n) => (h(t, e) > 0 ? t.concat([n]) : t), []);
                                            }
                                            function f(i, s, c) {
                                                let u = o.map((t, n) => ({ start: t - r[n] + 0.5 + s, end: t + e - 0.5 + s }));
                                                return i.map(e => {
                                                    let r = c ? 0 : -n,
                                                        i = c ? n : 0,
                                                        o = u[e][c ? "end" : "start"];
                                                    return { index: e, loopPoint: o, slideLocation: x(-1), translate: S(t, l[e]), target: () => (a.get() > o ? r : i) };
                                                });
                                            }
                                            return {
                                                canLoop: function () {
                                                    return u.every(
                                                        ({ index: t }) =>
                                                            0.1 >=
                                                            h(
                                                                c.filter(e => e !== t),
                                                                e
                                                            )
                                                    );
                                                },
                                                clear: function () {
                                                    u.forEach(t => t.translate.clear());
                                                },
                                                loop: function () {
                                                    u.forEach(t => {
                                                        let { target: e, translate: n, slideLocation: r } = t,
                                                            i = e();
                                                        i !== r.get() && (n.to(i), r.set(i));
                                                    });
                                                },
                                                loopPoints: u,
                                            };
                                        })($, W, tt, Y, J, G, tr, tp, n),
                                        slideFocus: tS,
                                        slidesHandler:
                                            ((k = !1),
                                            {
                                                init: function (t) {
                                                    j &&
                                                        (u = new MutationObserver(e => {
                                                            !k &&
                                                                (c(j) || j(t, e)) &&
                                                                (function (e) {
                                                                    for (let n of e)
                                                                        if ("childList" === n.type) {
                                                                            t.reInit(), s.emit("slidesChanged");
                                                                            break;
                                                                        }
                                                                })(e);
                                                        })).observe(e, { childList: !0 });
                                                },
                                                destroy: function () {
                                                    u && u.disconnect(), (k = !0);
                                                },
                                            }),
                                        slidesInView: tw,
                                        slideIndexes: ta,
                                        slideRegistry: tx,
                                        slidesToScroll: X,
                                        target: tf,
                                        translate: S($, e),
                                    };
                                return tk;
                            })(t, o, s, E, O, n, A);
                            return n.loop && !r.slideLooper.canLoop() ? e(Object.assign({}, n, { loop: !1 })) : r;
                        })(H)),
                        R([F, ...B.map(({ options: t }) => t)]).forEach(t => P.add(t, "change", W)),
                        H.active &&
                            (r.translate.to(r.location.get()),
                            r.animation.init(),
                            r.slidesInView.init(),
                            r.slideFocus.init(),
                            r.eventHandler.init(Y),
                            r.resizeHandler.init(Y),
                            r.slidesHandler.init(Y),
                            r.options.loop && r.slideLooper.loop(),
                            o.offsetParent && s.length && r.dragHandler.init(Y),
                            (i = T.init(Y, B))));
                }
                function W(t, e) {
                    let n = U();
                    Z(), $(D({ startIndex: n }, t), e), A.emit("reInit");
                }
                function Z() {
                    r.dragHandler.destroy(),
                        r.eventStore.clear(),
                        r.translate.clear(),
                        r.slideLooper.clear(),
                        r.resizeHandler.destroy(),
                        r.slidesHandler.destroy(),
                        r.slidesInView.destroy(),
                        r.animation.destroy(),
                        T.destroy(),
                        P.clear();
                }
                function V(t, e, n) {
                    H.active && !L && (r.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : H.duration), r.scrollTo.index(t, n || 0));
                }
                function U() {
                    return r.index.get();
                }
                let Y = {
                    canScrollNext: function () {
                        return r.index.add(1).get() !== U();
                    },
                    canScrollPrev: function () {
                        return r.index.add(-1).get() !== U();
                    },
                    containerNode: function () {
                        return o;
                    },
                    internalEngine: function () {
                        return r;
                    },
                    destroy: function () {
                        L || ((L = !0), P.clear(), Z(), A.emit("destroy"));
                    },
                    off: z,
                    on: N,
                    emit: j,
                    plugins: function () {
                        return i;
                    },
                    previousScrollSnap: function () {
                        return r.indexPrevious.get();
                    },
                    reInit: W,
                    rootNode: function () {
                        return t;
                    },
                    scrollNext: function (t) {
                        V(r.index.add(1).get(), t, -1);
                    },
                    scrollPrev: function (t) {
                        V(r.index.add(-1).get(), t, 1);
                    },
                    scrollProgress: function () {
                        return r.scrollProgress.get(r.location.get());
                    },
                    scrollSnapList: function () {
                        return r.scrollSnapList;
                    },
                    scrollTo: V,
                    selectedScrollSnap: U,
                    slideNodes: function () {
                        return s;
                    },
                    slidesInView: function () {
                        return r.slidesInView.get();
                    },
                    slidesNotInView: function () {
                        return r.slidesInView.get(!1);
                    },
                };
                return $(e, n), setTimeout(() => A.emit("init"), 0), Y;
            }
            function C(t = {}, e = []) {
                let n = (0, r.useRef)(t),
                    i = (0, r.useRef)(e),
                    [a, l] = (0, r.useState)(),
                    [c, u] = (0, r.useState)(),
                    h = (0, r.useCallback)(() => {
                        a && a.reInit(n.current, i.current);
                    }, [a]);
                return (
                    (0, r.useEffect)(() => {
                        if ("undefined" != typeof window && window.document && window.document.createElement && c) {
                            M.globalOptions = C.globalOptions;
                            let t = M(c, n.current, i.current);
                            return l(t), () => t.destroy();
                        }
                        l(void 0);
                    }, [c, l]),
                    (0, r.useEffect)(() => {
                        o(n.current, t) || ((n.current = t), h());
                    }, [t, h]),
                    (0, r.useEffect)(() => {
                        !(function (t, e) {
                            if (t.length !== e.length) return !1;
                            let n = s(t),
                                r = s(e);
                            return n.every((t, e) => o(t, r[e]));
                        })(i.current, e) && ((i.current = e), h());
                    }, [e, h]),
                    [u, a]
                );
            }
            (M.globalOptions = void 0), (C.globalOptions = void 0);
        },
        19653: function (t, e, n) {
            "use strict";
            n.d(e, {
                E: function () {
                    return u;
                },
            });
            var r = n(13223),
                i = n(48771),
                o = n(63466);
            function s(t, e) {
                [...e].reverse().forEach(n => {
                    let r = t.getVariant(n);
                    r && (0, i.C)(t, r),
                        t.variantChildren &&
                            t.variantChildren.forEach(t => {
                                s(t, e);
                            });
                });
            }
            function a() {
                let t = !1,
                    e = new Set(),
                    n = {
                        subscribe: t => (e.add(t), () => void e.delete(t)),
                        start(n, i) {
                            (0, r.k)(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let s = [];
                            return (
                                e.forEach(t => {
                                    s.push((0, o.d)(t, n, { transitionOverride: i }));
                                }),
                                Promise.all(s)
                            );
                        },
                        set: n => (
                            (0, r.k)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
                            e.forEach(t => {
                                Array.isArray(n) ? s(t, n) : "string" == typeof n ? s(t, [n]) : (0, i.C)(t, n);
                            })
                        ),
                        stop() {
                            e.forEach(t => {
                                !(function (t) {
                                    t.values.forEach(t => t.stop());
                                })(t);
                            });
                        },
                        mount: () => (
                            (t = !0),
                            () => {
                                (t = !1), n.stop();
                            }
                        ),
                    };
                return n;
            }
            var l = n(53576),
                c = n(11534);
            function u() {
                let t = (0, l.h)(a);
                return (0, c.L)(t.mount, []), t;
            }
        },
        77562: function (t, e, n) {
            "use strict";
            var r = n(24441);
            e.ZP = r.default || r;
        },
        64131: function (t, e, n) {
            "use strict";
            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r];
                }
                return t;
            }
            n.d(e, {
                Z: function () {
                    return i;
                },
            });
            var i = (function t(e, n) {
                function i(t, i, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (o = r({}, n, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                            o.expires && (o.expires = o.expires.toUTCString()),
                            (t = encodeURIComponent(t)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape));
                        var s = "";
                        for (var a in o) o[a] && ((s += "; " + a), !0 !== o[a] && (s += "=" + o[a].split(";")[0]));
                        return (document.cookie = t + "=" + e.write(i, t) + s);
                    }
                }
                return Object.create(
                    {
                        set: i,
                        get: function (t) {
                            if ("undefined" != typeof document && (!arguments.length || t)) {
                                for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < n.length; i++) {
                                    var o = n[i].split("="),
                                        s = o.slice(1).join("=");
                                    try {
                                        var a = decodeURIComponent(o[0]);
                                        if (((r[a] = e.read(s, a)), t === a)) break;
                                    } catch (t) {}
                                }
                                return t ? r[t] : r;
                            }
                        },
                        remove: function (t, e) {
                            i(t, "", r({}, e, { expires: -1 }));
                        },
                        withAttributes: function (e) {
                            return t(this.converter, r({}, this.attributes, e));
                        },
                        withConverter: function (e) {
                            return t(r({}, this.converter, e), this.attributes);
                        },
                    },
                    { attributes: { value: Object.freeze(n) }, converter: { value: Object.freeze(e) } }
                );
            })(
                {
                    read: function (t) {
                        return '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                    },
                    write: function (t) {
                        return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                    },
                },
                { path: "/" }
            );
        },
        20946: function (t, e, n) {
            "use strict";
            n.d(e, {
                Ig: function () {
                    return w;
                },
                MI: function () {
                    return b;
                },
                N0: function () {
                    return O;
                },
                NE: function () {
                    return s;
                },
                QK: function () {
                    return S;
                },
                U9: function () {
                    return P;
                },
                X0: function () {
                    return E;
                },
                Y_: function () {
                    return g;
                },
                _M: function () {
                    return p;
                },
                al: function () {
                    return l;
                },
                cR: function () {
                    return u;
                },
                mD: function () {
                    return C;
                },
                nw: function () {
                    return A;
                },
                o: function () {
                    return y;
                },
                rr: function () {
                    return c;
                },
                uJ: function () {
                    return I;
                },
                uo: function () {
                    return M;
                },
                xb: function () {
                    return x;
                },
                ym: function () {
                    return D;
                },
            });
            var r = n(94536),
                i = n(10121),
                o = n(17213);
            let s = (t, e) => !t.selection.empty && (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
            function a(t, e) {
                let { $cursor: n } = t.selection;
                return n && (e ? e.endOfTextblock("backward", t) : !(n.parentOffset > 0)) ? n : null;
            }
            let l = (t, e, n) => {
                    let s = a(t, n);
                    if (!s) return !1;
                    let l = f(s);
                    if (!l) {
                        let n = s.blockRange(),
                            i = n && (0, r.k9)(n);
                        return null != i && (e && e(t.tr.lift(n, i).scrollIntoView()), !0);
                    }
                    let c = l.nodeBefore;
                    if (!c.type.spec.isolating && _(t, l, e)) return !0;
                    if (0 == s.parent.content.size && (d(c, "end") || o.qv.isSelectable(c))) {
                        let n = (0, r.dR)(t.doc, s.before(), s.after(), i.p2.empty);
                        if (n && n.slice.size < n.to - n.from) {
                            if (e) {
                                let r = t.tr.step(n);
                                r.setSelection(d(c, "end") ? o.Y1.findFrom(r.doc.resolve(r.mapping.map(l.pos, -1)), -1) : o.qv.create(r.doc, l.pos - c.nodeSize)), e(r.scrollIntoView());
                            }
                            return !0;
                        }
                    }
                    return !!c.isAtom && l.depth == s.depth - 1 && (e && e(t.tr.delete(l.pos - c.nodeSize, l.pos).scrollIntoView()), !0);
                },
                c = (t, e, n) => {
                    let r = a(t, n);
                    if (!r) return !1;
                    let i = f(r);
                    return !!i && h(t, i, e);
                },
                u = (t, e, n) => {
                    let r = m(t, n);
                    if (!r) return !1;
                    let i = v(r);
                    return !!i && h(t, i, e);
                };
            function h(t, e, n) {
                let s = e.nodeBefore,
                    a = e.pos - 1;
                for (; !s.isTextblock; a--) {
                    if (s.type.spec.isolating) return !1;
                    let t = s.lastChild;
                    if (!t) return !1;
                    s = t;
                }
                let l = e.nodeAfter,
                    c = e.pos + 1;
                for (; !l.isTextblock; c++) {
                    if (l.type.spec.isolating) return !1;
                    let t = l.firstChild;
                    if (!t) return !1;
                    l = t;
                }
                let u = (0, r.dR)(t.doc, a, c, i.p2.empty);
                if (!u || u.from != a || (u instanceof r.Pu && u.slice.size >= c - a)) return !1;
                if (n) {
                    let e = t.tr.step(u);
                    e.setSelection(o.Bs.create(e.doc, a)), n(e.scrollIntoView());
                }
                return !0;
            }
            function d(t, e, n = !1) {
                for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
                    if (r.isTextblock) return !0;
                    if (n && 1 != r.childCount) break;
                }
                return !1;
            }
            let p = (t, e, n) => {
                let { $head: r, empty: i } = t.selection,
                    s = r;
                if (!i) return !1;
                if (r.parent.isTextblock) {
                    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0) return !1;
                    s = f(r);
                }
                let a = s && s.nodeBefore;
                return !!(a && o.qv.isSelectable(a)) && (e && e(t.tr.setSelection(o.qv.create(t.doc, s.pos - a.nodeSize)).scrollIntoView()), !0);
            };
            function f(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
                        if (t.node(e).type.spec.isolating) break;
                    }
                return null;
            }
            function m(t, e) {
                let { $cursor: n } = t.selection;
                return n && (e ? e.endOfTextblock("forward", t) : !(n.parentOffset < n.parent.content.size)) ? n : null;
            }
            let g = (t, e, n) => {
                    let s = m(t, n);
                    if (!s) return !1;
                    let a = v(s);
                    if (!a) return !1;
                    let l = a.nodeAfter;
                    if (_(t, a, e)) return !0;
                    if (0 == s.parent.content.size && (d(l, "start") || o.qv.isSelectable(l))) {
                        let n = (0, r.dR)(t.doc, s.before(), s.after(), i.p2.empty);
                        if (n && n.slice.size < n.to - n.from) {
                            if (e) {
                                let r = t.tr.step(n);
                                r.setSelection(d(l, "start") ? o.Y1.findFrom(r.doc.resolve(r.mapping.map(a.pos)), 1) : o.qv.create(r.doc, r.mapping.map(a.pos))), e(r.scrollIntoView());
                            }
                            return !0;
                        }
                    }
                    return !!l.isAtom && a.depth == s.depth - 1 && (e && e(t.tr.delete(a.pos, a.pos + l.nodeSize).scrollIntoView()), !0);
                },
                y = (t, e, n) => {
                    let { $head: r, empty: i } = t.selection,
                        s = r;
                    if (!i) return !1;
                    if (r.parent.isTextblock) {
                        if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size) return !1;
                        s = v(r);
                    }
                    let a = s && s.nodeAfter;
                    return !!(a && o.qv.isSelectable(a)) && (e && e(t.tr.setSelection(o.qv.create(t.doc, s.pos)).scrollIntoView()), !0);
                };
            function v(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        let n = t.node(e);
                        if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
                        if (n.type.spec.isolating) break;
                    }
                return null;
            }
            let b = (t, e) => {
                    let n = t.selection,
                        i = n instanceof o.qv,
                        s;
                    if (i) {
                        if (n.node.isTextblock || !(0, r.Mn)(t.doc, n.from)) return !1;
                        s = n.from;
                    } else if (null == (s = (0, r.GJ)(t.doc, n.from, -1))) return !1;
                    if (e) {
                        let n = t.tr.join(s);
                        i && n.setSelection(o.qv.create(n.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(n.scrollIntoView());
                    }
                    return !0;
                },
                w = (t, e) => {
                    let n = t.selection,
                        i;
                    if (n instanceof o.qv) {
                        if (n.node.isTextblock || !(0, r.Mn)(t.doc, n.to)) return !1;
                        i = n.to;
                    } else if (null == (i = (0, r.GJ)(t.doc, n.to, 1))) return !1;
                    return e && e(t.tr.join(i).scrollIntoView()), !0;
                },
                x = (t, e) => {
                    let { $from: n, $to: i } = t.selection,
                        o = n.blockRange(i),
                        s = o && (0, r.k9)(o);
                    return null != s && (e && e(t.tr.lift(o, s).scrollIntoView()), !0);
                },
                S = (t, e) => {
                    let { $head: n, $anchor: r } = t.selection;
                    return !!(n.parent.type.spec.code && n.sameParent(r)) && (e && e(t.tr.insertText("\n").scrollIntoView()), !0);
                };
            function k(t) {
                for (let e = 0; e < t.edgeCount; e++) {
                    let { type: n } = t.edge(e);
                    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
                }
                return null;
            }
            let M = (t, e) => {
                    let { $head: n, $anchor: r } = t.selection;
                    if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
                    let i = n.node(-1),
                        s = n.indexAfter(-1),
                        a = k(i.contentMatchAt(s));
                    if (!a || !i.canReplaceWith(s, s, a)) return !1;
                    if (e) {
                        let r = n.after(),
                            i = t.tr.replaceWith(r, r, a.createAndFill());
                        i.setSelection(o.Y1.near(i.doc.resolve(r), 1)), e(i.scrollIntoView());
                    }
                    return !0;
                },
                C = (t, e) => {
                    let n = t.selection,
                        { $from: r, $to: i } = n;
                    if (n instanceof o.C1 || r.parent.inlineContent || i.parent.inlineContent) return !1;
                    let s = k(i.parent.contentMatchAt(i.indexAfter()));
                    if (!s || !s.isTextblock) return !1;
                    if (e) {
                        let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos,
                            a = t.tr.insert(n, s.createAndFill());
                        a.setSelection(o.Bs.create(a.doc, n + 1)), e(a.scrollIntoView());
                    }
                    return !0;
                },
                E = (t, e) => {
                    let { $cursor: n } = t.selection;
                    if (!n || n.parent.content.size) return !1;
                    if (n.depth > 1 && n.after() != n.end(-1)) {
                        let i = n.before();
                        if ((0, r.Ax)(t.doc, i)) return e && e(t.tr.split(i).scrollIntoView()), !0;
                    }
                    let i = n.blockRange(),
                        o = i && (0, r.k9)(i);
                    return null != o && (e && e(t.tr.lift(i, o).scrollIntoView()), !0);
                },
                O = (t, e) => {
                    let { $from: n, to: r } = t.selection,
                        i,
                        s = n.sharedDepth(r);
                    return 0 != s && ((i = n.before(s)), e && e(t.tr.setSelection(o.qv.create(t.doc, i))), !0);
                };
            function _(t, e, n) {
                let s,
                    a,
                    l,
                    c = e.nodeBefore,
                    u = e.nodeAfter,
                    h,
                    p;
                if (c.type.spec.isolating || u.type.spec.isolating) return !1;
                if (
                    ((s = e.nodeBefore),
                    (a = e.nodeAfter),
                    (l = e.index()),
                    s &&
                        a &&
                        s.type.compatibleContent(a.type) &&
                        (!s.content.size && e.parent.canReplace(l - 1, l)
                            ? (n && n(t.tr.delete(e.pos - s.nodeSize, e.pos).scrollIntoView()), !0)
                            : !!(e.parent.canReplace(l, l + 1) && (a.isTextblock || (0, r.Mn)(t.doc, e.pos))) &&
                              (n && n(t.tr.clearIncompatible(e.pos, s.type, s.contentMatchAt(s.childCount)).join(e.pos).scrollIntoView()), !0)))
                )
                    return !0;
                let f = e.parent.canReplace(e.index(), e.index() + 1);
                if (f && (h = (p = c.contentMatchAt(c.childCount)).findWrapping(u.type)) && p.matchType(h[0] || u.type).validEnd) {
                    if (n) {
                        let o = e.pos + u.nodeSize,
                            s = i.HY.empty;
                        for (let t = h.length - 1; t >= 0; t--) s = i.HY.from(h[t].create(null, s));
                        s = i.HY.from(c.copy(s));
                        let a = t.tr.step(new r.FC(e.pos - 1, o, e.pos, o, new i.p2(s, 1, 0), h.length, !0)),
                            l = o + 2 * h.length;
                        (0, r.Mn)(a.doc, l) && a.join(l), n(a.scrollIntoView());
                    }
                    return !0;
                }
                let m = o.Y1.findFrom(e, 1),
                    g = m && m.$from.blockRange(m.$to),
                    y = g && (0, r.k9)(g);
                if (null != y && y >= e.depth) return n && n(t.tr.lift(g, y).scrollIntoView()), !0;
                if (f && d(u, "start", !0) && d(c, "end")) {
                    let o = c,
                        s = [];
                    for (; s.push(o), !o.isTextblock; ) o = o.lastChild;
                    let a = u,
                        l = 1;
                    for (; !a.isTextblock; a = a.firstChild) l++;
                    if (o.canReplace(o.childCount, o.childCount, a.content)) {
                        if (n) {
                            let o = i.HY.empty;
                            for (let t = s.length - 1; t >= 0; t--) o = i.HY.from(s[t].copy(o));
                            n(t.tr.step(new r.FC(e.pos - s.length, e.pos + u.nodeSize, e.pos + l, e.pos + u.nodeSize - l, new i.p2(o, s.length, 0), 0, !0)).scrollIntoView());
                        }
                        return !0;
                    }
                }
                return !1;
            }
            function T(t) {
                return function (e, n) {
                    let r = e.selection,
                        i = t < 0 ? r.$from : r.$to,
                        s = i.depth;
                    for (; i.node(s).isInline; ) {
                        if (!s) return !1;
                        s--;
                    }
                    return !!i.node(s).isTextblock && (n && n(e.tr.setSelection(o.Bs.create(e.doc, t < 0 ? i.start(s) : i.end(s)))), !0);
                };
            }
            let P = T(-1),
                A = T(1);
            function D(t, e = null) {
                return function (n, i) {
                    let { $from: o, $to: s } = n.selection,
                        a = o.blockRange(s),
                        l = a && (0, r.nd)(a, t, e);
                    return !!l && (i && i(n.tr.wrap(a, l).scrollIntoView()), !0);
                };
            }
            function I(t, e = null) {
                return function (n, r) {
                    let i = !1;
                    for (let r = 0; r < n.selection.ranges.length && !i; r++) {
                        let {
                            $from: { pos: o },
                            $to: { pos: s },
                        } = n.selection.ranges[r];
                        n.doc.nodesBetween(o, s, (r, o) => {
                            if (i) return !1;
                            if (!(!r.isTextblock || r.hasMarkup(t, e))) {
                                if (r.type == t) i = !0;
                                else {
                                    let e = n.doc.resolve(o),
                                        r = e.index();
                                    i = e.parent.canReplaceWith(r, r + 1, t);
                                }
                            }
                        });
                    }
                    if (!i) return !1;
                    if (r) {
                        let i = n.tr;
                        for (let r = 0; r < n.selection.ranges.length; r++) {
                            let {
                                $from: { pos: o },
                                $to: { pos: s },
                            } = n.selection.ranges[r];
                            i.setBlockType(o, s, t, e);
                        }
                        r(i.scrollIntoView());
                    }
                    return !0;
                };
            }
            function R(...t) {
                return function (e, n, r) {
                    for (let i = 0; i < t.length; i++) if (t[i](e, n, r)) return !0;
                    return !1;
                };
            }
            let N = R(s, l, p),
                z = R(s, g, y),
                j = {
                    Enter: R(S, C, E, (t, e) => {
                        let { $from: n, $to: i } = t.selection;
                        if (t.selection instanceof o.qv && t.selection.node.isBlock) return !!(n.parentOffset && (0, r.Ax)(t.doc, n.pos)) && (e && e(t.tr.split(n.pos).scrollIntoView()), !0);
                        if (!n.parent.isBlock) return !1;
                        if (e) {
                            let s = i.parentOffset == i.parent.content.size,
                                a = t.tr;
                            (t.selection instanceof o.Bs || t.selection instanceof o.C1) && a.deleteSelection();
                            let l = 0 == n.depth ? null : k(n.node(-1).contentMatchAt(n.indexAfter(-1))),
                                c,
                                u = c ? [c] : s && l ? [{ type: l }] : void 0,
                                h = (0, r.Ax)(a.doc, a.mapping.map(n.pos), 1, u);
                            if (
                                (!u && !h && (0, r.Ax)(a.doc, a.mapping.map(n.pos), 1, l ? [{ type: l }] : void 0) && (l && (u = [{ type: l }]), (h = !0)),
                                h && (a.split(a.mapping.map(n.pos), 1, u), !s && !n.parentOffset && n.parent.type != l))
                            ) {
                                let t = a.mapping.map(n.before()),
                                    e = a.doc.resolve(t);
                                l && n.node(-1).canReplaceWith(e.index(), e.index() + 1, l) && a.setNodeMarkup(a.mapping.map(n.before()), l);
                            }
                            e(a.scrollIntoView());
                        }
                        return !0;
                    }),
                    "Mod-Enter": M,
                    Backspace: N,
                    "Mod-Backspace": N,
                    "Shift-Backspace": N,
                    Delete: z,
                    "Mod-Delete": z,
                    "Mod-a": (t, e) => (e && e(t.tr.setSelection(new o.C1(t.doc))), !0),
                },
                L = {
                    "Ctrl-h": j.Backspace,
                    "Alt-Backspace": j["Mod-Backspace"],
                    "Ctrl-d": j.Delete,
                    "Ctrl-Alt-Backspace": j["Mod-Delete"],
                    "Alt-Delete": j["Mod-Delete"],
                    "Alt-d": j["Mod-Delete"],
                    "Ctrl-a": P,
                    "Ctrl-e": A,
                };
            for (let t in j) L[t] = j[t];
            "undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : "undefined" != typeof os && os.platform && os.platform();
        },
        10258: function (t, e, n) {
            "use strict";
            n.d(e, {
                h: function () {
                    return d;
                },
            });
            for (
                var r = {
                        8: "Backspace",
                        9: "Tab",
                        10: "Enter",
                        12: "NumLock",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        44: "PrintScreen",
                        45: "Insert",
                        46: "Delete",
                        59: ";",
                        61: "=",
                        91: "Meta",
                        92: "Meta",
                        106: "*",
                        107: "+",
                        108: ",",
                        109: "-",
                        110: ".",
                        111: "/",
                        144: "NumLock",
                        145: "ScrollLock",
                        160: "Shift",
                        161: "Shift",
                        162: "Control",
                        163: "Control",
                        164: "Alt",
                        165: "Alt",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                    },
                    i = {
                        48: ")",
                        49: "!",
                        50: "@",
                        51: "#",
                        52: "$",
                        53: "%",
                        54: "^",
                        55: "&",
                        56: "*",
                        57: "(",
                        59: ":",
                        61: "+",
                        173: "_",
                        186: ":",
                        187: "+",
                        188: "<",
                        189: "_",
                        190: ">",
                        191: "?",
                        192: "~",
                        219: "{",
                        220: "|",
                        221: "}",
                        222: '"',
                    },
                    o = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
                    s = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
                    a = 0;
                a < 10;
                a++
            )
                r[48 + a] = r[96 + a] = String(a);
            for (var a = 1; a <= 24; a++) r[a + 111] = "F" + a;
            for (var a = 65; a <= 90; a++) (r[a] = String.fromCharCode(a + 32)), (i[a] = String.fromCharCode(a));
            for (var l in r) i.hasOwnProperty(l) || (i[l] = r[l]);
            var c = n(17213);
            let u = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
            function h(t, e, n = !0) {
                return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
            }
            function d(t) {
                let e;
                return new c.Sy({
                    props: {
                        handleKeyDown:
                            ((e = (function (t) {
                                let e = Object.create(null);
                                for (let n in t)
                                    e[
                                        (function (t) {
                                            let e,
                                                n,
                                                r,
                                                i,
                                                o = t.split(/-(?!$)/),
                                                s = o[o.length - 1];
                                            "Space" == s && (s = " ");
                                            for (let t = 0; t < o.length - 1; t++) {
                                                let s = o[t];
                                                if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                                                else if (/^a(lt)?$/i.test(s)) e = !0;
                                                else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                                                else if (/^s(hift)?$/i.test(s)) r = !0;
                                                else if (/^mod$/i.test(s)) u ? (i = !0) : (n = !0);
                                                else throw Error("Unrecognized modifier name: " + s);
                                            }
                                            return e && (s = "Alt-" + s), n && (s = "Ctrl-" + s), i && (s = "Meta-" + s), r && (s = "Shift-" + s), s;
                                        })(n)
                                    ] = t[n];
                                return e;
                            })(t)),
                            function (t, n) {
                                var a;
                                let l =
                                        ("Esc" ==
                                            (a =
                                                (!((o && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) || (s && n.shiftKey && n.key && 1 == n.key.length) || "Unidentified" == n.key) && n.key) ||
                                                (n.shiftKey ? i : r)[n.keyCode] ||
                                                n.key ||
                                                "Unidentified") && (a = "Escape"),
                                        "Del" == a && (a = "Delete"),
                                        "Left" == a && (a = "ArrowLeft"),
                                        "Up" == a && (a = "ArrowUp"),
                                        "Right" == a && (a = "ArrowRight"),
                                        "Down" == a && (a = "ArrowDown"),
                                        a),
                                    c,
                                    u = e[h(l, n)];
                                if (u && u(t.state, t.dispatch, t)) return !0;
                                if (1 == l.length && " " != l) {
                                    if (n.shiftKey) {
                                        let r = e[h(l, n, !1)];
                                        if (r && r(t.state, t.dispatch, t)) return !0;
                                    }
                                    if ((n.shiftKey || n.altKey || n.metaKey || l.charCodeAt(0) > 127) && (c = r[n.keyCode]) && c != l) {
                                        let r = e[h(c, n)];
                                        if (r && r(t.state, t.dispatch, t)) return !0;
                                    }
                                }
                                return !1;
                            }),
                    },
                });
            }
        },
        10121: function (t, e, n) {
            "use strict";
            function r(t) {
                this.content = t;
            }
            n.d(e, {
                aw: function () {
                    return F;
                },
                PW: function () {
                    return Y;
                },
                HY: function () {
                    return i;
                },
                vc: function () {
                    return l;
                },
                ZU: function () {
                    return z;
                },
                NB: function () {
                    return k;
                },
                Ts: function () {
                    return x;
                },
                e4: function () {
                    return c;
                },
                V_: function () {
                    return j;
                },
                p2: function () {
                    return u;
                },
            }),
                (r.prototype = {
                    constructor: r,
                    find: function (t) {
                        for (var e = 0; e < this.content.length; e += 2) if (this.content[e] === t) return e;
                        return -1;
                    },
                    get: function (t) {
                        var e = this.find(t);
                        return -1 == e ? void 0 : this.content[e + 1];
                    },
                    update: function (t, e, n) {
                        var i = n && n != t ? this.remove(n) : this,
                            o = i.find(t),
                            s = i.content.slice();
                        return -1 == o ? s.push(n || t, e) : ((s[o + 1] = e), n && (s[o] = n)), new r(s);
                    },
                    remove: function (t) {
                        var e = this.find(t);
                        if (-1 == e) return this;
                        var n = this.content.slice();
                        return n.splice(e, 2), new r(n);
                    },
                    addToStart: function (t, e) {
                        return new r([t, e].concat(this.remove(t).content));
                    },
                    addToEnd: function (t, e) {
                        var n = this.remove(t).content.slice();
                        return n.push(t, e), new r(n);
                    },
                    addBefore: function (t, e, n) {
                        var i = this.remove(e),
                            o = i.content.slice(),
                            s = i.find(t);
                        return o.splice(-1 == s ? o.length : s, 0, e, n), new r(o);
                    },
                    forEach: function (t) {
                        for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1]);
                    },
                    prepend: function (t) {
                        return (t = r.from(t)).size ? new r(t.content.concat(this.subtract(t).content)) : this;
                    },
                    append: function (t) {
                        return (t = r.from(t)).size ? new r(this.subtract(t).content.concat(t.content)) : this;
                    },
                    subtract: function (t) {
                        var e = this;
                        t = r.from(t);
                        for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
                        return e;
                    },
                    toObject: function () {
                        var t = {};
                        return (
                            this.forEach(function (e, n) {
                                t[e] = n;
                            }),
                            t
                        );
                    },
                    get size() {
                        return this.content.length >> 1;
                    },
                }),
                (r.from = function (t) {
                    if (t instanceof r) return t;
                    var e = [];
                    if (t) for (var n in t) e.push(n, t[n]);
                    return new r(e);
                });
            class i {
                constructor(t, e) {
                    if (((this.content = t), (this.size = e || 0), null == e)) for (let e = 0; e < t.length; e++) this.size += t[e].nodeSize;
                }
                nodesBetween(t, e, n, r = 0, i) {
                    for (let o = 0, s = 0; s < e; o++) {
                        let a = this.content[o],
                            l = s + a.nodeSize;
                        if (l > t && !1 !== n(a, r + s, i || null, o) && a.content.size) {
                            let i = s + 1;
                            a.nodesBetween(Math.max(0, t - i), Math.min(a.content.size, e - i), n, r + i);
                        }
                        s = l;
                    }
                }
                descendants(t) {
                    this.nodesBetween(0, this.size, t);
                }
                textBetween(t, e, n, r) {
                    let i = "",
                        o = !0;
                    return (
                        this.nodesBetween(
                            t,
                            e,
                            (s, a) => {
                                let l = s.isText
                                    ? s.text.slice(Math.max(t, a) - a, e - a)
                                    : s.isLeaf
                                    ? r
                                        ? "function" == typeof r
                                            ? r(s)
                                            : r
                                        : s.type.spec.leafText
                                        ? s.type.spec.leafText(s)
                                        : ""
                                    : "";
                                s.isBlock && ((s.isLeaf && l) || s.isTextblock) && n && (o ? (o = !1) : (i += n)), (i += l);
                            },
                            0
                        ),
                        i
                    );
                }
                append(t) {
                    if (!t.size) return this;
                    if (!this.size) return t;
                    let e = this.lastChild,
                        n = t.firstChild,
                        r = this.content.slice(),
                        o = 0;
                    for (e.isText && e.sameMarkup(n) && ((r[r.length - 1] = e.withText(e.text + n.text)), (o = 1)); o < t.content.length; o++) r.push(t.content[o]);
                    return new i(r, this.size + t.size);
                }
                cut(t, e = this.size) {
                    if (0 == t && e == this.size) return this;
                    let n = [],
                        r = 0;
                    if (e > t)
                        for (let i = 0, o = 0; o < e; i++) {
                            let s = this.content[i],
                                a = o + s.nodeSize;
                            a > t &&
                                ((o < t || a > e) && (s = s.isText ? s.cut(Math.max(0, t - o), Math.min(s.text.length, e - o)) : s.cut(Math.max(0, t - o - 1), Math.min(s.content.size, e - o - 1))),
                                n.push(s),
                                (r += s.nodeSize)),
                                (o = a);
                        }
                    return new i(n, r);
                }
                cutByIndex(t, e) {
                    return t == e ? i.empty : 0 == t && e == this.content.length ? this : new i(this.content.slice(t, e));
                }
                replaceChild(t, e) {
                    let n = this.content[t];
                    if (n == e) return this;
                    let r = this.content.slice(),
                        o = this.size + e.nodeSize - n.nodeSize;
                    return (r[t] = e), new i(r, o);
                }
                addToStart(t) {
                    return new i([t].concat(this.content), this.size + t.nodeSize);
                }
                addToEnd(t) {
                    return new i(this.content.concat(t), this.size + t.nodeSize);
                }
                eq(t) {
                    if (this.content.length != t.content.length) return !1;
                    for (let e = 0; e < this.content.length; e++) if (!this.content[e].eq(t.content[e])) return !1;
                    return !0;
                }
                get firstChild() {
                    return this.content.length ? this.content[0] : null;
                }
                get lastChild() {
                    return this.content.length ? this.content[this.content.length - 1] : null;
                }
                get childCount() {
                    return this.content.length;
                }
                child(t) {
                    let e = this.content[t];
                    if (!e) throw RangeError("Index " + t + " out of range for " + this);
                    return e;
                }
                maybeChild(t) {
                    return this.content[t] || null;
                }
                forEach(t) {
                    for (let e = 0, n = 0; e < this.content.length; e++) {
                        let r = this.content[e];
                        t(r, n, e), (n += r.nodeSize);
                    }
                }
                findDiffStart(t, e = 0) {
                    return (function t(e, n, r) {
                        for (let i = 0; ; i++) {
                            if (i == e.childCount || i == n.childCount) return e.childCount == n.childCount ? null : r;
                            let o = e.child(i),
                                s = n.child(i);
                            if (o == s) {
                                r += o.nodeSize;
                                continue;
                            }
                            if (!o.sameMarkup(s)) return r;
                            if (o.isText && o.text != s.text) {
                                for (let t = 0; o.text[t] == s.text[t]; t++) r++;
                                return r;
                            }
                            if (o.content.size || s.content.size) {
                                let e = t(o.content, s.content, r + 1);
                                if (null != e) return e;
                            }
                            r += o.nodeSize;
                        }
                    })(this, t, e);
                }
                findDiffEnd(t, e = this.size, n = t.size) {
                    return (function t(e, n, r, i) {
                        for (let o = e.childCount, s = n.childCount; ; ) {
                            if (0 == o || 0 == s) return o == s ? null : { a: r, b: i };
                            let a = e.child(--o),
                                l = n.child(--s),
                                c = a.nodeSize;
                            if (a == l) {
                                (r -= c), (i -= c);
                                continue;
                            }
                            if (!a.sameMarkup(l)) return { a: r, b: i };
                            if (a.isText && a.text != l.text) {
                                let t = 0,
                                    e = Math.min(a.text.length, l.text.length);
                                for (; t < e && a.text[a.text.length - t - 1] == l.text[l.text.length - t - 1]; ) t++, r--, i--;
                                return { a: r, b: i };
                            }
                            if (a.content.size || l.content.size) {
                                let e = t(a.content, l.content, r - 1, i - 1);
                                if (e) return e;
                            }
                            (r -= c), (i -= c);
                        }
                    })(this, t, e, n);
                }
                findIndex(t, e = -1) {
                    if (0 == t) return s(0, t);
                    if (t == this.size) return s(this.content.length, t);
                    if (t > this.size || t < 0) throw RangeError(`Position ${t} outside of fragment (${this})`);
                    for (let n = 0, r = 0; ; n++) {
                        let i = r + this.child(n).nodeSize;
                        if (i >= t) {
                            if (i == t || e > 0) return s(n + 1, i);
                            return s(n, r);
                        }
                        r = i;
                    }
                }
                toString() {
                    return "<" + this.toStringInner() + ">";
                }
                toStringInner() {
                    return this.content.join(", ");
                }
                toJSON() {
                    return this.content.length ? this.content.map(t => t.toJSON()) : null;
                }
                static fromJSON(t, e) {
                    if (!e) return i.empty;
                    if (!Array.isArray(e)) throw RangeError("Invalid input for Fragment.fromJSON");
                    return new i(e.map(t.nodeFromJSON));
                }
                static fromArray(t) {
                    if (!t.length) return i.empty;
                    let e,
                        n = 0;
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        (n += i.nodeSize), r && i.isText && t[r - 1].sameMarkup(i) ? (e || (e = t.slice(0, r)), (e[e.length - 1] = i.withText(e[e.length - 1].text + i.text))) : e && e.push(i);
                    }
                    return new i(e || t, n);
                }
                static from(t) {
                    if (!t) return i.empty;
                    if (t instanceof i) return t;
                    if (Array.isArray(t)) return this.fromArray(t);
                    if (t.attrs) return new i([t], t.nodeSize);
                    throw RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
                }
            }
            i.empty = new i([], 0);
            let o = { index: 0, offset: 0 };
            function s(t, e) {
                return (o.index = t), (o.offset = e), o;
            }
            function a(t, e) {
                if (t === e) return !0;
                if (!(t && "object" == typeof t) || !(e && "object" == typeof e)) return !1;
                let n = Array.isArray(t);
                if (Array.isArray(e) != n) return !1;
                if (n) {
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++) if (!a(t[n], e[n])) return !1;
                } else {
                    for (let n in t) if (!(n in e) || !a(t[n], e[n])) return !1;
                    for (let n in e) if (!(n in t)) return !1;
                }
                return !0;
            }
            class l {
                constructor(t, e) {
                    (this.type = t), (this.attrs = e);
                }
                addToSet(t) {
                    let e,
                        n = !1;
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        if (this.eq(i)) return t;
                        if (this.type.excludes(i.type)) e || (e = t.slice(0, r));
                        else {
                            if (i.type.excludes(this.type)) return t;
                            !n && i.type.rank > this.type.rank && (e || (e = t.slice(0, r)), e.push(this), (n = !0)), e && e.push(i);
                        }
                    }
                    return e || (e = t.slice()), n || e.push(this), e;
                }
                removeFromSet(t) {
                    for (let e = 0; e < t.length; e++) if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
                    return t;
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++) if (this.eq(t[e])) return !0;
                    return !1;
                }
                eq(t) {
                    return this == t || (this.type == t.type && a(this.attrs, t.attrs));
                }
                toJSON() {
                    let t = { type: this.type.name };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break;
                    }
                    return t;
                }
                static fromJSON(t, e) {
                    if (!e) throw RangeError("Invalid input for Mark.fromJSON");
                    let n = t.marks[e.type];
                    if (!n) throw RangeError(`There is no mark type ${e.type} in this schema`);
                    return n.create(e.attrs);
                }
                static sameSet(t, e) {
                    if (t == e) return !0;
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++) if (!t[n].eq(e[n])) return !1;
                    return !0;
                }
                static setFrom(t) {
                    if (!t || (Array.isArray(t) && 0 == t.length)) return l.none;
                    if (t instanceof l) return [t];
                    let e = t.slice();
                    return e.sort((t, e) => t.type.rank - e.type.rank), e;
                }
            }
            l.none = [];
            class c extends Error {}
            class u {
                constructor(t, e, n) {
                    (this.content = t), (this.openStart = e), (this.openEnd = n);
                }
                get size() {
                    return this.content.size - this.openStart - this.openEnd;
                }
                insertAt(t, e) {
                    let n = (function t(e, n, r, i) {
                        let { index: o, offset: s } = e.findIndex(n),
                            a = e.maybeChild(o);
                        if (s == n || a.isText) return i && !i.canReplace(o, o, r) ? null : e.cut(0, n).append(r).append(e.cut(n));
                        let l = t(a.content, n - s - 1, r);
                        return l && e.replaceChild(o, a.copy(l));
                    })(this.content, t + this.openStart, e);
                    return n && new u(n, this.openStart, this.openEnd);
                }
                removeBetween(t, e) {
                    return new u(
                        (function t(e, n, r) {
                            let { index: i, offset: o } = e.findIndex(n),
                                s = e.maybeChild(i),
                                { index: a, offset: l } = e.findIndex(r);
                            if (o == n || s.isText) {
                                if (l != r && !e.child(a).isText) throw RangeError("Removing non-flat range");
                                return e.cut(0, n).append(e.cut(r));
                            }
                            if (i != a) throw RangeError("Removing non-flat range");
                            return e.replaceChild(i, s.copy(t(s.content, n - o - 1, r - o - 1)));
                        })(this.content, t + this.openStart, e + this.openStart),
                        this.openStart,
                        this.openEnd
                    );
                }
                eq(t) {
                    return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
                }
                toString() {
                    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
                }
                toJSON() {
                    if (!this.content.size) return null;
                    let t = { content: this.content.toJSON() };
                    return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
                }
                static fromJSON(t, e) {
                    if (!e) return u.empty;
                    let n = e.openStart || 0,
                        r = e.openEnd || 0;
                    if ("number" != typeof n || "number" != typeof r) throw RangeError("Invalid input for Slice.fromJSON");
                    return new u(i.fromJSON(t, e.content), n, r);
                }
                static maxOpen(t, e = !0) {
                    let n = 0,
                        r = 0;
                    for (let r = t.firstChild; r && !r.isLeaf && (e || !r.type.spec.isolating); r = r.firstChild) n++;
                    for (let n = t.lastChild; n && !n.isLeaf && (e || !n.type.spec.isolating); n = n.lastChild) r++;
                    return new u(t, n, r);
                }
            }
            function h(t, e) {
                if (!e.type.compatibleContent(t.type)) throw new c("Cannot join " + e.type.name + " onto " + t.type.name);
            }
            function d(t, e, n) {
                let r = t.node(n);
                return h(r, e.node(n)), r;
            }
            function p(t, e) {
                let n = e.length - 1;
                n >= 0 && t.isText && t.sameMarkup(e[n]) ? (e[n] = t.withText(e[n].text + t.text)) : e.push(t);
            }
            function f(t, e, n, r) {
                let i = (e || t).node(n),
                    o = 0,
                    s = e ? e.index(n) : i.childCount;
                t && ((o = t.index(n)), t.depth > n ? o++ : t.textOffset && (p(t.nodeAfter, r), o++));
                for (let t = o; t < s; t++) p(i.child(t), r);
                e && e.depth == n && e.textOffset && p(e.nodeBefore, r);
            }
            function m(t, e) {
                return t.type.checkContent(e), t.copy(e);
            }
            function g(t, e, n) {
                let r = [];
                return f(null, t, n, r), t.depth > n && p(m(d(t, e, n + 1), g(t, e, n + 1)), r), f(e, null, n, r), new i(r);
            }
            u.empty = new u(i.empty, 0, 0);
            class y {
                constructor(t, e, n) {
                    (this.pos = t), (this.path = e), (this.parentOffset = n), (this.depth = e.length / 3 - 1);
                }
                resolveDepth(t) {
                    return null == t ? this.depth : t < 0 ? this.depth + t : t;
                }
                get parent() {
                    return this.node(this.depth);
                }
                get doc() {
                    return this.node(0);
                }
                node(t) {
                    return this.path[3 * this.resolveDepth(t)];
                }
                index(t) {
                    return this.path[3 * this.resolveDepth(t) + 1];
                }
                indexAfter(t) {
                    return (t = this.resolveDepth(t)), this.index(t) + (t != this.depth || this.textOffset ? 1 : 0);
                }
                start(t) {
                    return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
                }
                end(t) {
                    return (t = this.resolveDepth(t)), this.start(t) + this.node(t).content.size;
                }
                before(t) {
                    if (!(t = this.resolveDepth(t))) throw RangeError("There is no position before the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
                }
                after(t) {
                    if (!(t = this.resolveDepth(t))) throw RangeError("There is no position after the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
                }
                get textOffset() {
                    return this.pos - this.path[this.path.length - 1];
                }
                get nodeAfter() {
                    let t = this.parent,
                        e = this.index(this.depth);
                    if (e == t.childCount) return null;
                    let n = this.pos - this.path[this.path.length - 1],
                        r = t.child(e);
                    return n ? t.child(e).cut(n) : r;
                }
                get nodeBefore() {
                    let t = this.index(this.depth),
                        e = this.pos - this.path[this.path.length - 1];
                    return e ? this.parent.child(t).cut(0, e) : 0 == t ? null : this.parent.child(t - 1);
                }
                posAtIndex(t, e) {
                    e = this.resolveDepth(e);
                    let n = this.path[3 * e],
                        r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
                    for (let e = 0; e < t; e++) r += n.child(e).nodeSize;
                    return r;
                }
                marks() {
                    let t = this.parent,
                        e = this.index();
                    if (0 == t.content.size) return l.none;
                    if (this.textOffset) return t.child(e).marks;
                    let n = t.maybeChild(e - 1),
                        r = t.maybeChild(e);
                    if (!n) {
                        let t = n;
                        (n = r), (r = t);
                    }
                    let i = n.marks;
                    for (var o = 0; o < i.length; o++) !1 !== i[o].type.spec.inclusive || (r && i[o].isInSet(r.marks)) || (i = i[o--].removeFromSet(i));
                    return i;
                }
                marksAcross(t) {
                    let e = this.parent.maybeChild(this.index());
                    if (!e || !e.isInline) return null;
                    let n = e.marks,
                        r = t.parent.maybeChild(t.index());
                    for (var i = 0; i < n.length; i++) !1 !== n[i].type.spec.inclusive || (r && n[i].isInSet(r.marks)) || (n = n[i--].removeFromSet(n));
                    return n;
                }
                sharedDepth(t) {
                    for (let e = this.depth; e > 0; e--) if (this.start(e) <= t && this.end(e) >= t) return e;
                    return 0;
                }
                blockRange(t = this, e) {
                    if (t.pos < this.pos) return t.blockRange(this);
                    for (let n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--) if (t.pos <= this.end(n) && (!e || e(this.node(n)))) return new x(this, t, n);
                    return null;
                }
                sameParent(t) {
                    return this.pos - this.parentOffset == t.pos - t.parentOffset;
                }
                max(t) {
                    return t.pos > this.pos ? t : this;
                }
                min(t) {
                    return t.pos < this.pos ? t : this;
                }
                toString() {
                    let t = "";
                    for (let e = 1; e <= this.depth; e++) t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
                    return t + ":" + this.parentOffset;
                }
                static resolve(t, e) {
                    if (!(e >= 0 && e <= t.content.size)) throw RangeError("Position " + e + " out of range");
                    let n = [],
                        r = 0,
                        i = e;
                    for (let e = t; ; ) {
                        let { index: t, offset: o } = e.content.findIndex(i),
                            s = i - o;
                        if ((n.push(e, t, r + o), !s || (e = e.child(t)).isText)) break;
                        (i = s - 1), (r += o + 1);
                    }
                    return new y(e, n, i);
                }
                static resolveCached(t, e) {
                    for (let n = 0; n < v.length; n++) {
                        let r = v[n];
                        if (r.pos == e && r.doc == t) return r;
                    }
                    let n = (v[b] = y.resolve(t, e));
                    return (b = (b + 1) % w), n;
                }
            }
            let v = [],
                b = 0,
                w = 12;
            class x {
                constructor(t, e, n) {
                    (this.$from = t), (this.$to = e), (this.depth = n);
                }
                get start() {
                    return this.$from.before(this.depth + 1);
                }
                get end() {
                    return this.$to.after(this.depth + 1);
                }
                get parent() {
                    return this.$from.node(this.depth);
                }
                get startIndex() {
                    return this.$from.index(this.depth);
                }
                get endIndex() {
                    return this.$to.indexAfter(this.depth);
                }
            }
            let S = Object.create(null);
            class k {
                constructor(t, e, n, r = l.none) {
                    (this.type = t), (this.attrs = e), (this.marks = r), (this.content = n || i.empty);
                }
                get nodeSize() {
                    return this.isLeaf ? 1 : 2 + this.content.size;
                }
                get childCount() {
                    return this.content.childCount;
                }
                child(t) {
                    return this.content.child(t);
                }
                maybeChild(t) {
                    return this.content.maybeChild(t);
                }
                forEach(t) {
                    this.content.forEach(t);
                }
                nodesBetween(t, e, n, r = 0) {
                    this.content.nodesBetween(t, e, n, r, this);
                }
                descendants(t) {
                    this.nodesBetween(0, this.content.size, t);
                }
                get textContent() {
                    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
                }
                textBetween(t, e, n, r) {
                    return this.content.textBetween(t, e, n, r);
                }
                get firstChild() {
                    return this.content.firstChild;
                }
                get lastChild() {
                    return this.content.lastChild;
                }
                eq(t) {
                    return this == t || (this.sameMarkup(t) && this.content.eq(t.content));
                }
                sameMarkup(t) {
                    return this.hasMarkup(t.type, t.attrs, t.marks);
                }
                hasMarkup(t, e, n) {
                    return this.type == t && a(this.attrs, e || t.defaultAttrs || S) && l.sameSet(this.marks, n || l.none);
                }
                copy(t = null) {
                    return t == this.content ? this : new k(this.type, this.attrs, t, this.marks);
                }
                mark(t) {
                    return t == this.marks ? this : new k(this.type, this.attrs, this.content, t);
                }
                cut(t, e = this.content.size) {
                    return 0 == t && e == this.content.size ? this : this.copy(this.content.cut(t, e));
                }
                slice(t, e = this.content.size, n = !1) {
                    if (t == e) return u.empty;
                    let r = this.resolve(t),
                        i = this.resolve(e),
                        o = n ? 0 : r.sharedDepth(e),
                        s = r.start(o);
                    return new u(r.node(o).content.cut(r.pos - s, i.pos - s), r.depth - o, i.depth - o);
                }
                replace(t, e, n) {
                    return (function (t, e, n) {
                        if (n.openStart > t.depth) throw new c("Inserted content deeper than insertion position");
                        if (t.depth - n.openStart != e.depth - n.openEnd) throw new c("Inconsistent open depths");
                        return (function t(e, n, r, o) {
                            let s = e.index(o),
                                a = e.node(o);
                            if (s == n.index(o) && o < e.depth - r.openStart) {
                                let i = t(e, n, r, o + 1);
                                return a.copy(a.content.replaceChild(s, i));
                            }
                            if (!r.content.size) return m(a, g(e, n, o));
                            if (r.openStart || r.openEnd || e.depth != o || n.depth != o) {
                                let { start: t, end: s } = (function (t, e) {
                                    let n = e.depth - t.openStart,
                                        r = e.node(n).copy(t.content);
                                    for (let t = n - 1; t >= 0; t--) r = e.node(t).copy(i.from(r));
                                    return { start: r.resolveNoCache(t.openStart + n), end: r.resolveNoCache(r.content.size - t.openEnd - n) };
                                })(r, e);
                                return m(
                                    a,
                                    (function t(e, n, r, o, s) {
                                        let a = e.depth > s && d(e, n, s + 1),
                                            l = o.depth > s && d(r, o, s + 1),
                                            c = [];
                                        return (
                                            f(null, e, s, c),
                                            a && l && n.index(s) == r.index(s)
                                                ? (h(a, l), p(m(a, t(e, n, r, o, s + 1)), c))
                                                : (a && p(m(a, g(e, n, s + 1)), c), f(n, r, s, c), l && p(m(l, g(r, o, s + 1)), c)),
                                            f(o, null, s, c),
                                            new i(c)
                                        );
                                    })(e, t, s, n, o)
                                );
                            }
                            {
                                let t = e.parent,
                                    i = t.content;
                                return m(t, i.cut(0, e.parentOffset).append(r.content).append(i.cut(n.parentOffset)));
                            }
                        })(t, e, n, 0);
                    })(this.resolve(t), this.resolve(e), n);
                }
                nodeAt(t) {
                    for (let e = this; ; ) {
                        let { index: n, offset: r } = e.content.findIndex(t);
                        if (!(e = e.maybeChild(n))) return null;
                        if (r == t || e.isText) return e;
                        t -= r + 1;
                    }
                }
                childAfter(t) {
                    let { index: e, offset: n } = this.content.findIndex(t);
                    return { node: this.content.maybeChild(e), index: e, offset: n };
                }
                childBefore(t) {
                    if (0 == t) return { node: null, index: 0, offset: 0 };
                    let { index: e, offset: n } = this.content.findIndex(t);
                    if (n < t) return { node: this.content.child(e), index: e, offset: n };
                    let r = this.content.child(e - 1);
                    return { node: r, index: e - 1, offset: n - r.nodeSize };
                }
                resolve(t) {
                    return y.resolveCached(this, t);
                }
                resolveNoCache(t) {
                    return y.resolve(this, t);
                }
                rangeHasMark(t, e, n) {
                    let r = !1;
                    return e > t && this.nodesBetween(t, e, t => (n.isInSet(t.marks) && (r = !0), !r)), r;
                }
                get isBlock() {
                    return this.type.isBlock;
                }
                get isTextblock() {
                    return this.type.isTextblock;
                }
                get inlineContent() {
                    return this.type.inlineContent;
                }
                get isInline() {
                    return this.type.isInline;
                }
                get isText() {
                    return this.type.isText;
                }
                get isLeaf() {
                    return this.type.isLeaf;
                }
                get isAtom() {
                    return this.type.isAtom;
                }
                toString() {
                    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
                    let t = this.type.name;
                    return this.content.size && (t += "(" + this.content.toStringInner() + ")"), C(this.marks, t);
                }
                contentMatchAt(t) {
                    let e = this.type.contentMatch.matchFragment(this.content, 0, t);
                    if (!e) throw Error("Called contentMatchAt on a node with invalid content");
                    return e;
                }
                canReplace(t, e, n = i.empty, r = 0, o = n.childCount) {
                    let s = this.contentMatchAt(t).matchFragment(n, r, o),
                        a = s && s.matchFragment(this.content, e);
                    if (!a || !a.validEnd) return !1;
                    for (let t = r; t < o; t++) if (!this.type.allowsMarks(n.child(t).marks)) return !1;
                    return !0;
                }
                canReplaceWith(t, e, n, r) {
                    if (r && !this.type.allowsMarks(r)) return !1;
                    let i = this.contentMatchAt(t).matchType(n),
                        o = i && i.matchFragment(this.content, e);
                    return !!o && o.validEnd;
                }
                canAppend(t) {
                    return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
                }
                check() {
                    this.type.checkContent(this.content);
                    let t = l.none;
                    for (let e = 0; e < this.marks.length; e++) t = this.marks[e].addToSet(t);
                    if (!l.sameSet(t, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t => t.type.name)}`);
                    this.content.forEach(t => t.check());
                }
                toJSON() {
                    let t = { type: this.type.name };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break;
                    }
                    return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map(t => t.toJSON())), t;
                }
                static fromJSON(t, e) {
                    if (!e) throw RangeError("Invalid input for Node.fromJSON");
                    let n = null;
                    if (e.marks) {
                        if (!Array.isArray(e.marks)) throw RangeError("Invalid mark data for Node.fromJSON");
                        n = e.marks.map(t.markFromJSON);
                    }
                    if ("text" == e.type) {
                        if ("string" != typeof e.text) throw RangeError("Invalid text node in JSON");
                        return t.text(e.text, n);
                    }
                    let r = i.fromJSON(t, e.content);
                    return t.nodeType(e.type).create(e.attrs, r, n);
                }
            }
            k.prototype.text = void 0;
            class M extends k {
                constructor(t, e, n, r) {
                    if ((super(t, e, null, r), !n)) throw RangeError("Empty text nodes are not allowed");
                    this.text = n;
                }
                toString() {
                    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : C(this.marks, JSON.stringify(this.text));
                }
                get textContent() {
                    return this.text;
                }
                textBetween(t, e) {
                    return this.text.slice(t, e);
                }
                get nodeSize() {
                    return this.text.length;
                }
                mark(t) {
                    return t == this.marks ? this : new M(this.type, this.attrs, this.text, t);
                }
                withText(t) {
                    return t == this.text ? this : new M(this.type, this.attrs, t, this.marks);
                }
                cut(t = 0, e = this.text.length) {
                    return 0 == t && e == this.text.length ? this : this.withText(this.text.slice(t, e));
                }
                eq(t) {
                    return this.sameMarkup(t) && this.text == t.text;
                }
                toJSON() {
                    let t = super.toJSON();
                    return (t.text = this.text), t;
                }
            }
            function C(t, e) {
                for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + "(" + e + ")";
                return e;
            }
            class E {
                constructor(t) {
                    (this.validEnd = t), (this.next = []), (this.wrapCache = []);
                }
                static parse(t, e) {
                    var n;
                    let r,
                        i = new O(t, e);
                    if (null == i.next) return E.empty;
                    let o = (function t(e) {
                        let n = [];
                        do
                            n.push(
                                (function (e) {
                                    let n = [];
                                    do
                                        n.push(
                                            (function (e) {
                                                let n = (function (e) {
                                                    if (e.eat("(")) {
                                                        let n = t(e);
                                                        return e.eat(")") || e.err("Missing closing paren"), n;
                                                    }
                                                    if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
                                                    else {
                                                        let t = (function (t, e) {
                                                            let n = t.nodeTypes,
                                                                r = n[e];
                                                            if (r) return [r];
                                                            let i = [];
                                                            for (let t in n) {
                                                                let r = n[t];
                                                                r.groups.indexOf(e) > -1 && i.push(r);
                                                            }
                                                            return 0 == i.length && t.err("No node type or group '" + e + "' found"), i;
                                                        })(e, e.next).map(
                                                            t => (
                                                                null == e.inline ? (e.inline = t.isInline) : e.inline != t.isInline && e.err("Mixing inline and block content"),
                                                                { type: "name", value: t }
                                                            )
                                                        );
                                                        return e.pos++, 1 == t.length ? t[0] : { type: "choice", exprs: t };
                                                    }
                                                })(e);
                                                for (;;)
                                                    if (e.eat("+")) n = { type: "plus", expr: n };
                                                    else if (e.eat("*")) n = { type: "star", expr: n };
                                                    else if (e.eat("?")) n = { type: "opt", expr: n };
                                                    else if (e.eat("{"))
                                                        n = (function (t, e) {
                                                            let n = _(t),
                                                                r = n;
                                                            return (
                                                                t.eat(",") && (r = "}" != t.next ? _(t) : -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e }
                                                            );
                                                        })(e, n);
                                                    else break;
                                                return n;
                                            })(e)
                                        );
                                    while (e.next && ")" != e.next && "|" != e.next);
                                    return 1 == n.length ? n[0] : { type: "seq", exprs: n };
                                })(e)
                            );
                        while (e.eat("|"));
                        return 1 == n.length ? n[0] : { type: "choice", exprs: n };
                    })(i);
                    i.next && i.err("Unexpected trailing text");
                    let s =
                        ((n = (function (t) {
                            let e = [[]];
                            return (
                                i(
                                    (function t(e, o) {
                                        if ("choice" == e.type) return e.exprs.reduce((e, n) => e.concat(t(n, o)), []);
                                        if ("seq" == e.type)
                                            for (let r = 0; ; r++) {
                                                let s = t(e.exprs[r], o);
                                                if (r == e.exprs.length - 1) return s;
                                                i(s, (o = n()));
                                            }
                                        else if ("star" == e.type) {
                                            let s = n();
                                            return r(o, s), i(t(e.expr, s), s), [r(s)];
                                        } else if ("plus" == e.type) {
                                            let s = n();
                                            return i(t(e.expr, o), s), i(t(e.expr, s), s), [r(s)];
                                        } else if ("opt" == e.type) return [r(o)].concat(t(e.expr, o));
                                        else if ("range" == e.type) {
                                            let s = o;
                                            for (let r = 0; r < e.min; r++) {
                                                let r = n();
                                                i(t(e.expr, s), r), (s = r);
                                            }
                                            if (-1 == e.max) i(t(e.expr, s), s);
                                            else
                                                for (let o = e.min; o < e.max; o++) {
                                                    let o = n();
                                                    r(s, o), i(t(e.expr, s), o), (s = o);
                                                }
                                            return [r(s)];
                                        } else if ("name" == e.type) return [r(o, void 0, e.value)];
                                        else throw Error("Unknown expr type");
                                    })(t, 0),
                                    n()
                                ),
                                e
                            );
                            function n() {
                                return e.push([]) - 1;
                            }
                            function r(t, n, r) {
                                let i = { term: r, to: n };
                                return e[t].push(i), i;
                            }
                            function i(t, e) {
                                t.forEach(t => (t.to = e));
                            }
                        })(o)),
                        (r = Object.create(null)),
                        (function t(e) {
                            let i = [];
                            e.forEach(t => {
                                n[t].forEach(({ term: t, to: e }) => {
                                    let r;
                                    if (t) {
                                        for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
                                        P(n, e).forEach(e => {
                                            r || i.push([t, (r = [])]), -1 == r.indexOf(e) && r.push(e);
                                        });
                                    }
                                });
                            });
                            let o = (r[e.join(",")] = new E(e.indexOf(n.length - 1) > -1));
                            for (let e = 0; e < i.length; e++) {
                                let n = i[e][1].sort(T);
                                o.next.push({ type: i[e][0], next: r[n.join(",")] || t(n) });
                            }
                            return o;
                        })(P(n, 0)));
                    return (
                        (function (t, e) {
                            for (let n = 0, r = [t]; n < r.length; n++) {
                                let t = r[n],
                                    i = !t.validEnd,
                                    o = [];
                                for (let e = 0; e < t.next.length; e++) {
                                    let { type: n, next: s } = t.next[e];
                                    o.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), -1 == r.indexOf(s) && r.push(s);
                                }
                                i && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
                            }
                        })(s, i),
                        s
                    );
                }
                matchType(t) {
                    for (let e = 0; e < this.next.length; e++) if (this.next[e].type == t) return this.next[e].next;
                    return null;
                }
                matchFragment(t, e = 0, n = t.childCount) {
                    let r = this;
                    for (let i = e; r && i < n; i++) r = r.matchType(t.child(i).type);
                    return r;
                }
                get inlineContent() {
                    return 0 != this.next.length && this.next[0].type.isInline;
                }
                get defaultType() {
                    for (let t = 0; t < this.next.length; t++) {
                        let { type: e } = this.next[t];
                        if (!(e.isText || e.hasRequiredAttrs())) return e;
                    }
                    return null;
                }
                compatible(t) {
                    for (let e = 0; e < this.next.length; e++) for (let n = 0; n < t.next.length; n++) if (this.next[e].type == t.next[n].type) return !0;
                    return !1;
                }
                fillBefore(t, e = !1, n = 0) {
                    let r = [this];
                    return (function o(s, a) {
                        let l = s.matchFragment(t, n);
                        if (l && (!e || l.validEnd)) return i.from(a.map(t => t.createAndFill()));
                        for (let t = 0; t < s.next.length; t++) {
                            let { type: e, next: n } = s.next[t];
                            if (!(e.isText || e.hasRequiredAttrs()) && -1 == r.indexOf(n)) {
                                r.push(n);
                                let t = o(n, a.concat(e));
                                if (t) return t;
                            }
                        }
                        return null;
                    })(this, []);
                }
                findWrapping(t) {
                    for (let e = 0; e < this.wrapCache.length; e += 2) if (this.wrapCache[e] == t) return this.wrapCache[e + 1];
                    let e = this.computeWrapping(t);
                    return this.wrapCache.push(t, e), e;
                }
                computeWrapping(t) {
                    let e = Object.create(null),
                        n = [{ match: this, type: null, via: null }];
                    for (; n.length; ) {
                        let r = n.shift(),
                            i = r.match;
                        if (i.matchType(t)) {
                            let t = [];
                            for (let e = r; e.type; e = e.via) t.push(e.type);
                            return t.reverse();
                        }
                        for (let t = 0; t < i.next.length; t++) {
                            let { type: o, next: s } = i.next[t];
                            o.isLeaf || o.hasRequiredAttrs() || o.name in e || (r.type && !s.validEnd) || (n.push({ match: o.contentMatch, type: o, via: r }), (e[o.name] = !0));
                        }
                    }
                    return null;
                }
                get edgeCount() {
                    return this.next.length;
                }
                edge(t) {
                    if (t >= this.next.length) throw RangeError(`There's no ${t}th edge in this content match`);
                    return this.next[t];
                }
                toString() {
                    let t = [];
                    return (
                        !(function e(n) {
                            t.push(n);
                            for (let r = 0; r < n.next.length; r++) -1 == t.indexOf(n.next[r].next) && e(n.next[r].next);
                        })(this),
                        t
                            .map((e, n) => {
                                let r = n + (e.validEnd ? "*" : " ") + " ";
                                for (let n = 0; n < e.next.length; n++) r += (n ? ", " : "") + e.next[n].type.name + "->" + t.indexOf(e.next[n].next);
                                return r;
                            })
                            .join("\n")
                    );
                }
            }
            E.empty = new E(!0);
            class O {
                constructor(t, e) {
                    (this.string = t),
                        (this.nodeTypes = e),
                        (this.inline = null),
                        (this.pos = 0),
                        (this.tokens = t.split(/\s*(?=\b|\W|$)/)),
                        "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
                        "" == this.tokens[0] && this.tokens.shift();
                }
                get next() {
                    return this.tokens[this.pos];
                }
                eat(t) {
                    return this.next == t && (this.pos++ || !0);
                }
                err(t) {
                    throw SyntaxError(t + " (in content expression '" + this.string + "')");
                }
            }
            function _(t) {
                /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
                let e = Number(t.next);
                return t.pos++, e;
            }
            function T(t, e) {
                return e - t;
            }
            function P(t, e) {
                let n = [];
                return (
                    (function e(r) {
                        let i = t[r];
                        if (1 == i.length && !i[0].term) return e(i[0].to);
                        n.push(r);
                        for (let t = 0; t < i.length; t++) {
                            let { term: r, to: o } = i[t];
                            r || -1 != n.indexOf(o) || e(o);
                        }
                    })(e),
                    n.sort(T)
                );
            }
            function A(t) {
                let e = Object.create(null);
                for (let n in t) {
                    let r = t[n];
                    if (!r.hasDefault) return null;
                    e[n] = r.default;
                }
                return e;
            }
            function D(t, e) {
                let n = Object.create(null);
                for (let r in t) {
                    let i = e && e[r];
                    if (void 0 === i) {
                        let e = t[r];
                        if (e.hasDefault) i = e.default;
                        else throw RangeError("No value supplied for attribute " + r);
                    }
                    n[r] = i;
                }
                return n;
            }
            function I(t) {
                let e = Object.create(null);
                if (t) for (let n in t) e[n] = new N(t[n]);
                return e;
            }
            class R {
                constructor(t, e, n) {
                    (this.name = t),
                        (this.schema = e),
                        (this.spec = n),
                        (this.markSet = null),
                        (this.groups = n.group ? n.group.split(" ") : []),
                        (this.attrs = I(n.attrs)),
                        (this.defaultAttrs = A(this.attrs)),
                        (this.contentMatch = null),
                        (this.inlineContent = null),
                        (this.isBlock = !(n.inline || "text" == t)),
                        (this.isText = "text" == t);
                }
                get isInline() {
                    return !this.isBlock;
                }
                get isTextblock() {
                    return this.isBlock && this.inlineContent;
                }
                get isLeaf() {
                    return this.contentMatch == E.empty;
                }
                get isAtom() {
                    return this.isLeaf || !!this.spec.atom;
                }
                get whitespace() {
                    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
                }
                hasRequiredAttrs() {
                    for (let t in this.attrs) if (this.attrs[t].isRequired) return !0;
                    return !1;
                }
                compatibleContent(t) {
                    return this == t || this.contentMatch.compatible(t.contentMatch);
                }
                computeAttrs(t) {
                    return !t && this.defaultAttrs ? this.defaultAttrs : D(this.attrs, t);
                }
                create(t = null, e, n) {
                    if (this.isText) throw Error("NodeType.create can't construct text nodes");
                    return new k(this, this.computeAttrs(t), i.from(e), l.setFrom(n));
                }
                createChecked(t = null, e, n) {
                    return (e = i.from(e)), this.checkContent(e), new k(this, this.computeAttrs(t), e, l.setFrom(n));
                }
                createAndFill(t = null, e, n) {
                    if (((t = this.computeAttrs(t)), (e = i.from(e)).size)) {
                        let t = this.contentMatch.fillBefore(e);
                        if (!t) return null;
                        e = t.append(e);
                    }
                    let r = this.contentMatch.matchFragment(e),
                        o = r && r.fillBefore(i.empty, !0);
                    return o ? new k(this, t, e.append(o), l.setFrom(n)) : null;
                }
                validContent(t) {
                    let e = this.contentMatch.matchFragment(t);
                    if (!e || !e.validEnd) return !1;
                    for (let e = 0; e < t.childCount; e++) if (!this.allowsMarks(t.child(e).marks)) return !1;
                    return !0;
                }
                checkContent(t) {
                    if (!this.validContent(t)) throw RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`);
                }
                allowsMarkType(t) {
                    return null == this.markSet || this.markSet.indexOf(t) > -1;
                }
                allowsMarks(t) {
                    if (null == this.markSet) return !0;
                    for (let e = 0; e < t.length; e++) if (!this.allowsMarkType(t[e].type)) return !1;
                    return !0;
                }
                allowedMarks(t) {
                    let e;
                    if (null == this.markSet) return t;
                    for (let n = 0; n < t.length; n++) this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
                    return e ? (e.length ? e : l.none) : t;
                }
                static compile(t, e) {
                    let n = Object.create(null);
                    t.forEach((t, r) => (n[t] = new R(t, e, r)));
                    let r = e.spec.topNode || "doc";
                    if (!n[r]) throw RangeError("Schema is missing its top node type ('" + r + "')");
                    if (!n.text) throw RangeError("Every schema needs a 'text' type");
                    for (let t in n.text.attrs) throw RangeError("The text node type should not have attributes");
                    return n;
                }
            }
            class N {
                constructor(t) {
                    (this.hasDefault = Object.prototype.hasOwnProperty.call(t, "default")), (this.default = t.default);
                }
                get isRequired() {
                    return !this.hasDefault;
                }
            }
            class z {
                constructor(t, e, n, r) {
                    (this.name = t), (this.rank = e), (this.schema = n), (this.spec = r), (this.attrs = I(r.attrs)), (this.excluded = null);
                    let i = A(this.attrs);
                    this.instance = i ? new l(this, i) : null;
                }
                create(t = null) {
                    return !t && this.instance ? this.instance : new l(this, D(this.attrs, t));
                }
                static compile(t, e) {
                    let n = Object.create(null),
                        r = 0;
                    return t.forEach((t, i) => (n[t] = new z(t, r++, e, i))), n;
                }
                removeFromSet(t) {
                    for (var e = 0; e < t.length; e++) t[e].type == this && ((t = t.slice(0, e).concat(t.slice(e + 1))), e--);
                    return t;
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++) if (t[e].type == this) return t[e];
                }
                excludes(t) {
                    return this.excluded.indexOf(t) > -1;
                }
            }
            class j {
                constructor(t) {
                    this.cached = Object.create(null);
                    let e = (this.spec = {});
                    for (let n in t) e[n] = t[n];
                    (e.nodes = r.from(t.nodes)), (e.marks = r.from(t.marks || {})), (this.nodes = R.compile(this.spec.nodes, this)), (this.marks = z.compile(this.spec.marks, this));
                    let n = Object.create(null);
                    for (let t in this.nodes) {
                        if (t in this.marks) throw RangeError(t + " can not be both a node and a mark");
                        let e = this.nodes[t],
                            r = e.spec.content || "",
                            i = e.spec.marks;
                        (e.contentMatch = n[r] || (n[r] = E.parse(r, this.nodes))),
                            (e.inlineContent = e.contentMatch.inlineContent),
                            (e.markSet = "_" == i ? null : i ? L(this, i.split(" ")) : "" != i && e.inlineContent ? null : []);
                    }
                    for (let t in this.marks) {
                        let e = this.marks[t],
                            n = e.spec.excludes;
                        e.excluded = null == n ? [e] : "" == n ? [] : L(this, n.split(" "));
                    }
                    (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
                        (this.markFromJSON = this.markFromJSON.bind(this)),
                        (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
                        (this.cached.wrappings = Object.create(null));
                }
                node(t, e = null, n, r) {
                    if ("string" == typeof t) t = this.nodeType(t);
                    else if (t instanceof R) {
                        if (t.schema != this) throw RangeError("Node type from different schema used (" + t.name + ")");
                    } else throw RangeError("Invalid node type: " + t);
                    return t.createChecked(e, n, r);
                }
                text(t, e) {
                    let n = this.nodes.text;
                    return new M(n, n.defaultAttrs, t, l.setFrom(e));
                }
                mark(t, e) {
                    return "string" == typeof t && (t = this.marks[t]), t.create(e);
                }
                nodeFromJSON(t) {
                    return k.fromJSON(this, t);
                }
                markFromJSON(t) {
                    return l.fromJSON(this, t);
                }
                nodeType(t) {
                    let e = this.nodes[t];
                    if (!e) throw RangeError("Unknown node type: " + t);
                    return e;
                }
            }
            function L(t, e) {
                let n = [];
                for (let r = 0; r < e.length; r++) {
                    let i = e[r],
                        o = t.marks[i],
                        s = o;
                    if (o) n.push(o);
                    else
                        for (let e in t.marks) {
                            let r = t.marks[e];
                            ("_" == i || (r.spec.group && r.spec.group.split(" ").indexOf(i) > -1)) && n.push((s = r));
                        }
                    if (!s) throw SyntaxError("Unknown mark type: '" + e[r] + "'");
                }
                return n;
            }
            class F {
                constructor(t, e) {
                    (this.schema = t),
                        (this.rules = e),
                        (this.tags = []),
                        (this.styles = []),
                        e.forEach(t => {
                            t.tag ? this.tags.push(t) : t.style && this.styles.push(t);
                        }),
                        (this.normalizeLists = !this.tags.some(e => {
                            if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
                            let n = t.nodes[e.node];
                            return n.contentMatch.matchType(n);
                        }));
                }
                parse(t, e = {}) {
                    let n = new V(this, e, !1);
                    return n.addAll(t, e.from, e.to), n.finish();
                }
                parseSlice(t, e = {}) {
                    let n = new V(this, e, !0);
                    return n.addAll(t, e.from, e.to), u.maxOpen(n.finish());
                }
                matchTag(t, e, n) {
                    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
                        var r;
                        let n = this.tags[i];
                        if (
                            ((r = n.tag),
                            (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, r) &&
                                (void 0 === n.namespace || t.namespaceURI == n.namespace) &&
                                (!n.context || e.matchesContext(n.context)))
                        ) {
                            if (n.getAttrs) {
                                let e = n.getAttrs(t);
                                if (!1 === e) continue;
                                n.attrs = e || void 0;
                            }
                            return n;
                        }
                    }
                }
                matchStyle(t, e, n, r) {
                    for (let i = r ? this.styles.indexOf(r) + 1 : 0; i < this.styles.length; i++) {
                        let r = this.styles[i],
                            o = r.style;
                        if (0 == o.indexOf(t) && (!r.context || n.matchesContext(r.context)) && (!(o.length > t.length) || (61 == o.charCodeAt(t.length) && o.slice(t.length + 1) == e))) {
                            if (r.getAttrs) {
                                let t = r.getAttrs(e);
                                if (!1 === t) continue;
                                r.attrs = t || void 0;
                            }
                            return r;
                        }
                    }
                }
                static schemaRules(t) {
                    let e = [];
                    function n(t) {
                        let n = null == t.priority ? 50 : t.priority,
                            r = 0;
                        for (; r < e.length; r++) {
                            let t = e[r];
                            if ((null == t.priority ? 50 : t.priority) < n) break;
                        }
                        e.splice(r, 0, t);
                    }
                    for (let e in t.marks) {
                        let r = t.marks[e].spec.parseDOM;
                        r &&
                            r.forEach(t => {
                                n((t = U(t))), t.mark || t.ignore || t.clearMark || (t.mark = e);
                            });
                    }
                    for (let e in t.nodes) {
                        let r = t.nodes[e].spec.parseDOM;
                        r &&
                            r.forEach(t => {
                                n((t = U(t))), t.node || t.ignore || t.mark || (t.node = e);
                            });
                    }
                    return e;
                }
                static fromSchema(t) {
                    return t.cached.domParser || (t.cached.domParser = new F(t, F.schemaRules(t)));
                }
            }
            let H = {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    canvas: !0,
                    dd: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    figcaption: !0,
                    figure: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    li: !0,
                    noscript: !0,
                    ol: !0,
                    output: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    tfoot: !0,
                    ul: !0,
                },
                B = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
                $ = { ol: !0, ul: !0 };
            function W(t, e, n) {
                return null != e ? (e ? 1 : 0) | ("full" === e ? 2 : 0) : t && "pre" == t.whitespace ? 3 : -5 & n;
            }
            class Z {
                constructor(t, e, n, r, i, o, s) {
                    (this.type = t),
                        (this.attrs = e),
                        (this.marks = n),
                        (this.pendingMarks = r),
                        (this.solid = i),
                        (this.options = s),
                        (this.content = []),
                        (this.activeMarks = l.none),
                        (this.stashMarks = []),
                        (this.match = o || (4 & s ? null : t.contentMatch));
                }
                findWrapping(t) {
                    if (!this.match) {
                        if (!this.type) return [];
                        let e = this.type.contentMatch.fillBefore(i.from(t));
                        if (e) this.match = this.type.contentMatch.matchFragment(e);
                        else {
                            let e = this.type.contentMatch,
                                n;
                            return (n = e.findWrapping(t.type)) ? ((this.match = e), n) : null;
                        }
                    }
                    return this.match.findWrapping(t.type);
                }
                finish(t) {
                    if (!(1 & this.options)) {
                        let t = this.content[this.content.length - 1],
                            e;
                        t &&
                            t.isText &&
                            (e = /[ \t\r\n\u000c]+$/.exec(t.text)) &&
                            (t.text.length == e[0].length ? this.content.pop() : (this.content[this.content.length - 1] = t.withText(t.text.slice(0, t.text.length - e[0].length))));
                    }
                    let e = i.from(this.content);
                    return !t && this.match && (e = e.append(this.match.fillBefore(i.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e;
                }
                popFromStashMark(t) {
                    for (let e = this.stashMarks.length - 1; e >= 0; e--) if (t.eq(this.stashMarks[e])) return this.stashMarks.splice(e, 1)[0];
                }
                applyPending(t) {
                    for (let e = 0, n = this.pendingMarks; e < n.length; e++) {
                        let r = n[e];
                        (this.type
                            ? this.type.allowsMarkType(r.type)
                            : (function (t, e) {
                                  let n = e.schema.nodes;
                                  for (let r in n) {
                                      let i = n[r];
                                      if (!i.allowsMarkType(t)) continue;
                                      let o = [],
                                          s = t => {
                                              o.push(t);
                                              for (let n = 0; n < t.edgeCount; n++) {
                                                  let { type: r, next: i } = t.edge(n);
                                                  if (r == e || (0 > o.indexOf(i) && s(i))) return !0;
                                              }
                                          };
                                      if (s(i.contentMatch)) return !0;
                                  }
                              })(r.type, t)) &&
                            !r.isInSet(this.activeMarks) &&
                            ((this.activeMarks = r.addToSet(this.activeMarks)), (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
                    }
                }
                inlineContext(t) {
                    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !H.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
                }
            }
            class V {
                constructor(t, e, n) {
                    (this.parser = t), (this.options = e), (this.isOpen = n), (this.open = 0);
                    let r = e.topNode,
                        i,
                        o = W(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
                    (i = r
                        ? new Z(r.type, r.attrs, l.none, l.none, !0, e.topMatch || r.type.contentMatch, o)
                        : n
                        ? new Z(null, null, l.none, l.none, !0, null, o)
                        : new Z(t.schema.topNodeType, null, l.none, l.none, !0, null, o)),
                        (this.nodes = [i]),
                        (this.find = e.findPositions),
                        (this.needsBlock = !1);
                }
                get top() {
                    return this.nodes[this.open];
                }
                addDOM(t) {
                    3 == t.nodeType ? this.addTextNode(t) : 1 == t.nodeType && this.addElement(t);
                }
                withStyleRules(t, e) {
                    let n = t.getAttribute("style");
                    if (!n) return e();
                    let r = this.readStyles(
                        (function (t) {
                            let e = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                                n,
                                r = [];
                            for (; (n = e.exec(t)); ) r.push(n[1], n[2].trim());
                            return r;
                        })(n)
                    );
                    if (!r) return;
                    let [i, o] = r,
                        s = this.top;
                    for (let t = 0; t < o.length; t++) this.removePendingMark(o[t], s);
                    for (let t = 0; t < i.length; t++) this.addPendingMark(i[t]);
                    e();
                    for (let t = 0; t < i.length; t++) this.removePendingMark(i[t], s);
                    for (let t = 0; t < o.length; t++) this.addPendingMark(o[t]);
                }
                addTextNode(t) {
                    let e = t.nodeValue,
                        n = this.top;
                    if (2 & n.options || n.inlineContext(t) || /[^ \t\r\n\u000c]/.test(e)) {
                        if (1 & n.options) e = 2 & n.options ? e.replace(/\r\n?/g, "\n") : e.replace(/\r?\n|\r/g, " ");
                        else if (((e = e.replace(/[ \t\r\n\u000c]+/g, " ")), /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1)) {
                            let r = n.content[n.content.length - 1],
                                i = t.previousSibling;
                            (!r || (i && "BR" == i.nodeName) || (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) && (e = e.slice(1));
                        }
                        e && this.insertNode(this.parser.schema.text(e)), this.findInText(t);
                    } else this.findInside(t);
                }
                addElement(t, e) {
                    let n = t.nodeName.toLowerCase(),
                        r;
                    $.hasOwnProperty(n) &&
                        this.parser.normalizeLists &&
                        (function (t) {
                            for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                                let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                                t && $.hasOwnProperty(t) && n ? (n.appendChild(e), (e = n)) : "li" == t ? (n = e) : t && (n = null);
                            }
                        })(t);
                    let i = (this.options.ruleFromNode && this.options.ruleFromNode(t)) || (r = this.parser.matchTag(t, this, e));
                    if (i ? i.ignore : B.hasOwnProperty(n)) this.findInside(t), this.ignoreFallback(t);
                    else if (!i || i.skip || i.closeParent) {
                        i && i.closeParent ? (this.open = Math.max(0, this.open - 1)) : i && i.skip.nodeType && (t = i.skip);
                        let e,
                            r = this.top,
                            o = this.needsBlock;
                        if (H.hasOwnProperty(n)) r.content.length && r.content[0].isInline && this.open && (this.open--, (r = this.top)), (e = !0), r.type || (this.needsBlock = !0);
                        else if (!t.firstChild) {
                            this.leafFallback(t);
                            return;
                        }
                        i && i.skip ? this.addAll(t) : this.withStyleRules(t, () => this.addAll(t)), e && this.sync(r), (this.needsBlock = o);
                    } else
                        this.withStyleRules(t, () => {
                            this.addElementByRule(t, i, !1 === i.consuming ? r : void 0);
                        });
                }
                leafFallback(t) {
                    "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode("\n"));
                }
                ignoreFallback(t) {
                    "BR" != t.nodeName || (this.top.type && this.top.type.inlineContent) || this.findPlace(this.parser.schema.text("-"));
                }
                readStyles(t) {
                    let e = l.none,
                        n = l.none;
                    for (let r = 0; r < t.length; r += 2)
                        for (let i; ; ) {
                            let o = this.parser.matchStyle(t[r], t[r + 1], this, i);
                            if (!o) break;
                            if (o.ignore) return null;
                            if (
                                (o.clearMark
                                    ? this.top.pendingMarks.concat(this.top.activeMarks).forEach(t => {
                                          o.clearMark(t) && (n = t.addToSet(n));
                                      })
                                    : (e = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(e)),
                                !1 === o.consuming)
                            )
                                i = o;
                            else break;
                        }
                    return [e, n];
                }
                addElementByRule(t, e, n) {
                    let r, i, o;
                    e.node
                        ? (i = this.parser.schema.nodes[e.node]).isLeaf
                            ? this.insertNode(i.create(e.attrs)) || this.leafFallback(t)
                            : (r = this.enter(i, e.attrs || null, e.preserveWhitespace))
                        : ((o = this.parser.schema.marks[e.mark].create(e.attrs)), this.addPendingMark(o));
                    let s = this.top;
                    if (i && i.isLeaf) this.findInside(t);
                    else if (n) this.addElement(t, n);
                    else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach(t => this.insertNode(t));
                    else {
                        let n = t;
                        "string" == typeof e.contentElement
                            ? (n = t.querySelector(e.contentElement))
                            : "function" == typeof e.contentElement
                            ? (n = e.contentElement(t))
                            : e.contentElement && (n = e.contentElement),
                            this.findAround(t, n, !0),
                            this.addAll(n);
                    }
                    r && this.sync(s) && this.open--, o && this.removePendingMark(o, s);
                }
                addAll(t, e, n) {
                    let r = e || 0;
                    for (let i = e ? t.childNodes[e] : t.firstChild, o = null == n ? null : t.childNodes[n]; i != o; i = i.nextSibling, ++r) this.findAtPoint(t, r), this.addDOM(i);
                    this.findAtPoint(t, r);
                }
                findPlace(t) {
                    let e, n;
                    for (let r = this.open; r >= 0; r--) {
                        let i = this.nodes[r],
                            o = i.findWrapping(t);
                        if ((o && (!e || e.length > o.length) && ((e = o), (n = i), !o.length)) || i.solid) break;
                    }
                    if (!e) return !1;
                    this.sync(n);
                    for (let t = 0; t < e.length; t++) this.enterInner(e[t], null, !1);
                    return !0;
                }
                insertNode(t) {
                    if (t.isInline && this.needsBlock && !this.top.type) {
                        let t = this.textblockFromContext();
                        t && this.enterInner(t);
                    }
                    if (this.findPlace(t)) {
                        this.closeExtra();
                        let e = this.top;
                        e.applyPending(t.type), e.match && (e.match = e.match.matchType(t.type));
                        let n = e.activeMarks;
                        for (let r = 0; r < t.marks.length; r++) (!e.type || e.type.allowsMarkType(t.marks[r].type)) && (n = t.marks[r].addToSet(n));
                        return e.content.push(t.mark(n)), !0;
                    }
                    return !1;
                }
                enter(t, e, n) {
                    let r = this.findPlace(t.create(e));
                    return r && this.enterInner(t, e, !0, n), r;
                }
                enterInner(t, e = null, n = !1, r) {
                    this.closeExtra();
                    let i = this.top;
                    i.applyPending(t), (i.match = i.match && i.match.matchType(t));
                    let o = W(t, r, i.options);
                    4 & i.options && 0 == i.content.length && (o |= 4), this.nodes.push(new Z(t, e, i.activeMarks, i.pendingMarks, n, null, o)), this.open++;
                }
                closeExtra(t = !1) {
                    let e = this.nodes.length - 1;
                    if (e > this.open) {
                        for (; e > this.open; e--) this.nodes[e - 1].content.push(this.nodes[e].finish(t));
                        this.nodes.length = this.open + 1;
                    }
                }
                finish() {
                    return (this.open = 0), this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
                }
                sync(t) {
                    for (let e = this.open; e >= 0; e--) if (this.nodes[e] == t) return (this.open = e), !0;
                    return !1;
                }
                get currentPos() {
                    this.closeExtra();
                    let t = 0;
                    for (let e = this.open; e >= 0; e--) {
                        let n = this.nodes[e].content;
                        for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
                        e && t++;
                    }
                    return t;
                }
                findAtPoint(t, e) {
                    if (this.find) for (let n = 0; n < this.find.length; n++) this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos);
                }
                findInside(t) {
                    if (this.find) for (let e = 0; e < this.find.length; e++) null == this.find[e].pos && 1 == t.nodeType && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos);
                }
                findAround(t, e, n) {
                    if (t != e && this.find)
                        for (let r = 0; r < this.find.length; r++)
                            null == this.find[r].pos &&
                                1 == t.nodeType &&
                                t.contains(this.find[r].node) &&
                                e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                                (this.find[r].pos = this.currentPos);
                }
                findInText(t) {
                    if (this.find) for (let e = 0; e < this.find.length; e++) this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset));
                }
                matchesContext(t) {
                    if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
                    let e = t.split("/"),
                        n = this.options.context,
                        r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
                        i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
                        o = (t, s) => {
                            for (; t >= 0; t--) {
                                let a = e[t];
                                if ("" == a) {
                                    if (t == e.length - 1 || 0 == t) continue;
                                    for (; s >= i; s--) if (o(t - 1, s)) return !0;
                                    return !1;
                                }
                                {
                                    let t = s > 0 || (0 == s && r) ? this.nodes[s].type : n && s >= i ? n.node(s - i).type : null;
                                    if (!t || (t.name != a && -1 == t.groups.indexOf(a))) return !1;
                                    s--;
                                }
                            }
                            return !0;
                        };
                    return o(e.length - 1, this.open);
                }
                textblockFromContext() {
                    let t = this.options.context;
                    if (t)
                        for (let e = t.depth; e >= 0; e--) {
                            let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
                            if (n && n.isTextblock && n.defaultAttrs) return n;
                        }
                    for (let t in this.parser.schema.nodes) {
                        let e = this.parser.schema.nodes[t];
                        if (e.isTextblock && e.defaultAttrs) return e;
                    }
                }
                addPendingMark(t) {
                    let e = (function (t, e) {
                        for (let n = 0; n < e.length; n++) if (t.eq(e[n])) return e[n];
                    })(t, this.top.pendingMarks);
                    e && this.top.stashMarks.push(e), (this.top.pendingMarks = t.addToSet(this.top.pendingMarks));
                }
                removePendingMark(t, e) {
                    for (let n = this.open; n >= 0; n--) {
                        let r = this.nodes[n];
                        if (r.pendingMarks.lastIndexOf(t) > -1) r.pendingMarks = t.removeFromSet(r.pendingMarks);
                        else {
                            r.activeMarks = t.removeFromSet(r.activeMarks);
                            let e = r.popFromStashMark(t);
                            e && r.type && r.type.allowsMarkType(e.type) && (r.activeMarks = e.addToSet(r.activeMarks));
                        }
                        if (r == e) break;
                    }
                }
            }
            function U(t) {
                let e = {};
                for (let n in t) e[n] = t[n];
                return e;
            }
            class Y {
                constructor(t, e) {
                    (this.nodes = t), (this.marks = e);
                }
                serializeFragment(t, e = {}, n) {
                    n || (n = q(e).createDocumentFragment());
                    let r = n,
                        i = [];
                    return (
                        t.forEach(t => {
                            if (i.length || t.marks.length) {
                                let n = 0,
                                    o = 0;
                                for (; n < i.length && o < t.marks.length; ) {
                                    let e = t.marks[o];
                                    if (!this.marks[e.type.name]) {
                                        o++;
                                        continue;
                                    }
                                    if (!e.eq(i[n][0]) || !1 === e.type.spec.spanning) break;
                                    n++, o++;
                                }
                                for (; n < i.length; ) r = i.pop()[1];
                                for (; o < t.marks.length; ) {
                                    let n = t.marks[o++],
                                        s = this.serializeMark(n, t.isInline, e);
                                    s && (i.push([n, r]), r.appendChild(s.dom), (r = s.contentDOM || s.dom));
                                }
                            }
                            r.appendChild(this.serializeNodeInner(t, e));
                        }),
                        n
                    );
                }
                serializeNodeInner(t, e) {
                    let { dom: n, contentDOM: r } = Y.renderSpec(q(e), this.nodes[t.type.name](t));
                    if (r) {
                        if (t.isLeaf) throw RangeError("Content hole not allowed in a leaf node spec");
                        this.serializeFragment(t.content, e, r);
                    }
                    return n;
                }
                serializeNode(t, e = {}) {
                    let n = this.serializeNodeInner(t, e);
                    for (let r = t.marks.length - 1; r >= 0; r--) {
                        let i = this.serializeMark(t.marks[r], t.isInline, e);
                        i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
                    }
                    return n;
                }
                serializeMark(t, e, n = {}) {
                    let r = this.marks[t.type.name];
                    return r && Y.renderSpec(q(n), r(t, e));
                }
                static renderSpec(t, e, n = null) {
                    let r;
                    if ("string" == typeof e) return { dom: t.createTextNode(e) };
                    if (null != e.nodeType) return { dom: e };
                    if (e.dom && null != e.dom.nodeType) return e;
                    let i = e[0],
                        o = i.indexOf(" ");
                    o > 0 && ((n = i.slice(0, o)), (i = i.slice(o + 1)));
                    let s = n ? t.createElementNS(n, i) : t.createElement(i),
                        a = e[1],
                        l = 1;
                    if (a && "object" == typeof a && null == a.nodeType && !Array.isArray(a)) {
                        for (let t in ((l = 2), a))
                            if (null != a[t]) {
                                let e = t.indexOf(" ");
                                e > 0 ? s.setAttributeNS(t.slice(0, e), t.slice(e + 1), a[t]) : s.setAttribute(t, a[t]);
                            }
                    }
                    for (let i = l; i < e.length; i++) {
                        let o = e[i];
                        if (0 === o) {
                            if (i < e.length - 1 || i > l) throw RangeError("Content hole must be the only child of its parent node");
                            return { dom: s, contentDOM: s };
                        }
                        {
                            let { dom: e, contentDOM: i } = Y.renderSpec(t, o, n);
                            if ((s.appendChild(e), i)) {
                                if (r) throw RangeError("Multiple content holes");
                                r = i;
                            }
                        }
                    }
                    return { dom: s, contentDOM: r };
                }
                static fromSchema(t) {
                    return t.cached.domSerializer || (t.cached.domSerializer = new Y(this.nodesFromSchema(t), this.marksFromSchema(t)));
                }
                static nodesFromSchema(t) {
                    let e = J(t.nodes);
                    return e.text || (e.text = t => t.text), e;
                }
                static marksFromSchema(t) {
                    return J(t.marks);
                }
            }
            function J(t) {
                let e = {};
                for (let n in t) {
                    let r = t[n].spec.toDOM;
                    r && (e[n] = r);
                }
                return e;
            }
            function q(t) {
                return t.document || window.document;
            }
        },
        3452: function (t, e, n) {
            "use strict";
            n.d(e, {
                IB: function () {
                    return s;
                },
                KI: function () {
                    return o;
                },
                bw: function () {
                    return a;
                },
            });
            var r = n(94536),
                i = n(10121);
            function o(t, e = null) {
                return function (n, o) {
                    let { $from: s, $to: a } = n.selection,
                        l = s.blockRange(a),
                        c = !1,
                        u = l;
                    if (!l) return !1;
                    if (l.depth >= 2 && s.node(l.depth - 1).type.compatibleContent(t) && 0 == l.startIndex) {
                        if (0 == s.index(l.depth - 1)) return !1;
                        let t = n.doc.resolve(l.start - 2);
                        (u = new i.Ts(t, t, l.depth)), l.endIndex < l.parent.childCount && (l = new i.Ts(s, n.doc.resolve(a.end(l.depth)), l.depth)), (c = !0);
                    }
                    let h = (0, r.nd)(u, t, e, l);
                    return (
                        !!h &&
                        (o &&
                            o(
                                (function (t, e, n, o, s) {
                                    let a = i.HY.empty;
                                    for (let t = n.length - 1; t >= 0; t--) a = i.HY.from(n[t].type.create(n[t].attrs, a));
                                    t.step(new r.FC(e.start - (o ? 2 : 0), e.end, e.start, e.end, new i.p2(a, 0, 0), n.length, !0));
                                    let l = 0;
                                    for (let t = 0; t < n.length; t++) n[t].type == s && (l = t + 1);
                                    let c = n.length - l,
                                        u = e.start + n.length - (o ? 2 : 0),
                                        h = e.parent;
                                    for (let n = e.startIndex, i = e.endIndex, o = !0; n < i; n++, o = !1) !o && (0, r.Ax)(t.doc, u, c) && (t.split(u, c), (u += 2 * c)), (u += h.child(n).nodeSize);
                                    return t;
                                })(n.tr, l, h, c, t).scrollIntoView()
                            ),
                        !0)
                    );
                };
            }
            function s(t) {
                return function (e, n) {
                    let { $from: o, $to: s } = e.selection,
                        a = o.blockRange(s, e => e.childCount > 0 && e.firstChild.type == t);
                    return (
                        !!a &&
                        (!n ||
                            (o.node(a.depth - 1).type == t
                                ? (function (t, e, n, o) {
                                      let s = t.tr,
                                          a = o.end,
                                          l = o.$to.end(o.depth);
                                      a < l &&
                                          (s.step(new r.FC(a - 1, l, a, l, new i.p2(i.HY.from(n.create(null, o.parent.copy())), 1, 0), 1, !0)),
                                          (o = new i.Ts(s.doc.resolve(o.$from.pos), s.doc.resolve(l), o.depth)));
                                      let c = (0, r.k9)(o);
                                      if (null == c) return !1;
                                      s.lift(o, c);
                                      let u = s.mapping.map(a, -1) - 1;
                                      return (0, r.Mn)(s.doc, u) && s.join(u), e(s.scrollIntoView()), !0;
                                  })(e, n, t, a)
                                : (function (t, e, n) {
                                      let o = t.tr,
                                          s = n.parent;
                                      for (let t = n.end, e = n.endIndex - 1, r = n.startIndex; e > r; e--) (t -= s.child(e).nodeSize), o.delete(t - 1, t + 1);
                                      let a = o.doc.resolve(n.start),
                                          l = a.nodeAfter;
                                      if (o.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
                                      let c = 0 == n.startIndex,
                                          u = n.endIndex == s.childCount,
                                          h = a.node(-1),
                                          d = a.index(-1);
                                      if (!h.canReplace(d + (c ? 0 : 1), d + 1, l.content.append(u ? i.HY.empty : i.HY.from(s)))) return !1;
                                      let p = a.pos,
                                          f = p + l.nodeSize;
                                      return (
                                          o.step(
                                              new r.FC(
                                                  p - (c ? 1 : 0),
                                                  f + (u ? 1 : 0),
                                                  p + 1,
                                                  f - 1,
                                                  new i.p2((c ? i.HY.empty : i.HY.from(s.copy(i.HY.empty))).append(u ? i.HY.empty : i.HY.from(s.copy(i.HY.empty))), c ? 0 : 1, u ? 0 : 1),
                                                  c ? 0 : 1
                                              )
                                          ),
                                          e(o.scrollIntoView()),
                                          !0
                                      );
                                  })(e, n, a)))
                    );
                };
            }
            function a(t) {
                return function (e, n) {
                    let { $from: o, $to: s } = e.selection,
                        a = o.blockRange(s, e => e.childCount > 0 && e.firstChild.type == t);
                    if (!a) return !1;
                    let l = a.startIndex;
                    if (0 == l) return !1;
                    let c = a.parent,
                        u = c.child(l - 1);
                    if (u.type != t) return !1;
                    if (n) {
                        let o = u.lastChild && u.lastChild.type == c.type,
                            s = i.HY.from(o ? t.create() : null),
                            l = new i.p2(i.HY.from(t.create(null, i.HY.from(c.type.create(null, s)))), o ? 3 : 1, 0),
                            h = a.start,
                            d = a.end;
                        n(e.tr.step(new r.FC(h - (o ? 3 : 1), d, h, d, l, 1, !0)).scrollIntoView());
                    }
                    return !0;
                };
            }
        },
        17213: function (t, e, n) {
            "use strict";
            n.d(e, {
                Bs: function () {
                    return u;
                },
                C1: function () {
                    return f;
                },
                H$: function () {
                    return O;
                },
                Sy: function () {
                    return M;
                },
                Y1: function () {
                    return s;
                },
                qv: function () {
                    return d;
                },
                yy: function () {
                    return k;
                },
            });
            var r = n(10121),
                i = n(94536);
            let o = Object.create(null);
            class s {
                constructor(t, e, n) {
                    (this.$anchor = t), (this.$head = e), (this.ranges = n || [new a(t.min(e), t.max(e))]);
                }
                get anchor() {
                    return this.$anchor.pos;
                }
                get head() {
                    return this.$head.pos;
                }
                get from() {
                    return this.$from.pos;
                }
                get to() {
                    return this.$to.pos;
                }
                get $from() {
                    return this.ranges[0].$from;
                }
                get $to() {
                    return this.ranges[0].$to;
                }
                get empty() {
                    let t = this.ranges;
                    for (let e = 0; e < t.length; e++) if (t[e].$from.pos != t[e].$to.pos) return !1;
                    return !0;
                }
                content() {
                    return this.$from.doc.slice(this.from, this.to, !0);
                }
                replace(t, e = r.p2.empty) {
                    let n = e.content.lastChild,
                        i = null;
                    for (let t = 0; t < e.openEnd; t++) (i = n), (n = n.lastChild);
                    let o = t.steps.length,
                        s = this.ranges;
                    for (let a = 0; a < s.length; a++) {
                        let { $from: l, $to: c } = s[a],
                            u = t.mapping.slice(o);
                        t.replaceRange(u.map(l.pos), u.map(c.pos), a ? r.p2.empty : e), 0 == a && y(t, o, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
                    }
                }
                replaceWith(t, e) {
                    let n = t.steps.length,
                        r = this.ranges;
                    for (let i = 0; i < r.length; i++) {
                        let { $from: o, $to: s } = r[i],
                            a = t.mapping.slice(n),
                            l = a.map(o.pos),
                            c = a.map(s.pos);
                        i ? t.deleteRange(l, c) : (t.replaceRangeWith(l, c, e), y(t, n, e.isInline ? -1 : 1));
                    }
                }
                static findFrom(t, e, n = !1) {
                    let r = t.parent.inlineContent ? new u(t) : g(t.node(0), t.parent, t.pos, t.index(), e, n);
                    if (r) return r;
                    for (let r = t.depth - 1; r >= 0; r--) {
                        let i = e < 0 ? g(t.node(0), t.node(r), t.before(r + 1), t.index(r), e, n) : g(t.node(0), t.node(r), t.after(r + 1), t.index(r) + 1, e, n);
                        if (i) return i;
                    }
                    return null;
                }
                static near(t, e = 1) {
                    return this.findFrom(t, e) || this.findFrom(t, -e) || new f(t.node(0));
                }
                static atStart(t) {
                    return g(t, t, 0, 0, 1) || new f(t);
                }
                static atEnd(t) {
                    return g(t, t, t.content.size, t.childCount, -1) || new f(t);
                }
                static fromJSON(t, e) {
                    if (!e || !e.type) throw RangeError("Invalid input for Selection.fromJSON");
                    let n = o[e.type];
                    if (!n) throw RangeError(`No selection type ${e.type} defined`);
                    return n.fromJSON(t, e);
                }
                static jsonID(t, e) {
                    if (t in o) throw RangeError("Duplicate use of selection JSON ID " + t);
                    return (o[t] = e), (e.prototype.jsonID = t), e;
                }
                getBookmark() {
                    return u.between(this.$anchor, this.$head).getBookmark();
                }
            }
            s.prototype.visible = !0;
            class a {
                constructor(t, e) {
                    (this.$from = t), (this.$to = e);
                }
            }
            let l = !1;
            function c(t) {
                l || t.parent.inlineContent || ((l = !0), console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
            }
            class u extends s {
                constructor(t, e = t) {
                    c(t), c(e), super(t, e);
                }
                get $cursor() {
                    return this.$anchor.pos == this.$head.pos ? this.$head : null;
                }
                map(t, e) {
                    let n = t.resolve(e.map(this.head));
                    if (!n.parent.inlineContent) return s.near(n);
                    let r = t.resolve(e.map(this.anchor));
                    return new u(r.parent.inlineContent ? r : n, n);
                }
                replace(t, e = r.p2.empty) {
                    if ((super.replace(t, e), e == r.p2.empty)) {
                        let e = this.$from.marksAcross(this.$to);
                        e && t.ensureMarks(e);
                    }
                }
                eq(t) {
                    return t instanceof u && t.anchor == this.anchor && t.head == this.head;
                }
                getBookmark() {
                    return new h(this.anchor, this.head);
                }
                toJSON() {
                    return { type: "text", anchor: this.anchor, head: this.head };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor || "number" != typeof e.head) throw RangeError("Invalid input for TextSelection.fromJSON");
                    return new u(t.resolve(e.anchor), t.resolve(e.head));
                }
                static create(t, e, n = e) {
                    let r = t.resolve(e);
                    return new this(r, n == e ? r : t.resolve(n));
                }
                static between(t, e, n) {
                    let r = t.pos - e.pos;
                    if (((!n || r) && (n = r >= 0 ? 1 : -1), !e.parent.inlineContent)) {
                        let t = s.findFrom(e, n, !0) || s.findFrom(e, -n, !0);
                        if (!t) return s.near(e, n);
                        e = t.$head;
                    }
                    return t.parent.inlineContent || (0 == r ? (t = e) : (t = (s.findFrom(t, -n, !0) || s.findFrom(t, n, !0)).$anchor).pos < e.pos == r < 0 || (t = e)), new u(t, e);
                }
            }
            s.jsonID("text", u);
            class h {
                constructor(t, e) {
                    (this.anchor = t), (this.head = e);
                }
                map(t) {
                    return new h(t.map(this.anchor), t.map(this.head));
                }
                resolve(t) {
                    return u.between(t.resolve(this.anchor), t.resolve(this.head));
                }
            }
            class d extends s {
                constructor(t) {
                    let e = t.nodeAfter;
                    super(t, t.node(0).resolve(t.pos + e.nodeSize)), (this.node = e);
                }
                map(t, e) {
                    let { deleted: n, pos: r } = e.mapResult(this.anchor),
                        i = t.resolve(r);
                    return n ? s.near(i) : new d(i);
                }
                content() {
                    return new r.p2(r.HY.from(this.node), 0, 0);
                }
                eq(t) {
                    return t instanceof d && t.anchor == this.anchor;
                }
                toJSON() {
                    return { type: "node", anchor: this.anchor };
                }
                getBookmark() {
                    return new p(this.anchor);
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor) throw RangeError("Invalid input for NodeSelection.fromJSON");
                    return new d(t.resolve(e.anchor));
                }
                static create(t, e) {
                    return new d(t.resolve(e));
                }
                static isSelectable(t) {
                    return !t.isText && !1 !== t.type.spec.selectable;
                }
            }
            (d.prototype.visible = !1), s.jsonID("node", d);
            class p {
                constructor(t) {
                    this.anchor = t;
                }
                map(t) {
                    let { deleted: e, pos: n } = t.mapResult(this.anchor);
                    return e ? new h(n, n) : new p(n);
                }
                resolve(t) {
                    let e = t.resolve(this.anchor),
                        n = e.nodeAfter;
                    return n && d.isSelectable(n) ? new d(e) : s.near(e);
                }
            }
            class f extends s {
                constructor(t) {
                    super(t.resolve(0), t.resolve(t.content.size));
                }
                replace(t, e = r.p2.empty) {
                    if (e == r.p2.empty) {
                        t.delete(0, t.doc.content.size);
                        let e = s.atStart(t.doc);
                        e.eq(t.selection) || t.setSelection(e);
                    } else super.replace(t, e);
                }
                toJSON() {
                    return { type: "all" };
                }
                static fromJSON(t) {
                    return new f(t);
                }
                map(t) {
                    return new f(t);
                }
                eq(t) {
                    return t instanceof f;
                }
                getBookmark() {
                    return m;
                }
            }
            s.jsonID("all", f);
            let m = {
                map() {
                    return this;
                },
                resolve: t => new f(t),
            };
            function g(t, e, n, r, i, o = !1) {
                if (e.inlineContent) return u.create(t, n);
                for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
                    let r = e.child(s);
                    if (r.isAtom) {
                        if (!o && d.isSelectable(r)) return d.create(t, n - (i < 0 ? r.nodeSize : 0));
                    } else {
                        let e = g(t, r, n + i, i < 0 ? r.childCount : 0, i, o);
                        if (e) return e;
                    }
                    n += r.nodeSize * i;
                }
                return null;
            }
            function y(t, e, n) {
                let r,
                    o = t.steps.length - 1;
                if (o < e) return;
                let a = t.steps[o];
                (a instanceof i.Pu || a instanceof i.FC) &&
                    (t.mapping.maps[o].forEach((t, e, n, i) => {
                        null == r && (r = i);
                    }),
                    t.setSelection(s.near(t.doc.resolve(r), n)));
            }
            class v extends i.wx {
                constructor(t) {
                    super(t.doc),
                        (this.curSelectionFor = 0),
                        (this.updated = 0),
                        (this.meta = Object.create(null)),
                        (this.time = Date.now()),
                        (this.curSelection = t.selection),
                        (this.storedMarks = t.storedMarks);
                }
                get selection() {
                    return (
                        this.curSelectionFor < this.steps.length &&
                            ((this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor))), (this.curSelectionFor = this.steps.length)),
                        this.curSelection
                    );
                }
                setSelection(t) {
                    if (t.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
                    return (this.curSelection = t), (this.curSelectionFor = this.steps.length), (this.updated = (1 | this.updated) & -3), (this.storedMarks = null), this;
                }
                get selectionSet() {
                    return (1 & this.updated) > 0;
                }
                setStoredMarks(t) {
                    return (this.storedMarks = t), (this.updated |= 2), this;
                }
                ensureMarks(t) {
                    return r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this;
                }
                addStoredMark(t) {
                    return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()));
                }
                removeStoredMark(t) {
                    return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()));
                }
                get storedMarksSet() {
                    return (2 & this.updated) > 0;
                }
                addStep(t, e) {
                    super.addStep(t, e), (this.updated = -3 & this.updated), (this.storedMarks = null);
                }
                setTime(t) {
                    return (this.time = t), this;
                }
                replaceSelection(t) {
                    return this.selection.replace(this, t), this;
                }
                replaceSelectionWith(t, e = !0) {
                    let n = this.selection;
                    return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || r.vc.none))), n.replaceWith(this, t), this;
                }
                deleteSelection() {
                    return this.selection.replace(this), this;
                }
                insertText(t, e, n) {
                    let r = this.doc.type.schema;
                    if (null == e) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection();
                    {
                        if ((null == n && (n = e), (n = null == n ? e : n), !t)) return this.deleteRange(e, n);
                        let i = this.storedMarks;
                        if (!i) {
                            let t = this.doc.resolve(e);
                            i = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n));
                        }
                        return this.replaceRangeWith(e, n, r.text(t, i)), this.selection.empty || this.setSelection(s.near(this.selection.$to)), this;
                    }
                }
                setMeta(t, e) {
                    return (this.meta["string" == typeof t ? t : t.key] = e), this;
                }
                getMeta(t) {
                    return this.meta["string" == typeof t ? t : t.key];
                }
                get isGeneric() {
                    for (let t in this.meta) return !1;
                    return !0;
                }
                scrollIntoView() {
                    return (this.updated |= 4), this;
                }
                get scrolledIntoView() {
                    return (4 & this.updated) > 0;
                }
            }
            function b(t, e) {
                return e && t ? t.bind(e) : t;
            }
            class w {
                constructor(t, e, n) {
                    (this.name = t), (this.init = b(e.init, n)), (this.apply = b(e.apply, n));
                }
            }
            let x = [
                new w("doc", { init: t => t.doc || t.schema.topNodeType.createAndFill(), apply: t => t.doc }),
                new w("selection", { init: (t, e) => t.selection || s.atStart(e.doc), apply: t => t.selection }),
                new w("storedMarks", { init: t => t.storedMarks || null, apply: (t, e, n, r) => (r.selection.$cursor ? t.storedMarks : null) }),
                new w("scrollToSelection", { init: () => 0, apply: (t, e) => (t.scrolledIntoView ? e + 1 : e) }),
            ];
            class S {
                constructor(t, e) {
                    (this.schema = t),
                        (this.plugins = []),
                        (this.pluginsByKey = Object.create(null)),
                        (this.fields = x.slice()),
                        e &&
                            e.forEach(t => {
                                if (this.pluginsByKey[t.key]) throw RangeError("Adding different instances of a keyed plugin (" + t.key + ")");
                                this.plugins.push(t), (this.pluginsByKey[t.key] = t), t.spec.state && this.fields.push(new w(t.key, t.spec.state, t));
                            });
                }
            }
            class k {
                constructor(t) {
                    this.config = t;
                }
                get schema() {
                    return this.config.schema;
                }
                get plugins() {
                    return this.config.plugins;
                }
                apply(t) {
                    return this.applyTransaction(t).state;
                }
                filterTransaction(t, e = -1) {
                    for (let n = 0; n < this.config.plugins.length; n++)
                        if (n != e) {
                            let e = this.config.plugins[n];
                            if (e.spec.filterTransaction && !e.spec.filterTransaction.call(e, t, this)) return !1;
                        }
                    return !0;
                }
                applyTransaction(t) {
                    if (!this.filterTransaction(t)) return { state: this, transactions: [] };
                    let e = [t],
                        n = this.applyInner(t),
                        r = null;
                    for (;;) {
                        let i = !1;
                        for (let o = 0; o < this.config.plugins.length; o++) {
                            let s = this.config.plugins[o];
                            if (s.spec.appendTransaction) {
                                let a = r ? r[o].n : 0,
                                    l = r ? r[o].state : this,
                                    c = a < e.length && s.spec.appendTransaction.call(s, a ? e.slice(a) : e, l, n);
                                if (c && n.filterTransaction(c, o)) {
                                    if ((c.setMeta("appendedTransaction", t), !r)) {
                                        r = [];
                                        for (let t = 0; t < this.config.plugins.length; t++) r.push(t < o ? { state: n, n: e.length } : { state: this, n: 0 });
                                    }
                                    e.push(c), (n = n.applyInner(c)), (i = !0);
                                }
                                r && (r[o] = { state: n, n: e.length });
                            }
                        }
                        if (!i) return { state: n, transactions: e };
                    }
                }
                applyInner(t) {
                    if (!t.before.eq(this.doc)) throw RangeError("Applying a mismatched transaction");
                    let e = new k(this.config),
                        n = this.config.fields;
                    for (let r = 0; r < n.length; r++) {
                        let i = n[r];
                        e[i.name] = i.apply(t, this[i.name], this, e);
                    }
                    return e;
                }
                get tr() {
                    return new v(this);
                }
                static create(t) {
                    let e = new S(t.doc ? t.doc.type.schema : t.schema, t.plugins),
                        n = new k(e);
                    for (let r = 0; r < e.fields.length; r++) n[e.fields[r].name] = e.fields[r].init(t, n);
                    return n;
                }
                reconfigure(t) {
                    let e = new S(this.schema, t.plugins),
                        n = e.fields,
                        r = new k(e);
                    for (let e = 0; e < n.length; e++) {
                        let i = n[e].name;
                        r[i] = this.hasOwnProperty(i) ? this[i] : n[e].init(t, r);
                    }
                    return r;
                }
                toJSON(t) {
                    let e = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
                    if ((this.storedMarks && (e.storedMarks = this.storedMarks.map(t => t.toJSON())), t && "object" == typeof t))
                        for (let n in t) {
                            if ("doc" == n || "selection" == n) throw RangeError("The JSON fields `doc` and `selection` are reserved");
                            let r = t[n],
                                i = r.spec.state;
                            i && i.toJSON && (e[n] = i.toJSON.call(r, this[r.key]));
                        }
                    return e;
                }
                static fromJSON(t, e, n) {
                    if (!e) throw RangeError("Invalid input for EditorState.fromJSON");
                    if (!t.schema) throw RangeError("Required config field 'schema' missing");
                    let i = new S(t.schema, t.plugins),
                        o = new k(i);
                    return (
                        i.fields.forEach(i => {
                            if ("doc" == i.name) o.doc = r.NB.fromJSON(t.schema, e.doc);
                            else if ("selection" == i.name) o.selection = s.fromJSON(o.doc, e.selection);
                            else if ("storedMarks" == i.name) e.storedMarks && (o.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
                            else {
                                if (n)
                                    for (let r in n) {
                                        let s = n[r],
                                            a = s.spec.state;
                                        if (s.key == i.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(e, r)) {
                                            o[i.name] = a.fromJSON.call(s, t, e[r], o);
                                            return;
                                        }
                                    }
                                o[i.name] = i.init(t, o);
                            }
                        }),
                        o
                    );
                }
            }
            class M {
                constructor(t) {
                    (this.spec = t),
                        (this.props = {}),
                        t.props &&
                            (function t(e, n, r) {
                                for (let i in e) {
                                    let o = e[i];
                                    o instanceof Function ? (o = o.bind(n)) : "handleDOMEvents" == i && (o = t(o, n, {})), (r[i] = o);
                                }
                                return r;
                            })(t.props, this, this.props),
                        (this.key = t.key ? t.key.key : E("plugin"));
                }
                getState(t) {
                    return t[this.key];
                }
            }
            let C = Object.create(null);
            function E(t) {
                return t in C ? t + "$" + ++C[t] : ((C[t] = 0), t + "$");
            }
            class O {
                constructor(t = "key") {
                    this.key = E(t);
                }
                get(t) {
                    return t.config.pluginsByKey[this.key];
                }
                getState(t) {
                    return t[this.key];
                }
            }
        },
        94536: function (t, e, n) {
            "use strict";
            n.d(e, {
                Ax: function () {
                    return x;
                },
                FC: function () {
                    return g;
                },
                GJ: function () {
                    return M;
                },
                Mn: function () {
                    return S;
                },
                Pu: function () {
                    return m;
                },
                dR: function () {
                    return E;
                },
                k9: function () {
                    return v;
                },
                nd: function () {
                    return b;
                },
                nj: function () {
                    return C;
                },
                vs: function () {
                    return s;
                },
                wx: function () {
                    return j;
                },
            });
            var r = n(10121);
            class i {
                constructor(t, e, n) {
                    (this.pos = t), (this.delInfo = e), (this.recover = n);
                }
                get deleted() {
                    return (8 & this.delInfo) > 0;
                }
                get deletedBefore() {
                    return (5 & this.delInfo) > 0;
                }
                get deletedAfter() {
                    return (6 & this.delInfo) > 0;
                }
                get deletedAcross() {
                    return (4 & this.delInfo) > 0;
                }
            }
            class o {
                constructor(t, e = !1) {
                    if (((this.ranges = t), (this.inverted = e), !t.length && o.empty)) return o.empty;
                }
                recover(t) {
                    let e = 0,
                        n = 65535 & t;
                    if (!this.inverted) for (let t = 0; t < n; t++) e += this.ranges[3 * t + 2] - this.ranges[3 * t + 1];
                    return this.ranges[3 * n] + e + (t - (65535 & t)) / 65536;
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1);
                }
                map(t, e = 1) {
                    return this._map(t, e, !0);
                }
                _map(t, e, n) {
                    let r = 0,
                        o = this.inverted ? 2 : 1,
                        s = this.inverted ? 1 : 2;
                    for (let a = 0; a < this.ranges.length; a += 3) {
                        let l = this.ranges[a] - (this.inverted ? r : 0);
                        if (l > t) break;
                        let c = this.ranges[a + o],
                            u = this.ranges[a + s],
                            h = l + c;
                        if (t <= h) {
                            let o = c ? (t == l ? -1 : t == h ? 1 : e) : e,
                                s = l + r + (o < 0 ? 0 : u);
                            if (n) return s;
                            let d = t == (e < 0 ? l : h) ? null : a / 3 + (t - l) * 65536,
                                p = t == l ? 2 : t == h ? 1 : 4;
                            return (e < 0 ? t != l : t != h) && (p |= 8), new i(s, p, d);
                        }
                        r += u - c;
                    }
                    return n ? t + r : new i(t + r, 0, null);
                }
                touches(t, e) {
                    let n = 0,
                        r = 65535 & e,
                        i = this.inverted ? 2 : 1,
                        o = this.inverted ? 1 : 2;
                    for (let e = 0; e < this.ranges.length; e += 3) {
                        let s = this.ranges[e] - (this.inverted ? n : 0);
                        if (s > t) break;
                        let a = this.ranges[e + i];
                        if (t <= s + a && e == 3 * r) return !0;
                        n += this.ranges[e + o] - a;
                    }
                    return !1;
                }
                forEach(t) {
                    let e = this.inverted ? 2 : 1,
                        n = this.inverted ? 1 : 2;
                    for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
                        let o = this.ranges[r],
                            s = o - (this.inverted ? i : 0),
                            a = o + (this.inverted ? 0 : i),
                            l = this.ranges[r + e],
                            c = this.ranges[r + n];
                        t(s, s + l, a, a + c), (i += c - l);
                    }
                }
                invert() {
                    return new o(this.ranges, !this.inverted);
                }
                toString() {
                    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
                }
                static offset(t) {
                    return 0 == t ? o.empty : new o(t < 0 ? [0, -t, 0] : [0, 0, t]);
                }
            }
            o.empty = new o([]);
            class s {
                constructor(t = [], e, n = 0, r = t.length) {
                    (this.maps = t), (this.mirror = e), (this.from = n), (this.to = r);
                }
                slice(t = 0, e = this.maps.length) {
                    return new s(this.maps, this.mirror, t, e);
                }
                copy() {
                    return new s(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
                }
                appendMap(t, e) {
                    (this.to = this.maps.push(t)), null != e && this.setMirror(this.maps.length - 1, e);
                }
                appendMapping(t) {
                    for (let e = 0, n = this.maps.length; e < t.maps.length; e++) {
                        let r = t.getMirror(e);
                        this.appendMap(t.maps[e], null != r && r < e ? n + r : void 0);
                    }
                }
                getMirror(t) {
                    if (this.mirror) {
                        for (let e = 0; e < this.mirror.length; e++) if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)];
                    }
                }
                setMirror(t, e) {
                    this.mirror || (this.mirror = []), this.mirror.push(t, e);
                }
                appendMappingInverted(t) {
                    for (let e = t.maps.length - 1, n = this.maps.length + t.maps.length; e >= 0; e--) {
                        let r = t.getMirror(e);
                        this.appendMap(t.maps[e].invert(), null != r && r > e ? n - r - 1 : void 0);
                    }
                }
                invert() {
                    let t = new s();
                    return t.appendMappingInverted(this), t;
                }
                map(t, e = 1) {
                    if (this.mirror) return this._map(t, e, !0);
                    for (let n = this.from; n < this.to; n++) t = this.maps[n].map(t, e);
                    return t;
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1);
                }
                _map(t, e, n) {
                    let r = 0;
                    for (let n = this.from; n < this.to; n++) {
                        let i = this.maps[n].mapResult(t, e);
                        if (null != i.recover) {
                            let e = this.getMirror(n);
                            if (null != e && e > n && e < this.to) {
                                (n = e), (t = this.maps[e].recover(i.recover));
                                continue;
                            }
                        }
                        (r |= i.delInfo), (t = i.pos);
                    }
                    return n ? t : new i(t, r, null);
                }
            }
            let a = Object.create(null);
            class l {
                getMap() {
                    return o.empty;
                }
                merge(t) {
                    return null;
                }
                static fromJSON(t, e) {
                    if (!e || !e.stepType) throw RangeError("Invalid input for Step.fromJSON");
                    let n = a[e.stepType];
                    if (!n) throw RangeError(`No step type ${e.stepType} defined`);
                    return n.fromJSON(t, e);
                }
                static jsonID(t, e) {
                    if (t in a) throw RangeError("Duplicate use of step JSON ID " + t);
                    return (a[t] = e), (e.prototype.jsonID = t), e;
                }
            }
            class c {
                constructor(t, e) {
                    (this.doc = t), (this.failed = e);
                }
                static ok(t) {
                    return new c(t, null);
                }
                static fail(t) {
                    return new c(null, t);
                }
                static fromReplace(t, e, n, i) {
                    try {
                        return c.ok(t.replace(e, n, i));
                    } catch (t) {
                        if (t instanceof r.e4) return c.fail(t.message);
                        throw t;
                    }
                }
            }
            function u(t, e, n) {
                let i = [];
                for (let r = 0; r < t.childCount; r++) {
                    let o = t.child(r);
                    o.content.size && (o = o.copy(u(o.content, e, o))), o.isInline && (o = e(o, n, r)), i.push(o);
                }
                return r.HY.fromArray(i);
            }
            class h extends l {
                constructor(t, e, n) {
                    super(), (this.from = t), (this.to = e), (this.mark = n);
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = t.resolve(this.from),
                        i = n.node(n.sharedDepth(this.to)),
                        o = new r.p2(
                            u(e.content, (t, e) => (t.isAtom && e.type.allowsMarkType(this.mark.type) ? t.mark(this.mark.addToSet(t.marks)) : t), i),
                            e.openStart,
                            e.openEnd
                        );
                    return c.fromReplace(t, this.from, this.to, o);
                }
                invert() {
                    return new d(this.from, this.to, this.mark);
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return (e.deleted && n.deleted) || e.pos >= n.pos ? null : new h(e.pos, n.pos, this.mark);
                }
                merge(t) {
                    return t instanceof h && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new h(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
                }
                toJSON() {
                    return { stepType: "addMark", mark: this.mark.toJSON(), from: this.from, to: this.to };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw RangeError("Invalid input for AddMarkStep.fromJSON");
                    return new h(e.from, e.to, t.markFromJSON(e.mark));
                }
            }
            l.jsonID("addMark", h);
            class d extends l {
                constructor(t, e, n) {
                    super(), (this.from = t), (this.to = e), (this.mark = n);
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = new r.p2(
                            u(e.content, t => t.mark(this.mark.removeFromSet(t.marks)), t),
                            e.openStart,
                            e.openEnd
                        );
                    return c.fromReplace(t, this.from, this.to, n);
                }
                invert() {
                    return new h(this.from, this.to, this.mark);
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return (e.deleted && n.deleted) || e.pos >= n.pos ? null : new d(e.pos, n.pos, this.mark);
                }
                merge(t) {
                    return t instanceof d && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new d(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
                }
                toJSON() {
                    return { stepType: "removeMark", mark: this.mark.toJSON(), from: this.from, to: this.to };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
                    return new d(e.from, e.to, t.markFromJSON(e.mark));
                }
            }
            l.jsonID("removeMark", d);
            class p extends l {
                constructor(t, e) {
                    super(), (this.pos = t), (this.mark = e);
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return c.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
                    return c.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1));
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    if (e) {
                        let t = this.mark.addToSet(e.marks);
                        if (t.length == e.marks.length) {
                            for (let n = 0; n < e.marks.length; n++) if (!e.marks[n].isInSet(t)) return new p(this.pos, e.marks[n]);
                            return new p(this.pos, this.mark);
                        }
                    }
                    return new f(this.pos, this.mark);
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new p(e.pos, this.mark);
                }
                toJSON() {
                    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
                    return new p(e.pos, t.markFromJSON(e.mark));
                }
            }
            l.jsonID("addNodeMark", p);
            class f extends l {
                constructor(t, e) {
                    super(), (this.pos = t), (this.mark = e);
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return c.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
                    return c.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1));
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    return e && this.mark.isInSet(e.marks) ? new p(this.pos, this.mark) : this;
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new f(e.pos, this.mark);
                }
                toJSON() {
                    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
                    return new f(e.pos, t.markFromJSON(e.mark));
                }
            }
            l.jsonID("removeNodeMark", f);
            class m extends l {
                constructor(t, e, n, r = !1) {
                    super(), (this.from = t), (this.to = e), (this.slice = n), (this.structure = r);
                }
                apply(t) {
                    return this.structure && y(t, this.from, this.to) ? c.fail("Structure replace would overwrite content") : c.fromReplace(t, this.from, this.to, this.slice);
                }
                getMap() {
                    return new o([this.from, this.to - this.from, this.slice.size]);
                }
                invert(t) {
                    return new m(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deletedAcross && n.deletedAcross ? null : new m(e.pos, Math.max(e.pos, n.pos), this.slice);
                }
                merge(t) {
                    if (!(t instanceof m) || t.structure || this.structure) return null;
                    if (this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart) {
                        if (t.to != this.from || this.slice.openStart || t.slice.openEnd) return null;
                        {
                            let e = this.slice.size + t.slice.size == 0 ? r.p2.empty : new r.p2(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
                            return new m(t.from, this.to, e, this.structure);
                        }
                    }
                    {
                        let e = this.slice.size + t.slice.size == 0 ? r.p2.empty : new r.p2(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
                        return new m(this.from, this.to + (t.to - t.from), e, this.structure);
                    }
                }
                toJSON() {
                    let t = { stepType: "replace", from: this.from, to: this.to };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw RangeError("Invalid input for ReplaceStep.fromJSON");
                    return new m(e.from, e.to, r.p2.fromJSON(t, e.slice), !!e.structure);
                }
            }
            l.jsonID("replace", m);
            class g extends l {
                constructor(t, e, n, r, i, o, s = !1) {
                    super(), (this.from = t), (this.to = e), (this.gapFrom = n), (this.gapTo = r), (this.slice = i), (this.insert = o), (this.structure = s);
                }
                apply(t) {
                    if (this.structure && (y(t, this.from, this.gapFrom) || y(t, this.gapTo, this.to))) return c.fail("Structure gap-replace would overwrite content");
                    let e = t.slice(this.gapFrom, this.gapTo);
                    if (e.openStart || e.openEnd) return c.fail("Gap is not a flat range");
                    let n = this.slice.insertAt(this.insert, e.content);
                    return n ? c.fromReplace(t, this.from, this.to, n) : c.fail("Content does not fit in gap");
                }
                getMap() {
                    return new o([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
                }
                invert(t) {
                    let e = this.gapTo - this.gapFrom;
                    return new g(
                        this.from,
                        this.from + this.slice.size + e,
                        this.from + this.insert,
                        this.from + this.insert + e,
                        t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
                        this.gapFrom - this.from,
                        this.structure
                    );
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1),
                        r = t.map(this.gapFrom, -1),
                        i = t.map(this.gapTo, 1);
                    return (e.deletedAcross && n.deletedAcross) || r < e.pos || i > n.pos ? null : new g(e.pos, n.pos, r, i, this.slice, this.insert, this.structure);
                }
                toJSON() {
                    let t = { stepType: "replaceAround", from: this.from, to: this.to, gapFrom: this.gapFrom, gapTo: this.gapTo, insert: this.insert };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to || "number" != typeof e.gapFrom || "number" != typeof e.gapTo || "number" != typeof e.insert)
                        throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
                    return new g(e.from, e.to, e.gapFrom, e.gapTo, r.p2.fromJSON(t, e.slice), e.insert, !!e.structure);
                }
            }
            function y(t, e, n) {
                let r = t.resolve(e),
                    i = n - e,
                    o = r.depth;
                for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; ) o--, i--;
                if (i > 0) {
                    let t = r.node(o).maybeChild(r.indexAfter(o));
                    for (; i > 0; ) {
                        if (!t || t.isLeaf) return !0;
                        (t = t.firstChild), i--;
                    }
                }
                return !1;
            }
            function v(t) {
                let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
                for (let n = t.depth; ; --n) {
                    let r = t.$from.node(n),
                        i = t.$from.index(n),
                        o = t.$to.indexAfter(n);
                    if (n < t.depth && r.canReplace(i, o, e)) return n;
                    if (0 == n || r.type.spec.isolating || !((0 == i || r.canReplace(i, r.childCount)) && (o == r.childCount || r.canReplace(0, o)))) break;
                }
                return null;
            }
            function b(t, e, n = null, r = t) {
                let i = (function (t, e) {
                        let { parent: n, startIndex: r, endIndex: i } = t,
                            o = n.contentMatchAt(r).findWrapping(e);
                        if (!o) return null;
                        let s = o.length ? o[0] : e;
                        return n.canReplaceWith(r, i, s) ? o : null;
                    })(t, e),
                    o =
                        i &&
                        (function (t, e) {
                            let { parent: n, startIndex: r, endIndex: i } = t,
                                o = n.child(r),
                                s = e.contentMatch.findWrapping(o.type);
                            if (!s) return null;
                            let a = (s.length ? s[s.length - 1] : e).contentMatch;
                            for (let t = r; a && t < i; t++) a = a.matchType(n.child(t).type);
                            return a && a.validEnd ? s : null;
                        })(r, e);
                return o ? i.map(w).concat({ type: e, attrs: n }).concat(o.map(w)) : null;
            }
            function w(t) {
                return { type: t, attrs: null };
            }
            function x(t, e, n = 1, r) {
                let i = t.resolve(e),
                    o = i.depth - n,
                    s = (r && r[r.length - 1]) || i.parent;
                if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
                    return !1;
                for (let t = i.depth - 1, e = n - 2; t > o; t--, e--) {
                    let n = i.node(t),
                        o = i.index(t);
                    if (n.type.spec.isolating) return !1;
                    let s = n.content.cutByIndex(o, n.childCount),
                        a = r && r[e + 1];
                    a && (s = s.replaceChild(0, a.type.create(a.attrs)));
                    let l = (r && r[e]) || n;
                    if (!n.canReplace(o + 1, n.childCount) || !l.type.validContent(s)) return !1;
                }
                let a = i.indexAfter(o),
                    l = r && r[0];
                return i.node(o).canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
            }
            function S(t, e) {
                let n = t.resolve(e),
                    r = n.index();
                return k(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
            }
            function k(t, e) {
                return !!(t && e && !t.isLeaf && t.canAppend(e));
            }
            function M(t, e, n = -1) {
                let r = t.resolve(e);
                for (let t = r.depth; ; t--) {
                    let i,
                        o,
                        s = r.index(t);
                    if (
                        (t == r.depth
                            ? ((i = r.nodeBefore), (o = r.nodeAfter))
                            : n > 0
                            ? ((i = r.node(t + 1)), s++, (o = r.node(t).maybeChild(s)))
                            : ((i = r.node(t).maybeChild(s - 1)), (o = r.node(t + 1))),
                        i && !i.isTextblock && k(i, o) && r.node(t).canReplace(s, s + 1))
                    )
                        return e;
                    if (0 == t) break;
                    e = n < 0 ? r.before(t) : r.after(t);
                }
            }
            function C(t, e, n) {
                let r = t.resolve(e);
                if (!n.content.size) return e;
                let i = n.content;
                for (let t = 0; t < n.openStart; t++) i = i.firstChild.content;
                for (let t = 1; t <= (0 == n.openStart && n.size ? 2 : 1); t++)
                    for (let e = r.depth; e >= 0; e--) {
                        let n = e == r.depth ? 0 : r.pos <= (r.start(e + 1) + r.end(e + 1)) / 2 ? -1 : 1,
                            o = r.index(e) + (n > 0 ? 1 : 0),
                            s = r.node(e),
                            a = !1;
                        if (1 == t) a = s.canReplace(o, o, i);
                        else {
                            let t = s.contentMatchAt(o).findWrapping(i.firstChild.type);
                            a = t && s.canReplaceWith(o, o, t[0]);
                        }
                        if (a) return 0 == n ? r.pos : n < 0 ? r.before(e + 1) : r.after(e + 1);
                    }
                return null;
            }
            function E(t, e, n = e, i = r.p2.empty) {
                if (e == n && !i.size) return null;
                let o = t.resolve(e),
                    s = t.resolve(n);
                return O(o, s, i) ? new m(e, n, i) : new _(o, s, i).fit();
            }
            function O(t, e, n) {
                return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
            }
            l.jsonID("replaceAround", g);
            class _ {
                constructor(t, e, n) {
                    (this.$from = t), (this.$to = e), (this.unplaced = n), (this.frontier = []), (this.placed = r.HY.empty);
                    for (let e = 0; e <= t.depth; e++) {
                        let n = t.node(e);
                        this.frontier.push({ type: n.type, match: n.contentMatchAt(t.indexAfter(e)) });
                    }
                    for (let e = t.depth; e > 0; e--) this.placed = r.HY.from(t.node(e).copy(this.placed));
                }
                get depth() {
                    return this.frontier.length - 1;
                }
                fit() {
                    for (; this.unplaced.size; ) {
                        let t = this.findFittable();
                        t ? this.placeNodes(t) : this.openMore() || this.dropNode();
                    }
                    let t = this.mustMoveInline(),
                        e = this.placed.size - this.depth - this.$from.depth,
                        n = this.$from,
                        i = this.close(t < 0 ? this.$to : n.doc.resolve(t));
                    if (!i) return null;
                    let o = this.placed,
                        s = n.depth,
                        a = i.depth;
                    for (; s && a && 1 == o.childCount; ) (o = o.firstChild.content), s--, a--;
                    let l = new r.p2(o, s, a);
                    return t > -1 ? new g(n.pos, t, this.$to.pos, this.$to.end(), l, e) : l.size || n.pos != this.$to.pos ? new m(n.pos, i.pos, l) : null;
                }
                findFittable() {
                    let t = this.unplaced.openStart;
                    for (let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < t; n++) {
                        let i = e.firstChild;
                        if ((e.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)) {
                            t = n;
                            break;
                        }
                        e = i.content;
                    }
                    for (let e = 1; e <= 2; e++)
                        for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
                            let t = null,
                                i = (n ? (t = A(this.unplaced.content, n - 1).firstChild).content : this.unplaced.content).firstChild;
                            for (let o = this.depth; o >= 0; o--) {
                                let { type: s, match: a } = this.frontier[o],
                                    l,
                                    c = null;
                                if (1 == e && (i ? a.matchType(i.type) || (c = a.fillBefore(r.HY.from(i), !1)) : t && s.compatibleContent(t.type)))
                                    return { sliceDepth: n, frontierDepth: o, parent: t, inject: c };
                                if (2 == e && i && (l = a.findWrapping(i.type))) return { sliceDepth: n, frontierDepth: o, parent: t, wrap: l };
                                if (t && a.matchType(t.type)) break;
                            }
                        }
                }
                openMore() {
                    let { content: t, openStart: e, openEnd: n } = this.unplaced,
                        i = A(t, e);
                    return !!i.childCount && !i.firstChild.isLeaf && ((this.unplaced = new r.p2(t, e + 1, Math.max(n, i.size + e >= t.size - n ? e + 1 : 0))), !0);
                }
                dropNode() {
                    let { content: t, openStart: e, openEnd: n } = this.unplaced,
                        i = A(t, e);
                    if (i.childCount <= 1 && e > 0) {
                        let o = t.size - e <= e + i.size;
                        this.unplaced = new r.p2(T(t, e - 1, 1), e - 1, o ? e - 1 : n);
                    } else this.unplaced = new r.p2(T(t, e, 1), e, n);
                }
                placeNodes({ sliceDepth: t, frontierDepth: e, parent: n, inject: i, wrap: o }) {
                    for (; this.depth > e; ) this.closeFrontierNode();
                    if (o) for (let t = 0; t < o.length; t++) this.openFrontierNode(o[t]);
                    let s = this.unplaced,
                        a = n ? n.content : s.content,
                        l = s.openStart - t,
                        c = 0,
                        u = [],
                        { match: h, type: d } = this.frontier[e];
                    if (i) {
                        for (let t = 0; t < i.childCount; t++) u.push(i.child(t));
                        h = h.matchFragment(i);
                    }
                    let p = a.size + t - (s.content.size - s.openEnd);
                    for (; c < a.childCount; ) {
                        let t = a.child(c),
                            e = h.matchType(t.type);
                        if (!e) break;
                        (++c > 1 || 0 == l || t.content.size) &&
                            ((h = e),
                            u.push(
                                (function t(e, n, i) {
                                    if (n <= 0) return e;
                                    let o = e.content;
                                    return (
                                        n > 1 && (o = o.replaceChild(0, t(o.firstChild, n - 1, 1 == o.childCount ? i - 1 : 0))),
                                        n > 0 && ((o = e.type.contentMatch.fillBefore(o).append(o)), i <= 0 && (o = o.append(e.type.contentMatch.matchFragment(o).fillBefore(r.HY.empty, !0)))),
                                        e.copy(o)
                                    );
                                })(t.mark(d.allowedMarks(t.marks)), 1 == c ? l : 0, c == a.childCount ? p : -1)
                            ));
                    }
                    let f = c == a.childCount;
                    f || (p = -1),
                        (this.placed = P(this.placed, e, r.HY.from(u))),
                        (this.frontier[e].match = h),
                        f && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
                    for (let t = 0, e = a; t < p; t++) {
                        let t = e.lastChild;
                        this.frontier.push({ type: t.type, match: t.contentMatchAt(t.childCount) }), (e = t.content);
                    }
                    this.unplaced = f ? (0 == t ? r.p2.empty : new r.p2(T(s.content, t - 1, 1), t - 1, p < 0 ? s.openEnd : t - 1)) : new r.p2(T(s.content, t, c), s.openStart, s.openEnd);
                }
                mustMoveInline() {
                    if (!this.$to.parent.isTextblock) return -1;
                    let t = this.frontier[this.depth],
                        e;
                    if (!t.type.isTextblock || !D(this.$to, this.$to.depth, t.type, t.match, !1) || (this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth))
                        return -1;
                    let { depth: n } = this.$to,
                        r = this.$to.after(n);
                    for (; n > 1 && r == this.$to.end(--n); ) ++r;
                    return r;
                }
                findCloseLevel(t) {
                    t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
                        let { match: n, type: r } = this.frontier[e],
                            i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)),
                            o = D(t, e, r, n, i);
                        if (o) {
                            for (let n = e - 1; n >= 0; n--) {
                                let { match: e, type: r } = this.frontier[n],
                                    i = D(t, n, r, e, !0);
                                if (!i || i.childCount) continue t;
                            }
                            return { depth: e, fit: o, move: i ? t.doc.resolve(t.after(e + 1)) : t };
                        }
                    }
                }
                close(t) {
                    let e = this.findCloseLevel(t);
                    if (!e) return null;
                    for (; this.depth > e.depth; ) this.closeFrontierNode();
                    e.fit.childCount && (this.placed = P(this.placed, e.depth, e.fit)), (t = e.move);
                    for (let n = e.depth + 1; n <= t.depth; n++) {
                        let e = t.node(n),
                            r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
                        this.openFrontierNode(e.type, e.attrs, r);
                    }
                    return t;
                }
                openFrontierNode(t, e = null, n) {
                    let i = this.frontier[this.depth];
                    (i.match = i.match.matchType(t)), (this.placed = P(this.placed, this.depth, r.HY.from(t.create(e, n)))), this.frontier.push({ type: t, match: t.contentMatch });
                }
                closeFrontierNode() {
                    let t = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
                    t.childCount && (this.placed = P(this.placed, this.frontier.length, t));
                }
            }
            function T(t, e, n) {
                return 0 == e ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(T(t.firstChild.content, e - 1, n)));
            }
            function P(t, e, n) {
                return 0 == e ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(P(t.lastChild.content, e - 1, n)));
            }
            function A(t, e) {
                for (let n = 0; n < e; n++) t = t.firstChild.content;
                return t;
            }
            function D(t, e, n, r, i) {
                let o = t.node(e),
                    s = i ? t.indexAfter(e) : t.index(e);
                if (s == o.childCount && !n.compatibleContent(o.type)) return null;
                let a = r.fillBefore(o.content, !0, s);
                return a &&
                    !(function (t, e, n) {
                        for (let r = n; r < e.childCount; r++) if (!t.allowsMarks(e.child(r).marks)) return !0;
                        return !1;
                    })(n, o.content, s)
                    ? a
                    : null;
            }
            function I(t, e) {
                let n = [],
                    r = Math.min(t.depth, e.depth);
                for (let i = r; i >= 0; i--) {
                    let r = t.start(i);
                    if (r < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating) break;
                    (r == e.start(i) || (i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == r - 1)) && n.push(i);
                }
                return n;
            }
            class R extends l {
                constructor(t, e, n) {
                    super(), (this.pos = t), (this.attr = e), (this.value = n);
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return c.fail("No node at attribute step's position");
                    let n = Object.create(null);
                    for (let t in e.attrs) n[t] = e.attrs[t];
                    n[this.attr] = this.value;
                    let i = e.type.create(n, null, e.marks);
                    return c.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(i), 0, e.isLeaf ? 0 : 1));
                }
                getMap() {
                    return o.empty;
                }
                invert(t) {
                    return new R(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new R(e.pos, this.attr, this.value);
                }
                toJSON() {
                    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos || "string" != typeof e.attr) throw RangeError("Invalid input for AttrStep.fromJSON");
                    return new R(e.pos, e.attr, e.value);
                }
            }
            l.jsonID("attr", R);
            class N extends l {
                constructor(t, e) {
                    super(), (this.attr = t), (this.value = e);
                }
                apply(t) {
                    let e = Object.create(null);
                    for (let n in t.attrs) e[n] = t.attrs[n];
                    e[this.attr] = this.value;
                    let n = t.type.create(e, t.content, t.marks);
                    return c.ok(n);
                }
                getMap() {
                    return o.empty;
                }
                invert(t) {
                    return new N(this.attr, t.attrs[this.attr]);
                }
                map(t) {
                    return this;
                }
                toJSON() {
                    return { stepType: "docAttr", attr: this.attr, value: this.value };
                }
                static fromJSON(t, e) {
                    if ("string" != typeof e.attr) throw RangeError("Invalid input for DocAttrStep.fromJSON");
                    return new N(e.attr, e.value);
                }
            }
            l.jsonID("docAttr", N);
            let z = class extends Error {};
            ((z = function t(e) {
                let n = Error.call(this, e);
                return (n.__proto__ = t.prototype), n;
            }).prototype = Object.create(Error.prototype)),
                (z.prototype.constructor = z),
                (z.prototype.name = "TransformError");
            class j {
                constructor(t) {
                    (this.doc = t), (this.steps = []), (this.docs = []), (this.mapping = new s());
                }
                get before() {
                    return this.docs.length ? this.docs[0] : this.doc;
                }
                step(t) {
                    let e = this.maybeStep(t);
                    if (e.failed) throw new z(e.failed);
                    return this;
                }
                maybeStep(t) {
                    let e = t.apply(this.doc);
                    return e.failed || this.addStep(t, e.doc), e;
                }
                get docChanged() {
                    return this.steps.length > 0;
                }
                addStep(t, e) {
                    this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), (this.doc = e);
                }
                replace(t, e = t, n = r.p2.empty) {
                    let i = E(this.doc, t, e, n);
                    return i && this.step(i), this;
                }
                replaceWith(t, e, n) {
                    return this.replace(t, e, new r.p2(r.HY.from(n), 0, 0));
                }
                delete(t, e) {
                    return this.replace(t, e, r.p2.empty);
                }
                insert(t, e) {
                    return this.replaceWith(t, t, e);
                }
                replaceRange(t, e, n) {
                    return (
                        !(function (t, e, n, i) {
                            if (!i.size) return t.deleteRange(e, n);
                            let o = t.doc.resolve(e),
                                s = t.doc.resolve(n);
                            if (O(o, s, i)) return t.step(new m(e, n, i));
                            let a = I(o, t.doc.resolve(n));
                            0 == a[a.length - 1] && a.pop();
                            let l = -(o.depth + 1);
                            a.unshift(l);
                            for (let t = o.depth, e = o.pos - 1; t > 0; t--, e--) {
                                let n = o.node(t).type.spec;
                                if (n.defining || n.definingAsContext || n.isolating) break;
                                a.indexOf(t) > -1 ? (l = t) : o.before(t) == e && a.splice(1, 0, -t);
                            }
                            let c = a.indexOf(l),
                                u = [],
                                h = i.openStart;
                            for (let t = i.content, e = 0; ; e++) {
                                let n = t.firstChild;
                                if ((u.push(n), e == i.openStart)) break;
                                t = n.content;
                            }
                            for (let t = h - 1; t >= 0; t--) {
                                var d;
                                let e = u[t],
                                    n = (d = e.type).spec.defining || d.spec.definingForContent;
                                if (n && !e.sameMarkup(o.node(Math.abs(l) - 1))) h = t;
                                else if (n || !e.type.isTextblock) break;
                            }
                            for (let e = i.openStart; e >= 0; e--) {
                                let l = (e + h + 1) % (i.openStart + 1),
                                    d = u[l];
                                if (d)
                                    for (let e = 0; e < a.length; e++) {
                                        let u = a[(e + c) % a.length],
                                            h = !0;
                                        u < 0 && ((h = !1), (u = -u));
                                        let p = o.node(u - 1),
                                            f = o.index(u - 1);
                                        if (p.canReplaceWith(f, f, d.type, d.marks))
                                            return t.replace(
                                                o.before(u),
                                                h ? s.after(u) : n,
                                                new r.p2(
                                                    (function t(e, n, i, o, s) {
                                                        if (n < i) {
                                                            let r = e.firstChild;
                                                            e = e.replaceChild(0, r.copy(t(r.content, n + 1, i, o, r)));
                                                        }
                                                        if (n > o) {
                                                            let t = s.contentMatchAt(0),
                                                                n = t.fillBefore(e).append(e);
                                                            e = n.append(t.matchFragment(n).fillBefore(r.HY.empty, !0));
                                                        }
                                                        return e;
                                                    })(i.content, 0, i.openStart, l),
                                                    l,
                                                    i.openEnd
                                                )
                                            );
                                    }
                            }
                            let p = t.steps.length;
                            for (let r = a.length - 1; r >= 0 && (t.replace(e, n, i), !(t.steps.length > p)); r--) {
                                let t = a[r];
                                t < 0 || ((e = o.before(t)), (n = s.after(t)));
                            }
                        })(this, t, e, n),
                        this
                    );
                }
                replaceRangeWith(t, e, n) {
                    return (
                        !(function (t, e, n, i) {
                            if (!i.isInline && e == n && t.doc.resolve(e).parent.content.size) {
                                let r = (function (t, e, n) {
                                    let r = t.resolve(e);
                                    if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
                                    if (0 == r.parentOffset)
                                        for (let t = r.depth - 1; t >= 0; t--) {
                                            let e = r.index(t);
                                            if (r.node(t).canReplaceWith(e, e, n)) return r.before(t + 1);
                                            if (e > 0) return null;
                                        }
                                    if (r.parentOffset == r.parent.content.size)
                                        for (let t = r.depth - 1; t >= 0; t--) {
                                            let e = r.indexAfter(t);
                                            if (r.node(t).canReplaceWith(e, e, n)) return r.after(t + 1);
                                            if (e < r.node(t).childCount) break;
                                        }
                                    return null;
                                })(t.doc, e, i.type);
                                null != r && (e = n = r);
                            }
                            t.replaceRange(e, n, new r.p2(r.HY.from(i), 0, 0));
                        })(this, t, e, n),
                        this
                    );
                }
                deleteRange(t, e) {
                    return (
                        !(function (t, e, n) {
                            let r = t.doc.resolve(e),
                                i = t.doc.resolve(n),
                                o = I(r, i);
                            for (let e = 0; e < o.length; e++) {
                                let n = o[e],
                                    s = e == o.length - 1;
                                if ((s && 0 == n) || r.node(n).type.contentMatch.validEnd) return t.delete(r.start(n), i.end(n));
                                if (n > 0 && (s || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return t.delete(r.before(n), i.after(n));
                            }
                            for (let o = 1; o <= r.depth && o <= i.depth; o++) if (e - r.start(o) == r.depth - o && n > r.end(o) && i.end(o) - n != i.depth - o) return t.delete(r.before(o), n);
                            t.delete(e, n);
                        })(this, t, e),
                        this
                    );
                }
                lift(t, e) {
                    return (
                        !(function (t, e, n) {
                            let { $from: i, $to: o, depth: s } = e,
                                a = i.before(s + 1),
                                l = o.after(s + 1),
                                c = a,
                                u = l,
                                h = r.HY.empty,
                                d = 0;
                            for (let t = s, e = !1; t > n; t--) e || i.index(t) > 0 ? ((e = !0), (h = r.HY.from(i.node(t).copy(h))), d++) : c--;
                            let p = r.HY.empty,
                                f = 0;
                            for (let t = s, e = !1; t > n; t--) e || o.after(t + 1) < o.end(t) ? ((e = !0), (p = r.HY.from(o.node(t).copy(p))), f++) : u++;
                            t.step(new g(c, u, a, l, new r.p2(h.append(p), d, f), h.size - d, !0));
                        })(this, t, e),
                        this
                    );
                }
                join(t, e = 1) {
                    return (
                        !(function (t, e, n) {
                            let i = new m(e - n, e + n, r.p2.empty, !0);
                            t.step(i);
                        })(this, t, e),
                        this
                    );
                }
                wrap(t, e) {
                    return (
                        !(function (t, e, n) {
                            let i = r.HY.empty;
                            for (let t = n.length - 1; t >= 0; t--) {
                                if (i.size) {
                                    let e = n[t].type.contentMatch.matchFragment(i);
                                    if (!e || !e.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
                                }
                                i = r.HY.from(n[t].type.create(n[t].attrs, i));
                            }
                            let o = e.start,
                                s = e.end;
                            t.step(new g(o, s, o, s, new r.p2(i, 0, 0), n.length, !0));
                        })(this, t, e),
                        this
                    );
                }
                setBlockType(t, e = t, n, i = null) {
                    return (
                        !(function (t, e, n, i, o) {
                            if (!i.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
                            let s = t.steps.length;
                            t.doc.nodesBetween(e, n, (e, n) => {
                                var a, l;
                                let c, u;
                                if (e.isTextblock && !e.hasMarkup(i, o) && ((a = t.doc), (l = t.mapping.slice(s).map(n)), (u = (c = a.resolve(l)).index()), c.parent.canReplaceWith(u, u + 1, i))) {
                                    t.clearIncompatible(t.mapping.slice(s).map(n, 1), i);
                                    let a = t.mapping.slice(s),
                                        l = a.map(n, 1),
                                        c = a.map(n + e.nodeSize, 1);
                                    return t.step(new g(l, c, l + 1, c - 1, new r.p2(r.HY.from(i.create(o, null, e.marks)), 0, 0), 1, !0)), !1;
                                }
                            });
                        })(this, t, e, n, i),
                        this
                    );
                }
                setNodeMarkup(t, e, n = null, i) {
                    return (
                        !(function (t, e, n, i, o) {
                            let s = t.doc.nodeAt(e);
                            if (!s) throw RangeError("No node at given position");
                            n || (n = s.type);
                            let a = n.create(i, null, o || s.marks);
                            if (s.isLeaf) return t.replaceWith(e, e + s.nodeSize, a);
                            if (!n.validContent(s.content)) throw RangeError("Invalid content for node type " + n.name);
                            t.step(new g(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new r.p2(r.HY.from(a), 0, 0), 1, !0));
                        })(this, t, e, n, i),
                        this
                    );
                }
                setNodeAttribute(t, e, n) {
                    return this.step(new R(t, e, n)), this;
                }
                setDocAttribute(t, e) {
                    return this.step(new N(t, e)), this;
                }
                addNodeMark(t, e) {
                    return this.step(new p(t, e)), this;
                }
                removeNodeMark(t, e) {
                    if (!(e instanceof r.vc)) {
                        let n = this.doc.nodeAt(t);
                        if (!n) throw RangeError("No node at position " + t);
                        if (!(e = e.isInSet(n.marks))) return this;
                    }
                    return this.step(new f(t, e)), this;
                }
                split(t, e = 1, n) {
                    return (
                        !(function (t, e, n = 1, i) {
                            let o = t.doc.resolve(e),
                                s = r.HY.empty,
                                a = r.HY.empty;
                            for (let t = o.depth, e = o.depth - n, l = n - 1; t > e; t--, l--) {
                                s = r.HY.from(o.node(t).copy(s));
                                let e = i && i[l];
                                a = r.HY.from(e ? e.type.create(e.attrs, a) : o.node(t).copy(a));
                            }
                            t.step(new m(e, e, new r.p2(s.append(a), n, n), !0));
                        })(this, t, e, n),
                        this
                    );
                }
                addMark(t, e, n) {
                    var r;
                    let i, o, s, a;
                    return (
                        (r = this),
                        (s = []),
                        (a = []),
                        r.doc.nodesBetween(t, e, (r, l, c) => {
                            if (!r.isInline) return;
                            let u = r.marks;
                            if (!n.isInSet(u) && c.type.allowsMarkType(n.type)) {
                                let c = Math.max(l, t),
                                    p = Math.min(l + r.nodeSize, e),
                                    f = n.addToSet(u);
                                for (let t = 0; t < u.length; t++) u[t].isInSet(f) || (i && i.to == c && i.mark.eq(u[t]) ? (i.to = p) : s.push((i = new d(c, p, u[t]))));
                                o && o.to == c ? (o.to = p) : a.push((o = new h(c, p, n)));
                            }
                        }),
                        s.forEach(t => r.step(t)),
                        a.forEach(t => r.step(t)),
                        this
                    );
                }
                removeMark(t, e, n) {
                    var i;
                    let o, s;
                    return (
                        (i = this),
                        (o = []),
                        (s = 0),
                        i.doc.nodesBetween(t, e, (i, a) => {
                            if (!i.isInline) return;
                            s++;
                            let l = null;
                            if (n instanceof r.ZU) {
                                let t = i.marks,
                                    e;
                                for (; (e = n.isInSet(t)); ) (l || (l = [])).push(e), (t = e.removeFromSet(t));
                            } else n ? n.isInSet(i.marks) && (l = [n]) : (l = i.marks);
                            if (l && l.length) {
                                let n = Math.min(a + i.nodeSize, e);
                                for (let e = 0; e < l.length; e++) {
                                    let r = l[e],
                                        i;
                                    for (let t = 0; t < o.length; t++) {
                                        let e = o[t];
                                        e.step == s - 1 && r.eq(o[t].style) && (i = e);
                                    }
                                    i ? ((i.to = n), (i.step = s)) : o.push({ style: r, from: Math.max(a, t), to: n, step: s });
                                }
                            }
                        }),
                        o.forEach(t => i.step(new d(t.from, t.to, t.style))),
                        this
                    );
                }
                clearIncompatible(t, e, n) {
                    return (
                        !(function (t, e, n, i = n.contentMatch) {
                            let o = t.doc.nodeAt(e),
                                s = [],
                                a = e + 1;
                            for (let e = 0; e < o.childCount; e++) {
                                let l = o.child(e),
                                    c = a + l.nodeSize,
                                    u = i.matchType(l.type);
                                if (u) {
                                    i = u;
                                    for (let e = 0; e < l.marks.length; e++) n.allowsMarkType(l.marks[e].type) || t.step(new d(a, c, l.marks[e]));
                                    if (l.isText && !n.spec.code) {
                                        let t,
                                            e = /\r?\n|\r/g,
                                            i;
                                        for (; (t = e.exec(l.text)); )
                                            i || (i = new r.p2(r.HY.from(n.schema.text(" ", n.allowedMarks(l.marks))), 0, 0)), s.push(new m(a + t.index, a + t.index + t[0].length, i));
                                    }
                                } else s.push(new m(a, c, r.p2.empty));
                                a = c;
                            }
                            if (!i.validEnd) {
                                let e = i.fillBefore(r.HY.empty, !0);
                                t.replace(a, a, new r.p2(e, 0, 0));
                            }
                            for (let e = s.length - 1; e >= 0; e--) t.step(s[e]);
                        })(this, t, e, n),
                        this
                    );
                }
            }
        },
        8289: function (t, e, n) {
            "use strict";
            n.d(e, {
                L_: function () {
                    return B;
                },
                gW: function () {
                    return j;
                },
            });
            var r = n(2265);
            function i() {
                return (i =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function o(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                for (r = 0; r < o.length; r++) e.indexOf((n = o[r])) >= 0 || (i[n] = t[n]);
                return i;
            }
            function s(t) {
                var e = (0, r.useRef)(t),
                    n = (0, r.useRef)(function (t) {
                        e.current && e.current(t);
                    });
                return (e.current = t), n.current;
            }
            var a = function (t, e, n) {
                    return void 0 === e && (e = 0), void 0 === n && (n = 1), t > n ? n : t < e ? e : t;
                },
                l = function (t) {
                    return "touches" in t;
                },
                c = function (t) {
                    return (t && t.ownerDocument.defaultView) || self;
                },
                u = function (t, e, n) {
                    var r = t.getBoundingClientRect(),
                        i = l(e)
                            ? (function (t, e) {
                                  for (var n = 0; n < t.length; n++) if (t[n].identifier === e) return t[n];
                                  return t[0];
                              })(e.touches, n)
                            : e;
                    return { left: a((i.pageX - (r.left + c(t).pageXOffset)) / r.width), top: a((i.pageY - (r.top + c(t).pageYOffset)) / r.height) };
                },
                h = function (t) {
                    l(t) || t.preventDefault();
                },
                d = r.memo(function (t) {
                    var e = t.onMove,
                        n = t.onKey,
                        a = o(t, ["onMove", "onKey"]),
                        d = (0, r.useRef)(null),
                        p = s(e),
                        f = s(n),
                        m = (0, r.useRef)(null),
                        g = (0, r.useRef)(!1),
                        y = (0, r.useMemo)(
                            function () {
                                var t = function (t) {
                                        h(t), (l(t) ? t.touches.length > 0 : t.buttons > 0) && d.current ? p(u(d.current, t, m.current)) : n(!1);
                                    },
                                    e = function () {
                                        return n(!1);
                                    };
                                function n(n) {
                                    var r = g.current,
                                        i = c(d.current),
                                        o = n ? i.addEventListener : i.removeEventListener;
                                    o(r ? "touchmove" : "mousemove", t), o(r ? "touchend" : "mouseup", e);
                                }
                                return [
                                    function (t) {
                                        var e = t.nativeEvent,
                                            r = d.current;
                                        if (r && (h(e), (!g.current || l(e)) && r)) {
                                            if (l(e)) {
                                                g.current = !0;
                                                var i = e.changedTouches || [];
                                                i.length && (m.current = i[0].identifier);
                                            }
                                            r.focus(), p(u(r, e, m.current)), n(!0);
                                        }
                                    },
                                    function (t) {
                                        var e = t.which || t.keyCode;
                                        e < 37 || e > 40 || (t.preventDefault(), f({ left: 39 === e ? 0.05 : 37 === e ? -0.05 : 0, top: 40 === e ? 0.05 : 38 === e ? -0.05 : 0 }));
                                    },
                                    n,
                                ];
                            },
                            [f, p]
                        ),
                        v = y[0],
                        b = y[1],
                        w = y[2];
                    return (
                        (0, r.useEffect)(
                            function () {
                                return w;
                            },
                            [w]
                        ),
                        r.createElement("div", i({}, a, { onTouchStart: v, onMouseDown: v, className: "react-colorful__interactive", ref: d, onKeyDown: b, tabIndex: 0, role: "slider" }))
                    );
                }),
                p = function (t) {
                    return t.filter(Boolean).join(" ");
                },
                f = function (t) {
                    var e = t.color,
                        n = t.left,
                        i = t.top,
                        o = p(["react-colorful__pointer", t.className]);
                    return r.createElement(
                        "div",
                        { className: o, style: { top: 100 * (void 0 === i ? 0.5 : i) + "%", left: 100 * n + "%" } },
                        r.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: e } })
                    );
                },
                m = function (t, e, n) {
                    return void 0 === e && (e = 0), void 0 === n && (n = Math.pow(10, e)), Math.round(n * t) / n;
                },
                g = function (t) {
                    return C(y(t));
                },
                y = function (t) {
                    return (
                        "#" === t[0] && (t = t.substring(1)),
                        t.length < 6
                            ? { r: parseInt(t[0] + t[0], 16), g: parseInt(t[1] + t[1], 16), b: parseInt(t[2] + t[2], 16), a: 4 === t.length ? m(parseInt(t[3] + t[3], 16) / 255, 2) : 1 }
                            : {
                                  r: parseInt(t.substring(0, 2), 16),
                                  g: parseInt(t.substring(2, 4), 16),
                                  b: parseInt(t.substring(4, 6), 16),
                                  a: 8 === t.length ? m(parseInt(t.substring(6, 8), 16) / 255, 2) : 1,
                              }
                    );
                },
                v = function (t) {
                    return M(S(t));
                },
                b = function (t) {
                    var e = t.s,
                        n = t.v,
                        r = t.a,
                        i = ((200 - e) * n) / 100;
                    return { h: m(t.h), s: m(i > 0 && i < 200 ? ((e * n) / 100 / (i <= 100 ? i : 200 - i)) * 100 : 0), l: m(i / 2), a: m(r, 2) };
                },
                w = function (t) {
                    var e = b(t);
                    return "hsl(" + e.h + ", " + e.s + "%, " + e.l + "%)";
                },
                x = function (t) {
                    var e = b(t);
                    return "hsla(" + e.h + ", " + e.s + "%, " + e.l + "%, " + e.a + ")";
                },
                S = function (t) {
                    var e = t.h,
                        n = t.s,
                        r = t.v,
                        i = t.a;
                    (e = (e / 360) * 6), (n /= 100), (r /= 100);
                    var o = Math.floor(e),
                        s = r * (1 - n),
                        a = r * (1 - (e - o) * n),
                        l = r * (1 - (1 - e + o) * n),
                        c = o % 6;
                    return { r: m(255 * [r, a, s, s, l, r][c]), g: m(255 * [l, r, r, a, s, s][c]), b: m(255 * [s, s, l, r, r, a][c]), a: m(i, 2) };
                },
                k = function (t) {
                    var e = t.toString(16);
                    return e.length < 2 ? "0" + e : e;
                },
                M = function (t) {
                    var e = t.r,
                        n = t.g,
                        r = t.b,
                        i = t.a,
                        o = i < 1 ? k(m(255 * i)) : "";
                    return "#" + k(e) + k(n) + k(r) + o;
                },
                C = function (t) {
                    var e = t.r,
                        n = t.g,
                        r = t.b,
                        i = t.a,
                        o = Math.max(e, n, r),
                        s = o - Math.min(e, n, r),
                        a = s ? (o === e ? (n - r) / s : o === n ? 2 + (r - e) / s : 4 + (e - n) / s) : 0;
                    return { h: m(60 * (a < 0 ? a + 6 : a)), s: m(o ? (s / o) * 100 : 0), v: m((o / 255) * 100), a: i };
                },
                E = r.memo(function (t) {
                    var e = t.hue,
                        n = t.onChange,
                        i = p(["react-colorful__hue", t.className]);
                    return r.createElement(
                        "div",
                        { className: i },
                        r.createElement(
                            d,
                            {
                                onMove: function (t) {
                                    n({ h: 360 * t.left });
                                },
                                onKey: function (t) {
                                    n({ h: a(e + 360 * t.left, 0, 360) });
                                },
                                "aria-label": "Hue",
                                "aria-valuenow": m(e),
                                "aria-valuemax": "360",
                                "aria-valuemin": "0",
                            },
                            r.createElement(f, { className: "react-colorful__hue-pointer", left: e / 360, color: w({ h: e, s: 100, v: 100, a: 1 }) })
                        )
                    );
                }),
                O = r.memo(function (t) {
                    var e = t.hsva,
                        n = t.onChange,
                        i = { backgroundColor: w({ h: e.h, s: 100, v: 100, a: 1 }) };
                    return r.createElement(
                        "div",
                        { className: "react-colorful__saturation", style: i },
                        r.createElement(
                            d,
                            {
                                onMove: function (t) {
                                    n({ s: 100 * t.left, v: 100 - 100 * t.top });
                                },
                                onKey: function (t) {
                                    n({ s: a(e.s + 100 * t.left, 0, 100), v: a(e.v - 100 * t.top, 0, 100) });
                                },
                                "aria-label": "Color",
                                "aria-valuetext": "Saturation " + m(e.s) + "%, Brightness " + m(e.v) + "%",
                            },
                            r.createElement(f, { className: "react-colorful__saturation-pointer", top: 1 - e.v / 100, left: e.s / 100, color: w(e) })
                        )
                    );
                }),
                _ = function (t, e) {
                    if (t === e) return !0;
                    for (var n in t) if (t[n] !== e[n]) return !1;
                    return !0;
                },
                T = function (t, e) {
                    return t.toLowerCase() === e.toLowerCase() || _(y(t), y(e));
                };
            function P(t, e, n) {
                var i = s(n),
                    o = (0, r.useState)(function () {
                        return t.toHsva(e);
                    }),
                    a = o[0],
                    l = o[1],
                    c = (0, r.useRef)({ color: e, hsva: a });
                return (
                    (0, r.useEffect)(
                        function () {
                            if (!t.equal(e, c.current.color)) {
                                var n = t.toHsva(e);
                                (c.current = { hsva: n, color: e }), l(n);
                            }
                        },
                        [e, t]
                    ),
                    (0, r.useEffect)(
                        function () {
                            var e;
                            _(a, c.current.hsva) || t.equal((e = t.fromHsva(a)), c.current.color) || ((c.current = { hsva: a, color: e }), i(e));
                        },
                        [a, t, i]
                    ),
                    [
                        a,
                        (0, r.useCallback)(function (t) {
                            l(function (e) {
                                return Object.assign({}, e, t);
                            });
                        }, []),
                    ]
                );
            }
            var A,
                D = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                I = new Map(),
                R = function (t) {
                    D(function () {
                        var e = t.current ? t.current.ownerDocument : document;
                        if (void 0 !== e && !I.has(e)) {
                            var r = e.createElement("style");
                            (r.innerHTML =
                                '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                                I.set(e, r);
                            var i = A || n.nc;
                            i && r.setAttribute("nonce", i), e.head.appendChild(r);
                        }
                    }, []);
                },
                N = function (t) {
                    var e = t.className,
                        n = t.colorModel,
                        s = t.color,
                        a = void 0 === s ? n.defaultColor : s,
                        l = t.onChange,
                        c = o(t, ["className", "colorModel", "color", "onChange"]),
                        u = (0, r.useRef)(null);
                    R(u);
                    var h = P(n, a, l),
                        d = h[0],
                        f = h[1],
                        m = p(["react-colorful", e]);
                    return r.createElement(
                        "div",
                        i({}, c, { ref: u, className: m }),
                        r.createElement(O, { hsva: d, onChange: f }),
                        r.createElement(E, { hue: d.h, onChange: f, className: "react-colorful__last-control" })
                    );
                },
                z = {
                    defaultColor: "000",
                    toHsva: g,
                    fromHsva: function (t) {
                        return v({ h: t.h, s: t.s, v: t.v, a: 1 });
                    },
                    equal: T,
                },
                j = function (t) {
                    return r.createElement(N, i({}, t, { colorModel: z }));
                },
                L = function (t) {
                    var e = t.className,
                        n = t.hsva,
                        i = t.onChange,
                        o = { backgroundImage: "linear-gradient(90deg, " + x(Object.assign({}, n, { a: 0 })) + ", " + x(Object.assign({}, n, { a: 1 })) + ")" },
                        s = p(["react-colorful__alpha", e]),
                        l = m(100 * n.a);
                    return r.createElement(
                        "div",
                        { className: s },
                        r.createElement("div", { className: "react-colorful__alpha-gradient", style: o }),
                        r.createElement(
                            d,
                            {
                                onMove: function (t) {
                                    i({ a: t.left });
                                },
                                onKey: function (t) {
                                    i({ a: a(n.a + t.left) });
                                },
                                "aria-label": "Alpha",
                                "aria-valuetext": l + "%",
                                "aria-valuenow": l,
                                "aria-valuemin": "0",
                                "aria-valuemax": "100",
                            },
                            r.createElement(f, { className: "react-colorful__alpha-pointer", left: n.a, color: x(n) })
                        )
                    );
                },
                F = function (t) {
                    var e = t.className,
                        n = t.colorModel,
                        s = t.color,
                        a = void 0 === s ? n.defaultColor : s,
                        l = t.onChange,
                        c = o(t, ["className", "colorModel", "color", "onChange"]),
                        u = (0, r.useRef)(null);
                    R(u);
                    var h = P(n, a, l),
                        d = h[0],
                        f = h[1],
                        m = p(["react-colorful", e]);
                    return r.createElement(
                        "div",
                        i({}, c, { ref: u, className: m }),
                        r.createElement(O, { hsva: d, onChange: f }),
                        r.createElement(E, { hue: d.h, onChange: f }),
                        r.createElement(L, { hsva: d, onChange: f, className: "react-colorful__last-control" })
                    );
                },
                H = { defaultColor: "0001", toHsva: g, fromHsva: v, equal: T },
                B = function (t) {
                    return r.createElement(F, i({}, t, { colorModel: H }));
                };
        },
    },
]);
