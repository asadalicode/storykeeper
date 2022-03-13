'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [2698],
  {
    2698: (ws, re, ae) => {
      function le(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
      }
      function Z(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (s) {
            void 0 === e[s] ? (e[s] = t[s]) : le(t[s]) && le(e[s]) && Object.keys(t[s]).length > 0 && Z(e[s], t[s]);
          });
      }
      ae.r(re), ae.d(re, { Swiper: () => A });
      var T = 'undefined' != typeof document ? document : {},
        oe = {
          body: {},
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: '' },
          querySelector: function () {
            return null;
          },
          querySelectorAll: function () {
            return [];
          },
          getElementById: function () {
            return null;
          },
          createEvent: function () {
            return { initEvent: function () {} };
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return [];
              },
            };
          },
          createElementNS: function () {
            return {};
          },
          importNode: function () {
            return null;
          },
          location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        };
      Z(T, oe);
      var h = 'undefined' != typeof window ? window : {};
      Z(h, {
        document: oe,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return '';
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
      });
      class C {
        constructor(t) {
          const s = this;
          for (let i = 0; i < t.length; i += 1) s[i] = t[i];
          return (s.length = t.length), this;
        }
      }
      function w(e, t) {
        const s = [];
        let i = 0;
        if (e && !t && e instanceof C) return e;
        if (e)
          if ('string' == typeof e) {
            let n, r;
            const a = e.trim();
            if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
              let l = 'div';
              for (
                0 === a.indexOf('<li') && (l = 'ul'),
                  0 === a.indexOf('<tr') && (l = 'tbody'),
                  (0 === a.indexOf('<td') || 0 === a.indexOf('<th')) && (l = 'tr'),
                  0 === a.indexOf('<tbody') && (l = 'table'),
                  0 === a.indexOf('<option') && (l = 'select'),
                  r = T.createElement(l),
                  r.innerHTML = a,
                  i = 0;
                i < r.childNodes.length;
                i += 1
              )
                s.push(r.childNodes[i]);
            } else
              for (
                n =
                  t || '#' !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || T).querySelectorAll(e.trim())
                    : [T.getElementById(e.trim().split('#')[1])],
                  i = 0;
                i < n.length;
                i += 1
              )
                n[i] && s.push(n[i]);
          } else if (e.nodeType || e === h || e === T) s.push(e);
          else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) s.push(e[i]);
        return new C(s);
      }
      function Q(e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      }
      (w.fn = C.prototype), (w.Class = C), (w.Dom7 = C);
      const de = {
        addClass: function me(e) {
          if (void 0 === e) return this;
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let i = 0; i < this.length; i += 1)
              void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[s]);
          return this;
        },
        removeClass: function ge(e) {
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let i = 0; i < this.length; i += 1)
              void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[s]);
          return this;
        },
        hasClass: function ve(e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function we(e) {
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let i = 0; i < this.length; i += 1)
              void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[s]);
          return this;
        },
        attr: function be(e, t) {
          if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else for (const i in e) (this[s][i] = e[i]), this[s].setAttribute(i, e[i]);
          return this;
        },
        removeAttr: function Te(e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function Ee(e, t) {
          let s;
          if (void 0 !== t) {
            for (let i = 0; i < this.length; i += 1)
              (s = this[i]),
                s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                (s.dom7ElementDataStorage[e] = t);
            return this;
          }
          if (((s = this[0]), s))
            return s.dom7ElementDataStorage && e in s.dom7ElementDataStorage
              ? s.dom7ElementDataStorage[e]
              : s.getAttribute(`data-${e}`) || void 0;
        },
        transform: function ye(e) {
          for (let t = 0; t < this.length; t += 1) {
            const s = this[t].style;
            (s.webkitTransform = e), (s.transform = e);
          }
          return this;
        },
        transition: function Se(e) {
          'string' != typeof e && (e = `${e}ms`);
          for (let t = 0; t < this.length; t += 1) {
            const s = this[t].style;
            (s.webkitTransitionDuration = e), (s.transitionDuration = e);
          }
          return this;
        },
        on: function xe(...e) {
          let [t, s, i, n] = e;
          function r(c) {
            const d = c.target;
            if (!d) return;
            const u = c.target.dom7EventData || [];
            if ((u.indexOf(c) < 0 && u.unshift(c), w(d).is(s))) i.apply(d, u);
            else {
              const p = w(d).parents();
              for (let f = 0; f < p.length; f += 1) w(p[f]).is(s) && i.apply(p[f], u);
            }
          }
          function a(c) {
            const d = (c && c.target && c.target.dom7EventData) || [];
            d.indexOf(c) < 0 && d.unshift(c), i.apply(this, d);
          }
          'function' == typeof e[1] && (([t, i, n] = e), (s = void 0)), n || (n = !1);
          const l = t.split(' ');
          let o;
          for (let c = 0; c < this.length; c += 1) {
            const d = this[c];
            if (s)
              for (o = 0; o < l.length; o += 1) {
                const u = l[o];
                d.dom7LiveListeners || (d.dom7LiveListeners = {}),
                  d.dom7LiveListeners[u] || (d.dom7LiveListeners[u] = []),
                  d.dom7LiveListeners[u].push({ listener: i, proxyListener: r }),
                  d.addEventListener(u, r, n);
              }
            else
              for (o = 0; o < l.length; o += 1) {
                const u = l[o];
                d.dom7Listeners || (d.dom7Listeners = {}),
                  d.dom7Listeners[u] || (d.dom7Listeners[u] = []),
                  d.dom7Listeners[u].push({ listener: i, proxyListener: a }),
                  d.addEventListener(u, a, n);
              }
          }
          return this;
        },
        off: function Ce(...e) {
          let [t, s, i, n] = e;
          'function' == typeof e[1] && (([t, i, n] = e), (s = void 0)), n || (n = !1);
          const r = t.split(' ');
          for (let a = 0; a < r.length; a += 1) {
            const l = r[a];
            for (let o = 0; o < this.length; o += 1) {
              const c = this[o];
              let d;
              if (
                (!s && c.dom7Listeners
                  ? (d = c.dom7Listeners[l])
                  : s && c.dom7LiveListeners && (d = c.dom7LiveListeners[l]),
                d && d.length)
              )
                for (let u = d.length - 1; u >= 0; u -= 1) {
                  const p = d[u];
                  (i && p.listener === i) || (i && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === i)
                    ? (c.removeEventListener(l, p.proxyListener, n), d.splice(u, 1))
                    : i || (c.removeEventListener(l, p.proxyListener, n), d.splice(u, 1));
                }
            }
          }
          return this;
        },
        trigger: function $e(...e) {
          const t = e[0].split(' '),
            s = e[1];
          for (let i = 0; i < t.length; i += 1) {
            const n = t[i];
            for (let r = 0; r < this.length; r += 1) {
              const a = this[r];
              let l;
              try {
                l = new h.CustomEvent(n, { detail: s, bubbles: !0, cancelable: !0 });
              } catch (o) {
                (l = T.createEvent('Event')), l.initEvent(n, !0, !0), (l.detail = s);
              }
              (a.dom7EventData = e.filter((o, c) => c > 0)),
                a.dispatchEvent(l),
                (a.dom7EventData = []),
                delete a.dom7EventData;
            }
          }
          return this;
        },
        transitionEnd: function Me(e) {
          const t = ['webkitTransitionEnd', 'transitionend'],
            s = this;
          let i;
          function n(r) {
            if (r.target === this) for (e.call(this, r), i = 0; i < t.length; i += 1) s.off(t[i], n);
          }
          if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], n);
          return this;
        },
        outerWidth: function Pe(e) {
          if (this.length > 0) {
            if (e) {
              const t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue('margin-right')) +
                parseFloat(t.getPropertyValue('margin-left'))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function Le(e) {
          if (this.length > 0) {
            if (e) {
              const t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue('margin-top')) +
                parseFloat(t.getPropertyValue('margin-bottom'))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function ze() {
          if (this.length > 0) {
            const e = this[0],
              t = e.getBoundingClientRect(),
              s = T.body;
            return {
              top: t.top + (e === h ? h.scrollY : e.scrollTop) - (e.clientTop || s.clientTop || 0),
              left: t.left + (e === h ? h.scrollX : e.scrollLeft) - (e.clientLeft || s.clientLeft || 0),
            };
          }
          return null;
        },
        css: function De(e, t) {
          let s;
          if (1 === arguments.length) {
            if ('string' != typeof e) {
              for (s = 0; s < this.length; s += 1) for (let i in e) this[s].style[i] = e[i];
              return this;
            }
            if (this[0]) return h.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && 'string' == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function Ie(e) {
          if (!e) return this;
          for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function Be(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function Ge(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function Ae(e) {
          const t = this[0];
          let s, i;
          if (!t || void 0 === e) return !1;
          if ('string' == typeof e) {
            if (t.matches) return t.matches(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            for (s = w(e), i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
            return !1;
          }
          if (e === T) return t === T;
          if (e === h) return t === h;
          if (e.nodeType || e instanceof C) {
            for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
            return !1;
          }
          return !1;
        },
        index: function Xe() {
          let t,
            e = this[0];
          if (e) {
            for (t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && (t += 1);
            return t;
          }
        },
        eq: function Ye(e) {
          if (void 0 === e) return this;
          const t = this.length;
          let s;
          return e > t - 1 ? new C([]) : e < 0 ? ((s = t + e), new C(s < 0 ? [] : [this[s]])) : new C([this[e]]);
        },
        append: function He(...e) {
          let t;
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let i = 0; i < this.length; i += 1)
              if ('string' == typeof t) {
                const n = T.createElement('div');
                for (n.innerHTML = t; n.firstChild; ) this[i].appendChild(n.firstChild);
              } else if (t instanceof C) for (let n = 0; n < t.length; n += 1) this[i].appendChild(t[n]);
              else this[i].appendChild(t);
          }
          return this;
        },
        prepend: function Ve(e) {
          let t, s;
          for (t = 0; t < this.length; t += 1)
            if ('string' == typeof e) {
              const i = T.createElement('div');
              for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
                this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            } else if (e instanceof C)
              for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function We(e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e)
                ? new C([this[0].nextElementSibling])
                : new C([])
              : new C(this[0].nextElementSibling ? [this[0].nextElementSibling] : [])
            : new C([]);
        },
        nextAll: function Fe(e) {
          const t = [];
          let s = this[0];
          if (!s) return new C([]);
          for (; s.nextElementSibling; ) {
            const i = s.nextElementSibling;
            e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return new C(t);
        },
        prev: function Re(e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && w(t.previousElementSibling).is(e)
                ? new C([t.previousElementSibling])
                : new C([])
              : new C(t.previousElementSibling ? [t.previousElementSibling] : []);
          }
          return new C([]);
        },
        prevAll: function Ne(e) {
          const t = [];
          let s = this[0];
          if (!s) return new C([]);
          for (; s.previousElementSibling; ) {
            const i = s.previousElementSibling;
            e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return new C(t);
        },
        parent: function je(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
          return w(Q(t));
        },
        parents: function qe(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; ) e ? w(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return w(Q(t));
        },
        closest: function Ue(e) {
          let t = this;
          return void 0 === e ? new C([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function Ke(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let n = 0; n < i.length; n += 1) t.push(i[n]);
          }
          return new C(t);
        },
        children: function _e(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].childNodes;
            for (let n = 0; n < i.length; n += 1)
              e ? 1 === i[n].nodeType && w(i[n]).is(e) && t.push(i[n]) : 1 === i[n].nodeType && t.push(i[n]);
          }
          return new C(Q(t));
        },
        filter: function Oe(e) {
          const t = [],
            s = this;
          for (let i = 0; i < s.length; i += 1) e.call(s[i], i, s[i]) && t.push(s[i]);
          return new C(t);
        },
        remove: function Ze() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function Qe(...e) {
          const t = this;
          let s, i;
          for (s = 0; s < e.length; s += 1) {
            const n = w(e[s]);
            for (i = 0; i < n.length; i += 1) (t[t.length] = n[i]), (t.length += 1);
          }
          return t;
        },
        styles: function ke() {
          return this[0] ? h.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(de).forEach((e) => {
        w.fn[e] = w.fn[e] || de[e];
      });
      const g = {
          deleteProps(e) {
            const t = e;
            Object.keys(t).forEach((s) => {
              try {
                t[s] = null;
              } catch (i) {}
              try {
                delete t[s];
              } catch (i) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = 'x') {
            let s, i, n;
            const r = h.getComputedStyle(e, null);
            return (
              h.WebKitCSSMatrix
                ? ((i = r.transform || r.webkitTransform),
                  i.split(',').length > 6 &&
                    (i = i
                      .split(', ')
                      .map((a) => a.replace(',', '.'))
                      .join(', ')),
                  (n = new h.WebKitCSSMatrix('none' === i ? '' : i)))
                : ((n =
                    r.MozTransform ||
                    r.OTransform ||
                    r.MsTransform ||
                    r.msTransform ||
                    r.transform ||
                    r.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
                  (s = n.toString().split(','))),
              'x' === t && (i = h.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
              'y' === t && (i = h.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
              i || 0
            );
          },
          parseUrlQuery(e) {
            const t = {};
            let i,
              n,
              r,
              a,
              s = e || h.location.href;
            if ('string' == typeof s && s.length)
              for (
                s = s.indexOf('?') > -1 ? s.replace(/\S*\?/, '') : '',
                  n = s.split('&').filter((l) => '' !== l),
                  a = n.length,
                  i = 0;
                i < a;
                i += 1
              )
                (r = n[i].replace(/#\S+/g, '').split('=')),
                  (t[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || '');
            return t;
          },
          isObject: (e) => 'object' == typeof e && null !== e && e.constructor && e.constructor === Object,
          extend(...e) {
            const t = Object(e[0]),
              s = ['__proto__', 'constructor', 'prototype'];
            for (let i = 1; i < e.length; i += 1) {
              const n = e[i];
              if (null != n) {
                const r = Object.keys(Object(n)).filter((a) => s.indexOf(a) < 0);
                for (let a = 0, l = r.length; a < l; a += 1) {
                  const o = r[a],
                    c = Object.getOwnPropertyDescriptor(n, o);
                  void 0 !== c &&
                    c.enumerable &&
                    (g.isObject(t[o]) && g.isObject(n[o])
                      ? g.extend(t[o], n[o])
                      : !g.isObject(t[o]) && g.isObject(n[o])
                      ? ((t[o] = {}), g.extend(t[o], n[o]))
                      : (t[o] = n[o]));
                }
              }
            }
            return t;
          },
        },
        y = {
          touch: !!('ontouchstart' in h || (h.DocumentTouch && T instanceof h.DocumentTouch)),
          pointerEvents: !!h.PointerEvent && 'maxTouchPoints' in h.navigator && h.navigator.maxTouchPoints >= 0,
          observer: 'MutationObserver' in h || 'WebkitMutationObserver' in h,
          passiveListener: (function () {
            let s = !1;
            try {
              const i = Object.defineProperty({}, 'passive', {
                get() {
                  s = !0;
                },
              });
              h.addEventListener('testPassiveListener', null, i);
            } catch (i) {}
            return s;
          })(),
          gestures: 'ongesturestart' in h,
        };
      class ce {
        constructor(t = {}) {
          const s = this;
          (s.params = t),
            (s.eventsListeners = {}),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((i) => {
                s.on(i, s.params.on[i]);
              });
        }
        on(t, s, i) {
          const n = this;
          if ('function' != typeof s) return n;
          const r = i ? 'unshift' : 'push';
          return (
            t.split(' ').forEach((a) => {
              n.eventsListeners[a] || (n.eventsListeners[a] = []), n.eventsListeners[a][r](s);
            }),
            n
          );
        }
        once(t, s, i) {
          const n = this;
          if ('function' != typeof s) return n;
          function r(...a) {
            n.off(t, r), r.f7proxy && delete r.f7proxy, s.apply(n, a);
          }
          return (r.f7proxy = s), n.on(t, r, i);
        }
        off(t, s) {
          const i = this;
          return (
            i.eventsListeners &&
              t.split(' ').forEach((n) => {
                void 0 === s
                  ? (i.eventsListeners[n] = [])
                  : i.eventsListeners[n] &&
                    i.eventsListeners[n].length &&
                    i.eventsListeners[n].forEach((r, a) => {
                      (r === s || (r.f7proxy && r.f7proxy === s)) && i.eventsListeners[n].splice(a, 1);
                    });
              }),
            i
          );
        }
        emit(...t) {
          const s = this;
          if (!s.eventsListeners) return s;
          let i, n, r;
          return (
            'string' == typeof t[0] || Array.isArray(t[0])
              ? ((i = t[0]), (n = t.slice(1, t.length)), (r = s))
              : ((i = t[0].events), (n = t[0].data), (r = t[0].context || s)),
            (Array.isArray(i) ? i : i.split(' ')).forEach((l) => {
              if (s.eventsListeners && s.eventsListeners[l]) {
                const o = [];
                s.eventsListeners[l].forEach((c) => {
                  o.push(c);
                }),
                  o.forEach((c) => {
                    c.apply(r, n);
                  });
              }
            }),
            s
          );
        }
        useModulesParams(t) {
          const s = this;
          !s.modules ||
            Object.keys(s.modules).forEach((i) => {
              const n = s.modules[i];
              n.params && g.extend(t, n.params);
            });
        }
        useModules(t = {}) {
          const s = this;
          !s.modules ||
            Object.keys(s.modules).forEach((i) => {
              const n = s.modules[i],
                r = t[i] || {};
              n.instance &&
                Object.keys(n.instance).forEach((a) => {
                  const l = n.instance[a];
                  s[a] = 'function' == typeof l ? l.bind(s) : l;
                }),
                n.on &&
                  s.on &&
                  Object.keys(n.on).forEach((a) => {
                    s.on(a, n.on[a]);
                  }),
                n.create && n.create.bind(s)(r);
            });
        }
        static set components(t) {
          !this.use || this.use(t);
        }
        static installModule(t, ...s) {
          const i = this;
          i.prototype.modules || (i.prototype.modules = {});
          const n = t.name || `${Object.keys(i.prototype.modules).length}_${g.now()}`;
          return (
            (i.prototype.modules[n] = t),
            t.proto &&
              Object.keys(t.proto).forEach((r) => {
                i.prototype[r] = t.proto[r];
              }),
            t.static &&
              Object.keys(t.static).forEach((r) => {
                i[r] = t.static[r];
              }),
            t.install && t.install.apply(i, s),
            i
          );
        }
        static use(t, ...s) {
          const i = this;
          return Array.isArray(t) ? (t.forEach((n) => i.installModule(n)), i) : i.installModule(t, ...s);
        }
      }
      var ot = {
          updateSize: function Je() {
            const e = this;
            let t, s;
            const i = e.$el;
            (t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
              (s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight),
              !((0 === t && e.isHorizontal()) || (0 === s && e.isVertical())) &&
                ((t = t - parseInt(i.css('padding-left'), 10) - parseInt(i.css('padding-right'), 10)),
                (s = s - parseInt(i.css('padding-top'), 10) - parseInt(i.css('padding-bottom'), 10)),
                g.extend(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
          },
          updateSlides: function et() {
            const e = this,
              t = e.params,
              { $wrapperEl: s, size: i, rtlTranslate: n, wrongRTL: r } = e,
              a = e.virtual && t.virtual.enabled,
              l = a ? e.virtual.slides.length : e.slides.length,
              o = s.children(`.${e.params.slideClass}`),
              c = a ? e.virtual.slides.length : o.length;
            let d = [];
            const u = [],
              p = [];
            function f(S) {
              return !t.cssMode || S !== o.length - 1;
            }
            let v = t.slidesOffsetBefore;
            'function' == typeof v && (v = t.slidesOffsetBefore.call(e));
            let m = t.slidesOffsetAfter;
            'function' == typeof m && (m = t.slidesOffsetAfter.call(e));
            const L = e.snapGrid.length,
              E = e.snapGrid.length;
            let D,
              M,
              x = t.spaceBetween,
              b = -v,
              Y = 0,
              B = 0;
            if (void 0 === i) return;
            'string' == typeof x && x.indexOf('%') >= 0 && (x = (parseFloat(x.replace('%', '')) / 100) * i),
              (e.virtualSize = -x),
              o.css(n ? { marginLeft: '', marginTop: '' } : { marginRight: '', marginBottom: '' }),
              t.slidesPerColumn > 1 &&
                ((D =
                  Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                'auto' !== t.slidesPerView &&
                  'row' === t.slidesPerColumnFill &&
                  (D = Math.max(D, t.slidesPerView * t.slidesPerColumn)));
            const z = t.slidesPerColumn,
              G = D / z,
              _ = Math.floor(c / t.slidesPerColumn);
            for (let S = 0; S < c; S += 1) {
              M = 0;
              const P = o.eq(S);
              if (t.slidesPerColumn > 1) {
                let $, I, O;
                if ('row' === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  const H = Math.floor(S / (t.slidesPerGroup * t.slidesPerColumn)),
                    W = S - t.slidesPerColumn * t.slidesPerGroup * H,
                    F =
                      0 === H
                        ? t.slidesPerGroup
                        : Math.min(Math.ceil((c - H * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                  (O = Math.floor(W / F)),
                    (I = W - O * F + H * t.slidesPerGroup),
                    ($ = I + (O * D) / z),
                    P.css({
                      '-webkit-box-ordinal-group': $,
                      '-moz-box-ordinal-group': $,
                      '-ms-flex-order': $,
                      '-webkit-order': $,
                      order: $,
                    });
                } else
                  'column' === t.slidesPerColumnFill
                    ? ((I = Math.floor(S / z)),
                      (O = S - I * z),
                      (I > _ || (I === _ && O === z - 1)) && ((O += 1), O >= z && ((O = 0), (I += 1))))
                    : ((O = Math.floor(S / G)), (I = S - O * G));
                P.css(
                  'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                  0 !== O && t.spaceBetween && `${t.spaceBetween}px`
                );
              }
              if ('none' !== P.css('display')) {
                if ('auto' === t.slidesPerView) {
                  const $ = h.getComputedStyle(P[0], null),
                    I = P[0].style.transform,
                    O = P[0].style.webkitTransform;
                  if (
                    (I && (P[0].style.transform = 'none'), O && (P[0].style.webkitTransform = 'none'), t.roundLengths)
                  )
                    M = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    const H = parseFloat($.getPropertyValue('width')),
                      W = parseFloat($.getPropertyValue('padding-left')),
                      F = parseFloat($.getPropertyValue('padding-right')),
                      R = parseFloat($.getPropertyValue('margin-left')),
                      N = parseFloat($.getPropertyValue('margin-right')),
                      j = $.getPropertyValue('box-sizing');
                    M = j && 'border-box' === j ? H + R + N : H + W + F + R + N;
                  } else {
                    const H = parseFloat($.getPropertyValue('height')),
                      W = parseFloat($.getPropertyValue('padding-top')),
                      F = parseFloat($.getPropertyValue('padding-bottom')),
                      R = parseFloat($.getPropertyValue('margin-top')),
                      N = parseFloat($.getPropertyValue('margin-bottom')),
                      j = $.getPropertyValue('box-sizing');
                    M = j && 'border-box' === j ? H + R + N : H + W + F + R + N;
                  }
                  I && (P[0].style.transform = I),
                    O && (P[0].style.webkitTransform = O),
                    t.roundLengths && (M = Math.floor(M));
                } else
                  (M = (i - (t.slidesPerView - 1) * x) / t.slidesPerView),
                    t.roundLengths && (M = Math.floor(M)),
                    o[S] && (e.isHorizontal() ? (o[S].style.width = `${M}px`) : (o[S].style.height = `${M}px`));
                o[S] && (o[S].swiperSlideSize = M),
                  p.push(M),
                  t.centeredSlides
                    ? ((b = b + M / 2 + Y / 2 + x),
                      0 === Y && 0 !== S && (b = b - i / 2 - x),
                      0 === S && (b = b - i / 2 - x),
                      Math.abs(b) < 0.001 && (b = 0),
                      t.roundLengths && (b = Math.floor(b)),
                      B % t.slidesPerGroup == 0 && d.push(b),
                      u.push(b))
                    : (t.roundLengths && (b = Math.floor(b)),
                      (B - Math.min(e.params.slidesPerGroupSkip, B)) % e.params.slidesPerGroup == 0 && d.push(b),
                      u.push(b),
                      (b = b + M + x)),
                  (e.virtualSize += M + x),
                  (Y = M),
                  (B += 1);
              }
            }
            let V;
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + m),
              n &&
                r &&
                ('slide' === t.effect || 'coverflow' === t.effect) &&
                s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
              t.setWrapperSize &&
                (e.isHorizontal()
                  ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                  : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
              t.slidesPerColumn > 1 &&
                ((e.virtualSize = (M + t.spaceBetween) * D),
                (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                e.isHorizontal()
                  ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                  : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
                t.centeredSlides))
            ) {
              V = [];
              for (let S = 0; S < d.length; S += 1) {
                let P = d[S];
                t.roundLengths && (P = Math.floor(P)), d[S] < e.virtualSize + d[0] && V.push(P);
              }
              d = V;
            }
            if (!t.centeredSlides) {
              V = [];
              for (let S = 0; S < d.length; S += 1) {
                let P = d[S];
                t.roundLengths && (P = Math.floor(P)), d[S] <= e.virtualSize - i && V.push(P);
              }
              (d = V), Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i);
            }
            if (
              (0 === d.length && (d = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? n
                    ? o.filter(f).css({ marginLeft: `${x}px` })
                    : o.filter(f).css({ marginRight: `${x}px` })
                  : o.filter(f).css({ marginBottom: `${x}px` })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              let S = 0;
              p.forEach(($) => {
                S += $ + (t.spaceBetween ? t.spaceBetween : 0);
              }),
                (S -= t.spaceBetween);
              const P = S - i;
              d = d.map(($) => ($ < 0 ? -v : $ > P ? P + m : $));
            }
            if (t.centerInsufficientSlides) {
              let S = 0;
              if (
                (p.forEach((P) => {
                  S += P + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (S -= t.spaceBetween),
                S < i)
              ) {
                const P = (i - S) / 2;
                d.forEach(($, I) => {
                  d[I] = $ - P;
                }),
                  u.forEach(($, I) => {
                    u[I] = $ + P;
                  });
              }
            }
            g.extend(e, { slides: o, snapGrid: d, slidesGrid: u, slidesSizesGrid: p }),
              c !== l && e.emit('slidesLengthChange'),
              d.length !== L && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
              u.length !== E && e.emit('slidesGridLengthChange'),
              (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
          },
          updateAutoHeight: function tt(e) {
            const t = this,
              s = [];
            let n,
              i = 0;
            if (
              ('number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
              'auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            )
              if (t.params.centeredSlides)
                t.visibleSlides.each((r, a) => {
                  s.push(a);
                });
              else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                  const r = t.activeIndex + n;
                  if (r > t.slides.length) break;
                  s.push(t.slides.eq(r)[0]);
                }
            else s.push(t.slides.eq(t.activeIndex)[0]);
            for (n = 0; n < s.length; n += 1)
              if (void 0 !== s[n]) {
                const r = s[n].offsetHeight;
                i = r > i ? r : i;
              }
            i && t.$wrapperEl.css('height', `${i}px`);
          },
          updateSlidesOffset: function st() {
            const e = this,
              t = e.slides;
            for (let s = 0; s < t.length; s += 1)
              t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
          },
          updateSlidesProgress: function it(e = (this && this.translate) || 0) {
            const t = this,
              s = t.params,
              { slides: i, rtlTranslate: n } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            n && (r = e), i.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (let a = 0; a < i.length; a += 1) {
              const l = i[a],
                o =
                  (r + (s.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) /
                  (l.swiperSlideSize + s.spaceBetween);
              if (s.watchSlidesVisibility || (s.centeredSlides && s.autoHeight)) {
                const c = -(r - l.swiperSlideOffset),
                  d = c + t.slidesSizesGrid[a];
                ((c >= 0 && c < t.size - 1) || (d > 1 && d <= t.size) || (c <= 0 && d >= t.size)) &&
                  (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(a), i.eq(a).addClass(s.slideVisibleClass));
              }
              l.progress = n ? -o : o;
            }
            t.visibleSlides = w(t.visibleSlides);
          },
          updateProgress: function nt(e) {
            const t = this;
            if (void 0 === e) {
              const c = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * c) || 0;
            }
            const s = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: n, isBeginning: r, isEnd: a } = t;
            const l = r,
              o = a;
            0 === i ? ((n = 0), (r = !0), (a = !0)) : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
              g.extend(t, { progress: n, isBeginning: r, isEnd: a }),
              (s.watchSlidesProgress || s.watchSlidesVisibility || (s.centeredSlides && s.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !l && t.emit('reachBeginning toEdge'),
              a && !o && t.emit('reachEnd toEdge'),
              ((l && !r) || (o && !a)) && t.emit('fromEdge'),
              t.emit('progress', n);
          },
          updateSlidesClasses: function rt() {
            const e = this,
              { slides: t, params: s, $wrapperEl: i, activeIndex: n, realIndex: r } = e,
              a = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(
              `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
            ),
              (l = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n)),
              l.addClass(s.slideActiveClass),
              s.loop &&
                (l.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`)
                      .addClass(s.slideDuplicateActiveClass)
                  : i
                      .children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`)
                      .addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
            let c = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === c.length && ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
              s.loop &&
                (o.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass),
                c.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${c.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${c.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass));
          },
          updateActiveIndex: function at(e) {
            const t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              { slidesGrid: i, snapGrid: n, params: r, activeIndex: a, realIndex: l, snapIndex: o } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let p = 0; p < i.length; p += 1)
                void 0 !== i[p + 1]
                  ? s >= i[p] && s < i[p + 1] - (i[p + 1] - i[p]) / 2
                    ? (c = p)
                    : s >= i[p] && s < i[p + 1] && (c = p + 1)
                  : s >= i[p] && (c = p);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (n.indexOf(s) >= 0) d = n.indexOf(s);
            else {
              const p = Math.min(r.slidesPerGroupSkip, c);
              d = p + Math.floor((c - p) / r.slidesPerGroup);
            }
            if ((d >= n.length && (d = n.length - 1), c === a))
              return void (d !== o && ((t.snapIndex = d), t.emit('snapIndexChange')));
            const u = parseInt(t.slides.eq(c).attr('data-swiper-slide-index') || c, 10);
            g.extend(t, { snapIndex: d, realIndex: u, previousIndex: a, activeIndex: c }),
              t.emit('activeIndexChange'),
              t.emit('snapIndexChange'),
              l !== u && t.emit('realIndexChange'),
              (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
          },
          updateClickedSlide: function lt(e) {
            const t = this,
              s = t.params,
              i = w(e.target).closest(`.${s.slideClass}`)[0];
            let n = !1;
            if (i) for (let r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (n = !0);
            if (!i || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              (t.clickedIndex =
                t.virtual && t.params.virtual.enabled
                  ? parseInt(w(i).attr('data-swiper-slide-index'), 10)
                  : w(i).index()),
              s.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        ht = {
          getTranslate: function dt(e = this.isHorizontal() ? 'x' : 'y') {
            const { params: s, rtlTranslate: i, translate: n, $wrapperEl: r } = this;
            if (s.virtualTranslate) return i ? -n : n;
            if (s.cssMode) return n;
            let a = g.getTranslate(r[0], e);
            return i && (a = -a), a || 0;
          },
          setTranslate: function ct(e, t) {
            const s = this,
              { rtlTranslate: i, params: n, $wrapperEl: r, wrapperEl: a, progress: l } = s;
            let u,
              o = 0,
              c = 0;
            s.isHorizontal() ? (o = i ? -e : e) : (c = e),
              n.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
              n.cssMode
                ? (a[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -o : -c)
                : n.virtualTranslate || r.transform(`translate3d(${o}px, ${c}px, 0px)`),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? o : c);
            const p = s.maxTranslate() - s.minTranslate();
            (u = 0 === p ? 0 : (e - s.minTranslate()) / p),
              u !== l && s.updateProgress(e),
              s.emit('setTranslate', s.translate, t);
          },
          minTranslate: function ut() {
            return -this.snapGrid[0];
          },
          maxTranslate: function pt() {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function ft(e = 0, t = this.params.speed, s = !0, i = !0, n) {
            const r = this,
              { params: a, wrapperEl: l } = r;
            if (r.animating && a.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
              c = r.maxTranslate();
            let d;
            if (((d = i && e > o ? o : i && e < c ? c : e), r.updateProgress(d), a.cssMode)) {
              const u = r.isHorizontal();
              return (
                0 === t
                  ? (l[u ? 'scrollLeft' : 'scrollTop'] = -d)
                  : l.scrollTo
                  ? l.scrollTo({ [u ? 'left' : 'top']: -d, behavior: 'smooth' })
                  : (l[u ? 'scrollLeft' : 'scrollTop'] = -d),
                !0
              );
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(d),
                  s && (r.emit('beforeTransitionStart', t, n), r.emit('transitionEnd')))
                : (r.setTransition(t),
                  r.setTranslate(d),
                  s && (r.emit('beforeTransitionStart', t, n), r.emit('transitionStart')),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (p) {
                        !r ||
                          r.destroyed ||
                          (p.target === this &&
                            (r.$wrapperEl[0].removeEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
                            r.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            s && r.emit('transitionEnd')));
                      }),
                    r.$wrapperEl[0].addEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onTranslateToWrapperTransitionEnd))),
              !0
            );
          },
        },
        $t = {
          slideTo: function bt(e = 0, t = this.params.speed, s = !0, i) {
            const n = this;
            let r = e;
            r < 0 && (r = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: o,
              previousIndex: c,
              activeIndex: d,
              rtlTranslate: u,
              wrapperEl: p,
            } = n;
            if (n.animating && a.preventInteractionOnTransition) return !1;
            const f = Math.min(n.params.slidesPerGroupSkip, r);
            let v = f + Math.floor((r - f) / n.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1),
              (d || a.initialSlide || 0) === (c || 0) && s && n.emit('beforeSlideChangeStart');
            const m = -l[v];
            if ((n.updateProgress(m), a.normalizeSlideIndex))
              for (let E = 0; E < o.length; E += 1) -Math.floor(100 * m) >= Math.floor(100 * o[E]) && (r = E);
            if (
              n.initialized &&
              r !== d &&
              ((!n.allowSlideNext && m < n.translate && m < n.minTranslate()) ||
                (!n.allowSlidePrev && m > n.translate && m > n.maxTranslate() && (d || 0) !== r))
            )
              return !1;
            let L;
            if (
              ((L = r > d ? 'next' : r < d ? 'prev' : 'reset'), (u && -m === n.translate) || (!u && m === n.translate))
            )
              return (
                n.updateActiveIndex(r),
                a.autoHeight && n.updateAutoHeight(),
                n.updateSlidesClasses(),
                'slide' !== a.effect && n.setTranslate(m),
                'reset' !== L && (n.transitionStart(s, L), n.transitionEnd(s, L)),
                !1
              );
            if (a.cssMode) {
              const E = n.isHorizontal();
              let x = -m;
              return (
                u && (x = p.scrollWidth - p.offsetWidth - x),
                0 === t
                  ? (p[E ? 'scrollLeft' : 'scrollTop'] = x)
                  : p.scrollTo
                  ? p.scrollTo({ [E ? 'left' : 'top']: x, behavior: 'smooth' })
                  : (p[E ? 'scrollLeft' : 'scrollTop'] = x),
                !0
              );
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(m),
                  n.updateActiveIndex(r),
                  n.updateSlidesClasses(),
                  n.emit('beforeTransitionStart', t, i),
                  n.transitionStart(s, L),
                  n.transitionEnd(s, L))
                : (n.setTransition(t),
                  n.setTranslate(m),
                  n.updateActiveIndex(r),
                  n.updateSlidesClasses(),
                  n.emit('beforeTransitionStart', t, i),
                  n.transitionStart(s, L),
                  n.animating ||
                    ((n.animating = !0),
                    n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function (x) {
                        !n ||
                          n.destroyed ||
                          (x.target === this &&
                            (n.$wrapperEl[0].removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                            n.$wrapperEl[0].removeEventListener('webkitTransitionEnd', n.onSlideToWrapperTransitionEnd),
                            (n.onSlideToWrapperTransitionEnd = null),
                            delete n.onSlideToWrapperTransitionEnd,
                            n.transitionEnd(s, L)));
                      }),
                    n.$wrapperEl[0].addEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                    n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onSlideToWrapperTransitionEnd))),
              !0
            );
          },
          slideToLoop: function Tt(e = 0, t = this.params.speed, s = !0, i) {
            const n = this;
            let r = e;
            return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
          },
          slideNext: function Et(e = this.params.speed, t = !0, s) {
            const i = this,
              { params: n, animating: r } = i,
              a = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
            if (n.loop) {
              if (r) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return i.slideTo(i.activeIndex + a, e, t, s);
          },
          slidePrev: function yt(e = this.params.speed, t = !0, s) {
            const i = this,
              { params: n, animating: r, snapGrid: a, slidesGrid: l, rtlTranslate: o } = i;
            if (n.loop) {
              if (r) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(m) {
              return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
            }
            const u = d(o ? i.translate : -i.translate),
              p = a.map((m) => d(m));
            l.map((m) => d(m)), p.indexOf(u);
            let v,
              f = a[p.indexOf(u) - 1];
            return (
              void 0 === f &&
                n.cssMode &&
                a.forEach((m) => {
                  !f && u >= m && (f = m);
                }),
              void 0 !== f && ((v = l.indexOf(f)), v < 0 && (v = i.activeIndex - 1)),
              i.slideTo(v, e, t, s)
            );
          },
          slideReset: function St(e = this.params.speed, t = !0, s) {
            return this.slideTo(this.activeIndex, e, t, s);
          },
          slideToClosest: function xt(e = this.params.speed, t = !0, s, i = 0.5) {
            const n = this;
            let r = n.activeIndex;
            const a = Math.min(n.params.slidesPerGroupSkip, r),
              l = a + Math.floor((r - a) / n.params.slidesPerGroup),
              o = n.rtlTranslate ? n.translate : -n.translate;
            if (o >= n.snapGrid[l]) {
              const c = n.snapGrid[l];
              o - c > (n.snapGrid[l + 1] - c) * i && (r += n.params.slidesPerGroup);
            } else {
              const c = n.snapGrid[l - 1];
              o - c <= (n.snapGrid[l] - c) * i && (r -= n.params.slidesPerGroup);
            }
            return (r = Math.max(r, 0)), (r = Math.min(r, n.slidesGrid.length - 1)), n.slideTo(r, e, t, s);
          },
          slideToClickedSlide: function Ct() {
            const e = this,
              { params: t, $wrapperEl: s } = e,
              i = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let r,
              n = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (r = parseInt(w(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
                t.centeredSlides
                  ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (n = s
                        .children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`)
                        .eq(0)
                        .index()),
                      g.nextTick(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - i
                  ? (e.loopFix(),
                    (n = s
                      .children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`)
                      .eq(0)
                      .index()),
                    g.nextTick(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n);
            } else e.slideTo(n);
          },
        },
        zt = {
          loopCreate: function Mt() {
            const e = this,
              { params: t, $wrapperEl: s } = e;
            s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let i = s.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
              const a = t.slidesPerGroup - (i.length % t.slidesPerGroup);
              if (a !== t.slidesPerGroup) {
                for (let l = 0; l < a; l += 1) {
                  const o = w(T.createElement('div')).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                  s.append(o);
                }
                i = s.children(`.${t.slideClass}`);
              }
            }
            'auto' === t.slidesPerView && !t.loopedSlides && (t.loopedSlides = i.length),
              (e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))),
              (e.loopedSlides += t.loopAdditionalSlides),
              e.loopedSlides > i.length && (e.loopedSlides = i.length);
            const n = [],
              r = [];
            i.each((a, l) => {
              const o = w(l);
              a < e.loopedSlides && r.push(l),
                a < i.length && a >= i.length - e.loopedSlides && n.push(l),
                o.attr('data-swiper-slide-index', a);
            });
            for (let a = 0; a < r.length; a += 1) s.append(w(r[a].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let a = n.length - 1; a >= 0; a -= 1) s.prepend(w(n[a].cloneNode(!0)).addClass(t.slideDuplicateClass));
          },
          loopFix: function Pt() {
            const e = this;
            e.emit('beforeLoopFix');
            const {
              activeIndex: t,
              slides: s,
              loopedSlides: i,
              allowSlidePrev: n,
              allowSlideNext: r,
              snapGrid: a,
              rtlTranslate: l,
            } = e;
            let o;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -a[t] - e.getTranslate();
            t < i
              ? ((o = s.length - 3 * i + t),
                (o += i),
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d))
              : t >= s.length - i &&
                ((o = -s.length + t + i),
                (o += i),
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)),
              (e.allowSlidePrev = n),
              (e.allowSlideNext = r),
              e.emit('loopFix');
          },
          loopDestroy: function Lt() {
            const { $wrapperEl: t, params: s, slides: i } = this;
            t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(),
              i.removeAttr('data-swiper-slide-index');
          },
        },
        It = {
          setGrabCursor: function kt(e) {
            const t = this;
            if (y.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)
              return;
            const s = t.el;
            (s.style.cursor = 'move'),
              (s.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (s.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (s.style.cursor = e ? 'grabbing' : 'grab');
          },
          unsetGrabCursor: function Dt() {
            const e = this;
            y.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e.el.style.cursor = '');
          },
        },
        Yt = {
          appendSlide: function Ot(e) {
            const t = this,
              { $wrapperEl: s, params: i } = t;
            if ((i.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e))
              for (let n = 0; n < e.length; n += 1) e[n] && s.append(e[n]);
            else s.append(e);
            i.loop && t.loopCreate(), (i.observer && y.observer) || t.update();
          },
          prependSlide: function Bt(e) {
            const t = this,
              { params: s, $wrapperEl: i, activeIndex: n } = t;
            s.loop && t.loopDestroy();
            let r = n + 1;
            if ('object' == typeof e && 'length' in e) {
              for (let a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
              r = n + e.length;
            } else i.prepend(e);
            s.loop && t.loopCreate(), (s.observer && y.observer) || t.update(), t.slideTo(r, 0, !1);
          },
          addSlide: function Gt(e, t) {
            const s = this,
              { $wrapperEl: i, params: n, activeIndex: r } = s;
            let a = r;
            n.loop && ((a -= s.loopedSlides), s.loopDestroy(), (s.slides = i.children(`.${n.slideClass}`)));
            const l = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= l) return void s.appendSlide(t);
            let o = a > e ? a + 1 : a;
            const c = [];
            for (let d = l - 1; d >= e; d -= 1) {
              const u = s.slides.eq(d);
              u.remove(), c.unshift(u);
            }
            if ('object' == typeof t && 'length' in t) {
              for (let d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
              o = a > e ? a + t.length : a;
            } else i.append(t);
            for (let d = 0; d < c.length; d += 1) i.append(c[d]);
            n.loop && s.loopCreate(),
              (n.observer && y.observer) || s.update(),
              s.slideTo(n.loop ? o + s.loopedSlides : o, 0, !1);
          },
          removeSlide: function At(e) {
            const t = this,
              { params: s, $wrapperEl: i, activeIndex: n } = t;
            let r = n;
            s.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children(`.${s.slideClass}`)));
            let l,
              a = r;
            if ('object' == typeof e && 'length' in e) {
              for (let o = 0; o < e.length; o += 1)
                (l = e[o]), t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1);
              a = Math.max(a, 0);
            } else (l = e), t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1), (a = Math.max(a, 0));
            s.loop && t.loopCreate(),
              (s.observer && y.observer) || t.update(),
              t.slideTo(s.loop ? a + t.loopedSlides : a, 0, !1);
          },
          removeAllSlides: function Xt() {
            const e = this,
              t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t);
          },
        };
      const k = (function () {
        const t = h.navigator.platform,
          s = h.navigator.userAgent,
          i = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!h.cordova && !h.phonegap),
            phonegap: !(!h.cordova && !h.phonegap),
            electron: !1,
          },
          n = h.screen.width,
          r = h.screen.height,
          a = s.match(/(Android);?[\s\/]+([\d.]+)?/);
        let l = s.match(/(iPad).*OS\s([\d_]+)/);
        const o = s.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !l && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          d = s.indexOf('MSIE ') >= 0 || s.indexOf('Trident/') >= 0,
          u = s.indexOf('Edge/') >= 0,
          p = s.indexOf('Gecko/') >= 0 && s.indexOf('Firefox/') >= 0,
          f = 'Win32' === t,
          v = s.toLowerCase().indexOf('electron') >= 0;
        let m = 'MacIntel' === t;
        return (
          !l &&
            m &&
            y.touch &&
            ((1024 === n && 1366 === r) ||
              (834 === n && 1194 === r) ||
              (834 === n && 1112 === r) ||
              (768 === n && 1024 === r)) &&
            ((l = s.match(/(Version)\/([\d.]+)/)), (m = !1)),
          (i.ie = d),
          (i.edge = u),
          (i.firefox = p),
          a &&
            !f &&
            ((i.os = 'android'),
            (i.osVersion = a[2]),
            (i.android = !0),
            (i.androidChrome = s.toLowerCase().indexOf('chrome') >= 0)),
          (l || c || o) && ((i.os = 'ios'), (i.ios = !0)),
          c && !o && ((i.osVersion = c[2].replace(/_/g, '.')), (i.iphone = !0)),
          l && ((i.osVersion = l[2].replace(/_/g, '.')), (i.ipad = !0)),
          o && ((i.osVersion = o[3] ? o[3].replace(/_/g, '.') : null), (i.ipod = !0)),
          i.ios &&
            i.osVersion &&
            s.indexOf('Version/') >= 0 &&
            '10' === i.osVersion.split('.')[0] &&
            (i.osVersion = s.toLowerCase().split('version/')[1].split(' ')[0]),
          (i.webView =
            !(!(c || l || o) || (!s.match(/.*AppleWebKit(?!.*Safari)/i) && !h.navigator.standalone)) ||
            (h.matchMedia && h.matchMedia('(display-mode: standalone)').matches)),
          (i.webview = i.webView),
          (i.standalone = i.webView),
          (i.desktop = !(i.ios || i.android) || v),
          i.desktop &&
            ((i.electron = v),
            (i.macos = m),
            (i.windows = f),
            i.macos && (i.os = 'macos'),
            i.windows && (i.os = 'windows')),
          (i.pixelRatio = h.devicePixelRatio || 1),
          i
        );
      })();
      function Ht(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: n } = t;
        if (t.animating && i.preventInteractionOnTransition) return;
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = w(r.target);
        if (
          ('wrapper' === i.touchEventsTarget && !a.closest(t.wrapperEl).length) ||
          ((s.isTouchEvent = 'touchstart' === r.type), !s.isTouchEvent && 'which' in r && 3 === r.which) ||
          (!s.isTouchEvent && 'button' in r && r.button > 0) ||
          (s.isTouched && s.isMoved)
        )
          return;
        if (i.noSwiping && a.closest(i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`)[0])
          return void (t.allowClick = !0);
        if (i.swipeHandler && !a.closest(i.swipeHandler)[0]) return;
        (n.currentX = 'touchstart' === r.type ? r.targetTouches[0].pageX : r.pageX),
          (n.currentY = 'touchstart' === r.type ? r.targetTouches[0].pageY : r.pageY);
        const l = n.currentX,
          o = n.currentY,
          d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
        if ((!i.edgeSwipeDetection && !i.iOSEdgeSwipeDetection) || !(l <= d || l >= h.screen.width - d)) {
          if (
            (g.extend(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (n.startX = l),
            (n.startY = o),
            (s.touchStartTime = g.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            i.threshold > 0 && (s.allowThresholdMove = !1),
            'touchstart' !== r.type)
          ) {
            let u = !0;
            a.is(s.formElements) && (u = !1),
              T.activeElement &&
                w(T.activeElement).is(s.formElements) &&
                T.activeElement !== a[0] &&
                T.activeElement.blur();
            const p = u && t.allowTouchMove && i.touchStartPreventDefault;
            (i.touchStartForcePreventDefault || p) && r.preventDefault();
          }
          t.emit('touchStart', r);
        }
      }
      function Vt(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: n, rtlTranslate: r } = t;
        let a = e;
        if ((a.originalEvent && (a = a.originalEvent), !s.isTouched))
          return void (s.startMoving && s.isScrolling && t.emit('touchMoveOpposite', a));
        if (s.isTouchEvent && 'touchmove' !== a.type) return;
        const l = 'touchmove' === a.type && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
          o = 'touchmove' === a.type ? l.pageX : a.pageX,
          c = 'touchmove' === a.type ? l.pageY : a.pageY;
        if (a.preventedByNestedSwiper) return (n.startX = o), void (n.startY = c);
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              s.isTouched &&
              (g.extend(n, { startX: o, startY: c, currentX: o, currentY: c }), (s.touchStartTime = g.now()))
            )
          );
        if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (t.isVertical()) {
            if ((c < n.startY && t.translate <= t.maxTranslate()) || (c > n.startY && t.translate >= t.minTranslate()))
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (o < n.startX && t.translate <= t.maxTranslate()) ||
            (o > n.startX && t.translate >= t.minTranslate())
          )
            return;
        if (s.isTouchEvent && T.activeElement && a.target === T.activeElement && w(a.target).is(s.formElements))
          return (s.isMoved = !0), void (t.allowClick = !1);
        if ((s.allowTouchCallbacks && t.emit('touchMove', a), a.targetTouches && a.targetTouches.length > 1)) return;
        (n.currentX = o), (n.currentY = c);
        const d = n.currentX - n.startX,
          u = n.currentY - n.startY;
        if (t.params.threshold && Math.sqrt(d ** 2 + u ** 2) < t.params.threshold) return;
        if (void 0 === s.isScrolling) {
          let m;
          (t.isHorizontal() && n.currentY === n.startY) || (t.isVertical() && n.currentX === n.startX)
            ? (s.isScrolling = !1)
            : d * d + u * u >= 25 &&
              ((m = (180 * Math.atan2(Math.abs(u), Math.abs(d))) / Math.PI),
              (s.isScrolling = t.isHorizontal() ? m > i.touchAngle : 90 - m > i.touchAngle));
        }
        if (
          (s.isScrolling && t.emit('touchMoveOpposite', a),
          void 0 === s.startMoving && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (t.allowClick = !1),
          !i.cssMode && a.cancelable && a.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && a.stopPropagation(),
          s.isMoved ||
            (i.loop && t.loopFix(),
            (s.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating && t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (s.allowMomentumBounce = !1),
            i.grabCursor && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!0),
            t.emit('sliderFirstMove', a)),
          t.emit('sliderMove', a),
          (s.isMoved = !0);
        let p = t.isHorizontal() ? d : u;
        (n.diff = p),
          (p *= i.touchRatio),
          r && (p = -p),
          (t.swipeDirection = p > 0 ? 'prev' : 'next'),
          (s.currentTranslate = p + s.startTranslate);
        let f = !0,
          v = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (v = 0),
          p > 0 && s.currentTranslate > t.minTranslate()
            ? ((f = !1),
              i.resistance &&
                (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + p) ** v))
            : p < 0 &&
              s.currentTranslate < t.maxTranslate() &&
              ((f = !1),
              i.resistance &&
                (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - p) ** v)),
          f && (a.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            'next' === t.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !t.allowSlidePrev &&
            'prev' === t.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(p) > i.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (n.startX = n.currentX),
              (n.startY = n.currentY),
              (s.currentTranslate = s.startTranslate),
              void (n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            );
        }
        !i.followFinger ||
          i.cssMode ||
          ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          i.freeMode &&
            (0 === s.velocities.length &&
              s.velocities.push({ position: n[t.isHorizontal() ? 'startX' : 'startY'], time: s.touchStartTime }),
            s.velocities.push({ position: n[t.isHorizontal() ? 'currentX' : 'currentY'], time: g.now() })),
          t.updateProgress(s.currentTranslate),
          t.setTranslate(s.currentTranslate));
      }
      function Wt(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: n, rtlTranslate: r, $wrapperEl: a, slidesGrid: l, snapGrid: o } = t;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          s.allowTouchCallbacks && t.emit('touchEnd', c),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return s.isMoved && i.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = g.now(),
          u = d - s.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(c),
            t.emit('tap click', c),
            u < 300 && d - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', c)),
          (s.lastClickTime = g.now()),
          g.nextTick(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate)
        )
          return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
        let p;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (p = i.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate())
            return void t.slideTo(t.slides.length < o.length ? o.length - 1 : t.slides.length - 1);
          if (i.freeModeMomentum) {
            if (s.velocities.length > 1) {
              const z = s.velocities.pop(),
                G = s.velocities.pop(),
                V = z.time - G.time;
              (t.velocity = (z.position - G.position) / V),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                (V > 150 || g.now() - z.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio), (s.velocities.length = 0);
            let E = 1e3 * i.freeModeMomentumRatio,
              b = t.translate + t.velocity * E;
            r && (b = -b);
            let B,
              Y = !1;
            const D = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            let M;
            if (b < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (b + t.maxTranslate() < -D && (b = t.maxTranslate() - D),
                  (B = t.maxTranslate()),
                  (Y = !0),
                  (s.allowMomentumBounce = !0))
                : (b = t.maxTranslate()),
                i.loop && i.centeredSlides && (M = !0);
            else if (b > t.minTranslate())
              i.freeModeMomentumBounce
                ? (b - t.minTranslate() > D && (b = t.minTranslate() + D),
                  (B = t.minTranslate()),
                  (Y = !0),
                  (s.allowMomentumBounce = !0))
                : (b = t.minTranslate()),
                i.loop && i.centeredSlides && (M = !0);
            else if (i.freeModeSticky) {
              let z;
              for (let G = 0; G < o.length; G += 1)
                if (o[G] > -b) {
                  z = G;
                  break;
                }
              (b = Math.abs(o[z] - b) < Math.abs(o[z - 1] - b) || 'next' === t.swipeDirection ? o[z] : o[z - 1]),
                (b = -b);
            }
            if (
              (M &&
                t.once('transitionEnd', () => {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((E = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity)),
                i.freeModeSticky)
              ) {
                const z = Math.abs((r ? -b : b) - t.translate),
                  G = t.slidesSizesGrid[t.activeIndex];
                E = z < G ? i.speed : z < 2 * G ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && Y
              ? (t.updateProgress(B),
                t.setTransition(E),
                t.setTranslate(b),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                a.transitionEnd(() => {
                  !t ||
                    t.destroyed ||
                    !s.allowMomentumBounce ||
                    (t.emit('momentumBounce'),
                    t.setTransition(i.speed),
                    setTimeout(() => {
                      t.setTranslate(B),
                        a.transitionEnd(() => {
                          !t || t.destroyed || t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(b),
                t.setTransition(E),
                t.setTranslate(b),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  a.transitionEnd(() => {
                    !t || t.destroyed || t.transitionEnd();
                  })))
              : t.updateProgress(b),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (i.freeModeSticky) return void t.slideToClosest();
          return void (
            (!i.freeModeMomentum || u >= i.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          );
        }
        let f = 0,
          v = t.slidesSizesGrid[0];
        for (let E = 0; E < l.length; E += E < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const x = E < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[E + x]
            ? p >= l[E] && p < l[E + x] && ((f = E), (v = l[E + x] - l[E]))
            : p >= l[E] && ((f = E), (v = l[l.length - 1] - l[l.length - 2]));
        }
        const m = (p - l[f]) / v,
          L = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection && t.slideTo(m >= i.longSwipesRatio ? f + L : f),
            'prev' === t.swipeDirection && t.slideTo(m > 1 - i.longSwipesRatio ? f + L : f);
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || (c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl)
            ? ('next' === t.swipeDirection && t.slideTo(f + L), 'prev' === t.swipeDirection && t.slideTo(f))
            : t.slideTo(c.target === t.navigation.nextEl ? f + L : f);
        }
      }
      function J() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          e.slideTo(
            ('auto' === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides
              ? e.slides.length - 1
              : e.activeIndex,
            0,
            !1,
            !0
          ),
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function Ft(e) {
        const t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function Rt() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s } = e;
        let i;
        (e.previousTranslate = e.translate),
          (e.translate = e.isHorizontal()
            ? s
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft
            : -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
          i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1);
      }
      let ue = !1;
      function Nt() {}
      var pe = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
      };
      const ee = {
          update: ot,
          translate: ht,
          transition: {
            setTransition: function mt(e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e), s.emit('setTransition', e, t);
            },
            transitionStart: function gt(e = !0, t) {
              const s = this,
                { activeIndex: i, params: n, previousIndex: r } = s;
              if (n.cssMode) return;
              n.autoHeight && s.updateAutoHeight();
              let a = t;
              if ((a || (a = i > r ? 'next' : i < r ? 'prev' : 'reset'), s.emit('transitionStart'), e && i !== r)) {
                if ('reset' === a) return void s.emit('slideResetTransitionStart');
                s.emit('slideChangeTransitionStart'),
                  s.emit('next' === a ? 'slideNextTransitionStart' : 'slidePrevTransitionStart');
              }
            },
            transitionEnd: function vt(e = !0, t) {
              const s = this,
                { activeIndex: i, previousIndex: n, params: r } = s;
              if (((s.animating = !1), r.cssMode)) return;
              s.setTransition(0);
              let a = t;
              if ((a || (a = i > n ? 'next' : i < n ? 'prev' : 'reset'), s.emit('transitionEnd'), e && i !== n)) {
                if ('reset' === a) return void s.emit('slideResetTransitionEnd');
                s.emit('slideChangeTransitionEnd'),
                  s.emit('next' === a ? 'slideNextTransitionEnd' : 'slidePrevTransitionEnd');
              }
            },
          },
          slide: $t,
          loop: zt,
          grabCursor: It,
          manipulation: Yt,
          events: {
            attachEvents: function jt() {
              const e = this,
                { params: t, touchEvents: s, el: i, wrapperEl: n } = e;
              (e.onTouchStart = Ht.bind(e)),
                (e.onTouchMove = Vt.bind(e)),
                (e.onTouchEnd = Wt.bind(e)),
                t.cssMode && (e.onScroll = Rt.bind(e)),
                (e.onClick = Ft.bind(e));
              const r = !!t.nested;
              if (!y.touch && y.pointerEvents)
                i.addEventListener(s.start, e.onTouchStart, !1),
                  T.addEventListener(s.move, e.onTouchMove, r),
                  T.addEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (y.touch) {
                  const a = !('touchstart' !== s.start || !y.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  i.addEventListener(s.start, e.onTouchStart, a),
                    i.addEventListener(s.move, e.onTouchMove, y.passiveListener ? { passive: !1, capture: r } : r),
                    i.addEventListener(s.end, e.onTouchEnd, a),
                    s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, a),
                    ue || (T.addEventListener('touchstart', Nt), (ue = !0));
                }
                ((t.simulateTouch && !k.ios && !k.android) || (t.simulateTouch && !y.touch && k.ios)) &&
                  (i.addEventListener('mousedown', e.onTouchStart, !1),
                  T.addEventListener('mousemove', e.onTouchMove, r),
                  T.addEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && i.addEventListener('click', e.onClick, !0),
                t.cssMode && n.addEventListener('scroll', e.onScroll),
                e.on(
                  t.updateOnWindowResize
                    ? k.ios || k.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate'
                    : 'observerUpdate',
                  J,
                  !0
                );
            },
            detachEvents: function qt() {
              const e = this,
                { params: t, touchEvents: s, el: i, wrapperEl: n } = e,
                r = !!t.nested;
              if (!y.touch && y.pointerEvents)
                i.removeEventListener(s.start, e.onTouchStart, !1),
                  T.removeEventListener(s.move, e.onTouchMove, r),
                  T.removeEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (y.touch) {
                  const a = !('onTouchStart' !== s.start || !y.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  i.removeEventListener(s.start, e.onTouchStart, a),
                    i.removeEventListener(s.move, e.onTouchMove, r),
                    i.removeEventListener(s.end, e.onTouchEnd, a),
                    s.cancel && i.removeEventListener(s.cancel, e.onTouchEnd, a);
                }
                ((t.simulateTouch && !k.ios && !k.android) || (t.simulateTouch && !y.touch && k.ios)) &&
                  (i.removeEventListener('mousedown', e.onTouchStart, !1),
                  T.removeEventListener('mousemove', e.onTouchMove, r),
                  T.removeEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener('click', e.onClick, !0),
                t.cssMode && n.removeEventListener('scroll', e.onScroll),
                e.off(k.ios || k.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', J);
            },
          },
          breakpoints: {
            setBreakpoint: function Kt() {
              const e = this,
                { activeIndex: t, initialized: s, loopedSlides: i = 0, params: n, $el: r } = e,
                a = n.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              const l = e.getBreakpoint(a);
              if (l && e.currentBreakpoint !== l) {
                const o = l in a ? a[l] : void 0;
                o &&
                  ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(
                    (v) => {
                      const m = o[v];
                      void 0 !== m &&
                        (o[v] =
                          'slidesPerView' !== v || ('AUTO' !== m && 'auto' !== m)
                            ? 'slidesPerView' === v
                              ? parseFloat(m)
                              : parseInt(m, 10)
                            : 'auto');
                    }
                  );
                const c = o || e.originalParams,
                  d = n.slidesPerColumn > 1,
                  u = c.slidesPerColumn > 1;
                d && !u
                  ? r.removeClass(`${n.containerModifierClass}multirow ${n.containerModifierClass}multirow-column`)
                  : !d &&
                    u &&
                    (r.addClass(`${n.containerModifierClass}multirow`),
                    'column' === c.slidesPerColumnFill && r.addClass(`${n.containerModifierClass}multirow-column`));
                const p = c.direction && c.direction !== n.direction,
                  f = n.loop && (c.slidesPerView !== n.slidesPerView || p);
                p && s && e.changeDirection(),
                  g.extend(e.params, c),
                  g.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = l),
                  f &&
                    s &&
                    (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                  e.emit('breakpoint', c);
              }
            },
            getBreakpoint: function _t(e) {
              if (!e) return;
              let t = !1;
              const s = Object.keys(e).map((i) => {
                if ('string' == typeof i && 0 === i.indexOf('@')) {
                  const n = parseFloat(i.substr(1));
                  return { value: h.innerHeight * n, point: i };
                }
                return { value: i, point: i };
              });
              s.sort((i, n) => parseInt(i.value, 10) - parseInt(n.value, 10));
              for (let i = 0; i < s.length; i += 1) {
                const { point: n, value: r } = s[i];
                r <= h.innerWidth && (t = n);
              }
              return t || 'max';
            },
          },
          checkOverflow: {
            checkOverflow: function ns() {
              const e = this,
                t = e.params,
                s = e.isLocked,
                i =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              (e.isLocked = t.slidesOffsetBefore && t.slidesOffsetAfter && i ? i <= e.size : 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                s !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
                s && s !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function Qt() {
              const { classNames: t, params: s, rtl: i, $el: n } = this,
                r = [];
              r.push('initialized'),
                r.push(s.direction),
                s.freeMode && r.push('free-mode'),
                s.autoHeight && r.push('autoheight'),
                i && r.push('rtl'),
                s.slidesPerColumn > 1 &&
                  (r.push('multirow'), 'column' === s.slidesPerColumnFill && r.push('multirow-column')),
                k.android && r.push('android'),
                k.ios && r.push('ios'),
                s.cssMode && r.push('css-mode'),
                r.forEach((a) => {
                  t.push(s.containerModifierClass + a);
                }),
                n.addClass(t.join(' '));
            },
            removeClasses: function Jt() {
              const { $el: t, classNames: s } = this;
              t.removeClass(s.join(' '));
            },
          },
          images: {
            loadImage: function ts(e, t, s, i, n, r) {
              let a;
              function l() {
                r && r();
              }
              w(e).parent('picture')[0] || (e.complete && n) || !t
                ? l()
                : ((a = new h.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  s && (a.srcset = s),
                  t && (a.src = t));
            },
            preloadImages: function ss() {
              const e = this;
              function t() {
                null == e ||
                  !e ||
                  e.destroyed ||
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
              }
              e.imagesToLoad = e.$el.find('img');
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute('src'),
                  i.srcset || i.getAttribute('srcset'),
                  i.sizes || i.getAttribute('sizes'),
                  !0,
                  t
                );
              }
            },
          },
        },
        te = {};
      class A extends ce {
        constructor(...t) {
          let s, i;
          1 === t.length && t[0].constructor && t[0].constructor === Object ? (i = t[0]) : ([s, i] = t),
            i || (i = {}),
            (i = g.extend({}, i)),
            s && !i.el && (i.el = s),
            super(i),
            Object.keys(ee).forEach((o) => {
              Object.keys(ee[o]).forEach((c) => {
                A.prototype[c] || (A.prototype[c] = ee[o][c]);
              });
            });
          const n = this;
          void 0 === n.modules && (n.modules = {}),
            Object.keys(n.modules).forEach((o) => {
              const c = n.modules[o];
              if (c.params) {
                const d = Object.keys(c.params)[0],
                  u = c.params[d];
                if ('object' != typeof u || null === u || !(d in i) || !('enabled' in u)) return;
                !0 === i[d] && (i[d] = { enabled: !0 }),
                  'object' == typeof i[d] && !('enabled' in i[d]) && (i[d].enabled = !0),
                  i[d] || (i[d] = { enabled: !1 });
              }
            });
          const r = g.extend({}, pe);
          n.useModulesParams(r),
            (n.params = g.extend({}, r, te, i)),
            (n.originalParams = g.extend({}, n.params)),
            (n.passedParams = g.extend({}, i)),
            (n.$ = w);
          const a = w(n.params.el);
          if (((s = a[0]), !s)) return;
          if (a.length > 1) {
            const o = [];
            return (
              a.each((c, d) => {
                const u = g.extend({}, i, { el: d });
                o.push(new A(u));
              }),
              o
            );
          }
          let l;
          return (
            (s.swiper = n),
            a.data('swiper', n),
            s && s.shadowRoot && s.shadowRoot.querySelector
              ? ((l = w(s.shadowRoot.querySelector(`.${n.params.wrapperClass}`))), (l.children = (o) => a.children(o)))
              : (l = a.children(`.${n.params.wrapperClass}`)),
            g.extend(n, {
              $el: a,
              el: s,
              $wrapperEl: l,
              wrapperEl: l[0],
              classNames: [],
              slides: w(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === n.params.direction,
              isVertical: () => 'vertical' === n.params.direction,
              rtl: 'rtl' === s.dir.toLowerCase() || 'rtl' === a.css('direction'),
              rtlTranslate:
                'horizontal' === n.params.direction && ('rtl' === s.dir.toLowerCase() || 'rtl' === a.css('direction')),
              wrongRTL: '-webkit-box' === l.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents: (function () {
                const c = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                let d = ['mousedown', 'mousemove', 'mouseup'];
                return (
                  y.pointerEvents && (d = ['pointerdown', 'pointermove', 'pointerup']),
                  (n.touchEventsTouch = { start: c[0], move: c[1], end: c[2], cancel: c[3] }),
                  (n.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
                  y.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: 'input, select, option, textarea, button, video, label',
                lastClickTime: g.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.useModules(),
            n.params.init && n.init(),
            n
          );
        }
        slidesPerViewDynamic() {
          const { params: s, slides: i, slidesGrid: n, size: r, activeIndex: a } = this;
          let l = 1;
          if (s.centeredSlides) {
            let c,
              o = i[a].swiperSlideSize;
            for (let d = a + 1; d < i.length; d += 1)
              i[d] && !c && ((o += i[d].swiperSlideSize), (l += 1), o > r && (c = !0));
            for (let d = a - 1; d >= 0; d -= 1)
              i[d] && !c && ((o += i[d].swiperSlideSize), (l += 1), o > r && (c = !0));
          } else for (let o = a + 1; o < i.length; o += 1) n[o] - n[a] < r && (l += 1);
          return l;
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const { snapGrid: s, params: i } = t;
          function n() {
            const l = Math.min(
              Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()),
              t.minTranslate()
            );
            t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          let r;
          i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode
              ? (n(), t.params.autoHeight && t.updateAutoHeight())
              : ((r = t.slideTo(
                  ('auto' === t.params.slidesPerView || t.params.slidesPerView > 1) &&
                    t.isEnd &&
                    !t.params.centeredSlides
                    ? t.slides.length - 1
                    : t.activeIndex,
                  0,
                  !1,
                  !0
                )),
                r || n()),
            i.watchOverflow && s !== t.snapGrid && t.checkOverflow(),
            t.emit('update');
        }
        changeDirection(t, s = !0) {
          const i = this,
            n = i.params.direction;
          return (
            t || (t = 'horizontal' === n ? 'vertical' : 'horizontal'),
            t === n ||
              ('horizontal' !== t && 'vertical' !== t) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${n}`)
                .addClass(`${i.params.containerModifierClass}${t}`),
              (i.params.direction = t),
              i.slides.each((r, a) => {
                'vertical' === t ? (a.style.width = '') : (a.style.height = '');
              }),
              i.emit('changeDirection'),
              s && i.update()),
            i
          );
        }
        init() {
          const t = this;
          t.initialized ||
            (t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.slideTo(
              t.params.loop ? t.params.initialSlide + t.loopedSlides : t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit
            ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit('init'));
        }
        destroy(t = !0, s = !0) {
          const i = this,
            { params: n, $el: r, $wrapperEl: a, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              n.loop && i.loopDestroy(),
              s &&
                (i.removeClasses(),
                r.removeAttr('style'),
                a.removeAttr('style'),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach((o) => {
                i.off(o);
              }),
              !1 !== t && ((i.$el[0].swiper = null), i.$el.data('swiper', null), g.deleteProps(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(t) {
          g.extend(te, t);
        }
        static get extendedDefaults() {
          return te;
        }
        static get defaults() {
          return pe;
        }
        static get Class() {
          return ce;
        }
        static get $() {
          return w;
        }
      }
      var as = { name: 'device', proto: { device: k }, static: { device: k } },
        ls = { name: 'support', proto: { support: y }, static: { support: y } };
      const fe = {
        isEdge: !!h.navigator.userAgent.match(/Edge/g),
        isSafari: (function t() {
          const s = h.navigator.userAgent.toLowerCase();
          return s.indexOf('safari') >= 0 && s.indexOf('chrome') < 0 && s.indexOf('android') < 0;
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(h.navigator.userAgent),
      };
      var os = { name: 'browser', proto: { browser: fe }, static: { browser: fe } },
        ds = {
          name: 'resize',
          create() {
            const e = this;
            g.extend(e, {
              resize: {
                resizeHandler() {
                  !e || e.destroyed || !e.initialized || (e.emit('beforeResize'), e.emit('resize'));
                },
                orientationChangeHandler() {
                  !e || e.destroyed || !e.initialized || e.emit('orientationchange');
                },
              },
            });
          },
          on: {
            init() {
              h.addEventListener('resize', this.resize.resizeHandler),
                h.addEventListener('orientationchange', this.resize.orientationChangeHandler);
            },
            destroy() {
              h.removeEventListener('resize', this.resize.resizeHandler),
                h.removeEventListener('orientationchange', this.resize.orientationChangeHandler);
            },
          },
        };
      const q = {
        func: h.MutationObserver || h.WebkitMutationObserver,
        attach(e, t = {}) {
          const s = this,
            n = new (0, q.func)((r) => {
              if (1 === r.length) return void s.emit('observerUpdate', r[0]);
              const a = function () {
                s.emit('observerUpdate', r[0]);
              };
              h.requestAnimationFrame ? h.requestAnimationFrame(a) : h.setTimeout(a, 0);
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            s.observer.observers.push(n);
        },
        init() {
          const e = this;
          if (y.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
            }
            e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy() {
          this.observer.observers.forEach((t) => {
            t.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      var cs = {
        name: 'observer',
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          const e = this;
          g.extend(e, {
            observer: { init: q.init.bind(e), attach: q.attach.bind(e), destroy: q.destroy.bind(e), observers: [] },
          });
        },
        on: {
          init() {
            this.observer.init();
          },
          destroy() {
            this.observer.destroy();
          },
        },
      };
      const se = {
        handle(e) {
          const t = this,
            { rtlTranslate: s } = t;
          let i = e;
          i.originalEvent && (i = i.originalEvent);
          const n = i.keyCode || i.charCode;
          if (
            (!t.allowSlideNext && ((t.isHorizontal() && 39 === n) || (t.isVertical() && 40 === n) || 34 === n)) ||
            (!t.allowSlidePrev && ((t.isHorizontal() && 37 === n) || (t.isVertical() && 38 === n) || 33 === n))
          )
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (T.activeElement &&
                T.activeElement.nodeName &&
                ('input' === T.activeElement.nodeName.toLowerCase() ||
                  'textarea' === T.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (33 === n || 34 === n || 37 === n || 39 === n || 38 === n || 40 === n)
            ) {
              let r = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
              )
                return;
              const a = h.innerWidth,
                l = h.innerHeight,
                o = t.$el.offset();
              s && (o.left -= t.$el[0].scrollLeft);
              const c = [
                [o.left, o.top],
                [o.left + t.width, o.top],
                [o.left, o.top + t.height],
                [o.left + t.width, o.top + t.height],
              ];
              for (let d = 0; d < c.length; d += 1) {
                const u = c[d];
                u[0] >= 0 && u[0] <= a && u[1] >= 0 && u[1] <= l && (r = !0);
              }
              if (!r) return;
            }
            t.isHorizontal()
              ? ((33 === n || 34 === n || 37 === n || 39 === n) &&
                  (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                (((34 === n || 39 === n) && !s) || ((33 === n || 37 === n) && s)) && t.slideNext(),
                (((33 === n || 37 === n) && !s) || ((34 === n || 39 === n) && s)) && t.slidePrev())
              : ((33 === n || 34 === n || 38 === n || 40 === n) &&
                  (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                (34 === n || 40 === n) && t.slideNext(),
                (33 === n || 38 === n) && t.slidePrev()),
              t.emit('keyPress', n);
          }
        },
        enable() {
          const e = this;
          e.keyboard.enabled || (w(T).on('keydown', e.keyboard.handle), (e.keyboard.enabled = !0));
        },
        disable() {
          const e = this;
          !e.keyboard.enabled || (w(T).off('keydown', e.keyboard.handle), (e.keyboard.enabled = !1));
        },
      };
      var us = {
        name: 'keyboard',
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create() {
          const e = this;
          g.extend(e, {
            keyboard: {
              enabled: !1,
              enable: se.enable.bind(e),
              disable: se.disable.bind(e),
              handle: se.handle.bind(e),
            },
          });
        },
        on: {
          init() {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy() {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      };
      const ie = {
          lastScrollTime: g.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: () =>
            h.navigator.userAgent.indexOf('firefox') > -1
              ? 'DOMMouseScroll'
              : (function ps() {
                  const e = 'onwheel';
                  let t = e in T;
                  if (!t) {
                    const s = T.createElement('div');
                    s.setAttribute(e, 'return;'), (t = 'function' == typeof s[e]);
                  }
                  return (
                    !t &&
                      T.implementation &&
                      T.implementation.hasFeature &&
                      !0 !== T.implementation.hasFeature('', '') &&
                      (t = T.implementation.hasFeature('Events.wheel', '3.0')),
                    t
                  );
                })()
              ? 'wheel'
              : 'mousewheel',
          normalize(e) {
            let n = 0,
              r = 0,
              a = 0,
              l = 0;
            return (
              'detail' in e && (r = e.detail),
              'wheelDelta' in e && (r = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (r = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (n = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((n = r), (r = 0)),
              (a = 10 * n),
              (l = 10 * r),
              'deltaY' in e && (l = e.deltaY),
              'deltaX' in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = l), (l = 0)),
              (a || l) && e.deltaMode && (1 === e.deltaMode ? ((a *= 40), (l *= 40)) : ((a *= 800), (l *= 800))),
              a && !n && (n = a < 1 ? -1 : 1),
              l && !r && (r = l < 1 ? -1 : 1),
              { spinX: n, spinY: r, pixelX: a, pixelY: l }
            );
          },
          handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle(e) {
            let t = e;
            const s = this,
              i = s.params.mousewheel;
            s.params.cssMode && t.preventDefault();
            let n = s.$el;
            if (
              ('container' !== s.params.mousewheel.eventsTarged && (n = w(s.params.mousewheel.eventsTarged)),
              !s.mouseEntered && !n[0].contains(t.target) && !i.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            let r = 0;
            const a = s.rtlTranslate ? -1 : 1,
              l = ie.normalize(t);
            if (i.forceToAxis)
              if (s.isHorizontal()) {
                if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                r = l.pixelX * a;
              } else {
                if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                r = l.pixelY;
              }
            else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
            if (0 === r) return !0;
            if ((i.invert && (r = -r), s.params.freeMode)) {
              const o = { time: g.now(), delta: Math.abs(r), direction: Math.sign(r) },
                { lastEventBeforeSnap: c } = s.mousewheel,
                d = c && o.time < c.time + 500 && o.delta <= c.delta && o.direction === c.direction;
              if (!d) {
                (s.mousewheel.lastEventBeforeSnap = void 0), s.params.loop && s.loopFix();
                let u = s.getTranslate() + r * i.sensitivity;
                const p = s.isBeginning,
                  f = s.isEnd;
                if (
                  (u >= s.minTranslate() && (u = s.minTranslate()),
                  u <= s.maxTranslate() && (u = s.maxTranslate()),
                  s.setTransition(0),
                  s.setTranslate(u),
                  s.updateProgress(),
                  s.updateActiveIndex(),
                  s.updateSlidesClasses(),
                  ((!p && s.isBeginning) || (!f && s.isEnd)) && s.updateSlidesClasses(),
                  s.params.freeModeSticky)
                ) {
                  clearTimeout(s.mousewheel.timeout), (s.mousewheel.timeout = void 0);
                  const v = s.mousewheel.recentWheelEvents;
                  v.length >= 15 && v.shift();
                  const m = v.length ? v[v.length - 1] : void 0,
                    L = v[0];
                  if ((v.push(o), m && (o.delta > m.delta || o.direction !== m.direction))) v.splice(0);
                  else if (v.length >= 15 && o.time - L.time < 500 && L.delta - o.delta >= 1 && o.delta <= 6) {
                    const E = r > 0 ? 0.8 : 0.2;
                    (s.mousewheel.lastEventBeforeSnap = o),
                      v.splice(0),
                      (s.mousewheel.timeout = g.nextTick(() => {
                        s.slideToClosest(s.params.speed, !0, void 0, E);
                      }, 0));
                  }
                  s.mousewheel.timeout ||
                    (s.mousewheel.timeout = g.nextTick(() => {
                      (s.mousewheel.lastEventBeforeSnap = o),
                        v.splice(0),
                        s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (d || s.emit('scroll', t),
                  s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                  u === s.minTranslate() || u === s.maxTranslate())
                )
                  return !0;
              }
            } else {
              const o = { time: g.now(), delta: Math.abs(r), direction: Math.sign(r), raw: e },
                c = s.mousewheel.recentWheelEvents;
              c.length >= 2 && c.shift();
              const d = c.length ? c[c.length - 1] : void 0;
              if (
                (c.push(o),
                d
                  ? (o.direction !== d.direction || o.delta > d.delta || o.time > d.time + 150) &&
                    s.mousewheel.animateSlider(o)
                  : s.mousewheel.animateSlider(o),
                s.mousewheel.releaseScroll(o))
              )
                return !0;
            }
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
          },
          animateSlider(e) {
            const t = this;
            return (
              (e.delta >= 6 && g.now() - t.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (!t.isEnd || t.params.loop) && !t.animating && (t.slideNext(), t.emit('scroll', e.raw))
                : (!t.isBeginning || t.params.loop) && !t.animating && (t.slidePrev(), t.emit('scroll', e.raw)),
              (t.mousewheel.lastScrollTime = new h.Date().getTime()),
              !1)
            );
          },
          releaseScroll(e) {
            const t = this,
              s = t.params.mousewheel;
            if (e.direction < 0) {
              if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
            return !1;
          },
          enable() {
            const e = this,
              t = ie.event();
            if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
            if (!t || e.mousewheel.enabled) return !1;
            let s = e.$el;
            return (
              'container' !== e.params.mousewheel.eventsTarged && (s = w(e.params.mousewheel.eventsTarged)),
              s.on('mouseenter', e.mousewheel.handleMouseEnter),
              s.on('mouseleave', e.mousewheel.handleMouseLeave),
              s.on(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !0),
              !0
            );
          },
          disable() {
            const e = this,
              t = ie.event();
            if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t || !e.mousewheel.enabled) return !1;
            let s = e.$el;
            return (
              'container' !== e.params.mousewheel.eventsTarged && (s = w(e.params.mousewheel.eventsTarged)),
              s.off(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !1),
              !0
            );
          },
        },
        U = {
          update() {
            const e = this,
              t = e.rtl,
              s = e.params.pagination;
            if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              n = e.pagination.$el;
            let r;
            const a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
                  r > i - 1 - 2 * e.loopedSlides && (r -= i - 2 * e.loopedSlides),
                  r > a - 1 && (r -= a),
                  r < 0 && 'bullets' !== e.params.paginationType && (r = a + r))
                : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              'bullets' === s.type && e.pagination.bullets && e.pagination.bullets.length > 0)
            ) {
              const l = e.pagination.bullets;
              let o, c, d;
              if (
                (s.dynamicBullets &&
                  ((e.pagination.bulletSize = l.eq(0)[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  n.css(
                    e.isHorizontal() ? 'width' : 'height',
                    e.pagination.bulletSize * (s.dynamicMainBullets + 4) + 'px'
                  ),
                  s.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                  (o = r - e.pagination.dynamicBulletIndex),
                  (c = o + (Math.min(l.length, s.dynamicMainBullets) - 1)),
                  (d = (c + o) / 2)),
                l.removeClass(
                  `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
                ),
                n.length > 1)
              )
                l.each((u, p) => {
                  const f = w(p),
                    v = f.index();
                  v === r && f.addClass(s.bulletActiveClass),
                    s.dynamicBullets &&
                      (v >= o && v <= c && f.addClass(`${s.bulletActiveClass}-main`),
                      v === o &&
                        f
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev`)
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev-prev`),
                      v === c &&
                        f
                          .next()
                          .addClass(`${s.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${s.bulletActiveClass}-next-next`));
                });
              else {
                const u = l.eq(r),
                  p = u.index();
                if ((u.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                  const f = l.eq(o),
                    v = l.eq(c);
                  for (let m = o; m <= c; m += 1) l.eq(m).addClass(`${s.bulletActiveClass}-main`);
                  if (e.params.loop)
                    if (p >= l.length - s.dynamicMainBullets) {
                      for (let m = s.dynamicMainBullets; m >= 0; m -= 1)
                        l.eq(l.length - m).addClass(`${s.bulletActiveClass}-main`);
                      l.eq(l.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                    } else
                      f
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev`)
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev-prev`),
                        v
                          .next()
                          .addClass(`${s.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${s.bulletActiveClass}-next-next`);
                  else
                    f
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev-prev`),
                      v
                        .next()
                        .addClass(`${s.bulletActiveClass}-next`)
                        .next()
                        .addClass(`${s.bulletActiveClass}-next-next`);
                }
              }
              if (s.dynamicBullets) {
                const u = Math.min(l.length, s.dynamicMainBullets + 4),
                  p = (e.pagination.bulletSize * u - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                  f = t ? 'right' : 'left';
                l.css(e.isHorizontal() ? f : 'top', `${p}px`);
              }
            }
            if (
              ('fraction' === s.type &&
                (n.find(`.${s.currentClass}`).text(s.formatFractionCurrent(r + 1)),
                n.find(`.${s.totalClass}`).text(s.formatFractionTotal(a))),
              'progressbar' === s.type)
            ) {
              let l;
              l = s.progressbarOpposite
                ? e.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : e.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              const o = (r + 1) / a;
              let c = 1,
                d = 1;
              'horizontal' === l ? (c = o) : (d = o),
                n
                  .find(`.${s.progressbarFillClass}`)
                  .transform(`translate3d(0,0,0) scaleX(${c}) scaleY(${d})`)
                  .transition(e.params.speed);
            }
            'custom' === s.type && s.renderCustom
              ? (n.html(s.renderCustom(e, r + 1, a)), e.emit('paginationRender', e, n[0]))
              : e.emit('paginationUpdate', e, n[0]),
              n[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
          },
          render() {
            const e = this,
              t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.pagination.$el;
            let n = '';
            if ('bullets' === t.type) {
              const r = e.params.loop
                ? Math.ceil(
                    ((e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length) -
                      2 * e.loopedSlides) /
                      e.params.slidesPerGroup
                  )
                : e.snapGrid.length;
              for (let a = 0; a < r; a += 1)
                n += t.renderBullet
                  ? t.renderBullet.call(e, a, t.bulletClass)
                  : `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
              i.html(n), (e.pagination.bullets = i.find(`.${t.bulletClass}`));
            }
            'fraction' === t.type &&
              ((n = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
              i.html(n)),
              'progressbar' === t.type &&
                ((n = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : `<span class="${t.progressbarFillClass}"></span>`),
                i.html(n)),
              'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0]);
          },
          init() {
            const e = this,
              t = e.params.pagination;
            if (!t.el) return;
            let s = w(t.el);
            0 !== s.length &&
              (e.params.uniqueNavElements &&
                'string' == typeof t.el &&
                s.length > 1 &&
                1 === e.$el.find(t.el).length &&
                (s = e.$el.find(t.el)),
              'bullets' === t.type && t.clickable && s.addClass(t.clickableClass),
              s.addClass(t.modifierClass + t.type),
              'bullets' === t.type &&
                t.dynamicBullets &&
                (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              'progressbar' === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
              t.clickable &&
                s.on('click', `.${t.bulletClass}`, function (n) {
                  n.preventDefault();
                  let r = w(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (r += e.loopedSlides), e.slideTo(r);
                }),
              g.extend(e.pagination, { $el: s, el: s[0] }));
          },
          destroy() {
            const e = this,
              t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass),
              s.removeClass(t.modifierClass + t.type),
              e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && s.off('click', `.${t.bulletClass}`);
          },
        };
      var fs = {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create() {
          const e = this;
          g.extend(e, {
            pagination: {
              init: U.init.bind(e),
              render: U.render.bind(e),
              update: U.update.bind(e),
              destroy: U.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange() {
            const e = this;
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange() {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy() {
            this.pagination.destroy();
          },
          click(e) {
            const t = this;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !w(e.target).hasClass(t.params.pagination.bulletClass) &&
              (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit('paginationShow', t)
                : t.emit('paginationHide', t),
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
          },
        },
      };
      const X = {
        setTranslate() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: s, progress: i } = e,
            { dragSize: n, trackSize: r, $dragEl: a, $el: l } = t,
            o = e.params.scrollbar;
          let c = n,
            d = (r - n) * i;
          s
            ? ((d = -d), d > 0 ? ((c = n - d), (d = 0)) : -d + n > r && (c = r + d))
            : d < 0
            ? ((c = n + d), (d = 0))
            : d + n > r && (c = r - d),
            e.isHorizontal()
              ? (a.transform(`translate3d(${d}px, 0, 0)`), (a[0].style.width = `${c}px`))
              : (a.transform(`translate3d(0px, ${d}px, 0)`), (a[0].style.height = `${c}px`)),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(() => {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3)));
        },
        setTransition(e) {
          const t = this;
          !t.params.scrollbar.el || !t.scrollbar.el || t.scrollbar.$dragEl.transition(e);
        },
        updateSize() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: s, $el: i } = t;
          (s[0].style.width = ''), (s[0].style.height = '');
          const n = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = e.size / e.virtualSize,
            a = r * (n / e.size);
          let l;
          (l = 'auto' === e.params.scrollbar.dragSize ? n * r : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal() ? (s[0].style.width = `${l}px`) : (s[0].style.height = `${l}px`),
            (i[0].style.display = r >= 1 ? 'none' : ''),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            g.extend(t, { trackSize: n, divider: r, moveDivider: a, dragSize: l }),
            t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](e.params.scrollbar.lockClass);
        },
        getPointerPosition(e) {
          return this.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition(e) {
          const t = this,
            { scrollbar: s, rtlTranslate: i } = t,
            { $el: n, dragSize: r, trackSize: a, dragStartPos: l } = s;
          let o;
          (o =
            (s.getPointerPosition(e) - n.offset()[t.isHorizontal() ? 'left' : 'top'] - (null !== l ? l : r / 2)) /
            (a - r)),
            (o = Math.max(Math.min(o, 1), 0)),
            i && (o = 1 - o);
          const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
          t.updateProgress(c), t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
        },
        onDragStart(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: n } = t,
            { $el: r, $dragEl: a } = i;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === a[0] || e.target === a
                ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top']
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            a.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            s.hide && r.css('opacity', 1),
            t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
            t.emit('scrollbarDragStart', e);
        },
        onDragMove(e) {
          const t = this,
            { scrollbar: s, $wrapperEl: i } = t,
            { $el: n, $dragEl: r } = s;
          !t.scrollbar.isTouched ||
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            s.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            r.transition(0),
            t.emit('scrollbarDragMove', e));
        },
        onDragEnd(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: n } = t,
            { $el: r } = i;
          !t.scrollbar.isTouched ||
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode && (t.$wrapperEl.css('scroll-snap-type', ''), n.transition('')),
            s.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = g.nextTick(() => {
                r.css('opacity', 0), r.transition(400);
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            s.snapOnRelease && t.slideToClosest());
        },
        enableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: n } = e,
            a = t.$el[0],
            l = !(!y.passiveListener || !n.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!y.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
          y.touch
            ? (a.addEventListener(s.start, e.scrollbar.onDragStart, l),
              a.addEventListener(s.move, e.scrollbar.onDragMove, l),
              a.addEventListener(s.end, e.scrollbar.onDragEnd, o))
            : (a.addEventListener(i.start, e.scrollbar.onDragStart, l),
              T.addEventListener(i.move, e.scrollbar.onDragMove, l),
              T.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        },
        disableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: n } = e,
            a = t.$el[0],
            l = !(!y.passiveListener || !n.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!y.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
          y.touch
            ? (a.removeEventListener(s.start, e.scrollbar.onDragStart, l),
              a.removeEventListener(s.move, e.scrollbar.onDragMove, l),
              a.removeEventListener(s.end, e.scrollbar.onDragEnd, o))
            : (a.removeEventListener(i.start, e.scrollbar.onDragStart, l),
              T.removeEventListener(i.move, e.scrollbar.onDragMove, l),
              T.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        },
        init() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, $el: s } = e,
            i = e.params.scrollbar;
          let n = w(i.el);
          e.params.uniqueNavElements &&
            'string' == typeof i.el &&
            n.length > 1 &&
            1 === s.find(i.el).length &&
            (n = s.find(i.el));
          let r = n.find(`.${e.params.scrollbar.dragClass}`);
          0 === r.length && ((r = w(`<div class="${e.params.scrollbar.dragClass}"></div>`)), n.append(r)),
            g.extend(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
        },
        destroy() {
          this.scrollbar.disableDraggable();
        },
      };
      var hs = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create() {
          const e = this;
          g.extend(e, {
            scrollbar: {
              init: X.init.bind(e),
              destroy: X.destroy.bind(e),
              updateSize: X.updateSize.bind(e),
              setTranslate: X.setTranslate.bind(e),
              setTransition: X.setTransition.bind(e),
              enableDraggable: X.enableDraggable.bind(e),
              disableDraggable: X.disableDraggable.bind(e),
              setDragPosition: X.setDragPosition.bind(e),
              getPointerPosition: X.getPointerPosition.bind(e),
              onDragStart: X.onDragStart.bind(e),
              onDragMove: X.onDragMove.bind(e),
              onDragEnd: X.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
          },
          update() {
            this.scrollbar.updateSize();
          },
          resize() {
            this.scrollbar.updateSize();
          },
          observerUpdate() {
            this.scrollbar.updateSize();
          },
          setTranslate() {
            this.scrollbar.setTranslate();
          },
          setTransition(e) {
            this.scrollbar.setTransition(e);
          },
          destroy() {
            this.scrollbar.destroy();
          },
        },
      };
      const ne = {
        getDistanceBetweenTouches: (e) =>
          e.targetTouches.length < 2
            ? 1
            : Math.sqrt(
                (e.targetTouches[1].pageX - e.targetTouches[0].pageX) ** 2 +
                  (e.targetTouches[1].pageY - e.targetTouches[0].pageY) ** 2
              ),
        onGestureStart(e) {
          const t = this,
            s = t.params.zoom,
            i = t.zoom,
            { gesture: n } = i;
          if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !y.gestures)) {
            if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2)) return;
            (i.fakeGestureTouched = !0), (n.scaleStart = ne.getDistanceBetweenTouches(e));
          }
          (n.$slideEl && n.$slideEl.length) ||
          ((n.$slideEl = w(e.target).closest(`.${t.params.slideClass}`)),
          0 === n.$slideEl.length && (n.$slideEl = t.slides.eq(t.activeIndex)),
          (n.$imageEl = n.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
          (n.$imageWrapEl = n.$imageEl.parent(`.${s.containerClass}`)),
          (n.maxRatio = n.$imageWrapEl.attr('data-swiper-zoom') || s.maxRatio),
          0 !== n.$imageWrapEl.length)
            ? (n.$imageEl && n.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (n.$imageEl = void 0);
        },
        onGestureChange(e) {
          const s = this.params.zoom,
            i = this.zoom,
            { gesture: n } = i;
          if (!y.gestures) {
            if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2)) return;
            (i.fakeGestureMoved = !0), (n.scaleMove = ne.getDistanceBetweenTouches(e));
          }
          !n.$imageEl ||
            0 === n.$imageEl.length ||
            ((i.scale = y.gestures ? e.scale * i.currentScale : (n.scaleMove / n.scaleStart) * i.currentScale),
            i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** 0.5),
            i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** 0.5),
            n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
        },
        onGestureEnd(e) {
          const t = this,
            s = t.params.zoom,
            i = t.zoom,
            { gesture: n } = i;
          if (!y.gestures) {
            if (
              !i.fakeGestureTouched ||
              !i.fakeGestureMoved ||
              'touchend' !== e.type ||
              ('touchend' === e.type && e.changedTouches.length < 2 && !k.android)
            )
              return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          !n.$imageEl ||
            0 === n.$imageEl.length ||
            ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), s.minRatio)),
            n.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (n.$slideEl = void 0));
        },
        onTouchStart(e) {
          const s = this.zoom,
            { gesture: i, image: n } = s;
          !i.$imageEl ||
            0 === i.$imageEl.length ||
            n.isTouched ||
            (k.android && e.cancelable && e.preventDefault(),
            (n.isTouched = !0),
            (n.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (n.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY));
        },
        onTouchMove(e) {
          const t = this,
            s = t.zoom,
            { gesture: i, image: n, velocity: r } = s;
          if (!i.$imageEl || 0 === i.$imageEl.length || ((t.allowClick = !1), !n.isTouched || !i.$slideEl)) return;
          n.isMoved ||
            ((n.width = i.$imageEl[0].offsetWidth),
            (n.height = i.$imageEl[0].offsetHeight),
            (n.startX = g.getTranslate(i.$imageWrapEl[0], 'x') || 0),
            (n.startY = g.getTranslate(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
          const a = n.width * s.scale,
            l = n.height * s.scale;
          if (!(a < i.slideWidth && l < i.slideHeight)) {
            if (
              ((n.minX = Math.min(i.slideWidth / 2 - a / 2, 0)),
              (n.maxX = -n.minX),
              (n.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
              (n.maxY = -n.minY),
              (n.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (n.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
              !n.isMoved && !s.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x) ||
                  (Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x))
              )
                return void (n.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y) ||
                  (Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y))
              )
                return void (n.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (n.isMoved = !0),
              (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
              (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
              n.currentX < n.minX && (n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** 0.8),
              n.currentX > n.maxX && (n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** 0.8),
              n.currentY < n.minY && (n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** 0.8),
              n.currentY > n.maxY && (n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** 0.8),
              r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
              (r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
              Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = n.touchesCurrent.x),
              (r.prevPositionY = n.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`);
          }
        },
        onTouchEnd() {
          const t = this.zoom,
            { gesture: s, image: i, velocity: n } = t;
          if (!s.$imageEl || 0 === s.$imageEl.length) return;
          if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          let r = 300,
            a = 300;
          const o = i.currentX + n.x * r,
            d = i.currentY + n.y * a;
          0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((d - i.currentY) / n.y));
          const u = Math.max(r, a);
          (i.currentX = o), (i.currentY = d);
          const f = i.height * t.scale;
          (i.minX = Math.min(s.slideWidth / 2 - (i.width * t.scale) / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(s.slideHeight / 2 - f / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            s.$imageWrapEl.transition(u).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
        },
        onTransitionEnd() {
          const e = this,
            t = e.zoom,
            { gesture: s } = t;
          s.$slideEl &&
            e.previousIndex !== e.activeIndex &&
            (s.$imageEl && s.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            s.$imageWrapEl && s.$imageWrapEl.transform('translate3d(0,0,0)'),
            (t.scale = 1),
            (t.currentScale = 1),
            (s.$slideEl = void 0),
            (s.$imageEl = void 0),
            (s.$imageWrapEl = void 0));
        },
        toggle(e) {
          const s = this.zoom;
          s.scale && 1 !== s.scale ? s.out() : s.in(e);
        },
        in(e) {
          const t = this,
            s = t.zoom,
            i = t.params.zoom,
            { gesture: n, image: r } = s;
          if (
            (n.$slideEl ||
              ((n.$slideEl =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.$wrapperEl.children(`.${t.params.slideActiveClass}`)
                  : t.slides.eq(t.activeIndex)),
              (n.$imageEl = n.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
              (n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`))),
            !n.$imageEl || 0 === n.$imageEl.length)
          )
            return;
          let a, l, o, c, d, u, p, f, v, m, L, E, x, b, Y, B, D, M;
          n.$slideEl.addClass(`${i.zoomedSlideClass}`),
            void 0 === r.touchesStart.x && e
              ? ((a = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
                (l = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((a = r.touchesStart.x), (l = r.touchesStart.y)),
            (s.scale = n.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
            (s.currentScale = n.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
            e
              ? ((D = n.$slideEl[0].offsetWidth),
                (M = n.$slideEl[0].offsetHeight),
                (o = n.$slideEl.offset().left),
                (c = n.$slideEl.offset().top),
                (d = o + D / 2 - a),
                (u = c + M / 2 - l),
                (v = n.$imageEl[0].offsetWidth),
                (m = n.$imageEl[0].offsetHeight),
                (L = v * s.scale),
                (E = m * s.scale),
                (x = Math.min(D / 2 - L / 2, 0)),
                (b = Math.min(M / 2 - E / 2, 0)),
                (Y = -x),
                (B = -b),
                (p = d * s.scale),
                (f = u * s.scale),
                p < x && (p = x),
                p > Y && (p = Y),
                f < b && (f = b),
                f > B && (f = B))
              : ((p = 0), (f = 0)),
            n.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${f}px,0)`),
            n.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
        },
        out() {
          const e = this,
            t = e.zoom,
            s = e.params.zoom,
            { gesture: i } = t;
          i.$slideEl ||
            ((i.$slideEl =
              e.params.virtual && e.params.virtual.enabled && e.virtual
                ? e.$wrapperEl.children(`.${e.params.slideActiveClass}`)
                : e.slides.eq(e.activeIndex)),
            (i.$imageEl = i.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
            (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
              i.$slideEl.removeClass(`${s.zoomedSlideClass}`),
              (i.$slideEl = void 0));
        },
        enable() {
          const e = this,
            t = e.zoom;
          if (t.enabled) return;
          t.enabled = !0;
          const s = !('touchstart' !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1,
            },
            i = !y.passiveListener || { passive: !1, capture: !0 },
            n = `.${e.params.slideClass}`;
          y.gestures
            ? (e.$wrapperEl.on('gesturestart', n, t.onGestureStart, s),
              e.$wrapperEl.on('gesturechange', n, t.onGestureChange, s),
              e.$wrapperEl.on('gestureend', n, t.onGestureEnd, s))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, n, t.onGestureStart, s),
              e.$wrapperEl.on(e.touchEvents.move, n, t.onGestureChange, i),
              e.$wrapperEl.on(e.touchEvents.end, n, t.onGestureEnd, s),
              e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, n, t.onGestureEnd, s)),
            e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
        },
        disable() {
          const e = this,
            t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = !1;
          const s = !('touchstart' !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1,
            },
            i = !y.passiveListener || { passive: !1, capture: !0 },
            n = `.${e.params.slideClass}`;
          y.gestures
            ? (e.$wrapperEl.off('gesturestart', n, t.onGestureStart, s),
              e.$wrapperEl.off('gesturechange', n, t.onGestureChange, s),
              e.$wrapperEl.off('gestureend', n, t.onGestureEnd, s))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, n, t.onGestureStart, s),
              e.$wrapperEl.off(e.touchEvents.move, n, t.onGestureChange, i),
              e.$wrapperEl.off(e.touchEvents.end, n, t.onGestureEnd, s),
              e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, n, t.onGestureEnd, s)),
            e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
        },
      };
      var ms = {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create() {
          const e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
            };
          'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
            .split(' ')
            .forEach((i) => {
              t[i] = ne[i].bind(e);
            }),
            g.extend(e, { zoom: t });
          let s = 1;
          Object.defineProperty(e.zoom, 'scale', {
            get: () => s,
            set(i) {
              s !== i &&
                e.emit(
                  'zoomChange',
                  i,
                  e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0
                ),
                (s = i);
            },
          });
        },
        on: {
          init() {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy() {
            this.zoom.disable();
          },
          touchStart(e) {
            !this.zoom.enabled || this.zoom.onTouchStart(e);
          },
          touchEnd(e) {
            !this.zoom.enabled || this.zoom.onTouchEnd(e);
          },
          doubleTap(e) {
            const t = this;
            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
          },
          transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
          },
        },
      };
      const K = {
        run() {
          const e = this,
            t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr('data-swiper-autoplay') && (s = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = g.nextTick(() => {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.params.loop
                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, s));
        },
        start() {
          const e = this;
          return (
            void 0 === e.autoplay.timeout &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), e.emit('autoplayStart'), e.autoplay.run(), !0)
          );
        },
        stop() {
          const e = this;
          return !(
            !e.autoplay.running ||
            void 0 === e.autoplay.timeout ||
            (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit('autoplayStop'),
            0)
          );
        },
        pause(e) {
          const t = this;
          !t.autoplay.running ||
            t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener('transitionend', t.autoplay.onTransitionEnd),
                t.$wrapperEl[0].addEventListener('webkitTransitionEnd', t.autoplay.onTransitionEnd))
              : ((t.autoplay.paused = !1), t.autoplay.run()));
        },
      };
      var gs = {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create() {
          const e = this;
          g.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: K.run.bind(e),
              start: K.start.bind(e),
              stop: K.stop.bind(e),
              pause: K.pause.bind(e),
              onVisibilityChange() {
                'hidden' === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                  'visible' === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd(t) {
                !e ||
                  e.destroyed ||
                  !e.$wrapperEl ||
                  (t.target === this &&
                    (e.$wrapperEl[0].removeEventListener('transitionend', e.autoplay.onTransitionEnd),
                    e.$wrapperEl[0].removeEventListener('webkitTransitionEnd', e.autoplay.onTransitionEnd),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()));
              },
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.autoplay.enabled &&
              (e.autoplay.start(), document.addEventListener('visibilitychange', e.autoplay.onVisibilityChange));
          },
          beforeTransitionStart(e, t) {
            const s = this;
            s.autoplay.running &&
              (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
          },
          sliderFirstMove() {
            const e = this;
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
          },
          touchEnd() {
            const e = this;
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
          },
          destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop(),
              document.removeEventListener('visibilitychange', e.autoplay.onVisibilityChange);
          },
        },
      };
      const vs = [as, ls, os, ds, cs];
      void 0 === A.use && ((A.use = A.Class.use), (A.installModule = A.Class.installModule)),
        A.use(vs),
        A.use([fs, hs, gs, us, ms]);
    },
  },
]);
