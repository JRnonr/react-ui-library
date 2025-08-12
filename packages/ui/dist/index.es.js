import xe, { forwardRef as me, createElement as be, useState as k, useRef as ce, useCallback as _, useEffect as se, useMemo as Je } from "react";
var Ie = { exports: {} }, je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se = xe, Xe = Symbol.for("react.element"), Ye = Symbol.for("react.fragment"), Ge = Object.prototype.hasOwnProperty, Qe = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pe(i, l, c) {
  var a, x = {}, v = null, D = null;
  c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (D = l.ref);
  for (a in l) Ge.call(l, a) && !Fe.hasOwnProperty(a) && (x[a] = l[a]);
  if (i && i.defaultProps) for (a in l = i.defaultProps, l) x[a] === void 0 && (x[a] = l[a]);
  return { $$typeof: Xe, type: i, key: v, ref: D, props: x, _owner: Qe.current };
}
je.Fragment = Ye;
je.jsx = Pe;
je.jsxs = Pe;
Ie.exports = je;
var e = Ie.exports;
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), es = (i) => i.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, c, a) => a ? a.toUpperCase() : c.toLowerCase()
), we = (i) => {
  const l = es(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, Le = (...i) => i.filter((l, c, a) => !!l && l.trim() !== "" && a.indexOf(l) === c).join(" ").trim(), ss = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
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
const as = me(
  ({
    color: i = "currentColor",
    size: l = 24,
    strokeWidth: c = 2,
    absoluteStrokeWidth: a,
    className: x = "",
    children: v,
    iconNode: D,
    ...A
  }, $) => be(
    "svg",
    {
      ref: $,
      ...ts,
      width: l,
      height: l,
      stroke: i,
      strokeWidth: a ? Number(c) * 24 / Number(l) : c,
      className: Le("lucide", x),
      ...!v && !ss(A) && { "aria-hidden": "true" },
      ...A
    },
    [
      ...D.map(([y, j]) => be(y, j)),
      ...Array.isArray(v) ? v : [v]
    ]
  )
);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (i, l) => {
  const c = me(
    ({ className: a, ...x }, v) => be(as, {
      ref: v,
      iconNode: l,
      className: Le(
        `lucide-${Oe(we(i))}`,
        `lucide-${i}`,
        a
      ),
      ...x
    })
  );
  return c.displayName = we(i), c;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ls = de("check", is);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], cs = de("chevron-down", ns);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], ge = de("clock", rs);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], os = de("copy", ds);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ke = de("file-text", ps);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], $e = de("loader-circle", us);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], _s = de("search", ms);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ye = de("x", hs);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], xs = de("zap", fs), js = me(
  ({
    as: i,
    className: l = "",
    variant: c = "primary",
    size: a = "md",
    loading: x = !1,
    block: v = !1,
    disabled: D = !1,
    type: A = "button",
    onClick: $,
    style: y,
    children: j,
    ...p
  }, u) => {
    const N = i || "button";
    if (N === "button") {
      const z = "btn", O = `btn--${c}`, T = `btn--${a}`, I = [
        z,
        O,
        T,
        v ? "btn--block" : "",
        x ? "btn--loading" : "",
        D || x ? "btn--disabled" : "",
        l
      ].filter(Boolean).join(" "), s = (n) => {
        if (D || x) {
          n.preventDefault();
          return;
        }
        $ == null || $(n);
      };
      return /* @__PURE__ */ e.jsxs(
        "button",
        {
          ref: u,
          type: A,
          className: I,
          disabled: D || x,
          onClick: s,
          style: y,
          ...p,
          children: [
            x && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx($e, { className: "btn__loading-svg", size: 16 }) }),
            /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: j })
          ]
        }
      );
    }
    const f = "btn", q = `btn--${c}`, w = `btn--${a}`, Q = [
      f,
      q,
      w,
      v ? "btn--block" : "",
      x ? "btn--loading" : "",
      l
    ].filter(Boolean).join(" ");
    return xe.createElement(N, {
      ref: u,
      className: Q,
      style: y,
      ...p
    }, [
      x && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx($e, { className: "btn__loading-svg", size: 16 }) }, "loading"),
      /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: j }, "content")
    ].filter(Boolean));
  }
);
js.displayName = "Button";
const Ns = me(({
  initialMessages: i = [],
  placeholder: l = "输入消息...",
  disabled: c = !1,
  onSendMessage: a,
  renderMessage: x,
  className: v = "",
  style: D,
  ...A
}, $) => {
  const y = Array.isArray(i) ? i : [], [j, p] = k(y), [u, N] = k(""), [f, q] = k(!1), [w, K] = k(/* @__PURE__ */ new Set()), M = ce(null), Q = ce(null), z = _(() => {
    var s;
    (s = M.current) != null && s.scrollIntoView && M.current.scrollIntoView({ behavior: "smooth" });
  }, []), O = _(() => {
    var n;
    const s = (n = M.current) == null ? void 0 : n.parentElement;
    if (s) {
      const m = document.createElement("div");
      m.style.height = "1px", m.style.visibility = "hidden", s.appendChild(m), setTimeout(() => {
        m.parentNode && m.parentNode.removeChild(m);
      }, 0);
    }
  }, []);
  se(() => {
    z(), O();
  }, [j, z, O]);
  const T = _((s, n) => {
    const m = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: s,
      type: n,
      timestamp: /* @__PURE__ */ new Date()
    };
    return p((P) => [...P, m]), m;
  }, []), H = _(async (s) => {
    const n = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: "",
      type: "assistant",
      timestamp: /* @__PURE__ */ new Date(),
      isTyping: !0
    };
    p((C) => [...C, n]);
    let m = "";
    const P = s.split(" ");
    for (let C = 0; C < P.length; C++)
      m += (C > 0 ? " " : "") + P[C], p(
        (E) => E.map(
          (d) => d.id === n.id ? { ...d, content: m } : d
        )
      ), await new Promise((E) => setTimeout(E, 100 + Math.random() * 50));
    p(
      (C) => C.map(
        (E) => E.id === n.id ? { ...E, isTyping: !1 } : E
      )
    );
  }, []), F = _(async () => {
    if (!u.trim() || c || !a && f) return;
    const s = u.trim(), n = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (!w.has(n)) {
      K((m) => {
        const P = new Set(m);
        return P.add(n), P;
      }), T(s, "user"), N(""), a || q(!0);
      try {
        if (a) {
          const m = await a(s);
          typeof m == "string" && m.trim() && await H(m);
        } else {
          const m = `这是对"${s}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
          await H(m);
        }
      } catch (m) {
        console.error("发送消息失败:", m), T("抱歉，发送消息时出现错误，请重试。", "assistant");
      } finally {
        a || q(!1), K((m) => {
          const P = new Set(m);
          return P.delete(n), P;
        });
      }
    }
  }, [u, c, f, T, a, H, w]), g = _((s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), F());
  }, [F]), I = (s) => /* @__PURE__ */ e.jsxs("div", { className: `chat-message chat-message--${s.type}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "chat-message__avatar", children: s.type === "user" ? "👤" : "🤖" }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-message__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "chat-message__text", children: [
        s.content,
        s.isTyping && /* @__PURE__ */ e.jsx("span", { className: "chat-message__typing-indicator", children: "|" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-message__timestamp", children: s.timestamp.toLocaleTimeString() })
    ] })
  ] }, s.id);
  return /* @__PURE__ */ e.jsxs("div", { ref: $, className: `chat-interface ${v}`, style: D, ...A, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__header", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "chat-interface__title", children: "AI 助手" }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-interface__status", children: !a && f ? "正在思考..." : "在线" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__messages", children: [
      j.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__empty", children: [
        /* @__PURE__ */ e.jsx("div", { className: "chat-interface__empty-icon", children: "💬" }),
        /* @__PURE__ */ e.jsx("p", { children: "开始与AI助手对话吧！" })
      ] }) : j.map((s) => /* @__PURE__ */ e.jsx("div", { children: x ? x(s) : I(s) }, s.id)),
      /* @__PURE__ */ e.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__input", children: [
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          ref: Q,
          value: u,
          onChange: (s) => N(s.target.value),
          onKeyDown: g,
          placeholder: l,
          disabled: c || !a && f,
          className: "chat-interface__textarea",
          rows: 1
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: F,
          disabled: !u.trim() || c || !a && f,
          className: "chat-interface__send-btn",
          "aria-label": "发送消息",
          children: !a && f ? /* @__PURE__ */ e.jsx("span", { className: "chat-interface__loading-spinner" }) : "发送"
        }
      )
    ] })
  ] });
});
Ns.displayName = "ChatInterface";
const vs = me(
  ({
    type: i = "text",
    variant: l = "outline",
    size: c = "md",
    disabled: a = !1,
    readOnly: x = !1,
    required: v = !1,
    placeholder: D,
    defaultValue: A,
    value: $,
    onChange: y,
    onFocus: j,
    onBlur: p,
    onKeyDown: u,
    onEnter: N,
    prefix: f,
    suffix: q,
    allowClear: w = !1,
    showPasswordToggle: K = !1,
    label: M,
    helpText: Q,
    errorText: z,
    showCount: O = !1,
    maxLength: T,
    className: H = "",
    style: F,
    name: g,
    id: I,
    autoComplete: s,
    autoFocus: n,
    inputMode: m,
    ...P
  }, C) => {
    const [E, d] = k(A || ""), [S, R] = k(!1), [h, W] = k(!1), te = $ !== void 0 ? $ : E, Y = !!z, U = i === "password", B = _((b) => {
      const pe = b.target.value;
      $ === void 0 && d(pe), y == null || y(pe, b);
    }, [$, y]), ee = _(() => {
      $ === void 0 && d(""), y == null || y("", {});
    }, [$, y]), G = _(() => {
      W((b) => !b);
    }, []), Z = _((b) => {
      b.key === "Enter" && (N == null || N(te)), u == null || u(b);
    }, [te, N, u]), L = _((b) => {
      R(!0), j == null || j(b);
    }, [j]), ae = _((b) => {
      R(!1), p == null || p(b);
    }, [p]), X = "input", oe = `input--${l}`, V = `input--${c}`, _e = [
      X,
      oe,
      V,
      a ? "input--disabled" : x ? "input--readonly" : Y ? "input--error" : S ? "input--focused" : "",
      H
    ].filter(Boolean).join(" "), ne = () => f ? /* @__PURE__ */ e.jsx("span", { className: "input__prefix", "aria-hidden": "true", children: f }) : null, he = () => {
      const b = [];
      return O && T && b.push(
        /* @__PURE__ */ e.jsxs("span", { className: "input__count", children: [
          te.length,
          "/",
          T
        ] }, "count")
      ), U && K && b.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__password-toggle",
            onClick: G,
            "aria-label": h ? "隐藏密码" : "显示密码",
            tabIndex: -1,
            children: h ? "👁️" : "👁️‍🗨️"
          },
          "password-toggle"
        )
      ), w && te && !a && !x && b.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__clear",
            onClick: ee,
            "aria-label": "清除输入",
            tabIndex: -1,
            children: "✕"
          },
          "clear"
        )
      ), q && b.push(
        /* @__PURE__ */ e.jsx("span", { className: "input__suffix", "aria-hidden": "true", children: q }, "suffix")
      ), b.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "input__suffix-group", children: b }) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: "input__wrapper", children: [
      M && /* @__PURE__ */ e.jsxs("label", { className: "input__label", htmlFor: I, children: [
        M,
        v && /* @__PURE__ */ e.jsx("span", { className: "input__required", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "input__container", children: [
        ne(),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: C,
            id: I,
            name: g,
            type: U && K ? h ? "text" : "password" : i,
            value: te,
            onChange: B,
            onFocus: L,
            onBlur: ae,
            onKeyDown: Z,
            placeholder: D,
            disabled: a,
            readOnly: x,
            required: v,
            maxLength: T,
            autoComplete: s,
            autoFocus: n,
            inputMode: m,
            className: _e,
            style: F,
            ...P
          }
        ),
        he()
      ] }),
      (Q || z) && /* @__PURE__ */ e.jsx("div", { className: `input__message ${Y ? "input__message--error" : "input__message--help"}`, children: z || Q })
    ] });
  }
);
vs.displayName = "Input";
const gs = [
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
], bs = (i) => {
  const l = {};
  return Object.keys(i).forEach((c) => {
    gs.some((a) => c === a || c.startsWith("aria-") || c.startsWith("data-")) && (l[c] = i[c]);
  }), l;
}, ys = me(
  ({
    content: i,
    status: l = "success",
    showTimestamp: c = !0,
    timestamp: a,
    showCopyButton: x = !0,
    avatar: v,
    username: D = "AI Assistant",
    showUsername: A = !0,
    className: $ = "",
    style: y,
    onCopy: j,
    onCopyError: p,
    onClick: u,
    enableCodeHighlight: N = !0,
    ...f
  }, q) => {
    const [w, K] = k(!1), M = _((s) => s instanceof Date ? s.toLocaleTimeString() : new Date(s).toLocaleTimeString(), []), Q = _(async () => {
      try {
        await navigator.clipboard.writeText(i), K(!0), j == null || j(i), setTimeout(() => K(!1), 2e3);
      } catch (s) {
        p == null || p(s);
      }
    }, [i, j, p]), z = _(() => {
      if (!N)
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: i });
      if (!i.trim())
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content" });
      const s = i.split(`
`), n = [];
      let m = "", P = !1, C = "";
      const E = () => {
        if (m.trim()) {
          let d = m;
          d = d.replace(/\*\*(.*?)\*\*/g, (S, R) => `<strong class="ai-message__bold">${R}</strong>`), d = d.replace(/\*(.*?)\*/g, (S, R) => `<em class="ai-message__italic">${R}</em>`), d = d.replace(/`(.*?)`/g, (S, R) => `<code class="ai-message__inline-code">${R}</code>`), n.push(
            /* @__PURE__ */ e.jsx(
              "p",
              {
                className: "ai-message__text",
                dangerouslySetInnerHTML: { __html: d }
              },
              `text-${n.length}`
            )
          ), m = "";
        }
      };
      return s.forEach((d) => {
        var S;
        if (d.startsWith("```"))
          P ? (E(), n.push(
            /* @__PURE__ */ e.jsx("pre", { className: "ai-message__code-block", children: /* @__PURE__ */ e.jsx("code", { children: C }) }, `code-${n.length}`)
          ), P = !1, C = "") : (E(), P = !0);
        else if (P)
          C += d + `
`;
        else if (d.startsWith("#")) {
          E();
          const R = ((S = d.match(/^#+/)) == null ? void 0 : S[0].length) || 1, h = d.replace(/^#+\s*/, ""), W = Math.min(R, 6);
          W === 1 ? n.push(
            /* @__PURE__ */ e.jsx("h1", { className: "ai-message__heading ai-message__heading--h1", children: h }, `heading-${n.length}`)
          ) : W === 2 ? n.push(
            /* @__PURE__ */ e.jsx("h2", { className: "ai-message__heading ai-message__heading--h2", children: h }, `heading-${n.length}`)
          ) : W === 3 ? n.push(
            /* @__PURE__ */ e.jsx("h3", { className: "ai-message__heading ai-message__heading--h3", children: h }, `heading-${n.length}`)
          ) : W === 4 ? n.push(
            /* @__PURE__ */ e.jsx("h4", { className: "ai-message__heading ai-message__heading--h4", children: h }, `heading-${n.length}`)
          ) : W === 5 ? n.push(
            /* @__PURE__ */ e.jsx("h5", { className: "ai-message__heading ai-message__heading--h5", children: h }, `heading-${n.length}`)
          ) : n.push(
            /* @__PURE__ */ e.jsx("h6", { className: "ai-message__heading ai-message__heading--h6", children: h }, `heading-${n.length}`)
          );
        } else d.trim() === "" ? E() : m += d + " ";
      }), E(), n.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: i }) : /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: n });
    }, [i, N]), O = _(() => {
      switch (l) {
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
    }, [l]), T = "ai-message", H = `ai-message--${l}`, g = [
      T,
      H,
      l === "streaming" ? "ai-message--streaming" : "",
      $
    ].filter(Boolean).join(" "), I = bs(f);
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: q,
        className: g,
        style: y,
        onClick: u,
        "data-testid": "ai-message",
        ...I,
        children: [
          (v || A) && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__header", children: [
            v && /* @__PURE__ */ e.jsx("div", { className: "ai-message__avatar", children: v }),
            A && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__user-info", children: [
              /* @__PURE__ */ e.jsx("span", { className: "ai-message__username", children: D }),
              c && a && /* @__PURE__ */ e.jsx("span", { className: "ai-message__timestamp", children: M(a) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "ai-message__body", children: [
            z(),
            O()
          ] }),
          x && /* @__PURE__ */ e.jsx("div", { className: "ai-message__actions", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `ai-message__copy-btn ${w ? "ai-message__copy-btn--copied" : ""}`,
              onClick: Q,
              disabled: l === "sending" || l === "streaming",
              "aria-label": w ? "已复制" : "复制内容",
              title: w ? "已复制" : "复制内容",
              children: w ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(ls, { className: "ai-message__copy-icon", size: 16 }),
                "已复制"
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(os, { className: "ai-message__copy-icon", size: 16 }),
                "复制"
              ] })
            }
          ) })
        ]
      }
    );
  }
);
ys.displayName = "AIMessage";
const Is = ({
  type: i = "typing",
  text: l = "AI正在思考中...",
  texts: c = [],
  typingSpeed: a = 100,
  loop: x = !1,
  showProgress: v = !1,
  progress: D = 0,
  indeterminate: A = !1,
  className: $ = "",
  style: y = {},
  onComplete: j,
  onTextChange: p
}) => {
  const [u, N] = k(""), [f, q] = k(0), [w, K] = k(!1), [M, Q] = k(0), z = c.length > 0 ? c : [l], O = _(async (g) => {
    K(!0);
    let I = "";
    for (let s = 0; s < g.length; s++)
      I += g[s], N(I), p == null || p(I), await new Promise((n) => setTimeout(n, a));
    K(!1), j == null || j();
  }, [a, p, j]), T = _(() => {
    const g = setInterval(() => {
      Q((I) => (I + 1) % 4);
    }, 500);
    return () => clearInterval(g);
  }, []);
  se(() => {
    if (i === "typing" && z.length > 0) {
      const g = z[f];
      O(g);
    }
  }, [i, f, z.length, a, p, j]), se(() => {
    if (x && i === "typing" && !w) {
      const g = setTimeout(() => {
        q((I) => (I + 1) % z.length);
      }, 1e3);
      return () => clearTimeout(g);
    }
  }, [x, i, w, z.length, f]), se(() => {
    if (i === "thinking")
      return T();
  }, [i, T]), se(() => {
    if (i === "dots") {
      const g = setInterval(() => {
        Q((I) => (I + 1) % 4);
      }, 300);
      return () => clearInterval(g);
    }
  }, [i]);
  const H = () => {
    switch (i) {
      case "typing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-typing", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: u }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-cursor", children: "|" })
        ] });
      case "thinking":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-thinking", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: l }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots", children: [0, 1, 2].map((g) => /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `ai-loading-dot ${g === M ? "active" : ""}`
            },
            g
          )) })
        ] });
      case "processing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-processing", children: [
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-spinner" }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: l })
        ] });
      case "dots":
        return /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots-only", children: [0, 1, 2, 3].map((g) => /* @__PURE__ */ e.jsx(
          "span",
          {
            className: `ai-loading-dot ${g === M ? "active" : ""}`
          },
          g
        )) });
      default:
        return null;
    }
  }, F = () => v ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-progress", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ai-loading-progress-bar", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ai-loading-progress-fill ${A ? "indeterminate" : ""}`,
        style: {
          width: A ? "100%" : `${D}%`
        }
      }
    ) }),
    !A && /* @__PURE__ */ e.jsxs("span", { className: "ai-loading-progress-text", children: [
      Math.round(D),
      "%"
    ] })
  ] }) : null;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `ai-loading ai-loading-${i} ${$}`,
      style: y,
      role: "status",
      "aria-label": `AI加载中，类型：${i}`,
      children: [
        H(),
        F()
      ]
    }
  );
}, Ps = ({
  value: i,
  defaultValue: l = "",
  placeholder: c = "输入你的提示...",
  disabled: a = !1,
  readOnly: x = !1,
  size: v = "md",
  variant: D = "outline",
  clearable: A = !0,
  showHistory: $ = !0,
  showShortcuts: y = !0,
  showTemplates: j = !0,
  showSuggestions: p = !0,
  maxHistoryItems: u = 10,
  maxSuggestions: N = 8,
  minCharsForSuggestions: f = 2,
  shortcutTrigger: q = "/",
  history: w = [],
  suggestions: K = [],
  templates: M = [],
  shortcuts: Q = [],
  label: z,
  required: O = !1,
  helpText: T,
  errorText: H,
  error: F = !1,
  className: g = "",
  style: I,
  onChange: s,
  onFocus: n,
  onBlur: m,
  onEnter: P,
  onSuggestionSelect: C,
  onTemplateSelect: E,
  onShortcutSelect: d,
  onHistoryClear: S,
  onHistoryAdd: R
}) => {
  const [h, W] = k(i ?? l), [te, Y] = k(!1), [U, B] = k(!1), [ee, G] = k(!1), [Z, L] = k(!1), [ae, X] = k(!1), [oe, V] = k(-1), [le, _e] = k([]), [ne, he] = k([]), [b, pe] = k([]), re = ce(null), Ne = ce(null), r = ce(null), J = ce(null), ve = ce(null);
  se(() => {
    i !== void 0 && W(i);
  }, [i]), se(() => {
    if (h.length >= f) {
      const t = K.filter(
        (o) => o.text.toLowerCase().includes(h.toLowerCase())
      ).slice(0, N);
      _e(t);
    } else
      _e([]);
  }, [h, f, N]), se(() => {
    if (h.length >= f) {
      const t = M.filter(
        (o) => o.name.toLowerCase().includes(h.toLowerCase()) || o.description.toLowerCase().includes(h.toLowerCase()) || o.tags.some((ie) => ie.toLowerCase().includes(h.toLowerCase()))
      ).slice(0, N);
      he(t);
    } else
      he([]);
  }, [h, f, N]), se(() => {
    if (h.startsWith(q)) {
      const t = h.slice(q.length).toLowerCase(), o = Q.filter(
        (ie) => ie.key.toLowerCase().includes(t) || ie.label.toLowerCase().includes(t) || ie.description.toLowerCase().includes(t)
      ).slice(0, N);
      pe(o);
    } else
      pe([]);
  }, [h, q, N]);
  const De = _((t) => {
    const o = t.target.value;
    W(o), s == null || s(o), V(-1), o.startsWith(q) && y ? (X(!0), B(!1), G(!1), L(!1)) : o.length >= f && p ? (B(!0), X(!1), G(!1), L(!1)) : (B(!1), X(!1), G(!1), L(!1));
  }, [s, q, y, f, p]), Ae = _((t) => {
    Y(!0), n == null || n(t), h.length >= f && p && B(!0);
  }, [n, h, f, p]), Me = _((t) => {
    Y(!1), m == null || m(t), setTimeout(() => {
      B(!1), G(!1), L(!1), X(!1), V(-1);
    }, 150);
  }, [m]), ze = _((t) => {
    var o;
    if (t.key === "Enter")
      t.preventDefault(), P == null || P(h), h.trim() && R && R(h.trim()), B(!1), G(!1), L(!1), X(!1), V(-1);
    else if (t.key === "Escape")
      B(!1), G(!1), L(!1), X(!1), V(-1), (o = re.current) == null || o.blur();
    else if (t.key === "ArrowDown") {
      if (t.preventDefault(), [
        U && le.length > 0,
        ee && w.length > 0,
        Z && ne.length > 0,
        ae && b.length > 0
      ].some(Boolean)) {
        const ue = Math.max(
          U ? le.length - 1 : -1,
          ee ? w.length - 1 : -1,
          Z ? ne.length - 1 : -1,
          ae ? b.length - 1 : -1
        );
        V((fe) => fe < ue ? fe + 1 : 0);
      }
    } else if (t.key === "ArrowUp" && (t.preventDefault(), [
      U && le.length > 0,
      ee && w.length > 0,
      Z && ne.length > 0,
      ae && b.length > 0
    ].some(Boolean))) {
      const ue = Math.max(
        U ? le.length - 1 : -1,
        ee ? w.length - 1 : -1,
        Z ? ne.length - 1 : -1,
        ae ? b.length - 1 : -1
      );
      V((fe) => fe > 0 ? fe - 1 : ue);
    }
  }, [
    P,
    h,
    R,
    U,
    ee,
    Z,
    ae,
    le,
    ne,
    b,
    w
  ]), Re = _((t) => {
    var o;
    W(t.text), s == null || s(t.text), C == null || C(t), B(!1), V(-1), (o = re.current) == null || o.focus();
  }, [s, C]), Ve = _((t) => {
    var o;
    W(t.content), s == null || s(t.content), E == null || E(t), L(!1), V(-1), (o = re.current) == null || o.focus();
  }, [s, E]), Ce = _((t) => {
    var o;
    W(t.action), s == null || s(t.action), d == null || d(t), X(!1), V(-1), (o = re.current) == null || o.focus();
  }, [s, d]), Ee = _((t) => {
    var o;
    W(t), s == null || s(t), G(!1), V(-1), (o = re.current) == null || o.focus();
  }, [s]), Te = _(() => {
    var t;
    W(""), s == null || s(""), B(!1), G(!1), L(!1), X(!1), V(-1), (t = re.current) == null || t.focus();
  }, [s]), We = _(() => {
    G(!ee), B(!1), L(!1), X(!1), V(-1);
  }, [ee]), qe = _(() => {
    L(!Z), B(!1), G(!1), X(!1), V(-1);
  }, [Z]), Be = Je(() => {
    const t = "ai-prompt-input", o = `ai-prompt-input--${v}`, ie = `ai-prompt-input--${D}`;
    return `${t} ${o} ${ie} ${F ? "ai-prompt-input--error" : ""} ${te ? "ai-prompt-input--focused" : ""} ${a ? "ai-prompt-input--disabled" : ""} ${g}`.trim();
  }, [v, D, F, te, a, g]), Ke = () => !U || le.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: Ne, className: "ai-prompt-input__panel ai-prompt-input__suggestions", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(_s, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "建议" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: le.map((t, o) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__suggestion-item ${o === oe ? "ai-prompt-input__suggestion-item--selected" : ""}`,
        onClick: () => Re(t),
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
  ] }), He = () => !ee || w.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: r, className: "ai-prompt-input__panel ai-prompt-input__history", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(ge, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "历史记录" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "ai-prompt-input__clear-history",
          onClick: S,
          type: "button",
          children: /* @__PURE__ */ e.jsx(ye, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: w.slice(0, u).map((t, o) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__history-item ${o === oe ? "ai-prompt-input__history-item--selected" : ""}`,
        onClick: () => Ee(t),
        children: [
          /* @__PURE__ */ e.jsx(ge, { size: 14 }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__history-text", children: t })
        ]
      },
      o
    )) })
  ] }), Ue = () => {
    if (!Z) return null;
    const t = h.length >= f ? ne : M.slice(0, N);
    return t.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: J, className: "ai-prompt-input__panel ai-prompt-input__templates", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
        /* @__PURE__ */ e.jsx(ke, { size: 16 }),
        /* @__PURE__ */ e.jsx("span", { children: "模板" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: t.map((o, ie) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `ai-prompt-input__template-item ${ie === oe ? "ai-prompt-input__template-item--selected" : ""}`,
          onClick: () => Ve(o),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__template-header", children: [
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-name", children: o.name }),
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-category", children: o.category })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-description", children: o.description }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-tags", children: o.tags.slice(0, 3).map((ue) => /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__template-tag", children: ue }, ue)) })
          ]
        },
        o.id
      )) })
    ] });
  }, Ze = () => !ae || b.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: ve, className: "ai-prompt-input__panel ai-prompt-input__shortcuts", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(xs, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "快捷指令" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: b.map((t, o) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__shortcut-item ${o === oe ? "ai-prompt-input__shortcut-item--selected" : ""}`,
        onClick: () => Ce(t),
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
  return /* @__PURE__ */ e.jsxs("div", { className: Be, style: I, children: [
    z && /* @__PURE__ */ e.jsxs("label", { className: "ai-prompt-input__label", children: [
      z,
      O && /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__required", children: "*" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__wrapper", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__input-container", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: re,
            type: "text",
            value: h,
            onChange: De,
            onFocus: Ae,
            onBlur: Me,
            onKeyDown: ze,
            placeholder: c,
            disabled: a,
            readOnly: x,
            className: "ai-prompt-input__input",
            "aria-label": z || c,
            "aria-invalid": F,
            "aria-describedby": H ? "error-text" : T ? "help-text" : void 0
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__actions", children: [
          $ && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__history-btn",
              onClick: We,
              disabled: a,
              "aria-label": "显示历史记录",
              children: /* @__PURE__ */ e.jsx(ge, { size: 16 })
            }
          ),
          j && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__templates-btn",
              onClick: qe,
              disabled: a,
              "aria-label": "显示模板",
              children: /* @__PURE__ */ e.jsx(ke, { size: 16 })
            }
          ),
          A && h && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__clear-btn",
              onClick: Te,
              disabled: a,
              "aria-label": "清除输入",
              children: /* @__PURE__ */ e.jsx(ye, { size: 16 })
            }
          )
        ] })
      ] }),
      Ke(),
      He(),
      Ue(),
      Ze()
    ] }),
    T && !H && /* @__PURE__ */ e.jsx("div", { id: "help-text", className: "ai-prompt-input__help-text", children: T }),
    H && /* @__PURE__ */ e.jsx("div", { id: "error-text", className: "ai-prompt-input__error-text", children: H })
  ] });
}, ws = me(
  ({
    variant: i = "outline",
    size: l = "md",
    disabled: c = !1,
    readOnly: a = !1,
    required: x = !1,
    placeholder: v = "请选择",
    defaultValue: D,
    value: A,
    onChange: $,
    onFocus: y,
    onBlur: j,
    onOpen: p,
    onClose: u,
    options: N = [],
    searchable: f = !1,
    allowClear: q = !1,
    label: w,
    helpText: K,
    errorText: M,
    showArrow: Q = !0,
    maxHeight: z = 300,
    className: O = "",
    style: T,
    name: H,
    id: F,
    autoFocus: g = !1,
    showEmptyOption: I = !1,
    emptyOptionText: s = "请选择",
    noDataText: n = "暂无数据",
    loading: m = !1,
    loadingText: P = "加载中...",
    ...C
  }, E) => {
    const [d, S] = k(!1), [R, h] = k(A ?? D), [W, te] = k(""), [Y, U] = k(-1), B = ce(null), ee = ce(null), G = ce(null), Z = F || `select-${Math.random().toString(36).substr(2, 9)}`, L = xe.useMemo(() => !f || !W ? N : N.filter(
      (r) => r.label.toLowerCase().includes(W.toLowerCase())
    ), [N, f, W]), ae = xe.useMemo(() => N.find((r) => r.value === R), [N, R]), X = _((r) => {
      let J = N.find((ve) => ve.value === r);
      r === "" && !J && I && (J = { value: "", label: s }), h(r), $ == null || $(r, J);
    }, [N, $, I, s]), oe = _(() => {
      if (c || a) return;
      const r = !d;
      S(r), r ? (p == null || p(), f && G.current && setTimeout(() => {
        var J;
        return (J = G.current) == null ? void 0 : J.focus();
      }, 0)) : u == null || u();
    }, [c, a, d, p, u, f]), V = _((r) => {
      r.disabled || (X(r.value), S(!1), u == null || u(), te(""), U(-1));
    }, [X, u]), le = _((r) => {
      r.stopPropagation(), X(void 0);
    }, [X]), _e = _((r) => {
      if (!(c || a))
        switch (r.key) {
          case "Enter":
          case " ":
            r.preventDefault(), d ? Y >= 0 && L[Y] && V(L[Y]) : (S(!0), p == null || p());
            break;
          case "Escape":
            d && (S(!1), u == null || u(), U(-1));
            break;
          case "ArrowDown":
            r.preventDefault(), d ? U(
              (J) => J < L.length - 1 ? J + 1 : 0
            ) : (S(!0), p == null || p(), U(0));
            break;
          case "ArrowUp":
            r.preventDefault(), d && U(
              (J) => J > 0 ? J - 1 : L.length - 1
            );
            break;
          case "Tab":
            d && (S(!1), u == null || u(), U(-1));
            break;
        }
    }, [c, a, d, Y, L, p, u, V]), ne = _((r) => {
      y == null || y(r);
    }, [y]), he = _((r) => {
      j == null || j(r);
    }, [j]), b = _((r) => {
      te(r.target.value), U(-1);
    }, []), pe = _((r) => {
      r.key === "Enter" && Y >= 0 && L[Y] && V(L[Y]);
    }, [Y, L, V]);
    se(() => {
      const r = (J) => {
        B.current && !B.current.contains(J.target) && (S(!1), u == null || u(), U(-1));
      };
      if (d)
        return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
    }, [d, u]), se(() => {
      g && B.current && B.current.focus();
    }, [g]), se(() => {
      A !== void 0 && h(A);
    }, [A]);
    const re = [
      "select",
      `select--${i}`,
      `select--${l}`,
      O,
      {
        "select--disabled": c,
        "select--readonly": a,
        "select--error": !!M,
        "select--open": d
      }
    ].filter(Boolean).join(" "), Ne = [
      "select__selector",
      {
        "select__selector--disabled": c,
        "select__selector--readonly": a,
        "select__selector--error": !!M,
        "select__selector--open": d
      }
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.jsxs("div", { className: "select__wrapper", children: [
      w && /* @__PURE__ */ e.jsxs("label", { htmlFor: Z, className: "select__label", id: `${Z}-label`, children: [
        w,
        x && /* @__PURE__ */ e.jsx("span", { className: "select__required", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: B,
          className: re,
          style: T,
          tabIndex: c || a ? -1 : 0,
          onFocus: ne,
          onBlur: he,
          onKeyDown: _e,
          onClick: oe,
          role: "combobox",
          "aria-expanded": d,
          "aria-haspopup": "listbox",
          "aria-labelledby": w ? `${Z}-label` : void 0,
          "aria-describedby": M ? `${Z}-error` : K ? `${Z}-help` : void 0,
          ...C,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: Ne, children: [
              /* @__PURE__ */ e.jsx("div", { className: "select__content", children: ae ? /* @__PURE__ */ e.jsx("span", { className: "select__selected", children: ae.label }) : /* @__PURE__ */ e.jsx("span", { className: "select__placeholder", children: v }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "select__actions", children: [
                q && R && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    className: "select__clear",
                    onClick: le,
                    "aria-label": "清除选择",
                    children: /* @__PURE__ */ e.jsx(ye, { size: 16 })
                  }
                ),
                Q && /* @__PURE__ */ e.jsx(
                  cs,
                  {
                    size: 16,
                    className: `select__arrow ${d ? "select__arrow--open" : ""}`
                  }
                )
              ] })
            ] }),
            d && /* @__PURE__ */ e.jsxs("div", { className: "select__dropdown", ref: ee, style: { maxHeight: z }, children: [
              f && /* @__PURE__ */ e.jsx("div", { className: "select__search", children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  ref: G,
                  type: "text",
                  className: "select__search-input",
                  placeholder: "搜索...",
                  value: W,
                  onChange: b,
                  onKeyDown: pe,
                  onClick: (r) => r.stopPropagation()
                }
              ) }),
              /* @__PURE__ */ e.jsx("div", { className: "select__options", role: "listbox", children: m ? /* @__PURE__ */ e.jsxs("div", { className: "select__loading", children: [
                /* @__PURE__ */ e.jsx("div", { className: "select__loading-spinner" }),
                /* @__PURE__ */ e.jsx("span", { children: P })
              ] }) : L.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "select__no-data", children: n }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                I && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `select__option ${Y === -1 ? "select__option--highlighted" : ""}`,
                    onClick: () => V({ value: "", label: s }),
                    role: "option",
                    "aria-selected": R === "",
                    children: s === v ? "请选择选项" : s
                  }
                ),
                L.map((r, J) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `select__option ${r.value === R ? "select__option--selected" : ""} ${r.disabled ? "select__option--disabled" : ""} ${J === Y ? "select__option--highlighted" : ""}`,
                    onClick: () => V(r),
                    role: "option",
                    "aria-selected": r.value === R,
                    "aria-disabled": r.disabled,
                    children: r.label
                  },
                  r.value
                ))
              ] }) })
            ] })
          ]
        }
      ),
      K && /* @__PURE__ */ e.jsx("div", { className: "select__help", id: `${Z}-help`, children: K }),
      M && /* @__PURE__ */ e.jsx("div", { className: "select__error", id: `${Z}-error`, children: M }),
      H && /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "hidden",
          name: H,
          value: R || ""
        }
      )
    ] });
  }
);
ws.displayName = "Select";
const Ls = "0.0.0";
export {
  Is as AILoading,
  ys as AIMessage,
  Ps as AIPromptInput,
  js as Button,
  Ns as ChatInterface,
  vs as Input,
  ws as Select,
  Ls as version
};
//# sourceMappingURL=index.es.js.map
