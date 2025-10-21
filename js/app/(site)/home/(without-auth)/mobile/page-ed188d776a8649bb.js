(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9483],
    {
        95751: function (e, r, t) {
            (Promise.resolve().then(t.bind(t, 93467)), Promise.resolve().then(t.bind(t, 6512)));
        },
        93467: function (e, r, t) {
            "use strict";
            t.d(r, {
                default: function () {
                    return o;
                },
            });
            var n = t(57437),
                i = t(33145);
            function o(e) {
                let { product: r } = e;
                return (0, n.jsxs)("div", {
                    className: "w-full gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
                    children: [
                        (0, n.jsx)(l, { id: "seoul", product: r }),
                        (0, n.jsx)(l, { id: "dubai", product: r }),
                        (0, n.jsx)(l, { id: "porto", product: r }),
                        (0, n.jsx)(l, { id: "seychelles", product: r }),
                        (0, n.jsx)(l, { id: "copenhagen", product: r }),
                        (0, n.jsx)(l, { id: "nice", product: r }),
                        (0, n.jsx)(l, { id: "barcelona", product: r }),
                        (0, n.jsx)(l, { id: "venice", product: r }),
                        (0, n.jsx)(l, { id: "jeju", product: r }),
                        (0, n.jsx)(l, { id: "martinique", product: r }),
                        (0, n.jsx)(l, { id: "miami", product: r }),
                        (0, n.jsx)(l, { id: "amalfi", product: r }),
                        (0, n.jsx)(l, { id: "newyork", product: r }),
                        (0, n.jsx)(l, { id: "sydney", product: r }),
                        (0, n.jsx)(l, { id: "bali", product: r }),
                    ],
                });
            }
            let l = e => {
                    let { id: r, product: t } = e,
                        o = () => {
                            switch (r) {
                                case "seychelles":
                                default:
                                    return { id: "seychelles", korTitle: "세이셸", EngTitle: "Seychelles", badge: ["우아한", "세련된"], backgroundColor: "#DAD0C7" };
                                case "copenhagen":
                                    return { id: "copenhagen", korTitle: "코펜하겐", EngTitle: "Copenhagen", badge: ["고급스러운", "섬세한"], backgroundColor: "#CCC5D3" };
                                case "nice":
                                    return { id: "nice", korTitle: "니스", EngTitle: "Nice", badge: ["폴라로이드", "깨끗한"], backgroundColor: "#B4BCC3" };
                                case "barcelona":
                                    return { id: "barcelona", korTitle: "바르셀로나", EngTitle: "Barcelona", badge: ["모던한", "심플한"], backgroundColor: "#908C6A" };
                                case "venice":
                                    return { id: "venice", korTitle: "베니스", EngTitle: "Venice", badge: ["정갈한", "사랑스러운"], backgroundColor: "#D1B497" };
                                case "jeju":
                                    return { id: "jeju", korTitle: "제주", EngTitle: "Jeju", badge: ["텍스트", "담백한"], backgroundColor: "#EBE8E8" };
                                case "martinique":
                                    return { id: "martinique", korTitle: "마르티니크", EngTitle: "Martinique", badge: ["풀커버", "모던한"], backgroundColor: "#B3B795" };
                                case "miami":
                                    return { id: "miami", korTitle: "마이애미", EngTitle: "Miami", badge: ["모던한", "엽서형"], backgroundColor: "#E9E7E5" };
                                case "amalfi":
                                    return { id: "amalfi", korTitle: "아말피", EngTitle: "Amalfi", badge: ["담백한", "정중한"], backgroundColor: "#D1C19A" };
                                case "newyork":
                                    return { id: "newyork", korTitle: "뉴욕", EngTitle: "Newyork", badge: ["풀커버", "엽서형"], backgroundColor: "#E2C6C5" };
                                case "sydney":
                                    return { id: "sydney", korTitle: "시드니", EngTitle: "Sydney", badge: ["깨끗한", "순수한"], backgroundColor: "#E2D8E1" };
                                case "bali":
                                    return { id: "bali", korTitle: "발리", EngTitle: "Bali", badge: ["풀커버", "엽서형"], backgroundColor: "#E0E8D9" };
                                case "porto":
                                    return { id: "porto", korTitle: "포르투", EngTitle: "Porto", badge: ["풀커버", "엽서형"], backgroundColor: "#5D564D" };
                                case "dubai":
                                    return { id: "dubai", korTitle: "두바이", EngTitle: "Dubai", badge: ["정갈한", "엽서형"], backgroundColor: "#B9ADA1" };
                                case "seoul":
                                    return { id: "seoul", korTitle: "서울", EngTitle: "Seoul", badge: ["모던한", "폴라로이드"], backgroundColor: "#C0BEBD" };
                            }
                        };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "mt-12",
                            children: (0, n.jsxs)("div", {
                                className: "w-full rounded-3xl shadow-sm relative p-6 hover:cursor-pointer hover:shadow-2xl",
                                style: { backgroundColor: o().backgroundColor },
                                onClick: () => {
                                    window.location.href = "/preview/".concat(r);
                                },
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "w-full h-full rounded-[1.75rem] bg-transparent flex items-center justify-center",
                                        children: (0, n.jsx)(i.default, {
                                            src: "https://hellomybrand.com/wed/images/product/v2/cover_".concat(r, ".png"),
                                            alt: "cover_sample",
                                            width: 370,
                                            height: 710,
                                            sizes: "50vw",
                                            className: "object-contain rounded-[1.75rem]",
                                            unoptimized: !0,
                                            style: { boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)" },
                                        }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "rounded-[1.75rem] shadow-lg bg-white p-4 mt-6 flex flex-col items-center justify-center",
                                        children: [
                                            (0, n.jsx)("p", { className: "mt-2 text-tog-444 font-semibold text-lg", children: o().korTitle }),
                                            (0, n.jsx)("p", { className: "text-tog-999 text-xs uppercase", children: o().EngTitle }),
                                            (0, n.jsx)("div", { className: "flex gap-x-2 mt-4", children: o().badge.map((e, r) => (0, n.jsx)(a, { title: e }, "badge-".concat(r))) }),
                                            (0, n.jsxs)("div", {
                                                className: "w-full flex gap-x-2 mt-6 bg-tog-444 text-white p-2 rounded-full shadow-md items-center justify-between",
                                                children: [
                                                    (0, n.jsx)("div", { className: "text-xs border border-white rounded-full px-2 py-1 bg-tog-666", children: "디자인 변경 무료" }),
                                                    (0, n.jsxs)("div", {
                                                        className: "text-sm flex items-center gap-x-2",
                                                        children: [(0, n.jsx)("span", { children: "샘플 보기" }), " ", (0, n.jsx)("span", { children: ">" })],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                a = e => {
                    let { title: r } = e;
                    return (0, n.jsx)("div", { className: "bg-tog-eee text-tog-999 px-2 py-1 rounded-md text-xs", children: r });
                };
        },
        6512: function (e, r, t) {
            "use strict";
            t.d(r, {
                Separator: function () {
                    return a;
                },
            });
            var n = t(57437),
                i = t(2265),
                o = t(55156),
                l = t(94508);
            let a = i.forwardRef((e, r) => {
                let { className: t, orientation: i = "horizontal", decorative: a = !0, ...c } = e;
                return (0, n.jsx)(o.f, { ref: r, decorative: a, orientation: i, className: (0, l.cn)("shrink-0 bg-border", "horizontal" === i ? "h-[1px] w-full" : "h-full w-[1px]", t), ...c });
            });
            a.displayName = o.f.displayName;
        },
        94508: function (e, r, t) {
            "use strict";
            t.d(r, {
                cn: function () {
                    return o;
                },
            });
            var n = t(61994),
                i = t(53335);
            function o() {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return (0, i.m6)((0, n.W)(r));
            }
        },
        25523: function (e, r, t) {
            "use strict";
            (Object.defineProperty(r, "__esModule", { value: !0 }),
                Object.defineProperty(r, "RouterContext", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = t(47043)._(t(2265)).default.createContext(null);
        },
        1119: function (e, r, t) {
            "use strict";
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var r = 1; r < arguments.length; r++) {
                              var t = arguments[r];
                              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            t.d(r, {
                Z: function () {
                    return n;
                },
            });
        },
        98575: function (e, r, t) {
            "use strict";
            t.d(r, {
                F: function () {
                    return i;
                },
                e: function () {
                    return o;
                },
            });
            var n = t(2265);
            function i(...e) {
                return r =>
                    e.forEach(e => {
                        "function" == typeof e ? e(r) : null != e && (e.current = r);
                    });
            }
            function o(...e) {
                return (0, n.useCallback)(i(...e), e);
            }
        },
        66840: function (e, r, t) {
            "use strict";
            t.d(r, {
                WV: function () {
                    return a;
                },
                jH: function () {
                    return c;
                },
            });
            var n = t(1119),
                i = t(2265),
                o = t(54887),
                l = t(37053);
            let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, r) => {
                let t = (0, i.forwardRef)((e, t) => {
                    let { asChild: o, ...a } = e,
                        c = o ? l.g7 : r;
                    return (
                        (0, i.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0;
                        }, []),
                        (0, i.createElement)(c, (0, n.Z)({}, a, { ref: t }))
                    );
                });
                return ((t.displayName = `Primitive.${r}`), { ...e, [r]: t });
            }, {});
            function c(e, r) {
                e && (0, o.flushSync)(() => e.dispatchEvent(r));
            }
        },
        55156: function (e, r, t) {
            "use strict";
            t.d(r, {
                f: function () {
                    return u;
                },
            });
            var n = t(1119),
                i = t(2265),
                o = t(66840);
            let l = "horizontal",
                a = ["horizontal", "vertical"],
                c = (0, i.forwardRef)((e, r) => {
                    let { decorative: t, orientation: a = l, ...c } = e,
                        u = d(a) ? a : l;
                    return (0, i.createElement)(
                        o.WV.div,
                        (0, n.Z)({ "data-orientation": u }, t ? { role: "none" } : { "aria-orientation": "vertical" === u ? u : void 0, role: "separator" }, c, { ref: r })
                    );
                });
            function d(e) {
                return a.includes(e);
            }
            c.propTypes = {
                orientation(e, r, t) {
                    let n = e[r],
                        i = String(n);
                    return n && !d(n)
                        ? Error(`Invalid prop \`orientation\` of value \`${i}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`)
                        : null;
                },
            };
            let u = c;
        },
        37053: function (e, r, t) {
            "use strict";
            t.d(r, {
                A4: function () {
                    return c;
                },
                g7: function () {
                    return l;
                },
            });
            var n = t(1119),
                i = t(2265),
                o = t(98575);
            let l = (0, i.forwardRef)((e, r) => {
                let { children: t, ...o } = e,
                    l = i.Children.toArray(t),
                    c = l.find(d);
                if (c) {
                    let e = c.props.children,
                        t = l.map(r => (r !== c ? r : i.Children.count(e) > 1 ? i.Children.only(null) : (0, i.isValidElement)(e) ? e.props.children : null));
                    return (0, i.createElement)(a, (0, n.Z)({}, o, { ref: r }), (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, t) : null);
                }
                return (0, i.createElement)(a, (0, n.Z)({}, o, { ref: r }), t);
            });
            l.displayName = "Slot";
            let a = (0, i.forwardRef)((e, r) => {
                let { children: t, ...n } = e;
                return (0, i.isValidElement)(t)
                    ? (0, i.cloneElement)(t, {
                          ...(function (e, r) {
                              let t = { ...r };
                              for (let n in r) {
                                  let i = e[n],
                                      o = r[n];
                                  /^on[A-Z]/.test(n)
                                      ? i && o
                                          ? (t[n] = (...e) => {
                                                (o(...e), i(...e));
                                            })
                                          : i && (t[n] = i)
                                      : "style" === n
                                        ? (t[n] = { ...i, ...o })
                                        : "className" === n && (t[n] = [i, o].filter(Boolean).join(" "));
                              }
                              return { ...e, ...t };
                          })(n, t.props),
                          ref: r ? (0, o.F)(r, t.ref) : t.ref,
                      })
                    : i.Children.count(t) > 1
                      ? i.Children.only(null)
                      : null;
            });
            a.displayName = "SlotClone";
            let c = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
            function d(e) {
                return (0, i.isValidElement)(e) && e.type === c;
            }
        },
    },
    function (e) {
        (e.O(0, [6137, 3145, 2971, 2117, 1744], function () {
            return e((e.s = 95751));
        }),
            (_N_E = e.O()));
    },
]);
