"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4261],
    {
        98949: function (e, t, s) {
            s.d(t, {
                Z: function () {
                    return o;
                },
            });
            var r = s(57437),
                n = s(6512);
            function o() {
                return (0, r.jsx)(n.Separator, { className: "bg-tog-ccc my-8" });
            }
        },
        44261: function (e, t, s) {
            s.d(t, {
                default: function () {
                    return l;
                },
                q: function () {
                    return b;
                },
            });
            var r = s(57437),
                n = s(98949),
                o = s(61994),
                i = s(27648),
                d = s(2265);
            function l() {
                let e = (0, d.useRef)(null),
                    t = (0, d.useRef)(null),
                    s = (0, d.useRef)(null),
                    n = (0, d.useRef)(null),
                    [o, i] = (0, d.useState)("1");
                return (
                    (0, d.useEffect)(() => {
                        window.scrollTo({
                            top: (() => {
                                switch (o) {
                                    case "1":
                                    default:
                                        return 0;
                                    case "2":
                                        return t.current.offsetTop - 160;
                                    case "3":
                                        return s.current.offsetTop - 160;
                                    case "4":
                                        return n.current.offsetTop - 160;
                                }
                            })(),
                            behavior: "smooth",
                        });
                    }, [o]),
                    (0, r.jsx)("div", {
                        className: "mt-16",
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col md:flex-row w-full gap-12 md:gap-40",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "w-full md:w-1/4 space-y-2",
                                    children: [
                                        (0, r.jsx)(a, { about: "1", content: o, onClick: () => i("1"), children: " 첫 번째 혜택 " }),
                                        (0, r.jsx)(a, { about: "2", content: o, onClick: () => i("2"), children: " 두 번째 혜택 " }),
                                        (0, r.jsx)(a, { about: "3", content: o, onClick: () => i("3"), children: " 세 번째 혜택 " }),
                                        (0, r.jsx)(a, { about: "4", content: o, onClick: () => i("4"), children: " 네 번째 혜택 " }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: "space-y-8 w-full",
                                    children: [
                                        (0, r.jsx)("div", { ref: e, children: (0, r.jsx)(h, { benefit: N[0], children: " " }) }),
                                        (0, r.jsx)("div", { ref: t, children: (0, r.jsx)(h, { benefit: N[1], children: " " }) }),
                                        (0, r.jsx)("div", { ref: s, children: (0, r.jsx)(h, { benefit: N[2], children: " " }) }),
                                        (0, r.jsx)("div", { ref: n, children: (0, r.jsx)(h, { benefit: N[3], children: " " }) }),
                                        (0, r.jsxs)("div", {
                                            className: "bg-white w-full leading-7 p-8 text-tog-666 rounded-xl shadow-md text-sm md:text-base break-normal",
                                            children: [
                                                (0, r.jsxs)("div", { className: "flex items-center gap-3", children: [(0, r.jsx)(b, {}), "꼭 확인해 주세요!"] }),
                                                (0, r.jsx)("p", { className: "mt-4", children: "\xb7  이벤트는 1인 1회만 참여 가능합니다." }),
                                                (0, r.jsx)("p", { children: "\xb7  이벤트 참여 확인까지 최대 1일이 소요될 수 있습니다." }),
                                                (0, r.jsx)("p", { children: "\xb7  혜택으로 받으신 쿠폰의 유효 기간을 확인해 주세요." }),
                                                (0, r.jsx)("p", { children: "\xb7  이벤트 혜택은 타인에게 양도 및 재판매가 불가합니다." }),
                                                (0, r.jsx)("p", { children: "\xb7  이벤트는 조기 종료 및 변경될 수 있으며, 자세한 안내는 공지사항을 확인해 주세요." }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            }
            let a = (0, d.forwardRef)((e, t) => {
                    let { className: s, children: n, about: i, content: d, ...l } = e;
                    return (0, r.jsxs)("button", {
                        ref: t,
                        ...l,
                        className: (0, o.Z)("w-full md:w-48 flex items-center gap-4 p-3 rounded-lg", { "bg-tog-pink-light text-tog-444": d === i, "bg-transparent text-tog-ccc": d !== i }),
                        children: [
                            (0, r.jsx)(() => {
                                switch (i) {
                                    case "1":
                                    default:
                                        return (0, r.jsx)(j, { isFocus: d === i });
                                    case "2":
                                        return (0, r.jsx)(k, { isFocus: d === i });
                                    case "3":
                                        return (0, r.jsx)(f, { isFocus: d === i });
                                    case "fo4urth":
                                        return (0, r.jsx)(w, { isFocus: d === i });
                                }
                            }, {}),
                            (0, r.jsx)("span", { children: n }),
                        ],
                    });
                }),
                h = e => {
                    let { benefit: t, children: s } = e;
                    return (0, r.jsxs)("div", {
                        className: "w-full leading-7 shadow-md rounded-xl break-normal",
                        children: [
                            (0, r.jsx)("div", {
                                className: "bg-white p-5 md:p-8 space-y-6 rounded-t-xl",
                                children: (0, r.jsxs)("div", {
                                    className: "flex gap-8",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: "w-16 h-16 bg-tog-pink-dark flex items-center rounded-full",
                                            children: (0, r.jsx)(() => {
                                                switch (t.index) {
                                                    case 1:
                                                    default:
                                                        return (0, r.jsx)(m, {});
                                                    case 2:
                                                        return (0, r.jsx)(g, {});
                                                    case 3:
                                                        return (0, r.jsx)(v, {});
                                                    case 4:
                                                        return (0, r.jsx)(L, {});
                                                }
                                            }, {}),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "flex flex-col justify-between",
                                            children: [
                                                (0, r.jsx)("span", { className: "text-tog-pink-dark", children: "기간 한정 혜택 ".concat(t.index) }),
                                                (0, r.jsx)("span", { className: "text-lg md:text-2xl", children: t.title }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: "bg-tog-bg-f8 p-5 md:p-8 text-tog-666 rounded-b-xl",
                                children: [
                                    (0, r.jsx)("p", { className: "text-base md:text-lg font-light", children: t.description }),
                                    (0, r.jsx)(n.Z, {}),
                                    (0, r.jsx)("div", { className: "whitespace-pre-wrap text-sm md:text-base", children: t.content }),
                                    (0, r.jsxs)("div", {
                                        className: "bg-tog-bg-paper px-5 py-4 md:px-8 md:py-6 my-4 rounded-md text-sm md:text-base",
                                        children: [
                                            (0, r.jsx)("div", { className: "text-tog-pink-dark mb-2 font-semibold", children: "확인해 주세요" }),
                                            (0, r.jsx)("div", { className: "whitespace-pre-wrap", children: t.attention }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)("div", { className: "text-tog-444 py-4 text-base md:text-lg", children: "참여 방법" }),
                                            (0, r.jsx)("div", {
                                                className: "text-sm md:text-base",
                                                children: (0, r.jsx)(() => {
                                                    switch (t.index) {
                                                        case 1:
                                                        default:
                                                            return (0, r.jsx)(x, {});
                                                        case 2:
                                                            return (0, r.jsx)(C, {});
                                                        case 3:
                                                            return (0, r.jsx)(p, {});
                                                        case 4:
                                                            return (0, r.jsx)(u, {});
                                                    }
                                                }, {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                c = e => {
                    let { props: t } = e;
                    return (0, r.jsxs)("div", {
                        className: "bg-white px-5 py-4 md:px-8 md:py-6 my-4 rounded-md shadow-md",
                        children: [
                            (0, r.jsx)("div", { className: "whitespace-pre-wrap", children: t.content }),
                            (0, r.jsx)(i.default, {
                                href: t.hrefUrl,
                                target: "_blank",
                                className: "block text-center mt-4 w-full p-3 rounded-md shadow-sm",
                                style: { backgroundColor: t.buttonColor, color: t.textColor },
                                children: t.hrefName,
                            }),
                        ],
                    });
                },
                x = () =>
                    (0, r.jsx)("div", {
                        className: "space-y-10",
                        children: (0, r.jsx)(c, {
                            props: {
                                content:
                                    "스토어 포토 리뷰 작성 사진 2장 + 텍스트 두 줄 이상\n\n네이버 리뷰 시스템 상 캡처 이미지는 첨부가 안 되실 수도 있습니다.\n그러실 경우 텍스트 리뷰로 먼저 작성한 후, 작성한 리뷰를 수정하여 사진을 첨부하실 수 있습니다.",
                                hrefUrl: "https://order.pay.naver.com/home",
                                hrefName: "리뷰 작성하기",
                                buttonColor: "#5DC772",
                                textColor: "#fff",
                            },
                        }),
                    }),
                C = () =>
                    (0, r.jsxs)("div", {
                        className: "space-y-10",
                        children: [
                            (0, r.jsx)(c, {
                                props: {
                                    content: "청첩장 제작 → 워터마크 제거 → 구매 확정 후에 이벤트 혜택을 받으실 수 있습니다.\n이미 구매 확정을 하신 경우, 다음 순서를 진행해 주세요.",
                                    hrefUrl: "https://order.pay.naver.com/home",
                                    hrefName: "구매 확정하기",
                                    buttonColor: "#666",
                                    textColor: "#fff",
                                },
                            }),
                            (0, r.jsx)(c, {
                                props: {
                                    content: "남기신 포토 리뷰를 캡쳐하신 후 아래 버튼을 눌러 공유해 주시면 쿠폰을 받으실 수 있습니다.",
                                    hrefUrl: "https://talk.naver.com/ct/w5zyo6",
                                    hrefName: "두 번째 혜택 받기",
                                    buttonColor: "#E9CBCF",
                                    textColor: "#444",
                                },
                            }),
                        ],
                    }),
                p = () =>
                    (0, r.jsx)("div", {
                        className: "space-y-10",
                        children: (0, r.jsx)(c, {
                            props: {
                                content: "구매 후 24시간 이내 워터마크를 제거해주시거나 리뷰를 남겨주시면 이미지 초대장을 받으실 수 있습니다.",
                                hrefUrl: "https://mkt.shopping.naver.com/link/684139aeb7c8c573b305e778",
                                hrefName: "구매하기",
                                buttonColor: "#5DC772",
                                textColor: "#fff",
                            },
                        }),
                    }),
                u = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(c, {
                            props: {
                                content:
                                    "스토어 포토 리뷰 작성 사진 2장 + 텍스트 두 줄 이상\n\n네이버 리뷰 시스템 상 캡처 이미지는 첨부가 안 되실 수도 있습니다.\n그러실 경우 텍스트 리뷰로 먼저 작성한 후, 작성한 리뷰를 수정하여 사진을 첨부하실 수 있습니다.",
                                hrefUrl: "https://order.pay.naver.com/home",
                                hrefName: "리뷰 작성하기",
                                buttonColor: "#5DC772",
                                textColor: "#fff",
                            },
                        }),
                    }),
                j = e => {
                    let { isFocus: t } = e;
                    return (0, r.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("path", { d: "M3.18359 6L7.63731 18.0003L12.091 6L16.5447 18.0003L20.9985 6", stroke: t ? "#444" : "#CCC", strokeLinecap: "round", strokeLinejoin: "round" }),
                            (0, r.jsx)("path", { d: "M3 11.625L20.8149 11.625", stroke: t ? "#444" : "#CCC", strokeLinecap: "round", strokeLinejoin: "round" }),
                        ],
                    });
                },
                k = e => {
                    let { isFocus: t } = e;
                    return (0, r.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { x: "9.61719", y: "6.19922", width: "10.5332", height: "15.7998", rx: 2, stroke: t ? "#444" : "#CCC" }),
                            (0, r.jsx)("line", { x1: "13.1289", y1: "8.04297", x2: "16.64", y2: "8.04297", stroke: t ? "#444" : "#CCC" }),
                            (0, r.jsx)("line", { x1: "7.51172", y1: "3.81641", x2: "11.0228", y2: "3.81641", stroke: t ? "#444" : "#CCC" }),
                            (0, r.jsx)("path", {
                                d: "M9.61769 17.7998H6C4.89543 17.7998 4 16.9043 4 15.7998V4C4 2.89543 4.89543 2 6 2H12.5332C13.6377 2 14.5332 2.89543 14.5332 4V6.08308",
                                stroke: t ? "#444" : "#CCC",
                            }),
                        ],
                    });
                },
                f = e => {
                    let { isFocus: t } = e;
                    return (0, r.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("path", {
                                d: "M6 2.5H18C18.8284 2.5 19.5 3.17157 19.5 4V17.7606C19.5 18.2047 19.3032 18.6259 18.9626 18.9109L16.2862 21.1504C16.0163 21.3762 15.6756 21.5 15.3236 21.5H6C5.17157 21.5 4.5 20.8284 4.5 20V4C4.5 3.17157 5.17157 2.5 6 2.5Z",
                                stroke: t ? "#444" : "#CCC",
                            }),
                            (0, r.jsx)("path", { d: "M15.8242 21.3333V19C15.8242 18.4477 16.2719 18 16.8242 18H19.3025", stroke: t ? "#444" : "#CCC" }),
                            (0, r.jsx)("path", {
                                d: "M9.0618 11.7004L11.3276 13.7684C11.7094 14.1169 12.294 14.1169 12.6758 13.7684L14.9416 11.7004C15.2846 11.3874 15.48 10.9445 15.48 10.4802C15.48 9.56778 14.7403 8.82812 13.8279 8.82812H13.6001C13.1312 8.82812 12.6792 9.00338 12.3329 9.31949L12.0017 9.62178L11.6705 9.31949C11.3241 9.00338 10.8722 8.82812 10.4033 8.82812H10.1755C9.2631 8.82812 8.52344 9.56778 8.52344 10.4802C8.52344 10.9445 8.71884 11.3874 9.0618 11.7004Z",
                                stroke: t ? "#444" : "#CCC",
                            }),
                        ],
                    });
                },
                w = e => {
                    let { isFocus: t } = e;
                    return (0, r.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("path", {
                                d: "M15.9994 12.9955C13.2383 12.9955 11 11.8763 11 10.4958C11 9.11524 13.2383 7.99609 15.9994 7.99609C18.7604 7.99609 20.9987 9.11524 20.9987 10.4958C20.9987 11.8763 18.7604 12.9955 15.9994 12.9955Z",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M11 14.4922C11 15.8727 13.2383 16.9919 15.9994 16.9919C18.7604 16.9919 20.9987 15.8727 20.9987 14.4922",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M3 9.50391C3 10.8844 5.23829 12.0036 7.99936 12.0036C9.12505 12.0036 10.1638 11.8176 10.9995 11.5037",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M3 13C3 14.3805 5.23829 15.4997 7.99936 15.4997C9.12483 15.4997 10.1634 15.3137 10.999 14.9999",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M3 5.49219V16.4908C3 17.8713 5.23829 18.9905 7.99936 18.9905C9.12485 18.9905 10.1634 18.8044 10.999 18.4905",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", { d: "M13 8.4918V5.49219", stroke: t ? "#444" : "#CCC", strokeLinecap: "round", strokeLinejoin: "round" }),
                            (0, r.jsx)("path", {
                                d: "M11 10.5039V18.5029C11 19.8834 13.2383 21.0026 15.9994 21.0026C18.7604 21.0026 20.9987 19.8834 20.9987 18.5029V10.5039",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M7.99936 7.99936C5.23829 7.99936 3 6.88021 3 5.49968C3 4.11915 5.23829 3 7.99936 3C10.7604 3 12.9987 4.11915 12.9987 5.49968C12.9987 6.88021 10.7604 7.99936 7.99936 7.99936Z",
                                stroke: t ? "#444" : "#CCC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    });
                },
                m = () =>
                    (0, r.jsxs)("svg", {
                        width: 120,
                        height: 120,
                        viewBox: "0 0 120 120",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { width: 120, height: 120, rx: 60, fill: "#D8A2A9" }),
                            (0, r.jsx)("path", { d: "M37.9648 45L49.0989 75L60.2329 45L71.3669 75L82.5009 45", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
                            (0, r.jsx)("path", { d: "M37.5 59.0625L82.0361 59.0625", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
                        ],
                    }),
                g = () =>
                    (0, r.jsxs)("svg", {
                        width: 120,
                        height: 120,
                        viewBox: "0 0 120 120",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { width: 120, height: 120, rx: 60, fill: "#D8A2A9" }),
                            (0, r.jsx)("path", {
                                d: "M37 34.543C37 32.8861 38.3431 31.543 40 31.543H64C65.6569 31.543 67 32.8861 67 34.543V73.6018C67 75.2586 65.6569 76.6018 64 76.6018H40C38.3431 76.6018 37 75.2586 37 73.6018V34.543Z",
                                fill: "#D8A2A9",
                                stroke: "white",
                                strokeWidth: 2,
                            }),
                            (0, r.jsx)("path", {
                                d: "M53 46.3945C53 44.7377 54.3431 43.3945 56 43.3945H80C81.6569 43.3945 83 44.7377 83 46.3945V85.4534C83 87.1102 81.6569 88.4534 80 88.4534H56C54.3431 88.4534 53 87.1102 53 85.4534V46.3945Z",
                                fill: "#D8A2A9",
                                stroke: "white",
                                strokeWidth: 2,
                            }),
                        ],
                    }),
                v = () =>
                    (0, r.jsxs)("svg", {
                        width: 120,
                        height: 120,
                        viewBox: "0 0 120 120",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { width: 120, height: 120, rx: 60, fill: "#D8A2A9" }),
                            (0, r.jsx)("path", {
                                d: "M41 31H79C80.6569 31 82 32.3431 82 34V78.2669C82 79.1331 81.6256 79.957 80.9731 80.5267L72.1163 88.2598C71.5698 88.737 70.8688 89 70.1432 89H41C39.3431 89 38 87.6569 38 86V34C38 32.3431 39.3431 31 41 31Z",
                                stroke: "white",
                                strokeWidth: 2,
                            }),
                            (0, r.jsx)("path", { d: "M71 88V80C71 78.8954 71.8954 78 73 78H81", stroke: "white", strokeWidth: 2 }),
                            (0, r.jsx)("path", {
                                d: "M51.5517 59.1207L59.1837 66.3892C59.6408 66.8246 60.3592 66.8246 60.8163 66.3892L68.4483 59.1207C69.4392 58.177 70 56.8684 70 55.5C70 52.7386 67.7614 50.5 65 50.5H64.6429C63.2673 50.5 61.9444 51.0292 60.9483 51.9778L60.0581 52.8256C60.0256 52.8566 59.9744 52.8566 59.9419 52.8256L59.0517 51.9778C58.0556 51.0292 56.7327 50.5 55.3571 50.5H55C52.2386 50.5 50 52.7386 50 55.5C50 56.8684 50.5608 58.177 51.5517 59.1207Z",
                                stroke: "white",
                                strokeWidth: 2,
                            }),
                        ],
                    }),
                L = () =>
                    (0, r.jsxs)("svg", {
                        width: 120,
                        height: 120,
                        viewBox: "0 0 120 120",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { width: 120, height: 120, rx: 60, fill: "#D8A2A9" }),
                            (0, r.jsx)("path", {
                                d: "M69.7768 62.4409C63.0268 62.4409 57.5547 59.7048 57.5547 56.3298C57.5547 52.9548 63.0268 50.2188 69.7768 50.2188C76.5268 50.2188 81.9989 52.9548 81.9989 56.3298C81.9989 59.7048 76.5268 62.4409 69.7768 62.4409Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M57.5547 66.1094C57.5547 69.4844 63.0268 72.2204 69.7768 72.2204C76.5268 72.2204 81.9989 69.4844 81.9989 66.1094",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M38 53.8906C38 57.2656 43.472 60.0017 50.2221 60.0017C52.9741 60.0017 55.5136 59.547 57.5566 58.7795",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M38 62.4414C38 65.8164 43.472 68.5525 50.2221 68.5525C52.9736 68.5525 55.5126 68.0978 57.5554 67.3307",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M38 44.1094V70.998C38 74.3731 43.472 77.1091 50.2221 77.1091C52.9736 77.1091 55.5126 76.6542 57.5554 75.8869",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", { d: "M62.4414 51.4426V44.1094", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
                            (0, r.jsx)("path", {
                                d: "M57.5547 56.332V75.8874C57.5547 79.2624 63.0268 81.9985 69.7768 81.9985C76.5268 81.9985 81.9989 79.2624 81.9989 75.8874V56.332",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, r.jsx)("path", {
                                d: "M50.2221 50.2221C43.472 50.2221 38 47.4861 38 44.1111C38 40.736 43.472 38 50.2221 38C56.9721 38 62.4442 40.736 62.4442 44.1111C62.4442 47.4861 56.9721 50.2221 50.2221 50.2221Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    }),
                b = () =>
                    (0, r.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, r.jsx)("rect", { width: 24, height: 24, rx: 12, fill: "#E9CBCF" }),
                            (0, r.jsx)("path", {
                                d: "M7.80078 12.6L10.2008 15L16.2008 9",
                                stroke: "#444444",
                                strokeWidth: "1.5",
                                strokeMiterlimit: 10,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    }),
                N = [
                    {
                        index: 1,
                        title: "모바일 67% 특가 할인",
                        description: "한시적으로 진행 중인 67% 특가 가격에 방문자 데이터 분석 기능까지 무료로 받아보세요",
                        content: "투아워게스트의 모바일 청첩장을 특가로 사용하고 무료로 이용해 보세요.\n접속한 분들의 국가 및 도시 등 데이터를 분석해 드려요.",
                        attention: "모바일 청첩장 리뷰를 작성해 주신 뒤 네이버 톡톡으로 전달해 주세요.\n방문자 데이터 분석 기능을 이용하실 수 있도록 권한을 추가해 드립니다.",
                    },
                    {
                        index: 2,
                        title: "모바일 청첩장 1 + 1",
                        description: "혼주용 및 직장용 청첩장을 추가 제작해 보세요",
                        content: "신랑 신부님의 메인 청첩장 외에 추가 청첩장을 무료로 만드실 수 있어요.\n혼주용 및 직장용 청첩장을 구분해서 만들고 전하실 수 있습니다.",
                        attention:
                            "모바일 청첩장을 구매하신 분들만 받으실 수 있는 혜택입니다.\n포토 리뷰를 작성하신 분들만 이벤트에 참여하실 수 있습니다.\n리뷰의 사진에 얼굴 및 개인정보는 가려주셔도 됩니다.\n구매 상품과 무관한 사진 및 내용은 네이버 정책으로 인해 자동 삭제되오며 참여가 어렵습니다.",
                    },
                    {
                        index: 3,
                        title: "이미지 초대장 6종 무료 제공",
                        description: "모바일 청첩장 커버 디자인과 연동되는 여섯 가지 이미지 초대장을 무료로 제공해 드려요.",
                        content: "모바일 청첩장을 구매하신 분들만 받으실 수 있는 혜택입니다.\n리뷰를 작성하시나 24시간 이내에 워터마크를 제거하시면 이미지 초대장을 받으실 수 있습니다.",
                        attention:
                            "이미지 초대장의 정보는 만드신 청첩장 데이터와 자동으로 연동됩니다.\n커버 디자인의 사진 또는 테마를 변경하시면 이미지 초대장에도 자동으로 반영됩니다.\n이미지 초대장을 다운로드 받기 전에 예식일 정보 등 기본 데이터를 먼저 입력해 주세요.",
                    },
                    {
                        index: 4,
                        title: "리뷰 포인트 즉시 지급",
                        description: "투아워게스트의 따뜻한 리뷰를 남겨주세요",
                        content: "리뷰 작성 시 다양한 포인트 혜택을 바로 받으실 수 있습니다.",
                        attention: "네이버 페이의 마이페이지에서 지급 받으신 포인트를 확인하실 수 있습니다.\n\n\xb7  베스트 리뷰 선정 시 10,000원\n\xb7  포토 리뷰 300원\n\xb7  텍스트 리뷰 100원",
                    },
                ];
        },
        6512: function (e, t, s) {
            s.d(t, {
                Separator: function () {
                    return d;
                },
            });
            var r = s(57437),
                n = s(2265),
                o = s(55156),
                i = s(94508);
            let d = n.forwardRef((e, t) => {
                let { className: s, orientation: n = "horizontal", decorative: d = !0, ...l } = e;
                return (0, r.jsx)(o.f, { ref: t, decorative: d, orientation: n, className: (0, i.cn)("shrink-0 bg-border", "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]", s), ...l });
            });
            d.displayName = o.f.displayName;
        },
        94508: function (e, t, s) {
            s.d(t, {
                cn: function () {
                    return o;
                },
            });
            var r = s(61994),
                n = s(53335);
            function o() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, n.m6)((0, r.W)(t));
            }
        },
    },
]);
