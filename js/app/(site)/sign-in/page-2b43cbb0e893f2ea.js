(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5749],
    {
        23198: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 64610));
        },
        64610: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return a;
                },
            });
            var s = n(57437),
                u = n(80605),
                i = n(99376),
                r = n(2265);
            function a() {
                let e = (0, i.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        (0, u.getSession)().then(t => {
                            t && e.push("/home");
                        });
                    }, []),
                    (0, s.jsx)("button", {
                        onClick: () => (0, u.signIn)("naver", { redirect: !0, callbackUrl: "/validation" }),
                        className: "w-full max-w-[520px] mt-8 bg-[#03C75A] px-4 h-14 rounded-md text-white shadow-md",
                        children: (0, s.jsxs)("div", {
                            className: "relative",
                            children: [(0, s.jsx)("span", { className: "absolute left-3 top-1.5", children: (0, s.jsx)(l, {}) }), (0, s.jsx)("span", { children: "네이버 로그인" })],
                        }),
                    })
                );
            }
            let l = () =>
                (0, s.jsx)("svg", {
                    width: 13,
                    height: 12,
                    viewBox: "0 0 13 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", { d: "M8.21 6.42L3.72 0H0V12H3.9V5.58L8.38 12H12.1V0H8.21V6.42Z", fill: "white" }),
                });
        },
        99376: function (e, t, n) {
            "use strict";
            var s = n(35475);
            (n.o(s, "usePathname") &&
                n.d(t, {
                    usePathname: function () {
                        return s.usePathname;
                    },
                }),
                n.o(s, "useRouter") &&
                    n.d(t, {
                        useRouter: function () {
                            return s.useRouter;
                        },
                    }));
        },
    },
    function (e) {
        (e.O(0, [605, 2971, 2117, 1744], function () {
            return e((e.s = 23198));
        }),
            (_N_E = e.O()));
    },
]);
