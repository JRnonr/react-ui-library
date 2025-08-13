import je, { forwardRef as xe, useState as D, useRef as re, useCallback as h, useEffect as ae, useMemo as Fe, useId as Ge } from "react";
var Ie = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe = je, Xe = Symbol.for("react.element"), Ze = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, es = Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pe(s, c, o) {
  var a, x = {}, g = null, w = null;
  o !== void 0 && (g = "" + o), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (w = c.ref);
  for (a in c) Oe.call(c, a) && !ss.hasOwnProperty(a) && (x[a] = c[a]);
  if (s && s.defaultProps) for (a in c = s.defaultProps, c) x[a] === void 0 && (x[a] = c[a]);
  return { $$typeof: Xe, type: s, key: g, ref: w, props: x, _owner: es.current };
}
ve.Fragment = Ze;
ve.jsx = Pe;
ve.jsxs = Pe;
Ie.exports = ve;
var e = Ie.exports, Le = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts = je, as = Symbol.for("react.element"), is = Symbol.for("react.fragment"), ls = Object.prototype.hasOwnProperty, cs = ts.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function De(s, c, o) {
  var a, x = {}, g = null, w = null;
  o !== void 0 && (g = "" + o), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (w = c.ref);
  for (a in c) ls.call(c, a) && !ns.hasOwnProperty(a) && (x[a] = c[a]);
  if (s && s.defaultProps) for (a in c = s.defaultProps, c) x[a] === void 0 && (x[a] = c[a]);
  return { $$typeof: as, type: s, key: g, ref: w, props: x, _owner: cs.current };
}
Ne.Fragment = is;
Ne.jsx = De;
Ne.jsxs = De;
Le.exports = Ne;
var z = Le.exports;
const oe = (s) => ({
  width: s.size ?? 16,
  height: s.size ?? 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: s.color ?? "currentColor",
  strokeWidth: s.strokeWidth ?? 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: s.className,
  "aria-hidden": !0,
  focusable: !1,
  xmlns: "http://www.w3.org/2000/svg"
}), Re = (s) => /* @__PURE__ */ z.jsx("svg", { ...oe(s), children: /* @__PURE__ */ z.jsx("path", { d: "M20 6 9 17l-5-5" }) }), rs = (s) => /* @__PURE__ */ z.jsx("svg", { ...oe(s), children: /* @__PURE__ */ z.jsx("path", { d: "M6 9l6 6 6-6" }) }), ye = (s) => /* @__PURE__ */ z.jsx("svg", { ...oe(s), children: /* @__PURE__ */ z.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) }), ds = (s) => /* @__PURE__ */ z.jsxs("svg", { ...oe(s), children: [
  /* @__PURE__ */ z.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
  /* @__PURE__ */ z.jsx("rect", { x: "2", y: "2", width: "13", height: "13", rx: "2", ry: "2" })
] }), we = (s) => /* @__PURE__ */ z.jsxs("svg", { ...oe(s), children: [
  /* @__PURE__ */ z.jsx("circle", { cx: "12", cy: "12", r: "10", opacity: "0.25", stroke: s.color ?? "currentColor", strokeWidth: s.strokeWidth ?? 2, strokeLinecap: "round", className: "btn__loading-circle" }),
  /* @__PURE__ */ z.jsx("path", { d: "M21 12a9 9 0 0 1-9 9" })
] }), os = (s) => /* @__PURE__ */ z.jsxs("svg", { ...oe(s), children: [
  /* @__PURE__ */ z.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ z.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] }), ke = (s) => /* @__PURE__ */ z.jsxs("svg", { ...oe(s), children: [
  /* @__PURE__ */ z.jsx("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ z.jsx("path", { d: "M12 7v5l3 3" })
] }), ps = (s) => /* @__PURE__ */ z.jsx("svg", { ...oe(s), children: /* @__PURE__ */ z.jsx("path", { d: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" }) }), $e = (s) => /* @__PURE__ */ z.jsxs("svg", { ...oe(s), children: [
  /* @__PURE__ */ z.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ z.jsx("path", { d: "M14 2v6h6" }),
  /* @__PURE__ */ z.jsx("line", { x1: "8", y1: "13", x2: "16", y2: "13" }),
  /* @__PURE__ */ z.jsx("line", { x1: "8", y1: "17", x2: "16", y2: "17" })
] }), us = xe(
  ({
    as: s,
    className: c = "",
    variant: o = "primary",
    size: a = "md",
    loading: x = !1,
    block: g = !1,
    disabled: w = !1,
    type: H = "button",
    onClick: R,
    style: $,
    children: v,
    ...n
  }, l) => {
    const N = s || "button";
    if (N === "button") {
      const M = "btn", J = `btn--${o}`, B = `btn--${a}`, P = [
        M,
        J,
        B,
        g ? "btn--block" : "",
        x ? "btn--loading" : "",
        w || x ? "btn--disabled" : "",
        c
      ].filter(Boolean).join(" "), t = (r) => {
        if (w || x) {
          r.preventDefault();
          return;
        }
        R == null || R(r);
      };
      return /* @__PURE__ */ e.jsxs(
        "button",
        {
          ref: l,
          type: H,
          className: P,
          disabled: w || x,
          onClick: t,
          style: $,
          ...n,
          children: [
            x && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(we, { className: "btn__loading-svg", size: 16 }) }),
            /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: v })
          ]
        }
      );
    }
    const j = "btn", U = `btn--${o}`, k = `btn--${a}`, Z = [
      j,
      U,
      k,
      g ? "btn--block" : "",
      x ? "btn--loading" : "",
      c
    ].filter(Boolean).join(" ");
    return je.createElement(N, {
      ref: l,
      className: Z,
      style: $,
      ...n
    }, [
      x && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(we, { className: "btn__loading-svg", size: 16 }) }, "loading"),
      /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: v }, "content")
    ].filter(Boolean));
  }
);
us.displayName = "Button";
const ms = xe(({
  initialMessages: s = [],
  placeholder: c = "输入消息...",
  disabled: o = !1,
  onSendMessage: a,
  renderMessage: x,
  className: g = "",
  style: w,
  ...H
}, R) => {
  const $ = Array.isArray(s) ? s : [], [v, n] = D($), [l, N] = D(""), [j, U] = D(!1), [k, q] = D(/* @__PURE__ */ new Set()), T = re(null), Z = re(null), M = h(() => {
    var r;
    const t = (r = T.current) == null ? void 0 : r.parentElement;
    t && (t.scrollTop = t.scrollHeight);
  }, []), J = h(() => {
    var r;
    const t = (r = T.current) == null ? void 0 : r.parentElement;
    if (t) {
      const m = document.createElement("div");
      m.style.height = "1px", m.style.visibility = "hidden", t.appendChild(m), setTimeout(() => {
        m.parentNode && m.parentNode.removeChild(m);
      }, 0);
    }
  }, []);
  ae(() => {
    v.length > 0 && M(), J();
  }, [v, M, J]);
  const B = h((t, r) => {
    const m = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: t,
      type: r,
      timestamp: /* @__PURE__ */ new Date()
    };
    return n((L) => [...L, m]), m;
  }, []), Y = h(async (t) => {
    const r = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: "",
      type: "assistant",
      timestamp: /* @__PURE__ */ new Date(),
      isTyping: !0
    };
    n((V) => [...V, r]);
    let m = "";
    const L = t.split(" ");
    for (let V = 0; V < L.length; V++)
      m += (V > 0 ? " " : "") + L[V], n(
        (I) => I.map(
          (p) => p.id === r.id ? { ...p, content: m } : p
        )
      ), await new Promise((I) => setTimeout(I, 100 + Math.random() * 50));
    n(
      (V) => V.map(
        (I) => I.id === r.id ? { ...I, isTyping: !1 } : I
      )
    );
  }, []), O = h(async () => {
    if (!l.trim() || o || !a && j) return;
    const t = l.trim(), r = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (!k.has(r)) {
      q((m) => {
        const L = new Set(m);
        return L.add(r), L;
      }), B(t, "user"), N(""), a || U(!0);
      try {
        if (a) {
          const m = await a(t);
          typeof m == "string" && m.trim() && await Y(m);
        } else {
          const m = `这是对"${t}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
          await Y(m);
        }
      } catch (m) {
        console.error("发送消息失败:", m), B("抱歉，发送消息时出现错误，请重试。", "assistant");
      } finally {
        a || U(!1), q((m) => {
          const L = new Set(m);
          return L.delete(r), L;
        });
      }
    }
  }, [l, o, j, B, a, Y, k]), b = h((t) => {
    t.key === "Enter" && !t.shiftKey && (t.preventDefault(), O());
  }, [O]), P = (t) => /* @__PURE__ */ e.jsxs("div", { className: `chat-message chat-message--${t.type}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "chat-message__avatar", children: t.type === "user" ? "👤" : "🤖" }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-message__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "chat-message__text", children: [
        t.content,
        t.isTyping && /* @__PURE__ */ e.jsx("span", { className: "chat-message__typing-indicator", children: "|" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-message__timestamp", children: t.timestamp.toLocaleTimeString() })
    ] })
  ] }, t.id);
  return /* @__PURE__ */ e.jsxs("div", { ref: R, className: `chat-interface ${g}`, style: w, ...H, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__header", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "chat-interface__title", children: "AI 助手" }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-interface__status", children: !a && j ? "正在思考..." : "在线" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__messages", children: [
      v.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__empty", children: [
        /* @__PURE__ */ e.jsx("div", { className: "chat-interface__empty-icon", children: "💬" }),
        /* @__PURE__ */ e.jsx("p", { children: "开始与AI助手对话吧！" })
      ] }) : v.map((t) => /* @__PURE__ */ e.jsx("div", { children: x ? x(t) : P(t) }, t.id)),
      /* @__PURE__ */ e.jsx("div", { ref: T })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__input", children: [
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          ref: Z,
          value: l,
          onChange: (t) => N(t.target.value),
          onKeyDown: b,
          placeholder: c,
          disabled: o || !a && j,
          className: "chat-interface__textarea",
          rows: 1
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: O,
          disabled: !l.trim() || o || !a && j,
          className: "chat-interface__send-btn",
          "aria-label": "发送消息",
          children: !a && j ? /* @__PURE__ */ e.jsx("span", { className: "chat-interface__loading-spinner" }) : "发送"
        }
      )
    ] })
  ] });
});
ms.displayName = "ChatInterface";
const _s = xe(
  ({
    type: s = "text",
    variant: c = "outline",
    size: o = "md",
    disabled: a = !1,
    readOnly: x = !1,
    required: g = !1,
    placeholder: w,
    defaultValue: H,
    value: R,
    onChange: $,
    onFocus: v,
    onBlur: n,
    onKeyDown: l,
    onEnter: N,
    prefix: j,
    suffix: U,
    allowClear: k = !1,
    showPasswordToggle: q = !1,
    label: T,
    helpText: Z,
    errorText: M,
    showCount: J = !1,
    maxLength: B,
    className: Y = "",
    style: O,
    name: b,
    id: P,
    autoComplete: t,
    autoFocus: r,
    inputMode: m,
    ...L
  }, V) => {
    const [I, p] = D(H || ""), [F, A] = D(!1), [f, _] = D(!1), K = R !== void 0 ? R : I, E = !!M, C = s === "password", G = h((y) => {
      const ue = y.target.value;
      R === void 0 && p(ue), $ == null || $(ue, y);
    }, [R, $]), te = h(() => {
      R === void 0 && p(""), $ == null || $("", {});
    }, [R, $]), se = h(() => {
      _((y) => !y);
    }, []), Q = h((y) => {
      y.key === "Enter" && (N == null || N(K)), l == null || l(y);
    }, [K, N, l]), W = h((y) => {
      A(!0), v == null || v(y);
    }, [v]), ie = h((y) => {
      A(!1), n == null || n(y);
    }, [n]), ee = "input", pe = `input--${c}`, S = `input--${o}`, _e = [
      ee,
      pe,
      S,
      a ? "input--disabled" : x ? "input--readonly" : E ? "input--error" : F ? "input--focused" : "",
      Y
    ].filter(Boolean).join(" "), ne = () => j ? /* @__PURE__ */ e.jsx("span", { className: "input__prefix", "aria-hidden": "true", children: j }) : null, he = () => {
      const y = [];
      return J && B && y.push(
        /* @__PURE__ */ e.jsxs("span", { className: "input__count", children: [
          K.length,
          "/",
          B
        ] }, "count")
      ), C && q && y.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__password-toggle",
            onClick: se,
            "aria-label": f ? "隐藏密码" : "显示密码",
            tabIndex: -1,
            children: f ? "👁️" : "👁️‍🗨️"
          },
          "password-toggle"
        )
      ), k && K && !a && !x && y.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "input__clear",
            onClick: te,
            "aria-label": "清除输入",
            tabIndex: -1,
            children: "✕"
          },
          "clear"
        )
      ), U && y.push(
        /* @__PURE__ */ e.jsx("span", { className: "input__suffix", "aria-hidden": "true", children: U }, "suffix")
      ), y.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "input__suffix-group", children: y }) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: "input__wrapper", children: [
      T && /* @__PURE__ */ e.jsxs("label", { className: "input__label", htmlFor: P, children: [
        T,
        g && /* @__PURE__ */ e.jsx("span", { className: "input__required", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "input__container", children: [
        ne(),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: V,
            id: P,
            name: b,
            type: C && q ? f ? "text" : "password" : s,
            value: K,
            onChange: G,
            onFocus: W,
            onBlur: ie,
            onKeyDown: Q,
            placeholder: w,
            disabled: a,
            readOnly: x,
            required: g,
            maxLength: B,
            autoComplete: t,
            autoFocus: r,
            inputMode: m,
            className: _e,
            style: O,
            ...L
          }
        ),
        he()
      ] }),
      (Z || M) && /* @__PURE__ */ e.jsx("div", { className: `input__message ${E ? "input__message--error" : "input__message--help"}`, children: M || Z })
    ] });
  }
);
_s.displayName = "Input";
const hs = [
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
], fs = (s) => {
  const c = {};
  return Object.keys(s).forEach((o) => {
    hs.some((a) => o === a || o.startsWith("aria-") || o.startsWith("data-")) && (c[o] = s[o]);
  }), c;
}, xs = xe(
  ({
    content: s,
    status: c = "success",
    showTimestamp: o = !0,
    timestamp: a,
    showCopyButton: x = !0,
    avatar: g,
    username: w = "AI Assistant",
    showUsername: H = !0,
    className: R = "",
    style: $,
    onCopy: v,
    onCopyError: n,
    onClick: l,
    enableCodeHighlight: N = !0,
    ...j
  }, U) => {
    const [k, q] = D(!1), T = h((t) => t instanceof Date ? t.toLocaleTimeString() : new Date(t).toLocaleTimeString(), []), Z = h(async () => {
      try {
        await navigator.clipboard.writeText(s), q(!0), v == null || v(s), setTimeout(() => q(!1), 2e3);
      } catch (t) {
        n == null || n(t);
      }
    }, [s, v, n]), M = h(() => {
      if (!N)
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: s });
      if (!s.trim())
        return /* @__PURE__ */ e.jsx("div", { className: "ai-message__content" });
      const t = s.split(`
`), r = [];
      let m = "", L = !1, V = "";
      const I = () => {
        if (m.trim()) {
          let p = m;
          p = p.replace(/\*\*(.*?)\*\*/g, (F, A) => `<strong class="ai-message__bold">${A}</strong>`), p = p.replace(/\*(.*?)\*/g, (F, A) => `<em class="ai-message__italic">${A}</em>`), p = p.replace(/`(.*?)`/g, (F, A) => `<code class="ai-message__inline-code">${A}</code>`), r.push(
            /* @__PURE__ */ e.jsx(
              "p",
              {
                className: "ai-message__text",
                dangerouslySetInnerHTML: { __html: p }
              },
              `text-${r.length}`
            )
          ), m = "";
        }
      };
      return t.forEach((p) => {
        var F;
        if (p.startsWith("```"))
          L ? (I(), r.push(
            /* @__PURE__ */ e.jsx("pre", { className: "ai-message__code-block", children: /* @__PURE__ */ e.jsx("code", { children: V }) }, `code-${r.length}`)
          ), L = !1, V = "") : (I(), L = !0);
        else if (L)
          V += p + `
`;
        else if (p.startsWith("#")) {
          I();
          const A = ((F = p.match(/^#+/)) == null ? void 0 : F[0].length) || 1, f = p.replace(/^#+\s*/, ""), _ = Math.min(A, 6);
          _ === 1 ? r.push(
            /* @__PURE__ */ e.jsx("h1", { className: "ai-message__heading ai-message__heading--h1", children: f }, `heading-${r.length}`)
          ) : _ === 2 ? r.push(
            /* @__PURE__ */ e.jsx("h2", { className: "ai-message__heading ai-message__heading--h2", children: f }, `heading-${r.length}`)
          ) : _ === 3 ? r.push(
            /* @__PURE__ */ e.jsx("h3", { className: "ai-message__heading ai-message__heading--h3", children: f }, `heading-${r.length}`)
          ) : _ === 4 ? r.push(
            /* @__PURE__ */ e.jsx("h4", { className: "ai-message__heading ai-message__heading--h4", children: f }, `heading-${r.length}`)
          ) : _ === 5 ? r.push(
            /* @__PURE__ */ e.jsx("h5", { className: "ai-message__heading ai-message__heading--h5", children: f }, `heading-${r.length}`)
          ) : r.push(
            /* @__PURE__ */ e.jsx("h6", { className: "ai-message__heading ai-message__heading--h6", children: f }, `heading-${r.length}`)
          );
        } else p.trim() === "" ? I() : m += p + " ";
      }), I(), r.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "ai-message__content", children: r });
    }, [s, N]), J = h(() => {
      switch (c) {
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
    }, [c]), B = "ai-message", Y = `ai-message--${c}`, b = [
      B,
      Y,
      c === "streaming" ? "ai-message--streaming" : "",
      R
    ].filter(Boolean).join(" "), P = fs(j);
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: U,
        className: b,
        style: $,
        onClick: l,
        "data-testid": "ai-message",
        ...P,
        children: [
          (g || H) && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__header", children: [
            g && /* @__PURE__ */ e.jsx("div", { className: "ai-message__avatar", children: g }),
            H && /* @__PURE__ */ e.jsxs("div", { className: "ai-message__user-info", children: [
              /* @__PURE__ */ e.jsx("span", { className: "ai-message__username", children: w }),
              o && a && /* @__PURE__ */ e.jsx("span", { className: "ai-message__timestamp", children: T(a) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "ai-message__body", children: [
            M(),
            J()
          ] }),
          x && /* @__PURE__ */ e.jsx("div", { className: "ai-message__actions", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `ai-message__copy-btn ${k ? "ai-message__copy-btn--copied" : ""}`,
              onClick: Z,
              disabled: c === "sending" || c === "streaming",
              "aria-label": k ? "已复制" : "复制内容",
              title: k ? "已复制" : "复制内容",
              children: k ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(Re, { className: "ai-message__copy-icon", size: 16 }),
                "已复制"
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(ds, { className: "ai-message__copy-icon", size: 16 }),
                "复制"
              ] })
            }
          ) })
        ]
      }
    );
  }
);
xs.displayName = "AIMessage";
const bs = ({
  type: s = "typing",
  text: c = "AI正在思考中...",
  texts: o = [],
  typingSpeed: a = 100,
  loop: x = !1,
  showProgress: g = !1,
  progress: w = 0,
  indeterminate: H = !1,
  className: R = "",
  style: $ = {},
  onComplete: v,
  onTextChange: n
}) => {
  const [l, N] = D(""), [j, U] = D(0), [k, q] = D(!1), [T, Z] = D(0), M = o.length > 0 ? o : [c], J = h(async (b) => {
    q(!0);
    let P = "";
    for (let t = 0; t < b.length; t++)
      P += b[t], N(P), n == null || n(P), await new Promise((r) => setTimeout(r, a));
    q(!1), v == null || v();
  }, [a, n, v]), B = h(() => {
    const b = setInterval(() => {
      Z((P) => (P + 1) % 4);
    }, 500);
    return () => clearInterval(b);
  }, []);
  ae(() => {
    if (s === "typing" && M.length > 0) {
      const b = M[j];
      J(b);
    }
  }, [s, j, M.length, a, n, v]), ae(() => {
    if (x && s === "typing" && !k) {
      const b = setTimeout(() => {
        U((P) => (P + 1) % M.length);
      }, 1e3);
      return () => clearTimeout(b);
    }
  }, [x, s, k, M.length, j]), ae(() => {
    if (s === "thinking")
      return B();
  }, [s, B]), ae(() => {
    if (s === "dots") {
      const b = setInterval(() => {
        Z((P) => (P + 1) % 4);
      }, 300);
      return () => clearInterval(b);
    }
  }, [s]);
  const Y = () => {
    switch (s) {
      case "typing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-typing", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: l }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-cursor", children: "|" })
        ] });
      case "thinking":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-thinking", children: [
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: c }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots", children: [0, 1, 2].map((b) => /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `ai-loading-dot ${b === T ? "active" : ""}`
            },
            b
          )) })
        ] });
      case "processing":
        return /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-processing", children: [
          /* @__PURE__ */ e.jsx("div", { className: "ai-loading-spinner" }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-loading-text", children: c })
        ] });
      case "dots":
        return /* @__PURE__ */ e.jsx("div", { className: "ai-loading-dots-only", children: [0, 1, 2, 3].map((b) => /* @__PURE__ */ e.jsx(
          "span",
          {
            className: `ai-loading-dot ${b === T ? "active" : ""}`
          },
          b
        )) });
      default:
        return null;
    }
  }, O = () => g ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-progress", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ai-loading-progress-bar", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ai-loading-progress-fill ${H ? "indeterminate" : ""}`,
        style: {
          width: H ? "100%" : `${w}%`
        }
      }
    ) }),
    !H && /* @__PURE__ */ e.jsxs("span", { className: "ai-loading-progress-text", children: [
      Math.round(w),
      "%"
    ] })
  ] }) : null;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `ai-loading ai-loading-${s} ${R}`,
      style: $,
      role: "status",
      "aria-label": `AI加载中，类型：${s}`,
      children: [
        Y(),
        O()
      ]
    }
  );
}, ks = ({
  value: s,
  defaultValue: c = "",
  placeholder: o = "输入你的提示...",
  disabled: a = !1,
  readOnly: x = !1,
  size: g = "md",
  variant: w = "outline",
  clearable: H = !0,
  showHistory: R = !0,
  showShortcuts: $ = !0,
  showTemplates: v = !0,
  showSuggestions: n = !0,
  maxHistoryItems: l = 10,
  maxSuggestions: N = 8,
  minCharsForSuggestions: j = 2,
  shortcutTrigger: U = "/",
  history: k = [],
  suggestions: q = [],
  templates: T = [],
  shortcuts: Z = [],
  label: M,
  required: J = !1,
  helpText: B,
  errorText: Y,
  error: O = !1,
  className: b = "",
  style: P,
  onChange: t,
  onFocus: r,
  onBlur: m,
  onEnter: L,
  onSuggestionSelect: V,
  onTemplateSelect: I,
  onShortcutSelect: p,
  onHistoryClear: F,
  onHistoryAdd: A
}) => {
  const [f, _] = D(s ?? c), [K, E] = D(!1), [C, G] = D(!1), [te, se] = D(!1), [Q, W] = D(!1), [ie, ee] = D(!1), [pe, S] = D(-1), [ce, _e] = D([]), [ne, he] = D([]), [y, ue] = D([]), de = re(null), ge = re(null), d = re(null), X = re(null), be = re(null);
  ae(() => {
    s !== void 0 && _(s);
  }, [s]), ae(() => {
    if (f.length >= j) {
      const i = q.filter(
        (u) => u.text.toLowerCase().includes(f.toLowerCase())
      ).slice(0, N);
      _e(i);
    } else
      _e([]);
  }, [f, j, N]), ae(() => {
    if (f.length >= j) {
      const i = T.filter(
        (u) => u.name.toLowerCase().includes(f.toLowerCase()) || u.description.toLowerCase().includes(f.toLowerCase()) || u.tags.some((le) => le.toLowerCase().includes(f.toLowerCase()))
      ).slice(0, N);
      he(i);
    } else
      he([]);
  }, [f, j, N]), ae(() => {
    if (f.startsWith(U)) {
      const i = f.slice(U.length).toLowerCase(), u = Z.filter(
        (le) => le.key.toLowerCase().includes(i) || le.label.toLowerCase().includes(i) || le.description.toLowerCase().includes(i)
      ).slice(0, N);
      ue(u);
    } else
      ue([]);
  }, [f, U, N]);
  const Ee = h((i) => {
    const u = i.target.value;
    _(u), t == null || t(u), S(-1), u.startsWith(U) && $ ? (ee(!0), G(!1), se(!1), W(!1)) : u.length >= j && n ? (G(!0), ee(!1), se(!1), W(!1)) : (G(!1), ee(!1), se(!1), W(!1));
  }, [t, U, $, j, n]), ze = h((i) => {
    E(!0), r == null || r(i), f.length >= j && n && G(!0);
  }, [r, f, j, n]), Me = h((i) => {
    E(!1), m == null || m(i), setTimeout(() => {
      G(!1), se(!1), W(!1), ee(!1), S(-1);
    }, 150);
  }, [m]), Ae = h((i) => {
    var u;
    if (i.key === "Enter")
      i.preventDefault(), L == null || L(f), f.trim() && A && A(f.trim()), G(!1), se(!1), W(!1), ee(!1), S(-1);
    else if (i.key === "Escape")
      G(!1), se(!1), W(!1), ee(!1), S(-1), (u = de.current) == null || u.blur();
    else if (i.key === "ArrowDown") {
      if (i.preventDefault(), [
        C && ce.length > 0,
        te && k.length > 0,
        Q && ne.length > 0,
        ie && y.length > 0
      ].some(Boolean)) {
        const me = Math.max(
          C ? ce.length - 1 : -1,
          te ? k.length - 1 : -1,
          Q ? ne.length - 1 : -1,
          ie ? y.length - 1 : -1
        );
        S((fe) => fe < me ? fe + 1 : 0);
      }
    } else if (i.key === "ArrowUp" && (i.preventDefault(), [
      C && ce.length > 0,
      te && k.length > 0,
      Q && ne.length > 0,
      ie && y.length > 0
    ].some(Boolean))) {
      const me = Math.max(
        C ? ce.length - 1 : -1,
        te ? k.length - 1 : -1,
        Q ? ne.length - 1 : -1,
        ie ? y.length - 1 : -1
      );
      S((fe) => fe > 0 ? fe - 1 : me);
    }
  }, [
    L,
    f,
    A,
    C,
    te,
    Q,
    ie,
    ce,
    ne,
    y,
    k
  ]), Te = h((i) => {
    var u;
    _(i.text), t == null || t(i.text), V == null || V(i), G(!1), S(-1), (u = de.current) == null || u.focus();
  }, [t, V]), Ve = h((i) => {
    var u;
    _(i.content), t == null || t(i.content), I == null || I(i), W(!1), S(-1), (u = de.current) == null || u.focus();
  }, [t, I]), We = h((i) => {
    var u;
    _(i.action), t == null || t(i.action), p == null || p(i), ee(!1), S(-1), (u = de.current) == null || u.focus();
  }, [t, p]), Be = h((i) => {
    var u;
    _(i), t == null || t(i), se(!1), S(-1), (u = de.current) == null || u.focus();
  }, [t]), Ke = h(() => {
    var i;
    _(""), t == null || t(""), G(!1), se(!1), W(!1), ee(!1), S(-1), (i = de.current) == null || i.focus();
  }, [t]), Se = h(() => {
    se(!te), G(!1), W(!1), ee(!1), S(-1);
  }, [te]), He = h(() => {
    W(!Q), G(!1), se(!1), ee(!1), S(-1);
  }, [Q]), Ue = Fe(() => {
    const i = "ai-prompt-input", u = `ai-prompt-input--${g}`, le = `ai-prompt-input--${w}`;
    return `${i} ${u} ${le} ${O ? "ai-prompt-input--error" : ""} ${K ? "ai-prompt-input--focused" : ""} ${a ? "ai-prompt-input--disabled" : ""} ${b}`.trim();
  }, [g, w, O, K, a, b]), qe = () => !C || ce.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: ge, className: "ai-prompt-input__panel ai-prompt-input__suggestions", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(os, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "建议" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: ce.map((i, u) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__suggestion-item ${u === pe ? "ai-prompt-input__suggestion-item--selected" : ""}`,
        onClick: () => Te(i),
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__suggestion-text", children: i.text }),
          i.category && /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__suggestion-category", children: i.category }),
          i.usage && /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__suggestion-usage", children: [
            "使用 ",
            i.usage,
            " 次"
          ] })
        ]
      },
      i.id
    )) })
  ] }), Ye = () => !te || k.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: d, className: "ai-prompt-input__panel ai-prompt-input__history", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(ke, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "历史记录" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "ai-prompt-input__clear-history",
          onClick: F,
          type: "button",
          children: /* @__PURE__ */ e.jsx(ye, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: k.slice(0, l).map((i, u) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__history-item ${u === pe ? "ai-prompt-input__history-item--selected" : ""}`,
        onClick: () => Be(i),
        children: [
          /* @__PURE__ */ e.jsx(ke, { size: 14 }),
          /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__history-text", children: i })
        ]
      },
      u
    )) })
  ] }), Ce = () => {
    if (!Q) return null;
    const i = f.length >= j ? ne : T.slice(0, N);
    return i.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: X, className: "ai-prompt-input__panel ai-prompt-input__templates", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
        /* @__PURE__ */ e.jsx($e, { size: 16 }),
        /* @__PURE__ */ e.jsx("span", { children: "模板" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: i.map((u, le) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `ai-prompt-input__template-item ${le === pe ? "ai-prompt-input__template-item--selected" : ""}`,
          onClick: () => Ve(u),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__template-header", children: [
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-name", children: u.name }),
              /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-category", children: u.category })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-description", children: u.description }),
            /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__template-tags", children: u.tags.slice(0, 3).map((me) => /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__template-tag", children: me }, me)) })
          ]
        },
        u.id
      )) })
    ] });
  }, Je = () => !ie || y.length === 0 ? null : /* @__PURE__ */ e.jsxs("div", { ref: be, className: "ai-prompt-input__panel ai-prompt-input__shortcuts", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__panel-header", children: [
      /* @__PURE__ */ e.jsx(ps, { size: 16 }),
      /* @__PURE__ */ e.jsx("span", { children: "快捷指令" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__panel-content", children: y.map((i, u) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `ai-prompt-input__shortcut-item ${u === pe ? "ai-prompt-input__shortcut-item--selected" : ""}`,
        onClick: () => We(i),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__shortcut-key", children: [
            "/",
            i.key
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__shortcut-label", children: i.label }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-prompt-input__shortcut-description", children: i.description })
        ]
      },
      i.key
    )) })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: Ue, style: P, children: [
    M && /* @__PURE__ */ e.jsxs("label", { className: "ai-prompt-input__label", children: [
      M,
      J && /* @__PURE__ */ e.jsx("span", { className: "ai-prompt-input__required", children: "*" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__wrapper", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__input-container", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: de,
            type: "text",
            value: f,
            onChange: Ee,
            onFocus: ze,
            onBlur: Me,
            onKeyDown: Ae,
            placeholder: o,
            disabled: a,
            readOnly: x,
            className: "ai-prompt-input__input",
            "aria-label": M || o,
            "aria-invalid": O,
            "aria-describedby": Y ? "error-text" : B ? "help-text" : void 0
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "ai-prompt-input__actions", children: [
          R && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__history-btn",
              onClick: Se,
              disabled: a,
              "aria-label": "显示历史记录",
              children: /* @__PURE__ */ e.jsx(ke, { size: 16 })
            }
          ),
          v && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__templates-btn",
              onClick: He,
              disabled: a,
              "aria-label": "显示模板",
              children: /* @__PURE__ */ e.jsx($e, { size: 16 })
            }
          ),
          H && f && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "ai-prompt-input__action-btn ai-prompt-input__clear-btn",
              onClick: Ke,
              disabled: a,
              "aria-label": "清除输入",
              children: /* @__PURE__ */ e.jsx(ye, { size: 16 })
            }
          )
        ] })
      ] }),
      qe(),
      Ye(),
      Ce(),
      Je()
    ] }),
    B && !Y && /* @__PURE__ */ e.jsx("div", { id: "help-text", className: "ai-prompt-input__help-text", children: B }),
    Y && /* @__PURE__ */ e.jsx("div", { id: "error-text", className: "ai-prompt-input__error-text", children: Y })
  ] });
}, js = xe(
  ({
    variant: s = "outline",
    size: c = "md",
    disabled: o = !1,
    readOnly: a = !1,
    required: x = !1,
    placeholder: g = "请选择",
    defaultValue: w,
    value: H,
    onChange: R,
    onFocus: $,
    onBlur: v,
    onOpen: n,
    onClose: l,
    options: N = [],
    searchable: j = !1,
    allowClear: U = !1,
    label: k,
    helpText: q,
    errorText: T,
    showArrow: Z = !0,
    maxHeight: M = 300,
    className: J = "",
    style: B,
    name: Y,
    id: O,
    autoFocus: b = !1,
    showEmptyOption: P = !1,
    emptyOptionText: t = "请选择",
    noDataText: r = "暂无数据",
    loading: m = !1,
    loadingText: L = "加载中...",
    ...V
  }, I) => {
    const [p, F] = D(!1), [A, f] = D(H ?? w), [_, K] = D(""), [E, C] = D(-1), G = re(null), te = re(null), se = re(null), Q = O || `select-${Math.random().toString(36).substr(2, 9)}`, W = je.useMemo(() => !j || !_ ? N : N.filter(
      (d) => d.label.toLowerCase().includes(_.toLowerCase())
    ), [N, j, _]), ie = je.useMemo(() => N.find((d) => d.value === A), [N, A]), ee = h((d) => {
      let X = N.find((be) => be.value === d);
      d === "" && !X && P && (X = { value: "", label: t }), f(d), R == null || R(d, X);
    }, [N, R, P, t]), pe = h(() => {
      if (o || a) return;
      const d = !p;
      F(d), d ? (n == null || n(), j && se.current && setTimeout(() => {
        var X;
        return (X = se.current) == null ? void 0 : X.focus();
      }, 0)) : l == null || l();
    }, [o, a, p, n, l, j]), S = h((d) => {
      d.disabled || (ee(d.value), F(!1), l == null || l(), K(""), C(-1));
    }, [ee, l]), ce = h((d) => {
      d.stopPropagation(), ee(void 0);
    }, [ee]), _e = h((d) => {
      if (!(o || a))
        switch (d.key) {
          case "Enter":
          case " ":
            d.preventDefault(), p ? E >= 0 && W[E] && S(W[E]) : (F(!0), n == null || n());
            break;
          case "Escape":
            p && (F(!1), l == null || l(), C(-1));
            break;
          case "ArrowDown":
            d.preventDefault(), p ? C(
              (X) => X < W.length - 1 ? X + 1 : 0
            ) : (F(!0), n == null || n(), C(0));
            break;
          case "ArrowUp":
            d.preventDefault(), p && C(
              (X) => X > 0 ? X - 1 : W.length - 1
            );
            break;
          case "Tab":
            p && (F(!1), l == null || l(), C(-1));
            break;
        }
    }, [o, a, p, E, W, n, l, S]), ne = h((d) => {
      $ == null || $(d);
    }, [$]), he = h((d) => {
      v == null || v(d);
    }, [v]), y = h((d) => {
      K(d.target.value), C(-1);
    }, []), ue = h((d) => {
      d.key === "Enter" && E >= 0 && W[E] && S(W[E]);
    }, [E, W, S]);
    ae(() => {
      const d = (X) => {
        G.current && !G.current.contains(X.target) && (F(!1), l == null || l(), C(-1));
      };
      if (p)
        return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
    }, [p, l]), ae(() => {
      b && G.current && G.current.focus();
    }, [b]), ae(() => {
      H !== void 0 && f(H);
    }, [H]);
    const de = [
      "select",
      `select--${s}`,
      `select--${c}`,
      J,
      {
        "select--disabled": o,
        "select--readonly": a,
        "select--error": !!T,
        "select--open": p
      }
    ].filter(Boolean).join(" "), ge = [
      "select__selector",
      {
        "select__selector--disabled": o,
        "select__selector--readonly": a,
        "select__selector--error": !!T,
        "select__selector--open": p
      }
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.jsxs("div", { className: "select__wrapper", children: [
      k && /* @__PURE__ */ e.jsxs("label", { htmlFor: Q, className: "select__label", id: `${Q}-label`, children: [
        k,
        x && /* @__PURE__ */ e.jsx("span", { className: "select__required", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: (d) => {
            G.current = d, typeof I == "function" ? I(d) : I && (I.current = d);
          },
          className: de,
          style: B,
          tabIndex: o || a ? -1 : 0,
          onFocus: ne,
          onBlur: he,
          onKeyDown: _e,
          onClick: pe,
          role: "combobox",
          "aria-expanded": p,
          "aria-haspopup": "listbox",
          "aria-labelledby": k ? `${Q}-label` : void 0,
          "aria-describedby": T ? `${Q}-error` : q ? `${Q}-help` : void 0,
          ...V,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: ge, children: [
              /* @__PURE__ */ e.jsx("div", { className: "select__content", children: ie ? /* @__PURE__ */ e.jsx("span", { className: "select__selected", children: ie.label }) : /* @__PURE__ */ e.jsx("span", { className: "select__placeholder", children: g }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "select__actions", children: [
                U && A && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    className: "select__clear",
                    onClick: ce,
                    "aria-label": "清除选择",
                    children: /* @__PURE__ */ e.jsx(ye, { size: 16 })
                  }
                ),
                Z && /* @__PURE__ */ e.jsx(
                  rs,
                  {
                    size: 16,
                    className: `select__arrow ${p ? "select__arrow--open" : ""}`
                  }
                )
              ] })
            ] }),
            p && /* @__PURE__ */ e.jsxs("div", { className: "select__dropdown", ref: te, style: { maxHeight: M }, children: [
              j && /* @__PURE__ */ e.jsx("div", { className: "select__search", children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  ref: se,
                  type: "text",
                  className: "select__search-input",
                  placeholder: "搜索...",
                  value: _,
                  onChange: y,
                  onKeyDown: ue,
                  onClick: (d) => d.stopPropagation()
                }
              ) }),
              /* @__PURE__ */ e.jsx("div", { className: "select__options", role: "listbox", children: m ? /* @__PURE__ */ e.jsxs("div", { className: "select__loading", children: [
                /* @__PURE__ */ e.jsx("div", { className: "select__loading-spinner" }),
                /* @__PURE__ */ e.jsx("span", { children: L })
              ] }) : W.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "select__no-data", children: r }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                P && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `select__option ${E === -1 ? "select__option--highlighted" : ""}`,
                    onClick: () => S({ value: "", label: t }),
                    role: "option",
                    "aria-selected": A === "",
                    children: t === g ? "请选择选项" : t
                  }
                ),
                W.map((d, X) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `select__option ${d.value === A ? "select__option--selected" : ""} ${d.disabled ? "select__option--disabled" : ""} ${X === E ? "select__option--highlighted" : ""}`,
                    onClick: () => S(d),
                    role: "option",
                    "aria-selected": d.value === A,
                    "aria-disabled": d.disabled,
                    children: d.label
                  },
                  d.value
                ))
              ] }) })
            ] })
          ]
        }
      ),
      q && /* @__PURE__ */ e.jsx("div", { className: "select__help", id: `${Q}-help`, children: q }),
      T && /* @__PURE__ */ e.jsx("div", { className: "select__error", id: `${Q}-error`, children: T }),
      Y && /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "hidden",
          name: Y,
          value: A || ""
        }
      )
    ] });
  }
);
js.displayName = "Select";
const vs = xe(
  ({
    checked: s = !1,
    indeterminate: c = !1,
    disabled: o = !1,
    size: a = "md",
    variant: x = "default",
    label: g,
    description: w,
    value: H,
    name: R,
    id: $,
    required: v = !1,
    readOnly: n = !1,
    onChange: l,
    onFocus: N,
    onBlur: j,
    className: U = "",
    style: k,
    children: q,
    ...T
  }, Z) => {
    const M = Ge(), J = $ || M, B = `${J}-label`, Y = w ? `${J}-description` : void 0, O = "checkbox", b = `checkbox--${a}`, P = `checkbox--${x}`, L = [
      O,
      b,
      P,
      o ? "checkbox--disabled" : "",
      c ? "checkbox--indeterminate" : "",
      s && !c ? "checkbox--checked" : "",
      U
    ].filter(Boolean).join(" "), V = (_) => {
      if (o || n) {
        _.preventDefault();
        return;
      }
      l == null || l(_.target.checked, _);
    }, I = (_) => {
      if ((_.key === "Enter" || _.key === " ") && (_.preventDefault(), !o && !n)) {
        const K = !s, E = {
          target: { checked: K }
        };
        l == null || l(K, E);
      }
    }, p = (_) => {
      if (o || n) {
        _.preventDefault();
        return;
      }
      _.stopPropagation();
      const K = !s, E = {
        target: { checked: K }
      };
      l == null || l(K, E);
    }, F = (_) => {
      if (o || n) {
        _.preventDefault();
        return;
      }
      const K = !s, E = {
        target: { checked: K }
      };
      l == null || l(K, E);
    }, A = (_) => {
      if (o || n) {
        _.preventDefault();
        return;
      }
      _.currentTarget.classList.add("checkbox--touching");
    }, f = (_) => {
      if (o || n) {
        _.preventDefault();
        return;
      }
      _.currentTarget.classList.remove("checkbox--touching");
      const E = !s, C = {
        target: { checked: E }
      };
      l == null || l(E, C);
    };
    return /* @__PURE__ */ e.jsxs("div", { className: L, style: k, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "checkbox__container", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: Z,
            id: J,
            type: "checkbox",
            name: R,
            value: H,
            checked: s,
            disabled: o,
            readOnly: n,
            required: v,
            "aria-describedby": Y,
            "aria-invalid": v && !s,
            "aria-checked": c ? "mixed" : s ? "true" : "false",
            onChange: V,
            onFocus: N,
            onBlur: j,
            onKeyDown: I,
            className: "checkbox__input",
            ...T
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "checkbox__control",
            onClick: p,
            onTouchStart: A,
            onTouchEnd: f,
            role: "button",
            tabIndex: o || n ? -1 : 0,
            "aria-pressed": s,
            "aria-label": g || "复选框",
            children: /* @__PURE__ */ e.jsxs("div", { className: "checkbox__icon", children: [
              s && !c && /* @__PURE__ */ e.jsx(Re, { size: 16 }),
              c && /* @__PURE__ */ e.jsx("div", { className: "checkbox__indeterminate-line" })
            ] })
          }
        ),
        (g || q) && /* @__PURE__ */ e.jsx(
          "label",
          {
            htmlFor: J,
            id: B,
            className: "checkbox__label",
            onClick: F,
            children: g || q
          }
        )
      ] }),
      w && /* @__PURE__ */ e.jsx("div", { id: Y, className: "checkbox__description", children: w })
    ] });
  }
);
vs.displayName = "Checkbox";
const ys = "0.0.0";
export {
  bs as AILoading,
  xs as AIMessage,
  ks as AIPromptInput,
  us as Button,
  ms as ChatInterface,
  vs as Checkbox,
  _s as Input,
  js as Select,
  ys as version
};
//# sourceMappingURL=index.es.js.map
