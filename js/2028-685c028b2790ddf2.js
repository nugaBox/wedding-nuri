"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2028],
    {
        13590: function (e, t, r) {
            r.d(t, {
                F: function () {
                    return o;
                },
            });
            var a = r(29501),
                i = function (e, t, r) {
                    if (e && "reportValidity" in e) {
                        var i = (0, a.U2)(r, t);
                        (e.setCustomValidity((i && i.message) || ""), e.reportValidity());
                    }
                },
                s = function (e, t) {
                    var r = function (r) {
                        var a = t.fields[r];
                        a && a.ref && "reportValidity" in a.ref
                            ? i(a.ref, r, e)
                            : a.refs &&
                              a.refs.forEach(function (t) {
                                  return i(t, r, e);
                              });
                    };
                    for (var a in t.fields) r(a);
                },
                l = function (e, t) {
                    t.shouldUseNativeValidation && s(e, t);
                    var r = {};
                    for (var i in e) {
                        var l = (0, a.U2)(t.fields, i),
                            u = Object.assign(e[i] || {}, { ref: l && l.ref });
                        if (n(t.names || Object.keys(e), i)) {
                            var o = Object.assign({}, (0, a.U2)(r, i));
                            ((0, a.t8)(o, "root", u), (0, a.t8)(r, i, o));
                        } else (0, a.t8)(r, i, u);
                    }
                    return r;
                },
                n = function (e, t) {
                    return e.some(function (e) {
                        return e.startsWith(t + ".");
                    });
                },
                u = function (e, t) {
                    for (var r = {}; e.length; ) {
                        var i = e[0],
                            s = i.code,
                            l = i.message,
                            n = i.path.join(".");
                        if (!r[n]) {
                            if ("unionErrors" in i) {
                                var u = i.unionErrors[0].errors[0];
                                r[n] = { message: u.message, type: u.code };
                            } else r[n] = { message: l, type: s };
                        }
                        if (
                            ("unionErrors" in i &&
                                i.unionErrors.forEach(function (t) {
                                    return t.errors.forEach(function (t) {
                                        return e.push(t);
                                    });
                                }),
                            t)
                        ) {
                            var o = r[n].types,
                                d = o && o[i.code];
                            r[n] = (0, a.KN)(n, t, r, s, d ? [].concat(d, i.message) : i.message);
                        }
                        e.shift();
                    }
                    return r;
                },
                o = function (e, t, r) {
                    return (
                        void 0 === r && (r = {}),
                        function (a, i, n) {
                            try {
                                return Promise.resolve(
                                    (function (i, l) {
                                        try {
                                            var u = Promise.resolve(e["sync" === r.mode ? "parse" : "parseAsync"](a, t)).then(function (e) {
                                                return (n.shouldUseNativeValidation && s({}, n), { errors: {}, values: r.raw ? a : e });
                                            });
                                        } catch (e) {
                                            return l(e);
                                        }
                                        return u && u.then ? u.then(void 0, l) : u;
                                    })(0, function (e) {
                                        if (null != e.errors) return { values: {}, errors: l(u(e.errors, !n.shouldUseNativeValidation && "all" === n.criteriaMode), n) };
                                        throw e;
                                    })
                                );
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        }
                    );
                };
        },
        62484: function (e, t, r) {
            r.d(t, {
                u: function () {
                    return a;
                },
            });
            function a(e, [t, r]) {
                return Math.min(r, Math.max(t, e));
            }
        },
        20271: function (e, t, r) {
            r.d(t, {
                VY: function () {
                    return k;
                },
                aV: function () {
                    return S;
                },
                fC: function () {
                    return x;
                },
                xz: function () {
                    return D;
                },
            });
            var a = r(1119),
                i = r(2265),
                s = r(6741),
                l = r(73966),
                n = r(1353),
                u = r(71599),
                o = r(66840),
                d = r(29114),
                f = r(80886),
                c = r(99255);
            let y = "Tabs",
                [m, v] = (0, l.b)(y, [n.Pc]),
                h = (0, n.Pc)(),
                [g, b] = m(y),
                p = (0, i.forwardRef)((e, t) => {
                    let { __scopeTabs: r, value: s, onValueChange: l, defaultValue: n, orientation: u = "horizontal", dir: y, activationMode: m = "automatic", ...v } = e,
                        h = (0, d.gm)(y),
                        [b, p] = (0, f.T)({ prop: s, onChange: l, defaultProp: n });
                    return (0, i.createElement)(
                        g,
                        { scope: r, baseId: (0, c.M)(), value: b, onValueChange: p, orientation: u, dir: h, activationMode: m },
                        (0, i.createElement)(o.WV.div, (0, a.Z)({ dir: h, "data-orientation": u }, v, { ref: t }))
                    );
                }),
                _ = (0, i.forwardRef)((e, t) => {
                    let { __scopeTabs: r, loop: s = !0, ...l } = e,
                        u = b("TabsList", r),
                        d = h(r);
                    return (0, i.createElement)(
                        n.fC,
                        (0, a.Z)({ asChild: !0 }, d, { orientation: u.orientation, dir: u.dir, loop: s }),
                        (0, i.createElement)(o.WV.div, (0, a.Z)({ role: "tablist", "aria-orientation": u.orientation }, l, { ref: t }))
                    );
                }),
                V = (0, i.forwardRef)((e, t) => {
                    let { __scopeTabs: r, value: l, disabled: u = !1, ...d } = e,
                        f = b("TabsTrigger", r),
                        c = h(r),
                        y = A(f.baseId, l),
                        m = w(f.baseId, l),
                        v = l === f.value;
                    return (0, i.createElement)(
                        n.ck,
                        (0, a.Z)({ asChild: !0 }, c, { focusable: !u, active: v }),
                        (0, i.createElement)(
                            o.WV.button,
                            (0, a.Z)(
                                { type: "button", role: "tab", "aria-selected": v, "aria-controls": m, "data-state": v ? "active" : "inactive", "data-disabled": u ? "" : void 0, disabled: u, id: y },
                                d,
                                {
                                    ref: t,
                                    onMouseDown: (0, s.M)(e.onMouseDown, e => {
                                        u || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : f.onValueChange(l);
                                    }),
                                    onKeyDown: (0, s.M)(e.onKeyDown, e => {
                                        [" ", "Enter"].includes(e.key) && f.onValueChange(l);
                                    }),
                                    onFocus: (0, s.M)(e.onFocus, () => {
                                        let e = "manual" !== f.activationMode;
                                        v || u || !e || f.onValueChange(l);
                                    }),
                                }
                            )
                        )
                    );
                }),
                F = (0, i.forwardRef)((e, t) => {
                    let { __scopeTabs: r, value: s, forceMount: l, children: n, ...d } = e,
                        f = b("TabsContent", r),
                        c = A(f.baseId, s),
                        y = w(f.baseId, s),
                        m = s === f.value,
                        v = (0, i.useRef)(m);
                    return (
                        (0, i.useEffect)(() => {
                            let e = requestAnimationFrame(() => (v.current = !1));
                            return () => cancelAnimationFrame(e);
                        }, []),
                        (0, i.createElement)(u.z, { present: l || m }, ({ present: r }) =>
                            (0, i.createElement)(
                                o.WV.div,
                                (0, a.Z)({ "data-state": m ? "active" : "inactive", "data-orientation": f.orientation, role: "tabpanel", "aria-labelledby": c, hidden: !r, id: y, tabIndex: 0 }, d, {
                                    ref: t,
                                    style: { ...e.style, animationDuration: v.current ? "0s" : void 0 },
                                }),
                                r && n
                            )
                        )
                    );
                });
            function A(e, t) {
                return `${e}-trigger-${t}`;
            }
            function w(e, t) {
                return `${e}-content-${t}`;
            }
            let x = p,
                S = _,
                D = V,
                k = F;
        },
        6718: function (e, t, r) {
            r.d(t, {
                D: function () {
                    return i;
                },
            });
            var a = r(2265);
            function i(e) {
                let t = (0, a.useRef)({ value: e, previous: e });
                return (0, a.useMemo)(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
            }
        },
        29501: function (e, t, r) {
            r.d(t, {
                Gc: function () {
                    return A;
                },
                KN: function () {
                    return N;
                },
                Qr: function () {
                    return L;
                },
                RV: function () {
                    return w;
                },
                U2: function () {
                    return g;
                },
                cI: function () {
                    return eV;
                },
                t8: function () {
                    return M;
                },
            });
            var a = r(2265),
                i = e => "checkbox" === e.type,
                s = e => e instanceof Date,
                l = e => null == e;
            let n = e => "object" == typeof e;
            var u = e => !l(e) && !Array.isArray(e) && n(e) && !s(e),
                o = e => (u(e) && e.target ? (i(e.target) ? e.target.checked : e.target.value) : e),
                d = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
                f = (e, t) => e.has(d(t)),
                c = e => {
                    let t = e.constructor && e.constructor.prototype;
                    return u(t) && t.hasOwnProperty("isPrototypeOf");
                },
                y = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
            function m(e) {
                let t;
                let r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else if (!(!(y && (e instanceof Blob || e instanceof FileList)) && (r || u(e)))) return e;
                else if (((t = r ? [] : {}), r || c(e))) for (let r in e) e.hasOwnProperty(r) && (t[r] = m(e[r]));
                else t = e;
                return t;
            }
            var v = e => (Array.isArray(e) ? e.filter(Boolean) : []),
                h = e => void 0 === e,
                g = (e, t, r) => {
                    if (!t || !u(e)) return r;
                    let a = v(t.split(/[,[\].]+?/)).reduce((e, t) => (l(e) ? e : e[t]), e);
                    return h(a) || a === e ? (h(e[t]) ? r : e[t]) : a;
                },
                b = e => "boolean" == typeof e;
            let p = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
                _ = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
                V = { max: "max", min: "min", maxLength: "maxLength", minLength: "minLength", pattern: "pattern", required: "required", validate: "validate" },
                F = a.createContext(null),
                A = () => a.useContext(F),
                w = e => {
                    let { children: t, ...r } = e;
                    return a.createElement(F.Provider, { value: r }, t);
                };
            var x = (e, t, r, a = !0) => {
                    let i = { defaultValues: t._defaultValues };
                    for (let s in e) Object.defineProperty(i, s, { get: () => (t._proxyFormState[s] !== _.all && (t._proxyFormState[s] = !a || _.all), r && (r[s] = !0), e[s]) });
                    return i;
                },
                S = e => u(e) && !Object.keys(e).length,
                D = (e, t, r, a) => {
                    r(e);
                    let { name: i, ...s } = e;
                    return S(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find(e => t[e] === (!a || _.all));
                },
                k = e => (Array.isArray(e) ? e : [e]),
                E = (e, t, r) => !e || !t || e === t || k(e).some(e => e && (r ? e === t : e.startsWith(t) || t.startsWith(e)));
            function C(e) {
                let t = a.useRef(e);
                ((t.current = e),
                    a.useEffect(() => {
                        let r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
                        return () => {
                            r && r.unsubscribe();
                        };
                    }, [e.disabled]));
            }
            var O = e => "string" == typeof e,
                T = (e, t, r, a, i) => (O(e) ? (a && t.watch.add(e), g(r, e, i)) : Array.isArray(e) ? e.map(e => (a && t.watch.add(e), g(r, e))) : (a && (t.watchAll = !0), r)),
                U = e => /^\w*$/.test(e),
                j = e => v(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
                M = (e, t, r) => {
                    let a = -1,
                        i = U(t) ? [t] : j(t),
                        s = i.length,
                        l = s - 1;
                    for (; ++a < s; ) {
                        let t = i[a],
                            s = r;
                        if (a !== l) {
                            let r = e[t];
                            s = u(r) || Array.isArray(r) ? r : isNaN(+i[a + 1]) ? {} : [];
                        }
                        ((e[t] = s), (e = e[t]));
                    }
                    return e;
                };
            let L = e =>
                e.render(
                    (function (e) {
                        let t = A(),
                            { name: r, disabled: i, control: s = t.control, shouldUnregister: l } = e,
                            n = f(s._names.array, r),
                            u = (function (e) {
                                let t = A(),
                                    { control: r = t.control, name: i, defaultValue: s, disabled: l, exact: n } = e || {},
                                    u = a.useRef(i);
                                ((u.current = i),
                                    C({
                                        disabled: l,
                                        subject: r._subjects.values,
                                        next: e => {
                                            E(u.current, e.name, n) && d(m(T(u.current, r._names, e.values || r._formValues, !1, s)));
                                        },
                                    }));
                                let [o, d] = a.useState(r._getWatch(i, s));
                                return (a.useEffect(() => r._removeUnmounted()), o);
                            })({ control: s, name: r, defaultValue: g(s._formValues, r, g(s._defaultValues, r, e.defaultValue)), exact: !0 }),
                            d = (function (e) {
                                let t = A(),
                                    { control: r = t.control, disabled: i, name: s, exact: l } = e || {},
                                    [n, u] = a.useState(r._formState),
                                    o = a.useRef(!0),
                                    d = a.useRef({ isDirty: !1, isLoading: !1, dirtyFields: !1, touchedFields: !1, validatingFields: !1, isValidating: !1, isValid: !1, errors: !1 }),
                                    f = a.useRef(s);
                                return (
                                    (f.current = s),
                                    C({
                                        disabled: i,
                                        next: e => o.current && E(f.current, e.name, l) && D(e, d.current, r._updateFormState) && u({ ...r._formState, ...e }),
                                        subject: r._subjects.state,
                                    }),
                                    a.useEffect(
                                        () => (
                                            (o.current = !0),
                                            d.current.isValid && r._updateValid(!0),
                                            () => {
                                                o.current = !1;
                                            }
                                        ),
                                        [r]
                                    ),
                                    x(n, r, d.current, !1)
                                );
                            })({ control: s, name: r }),
                            c = a.useRef(s.register(r, { ...e.rules, value: u, ...(b(e.disabled) ? { disabled: e.disabled } : {}) }));
                        return (
                            a.useEffect(() => {
                                let e = s._options.shouldUnregister || l,
                                    t = (e, t) => {
                                        let r = g(s._fields, e);
                                        r && (r._f.mount = t);
                                    };
                                if ((t(r, !0), e)) {
                                    let e = m(g(s._options.defaultValues, r));
                                    (M(s._defaultValues, r, e), h(g(s._formValues, r)) && M(s._formValues, r, e));
                                }
                                return () => {
                                    (n ? e && !s._state.action : e) ? s.unregister(r) : t(r, !1);
                                };
                            }, [r, s, n, l]),
                            a.useEffect(() => {
                                g(s._fields, r) && s._updateDisabledField({ disabled: i, fields: s._fields, name: r, value: g(s._fields, r)._f.value });
                            }, [i, r, s]),
                            {
                                field: {
                                    name: r,
                                    value: u,
                                    ...(b(i) || d.disabled ? { disabled: d.disabled || i } : {}),
                                    onChange: a.useCallback(e => c.current.onChange({ target: { value: o(e), name: r }, type: p.CHANGE }), [r]),
                                    onBlur: a.useCallback(() => c.current.onBlur({ target: { value: g(s._formValues, r), name: r }, type: p.BLUR }), [r, s]),
                                    ref: e => {
                                        let t = g(s._fields, r);
                                        t &&
                                            e &&
                                            (t._f.ref = { focus: () => e.focus(), select: () => e.select(), setCustomValidity: t => e.setCustomValidity(t), reportValidity: () => e.reportValidity() });
                                    },
                                },
                                formState: d,
                                fieldState: Object.defineProperties(
                                    {},
                                    {
                                        invalid: { enumerable: !0, get: () => !!g(d.errors, r) },
                                        isDirty: { enumerable: !0, get: () => !!g(d.dirtyFields, r) },
                                        isTouched: { enumerable: !0, get: () => !!g(d.touchedFields, r) },
                                        isValidating: { enumerable: !0, get: () => !!g(d.validatingFields, r) },
                                        error: { enumerable: !0, get: () => g(d.errors, r) },
                                    }
                                ),
                            }
                        );
                    })(e)
                );
            var N = (e, t, r, a, i) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [a]: i || !0 } } : {}),
                B = e => ({ isOnSubmit: !e || e === _.onSubmit, isOnBlur: e === _.onBlur, isOnChange: e === _.onChange, isOnAll: e === _.all, isOnTouch: e === _.onTouched }),
                R = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
            let P = (e, t, r, a) => {
                for (let i of r || Object.keys(e)) {
                    let r = g(e, i);
                    if (r) {
                        let { _f: e, ...s } = r;
                        if (e) {
                            if ((e.refs && e.refs[0] && t(e.refs[0], i) && !a) || (e.ref && t(e.ref, e.name) && !a)) break;
                            P(s, t);
                        } else u(s) && P(s, t);
                    }
                }
            };
            var I = (e, t, r) => {
                    let a = v(g(e, r));
                    return (M(a, "root", t[r]), M(e, r, a), e);
                },
                q = e => "file" === e.type,
                W = e => "function" == typeof e,
                $ = e => {
                    if (!y) return !1;
                    let t = e ? e.ownerDocument : 0;
                    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
                },
                Z = e => O(e),
                H = e => "radio" === e.type,
                K = e => e instanceof RegExp;
            let z = { value: !1, isValid: !1 },
                G = { value: !0, isValid: !0 };
            var Q = e => {
                if (Array.isArray(e)) {
                    if (e.length > 1) {
                        let t = e.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                        return { value: t, isValid: !!t.length };
                    }
                    return e[0].checked && !e[0].disabled ? (e[0].attributes && !h(e[0].attributes.value) ? (h(e[0].value) || "" === e[0].value ? G : { value: e[0].value, isValid: !0 }) : G) : z;
                }
                return z;
            };
            let Y = { isValid: !1, value: null };
            var J = e => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), Y) : Y);
            function X(e, t, r = "validate") {
                if (Z(e) || (Array.isArray(e) && e.every(Z)) || (b(e) && !e)) return { type: r, message: Z(e) ? e : "", ref: t };
            }
            var ee = e => (u(e) && !K(e) ? e : { value: e, message: "" }),
                et = async (e, t, r, a, s) => {
                    let { ref: n, refs: o, required: d, maxLength: f, minLength: c, min: y, max: m, pattern: v, validate: p, name: _, valueAsNumber: F, mount: A, disabled: w } = e._f,
                        x = g(t, _);
                    if (!A || w) return {};
                    let D = o ? o[0] : n,
                        k = e => {
                            a && D.reportValidity && (D.setCustomValidity(b(e) ? "" : e || ""), D.reportValidity());
                        },
                        E = {},
                        C = H(n),
                        T = i(n),
                        U = ((F || q(n)) && h(n.value) && h(x)) || ($(n) && "" === n.value) || "" === x || (Array.isArray(x) && !x.length),
                        j = N.bind(null, _, r, E),
                        M = (e, t, r, a = V.maxLength, i = V.minLength) => {
                            let s = e ? t : r;
                            E[_] = { type: e ? a : i, message: s, ref: n, ...j(e ? a : i, s) };
                        };
                    if (s ? !Array.isArray(x) || !x.length : d && ((!(C || T) && (U || l(x))) || (b(x) && !x) || (T && !Q(o).isValid) || (C && !J(o).isValid))) {
                        let { value: e, message: t } = Z(d) ? { value: !!d, message: d } : ee(d);
                        if (e && ((E[_] = { type: V.required, message: t, ref: D, ...j(V.required, t) }), !r)) return (k(t), E);
                    }
                    if (!U && (!l(y) || !l(m))) {
                        let e, t;
                        let a = ee(m),
                            i = ee(y);
                        if (l(x) || isNaN(x)) {
                            let r = n.valueAsDate || new Date(x),
                                s = e => new Date(new Date().toDateString() + " " + e),
                                l = "time" == n.type,
                                u = "week" == n.type;
                            (O(a.value) && x && (e = l ? s(x) > s(a.value) : u ? x > a.value : r > new Date(a.value)),
                                O(i.value) && x && (t = l ? s(x) < s(i.value) : u ? x < i.value : r < new Date(i.value)));
                        } else {
                            let r = n.valueAsNumber || (x ? +x : x);
                            (l(a.value) || (e = r > a.value), l(i.value) || (t = r < i.value));
                        }
                        if ((e || t) && (M(!!e, a.message, i.message, V.max, V.min), !r)) return (k(E[_].message), E);
                    }
                    if ((f || c) && !U && (O(x) || (s && Array.isArray(x)))) {
                        let e = ee(f),
                            t = ee(c),
                            a = !l(e.value) && x.length > +e.value,
                            i = !l(t.value) && x.length < +t.value;
                        if ((a || i) && (M(a, e.message, t.message), !r)) return (k(E[_].message), E);
                    }
                    if (v && !U && O(x)) {
                        let { value: e, message: t } = ee(v);
                        if (K(e) && !x.match(e) && ((E[_] = { type: V.pattern, message: t, ref: n, ...j(V.pattern, t) }), !r)) return (k(t), E);
                    }
                    if (p) {
                        if (W(p)) {
                            let e = X(await p(x, t), D);
                            if (e && ((E[_] = { ...e, ...j(V.validate, e.message) }), !r)) return (k(e.message), E);
                        } else if (u(p)) {
                            let e = {};
                            for (let a in p) {
                                if (!S(e) && !r) break;
                                let i = X(await p[a](x, t), D, a);
                                i && ((e = { ...i, ...j(a, i.message) }), k(i.message), r && (E[_] = e));
                            }
                            if (!S(e) && ((E[_] = { ref: D, ...e }), !r)) return E;
                        }
                    }
                    return (k(!0), E);
                };
            function er(e, t) {
                let r = Array.isArray(t) ? t : U(t) ? [t] : j(t),
                    a =
                        1 === r.length
                            ? e
                            : (function (e, t) {
                                  let r = t.slice(0, -1).length,
                                      a = 0;
                                  for (; a < r; ) e = h(e) ? a++ : e[t[a++]];
                                  return e;
                              })(e, r),
                    i = r.length - 1,
                    s = r[i];
                return (
                    a && delete a[s],
                    0 !== i &&
                        ((u(a) && S(a)) ||
                            (Array.isArray(a) &&
                                (function (e) {
                                    for (let t in e) if (e.hasOwnProperty(t) && !h(e[t])) return !1;
                                    return !0;
                                })(a))) &&
                        er(e, r.slice(0, -1)),
                    e
                );
            }
            var ea = () => {
                    let e = [];
                    return {
                        get observers() {
                            return e;
                        },
                        next: t => {
                            for (let r of e) r.next && r.next(t);
                        },
                        subscribe: t => (
                            e.push(t),
                            {
                                unsubscribe: () => {
                                    e = e.filter(e => e !== t);
                                },
                            }
                        ),
                        unsubscribe: () => {
                            e = [];
                        },
                    };
                },
                ei = e => l(e) || !n(e);
            function es(e, t) {
                if (ei(e) || ei(t)) return e === t;
                if (s(e) && s(t)) return e.getTime() === t.getTime();
                let r = Object.keys(e),
                    a = Object.keys(t);
                if (r.length !== a.length) return !1;
                for (let i of r) {
                    let r = e[i];
                    if (!a.includes(i)) return !1;
                    if ("ref" !== i) {
                        let e = t[i];
                        if ((s(r) && s(e)) || (u(r) && u(e)) || (Array.isArray(r) && Array.isArray(e)) ? !es(r, e) : r !== e) return !1;
                    }
                }
                return !0;
            }
            var el = e => "select-multiple" === e.type,
                en = e => H(e) || i(e),
                eu = e => $(e) && e.isConnected,
                eo = e => {
                    for (let t in e) if (W(e[t])) return !0;
                    return !1;
                };
            function ed(e, t = {}) {
                let r = Array.isArray(e);
                if (u(e) || r) for (let r in e) Array.isArray(e[r]) || (u(e[r]) && !eo(e[r])) ? ((t[r] = Array.isArray(e[r]) ? [] : {}), ed(e[r], t[r])) : l(e[r]) || (t[r] = !0);
                return t;
            }
            var ef = (e, t) =>
                    (function e(t, r, a) {
                        let i = Array.isArray(t);
                        if (u(t) || i)
                            for (let i in t)
                                Array.isArray(t[i]) || (u(t[i]) && !eo(t[i]))
                                    ? h(r) || ei(a[i])
                                        ? (a[i] = Array.isArray(t[i]) ? ed(t[i], []) : { ...ed(t[i]) })
                                        : e(t[i], l(r) ? {} : r[i], a[i])
                                    : (a[i] = !es(t[i], r[i]));
                        return a;
                    })(e, t, ed(t)),
                ec = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => (h(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && O(e) ? new Date(e) : a ? a(e) : e);
            function ey(e) {
                let t = e.ref;
                return (e.refs ? e.refs.every(e => e.disabled) : t.disabled)
                    ? void 0
                    : q(t)
                      ? t.files
                      : H(t)
                        ? J(e.refs).value
                        : el(t)
                          ? [...t.selectedOptions].map(({ value: e }) => e)
                          : i(t)
                            ? Q(e.refs).value
                            : ec(h(t.value) ? e.ref.value : t.value, e);
            }
            var em = (e, t, r, a) => {
                    let i = {};
                    for (let r of e) {
                        let e = g(t, r);
                        e && M(i, r, e._f);
                    }
                    return { criteriaMode: r, names: [...e], fields: i, shouldUseNativeValidation: a };
                },
                ev = e => (h(e) ? e : K(e) ? e.source : u(e) ? (K(e.value) ? e.value.source : e.value) : e),
                eh = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
            function eg(e, t, r) {
                let a = g(e, r);
                if (a || U(r)) return { error: a, name: r };
                let i = r.split(".");
                for (; i.length; ) {
                    let a = i.join("."),
                        s = g(t, a),
                        l = g(e, a);
                    if (s && !Array.isArray(s) && r !== a) break;
                    if (l && l.type) return { name: a, error: l };
                    i.pop();
                }
                return { name: r };
            }
            var eb = (e, t, r, a, i) => !i.isOnAll && (!r && i.isOnTouch ? !(t || e) : (r ? a.isOnBlur : i.isOnBlur) ? !e : (r ? !a.isOnChange : !i.isOnChange) || e),
                ep = (e, t) => !v(g(e, t)).length && er(e, t);
            let e_ = { mode: _.onSubmit, reValidateMode: _.onChange, shouldFocusError: !0 };
            function eV(e = {}) {
                let t = a.useRef(),
                    r = a.useRef(),
                    [n, d] = a.useState({
                        isDirty: !1,
                        isValidating: !1,
                        isLoading: W(e.defaultValues),
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        submitCount: 0,
                        dirtyFields: {},
                        touchedFields: {},
                        validatingFields: {},
                        errors: e.errors || {},
                        disabled: e.disabled || !1,
                        defaultValues: W(e.defaultValues) ? void 0 : e.defaultValues,
                    });
                t.current ||
                    (t.current = {
                        ...(function (e = {}) {
                            let t,
                                r = { ...e_, ...e },
                                a = {
                                    submitCount: 0,
                                    isDirty: !1,
                                    isLoading: W(r.defaultValues),
                                    isValidating: !1,
                                    isSubmitted: !1,
                                    isSubmitting: !1,
                                    isSubmitSuccessful: !1,
                                    isValid: !1,
                                    touchedFields: {},
                                    dirtyFields: {},
                                    validatingFields: {},
                                    errors: r.errors || {},
                                    disabled: r.disabled || !1,
                                },
                                n = {},
                                d = ((u(r.defaultValues) || u(r.values)) && m(r.defaultValues || r.values)) || {},
                                c = r.shouldUnregister ? {} : m(d),
                                V = { action: !1, mount: !1, watch: !1 },
                                F = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
                                A = 0,
                                w = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
                                x = { values: ea(), array: ea(), state: ea() },
                                D = B(r.mode),
                                E = B(r.reValidateMode),
                                C = r.criteriaMode === _.all,
                                U = e => t => {
                                    (clearTimeout(A), (A = setTimeout(e, t)));
                                },
                                j = async e => {
                                    if (w.isValid || e) {
                                        let e = r.resolver ? S((await z()).errors) : await Q(n, !0);
                                        e !== a.isValid && x.state.next({ isValid: e });
                                    }
                                },
                                L = (e, t) => {
                                    (w.isValidating || w.validatingFields) &&
                                        ((e || Array.from(F.mount)).forEach(e => e && M(a.validatingFields, e, !!t)),
                                        (a.isValidating = Object.values(a.validatingFields).some(e => e)),
                                        x.state.next({ validatingFields: a.validatingFields, isValidating: a.isValidating }));
                                },
                                N = (e, t) => {
                                    (M(a.errors, e, t), x.state.next({ errors: a.errors }));
                                },
                                Z = (e, t, r, a) => {
                                    let i = g(n, e);
                                    if (i) {
                                        let s = g(c, e, h(r) ? g(d, e) : r);
                                        (h(s) || (a && a.defaultChecked) || t ? M(c, e, t ? s : ey(i._f)) : X(e, s), V.mount && j());
                                    }
                                },
                                H = (e, t, r, i, s) => {
                                    let l = !1,
                                        u = !1,
                                        o = { name: e },
                                        f = !!(g(n, e) && g(n, e)._f.disabled);
                                    if (!r || i) {
                                        w.isDirty && ((u = a.isDirty), (a.isDirty = o.isDirty = Y()), (l = u !== o.isDirty));
                                        let r = f || es(g(d, e), t);
                                        ((u = !!(!f && g(a.dirtyFields, e))),
                                            r || f ? er(a.dirtyFields, e) : M(a.dirtyFields, e, !0),
                                            (o.dirtyFields = a.dirtyFields),
                                            (l = l || (w.dirtyFields && !r !== u)));
                                    }
                                    if (r) {
                                        let t = g(a.touchedFields, e);
                                        t || (M(a.touchedFields, e, r), (o.touchedFields = a.touchedFields), (l = l || (w.touchedFields && t !== r)));
                                    }
                                    return (l && s && x.state.next(o), l ? o : {});
                                },
                                K = (r, i, s, l) => {
                                    let n = g(a.errors, r),
                                        u = w.isValid && b(i) && a.isValid !== i;
                                    if (
                                        (e.delayError && s ? (t = U(() => N(r, s)))(e.delayError) : (clearTimeout(A), (t = null), s ? M(a.errors, r, s) : er(a.errors, r)),
                                        (s ? !es(n, s) : n) || !S(l) || u)
                                    ) {
                                        let e = { ...l, ...(u && b(i) ? { isValid: i } : {}), errors: a.errors, name: r };
                                        ((a = { ...a, ...e }), x.state.next(e));
                                    }
                                },
                                z = async e => {
                                    L(e, !0);
                                    let t = await r.resolver(c, r.context, em(e || F.mount, n, r.criteriaMode, r.shouldUseNativeValidation));
                                    return (L(e), t);
                                },
                                G = async e => {
                                    let { errors: t } = await z(e);
                                    if (e)
                                        for (let r of e) {
                                            let e = g(t, r);
                                            e ? M(a.errors, r, e) : er(a.errors, r);
                                        }
                                    else a.errors = t;
                                    return t;
                                },
                                Q = async (e, t, i = { valid: !0 }) => {
                                    for (let s in e) {
                                        let l = e[s];
                                        if (l) {
                                            let { _f: e, ...n } = l;
                                            if (e) {
                                                let n = F.array.has(e.name);
                                                L([s], !0);
                                                let u = await et(l, c, C, r.shouldUseNativeValidation && !t, n);
                                                if ((L([s]), u[e.name] && ((i.valid = !1), t))) break;
                                                t || (g(u, e.name) ? (n ? I(a.errors, u, e.name) : M(a.errors, e.name, u[e.name])) : er(a.errors, e.name));
                                            }
                                            n && (await Q(n, t, i));
                                        }
                                    }
                                    return i.valid;
                                },
                                Y = (e, t) => (e && t && M(c, e, t), !es(eA(), d)),
                                J = (e, t, r) => T(e, F, { ...(V.mount ? c : h(t) ? d : O(e) ? { [e]: t } : t) }, r, t),
                                X = (e, t, r = {}) => {
                                    let a = g(n, e),
                                        s = t;
                                    if (a) {
                                        let r = a._f;
                                        r &&
                                            (r.disabled || M(c, e, ec(t, r)),
                                            (s = $(r.ref) && l(t) ? "" : t),
                                            el(r.ref)
                                                ? [...r.ref.options].forEach(e => (e.selected = s.includes(e.value)))
                                                : r.refs
                                                  ? i(r.ref)
                                                      ? r.refs.length > 1
                                                          ? r.refs.forEach(e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(s) ? !!s.find(t => t === e.value) : s === e.value))
                                                          : r.refs[0] && (r.refs[0].checked = !!s)
                                                      : r.refs.forEach(e => (e.checked = e.value === s))
                                                  : q(r.ref)
                                                    ? (r.ref.value = "")
                                                    : ((r.ref.value = s), r.ref.type || x.values.next({ name: e, values: { ...c } })));
                                    }
                                    ((r.shouldDirty || r.shouldTouch) && H(e, s, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && eF(e));
                                },
                                ee = (e, t, r) => {
                                    for (let a in t) {
                                        let i = t[a],
                                            l = `${e}.${a}`,
                                            u = g(n, l);
                                        (!F.array.has(e) && ei(i) && (!u || u._f)) || s(i) ? X(l, i, r) : ee(l, i, r);
                                    }
                                },
                                eo = (e, t, r = {}) => {
                                    let i = g(n, e),
                                        s = F.array.has(e),
                                        u = m(t);
                                    (M(c, e, u),
                                        s
                                            ? (x.array.next({ name: e, values: { ...c } }),
                                              (w.isDirty || w.dirtyFields) && r.shouldDirty && x.state.next({ name: e, dirtyFields: ef(d, c), isDirty: Y(e, u) }))
                                            : !i || i._f || l(u)
                                              ? X(e, u, r)
                                              : ee(e, u, r),
                                        R(e, F) && x.state.next({ ...a }),
                                        x.values.next({ name: V.mount ? e : void 0, values: { ...c } }));
                                },
                                ed = async e => {
                                    let i = e.target,
                                        s = i.name,
                                        l = !0,
                                        u = g(n, s),
                                        d = e => {
                                            l = Number.isNaN(e) || e === g(c, s, e);
                                        };
                                    if (u) {
                                        let f, y;
                                        let m = i.type ? ey(u._f) : o(e),
                                            v = e.type === p.BLUR || e.type === p.FOCUS_OUT,
                                            h = (!eh(u._f) && !r.resolver && !g(a.errors, s) && !u._f.deps) || eb(v, g(a.touchedFields, s), a.isSubmitted, E, D),
                                            b = R(s, F, v);
                                        (M(c, s, m), v ? (u._f.onBlur && u._f.onBlur(e), t && t(0)) : u._f.onChange && u._f.onChange(e));
                                        let _ = H(s, m, v, !1),
                                            V = !S(_) || b;
                                        if ((v || x.values.next({ name: s, type: e.type, values: { ...c } }), h)) return (w.isValid && j(), V && x.state.next({ name: s, ...(b ? {} : _) }));
                                        if ((!v && b && x.state.next({ ...a }), r.resolver)) {
                                            let { errors: e } = await z([s]);
                                            if ((d(m), l)) {
                                                let t = eg(a.errors, n, s),
                                                    r = eg(e, n, t.name || s);
                                                ((f = r.error), (s = r.name), (y = S(e)));
                                            }
                                        } else (L([s], !0), (f = (await et(u, c, C, r.shouldUseNativeValidation))[s]), L([s]), d(m), l && (f ? (y = !1) : w.isValid && (y = await Q(n, !0))));
                                        l && (u._f.deps && eF(u._f.deps), K(s, y, f, _));
                                    }
                                },
                                eV = (e, t) => {
                                    if (g(a.errors, t) && e.focus) return (e.focus(), 1);
                                },
                                eF = async (e, t = {}) => {
                                    let i, s;
                                    let l = k(e);
                                    if (r.resolver) {
                                        let t = await G(h(e) ? e : l);
                                        ((i = S(t)), (s = e ? !l.some(e => g(t, e)) : i));
                                    } else
                                        e
                                            ? ((s = (
                                                  await Promise.all(
                                                      l.map(async e => {
                                                          let t = g(n, e);
                                                          return await Q(t && t._f ? { [e]: t } : t);
                                                      })
                                                  )
                                              ).every(Boolean)) ||
                                                  a.isValid) &&
                                              j()
                                            : (s = i = await Q(n));
                                    return (
                                        x.state.next({ ...(!O(e) || (w.isValid && i !== a.isValid) ? {} : { name: e }), ...(r.resolver || !e ? { isValid: i } : {}), errors: a.errors }),
                                        t.shouldFocus && !s && P(n, eV, e ? l : F.mount),
                                        s
                                    );
                                },
                                eA = e => {
                                    let t = { ...d, ...(V.mount ? c : {}) };
                                    return h(e) ? t : O(e) ? g(t, e) : e.map(e => g(t, e));
                                },
                                ew = (e, t) => ({
                                    invalid: !!g((t || a).errors, e),
                                    isDirty: !!g((t || a).dirtyFields, e),
                                    isTouched: !!g((t || a).touchedFields, e),
                                    isValidating: !!g((t || a).validatingFields, e),
                                    error: g((t || a).errors, e),
                                }),
                                ex = (e, t, r) => {
                                    let i = (g(n, e, { _f: {} })._f || {}).ref;
                                    (M(a.errors, e, { ...t, ref: i }), x.state.next({ name: e, errors: a.errors, isValid: !1 }), r && r.shouldFocus && i && i.focus && i.focus());
                                },
                                eS = (e, t = {}) => {
                                    for (let i of e ? k(e) : F.mount)
                                        (F.mount.delete(i),
                                            F.array.delete(i),
                                            t.keepValue || (er(n, i), er(c, i)),
                                            t.keepError || er(a.errors, i),
                                            t.keepDirty || er(a.dirtyFields, i),
                                            t.keepTouched || er(a.touchedFields, i),
                                            t.keepIsValidating || er(a.validatingFields, i),
                                            r.shouldUnregister || t.keepDefaultValue || er(d, i));
                                    (x.values.next({ values: { ...c } }), x.state.next({ ...a, ...(t.keepDirty ? { isDirty: Y() } : {}) }), t.keepIsValid || j());
                                },
                                eD = ({ disabled: e, name: t, field: r, fields: a, value: i }) => {
                                    if (b(e)) {
                                        let s = e ? void 0 : h(i) ? ey(r ? r._f : g(a, t)._f) : i;
                                        (M(c, t, s), H(t, s, !1, !1, !0));
                                    }
                                },
                                ek = (e, t = {}) => {
                                    let a = g(n, e),
                                        i = b(t.disabled);
                                    return (
                                        M(n, e, { ...(a || {}), _f: { ...(a && a._f ? a._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
                                        F.mount.add(e),
                                        a ? eD({ field: a, disabled: t.disabled, name: e, value: t.value }) : Z(e, !0, t.value),
                                        {
                                            ...(i ? { disabled: t.disabled } : {}),
                                            ...(r.progressive
                                                ? { required: !!t.required, min: ev(t.min), max: ev(t.max), minLength: ev(t.minLength), maxLength: ev(t.maxLength), pattern: ev(t.pattern) }
                                                : {}),
                                            name: e,
                                            onChange: ed,
                                            onBlur: ed,
                                            ref: i => {
                                                if (i) {
                                                    (ek(e, t), (a = g(n, e)));
                                                    let r = (h(i.value) && i.querySelectorAll && i.querySelectorAll("input,select,textarea")[0]) || i,
                                                        s = en(r),
                                                        l = a._f.refs || [];
                                                    (s ? l.find(e => e === r) : r === a._f.ref) ||
                                                        (M(n, e, {
                                                            _f: {
                                                                ...a._f,
                                                                ...(s ? { refs: [...l.filter(eu), r, ...(Array.isArray(g(d, e)) ? [{}] : [])], ref: { type: r.type, name: e } } : { ref: r }),
                                                            },
                                                        }),
                                                        Z(e, !1, void 0, r));
                                                } else ((a = g(n, e, {}))._f && (a._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && !(f(F.array, e) && V.action) && F.unMount.add(e));
                                            },
                                        }
                                    );
                                },
                                eE = () => r.shouldFocusError && P(n, eV, F.mount),
                                eC = (e, t) => async i => {
                                    let s;
                                    i && (i.preventDefault && i.preventDefault(), i.persist && i.persist());
                                    let l = m(c);
                                    if ((x.state.next({ isSubmitting: !0 }), r.resolver)) {
                                        let { errors: e, values: t } = await z();
                                        ((a.errors = e), (l = t));
                                    } else await Q(n);
                                    if ((er(a.errors, "root"), S(a.errors))) {
                                        x.state.next({ errors: {} });
                                        try {
                                            await e(l, i);
                                        } catch (e) {
                                            s = e;
                                        }
                                    } else (t && (await t({ ...a.errors }, i)), eE(), setTimeout(eE));
                                    if ((x.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: S(a.errors) && !s, submitCount: a.submitCount + 1, errors: a.errors }), s)) throw s;
                                },
                                eO = (t, r = {}) => {
                                    let i = t ? m(t) : d,
                                        s = m(i),
                                        l = S(t),
                                        u = l ? d : s;
                                    if ((r.keepDefaultValues || (d = i), !r.keepValues)) {
                                        if (r.keepDirtyValues) for (let e of F.mount) g(a.dirtyFields, e) ? M(u, e, g(c, e)) : eo(e, g(u, e));
                                        else {
                                            if (y && h(t))
                                                for (let e of F.mount) {
                                                    let t = g(n, e);
                                                    if (t && t._f) {
                                                        let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                                        if ($(e)) {
                                                            let t = e.closest("form");
                                                            if (t) {
                                                                t.reset();
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            n = {};
                                        }
                                        ((c = e.shouldUnregister ? (r.keepDefaultValues ? m(d) : {}) : m(u)), x.array.next({ values: { ...u } }), x.values.next({ values: { ...u } }));
                                    }
                                    ((F = { mount: r.keepDirtyValues ? F.mount : new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }),
                                        (V.mount = !w.isValid || !!r.keepIsValid || !!r.keepDirtyValues),
                                        (V.watch = !!e.shouldUnregister),
                                        x.state.next({
                                            submitCount: r.keepSubmitCount ? a.submitCount : 0,
                                            isDirty: !l && (r.keepDirty ? a.isDirty : !!(r.keepDefaultValues && !es(t, d))),
                                            isSubmitted: !!r.keepIsSubmitted && a.isSubmitted,
                                            dirtyFields: l ? [] : r.keepDirtyValues ? (r.keepDefaultValues && c ? ef(d, c) : a.dirtyFields) : r.keepDefaultValues && t ? ef(d, t) : {},
                                            touchedFields: r.keepTouched ? a.touchedFields : {},
                                            errors: r.keepErrors ? a.errors : {},
                                            isSubmitSuccessful: !!r.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                                            isSubmitting: !1,
                                        }));
                                },
                                eT = (e, t) => eO(W(e) ? e(c) : e, t);
                            return {
                                control: {
                                    register: ek,
                                    unregister: eS,
                                    getFieldState: ew,
                                    handleSubmit: eC,
                                    setError: ex,
                                    _executeSchema: z,
                                    _getWatch: J,
                                    _getDirty: Y,
                                    _updateValid: j,
                                    _removeUnmounted: () => {
                                        for (let e of F.unMount) {
                                            let t = g(n, e);
                                            t && (t._f.refs ? t._f.refs.every(e => !eu(e)) : !eu(t._f.ref)) && eS(e);
                                        }
                                        F.unMount = new Set();
                                    },
                                    _updateFieldArray: (e, t = [], r, i, s = !0, l = !0) => {
                                        if (i && r) {
                                            if (((V.action = !0), l && Array.isArray(g(n, e)))) {
                                                let t = r(g(n, e), i.argA, i.argB);
                                                s && M(n, e, t);
                                            }
                                            if (l && Array.isArray(g(a.errors, e))) {
                                                let t = r(g(a.errors, e), i.argA, i.argB);
                                                (s && M(a.errors, e, t), ep(a.errors, e));
                                            }
                                            if (w.touchedFields && l && Array.isArray(g(a.touchedFields, e))) {
                                                let t = r(g(a.touchedFields, e), i.argA, i.argB);
                                                s && M(a.touchedFields, e, t);
                                            }
                                            (w.dirtyFields && (a.dirtyFields = ef(d, c)),
                                                x.state.next({ name: e, isDirty: Y(e, t), dirtyFields: a.dirtyFields, errors: a.errors, isValid: a.isValid }));
                                        } else M(c, e, t);
                                    },
                                    _updateDisabledField: eD,
                                    _getFieldArray: t => v(g(V.mount ? c : d, t, e.shouldUnregister ? g(d, t, []) : [])),
                                    _reset: eO,
                                    _resetDefaultValues: () =>
                                        W(r.defaultValues) &&
                                        r.defaultValues().then(e => {
                                            (eT(e, r.resetOptions), x.state.next({ isLoading: !1 }));
                                        }),
                                    _updateFormState: e => {
                                        a = { ...a, ...e };
                                    },
                                    _disableForm: e => {
                                        b(e) &&
                                            (x.state.next({ disabled: e }),
                                            P(
                                                n,
                                                (t, r) => {
                                                    let a = e,
                                                        i = g(n, r);
                                                    (i && b(i._f.disabled) && (a || (a = i._f.disabled)), (t.disabled = a));
                                                },
                                                0,
                                                !1
                                            ));
                                    },
                                    _subjects: x,
                                    _proxyFormState: w,
                                    _setErrors: e => {
                                        ((a.errors = e), x.state.next({ errors: a.errors, isValid: !1 }));
                                    },
                                    get _fields() {
                                        return n;
                                    },
                                    get _formValues() {
                                        return c;
                                    },
                                    get _state() {
                                        return V;
                                    },
                                    set _state(value) {
                                        V = value;
                                    },
                                    get _defaultValues() {
                                        return d;
                                    },
                                    get _names() {
                                        return F;
                                    },
                                    set _names(value) {
                                        F = value;
                                    },
                                    get _formState() {
                                        return a;
                                    },
                                    set _formState(value) {
                                        a = value;
                                    },
                                    get _options() {
                                        return r;
                                    },
                                    set _options(value) {
                                        r = { ...r, ...value };
                                    },
                                },
                                trigger: eF,
                                register: ek,
                                handleSubmit: eC,
                                watch: (e, t) => (W(e) ? x.values.subscribe({ next: r => e(J(void 0, t), r) }) : J(e, t, !0)),
                                setValue: eo,
                                getValues: eA,
                                reset: eT,
                                resetField: (e, t = {}) => {
                                    g(n, e) &&
                                        (h(t.defaultValue) ? eo(e, m(g(d, e))) : (eo(e, t.defaultValue), M(d, e, m(t.defaultValue))),
                                        t.keepTouched || er(a.touchedFields, e),
                                        t.keepDirty || (er(a.dirtyFields, e), (a.isDirty = t.defaultValue ? Y(e, m(g(d, e))) : Y())),
                                        !t.keepError && (er(a.errors, e), w.isValid && j()),
                                        x.state.next({ ...a }));
                                },
                                clearErrors: e => {
                                    (e && k(e).forEach(e => er(a.errors, e)), x.state.next({ errors: e ? a.errors : {} }));
                                },
                                unregister: eS,
                                setError: ex,
                                setFocus: (e, t = {}) => {
                                    let r = g(n, e),
                                        a = r && r._f;
                                    if (a) {
                                        let e = a.refs ? a.refs[0] : a.ref;
                                        e.focus && (e.focus(), t.shouldSelect && e.select());
                                    }
                                },
                                getFieldState: ew,
                            };
                        })(e),
                        formState: n,
                    });
                let c = t.current.control;
                return (
                    (c._options = e),
                    C({
                        subject: c._subjects.state,
                        next: e => {
                            D(e, c._proxyFormState, c._updateFormState, !0) && d({ ...c._formState });
                        },
                    }),
                    a.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]),
                    a.useEffect(() => {
                        if (c._proxyFormState.isDirty) {
                            let e = c._getDirty();
                            e !== n.isDirty && c._subjects.state.next({ isDirty: e });
                        }
                    }, [c, n.isDirty]),
                    a.useEffect(() => {
                        e.values && !es(e.values, r.current) ? (c._reset(e.values, c._options.resetOptions), (r.current = e.values), d(e => ({ ...e }))) : c._resetDefaultValues();
                    }, [e.values, c]),
                    a.useEffect(() => {
                        e.errors && c._setErrors(e.errors);
                    }, [e.errors, c]),
                    a.useEffect(() => {
                        (c._state.mount || (c._updateValid(), (c._state.mount = !0)), c._state.watch && ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })), c._removeUnmounted());
                    }),
                    a.useEffect(() => {
                        e.shouldUnregister && c._subjects.values.next({ values: c._getWatch() });
                    }, [e.shouldUnregister, c]),
                    (t.current.formState = x(n, c)),
                    t.current
                );
            }
        },
    },
]);
