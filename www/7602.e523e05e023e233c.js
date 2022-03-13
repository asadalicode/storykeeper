'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [7602],
  {
    7602: (w, u, l) => {
      l.r(u), l.d(u, { ion_picker_column_internal: () => v });
      var n = l(9533),
        k = l(7639),
        c = l(6499),
        p = l(2335),
        b = l(7300);
      let v = class {
        constructor(o) {
          (0, n.r)(this, o),
            (this.ionChange = (0, n.e)(this, 'ionChange', 7)),
            (this.hapticsStarted = !1),
            (this.isColumnVisible = !1),
            (this.isActive = !1),
            (this.items = []),
            (this.color = 'primary'),
            (this.numericInput = !1),
            (this.centerPickerItemInView = (e, t = !0) => {
              this.el.scroll({
                top: e.offsetTop - 3 * e.clientHeight + e.clientHeight / 2,
                left: 0,
                behavior: t ? 'smooth' : void 0,
              });
            }),
            (this.inputModeChange = (e) => {
              if (!this.numericInput) return;
              const { useInputMode: t, inputModeColumn: i } = e.detail;
              this.isActive = !(!t || (void 0 !== i && i !== this.el));
            }),
            (this.initializeScrollListener = () => {
              const { el: e } = this;
              let t,
                i = this.activeItem;
              const r = () => {
                (0, c.r)(() => {
                  t && (clearTimeout(t), (t = void 0)), this.hapticsStarted || ((0, p.a)(), (this.hapticsStarted = !0));
                  const s = e.getBoundingClientRect(),
                    d = e.shadowRoot.elementFromPoint(s.x + s.width / 2, s.y + s.height / 2);
                  null !== i && i.classList.remove(a),
                    d !== i && (0, p.b)(),
                    (i = d),
                    d.classList.add(a),
                    (t = setTimeout(() => {
                      const g = d.getAttribute('data-index');
                      if (null === g) return;
                      const I = parseInt(g, 10),
                        f = this.items[I];
                      f.value !== this.value && ((this.value = f.value), (0, p.h)(), (this.hapticsStarted = !1));
                    }, 250));
                });
              };
              (0, c.r)(() => {
                e.addEventListener('scroll', r),
                  (this.destroyScrollListener = () => {
                    e.removeEventListener('scroll', r);
                  });
              });
            });
        }
        valueChange() {
          if (this.isColumnVisible) {
            const { items: o, value: e } = this;
            this.scrollActiveItemIntoView();
            const t = o.find((i) => i.value === e);
            t && this.ionChange.emit(t);
          }
        }
        componentWillLoad() {
          new IntersectionObserver(
            (t) => {
              var i;
              if (t[0].isIntersecting) {
                const s = (0, c.g)(this.el).querySelector(`.${a}`);
                null == s || s.classList.remove(a),
                  this.scrollActiveItemIntoView(),
                  null === (i = this.activeItem) || void 0 === i || i.classList.add(a),
                  this.initializeScrollListener(),
                  (this.isColumnVisible = !0);
              } else
                this.destroyScrollListener && (this.destroyScrollListener(), (this.destroyScrollListener = void 0)),
                  (this.isColumnVisible = !1);
            },
            { threshold: 0.01 }
          ).observe(this.el);
          const e = this.el.closest('ion-picker-internal');
          null !== e && e.addEventListener('ionInputModeChange', (t) => this.inputModeChange(t));
        }
        scrollActiveItemIntoView() {
          const o = this.activeItem;
          o && this.centerPickerItemInView(o, !1);
        }
        get activeItem() {
          return (0, c.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]`);
        }
        render() {
          const { items: o, color: e, isActive: t, numericInput: i } = this,
            r = (0, k.b)(this);
          return (0, n.h)(
            n.H,
            {
              tabindex: 0,
              class: (0, b.c)(e, { [r]: !0, 'picker-column-active': t, 'picker-column-numeric-input': i }),
            },
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0'),
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0'),
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0'),
            o.map((s, h) =>
              (0, n.h)(
                'div',
                {
                  class: 'picker-item',
                  'data-value': s.value,
                  'data-index': h,
                  onClick: (m) => {
                    this.centerPickerItemInView(m.target);
                  },
                },
                s.text
              )
            ),
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0'),
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0'),
            (0, n.h)('div', { class: 'picker-item picker-item-empty' }, '\xa0')
          );
        }
        get el() {
          return (0, n.i)(this);
        }
        static get watchers() {
          return { value: ['valueChange'] };
        }
      };
      const a = 'picker-item-active';
      v.style = {
        ios: ':host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}',
        md: ':host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}',
      };
    },
  },
]);
