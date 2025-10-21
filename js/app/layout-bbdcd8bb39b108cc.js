(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185],
    {
        67350: function (e, t, n) {
            (Promise.resolve().then(n.t.bind(n, 47960, 23)),
                Promise.resolve().then(n.bind(n, 49294)),
                Promise.resolve().then(n.t.bind(n, 88003, 23)),
                Promise.resolve().then(n.bind(n, 85660)),
                Promise.resolve().then(n.bind(n, 27880)));
        },
        49294: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return u;
                },
            });
            var r = n(57437),
                a = n(14438);
            function u(e) {
                let { children: t } = e;
                return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(a.x, {})] });
            }
        },
        63515: function (e, t) {
            "use strict";
            (Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    cancelIdleCallback: function () {
                        return r;
                    },
                    requestIdleCallback: function () {
                        return n;
                    },
                }));
            let n =
                    ("undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                    function (e) {
                        let t = Date.now();
                        return self.setTimeout(function () {
                            e({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - t));
                                },
                            });
                        }, 1);
                    },
                r =
                    ("undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                    function (e) {
                        return clearTimeout(e);
                    };
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        85660: function (e, t, n) {
            "use strict";
            var r = n(57437),
                a = n(48667);
            t.default = function () {
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.default, {
                            src: "https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.js",
                            async: !0,
                            onLoad: () => {
                                window.Kakao.isInitialized() || window.Kakao.init("afbd6d92eea1e9648a9af35bf0e59323");
                            },
                            strategy: "afterInteractive",
                        }),
                        (0, r.jsx)(a.default, { src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js", async: !0, strategy: "afterInteractive" }),
                        (0, r.jsx)(a.default, {
                            id: "fb-pixel",
                            strategy: "afterInteractive",
                            dangerouslySetInnerHTML: {
                                __html: "\n          !function(f,b,e,v,n,t,s)\n          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n          n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n          n.queue=[];t=b.createElement(e);t.async=!0;\n          t.src=v;s=b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t,s)}(window, document,'script',\n          'https://connect.facebook.net/en_US/fbevents.js');\n          fbq('init', '1105259681244025');\n          fbq('track', 'PageView');\n          ",
                            },
                        }),
                    ],
                });
            };
        },
        27880: function (e, t, n) {
            "use strict";
            var r = n(2265);
            t.default = function () {
                return (
                    (0, r.useEffect)(() => {
                        let e = e => {
                                if ("F12" === e.key || (e.ctrlKey && e.shiftKey && "I" === e.key) || (e.ctrlKey && e.shiftKey && "J" === e.key) || (e.ctrlKey && e.shiftKey && "K" === e.key)) {
                                    (e.preventDefault(), alert("개발자 도구는 사용할 수 없습니다."));
                                    return;
                                }
                                if (e.ctrlKey && "u" === e.key) {
                                    (e.preventDefault(), alert("소스 보기는 사용할 수 없습니다."));
                                    return;
                                }
                            },
                            t = e => {
                                e.preventDefault();
                            };
                        return (
                            document.addEventListener("keydown", e),
                            document.addEventListener("contextmenu", t),
                            () => {
                                (document.removeEventListener("keydown", e), document.removeEventListener("contextmenu", t));
                            }
                        );
                    }, []),
                    null
                );
            };
        },
        47960: function () {},
    },
    function (e) {
        (e.O(0, [3587, 4438, 8667, 2971, 2117, 1744], function () {
            return e((e.s = 67350));
        }),
            (_N_E = e.O()));
    },
]);
