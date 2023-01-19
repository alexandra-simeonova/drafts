!(function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0));
  })([
    function (e, t) {
      Luigi.setConfig({
        navigation: {
          nodes: () => [
            {
              pathSegment: "home",
              label: "Home",
              icon: "home",
              viewUrl: "/sampleapp.html#/home",
              children: [
                {
                  pathSegment: "products",
                  label: "Products",
                  icon: "product",
                  viewUrl: "/sampleapp.html#/products",
                  keepSelectedForChildren: true,
                      children: [{
                          pathSegment: ':id',
                          viewUrl: '/sampleapp.html#/productDetail/:id',
                          context: { id: ':id' }
                      }]
                },
              ],
            },
          ],
        },
        settings: {
          header: { title: "Luigi React App", logo: "/logo192.png" },
          responsiveNavigation: "simpleMobileOnly",
          customTranslationImplementation: myTranslationProvider,
        },
        lifecycleHooks: {
          luigiAfterInit: () => {
            Luigi.i18n().setCurrentLocale(defaultLocale);
          },
        },
        communication: {
          customMessagesListeners: {
            "set-language": (msg) => {
              Luigi.i18n().setCurrentLocale(msg.locale);
            },
          },
        },
      });
    },
  ]);
  
  var defaultLocale = "en-US";
  function myTranslationProvider() {
    var dict = {
      "en-US": { PRODUCTS: "Products", ORDERHISTORY: "Order History" },
    };
    return {
      getTranslation: function (label, interpolation, locale) {
        return (
          dict[locale || Luigi.i18n().getCurrentLocale() || defaultLocale][
            label
          ] || label
        );
      },
    };
  }
  