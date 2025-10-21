(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6825],
    {
        5207: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 12562));
        },
        12562: function (e, t, n) {
            "use strict";
            n.d(t, {
                T: function () {
                    return m;
                },
                default: function () {
                    return d;
                },
            });
            var r = n(57437),
                o = n(6512),
                a = n(61994),
                l = n(2265),
                i = n(29233),
                c = n.n(i),
                s = n(26110),
                u = n(27648);
            function d(e) {
                let { noteSample: t } = e,
                    [n, o] = (0, l.useState)("all");
                return (0, r.jsx)("div", {
                    className: "mt-16",
                    children: (0, r.jsxs)("div", {
                        className: "w-full",
                        children: [
                            (0, r.jsxs)("div", {
                                className: "flex w-full space-x-2 md:space-x-3 overflow-scroll scrollbar-hide lg:justify-center pb-3",
                                children: [
                                    (0, r.jsx)(f, { about: "all", content: n, onClick: () => o("all"), children: " 전체 " }),
                                    (0, r.jsx)(f, { about: "mostly", content: n, onClick: () => o("mostly"), children: " 최다 선택 " }),
                                    (0, r.jsx)(f, { about: "politely", content: n, onClick: () => o("politely"), children: " 정중한 " }),
                                    (0, r.jsx)(f, { about: "poem", content: n, onClick: () => o("poem"), children: " 시 " }),
                                    (0, r.jsx)(f, { about: "famous", content: n, onClick: () => o("famous"), children: " 명대사 " }),
                                    (0, r.jsx)(f, { about: "saying", content: n, onClick: () => o("saying"), children: " 명언 " }),
                                    (0, r.jsx)(f, { about: "religion", content: n, onClick: () => o("religion"), children: " 종교 " }),
                                    (0, r.jsx)(f, { about: "hearted", content: n, onClick: () => o("hearted"), children: " 다정한 " }),
                                    (0, r.jsx)(f, { about: "spring", content: n, onClick: () => o("spring"), children: " 봄 " }),
                                    (0, r.jsx)(f, { about: "summer", content: n, onClick: () => o("summer"), children: " 여름 " }),
                                    (0, r.jsx)(f, { about: "autumn", content: n, onClick: () => o("autumn"), children: " 가을 " }),
                                    (0, r.jsx)(f, { about: "winter", content: n, onClick: () => o("winter"), children: " 겨울 " }),
                                    (0, r.jsx)(f, { about: "parent", content: n, onClick: () => o("parent"), children: " 혼주용 " }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: "mt-12 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8",
                                children:
                                    t &&
                                    t
                                        .filter(e => {
                                            var t;
                                            return "all" === n || (null === (t = e.about) || void 0 === t ? void 0 : t.includes(n));
                                        })
                                        .map(e => (0, r.jsx)(p, { content: e }, e.id)),
                            }),
                        ],
                    }),
                });
            }
            let f = (0, l.forwardRef)((e, t) => {
                    let { className: n, children: o, about: l, content: i, ...c } = e;
                    return (0, r.jsx)("button", {
                        ref: t,
                        ...c,
                        className: (0, a.Z)("flex justify-center items-center px-5 py-3 w-auto rounded-full whitespace-nowrap font-medium shadow-md text-xs md:text-base", {
                            "bg-[#E9CBCF] text-tog-444": i === l,
                            "bg-white text-tog-999": i !== l,
                        }),
                        children: o,
                    });
                }),
                p = e => {
                    let { content: t } = e,
                        n = e => {
                            switch (e) {
                                case "mostly":
                                    return "최다 선택";
                                case "politely":
                                    return "정중한";
                                case "poem":
                                    return "시";
                                case "famous":
                                    return "명대사";
                                case "saying":
                                    return "명언";
                                case "religion":
                                    return "종교";
                                case "hearted":
                                    return "다정한";
                                case "spring":
                                    return "봄";
                                case "summer":
                                    return "여름";
                                case "autumn":
                                    return "가을";
                                case "winter":
                                    return "겨울";
                                case "parent":
                                    return "혼주용";
                                default:
                                    return "모든 주제";
                            }
                        },
                        [a, i] = (0, l.useState)(!1);
                    return (0, r.jsxs)("div", {
                        className: "w-full flex flex-col rounded-xl",
                        children: [
                            (0, r.jsxs)("div", {
                                className: "bg-white p-8 space-y-6 flex-1 rounded-2xl transition-all duration-100 shadow-md hover:shadow-lg",
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: "w-full flex gap-2",
                                                children:
                                                    t.about &&
                                                    t.about.map((e, t) =>
                                                        (0, r.jsx)(
                                                            "div",
                                                            { className: "w-fit", children: (0, r.jsx)("span", { className: "text-tog-666 bg-tog-eee rounded-sm p-2 text-sm", children: n(e) }) },
                                                            "no-ce-ex-".concat(t)
                                                        )
                                                    ),
                                            }),
                                            (0, r.jsx)(c(), {
                                                text: "".concat(t.content, "\n                        \n—\n출처 : 웨딩 브랜드 TO OUR GUEST - 청첩장 문구\n                        "),
                                                onCopy: () => i(!0),
                                                children: (0, r.jsxs)("button", { className: "flex items-center gap-2 text-tog-444 text-sm", children: [(0, r.jsx)(m, {}), " 복사"] }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", { className: "py-4", children: (0, r.jsx)(o.Separator, { className: "bg-tog-eee" }) }),
                                    (0, r.jsx)("div", { className: "bg-white px-8 text-tog-666 whitespace-pre-wrap text-center min-h-40 text-sm md:text-base", children: t.content }),
                                ],
                            }),
                            (0, r.jsxs)(s.Vq, {
                                open: a,
                                onOpenChange: i,
                                children: [
                                    (0, r.jsx)(s.$N, {}),
                                    (0, r.jsxs)(s.cZ, {
                                        className: "max-w-[320px] p-8 flex flex-col justify-center items-center text-tog-444 rounded-lg",
                                        about: "withoutClose",
                                        children: [
                                            (0, r.jsx)(s.Be, {}),
                                            (0, r.jsx)("p", { className: "text-lg", children: "복사가 완료되었습니다." }),
                                            (0, r.jsxs)("div", {
                                                className: "text-center opacity-50 text-sm",
                                                children: [
                                                    (0, r.jsx)("p", { children: "붙여넣기 하셔서 사용하실 수 있습니다." }),
                                                    (0, r.jsx)("p", { children: "바로 청첩장 시안을 무료로 만드실 수 있어요." }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: "flex flex-col gap-2 mt-2 w-full",
                                                children: [
                                                    (0, r.jsx)(u.default, {
                                                        href: "".concat("https://my.toourguest.com", "/editor"),
                                                        className: "bg-tog-pink rounded-md w-full px-4 py-3 text-center shadow-lg",
                                                        children: "10분만에 청첩장 만들기",
                                                    }),
                                                    (0, r.jsx)("button", { onClick: () => i(!1), className: "px-4 py-2 w-full text-tog-999", children: "확인했어요" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                m = () =>
                    (0, r.jsxs)("svg", {
                        width: 16,
                        height: 16,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("path", {
                                d: "M16.4445 7.89062H9.44906C8.59052 7.89062 7.89453 8.58661 7.89453 9.44516V16.4406C7.89453 17.2991 8.59052 17.9951 9.44906 17.9951H16.4445C17.303 17.9951 17.999 17.2991 17.999 16.4406V9.44516C17.999 8.58661 17.303 7.89062 16.4445 7.89062Z",
                                stroke: "#444444",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M4.3318 12.1045H3.55453C3.14225 12.1045 2.74684 11.9407 2.45531 11.6492C2.16378 11.3576 2 10.9622 2 10.5499V3.55453C2 3.14225 2.16378 2.74684 2.45531 2.45531C2.74684 2.16378 3.14225 2 3.55453 2H10.5499C10.9622 2 11.3576 2.16378 11.6492 2.45531C11.9407 2.74684 12.1045 3.14225 12.1045 3.55453V4.3318",
                                stroke: "#444444",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    });
        },
        26110: function (e, t, n) {
            "use strict";
            n.d(t, {
                $N: function () {
                    return y;
                },
                Be: function () {
                    return x;
                },
                Vq: function () {
                    return c;
                },
                cZ: function () {
                    return p;
                },
                fK: function () {
                    return m;
                },
                hg: function () {
                    return s;
                },
            });
            var r = n(57437),
                o = n(2265),
                a = n(60579),
                l = n(32489),
                i = n(94508);
            let c = a.fC,
                s = a.xz,
                u = a.h_;
            a.x8;
            let d = o.forwardRef((e, t) => {
                let { className: n, ...o } = e;
                return (0, r.jsx)(a.aV, {
                    ref: t,
                    className: (0, i.cn)("fixed inset-0 z-50 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...o,
                });
            });
            d.displayName = a.aV.displayName;
            let f = o.forwardRef((e, t) => {
                let { className: n, ...o } = e;
                return (0, r.jsx)(a.aV, {
                    ref: t,
                    className: (0, i.cn)("fixed inset-0 z-30 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...o,
                });
            });
            f.displayName = a.aV.displayName;
            let p = o.forwardRef((e, t) => {
                let { className: n, children: o, ...c } = e;
                return (0, r.jsxs)(u, {
                    children: [
                        "opacity" === c.about ? (0, r.jsx)(f, {}) : (0, r.jsx)(d, {}),
                        (0, r.jsxs)(a.VY, {
                            ref: t,
                            className: (0, i.cn)(
                                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-100 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:rounded-md bg-[#f8f8f8] focus:outline-none",
                                n
                            ),
                            ...c,
                            children: [
                                o,
                                (0, r.jsxs)(a.x8, {
                                    className:
                                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                                    children: ["withoutClose" === c.about ? null : (0, r.jsx)(l.Z, { className: "w-5 h-5" }), (0, r.jsx)("span", { className: "sr-only", children: "Close" })],
                                }),
                            ],
                        }),
                    ],
                });
            });
            p.displayName = a.VY.displayName;
            let m = e => {
                let { className: t, ...n } = e;
                return (0, r.jsx)("div", { className: (0, i.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t), ...n });
            };
            m.displayName = "DialogHeader";
            let y = o.forwardRef((e, t) => {
                let { className: n, ...o } = e;
                return (0, r.jsx)(a.Dx, { ref: t, className: (0, i.cn)("text-lg font-semibold leading-none tracking-tight", n), ...o });
            });
            y.displayName = a.Dx.displayName;
            let x = o.forwardRef((e, t) => {
                let { className: n, ...o } = e;
                return (0, r.jsx)(a.dk, { ref: t, className: (0, i.cn)("text-sm text-muted-foreground", n), ...o });
            });
            x.displayName = a.dk.displayName;
        },
        6512: function (e, t, n) {
            "use strict";
            n.d(t, {
                Separator: function () {
                    return i;
                },
            });
            var r = n(57437),
                o = n(2265),
                a = n(55156),
                l = n(94508);
            let i = o.forwardRef((e, t) => {
                let { className: n, orientation: o = "horizontal", decorative: i = !0, ...c } = e;
                return (0, r.jsx)(a.f, { ref: t, decorative: i, orientation: o, className: (0, l.cn)("shrink-0 bg-border", "horizontal" === o ? "h-[1px] w-full" : "h-full w-[1px]", n), ...c });
            });
            i.displayName = a.f.displayName;
        },
        94508: function (e, t, n) {
            "use strict";
            n.d(t, {
                cn: function () {
                    return a;
                },
            });
            var r = n(61994),
                o = n(53335);
            function a() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, o.m6)((0, r.W)(t));
            }
        },
        49211: function (e, t, n) {
            "use strict";
            var r = n(99623),
                o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
            e.exports = function (e, t) {
                var n,
                    a,
                    l,
                    i,
                    c,
                    s,
                    u,
                    d,
                    f = !1;
                (t || (t = {}), (l = t.debug || !1));
                try {
                    if (
                        ((c = r()),
                        (s = document.createRange()),
                        (u = document.getSelection()),
                        ((d = document.createElement("span")).textContent = e),
                        (d.ariaHidden = "true"),
                        (d.style.all = "unset"),
                        (d.style.position = "fixed"),
                        (d.style.top = 0),
                        (d.style.clip = "rect(0, 0, 0, 0)"),
                        (d.style.whiteSpace = "pre"),
                        (d.style.webkitUserSelect = "text"),
                        (d.style.MozUserSelect = "text"),
                        (d.style.msUserSelect = "text"),
                        (d.style.userSelect = "text"),
                        d.addEventListener("copy", function (n) {
                            if ((n.stopPropagation(), t.format)) {
                                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                                    (l && console.warn("unable to use e.clipboardData"), l && console.warn("trying IE specific stuff"), window.clipboardData.clearData());
                                    var r = o[t.format] || o.default;
                                    window.clipboardData.setData(r, e);
                                } else (n.clipboardData.clearData(), n.clipboardData.setData(t.format, e));
                            }
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
                        }),
                        document.body.appendChild(d),
                        s.selectNodeContents(d),
                        u.addRange(s),
                        !document.execCommand("copy"))
                    )
                        throw Error("copy command was unsuccessful");
                    f = !0;
                } catch (r) {
                    (l && console.error("unable to copy using execCommand: ", r), l && console.warn("trying IE specific stuff"));
                    try {
                        (window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), (f = !0));
                    } catch (r) {
                        (l && console.error("unable to copy using clipboardData: ", r),
                            l && console.error("falling back to prompt"),
                            (n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"),
                            (a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
                            (i = n.replace(/#{\s*key\s*}/g, a)),
                            window.prompt(i, e));
                    }
                } finally {
                    (u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), d && document.body.removeChild(d), c());
                }
                return f;
            };
        },
        27648: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return o.a;
                },
            });
            var r = n(72972),
                o = n.n(r);
        },
        6337: function (e, t, n) {
            "use strict";
            function r(e) {
                return (r =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            (Object.defineProperty(t, "__esModule", { value: !0 }), (t.CopyToClipboard = void 0));
            var o = i(n(2265)),
                a = i(n(49211)),
                l = ["text", "onCopy", "options", "children"];
            function i(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    (t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? c(Object(n), !0).forEach(function (t) {
                              p(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : c(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return e;
            }
            function u(e, t) {
                return (u =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return ((e.__proto__ = t), e);
                    })(e, t);
            }
            function d(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function f(e) {
                return (f = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function p(e, t, n) {
                return (t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            var m = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    ((e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        t && u(e, t));
                })(c, e);
                var t,
                    n,
                    i =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                n = f(c);
                            return (
                                (e = t ? Reflect.construct(n, arguments, f(this).constructor) : n.apply(this, arguments)),
                                (function (e, t) {
                                    if (t && ("object" === r(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                    return d(e);
                                })(this, e)
                            );
                        });
                function c() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, c);
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (
                        p(d((e = i.call.apply(i, [this].concat(n)))), "onClick", function (t) {
                            var n = e.props,
                                r = n.text,
                                l = n.onCopy,
                                i = n.children,
                                c = n.options,
                                s = o.default.Children.only(i),
                                u = (0, a.default)(r, c);
                            (l && l(r, u), s && s.props && "function" == typeof s.props.onClick && s.props.onClick(t));
                        }),
                        e
                    );
                }
                return (
                    (n = [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = (e.text, e.onCopy, e.options, e.children),
                                    n = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            o = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    o = {},
                                                    a = Object.keys(e);
                                                for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                                return o;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var a = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                        }
                                        return o;
                                    })(e, l),
                                    r = o.default.Children.only(t);
                                return o.default.cloneElement(r, s(s({}, n), {}, { onClick: this.onClick }));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r));
                        }
                    })(c.prototype, n),
                    Object.defineProperty(c, "prototype", { writable: !1 }),
                    c
                );
            })(o.default.PureComponent);
            ((t.CopyToClipboard = m), p(m, "defaultProps", { onCopy: void 0, options: void 0 }));
        },
        29233: function (e, t, n) {
            "use strict";
            var r = n(6337).CopyToClipboard;
            ((r.CopyToClipboard = r), (e.exports = r));
        },
        99623: function (e) {
            e.exports = function () {
                var e = document.getSelection();
                if (!e.rangeCount) return function () {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null;
                }
                return (
                    e.removeAllRanges(),
                    function () {
                        ("Caret" === e.type && e.removeAllRanges(),
                            e.rangeCount ||
                                n.forEach(function (t) {
                                    e.addRange(t);
                                }),
                            t && t.focus());
                    }
                );
            };
        },
        1119: function (e, t, n) {
            "use strict";
            function r() {
                return (r = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            n.d(t, {
                Z: function () {
                    return r;
                },
            });
        },
        98575: function (e, t, n) {
            "use strict";
            n.d(t, {
                F: function () {
                    return o;
                },
                e: function () {
                    return a;
                },
            });
            var r = n(2265);
            function o(...e) {
                return t =>
                    e.forEach(e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t);
                    });
            }
            function a(...e) {
                return (0, r.useCallback)(o(...e), e);
            }
        },
        66840: function (e, t, n) {
            "use strict";
            n.d(t, {
                WV: function () {
                    return i;
                },
                jH: function () {
                    return c;
                },
            });
            var r = n(1119),
                o = n(2265),
                a = n(54887),
                l = n(37053);
            let i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = (0, o.forwardRef)((e, n) => {
                    let { asChild: a, ...i } = e,
                        c = a ? l.g7 : t;
                    return (
                        (0, o.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0;
                        }, []),
                        (0, o.createElement)(c, (0, r.Z)({}, i, { ref: n }))
                    );
                });
                return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
            }, {});
            function c(e, t) {
                e && (0, a.flushSync)(() => e.dispatchEvent(t));
            }
        },
        55156: function (e, t, n) {
            "use strict";
            n.d(t, {
                f: function () {
                    return u;
                },
            });
            var r = n(1119),
                o = n(2265),
                a = n(66840);
            let l = "horizontal",
                i = ["horizontal", "vertical"],
                c = (0, o.forwardRef)((e, t) => {
                    let { decorative: n, orientation: i = l, ...c } = e,
                        u = s(i) ? i : l;
                    return (0, o.createElement)(
                        a.WV.div,
                        (0, r.Z)({ "data-orientation": u }, n ? { role: "none" } : { "aria-orientation": "vertical" === u ? u : void 0, role: "separator" }, c, { ref: t })
                    );
                });
            function s(e) {
                return i.includes(e);
            }
            c.propTypes = {
                orientation(e, t, n) {
                    let r = e[t],
                        o = String(r);
                    return r && !s(r)
                        ? Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`)
                        : null;
                },
            };
            let u = c;
        },
        37053: function (e, t, n) {
            "use strict";
            n.d(t, {
                A4: function () {
                    return c;
                },
                g7: function () {
                    return l;
                },
            });
            var r = n(1119),
                o = n(2265),
                a = n(98575);
            let l = (0, o.forwardRef)((e, t) => {
                let { children: n, ...a } = e,
                    l = o.Children.toArray(n),
                    c = l.find(s);
                if (c) {
                    let e = c.props.children,
                        n = l.map(t => (t !== c ? t : o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null));
                    return (0, o.createElement)(i, (0, r.Z)({}, a, { ref: t }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null);
                }
                return (0, o.createElement)(i, (0, r.Z)({}, a, { ref: t }), n);
            });
            l.displayName = "Slot";
            let i = (0, o.forwardRef)((e, t) => {
                let { children: n, ...r } = e;
                return (0, o.isValidElement)(n)
                    ? (0, o.cloneElement)(n, {
                          ...(function (e, t) {
                              let n = { ...t };
                              for (let r in t) {
                                  let o = e[r],
                                      a = t[r];
                                  /^on[A-Z]/.test(r)
                                      ? o && a
                                          ? (n[r] = (...e) => {
                                                (a(...e), o(...e));
                                            })
                                          : o && (n[r] = o)
                                      : "style" === r
                                        ? (n[r] = { ...o, ...a })
                                        : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "));
                              }
                              return { ...e, ...n };
                          })(r, n.props),
                          ref: t ? (0, a.F)(t, n.ref) : n.ref,
                      })
                    : o.Children.count(n) > 1
                      ? o.Children.only(null)
                      : null;
            });
            i.displayName = "SlotClone";
            let c = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
            function s(e) {
                return (0, o.isValidElement)(e) && e.type === c;
            }
        },
    },
    function (e) {
        (e.O(0, [6137, 2972, 602, 4917, 2971, 2117, 1744], function () {
            return e((e.s = 5207));
        }),
            (_N_E = e.O()));
    },
]);
