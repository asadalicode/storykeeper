'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [2442],
  {
    2442: (O, c, e) => {
      e.r(c), e.d(c, { createSwipeBackGesture: () => E });
      var h = e(6499),
        _ = e(1363);
      e(2733);
      const E = (a, g, D, M, m) => {
        const r = a.ownerDocument.defaultView;
        return (0, _.createGesture)({
          el: a,
          gestureName: 'goback-swipe',
          gesturePriority: 40,
          threshold: 10,
          canStart: (t) => t.startX <= 50 && g(),
          onStart: D,
          onMove: (t) => {
            M(t.deltaX / r.innerWidth);
          },
          onEnd: (t) => {
            const s = r.innerWidth,
              n = t.deltaX / s,
              o = t.velocityX,
              l = o >= 0 && (o > 0.2 || t.deltaX > s / 2),
              d = (l ? 1 - n : n) * s;
            let u = 0;
            if (d > 5) {
              const C = d / Math.abs(o);
              u = Math.min(C, 540);
            }
            m(l, n <= 0 ? 0.01 : (0, h.d)(0, n, 0.9999), u);
          },
        });
      };
    },
  },
]);
