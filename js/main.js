jQuery(document).ready(function ($) {
    // Insurance list universal
    $('.list_and_cta_list_element a').click(function (event) {
        var insuranceName = $(this).attr('id');
        dataLayer.push({
            'event': 'coverage_table_click',
            'coverage_type': insuranceName
        });
    });

    // Facebook
    $('.facebook_shortcode_repeater_element a').click(function (event) {
        var facebookGroup = $(this).attr('id');
        dataLayer.push({
            'event': 'facebook_alum_click',
            'alumni_group': facebookGroup
        });
    });

    // FAQ
    $('.faq_sidebar_element a').click(function (event) {
        var faqString = $(event.target).text();
        dataLayer.push({
            'event': 'faq_sidebar_click',
            'question_asked': faqString
        });
    });

    // State Table
    $('.state_table_element a').click(function (event) {
        var stateName = $(event.target).text();
        dataLayer.push({
            'event': 'state_table_click',
            'state_clicked': stateName
        });
    });

    // Learn Centers Sidebar
    $('.learn_centers_center_container a').click(function (event) {
        let rehabCenterURL = $(this).attr("href");
        let rehabCenterValue;

        if (rehabCenterURL.indexOf("chapters") > -1) {
            rehabCenterValue = "Chapters Capistrano"
        } else if (rehabCenterURL.indexOf("lincoln") > -1) {
            rehabCenterValue = "Lincoln Recovery"
        } else if (rehabCenterURL.indexOf("monarch") > -1) {
            rehabCenterValue = "Monarch Shores"
        } else if (rehabCenterURL.indexOf("mountain") > -1) {
            rehabCenterValue = "Mountain Springs Recovery"
        } else if (rehabCenterURL.indexOf("willow") > -1) {
            rehabCenterValue = "Willow Springs Recovery"
        }

        dataLayer.push({
            'event': 'rehab_center_table',
            'rehab_center': rehabCenterValue
        });
    });

    // Treatment Options
    $('.treatmentOptions a p').click(function (event) {
        let treatmentOptionsValue = $(this).text().replace('—', '');

        console.log("treatment options text clicked:", treatmentOptionsValue)
        dataLayer.push({
            'event': 'your_treatment_options_click',
            'treatment_option': treatmentOptionsValue
        });
    });
});

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Glide = e() }(this, function () { "use strict"; var t = { type: "slider", startAt: 0, perView: 1, focusAt: 0, gap: 10, autoplay: !1, hoverpause: !0, keyboard: !0, bound: !1, swipeThreshold: 80, dragThreshold: 120, perTouch: !1, touchRatio: .5, touchAngle: 45, animationDuration: 400, rewind: !0, rewindDuration: 800, animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)", throttle: 10, direction: "ltr", peek: 0, breakpoints: {}, classes: { direction: { ltr: "glide--ltr", rtl: "glide--rtl" }, slider: "glide--slider", carousel: "glide--carousel", swipeable: "glide--swipeable", dragging: "glide--dragging", cloneSlide: "glide__slide--clone", activeNav: "glide__bullet--active", activeSlide: "glide__slide--active", disabledArrow: "glide__arrow--disabled" } }; function e(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i = function (t, e, n) { return e && r(t.prototype, e), n && r(t, n), t }; function r(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } var o = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }; function s(t) { return parseInt(t) } function u(t) { return "string" == typeof t } function a(t) { var e = void 0 === t ? "undefined" : n(t); return "function" === e || "object" === e && !!t } function c(t) { return "function" == typeof t } function l(t) { return void 0 === t } function f(t) { return t.constructor === Array } function d(t, e, n) { Object.defineProperty(t, e, n) } function h(t, e) { var n = o({}, t, e); return e.hasOwnProperty("classes") && (n.classes = o({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = o({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (n.breakpoints = o({}, t.breakpoints, e.breakpoints)), n } var v = (i(p, [{ key: "on", value: function (t, e) { if (f(t)) for (var n = 0; n < t.length; n++)this.on(t[n], e); this.hop.call(this.events, t) || (this.events[t] = []); var i = this.events[t].push(e) - 1; return { remove: function () { delete this.events[t][i] } } } }, { key: "emit", value: function (t, e) { if (f(t)) for (var n = 0; n < t.length; n++)this.emit(t[n], e); this.hop.call(this.events, t) && this.events[t].forEach(function (t) { t(e || {}) }) } }]), p); function p() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; e(this, p), this.events = t, this.hop = t.hasOwnProperty } var m = (i(g, [{ key: "mount", value: function (t) { var e = 0 < arguments.length && void 0 !== t ? t : {}; return this._e.emit("mount.before"), a(e) && (this._c = function (t, e, n) { var i = {}; for (var r in e) c(e[r]) && (i[r] = e[r](t, i, n)); for (var o in i) c(i[o].mount) && i[o].mount(); return i }(this, e, this._e)), this._e.emit("mount.after"), this } }, { key: "mutate", value: function (t) { var e = 0 < arguments.length && void 0 !== t ? t : []; return f(e) && (this._t = e), this } }, { key: "update", value: function (t) { var e = 0 < arguments.length && void 0 !== t ? t : {}; return this.settings = h(this.settings, e), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this } }, { key: "go", value: function (t) { return this._c.Run.make(t), this } }, { key: "move", value: function (t) { return this._c.Transition.disable(), this._c.Move.make(t), this } }, { key: "destroy", value: function () { return this._e.emit("destroy"), this } }, { key: "play", value: function (t) { var e = 0 < arguments.length && void 0 !== t && t; return e && (this.settings.autoplay = e), this._e.emit("play"), this } }, { key: "pause", value: function () { return this._e.emit("pause"), this } }, { key: "disable", value: function () { return this.disabled = !0, this } }, { key: "enable", value: function () { return this.disabled = !1, this } }, { key: "on", value: function (t, e) { return this._e.on(t, e), this } }, { key: "isType", value: function (t) { return this.settings.type === t } }, { key: "settings", get: function () { return this._o }, set: function (t) { a(t) && (this._o = t) } }, { key: "index", get: function () { return this._i }, set: function (t) { this._i = s(t) } }, { key: "type", get: function () { return this.settings.type } }, { key: "disabled", get: function () { return this._d }, set: function (t) { this._d = !!t } }]), g); function g(n) { var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; e(this, g), this._c = {}, this._t = [], this._e = new v, this.disabled = !1, this.selector = n, this.settings = h(t, i), this.index = this.settings.startAt } function y() { return (new Date).getTime() } function b(t, e, n) { var i = void 0, r = void 0, o = void 0, s = void 0, u = 0; function a() { u = !1 === n.leading ? 0 : y(), i = null, s = t.apply(r, o), i || (r = o = null) } function c() { var c = y(); u || !1 !== n.leading || (u = c); var l = e - (c - u); return r = this, o = arguments, l <= 0 || e < l ? (i && (clearTimeout(i), i = null), u = c, s = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(a, l)), s } return n = n || {}, c.cancel = function () { clearTimeout(i), u = 0, i = r = o = null }, c } var w = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] }; function _(t) { if (t && t.parentNode) { for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n } return [] } function k(t) { return !!(t && t instanceof window.HTMLElement) } var S = (i(H, [{ key: "on", value: function (t, e, n, i) { var r = 3 < arguments.length && void 0 !== i && i; u(t) && (t = [t]); for (var o = 0; o < t.length; o++)this.listeners[t[o]] = n, e.addEventListener(t[o], this.listeners[t[o]], r) } }, { key: "off", value: function (t, e, n) { var i = 2 < arguments.length && void 0 !== n && n; u(t) && (t = [t]); for (var r = 0; r < t.length; r++)e.removeEventListener(t[r], this.listeners[t[r]], i) } }, { key: "destroy", value: function () { delete this.listeners } }]), H); function H() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; e(this, H), this.listeners = t } var T = ["ltr", "rtl"], x = { ">": "<", "<": ">", "=": "=" }; function O(t, e) { return { modify: function (t) { return e.Direction.is("rtl") ? -t : t } } } function A(t, e, n) { var i = [function (t, e) { return { modify: function (n) { return n + e.Gaps.value * t.index } } }, function (t, e) { return { modify: function (t) { return t + e.Clones.grow / 2 } } }, function (t, e) { return { modify: function (n) { if (0 <= t.settings.focusAt) { var i = e.Peek.value; return a(i) ? n - i.before : n - i } return n } } }, function (t, e) { return { modify: function (n) { var i = e.Gaps.value, r = e.Sizes.width, o = t.settings.focusAt, s = e.Sizes.slideWidth; return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o } } }].concat(t._t, [O]); return { mutate: function (r) { for (var o = 0; o < i.length; o++) { var s = i[o]; c(s) && c(s().modify) && (r = s(t, e, n).modify(r)) } return r } } } var M = !1; try { var C = Object.defineProperty({}, "passive", { get: function () { M = !0 } }); window.addEventListener("testPassive", null, C), window.removeEventListener("testPassive", null, C) } catch (i) { } var P = M, L = ["touchstart", "mousedown"], z = ["touchmove", "mousemove"], j = ["touchend", "touchcancel", "mouseup", "mouseleave"], D = ["mousedown", "mousemove", "mouseup", "mouseleave"]; function E(t) { return a(t) ? (e = t, Object.keys(e).sort().reduce(function (t, n) { return t[n] = e[n], t[n], t }, {})) : {}; var e } var R = { Html: function (t, e) { var n = { mount: function () { this.root = t.selector, this.track = this.root.querySelector('[data-glide-el="track"]'), this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (e) { return !e.classList.contains(t.settings.classes.cloneSlide) }) } }; return d(n, "root", { get: function () { return n._r }, set: function (t) { u(t) && (t = document.querySelector(t)), k(t) && (n._r = t) } }), d(n, "track", { get: function () { return n._t }, set: function (t) { k(t) && (n._t = t) } }), d(n, "wrapper", { get: function () { return n.track.children[0] } }), n }, Translate: function (t, e, n) { var i = { set: function (n) { var i = A(t, e).mutate(n); e.Html.wrapper.style.transform = "translate3d(" + -1 * i + "px, 0px, 0px)" }, remove: function () { e.Html.wrapper.style.transform = "" } }; return n.on("move", function (r) { var o = e.Gaps.value, s = e.Sizes.length, u = e.Sizes.slideWidth; return t.isType("carousel") && e.Run.isOffset("<") ? (e.Transition.after(function () { n.emit("translate.jump"), i.set(u * (s - 1)) }), i.set(-u - o * s)) : t.isType("carousel") && e.Run.isOffset(">") ? (e.Transition.after(function () { n.emit("translate.jump"), i.set(0) }), i.set(u * s + o * s)) : i.set(r.movement) }), n.on("destroy", function () { i.remove() }), i }, Transition: function (t, e, n) { var i = !1, r = { compose: function (e) { var n = t.settings; return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc }, set: function (t) { var n = 0 < arguments.length && void 0 !== t ? t : "transform"; e.Html.wrapper.style.transition = this.compose(n) }, remove: function () { e.Html.wrapper.style.transition = "" }, after: function (t) { setTimeout(function () { t() }, this.duration) }, enable: function () { i = !1, this.set() }, disable: function () { i = !0, this.set() } }; return d(r, "duration", { get: function () { var n = t.settings; return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration } }), n.on("move", function () { r.set() }), n.on(["build.before", "resize", "translate.jump"], function () { r.disable() }), n.on("run", function () { r.enable() }), n.on("destroy", function () { r.remove() }), r }, Direction: function (t, e, n) { var i = { mount: function () { this.value = t.settings.direction }, resolve: function (t) { var e = t.slice(0, 1); return this.is("rtl") ? t.split(e).join(x[e]) : t }, is: function (t) { return this.value === t }, addClass: function () { e.Html.root.classList.add(t.settings.classes.direction[this.value]) }, removeClass: function () { e.Html.root.classList.remove(t.settings.classes.direction[this.value]) } }; return d(i, "value", { get: function () { return i._v }, set: function (t) { -1 < T.indexOf(t) && (i._v = t) } }), n.on(["destroy", "update"], function () { i.removeClass() }), n.on("update", function () { i.mount() }), n.on(["build.before", "update"], function () { i.addClass() }), i }, Peek: function (t, e, n) { var i = { mount: function () { this.value = t.settings.peek } }; return d(i, "value", { get: function () { return i._v }, set: function (t) { a(t) ? (t.before = s(t.before), t.after = s(t.after)) : t = s(t), i._v = t } }), d(i, "reductor", { get: function () { var e = i.value, n = t.settings.perView; return a(e) ? e.before / n + e.after / n : 2 * e / n } }), n.on(["resize", "update"], function () { i.mount() }), i }, Sizes: function (t, e, n) { var i = { setupSlides: function () { for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++)n[i].style.width = t }, setupWrapper: function (t) { e.Html.wrapper.style.width = this.wrapperSize + "px" }, remove: function () { for (var t = e.Html.slides, n = 0; n < t.length; n++)t[n].style.width = ""; e.Html.wrapper.style.width = "" } }; return d(i, "length", { get: function () { return e.Html.slides.length } }), d(i, "width", { get: function () { return e.Html.root.offsetWidth } }), d(i, "wrapperSize", { get: function () { return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow } }), d(i, "slideWidth", { get: function () { return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor } }), n.on(["build.before", "resize", "update"], function () { i.setupSlides(), i.setupWrapper() }), n.on("destroy", function () { i.remove() }), i }, Gaps: function (t, e, n) { var i = { apply: function (t) { for (var n = 0, i = t.length; n < i; n++) { var r = t[n].style, o = e.Direction.value; r[w[o][0]] = 0 !== n ? this.value / 2 + "px" : "", n !== t.length - 1 ? r[w[o][1]] = this.value / 2 + "px" : r[w[o][1]] = "" } }, remove: function (t) { for (var e = 0, n = t.length; e < n; e++) { var i = t[e].style; i.marginLeft = "", i.marginRight = "" } } }; return d(i, "value", { get: function () { return s(t.settings.gap) } }), d(i, "grow", { get: function () { return i.value * (e.Sizes.length - 1) } }), d(i, "reductor", { get: function () { var e = t.settings.perView; return i.value * (e - 1) / e } }), n.on(["build.after", "update"], b(function () { i.apply(e.Html.wrapper.children) }, 30)), n.on("destroy", function () { i.remove(e.Html.wrapper.children) }), i }, Move: function (t, e, n) { var i = { mount: function () { this._o = 0 }, make: function (t) { var i = this, r = 0 < arguments.length && void 0 !== t ? t : 0; this.offset = r, n.emit("move", { movement: this.value }), e.Transition.after(function () { n.emit("move.after", { movement: i.value }) }) } }; return d(i, "offset", { get: function () { return i._o }, set: function (t) { i._o = l(t) ? 0 : s(t) } }), d(i, "translate", { get: function () { return e.Sizes.slideWidth * t.index } }), d(i, "value", { get: function () { var t = this.offset, n = this.translate; return e.Direction.is("rtl") ? n + t : n - t } }), n.on(["build.before", "run"], function () { i.make() }), i }, Clones: function (t, e, n) { var i = { mount: function () { this.items = [], t.isType("carousel") && (this.items = this.collect()) }, collect: function (n) { for (var i = 0 < arguments.length && void 0 !== n ? n : [], r = e.Html.slides, o = t.settings, s = o.perView, u = o.classes, a = s + +!!t.settings.peek, c = r.slice(0, a), l = r.slice(-a), f = 0; f < Math.max(1, Math.floor(s / r.length)); f++) { for (var d = 0; d < c.length; d++) { var h = c[d].cloneNode(!0); h.classList.add(u.cloneSlide), i.push(h) } for (var v = 0; v < l.length; v++) { var p = l[v].cloneNode(!0); p.classList.add(u.cloneSlide), i.unshift(p) } } return i }, append: function () { for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), u = t.slice(o, t.length), a = e.Sizes.slideWidth + "px", c = 0; c < u.length; c++)i.appendChild(u[c]); for (var l = 0; l < s.length; l++)i.insertBefore(s[l], r[0]); for (var f = 0; f < t.length; f++)t[f].style.width = a }, remove: function () { for (var t = this.items, n = 0; n < t.length; n++)e.Html.wrapper.removeChild(t[n]) } }; return d(i, "grow", { get: function () { return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length } }), n.on("update", function () { i.remove(), i.mount(), i.append() }), n.on("build.before", function () { t.isType("carousel") && i.append() }), n.on("destroy", function () { i.remove() }), i }, Resize: function (t, e, n) { var i = new S, r = { mount: function () { this.bind() }, bind: function () { i.on("resize", window, b(function () { n.emit("resize") }, t.settings.throttle)) }, unbind: function () { i.off("resize", window) } }; return n.on("destroy", function () { r.unbind(), i.destroy() }), r }, Build: function (t, e, n) { var i = { mount: function () { n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after") }, typeClass: function () { e.Html.root.classList.add(t.settings.classes[t.settings.type]) }, activeClass: function () { var n = t.settings.classes, i = e.Html.slides[t.index]; i && (i.classList.add(n.activeSlide), _(i).forEach(function (t) { t.classList.remove(n.activeSlide) })) }, removeClasses: function () { var n = t.settings.classes; e.Html.root.classList.remove(n[t.settings.type]), e.Html.slides.forEach(function (t) { t.classList.remove(n.activeSlide) }) } }; return n.on(["destroy", "update"], function () { i.removeClasses() }), n.on(["resize", "update"], function () { i.mount() }), n.on("move.after", function () { i.activeClass() }), i }, Run: function (t, e, n) { var i = { mount: function () { this._o = !1 }, make: function (i) { var r = this; t.disabled || (t.disable(), this.move = i, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), e.Transition.after(function () { r.isStart() && n.emit("run.start", r.move), r.isEnd() && n.emit("run.end", r.move), (r.isOffset("<") || r.isOffset(">")) && (r._o = !1, n.emit("run.offset", r.move)), n.emit("run.after", r.move), t.enable() })) }, calculate: function () { var e = this.move, n = this.length, i = e.steps, r = e.direction, o = "number" == typeof s(i) && 0 !== s(i); switch (r) { case ">": ">" === i ? t.index = n : this.isEnd() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = 0) : o ? t.index += Math.min(n - t.index, -s(i)) : t.index++; break; case "<": "<" === i ? t.index = 0 : this.isStart() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = n) : o ? t.index -= Math.min(t.index, s(i)) : t.index--; break; case "=": t.index = i } }, isStart: function () { return 0 === t.index }, isEnd: function () { return t.index === this.length }, isOffset: function (t) { return this._o && this.move.direction === t } }; return d(i, "move", { get: function () { return this._m }, set: function (t) { var e = t.substr(1); this._m = { direction: t.substr(0, 1), steps: e ? s(e) ? s(e) : e : 0 } } }), d(i, "length", { get: function () { var n = t.settings, i = e.Html.slides.length; return t.isType("slider") && "center" !== n.focusAt && n.bound ? i - 1 - (s(n.perView) - 1) + s(n.focusAt) : i - 1 } }), d(i, "offset", { get: function () { return this._o } }), i }, Swipe: function (t, e, n) { var i = new S, r = 0, o = 0, u = 0, a = !1, c = !!P && { passive: !0 }, l = { mount: function () { this.bindSwipeStart() }, start: function (e) { if (!a && !t.disabled) { this.disable(); var i = this.touches(e); r = null, o = s(i.pageX), u = s(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start") } }, move: function (i) { if (!t.disabled) { var a = t.settings, c = a.touchAngle, l = a.touchRatio, f = a.classes, d = this.touches(i), h = s(d.pageX) - o, v = s(d.pageY) - u, p = Math.abs(h << 2), m = Math.abs(v << 2), g = Math.sqrt(p + m), y = Math.sqrt(m); if (!(180 * (r = Math.asin(y / g)) / Math.PI < c)) return !1; i.stopPropagation(), e.Move.make(h * parseFloat(l)), e.Html.root.classList.add(f.dragging), n.emit("swipe.move") } }, end: function (i) { if (!t.disabled) { var u = t.settings, a = this.touches(i), c = this.threshold(i), l = a.pageX - o, f = 180 * r / Math.PI, d = Math.round(l / e.Sizes.slideWidth); this.enable(), c < l && f < u.touchAngle ? (u.perTouch && (d = Math.min(d, s(u.perTouch))), e.Direction.is("rtl") && (d = -d), e.Run.make(e.Direction.resolve("<" + d))) : l < -c && f < u.touchAngle ? (u.perTouch && (d = Math.max(d, -s(u.perTouch))), e.Direction.is("rtl") && (d = -d), e.Run.make(e.Direction.resolve(">" + d))) : e.Move.make(), e.Html.root.classList.remove(u.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end") } }, bindSwipeStart: function () { var n = this, r = t.settings; r.swipeThreshold && i.on(L[0], e.Html.wrapper, function (t) { n.start(t) }, c), r.dragThreshold && i.on(L[1], e.Html.wrapper, function (t) { n.start(t) }, c) }, unbindSwipeStart: function () { i.off(L[0], e.Html.wrapper, c), i.off(L[1], e.Html.wrapper, c) }, bindSwipeMove: function () { var n = this; i.on(z, e.Html.wrapper, b(function (t) { n.move(t) }, t.settings.throttle), c) }, unbindSwipeMove: function () { i.off(z, e.Html.wrapper, c) }, bindSwipeEnd: function () { var t = this; i.on(j, e.Html.wrapper, function (e) { t.end(e) }) }, unbindSwipeEnd: function () { i.off(j, e.Html.wrapper) }, touches: function (t) { return -1 < D.indexOf(t.type) ? t : t.touches[0] || t.changedTouches[0] }, threshold: function (e) { var n = t.settings; return -1 < D.indexOf(e.type) ? n.dragThreshold : n.swipeThreshold }, enable: function () { return a = !1, e.Transition.enable(), this }, disable: function () { return a = !0, e.Transition.disable(), this } }; return n.on("build.after", function () { e.Html.root.classList.add(t.settings.classes.swipeable) }), n.on("destroy", function () { l.unbindSwipeStart(), l.unbindSwipeMove(), l.unbindSwipeEnd(), i.destroy() }), l }, Images: function (t, e, n) { var i = new S, r = { mount: function () { this.bind() }, bind: function () { i.on("dragstart", e.Html.wrapper, this.dragstart) }, unbind: function () { i.off("dragstart", e.Html.wrapper) }, dragstart: function (t) { t.preventDefault() } }; return n.on("destroy", function () { r.unbind(), i.destroy() }), r }, Anchors: function (t, e, n) { var i = new S, r = !1, o = !1, s = { mount: function () { this._a = e.Html.wrapper.querySelectorAll("a"), this.bind() }, bind: function () { i.on("click", e.Html.wrapper, this.click) }, unbind: function () { i.off("click", e.Html.wrapper) }, click: function (t) { o && (t.stopPropagation(), t.preventDefault()) }, detach: function () { if (o = !0, !r) { for (var t = 0; t < this.items.length; t++)this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href"); r = !0 } return this }, attach: function () { if (o = !1, r) { for (var t = 0; t < this.items.length; t++)this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href")); r = !1 } return this } }; return d(s, "items", { get: function () { return s._a } }), n.on("swipe.move", function () { s.detach() }), n.on("swipe.end", function () { e.Transition.after(function () { s.attach() }) }), n.on("destroy", function () { s.attach(), s.unbind(), i.destroy() }), s }, Controls: function (t, e, n) { var i = new S, r = !!P && { passive: !0 }, o = { mount: function () { this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings() }, setActive: function () { for (var t = 0; t < this._n.length; t++)this.addClass(this._n[t].children) }, removeActive: function () { for (var t = 0; t < this._n.length; t++)this.removeClass(this._n[t].children) }, addClass: function (e) { var n = t.settings, i = e[t.index]; i && (i.classList.add(n.classes.activeNav), _(i).forEach(function (t) { t.classList.remove(n.classes.activeNav) })) }, removeClass: function (e) { var n = e[t.index]; n && n.classList.remove(t.settings.classes.activeNav) }, addBindings: function () { for (var t = 0; t < this._c.length; t++)this.bind(this._c[t].children) }, removeBindings: function () { for (var t = 0; t < this._c.length; t++)this.unbind(this._c[t].children) }, bind: function (t) { for (var e = 0; e < t.length; e++)i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r) }, unbind: function (t) { for (var e = 0; e < t.length; e++)i.off(["click", "touchstart"], t[e]) }, click: function (t) { t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir"))) } }; return d(o, "items", { get: function () { return o._c } }), n.on(["mount.after", "move.after"], function () { o.setActive() }), n.on("destroy", function () { o.removeBindings(), o.removeActive(), i.destroy() }), o }, Keyboard: function (t, e, n) { var i = new S, r = { mount: function () { t.settings.keyboard && this.bind() }, bind: function () { i.on("keyup", document, this.press) }, unbind: function () { i.off("keyup", document) }, press: function (t) { 39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<")) } }; return n.on(["destroy", "update"], function () { r.unbind() }), n.on("update", function () { r.mount() }), n.on("destroy", function () { i.destroy() }), r }, Autoplay: function (t, e, n) { var i = new S, r = { mount: function () { this.start(), t.settings.hoverpause && this.bind() }, start: function () { var n = this; t.settings.autoplay && l(this._i) && (this._i = setInterval(function () { n.stop(), e.Run.make(">"), n.start() }, this.time)) }, stop: function () { this._i = clearInterval(this._i) }, bind: function () { var t = this; i.on("mouseover", e.Html.root, function () { t.stop() }), i.on("mouseout", e.Html.root, function () { t.start() }) }, unbind: function () { i.off(["mouseover", "mouseout"], e.Html.root) } }; return d(r, "time", { get: function () { return s(e.Html.slides[t.index].getAttribute("data-glide-autoplay") || t.settings.autoplay) } }), n.on(["destroy", "update"], function () { r.unbind() }), n.on(["run.before", "pause", "destroy", "swipe.start", "update"], function () { r.stop() }), n.on(["run.after", "play", "swipe.end"], function () { r.start() }), n.on("update", function () { r.mount() }), n.on("destroy", function () { i.destroy() }), r }, Breakpoints: function (t, e, n) { var i = new S, r = t.settings, s = E(r.breakpoints), u = o({}, r), a = { match: function (t) { if (void 0 !== window.matchMedia) for (var e in t) if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e]; return u } }; return o(r, a.match(s)), i.on("resize", window, b(function () { t.settings = h(r, a.match(s)) }, t.settings.throttle)), n.on("update", function () { s = E(s), u = o({}, r) }), n.on("destroy", function () { i.off("resize", window) }), a } }; function W() { return e(this, W), function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (W.__proto__ || Object.getPrototypeOf(W)).apply(this, arguments)) } return function (t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(W, m), i(W, [{ key: "mount", value: function (t) { var e = 0 < arguments.length && void 0 !== t ? t : {}; return function t(e, n, i) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, n); if (void 0 === r) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : t(o, n, i) } if ("value" in r) return r.value; var s = r.get; return void 0 !== s ? s.call(i) : void 0 }(W.prototype.__proto__ || Object.getPrototypeOf(W.prototype), "mount", this).call(this, o({}, R, e)) } }]), W });

jQuery(document).ready(function ($) {
    // Adds GTM class to submit button on forms
    $('footer .gform_footer input[type=submit]').addClass('footerContactForm');
    $('footer .gform_footer input[type=submit]').attr('id', 'footerContactForm');

    $('.contact_us_container .gform_footer input[type=submit]').addClass('contactPageFormSubmit');
    $('.contact_us_container .gform_footer input[type=submit]').attr('id', 'contactPageFormSubmit');

    $('.contact_form_shortcode_section .gform_footer input[type=submit]').addClass('contactFormCta');
    $('.contact_form_shortcode_section .gform_footer input[type=submit]').attr('id', 'contactFormCta');

});



// Salesforce unique IDs:
//  google analytics user ID salesforce ID: 00N4T0000062HUZ 
//  gclid salesforce ID: 00N4T0000061o2h

jQuery(document).ready(function ($) {

    // functions

    // Set Cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Get Cookie
    function getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    // get tracking value from URL
    function getParam(p) {
        var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    }

    let gravityFormFooter = $('.gform_footer');


    ////////////////////////////////
    // Google Analytics User ID
    let googleAnalyticsUserID = getCookie('_ga');

    if (googleAnalyticsUserID) {
        // create hidden field here and set its value equal to `googleAnalyticsUserID`
        if (gravityFormFooter.length > 0) {
            gravityFormFooter.append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${googleAnalyticsUserID}" autocomplete="off">`);
        } else {
            // Validates if fieldset HTML tag is on page. If not adds hidden field to bottom of form.
            if ($("fieldset")) {
                $("fieldset").append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${googleAnalyticsUserID}" autocomplete="off">`);
            } else {
                $("form").append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${googleAnalyticsUserID}" autocomplete="off">`);
            }
        }

    }
    console.log("Google Analytics User ID:", googleAnalyticsUserID)


    ////////////////////////////////
    // gclid (google campaign ID for tracking)

    // Validation for gclid in URL - checks URL if it contains 'gclid' or 'GCLD'
    let gclid;
    if (window.location.href.indexOf('gclid=')) {
        gclid = getParam("gclid");
    } else if (window.location.href.indexOf('GCLD=')) {
        gclid = getParam("GCLD");
    }

    // If `gclid` exists, set it's value as a cookie called "gclid"
    if (gclid) {
        var gclsrc = getParam("gclsrc");
        if (!gclsrc || gclsrc.indexOf("aw") !== -1) {
            setCookie("gclid", gclid, 90);
        }
    }

    // Pulls gclid value from cookie
    let gclidCookie = getCookie('gclid');

    if (gclid) {
        console.log("gclid:", gclid)
    } else if (gclidCookie) {
        console.log("gclid:", gclidCookie)
    } else {
        console.log("No gclid present on page.")
    }

    // If `gclidCookie` has a value create a hidden field and set it's value to `gclidCookie`
    if (gclidCookie) {
        if (gravityFormFooter.length > 0) {
            gravityFormFooter.append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${gclidCookie}" autocomplete="off">`);
        } else {
            // Validates if fieldset HTML tag is on page. If not adds hidden field to bottom of form.
            if ($("fieldset")) {
                $("fieldset").append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${gclidCookie}" autocomplete="off">`);
            } else {
                $("form").append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${gclidCookie}" autocomplete="off">`);
            }

        }
    }
});

jQuery(document).ready(function ($) {
    $(function () {
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        $('.invocaNumber').click(function (event) {
            var invocaGoogleAnalyticsClass = $(event.target).attr('id');
            setCookie('shortcode_type', invocaGoogleAnalyticsClass, 7)
        });
    });
});

"use strict";
jQuery(document).ready(function (e) {
  e("#primary-menu > li").addClass("top_level_nav_item"),
    e("#primary-menu .top_level_nav_1 > a").attr("href", "#"),
    e("#primary-menu .top_level_nav_2 > a").attr("href", "#"),
    e("#primary-menu .top_level_nav_3 > a").attr("href", "#"),
    e("#primary-menu .top_level_nav_4 > a").attr("href", "#"),
    e(".top_level_nav_item").click(function () {
      e(".top_level_nav_item").not(e(this)).removeClass("active_nav_item"),
        e(".top_level_nav_item")
          .not(e(this))
          .find(".sub_menu_wrapper")
          .removeClass("showNav"),
        e(".top_level_nav_item")
          .not(e(this))
          .find(".sub-menu")
          .removeClass("showNav"),
        e(this).find(".sub_menu_wrapper").toggleClass("showNav"),
        e(this).toggleClass("active_nav_item"),
        e(this).find(".sub-menu").toggleClass("showNav");
    }),
    e(".top_level_nav_item").hover(function (a) {
      window.matchMedia("(min-width: 1024px)").matches &&
        (e(this).find(".sub_menu_wrapper").addClass("showNav"),
          e(".top_level_nav_item")
            .not(e(this))
            .find(".sub_menu_wrapper")
            .removeClass("showNav"));
    }),
    e(".sub-menu").wrap('<div class="sub_menu_wrapper"></div>');
  var a = e(".sub-menu .sub-menu");
  a.parent().is(".sub_menu_wrapper") && a.unwrap(),
    e(".nav_links_column").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_2").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_3").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_4").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_5").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_6").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_7").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".nav_links_column_8").wrapAll(
      '<div class="nav_link_column_wrapper"></div>'
    ),
    e(".toc").click(function (a) {
      e(".toc li").toggleClass("showTOC"),
        e(".toc img").toggleClass("dropdown_active");
    });
  let n = e(window).width();
  if (n < 768) {
    function t() {
      e(".search_bar_container .search-field").attr("placeholder", "Search...");
    }
    e(".search_bar_magnifying_glass_icon").click(function (a) {
      e(".search_bar_wrapper").toggleClass("show_flex");
    }),
      e(".top_level_nav_5 a").next().text("Insurance"),
      t();
  } else {
    function t() {
      e(".search_bar_container .search-field").attr(
        "placeholder",
        "Search Addiction or Treatment"
      );
    }
    t();
  }
  n > 1024 &&
    (e(".toc li").addClass("showTOC"),
      e(".toc img").addClass("dropdown_active")),
    e(".top_level_nav_item").hover(),
    n > 1024 &&
    (e(".search_bar_container").hover(function (a) {
      e(".desktop_nav_search_subnav_wrapper").addClass("show_flex");
    }),
      e(".desktop_nav_search_subnav_wrapper").mouseleave(function (a) {
        e(".desktop_nav_search_subnav_wrapper").removeClass("show_flex");
      }),
      e("main").hover(function (a) {
        e(".desktop_nav_search_subnav_wrapper").removeClass("show_flex");
      }),
      e(".top_level_nav_item").hover(function (a) {
        e(".desktop_nav_search_subnav_wrapper").removeClass("show_flex");
      })),
    e(document).on("keydown", function (a) {
      "Escape" == a.key &&
        (e(".sub_menu_wrapper").removeClass("showNav"));
    }),
    e("#primary").click(function () {
      e(".sub_menu_wrapper").removeClass("showNav");
    }),
    e("footer").hover(function () {
      e(".sub_menu_wrapper").removeClass("showNav");
    }),
    e("main").hover(function () {
      e(".sub_menu_wrapper").removeClass("showNav");
    });
  let r = e(".search_query_shortcode_button");
  var _;
  r.click(function () {
    e(
      ".search_query_shortcode_content_container ul .search_query_shortcode_element"
    ).toggleClass("showAllQueryResults"),
      r.toggleClass("active"),
      r.hasClass("active") ? r.text("Show Less") : r.text("Show More");
  }),
    setTimeout(function () {
      e("#primary-menu > li").addClass("top_level_nav_item"),
        e("#primary-menu .top_level_nav_1 > a").attr("target", ""),
        e("#primary-menu .top_level_nav_2 > a").attr("target", ""),
        e("#primary-menu .top_level_nav_3 > a").attr("target", ""),
        e("#primary-menu .top_level_nav_4 > a").attr("target", "");
    }, 300),
    (_ = function () {
      for (
        var e = window.location.hostname,
        a = new RegExp(
          "^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?" +
          e +
          ")|(localhost:\\d{4})|(\\/.*))(\\/.*)?$",
          ""
        ),
        n = document.querySelectorAll("a"),
        t = n.length,
        r = 0;
        r < t;
        r++
      ) {
        var _ = n[r],
          o = _.getAttribute("href");
        a.test(o) || _.setAttribute("target", "_blank");
        a.test(o) || _.setAttribute("rel", "nofollow noopener");
      }
    }),
    "loading" != document.readyState
      ? _()
      : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", _)
        : document.attachEvent("onreadystatechange", function () {
          "loading" != document.readyState && _();
        });
});

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }

}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);