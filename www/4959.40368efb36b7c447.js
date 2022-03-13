'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [4959],
  {
    4959: (Et, V, u) => {
      u.r(V), u.d(V, { ion_picker: () => L.e, ion_picker_column: () => L.f, ion_datetime: () => $ });
      var w = u(5861),
        l = u(9533),
        y = u(6223),
        A = u(7639),
        U = u(4560),
        v = u(6499),
        N = u(7300),
        L = u(7967);
      u(2335), u(1363), u(2733), u(2993), u(2098), u(5893), u(2441), u(9955);
      const O = (t) =>
          t && '' !== t.dir
            ? 'rtl' === t.dir.toLowerCase()
            : 'rtl' === (null == document ? void 0 : document.dir.toLowerCase()),
        k = (t, e) => t.month === e.month && t.day === e.day && t.year === e.year,
        P = (t, e) =>
          t.year < e.year ||
          (t.year === e.year && t.month < e.month) ||
          (t.year === e.year && t.month === e.month && t.day < e.day),
        z = (t, e) =>
          t.year > e.year ||
          (t.year === e.year && t.month > e.month) ||
          (t.year === e.year && t.month === e.month && t.day > e.day),
        b = (t, e) =>
          4 === t || 6 === t || 9 === t || 11 === t
            ? 30
            : 2 === t
            ? ((t) => (t % 4 == 0 && t % 100 != 0) || t % 400 == 0)(e)
              ? 29
              : 28
            : 31,
        f = (t) => ('0' + (void 0 !== t ? Math.abs(t) : '0')).slice(-2),
        W = (t) => {
          let e = '';
          return (
            void 0 !== t.year
              ? ((e = ((t) => ('000' + (void 0 !== t ? Math.abs(t) : '0')).slice(-4))(t.year)),
                void 0 !== t.month &&
                  ((e += '-' + f(t.month)),
                  void 0 !== t.day &&
                    ((e += '-' + f(t.day)),
                    void 0 !== t.hour &&
                      ((e += `T${f(t.hour)}:${f(t.minute)}:00`),
                      (e +=
                        void 0 === t.tzOffset
                          ? 'Z'
                          : (t.tzOffset > 0 ? '+' : '-') +
                            f(Math.floor(Math.abs(t.tzOffset / 60))) +
                            ':' +
                            f(t.tzOffset % 60))))))
              : void 0 !== t.hour && (e = f(t.hour) + ':' + f(t.minute)),
            e
          );
        },
        B = (t, e) => (void 0 === e ? t : 'am' === e ? (12 === t ? 0 : t) : 12 === t ? 12 : t + 12),
        D = (t, e) => {
          const { month: n, day: a, year: s } = t;
          if (null === a) throw new Error('No day provided');
          const o = { month: n, day: a, year: s };
          if (
            ((o.day = a - e), o.day < 1 && (o.month -= 1), o.month < 1 && ((o.month = 12), (o.year -= 1)), o.day < 1)
          ) {
            const r = b(o.month, o.year);
            o.day = r + o.day;
          }
          return o;
        },
        M = (t, e) => {
          const { month: n, day: a, year: s } = t;
          if (null === a) throw new Error('No day provided');
          const o = { month: n, day: a, year: s },
            r = b(n, s);
          return (
            (o.day = a + e),
            o.day > r && ((o.day -= r), (o.month += 1)),
            o.month > 12 && ((o.month = 1), (o.year += 1)),
            o
          );
        },
        C = (t) => {
          const e = 1 === t.month ? 12 : t.month - 1,
            n = 1 === t.month ? t.year - 1 : t.year,
            a = b(e, n);
          return { month: e, year: n, day: a < t.day ? a : t.day };
        },
        _ = (t) => {
          const e = 12 === t.month ? 1 : t.month + 1,
            n = 12 === t.month ? t.year + 1 : t.year,
            a = b(e, n);
          return { month: e, year: n, day: a < t.day ? a : t.day };
        },
        S = (t, e) => {
          const n = t.month,
            a = t.year + e,
            s = b(n, a);
          return { month: n, year: a, day: s < t.day ? s : t.day };
        },
        ot = (t, e, n) => (e ? t : B(t, n)),
        F = () => {
          const t = new Date(),
            e = t.getTimezoneOffset();
          return t.setHours(t.getHours() - e / 60), t.toISOString();
        },
        rt = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 59,
        ],
        dt = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        lt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        bt = (t, e) => {
          if (void 0 === t.hour || void 0 === t.minute) return 'Invalid Time';
          const n = e ? R(t.hour, e) : ((t) => t % 12 || 12)(t.hour),
            a = I(t.minute);
          return e ? `${n}:${a}` : `${n}:${a} ${((t) => (void 0 === t ? '' : t.toUpperCase()))(t.ampm)}`;
        },
        I = (t) => {
          const e = t.toString();
          return e.length > 1 ? e : `0${e}`;
        },
        R = (t, e) => (e ? I(t) : t.toString()),
        xt = (t, e, n) => {
          if (null === n.day) return null;
          const a = new Date(`${n.month}/${n.day}/${n.year}`),
            s = new Intl.DateTimeFormat(t, { weekday: 'long', month: 'long', day: 'numeric' }).format(a);
          return e ? `Today, ${s}` : s;
        },
        kt =
          /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        Ot = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        g = (t) => {
          if (void 0 === t) return;
          let n,
            e = t;
          return (
            'string' == typeof t && (e = t.replace(/\[|\]|\s/g, '').split(',')),
            (n = Array.isArray(e) ? e.map((a) => parseInt(a, 10)).filter(isFinite) : [e]),
            n
          );
        },
        x = (t) => {
          let e = null;
          if (
            (null != t &&
              '' !== t &&
              ((e = Ot.exec(t)), e ? (e.unshift(void 0, void 0), (e[2] = e[3] = void 0)) : (e = kt.exec(t))),
            null === e)
          )
            return;
          for (let a = 1; a < 8; a++) e[a] = void 0 !== e[a] ? parseInt(e[a], 10) : void 0;
          let n = 0;
          return (
            e[9] &&
              e[10] &&
              ((n = 60 * parseInt(e[10], 10)), e[11] && (n += parseInt(e[11], 10)), '-' === e[9] && (n *= -1)),
            {
              year: e[1],
              month: e[2],
              day: e[3],
              hour: e[4],
              minute: e[5],
              second: e[6],
              millisecond: e[7],
              tzOffset: n,
            }
          );
        },
        Y = (t, e, n, a) =>
          !!(null === t.day || (void 0 !== a && !a.includes(t.day)) || (e && P(t, e)) || (n && z(t, n)));
      let $ = class {
          constructor(t) {
            (0, l.r)(this, t),
              (this.ionCancel = (0, l.e)(this, 'ionCancel', 7)),
              (this.ionChange = (0, l.e)(this, 'ionChange', 7)),
              (this.ionFocus = (0, l.e)(this, 'ionFocus', 7)),
              (this.ionBlur = (0, l.e)(this, 'ionBlur', 7)),
              (this.ionStyle = (0, l.e)(this, 'ionStyle', 7)),
              (this.inputId = 'ion-dt-' + It++),
              (this.overlayIsPresenting = !1),
              (this.showMonthAndYear = !1),
              (this.activeParts = { month: 5, day: 28, year: 2021, hour: 13, minute: 52, ampm: 'pm' }),
              (this.workingParts = { month: 5, day: 28, year: 2021, hour: 13, minute: 52, ampm: 'pm' }),
              (this.todayParts = x(F())),
              (this.isPresented = !1),
              (this.isTimePopoverOpen = !1),
              (this.color = 'primary'),
              (this.name = this.inputId),
              (this.disabled = !1),
              (this.readonly = !1),
              (this.presentation = 'date-time'),
              (this.cancelText = 'Cancel'),
              (this.doneText = 'Done'),
              (this.clearText = 'Clear'),
              (this.locale = 'default'),
              (this.firstDayOfWeek = 0),
              (this.showDefaultTitle = !1),
              (this.showDefaultButtons = !1),
              (this.showClearButton = !1),
              (this.showDefaultTimeLabel = !0),
              (this.size = 'fixed'),
              (this.closeParentOverlay = () => {
                const e = this.el.closest('ion-modal, ion-popover');
                e && e.dismiss();
              }),
              (this.setWorkingParts = (e) => {
                this.workingParts = Object.assign({}, e);
              }),
              (this.setActiveParts = (e) => {
                (this.activeParts = Object.assign({}, e)),
                  null === this.el.querySelector('[slot="buttons"]') && !this.showDefaultButtons && this.confirm();
              }),
              (this.initializeKeyboardListeners = () => {
                const { calendarBodyRef: e } = this;
                if (!e) return;
                const n = this.el.shadowRoot,
                  a = e.querySelector('.calendar-month:nth-of-type(2)'),
                  o = new MutationObserver((r) => {
                    var i;
                    (null === (i = r[0].oldValue) || void 0 === i ? void 0 : i.includes('ion-focused')) ||
                      !e.classList.contains('ion-focused') ||
                      this.focusWorkingDay(a);
                  });
                o.observe(e, { attributeFilter: ['class'], attributeOldValue: !0 }),
                  (this.destroyKeyboardMO = () => {
                    null == o || o.disconnect();
                  }),
                  this.calendarBodyRef.addEventListener('keydown', (r) => {
                    const i = n.activeElement;
                    if (!i || !i.classList.contains('calendar-day')) return;
                    const d = ((t) => ({
                      month: parseInt(t.getAttribute('data-month'), 10),
                      day: parseInt(t.getAttribute('data-day'), 10),
                      year: parseInt(t.getAttribute('data-year'), 10),
                      dayOfWeek: parseInt(t.getAttribute('data-day-of-week'), 10),
                    }))(i);
                    let h;
                    switch (r.key) {
                      case 'ArrowDown':
                        r.preventDefault(), (h = ((t) => M(t, 7))(d));
                        break;
                      case 'ArrowUp':
                        r.preventDefault(), (h = ((t) => D(t, 7))(d));
                        break;
                      case 'ArrowRight':
                        r.preventDefault(), (h = ((t) => M(t, 1))(d));
                        break;
                      case 'ArrowLeft':
                        r.preventDefault(), (h = ((t) => D(t, 1))(d));
                        break;
                      case 'Home':
                        r.preventDefault(),
                          (h = ((t) => {
                            const { dayOfWeek: e } = t;
                            if (null == e) throw new Error('No day of week provided');
                            return D(t, e);
                          })(d));
                        break;
                      case 'End':
                        r.preventDefault(),
                          (h = ((t) => {
                            const { dayOfWeek: e } = t;
                            if (null == e) throw new Error('No day of week provided');
                            return M(t, 6 - e);
                          })(d));
                        break;
                      case 'PageUp':
                        r.preventDefault(), (h = r.shiftKey ? ((t) => S(t, -1))(d) : C(d));
                        break;
                      case 'PageDown':
                        r.preventDefault(), (h = r.shiftKey ? ((t) => S(t, 1))(d) : _(d));
                        break;
                      default:
                        return;
                    }
                    Y(h, this.minParts, this.maxParts) ||
                      (this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), h)),
                      requestAnimationFrame(() => this.focusWorkingDay(a)));
                  });
              }),
              (this.focusWorkingDay = (e) => {
                const n = e.querySelectorAll('.calendar-day-padding'),
                  { day: a } = this.workingParts;
                if (null === a) return;
                const s = e.querySelector(`.calendar-day:nth-of-type(${n.length + a})`);
                s && s.focus();
              }),
              (this.processMinParts = () => {
                if (void 0 === this.min) return void (this.minParts = void 0);
                const { month: e, day: n, year: a, hour: s, minute: o } = x(this.min);
                this.minParts = { month: e, day: n, year: a, hour: s, minute: o };
              }),
              (this.processMaxParts = () => {
                if (void 0 === this.max) return void (this.maxParts = void 0);
                const { month: e, day: n, year: a, hour: s, minute: o } = x(this.max);
                this.maxParts = { month: e, day: n, year: a, hour: s, minute: o };
              }),
              (this.initializeCalendarIOListeners = () => {
                const { calendarBodyRef: e } = this;
                if (!e) return;
                const n = (0, A.b)(this),
                  a = e.querySelectorAll('.calendar-month'),
                  s = a[0],
                  o = a[1],
                  r = a[2];
                (0, l.c)(() => {
                  let i, d;
                  e.scrollLeft = s.clientWidth * (O(this.el) ? -1 : 1);
                  const h = (p, c) => {
                    const m = 'start' === p ? d : i,
                      T = 'start' === p ? s : r,
                      E = 'start' === p ? C : _,
                      H = c[0];
                    if (H.isIntersecting) {
                      if (this.overlayIsPresenting) return void (this.overlayIsPresenting = !1);
                      if ('ios' === n && Math.abs(H.intersectionRatio - 0.7) <= 0.1)
                        return void e.style.setProperty('pointer-events', 'none');
                      e.style.setProperty('overflow', 'hidden'),
                        void 0 !== m &&
                          (m.disconnect(),
                          (0, l.c)(() => {
                            const { month: j, year: K, day: Tt } = E(this.workingParts);
                            this.setWorkingParts(
                              Object.assign(Object.assign({}, this.workingParts), { month: j, day: Tt, year: K })
                            ),
                              (e.scrollLeft = o.clientWidth * (O(this.el) ? -1 : 1)),
                              e.style.removeProperty('overflow'),
                              e.style.removeProperty('pointer-events'),
                              void 0 !== m && m.observe(T);
                          }));
                    }
                  };
                  (i = new IntersectionObserver((p) => h('end', p), {
                    threshold: 'ios' === n ? [0.7, 1] : 1,
                    root: e,
                  })),
                    i.observe(r),
                    (d = new IntersectionObserver((p) => h('start', p), {
                      threshold: 'ios' === n ? [0.7, 1] : 1,
                      root: e,
                    })),
                    d.observe(s),
                    (this.destroyCalendarIO = () => {
                      null == i || i.disconnect(), null == d || d.disconnect();
                    });
                });
              }),
              (this.destroyListeners = () => {
                const { destroyCalendarIO: e, destroyKeyboardMO: n } = this;
                void 0 !== e && e(), void 0 !== n && n();
              }),
              (this.initializeOverlayListener = () => {
                const e = this.el.closest('ion-popover, ion-modal');
                null !== e &&
                  e.addEventListener('willPresent', () => {
                    this.overlayIsPresenting = !0;
                  });
              }),
              (this.processValue = (e) => {
                const n = e || F(),
                  { month: a, day: s, year: o, hour: r, minute: i, tzOffset: d } = x(n);
                (this.workingParts = {
                  month: a,
                  day: s,
                  year: o,
                  hour: r,
                  minute: i,
                  tzOffset: d,
                  ampm: r >= 12 ? 'pm' : 'am',
                }),
                  (this.activeParts = {
                    month: a,
                    day: s,
                    year: o,
                    hour: r,
                    minute: i,
                    tzOffset: d,
                    ampm: r >= 12 ? 'pm' : 'am',
                  });
              }),
              (this.onFocus = () => {
                this.ionFocus.emit();
              }),
              (this.onBlur = () => {
                this.ionBlur.emit();
              }),
              (this.hasValue = () => null != this.value && '' !== this.value),
              (this.nextMonth = () => {
                const { calendarBodyRef: e } = this;
                if (!e) return;
                const n = e.querySelector('.calendar-month:last-of-type');
                n && e.scrollTo({ top: 0, left: 2 * n.offsetWidth * (O(this.el) ? -1 : 1), behavior: 'smooth' });
              }),
              (this.prevMonth = () => {
                const { calendarBodyRef: e } = this;
                !e ||
                  !e.querySelector('.calendar-month:first-of-type') ||
                  e.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }),
              (this.toggleMonthAndYearView = () => {
                this.showMonthAndYear = !this.showMonthAndYear;
              });
          }
          disabledChanged() {
            this.emitStyle();
          }
          minChanged() {
            this.processMinParts();
          }
          maxChanged() {
            this.processMaxParts();
          }
          yearValuesChanged() {
            this.parsedYearValues = g(this.yearValues);
          }
          monthValuesChanged() {
            this.parsedMonthValues = g(this.monthValues);
          }
          dayValuesChanged() {
            this.parsedDayValues = g(this.dayValues);
          }
          hourValuesChanged() {
            this.parsedHourValues = g(this.hourValues);
          }
          minuteValuesChanged() {
            this.parsedMinuteValues = g(this.minuteValues);
          }
          activePartsChanged() {
            this.activePartsClone = this.activeParts;
          }
          valueChanged() {
            if (this.hasValue()) {
              const { month: t, day: e, year: n, hour: a, minute: s } = x(this.value);
              this.activePartsClone = Object.assign(Object.assign({}, this.activeParts), {
                month: t,
                day: e,
                year: n,
                hour: a,
                minute: s,
              });
            }
            this.emitStyle(), this.ionChange.emit({ value: this.value });
          }
          confirm(t = !1) {
            var e = this;
            return (0, w.Z)(function* () {
              const n = new Date(W(e.workingParts));
              (e.workingParts.tzOffset = -1 * n.getTimezoneOffset()),
                (e.value = W(e.workingParts)),
                t && e.closeParentOverlay();
            })();
          }
          reset(t) {
            var e = this;
            return (0, w.Z)(function* () {
              e.processValue(t);
            })();
          }
          cancel(t = !1) {
            var e = this;
            return (0, w.Z)(function* () {
              e.ionCancel.emit(), t && e.closeParentOverlay();
            })();
          }
          connectedCallback() {
            this.clearFocusVisible = (0, U.startFocusVisible)(this.el).destroy;
          }
          disconnectedCallback() {
            this.clearFocusVisible && (this.clearFocusVisible(), (this.clearFocusVisible = void 0));
          }
          componentDidLoad() {
            let t, n;
            (t = new IntersectionObserver(
              (o) => {
                !o[0].isIntersecting ||
                  (this.initializeCalendarIOListeners(),
                  this.initializeKeyboardListeners(),
                  this.initializeOverlayListener(),
                  (0, l.c)(() => {
                    this.el.classList.add('datetime-ready');
                  }));
              },
              { threshold: 0.01 }
            )),
              (0, v.r)(() => (null == t ? void 0 : t.observe(this.el))),
              (n = new IntersectionObserver(
                (o) => {
                  o[0].isIntersecting ||
                    (this.destroyListeners(),
                    (0, l.c)(() => {
                      this.el.classList.remove('datetime-ready');
                    }));
                },
                { threshold: 0 }
              )),
              (0, v.r)(() => (null == n ? void 0 : n.observe(this.el)));
            const s = (0, v.g)(this.el);
            s.addEventListener('ionFocus', (o) => o.stopPropagation()),
              s.addEventListener('ionBlur', (o) => o.stopPropagation());
          }
          componentWillLoad() {
            this.processValue(this.value),
              this.processMinParts(),
              this.processMaxParts(),
              (this.parsedHourValues = g(this.hourValues)),
              (this.parsedMinuteValues = g(this.minuteValues)),
              (this.parsedMonthValues = g(this.monthValues)),
              (this.parsedYearValues = g(this.yearValues)),
              (this.parsedDayValues = g(this.dayValues)),
              this.emitStyle();
          }
          emitStyle() {
            this.ionStyle.emit({ interactive: !0, datetime: !0, 'interactive-disabled': this.disabled });
          }
          renderFooter() {
            const { showDefaultButtons: t, showClearButton: e } = this;
            if (null === this.el.querySelector('[slot="buttons"]') && !t && !e) return;
            const a = () => {
              this.reset(), (this.value = void 0);
            };
            return (0, l.h)(
              'div',
              { class: 'datetime-footer' },
              (0, l.h)(
                'div',
                { class: 'datetime-buttons' },
                (0, l.h)(
                  'div',
                  { class: { 'datetime-action-buttons': !0, 'has-clear-button': this.showClearButton } },
                  (0, l.h)(
                    'slot',
                    { name: 'buttons' },
                    (0, l.h)(
                      'ion-buttons',
                      null,
                      t &&
                        (0, l.h)(
                          'ion-button',
                          { id: 'cancel-button', color: this.color, onClick: () => this.cancel(!0) },
                          this.cancelText
                        ),
                      (0, l.h)(
                        'div',
                        null,
                        e &&
                          (0, l.h)(
                            'ion-button',
                            { id: 'clear-button', color: this.color, onClick: () => a() },
                            this.clearText
                          ),
                        t &&
                          (0, l.h)(
                            'ion-button',
                            { id: 'confirm-button', color: this.color, onClick: () => this.confirm(!0) },
                            this.doneText
                          )
                      )
                    )
                  )
                )
              )
            );
          }
          renderYearView() {
            const { presentation: t, workingParts: e } = this,
              n = ((t, e, n, a) => {
                if (void 0 !== a) {
                  let s = a;
                  return (
                    void 0 !== (null == n ? void 0 : n.year) && (s = s.filter((o) => o <= n.year)),
                    void 0 !== (null == e ? void 0 : e.year) && (s = s.filter((o) => o >= e.year)),
                    s
                  );
                }
                {
                  const { year: s } = t,
                    r = (null == e ? void 0 : e.year) || s - 100,
                    i = [];
                  for (let d = (null == n ? void 0 : n.year) || s; d >= r; d--) i.push(d);
                  return i;
                }
              })(this.todayParts, this.minParts, this.maxParts, this.parsedYearValues),
              a = 'year' !== t,
              s = 'month' !== t,
              o = ((t, e, n, a, s) => {
                const { year: o } = e,
                  r = [];
                if (void 0 !== s) {
                  let i = s;
                  void 0 !== (null == a ? void 0 : a.month) && (i = i.filter((d) => d <= a.month)),
                    void 0 !== (null == n ? void 0 : n.month) && (i = i.filter((d) => d >= n.month)),
                    i.forEach((d) => {
                      const h = new Date(`${d}/1/${o}`),
                        p = new Intl.DateTimeFormat(t, { month: 'long' }).format(h);
                      r.push({ text: p, value: d });
                    });
                } else {
                  const i = a && a.year === o ? a.month : 12;
                  for (let h = n && n.year === o ? n.month : 1; h <= i; h++) {
                    const p = new Date(`${h}/1/${o}`),
                      c = new Intl.DateTimeFormat(t, { month: 'long' }).format(p);
                    r.push({ text: c, value: h });
                  }
                }
                return r;
              })(this.locale, e, this.minParts, this.maxParts, this.parsedMonthValues),
              r = n.map((i) => ({ text: `${i}`, value: i }));
            return (0, l.h)(
              'div',
              { class: 'datetime-year' },
              (0, l.h)(
                'div',
                { class: 'datetime-year-body' },
                (0, l.h)(
                  'ion-picker-internal',
                  null,
                  a &&
                    (0, l.h)('ion-picker-column-internal', {
                      color: this.color,
                      items: o,
                      value: e.month,
                      onIonChange: (i) => {
                        this.setWorkingParts(
                          Object.assign(Object.assign({}, this.workingParts), { month: i.detail.value })
                        ),
                          ('month' === t || 'month-year' === t) &&
                            this.setActiveParts(
                              Object.assign(Object.assign({}, this.activeParts), { month: i.detail.value })
                            ),
                          i.stopPropagation();
                      },
                    }),
                  s &&
                    (0, l.h)('ion-picker-column-internal', {
                      color: this.color,
                      items: r,
                      value: e.year,
                      onIonChange: (i) => {
                        this.setWorkingParts(
                          Object.assign(Object.assign({}, this.workingParts), { year: i.detail.value })
                        ),
                          ('year' === t || 'month-year' === t) &&
                            this.setActiveParts(
                              Object.assign(Object.assign({}, this.activeParts), { year: i.detail.value })
                            ),
                          i.stopPropagation();
                      },
                    })
                )
              )
            );
          }
          renderCalendarHeader(t) {
            const e = 'ios' === t ? y.g : y.h,
              n = 'ios' === t ? y.f : y.i;
            return (0, l.h)(
              'div',
              { class: 'calendar-header' },
              (0, l.h)(
                'div',
                { class: 'calendar-action-buttons' },
                (0, l.h)(
                  'div',
                  { class: 'calendar-month-year' },
                  (0, l.h)(
                    'ion-item',
                    { button: !0, detail: !1, lines: 'none', onClick: () => this.toggleMonthAndYearView() },
                    (0, l.h)(
                      'ion-label',
                      null,
                      ((t, e) => {
                        const n = new Date(`${e.month}/${e.day}/${e.year}`);
                        return new Intl.DateTimeFormat(t, { month: 'long', year: 'numeric' }).format(n);
                      })(this.locale, this.workingParts),
                      ' ',
                      (0, l.h)('ion-icon', { icon: this.showMonthAndYear ? e : n, lazy: !1 })
                    )
                  )
                ),
                (0, l.h)(
                  'div',
                  { class: 'calendar-next-prev' },
                  (0, l.h)(
                    'ion-buttons',
                    null,
                    (0, l.h)(
                      'ion-button',
                      { onClick: () => this.prevMonth() },
                      (0, l.h)('ion-icon', { slot: 'icon-only', icon: y.d, lazy: !1, flipRtl: !0 })
                    ),
                    (0, l.h)(
                      'ion-button',
                      { onClick: () => this.nextMonth() },
                      (0, l.h)('ion-icon', { slot: 'icon-only', icon: y.f, lazy: !1, flipRtl: !0 })
                    )
                  )
                )
              ),
              (0, l.h)(
                'div',
                { class: 'calendar-days-of-week' },
                ((t, e, n = 0) => {
                  const s = new Intl.DateTimeFormat(this.locale, { weekday: 'ios' === e ? 'short' : 'narrow' }),
                    o = new Date('11/01/2020'),
                    r = [];
                  for (let i = n; i < n + 7; i++) {
                    const d = new Date(o);
                    d.setDate(d.getDate() + i), r.push(s.format(d));
                  }
                  return r;
                })(0, t, this.firstDayOfWeek % 7).map((a) => (0, l.h)('div', { class: 'day-of-week' }, a))
              )
            );
          }
          renderMonth(t, e) {
            const n = void 0 === this.parsedYearValues || this.parsedYearValues.includes(e),
              a = void 0 === this.parsedMonthValues || this.parsedMonthValues.includes(t),
              s = !n || !a;
            return (0, l.h)(
              'div',
              { class: 'calendar-month' },
              (0, l.h)(
                'div',
                { class: 'calendar-month-grid' },
                ((t, e, n) => {
                  const a = b(t, e),
                    s = new Date(`${t}/1/${e}`).getDay(),
                    o = s >= n ? s - (n + 1) : 6 - (n - s);
                  let r = [];
                  for (let i = 1; i <= a; i++) r.push({ day: i, dayOfWeek: (o + i) % 7 });
                  for (let i = 0; i <= o; i++) r = [{ day: null, dayOfWeek: null }, ...r];
                  return r;
                })(t, e, this.firstDayOfWeek % 7).map((o, r) => {
                  const { day: i, dayOfWeek: d } = o,
                    h = { month: t, day: i, year: e },
                    {
                      isActive: p,
                      isToday: c,
                      ariaLabel: m,
                      ariaSelected: T,
                      disabled: E,
                    } = ((t, e, n, a, s, o, r) => {
                      const i = k(e, this.activePartsClone),
                        d = k(e, a);
                      return {
                        disabled: Y(e, s, o, r),
                        isActive: i,
                        isToday: d,
                        ariaSelected: i ? 'true' : null,
                        ariaLabel: xt(t, d, e),
                      };
                    })(this.locale, h, 0, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
                  return (0, l.h)(
                    'button',
                    {
                      tabindex: '-1',
                      'data-day': i,
                      'data-month': t,
                      'data-year': e,
                      'data-index': r,
                      'data-day-of-week': d,
                      disabled: s || E,
                      class: {
                        'calendar-day-padding': null === i,
                        'calendar-day': !0,
                        'calendar-day-active': p,
                        'calendar-day-today': c,
                      },
                      'aria-selected': T,
                      'aria-label': m,
                      onClick: () => {
                        null !== i &&
                          (this.setWorkingParts(
                            Object.assign(Object.assign({}, this.workingParts), { month: t, day: i, year: e })
                          ),
                          this.setActiveParts(
                            Object.assign(Object.assign({}, this.activeParts), { month: t, day: i, year: e })
                          ));
                      },
                    },
                    i
                  );
                })
              )
            );
          }
          renderCalendarBody() {
            return (0, l.h)(
              'div',
              { class: 'calendar-body ion-focusable', ref: (t) => (this.calendarBodyRef = t), tabindex: '0' },
              ((t = this.workingParts), [C(t), { month: t.month, year: t.year, day: t.day }, _(t)]).map(
                ({ month: t, year: e }) => this.renderMonth(t, e)
              )
            );
            var t;
          }
          renderCalendar(t) {
            return (0, l.h)(
              'div',
              { class: 'datetime-calendar' },
              this.renderCalendarHeader(t),
              this.renderCalendarBody()
            );
          }
          renderTimeLabel() {
            if (null !== this.el.querySelector('[slot="time-label"]') || this.showDefaultTimeLabel)
              return (0, l.h)('slot', { name: 'time-label' }, 'Time');
          }
          renderTimePicker(t, e, n, a) {
            const { color: s, activePartsClone: o, workingParts: r } = this;
            return (0, l.h)(
              'ion-picker-internal',
              null,
              (0, l.h)('ion-picker-column-internal', {
                color: s,
                value: o.hour,
                items: t,
                numericInput: !0,
                onIonChange: (i) => {
                  this.setWorkingParts(Object.assign(Object.assign({}, r), { hour: i.detail.value })),
                    this.setActiveParts(Object.assign(Object.assign({}, o), { hour: i.detail.value })),
                    i.stopPropagation();
                },
              }),
              (0, l.h)('ion-picker-column-internal', {
                color: s,
                value: o.minute,
                items: e,
                numericInput: !0,
                onIonChange: (i) => {
                  this.setWorkingParts(Object.assign(Object.assign({}, r), { minute: i.detail.value })),
                    this.setActiveParts(Object.assign(Object.assign({}, o), { minute: i.detail.value })),
                    i.stopPropagation();
                },
              }),
              !a &&
                (0, l.h)('ion-picker-column-internal', {
                  color: s,
                  value: o.ampm,
                  items: n,
                  onIonChange: (i) => {
                    const d = ((t, e) => {
                      const { ampm: n, hour: a } = t;
                      let s = a;
                      return (
                        'am' === n && 'pm' === e
                          ? (s = B(s, 'pm'))
                          : 'pm' === n && 'am' === e && (s = Math.abs(s - 12)),
                        s
                      );
                    })(r, i.detail.value);
                    this.setWorkingParts(Object.assign(Object.assign({}, r), { ampm: i.detail.value, hour: d })),
                      this.setActiveParts(Object.assign(Object.assign({}, o), { ampm: i.detail.value, hour: d })),
                      i.stopPropagation();
                  },
                })
            );
          }
          renderTimeOverlay(t, e, n, a) {
            var o,
              s = this;
            return [
              (0, l.h)('div', { class: 'time-header' }, this.renderTimeLabel()),
              (0, l.h)(
                'button',
                {
                  class: { 'time-body': !0, 'time-body-active': this.isTimePopoverOpen },
                  'aria-expanded': 'false',
                  'aria-haspopup': 'true',
                  onClick:
                    ((o = (0, w.Z)(function* (r) {
                      const { popoverRef: i } = s;
                      i &&
                        ((s.isTimePopoverOpen = !0), i.present(r), yield i.onWillDismiss(), (s.isTimePopoverOpen = !1));
                    })),
                    function (i) {
                      return o.apply(this, arguments);
                    }),
                },
                bt(this.activePartsClone, a)
              ),
              (0, l.h)(
                'ion-popover',
                {
                  alignment: 'center',
                  translucent: !0,
                  overlayIndex: 1,
                  arrow: !1,
                  style: { '--offset-y': '-10px' },
                  keyboardEvents: !0,
                  ref: (o) => (this.popoverRef = o),
                },
                this.renderTimePicker(t, e, n, a)
              ),
            ];
          }
          renderTime() {
            const { workingParts: t, presentation: e } = this,
              n = 'time' === e,
              a = ((t, e) => {
                if (void 0 !== e) return 'h23' === e;
                const n = new Intl.DateTimeFormat(this.locale, { hour: 'numeric' }),
                  a = n.resolvedOptions();
                if (void 0 !== a.hourCycle) return 'h23' === a.hourCycle;
                const s = new Date('5/18/2021 00:00'),
                  r = n.formatToParts(s).find((i) => 'hour' === i.type);
                if (!r) throw new Error('Hour value not found from DateTimeFormat');
                return '00' === r.value;
              })(0, this.hourCycle),
              {
                hours: s,
                minutes: o,
                am: r,
                pm: i,
              } = ((t, e = 'h12', n, a, s, o) => {
                const r = 'h23' === e;
                let i = r ? lt : dt,
                  d = rt,
                  h = !0,
                  p = !0;
                if ((s && (i = i.filter((c) => s.includes(c))), o && (d = d.filter((c) => o.includes(c))), n))
                  if (k(t, n)) {
                    if (
                      (void 0 !== n.hour &&
                        ((i = i.filter((c) => (r ? c : 'pm' === t.ampm ? (c + 12) % 24 : c) >= n.hour)),
                        (h = n.hour < 13)),
                      void 0 !== n.minute)
                    ) {
                      let c = !1;
                      void 0 !== n.hour && void 0 !== t.hour && t.hour > n.hour && (c = !0),
                        (d = d.filter((m) => !!c || m >= n.minute));
                    }
                  } else P(t, n) && ((i = []), (d = []), (h = p = !1));
                return (
                  a &&
                    (k(t, a)
                      ? (void 0 !== a.hour &&
                          ((i = i.filter((c) => ('pm' === t.ampm ? (c + 12) % 24 : c) <= a.hour)), (p = a.hour >= 13)),
                        void 0 !== a.minute && (d = d.filter((c) => c <= a.minute)))
                      : z(t, a) && ((i = []), (d = []), (h = p = !1))),
                  { hours: i, minutes: d, am: h, pm: p }
                );
              })(
                this.workingParts,
                a ? 'h23' : 'h12',
                this.minParts,
                this.maxParts,
                this.parsedHourValues,
                this.parsedMinuteValues
              ),
              d = s.map((c) => ({ text: R(c, a), value: ot(c, a, t.ampm) })),
              h = o.map((c) => ({ text: I(c), value: c })),
              p = [];
            return (
              r && p.push({ text: 'AM', value: 'am' }),
              i && p.push({ text: 'PM', value: 'pm' }),
              (0, l.h)(
                'div',
                { class: 'datetime-time' },
                n ? this.renderTimePicker(d, h, p, a) : this.renderTimeOverlay(d, h, p, a)
              )
            );
          }
          renderCalendarViewHeader(t) {
            if (null !== this.el.querySelector('[slot="title"]') || this.showDefaultTitle)
              return (0, l.h)(
                'div',
                { class: 'datetime-header' },
                (0, l.h)('div', { class: 'datetime-title' }, (0, l.h)('slot', { name: 'title' }, 'Select Date')),
                'md' === t &&
                  (0, l.h)(
                    'div',
                    { class: 'datetime-selected-date' },
                    ((t, e) => {
                      const n = new Date(`${e.month}/${e.day}/${e.year}`);
                      return new Intl.DateTimeFormat(t, { weekday: 'short', month: 'short', day: 'numeric' }).format(n);
                    })(this.locale, this.activeParts)
                  )
              );
          }
          renderDatetime(t) {
            const { presentation: e } = this;
            switch (e) {
              case 'date-time':
                return [
                  this.renderCalendarViewHeader(t),
                  this.renderCalendar(t),
                  this.renderYearView(),
                  this.renderTime(),
                  this.renderFooter(),
                ];
              case 'time-date':
                return [
                  this.renderCalendarViewHeader(t),
                  this.renderTime(),
                  this.renderCalendar(t),
                  this.renderYearView(),
                  this.renderFooter(),
                ];
              case 'time':
                return [this.renderTime(), this.renderFooter()];
              case 'month':
              case 'month-year':
              case 'year':
                return [this.renderYearView(), this.renderFooter()];
              default:
                return [
                  this.renderCalendarViewHeader(t),
                  this.renderCalendar(t),
                  this.renderYearView(),
                  this.renderFooter(),
                ];
            }
          }
          render() {
            const {
                name: t,
                value: e,
                disabled: n,
                el: a,
                color: s,
                isPresented: o,
                readonly: r,
                showMonthAndYear: i,
                presentation: d,
                size: h,
              } = this,
              p = (0, A.b)(this),
              m = i || 'year' === d || 'month' === d || 'month-year' === d;
            return (
              (0, v.h)(!0, a, t, e, n),
              (0, l.h)(
                l.H,
                {
                  'aria-disabled': n ? 'true' : null,
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  class: Object.assign(
                    {},
                    (0, N.c)(s, {
                      [p]: !0,
                      'datetime-presented': o,
                      'datetime-readonly': r,
                      'datetime-disabled': n,
                      'show-month-and-year': m,
                      [`datetime-presentation-${d}`]: !0,
                      [`datetime-size-${h}`]: !0,
                    })
                  ),
                },
                this.renderDatetime(p)
              )
            );
          }
          get el() {
            return (0, l.i)(this);
          }
          static get watchers() {
            return {
              disabled: ['disabledChanged'],
              min: ['minChanged'],
              max: ['maxChanged'],
              yearValues: ['yearValuesChanged'],
              monthValues: ['monthValuesChanged'],
              dayValues: ['dayValuesChanged'],
              hourValues: ['hourValuesChanged'],
              minuteValues: ['minuteValuesChanged'],
              activeParts: ['activePartsChanged'],
              value: ['valueChanged'],
            };
          }
        },
        It = 0;
      $.style = {
        ios: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;max-width:350px;height:auto}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr);height:100%}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;left:50%;top:50%;position:absolute;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:" ";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host-context([dir=rtl]){left:unset;right:unset;right:50%}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time),:host(.datetime-presentation-time-date),:host(.datetime-presentation-date){min-height:350px}:host .datetime-header{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-header .datetime-title{color:var(--title-color);font-size:14px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-day{font-size:20px}:host .calendar-day:after{opacity:0.2}:host .calendar-day:focus:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-active:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-today.calendar-day-active:after{background:var(--ion-color-base);opacity:1}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:16px;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}',
        md: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;max-width:350px;height:auto}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr);height:100%}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;left:50%;top:50%;position:absolute;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:" ";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host-context([dir=rtl]){left:unset;right:unset;right:50%}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{padding-left:10px;padding-right:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:10px;padding-right:10px;padding-top:3px;padding-bottom:0px;grid-template-rows:repeat(6, 1fr)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-day{padding-left:0px;padding-right:0;padding-top:13px;padding-bottom:13px;font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-day:focus:after{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-today:after{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-active:after{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}',
      };
    },
  },
]);
