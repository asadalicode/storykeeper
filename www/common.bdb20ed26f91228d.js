'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [8592],
  {
    4560: (x, u, w) => {
      w.r(u), w.d(u, { startFocusVisible: () => h });
      const l = 'ion-focused',
        v = [
          'Tab',
          'ArrowDown',
          'Space',
          'Escape',
          ' ',
          'Shift',
          'Enter',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'Home',
          'End',
        ],
        h = (a) => {
          let p = [],
            i = !0;
          const r = a ? a.shadowRoot : document,
            m = a || document.body,
            c = (t) => {
              p.forEach((n) => n.classList.remove(l)), t.forEach((n) => n.classList.add(l)), (p = t);
            },
            d = () => {
              (i = !1), c([]);
            },
            S = (t) => {
              (i = v.includes(t.key)), i || c([]);
            },
            s = (t) => {
              if (i && t.composedPath) {
                const n = t.composedPath().filter((g) => !!g.classList && g.classList.contains('ion-focusable'));
                c(n);
              }
            },
            e = () => {
              r.activeElement === m && c([]);
            };
          return (
            r.addEventListener('keydown', S),
            r.addEventListener('focusin', s),
            r.addEventListener('focusout', e),
            r.addEventListener('touchstart', d),
            r.addEventListener('mousedown', d),
            {
              destroy: () => {
                r.removeEventListener('keydown', S),
                  r.removeEventListener('focusin', s),
                  r.removeEventListener('focusout', e),
                  r.removeEventListener('touchstart', d),
                  r.removeEventListener('mousedown', d);
              },
              setFocus: c,
            }
          );
        };
    },
    6223: (x, u, w) => {
      w.d(u, {
        a: () => l,
        b: () => r,
        c: () => f,
        d: () => a,
        e: () => m,
        f: () => i,
        g: () => p,
        h: () => h,
        i: () => v,
      });
      const l =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
        f =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",
        v =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",
        h =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",
        a =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
        p =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
        i =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        r =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        m =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
    },
    3574: (x, u, w) => {
      w.d(u, { l: () => S });
      var l = 'https://js.stripe.com/v3',
        f = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        v =
          'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        i = null,
        m = function (e, o, t) {
          if (null === e) return null;
          var n = e.apply(void 0, o);
          return (
            (function (e, o) {
              !e || !e._registerWrapper || e._registerWrapper({ name: 'stripe-js', version: '1.16.0', startTime: o });
            })(n, t),
            n
          );
        },
        c = Promise.resolve().then(function () {
          return (
            (e = null),
            null !== i ||
              (i = new Promise(function (o, t) {
                if ('undefined' != typeof window)
                  if ((window.Stripe && e && console.warn(v), window.Stripe)) o(window.Stripe);
                  else
                    try {
                      var n = (function () {
                        for (
                          var e = document.querySelectorAll('script[src^="'.concat(l, '"]')), o = 0;
                          o < e.length;
                          o++
                        ) {
                          var t = e[o];
                          if (f.test(t.src)) return t;
                        }
                        return null;
                      })();
                      n && e
                        ? console.warn(v)
                        : n ||
                          (n = (function (e) {
                            var o = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                              t = document.createElement('script');
                            t.src = ''.concat(l).concat(o);
                            var n = document.head || document.body;
                            if (!n)
                              throw new Error(
                                'Expected document.body not to be null. Stripe.js requires a <body> element.'
                              );
                            return n.appendChild(t), t;
                          })(e)),
                        n.addEventListener('load', function () {
                          window.Stripe ? o(window.Stripe) : t(new Error('Stripe.js not available'));
                        }),
                        n.addEventListener('error', function () {
                          t(new Error('Failed to load Stripe.js'));
                        });
                    } catch (g) {
                      return void t(g);
                    }
                else o(null);
              })),
            i
          );
          var e;
        }),
        d = !1;
      c.catch(function (s) {
        d || console.warn(s);
      });
      var S = function () {
        for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
        d = !0;
        var n = Date.now();
        return c.then(function (g) {
          return m(g, o, n);
        });
      };
    },
  },
]);
