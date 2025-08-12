import be, { forwardRef as oe, createElement as xe, useState as w, useRef as re, useCallback as m, useEffect as S, useMemo as Ze } from "react";
var ye = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je = be, Xe = Symbol.for("react.element"), Ye = Symbol.for("react.fragment"), Ge = Object.prototype.hasOwnProperty, Qe = Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
function we(a, n, c) {
  var i, p = {}, _ = null, k = null;
  c !== void 0 && (_ = "" + c), n.key !== void 0 && (_ = "" + n.key), n.ref !== void 0 && (k = n.ref);
  for (i in n) Ge.call(n, i) && !Fe.hasOwnProperty(i) && (p[i] = n[i]);
  if (a && a.defaultProps) for (i in n = a.defaultProps, n) p[i] === void 0 && (p[i] = n[i]);
  return { $$typeof: Xe, type: a, key: _, ref: k, props: p, _owner: Qe.current };
}
he.Fragment = Ye;
he.jsx = we;
he.jsxs = we;
ye.exports = he;
var e = ye.exports;
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), es = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, c, i) => i ? i.toUpperCase() : c.toLowerCase()
), je = (a) => {
  const n = es(a);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ke = (...a) => a.filter((n, c, i) => !!n && n.trim() !== "" && i.indexOf(n) === c).join(" ").trim(), ss = (a) => {
  for (const n in a)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ts = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = oe(
  ({
    color: a = "currentColor",
    size: n = 24,
    strokeWidth: c = 2,
    absoluteStrokeWidth: i,
    className: p = "",
    children: _,
    iconNode: k,
    ...z
  }, $) => xe(
    "svg",
    {
      ref: $,
      ...ts,
      width: n,
      height: n,
      stroke: a,
      strokeWidth: i ? Number(c) * 24 / Number(n) : c,
      className: ke("lucide", p),
      ...!_ && !ss(z) && { "aria-hidden": "true" },
      ...z
    },
    [
      ...k.map(([v, x]) => xe(v, x)),
      ...Array.isArray(_) ? _ : [_]
    ]
  )
);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = (a, n) => {
  const c = oe(
    ({ className: i, ...p }, _) => xe(as, {
      ref: _,
      iconNode: n,
      className: ke(
        `lucide-${Se(je(a))}`,
        `lucide-${a}`,
        i
      ),
      ...p
    })
  );
  return c.displayName = je(a), c;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ns = ie("check", is);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], fe = ie("clock", ls);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], cs = ie("copy", rs);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ne = ie("file-text", ds);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], ge = ie("loader-circle", os);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ms = ie("search", ps);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ve = ie("x", us);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], hs = ie("zap", _s), fs = oe(
  ({
    as: a,
    className: n = "",
    variant: c = "primary",
    size: i = "md",
    loading: p = !1,
    block: _ = !1,
    disabled: k = !1,
    type: z = "button",
    onClick: $,
    style: v,
    children: x,
    ...u
  }, L) => {
    const g = a || "button";
    if (g === "button") {
      const I = "btn", K = `btn--${c}`, M = `btn--${i}`, P = [
        I,
        K,
        M,
        _ ? "btn--block" : "",
        p ? "btn--loading" : "",
        k || p ? "btn--disabled" : "",
        n
      ].filter(Boolean).join(" "), s = (l) => {
        if (k || p) {
          l.preventDefault();
          return;
        }
        $ == null || $(l);
      };
      return /* @__PURE__ */ e.jsxs(
        "button",
        {
          ref: L,
          type: z,
          className: P,
          disabled: k || p,
          onClick: s,
          style: v,
          ...u,
          children: [
            p && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(ge, { className: "btn__loading-svg", size: 16 }) }),
            /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: x })
          ]
        }
      );
    }
    const h = "btn", D = `btn--${c}`, b = `btn--${i}`, W = [
      h,
      D,
      b,
      _ ? "btn--block" : "",
      p ? "btn--loading" : "",
      n
    ].filter(Boolean).join(" ");
    return be.createElement(g, {
      ref: L,
      className: W,
      style: v,
      ...u
    }, [
      p && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(ge, { className: "btn__loading-svg", size: 16 }) }, "loading"),
      /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: x }, "content")
    ].filter(Boolean));
  }
);
fs.displayName = "Button";
const xs = oe(({
  initialMessages: a = [],
  placeholder: n = "输入消息...",
  disabled: c = !1,
  onSendMessage: i,
  renderMessage: p,
  className: _ = "",
  style: k,
  ...z
}, $) => {
  const v = Array.isArray(a) ? a : [], [x, u] = w(v), [L, g] = w(""), [h, D] = w(!1), [b, T] = w(/* @__PURE__ */ new Set()), R = re(null), W = re(null), I = m(() => {
    var s;
    (s = R.current) != null && s.scrollIntoView && R.current.scrollIntoView({ behavior: "smooth" });
  }, []), K = m(() => {
    var l;
    const s = (l = R.current) == null ? void 0 : l.parentElement;
    if (s) {
      const d = document.createElement("div");
      d.style.height = "1px", d.style.visibility = "hidden", s.appendChild(d), setTimeout(() => {
        d.parentNode && d.parentNode.removeChild(d);
      }, 0);
    }
  }, []);
  S(() => {
    I(), K();
  }, [x, I, K]);
  const M = m((s, l) => {
    const d = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: s,
      type: l,
      timestamp: /* @__PURE__ */ new Date()
    };
    return u((y) => [...y, d]), d;
  }, []), V = m(async (s) => {
    const l = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: "",
      type: "assistant",
      timestamp: /* @__PURE__ */ new Date(),
      isTyping: !0
    };
    u((A) => [...A, l]);
    let d = "";
    const y = s.split(" ");
    for (let A = 0; A < y.length; A++)
      d += (A > 0 ? " " : "") + y[A], u(
        (C) => C.map(
          (f) => f.id === l.id ? { ...f, content: d } : f
        )
      ), await new Promise((C) => setTimeout(C, 100 + Math.random() * 50));
    u(
      (A) => A.map(
        (C) => C.id === l.id ? { ...C, isTyping: !1 } : C
      )
    );
  }, []), q = m(async () => {
    if (!L.trim() || c || !i && h) return;
    const s = L.trim(), l = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (!b.has(l)) {
      T((d) => {
        const y = new Set(d);
        return y.add(l), y;
      }), M(s, "user"), g(""), i || D(!0);
      try {
        if (i) {
          const d = await i(s);
          typeof d == "string" && d.trim() && await V(d);
        } else {
          const d = `这是对"${s}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
          await V(d);
        }
      } catch (d) {
        console.error("发送消息失败:", d), M("抱歉，发送消息时出现错误，请重试。", "assistant");
      } finally {
        i || D(!1), T((d) => {
          const y = new Set(d);
          return y.delete(l), y;
        });
      }
    }
  }, [L, c, h, M, i, V, b]), j = m((s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), q());
  }, [q]), P = (s) => /* @__PURE__ */ e.jsxs("div", { className: `chat-message chat-message--${s.type}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "chat-message__avatar", children: s.type === "user" ? "👤" : "🤖" }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-message__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "chat-message__text", children: [
        s.content,
        s.isTyping && /* @__PURE__ */ e.jsx("span", { className: "chat-message__typing-indicator", children: "|" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-message__timestamp", children: s.timestamp.toLocaleTimeString() })
    ] })
  ] }, s.id);
  return /* @__PURE__ */ e.jsxs("div", { ref: $, className: `chat-interface ${_}`, style: k, ...z, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__header", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "chat-interface__title", children: "AI 助手" }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-interface__status", children: !i && h ? "正在思考..." : "在线" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__messages", children: [
      x.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__empty", children: [
        /* @__PURE__ */ e.jsx("div", { className: "chat-interface__empty-icon", children: "💬" }),
        /* @__PURE__ */ e.jsx("p", { children: "开始与AI助手对话吧！" })
      ] }) : x.map((s) => /* @__PURE__ */ e.jsx("div", { children: p ? p(s) : P(s) }, s.id)),
      /* @__PURE__ */ e.jsx("div", { ref: R })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__input", children: [
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          ref: W,
          value: L,
          onChange: (s) => g(s.target.value),
          onKeyDown: j,
          placeholder: n,
          disabled: c || !i && h,
          className: "chat-interface__textarea",
          rows: 1
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: q,
          disabled: !L.trim() || c || !i && h,
          className: "chat-interface__send-btn",
          "aria-label": "发送消息",
          children: !i && h ? /* @__PURE__ */ e.jsx("span", { className: "chat-interface__loading-spinner" }) : "发送"
        }
      )
    ] })
  ] });
});
xs.displayName = "ChatInterface";
const js = oe(
  ({
    type: a = "text",
    variant: n = "outline",
    size: c = "md",
    disabled: i = !1,
    readOnly: p = !1,
    required: _ = !1,
    placeholder: k,
    defaultValue: z,
    value: $,
    onChange: v,
    onFocus: x,
    onBlur: u,
    onKeyDown: L,
    onEnter: g,
    prefix: h,
    suffix: D,
    allowClear: b = !1,
    showPasswordToggle: T = !1,
    label: R,
    helpText: W,
    errorText: I,
    showCount: K = !1,
    maxLength: M,
    className: V = "",
    style: q,
    name: j,
    id: P,
    autoComplete: s,
    autoFocus: l,
    inputMode: d,
    ...y
  }, A) => {
    const [C, f] = w(z || ""), [Q, O] = w(!1), [o, E] = w(!1), ee = $ !== void 0 ? $ : C, pe = !!I, F = a === "password", H = m((N) => {
      const me = N.target.value;
      $ === void 0 && f(me), v == null || v(me, N);
    }, [$, v]), Y = m(() => {
      $ === void 0 && f(""), v == null || v("", {});
    }, [$, v]), U = m(() => {
      E((N) => !N);
    }, []), G = m((N) => {
      N.key === "Enter" && (g == null || g(ee)), L == null || L(N);
    }, [ee, g, L]), Z = m((N) => {
      O(!0), x == null || x(N);
    }, [x]), se = m((N) => {
      O(!1), u == null || u(N);
    }, [u]), J = "input", ce = `input--${n}`, B = `input--${c}`, ue = [
      J,
      ce,
      B,
      i ? "input--disabled" : p ? "input--readonly" : pe ? "input--error" : Q ? "input--focused" : "",
      V
    ].filter(Boolean).join(" "), ae = () => h ? /* @__PURE__ */ e.jsx("span", { className: "input__prefix", "aria-hidden": "true", children: h }) : null, _e = () => {
      const N = [];
      return K && M && N.push(
        /* @__PURE__ */ e.jsxs("span", { className: "input__count", children: [
          ee.length,
          "/",
          M
        ] }, "count")
      ), F && T && N.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__password-toggle",
            onClick: U,
            "aria-label": o ? "隐藏密码" : "显示密码",
            tabIndex: -1,
            children: o ? "👁️" : "👁️‍🗨️"
          },
          "password-toggle"
        )
      ), b && ee && !i && !p && N.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__clear",
            onClick: Y,
            "aria-label": "清除输入",
            tabIndex: -1,
            children: "✕"
          },
          "clear"
        )
      ), D && N.push(
        /* @__PURE__ */ e.jsx("span", { className: "input__suffix", "aria-hidden": "true", children: D }, "suffix")
      ), N.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "input__suffix-group", children: N }) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: "input__wrapper", children: [
      R && /* @__PURE__ */ e.jsxs("label", { className: "input__label", htmlFor: P, children: [
        R,
        _ && /* @__PURE__ */ e.jsx("span", { className: "input__required", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "input__container", children: [
        ae(),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: A,
            id: P,
            name: j,
            type: F && T ? o ? "text" : "password" : a,
            value: ee,
            onChange: H,
            onFocus: Z,
            onBlur: se,
            onKeyDown: G,
            placeholder: k,
            disabled: i,
            readOnly: p,
            required: _,
            maxLength: M,
            autoComplete: s,
            autoFocus: l,
            inputMode: d,
            className: ue,
            style: q,
            ...y
          }
        ),
        _e()
      ] }),
      (W || I) && /* @__PURE__ */ e.jsx("div", { className: `input__message ${pe ? "input__message--error" : "input__message--help"}`, children: I || W })
    ] });
  }
);
js.displayName = "Input";
const Ns = [
  "id",
  "title",
  "lang",
  "dir",
  "tabIndex",
  "accessKey",
  "contentEditable",
  "contextMenu",
  "draggable",
  "dropzone",
  "hidden",
  "spellCheck",
  "translate",
  "aria-*",
  "data-*"
], gs = (a) => {
  const n = {};
  return Object.keys(a).forEach((c) => {
    Ns.some((i) => c === i || c.startsWith("aria-") || c.startsWith("data-")) && (n[c] = a[c]);
  }), n;
}, vs = oe(
  ({
    content: a,
    status: n = "success",
    showTimestamp: c = !0,
    timestamp: i,
    showCopyButton: p = !0,
    avatar: _,
    username: k = "AI Assistant",
    showUsername: z = !0,
    className: $ = "",
    style: v,
    onCopy: x,
    onCopyError: u,
    onClick: L,
    enableCodeHighlight: g = !0,
    ...h
  }, D) => {
    const [b, T] = w(!1), R = m((s) => s instanceof Date ? s.toLocaleTimeString() : new Date(s).toLocaleTimeString(), []), W = m(async () => {
      try {
        await navigator.clipboard.writeText(a), T(!0), x == null || x(a), setTimeout(() => T(!1), 2e3);
      } catch (s) {
        u == null || u(s);
      }
    }, [a, x, u]), I = m(() => {
      if (!g)
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: a });
      if (!a.trim())
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content" });
      const s = a.split(`
`), l = [];
      let d = "", y = !1, A = "";
      const C = () => {
        if (d.trim()) {
          let f = d;
          f = f.replace(/\*\*(.*?)\*\*/g, (Q, O) => `<strong class="ai-message__bold">${O}</strong>`), f = f.replace(/\*(.*?)\*/g, (Q, O) => `<em class="ai-message__italic">${O}</em>`), f = f.replace(/`(.*?)`/g, (Q, O) => `<code class="ai-message__inline-code">${O}</code>`), l.push(
            /* @__PURE__ */ e.jsx(
              "p",
              {
                className: "ai-message__text",
                dangerouslySetInnerHTML: { __html: f }
              },
              `text-${l.length}`
            )
          ), d = "";
        }
      };
      return s.forEach((f) => {
        var Q;
        if (f.startsWith("```"))
          y ? (C(), l.push(
            /* @__PURE__ */ e.jsx("pre", { className: "ai-message__code-block", children: /* @__PURE__ */ e.jsx("code", { children: A }) }, `code-${l.length}`)
          ), y = !1, A = "") : (C(), y = !0);
        else if (y)
          A += f + `
`;
        else if (f.startsWith("#")) {
          C();
          const O = ((Q = f.match(/^#+/)) == null ? void 0 : Q[0].length) || 1, o = f.replace(/^#+\s*/, ""), E = Math.min(O, 6);
          E === 1 ? l.push(
            /* @__PURE__ */ e.jsx("h1", { className: "ai-message__heading ai-message__heading--h1", children: o }, `heading-${l.length}`)
          ) : E === 2 ? l.push(
            /* @__PURE__ */ e.jsx("h2", { className: "ai-message__heading ai-message__heading--h2", children: o }, `heading-${l.length}`)
          ) : E === 3 ? l.push(
            /* @__PURE__ */ e.jsx("h3", { className: "ai-message__heading ai-message__heading--h3", children: o }, `heading-${l.length}`)
          ) : E === 4 ? l.push(
            /* @__PURE__ */ e.jsx("h4", { className: "ai-message__heading ai-message__heading--h4", children: o }, `heading-${l.length}`)
          ) : E === 5 ? l.push(
            /* @__PURE__ */ e.jsx("h5", { className: "ai-message__heading ai-message__heading--h5", children: o }, `heading-${l.length}`)
          ) : l.push(
            /* @__PURE__ */ e.jsx("h6", { className: "ai-message__heading ai-message__heading--h6", children: o }, `heading-${l.length}`)
          );
        } else f.trim() === "" ? C() : d += f + " ";
      }), C(), l.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: a }) : /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: l });
    }, [a, g]), K = m(() => {
      switch (n) {
        case "sending":
          return /* @__PURE__ */ e.jsxs("div", { className: "ai-message__status ai-message__status--sending", children: [
            /* @__PURE__ */ e.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ e.jsx("span", { children: "发送中..." })
          ] });
        case "streaming":
          return /* @__PURE__ */ e.jsxs("div", { className: "ai-message__status ai-message__status--streaming", children: [
            /* @__PURE__ */ e.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ e.jsx("span", { children: "正在输入..." })
          ] });
        case "error":
          return /* @__PURE__ */ e.jsxs("div", { className: "ai-message__status ai-message__status--error", children: [
            /* @__PURE__ */ e.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ e.jsx("span", { children: "发送失败" })
          ] });
        default:
          return null;
      }
    }, [n]), M = "ai-message", V = `ai-message--${n}`, j = [
      M,
      V,
      n === "streaming" ? "ai-message--streaming" : "",
      $
    ].filter(Boolean).join(" "), P = gs(h);
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: D,
        className: j,
        style: v,
        onClick: L,
        "data-testid": "ai-message",
        ...P,
        children: [
          (_ || z) && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__header", children: [
            _ && /* @__PURE__ */ e.jsx("div", { className: "ai-message__avatar", children: _ }),
            z && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__user-info", children: [
              /* @__PURE__ */ e.jsx("span", { className: "ai-message__username", children: k }),
              c && i && /* @__PURE__ */ e.jsx("span", { className: "ai-message__timestamp", children: R(i) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "ai-message__body", children: [
            I(),
            K()
          ] }),
          p && /* @__PURE__ */ e.jsx("div", { className: "ai-message__actions", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `ai-message__copy-btn ${b ? "ai-message__copy-btn--copied" : ""}`,
              onClick: W,
              disabled: n === "sending" || n === "streaming",
              "aria-label": b ? "已复制" : "复制内容",
              title: b ? "已复制" : "复制内容",
              children: b ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(ns, { className: "ai-message__copy-icon", size: 16 }),
                "已复制"
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(cs, { className: "ai-message__copy-icon", size: 16 }),
                "复制"
              ] })
            }
          ) })
        ]
      }
    );
  }
);
vs.displayName = "AIMessage";
const ws = ({
  type: a = "typing",
  text: n = "AI正在思考中...",
  texts: c = [],
  typingSpeed: i = 100,
  loop: p = !1,
  showProgress: _ = !1,
  progress: k = 0,
  indeterminate: z = !1,
  className: $ = "",
  style: v = {},
  onComplete: x,
  onTextChange: u
}) => {
  const [L, g] = w(""), [h, D] = w(0), [b, T] = w(!1), [R, W] = w(0), I = c.length > 0 ? c : [n], K = m(async (j) => {
    T(!0);
    let P = "";
    for (let s = 0; s < j.length; s++)
      P += j[s], g(P), u == null || u(P), await new Promise((l) => setTimeout(l, i));
    T(!1), x == null || x();
  }, [i, u, x]), M = m(() => {
    const j = setInterval(() => {
      W((P) => (P + 1) % 4);
    }, 500);
    return () => clearInterval(j);
  }, []);
  S(() => {
    if (a === "typing" && I.length > 0) {
      const j = I[h];
      K(j);
    }
  }, [a, h, I.length, i, u, x]), S(() => {
    if (p && a === "typing" && !b) {
      const j = setTimeout(() => {
        D((P) => (P + 1) % I.length);
      }, 1e3);
      return () => clearTimeout(j);
    }
  }, [p, a, b, I.length, h]), S(() => {
    if (a === "thinking")
      return M();
  }, [a, M]), S(() => {
    if (a === "dots") {
      const j = setInterval(() => {
        W((P) => (P + 1) % 4);
      }, 300);
      return () => clearInterval(j);
    }
  }, [a]);
  const V = () => {
    switch (a) {
      case "typing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-typing", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: L }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-cursor", children: "|" })
        ] });
      case "thinking":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-thinking", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: n }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots", children: [0, 1, 2].map((j) => /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `ai-loading-dot ${j === R ? "active" : ""}`
            },
            j
          )) })
        ] });
      case "processing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-processing", children: [
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-spinner" }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: n })
        ] });
      case "dots":
        return /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots-only", children: [0, 1, 2, 3].map((j) => /* @__PURE__ */ e.jsx(
          "span",
          {
            className: `ai-loading-dot ${j === R ? "active" : ""}`
          },
          j
        )) });
      default:
        return null;
    }
  }, q = () => _ ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-progress", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ai-loading-progress-bar", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ai-loading-progress-fill ${z ? "indeterminate" : ""}`,
        style: {
          width: z ? "100%" : `${k}%`
        }
      }
    ) }),
    !z && /* @__PURE__ */ e.jsxs("span", { className: "ai-loading-progress-text", children: [
      Math.round(k),
      "%"
    ] })
  ] }) : null;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `ai-loading ai-loading-${a} ${$}`,
      style: v,
      role: "status",
      "aria-label": `AI加载中，类型：${a}`,
      children: [
        V(),
        q()
      ]
    }
  );
}, ks = ({
  value: a,
  defaultValue: n = "",
  placeholder: c = "输入你的提示...",
  disabled: i = !1,
  readOnly: p = !1,
  size: _ = "md",
  variant: k = "outline",
  clearable: z = !0,
  showHistory: $ = !0,
  showShortcuts: v = !0,
  showTemplates: x = !0,
  showSuggestions: u = !0,
  maxHistoryItems: L = 10,
  maxSuggestions: g = 8,
  minCharsForSuggestions: h = 2,
  shortcutTrigger: D = "/",
  history: b = [],
  suggestions: T = [],
  templates: R = [],
  shortcuts: W = [],
  label: I,
  required: K = !1,
  helpText: M,
  errorText: V,
  error: q = !1,
  className: j = "",
  style: P,
  onChange: s,
  onFocus: l,
  onBlur: d,
  onEnter: y,
  onSuggestionSelect: A,
  onTemplateSelect: C,
  onShortcutSelect: f,
  onHistoryClear: Q,
  onHistoryAdd: O
}) => {
  const [o, E] = w(a ?? n), [ee, pe] = w(!1), [F, H] = w(!1), [Y, U] = w(!1), [G, Z] = w(!1), [se, J] = w(!1), [ce, B] = w(-1), [te, ue] = w([]), [ae, _e] = w([]), [N, me] = w([]), ne = re(null), $e = re(null), Ie = re(null), Pe = re(null), Ce = re(null);
  S(() => {
    a !== void 0 && E(a);
  }, [a]), S(() => {
    if (o.length >= h) {
      const t = T.filter(
        (r) => r.text.toLowerCase().includes(o.toLowerCase())
      ).slice(0, g);
      ue(t);
    } else
      ue([]);
  }, [o, T, h, g]), S(() => {
    if (o.length >= h) {
      const t = R.filter(
        (r) => r.name.toLowerCase().includes(o.toLowerCase()) || r.description.toLowerCase().includes(o.toLowerCase()) || r.tags.some((X) => X.toLowerCase().includes(o.toLowerCase()))
      ).slice(0, g);
      _e(t);
    } else
      _e([]);
  }, [o, R, h, g]), S(() => {
    if (o.startsWith(D)) {
      const t = o.slice(D.length).toLowerCase(), r = W.filter(
        (X) => X.key.toLowerCase().includes(t) || X.label.toLowerCase().includes(t) || X.description.toLowerCase().includes(t)
      ).slice(0, g);
      me(r);
    } else
      me([]);
  }, [o, W, D, g]);
  const Le = m((t) => {
    const r = t.target.value;
    E(r), s == null || s(r), B(-1), r.startsWith(D) && v ? (J(!0), H(!1), U(!1), Z(!1)) : r.length >= h && u ? (H(!0), J(!1), U(!1), Z(!1)) : (H(!1), J(!1), U(!1), Z(!1));
  }, [s, D, v, h, u]), Ae = m((t) => {
    pe(!0), l == null || l(t), o.length >= h && u && H(!0);
  }, [l, o, h, u]), Me = m((t) => {
    pe(!1), d == null || d(t), setTimeout(() => {
      H(!1), U(!1), Z(!1), J(!1), B(-1);
    }, 150);
  }, [d]), ze = m((t) => {
    var r;
    if (t.key === "Enter")
      t.preventDefault(), y == null || y(o), o.trim() && O && O(o.trim()), H(!1), U(!1), Z(!1), J(!1), B(-1);
    else if (t.key === "Escape")
      H(!1), U(!1), Z(!1), J(!1), B(-1), (r = ne.current) == null || r.blur();
    else if (t.key === "ArrowDown") {
      if (t.preventDefault(), [
        F && te.length > 0,
        Y && b.length > 0,
        G && ae.length > 0,
        se && N.length > 0
      ].some(Boolean)) {
        const le = Math.max(
          F ? te.length - 1 : -1,
          Y ? b.length - 1 : -1,
          G ? ae.length - 1 : -1,
          se ? N.length - 1 : -1
        );
        B((de) => de < le ? de + 1 : 0);
      }
    } else if (t.key === "ArrowUp" && (t.preventDefault(), [
      F && te.length > 0,
      Y && b.length > 0,
      G && ae.length > 0,
      se && N.length > 0
    ].some(Boolean))) {
      const le = Math.max(
        F ? te.length - 1 : -1,
        Y ? b.length - 1 : -1,
        G ? ae.length - 1 : -1,
        se ? N.length - 1 : -1
      );
      B((de) => de > 0 ? de - 1 : le);
    }
  }, [
    y,
    o,
    O,
    F,
    Y,
    G,
    se,
    te,
    ae,
    N,
    b
  ]), De = m((t) => {
    var r;
    E(t.text), s == null || s(t.text), A == null || A(t), H(!1), B(-1), (r = ne.current) == null || r.focus();
  }, [s, A]), Re = m((t) => {
    var r;
    E(t.content), s == null || s(t.content), C == null || C(t), Z(!1), B(-1), (r = ne.current) == null || r.focus();
  }, [s, C]), Te = m((t) => {
    var r;
    E(t.action), s == null || s(t.action), f == null || f(t), J(!1), B(-1), (r = ne.current) == null || r.focus();
  }, [s, f]), Ve = m((t) => {
    var r;
    E(t), s == null || s(t), U(!1), B(-1), (r = ne.current) == null || r.focus();
  }, [s]), Ee = m(() => {
    var t;
    E(""), s == null || s(""), H(!1), U(!1), Z(!1), J(!1), B(-1), (t = ne.current) == null || t.focus();
  }, [s]), Be = m(() => {
    U(!Y), H(!1), Z(!1), J(!1), B(-1);
  }, [Y]), We = m(() => {
    Z(!G), H(!1), U(!1), J(!1), B(-1);
  }, [G]), Oe = Ze(() => {
    const t = "ai-prompt-input", r = `ai-prompt-input--${_}`, X = `ai-prompt-input--${k}`;
    return `${t} ${r} ${X} ${q ? "ai-prompt-input--error" : ""} ${ee ? "ai-prompt-input--focused" : ""} ${i ? "ai-prompt-input--disabled" : ""} ${j}`.trim();
  }, [_, k, q, ee, i, j]), qe = () => !F || te.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: $e, className: "ai-prompt-input__panel ai-prompt-input__suggestions", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(ms, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "建议" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: te.map((t, r) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__suggestion-item ${r === ce ? "ai-prompt-input__suggestion-item--selected" : ""}`,
        onClick: () => De(t),
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__suggestion-text", children: t.text }),
          t.category && /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__suggestion-category", children: t.category }),
          t.usage && /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__suggestion-usage", children: [
            "使用 ",
            t.usage,
            " 次"
          ] })
        ]
      },
      t.id
    )) })
  ] }), He = () => !Y || b.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: Ie, className: "ai-prompt-input__panel ai-prompt-input__history", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(fe, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "历史记录" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "ai-prompt-input__clear-history",
          onClick: Q,
          type: "button",
          children: /* @__PURE__ */ e.jsx(ve, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: b.slice(0, L).map((t, r) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__history-item ${r === ce ? "ai-prompt-input__history-item--selected" : ""}`,
        onClick: () => Ve(t),
        children: [
          /* @__PURE__ */ e.jsx(fe, { size: 14 }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__history-text", children: t })
        ]
      },
      r
    )) })
  ] }), Ke = () => {
    if (!G) return null;
    const t = o.length >= h ? ae : R.slice(0, g);
    return t.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: Pe, className: "ai-prompt-input__panel ai-prompt-input__templates", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
        /* @__PURE__ */ e.jsx(Ne, { size: 16 }),
        /* @__PURE__ */ e.jsx("span", { children: "模板" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: t.map((r, X) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `ai-prompt-input__template-item ${X === ce ? "ai-prompt-input__template-item--selected" : ""}`,
          onClick: () => Re(r),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__template-header", children: [
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-name", children: r.name }),
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-category", children: r.category })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-description", children: r.description }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-tags", children: r.tags.slice(0, 3).map((le) => /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__template-tag", children: le }, le)) })
          ]
        },
        r.id
      )) })
    ] });
  }, Ue = () => !se || N.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: Ce, className: "ai-prompt-input__panel ai-prompt-input__shortcuts", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(hs, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "快捷指令" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: N.map((t, r) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__shortcut-item ${r === ce ? "ai-prompt-input__shortcut-item--selected" : ""}`,
        onClick: () => Te(t),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__shortcut-key", children: [
            "/",
            t.key
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__shortcut-label", children: t.label }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__shortcut-description", children: t.description })
        ]
      },
      t.key
    )) })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: Oe, style: P, children: [
    I && /* @__PURE__ */ e.jsxs("label", { className: "ai-prompt-input__label", children: [
      I,
      K && /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__required", children: "*" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__wrapper", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__input-container", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: ne,
            type: "text",
            value: o,
            onChange: Le,
            onFocus: Ae,
            onBlur: Me,
            onKeyDown: ze,
            placeholder: c,
            disabled: i,
            readOnly: p,
            className: "ai-prompt-input__input",
            "aria-label": I || c,
            "aria-invalid": q,
            "aria-describedby": V ? "error-text" : M ? "help-text" : void 0
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__actions", children: [
          $ && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__history-btn",
              onClick: Be,
              disabled: i,
              "aria-label": "显示历史记录",
              children: /* @__PURE__ */ e.jsx(fe, { size: 16 })
            }
          ),
          x && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__templates-btn",
              onClick: We,
              disabled: i,
              "aria-label": "显示模板",
              children: /* @__PURE__ */ e.jsx(Ne, { size: 16 })
            }
          ),
          z && o && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__clear-btn",
              onClick: Ee,
              disabled: i,
              "aria-label": "清除输入",
              children: /* @__PURE__ */ e.jsx(ve, { size: 16 })
            }
          )
        ] })
      ] }),
      qe(),
      He(),
      Ke(),
      Ue()
    ] }),
    M && !V && /* @__PURE__ */ e.jsx("div", { id: "help-text", className: "ai-prompt-input__help-text", children: M }),
    V && /* @__PURE__ */ e.jsx("div", { id: "error-text", className: "ai-prompt-input__error-text", children: V })
  ] });
}, $s = "0.0.0";
export {
  ws as AILoading,
  vs as AIMessage,
  ks as AIPromptInput,
  fs as Button,
  xs as ChatInterface,
  js as Input,
  $s as version
};
//# sourceMappingURL=index.es.js.map
