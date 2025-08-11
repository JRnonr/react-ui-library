import X, { forwardRef as z, createElement as q, useState as D, useRef as Y, useCallback as x, useEffect as ps } from "react";
var ss = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs = X, gs = Symbol.for("react.element"), xs = Symbol.for("react.fragment"), js = Object.prototype.hasOwnProperty, bs = fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(n, e, r) {
  var a, l = {}, d = null, g = null;
  r !== void 0 && (d = "" + r), e.key !== void 0 && (d = "" + e.key), e.ref !== void 0 && (g = e.ref);
  for (a in e) js.call(e, a) && !Ns.hasOwnProperty(a) && (l[a] = e[a]);
  if (n && n.defaultProps) for (a in e = n.defaultProps, e) l[a] === void 0 && (l[a] = e[a]);
  return { $$typeof: gs, type: n, key: d, ref: g, props: l, _owner: bs.current };
}
F.Fragment = xs;
F.jsx = es;
F.jsxs = es;
ss.exports = F;
var s = ss.exports;
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ys = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), G = (n) => {
  const e = ys(n);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ts = (...n) => n.filter((e, r, a) => !!e && e.trim() !== "" && a.indexOf(e) === r).join(" ").trim(), ws = (n) => {
  for (const e in n)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cs = {
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
const $s = z(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: d,
    iconNode: g,
    ...I
  }, _) => q(
    "svg",
    {
      ref: _,
      ...Cs,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: a ? Number(r) * 24 / Number(e) : r,
      className: ts("lucide", l),
      ...!d && !ws(I) && { "aria-hidden": "true" },
      ...I
    },
    [
      ...g.map(([h, j]) => q(h, j)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = (n, e) => {
  const r = z(
    ({ className: a, ...l }, d) => q($s, {
      ref: d,
      iconNode: e,
      className: ts(
        `lucide-${vs(G(n))}`,
        `lucide-${n}`,
        a
      ),
      ...l
    })
  );
  return r.displayName = G(n), r;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ks = K("check", Is);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], As = K("copy", Ts);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Q = K("loader-circle", Ss), Ps = z(
  ({
    as: n,
    className: e = "",
    variant: r = "primary",
    size: a = "md",
    loading: l = !1,
    block: d = !1,
    disabled: g = !1,
    type: I = "button",
    onClick: _,
    style: h,
    children: j,
    ...p
  }, m) => {
    const y = n || "button";
    if (y === "button") {
      const T = "btn", R = `btn--${r}`, C = `btn--${a}`, L = [
        T,
        R,
        C,
        d ? "btn--block" : "",
        l ? "btn--loading" : "",
        g || l ? "btn--disabled" : "",
        e
      ].filter(Boolean).join(" "), t = (c) => {
        if (g || l) {
          c.preventDefault();
          return;
        }
        _ == null || _(c);
      };
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          ref: m,
          type: I,
          className: L,
          disabled: g || l,
          onClick: t,
          style: h,
          ...p,
          children: [
            l && /* @__PURE__ */ s.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ s.jsx(Q, { className: "btn__loading-svg", size: 16 }) }),
            /* @__PURE__ */ s.jsx("span", { className: "btn__content", children: j })
          ]
        }
      );
    }
    const v = "btn", A = `btn--${r}`, w = `btn--${a}`, P = [
      v,
      A,
      w,
      d ? "btn--block" : "",
      l ? "btn--loading" : "",
      e
    ].filter(Boolean).join(" ");
    return X.createElement(y, {
      ref: m,
      className: P,
      style: h,
      ...p
    }, [
      l && /* @__PURE__ */ s.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ s.jsx(Q, { className: "btn__loading-svg", size: 16 }) }, "loading"),
      /* @__PURE__ */ s.jsx("span", { className: "btn__content", children: j }, "content")
    ].filter(Boolean));
  }
);
Ps.displayName = "Button";
const Rs = z(({
  initialMessages: n = [],
  placeholder: e = "输入消息...",
  disabled: r = !1,
  onSendMessage: a,
  renderMessage: l,
  className: d = "",
  style: g,
  ...I
}, _) => {
  const h = Array.isArray(n) ? n : [], [j, p] = D(h), [m, y] = D(""), [v, A] = D(!1), [w, S] = D(/* @__PURE__ */ new Set()), k = Y(null), P = Y(null), T = x(() => {
    var t;
    (t = k.current) != null && t.scrollIntoView && k.current.scrollIntoView({ behavior: "smooth" });
  }, []), R = x(() => {
    var c;
    const t = (c = k.current) == null ? void 0 : c.parentElement;
    if (t) {
      const i = document.createElement("div");
      i.style.height = "1px", i.style.visibility = "hidden", t.appendChild(i), setTimeout(() => {
        i.parentNode && i.parentNode.removeChild(i);
      }, 0);
    }
  }, []);
  ps(() => {
    T(), R();
  }, [j, T, R]);
  const C = x((t, c) => {
    const i = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: t,
      type: c,
      timestamp: /* @__PURE__ */ new Date()
    };
    return p((f) => [...f, i]), i;
  }, []), E = x(async (t) => {
    const c = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: "",
      type: "assistant",
      timestamp: /* @__PURE__ */ new Date(),
      isTyping: !0
    };
    p((b) => [...b, c]);
    let i = "";
    const f = t.split(" ");
    for (let b = 0; b < f.length; b++)
      i += (b > 0 ? " " : "") + f[b], p(
        (N) => N.map(
          (o) => o.id === c.id ? { ...o, content: i } : o
        )
      ), await new Promise((N) => setTimeout(N, 100 + Math.random() * 50));
    p(
      (b) => b.map(
        (N) => N.id === c.id ? { ...N, isTyping: !1 } : N
      )
    );
  }, []), B = x(async () => {
    if (!m.trim() || r || !a && v) return;
    const t = m.trim(), c = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (!w.has(c)) {
      S((i) => {
        const f = new Set(i);
        return f.add(c), f;
      }), C(t, "user"), y(""), a || A(!0);
      try {
        if (a) {
          const i = await a(t);
          typeof i == "string" && i.trim() && await E(i);
        } else {
          const i = `这是对"${t}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
          await E(i);
        }
      } catch (i) {
        console.error("发送消息失败:", i), C("抱歉，发送消息时出现错误，请重试。", "assistant");
      } finally {
        a || A(!1), S((i) => {
          const f = new Set(i);
          return f.delete(c), f;
        });
      }
    }
  }, [m, r, v, C, a, E, w]), V = x((t) => {
    t.key === "Enter" && !t.shiftKey && (t.preventDefault(), B());
  }, [B]), L = (t) => /* @__PURE__ */ s.jsxs("div", { className: `chat-message chat-message--${t.type}`, children: [
    /* @__PURE__ */ s.jsx("div", { className: "chat-message__avatar", children: t.type === "user" ? "👤" : "🤖" }),
    /* @__PURE__ */ s.jsxs("div", { className: "chat-message__content", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "chat-message__text", children: [
        t.content,
        t.isTyping && /* @__PURE__ */ s.jsx("span", { className: "chat-message__typing-indicator", children: "|" })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "chat-message__timestamp", children: t.timestamp.toLocaleTimeString() })
    ] })
  ] }, t.id);
  return /* @__PURE__ */ s.jsxs("div", { ref: _, className: `chat-interface ${d}`, style: g, ...I, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "chat-interface__header", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "chat-interface__title", children: "AI 助手" }),
      /* @__PURE__ */ s.jsx("div", { className: "chat-interface__status", children: !a && v ? "正在思考..." : "在线" })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "chat-interface__messages", children: [
      j.length === 0 ? /* @__PURE__ */ s.jsxs("div", { className: "chat-interface__empty", children: [
        /* @__PURE__ */ s.jsx("div", { className: "chat-interface__empty-icon", children: "💬" }),
        /* @__PURE__ */ s.jsx("p", { children: "开始与AI助手对话吧！" })
      ] }) : j.map((t) => /* @__PURE__ */ s.jsx("div", { children: l ? l(t) : L(t) }, t.id)),
      /* @__PURE__ */ s.jsx("div", { ref: k })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "chat-interface__input", children: [
      /* @__PURE__ */ s.jsx(
        "textarea",
        {
          ref: P,
          value: m,
          onChange: (t) => y(t.target.value),
          onKeyDown: V,
          placeholder: e,
          disabled: r || !a && v,
          className: "chat-interface__textarea",
          rows: 1
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: B,
          disabled: !m.trim() || r || !a && v,
          className: "chat-interface__send-btn",
          "aria-label": "发送消息",
          children: !a && v ? /* @__PURE__ */ s.jsx("span", { className: "chat-interface__loading-spinner" }) : "发送"
        }
      )
    ] })
  ] });
});
Rs.displayName = "ChatInterface";
const Es = z(
  ({
    type: n = "text",
    variant: e = "outline",
    size: r = "md",
    disabled: a = !1,
    readOnly: l = !1,
    required: d = !1,
    placeholder: g,
    defaultValue: I,
    value: _,
    onChange: h,
    onFocus: j,
    onBlur: p,
    onKeyDown: m,
    onEnter: y,
    prefix: v,
    suffix: A,
    allowClear: w = !1,
    showPasswordToggle: S = !1,
    label: k,
    helpText: P,
    errorText: T,
    showCount: R = !1,
    maxLength: C,
    className: E = "",
    style: B,
    name: V,
    id: L,
    autoComplete: t,
    autoFocus: c,
    inputMode: i,
    ...f
  }, b) => {
    const [N, o] = D(I || ""), [M, $] = D(!1), [O, U] = D(!1), W = _ !== void 0 ? _ : N, Z = !!T, H = n === "password", as = x((u) => {
      const J = u.target.value;
      _ === void 0 && o(J), h == null || h(J, u);
    }, [_, h]), ns = x(() => {
      _ === void 0 && o(""), h == null || h("", {});
    }, [_, h]), is = x(() => {
      U((u) => !u);
    }, []), rs = x((u) => {
      u.key === "Enter" && (y == null || y(W)), m == null || m(u);
    }, [W, y, m]), cs = x((u) => {
      $(!0), j == null || j(u);
    }, [j]), ls = x((u) => {
      $(!1), p == null || p(u);
    }, [p]), os = "input", ds = `input--${e}`, ms = `input--${r}`, us = [
      os,
      ds,
      ms,
      a ? "input--disabled" : l ? "input--readonly" : Z ? "input--error" : M ? "input--focused" : "",
      E
    ].filter(Boolean).join(" "), _s = () => v ? /* @__PURE__ */ s.jsx("span", { className: "input__prefix", "aria-hidden": "true", children: v }) : null, hs = () => {
      const u = [];
      return R && C && u.push(
        /* @__PURE__ */ s.jsxs("span", { className: "input__count", children: [
          W.length,
          "/",
          C
        ] }, "count")
      ), H && S && u.push(
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "input__password-toggle",
            onClick: is,
            "aria-label": O ? "隐藏密码" : "显示密码",
            tabIndex: -1,
            children: O ? "👁️" : "👁️‍🗨️"
          },
          "password-toggle"
        )
      ), w && W && !a && !l && u.push(
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "input__clear",
            onClick: ns,
            "aria-label": "清除输入",
            tabIndex: -1,
            children: "✕"
          },
          "clear"
        )
      ), A && u.push(
        /* @__PURE__ */ s.jsx("span", { className: "input__suffix", "aria-hidden": "true", children: A }, "suffix")
      ), u.length > 0 ? /* @__PURE__ */ s.jsx("span", { className: "input__suffix-group", children: u }) : null;
    };
    return /* @__PURE__ */ s.jsxs("div", { className: "input__wrapper", children: [
      k && /* @__PURE__ */ s.jsxs("label", { className: "input__label", htmlFor: L, children: [
        k,
        d && /* @__PURE__ */ s.jsx("span", { className: "input__required", children: "*" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "input__container", children: [
        _s(),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: b,
            id: L,
            name: V,
            type: H && S ? O ? "text" : "password" : n,
            value: W,
            onChange: as,
            onFocus: cs,
            onBlur: ls,
            onKeyDown: rs,
            placeholder: g,
            disabled: a,
            readOnly: l,
            required: d,
            maxLength: C,
            autoComplete: t,
            autoFocus: c,
            inputMode: i,
            className: us,
            style: B,
            ...f
          }
        ),
        hs()
      ] }),
      (P || T) && /* @__PURE__ */ s.jsx("div", { className: `input__message ${Z ? "input__message--error" : "input__message--help"}`, children: T || P })
    ] });
  }
);
Es.displayName = "Input";
const Ls = [
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
], Ds = (n) => {
  const e = {};
  return Object.keys(n).forEach((r) => {
    Ls.some((a) => r === a || r.startsWith("aria-") || r.startsWith("data-")) && (e[r] = n[r]);
  }), e;
}, Bs = z(
  ({
    content: n,
    status: e = "success",
    showTimestamp: r = !0,
    timestamp: a,
    showCopyButton: l = !0,
    enableCodeHighlight: d = !0,
    avatar: g,
    username: I = "AI Assistant",
    showUsername: _ = !0,
    className: h = "",
    style: j,
    onCopy: p,
    onCopyError: m,
    onClick: y,
    ...v
  }, A) => {
    const [w, S] = D(!1), k = x((t) => t instanceof Date ? t.toLocaleTimeString() : new Date(t).toLocaleTimeString(), []), P = x(async () => {
      try {
        await navigator.clipboard.writeText(n), S(!0), p == null || p(n), setTimeout(() => S(!1), 2e3);
      } catch (t) {
        m == null || m(t);
      }
    }, [n, p, m]), T = x(() => {
      if (!d)
        return /* @__PURE__ */ s.jsx("div", { className: "ai-message__content", children: n });
      if (!n.trim())
        return /* @__PURE__ */ s.jsx("div", { className: "ai-message__content" });
      const t = n.split(`
`), c = [];
      let i = "", f = !1, b = "";
      const N = () => {
        if (i.trim()) {
          let o = i;
          o = o.replace(/\*\*(.*?)\*\*/g, (M, $) => `<strong class="ai-message__bold">${$}</strong>`), o = o.replace(/\*(.*?)\*/g, (M, $) => `<em class="ai-message__italic">${$}</em>`), o = o.replace(/`(.*?)`/g, (M, $) => `<code class="ai-message__inline-code">${$}</code>`), c.push(
            /* @__PURE__ */ s.jsx(
              "p",
              {
                className: "ai-message__text",
                dangerouslySetInnerHTML: { __html: o }
              },
              `text-${c.length}`
            )
          ), i = "";
        }
      };
      return t.forEach((o) => {
        var M;
        if (o.startsWith("```"))
          f ? (f = !1, c.push(
            /* @__PURE__ */ s.jsx("pre", { className: "ai-message__code-block", children: /* @__PURE__ */ s.jsx("code", { children: b }) }, `code-${c.length}`)
          ), b = "") : (N(), f = !0);
        else if (f)
          b += (b ? `
` : "") + o;
        else if (o.startsWith("#")) {
          N();
          const $ = ((M = o.match(/^#+/)) == null ? void 0 : M[0].length) || 1, O = o.replace(/^#+\s*/, ""), U = `h${Math.min($, 6)}`;
          c.push(
            /* @__PURE__ */ s.jsx(U, { className: `ai-message__heading ai-message__heading--h${$}`, children: O }, `heading-${c.length}`)
          );
        } else o.trim() === "" ? (N(), c.push(/* @__PURE__ */ s.jsx("br", {}, `br-${c.length}`))) : i += (i ? " " : "") + o;
      }), N(), /* @__PURE__ */ s.jsx("div", { className: "ai-message__content", children: c });
    }, [n, d]), R = x(() => {
      switch (e) {
        case "sending":
          return /* @__PURE__ */ s.jsxs("div", { className: "ai-message__status ai-message__status--sending", children: [
            /* @__PURE__ */ s.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ s.jsx("span", { children: "发送中..." })
          ] });
        case "streaming":
          return /* @__PURE__ */ s.jsxs("div", { className: "ai-message__status ai-message__status--streaming", children: [
            /* @__PURE__ */ s.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ s.jsx("span", { children: "正在输入..." })
          ] });
        case "error":
          return /* @__PURE__ */ s.jsxs("div", { className: "ai-message__status ai-message__status--error", children: [
            /* @__PURE__ */ s.jsx("div", { className: "ai-message__status-dot" }),
            /* @__PURE__ */ s.jsx("span", { children: "发送失败" })
          ] });
        default:
          return null;
      }
    }, [e]), C = "ai-message", E = `ai-message--${e}`, V = [
      C,
      E,
      e === "streaming" ? "ai-message--streaming" : "",
      h
    ].filter(Boolean).join(" "), L = Ds(v);
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: A,
        className: V,
        style: j,
        onClick: y,
        "data-testid": "ai-message",
        ...L,
        children: [
          (g || _) && /* @__PURE__ */ s.jsxs("div", { className: "ai-message__header", children: [
            g && /* @__PURE__ */ s.jsx("div", { className: "ai-message__avatar", children: g }),
            _ && /* @__PURE__ */ s.jsxs("div", { className: "ai-message__user-info", children: [
              /* @__PURE__ */ s.jsx("span", { className: "ai-message__username", children: I }),
              r && a && /* @__PURE__ */ s.jsx("span", { className: "ai-message__timestamp", children: k(a) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ai-message__body", children: [
            T(),
            R()
          ] }),
          l && /* @__PURE__ */ s.jsx("div", { className: "ai-message__actions", children: /* @__PURE__ */ s.jsx(
            "button",
            {
              className: `ai-message__copy-btn ${w ? "ai-message__copy-btn--copied" : ""}`,
              onClick: P,
              disabled: e === "sending" || e === "streaming",
              "aria-label": w ? "已复制" : "复制内容",
              title: w ? "已复制" : "复制内容",
              children: w ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsx(ks, { className: "ai-message__copy-icon", size: 16 }),
                "已复制"
              ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsx(As, { className: "ai-message__copy-icon", size: 16 }),
                "复制"
              ] })
            }
          ) })
        ]
      }
    );
  }
);
Bs.displayName = "AIMessage";
const zs = "0.0.0";
export {
  Bs as AIMessage,
  Ps as Button,
  Rs as ChatInterface,
  Es as Input,
  zs as version
};
//# sourceMappingURL=index.es.js.map
