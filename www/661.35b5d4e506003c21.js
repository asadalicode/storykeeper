'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [661],
  {
    661: (M, f, a) => {
      a.r(f), a.d(f, { ion_icon: () => m });
      var s = a(4767);
      let d;
      const u = (o, t, e, i, n) => (
          (e = 'ios' === (e && c(e)) ? 'ios' : 'md'),
          i && 'ios' === e
            ? (o = c(i))
            : n && 'md' === e
            ? (o = c(n))
            : (!o && t && !g(t) && (o = t), l(o) && (o = c(o))),
          l(o) && '' !== o.trim() && '' === o.replace(/[a-z]|-|\d/gi, '') ? o : null
        ),
        h = (o) => (l(o) && ((o = o.trim()), g(o)) ? o : null),
        g = (o) => o.length > 0 && /(\/|\.)/.test(o),
        l = (o) => 'string' == typeof o,
        c = (o) => o.toLowerCase(),
        v = (o) => {
          if (1 === o.nodeType) {
            if ('script' === o.nodeName.toLowerCase()) return !1;
            for (let t = 0; t < o.attributes.length; t++) {
              const e = o.attributes[t].value;
              if (l(e) && 0 === e.toLowerCase().indexOf('on')) return !1;
            }
            for (let t = 0; t < o.childNodes.length; t++) if (!v(o.childNodes[t])) return !1;
          }
          return !0;
        },
        r = new Map(),
        w = new Map(),
        m = class {
          constructor(o) {
            (0, s.r)(this, o),
              (this.iconName = null),
              (this.isVisible = !1),
              (this.mode = x()),
              (this.lazy = !1),
              (this.sanitize = !0);
          }
          connectedCallback() {
            this.waitUntilVisible(this.el, '50px', () => {
              (this.isVisible = !0), this.loadIcon();
            });
          }
          disconnectedCallback() {
            this.io && (this.io.disconnect(), (this.io = void 0));
          }
          waitUntilVisible(o, t, e) {
            if (this.lazy && 'undefined' != typeof window && window.IntersectionObserver) {
              const i = (this.io = new window.IntersectionObserver(
                (n) => {
                  n[0].isIntersecting && (i.disconnect(), (this.io = void 0), e());
                },
                { rootMargin: t }
              ));
              i.observe(o);
            } else e();
          }
          loadIcon() {
            if (this.isVisible) {
              const t = ((o) => {
                let t = h(o.src);
                return (
                  t ||
                  ((t = u(o.name, o.icon, o.mode, o.ios, o.md)),
                  t
                    ? ((o) => {
                        const t = (() => {
                          if ('undefined' == typeof window) return new Map();
                          if (!d) {
                            const o = window;
                            (o.Ionicons = o.Ionicons || {}), (d = o.Ionicons.map = o.Ionicons.map || new Map());
                          }
                          return d;
                        })().get(o);
                        return t || (0, s.a)(`svg/${o}.svg`);
                      })(t)
                    : o.icon && ((t = h(o.icon)), t || ((t = h(o.icon[o.mode])), t))
                    ? t
                    : null)
                );
              })(this);
              t &&
                (r.has(t)
                  ? (this.svgContent = r.get(t))
                  : ((o, t) => {
                      let e = w.get(o);
                      if (!e) {
                        if ('undefined' == typeof fetch || 'undefined' == typeof document)
                          return r.set(o, ''), Promise.resolve();
                        (e = fetch(o).then((i) => {
                          if (i.ok)
                            return i.text().then((n) => {
                              n &&
                                !1 !== t &&
                                (n = ((o) => {
                                  const t = document.createElement('div');
                                  t.innerHTML = o;
                                  for (let i = t.childNodes.length - 1; i >= 0; i--)
                                    'svg' !== t.childNodes[i].nodeName.toLowerCase() && t.removeChild(t.childNodes[i]);
                                  const e = t.firstElementChild;
                                  if (e && 'svg' === e.nodeName.toLowerCase()) {
                                    const i = e.getAttribute('class') || '';
                                    if ((e.setAttribute('class', (i + ' s-ion-icon').trim()), v(e))) return t.innerHTML;
                                  }
                                  return '';
                                })(n)),
                                r.set(o, n || '');
                            });
                          r.set(o, '');
                        })),
                          w.set(o, e);
                      }
                      return e;
                    })(t, this.sanitize).then(() => (this.svgContent = r.get(t))));
            }
            const o = (this.iconName = u(this.name, this.icon, this.mode, this.ios, this.md));
            !this.ariaLabel && 'true' !== this.ariaHidden && o && (this.ariaLabel = o.replace(/\-/g, ' '));
          }
          render() {
            const { iconName: o } = this,
              t = this.mode || 'md',
              e = this.flipRtl || (o && (o.indexOf('arrow') > -1 || o.indexOf('chevron') > -1) && !1 !== this.flipRtl);
            return (0, s.h)(
              s.H,
              {
                role: 'img',
                class: Object.assign(Object.assign({ [t]: !0 }, L(this.color)), {
                  [`icon-${this.size}`]: !!this.size,
                  'flip-rtl': !!e && 'rtl' === this.el.ownerDocument.dir,
                }),
              },
              (0, s.h)(
                'div',
                this.svgContent ? { class: 'icon-inner', innerHTML: this.svgContent } : { class: 'icon-inner' }
              )
            );
          }
          static get assetsDirs() {
            return ['svg'];
          }
          get el() {
            return (0, s.g)(this);
          }
          static get watchers() {
            return { name: ['loadIcon'], src: ['loadIcon'], icon: ['loadIcon'] };
          }
        },
        x = () => ('undefined' != typeof document && document.documentElement.getAttribute('mode')) || 'md',
        L = (o) => (o ? { 'ion-color': !0, [`ion-color-${o}`]: !0 } : null);
      m.style =
        ':host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}';
    },
  },
]);
