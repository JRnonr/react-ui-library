import ee from "react";
var Y = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function re() {
  if (V) return v;
  V = 1;
  var c = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function d(u, n, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      s = {};
      for (var m in n)
        m !== "key" && (s[m] = n[m]);
    } else s = n;
    return n = s.ref, {
      $$typeof: c,
      type: u,
      key: i,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return v.Fragment = b, v.jsx = d, v.jsxs = d, v;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function te() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case A:
          return "Profiler";
        case I:
          return "StrictMode";
        case J:
          return "Suspense";
        case B:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case w:
            return (e.displayName || "Context") + ".Provider";
          case S:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case D:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function d(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), b(e);
      }
    }
    function u(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function g() {
      var e = c(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, r, t, a, f, l, N, y) {
      return t = l.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: l,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, a, f, l, N, y) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (Q(o)) {
            for (a = 0; a < o.length; a++)
              k(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(o);
      if (F.call(r, "key")) {
        o = c(e);
        var E = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        a = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", z[o + a] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          E,
          o
        ), z[o + a] = !0);
      }
      if (o = null, t !== void 0 && (d(t), o = "" + t), i(r) && (d(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var C in r)
          C !== "key" && (t[C] = r[C]);
      } else t = r;
      return o && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        o,
        l,
        f,
        n(),
        t,
        N,
        y
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var _ = ee, O = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), w = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), h = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, Q = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var L, W = {}, M = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), U = P(u(s)), z = {};
    R.Fragment = j, R.jsx = function(e, r, t, a, f) {
      var l = 1e4 > h.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        a,
        f,
        l ? Error("react-stack-top-frame") : M,
        l ? P(u(e)) : U
      );
    }, R.jsxs = function(e, r, t, a, f) {
      var l = 1e4 > h.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        a,
        f,
        l ? Error("react-stack-top-frame") : M,
        l ? P(u(e)) : U
      );
    };
  }()), R;
}
process.env.NODE_ENV === "production" ? Y.exports = re() : Y.exports = te();
var p = Y.exports;
const ae = ({
  children: c,
  variant: b = "primary",
  size: d = "md",
  disabled: u = !1,
  loading: n = !1,
  block: s = !1,
  onClick: i,
  type: m = "button",
  className: g = "",
  style: x,
  ...T
}) => {
  const k = "btn", _ = `btn--${b}`, O = `btn--${d}`, A = [
    k,
    _,
    O,
    s ? "btn--block" : "",
    n ? "btn--loading" : "",
    u || n ? "btn--disabled" : "",
    g
  ].filter(Boolean).join(" "), S = (w) => {
    if (u || n) {
      w.preventDefault();
      return;
    }
    i == null || i(w);
  };
  return /* @__PURE__ */ p.jsxs(
    "button",
    {
      type: m,
      className: A,
      disabled: u || n,
      onClick: S,
      style: x,
      ...T,
      children: [
        n && /* @__PURE__ */ p.jsx("span", { className: "btn__loading-spinner", "aria-hidden": "true", "data-testid": "loading-spinner", children: /* @__PURE__ */ p.jsx(
          "svg",
          {
            className: "btn__loading-svg",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ p.jsx(
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
        /* @__PURE__ */ p.jsx("span", { className: "btn__content", children: c })
      ]
    }
  );
}, oe = "0.0.0";
export {
  ae as Button,
  oe as version
};
//# sourceMappingURL=index.es.js.map
