(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8981],
    {
        15653: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 49871));
        },
        49871: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return i;
                },
            });
            var s = n(57437),
                r = n(61994),
                l = n(2265);
            function i(e) {
                let { newsContent: t } = e,
                    [n, r] = (0, l.useState)("all");
                return (0, s.jsx)("div", {
                    className: "mt-16",
                    children: (0, s.jsxs)("div", {
                        className: "flex flex-col md:flex-row w-full gap-12 md:gap-40",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "w-full md:w-1/4 space-y-2",
                                children: [
                                    (0, s.jsx)(o, { about: "all", content: n, onClick: () => r("all"), children: " 모든 주제 " }),
                                    (0, s.jsx)(o, { about: "notice", content: n, onClick: () => r("notice"), children: " 공지사항 " }),
                                    (0, s.jsx)(o, { about: "update", content: n, onClick: () => r("update"), children: " 업데이트 " }),
                                    (0, s.jsx)(o, { about: "event", content: n, onClick: () => r("event"), children: " 이벤트 " }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: "space-y-8 w-full text-sm md:text-base",
                                children: t.filter(e => "all" === n || e.about === n).map(e => (0, s.jsx)(a, { content: e }, e.id)),
                            }),
                        ],
                    }),
                });
            }
            let o = (0, l.forwardRef)((e, t) => {
                    let { className: n, children: l, about: i, content: o, ...a } = e;
                    return (0, s.jsxs)("button", {
                        ref: t,
                        ...a,
                        className: (0, r.Z)("w-full md:w-48 flex items-center gap-4 p-3 rounded-lg", { "bg-tog-pink-light text-tog-444": o === i, "bg-transparent text-tog-ccc": o !== i }),
                        children: [
                            (0, s.jsx)(() => {
                                switch (i) {
                                    case "all":
                                    default:
                                        return (0, s.jsx)(c, { isFocus: o === i });
                                    case "notice":
                                        return (0, s.jsx)(C, { isFocus: o === i });
                                    case "update":
                                        return (0, s.jsx)(d, { isFocus: o === i });
                                    case "event":
                                        return (0, s.jsx)(u, { isFocus: o === i });
                                }
                            }, {}),
                            (0, s.jsx)("span", { children: l }),
                        ],
                    });
                }),
                a = e => {
                    let { content: t } = e,
                        n = t.created_at.split("T")[0].substring(2).replaceAll("-", ".");
                    return (0, s.jsxs)("div", {
                        className: "w-full rounded-xl shadow-md",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "bg-white p-5 md:p-8 space-y-6 rounded-t-xl",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            (0, s.jsx)("span", {
                                                className: "text-tog-pink-dark",
                                                children: (() => {
                                                    switch (t.about) {
                                                        case "notice":
                                                            return "공지사항";
                                                        case "update":
                                                            return "업데이트";
                                                        case "event":
                                                            return "이벤트";
                                                        default:
                                                            return "모든 주제";
                                                    }
                                                })(),
                                            }),
                                            (0, s.jsx)("span", { className: "text-tog-999", children: n }),
                                        ],
                                    }),
                                    (0, s.jsx)("p", { className: "text-tog-444 text-lg md:text-2xl break-normal", children: t.title }),
                                ],
                            }),
                            (0, s.jsx)("div", { className: "bg-tog-bg-f8 p-5 md:p-8 text-tog-666 whitespace-pre-wrap rounded-b-xl", children: t.content }),
                        ],
                    });
                },
                c = e => {
                    let { isFocus: t } = e;
                    return (0, s.jsxs)("svg", {
                        width: 20,
                        height: 22,
                        viewBox: "0 0 20 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("path", {
                                d: "M1 18.7762V3.22203C1 1.99484 1.99484 1 3.22203 1H18.1096C18.4778 1 18.7762 1.29845 18.7762 1.66661V16.2368",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M14.3334 7.42346C14.3334 8.09166 14.0696 8.73344 13.5983 9.20814C12.5135 10.3014 11.4615 11.4413 10.3361 12.4947C10.0782 12.7327 9.66906 12.7241 9.42219 12.4753L6.18025 9.20814C5.20033 8.22061 5.20033 6.62631 6.18025 5.63877C7.16981 4.64152 8.78191 4.64152 9.77138 5.63877L9.88926 5.75752L10.007 5.63884C10.4815 5.16045 11.1277 4.89062 11.8027 4.89062C12.4777 4.89062 13.1239 5.16042 13.5983 5.63877C14.0696 6.11355 14.3334 6.7553 14.3334 7.42346Z",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", { d: "M3.22266 16.5547H18.7769", stroke: t ? "#444" : "#CCC", strokeLinecap: "round" }),
                            (0, s.jsx)("path", { d: "M3.22266 21H18.7769", stroke: t ? "#444" : "#CCC", strokeLinecap: "round" }),
                            (0, s.jsx)("path", {
                                d: "M3.22203 20.9987C1.99484 20.9987 1 20.0039 1 18.7767C1 17.5495 1.99484 16.5547 3.22203 16.5547",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    });
                },
                C = e => {
                    let { isFocus: t } = e;
                    return (0, s.jsx)("svg", {
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.7893 1.00732C10.8084 0.00276821 9.19283 0.00276848 8.21193 1.00732L7.29989 1.94135C7.0133 2.23486 6.619 2.39818 6.20881 2.39329L4.90344 2.37774C3.49951 2.36102 2.35712 3.50342 2.37384 4.90734L2.38939 6.21271C2.39427 6.62291 2.23095 7.0172 1.93744 7.3038L1.00341 8.21584C-0.00113791 9.19674 -0.00113788 10.8123 1.00341 11.7932L1.93744 12.7053C2.23095 12.9919 2.39427 13.3862 2.38939 13.7964L2.37384 15.1017C2.35712 16.5057 3.49951 17.6481 4.90344 17.6313L6.20881 17.6158C6.619 17.6109 7.0133 17.7742 7.29989 18.0677L8.21193 19.0018C9.19284 20.0063 10.8084 20.0063 11.7893 19.0018L12.7014 18.0677C12.988 17.7742 13.3823 17.6109 13.7925 17.6158L15.0978 17.6313C16.5018 17.6481 17.6441 16.5057 17.6274 15.1017L17.6119 13.7964C17.607 13.3862 17.7703 12.9919 18.0638 12.7053L18.9978 11.7932C20.0024 10.8123 20.0024 9.19674 18.9978 8.21584L18.0638 7.3038C17.7703 7.0172 17.607 6.62291 17.6119 6.21271L17.6274 4.90734C17.6441 3.50342 16.5017 2.36102 15.0978 2.37774L13.7925 2.39329C13.3823 2.39818 12.988 2.23486 12.7014 1.94135L11.7893 1.00732ZM8.92741 1.70595C9.51595 1.10322 10.4853 1.10322 11.0738 1.70595L11.9859 2.63999C12.4635 3.12916 13.1207 3.40137 13.8044 3.39322L15.1097 3.37767C15.9521 3.36764 16.6375 4.05308 16.6275 4.89543L16.6119 6.2008C16.6038 6.88446 16.876 7.54162 17.3652 8.01928L18.2992 8.93132C18.9019 9.51986 18.9019 10.4892 18.2992 11.0778L17.3652 11.9898C16.876 12.4675 16.6038 13.1246 16.6119 13.8083L16.6275 15.1136C16.6375 15.956 15.9521 16.6414 15.1097 16.6314L13.8044 16.6159C13.1207 16.6077 12.4635 16.8799 11.9859 17.3691L11.0738 18.3031C10.4853 18.9058 9.51595 18.9058 8.92741 18.3031L8.01537 17.3691C7.53771 16.8799 6.88055 16.6077 6.1969 16.6159L4.89153 16.6314C4.04917 16.6414 3.36373 15.956 3.37377 15.1136L3.38932 13.8083C3.39746 13.1246 3.12525 12.4675 2.63608 11.9898L1.70205 11.0778C1.09932 10.4892 1.09932 9.51986 1.70205 8.93132L2.63608 8.01928C3.12525 7.54162 3.39746 6.88446 3.38932 6.2008L3.37377 4.89543C3.36373 4.05308 4.04917 3.36764 4.89153 3.37767L6.1969 3.39322C6.88055 3.40137 7.53771 3.12916 8.01537 2.63999L8.92741 1.70595ZM13.7256 8.10092C13.9209 7.90566 13.9209 7.58907 13.7256 7.39381C13.5304 7.19855 13.2138 7.19855 13.0185 7.39381L8.87726 11.5351L6.9834 9.64122C6.78814 9.44596 6.47155 9.44596 6.27629 9.64122C6.08103 9.83649 6.08103 10.1531 6.27629 10.3483L8.5237 12.5957L8.87726 12.9493L9.23081 12.5957L13.7256 8.10092Z",
                            fill: t ? "#444" : "#CCC",
                        }),
                    });
                },
                d = e => {
                    let { isFocus: t } = e;
                    return (0, s.jsx)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M3 12C9.26727 12 12 9.36545 12 3C12 9.36545 14.7164 12 21 12C14.7164 12 12 14.7164 12 21C12 14.7164 9.26727 12 3 12Z",
                            stroke: t ? "#444" : "#CCC",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        }),
                    });
                },
                u = e => {
                    let { isFocus: t } = e;
                    return (0, s.jsx)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.5501 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z",
                            stroke: t ? "#444" : "#CCC",
                        }),
                    });
                };
        },
        61994: function (e, t, n) {
            "use strict";
            function s() {
                for (var e, t, n = 0, s = "", r = arguments.length; n < r; n++)
                    (e = arguments[n]) &&
                        (t = (function e(t) {
                            var n,
                                s,
                                r = "";
                            if ("string" == typeof t || "number" == typeof t) r += t;
                            else if ("object" == typeof t) {
                                if (Array.isArray(t)) {
                                    var l = t.length;
                                    for (n = 0; n < l; n++) t[n] && (s = e(t[n])) && (r && (r += " "), (r += s));
                                } else for (s in t) t[s] && (r && (r += " "), (r += s));
                            }
                            return r;
                        })(e)) &&
                        (s && (s += " "), (s += t));
                return s;
            }
            (n.d(t, {
                W: function () {
                    return s;
                },
            }),
                (t.Z = s));
        },
    },
    function (e) {
        (e.O(0, [2971, 2117, 1744], function () {
            return e((e.s = 15653));
        }),
            (_N_E = e.O()));
    },
]);
