(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7578],
    {
        26565: function (e, t, a) {
            Promise.resolve().then(a.bind(a, 29928));
        },
        29928: function (e, t, a) {
            "use strict";
            a.d(t, {
                default: function () {
                    return J;
                },
            });
            var s = a(57437),
                o = a(11797),
                l = a(49891),
                i = a(80068),
                n = a(56401),
                r = a(2308),
                d = a(74667),
                c = a(52196),
                m = a(51522),
                g = a(49923),
                p = a(14337),
                h = a(84833),
                x = a(67112),
                u = a(73259),
                y = a(3077),
                f = a(21451),
                b = a(1191),
                j = a(38872),
                w = a(81174),
                C = a(61473),
                I = a(3124),
                D = a(35667),
                N = a(2265),
                k = a(36498),
                F = a(23897),
                v = a(84190),
                A = a(61994),
                L = a(75539),
                M = a(27955),
                E = a(94508);
            let B = {
                    initial: { "--x": "100%", scale: 0.8 },
                    animate: { "--x": "-100%", scale: 1 },
                    whileTap: { scale: 0.95 },
                    transition: {
                        repeat: 1 / 0,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                            type: "spring",
                            stiffness: 200,
                            damping: 5,
                            mass: 0.5,
                        },
                    },
                },
                q = N.forwardRef((e, t) => {
                    let { children: a, className: o, ...l } = e;
                    return (0, s.jsx)(M.E.button, {
                        ref: t,
                        ...B,
                        ...l,
                        className: (0, E.cn)("relative p-0 border-none text-xs backdrop-blur-xl transition-shadow duration-300 ease-in-out", o),
                        children: (0, s.jsx)("span", {
                            className: "relative block size-full text-xs uppercase tracking-wide text-tog-444",
                            style: {
                                maskImage: "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                            },
                            children: a,
                        }),
                    });
                });
            q.displayName = "ShinyButton";
            var U = a(26110);
            function T() {
                return (0, s.jsxs)("div", {
                    className: "hidden flex flex-col justify-center w-full mx-auto shadow-xl relative bg-[#f7f7f7] pt-12 space-y-4",
                    children: [
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "one",
                                title: "송금 수수료 0원 \xb7 디자인 무제한 수정",
                                content: "축의금 온전히 받고 사진은 추후 업로드 가능",
                            },
                            "faq-one"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "two",
                                title: "인트로 \xb7 팝업 \xb7 자동재생 등 필요한 기능만",
                                content: "세부 기능들은 모두 ON / OFF 설정 가능",
                            },
                            "faq-two"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "three",
                                title: "청첩장의 구성 순서를 자유롭게 변경하기",
                                content: "좌측 핸들을 드래그하여 자유롭게 순서 이동하기",
                            },
                            "faq-three"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "four",
                                title: "자동으로 저장되고, 실시간 반영까지",
                                content: "구조부터 다른 기술력으로 안전한 결혼 준비",
                            },
                            "faq-four"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "five",
                                title: "이미지 최대 60장 \xb7 확대 방지 기능",
                                content: "다양한 갤러리 타입과 화질 개선모드까지",
                            },
                            "faq-five"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                isModal: !0,
                                icon: "six",
                                title: "유지되는 QR코드 먼저 다운로드 받기",
                                content: "수정 내용 실시간 반영과 개인정보 암호화까지",
                            },
                            "faq-six"
                        ),
                        (0, s.jsx)("div", { className: "my-3" }),
                        (0, s.jsxs)("div", {
                            className: "bg-[#eeeeee] px-9 w-full h-full flex flex-col items-center justify-center pb-12 md:pb-16",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "space-y-1 text-center py-9",
                                    children: [
                                        (0, s.jsx)("p", {
                                            children: "두 분의 사랑을 가장 잘 담아낼 청첩장을",
                                        }),
                                        (0, s.jsx)("p", {
                                            children: "무료로 먼저 만들어 보세요!",
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("a", {
                                    href: "/editor",
                                    className: "flex items-center justify-center w-full h-12 bg-tog-pink text-tog-444 rounded-lg shadow-md text-[14px] md:text-base",
                                    children: "나만의 청첩장 도메인 바로 만들기",
                                }),
                                (0, s.jsx)("a", {
                                    href: "https://toourguest.com/home/mobile",
                                    className: "mt-2 flex items-center justify-center w-full h-12 bg-tog-666 text-white rounded-lg shadow-md text-[14px] md:text-base",
                                    children: "무료 변경 가능한 샘플 더보기",
                                }),
                            ],
                        }),
                    ],
                });
            }
            function P() {
                return (0, s.jsxs)("div", {
                    className: "hidden flex flex-col justify-center max-w-md mx-auto md:rounded-3xl shadow-xl lg:w-[400px] relative bg-[#f7f7f7] pt-12 space-y-4",
                    children: [
                        (0, s.jsx)(
                            V,
                            {
                                icon: "one",
                                title: "송금 수수료 0원 \xb7 디자인 무제한 수정",
                                content: "축의금 온전히 받고 사진은 추후 업로드 가능",
                            },
                            "faq-one"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                icon: "two",
                                title: "인트로 \xb7 팝업 \xb7 자동재생 등 필요한 기능만",
                                content: "세부 기능들은 모두 ON / OFF 설정 가능",
                            },
                            "faq-two"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                icon: "three",
                                title: "청첩장의 구성 순서를 자유롭게 변경하기",
                                content: "좌측 핸들을 드래그하여 자유롭게 순서 이동하기",
                            },
                            "faq-three"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                icon: "four",
                                title: "자동으로 저장되고, 실시간 반영까지",
                                content: "구조부터 다른 기술력으로 안전한 행사 준비",
                            },
                            "faq-four"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                icon: "five",
                                title: "이미지 최대 60장 \xb7 확대 방지 기능",
                                content: "다양한 갤러리 타입과 화질 개선모드까지",
                            },
                            "faq-five"
                        ),
                        (0, s.jsx)(R, {}),
                        (0, s.jsx)(
                            V,
                            {
                                icon: "six",
                                title: "유지되는 QR코드 먼저 다운로드 받기",
                                content: "수정 내용 실시간 반영과 개인정보 암호화까지",
                            },
                            "faq-six"
                        ),
                        (0, s.jsx)("div", { className: "my-3" }),
                        (0, s.jsxs)("div", {
                            className: "bg-[#eeeeee] px-9 w-full h-full flex flex-col items-center justify-center pb-24 md:pb-16 md:rounded-b-3xl",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "space-y-1 text-center py-9",
                                    children: [
                                        (0, s.jsx)("p", {
                                            children: "두 분의 사랑을 가장 잘 담아낼 청첩장을",
                                        }),
                                        (0, s.jsx)("p", {
                                            children: "무료로 먼저 만들어 보세요!",
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("a", {
                                    href: "/editor",
                                    className: "flex items-center justify-center w-full h-12 bg-tog-pink text-tog-444 rounded-lg shadow-md text-[14px] md:text-base",
                                    children: "나만의 청첩장 도메인 바로 만들기",
                                }),
                                (0, s.jsx)("a", {
                                    href: "https://toourguest.com/home/mobile",
                                    className: "mt-2 flex items-center justify-center w-full h-12 bg-tog-666 text-white rounded-lg shadow-md text-[14px] md:text-base",
                                    children: "무료 변경 가능한 샘플 더보기",
                                }),
                            ],
                        }),
                    ],
                });
            }
            let V = e =>
                    (0, s.jsxs)("div", {
                        className: (0, A.Z)("w-full flex items-center px-9 gap-6", { "md:px-16": e.isModal }),
                        children: [
                            (0, s.jsx)("div", {
                                children: (e => {
                                    switch (e) {
                                        case "one":
                                        default:
                                            return (0, s.jsx)(Z, {});
                                        case "two":
                                            return (0, s.jsx)(W, {});
                                        case "three":
                                            return (0, s.jsx)(O, {});
                                        case "four":
                                            return (0, s.jsx)(S, {});
                                        case "five":
                                            return (0, s.jsx)(z, {});
                                        case "six":
                                            return (0, s.jsx)(H, {});
                                    }
                                })(e.icon),
                            }),
                            (0, s.jsxs)("div", {
                                className: "space-y-1",
                                children: [
                                    (0, s.jsx)("p", {
                                        className: "text-tog-444 text-[14px] md:text-base",
                                        children: e.title,
                                    }),
                                    (0, s.jsx)("p", {
                                        className: "text-tog-999 text-[12px] md:text-sm",
                                        children: e.content,
                                    }),
                                ],
                            }),
                        ],
                    }),
                R = () =>
                    (0, s.jsx)("div", {
                        className: "px-9",
                        children: (0, s.jsx)("div", {
                            className: "w-full bg-tog-eee border-[0.5px]",
                        }),
                    }),
                Z = () =>
                    (0, s.jsxs)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("path", {
                                d: "M25.9002 25.9022H2.09961V14.002L13.9999 19.4112L25.9002 14.002V25.9022Z",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M4.26318 10.7563V4.26525C4.26318 3.07522 5.23684 2.10156 6.42687 2.10156H21.5727C22.7627 2.10156 23.7364 3.07522 23.7364 4.26525V10.7563",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M9.58564 11.1816L13.4443 15.0403C13.6924 15.2884 14.0945 15.2884 14.3426 15.0403L18.2013 11.1816C18.7085 10.6744 18.9935 9.98646 18.9935 9.26914C18.9935 7.77538 17.7825 6.56445 16.2888 6.56445C15.5714 6.56445 14.8835 6.84941 14.3763 7.35664L13.9235 7.8094C13.9069 7.826 13.88 7.826 13.8634 7.8094L13.4106 7.35664C12.9034 6.84941 12.2155 6.56445 11.4981 6.56445C10.0044 6.56445 8.79346 7.77538 8.79346 9.26914C8.79346 9.98646 9.07841 10.6744 9.58564 11.1816Z",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                            }),
                        ],
                    }),
                W = () =>
                    (0, s.jsx)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.8664 3.26927C11.8902 3.19781 11.9571 3.14961 12.0324 3.14961H15.5643C15.6397 3.14961 15.7065 3.19781 15.7304 3.26927L16.6144 5.92128C16.7171 6.22949 16.9381 6.48427 17.2287 6.62957L18.9805 7.50547C19.2711 7.65077 19.6075 7.67467 19.9157 7.57193L22.4704 6.72037C22.553 6.69283 22.6433 6.73023 22.6822 6.80813L24.4281 10.2999C24.465 10.3737 24.4454 10.4633 24.3809 10.5148L22.2474 12.2216C21.9568 12.4541 21.7877 12.8061 21.7877 13.1782V14.7758C21.7877 15.1479 21.9568 15.4999 22.2474 15.7324L24.3809 17.4392C24.4454 17.4907 24.465 17.5803 24.4281 17.6541L22.6822 21.1459C22.6433 21.2238 22.553 21.2612 22.4704 21.2336L19.9886 20.4064C19.6072 20.2792 19.1878 20.3473 18.8662 20.5885L17.0461 21.9535C16.8664 22.0883 16.7272 22.27 16.6438 22.4786L15.7574 24.6944C15.7309 24.7608 15.6665 24.8044 15.5949 24.8044H12.0018C11.9303 24.8044 11.8659 24.7608 11.8394 24.6944L10.953 22.4786C10.8696 22.27 10.7304 22.0883 10.5506 21.9535L8.73061 20.5885C8.40903 20.3473 7.98958 20.2792 7.60823 20.4064L5.12641 21.2336C5.04379 21.2612 4.9535 21.2238 4.91455 21.1459L3.20547 17.7277C3.16458 17.6459 3.19355 17.5464 3.27196 17.4994L5.21436 16.334C5.58333 16.1126 5.8091 15.7138 5.8091 15.2835V13.1782C5.8091 12.8061 5.63994 12.4541 5.34935 12.2216L3.21586 10.5148C3.15142 10.4633 3.13175 10.3737 3.16865 10.2999L4.91455 6.80812C4.9535 6.73023 5.04379 6.69283 5.12641 6.72037L7.68111 7.57193C7.98933 7.67467 8.32573 7.65077 8.61632 7.50547L10.3681 6.62957C10.6587 6.48427 10.8797 6.22949 10.9824 5.92128L11.8664 3.26927ZM12.0324 2.09961C11.5052 2.09961 11.0371 2.43701 10.8703 2.93723L9.98631 5.58924C9.97163 5.63327 9.94006 5.66966 9.89855 5.69042L8.14675 6.56632C8.10524 6.58708 8.05718 6.59049 8.01315 6.57582L5.45845 5.72425C4.88012 5.53147 4.24803 5.79329 3.9754 6.33855L2.2295 9.83035C1.97118 10.347 2.10887 10.9739 2.55993 11.3347L4.69342 13.0415C4.73494 13.0748 4.7591 13.125 4.7591 13.1782V15.2835C4.7591 15.345 4.72685 15.402 4.67414 15.4336L2.73174 16.599C2.18285 16.9284 1.98006 17.6248 2.26632 18.1973L3.9754 21.6154C4.24803 22.1607 4.88011 22.4225 5.45845 22.2297L7.94027 21.4025C7.99475 21.3843 8.05467 21.394 8.10061 21.4285L9.92064 22.7935C9.94632 22.8128 9.96621 22.8387 9.97813 22.8685L10.8645 25.0843C11.0505 25.5494 11.5009 25.8544 12.0018 25.8544H15.5949C16.0959 25.8544 16.5463 25.5494 16.7323 25.0843L17.6187 22.8685C17.6306 22.8387 17.6505 22.8128 17.6761 22.7935L19.4962 21.4285C19.5421 21.394 19.602 21.3843 19.6565 21.4025L22.1383 22.2297C22.7167 22.4225 23.3488 22.1607 23.6214 21.6154L25.3673 18.1237C25.6256 17.607 25.4879 16.9801 25.0369 16.6192L22.9034 14.9125C22.8619 14.8792 22.8377 14.829 22.8377 14.7758V13.1782C22.8377 13.125 22.8619 13.0748 22.9034 13.0415L25.0369 11.3347C25.4879 10.9739 25.6256 10.347 25.3673 9.83035L23.6214 6.33855C23.3488 5.79329 22.7167 5.53147 22.1383 5.72425L19.5836 6.57582C19.5396 6.59049 19.4916 6.58708 19.45 6.56632L17.6982 5.69042C17.6567 5.66966 17.6252 5.63327 17.6105 5.58924L16.7265 2.93723C16.5597 2.43701 16.0916 2.09961 15.5643 2.09961H12.0324ZM10.9844 13.9766C10.9844 12.4225 12.2443 11.1627 13.7984 11.1627C15.3525 11.1627 16.6123 12.4225 16.6123 13.9766C16.6123 15.5307 15.3525 16.7906 13.7984 16.7906C12.2443 16.7906 10.9844 15.5307 10.9844 13.9766ZM13.7984 10.1127C11.6644 10.1127 9.93443 11.8426 9.93443 13.9766C9.93443 16.1106 11.6644 17.8406 13.7984 17.8406C15.9324 17.8406 17.6623 16.1106 17.6623 13.9766C17.6623 11.8426 15.9324 10.1127 13.7984 10.1127Z",
                            fill: "#D8A2A9",
                        }),
                    }),
                O = () =>
                    (0, s.jsxs)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("path", {
                                d: "M20.1247 23.8012V4.20117M20.1247 4.20117L23.7997 7.87617M20.1247 4.20117L16.4497 7.87617",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M7.87471 4.20117V23.8012M7.87471 23.8012L11.5497 20.1262M7.87471 23.8012L4.19971 20.1262",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    }),
                S = () =>
                    (0, s.jsxs)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("path", {
                                d: "M14.0003 25.1988C20.1859 25.1988 25.2003 20.1844 25.2003 13.9988C25.2003 7.81324 20.1859 2.79883 14.0003 2.79883C7.8147 2.79883 2.80029 7.81324 2.80029 13.9988C2.80029 20.1844 7.8147 25.1988 14.0003 25.1988Z",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                            }),
                            (0, s.jsx)("path", {
                                d: "M19.1332 11.3851C18.267 9.62704 16.2886 8.39844 13.9865 8.39844C11.0756 8.39844 8.68205 10.363 8.40039 12.8784",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M16.7939 11.4479H18.9289C19.3001 11.4479 19.6009 11.147 19.6009 10.7759V8.95898",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M8.86719 15.8648C9.73347 18.0623 11.7119 19.598 14.014 19.598C16.9249 19.598 19.3184 17.1423 19.6001 13.998",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M11.2073 15.8184H9.07239C8.70126 15.8184 8.40039 16.1193 8.40039 16.4904V18.9295",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        ],
                    }),
                z = () =>
                    (0, s.jsxs)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("path", {
                                d: "M7.32931 1.92539H20.6705C23.6553 1.92539 26.0749 4.34503 26.0749 7.3298V20.671C26.0749 23.6558 23.6553 26.0754 20.6705 26.0754H7.32931C4.34454 26.0754 1.9249 23.6558 1.9249 20.671V7.3298C1.9249 4.34503 4.34454 1.92539 7.32931 1.92539Z",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeMiterlimit: 10,
                                strokeLinecap: "round",
                            }),
                            (0, s.jsx)("path", {
                                d: "M2.54541 22.0181L7.21724 16.8892C7.77551 16.2684 8.67735 16.2684 9.23562 16.8892L11.7765 19.6787L18.6691 12.1746C19.2273 11.5538 20.1292 11.5538 20.6875 12.1746L25.4545 17.408",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                            (0, s.jsx)("circle", {
                                cx: "8.07066",
                                cy: "8.07213",
                                r: "2.43971",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.05",
                            }),
                        ],
                    }),
                H = () =>
                    (0, s.jsxs)("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, s.jsx)("rect", {
                                x: "3.50029",
                                y: "3.49883",
                                width: "8.4",
                                height: "8.4",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.4",
                            }),
                            (0, s.jsx)("rect", {
                                x: "16.1004",
                                y: "3.49883",
                                width: "8.4",
                                height: "8.4",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.4",
                            }),
                            (0, s.jsx)("rect", {
                                x: "3.50029",
                                y: "16.0984",
                                width: "8.4",
                                height: "8.4",
                                stroke: "#D8A2A9",
                                strokeWidth: "1.4",
                            }),
                            (0, s.jsx)("rect", {
                                x: "15.4004",
                                y: "15.3984",
                                width: "2.8",
                                height: "2.8",
                                fill: "#D8A2A9",
                            }),
                            (0, s.jsx)("rect", {
                                x: "15.4004",
                                y: "22.3984",
                                width: "2.8",
                                height: "2.8",
                                fill: "#D8A2A9",
                            }),
                            (0, s.jsx)("rect", {
                                x: "22.4004",
                                y: "15.3984",
                                width: "2.8",
                                height: "2.8",
                                fill: "#D8A2A9",
                            }),
                            (0, s.jsx)("rect", {
                                x: "22.4004",
                                y: "22.3984",
                                width: "2.8",
                                height: "2.8",
                                fill: "#D8A2A9",
                            }),
                            (0, s.jsx)("rect", {
                                x: "18.9004",
                                y: "18.8984",
                                width: "2.8",
                                height: "2.8",
                                fill: "#D8A2A9",
                            }),
                        ],
                    });
            var _ = a(10486),
                K = a(54664),
                G = a(64788),
                Y = a(48556);
            function J(e) {
                let { id: t } = e,
                    a = {
                        cardId: 0,
                        cardName: "샘플",
                        path: "mytog",
                        userId: "0",
                        backgroundImage: "tuliip",
                        isBackgroundEffect: !0,
                        isScrollEffect: !0,
                        fontFamily: "suit",
                        fontSize: "0.95em",
                        themeId: (0, _.y_)({ id: t }),
                        isSameFont: !1,
                    },
                    D = {
                        cardId: 0,
                        groomFirstName: (0, _.wA)({ id: t }).groomFirstName,
                        groomLastName: (0, _.wA)({ id: t }).groomLastName,
                        groomDadFirstName: (0, _.wA)({ id: t }).groomDadFirstName,
                        groomDadLastName: (0, _.wA)({ id: t }).groomDadLastName,
                        groomMomFirstName: (0, _.wA)({ id: t }).groomMomFirstName,
                        groomMomLastName: (0, _.wA)({ id: t }).groomMomLastName,
                        groomRelation: "아들",
                        groomDadRelation: "아버지",
                        groomMomRelation: "어머니",
                        groomDadRip: !0,
                        groomMomRip: !1,
                        groomNickname: (0, _.wA)({ id: t }).groomNickname,
                        brideFirstName: (0, _.wA)({ id: t }).brideFirstName,
                        brideLastName: (0, _.wA)({ id: t }).brideLastName,
                        brideDadFirstName: (0, _.wA)({ id: t }).brideDadFirstName,
                        brideDadLastName: (0, _.wA)({ id: t }).brideDadLastName,
                        brideMomFirstName: (0, _.wA)({ id: t }).brideMomFirstName,
                        brideMomLastName: (0, _.wA)({ id: t }).brideMomLastName,
                        brideRelation: "딸",
                        brideDadRelation: "아버지",
                        brideMomRelation: "어머니",
                        brideDadRip: !1,
                        brideMomRip: !1,
                        brideNickname: (0, _.wA)({ id: t }).brideNickname,
                        isNicknameUsed: !0,
                        isGroomFirst: !0,
                    },
                    v = (0, n.l)(e => e.themeInfo),
                    A = {
                        cardId: 0,
                        coverMessage: (0, _.Vc)({ id: t }),
                        coverType: t,
                        isColorUsed: (0, _.Iv)({ id: t }),
                        isIntroUsed: !0,
                        introType: (0, _.y1)({ id: t }),
                        textColor: (0, _.hx)({ id: t }),
                        textPosition: "bali" === t ? 80 : -1,
                        imageBrightness: (0, _.Y9)({ id: t }),
                        isIntroOpacity: !0,
                    },
                    L = {
                        cardId: 0,
                        venueName: (0, _.nI)({ id: t }).venueName,
                        venueDetail: (0, _.nI)({ id: t }).venueDetail,
                        address: (0, _.nI)({ id: t }).address,
                        lat: 35.141799,
                        lng: 126.849515,
                        contact: "010-1234-5678",
                    },
                    M = {
                        cardId: 0,
                        bridePhone: "010-1234-5678",
                        groomPhone: "010-5678-1234",
                        brideDadPhone: "010-1234-5678",
                        brideMomPhone: "010-5678-1234",
                        groomDadPhone: "010-1234-5678",
                        groomMomPhone: "010-5678-1234",
                        contactType: "miami" === t ? "two" : ["one", "two", "three", "four"][Math.floor(4 * Math.random())],
                    },
                    E = {
                        cardId: 0,
                        description: "사진을 클릭하시면 전체 화면 보기가 가능합니다",
                        designType: (0, _.Vt)({ id: t }),
                        gridColumn: 3,
                        isBrief: !0,
                        isViewer: !0,
                        isSlider: !0,
                        sliderType: (0, _.TT)({ id: t }),
                    },
                    B = {
                        // ABOUT US 내용 수정
                        cardId: 0,
                        align: "center",
                        title: "저희 커플을 소개합니다",
                        description: "",
                        designType: "vertical",
                        groomContent: "\n최철주 \xb7 서경희의 아들\n1988년 3월 출생\n#ENFJ\n마음이 따뜻한 다정함을 품은 소년 ☺️",
                        brideContent: "\n장 실 \xb7 성명희의 딸\n1993년 11월 출생\n#ISFJ\n음악을 사랑하는 감성 소녀 🎶",
                    },
                    q = [
                        {
                            cardId: 0,
                            fileId: "cover",
                            category: "cover",
                            originFile: "/images/main.jpg"
                                // "seoul" === t || "dubai" === t
                                //     ? "https://hellomybrand.com/wed/images/sample/cover/".concat(t, "-1.jpg")
                                //     : "https://hellomybrand.com/wed/images/sample/cover/".concat(t, ".jpg"),
                        },
                        {
                            cardId: 0,
                            fileId: "seoul" === t || "dubai" === t ? "cover-2" : "none",
                            category: "seoul" === t || "dubai" === t ? "cover-2" : "none",
                            originFile: "seoul" === t || "dubai" === t ? "https://hellomybrand.com/wed/images/sample/cover/".concat(t, "-2.jpg") : "",
                        },
                        {
                            cardId: 0,
                            fileId: "cover",
                            category: "cover",
                            originFile: "preview",
                        },
                        {
                            cardId: 0,
                            fileId: "cover-2",
                            category: "cover-2",
                            originFile: "preview-2",
                        },
                        {
                            cardId: 0,
                            fileId: "about-groom",
                            category: "about-groom",
                            originFile: "/images/child-groom.png",
                            thumbFile: "/images/child-groom.png",
                        },
                        {
                            cardId: 0,
                            fileId: "about-bride",
                            category: "about-bride",
                            originFile: "/images/child-bride.png",
                            thumbFile: "/images/child-bride.png",
                        },
                        {
                            cardId: 0,
                            fileId: "note",
                            category: "invitation-note",
                            originFile: "/images/invite.jpg",
                        },
                        {
                            cardId: 0,
                            fileId: "quote",
                            category: "quote",
                            originFile: "https://hellomybrand.com/wed/images/sample/ending-3.jpg",
                        },
                        {
                            cardId: 0,
                            fileId: "notice-3",
                            category: "notice-3",
                            originFile: "https://hellomybrand.com/wed/images/sample/notice_course_1.png",
                        },
                        {
                            cardId: 0,
                            fileId: "timeline-1",
                            category: "timeline-1",
                            originFile: "https://hellomybrand.com/wed/images/sample/timeline/timline-1.png",
                        },
                        {
                            cardId: 0,
                            fileId: "timeline-2",
                            category: "timeline-2",
                            originFile: "https://hellomybrand.com/wed/images/sample/timeline/timline-2.png",
                        },
                        {
                            cardId: 0,
                            fileId: "timeline-3",
                            category: "timeline-3",
                            originFile: "https://hellomybrand.com/wed/images/sample/timeline/timline-3.png",
                        },
                        {
                            cardId: 0,
                            fileId: "timeline-4",
                            category: "timeline-4",
                            originFile: "https://hellomybrand.com/wed/images/sample/timeline/timline-4.png",
                        },
                        {
                            cardId: 0,
                            fileId: "reception",
                            category: "reception",
                            originFile: "https://hellomybrand.com/wed/images/sample/reception.jpg",
                        },
                    ],
                    U = (0, n.l)(e => e.setCardInfo),
                    T = (0, n.l)(e => e.setThemeInfo),
                    V = (0, n.l)(e => e.setBlockOrder),
                    R = (0, l.i)(e => e.setBgmInfo),
                    Z = (0, c.b)(e => e.setCoverInfo),
                    W = (0, u.T)(e => e.setInvitationNote),
                    O = (0, p.R)(e => e.setGalleryInfo),
                    S = (0, g._)(e => e.setGalleryBucketInfo),
                    z = (0, h.M)(e => e.setGuestbookInfo),
                    H = (0, h.M)(e => e.setGuestbookContent),
                    J = (0, C.e)(e => e.setVenueInfo),
                    X = (0, d.n)(e => e.setCoupleInfo),
                    ee = (0, b.v)(e => e.setRsvpInfo),
                    eb = (0, I.I)(e => e.setWeddingDay),
                    ej = (0, i.V)(e => e.setBucketInfo),
                    ew = (0, m.e)(e => e.setDirectionInfo),
                    eC = (0, m.e)(e => e.setTransportation),
                    eI = (0, r.a)(e => e.setContactInfo),
                    eD = (0, y.T)(e => e.setNoticeInfo),
                    eN = (0, y.T)(e => e.setNoticeContent),
                    ek = (0, x.k)(e => e.setHoneymoonFund),
                    eF = (0, f.X)(e => e.setQuoteInfo),
                    ev = (0, j.u)(e => e.setSpecialLinkOne),
                    eA = (0, w.G)(e => e.setSpecialLinkTwo),
                    eL = (0, K.v)(e => e.setAboutUs),
                    eM = (0, G.q)(e => e.setTimelineInfo),
                    eE = (0, G.q)(e => e.setTimelineContent),
                    eB = (0, Y.z)(e => e.setReception);
                return (
                    (0, N.useEffect)(() => {
                        U(a),
                            T(v),
                            V(Q),
                            R(et),
                            Z(A),
                            W(ea),
                            O(E),
                            S($),
                            z(ei),
                            H(en),
                            J(L),
                            X(D),
                            ee(ed),
                            eb(es),
                            ej(q),
                            ew(eo),
                            eI(M),
                            eC(el),
                            eD(ec),
                            eN(em),
                            eM(eg),
                            eE(ep),
                            ek(er),
                            eF(ey),
                            ev(ex),
                            eA(eu),
                            eL(B),
                            eB(eh);
                    }, []),
                    (0, F.V)(() => {
                        k.ZP.to(document.body, { backgroundColor: v.theme2 });
                    }, [v]),
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", {
                                className: "md:py-12 rounded-3xl",
                                children: (0, s.jsx)(o.Z, {}),
                            }),
                            (0, s.jsx)("div", {
                                className: "md:pb-12 md:rounded-3xl",
                                children: (0, s.jsx)(P, {}),
                            }),
                            (0, s.jsx)("div", {
                                className: "z-30 fixed bottom-6 md:bottom-12 w-80 left-1/2 -translate-x-1/2",
                                children: (0, s.jsx)(ef, {}),
                            }),
                        ],
                    })
                );
            }
            let Q = [
                    { id: "invitation-note", isUsed: !0 },
                    { id: "highlight", isUsed: !0 },
                    { id: "wedding-calendar", isUsed: !0 },
                    { id: "host", isUsed: !0 },
                    { id: "about-us", isUsed: !0 },
                    { id: "timeline", isUsed: !0 },
                    { id: "gallery", isUsed: !0 },
                    { id: "direction", isUsed: !0 },
                    { id: "honeymoon-fund", isUsed: !0 },
                    { id: "video", isUsed: !1 },
                    { id: "guestbook", isUsed: !0 },
                    { id: "notice", isUsed: !0 },
                    { id: "rsvp", isUsed: !0 },
                    { id: "reception", isUsed: !0 },
                    { id: "special-link-1", isUsed: !0 },
                    { id: "special-link-2", isUsed: !0 },
                    { id: "flower-business", isUsed: !0 },
                    { id: "quote", isUsed: !0 },
                ],
                $ = [
                    {
                        cardId: 0,
                        fileId: "1",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-1.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "2",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-2.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "3",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-3.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "4",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-4.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "5",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-5.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "6",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-6.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "7",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-7.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "8",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-8.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "9",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-9.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "10",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-10.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "11",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-11.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "12",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-12.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "13",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-13.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "14",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-14.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "15",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-15.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "16",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-16.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "17",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-17.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "18",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-18.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "19",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-19.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "20",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-20.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "21",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-21.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "22",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-22.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "23",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-23.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "24",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-24.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "25",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-25.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "26",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-26.jpg",
                    },
                    {
                        cardId: 0,
                        fileId: "27",
                        category: "gallery",
                        originFile: "https://hellomybrand.com/wed/images/sample/gallery/gallery-sample-27.jpg",
                    },
                ],
                X = ["1.mp3", "4.mp3", "6.mp3", "10.mp3", "12.mp3", "14.mp3", "15.mp3"],
                ee = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"],
                et = {
                    cardId: 0,
                    isUsed: !0,
                    musicId: X[Math.floor(Math.random() * X.length)],
                    isAutoPlay: !0,
                },
                ea = {
                    cardId: 0,
                    content:
                        '<p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">하나님을 사랑하는 자</span></p><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">곧 그의 뜻대로 부르심을 입은 자들에게는</span></p><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">모든 것이 합력하여 선을 이루느니라</span></p><br /><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">ROMANS 8:28</span></p><br /><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">저희 두 사람이 함께하는 새로운 시작에</span></p><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: #555">귀한 발걸음으로 축복해 주시면 감사하겠습니다.</span></p>',
                    isImageUploaded: !0,
                    isNameDisplayed: !0,
                    decoration: ee[Math.floor(Math.random() * ee.length)],
                },
                es = {
                    // 예식 시간 변경
                    cardId: 0,
                    year: 2025,
                    month: 11,
                    date: 29,
                    day: 6,
                    ampm: "AM",
                    hour: 11,
                    minute: 50,
                    originDateFormat: (0, D.gA)(),
                },
                eo = {
                    cardId: 0,
                    isIcon: !0,
                    mapType: "default",
                    isToolAvailable: !0,
                    isZoomLocked: !0,
                    zoomLevel: 0,
                    isSkyView: !1,
                },
                // 오시는 길 방법 렌더링
                el = [
                    // 자차
                    {
                        id: 0,
                        content:
                            '<p className="gsap-text"><span className="gsap-text">내비게이션 : \'복된교회\' 또는  \'복된장로교회\'검색</span></p><p className="gsap-text"><span className="gsap-text">광주 서구 월암신기길 146-1 복된교회</span></p>',
                        sequence: 0,
                        transportationId: "car",
                    },
                    // 버스
                    // {
                    //     id: 1,
                    //     content:
                    //         '<p className="gsap-text"><strong><span className="gsap-text">172(우리은행종로지점 방면)</span></strong></p><p className="gsap-text"><span className="gsap-text">서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분</span></p><br /><p className="gsap-text"><strong><span className="gsap-text">405(롯데백화점 방면)</span></strong></p><p className="gsap-text"><span className="gsap-text">서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분</span></p><br /><p className="gsap-text"><strong><span className="gsap-text">472(을지로입구 방면)</span></strong></p><p className="gsap-text"><span className="gsap-text">시청역 하차 → 도보 5분</span></p>',
                    //     sequence: 1,
                    //     transportationId: "bus",
                    // },
                    // 지하철
                    {
                        id: 2,
                        content:
                            '<p className="gsap-text"><strong><span className="gsap-text" style="color: rgb(60, 120, 216)">1호선(상무역)</span></strong></p><p className="gsap-text">상무역 2번 출구 → 서광주로 방면 도보 10분</p>',
                        sequence: 2,
                        transportationId: "subway",
                    },
                    // 주차
                    // {
                    //     id: 3,
                    //     content:
                    //         '<p className="gsap-text"><span className="gsap-text">더 플라자 호텔 주차장 : 하객 3시간 무료</span></p><p className="gsap-text"><span className="gsap-text">주차현장 주차 요원 안내를 받아주세요.</span></p>',
                    //     sequence: 3,
                    //     transportationId: "parking",
                    // },
                ],
                ei = {
                    cardId: 0,
                    description: "저희 둘에게 따뜻한 방명록을 남겨주세요",
                    masterPassword: "Ndfis@!1kkqld92211",
                },
                en = [
                    {
                        cardId: 0,
                        content:
                            "하윤아❤️ 결혼을 진심으로 축하한다!\n민호 오빠랑 둘이 지금처럼 행복하게 백년해로 하기를\uD83D\uDE0D \n항상 웃음 가득한 하루하루 보내길 바랄게! \n두 사람의 손길 가득한 청첩장 너무 예쁘다. \n그림 같은 결혼식도 얼마나 예쁠지 벌써 넘 기대됩니당 \uD835\uDC3B\uD835\uDC4E\uD835\uDC5D\uD835\uDC5D\uD835\uDC66 \uD835\uDC4A\uD835\uDC52\uD835\uDC51\uD835\uDC51\uD835\uDC56\uD835\uDC5B\uD835\uDC54\uD83D\uDC97",
                        createdBy: "리나",
                        createdAt: "".concat(new Date().getFullYear(), ".04.24 18:52"),
                        isDeleted: !1,
                        deletePassword: "Ndfis@!1kkqld92211",
                    },
                    {
                        cardId: 0,
                        content:
                            "결혼을 진심으로 축하드립니다\uD83D\uDC95\n사진도 청첩장도 너무 이뻐요! \n항상 서로를 응원하고 아껴주는 모습이 참 이쁜 커플임니둥\uD83E\uDD70 \n행복한 결혼 생활 되길 바래요\uD83E\uDD0D",
                        createdBy: "sooyeon",
                        createdAt: "".concat(new Date().getFullYear(), ".04.23 09:41"),
                        isDeleted: !1,
                        deletePassword: "Ndfis@!1kkqld92211",
                    },
                    {
                        cardId: 0,
                        content:
                            "하윤아 결혼 진심으로 축하해!\n웨딩스냅, 청첩장 모두 너무 예쁘다\uD83D\uDC9A\n둘만의 아름다운 결혼식도 기대하고 있어\n남은 결혼식 준비도 잘 마무리하고!\n행복한 결혼생활 되기를 바래\uD83E\uDEF6",
                        createdBy: "지원",
                        createdAt: "".concat(new Date().getFullYear(), ".04.22 12:21"),
                        isDeleted: !1,
                        deletePassword: "Ndfis@!1kkqld92211",
                    },
                ],
                er = {
                    cardId: 0,
                    title: "마음 전하실 곳",
                    description: "참석이 어려우신 분들을 위해 기재했습니다\n너그러운 마음으로 양해 부탁드립니다",
                    isAccountHidden: !0,
                    isKakaoPay: !1,
                    groomName: "최윤성",
                    groomBank: "농협",
                    groomAccount: "352-1236-9941-13",
                    groomKakaoPay: "",
                    groomDadName: "",
                    groomDadBank: "",
                    groomDadAccount: "",
                    groomDadKakaoPay: "",
                    groomMomName: "서경희",
                    groomMomBank: "농협",
                    groomMomAccount: "601014-52-084522",
                    groomMomKakaoPay: "",
                    brideName: "장누리",
                    brideBank: "우리은행",
                    brideAccount: "1002-058-530572",
                    brideKakaoPay: "",
                    brideDadName: "장실",
                    brideDadBank: "농협",
                    brideDadAccount: "352-0707-0513-73",
                    brideDadKakaoPay: "",
                    brideMomName: "",
                    brideMomBank: "",
                    brideMomAccount: "",
                    brideMomKakaoPay: "",
                    designType: "icon",
                    displayType: "all",
                },
                ed = {
                    cardId: 0,
                    title: "참석 의사",
                    description: "모든 분들을 소중히 모실 수 있도록 전해주세요",
                },
                ec = {
                    cardId: 0,
                    title: "안내",
                    description: "저희 웨딩에 대한 사전 안내를 드립니다",
                    designType: "paging",
                },
                em = [
                    {
                        id: 0,
                        title: "코스 식사 안내",
                        content:
                            '<p className="gsap-text" style="text-align: center">결혼식과 함께 코스 식사 요리가 진행됩니다.</p><br /><p className="gsap-text" style="text-align: center">예식 분위기와 어울리는 요리들이 순차적으로 제공되오니 식과 함께 편안한 마음으로 함께해 주시기 바랍니다.</p>',
                        sequence: 0,
                        contentId: "3",
                    },
                ],
                eg = {
                    cardId: 0,
                    title: "저희 연애의 타임라인입니다",
                    description: "서로에게 참 소중하고 감사한 존재",
                },
                ep = [
                    {
                        id: 0,
                        badge: "16년 7월, 광주",
                        title: "☕️ 운명 같은 첫 인연",
                        content: "우연히 뜻하지 않은 곳에서\n만나 첫눈에 반한 우리",
                        sequence: 0,
                        contentId: "1",
                    },
                    {
                        id: 1,
                        badge: "연애 기간 3,400일",
                        title: " \uD83D\uDC95 행복했던 9년 너머의 날들",
                        content: "항상 대화와 웃음이 머물던\n여러 계절들의 우리",
                        sequence: 1,
                        contentId: "2",
                    },
                    {
                        id: 2,
                        badge: "첫 데이트 장소에서",
                        title: "\uD83D\uDC8D 프로포즈",
                        content: "우연이 겹치면,그것은 운명이라 하죠.\n서로의 세계를 만나\n하나의 사랑이 되었습니다.",
                        sequence: 2,
                        contentId: "3",
                    },
                    {
                        id: 3,
                        badge: "25년 11월 29일, 광주",
                        title: "\uD83D\uDC70‍♀️\uD83E\uDD35 웨딩데이",
                        content: "이제는 둘이 아닌\n하나로 걷기 시작하는 날",
                        sequence: 3,
                        contentId: "4",
                    },
                ],
                eh = {
                    cardId: 0,
                    name: "신랑 최윤성 \xb7 신부 장누리 피로연",
                    time: "9월 20일 토요일 오후 5시 - 7시",
                    address: "서울 종로구 돈화문로11가길 47",
                    venue: "투아워게스트 가든",
                    content:
                        '<p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: rgb(85, 85, 85)">거리가 멀어 예식에 참석하시기 어려운 분들을</span></p><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: rgb(85, 85, 85)"> 위해 혼례에 앞서 피로연 자리를 마련하였습니다.</span></p><br /><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: rgb(85, 85, 85)">귀한 발걸음으로 두 사람의 앞날을 축복하여</span></p><p className="gsap-text" style="text-align: center"><span className="gsap-text" style="color: rgb(85, 85, 85)">주시면 더 큰 기쁨과 격려가 되겠습니다.</span></p>',
                    isConfirmation: !0,
                    isImageUploaded: !0,
                },
                ex = {
                    cardId: 0,
                    header: "OUR LOVE STORY",
                    title: "민호와 하윤이의 러브 스토리",
                    description: "저희의 연애 추억을 확인해 보세요",
                    linkName: "연애 스토리 살펴보기",
                    linkUrl: "https://www.instagram.com/toourguest",
                    backgroundColor: "#F8F8F8",
                    buttonColor: "#333",
                    headerColor: "#4D4D4D",
                    contentColor: "#999",
                },
                eu = {
                    cardId: 0,
                    header: "OUR SPOTS",
                    title: "저희가 좋아하는 맛집 지도",
                    description: "타지에서 오시는 분들께 도움이 되면 좋겠습니다",
                    linkName: "지도 살펴보기",
                    linkUrl: "https://www.google.co.kr/maps/@/data=!4m3!11m2!2sZuDL41S3T-mGaNVgfHP0_A!3e3?entry=ttu",
                    backgroundColor: "#333",
                    buttonColor: "#f9cbaa",
                    headerColor: "#f9cbaa",
                    contentColor: "#CCC",
                },
                ey = {
                    cardId: 0,
                    content:
                        '<p className="gsap-text" className="gsap-text" className="gsap-text" style="text-align: center"><span className="gsap-text" className="gsap-text" className="gsap-text" style="color: #fff">"당신은 내가 더 좋은 사람이고 싶게 만들어요."</span></p><br /><p className="gsap-text" className="gsap-text" className="gsap-text" style="text-align: center"><span className="gsap-text" className="gsap-text" className="gsap-text" style="color: #fff">- 영화 \'이보다 더 좋을 순 없다\' 중</span></p>',
                    isImageUploaded: !0,
                    isGradation: !0,
                },
                ef = () => {
                    let [e, t] = (0, N.useState)(!1);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsxs)("div", {
                                className: "hidden flex items-center justify-between z-30 px-5 w-full h-12 rounded-full bg-white shadow-lg text-tog-444 text-xs text-center opacity-80 relative",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: "w-[30%] z-30",
                                        children: (0, s.jsx)("div", {
                                            onClick: () => t(!0),
                                            children: (0, s.jsx)(q, {
                                                children: "무료 시안 제작",
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "text-tog-ccc",
                                        children: "|",
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "w-[30%] z-30",
                                        children: (0, s.jsx)("a", {
                                            target: "_blank",
                                            href: "https://mkt.shopping.naver.com/link/684139aeb7c8c573b305e778",
                                            children: "스토어 이동",
                                        }),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "text-tog-ccc",
                                        children: "|",
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "w-[30%] z-30",
                                        children: (0, s.jsx)(eb, {}),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(U.Vq, {
                                open: e,
                                onOpenChange: t,
                                children: [
                                    (0, s.jsx)(U.$N, {}),
                                    (0, s.jsx)(U.Be, {}),
                                    (0, s.jsx)(U.cZ, {
                                        className: "max-w-md max-h-[85%] overflow-scroll scrollbar-hide p-0 pt-4",
                                        children: (0, s.jsx)(T, {}),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                eb = () => {
                    let e = (0, L.K0)(e => e.isLoaded),
                        t = (0, L.K0)(e => e.setIsLoaded);
                    return (0, s.jsxs)(v.h_, {
                        open: e,
                        onOpenChange: t,
                        children: [
                            (0, s.jsx)(v.$F, {
                                className: "focus:ring-0 focus:outline-none z-40",
                                children: "테마색 변경",
                            }),
                            (0, s.jsx)(v.AW, {
                                children: (0, s.jsxs)("div", {
                                    className: "grid grid-cols-6 gap-2 justify-items-center",
                                    children: [
                                        (0, s.jsx)(ej, {
                                            themeId: "minyoon",
                                            mainColor: "#C2B0A2",
                                            subColor: "#EDE7E2",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "two",
                                            mainColor: "#D59190",
                                            subColor: "#F1DFDF",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "three",
                                            mainColor: "#D78B76",
                                            subColor: "#F2DED8",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "four",
                                            mainColor: "#DFA56E",
                                            subColor: "#F3E5D6",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "five",
                                            mainColor: "#D7BE75",
                                            subColor: "#F2EBD8",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "six",
                                            mainColor: "#C0C08B",
                                            subColor: "#ECECDE",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "seven",
                                            mainColor: "#BCD192",
                                            subColor: "#E8EBDE",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "eight",
                                            mainColor: "#9DBF8D",
                                            subColor: "#E3EADE",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "ten",
                                            mainColor: "#7BB6A3",
                                            subColor: "#DCE8E4",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "eleven",
                                            mainColor: "#79BABA",
                                            subColor: "#DAE9E9",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "twelve",
                                            mainColor: "#7AA3B8",
                                            subColor: "#DBE4E9",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "thirtheen",
                                            mainColor: "#8091B2",
                                            subColor: "#DCE0E7",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "fourteen",
                                            mainColor: "#8B8AB1",
                                            subColor: "#DFDEE7",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "fifteen",
                                            mainColor: "#9A85AD",
                                            subColor: "#E2DDE6",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "sixteen",
                                            mainColor: "#C2A2C2",
                                            subColor: "#EDE4EA",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "seventeen",
                                            mainColor: "#D2ACBF",
                                            subColor: "#F1E7EA",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "eighteen",
                                            mainColor: "#EBACAD",
                                            subColor: "#F7E6E6",
                                        }),
                                        (0, s.jsx)(ej, {
                                            themeId: "one",
                                            mainColor: "#999999",
                                            subColor: "#EEEEEE",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                ej = e => {
                    let { themeId: t, mainColor: a, subColor: o } = e,
                        l = (0, n.l)(e => e.cardInfo),
                        i = (0, n.l)(e => e.setCardInfo),
                        r = (0, L.K0)(e => e.setIsLoaded),
                        d = e => {
                            i({ ...l, themeId: e }), r(!1);
                        };
                    return (0, s.jsx)("div", {
                        className: (0, A.Z)("rounded-md aspect-square", {
                            "ring-2 ring-tog-666": l.themeId === t,
                            "ring-0": l.themeId !== t,
                        }),
                        onClick: () => d(t),
                        style: {
                            borderBottom: "0.8rem solid ".concat(a),
                            borderTop: "0.8rem solid ".concat(o),
                            borderLeft: "0.8rem solid ".concat(o),
                            borderRight: "0.8rem solid ".concat(a),
                        },
                    });
                };
        },
        11797: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return g;
                },
            });
            var s = a(57437),
                o = a(78729),
                l = a(38334),
                i = a(61994),
                n = a(56401),
                r = a(33957),
                d = a(49891),
                c = a(42343),
                m = a(91308);
            function g() {
                let e = (0, n.l)(e => e.cardInfo),
                    t = (0, n.l)(e => e.blockOrder),
                    a = (0, d.i)(e => e.bgmInfo),
                    g = (0, c.I)(e => e.flowerBusinessInfo);
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: (0, i.Z)({
                            "flex flex-col justify-center h-full max-w-md mx-auto rounded-3xl shadow-xl lg:w-[400px] relative bg-white": !0,
                            "font-pretendard": "pretendard" === e.fontFamily,
                            "font-diphylleia": "diphylleia" === e.fontFamily,
                            "font-gowundodum": "gowundodum" === e.fontFamily,
                            "font-gowunbatang": "gowunbatang" === e.fontFamily,
                            "font-nanumgothic": "nanumgothic" === e.fontFamily,
                            "font-nanummyeongjo": "nanummyeongjo" === e.fontFamily,
                            "font-notosanskr": "notosanskr" === e.fontFamily,
                            "font-notoserifkr": "notoserifkr" === e.fontFamily,
                            "font-changwondangamasac": "changwondangamasac" === e.fontFamily,
                            "font-gabiaheuldot": "gabiaheuldot" === e.fontFamily,
                            "font-gabiaMaeumgyeol": "gabiaMaeumgyeol" === e.fontFamily,
                            "font-gabiaondam": "gabiaondam" === e.fontFamily,
                            "font-ghanachocolate": "ghanachocolate" === e.fontFamily,
                            "font-gmarketsans": "gmarketsans" === e.fontFamily,
                            "font-kcceunyoung": "kcceunyoung" === e.fontFamily,
                            "font-leferipointspecialitalic": "leferipointspecialitalic" === e.fontFamily,
                            "font-leferipointwhiteoblique": "leferipointwhiteoblique" === e.fontFamily,
                            "font-mapoflowerisland": "mapoflowerisland" === e.fontFamily,
                            "font-mapogoldenpier": "mapogoldenpier" === e.fontFamily,
                            "font-maruburi": "maruburi" === e.fontFamily,
                            "font-nanumbarunpen": "nanumbarunpen" === e.fontFamily,
                            "font-nanumsquareneo": "nanumsquareneo" === e.fontFamily,
                            "font-nexonlv1": "nexonlv1" === e.fontFamily,
                            "font-sokchobadabatang": "sokchobadabatang" === e.fontFamily,
                            "font-eulyoo1945": "eulyoo1945" === e.fontFamily,
                            "font-hakgyoansim": "hakgyoansim" === e.fontFamily,
                            "font-suit": "suit" === e.fontFamily,
                            "font-suite": "suite" === e.fontFamily,
                        }),
                        style: { fontSize: e.fontSize },
                        children: [
                            a.isUsed
                                ? (0, s.jsx)("div", {
                                      className: "sticky top-0 z-30",
                                      children: (0, s.jsx)(r.Z, {}),
                                  })
                                : null,
                            (0, l.J)({ blockId: "cover" }).cardBlock,
                            t.map(e => {
                                if (e.isUsed) return (0, l.J)({ blockId: e.id }).cardBlock;
                            }),
                            (0, l.J)({ blockId: "share" }).cardBlock,
                            (0, s.jsx)(o.Z, {}),
                            g.isFloatingButton
                                ? (0, s.jsx)("div", {
                                      className: "sticky bottom-8 z-30 opacity-80",
                                      children: (0, s.jsx)(m.U, {}),
                                  })
                                : null,
                        ],
                    }),
                });
            }
        },
    },
    function (e) {
        e.O(
            0,
            [4705, 922, 3572, 7902, 6137, 2972, 9737, 602, 3897, 4438, 4917, 3145, 7955, 1662, 6885, 3134, 7882, 6066, 1871, 4173, 2028, 8667, 9215, 1077, 8334, 8729, 2971, 2117, 1744],
            function () {
                return e((e.s = 26565));
            }
        ),
            (_N_E = e.O());
    },
]);
