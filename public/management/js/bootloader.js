// {
//     "@context": "http://schema.org",
//     "@type": "WebSite",
//     "name": "Glenn Fredly",
//     "url": "https://glennfredly.com",
//     "potentialAction": {
//         "@type": "SearchAction",
//         "target": "https://glennfredly.com/?s={search_term_string}&post_type=product",
//         "query-input": "required name=search_term_string"
//     }
// },
// {
//     "@context": "http://schema.org",
//     "@type": "Organization",
//     "@id": "https://glennfredly.com/#organization",
//     "name": "Glenn Fredly",
//     "url": "https://glennfredly.com",
//     "potentialAction": {
//         "@type": "SearchAction",
//         "target": "https://glennfredly.com/?s={search_term_string}",
//         "query-input": "required name=search_term_string"
//     },
//     "logo": "https://glennfredly.com/wp-content/uploads/2020/05/logo-putih.png",
//     "sameAs": [
//         "https://www.facebook.com/pixeldima",
//         "https://twitter.com/pixeldima",
//         "https://www.instagram.com/pixel_dima/",
//         "https://dribbble.com/pixeldima"
//     ]
// }

window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/glennfredly.com\/wp-includes\/js\/wp-emoji-release.min.js"
    }
};
! function (i, n) {
    var o, s, e;

    function c(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }

    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
            r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e
                .getImageData(0, 0, e.canvas.width, e.canvas.height).data));
        return t.every(function (e, t) {
            return e === r[t]
        })
    }

    function u(e, t, n) {
        switch (t) {
            case "flag":
                return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !
                    1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e,
                        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                        "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
                    );
            case "emoji":
                return !n(e, "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff",
                    "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
        }
        return !1
    }

    function f(e, t, n) {
        var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ?
            new OffscreenCanvas(300, 150) : i.createElement("canvas"),
            a = r.getContext("2d", {
                willReadFrequently: !0
            }),
            o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
        return e.forEach(function (e) {
            o[e] = t(a, e, n)
        }), o
    }

    function t(e) {
        var t = i.createElement("script");
        t.src = e, t.defer = !0, i.head.appendChild(t)
    }
    "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, e = new Promise(function (e) {
        i.addEventListener("DOMContentLoaded", e, {
            once: !0
        })
    }), new Promise(function (t) {
        var n = function () {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date)
                    .valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests)
                    return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas &&
                "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob)
                try {
                    var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(),
                            p.toString()
                        ].join(",") + "));",
                        r = new Blob([e], {
                            type: "text/javascript"
                        }),
                        a = new Worker(URL.createObjectURL(r), {
                            name: "wpTestEmojiSupports"
                        });
                    return void(a.onmessage = function (e) {
                        c(n = e.data), a.terminate(), t(n)
                    })
                } catch (e) {}
            c(n = f(s, u, p))
        }
        t(n)
    }).then(function (e) {
        for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n
            .supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports
                .everythingExceptFlag && n.supports[t]);
        n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n
            .DOMReady = !1, n.readyCallback = function () {
                n.DOMReady = !0
            }
    }).then(function () {
        return e
    }).then(function () {
        var e;
        n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e
            .concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
    }))
}((window, document), window._wpemojiSettings);

var tpj = jQuery;

        var revapi5;

        if (window.RS_MODULES === undefined) window.RS_MODULES = {};
        if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
        RS_MODULES.modules["revslider51"] = {
            init: function () {
                window.revapi5 = window.revapi5 === undefined || window.revapi5 === null || window.revapi5
                    .length === 0 ? document.getElementById("rev_slider_5_1") : window.revapi5;
                if (window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length == 0) {
                    window.revapi5initTry = window.revapi5initTry === undefined ? 0 : window.revapi5initTry + 1;
                    if (window.revapi5initTry < 20) requestAnimationFrame(function () {
                        RS_MODULES.modules["revslider51"].init()
                    });
                    return;
                }
                window.revapi5 = jQuery(window.revapi5);
                if (window.revapi5.revolution == undefined) {
                    revslider_showDoubleJqueryError("rev_slider_5_1");
                    return;
                }
                revapi5.revolutionInit({
                    revapi: "revapi5",
                    sliderType: "hero",
                    sliderLayout: "fullscreen",
                    visibilityLevels: "1240,1024,778,480",
                    gridwidth: "1240,1024,778,480",
                    gridheight: "880,780,975,740",
                    lazyType: "smart",
                    spinner: "spinner2",
                    perspectiveType: "local",
                    editorheight: "880,780,975,740",
                    responsiveLevels: "1240,1024,778,480",
                    fullScreenOffset: "20px",
                    progressBar: {
                        disableProgressBar: true
                    },
                    navigation: {
                        onHoverStop: false
                    },
                    parallax: {
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 1000
                    },
                    sbtimeline: {
                        set: true
                    },
                    viewPort: {
                        global: true,
                        globalDist: "-200px",
                        enable: false,
                        visible_area: "20%"
                    },
                    fallbacks: {
                        allowHTML5AutoPlayOnAndroid: true
                    },
                });

            }
        } // End of RevInitScript

        if (window.RS_MODULES.checkMinimal !== undefined) {
            window.RS_MODULES.checkMinimal();
        };