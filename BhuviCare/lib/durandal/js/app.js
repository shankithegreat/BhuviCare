define(["durandal/system", "durandal/viewEngine", "durandal/composition", "durandal/events", "jquery"], function (e, t, n, i, o) { function l() { return e.defer(function (t) { return 0 == a.length ? void t.resolve() : void e.acquire(a).then(function (n) { for (var i = 0; i < n.length; i++) { var o = n[i]; if (o.install) { var l = s[i]; e.isObject(l) || (l = {}), o.install(l), e.log("Plugin:Installed " + a[i]) } else e.log("Plugin:Loaded " + a[i]) } t.resolve() }).fail(function (t) { e.error("Failed to load plugin(s). Details: " + t.message) }) }).promise() } var r, a = [], s = []; return r = { title: "Application", configurePlugins: function (t, n) { var i = e.keys(t); n = n || "plugins/", -1 === n.indexOf("/", n.length - 1) && (n += "/"); for (var o = 0; o < i.length; o++) { var l = i[o]; a.push(n + l), s.push(t[l]) } }, start: function () { return e.log("Application:Starting"), this.title && (document.title = this.title), e.defer(function (t) { o(function () { l().then(function () { t.resolve(), e.log("Application:Started") }) }) }).promise() }, setRoot: function (i, o, l) { function r() { if (s.model) if (s.model.canActivate) try { var t = s.model.canActivate(); t && t.then ? t.then(function (e) { e && n.compose(a, s) }).fail(function (t) { e.error(t) }) : t && n.compose(a, s) } catch (i) { e.error(i) } else n.compose(a, s); else n.compose(a, s) } var a, s = { activate: !0, transition: o }; a = !l || e.isString(l) ? document.getElementById(l || "applicationHost") : l, e.isString(i) && t.isViewUrl(i) ? s.view = i : s.model = i, e.isString(s.model) ? e.acquire(s.model).then(function (t) { s.model = e.resolveObject(t), r() }).fail(function (t) { e.error("Failed to load root module (" + s.model + "). Details: " + t.message) }) : r() } }, i.includeIn(r), r });