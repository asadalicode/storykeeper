'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [7010],
  {
    7010: (g, s, u) => {
      u.r(s), u.d(s, { AboutModule: () => m });
      var c = u(9808),
        a = u(7232),
        o = u(8526),
        i = u(6747),
        l = u(7520),
        A = u(710),
        n = u(5e3);
      const Z = [
        {
          path: '',
          component: (() => {
            class t {
              constructor() {
                this.version = A.N.version;
              }
              ngOnInit() {}
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = n.Xpm({
                type: t,
                selectors: [['app-about']],
                decls: 34,
                vars: 1,
                consts: [
                  ['color', 'primary'],
                  ['slot', 'start'],
                  ['translate', ''],
                  [1, 'ion-text-center'],
                  ['name', 'code'],
                ],
                template: function (e, U) {
                  1 & e &&
                    (n.TgZ(0, 'ion-header'),
                    n._uU(1, '\n  '),
                    n.TgZ(2, 'ion-toolbar', 0),
                    n._uU(3, '\n    '),
                    n.TgZ(4, 'ion-buttons', 1),
                    n._uU(5, '\n      '),
                    n._UZ(6, 'ion-menu-button'),
                    n._uU(7, '\n    '),
                    n.qZA(),
                    n._uU(8, '\n    '),
                    n.TgZ(9, 'ion-title'),
                    n.TgZ(10, 'span', 2),
                    n._uU(11, 'About'),
                    n.qZA(),
                    n.qZA(),
                    n._uU(12, '\n  '),
                    n.qZA(),
                    n._uU(13, '\n'),
                    n.qZA(),
                    n._uU(14, '\n'),
                    n.TgZ(15, 'ion-content'),
                    n._uU(16, '\n  '),
                    n.TgZ(17, 'ion-card', 3),
                    n._uU(18, '\n    '),
                    n.TgZ(19, 'ion-card-content'),
                    n._uU(20, '\n      '),
                    n.TgZ(21, 'ion-card-title', 2),
                    n._uU(22, 'APP_NAME'),
                    n.qZA(),
                    n._uU(23, '\n      '),
                    n.TgZ(24, 'p'),
                    n._UZ(25, 'ion-icon', 4),
                    n._uU(26, ' '),
                    n.TgZ(27, 'span', 2),
                    n._uU(28, 'Version'),
                    n.qZA(),
                    n._uU(29),
                    n.qZA(),
                    n._uU(30, '\n    '),
                    n.qZA(),
                    n._uU(31, '\n  '),
                    n.qZA(),
                    n._uU(32, '\n'),
                    n.qZA(),
                    n._uU(33, '\n')),
                    2 & e && (n.xp6(29), n.hij(' ', U.version, ''));
                },
                directives: [o.Gu, o.sr, o.Sm, o.fG, o.wd, a.Pi, o.W2, o.PM, o.FN, o.Dq, o.gu],
                styles: [''],
              })),
              t
            );
          })(),
          data: { title: (0, l.J)('About') },
        },
      ];
      let d = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = n.oAB({ type: t })),
            (t.ɵinj = n.cJS({ providers: [], imports: [[i.Bz.forChild(Z)], i.Bz] })),
            t
          );
        })(),
        m = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = n.oAB({ type: t })),
            (t.ɵinj = n.cJS({ imports: [[c.ez, a.aw, o.Pc, d]] })),
            t
          );
        })();
    },
  },
]);
