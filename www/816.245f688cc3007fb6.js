'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [816],
  {
    816: (h, s, e) => {
      e.r(s), e.d(s, { startStatusTap: () => d });
      var l = e(5861),
        o = e(9533),
        _ = e(6499);
      const d = () => {
        const n = window;
        n.addEventListener('statusTap', () => {
          (0, o.f)(() => {
            const r = document.elementFromPoint(n.innerWidth / 2, n.innerHeight / 2);
            if (!r) return;
            const t = r.closest('ion-content');
            t &&
              new Promise((a) => (0, _.c)(t, a)).then(() => {
                (0, o.c)(
                  (0, l.Z)(function* () {
                    t.style.setProperty('--overflow', 'hidden'),
                      yield t.scrollToTop(300),
                      t.style.removeProperty('--overflow');
                  })
                );
              });
          });
        });
      };
    },
  },
]);
