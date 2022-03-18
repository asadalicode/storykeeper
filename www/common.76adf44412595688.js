'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [8592],
  {
    4560: (x, r, c) => {
      c.r(r), c.d(r, { startFocusVisible: () => g });
      const a = 'ion-focused',
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
        g = (s) => {
          let l = [],
            e = !0;
          const t = s ? s.shadowRoot : document,
            u = s || document.body,
            n = (o) => {
              l.forEach((i) => i.classList.remove(a)), o.forEach((i) => i.classList.add(a)), (l = o);
            },
            w = () => {
              (e = !1), n([]);
            },
            h = (o) => {
              (e = v.includes(o.key)), e || n([]);
            },
            m = (o) => {
              if (e && o.composedPath) {
                const i = o.composedPath().filter((f) => !!f.classList && f.classList.contains('ion-focusable'));
                n(i);
              }
            },
            p = () => {
              t.activeElement === u && n([]);
            };
          return (
            t.addEventListener('keydown', h),
            t.addEventListener('focusin', m),
            t.addEventListener('focusout', p),
            t.addEventListener('touchstart', w),
            t.addEventListener('mousedown', w),
            {
              destroy: () => {
                t.removeEventListener('keydown', h),
                  t.removeEventListener('focusin', m),
                  t.removeEventListener('focusout', p),
                  t.removeEventListener('touchstart', w),
                  t.removeEventListener('mousedown', w);
              },
              setFocus: n,
            }
          );
        };
    },
    6223: (x, r, c) => {
      c.d(r, {
        a: () => a,
        b: () => t,
        c: () => d,
        d: () => s,
        e: () => u,
        f: () => e,
        g: () => l,
        h: () => g,
        i: () => v,
      });
      const a =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
        d =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",
        v =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",
        g =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",
        s =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
        l =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
        e =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        t =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        u =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
    },
  },
]);
