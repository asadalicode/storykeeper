'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [3802],
  {
    3802: (F, L, v) => {
      v.r(L), v.d(L, { startTapClick: () => b });
      var u = v(6499);
      const b = (n) => {
          let i,
            o,
            E,
            d,
            s = 10 * -m,
            r = 0;
          const x = n.getBoolean('animated', !0) && n.getBoolean('rippleEffect', !0),
            p = new WeakMap(),
            D = (e) => {
              (s = (0, u.q)(e)), h(e);
            },
            g = () => {
              clearTimeout(d), (d = void 0), o && (I(!1), (o = void 0));
            },
            w = (e) => {
              o || (void 0 !== i && null !== i.parentElement) || ((i = void 0), R(_(e), e));
            },
            h = (e) => {
              R(void 0, e);
            },
            R = (e, t) => {
              if (e && e === o) return;
              clearTimeout(d), (d = void 0);
              const { x: l, y: a } = (0, u.p)(t);
              if (o) {
                if (p.has(o)) throw new Error('internal error');
                o.classList.contains(f) || S(o, l, a), I(!0);
              }
              if (e) {
                const M = p.get(e);
                M && (clearTimeout(M), p.delete(e));
                const W = T(e) ? 0 : q;
                e.classList.remove(f),
                  (d = setTimeout(() => {
                    S(e, l, a), (d = void 0);
                  }, W));
              }
              o = e;
            },
            S = (e, t, l) => {
              (r = Date.now()), e.classList.add(f);
              const a = x && k(e);
              a && a.addRipple && (C(), (E = a.addRipple(t, l)));
            },
            C = () => {
              void 0 !== E && (E.then((e) => e()), (E = void 0));
            },
            I = (e) => {
              C();
              const t = o;
              if (!t) return;
              const l = A - Date.now() + r;
              if (e && l > 0 && !T(t)) {
                const a = setTimeout(() => {
                  t.classList.remove(f), p.delete(t);
                }, A);
                p.set(t, a);
              } else t.classList.remove(f);
            },
            c = document;
          c.addEventListener('ionScrollStart', (e) => {
            (i = e.target), g();
          }),
            c.addEventListener('ionScrollEnd', () => {
              i = void 0;
            }),
            c.addEventListener('ionGestureCaptured', g),
            c.addEventListener(
              'touchstart',
              (e) => {
                (s = (0, u.q)(e)), w(e);
              },
              !0
            ),
            c.addEventListener('touchcancel', D, !0),
            c.addEventListener('touchend', D, !0),
            c.addEventListener(
              'mousedown',
              (e) => {
                const t = (0, u.q)(e) - m;
                s < t && w(e);
              },
              !0
            ),
            c.addEventListener(
              'mouseup',
              (e) => {
                const t = (0, u.q)(e) - m;
                s < t && h(e);
              },
              !0
            ),
            c.addEventListener(
              'contextmenu',
              (e) => {
                h(e);
              },
              !0
            );
        },
        _ = (n) => {
          if (!n.composedPath) return n.target.closest('.ion-activatable');
          {
            const s = n.composedPath();
            for (let r = 0; r < s.length - 2; r++) {
              const i = s[r];
              if (i.classList && i.classList.contains('ion-activatable')) return i;
            }
          }
        },
        T = (n) => n.classList.contains('ion-activatable-instant'),
        k = (n) => {
          if (n.shadowRoot) {
            const s = n.shadowRoot.querySelector('ion-ripple-effect');
            if (s) return s;
          }
          return n.querySelector('ion-ripple-effect');
        },
        f = 'ion-activated',
        q = 200,
        A = 200,
        m = 2500;
    },
  },
]);
