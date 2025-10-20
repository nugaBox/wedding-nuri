"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5353],
    {
        40253: function (e, t, s) {
            s.d(t, {
                default: function () {
                    return i;
                },
            });
            var l = s(57437),
                r = s(12443),
                o = s(61994),
                a = s(2265);
            let d = [
                { category: "top", title: "질문 TOP" },
                { category: "all", title: "전체" },
                { category: "ready", title: "준비 \xb7 제작" },
                { category: "edit", title: "디자인 \xb7 꾸미기" },
                { category: "analysis", title: "참석의사 \xb7 분석" },
                { category: "share", title: "공유 \xb7 전달하기" },
                { category: "event", title: "이벤트 \xb7 혜택" },
                { category: "partner", title: "파트너 제휴" },
                { category: "etc", title: "그 외 질문" },
                { category: "search", title: "검색 결과" },
            ];
            function i(e) {
                let { faqContent: t, isDropdown: s } = e,
                    [r, i] = (0, a.useState)("top"),
                    [x, h] = (0, a.useState)(""),
                    p = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return e.replace(/\s+/g, "");
                    },
                    u = e =>
                        e.trim()
                            ? t.filter(t => {
                                  let s = p(e.toLowerCase()),
                                      l = p((t.title || "").toLowerCase()),
                                      r = p((t.content || "").toLowerCase()),
                                      o = (t.title || "").toLowerCase().includes(e.toLowerCase()) || (t.content || "").toLowerCase().includes(e.toLowerCase()),
                                      a = l.includes(s) || r.includes(s);
                                  return o || a;
                              })
                            : [],
                    C = u(x).length,
                    f = "search" === r ? u(x) : "all" === r ? t : t.filter(e => !!e.category && e.category.includes(r));
                return (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsxs)("div", {
                            className: "relative",
                            children: [
                                (0, l.jsx)("div", {
                                    className: "absolute left-6 top-1/2 -translate-y-1/2 text-tog-999",
                                    children: (0, l.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, l.jsx)("circle", { cx: "11", cy: "11", r: "8" }), (0, l.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })],
                                    }),
                                }),
                                (0, l.jsx)("input", {
                                    type: "text",
                                    className:
                                        "flex w-full border border-input px-5 py-3 pl-14 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 md:h-14 shadow-md rounded-3xl border-none placeholder:text-tog-999",
                                    placeholder: "궁금한 키워드 검색",
                                    value: x,
                                    onChange: e => {
                                        let t = e.target.value;
                                        (h(t), t.trim() ? i("search") : "search" === r && i("top"));
                                    },
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: (0, o.Z)("flex w-full justify-between gap-x-4", { "py-4": s, "py-4 md:py-12": !s }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        d.map(e => {
                                            if ("search" !== e.category)
                                                return (0, l.jsx)(n, { category: e.category, title: e.title, selectedCategory: r, setSelectedCategory: i, isDropdown: s }, e.category);
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "flex md:hidden",
                                            children: (0, l.jsx)(n, { category: "search", title: "검색 결과 (".concat(C, ")"), selectedCategory: r, setSelectedCategory: i, isDropdown: s }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: "hidden md:flex justify-end",
                                    children: (0, l.jsx)(n, { category: "search", title: "검색 결과 (".concat(C, ")"), selectedCategory: r, setSelectedCategory: i, isDropdown: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: "flex flex-col gap-y-2.5",
                            children:
                                f.length > 0
                                    ? f.map(e => (0, l.jsx)(c, { ...e, searchKeyword: "search" === r ? x : "", isDropdown: s }, e.id))
                                    : (0, l.jsx)("div", {
                                          className: "px-6 py-20 bg-white rounded-lg text-center text-tog-999",
                                          children: "search" === r ? "검색 결과가 없습니다." : "해당 카테고리에 등록된 질문이 없습니다.",
                                      }),
                        }),
                    ],
                });
            }
            let n = e => {
                    let { category: t, title: s, selectedCategory: r, setSelectedCategory: a, isDropdown: d } = e;
                    return (0, l.jsx)("button", {
                        onClick: () => a(t),
                        className: (0, o.Z)("w-fit shadow-md rounded-full border-none font-medium", {
                            "bg-tog-pink text-tog-444": r === t,
                            "bg-white text-tog-999": r !== t,
                            "h-8 px-3 text-xs": d,
                            "h-8 px-4 md:h-12 md:px-5 text-xs md:text-base": !d,
                        }),
                        children: (0, l.jsx)("span", { className: "whitespace-nowrap text-center", children: s }),
                    });
                },
                c = e => {
                    let { id: t, title: s, content: a, imageUrl: d, searchKeyword: i, isDropdown: n } = e,
                        c = function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if (!t || !e) return e;
                            e.replace(/<[^>]*>/g, "");
                            let s = e,
                                l = RegExp("(".concat(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), ")"), "gi"),
                                r = [];
                            return (
                                e.split(/(<[^>]*>)/).forEach(e => {
                                    e.startsWith("<") || e.endsWith(">") || r.push(e);
                                }),
                                r.forEach(e => {
                                    if (e.match(l)) {
                                        let t = e.replace(l, '<span class="bg-yellow-100">$1</span>');
                                        s = s.replace(e, t);
                                    }
                                }),
                                s
                            );
                        },
                        x = i ? c(s || "", i) : s || "",
                        h = i ? c(a || "", i) : a || "";
                    return (0, l.jsx)(r.UQ, {
                        type: "single",
                        collapsible: !0,
                        className: "w-full shadow-md rounded-3xl",
                        children: (0, l.jsx)(r.Qd, {
                            value: t || "",
                            className: "relative border-none overflow-hidden",
                            children: (0, l.jsxs)("div", {
                                className: "text-sm md:text-base rounded-3xl [&[data-state=open]]:rounded-b-none [&[data-state=open]>*]:rounded-b-none [&[data-state=closed]]:rounded-3xl",
                                children: [
                                    (0, l.jsx)(r.o4, {
                                        className: (0, o.Z)(
                                            "text-left px-4 md:px-8 py-4 bg-white rounded-3xl [&[data-state=open]]:rounded-b-none [&[data-state=open]]:rounded-t-3xl flex justify-between items-center hover:rounded-3xl",
                                            { "py-4 [&>svg]:w-2 [&>svg]:h-2": n, "py-4 md:py-5 [&>svg]:w-3 [&>svg]:h-3": !n }
                                        ),
                                        children: (0, l.jsxs)("div", {
                                            className: "flex items-center flex-1 overflow-hidden pr-4",
                                            children: [
                                                (0, l.jsx)("div", { className: "mr-2 text-tog-pink-dark flex-shrink-0", children: "Q" }),
                                                (0, l.jsx)("span", { className: (0, o.Z)("font-normal", { "text-sm": n, "text-sm md:text-base": !n }), dangerouslySetInnerHTML: { __html: x } }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsx)(r.vF, {
                                        className: "bg-[#FBFAF9] rounded-b-3xl faq-content max-w-full overflow-hidden",
                                        children: (0, l.jsxs)("div", {
                                            className: "p-7 md:p-9",
                                            children: [
                                                (0, l.jsx)("div", { className: (0, o.Z)("whitespace-pre-wrap", { "text-sm": n, "text-sm md:text-base": !n }), dangerouslySetInnerHTML: { __html: h } }),
                                                d &&
                                                    (0, l.jsx)("div", {
                                                        className: "rounded-md py-4 md:py-6 max-w-full overflow-hidden",
                                                        children: (0, l.jsx)("img", { src: d, alt: s || "", className: "w-full h-auto object-contain rounded-md" }),
                                                    }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        55353: function (e, t, s) {
            s.d(t, {
                FaqDropDownContent: function () {
                    return c;
                },
            });
            var l = s(57437),
                r = s(84190),
                o = s(40253),
                a = s(2265),
                d = s(54887),
                i = s(99376),
                n = s(94508);
            function c(e) {
                let { faqContent: t } = e,
                    [s, c] = (0, a.useState)(!1),
                    [p, u] = (0, a.useState)(!1),
                    C = (0, i.usePathname)();
                (0, a.useEffect)(() => (u(!0), () => u(!1)), []);
                let f = e => /^\/editor\/[\w-]+/.test(e);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: "relative",
                        children: [
                            p &&
                                s &&
                                (0, d.createPortal)(
                                    (0, l.jsx)("div", {
                                        className: "fixed inset-0 bg-black/50",
                                        style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 },
                                        onClick: () => c(!1),
                                        children: (0, l.jsx)("button", {
                                            className: (0, n.cn)("w-[82px] h-[82px] absolute", {
                                                "bottom-[4.5rem] right-0 md:bottom-[1.5rem] md:right-[1rem]": f(C),
                                                "bottom-[0.5rem] right-0 md:bottom-[1.5rem] md:right-[1rem]": !f(C),
                                            }),
                                            children: (0, l.jsx)(h, {}),
                                        }),
                                    }),
                                    document.body
                                ),
                            (0, l.jsxs)(r.h_, {
                                open: s,
                                onOpenChange: c,
                                children: [
                                    (0, l.jsx)(r.$F, {
                                        asChild: !0,
                                        className: "focus:outline-none",
                                        style: { zIndex: 10001, position: "relative" },
                                        children: (0, l.jsx)("button", {
                                            className: "w-[82px] h-[82px]",
                                            style: { zIndex: 10001, position: "relative" },
                                            children: s ? (0, l.jsx)("div", { className: "opacity-0", children: (0, l.jsx)(h, {}) }) : (0, l.jsx)(x, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(r.AW, {
                                        className: "w-[90vw] md:w-[440px] h-[70svh] md:h-[720px] overflow-scroll scrollbar-hide px-4 py-6 border-none shadow-md mr-5 md:mr-8 bg-tog-bg-f8 rounded-xl",
                                        style: { zIndex: 1e4 },
                                        sideOffset: 5,
                                        alignOffset: -60,
                                        children: (0, l.jsx)(o.default, { faqContent: t, isDropdown: !0 }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            let x = () =>
                    (0, l.jsxs)("svg", {
                        width: 82,
                        height: 82,
                        viewBox: "0 0 82 82",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, l.jsx)("g", {
                                filter: "url(#filter0_d_6064_1207)",
                                children: (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M13 35C13 19.536 25.536 7 41 7C56.4638 7 69 19.536 69 35C69 50.4638 56.4638 63 41 63C36.165 63 31.6112 61.7727 27.6386 59.6121L16.6134 61.6646C15.9803 61.7826 15.3298 61.5807 14.8745 61.1254C14.4191 60.6701 14.2175 60.0198 14.3353 59.3866L16.388 48.3613C14.2271 44.3887 13 39.835 13 35Z",
                                    fill: "#E9CBCF",
                                }),
                            }),
                            (0, l.jsx)("path", {
                                d: "M41.6125 30.4821V30.4838C41.6564 30.4573 41.702 30.4309 41.7464 30.4044L41.6125 30.4821ZM39.6047 31.6439C39.6212 31.6341 39.6389 31.626 39.6554 31.6157V31.614L39.6047 31.6439ZM47.5539 19.0248C45.6356 18.9339 43.8711 19.0312 42.3689 20.3978C40.8848 21.7478 40.2095 23.5568 39.9046 25.476C39.9046 25.476 39.8784 25.6181 39.8459 25.8753C39.655 27.3162 39.6503 28.8014 39.6516 30.1945C39.6516 30.3315 39.6516 30.4701 39.6533 30.6071C40.242 30.3251 40.8945 29.9517 41.6138 29.4367C41.6201 28.1149 41.6661 26.7795 41.8634 25.4756C41.9026 25.4675 41.9432 25.4589 41.9825 25.4508C44.0734 25.0216 46.5948 24.6073 48.3563 23.3051C50.1162 22.0029 50.1309 19.1459 47.5539 19.0239V19.0248ZM47.4888 21.9969C46.6471 23.9839 43.793 24.565 41.9369 25.0254C41.9761 24.8027 42.0201 24.58 42.0707 24.3602C42.4981 22.4688 43.6562 20.6154 45.3523 19.6481C45.6948 19.4536 46.0584 19.2948 46.4385 19.186C46.5884 19.2321 46.7388 19.2786 46.8807 19.3708C47.7566 19.9353 47.8723 21.089 47.4893 21.9965L47.4888 21.9969Z",
                                fill: "#222222",
                            }),
                            (0, l.jsx)("path", {
                                d: "M54.8626 29.6223H53.7333C53.4896 29.6223 53.2865 29.4405 53.2497 29.1969C53.1268 28.3781 52.6475 27.544 51.7602 27.1169C51.7505 27.1088 51.739 27.1037 51.7293 27.102C51.3657 26.9287 50.9349 26.8263 50.4345 26.8199C50.4345 26.8199 50.4328 26.8182 50.4311 26.8199C50.198 26.828 49.9729 26.8677 49.7592 26.9321C49.7575 26.9321 49.7541 26.9321 49.7528 26.9338L49.2456 27.1485C48.9584 27.2803 48.678 27.4275 48.4022 27.5824C47.4562 28.1136 46.5317 28.6913 45.6034 29.2592C45.4695 29.3403 45.3361 29.4226 45.2022 29.5032C44.0167 30.2179 42.8257 30.9275 41.6141 31.5943C41.6272 35.5538 41.6419 50.6698 41.6419 50.6698C41.6419 50.8942 41.4249 51.053 41.2145 50.9834L40.1414 50.6301C39.8741 50.541 39.6912 50.2884 39.6912 50.0029L39.657 32.6175C39.4728 32.7084 39.2883 32.7975 39.1025 32.885C37.0115 33.8719 34.6777 34.8507 32.3701 35.151C31.6605 35.2436 30.9265 35.227 30.2056 35.2121C30.0768 35.2155 29.9873 35.2172 29.9873 35.2086C29.9577 35.2086 29.9302 35.2069 29.9007 35.2069C29.01 35.1937 28.1032 35.0384 27.5276 34.2777C26.0596 32.3419 27.963 30.0873 29.4847 28.9601C31.2576 27.6464 33.3549 26.9134 35.4721 26.3988C36.6039 26.1232 37.7489 25.9022 38.8904 25.6777C38.8757 25.775 38.8545 25.9103 38.8317 26.0805C37.6606 26.3263 36.4946 26.607 35.3559 26.988C33.314 27.6745 31.0925 28.7655 29.7715 30.5546C29.1434 31.4079 28.7912 32.507 29.116 33.5532C29.2773 34.0814 29.6135 34.5366 30.0848 34.8225C30.2791 34.9398 30.4957 35.0273 30.7162 35.0866C30.7162 35.0866 30.7225 35.0883 30.7356 35.09H30.7373C30.8514 35.0721 30.9641 35.0521 31.0765 35.0307C31.1905 35.0094 31.3066 34.9864 31.4207 34.9629C31.4337 34.9595 31.4468 34.9578 31.4599 34.9548C31.5169 34.9433 31.5723 34.9317 31.628 34.9185C32.0373 34.8293 32.4465 34.7252 32.8511 34.6083C32.9292 34.587 33.0061 34.564 33.0825 34.5405C33.2325 34.4961 33.3828 34.4496 33.5327 34.4001C33.6142 34.3737 33.6958 34.3472 33.7773 34.3207C34.1933 34.1804 34.6042 34.0302 35.0134 33.8685C35.1342 33.8207 35.258 33.7712 35.3804 33.7217C35.5207 33.6624 35.6609 33.6061 35.7994 33.5451C35.829 33.5335 35.8581 33.5203 35.8877 33.5071C36.1259 33.4047 36.3624 33.2993 36.5972 33.1884C36.8861 33.0565 37.1711 32.9196 37.4549 32.7792C37.5922 32.7118 37.729 32.6439 37.8642 32.5744C37.8756 32.5693 37.887 32.5629 37.8967 32.5578C38.0221 32.495 38.1463 32.4306 38.27 32.3645C38.3908 32.3035 38.5099 32.239 38.6307 32.1763C38.6683 32.155 38.7042 32.1349 38.7414 32.1153C38.9289 32.0163 39.1147 31.9139 39.301 31.8115C39.3939 31.7603 39.4851 31.7091 39.5784 31.6579L39.6046 31.643C39.6211 31.6332 39.6388 31.6251 39.6553 31.6148V31.6131L41.6124 30.4795V30.4829C41.6563 30.4564 41.7019 30.43 41.7463 30.4035L41.6124 30.4812C41.6563 30.4547 41.7019 30.4283 41.7463 30.4018C41.7758 30.3839 41.8066 30.3655 41.8362 30.3489C42.0791 30.2034 42.3189 30.06 42.5605 29.915C42.8295 29.7533 43.0986 29.5899 43.3663 29.4299C45.3479 28.2318 47.3996 26.6062 49.7955 26.5567C49.8508 26.555 49.9078 26.555 49.9636 26.5533C50.1135 26.5498 50.2668 26.5481 50.4218 26.5469C50.4269 26.5469 50.4315 26.5452 50.4349 26.5452C50.44 26.5452 50.4429 26.5469 50.448 26.5469C50.5101 26.5452 50.5734 26.5452 50.6355 26.5452H51.0076C51.7433 26.5452 52.642 26.7747 53.4199 27.189C53.425 27.1924 53.4296 27.1954 53.4364 27.1971C54.2485 27.6361 54.9272 28.2766 55.1473 29.0702C55.149 29.0736 55.149 29.0766 55.149 29.08C55.1633 29.1308 55.1756 29.1824 55.1857 29.2344C55.225 29.4354 55.0662 29.621 54.8635 29.621L54.8626 29.6223Z",
                                fill: "#222222",
                            }),
                            (0, l.jsx)("defs", {
                                children: (0, l.jsxs)("filter", {
                                    id: "filter0_d_6064_1207",
                                    x: "0.333333",
                                    y: "0.333333",
                                    width: "81.3333",
                                    height: "81.3333",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        (0, l.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                                        (0, l.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                                        (0, l.jsx)("feMorphology", { radius: "4.66667", operator: "dilate", in: "SourceAlpha", result: "effect1_dropShadow_6064_1207" }),
                                        (0, l.jsx)("feOffset", { dy: 6 }),
                                        (0, l.jsx)("feGaussianBlur", { stdDeviation: 4 }),
                                        (0, l.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                        (0, l.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                                        (0, l.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_6064_1207" }),
                                        (0, l.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_6064_1207", result: "shape" }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                h = () =>
                    (0, l.jsxs)("svg", {
                        width: 82,
                        height: 82,
                        viewBox: "0 0 82 82",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, l.jsx)("g", {
                                filter: "url(#filter0_d_6064_1197)",
                                children: (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M13 35C13 19.536 25.536 7 41 7C56.4638 7 69 19.536 69 35C69 50.4638 56.4638 63 41 63C36.165 63 31.6112 61.7727 27.6386 59.6121L16.6134 61.6646C15.9803 61.7826 15.3298 61.5807 14.8745 61.1254C14.4191 60.6701 14.2175 60.0198 14.3353 59.3866L16.388 48.3613C14.2271 44.3887 13 39.835 13 35Z",
                                    fill: "#F9F7F6",
                                }),
                            }),
                            (0, l.jsx)("path", {
                                d: "M36 40.4852L41.2426 35.2426M41.2426 35.2426L46.4852 30M41.2426 35.2426L36 30M41.2426 35.2426L46.4852 40.4852",
                                stroke: "#999999",
                                strokeWidth: "1.875",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, l.jsx)("defs", {
                                children: (0, l.jsxs)("filter", {
                                    id: "filter0_d_6064_1197",
                                    x: "0.333333",
                                    y: "0.333333",
                                    width: "81.3333",
                                    height: "81.3333",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        (0, l.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                                        (0, l.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                                        (0, l.jsx)("feMorphology", { radius: "4.66667", operator: "dilate", in: "SourceAlpha", result: "effect1_dropShadow_6064_1197" }),
                                        (0, l.jsx)("feOffset", { dy: 6 }),
                                        (0, l.jsx)("feGaussianBlur", { stdDeviation: 4 }),
                                        (0, l.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                        (0, l.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                                        (0, l.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_6064_1197" }),
                                        (0, l.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_6064_1197", result: "shape" }),
                                    ],
                                }),
                            }),
                        ],
                    });
        },
    },
]);
