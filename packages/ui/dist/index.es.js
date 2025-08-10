import P, { forwardRef as V, useState as D, useRef as A, useCallback as y, useEffect as q } from "react";
var K = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F = P, M = Symbol.for("react.element"), U = Symbol.for("react.fragment"), z = Object.prototype.hasOwnProperty, J = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
function W(l, a, c) {
  var s, r = {}, d = null, m = null;
  c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (m = a.ref);
  for (s in a) z.call(a, s) && !Y.hasOwnProperty(s) && (r[s] = a[s]);
  if (l && l.defaultProps) for (s in a = l.defaultProps, a) r[s] === void 0 && (r[s] = a[s]);
  return { $$typeof: M, type: l, key: d, ref: m, props: r, _owner: J.current };
}
E.Fragment = U;
E.jsx = W;
E.jsxs = W;
K.exports = E;
var e = K.exports;
const G = V(
  ({
    as: l,
    className: a = "",
    variant: c = "primary",
    size: s = "md",
    loading: r = !1,
    block: d = !1,
    disabled: m = !1,
    type: $ = "button",
    onClick: b,
    style: j,
    children: x,
    ...p
  }, u) => {
    const g = l || "button";
    if (g === "button") {
      const I = "btn", v = `btn--${c}`, w = `btn--${s}`, t = [
        I,
        v,
        w,
        d ? "btn--block" : "",
        r ? "btn--loading" : "",
        m || r ? "btn--disabled" : "",
        a
      ].filter(Boolean).join(" "), i = (n) => {
        if (m || r) {
          n.preventDefault();
          return;
        }
        b == null || b(n);
      };
      return /* @__PURE__ */ e.jsxs(
        "button",
        {
          ref: u,
          type: $,
          className: t,
          disabled: m || r,
          onClick: i,
          style: j,
          ...p,
          children: [
            r && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "btn__loading-svg",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    className: "btn__loading-circle",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: x })
          ]
        }
      );
    }
    const f = "btn", N = `btn--${c}`, C = `btn--${s}`, T = [
      f,
      N,
      C,
      d ? "btn--block" : "",
      r ? "btn--loading" : "",
      a
    ].filter(Boolean).join(" ");
    return P.createElement(g, {
      ref: u,
      className: T,
      style: j,
      ...p
    }, [
      r && /* @__PURE__ */ e.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "btn__loading-svg",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e.jsx(
            "circle",
            {
              className: "btn__loading-circle",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round"
            }
          )
        }
      ) }, "loading"),
      /* @__PURE__ */ e.jsx("span", { className: "btn__content", children: x }, "content")
    ].filter(Boolean));
  }
);
G.displayName = "Button";
const H = V(({
  initialMessages: l = [],
  placeholder: a = "输入消息...",
  disabled: c = !1,
  onSendMessage: s,
  renderMessage: r,
  className: d = "",
  style: m,
  ...$
}, b) => {
  const j = Array.isArray(l) ? l : [], [x, p] = D(j), [u, g] = D(""), [f, N] = D(!1), [C, S] = D(/* @__PURE__ */ new Set()), k = A(null), T = A(null), I = y(() => {
    var t;
    (t = k.current) != null && t.scrollIntoView && k.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  q(() => {
    I();
  }, [x, I]);
  const v = y((t, i) => {
    const n = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: t,
      type: i,
      timestamp: /* @__PURE__ */ new Date()
    };
    return p((o) => [...o, n]), n;
  }, []), w = y(async (t) => {
    const i = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: "",
      type: "assistant",
      timestamp: /* @__PURE__ */ new Date(),
      isTyping: !0
    };
    p((h) => [...h, i]);
    let n = "";
    const o = t.split(" ");
    for (let h = 0; h < o.length; h++)
      n += (h > 0 ? " " : "") + o[h], p(
        (_) => _.map(
          (B) => B.id === i.id ? { ...B, content: n } : B
        )
      ), await new Promise((_) => setTimeout(_, 100 + Math.random() * 50));
    p(
      (h) => h.map(
        (_) => _.id === i.id ? { ..._, isTyping: !1 } : _
      )
    );
  }, []), R = y(async () => {
    if (!u.trim() || c || !s && f) return;
    const t = u.trim(), i = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (!C.has(i)) {
      S((n) => {
        const o = new Set(n);
        return o.add(i), o;
      }), v(t, "user"), g(""), s || N(!0);
      try {
        if (s) {
          const n = await s(t);
          typeof n == "string" && n.trim() && await w(n);
        } else {
          const n = `这是对"${t}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
          await w(n);
        }
      } catch (n) {
        console.error("发送消息失败:", n), v("抱歉，发送消息时出现错误，请重试。", "assistant");
      } finally {
        s || N(!1), S((n) => {
          const o = new Set(n);
          return o.delete(i), o;
        });
      }
    }
  }, [u, c, f, v, s, w, C]), L = y((t) => {
    t.key === "Enter" && !t.shiftKey && (t.preventDefault(), R());
  }, [R]), O = (t) => /* @__PURE__ */ e.jsxs("div", { className: `chat-message chat-message--${t.type}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "chat-message__avatar", children: t.type === "user" ? "👤" : "🤖" }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-message__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "chat-message__text", children: [
        t.content,
        t.isTyping && /* @__PURE__ */ e.jsx("span", { className: "chat-message__typing-indicator", children: "|" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-message__timestamp", children: t.timestamp.toLocaleTimeString() })
    ] })
  ] }, t.id);
  return /* @__PURE__ */ e.jsxs("div", { ref: b, className: `chat-interface ${d}`, style: m, ...$, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__header", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "chat-interface__title", children: "AI 助手" }),
      /* @__PURE__ */ e.jsx("div", { className: "chat-interface__status", children: !s && f ? "正在思考..." : "在线" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__messages", children: [
      x.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__empty", children: [
        /* @__PURE__ */ e.jsx("div", { className: "chat-interface__empty-icon", children: "💬" }),
        /* @__PURE__ */ e.jsx("p", { children: "开始与AI助手对话吧！" })
      ] }) : x.map((t) => /* @__PURE__ */ e.jsx("div", { children: r ? r(t) : O(t) }, t.id)),
      /* @__PURE__ */ e.jsx("div", { ref: k })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "chat-interface__input", children: [
      /* @__PURE__ */ e.jsx(
        "textarea",
        {
          ref: T,
          value: u,
          onChange: (t) => g(t.target.value),
          onKeyDown: L,
          placeholder: a,
          disabled: c || !s && f,
          className: "chat-interface__textarea",
          rows: 1
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: R,
          disabled: !u.trim() || c || !s && f,
          className: "chat-interface__send-btn",
          "aria-label": "发送消息",
          children: !s && f ? /* @__PURE__ */ e.jsx("span", { className: "chat-interface__loading-spinner" }) : "发送"
        }
      )
    ] })
  ] });
});
H.displayName = "ChatInterface";
const X = "0.0.0";
export {
  G as Button,
  H as ChatInterface,
  X as version
};
//# sourceMappingURL=index.es.js.map
