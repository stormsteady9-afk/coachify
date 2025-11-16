"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// app/routes/api.coaching.tsx
var require_api_coaching = __commonJS({
  "app/routes/api.coaching.tsx"() {
    "use strict";
  }
});

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body2 = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body2, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body2 = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body2, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  AppBoundary: () => AppBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links3,
  loader: () => loader,
  meta: () => meta
});
var import_react19 = require("react");

// app/components/ThemeSwitcher.tsx
var import_react2 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
function ThemeSwitcher() {
  let [theme, setTheme] = (0, import_react2.useState)(() => {
    if (typeof window < "u") {
      let saved = localStorage.getItem("theme");
      return saved === "dark" || saved === "light" ? saved : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });
  return (0, import_react2.useEffect)(() => {
    typeof document < "u" && (theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), localStorage.setItem("theme", theme));
  }, [theme]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      "aria-label": "Toggle theme",
      title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      onClick: () => setTheme((prev) => prev === "dark" ? "light" : "dark"),
      className: "inline-flex items-center justify-center p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300",
      children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5 text-yellow-300", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21.64 13.64a9 9 0 11-11.28-11.28 7 7 0 0011.28 11.28z" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: "w-5 h-5 text-stone-700", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M4.636 6.636L6.05 8.05M17.95 17.95l1.414 1.414" }) })
    }
  );
}

// app/root.tsx
var import_node2 = require("@remix-run/node"), import_react20 = require("@remix-run/react");

// node_modules/.pnpm/@fontsource+anybody@5.0.8/node_modules/@fontsource/anybody/600.css
var __default = "/build/_assets/600-FMSR76FK.css";

// node_modules/.pnpm/@fontsource+pt-mono@5.0.8/node_modules/@fontsource/pt-mono/index.css
var pt_mono_default = "/build/_assets/index-XTIUBRH4.css";

// node_modules/.pnpm/@fontsource+pt-sans@5.0.8/node_modules/@fontsource/pt-sans/index.css
var pt_sans_default = "/build/_assets/index-OTW434JX.css";

// app/root.tsx
var import_react21 = require("@vercel/analytics/react"), import_nprogress = __toESM(require("nprogress"));

// app/components/layout/footer.tsx
var import_react3 = require("@remix-run/react");

// app/utils/avatar.ts
function createAvatarImageURL(username2 = "username") {
  return `https://api.dicebear.com/6.x/thumbs/svg?seed=${username2}`;
}

// app/utils/cache.server.ts
var import_remix_utils = require("remix-utils");
function createCacheHeaders(request, maxAge) {
  let headers = new Headers(), maxAgePrefetch = maxAge || 5, maxAgeNoPrefetch = maxAgePrefetch * 2;
  return (0, import_remix_utils.isPrefetch)(request) ? headers.set(
    "Cache-Control",
    `private, max-age=${maxAgePrefetch}, smax-age=0`
  ) : headers.set(
    "Cache-Control",
    `private, max-age=${maxAgeNoPrefetch}, smax-age=0`
  ), headers;
}

// app/utils/cn.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/utils/datetime.ts
var import_dayjs = __toESM(require("dayjs")), import_relativeTime = __toESM(require("dayjs/plugin/relativeTime")), import_updateLocale = __toESM(require("dayjs/plugin/updateLocale"));
require("dayjs/locale/en");
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_updateLocale.default);
function formatTimeDate(date) {
  return (0, import_dayjs.default)(date).locale("en").format("H:mm [\xB7] MMM D, YYYY") + ` \xB7 ${formatRelativeTime(date)}`;
}
function formatRelativeTime(date) {
  return (0, import_dayjs.default)(date).locale("en").fromNow();
}

// app/utils/delay.ts
var import_sleep_promise = __toESM(require("sleep-promise"));
async function delay(ms = 500) {
  await (0, import_sleep_promise.default)(ms);
}

// app/utils/json.ts
function stringify(code) {
  return JSON.stringify(code, null, 2);
}

// app/utils/meta.ts
function formatTitle(text) {
  return `${text} \u2014 \u{1F43B} Bearmentor`;
}

// node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/index.js
var import_crypto = __toESM(require("crypto"), 1);
var POOL_SIZE_MULTIPLIER = 128, pool, poolOffset, fillPool = (bytes) => {
  !pool || pool.length < bytes ? (pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER), import_crypto.default.randomFillSync(pool), poolOffset = 0) : poolOffset + bytes > pool.length && (import_crypto.default.randomFillSync(pool), poolOffset = 0), poolOffset += bytes;
}, random = (bytes) => (fillPool(bytes -= 0), pool.subarray(poolOffset - bytes, poolOffset)), customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1, step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id3 = "";
    for (; ; ) {
      let bytes = getRandom(step), i = step;
      for (; i--; )
        if (id3 += alphabet[bytes[i] & mask] || "", id3.length === size)
          return id3;
    }
  };
}, customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);

// app/utils/nanoid.ts
var nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 10);
function createNanoID() {
  return nanoid();
}

// app/utils/slug.ts
var import_voca = __toESM(require("voca"));
function createSlug(text) {
  return import_voca.default.slugify(text);
}

// app/utils/string.ts
var import_pluralize = __toESM(require("pluralize"));
function formatPluralItems(word, count2) {
  return (0, import_pluralize.default)(word, count2, !0);
}
function getNameInitials(name2 = "First Last") {
  return name2.trim().split(" ").map((word, index) => index < 2 ? word.charAt(0).toUpperCase() : "").join("");
}
function truncateText(text, maxLength = 200) {
  return !text || typeof text != "string" ? text : text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
}
function trimURL(url) {
  return url.startsWith("mailto:") ? url : url.replace(/^(https?:\/\/)?(www\d?\.)?/, "");
}

// app/utils/timer.ts
var createTimer = () => {
  let start = Date.now();
  return {
    delay: async (threshold = 500) => {
      let currentDuration = Date.now() - start, delayDuration = Math.min(threshold - currentDuration, 500);
      delayDuration > 0 && await delay(delayDuration);
    }
  };
};

// app/components/layout/footer.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer({ className }) {
  let today = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "footer",
    {
      className: cn("flex justify-center pb-20 pt-40 lg:pb-10", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col flex-wrap items-center justify-center gap-4 text-muted-foreground sm:flex-row sm:gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-xl font-bold text-foreground", children: "Coachify" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-muted-foreground", children: "Powered by MindGram Intelligence" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-xs text-muted-foreground", children: [
          "\xA9 ",
          today.getFullYear(),
          " FelixTheGreat. All rights reserved."
        ] })
      ] }) })
    }
  );
}

// app/components/layout/header-navigation.tsx
var import_react6 = require("@remix-run/react"), import_icons_react = require("@tabler/icons-react");

// app/hooks/use-media-query.tsx
var import_usehooks_ts = require("usehooks-ts");
function useScreenLarge() {
  return (0, import_usehooks_ts.useMediaQuery)("(min-width: 1024px)");
}

// app/hooks/use-root-loader-data.tsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react");
function useMatchesData(routeId) {
  let matchingRoutes = (0, import_react5.useMatches)(), route = (0, import_react4.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === routeId),
    [matchingRoutes, routeId]
  );
  return route == null ? void 0 : route.data;
}
function useRootLoaderData() {
  let data = useMatchesData("root");
  return {
    nodeEnv: (data == null ? void 0 : data.nodeEnv) || "development",
    userSession: (data == null ? void 0 : data.userSession) || null,
    userData: (data == null ? void 0 : data.userData) || null
  };
}

// app/components/layout/header-navigation.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), navMainItems = [
  {
    to: "/",
    text: "Dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconDashboard, { className: "icon" })
  },
  {
    to: "/felix",
    text: "Chat with AI Coach",
    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconRobot, { className: "icon" })
  },
  {
    to: "/signup-choice",
    text: "Continue to Coachify Platform",
    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconArrowRight, { className: "icon" })
  }
];
function HeaderNavigation() {
  let navigate = (0, import_react6.useNavigate)(), actionItems = [
    {
      to: "#",
      text: "Feedback",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconMessage, { className: "icon" }),
      action: () => {
        window.open("/feedback", "_blank", "width=600,height=700");
      }
    },
    {
      to: "#",
      text: "Quit",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconLogout, { className: "icon" }),
      action: () => {
        typeof window < "u" && (window.location.href = "about:blank", window.close(), setTimeout(() => navigate("/"), 100));
      }
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "header",
    {
      className: cn(
        "z-10 select-none",
        "border-stone-200 bg-white dark:bg-slate-950 dark:border-stone-800",
        // solid backgrounds
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "w-full max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(NavigationList, { navItems: navMainItems }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(NavigationList, { navItems: actionItems })
      ] }) }) })
    }
  );
}
function NavigationList({ navItems }) {
  let isScreenLarge = useScreenLarge();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    TooltipAuto,
    {
      content: navItem.text,
      className: "hidden lg:block",
      side: isScreenLarge ? "right" : "top",
      children: navItem.action ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          onClick: navItem.action,
          className: cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200 w-full",
            "text-stone-600 dark:text-stone-400",
            "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
            navItem.text === "Quit" && "hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/50 dark:hover:text-red-100"
          ),
          children: navItem.icon
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react6.NavLink,
        {
          to: navItem.to,
          className: ({ isActive }) => cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200",
            "text-stone-600 dark:text-stone-400",
            isActive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/70" : "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100"
          ),
          children: navItem.icon
        }
      )
    }
  ) }, navItem.text)) });
}

// app/components/layout/layout.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Layout({
  className,
  children,
  hasFooter = !0,
  withPadding = !1
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn("flex min-h-screen flex-col"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(HeaderNavigation, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BannerInfo, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "main",
      {
        className: cn(
          "flex-[1] pb-16 lg:ml-16",
          // always add bottom padding for nav bar, left margin for desktop
          withPadding && "p-4 sm:p-8",
          className
        ),
        children
      }
    ),
    hasFooter && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Footer, { className: "lg:ml-16" })
  ] });
}
function BannerInfo() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex w-full justify-center bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-50 border-b border-stone-200 dark:border-stone-800 p-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-sm font-medium", children: "Coachify" }) });
}

// app/components/shared/broadcast-edit-form.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("@conform-to/react"), import_zod3 = require("@conform-to/zod");

// app/schemas/broadcast.ts
var import_zod = require("zod"), id = import_zod.z.string().min(1, "Existing id is required"), title = import_zod.z.string().min(1, "Title is required").max(100, "Title limited to 100 characters"), description = import_zod.z.string().min(1, "Description is required").max(200, "Description limited to 200 characters"), body = import_zod.z.string().min(1, "Details are required").max(1e4, "Details are limited to 10,000 characters"), tag = import_zod.z.object({ id, symbol: import_zod.z.string().optional() }), tags = import_zod.z.array(tag).optional(), link = import_zod.z.object({
  url: import_zod.z.string().url({ message: "Please enter a valid URL." }),
  text: import_zod.z.string().optional(),
  sequence: import_zod.z.number().int().optional()
}), links = import_zod.z.array(link).optional(), image = import_zod.z.object({
  url: import_zod.z.string().url({ message: "Please enter a valid URL." })
}), images = import_zod.z.array(image).optional(), schemaBroadcast = import_zod.z.object({
  id,
  title,
  description,
  body,
  links
}), schemaBroadcastQuick = import_zod.z.object({
  userId: id,
  title,
  description,
  body
}), schemaBroadcastDelete = import_zod.z.object({
  id
}), schemaBroadcastUpdate = import_zod.z.object({
  userId: id,
  id,
  title,
  description,
  tags,
  links,
  images,
  body
});

// app/schemas/user.ts
var import_zod2 = require("zod"), id2 = import_zod2.z.string().min(1, "Existing id is required"), redirectTo = import_zod2.z.string().optional(), username = import_zod2.z.string().regex(/^[a-zA-Z0-9._]+$/, "Only alphabet, number, dot, underscore allowed").min(4, "Username require at least 4 characters").max(20, "Username limited to 20 characters"), name = import_zod2.z.string().min(1, "Full name is required").max(50, "Full name limited to 50 characters"), nick = import_zod2.z.string().max(50, "Nick name limited to 50 characters"), email = import_zod2.z.string().min(1, "Enter anything"), password = import_zod2.z.string().min(1, "Enter anything"), confirmPassword = import_zod2.z.string(), currentPassword = import_zod2.z.string({
  required_error: "Current password is required"
}).min(1, "Current password is required"), remember = import_zod2.z.boolean().optional(), inviteBy = import_zod2.z.string().optional(), inviteCode = import_zod2.z.string().optional(), roleSymbol = import_zod2.z.string().min(1, "Role is required"), tag2 = import_zod2.z.object({ id: id2, symbol: import_zod2.z.string().optional() }), tags2 = import_zod2.z.array(tag2).optional(), modeName = import_zod2.z.string().min(1, "Profile mode name is required"), headline = import_zod2.z.string().max(50, "Headline limited to 50 characters"), bio = import_zod2.z.string().max(1e3, "Bio limited to 1000 characters").optional(), link2 = import_zod2.z.object({
  url: import_zod2.z.string().url({ message: "Please enter a valid URL." }),
  text: import_zod2.z.string().optional()
}), links2 = import_zod2.z.array(link2).optional();
var schemaUserSignUp = import_zod2.z.object({
  name,
  username,
  email,
  password,
  remember,
  inviteBy,
  inviteCode
}), schemaUserSignIn = import_zod2.z.object({
  email: import_zod2.z.string().min(1, "Email is required"),
  password: import_zod2.z.string().min(1, "Password is required"),
  remember: import_zod2.z.boolean().optional(),
  redirectTo: import_zod2.z.string().optional()
}), schemaUserUpdateUsername = import_zod2.z.object({ id: id2, username }), schemaUserUpdateName = import_zod2.z.object({ id: id2, name }), schemaUserUpdateNick = import_zod2.z.object({ id: id2, nick }), schemaUserUpdateEmail = import_zod2.z.object({ id: id2, email }), schemaUserProfileModeName = import_zod2.z.object({ id: id2, modeName }), schemaUserProfileHeadline = import_zod2.z.object({ id: id2, headline }), schemaUserProfileBio = import_zod2.z.object({ id: id2, bio }), schemaUserProfileLinks = import_zod2.z.object({ id: id2, links: links2 }), schemaUserUpdatePassword = import_zod2.z.object({
  id: id2,
  currentPassword,
  password,
  confirmPassword
}).superRefine(({ password: password2, confirmPassword: confirmPassword2 }, ctx) => {
  password2 !== confirmPassword2 && ctx.addIssue({
    path: ["confirmPassword"],
    code: "custom",
    message: "The passwords did not match"
  });
}), schemaUserUpdateTags = import_zod2.z.object({
  id: id2,
  tags: tags2
}), schemaAdminUserUpdate = import_zod2.z.object({
  id: id2,
  username,
  name,
  nick,
  email,
  links: links2,
  roleSymbol
});

// app/components/shared/broadcast-edit-form.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function BroadcastEditForm() {
  let { userSession } = useRootLoaderData(), { broadcast } = (0, import_react7.useLoaderData)(), lastSubmission = (0, import_react7.useActionData)(), isSubmitting = (0, import_react7.useNavigation)().state === "submitting", [form, { userId, id: id3, title: title2, description: description2, body: body2, tags: tags3, links: links4, images: images2 }] = (0, import_react8.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission,
    constraint: (0, import_zod3.getFieldsetConstraint)(schemaBroadcastUpdate),
    onValidate({ formData }) {
      return (0, import_zod3.parse)(formData, { schema: schemaBroadcastUpdate });
    },
    defaultValue: {
      ...broadcast,
      userId: userSession == null ? void 0 : userSession.id,
      tags: [],
      links: [],
      images: []
    }
  }), tagsList = (0, import_react8.useFieldList)(form.ref, tags3), linksList = (0, import_react8.useFieldList)(form.ref, links4), imagesList = (0, import_react8.useFieldList)(form.ref, images2);
  return broadcast ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "space-y-4 rounded", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Form, { method: "PUT", ...form.props, className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormFieldSet, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { hidden: !0, ...import_react8.conform.input(userId) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { hidden: !0, ...import_react8.conform.input(id3) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: title2.id, children: "Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Limited to 100 characters" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { ...import_react8.conform.input(title2), type: "text" }),
      title2.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: title2.errorId, children: title2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: description2.id, children: "Description" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Limited to 200 characters" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { ...import_react8.conform.input(description2), type: "text" }),
      description2.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: description2.errorId, children: description2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: body2.id, children: "Details Body" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Limited to 10,000 characters" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Textarea, { ...import_react8.conform.input(body2), rows: 20 }),
      body2.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: body2.errorId, children: body2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: tags3.id, children: "Tags" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Add relevant tags, maximum of 10 tags" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: tagsList.map((tag3) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { name: tag3.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: tag3.error })
      ] }, tag3.key)) }),
      tags3.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: tags3.errorId, children: tags3.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: links4.id, children: "links" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Add relevant links, maximum of 3 links" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: linksList.map((link3) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { name: link3.name, hidden: !0 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: link3.error })
      ] }, link3.key)) }),
      links4.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: links4.errorId, children: links4.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FormField, { className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormLabel, { htmlFor: images2.id, children: "Images" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormDescription, { children: "Upload supporting images" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: imagesList.map((image2) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { name: image2.name, hidden: !0 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: image2.error })
      ] }, image2.key)) }),
      images2.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Alert, { variant: "destructive", id: images2.errorId, children: images2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      ButtonLoading,
      {
        type: "submit",
        isSubmitting,
        submittingText: "Saving Broadcast...",
        className: "w-full",
        children: "Save Broadcast"
      }
    )
  ] }) }) }) : null;
}

// app/components/shared/broadcast-quick-form.tsx
var import_react9 = require("react"), import_react10 = require("@remix-run/react"), import_react11 = require("@conform-to/react"), import_zod4 = require("@conform-to/zod");
var import_jsx_runtime7 = require("react/jsx-runtime");
function BroadcastQuickForm() {
  let { userSession } = useRootLoaderData(), lastSubmission = (0, import_react10.useActionData)(), isSubmitting = (0, import_react10.useNavigation)().state === "submitting", id3 = (0, import_react9.useId)(), [form, { userId, title: title2, description: description2, body: body2 }] = (0, import_react11.useForm)({
    id: id3,
    shouldValidate: "onSubmit",
    lastSubmission,
    constraint: (0, import_zod4.getFieldsetConstraint)(schemaBroadcastQuick),
    onValidate({ formData }) {
      return (0, import_zod4.parse)(formData, { schema: schemaBroadcastQuick });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "space-y-4 rounded bg-stone-900 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Quick Broadcast" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-sm text-muted-foreground", children: "Quickly create new broadcast to ask or offer" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react10.Form, { method: "POST", ...form.props, className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FormFieldSet, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          hidden: !0,
          ...import_react11.conform.input(userId),
          defaultValue: userSession == null ? void 0 : userSession.id
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FormField, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FormLabel, { htmlFor: title2.id, children: "Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Input,
          {
            ...import_react11.conform.input(title2),
            type: "text",
            placeholder: "Ex: Need mentor to help learning JavaScript"
          }
        ),
        title2.error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Alert, { variant: "destructive", id: title2.errorId, children: title2.error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FormField, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FormLabel, { htmlFor: description2.id, children: "Description" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Input,
          {
            ...import_react11.conform.input(description2),
            type: "text",
            placeholder: "Ex: Want to build a job-ready and portfolio-worthy project"
          }
        ),
        description2.error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Alert, { variant: "destructive", id: description2.errorId, children: description2.error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FormField, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FormLabel, { htmlFor: body2.id, children: "Details" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Textarea,
          {
            ...import_react11.conform.input(body2),
            placeholder: "Ex: Here are some more details about the mentorship request or service to offer...",
            className: "min-h-[100px]"
          }
        ),
        body2.error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Alert, { variant: "destructive", id: body2.errorId, children: body2.error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        ButtonLoading,
        {
          type: "submit",
          isSubmitting,
          submittingText: "Sending...",
          children: "Send"
        }
      )
    ] }) })
  ] });
}

// app/components/shared/not-found.tsx
var import_react12 = require("@remix-run/react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function NotFound({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "flex flex-col items-center justify-center pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react12.Link, { to: "/", className: "hover-opacity", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: "/images/dolphin.png", alt: "Dolphin", className: "h-12" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex max-w-md flex-col items-center justify-center space-y-4 pt-24 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "img",
        {
          src: "/images/bear-fox.png",
          alt: "Not Found Illustration",
          className: "h-40 object-contain"
        }
      ),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react12.Link, { to: "/", children: "Back to Home" }) })
    ] })
  ] });
}

// app/components/shared/pagination.tsx
var import_react13 = require("@remix-run/react"), import_icons_react2 = require("@tabler/icons-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function getPaginationConfigs({
  request,
  defaultLimit = 8,
  defaultPage = 1
}) {
  let url = new URL(request.url), queryParam = url.searchParams.get("q") ?? "", limitParam = Number(url.searchParams.get("limit")) || defaultLimit, pageParam = Number(url.searchParams.get("page")) || defaultPage, skip = (pageParam - 1) * limitParam;
  return { request, queryParam, limitParam, pageParam, skip };
}
function getPaginationOptions({
  request,
  totalItems,
  defaultMaxPageLinks = 10
}) {
  let url = new URL(request.url), { queryParam, limitParam, pageParam } = getPaginationConfigs({
    request
  }), totalPages = Math.ceil(totalItems / limitParam), visiblePageCount = Math.min(defaultMaxPageLinks, totalPages), startPage = Math.max(1, pageParam - Math.floor(visiblePageCount / 2)), endPage = Math.min(totalPages, startPage + visiblePageCount - 1);
  endPage - startPage + 1 < visiblePageCount && (startPage = Math.max(1, endPage - visiblePageCount + 1));
  let paginationItems = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => {
      let pageNumber = startPage + index, queryParams = new URLSearchParams({
        q: queryParam,
        limit: limitParam.toString() ?? "",
        page: pageNumber.toString() ?? ""
      }).toString();
      return { pageNumber, to: `${url.pathname}?${queryParams}` };
    }
  );
  return {
    queryParam,
    limitParam,
    pageParam,
    totalItems,
    totalPages,
    paginationItems
  };
}
function PaginationNavigation({
  queryParam,
  limitParam,
  pageParam,
  totalPages,
  paginationItems
}) {
  let location = (0, import_react13.useLocation)(), renderArrowLink = (direction, icon, targetPage) => {
    let isPrev = direction === "prev", isNext = direction === "next", isFirst = direction === "first", isLast = direction === "last", newPage = isPrev ? pageParam - 1 : isNext ? pageParam + 1 : targetPage;
    if (!(isFirst && pageParam !== 1 || isLast && pageParam !== totalPages || !isFirst && !isLast && pageParam === newPage || isPrev && pageParam > 1 || isNext && pageParam < totalPages))
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "flex w-8 select-none justify-center px-1 opacity-10", children: icon });
    let searchParams = new URLSearchParams({
      q: queryParam,
      limit: String(limitParam),
      page: String(targetPage)
    }).toString();
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_react13.Link,
      {
        to: `${location.pathname}?${searchParams}`,
        className: "flex w-8 justify-center px-1 text-muted-foreground hover:text-white",
        children: icon
      }
    );
  }, renderArrowMostLink = (direction, icon) => renderArrowLink(direction, icon, direction === "first" ? 1 : totalPages);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("nav", { className: "flex items-center justify-center gap-4", children: [
    renderArrowMostLink("first", /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_icons_react2.IconChevronsLeft, { className: "icon" })),
    renderArrowLink(
      "prev",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_icons_react2.IconChevronLeft, { className: "icon" }),
      pageParam - 1
    ),
    pageParam > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { className: "flex gap-4", children: paginationItems.map(({ pageNumber, to }, index) => {
      let isActive = pageParam === pageNumber;
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_react13.Link,
        {
          to,
          className: cn(
            "hover-opacity",
            "flex w-8 justify-center rounded p-2 font-bold",
            isActive && "bg-brand text-white",
            !isActive && "text-muted-foreground hover:text-white"
          ),
          children: pageNumber
        }
      ) }, index);
    }) }),
    renderArrowLink(
      "next",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_icons_react2.IconChevronRight, { className: "icon" }),
      pageParam + 1
    ),
    renderArrowMostLink("last", /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_icons_react2.IconChevronsRight, { className: "icon" }))
  ] });
}
function PaginationSearch({
  itemName = "item",
  searchPlaceholder = "Search with keyword...",
  count: count2,
  queryParam,
  pageParam,
  totalItems,
  totalPages,
  isVerbose = !1
}) {
  let location = (0, import_react13.useLocation)(), pluralItemsText = formatPluralItems(itemName, count2);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "w-full space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SearchForm, { action: location.pathname, placeholder: searchPlaceholder }),
    !queryParam && count2 <= 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-muted-foreground", children: [
      "No ",
      itemName,
      " found"
    ] }),
    queryParam && count2 <= 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-muted-foreground", children: [
      "No ",
      itemName,
      ' found with keyword "',
      queryParam,
      '"'
    ] }),
    !queryParam && count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "space-x-2 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
        pluralItemsText,
        " in page ",
        pageParam
      ] }),
      isVerbose && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
        "(from total of ",
        formatPluralItems(itemName, totalItems),
        " in",
        " ",
        formatPluralItems("page", totalPages),
        ")"
      ] })
    ] }),
    queryParam && count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "space-x-2 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
        '"',
        queryParam,
        '" found ',
        pluralItemsText,
        " in page ",
        pageParam
      ] }),
      isVerbose && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
        "(from total of ",
        formatPluralItems(itemName, totalItems),
        " in",
        " ",
        formatPluralItems("page", totalPages),
        ")"
      ] })
    ] })
  ] });
}

// app/components/shared/search-form.tsx
var import_react14 = require("@remix-run/react"), import_icons_react3 = require("@tabler/icons-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function SearchForm({
  action: action15 = "/search",
  placeholder = "Search"
}) {
  let [searchParams] = (0, import_react14.useSearchParams)(), query7 = searchParams.get("q") ?? "";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react14.Form, { method: "GET", action: action15, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("fieldset", { className: "group relative flex items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Label, { htmlFor: "search", className: "sr-only", children: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Input,
      {
        id: "search",
        type: "search",
        name: "q",
        placeholder,
        defaultValue: query7,
        autoComplete: "off",
        className: "block h-12 w-full px-3 py-2 ps-12 text-xl"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "pointer-events-none absolute flex ps-3", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_react3.IconSearch, { className: "h-6 w-6 text-muted-foreground group-focus-within:text-brand" }) })
  ] }) });
}

// app/components/shared/user-card.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function UserCard({ user }) {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Card, { className: "hover-opacity max-w-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(CardHeader, { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AvatarAuto, { className: "h-24 w-24", user }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CardTitle, { className: "text-2xl", children: user.name }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-muted-foreground", children: [
            "@",
            user.username
          ] })
        ] }),
        ((_a = user == null ? void 0 : user.profiles) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CardDescription, { children: user.profiles[0].headline })
      ] })
    ] }),
    ((_b = user.tags) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "flex flex-wrap gap-1 sm:gap-2", children: user.tags.map((tag3) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Badge, { size: "sm", variant: "secondary", children: tag3.name }) }, `${tag3.id}-${tag3.symbol}`)) }) })
  ] });
}

// app/components/shared/user-tags-form.tsx
var import_react15 = require("react"), import_react16 = require("@remix-run/react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function UserTagsForm() {
  let { user, userTags } = (0, import_react16.useLoaderData)(), isSubmitting = (0, import_react16.useNavigation)().state === "submitting", excludedSymbols = ["COLLABORATOR", "UNKNOWN"], maxSelectedTags = 5, [selectedTags, setSelectedTags] = (0, import_react15.useState)(
    user.tags.map((tag3) => ({ id: tag3.id, name: tag3.name })).slice(0, maxSelectedTags)
  ), isMaxTagsSelected = selectedTags.length >= maxSelectedTags, toggleSelectTag = (selectedTag) => {
    setSelectedTags((prevSelectedTags) => (prevSelectedTags.some((tag3) => tag3.id === selectedTag.id) ? prevSelectedTags.filter((tag3) => tag3.id !== selectedTag.id) : [...prevSelectedTags, selectedTag]).slice(0, maxSelectedTags));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react16.Form, { method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FormFieldSet, { disabled: selectedTags.length < 1 || isSubmitting, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { hidden: !0, name: "id", defaultValue: user.id }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormLabel, { className: "text-lg", children: "Who are you?" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FormDescription, { className: "max-w-3xl text-base", children: [
        "Select ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "minimum of 1" }),
        " and ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "maximum of 5" }),
        " relevant tags or categories that applies to you. This will help to customize your experience and determine wether you need to be mentored, want to mentor, or neither."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { hidden: !0, name: "tags", defaultValue: stringify(selectedTags) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "grid grid-cols-2 gap-2 py-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", children: userTags.filter((tag3) => !excludedSymbols.includes(tag3.symbol)).map((userTag, index) => {
        let isSelected = selectedTags.find(
          (tag3) => tag3.id === userTag.id
        ), isDisabled = isMaxTagsSelected && !isSelected;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Card,
          {
            className: cn(
              "flex select-none items-center justify-center p-1",
              isSelected && "border-brand",
              !isDisabled && "cursor-pointer hover:opacity-80",
              isDisabled && "opacity-50"
            ),
            onClick: () => !isDisabled && toggleSelectTag(userTag),
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "select-none", children: userTag.name })
          }
        ) }, userTag.id);
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
        selectedTags.length,
        " selected"
      ] }),
      selectedTags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
        ": ",
        selectedTags.map((t) => t.name).join(", ")
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      ButtonLoading,
      {
        size: "sm",
        disabled: isSubmitting,
        isSubmitting,
        submittingText: "Saving Tags...",
        children: "Save Tags"
      }
    )
  ] }) });
}

// app/components/ui/alert-dialog.tsx
var React2 = __toESM(require("react")), import_react17 = require("@remix-run/react"), AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime13 = require("react/jsx-runtime"), AlertDialog = AlertDialogPrimitive.Root, AlertDialogTrigger = AlertDialogPrimitive.Trigger, AlertDialogPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogPrimitive.Portal, { className: cn(className), ...props });
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
var AlertDialogOverlay = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-base text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
var AlertDialogAutoForm = ({
  method,
  title: title2 = "Title",
  description: description2 = "Description",
  trigger,
  confirmButton,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(AlertDialog, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogTrigger, { asChild: !0, children: trigger }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogContent, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react17.Form, { method, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(AlertDialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogTitle, { children: title2 }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogDescription, { children: description2 })
    ] }),
    children,
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(AlertDialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogCancel, { children: "Cancel" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogAction, { asChild: !0, children: confirmButton })
    ] })
  ] }) })
] });

// app/components/ui/alert.tsx
var React3 = __toESM(require("react")), import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime"), alertVariants = (0, import_class_variance_authority.cva)(
  "relative w-full rounded-lg border-l-2 px-2 py-1 text-sm [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "border-l-brand bg-secondary text-foreground",
        destructive: "bg-destructive text-white [&>svg]:text-destructive border-l-red-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Alert = React3.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// app/components/ui/anchor.tsx
var React4 = __toESM(require("react"));
var import_jsx_runtime15 = require("react/jsx-runtime"), Anchor = React4.forwardRef(
  ({ href, withColor = !1, className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      className: cn(
        "focus hover-opacity",
        withColor && "text-emerald-700 dark:text-emerald-300",
        className
      ),
      ref,
      ...props,
      children
    }
  )
);
Anchor.displayName = "Anchor";

// app/components/ui/avatar.tsx
var React5 = __toESM(require("react")), AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime16 = require("react/jsx-runtime"), Avatar = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-0 flex shrink-0 overflow-hidden rounded",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "select-none bg-background",
      "flex h-full w-full items-center justify-center rounded bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function AvatarAuto({
  className,
  user,
  hasFallback = !0
}) {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Avatar, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      AvatarImage,
      {
        src: ((_a = user == null ? void 0 : user.avatars[0]) == null ? void 0 : _a.url) || createAvatarImageURL(user == null ? void 0 : user.username),
        alt: user == null ? void 0 : user.username
      }
    ),
    hasFallback && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AvatarFallback, { className: "text-lg", children: getNameInitials(user == null ? void 0 : user.name) })
  ] });
}

// app/components/ui/badge.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime17 = require("react/jsx-runtime"), badgeVariants = (0, import_class_variance_authority2.cva)(
  "select-none inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        outline: "text-foreground"
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-1.5 py-0.5 text-xs",
        icon: "h-4 w-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    }
  );
}

// app/components/ui/button.tsx
var React6 = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_icons_react4 = require("@tabler/icons-react"), import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime18 = require("react/jsx-runtime"), buttonVariants = (0, import_class_variance_authority3.cva)(
  cn(
    "select-none inline-flex items-center justify-center rounded font-bold transition-colors disabled:pointer-events-none disabled:opacity-50",
    "focus:border-brand focus:outline-none focus:ring focus:ring-emerald-500/20"
    // "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  ),
  {
    variants: {
      variant: {
        default: "border-2 border-primary bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "border-2 border-destructive bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "border-2 border-secondary bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "border-2 border-background hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        xs: "h-6 rounded px-1 text-xs gap-1",
        sm: "h-8 rounded px-2 text-sm gap-1",
        default: "h-9 px-4 py-2 text-base gap-2",
        lg: "h-10 rounded px-8 text-lg gap-3",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React6.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  )
);
Button.displayName = "Button";
var ButtonLoading = React6.forwardRef(
  ({
    type = "submit",
    variant = "default",
    size = "default",
    className,
    name: name2,
    value,
    isSubmitting = !1,
    submittingText = "",
    isLoading = !1,
    loadingText = "",
    isDisabledWhenLoading = !0,
    children,
    ...props
  }, ref) => {
    let isActive = isDisabledWhenLoading && (isSubmitting || isLoading);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className }), "flex"),
        type,
        ref,
        name: name2,
        value,
        disabled: isActive,
        ...props,
        children: [
          isActive && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_icons_react4.IconLoader2, { className: "h-4 w-4 animate-spin" }),
          isSubmitting ? submittingText : isLoading ? loadingText : children
        ]
      }
    );
  }
);
ButtonLoading.displayName = "ButtonLoading";

// app/components/ui/card.tsx
var React7 = __toESM(require("react"));
var import_jsx_runtime19 = require("react/jsx-runtime"), Card = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded border-2 bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { ref, className: cn("p-2", className), ...props }));
CardHeader.displayName = "CardHeader";
var CardTitle = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "p",
  {
    ref,
    className: cn("text-base text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { ref, className: cn("p-2 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "div",
  {
    ref,
    className: cn(" flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// app/components/ui/form.tsx
var React8 = __toESM(require("react"));
var import_jsx_runtime20 = require("react/jsx-runtime"), FormField = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { ref, className: cn("space-y-2", className), ...props }));
FormField.displayName = "FormField";
var FormLabel = React8.forwardRef(({ className, disabled, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  Label,
  {
    ref,
    className: cn(
      labelVariants({ variant: disabled ? "disabled" : "default" }),
      className
    ),
    ...props
  }
));
FormLabel.displayName = "FormLabel";
var FormDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
FormDescription.displayName = "FormDescription";
var FormMessage = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "p",
  {
    ref,
    className: cn("text-[0.8rem] font-medium text-destructive", className),
    ...props,
    children
  }
));
FormMessage.displayName = "FormMessage";
var FormFieldSet = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "fieldset",
  {
    ref,
    className: cn("space-y-4 disabled:opacity-80", className),
    ...props,
    children
  }
));
FormFieldSet.displayName = "FormFieldSet";
var FormAlert = React8.forwardRef(({ className, children, field, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: field.error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Alert, { variant: "destructive", id: field.errorId, ref, ...props, children: field.error }) }));
FormAlert.displayName = "FormAlert";

// app/components/ui/input.tsx
var React9 = __toESM(require("react")), import_react18 = require("react"), import_react_icons = require("@radix-ui/react-icons");
var import_jsx_runtime21 = require("react/jsx-runtime"), Input = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "input",
    {
      className: cn(
        "flex h-9 w-full rounded border-2 border-input bg-background px-3 py-1 text-base shadow transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-brand focus:outline-none focus:ring focus:ring-emerald-500/20",
        "autofill:shadow-fill-background autofill:text-fill-foreground",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      ),
      ref,
      ...props
    }
  )
);
Input.displayName = "Input";
function InputPassword({
  type = "password",
  placeholder = "Enter password",
  className,
  ...props
}) {
  let [isShown, setIsShown] = (0, import_react18.useState)(!1);
  function handleClick() {
    setIsShown(!isShown);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      Input,
      {
        "data-component": "input-password",
        type: isShown ? "text" : "password",
        placeholder,
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      Button,
      {
        size: "xs",
        type: "button",
        variant: "secondary",
        onClick: handleClick,
        className: "absolute inset-y-0 right-0 my-1.5 me-1.5 flex w-20 gap-2",
        children: [
          isShown ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_icons.EyeClosedIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_icons.EyeOpenIcon, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: isShown ? "Hide" : "Show" })
        ]
      }
    )
  ] });
}

// app/components/ui/label.tsx
var React10 = __toESM(require("react")), LabelPrimitive = __toESM(require("@radix-ui/react-label")), import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime22 = require("react/jsx-runtime"), labelVariants = (0, import_class_variance_authority4.cva)(
  "text-base font-bold font-brand leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        disabled: "opacity-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Label = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/textarea.tsx
var React11 = __toESM(require("react"));
var import_jsx_runtime23 = require("react/jsx-runtime"), Textarea = React11.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded border-2 border-input bg-background px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-brand focus:outline-none focus:ring focus:ring-emerald-500/20",
        className
      ),
      ref,
      ...props
    }
  )
);
Textarea.displayName = "Textarea";

// app/components/ui/time.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function Time({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("time", { className: "text-xs text-muted-foreground", children: formatTimeDate(children) });
}

// app/components/ui/toast.tsx
var React12 = __toESM(require("react")), import_react_icons2 = require("@radix-ui/react-icons"), ToastPrimitives = __toESM(require("@radix-ui/react-toast")), import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime25 = require("react/jsx-runtime"), ToastProvider = ToastPrimitives.Provider, ToastViewport = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-sm",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority5.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background",
        success: "group border-emerald-900 bg-emerald-900 text-white",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React12.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  }
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_icons2.Cross2Icon, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/ui/toaster.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(ToastProvider, { children: [
    toasts.map(function({ id: id3, title: title2, description: description2, action: action15, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "grid gap-1", children: [
          title2 && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ToastTitle, { children: title2 }),
          description2 && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ToastDescription, { children: description2 })
        ] }),
        action15,
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ToastClose, {})
      ] }, id3);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ToastViewport, {})
  ] });
}

// app/components/ui/tooltip.tsx
var React13 = __toESM(require("react")), TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime27 = require("react/jsx-runtime"), TooltipProvider = TooltipPrimitive.Provider, Tooltip2 = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(TooltipPrimitive.Root, { ...props });
Tooltip2.displayName = TooltipPrimitive.Tooltip.displayName;
var TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React13.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "select-none border-2 border-background",
      "z-60 overflow-hidden rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function TooltipAuto({
  className,
  children,
  content,
  side,
  asChild
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Tooltip2, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(TooltipTrigger, { asChild, children }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(TooltipContent, { side, sideOffset: 8, children: content })
  ] });
}

// app/components/ui/use-toast.ts
var React14 = __toESM(require("react")), TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_VALUE, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action15) => {
  switch (action15.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action15.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action15.toast.id ? { ...t, ...action15.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action15;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action15.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action15.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action15) {
  memoryState = reducer(memoryState, action15), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id3 = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id: id3 }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id3 });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id: id3,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id: id3,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React14.useState(memoryState);
  return React14.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/globals.css
var globals_default = "/build/_assets/globals-XBMQE3IO.css";

// app/root.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), links3 = () => [
  {
    rel: "shortcut icon",
    href: "/images/dolphin.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/dolphin.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/dolphin.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/dolphin.png"
  },
  { rel: "stylesheet", href: __default },
  { rel: "stylesheet", href: pt_sans_default },
  { rel: "stylesheet", href: pt_mono_default },
  { rel: "stylesheet", href: globals_default }
], meta = () => [
  { title: "Coachify" },
  {
    name: "description",
    content: "Brilliant mentoring platform for people and organization."
  }
], loader = () => (0, import_node2.json)({
  nodeEnv: "production",
  userSession: null,
  userData: null
});
function App() {
  let { nodeEnv } = (0, import_react20.useLoaderData)(), navigation = (0, import_react20.useNavigation)();
  return (0, import_react19.useEffect)(() => {
    navigation.state === "idle" ? import_nprogress.default.done() : import_nprogress.default.start();
  }, [navigation.state]), /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("body", { className: "bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Toaster, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.LiveReload, {}),
      nodeEnv !== "development" && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react21.Analytics, {})
    ] })
  ] });
}
var root_default = App;
function AppBoundary({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("body", { className: "bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ThemeSwitcher, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Layout, { className: "p-4", children }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react20.LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = (0, import_react20.useRouteError)();
  return (0, import_react20.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(AppBoundary, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: error.data })
  ] }) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(AppBoundary, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h1", { children: "Error" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: error.message }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "The stack trace is:" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("pre", { children: error.stack })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(AppBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h1", { children: "Unknown Error" }) });
}

// app/routes/$username.broadcasts.$id.edit._index.tsx
var username_broadcasts_id_edit_index_exports = {};
__export(username_broadcasts_id_edit_index_exports, {
  action: () => action,
  default: () => BroadcastsRoute,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_zod5 = require("@conform-to/zod"), import_remix_utils2 = require("remix-utils"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/libs/db.server.ts
function createMethodProxy() {
  return new Proxy(() => {
  }, {
    apply: async () => null,
    get: (_t, prop) => prop === "count" ? async () => 0 : prop === "findMany" ? async () => [] : prop === "findFirst" || prop === "findUnique" ? async () => null : prop === "create" || prop === "update" || prop === "delete" ? async () => null : createMethodProxy()
  });
}
var prisma = new Proxy({}, {
  get: (_t, prop) => prop === "$connect" ? async () => {
  } : prop === "$disconnect" ? async () => {
  } : createMethodProxy()
});

// app/models/broadcast.server.ts
var broadcast_server_exports = {};
__export(broadcast_server_exports, {
  fields: () => fields,
  mutation: () => mutation,
  query: () => query
});

// app/helpers/broadcast.server.ts
function createBroadcastSlug(title2) {
  return `${createSlug(title2)}-${createNanoID()}`;
}

// app/helpers/user.server.ts
var import_tiny_invariant = __toESM(require("tiny-invariant"));
async function requireUserSession(request, expectedRoleSymbols) {
  let userSession = { id: "temp-user-id" };
  (0, import_tiny_invariant.default)(userSession.id, "User Session ID is not available");
  let userData = await model.user.query.getForSession({ id: userSession.id });
  if (!userData)
    return null;
  (0, import_tiny_invariant.default)(userData, "User is not available");
  let userIsAllowed = expectedRoleSymbols ? requireUserRole(userData, expectedRoleSymbols) : !0;
  return {
    userSession,
    userData,
    userIsAllowed
  };
}
function requireUserRole(user, expectedRoleSymbols) {
  return !!checkIfUserIsAllowed(user, expectedRoleSymbols);
}
function checkIfUserIsAllowed(user, expectedRoleSymbols) {
  return user ? !!(expectedRoleSymbols == null ? void 0 : expectedRoleSymbols.find(
    (symbol) => {
      var _a;
      return ((_a = user == null ? void 0 : user.role) == null ? void 0 : _a.symbol) === symbol;
    }
  )) : !1;
}

// app/models/broadcast.server.ts
var fields = {
  public: {
    id: !0
  }
}, query = {
  count() {
    return prisma.broadcast.count();
  },
  getAll() {
    return prisma.broadcast.findMany({
      select: fields.public
    });
  },
  getById({ id: id3 }) {
    return prisma.broadcast.findFirst({
      where: { id: id3 }
    });
  }
}, mutation = {
  createQuick({ ...value }) {
    return prisma.broadcast.create({
      data: { ...value, slug: createBroadcastSlug(value.title) },
      include: { user: { select: { username: !0 } } }
    });
  },
  async deleteById({ id: id3 }) {
    return await prisma.broadcast.delete({
      where: { id: id3 },
      include: { user: { select: { username: !0 } } }
    });
  },
  updateById({ id: id3, ...value }) {
    let broadcast = {
      userId: value.userId,
      title: value.title,
      description: value.description,
      body: value.body
    };
    return prisma.broadcast.update({
      where: { id: id3 },
      data: { ...broadcast, slug: createBroadcastSlug(value.title) },
      include: { user: { select: { username: !0 } } }
    });
  }
};

// app/models/user-password.server.ts
var user_password_server_exports = {};
__export(user_password_server_exports, {
  mutation: () => mutation2,
  query: () => query2
});
var import_bcryptjs = __toESM(require("bcryptjs"));
var query2 = {
  count() {
    return prisma.userPassword.count();
  }
}, mutation2 = {
  async update({
    id: id3,
    password: password2,
    currentPassword: currentPassword2
  }) {
    let userPassword = await prisma.userPassword.findUnique({
      where: { userId: id3 }
    });
    if (!await import_bcryptjs.default.compare(
      currentPassword2,
      (userPassword == null ? void 0 : userPassword.hash) ?? ""
    ))
      return {
        error: {
          currentPassword: "Current password is incorrect, check again"
        }
      };
    let hashedPassword = await import_bcryptjs.default.hash(password2, 10), user = await prisma.user.update({
      where: { id: id3 },
      data: { password: { update: { hash: hashedPassword } } }
    });
    return user ? { user, error: null } : { error: { password: "Password is failed to change" } };
  }
};

// app/models/user-profile.server.ts
var user_profile_server_exports = {};
__export(user_profile_server_exports, {
  fields: () => fields2,
  mutation: () => mutation3,
  query: () => query3
});
var fields2 = {
  public: { headline: !0, bio: !0 }
}, query3 = {
  count() {
    return prisma.user.count();
  }
}, mutation3 = {
  async updateModeName({
    id: id3,
    modeName: modeName2
  }) {
    let userProfile = await prisma.userProfile.update({
      where: { id: id3 },
      data: { modeName: modeName2 }
    });
    return userProfile ? { userProfile, error: null } : { error: { modeName: "Mode name is failed to change" } };
  },
  async updateHeadline({
    id: id3,
    headline: headline2
  }) {
    let userProfile = await prisma.userProfile.update({
      where: { id: id3 },
      data: { headline: headline2 }
    });
    return userProfile ? { userProfile, error: null } : { error: { headline: "Headline is failed to change" } };
  },
  async updateBio({ id: id3, bio: bio2 }) {
    let userProfile = await prisma.userProfile.update({
      where: { id: id3 },
      data: { bio: bio2 }
    });
    return userProfile ? { userProfile, error: null } : { error: { bio: "Bio is failed to change" } };
  },
  async updateLinks({ id: id3, links: links4 }) {
    let userProfile = await prisma.userProfile.update({
      where: { id: id3 },
      data: { links: links4 }
    });
    return userProfile ? { userProfile, error: null } : { error: { links: "Links are failed to change" } };
  }
};

// app/models/user-role.server.ts
var user_role_server_exports = {};
__export(user_role_server_exports, {
  fields: () => fields3,
  query: () => query4
});
var fields3 = {
  public: {
    id: !0,
    symbol: !0,
    name: !0,
    description: !0
  }
}, query4 = {
  count() {
    return prisma.userRole.count();
  },
  getAll() {
    return prisma.userRole.findMany({
      select: fields3.public
    });
  },
  getBySymbol({ symbol }) {
    return prisma.userRole.findFirst({
      where: { symbol }
    });
  }
};

// app/models/user-tag.server.ts
var user_tag_server_exports = {};
__export(user_tag_server_exports, {
  fields: () => fields4,
  query: () => query5
});
var fields4 = {
  public: {
    id: !0,
    symbol: !0,
    name: !0,
    description: !0
  }
}, query5 = {
  count() {
    return prisma.userTag.count();
  },
  getAll() {
    return prisma.userTag.findMany({
      select: fields4.public
    });
  },
  getBySymbol({ symbol }) {
    return prisma.userTag.findFirst({
      where: { symbol }
    });
  }
};

// app/models/user.server.ts
var user_server_exports = {};
__export(user_server_exports, {
  fields: () => fields5,
  mutation: () => mutation4,
  query: () => query6
});
var import_bcryptjs2 = __toESM(require("bcryptjs")), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/data/users-unallowed.ts
var dataUsersUnallowed = [
  "about",
  "abouts",
  "account",
  "accounts",
  "action",
  "actions",
  "admin",
  "administrator",
  "admins",
  "adminuser",
  "alphabet",
  "alphabets",
  "answer",
  "answers",
  "app",
  "apple",
  "applicant",
  "applicants",
  "applicaton",
  "applicatons",
  "applied",
  "applies",
  "apply",
  "apps",
  "archive",
  "archived",
  "archives",
  "auth",
  "auth0",
  "authentication",
  "authorization",
  "auths",
  "authz",
  "avatar",
  "avatars",
  "back",
  "backup",
  "backups",
  "bar",
  "bars",
  "base",
  "based",
  "bases",
  "bio",
  "bios",
  "blank",
  "blanks",
  "bookmark",
  "bookmarks",
  "bootcamp",
  "bootcamps",
  "broadcast",
  "broadcasts",
  "broad",
  "broads",
  "branch",
  "branched",
  "branches",
  "build",
  "builds",
  "built",
  "cal",
  "call",
  "calls",
  "called",
  "caller",
  "callers",
  "calculate",
  "calculated",
  "calculates",
  "calculator",
  "calendar",
  "calendars",
  "camp",
  "camps",
  "cascade",
  "cascades",
  "categories",
  "category",
  "chat",
  "chats",
  "code",
  "codeofconduct",
  "coder",
  "coders",
  "collab",
  "collaboration",
  "collaborations",
  "collabs",
  "comment",
  "comments",
  "companies",
  "company",
  "comparison",
  "comparisons",
  "component",
  "components",
  "conf",
  "conference",
  "conferences",
  "confs",
  "console",
  "consoles",
  "contact",
  "contacts",
  "content",
  "contents",
  "continue",
  "continued",
  "continues",
  "copied",
  "copies",
  "copy",
  "cover",
  "covers",
  "create",
  "creates",
  "creation",
  "creations",
  "dash",
  "dashboard",
  "dashboards",
  "data",
  "database",
  "datetime",
  "datetimes",
  "delay",
  "datum",
  "day",
  "days",
  "debug",
  "debugger",
  "debugs",
  "define",
  "defined",
  "defines",
  "definition",
  "definitions",
  "delete",
  "deletes",
  "demo",
  "demonstration",
  "demonstrations",
  "demos",
  "deploy",
  "deployed",
  "deployment",
  "deployments",
  "deploys",
  "dev",
  "development",
  "devs",
  "discuss",
  "discussion",
  "discussions",
  "doc",
  "docs",
  "documentation",
  "documentations",
  "edit",
  "edited",
  "editor",
  "editors",
  "edits",
  "email",
  "enter",
  "entered",
  "enterprise",
  "enterprises",
  "enters",
  "env",
  "environment",
  "environments",
  "every",
  "everything",
  "everythings",
  "example",
  "examples",
  "explore",
  "explored",
  "explores",
  "extension",
  "extensions",
  "facebook",
  "faq",
  "faqs",
  "fb",
  "feature",
  "features",
  "feedback",
  "feedbacks",
  "field",
  "fields",
  "file",
  "files",
  "first",
  "foo",
  "foos",
  "forget_password",
  "forget",
  "forgot_password",
  "forgot",
  "form",
  "forms",
  "forum",
  "forums",
  "found",
  "founded",
  "founder",
  "founders",
  "founding",
  "foward",
  "full",
  "function",
  "functions",
  "get",
  "gets",
  "gh",
  "github",
  "global",
  "guide",
  "guides",
  "guiding",
  "hard",
  "headline",
  "headlines",
  "health",
  "healthcare",
  "healthcheck",
  "hello",
  "helloworld",
  "help",
  "helped",
  "helper",
  "helpers",
  "helps",
  "hey",
  "hi",
  "home",
  "homes",
  "hour",
  "hours",
  "house",
  "houses",
  "id",
  "idea",
  "ideas",
  "ideation",
  "identification",
  "identifications",
  "identified",
  "identifies",
  "identify",
  "identities",
  "identity",
  "ids",
  "ig",
  "image",
  "images",
  "index",
  "indexes",
  "insight",
  "insights",
  "instagram",
  "javascript",
  "job",
  "jobs",
  "join",
  "joined",
  "joining",
  "js",
  "json",
  "kb",
  "knowledge",
  "landing",
  "landingpage",
  "layout",
  "layouts",
  "lead",
  "leader",
  "leaders",
  "leads",
  "line",
  "lines",
  "link",
  "links",
  "list",
  "listing",
  "listings",
  "lists",
  "loader",
  "loaders",
  "log_in",
  "log_out",
  "login",
  "logins",
  "logout",
  "logouts",
  "made",
  "make",
  "maker",
  "makers",
  "manage",
  "managed",
  "manager",
  "manages",
  "manual",
  "manuals",
  "match",
  "matches",
  "media",
  "medium",
  "message",
  "messages",
  "minute",
  "minutes",
  "mission",
  "missions",
  "modif",
  "modificaton",
  "modificatons",
  "mutation",
  "mutations",
  "name",
  "named",
  "names",
  "new",
  "news",
  "node",
  "nodejs",
  "note",
  "noted",
  "notes",
  "notification",
  "notifications",
  "number",
  "numbers",
  "oauth",
  "office",
  "officers",
  "offices",
  "order",
  "ordered",
  "orders",
  "org",
  "organization",
  "organizations",
  "orgs",
  "over",
  "overs",
  "overview",
  "overviews",
  "page",
  "pages",
  "paid",
  "pass",
  "passed",
  "passes",
  "password",
  "passwords",
  "path",
  "paths",
  "pay",
  "payment",
  "payments",
  "pays",
  "phone",
  "phones",
  "picture",
  "pictures",
  "platform",
  "platforms",
  "play",
  "played",
  "plays",
  "pod",
  "podcast",
  "podcasts",
  "pods",
  "policies",
  "policy",
  "power",
  "powered",
  "poweredby",
  "powers",
  "powerup",
  "powerups",
  "primary",
  "prisma",
  "privacies",
  "privacy",
  "pro",
  "prod",
  "production",
  "profile",
  "profilepicture",
  "profilepictures",
  "profiles",
  "prop",
  "properties",
  "props",
  "pros",
  "protect",
  "protection",
  "protections",
  "protects",
  "publish",
  "published",
  "publisher",
  "publishers",
  "publishes",
  "queries",
  "query",
  "questions",
  "react",
  "reaction",
  "reactions",
  "reacts",
  "read",
  "reading",
  "readinglist",
  "readinglists",
  "readings",
  "reads",
  "recap",
  "recaps",
  "reference",
  "referenced",
  "references",
  "register",
  "registers",
  "registration",
  "relation",
  "relationed",
  "relations",
  "relationship",
  "remix",
  "remixed",
  "remixs",
  "request",
  "requested",
  "requests",
  "reset_password",
  "reset",
  "resetpassword",
  "resets",
  "resetted",
  "rewind",
  "rewinds",
  "role",
  "roles",
  "root",
  "route",
  "routes",
  "save",
  "saved",
  "saves",
  "schema",
  "schemas",
  "search",
  "searched",
  "searches",
  "secondary",
  "secure",
  "secured",
  "secures",
  "securities",
  "security",
  "send",
  "sender",
  "sending",
  "sent",
  "series",
  "set",
  "sets",
  "setting",
  "settings",
  "share",
  "shared",
  "shares",
  "ship",
  "shipmenst",
  "shipment",
  "shipper",
  "shippers",
  "shipping",
  "ships",
  "shortcut",
  "shortcuts",
  "show",
  "showcase",
  "showcases",
  "shows",
  "side",
  "sidebar",
  "sidebars",
  "sign",
  "signin",
  "signout",
  "signup",
  "slug",
  "slugs",
  "social",
  "socialmedia",
  "socials",
  "soft",
  "software",
  "softwares",
  "space",
  "spaced",
  "spaces",
  "spam",
  "spams",
  "sponsor",
  "sponsors",
  "stack",
  "stacks",
  "staging",
  "start",
  "starts",
  "status",
  "statuses",
  "string",
  "strings",
  "stuck",
  "subscription",
  "subscriptions",
  "super",
  "supers",
  "support",
  "supported",
  "supporter",
  "supporters",
  "supporting",
  "supports",
  "system",
  "systems",
  "tab",
  "tabs",
  "tag",
  "tags",
  "team",
  "teams",
  "term",
  "terminal",
  "terminals",
  "terms",
  "test",
  "tested",
  "testing",
  "tests",
  "text",
  "texts",
  "theme",
  "themes",
  "time",
  "times",
  "tw",
  "tweet",
  "tweets",
  "twitter",
  "type",
  "types",
  "typescript",
  "undefined",
  "undefineds",
  "update",
  "updated",
  "updates",
  "upgrade",
  "upgraded",
  "upgrades",
  "url",
  "urls",
  "user",
  "username",
  "usernames",
  "users",
  "versus",
  "video",
  "videos",
  "view",
  "viewed",
  "viewer",
  "viewing",
  "views",
  "virus",
  "visual",
  "visuals",
  "vs",
  "watch",
  "watches",
  "welcome",
  "welcomed",
  "welcomes",
  "wiki",
  "wikis",
  "window",
  "windows",
  "work",
  "works",
  "write",
  "writer",
  "writes",
  "written",
  "wrote",
  "year",
  "yearinreview",
  "years",
  "youtube",
  "upload",
  "uploadcare",
  "download",
  "table",
  "tables",
  "store",
  "stores",
  "stored",
  "storage",
  "zed"
];

// app/models/user.server.ts
var fields5 = {
  public: {
    id: !0,
    name: !0,
    username: !0,
    role: { select: { symbol: !0, name: !0, description: !0 } },
    avatars: { select: { url: !0 } },
    tags: { select: { symbol: !0, name: !0 } },
    profiles: { select: { headline: !0, bio: !0 } }
  },
  private: {
    id: !0,
    name: !0,
    username: !0,
    role: { select: { symbol: !0, name: !0, description: !0 } },
    email: !0,
    phone: !0,
    profiles: !0,
    notes: !0
  }
}, query6 = {
  count() {
    return prisma.user.count();
  },
  getAllUsernames() {
    return prisma.user.findMany({
      select: {
        id: !0,
        username: !0,
        updatedAt: !0
      }
    });
  },
  getForSession({ id: id3 }) {
    return prisma.user.findUnique({
      where: { id: id3 },
      select: {
        id: !0,
        name: !0,
        username: !0,
        nick: !0,
        email: !0,
        role: { select: { symbol: !0, name: !0 } },
        avatars: { select: { url: !0 } }
      }
    });
  },
  getById({ id: id3 }) {
    return prisma.user.findUnique({
      where: { id: id3 },
      include: {
        role: { select: { symbol: !0, name: !0 } },
        tags: { select: { id: !0, symbol: !0, name: !0 } },
        avatars: { select: { id: !0, url: !0 } },
        profiles: !0
      }
    });
  },
  getByUsername({ username: username2 }) {
    return prisma.user.findUnique({
      where: { username: username2 },
      include: {
        role: { select: { symbol: !0, name: !0 } },
        tags: { select: { id: !0, symbol: !0, name: !0 } },
        avatars: { select: { id: !0, url: !0 } },
        profiles: !0,
        broadcasts: !0,
        mentees: {
          include: { avatars: { select: { id: !0, url: !0 } } }
        },
        mentors: {
          include: { avatars: { select: { id: !0, url: !0 } } }
        }
      }
    });
  },
  getByEmail({ email: email2 }) {
    return prisma.user.findUnique({
      where: { email: String(email2) },
      select: { id: !0 }
    });
  },
  search({ q }) {
    return prisma.user.findMany({
      where: {
        OR: [{ name: { contains: q } }, { username: { contains: q } }],
        isPublic: !0
      },
      select: fields5.public,
      orderBy: [{ role: { sequence: "asc" } }, { createdAt: "asc" }]
    });
  }
}, mutation4 = {
  async signup({
    email: email2,
    name: name2,
    username: username2,
    password: password2,
    inviteBy: inviteBy2,
    inviteCode: inviteCode2
  }) {
    if (!email2)
      return { error: { email: "Email is required" } };
    if (await prisma.user.findUnique({
      where: { email: email2.trim() },
      include: { password: !0 }
    }))
      return { error: { email: `Email ${email2} is already used` } };
    if (dataUsersUnallowed.find(
      (text) => name2.toLowerCase() === text
    ))
      return { error: { name: `Name ${name2} is not allowed to be used` } };
    if (dataUsersUnallowed.find(
      (text) => username2.toLowerCase() === text
    ))
      return {
        error: { username: `Username ${username2} is not allowed to be used` }
      };
    if (await prisma.user.findUnique({
      where: { username: username2.trim() }
    }))
      return { error: { username: `Username ${username2} is already taken` } };
    let hashedPassword = await import_bcryptjs2.default.hash(password2, 10), defaultUserRole = await prisma.userRole.findFirst({
      where: { symbol: "NORMAL" }
    });
    return (0, import_tiny_invariant2.default)(defaultUserRole, "User Role with symbol NORMAL is not found"), { user: await prisma.user.create({
      data: {
        name: name2.trim(),
        username: username2.trim(),
        email: email2.trim(),
        password: { create: { hash: hashedPassword } },
        role: { connect: { id: defaultUserRole.id } },
        avatars: { create: { url: createAvatarImageURL(username2) } },
        profiles: {
          create: {
            modeName: `Default ${name2}`,
            headline: `The headline of ${name2}`,
            bio: `The bio of ${name2} for longer description.`
          }
        }
        // TODO: Connect Invite by and code
      }
    }), error: null };
  },
  async signin({
    email: email2,
    password: password2
  }) {
    let defaultUser = await prisma.user.findFirst({
      where: { username: "admin" }
    });
    return defaultUser ? { user: defaultUser, error: null } : { error: "Authentication error", user: null };
  },
  deleteById({ id: id3 }) {
    return prisma.user.delete({ where: { id: id3 } });
  },
  deleteByEmail({ email: email2 }) {
    return email2 ? prisma.user.delete({ where: { email: email2 } }) : { error: { email: "Email is required" } };
  },
  async updateUsername({
    id: id3,
    username: username2
  }) {
    if (dataUsersUnallowed.find(
      (word) => word === username2.toLowerCase()
    ))
      return { error: { username: `Username ${username2} is not allowed` } };
    try {
      return { user: await prisma.user.update({
        where: { id: id3 },
        data: { username: username2 }
      }), error: null };
    } catch (error) {
      return (error == null ? void 0 : error.code) === "P2002" ? { error: { username: `Username ${username2} is taken` } } : { error: { username: "Username failed to update" } };
    }
  },
  async updateName({ id: id3, name: name2 }) {
    if (dataUsersUnallowed.find(
      (word) => word === name2.toLowerCase()
    ))
      return { error: { name: `Name ${name2} is not allowed` } };
    try {
      return { user: await prisma.user.update({ where: { id: id3 }, data: { name: name2 } }), error: null };
    } catch {
      return { error: { name: "Name is failed to change" } };
    }
  },
  async updateNick({ id: id3, nick: nick2 }) {
    if (dataUsersUnallowed.find(
      (word) => word === nick2.toLowerCase()
    ))
      return { error: { nick: `Nick ${nick2} is not allowed` } };
    try {
      return { user: await prisma.user.update({ where: { id: id3 }, data: { nick: nick2 } }), error: null };
    } catch {
      return { error: { nick: "Nick is failed to change" } };
    }
  },
  async updateEmail({ id: id3, email: email2 }) {
    try {
      return { user: await prisma.user.update({ where: { id: id3 }, data: { email: email2 } }), error: null };
    } catch (error) {
      return (error == null ? void 0 : error.code) === "P2002" ? { error: { email: `Email ${email2} might already used` } } : { error: { username: "Email failed to update" } };
    }
  },
  updateTags({ id: id3, tags: tags3 }) {
    return prisma.user.update({
      where: { id: id3 },
      data: { tags: { set: tags3 } },
      include: { tags: { select: { id: !0 } } }
    });
  }
};

// app/models/index.ts
var model = {
  user: user_server_exports,
  userTag: user_tag_server_exports,
  userPassword: user_password_server_exports,
  userProfile: user_profile_server_exports,
  userRole: user_role_server_exports,
  broadcast: broadcast_server_exports
};

// app/routes/$username.broadcasts.$id.edit._index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
async function loader2({ request, params }) {
  (0, import_tiny_invariant3.default)(params.id, "Broadcast ID not found");
  let broadcast = await prisma.broadcast.findFirst({
    where: { id: params.id },
    include: { types: !0, tags: !0, images: !0 }
  });
  return (0, import_node3.json)({ broadcast }, { headers: createCacheHeaders(request, 3) });
}
function BroadcastsRoute() {
  let params = (0, import_react22.useParams)(), { userSession } = useRootLoaderData(), { broadcast } = (0, import_react22.useLoaderData)();
  if (!broadcast)
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Layout, { className: "px-4 sm:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(NotFound, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("h2", { children: [
        "This broadcast",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "text-red-500", children: [
          '"',
          params.username,
          '"'
        ] }),
        " is not found or cannot be edited"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-muted-foreground", children: "The broadcast may be broken or have been removed." })
    ] }) });
  let isOwner = (userSession == null ? void 0 : userSession.id) === broadcast.userId;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Layout, { className: "flex justify-center p-4 sm:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mb-40 w-full max-w-2xl space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h1", { children: "Edit Broadcast" }) }),
    isOwner && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(BroadcastEditForm, {})
  ] }) });
}
var action = async ({ request }) => {
  await delay();
  let formData = await request.formData(), submission = (0, import_zod5.parse)(formData, { schema: schemaBroadcastUpdate });
  if (!submission.value || submission.intent !== "submit")
    return (0, import_remix_utils2.badRequest)(submission);
  let broadcast = await model.broadcast.mutation.updateById(submission.value);
  return broadcast ? (0, import_node3.redirect)(`/${broadcast.user.username}/broadcasts/${broadcast.id}`) : null;
};

// app/routes/$username.broadcasts.$id._index.tsx
var username_broadcasts_id_index_exports = {};
__export(username_broadcasts_id_index_exports, {
  action: () => action2,
  default: () => BroadcastsRoute2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_zod6 = require("@conform-to/zod"), import_remix_utils3 = require("remix-utils"), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_jsx_runtime30 = require("react/jsx-runtime");
async function loader3({ request, params }) {
  (0, import_tiny_invariant4.default)(params.id, "Broadcast ID not found");
  let broadcast = await prisma.broadcast.findFirst({
    where: { id: params.id },
    include: {
      images: !0,
      tags: !0,
      user: { include: { avatars: { select: { url: !0 } } } }
    }
  });
  return broadcast ? (0, import_node4.json)({ broadcast }, { headers: createCacheHeaders(request, 3) }) : (0, import_remix_utils3.notFound)({ broadcast: null });
}
function BroadcastsRoute2() {
  var _a;
  let params = (0, import_react23.useParams)(), { userSession } = useRootLoaderData(), { broadcast } = (0, import_react23.useLoaderData)(), isSubmitting = (0, import_react23.useNavigation)().state === "submitting";
  if (!broadcast)
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Layout, { className: "px-4 sm:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(NotFound, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("h2", { children: [
        "This broadcast",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "text-red-500", children: [
          '"',
          params.username,
          '"'
        ] }),
        " is not found"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-muted-foreground", children: "The broadcast may be broken or have been removed." })
    ] }) });
  let isOwner = (userSession == null ? void 0 : userSession.id) === broadcast.userId;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Layout, { className: "flex justify-center p-4 sm:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "mb-40 w-full max-w-2xl space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("header", { className: "gap-2 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h1", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          import_react23.Link,
          {
            to: `/${broadcast.user.username}/broadcasts/${broadcast.id}`,
            className: "hover-opacity",
            children: broadcast.title
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { children: broadcast.description })
      ] }),
      isOwner && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react23.Form, { method: "DELETE", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { hidden: !0, name: "id", defaultValue: broadcast.id }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            ButtonLoading,
            {
              variant: "destructive",
              size: "xs",
              isSubmitting,
              submittingText: "Deleting...",
              children: "Delete"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { asChild: !0, size: "xs", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          import_react23.Link,
          {
            to: `/${broadcast.user.username}/broadcasts/${broadcast.id}/edit`,
            children: "Edit"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
        import_react23.Link,
        {
          to: `/${broadcast.user.username}`,
          className: "hover-opacity flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(AvatarAuto, { className: "h-10 w-10", user: broadcast.user }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h6", { children: broadcast.user.name }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
                "@",
                broadcast.user.username
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Time, { children: broadcast.updatedAt })
    ] }),
    broadcast.body && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "prose dark:prose-invert whitespace-pre-wrap", children: broadcast.body }) }),
    ((_a = broadcast.tags) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("ul", { className: "flex flex-wrap gap-1 sm:gap-2", children: broadcast.tags.map((tag3) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Badge, { size: "sm", variant: "secondary", children: tag3.name }) }, tag3.id)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "hidden", children: [
      !(userSession != null && userSession.id) && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react23.Link, { to: `/signin?redirectTo=/broadcasts/${broadcast.id}`, children: "Sign In to Contact" }) }),
      (userSession == null ? void 0 : userSession.id) && !isOwner && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Button, { children: [
        "Contact ",
        broadcast.user.nick || broadcast.user.name
      ] })
    ] })
  ] }) });
}
var action2 = async ({ request }) => {
  await delay();
  let formData = await request.formData(), submission = (0, import_zod6.parse)(formData, { schema: schemaBroadcastDelete });
  if (!submission.value || submission.intent !== "submit")
    return (0, import_remix_utils3.badRequest)(submission);
  let broadcast = await model.broadcast.mutation.deleteById(submission.value);
  return (0, import_node4.redirect)(`/${broadcast.user.username}`);
};

// app/routes/settings.notifications.tsx
var settings_notifications_exports = {};
__export(settings_notifications_exports, {
  default: () => Route
});
var import_jsx_runtime31 = require("react/jsx-runtime");
function Route() {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "w-full space-y-10", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "text-muted-foreground", children: "(Work in progress)" })
  ] }) });
}

// app/routes/settings.appearance.tsx
var settings_appearance_exports = {};
__export(settings_appearance_exports, {
  default: () => Route2
});
var import_jsx_runtime32 = require("react/jsx-runtime");
function Route2() {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "w-full space-y-10", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { children: "Appearance" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-muted-foreground", children: "(Work in progress)" })
  ] }) });
}

// app/routes/_example.pagination.tsx
var example_pagination_exports = {};
__export(example_pagination_exports, {
  default: () => Route3,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react24 = require("@remix-run/react");
var import_jsx_runtime33 = require("react/jsx-runtime"), loader4 = async ({ request }) => {
  let config = getPaginationConfigs({ request, defaultLimit: 8 }), where = config.queryParam ? { OR: [{ name: { contains: config.queryParam } }] } : {}, [totalItems, items] = await prisma.$transaction([
    prisma.user.count({ where }),
    prisma.user.findMany({ where, skip: config.skip, take: config.limitParam })
  ]);
  return (0, import_node5.json)({ ...getPaginationOptions({ request, totalItems }), items });
};
function Route3() {
  let { items: users, ...loaderData } = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Layout, { withPadding: !0, className: "max-w-7xl space-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react24.Link, { to: "/pagination", children: "Example: Pagination" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      PaginationSearch,
      {
        itemName: "user",
        searchPlaceholder: "Search users with keyword...",
        count: users.length,
        isVerbose: !0,
        ...loaderData
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PaginationNavigation, { ...loaderData }),
    users.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("ul", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react24.Link, { to: `/${user.username}`, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h4", { className: "hover-opacity", children: user.name }) }) }, user.id)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PaginationNavigation, { ...loaderData })
  ] });
}

// app/routes/broadcasts._index.tsx
var broadcasts_index_exports = {};
__export(broadcasts_index_exports, {
  action: () => action3,
  default: () => Route4,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_zod7 = require("@conform-to/zod"), import_remix_utils4 = require("remix-utils");
var import_jsx_runtime34 = require("react/jsx-runtime");
async function loader5({ request }) {
  let query7 = new URL(request.url).searchParams.get("q");
  if (!query7) {
    let broadcasts2 = await prisma.broadcast.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        tags: !0,
        user: {
          select: {
            id: !0,
            name: !0,
            username: !0,
            avatars: { select: { url: !0 } }
          }
        }
      }
    });
    return (0, import_node6.json)({ query: query7, count: broadcasts2.length, broadcasts: broadcasts2 });
  }
  let broadcasts = await prisma.broadcast.findMany({
    orderBy: { updatedAt: "asc" },
    where: {
      OR: [
        { title: { contains: query7 } },
        { description: { contains: query7 } },
        { body: { contains: query7 } },
        {
          user: {
            OR: [
              {
                name: { contains: query7 },
                username: { contains: query7 }
              }
            ]
          }
        }
      ]
    },
    include: {
      tags: !0,
      user: {
        select: {
          id: !0,
          name: !0,
          username: !0,
          avatars: { select: { url: !0 } }
        }
      }
    }
  });
  return (0, import_node6.json)({ query: query7, count: broadcasts.length, broadcasts });
}
function Route4() {
  let { userSession } = useRootLoaderData(), { query: query7, count: count2, broadcasts } = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Layout, { withPadding: !0, className: "flex flex-wrap gap-8 sm:flex-nowrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { className: "w-full space-y-8 sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("header", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h1", { className: "text-4xl text-brand", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react25.Link, { to: "/broadcasts", className: "hover-opacity", children: "Broadcasts" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-muted-foreground", children: "Use broadcasts to posts some announcements or requests for everyone, that you ask for help or offer a service" })
      ] }),
      !(userSession != null && userSession.id) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react25.Link, { to: "/signin?redirectTo=/broadcasts", children: "Sign In to Broadcast" }) }) }),
      (userSession == null ? void 0 : userSession.id) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(BroadcastQuickForm, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { className: "w-full max-w-3xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SearchForm, { action: "/broadcasts", placeholder: "Search broadcasts..." }),
      !query7 && count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "text-muted-foreground", children: [
        count2,
        " broadcasts"
      ] }),
      query7 && count2 <= 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "text-muted-foreground", children: [
        'No broadcast found with keyword "',
        query7,
        '"'
      ] }),
      query7 && count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "text-muted-foreground", children: [
        "Found ",
        formatPluralItems("broadcast", count2),
        ' with keyword "',
        query7,
        '"'
      ] }),
      count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("ul", { className: "space-y-4", children: broadcasts.map((broadcast) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_react25.Link,
          {
            to: `/${broadcast.user.username}/broadcasts/${broadcast.id}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Card, { className: "hover-opacity space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(CardHeader, { className: "space-y-2 p-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CardTitle, { className: "text-2xl", children: broadcast.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CardDescription, { children: broadcast.description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                    AvatarAuto,
                    {
                      className: "h-10 w-10",
                      user: broadcast.user
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "space-y-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h6", { children: broadcast.user.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
                      "@",
                      broadcast.user.username
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Time, { children: broadcast.updatedAt })
              ] }),
              broadcast.body && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CardContent, { className: "space-y-4 px-4 pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "prose dark:prose-invert whitespace-pre-wrap", children: truncateText(broadcast.body) }) }),
              ((_a = broadcast.tags) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CardContent, { className: "space-y-4 px-4 pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("ul", { className: "flex flex-wrap gap-1 sm:gap-2", children: broadcast.tags.map((tag3) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Badge, { size: "sm", variant: "secondary", children: tag3.name }) }, tag3.id)) }) })
            ] })
          }
        ) }, broadcast.id);
      }) }) })
    ] })
  ] });
}
async function action3({ request }) {
  let timer = createTimer(), formData = await request.formData(), submission = (0, import_zod7.parse)(formData, { schema: schemaBroadcastQuick });
  if (!submission.value || submission.intent !== "submit")
    return (0, import_remix_utils4.badRequest)(submission);
  let broadcast = await model.broadcast.mutation.createQuick(submission.value);
  return await timer.delay(), (0, import_node6.redirect)(`/${broadcast.user.username}/broadcasts/${broadcast.id}`);
}

// app/routes/settings.password.tsx
var settings_password_exports = {};
__export(settings_password_exports, {
  UserPasswordForm: () => UserPasswordForm,
  action: () => action4,
  default: () => Route5,
  loader: () => loader6
});
var import_react26 = require("react"), import_node7 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = require("@conform-to/react"), import_zod8 = require("@conform-to/zod"), import_remix_utils5 = require("remix-utils");
var import_jsx_runtime35 = require("react/jsx-runtime"), loader6 = async ({ request }) => {
  let userSession = { id: "temp-user-id" };
  if (!(userSession != null && userSession.id))
    return (0, import_node7.redirect)("/signout");
  let user = await prisma.user.findFirst({
    where: { id: userSession.id },
    select: { id: !0, password: !0 }
  });
  return (0, import_node7.json)({ user });
};
function Route5() {
  let { user } = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-muted-foreground", children: "To secure your user account." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(UserPasswordForm, { user }) })
  ] });
}
function UserPasswordForm({ user }) {
  let actionData = (0, import_react27.useActionData)(), isSubmitting = (0, import_react27.useNavigation)().state === "submitting", { toast: toast2 } = useToast(), [form, { id: id3, password: password2, confirmPassword: confirmPassword2, currentPassword: currentPassword2 }] = (0, import_react28.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod8.parse)(formData, { schema: schemaUserUpdatePassword });
    }
  });
  return (0, import_react26.useEffect)(() => {
    var _a;
    !isSubmitting && (actionData != null && actionData.success) && ((_a = form.ref.current) == null || _a.reset(), toast2({ title: actionData.success, variant: "success" }));
  }, [actionData == null ? void 0 : actionData.success, form.ref, isSubmitting, toast2]), /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react27.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(FormFieldSet, { disabled: isSubmitting, children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { hidden: !0, ...import_react28.conform.input(id3), defaultValue: user.id }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(FormLabel, { htmlFor: currentPassword2.id, children: "Current Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        InputPassword,
        {
          ...import_react28.conform.input(currentPassword2),
          placeholder: "Your current password",
          defaultValue: ""
        }
      ),
      currentPassword2.error && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Alert, { variant: "destructive", id: currentPassword2.errorId, children: currentPassword2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(FormLabel, { htmlFor: password2.id, children: "New Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(FormDescription, { children: [
        "Make sure to save your new password safely in a password manager like",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Anchor, { withColor: !0, href: "https://bitwarden.com", children: "Bitwarden" }),
        " ",
        "or other secure method you prefer."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        InputPassword,
        {
          ...import_react28.conform.input(password2),
          placeholder: "Your new password",
          defaultValue: ""
        }
      ),
      password2.error && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Alert, { variant: "destructive", id: password2.errorId, children: password2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(FormLabel, { htmlFor: confirmPassword2.id, children: "Confirm New Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        InputPassword,
        {
          ...import_react28.conform.input(confirmPassword2),
          placeholder: "Confirm your new password",
          defaultValue: ""
        }
      ),
      confirmPassword2.error && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Alert, { variant: "destructive", id: confirmPassword2.errorId, children: confirmPassword2.error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      ButtonLoading,
      {
        name: "intent",
        value: "update-user-password",
        size: "sm",
        disabled: isSubmitting,
        isSubmitting,
        submittingText: "Saving New Password...",
        children: "Save New Password"
      }
    )
  ] }) });
}
async function action4({ request }) {
  return await delay(), null;
  let formData = await request.formData(), parsed = (0, import_react28.parse)(formData), { intent } = parsed.payload;
  if (intent === "update-user-password") {
    let submission = (0, import_zod8.parse)(formData, { schema: schemaUserUpdatePassword });
    if (!submission.value)
      return (0, import_remix_utils5.badRequest)({ ...submission, success: "" });
    let result = await model.userPassword.mutation.update(submission.value);
    return result.error ? (0, import_remix_utils5.forbidden)({
      ...submission,
      error: result.error,
      success: ""
    }) : (0, import_node7.json)({ ...submission, success: "Password has been changed." });
  }
  return (0, import_node7.json)({ ...parsed, success: "" });
}

// app/routes/$username._index.tsx
var username_index_exports = {};
__export(username_index_exports, {
  default: () => Route6,
  loader: () => loader7,
  meta: () => meta2
});
var import_node8 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_remix_utils6 = require("remix-utils"), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_runtime36 = require("react/jsx-runtime"), meta2 = ({ params, data }) => {
  var _a, _b, _c, _d;
  return data != null && data.user ? [
    { title: formatTitle(`${(_a = data.user) == null ? void 0 : _a.name} (@${(_b = data.user) == null ? void 0 : _b.username})`) },
    { name: "description", content: (_d = (_c = data.user) == null ? void 0 : _c.profiles[0]) == null ? void 0 : _d.headline }
  ] : [
    {
      title: formatTitle(
        `Sorry, "${params.username}" is not found or this page isn't available`
      )
    },
    {
      name: "description",
      content: "The link you followed may be broken, or the page may have been removed. Please refresh or back to the home page."
    }
  ];
};
async function loader7({ request, params }) {
  (0, import_tiny_invariant5.default)(params.username, "username not found");
  let user = await model.user.query.getByUsername({
    username: params.username
  });
  if (!user)
    return (0, import_remix_utils6.notFound)({ user: null, profileLinks: null });
  let profileLinks = user != null && user.profiles[0].links && typeof (user == null ? void 0 : user.profiles[0].links) == "object" && Array.isArray(user == null ? void 0 : user.profiles[0].links) ? user == null ? void 0 : user.profiles[0].links : [];
  return (0, import_node8.json)({ user, profileLinks });
}
function Route6() {
  var _a, _b, _c;
  let params = (0, import_react29.useParams)(), { userSession } = useRootLoaderData(), { user, profileLinks } = (0, import_react29.useLoaderData)(), defaultCoverImageURL = "Pixabay-board-784363_1920-Coach.jpg";
  if (!user)
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Layout, { className: "px-4 sm:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(NotFound, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("h2", { children: [
        "This page isn't available or",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("span", { className: "text-red-500", children: [
          '"',
          params.username,
          '"'
        ] }),
        " is not found"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-muted-foreground", children: "The link you followed may be broken, or the page may have been removed." })
    ] }) });
  let isOwner = (userSession == null ? void 0 : userSession.id) === user.id, isMentor = user.tags.findIndex((tag3) => tag3.symbol === "MENTOR") >= 0, isMentee = user.tags.findIndex((tag3) => tag3.symbol === "MENTEE") >= 0;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Layout, { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("section", { className: "flex justify-center sm:px-2", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "img",
      {
        className: "h-32 object-cover sm:h-48 sm:rounded-b-lg md:h-60",
        alt: "User Cover",
        src: defaultCoverImageURL,
        height: 240,
        width: 1440
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "w-full max-w-2xl space-y-6 px-4 sm:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("header", { className: "-mt-16 flex flex-wrap items-end justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            AvatarAuto,
            {
              className: "mb-4 h-32 w-32 outline outline-4 outline-background",
              user
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h1", { className: "text-4xl", children: user.name }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("h2", { className: "text-2xl text-muted-foreground", children: [
            "@",
            user.username
          ] })
        ] }),
        isOwner && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("section", { className: "flex flex-wrap gap-1", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { asChild: !0, variant: "secondary", size: "xs", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react29.Link, { to: "/settings/profile", children: "Edit Profile" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("section", { children: ((_a = user.tags) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("ul", { className: "flex flex-wrap gap-1 sm:gap-2", children: user.tags.map((tag3) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Badge, { children: tag3.name }) }, `${tag3.id}-${tag3.symbol}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { children: (_b = user.profiles[0]) == null ? void 0 : _b.headline }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "prose dark:prose-invert whitespace-pre-wrap", children: (_c = user.profiles[0]) == null ? void 0 : _c.bio })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h4", { children: "Links" }),
        profileLinks.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { children: "No profile links." }),
        profileLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("ul", { className: "space-y-2", children: profileLinks.map((profileLink) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Anchor, { href: profileLink.url, className: "block", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Card, { className: "hover-opacity flex items-center gap-2 space-y-0 px-2 py-1", children: [
          profileLink.text && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "font-bold", children: profileLink.text }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "font-mono text-sm", children: trimURL(profileLink.url) })
        ] }) }) }, profileLink.url)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h4", { children: "Broadcasts" }),
        user.broadcasts.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { children: "No broadcasts." }),
        isOwner && user.broadcasts.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { asChild: !0, size: "sm", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react29.Link, { to: "/broadcasts", children: "Go to Broadcasts and create" }) }),
        user.broadcasts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("ul", { className: "space-y-2", children: user.broadcasts.map((broadcast) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          import_react29.Link,
          {
            to: `/${user.username}/broadcasts/${broadcast.id}`,
            className: "focus block",
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Card, { className: "hover-opacity space-y-0 p-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h5", { className: "font-sans", children: broadcast.title }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Time, { children: broadcast.updatedAt })
            ] })
          }
        ) }, broadcast.id)) })
      ] }),
      isMentor && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h4", { children: "Mentees" }),
          user.mentees.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-muted-foreground", children: "No mentees." }),
          user.mentees.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-muted-foreground", children: formatPluralItems("mentee", user.mentees.length) })
        ] }),
        user.mentees.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("ul", { className: "grid grid-cols-2 gap-2", children: user.mentees.map((mentee) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
          import_react29.Link,
          {
            to: `/${mentee.username}`,
            className: "hover-opacity flex gap-2 py-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(AvatarAuto, { className: "h-10 w-10", user: mentee }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { className: "text-base", children: mentee.name }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
                  "@",
                  mentee.username
                ] })
              ] })
            ]
          }
        ) }, mentee.id)) })
      ] }),
      isMentee && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h4", { children: "Mentors" }),
          user.mentors.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-muted-foreground", children: "No mentors." }),
          user.mentors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-muted-foreground", children: formatPluralItems("mentor", user.mentors.length) })
        ] }),
        user.mentors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("ul", { className: "grid grid-cols-2 gap-2", children: user.mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
          import_react29.Link,
          {
            to: `/${mentor.username}`,
            className: "hover-opacity flex gap-2 py-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(AvatarAuto, { className: "h-10 w-10", user: mentor }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { className: "text-base", children: mentor.name }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
                  "@",
                  mentor.username
                ] })
              ] })
            ]
          }
        ) }, mentor.id)) })
      ] })
    ] })
  ] });
}

// app/routes/settings.account.tsx
var settings_account_exports = {};
__export(settings_account_exports, {
  default: () => Route7
});
var import_jsx_runtime37 = require("react/jsx-runtime");
function Route7() {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-full space-y-10", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { children: "Account" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "text-muted-foreground", children: "(Work in progress)" })
  ] }) });
}

// app/routes/settings.general.tsx
var settings_general_exports = {};
__export(settings_general_exports, {
  UserNameForm: () => UserNameForm,
  UserNickForm: () => UserNickForm,
  UserUsernameForm: () => UserUsernameForm,
  action: () => action5,
  default: () => Route8,
  loader: () => loader8
});
var import_node9 = require("@remix-run/node"), import_react30 = require("@remix-run/react"), import_react31 = require("@conform-to/react"), import_zod9 = require("@conform-to/zod"), import_remix_utils7 = require("remix-utils");
var import_jsx_runtime38 = require("react/jsx-runtime"), loader8 = async ({ request }) => {
  let userSession = { id: "temp-user-id" };
  if (!(userSession != null && userSession.id))
    return (0, import_node9.redirect)("/signout");
  let user = await prisma.user.findUnique({ where: { id: userSession.id } });
  return (0, import_node9.json)({ user });
};
function Route8() {
  let { user } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { children: "General" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-muted-foreground", children: "Your general information." }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Button, { asChild: !0, size: "xs", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react30.Link, { to: "/profile", children: [
        "Go to your profile @",
        user == null ? void 0 : user.username
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(UserUsernameForm, { user }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(UserNameForm, { user }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(UserNickForm, { user })
    ] })
  ] });
}
function UserUsernameForm({
  user
}) {
  let actionData = (0, import_react30.useActionData)(), isSubmitting = (0, import_react30.useNavigation)().state === "submitting", [form, { id: id3, username: username2 }] = (0, import_react31.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod9.parse)(formData, { schema: schemaUserUpdateUsername });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react30.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { hidden: !0, ...import_react31.conform.input(id3), defaultValue: user.id }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormLabel, { htmlFor: username2.id, children: "Your Username" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(FormDescription, { children: [
            "Public @username and your URL namespace within Bearmentor like",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("code", { className: "text-xs", children: "bearmentor.com/yourname" }),
            ". Please use 20 characters at maximum."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Input,
            {
              ...import_react31.conform.input(username2),
              type: "text",
              defaultValue: user.username,
              placeholder: "yourname"
            }
          ),
          username2.error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Alert, { variant: "destructive", id: username2.errorId, children: username2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-username",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Username...",
            children: "Save Username"
          }
        )
      ]
    }
  ) });
}
function UserNameForm({ user }) {
  let actionData = (0, import_react30.useActionData)(), isSubmitting = (0, import_react30.useNavigation)().state === "submitting", [form, { id: id3, name: name2 }] = (0, import_react31.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod9.parse)(formData, { schema: schemaUserUpdateName });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react30.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { hidden: !0, ...import_react31.conform.input(id3), defaultValue: user.id }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormLabel, { htmlFor: name2.id, children: "Your Full Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormDescription, { children: "Display name you are comfortable with. It can be real name or a pseudonym." }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Input,
            {
              ...import_react31.conform.input(name2),
              type: "text",
              defaultValue: user.name,
              placeholder: "Your Full Name"
            }
          ),
          name2.error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Alert, { variant: "destructive", id: name2.errorId, children: name2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-name",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Full Name...",
            children: "Save Full Name"
          }
        )
      ]
    }
  ) });
}
function UserNickForm({ user }) {
  let actionData = (0, import_react30.useActionData)(), isSubmitting = (0, import_react30.useNavigation)().state === "submitting", [form, { id: id3, nick: nick2 }] = (0, import_react31.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod9.parse)(formData, { schema: schemaUserUpdateNick });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react30.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { hidden: !0, ...import_react31.conform.input(id3), defaultValue: user.id }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormLabel, { htmlFor: nick2.id, children: "Your Nick Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormDescription, { children: "When you are being called by someone." }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Input,
            {
              ...import_react31.conform.input(nick2),
              type: "text",
              defaultValue: user.nick ?? "",
              placeholder: "Your Nick"
            }
          ),
          nick2.error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Alert, { variant: "destructive", id: nick2.errorId, children: nick2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-nick",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Nick Name...",
            children: "Save Nick Name"
          }
        )
      ]
    }
  ) });
}
async function action5({ request }) {
  return await delay(), null;
  let formData = await request.formData(), parsed = (0, import_react31.parse)(formData), { intent } = parsed.payload;
  if (intent === "update-user-username") {
    let submission = (0, import_zod9.parse)(formData, { schema: schemaUserUpdateUsername });
    if (!submission.value)
      return (0, import_remix_utils7.badRequest)(submission);
    let result = await model.user.mutation.updateUsername(submission.value);
    return result.error ? (0, import_remix_utils7.forbidden)({ ...submission, error: result.error }) : (0, import_node9.json)(submission);
  }
  if (intent === "update-user-name") {
    let submission = (0, import_zod9.parse)(formData, { schema: schemaUserUpdateName });
    if (!submission.value)
      return (0, import_remix_utils7.badRequest)(submission);
    let result = await model.user.mutation.updateName(submission.value);
    return result != null && result.error ? (0, import_remix_utils7.forbidden)({ ...submission, error: result.error }) : (0, import_node9.json)(submission);
  }
  if (intent === "update-user-nick") {
    let submission = (0, import_zod9.parse)(formData, { schema: schemaUserUpdateNick });
    if (!submission.value)
      return (0, import_remix_utils7.badRequest)(submission);
    let result = await model.user.mutation.updateNick(submission.value);
    return result.error ? (0, import_remix_utils7.forbidden)({ ...submission, error: result.error }) : (0, import_node9.json)(submission);
  }
  return (0, import_node9.json)(parsed);
}

// app/routes/settings.profile.tsx
var settings_profile_exports = {};
__export(settings_profile_exports, {
  UserProfileBioForm: () => UserProfileBioForm,
  UserProfileHeadlineForm: () => UserProfileHeadlineForm,
  UserProfileLinksForm: () => UserProfileLinksForm,
  UserProfileModeNameForm: () => UserProfileModeNameForm,
  action: () => action6,
  default: () => Route9,
  loader: () => loader9
});
var import_react32 = require("react"), import_node10 = require("@remix-run/node"), import_react33 = require("@remix-run/react"), import_react34 = require("@conform-to/react"), import_zod10 = require("@conform-to/zod"), import_icons_react5 = require("@tabler/icons-react"), import_remix_utils8 = require("remix-utils");
var import_jsx_runtime39 = require("react/jsx-runtime"), loader9 = async ({ request }) => {
  let userSession = { id: "temp-user-id" };
  if (!(userSession != null && userSession.id))
    return (0, import_node10.redirect)("/signout");
  let user = await prisma.user.findUnique({
    where: { id: userSession.id },
    include: { profiles: !0 }
  });
  return (0, import_node10.json)({ user });
};
function Route9() {
  let { user } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { children: "Profile" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-muted-foreground", children: "Your profiles and links. In Bearmentor, you could have multiple profiles." }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { asChild: !0, size: "xs", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react33.Link, { to: "/profile", children: [
        "Go to your profile @",
        user == null ? void 0 : user.username
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { className: "space-y-10", children: user == null ? void 0 : user.profiles.map((userProfile) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(UserProfileModeNameForm, { userProfile }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(UserProfileHeadlineForm, { userProfile }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(UserProfileBioForm, { userProfile }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(UserProfileLinksForm, { userProfile })
    ] }, userProfile.id)) })
  ] });
}
function UserProfileModeNameForm({
  userProfile
}) {
  let actionData = (0, import_react33.useActionData)(), isSubmitting = (0, import_react33.useNavigation)().state === "submitting", [form, { id: id3, modeName: modeName2 }] = (0, import_react34.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod10.parse)(formData, { schema: schemaUserProfileModeName });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react33.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { hidden: !0, ...import_react34.conform.input(id3), defaultValue: userProfile.id }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h6", { id: "mode", children: "Profile Mode Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormDescription, { children: "To identify from your multiple profiles" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Input,
            {
              ...import_react34.conform.input(modeName2),
              type: "text",
              defaultValue: String(userProfile.modeName),
              placeholder: "Profile Mode Name"
            }
          ),
          modeName2.error && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Alert, { variant: "destructive", id: modeName2.errorId, children: modeName2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-profile-modename",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Mode Name...",
            children: "Save Mode Name"
          }
        )
      ]
    }
  ) });
}
function UserProfileHeadlineForm({
  userProfile
}) {
  let actionData = (0, import_react33.useActionData)(), isSubmitting = (0, import_react33.useNavigation)().state === "submitting", [form, { id: id3, headline: headline2 }] = (0, import_react34.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod10.parse)(formData, { schema: schemaUserProfileHeadline });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react33.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { hidden: !0, ...import_react34.conform.input(id3), defaultValue: userProfile.id }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h6", { id: "headline", children: "Headline" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormDescription, { children: "To recognize your profile, tagline, or job position." }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Input,
            {
              ...import_react34.conform.input(headline2),
              type: "text",
              defaultValue: userProfile.headline ?? "",
              placeholder: "Your Headline"
            }
          ),
          headline2.error && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Alert, { variant: "destructive", id: headline2.errorId, children: headline2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-profile-headline",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Headline...",
            children: "Save Headline"
          }
        )
      ]
    }
  ) });
}
function UserProfileBioForm({
  userProfile
}) {
  let actionData = (0, import_react33.useActionData)(), isSubmitting = (0, import_react33.useNavigation)().state === "submitting", [form, { id: id3, bio: bio2 }] = (0, import_react34.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod10.parse)(formData, { schema: schemaUserProfileBio });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react33.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { hidden: !0, ...import_react34.conform.input(id3), defaultValue: userProfile.id }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h6", { id: "bio", children: "Bio" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(FormDescription, { children: [
            "To inform or explain about yourself.",
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("span", { className: "hidden", children: [
              "Can also ",
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("b", { children: "@mention" }),
              " other users and organizations to link to them."
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Textarea,
            {
              ...import_react34.conform.input(bio2),
              defaultValue: userProfile.bio ?? "",
              placeholder: "Tell us a bit about yourself...",
              className: "min-h-[200px]"
            }
          ),
          bio2.error && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Alert, { variant: "destructive", id: bio2.errorId, children: bio2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-profile-bio",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving Bio...",
            children: "Save Bio"
          }
        )
      ]
    }
  ) });
}
function UserProfileLinksForm({
  userProfile
}) {
  let actionData = (0, import_react33.useActionData)(), isSubmitting = (0, import_react33.useNavigation)().state === "submitting", [form, { id: id3, links: links4 }] = (0, import_react34.useForm)(
    {
      shouldValidate: "onSubmit",
      lastSubmission: actionData,
      onValidate({ formData }) {
        return (0, import_zod10.parse)(formData, { schema: schemaUserProfileLinks });
      },
      defaultValue: {
        links: userProfile.links
      }
    }
  ), linksItems = (0, import_react34.useFieldList)(form.ref, links4), isAllowAddLink = linksItems.length < 10;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react33.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { hidden: !0, ...import_react34.conform.input(id3), defaultValue: userProfile.id }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h6", { id: "links", children: "Links" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormDescription, { children: "To link your websites, social media, and projects/products. Limited to 10 items." }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ol", { className: "space-y-2", children: linksItems.map((linkItem, index) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("section", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "hidden w-4 text-sm sm:block", children: index + 1 }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(LinkItemFieldset, { ...linkItem }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  disabled: index === 0,
                  ...import_react34.list.reorder(links4.name, {
                    from: index,
                    to: index > 0 ? index - 1 : index
                  }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_icons_react5.IconArrowMoveUp, { className: "icon-xs" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  disabled: index === linksItems.length - 1,
                  ...import_react34.list.reorder(links4.name, {
                    from: index,
                    to: index < 9 ? index + 1 : index
                  }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_icons_react5.IconArrowMoveDown, { className: "icon-xs" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  ...import_react34.list.replace(links4.name, {
                    index,
                    defaultValue: { url: "", text: "" }
                  }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_icons_react5.IconBackspaceFilled, { className: "icon-xs" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  ...import_react34.list.remove(links4.name, { index }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_icons_react5.IconTrashXFilled, { className: "icon-xs" })
                }
              )
            ] })
          ] }) }, linkItem.key)) }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
            Button,
            {
              size: "sm",
              variant: "secondary",
              disabled: !isAllowAddLink,
              ...import_react34.list.append(links4.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_icons_react5.IconPlus, { className: "icon-xs" }),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: "Add link" })
              ]
            }
          ),
          links4.error && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Alert, { variant: "destructive", id: links4.errorId, children: links4.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-profile-links",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving All Links...",
            children: "Save All Links"
          }
        )
      ]
    }
  ) });
}
function LinkItemFieldset({ ...config }) {
  let ref = (0, import_react32.useRef)(null), { url, text } = (0, import_react34.useFieldset)(ref, config);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("fieldset", { ref, className: "flex w-full gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Input,
      {
        placeholder: "https://example.com",
        className: cn(url.error && "error"),
        ...import_react34.conform.input(url)
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Input,
      {
        placeholder: "Example Name",
        className: cn(text.error && "error"),
        ...import_react34.conform.input(text)
      }
    ) })
  ] });
}
async function action6({ request }) {
  let timer = createTimer(), formData = await request.formData(), parsed = (0, import_react34.parse)(formData), { intent } = parsed.payload;
  if (intent === "update-user-profile-modename") {
    let submission = (0, import_zod10.parse)(formData, { schema: schemaUserProfileModeName });
    if (!submission.value)
      return (0, import_remix_utils8.badRequest)(submission);
    let result = await model.userProfile.mutation.updateModeName(
      submission.value
    );
    return await timer.delay(), result.error ? (0, import_remix_utils8.forbidden)({ ...submission, error: result.error }) : (0, import_node10.json)(submission);
  }
  if (intent === "update-user-profile-headline") {
    let submission = (0, import_zod10.parse)(formData, { schema: schemaUserProfileHeadline });
    if (!submission.value)
      return (0, import_remix_utils8.badRequest)(submission);
    let result = await model.userProfile.mutation.updateHeadline(
      submission.value
    );
    return await timer.delay(), result.error ? (0, import_remix_utils8.forbidden)({ ...submission, error: result.error }) : (0, import_node10.json)(submission);
  }
  if (intent === "update-user-profile-bio") {
    let submission = (0, import_zod10.parse)(formData, { schema: schemaUserProfileBio });
    if (!submission.value)
      return (0, import_remix_utils8.badRequest)(submission);
    let result = await model.userProfile.mutation.updateBio(submission.value);
    return await timer.delay(), result.error ? (0, import_remix_utils8.forbidden)({ ...submission, error: result.error }) : (0, import_node10.json)(submission);
  }
  if (intent === "update-user-profile-links") {
    let submission = (0, import_zod10.parse)(formData, { schema: schemaUserProfileLinks });
    if (!submission.value)
      return (0, import_remix_utils8.badRequest)(submission);
    let result = await model.userProfile.mutation.updateLinks(
      submission.value
    );
    return await timer.delay(), result.error ? (0, import_remix_utils8.forbidden)({ ...submission, error: result.error }) : (0, import_node10.json)(submission);
  }
  return (0, import_node10.json)(parsed);
}

// app/routes/settings.danger.tsx
var settings_danger_exports = {};
__export(settings_danger_exports, {
  action: () => action7,
  default: () => Route10
});
var import_node11 = require("@remix-run/node"), import_react35 = require("@remix-run/react"), import_react36 = require("@conform-to/react");
var import_jsx_runtime40 = require("react/jsx-runtime");
function Route10() {
  let { userData } = useRootLoaderData(), isSubmitting = (0, import_react35.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { children: "Danger" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-muted-foreground", children: "Destructive things." })
    ] }),
    userData && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("section", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(FormLabel, { children: "Delete Personal Account" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(FormDescription, { className: "text-base", children: "Permanently remove your Personal Account and all of its contents from Coachify. This action is not reversible, so please continue with caution." }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        AlertDialogAutoForm,
        {
          method: "DELETE",
          title: `Confirm to Delete "${userData.name}"`,
          description: `Your account with the full name "${userData.name}" and username
                "@${userData.username}" will be permanently deleted and cannot be restored.`,
          trigger: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            Button,
            {
              type: "submit",
              name: "intent",
              variant: "destructive",
              value: "delete-user",
              size: "sm",
              children: "Delete Personal Account"
            }
          ),
          confirmButton: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
            ButtonLoading,
            {
              type: "submit",
              size: "sm",
              variant: "destructive",
              isLoading: isSubmitting,
              disabled: isSubmitting,
              loadingText: `Deleting @${userData.username}...`,
              children: [
                "Delete @",
                userData.username
              ]
            }
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { hidden: !0, name: "id", defaultValue: userData.id })
        }
      )
    ] }) })
  ] });
}
var action7 = async ({ request }) => {
  let submission = (0, import_react36.parse)(await request.formData());
  return await model.user.mutation.deleteById({ id: submission.payload.id }), (0, import_node11.redirect)("/signout?redirectTo=/deleted");
};

// app/routes/settings._index.tsx
var settings_index_exports = {};
__export(settings_index_exports, {
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), loader10 = ({ request }) => (0, import_node12.redirect)("/settings/general");

// app/routes/settings.email.tsx
var settings_email_exports = {};
__export(settings_email_exports, {
  UserEmailForm: () => UserEmailForm,
  action: () => action8,
  default: () => Route11,
  loader: () => loader11
});
var import_node13 = require("@remix-run/node"), import_react37 = require("@remix-run/react"), import_react38 = require("@conform-to/react"), import_zod11 = require("@conform-to/zod"), import_remix_utils9 = require("remix-utils");
var import_jsx_runtime41 = require("react/jsx-runtime"), loader11 = async ({ request }) => {
  let userSession = { id: "temp-user-id" };
  if (!(userSession != null && userSession.id))
    return (0, import_node13.redirect)("/signout");
  let user = await prisma.user.findFirst({
    where: { id: userSession.id },
    select: { id: !0, email: !0 }
  });
  return (0, import_node13.json)({ user });
};
function Route11() {
  let { user } = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h2", { children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-muted-foreground", children: "To communicate with you." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(UserEmailForm, { user }) })
  ] });
}
function UserEmailForm({ user }) {
  let actionData = (0, import_react37.useActionData)(), isSubmitting = (0, import_react37.useNavigation)().state === "submitting", [form, { id: id3, email: email2 }] = (0, import_react38.useForm)({
    shouldValidate: "onSubmit",
    lastSubmission: actionData,
    onValidate({ formData }) {
      return (0, import_zod11.parse)(formData, { schema: schemaUserUpdateEmail });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react37.Form, { ...form.props, replace: !0, method: "PUT", className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "fieldset",
    {
      disabled: isSubmitting,
      className: "space-y-2 disabled:opacity-80",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { hidden: !0, ...import_react38.conform.input(id3), defaultValue: user.id }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(FormField, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(FormLabel, { htmlFor: email2.id, children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(FormDescription, { children: "Use your most active email address, to use to log in with Bearmentor." }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            Input,
            {
              ...import_react38.conform.input(email2),
              type: "email",
              defaultValue: user.email ?? "",
              placeholder: "you@yourname.com"
            }
          ),
          email2.error && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Alert, { variant: "destructive", id: email2.errorId, children: email2.error })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          ButtonLoading,
          {
            name: "intent",
            value: "update-user-email",
            size: "sm",
            disabled: isSubmitting,
            isSubmitting,
            submittingText: "Saving New Email...",
            children: "Save New Email"
          }
        )
      ]
    }
  ) });
}
async function action8({ request }) {
  await delay();
  let userSession = { id: "temp-user-id" };
  if (!(userSession != null && userSession.id))
    return (0, import_node13.redirect)("/signout");
  let formData = await request.formData(), parsed = (0, import_react38.parse)(formData), { intent } = parsed.payload;
  if (intent === "update-user-email") {
    let submission = (0, import_zod11.parse)(formData, { schema: schemaUserUpdateEmail });
    if (!submission.value)
      return (0, import_remix_utils9.badRequest)(submission);
    let result = await model.user.mutation.updateEmail(submission.value);
    return result.error ? (0, import_remix_utils9.forbidden)({ ...submission, error: result.error }) : (0, import_node13.json)(submission);
  }
  return (0, import_node13.json)(parsed);
}

// app/routes/api.user-tags.tsx
var api_user_tags_exports = {};
__export(api_user_tags_exports, {
  loader: () => loader12
});
var import_node14 = require("@remix-run/node");
var loader12 = async ({ request }) => {
  let userTags = await prisma.userTag.findMany({
    include: { users: { select: { username: !0 } } }
  });
  return (0, import_node14.json)({ userTags });
};

// app/routes/api.usernames.tsx
var api_usernames_exports = {};
__export(api_usernames_exports, {
  loader: () => loader13
});
var import_node15 = require("@remix-run/node");
var loader13 = async ({ request }) => {
  let users = await prisma.user.findMany({
    where: { isPublic: !0 },
    select: { username: !0 },
    orderBy: { createdAt: "asc" }
  });
  return (0, import_node15.json)({ users });
};

// app/routes/coach-updated.tsx
var coach_updated_exports = {};
__export(coach_updated_exports, {
  default: () => CoachDashboard
});
var import_react39 = require("react"), import_react40 = require("@remix-run/react"), import_jsx_runtime42 = require("react/jsx-runtime"), COACHING_SYSTEM_PROMPT = `You are FelixGPT, a professional life coach specializing in personal growth, leadership development, and career advancement.

CORE PRINCIPLES:
1. Help clients gain awareness and responsibility through reflection
2. Ask open-ended questions that encourage self-discovery
3. Listen actively and build on previous context
4. Avoid giving long information dumps or lectures
5. Keep responses concise and impactful (2-3 sentences max)
6. Always end with ONE reflective question

COACHING STYLE:
- Be empathetic and supportive
- Challenge gently when appropriate
- Celebrate insights and progress
- Help clients find their own answers
- Build on conversation history to show you're listening

EXAMPLE RESPONSES:
User: "I struggle with confidence at work"
You: "That's a common challenge. Confidence often comes from recognizing past wins. Can you think of a time at work when you felt truly capable and confident? What was different about that situation?"

User: "I want to advance my career"
You: "Career growth is exciting. Before we explore options, what does success look like for you in 3 years? And what's one step you could take this week toward that vision?"

Remember: Your role is to facilitate the client's own insights, not to provide advice. Ask more than you tell.`;
function Icon({ name: name2, className = "w-5 h-5" }) {
  let iconProps = {
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  };
  switch (name2) {
    case "feed":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M3 12h18M3 6h18M3 18h18" }) });
    case "manage":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "documents":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) });
    case "profile":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) });
    case "tracking":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) });
    case "create":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) });
    case "settings":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "coaching":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { ...iconProps, d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }) });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className });
  }
}
function CoachingChat() {
  let fetcher = (0, import_react40.useFetcher)(), [messages, setMessages] = (0, import_react39.useState)([
    {
      role: "system",
      content: COACHING_SYSTEM_PROMPT
    }
  ]), [input, setInput] = (0, import_react39.useState)(""), [loading, setLoading] = (0, import_react39.useState)(!1), messagesEndRef = (0, import_react39.useRef)(null);
  (0, import_react39.useEffect)(() => {
    var _a;
    (_a = messagesEndRef.current) == null || _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]), (0, import_react39.useEffect)(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      let data = fetcher.data;
      data.reply && setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "" }]), setLoading(!1);
    }
  }, [fetcher.state, fetcher.data]);
  let handleSendMessage = (e) => {
    if (e.preventDefault(), !input.trim() || loading)
      return;
    let userMessage = { role: "user", content: input }, updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages), setInput(""), setLoading(!0);
    let formData = new FormData();
    formData.append("messages", JSON.stringify(updatedMessages)), fetcher.submit(formData, { method: "post", action: "/api/coaching" });
  }, displayMessages = messages.filter((m) => m.role !== "system");
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex flex-col h-full max-h-[70vh] bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      displayMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center text-slate-500 dark:text-slate-400 py-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "font-semibold mb-2", children: "Welcome to Coaching Session" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-sm", children: "Share what's on your mind. I'm here to help you gain clarity and take action." })
      ] }) : displayMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "div",
        {
          className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-none"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-sm leading-relaxed", children: msg.content })
        }
      ) }, `msg-${idx}`)),
      loading && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "flex justify-start", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg rounded-bl-none", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { ref: messagesEndRef })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("form", { onSubmit: handleSendMessage, className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "input",
        {
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Share what's on your mind...",
          disabled: loading,
          className: "flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "button",
        {
          type: "submit",
          disabled: loading || !input.trim(),
          className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          children: "Send"
        }
      )
    ] }) })
  ] });
}
function CoachDashboard() {
  let [active, setActive] = (0, import_react39.useState)("feed"), [mobileOpen, setMobileOpen] = (0, import_react39.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("header", { className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react40.Link, { to: "/", className: "inline-flex items-center gap-3 hover:opacity-80 transition-opacity", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/dolphin.svg", alt: "Coachify", className: "w-10 h-10 rounded-xl shadow-lg" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent", children: "Coachify Pro" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "text-xs text-slate-500 dark:text-slate-400 -mt-1", children: "Professional Dashboard" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "button",
        {
          onClick: () => setMobileOpen(!mobileOpen),
          className: "lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg",
          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: `lg:col-span-3 ${mobileOpen ? "block" : "hidden"} lg:block`, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("nav", { className: "space-y-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2", children: [
        { key: "feed", label: "Activity Feed", icon: "feed", badge: 3 },
        { key: "manage", label: "Coaching Management", icon: "manage", badge: 12 },
        { key: "documents", label: "Resources", icon: "documents" },
        { key: "profile", label: "My Profile", icon: "profile" },
        { key: "tracking", label: "Progress Tracking", icon: "tracking" },
        { key: "create", label: "Create Content", icon: "create" },
        { key: "coaching", label: "AI Coaching", icon: "coaching" },
        { key: "settings", label: "Settings", icon: "settings" }
      ].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
        "button",
        {
          onClick: () => {
            setActive(tab.key), setMobileOpen(!1);
          },
          className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${active === tab.key ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Icon, { name: tab.icon, className: "w-5 h-5" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "flex-1 text-left", children: tab.label }),
            tab.badge && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "bg-red-500 text-white text-xs px-2 py-1 rounded-full", children: tab.badge })
          ]
        },
        tab.key
      )) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "lg:col-span-9", children: active === "coaching" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { className: "text-2xl font-bold mb-4 text-slate-900 dark:text-white", children: "AI Coaching Session" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "Connect with FelixGPT for personalized coaching that remembers your journey and asks powerful questions." }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CoachingChat, {})
      ] }) : active === "feed" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ActivityFeedContent, {}) : active === "manage" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ManagementContent, {}) : active === "documents" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DocumentsContent, {}) : active === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ProfileContent, {}) : active === "tracking" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TrackingContent, {}) : active === "create" ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CreateContent, {}) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(SettingsContent, {}) })
    ] }) })
  ] });
}
function ActivityFeedContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: "Activity Feed" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-3xl mb-2", children: "\u{1F4CA}" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h3", { className: "font-semibold mb-1", children: "Active Clients" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "42 clients this month" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-3xl mb-2", children: "\u2705" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h3", { className: "font-semibold mb-1", children: "Goals Achieved" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "128 this quarter" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-3xl mb-2", children: "\u2B50" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h3", { className: "font-semibold mb-1", children: "Average Rating" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "4.9/5.0 stars" })
      ] })
    ] })
  ] });
}
function ManagementContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: "Coaching Management" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-slate-600 dark:text-slate-400", children: "Manage your coaching sessions and client relationships." })
  ] });
}
function DocumentsContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-4xl mb-2", children: "\u{1F4DA}" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "Documents and resources management interface" })
  ] });
}
function ProfileContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-4xl mb-2", children: "\u{1F464}" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "Profile management interface" })
  ] });
}
function TrackingContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-4xl mb-2", children: "\u{1F4C8}" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "Progress tracking and analytics dashboard" })
  ] });
}
function CreateContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-4xl mb-2", children: "\u2728" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "Content creation workspace" })
  ] });
}
function SettingsContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-4xl mb-2", children: "\u2699\uFE0F" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "Settings configuration panel" })
  ] });
}

// app/routes/settings.tags.tsx
var settings_tags_exports = {};
__export(settings_tags_exports, {
  action: () => action9,
  default: () => Route12,
  loader: () => loader14
});
var import_node16 = require("@remix-run/node"), import_react41 = require("@remix-run/react");
var import_jsx_runtime43 = require("react/jsx-runtime"), loader14 = async ({ request }) => {
  let userId = "temp-user-id", [user, userTags] = await prisma.$transaction([
    prisma.user.findFirst({
      where: { id: userId },
      select: { id: !0, username: !0, tags: !0 }
    }),
    model.userTag.query.getAll()
  ]);
  return userTags || (userTags = []), (0, import_node16.json)({
    user: user || { id: userId, username: "temp-user", tags: [] },
    userTags
  });
};
function Route12() {
  let { user } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "w-full space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h2", { children: "Tags" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-muted-foreground", children: "To communicate with you." }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Button, { asChild: !0, size: "xs", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react41.Link, { to: "/profile", children: [
        "Go to your profile @",
        user == null ? void 0 : user.username
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(UserTagsForm, {}) })
  ] });
}
async function action9({ request }) {
  await delay();
  let formData = await request.formData(), id3 = String(formData.get("id")), tagsRaw = formData.get("tags"), tags3 = tagsRaw ? JSON.parse(String(tagsRaw)) : [];
  return await model.user.mutation.updateTags({ id: id3, tags: tags3 }), null;
}

// app/routes/signup-choice.tsx
var signup_choice_exports = {};
__export(signup_choice_exports, {
  default: () => SignupChoice
});
var import_react44 = require("react"), import_react45 = require("@remix-run/react"), import_icons_react8 = require("@tabler/icons-react");

// app/routes/signup.coach.tsx
var signup_coach_exports = {};
__export(signup_coach_exports, {
  action: () => action10,
  default: () => CoachSignup
});
var import_node17 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_icons_react6 = require("@tabler/icons-react");
var import_jsx_runtime44 = require("react/jsx-runtime");
async function processDiplomaFile(file) {
  if (!file || typeof file != "object" || typeof file.arrayBuffer != "function")
    return { savedPath: null };
  let { writeFile, mkdir: mkdir2 } = require("node:fs/promises"), path2 = require("node:path"), allowed = ["application/pdf", "image/jpeg", "image/jpg"], mime = file.type || "";
  if (!allowed.includes(mime))
    throw new Error("Diploma must be a PDF or JPG/JPEG");
  let buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length > 8 * 1024 * 1024)
    throw new Error("Diploma must be smaller than 8MB");
  let uploadsDir = path2.join(process.cwd(), "logs", "diplomas");
  await mkdir2(uploadsDir, { recursive: !0 });
  let ext = mime === "application/pdf" ? "pdf" : "jpg", fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`, outPath = path2.join(uploadsDir, fileName);
  return await writeFile(outPath, buffer), { savedPath: outPath, fileName, email: "" };
}
async function sendEmailNotification(email2, fileName, filePath) {
  try {
    let nodemailer = require("nodemailer"), host = process.env.SMTP_HOST, port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : void 0, user = process.env.SMTP_USER, pass = process.env.SMTP_PASS;
    if (!host || !port || !user || !pass)
      return;
    await nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    }).sendMail({
      from: user,
      to: "kwitondafelix6@gmail.com",
      subject: "New coach diploma submission",
      text: `A new diploma was submitted by ${email2}.`,
      attachments: [{ filename: fileName, path: filePath }]
    });
  } catch {
  }
}
async function action10({ request }) {
  if (request.method !== "POST")
    return (0, import_node17.json)({ ok: !1, error: "Method not allowed" }, { status: 405 });
  try {
    let form = await request.formData(), email2 = String(form.get("email") || "").trim(), password2 = String(form.get("password") || ""), confirm = String(form.get("confirm") || ""), diploma = form.get("diploma");
    if (!email2 || !password2)
      return (0, import_node17.json)({ ok: !1, error: "Email and password are required" }, { status: 400 });
    if (password2 !== confirm)
      return (0, import_node17.json)({ ok: !1, error: "Passwords do not match" }, { status: 400 });
    let savedPath = null, fileName = "";
    if (diploma) {
      let result = await processDiplomaFile(diploma);
      savedPath = result.savedPath, fileName = result.fileName || "", savedPath && fileName && await sendEmailNotification(email2, fileName, savedPath);
    }
    return (0, import_node17.json)({ ok: !0, message: "Coach signup received! We'll review your diploma shortly.", savedPath });
  } catch (err) {
    return (0, import_node17.json)({ ok: !1, error: String(err) }, { status: 500 });
  }
}
function CoachSignup({ onClose } = {}) {
  let data = (0, import_react42.useActionData)(), submitting = (0, import_react42.useNavigation)().state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full -translate-y-32 translate-x-32" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-emerald-200/20 dark:from-blue-800/10 dark:to-emerald-800/10 rounded-full translate-y-24 -translate-x-24" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("header", { className: "mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("img", { src: "/images/dolphin.svg", alt: "Coachify", className: "w-12 h-12 rounded-2xl shadow-lg" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent", children: "Coach Application" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-slate-600 dark:text-slate-400 text-sm mt-1", children: "Join our platform of professional mentors" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ThemeSwitcher, {})
        ] }),
        onClose ? /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          "button",
          {
            onClick: onClose,
            className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors group mb-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
              "Back to account types"
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          import_react42.Link,
          {
            to: "/signup",
            className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors group mb-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
              "Back to account types"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h3", { className: "font-semibold text-amber-800 dark:text-amber-200 text-sm", children: "Thesis Testing Mode" }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-amber-700 dark:text-amber-300 text-xs mt-1", children: "Signup functionality is disabled. Use the skip button below to continue testing the application." })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react42.Form, { method: "post", encType: "multipart/form-data", className: "space-y-6", onSubmit: (e) => {
        e.preventDefault(), console.log("Form submission disabled for thesis testing"), alert("Signup functionality is disabled for thesis testing. Use the 'Skip for Testing' button to continue.");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "grid grid-cols-1 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("label", { htmlFor: "email", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Email address",
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                required: !0,
                placeholder: "your@email.com",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("label", { htmlFor: "password", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Password",
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                required: !0,
                minLength: 8,
                placeholder: "At least 8 characters",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("label", { htmlFor: "confirm", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Confirm password",
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "input",
              {
                id: "confirm",
                name: "confirm",
                type: "password",
                required: !0,
                minLength: 8,
                placeholder: "Re-enter your password",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { htmlFor: "diploma", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: "Upload your diploma" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-xs text-slate-500 dark:text-slate-400 mb-3", children: "PDF or JPG/JPEG format, max 8MB (Required for coach verification)" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                "input",
                {
                  id: "diploma",
                  name: "diploma",
                  type: "file",
                  accept: ".pdf,image/jpeg,image/jpg",
                  className: "w-full px-4 py-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800/50 cursor-not-allowed opacity-50 transition-all",
                  disabled: !0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-slate-400 dark:text-slate-500 text-sm", children: "Upload disabled for testing" }) })
            ] })
          ] })
        ] }),
        (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "rounded-xl bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300", children: data.error })
        ] }) }),
        (data == null ? void 0 : data.ok) && data.message && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "rounded-xl bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-sm text-green-700 dark:text-green-300", children: data.message })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "space-y-4 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            "button",
            {
              type: "submit",
              disabled: !0,
              className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed text-white font-semibold shadow-lg opacity-60 transition-all duration-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }),
                "Signup Disabled (Thesis Testing)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            import_react42.Link,
            {
              to: "/coach",
              className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-5 h-5 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) }),
                "Skip for Testing - Continue to Dashboard"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            import_react42.Link,
            {
              to: "/coach",
              className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors",
              children: [
                "Or skip directly to dashboard",
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("footer", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("p", { className: "text-slate-500 dark:text-slate-400 text-xs", children: [
        "By creating an account you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react42.Link, { to: "/terms", className: "text-emerald-600 dark:text-emerald-400 hover:underline font-medium", children: "Terms & Conditions" }),
        " ",
        "and",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react42.Link, { to: "/privacy", className: "text-emerald-600 dark:text-emerald-400 hover:underline font-medium", children: "Privacy Policy" }),
        "."
      ] }) })
    ] })
  ] }) }) });
}

// app/routes/signup.user.tsx
var signup_user_exports = {};
__export(signup_user_exports, {
  action: () => action11,
  default: () => CoacheeSignup
});
var import_node18 = require("@remix-run/node"), import_react43 = require("@remix-run/react"), import_icons_react7 = require("@tabler/icons-react");
var import_jsx_runtime45 = require("react/jsx-runtime");
async function action11({ request }) {
  if (request.method !== "POST")
    return (0, import_node18.json)({ ok: !1, error: "Method not allowed" }, { status: 405 });
  try {
    let form = await request.formData(), email2 = String(form.get("email") || "").trim(), password2 = String(form.get("password") || ""), confirm = String(form.get("confirm") || "");
    return !email2 || !password2 ? (0, import_node18.json)({ ok: !1, error: "Email and password are required" }, { status: 400 }) : password2 !== confirm ? (0, import_node18.json)({ ok: !1, error: "Passwords do not match" }, { status: 400 }) : (0, import_node18.json)({ ok: !0, message: "Coachee account signup received! You can now explore mentors and book sessions." });
  } catch (err) {
    return (0, import_node18.json)({ ok: !1, error: String(err) }, { status: 500 });
  }
}
function CoacheeSignup() {
  let data = (0, import_react43.useActionData)(), submitting = (0, import_react43.useNavigation)().state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-full max-w-lg", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-emerald-200/20 dark:from-blue-800/10 dark:to-emerald-800/10 rounded-full -translate-y-32 translate-x-32" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full translate-y-24 -translate-x-24" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("header", { className: "mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/dolphin.svg", alt: "Coachify", className: "w-12 h-12 rounded-2xl shadow-lg" }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h1", { className: "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent", children: "Coachee Registration" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-slate-600 dark:text-slate-400 text-sm mt-1", children: "Start your growth journey with expert mentors" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ThemeSwitcher, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
          import_react43.Link,
          {
            to: "/signup",
            className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors group mb-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
              "Back to account types"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h3", { className: "font-semibold text-amber-800 dark:text-amber-200 text-sm", children: "Thesis Testing Mode" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-amber-700 dark:text-amber-300 text-xs mt-1", children: "Signup functionality is disabled. Use the skip button below to continue testing the application." })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_react43.Form, { method: "post", className: "space-y-6", onSubmit: (e) => {
        e.preventDefault(), console.log("Form submission disabled for thesis testing"), alert("Signup functionality is disabled for thesis testing. Use the 'Skip for Testing' button to continue.");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "grid grid-cols-1 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("label", { htmlFor: "email", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Email address",
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                required: !0,
                placeholder: "your@email.com",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("label", { htmlFor: "password", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Password",
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                required: !0,
                minLength: 8,
                placeholder: "At least 8 characters",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("label", { htmlFor: "confirm", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Confirm password",
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "input",
              {
                id: "confirm",
                name: "confirm",
                type: "password",
                required: !0,
                minLength: 8,
                placeholder: "Re-enter your password",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !0
              }
            )
          ] })
        ] }),
        (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "rounded-xl bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300", children: data.error })
        ] }) }),
        (data == null ? void 0 : data.ok) && data.message && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "rounded-xl bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm text-green-700 dark:text-green-300", children: data.message })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "space-y-4 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
            "button",
            {
              type: "submit",
              disabled: !0,
              className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed text-white font-semibold shadow-lg opacity-60 transition-all duration-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }),
                "Signup Disabled (Thesis Testing)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
            import_react43.Link,
            {
              to: "/coachee",
              className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-5 h-5 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) }),
                "Skip for Testing - Continue to Dashboard"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
            import_react43.Link,
            {
              to: "/coachee",
              className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors",
              children: [
                "Or skip directly to dashboard",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("footer", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text-slate-500 dark:text-slate-400 text-xs mb-4", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react43.Link, { to: "/signin", className: "text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors", children: "Sign in here" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text-slate-400 dark:text-slate-500 text-xs", children: [
          "By creating an account you agree to our",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react43.Link, { to: "/terms", className: "text-blue-600 dark:text-blue-400 hover:underline font-medium", children: "Terms & Conditions" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react43.Link, { to: "/privacy", className: "text-blue-600 dark:text-blue-400 hover:underline font-medium", children: "Privacy Policy" }),
          "."
        ] })
      ] })
    ] })
  ] }) }) });
}

// app/routes/signup-choice.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
function SignupChoice() {
  let [open, setOpen] = (0, import_react44.useState)(null), [isTransitioning, setIsTransitioning] = (0, import_react44.useState)(!1), handleCardClick = (type) => {
    setIsTransitioning(!0), setTimeout(() => {
      setOpen(type), setIsTransitioning(!1);
    }, 300);
  }, handleClose = () => {
    setIsTransitioning(!0), setTimeout(() => {
      setOpen(null), setIsTransitioning(!1);
    }, 300);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(HeaderNavigation2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 lg:p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full -translate-y-32 translate-x-32" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-emerald-200/20 dark:from-blue-800/10 dark:to-emerald-800/10 rounded-full translate-y-24 -translate-x-24" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("header", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("img", { src: "/images/dolphin.svg", alt: "Coachify", className: "w-14 h-14 rounded-2xl shadow-lg" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent", children: "Join Coachify" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mt-1 text-lg", children: "Start your transformation journey" })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ThemeSwitcher, {}),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_react45.Link,
              {
                to: "/signin",
                className: "px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
                children: "Sign In"
              }
            )
          ] })
        ] }),
        (() => open === "coach" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `space-y-6 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-300`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: "Coach Application" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: "Start your professional coaching journey" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                import_react45.Link,
                {
                  to: "/signup/coach",
                  className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "Open Full Page" }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                "button",
                {
                  onClick: handleClose,
                  className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
                  "aria-label": "Close form",
                  children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-5 h-5 text-slate-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CoachSignup, { onClose: handleClose })
        ] }) : open === "user" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `space-y-6 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-300`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: "Coachee Registration" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: "Begin your growth journey" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                import_react45.Link,
                {
                  to: "/signup/user",
                  className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "Open Full Page" }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                "button",
                {
                  onClick: handleClose,
                  className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
                  "aria-label": "Close form",
                  children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-5 h-5 text-slate-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CoacheeSignup, {})
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: `mt-8 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-300`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-xl font-semibold text-slate-900 dark:text-white mb-2", children: "Choose Your Path to Growth" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 max-w-md mx-auto", children: "Select the account type that matches your goals and start your journey today" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
              "div",
              {
                onClick: () => handleCardClick("coach"),
                className: "group cursor-pointer relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "pr-16", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-3", children: "Professional Coach" }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mb-6 leading-relaxed", children: "Guide others to success with your expertise. Build your coaching practice, connect with clients, and create meaningful impact through personalized mentorship." }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "space-y-3 mb-6", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-emerald-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Verified certification process" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-emerald-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Client management tools" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-emerald-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Session scheduling system" })
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { className: "inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors", children: [
                        "Apply as Coach",
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-4 h-4 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                        import_react45.Link,
                        {
                          to: "/signup/coach",
                          onClick: (e) => e.stopPropagation(),
                          className: "text-xs text-emerald-600 dark:text-emerald-400 hover:underline hidden sm:block",
                          children: "Open full page"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
              "div",
              {
                onClick: () => handleCardClick("user"),
                className: "group cursor-pointer relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "pr-16", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-3", children: "Growth Seeker" }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-slate-600 dark:text-slate-400 mb-6 leading-relaxed", children: "Accelerate your personal and professional development. Find the perfect mentor, book personalized sessions, and achieve your goals with expert guidance." }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "space-y-3 mb-6", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Personalized coach matching" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Flexible session booking" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-3 text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-slate-700 dark:text-slate-300", children: "Progress tracking tools" })
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors", children: [
                        "Join as Coachee",
                        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { className: "w-4 h-4 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                        import_react45.Link,
                        {
                          to: "/signup/user",
                          onClick: (e) => e.stopPropagation(),
                          className: "text-xs text-blue-600 dark:text-blue-400 hover:underline hidden sm:block",
                          children: "Open full page"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "sm:hidden mt-6 grid grid-cols-1 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_react45.Link,
              {
                to: "/signup/coach",
                className: "px-4 py-3 text-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors",
                children: "Open Coach Signup (Full Page)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_react45.Link,
              {
                to: "/signup/user",
                className: "px-4 py-3 text-center bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors",
                children: "Open Coachee Signup (Full Page)"
              }
            )
          ] })
        ] }))(),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("footer", { className: "mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            import_react45.Link,
            {
              to: "/signin",
              className: "text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors",
              children: "Sign in here"
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}
function HeaderNavigation2() {
  let navigate = (0, import_react45.useNavigate)(), handleFeedback = () => {
    window.open("/feedback", "_blank", "width=600,height=700");
  }, handleQuit = () => {
    typeof window < "u" && (window.location.href = "about:blank", window.close(), setTimeout(() => navigate("/"), 100));
  }, navMainItems2 = [
    {
      to: "/",
      text: "Dashboard",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconDashboard, { className: "icon" })
    },
    {
      to: "/felix",
      text: "Chat with AI Coach",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconRobot, { className: "icon" })
    },
    {
      to: "/search",
      text: "Search",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconSearch, { className: "icon" })
    },
    {
      to: "/signup-choice",
      text: "Continue to Coachify Platform",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconArrowRight, { className: "icon" })
    }
  ], actionItems = [
    {
      to: "#",
      text: "Feedback",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconMessage, { className: "icon" }),
      action: handleFeedback
    },
    {
      to: "#",
      text: "Quit",
      icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_icons_react8.IconLogout, { className: "icon" }),
      action: handleQuit
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "header",
    {
      className: cn(
        "z-10 select-none",
        "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950",
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("nav", { className: "w-full max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("ul", { className: "flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(NavigationList2, { navItems: navMainItems2 }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(NavigationList2, { navItems: actionItems })
      ] }) }) })
    }
  );
}
function NavigationList2({ navItems }) {
  let isScreenLarge = useScreenLarge();
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    TooltipAuto,
    {
      content: navItem.text,
      className: "hidden lg:block",
      side: isScreenLarge ? "right" : "top",
      children: navItem.action ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        "button",
        {
          onClick: navItem.action,
          className: cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200 w-full",
            "text-stone-600 dark:text-stone-400",
            "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
            navItem.text === "Quit" && "hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/50 dark:hover:text-red-100"
          ),
          children: navItem.icon
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        import_react45.NavLink,
        {
          to: navItem.to,
          className: ({ isActive }) => cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200",
            "text-stone-600 dark:text-stone-400",
            isActive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/70" : "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100"
          ),
          children: navItem.icon
        }
      )
    }
  ) }, navItem.text)) });
}

// server-entry-module:@remix-run/dev/server-build
var route20 = __toESM(require_api_coaching());

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader15
});
var import_node19 = require("@remix-run/node");
async function loader15({ request }) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL(
      "/",
      `https://${host}`
    );
    return await Promise.all([
      prisma.user.findFirst(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), (0, import_node19.json)({
      message: "\u2705 Health Check",
      success: !0
    });
  } catch (error) {
    return console.info("\u274C Health Check", { error }), new Response("ERROR", { status: 500 /* INTERNAL_SERVER_ERROR */ });
  }
}

// app/routes/broadcasts.tsx
var broadcasts_exports = {};
__export(broadcasts_exports, {
  default: () => Route13
});
var import_react46 = require("@remix-run/react"), import_jsx_runtime47 = require("react/jsx-runtime");
function Route13() {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react46.Outlet, {});
}

// app/routes/api.users.tsx
var api_users_exports = {};
__export(api_users_exports, {
  loader: () => loader16
});
var import_node20 = require("@remix-run/node");
var loader16 = async ({ request }) => {
  let users = await prisma.user.findMany({
    where: { isPublic: !0 },
    select: {
      id: !0,
      name: !0,
      username: !0,
      avatars: { select: { url: !0 } },
      role: { select: { symbol: !0 } },
      profiles: { select: { headline: !0, links: !0 } }
    },
    orderBy: { createdAt: "asc" }
  });
  return (0, import_node20.json)({ users });
};

// app/routes/feedback.tsx
var feedback_exports = {};
__export(feedback_exports, {
  action: () => action12,
  default: () => FeedbackPage
});
var import_react47 = require("react"), import_node21 = require("@remix-run/node"), import_react48 = require("@remix-run/react");
var import_icons_react9 = require("@tabler/icons-react");
var import_jsx_runtime48 = require("react/jsx-runtime");
async function action12({ request }) {
  if (request.method !== "POST")
    return (0, import_node21.json)({ ok: !1, error: "Method not allowed" }, { status: 405 });
  try {
    let form = await request.formData(), name2 = String(form.get("name") || "").trim(), email2 = String(form.get("email") || "").trim(), subject = String(form.get("subject") || "").trim(), message = String(form.get("message") || "").trim();
    if (!name2 || !email2 || !subject || !message)
      return (0, import_node21.json)({ ok: !1, error: "All fields are required" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2))
      return (0, import_node21.json)({ ok: !1, error: "Please enter a valid email address" }, { status: 400 });
    try {
      let { writeFile, mkdir: mkdir2 } = require("node:fs/promises"), path2 = require("node:path"), feedbackDir = path2.join(process.cwd(), "logs", "feedback");
      await mkdir2(feedbackDir, { recursive: !0 });
      let timestamp = (/* @__PURE__ */ new Date()).toISOString(), fileName = `feedback-${Date.now()}.json`, filePath = path2.join(feedbackDir, fileName);
      return await writeFile(filePath, JSON.stringify({
        timestamp,
        name: name2,
        email: email2,
        subject,
        message
      }, null, 2), { encoding: "utf8" }), console.log("Feedback received:", { name: name2, email: email2, subject, message }), (0, import_node21.json)({
        ok: !0,
        message: `Thank you ${name2}! Your feedback has been received. We'll get back to you shortly at ${email2}.`
      });
    } catch (fileErr) {
      return console.error("Error saving feedback:", fileErr), (0, import_node21.json)({
        ok: !0,
        message: `Thank you ${name2}! Your feedback has been received. We'll get back to you shortly at ${email2}.`
      });
    }
  } catch (err) {
    return (0, import_node21.json)({ ok: !1, error: String(err) }, { status: 500 });
  }
}
function FeedbackPage() {
  let data = (0, import_react48.useActionData)(), submitting = (0, import_react48.useNavigation)().state !== "idle", [formData, setFormData] = (0, import_react47.useState)({ name: "", email: "", subject: "", message: "" }), handleChange = (e) => {
    let { name: name2, value } = e.target;
    setFormData((prev) => ({ ...prev, [name2]: value }));
  }, handleSubmit = (e) => {
    submitting && e.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(HeaderNavigation3, {}),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("header", { className: "border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
        import_react48.Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconArrowLeft, { className: "w-5 h-5" }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-sm font-medium", children: "Back" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(ThemeSwitcher, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "lg:col-span-1 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h1", { className: "text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent", children: "Get in Touch" }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-slate-600 dark:text-slate-400 text-sm mt-2", children: "We'd love to hear from you. Send us a message and we'll respond as soon as possible." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-4", children: "Contact Methods" }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
              "a",
              {
                href: "mailto:kwitondafelix6@gmail.com",
                className: "group flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconMail, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Email" }),
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: "kwitondafelix6@gmail.com" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
              "a",
              {
                href: "https://wa.me/821021597173?text=Hi%20Felix%2C%20I%20have%20feedback%20for%20you...",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconBrandWhatsapp, { className: "w-5 h-5 text-green-600 dark:text-green-400" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "WhatsApp" }),
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors", children: "+82 10 2159 7173" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-800/50", children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                "svg",
                {
                  className: "w-5 h-5 text-amber-600 dark:text-amber-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Response Time" }),
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400", children: "Usually within 24 hours" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h2", { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-6", children: "Send us Your Feedback" }),
        (data == null ? void 0 : data.ok) && data.message && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconCheck, { className: "w-4 h-4 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "font-medium text-green-800 dark:text-green-200", children: "Feedback Sent!" }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-green-700 dark:text-green-300 mt-1", children: data.message })
          ] })
        ] }),
        (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconX, { className: "w-4 h-4 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "font-medium text-red-800 dark:text-red-200", children: "Error" }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300 mt-1", children: data.error })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_react48.Form, { method: "post", className: "space-y-5", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("label", { htmlFor: "name", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Your Name ",
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                placeholder: "John Doe",
                required: !0,
                className: "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("label", { htmlFor: "email", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Your Email ",
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "you@example.com",
                required: !0,
                className: "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("label", { htmlFor: "subject", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Subject ",
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              "input",
              {
                type: "text",
                id: "subject",
                name: "subject",
                value: formData.subject,
                onChange: handleChange,
                placeholder: "How can we help?",
                required: !0,
                className: "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("label", { htmlFor: "message", className: "block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2", children: [
              "Message ",
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              "textarea",
              {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                placeholder: "Tell us your thoughts, suggestions, or report an issue...",
                required: !0,
                rows: 6,
                className: "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
            "button",
            {
              type: "submit",
              disabled: submitting,
              className: "w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2",
              children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                "Sending..."
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconMail, { className: "w-5 h-5" }),
                "Send Feedback"
              ] })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs text-slate-500 dark:text-slate-400 text-center", children: "We respect your privacy. Your feedback helps us improve our service." })
        ] })
      ] }) })
    ] }) })
  ] });
}
function HeaderNavigation3() {
  let navigate = (0, import_react48.useNavigate)(), isScreenLarge = useScreenLarge(), handleFeedback = () => {
    console.log("Feedback clicked");
  }, handleQuit = () => {
    navigate("/");
  }, navMainItems2 = [
    {
      to: "/",
      text: "Dashboard",
      icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconDashboard, { className: "icon" })
    },
    {
      to: "/felix",
      text: "Chat with AI Coach",
      icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconRobot, { className: "icon" })
    },
    {
      to: "/signup-choice",
      text: "Continue to Coachify Platform",
      icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconArrowRight, { className: "icon" })
    }
  ], actionItems = [
    {
      to: "#",
      text: "Feedback",
      icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconMessage, { className: "icon" }),
      action: handleFeedback
    },
    {
      to: "#",
      text: "Quit",
      icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_icons_react9.IconLogout, { className: "icon" }),
      action: handleQuit
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    "header",
    {
      className: cn(
        "z-10 select-none",
        "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950",
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("nav", { className: "w-full max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("ul", { className: "flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(NavigationList3, { navItems: navMainItems2, isScreenLarge }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(NavigationList3, { navItems: actionItems, isScreenLarge })
      ] }) }) })
    }
  );
}
function NavigationList3({ navItems, isScreenLarge }) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex lg:flex-col gap-0 sm:gap-2", children: navItems.map((navItem) => {
    let classes = cn(
      "inline-flex lg:flex items-center justify-center lg:justify-start",
      "gap-0 lg:gap-3 px-2 sm:px-4 lg:px-4 py-2 sm:py-3 lg:py-3",
      "rounded-lg text-xs sm:text-sm font-medium",
      "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800",
      "transition-all duration-200"
    );
    return navItem.action ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(TooltipAuto, { text: navItem.text, side: isScreenLarge ? "right" : "top", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
      "button",
      {
        onClick: navItem.action,
        className: classes,
        children: [
          navItem.icon,
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "hidden lg:inline", children: navItem.text })
        ]
      }
    ) }) }, navItem.text) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(TooltipAuto, { text: navItem.text, side: isScreenLarge ? "right" : "top", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
      import_react48.Link,
      {
        to: navItem.to,
        className: classes,
        children: [
          navItem.icon,
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "hidden lg:inline", children: navItem.text })
        ]
      }
    ) }) }, navItem.text);
  }) });
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  SidebarNav: () => SidebarNav,
  action: () => action13,
  default: () => Route14,
  loader: () => loader17,
  meta: () => meta3,
  settingsNavItems: () => settingsNavItems
});
var import_react49 = require("@remix-run/react");
var import_jsx_runtime49 = require("react/jsx-runtime"), meta3 = () => [
  { title: formatTitle("User Settings") },
  {
    name: "description",
    content: "Setup your \u{1F43B} Bearmentor user account."
  }
], settingsNavItems = [
  { title: "General", to: "/settings/general" },
  { title: "Profile", to: "/settings/profile" },
  { title: "Tags", to: "/settings/tags" },
  { title: "Email", to: "/settings/email" },
  { title: "Password", to: "/settings/password" },
  { title: "Danger", to: "/settings/danger" }
  // { title: "Account", to: "/settings/account" },
  // { title: "Appearance", to: "/settings/appearance" },
  // { title: "Notifications", to: "/settings/notifications" },
], loader17 = async ({ request }) => null;
function Route14() {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(Layout, { className: "px-4 sm:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("header", { className: "py-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react49.Link, { to: "/settings", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "hover-opacity text-brand", children: "Settings" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "text-muted-foreground", children: "Manage your account settings and set e-mail preferences." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex max-w-4xl flex-col gap-8 sm:-mx-4 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("aside", { className: "w-full overflow-visible sm:block sm:max-w-[240px]", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SidebarNav, { items: settingsNavItems }) }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react49.Outlet, {})
    ] })
  ] });
}
function SidebarNav({ className, items, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    "nav",
    {
      className: cn("flex w-full gap-2 overflow-auto sm:flex-col", className),
      ...props,
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_react49.NavLink,
        {
          to: item.to,
          className: ({ isActive }) => cn(
            buttonVariants({ variant: "ghost" }),
            isActive ? "bg-emerald-950 hover:bg-emerald-900" : "hover:bg-muted",
            "justify-start"
          ),
          children: item.title
        },
        item.to
      ))
    }
  );
}
var action13 = async ({ request }) => (await delay(), null);

// app/routes/coachee.tsx
var coachee_exports = {};
__export(coachee_exports, {
  default: () => CoacheeFeed
});
var import_react50 = require("react"), import_react51 = require("@remix-run/react"), import_jsx_runtime50 = require("react/jsx-runtime"), MOTIVATIONAL_QUOTES = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life.",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "The only impossible journey is the one you never begin. - Tony Robbins"
], COACHING_BOOKS = [
  { title: "Atomic Habits", author: "James Clear", cover: "/images/books/atomic-habits.jpg" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", cover: "/images/books/7-habits.jpg" },
  { title: "Mindset", author: "Carol Dweck", cover: "/images/books/mindset.jpg" },
  { title: "The Power of Now", author: "Eckhart Tolle", cover: "/images/books/power-of-now.jpg" },
  { title: "Daring Greatly", author: "Bren\xE9 Brown", cover: "/images/books/daring-greatly.jpg" },
  { title: "Start with Why", author: "Simon Sinek", cover: "/images/books/start-with-why.jpg" }
], MOTIVATIONAL_IMAGES = [
  "/images/11.jpg",
  "/images/22.webp",
  "/images/33.jpg",
  "/images/44.webp",
  "/images/55.jpg",
  "/images/66.webp",
  "/images/77.webp"
];
function CoacheeFeed() {
  let [posts, setPosts] = (0, import_react50.useState)([]), [stories, setStories] = (0, import_react50.useState)([]), [currentSlide, setCurrentSlide] = (0, import_react50.useState)(0), touchStartX = (0, import_react50.useRef)(0), touchEndX = (0, import_react50.useRef)(0);
  (0, import_react50.useEffect)(() => {
    let generatedPosts = Array.from({ length: 12 }).map((_, i) => {
      let imageCount = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 2 : 1;
      return {
        id: i + 1,
        author: `coach_${["alex", "sarah", "mike", "jessica", "david", "lisa"][i % 6]}_${i + 1}`,
        authorName: ["Alex Thompson", "Sarah Chen", "Mike Rodriguez", "Jessica Williams", "David Kim", "Lisa Anderson"][i % 6],
        avatar: `/images/avatars/avatar-${i % 6 + 1}.jpg`,
        images: Array.from({ length: imageCount }).map(
          (_2, imgIndex) => MOTIVATIONAL_IMAGES[(i + imgIndex) % MOTIVATIONAL_IMAGES.length]
        ),
        caption: MOTIVATIONAL_QUOTES[i % MOTIVATIONAL_QUOTES.length],
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50),
        timeAgo: `${Math.floor(Math.random() * 12) + 1}h ago`,
        isLiked: Math.random() > 0.7,
        isBookmarked: Math.random() > 0.8,
        type: Math.random() > 0.5 ? "motivation" : "book_recommendation",
        book: COACHING_BOOKS[i % COACHING_BOOKS.length]
      };
    }), generatedStories = Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      name: ["leadership_expert", "mindset_coach", "career_guru", "life_designer", "growth_master", "success_mentor"][i % 6],
      displayName: ["Leadership Pro", "Mindset Coach", "Career Guru", "Life Designer", "Growth Master", "Success Mentor"][i % 6],
      avatar: `/images/avatars/story-${i % 6 + 1}.jpg`,
      hasNewStory: Math.random() > 0.3,
      isLive: Math.random() > 0.8
    }));
    setPosts(generatedPosts), setStories(generatedStories);
  }, []);
  let handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  }, handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  }, handleTouchEnd = (_post, totalSlides) => {
    if (!touchStartX.current || !touchEndX.current)
      return;
    let difference = touchStartX.current - touchEndX.current, isLeftSwipe = difference > 50, isRightSwipe = difference < -50;
    isLeftSwipe && currentSlide < totalSlides - 1 ? setCurrentSlide((prev) => prev + 1) : isRightSwipe && currentSlide > 0 && setCurrentSlide((prev) => prev - 1), touchStartX.current = 0, touchEndX.current = 0;
  }, toggleLike = (postId) => {
    setPosts((prev) => prev.map(
      (post) => post.id === postId ? {
        ...post,
        isLiked: !post.isLiked,
        likes: post.isLiked ? post.likes - 1 : post.likes + 1
      } : post
    ));
  }, toggleBookmark = (postId) => {
    setPosts((prev) => prev.map(
      (post) => post.id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post
    ));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("header", { className: "sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "max-w-2xl mx-auto px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-white font-bold text-sm", children: "C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { className: "font-bold text-xl bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent", children: "Coachify Feed" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react51.Link, { to: "/search", className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-5 h-5 text-slate-600 dark:text-slate-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          import_react51.Link,
          {
            to: "/create",
            className: "px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200",
            children: "Create"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("main", { className: "max-w-2xl mx-auto pb-20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("section", { className: "border-b border-slate-200 dark:border-slate-800 pb-4 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300", children: "Stories" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Watch all" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex gap-4 overflow-x-auto pb-2 scrollbar-hide", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-shrink-0 w-20 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center mx-auto border-2 border-dashed border-slate-300 dark:border-slate-600", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-6 h-6 text-slate-500 dark:text-slate-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full border-2 border-white dark:border-slate-900", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-full bg-emerald-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-3 h-3 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 mt-1 truncate", children: "Your story" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-shrink-0 w-20 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-16 h-16 rounded-full p-0.5 mx-auto bg-gradient-to-tr from-blue-500 to-emerald-500 border-2 border-blue-400", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-full rounded-full bg-white dark:bg-slate-900 p-0.5 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                "img",
                {
                  src: "/dolphin.png",
                  alt: "Coachify Dolphin",
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    try {
                      e.target.src = "/images/dolphin.svg";
                    } catch {
                    }
                  }
                }
              ) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-full rounded-full bg-blue-500 animate-pulse" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 mt-1 truncate font-semibold", children: "Coachify" })
          ] }),
          stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-shrink-0 w-20 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: `w-16 h-16 rounded-full p-0.5 mx-auto ${story.hasNewStory ? "bg-gradient-to-tr from-purple-500 to-pink-500" : "bg-gradient-to-tr from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500"}`, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-full rounded-full bg-white dark:bg-slate-900 p-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                "img",
                {
                  src: story.avatar,
                  alt: story.displayName,
                  className: "w-full h-full rounded-full object-cover"
                }
              ) }) }),
              story.isLive && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-full rounded-full bg-red-500 animate-pulse" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 mt-1 truncate", children: story.displayName })
          ] }, story.id))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("section", { className: "border-b border-slate-200 dark:border-slate-800 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-white font-bold text-sm", children: "Y" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "input",
            {
              placeholder: "Share your growth journey or ask for guidance...",
              className: "flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-4 text-slate-500 dark:text-slate-400", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("button", { className: "flex items-center gap-1 hover:text-blue-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: "Photo" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("button", { className: "flex items-center gap-1 hover:text-emerald-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: "Video" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { className: "px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200", children: "Share" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("section", { className: "space-y-6 py-4", children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("article", { className: "bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
              "img",
              {
                src: post.avatar,
                alt: post.authorName,
                className: "w-full h-full rounded-full object-cover"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "font-semibold text-sm", children: post.authorName }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: post.timeAgo })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-5 h-5 text-slate-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "div",
          {
            className: "relative bg-slate-900 overflow-hidden",
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: () => handleTouchEnd(post, post.images.length),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                "div",
                {
                  className: "flex transition-transform duration-300 ease-out",
                  style: { transform: `translateX(-${currentSlide * 100}%)` },
                  children: post.images.map((image2, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full flex-shrink-0 aspect-square", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                    "img",
                    {
                      src: image2,
                      alt: `Post by ${post.authorName}`,
                      className: "w-full h-full object-cover"
                    }
                  ) }, `${post.id}-${imageIndex}`))
                }
              ),
              post.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "absolute top-4 right-4 flex gap-1", children: post.images.map((_, index2) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${index2 === currentSlide ? "bg-white" : "bg-white/50"}`
                },
                `${post.id}-dot-${index2}`
              )) }),
              post.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
                currentSlide > 0 && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                  "button",
                  {
                    className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200",
                    onClick: () => setCurrentSlide((prev) => prev - 1),
                    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                  }
                ),
                currentSlide < post.images.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                  "button",
                  {
                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200",
                    onClick: () => setCurrentSlide((prev) => prev + 1),
                    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                "button",
                {
                  onClick: () => toggleLike(post.id),
                  className: `p-2 rounded-full transition-all duration-200 ${post.isLiked ? "text-red-500 bg-red-50 dark:bg-red-900/20" : "hover:bg-slate-100 dark:hover:bg-slate-700"}`,
                  children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-6 h-6", fill: post.isLiked ? "currentColor" : "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { className: "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { className: "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
              "button",
              {
                onClick: () => toggleBookmark(post.id),
                className: `p-2 rounded-full transition-all duration-200 ${post.isBookmarked ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:bg-slate-100 dark:hover:bg-slate-700"}`,
                children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { className: "w-6 h-6", fill: post.isBookmarked ? "currentColor" : "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "text-sm font-semibold", children: [
              post.likes.toLocaleString(),
              " likes"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { className: "text-sm text-slate-700 dark:text-slate-300 leading-relaxed", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "font-semibold mr-2", children: post.authorName }),
              post.caption
            ] }),
            post.type === "book_recommendation" && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mt-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-12 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-white font-bold text-xs text-center px-1", children: "\u{1F4DA}" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "font-semibold text-sm", children: post.book.title }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "text-xs text-slate-600 dark:text-slate-400", children: [
                  "by ",
                  post.book.author
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { className: "text-xs text-blue-600 dark:text-blue-400 font-medium mt-1 hover:underline", children: "Learn more" })
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("button", { className: "text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors", children: [
              "View all ",
              post.comments,
              " comments"
            ] })
          ] })
        ] })
      ] }, post.id)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("nav", { className: "fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "max-w-2xl mx-auto px-6 flex items-center justify-between py-3", children: [
      { icon: "\u{1F3E0}", label: "Home", href: "/" },
      { icon: "\u{1F50D}", label: "Search", href: "/search" },
      { icon: "\u2795", label: "Create", href: "/create" },
      { icon: "\u{1F4AC}", label: "Messages", href: "/messages" },
      { icon: "\u{1F464}", label: "Profile", href: "/profile" }
    ].map((item) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
      import_react51.Link,
      {
        to: item.href,
        className: "flex flex-col items-center gap-1 text-xs transition-all duration-200 hover:scale-110",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-xl", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: item.label })
        ]
      },
      item.href
    )) }) })
  ] });
}

// app/routes/mentees.tsx
var mentees_exports = {};
__export(mentees_exports, {
  default: () => Route15,
  loader: () => loader18,
  meta: () => meta4
});
var import_node22 = require("@remix-run/node"), import_react52 = require("@remix-run/react");
var import_jsx_runtime51 = require("react/jsx-runtime"), meta4 = ({ data }) => {
  let query7 = data == null ? void 0 : data.query, count2 = data == null ? void 0 : data.count;
  return query7 ? [
    { title: formatTitle(`Keyword "${query7}" found ${count2} mentees`) },
    {
      name: "description",
      content: `Searching for "${query7}" found ${count2} mentees.`
    }
  ] : [
    { title: formatTitle("All mentees") },
    { name: "description", content: "All mentees in Coachify." }
  ];
}, loader18 = async ({ request }) => {
  let query7 = new URL(request.url).searchParams.get("q");
  if (!query7) {
    let mentees2 = await prisma.user.findMany({
      where: {
        isPublic: !0,
        tags: { some: { symbol: "MENTEE" } }
      },
      orderBy: { updatedAt: "asc" },
      include: {
        avatars: { select: { url: !0 } },
        tags: { select: { id: !0, symbol: !0, name: !0 } },
        profiles: { select: { headline: !0, links: !0 } }
      }
    });
    return (0, import_node22.json)(
      { query: query7, count: mentees2.length, mentees: mentees2 },
      { headers: createCacheHeaders(request, 60) }
    );
  }
  let mentees = await prisma.user.findMany({
    where: {
      isPublic: !0,
      tags: { some: { symbol: "COACHEE" } },
      OR: [
        { name: { contains: query7 } },
        { username: { contains: query7 } },
        { nick: { contains: query7 } }
      ]
    },
    orderBy: { updatedAt: "asc" },
    include: {
      avatars: { select: { url: !0 } },
      tags: { select: { id: !0, symbol: !0, name: !0 } },
      profiles: { select: { headline: !0, links: !0 } }
    }
  });
  return (0, import_node22.json)({ query: query7, count: mentees.length, mentees });
};
function Route15() {
  let { query: query7, count: count2, mentees } = (0, import_react52.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(Layout, { withPadding: !0, className: "max-w-7xl space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("header", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("h1", { className: "flex items-center gap-2 text-4xl text-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { src: "/images/bear-smile.png", alt: "Bear", className: "h-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "Mentees" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-muted-foreground", children: "Coachee is a person who is mentored, advised, trained, counseled, or taught by a Coach. Like a student or trainee." }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(SearchForm, { action: "/mentees", placeholder: "Search for mentees" })
    ] }),
    count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("section", { className: "space-y-2", children: [
      !query7 && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { children: formatPluralItems("mentee", count2) }),
      query7 && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("p", { className: "text-muted-foreground", children: [
        "Found ",
        formatPluralItems("mentee", count2),
        ' with keyword "',
        query7,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("ul", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: mentees.map((user) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react52.Link, { to: `/${user.username}`, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(UserCard, { user }) }) }, user.id)) })
    ] })
  ] });
}

// app/routes/mentors.tsx
var mentors_exports = {};
__export(mentors_exports, {
  default: () => Route16,
  loader: () => loader19,
  meta: () => meta5
});
var import_node23 = require("@remix-run/node"), import_react53 = require("@remix-run/react");
var import_jsx_runtime52 = require("react/jsx-runtime"), meta5 = ({ data }) => {
  let query7 = data == null ? void 0 : data.query, count2 = data == null ? void 0 : data.count;
  return query7 ? [
    { title: formatTitle(`Keyword "${query7}" found ${count2} mentors`) },
    {
      name: "description",
      content: `Searching for "${query7}" found ${count2} mentors.`
    }
  ] : [
    { title: formatTitle("All mentors") },
    { name: "description", content: "All mentors in Coachify." }
  ];
}, loader19 = async ({ request }) => {
  let query7 = new URL(request.url).searchParams.get("q");
  if (!query7) {
    let mentors2 = await prisma.user.findMany({
      where: {
        isPublic: !0,
        tags: { some: { symbol: "MENTOR" } }
      },
      orderBy: { updatedAt: "asc" },
      include: {
        avatars: { select: { url: !0 } },
        tags: { select: { id: !0, symbol: !0, name: !0 } },
        profiles: { select: { headline: !0, links: !0 } }
      }
    });
    return (0, import_node23.json)(
      { query: query7, count: mentors2.length, mentors: mentors2 },
      { headers: createCacheHeaders(request, 60) }
    );
  }
  let mentors = await prisma.user.findMany({
    where: {
      isPublic: !0,
      tags: { some: { symbol: "MENTOR" } },
      OR: [
        { name: { contains: query7 } },
        { username: { contains: query7 } },
        { nick: { contains: query7 } }
      ]
    },
    orderBy: { updatedAt: "asc" },
    include: {
      avatars: { select: { url: !0 } },
      tags: { select: { id: !0, symbol: !0, name: !0 } },
      profiles: { select: { headline: !0, links: !0 } }
    }
  });
  return (0, import_node23.json)({ query: query7, count: mentors.length, mentors });
};
function Route16() {
  let { query: query7, count: count2, mentors } = (0, import_react53.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Layout, { withPadding: !0, className: "max-w-7xl space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("header", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("h1", { className: "flex items-center gap-2 text-4xl text-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/bear-sunglasses.png", alt: "Bear", className: "h-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "Mentors" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-muted-foreground", children: "Mentor is a person who can guide, advise, train, or teach a mentee or several mentees. Like a teacher or trainer." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SearchForm, { action: "/mentors", placeholder: "Search for mentors" })
    ] }),
    count2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("section", { className: "space-y-2", children: [
      !query7 && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: formatPluralItems("mentor", count2) }),
      query7 && /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text-muted-foreground", children: [
        "Found ",
        formatPluralItems("mentor", count2),
        ' with keyword "',
        query7,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("ul", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: mentors.map((user) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react53.Link, { to: `/${user.username}`, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(UserCard, { user }) }) }, user.id)) })
    ] })
  ] });
}

// app/routes/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => PrivacyPolicy
});
var import_react54 = require("@remix-run/react"), import_jsx_runtime53 = require("react/jsx-runtime");
function PrivacyPolicy() {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("main", { className: "max-w-4xl mx-auto p-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-3xl font-bold mb-4", children: "Privacy Policy" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mb-4", children: "Effective date: November 16, 2025" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "Coachify is a student-led, open-source web application prototype for leadership and coaching. This Privacy Policy explains what information we collect, how we use it, and the choices you have." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "Data We Collect" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("ul", { className: "list-disc ml-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("strong", { children: "Account Information:" }),
          " email, name, profile type (coach or coachee)."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("strong", { children: "User Content:" }),
          " messages with the AI Coach and posts/interactions in the community forum."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("strong", { children: "Technical Data:" }),
          " IP address, browser type, usage and analytics data."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "How We Use Data" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "We use data to provide and maintain the service, to facilitate AI conversations and community features, to communicate with users, and to improve the platform using anonymized analyses where possible." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "AI-Specific Information" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: `The "AI Coach" is an artificial intelligence tool and not a human. It does not provide professional, medical, or psychological advice. In the current prototype, AI conversations are processed in real-time by a third-party API and are not permanently stored on Coachify's servers. If we change this behavior, we will notify users.` }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "The AI may produce inaccurate or biased information; use it as a reflection tool and not as a sole source of guidance." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "Data Sharing" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "We do not sell personal data. We may share information with:" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("ul", { className: "list-disc ml-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("li", { children: "Service providers (including the third-party AI API provider)." }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("li", { children: "Human coaches you choose to book sessions with (necessary information only)." }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("li", { children: "Authorities when required by law." })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "User Rights & Security" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "You may request access to, correction of, or deletion of your personal data. We implement reasonable security measures, but no online service is 100% secure. As a prototype, certain features may be experimental." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "International Transfers" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "Your data may be processed in various countries as part of an open-source project with global reach." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl font-semibold", children: "Changes" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "We reserve the right to update this policy. Material changes will be communicated to users." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { children: [
        "Contact: ",
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("a", { href: "mailto:kwitondafelix6@gmail.com", className: "text-blue-600", children: "kwitondafelix6@gmail.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react54.Link, { to: "/", children: "Back to Home" }) })
    ] })
  ] });
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  loader: () => loader20
});
var import_node24 = require("@remix-run/node");
async function loader20({ request }) {
  let { userData } = await requireUserSession(request);
  return (0, import_node24.redirect)(`/${userData.username}`);
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Route17,
  loader: () => loader21,
  meta: () => meta6
});
var import_node25 = require("@remix-run/node"), import_react55 = require("@remix-run/react");
var import_jsx_runtime54 = require("react/jsx-runtime"), meta6 = ({ data }) => {
  let query7 = (data == null ? void 0 : data.query) ?? "", count2 = (data == null ? void 0 : data.count) || 0;
  return !query7 && !count2 ? [
    { title: formatTitle("Search anything") },
    { name: "description", content: "Search for various information." }
  ] : query7 && !count2 ? [
    { title: formatTitle(`Keyword "${query7}" has no users`) },
    { name: "description", content: "No search users." }
  ] : [
    { title: formatTitle(`Keyword "${query7}" found ${count2} users`) },
    {
      name: "description",
      content: `Searching for "${query7}" found ${count2} users.`
    }
  ];
}, loader21 = async ({ request }) => {
  let query7 = new URL(request.url).searchParams.get("q");
  if (!query7)
    return (0, import_node25.json)({ query: query7, count: 0, users: [], broadcasts: [] });
  let [users, broadcasts] = await prisma.$transaction([
    prisma.user.findMany({
      where: {
        isPublic: !0,
        OR: [
          { name: { contains: query7 } },
          { username: { contains: query7 } },
          { nick: { contains: query7 } }
        ]
      },
      select: {
        id: !0,
        name: !0,
        username: !0,
        avatars: { select: { url: !0 } },
        tags: { select: { symbol: !0, name: !0 } },
        profiles: { select: { headline: !0, links: !0 } }
      },
      orderBy: [{ username: "asc" }]
    }),
    prisma.broadcast.findMany({
      where: {
        // isPublished: true,
        OR: [
          { title: { contains: query7 } },
          { description: { contains: query7 } },
          { body: { contains: query7 } }
        ]
      },
      include: {
        images: !0,
        user: { include: { avatars: { select: { url: !0 } } } }
      },
      orderBy: [{ title: "asc" }]
    })
  ]), usersCount = users.length, broadcastsCount = broadcasts.length, count2 = usersCount + broadcastsCount;
  return (0, import_node25.json)({ query: query7, count: count2, users, broadcasts });
};
function Route17() {
  let { query: query7, count: count2, users, broadcasts } = (0, import_react55.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(Layout, { withPadding: !0, className: "max-w-7xl space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("header", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("h1", { className: "flex items-center gap-2 text-4xl text-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("img", { src: "/images/bear-monocle.png", alt: "Bear", className: "h-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { children: "Search" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-muted-foreground", children: "Find anyone and anything." }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(SearchForm, {})
    ] }),
    !query7 && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { children: "Enter your search keyword above" }) }),
    count2 <= 0 && query7 && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { children: [
      'No result found for keyword "',
      query7,
      '"'
    ] }) }),
    users.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-emerald-700", children: "Users" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { className: "text-muted-foreground", children: [
        "Found ",
        formatPluralItems("user", users.length),
        ' with keyword "',
        query7,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("ul", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
        import_react55.Link,
        {
          to: `/${user.username}`,
          className: "hover-opacity flex gap-2 py-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AvatarAuto, { className: "h-14 w-14", user }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h3", { className: "text-lg", children: user.name }),
              /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { className: "text-muted-foreground", children: [
                "@",
                user.username
              ] })
            ] })
          ]
        }
      ) }, user.id)) })
    ] }),
    broadcasts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-emerald-700", children: "Broadcasts" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { className: "text-muted-foreground", children: [
        "Found ",
        formatPluralItems("broadcast", broadcasts.length),
        ' with keyword "',
        query7,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("ul", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3", children: broadcasts.map((broadcast) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        import_react55.Link,
        {
          to: `/${broadcast.user.username}/broadcasts/${broadcast.id}`,
          className: "hover-opacity flex gap-2 py-1",
          children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(Card, { className: "hover-opacity flex w-full flex-col gap-2 p-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h3", { className: "text-lg", children: broadcast.title }),
              /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-muted-foreground", children: broadcast.description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "flex-[1]" }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AvatarAuto, { className: "h-5 w-5", user: broadcast.user }),
              /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-sm font-bold", children: broadcast.user.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Time, { children: broadcast.updatedAt })
          ] })
        }
      ) }, broadcast.id)) })
    ] })
  ] });
}

// app/routes/signin.tsx
var signin_exports = {};
__export(signin_exports, {
  default: () => SignInPage
});
var import_react56 = require("react"), import_react57 = require("@remix-run/react");
var import_jsx_runtime55 = require("react/jsx-runtime");
function SignInPage() {
  let [message, setMessage] = (0, import_react56.useState)(null), [searchParams] = (0, import_react57.useSearchParams)(), redirectTo2 = searchParams.get("redirectTo") || "/";
  function handleSubmit(e) {
    e.preventDefault(), setMessage("Sign in is not yet implemented in this demo. Please create an account or use the /signup flow.");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-800 py-12 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("header", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h1", { className: "text-2xl font-extrabold", children: "Sign In" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text-sm text-stone-500 dark:text-stone-400", children: "Welcome back \u2014 enter your email to continue." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ThemeSwitcher, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("label", { className: "text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "mb-1", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("input", { type: "email", required: !0, className: "w-full rounded-md border border-stone-200 dark:border-stone-700 p-2 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("label", { className: "text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "mb-1", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("input", { type: "password", required: !0, className: "w-full rounded-md border border-stone-200 dark:border-stone-700 p-2 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("button", { type: "submit", className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow", children: "Sign In" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_react57.Link, { to: `/signup?redirectTo=${encodeURIComponent(redirectTo2)}`, className: "text-sm text-emerald-600 dark:text-emerald-400", children: "Create an account" })
      ] })
    ] }),
    message && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "mt-4 text-sm text-stone-600 dark:text-stone-300", children: message }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("footer", { className: "mt-6 text-sm text-stone-500 dark:text-stone-400", children: [
      "Need help? ",
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_react57.Link, { to: "/help", className: "text-emerald-600 dark:text-emerald-400", children: "Contact support" })
    ] })
  ] }) });
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => signup_default
});
var signup_default = SignupChoice;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  IntroSplash: () => IntroSplash,
  LandingHero: () => LandingHero,
  LandingMentees: () => LandingMentees,
  LandingMentors: () => LandingMentors,
  default: () => Index,
  loader: () => loader22
});
var import_node26 = require("@remix-run/node"), import_react58 = require("@remix-run/react");

// node_modules/.pnpm/array-shuffle@3.0.0/node_modules/array-shuffle/index.js
function arrayShuffle(array) {
  if (!Array.isArray(array))
    throw new TypeError(`Expected an array, got ${typeof array}`);
  array = [...array];
  for (let index = array.length - 1; index > 0; index--) {
    let newIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[newIndex]] = [array[newIndex], array[index]];
  }
  return array;
}

// app/routes/_index.tsx
var import_react59 = __toESM(require("react")), import_jsx_runtime56 = require("react/jsx-runtime");
async function loader22({ request }) {
  let mentors = await prisma.user.findMany({
    take: 12,
    orderBy: { createdAt: "asc" },
    where: {
      isPublic: !0,
      tags: { some: { symbol: "MENTOR" } }
    },
    select: {
      id: !0,
      name: !0,
      username: !0,
      avatars: { select: { url: !0 } },
      tags: { select: { id: !0, symbol: !0, name: !0 } },
      profiles: { select: { headline: !0, links: !0 } }
    }
  }), mentees = await prisma.user.findMany({
    take: 20,
    orderBy: { createdAt: "asc" },
    where: {
      isPublic: !0,
      tags: { some: { symbol: "MENTEE" } }
    },
    select: {
      id: !0,
      name: !0,
      username: !0,
      avatars: { select: { url: !0 } }
    }
  });
  return (0, import_node26.json)(
    { mentors: arrayShuffle(mentors), mentees: arrayShuffle(mentees) },
    { headers: createCacheHeaders(request, 10) }
  );
}
function Index() {
  let [showIntro, setShowIntro] = (0, import_react59.useState)(!0), [introPhase, setIntroPhase] = (0, import_react59.useState)(0);
  return (0, import_react59.useEffect)(() => {
    let timer1 = setTimeout(() => setIntroPhase(1), 800), timer2 = setTimeout(() => setIntroPhase(2), 1600), timer3 = setTimeout(() => setShowIntro(!1), 2800);
    return () => {
      clearTimeout(timer1), clearTimeout(timer2), clearTimeout(timer3);
    };
  }, []), showIntro ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(IntroSplash, { phase: introPhase }) : /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(Layout, { className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 pb-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "fixed top-6 right-6 z-40", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ThemeSwitcher, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(LandingHero, {}),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(LandingMentors, {}),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(LandingMentees, {})
  ] });
}
function IntroSplash({ phase }) {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: `fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 transition-all duration-1000 ${phase === 2 ? "opacity-0 scale-110" : "opacity-100 scale-100"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/20 to-transparent" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-slate-900/80 to-blue-900/90" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute inset-0", children: import_react59.default.useMemo(() => Array.from({ length: 20 }).map(() => {
        let left = `${Math.random() * 100}%`, width = `${Math.random() * 20 + 5}px`, height = `${Math.random() * 20 + 5}px`, delay2 = `${Math.random() * 5}s`, duration = `${Math.random() * 10 + 10}s`;
        return { id: `bubble-${Math.random().toString(36).slice(2, 9)}`, left, width, height, delay: delay2, duration };
      }).map(
        (b) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "div",
          {
            className: "absolute rounded-full bg-white/10 animate-float",
            style: { left: b.left, bottom: "-20px", width: b.width, height: b.height, animationDelay: b.delay, animationDuration: b.duration }
          },
          b.id
        )
      ), []) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: `relative z-10 flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ${phase === 1 ? "scale-110" : "scale-100"}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: `relative mb-8 transition-all duration-1000 ${phase === 1 ? "scale-110 rotate-12" : "scale-100"}`, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "img",
          {
            src: "/images/dolphin-leaping.png",
            alt: "Coachify Dolphin",
            loading: "lazy",
            onError: (e) => {
              try {
                e.target.src = "/images/dolphin.svg";
              } catch {
              }
            },
            className: `w-32 h-32 transition-all duration-1000 ${phase === 1 ? "animate-bounce" : "animate-pulse"}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: `absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-blue-400/30 blur-xl rounded-full transition-all duration-1000 ${phase === 1 ? "scale-150 opacity-50" : "scale-100 opacity-30"}` })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h1", { className: `text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${phase === 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`, children: "COACHIFY" }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: `transition-all duration-1000 delay-500 ${phase === 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-xl font-light tracking-widest text-blue-200 mb-2", children: "Real Talk, Real Growth" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-sm font-extralight tracking-wide text-blue-300 max-w-xs mx-auto leading-relaxed", children: "Real conversations Real growth  Coaching that helps you move ahead." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: `mt-12 w-64 transition-all duration-1000 delay-700 ${phase === 1 ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "w-full h-1 bg-white/20 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-loading-bar" }) }) })
    ] })
  ] });
}
function LandingHero() {
  let { userSession } = useRootLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("section", { className: "min-h-screen flex items-center justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-float-slow" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-float-slower" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "space-y-8 text-center lg:text-left", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center justify-center lg:justify-start gap-4 mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "img",
              {
                src: "/images/dolphin-leaping.png",
                alt: "Coachify Dolphin",
                loading: "lazy",
                onError: (e) => {
                  try {
                    e.target.src = "/images/dolphin.svg";
                  } catch {
                  }
                },
                className: "w-20 h-20 animate-float"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h1", { className: "text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 dark:from-slate-100 dark:via-blue-100 dark:to-emerald-100 bg-clip-text text-transparent leading-tight", children: "Coachify AI" }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-lg text-slate-600 dark:text-slate-400 mt-2", children: "MindGram Rise Higher" })
          ] })
        ] }),
        !userSession && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
            import_react58.Link,
            {
              to: "/felix",
              className: "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "text-lg", children: "Chat With AI Coach" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("svg", { className: "w-5 h-5 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
            import_react58.Link,
            {
              to: "/signup",
              className: "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 bg-white/80 dark:bg-slate-800/60 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700/60 hover:shadow-lg transition-all duration-300",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "text-lg", children: "Browse Human Coaches" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("svg", { className: "w-5 h-5 group-hover:scale-110 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) })
              ]
            }
          )
        ] }),
        userSession && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex flex-wrap justify-center lg:justify-start gap-4 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            import_react58.Link,
            {
              to: "/mentors",
              className: "px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
              children: "Browse Human Coaches"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            import_react58.Link,
            {
              to: "/community",
              className: "px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/60 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700/60 transition-all duration-300",
              children: "Join Community"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "relative hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "img",
          {
            src: "/images/dolphin-swimming.png",
            alt: "AI Coaching Illustration",
            loading: "lazy",
            onError: (e) => {
              try {
                e.target.src = "/images/dolphin.svg";
              } catch {
              }
            },
            className: "w-full max-w-2xl animate-float-slow"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute top-10 -left-10 w-24 h-24 bg-blue-100/20 rounded-full blur-xl animate-pulse" }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute bottom-20 -right-10 w-32 h-32 bg-emerald-100/20 rounded-full blur-xl animate-pulse delay-1000" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse" }) }) })
  ] });
}
function LandingMentors() {
  let { mentors } = (0, import_react58.useLoaderData)();
  return mentors.length <= 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("section", { className: "py-20 px-6 lg:px-8 relative", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("header", { className: "text-center mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { className: "text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent mb-4", children: "Expert Mentors" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Connect with verified professionals ready to guide your growth journey" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: mentors.map((user) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "group", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react58.Link, { to: `/${user.username}`, className: "block", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(UserCard, { user }) }) }) }, user.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-center mt-12", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
      import_react58.Link,
      {
        to: "/mentors",
        className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-300",
        children: [
          "View All Mentors",
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        ]
      }
    ) })
  ] }) });
}
function LandingMentees() {
  let { mentees } = (0, import_react58.useLoaderData)();
  return mentees.length <= 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("section", { className: "py-20 px-6 lg:px-8 bg-white/50 dark:bg-slate-800/30 relative", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("header", { className: "text-center mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { className: "text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-emerald-900 dark:from-slate-100 dark:to-emerald-100 bg-clip-text text-transparent mb-4", children: "Growing Community" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Join thousands of learners and professionals transforming their lives" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: mentees.map((user) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "group", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
      import_react58.Link,
      {
        to: `/${user.username}`,
        className: "flex items-center gap-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg hover:scale-105 transition-all duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(AvatarAuto, { className: "h-14 w-14", user }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-white truncate", children: user.name }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("p", { className: "text-sm text-slate-600 dark:text-slate-400 truncate", children: [
              "@",
              user.username
            ] })
          ] })
        ]
      }
    ) }, user.id)) })
  ] }) });
}

// app/routes/coach.tsx
var coach_exports = {};
__export(coach_exports, {
  default: () => CoachDashboard2
});
var import_react60 = require("react"), import_react61 = require("@remix-run/react"), import_icons_react10 = require("@tabler/icons-react");
var import_jsx_runtime57 = require("react/jsx-runtime"), COACHING_SYSTEM_PROMPT2 = `You are FelixGPT, a professional life coach specializing in personal growth, leadership development, and career advancement.

CORE PRINCIPLES:
1. Help clients gain awareness and responsibility through reflection
2. Ask open-ended questions that encourage self-discovery
3. Listen actively and build on previous context
4. Avoid giving long information dumps or lectures
5. Keep responses concise and impactful (2-3 sentences max)
6. Always end with ONE reflective question

COACHING STYLE:
- Be empathetic and supportive
- Challenge gently when appropriate
- Celebrate insights and progress
- Help clients find their own answers
- Build on conversation history to show you're listening

EXAMPLE RESPONSES:
User: "I struggle with confidence at work"
You: "That's a common challenge. Confidence often comes from recognizing past wins. Can you think of a time at work when you felt truly capable and confident? What was different about that situation?"

User: "I want to advance my career"
You: "Career growth is exciting. Before we explore options, what does success look like for you in 3 years? And what's one step you could take this week toward that vision?"

Remember: Your role is to facilitate the client's own insights, not to provide advice. Ask more than you tell.`;
function Icon2({ name: name2, className = "w-5 h-5" }) {
  let iconProps = {
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  };
  switch (name2) {
    case "feed":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M3 12h18M3 6h18M3 18h18" }) });
    case "manage":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "documents":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) });
    case "profile":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) });
    case "tracking":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) });
    case "create":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) });
    case "settings":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "coaching":
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className, viewBox: "0 0 24 24", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { ...iconProps, d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }) });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className });
  }
}
function CoachingChat2() {
  let fetcher = (0, import_react61.useFetcher)(), STORAGE_KEY = "felixgpt_chat_v1", [messages, setMessages] = (0, import_react60.useState)([
    {
      role: "system",
      content: COACHING_SYSTEM_PROMPT2
    }
  ]), [input, setInput] = (0, import_react60.useState)(""), [loading, setLoading] = (0, import_react60.useState)(!1), messagesEndRef = (0, import_react60.useRef)(null);
  (0, import_react60.useEffect)(() => {
    var _a;
    try {
      if (globalThis.localStorage === void 0)
        return;
      let raw = globalThis.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        let parsed = JSON.parse(raw);
        parsed.length > 0 && ((_a = parsed[0]) == null ? void 0 : _a.role) === "system" ? setMessages(parsed) : setMessages((prev) => [{ role: "system", content: COACHING_SYSTEM_PROMPT2 }, ...parsed]);
      }
    } catch (err) {
      console.warn("Failed to load saved chat:", err);
    }
  }, []), (0, import_react60.useEffect)(() => {
    try {
      if (globalThis.localStorage === void 0)
        return;
      messages && messages.length > 0 && globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (err) {
      console.warn("Failed to save chat:", err);
    }
  }, [messages]), (0, import_react60.useEffect)(() => {
    var _a;
    (_a = messagesEndRef.current) == null || _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]), (0, import_react60.useEffect)(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      let data = fetcher.data;
      data.reply && setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "" }]), setLoading(!1);
    }
  }, [fetcher.state, fetcher.data]);
  let handleSendMessage = (e) => {
    if (e.preventDefault(), !input.trim() || loading)
      return;
    let userMessage = { role: "user", content: input }, updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages), setInput(""), setLoading(!0);
    let formData = new FormData();
    formData.append("messages", JSON.stringify(updatedMessages)), fetcher.submit(formData, { method: "post", action: "/api/coaching" });
  }, clearConversation = () => {
    setMessages([{ role: "system", content: COACHING_SYSTEM_PROMPT2 }]);
    try {
      globalThis.localStorage !== void 0 && globalThis.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn("Failed to clear saved chat:", err);
    }
  }, displayMessages = messages.filter((m) => m.role !== "system");
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col h-full max-h-[70vh] bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      displayMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-center text-slate-500 dark:text-slate-400 py-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "font-semibold mb-2", children: "Welcome to Coaching Session" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm", children: "Share what's on your mind. I'm here to help you gain clarity and take action." })
      ] }) : displayMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "div",
        {
          className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-none"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm leading-relaxed", children: msg.content })
        }
      ) }, `message-${idx}-${msg.role}`)),
      loading && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex justify-start", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg rounded-bl-none", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { ref: messagesEndRef })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("form", { onSubmit: handleSendMessage, className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "input",
        {
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Share what's on your mind...",
          disabled: loading,
          className: "flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "button",
        {
          type: "submit",
          disabled: loading || !input.trim(),
          className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          children: "Send"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "button",
        {
          type: "button",
          onClick: clearConversation,
          className: "px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
          children: "Clear"
        }
      )
    ] }) })
  ] });
}
function CoachDashboard2() {
  var _a;
  let [active, setActive] = (0, import_react60.useState)("feed"), [mobileOpen, setMobileOpen] = (0, import_react60.useState)(!1), tabs = [
    { key: "feed", label: "Activity Feed", icon: "feed", badge: 3 },
    { key: "manage", label: "Coaching Management", icon: "manage", badge: 12 },
    { key: "documents", label: "Resources", icon: "documents" },
    { key: "profile", label: "My Profile", icon: "profile" },
    { key: "tracking", label: "Progress Tracking", icon: "tracking" },
    { key: "create", label: "Create Content", icon: "create" },
    { key: "coaching", label: "AI Coaching", icon: "coaching" },
    { key: "settings", label: "Settings", icon: "settings" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(HeaderNavigation4, {}),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("header", { className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_react61.Link, { to: "/", className: "inline-flex items-center gap-3 hover:opacity-80 transition-opacity", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("img", { src: "/images/dolphin.svg", alt: "Coachify", className: "w-10 h-10 rounded-xl shadow-lg" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent", children: "Coachify Pro" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "text-xs text-slate-500 dark:text-slate-400 -mt-1", children: "Professional Dashboard" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "hidden md:block relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className: "h-4 w-4 text-slate-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
            "input",
            {
              type: "text",
              placeholder: "Search clients, sessions...",
              className: "pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "hidden sm:flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200", children: "New Session" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("button", { className: "p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className: "w-5 h-5 text-slate-600 dark:text-slate-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium", children: "5" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          "button",
          {
            className: "sm:hidden p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700",
            onClick: () => setMobileOpen((v) => !v),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("aside", { className: "hidden lg:block lg:col-span-3 xl:col-span-2", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("nav", { className: "space-y-1", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
          "button",
          {
            onClick: () => setActive(tab.key),
            className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${active === tab.key ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 shadow-sm" : "hover:bg-slate-50 dark:hover:bg-slate-700/50"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `p-2 rounded-lg transition-colors ${active === tab.key ? "bg-blue-500 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30"}`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: tab.icon, className: "w-4 h-4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: `font-medium text-sm ${active === tab.key ? "text-blue-700 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"}`, children: tab.label }) }),
              tab.badge && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${active === tab.key ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`, children: tab.badge })
            ]
          },
          tab.key
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
            "img",
            {
              src: "/images/avatar-placeholder.png",
              alt: "Profile",
              className: "w-10 h-10 rounded-full border-2 border-white dark:border-slate-600 shadow-sm"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm font-medium text-slate-900 dark:text-white truncate", children: "Dr. Sarah Johnson" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Executive Coach" })
          ] })
        ] }) })
      ] }) }),
      mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-800 shadow-2xl border-l border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-bold text-lg", children: "Navigation" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
            "button",
            {
              onClick: () => setMobileOpen(!1),
              className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("nav", { className: "space-y-1", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
          "button",
          {
            onClick: () => {
              setActive(tab.key), setMobileOpen(!1);
            },
            className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${active === tab.key ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700" : "hover:bg-slate-50 dark:hover:bg-slate-700"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: tab.icon, className: `w-5 h-5 ${active === tab.key ? "text-blue-600" : "text-slate-500"}` }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: `font-medium ${active === tab.key ? "text-blue-700" : "text-slate-700 dark:text-slate-200"}`, children: tab.label }),
              tab.badge && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: `ml-auto px-2 py-1 rounded-full text-xs ${active === tab.key ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"}`, children: tab.badge })
            ]
          },
          tab.key
        )) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("main", { className: "lg:col-span-9 xl:col-span-10", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-700/50 px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: (_a = tabs.find((t) => t.key === active)) == null ? void 0 : _a.label }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: [
              active === "feed" && "Latest updates and activities from your coaching network",
              active === "manage" && "Manage your clients, sessions, and coaching relationships",
              active === "documents" && "Your coaching resources, templates, and materials",
              active === "profile" && "Manage your professional profile and availability",
              active === "tracking" && "Track client progress and coaching outcomes",
              active === "create" && "Create engaging content for your audience",
              active === "coaching" && "Connect with FelixGPT for personalized coaching sessions",
              active === "settings" && "Configure your account and preferences"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "hidden sm:flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium", children: "Export" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors font-medium", children: "New Item" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-6", children: [
          active === "feed" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ActivityFeedContent2, {}),
          active === "manage" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ManagementContent2, {}),
          active === "documents" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(DocumentsContent2, {}),
          active === "profile" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ProfileContent2, {}),
          active === "tracking" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TrackingContent2, {}),
          active === "create" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CreateContent2, {}),
          active === "coaching" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CoachingChat2, {}),
          active === "settings" && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SettingsContent2, {})
        ] })
      ] }) })
    ] }) })
  ] });
}
function ActivityFeedContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "p-2 bg-blue-500 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: "manage", className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-white", children: "New Sessions" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "12" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Scheduled for this week" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "p-2 bg-green-500 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: "tracking", className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-white", children: "Progress Rate" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-2xl font-bold text-green-600 dark:text-green-400", children: "87%" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Client goal achievement" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "p-2 bg-purple-500 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: "documents", className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-white", children: "Resources" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: "24" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Available materials" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-lg mb-4", children: "Recent Activity" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-600/50 rounded-lg transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon2, { name: "profile", className: "w-5 h-5 text-blue-600 dark:text-blue-400" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("p", { className: "text-slate-900 dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-medium", children: "Michael Chen" }),
            " completed their leadership assessment"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: "2 hours ago" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "px-3 py-1 text-sm bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 rounded-lg transition-colors", children: "View" })
      ] }, `activity-${i}`)) })
    ] })
  ] });
}
function ManagementContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-lg mb-4", children: "Active Clients" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "space-y-3", children: ["Sarah Wilson", "James Rodriguez", "Emma Thompson", "Alex Kim"].map((name2) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-600/50 rounded-lg transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium", children: name2.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "font-medium text-slate-900 dark:text-white", children: name2 }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: "Next session: Tomorrow" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-2 h-2 bg-green-500 rounded-full" })
      ] }, name2)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "font-semibold text-lg mb-4", children: "Upcoming Sessions" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600/50 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-medium text-slate-900 dark:text-white", children: "Strategy Session" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded", children: "1h" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: "With Sarah Wilson" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Today, 2:00 PM \u2022 Video Call" })
      ] }, i)) })
    ] })
  ] }) });
}
function DocumentsContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: "Documents management interface" });
}
function ProfileContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: "Profile management interface" });
}
function TrackingContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: "Progress tracking dashboard" });
}
function CreateContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: "Content creation workspace" });
}
function SettingsContent2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-center py-12 text-slate-500 dark:text-slate-400", children: "Settings configuration panel" });
}
function HeaderNavigation4() {
  let navigate = (0, import_react61.useNavigate)(), handleFeedback = () => {
    window.open("/feedback", "_blank", "width=600,height=700");
  }, handleQuit = () => {
    typeof window < "u" && (window.location.href = "about:blank", window.close(), setTimeout(() => navigate("/"), 100));
  }, navMainItems2 = [
    {
      to: "/",
      text: "Dashboard",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconDashboard, { className: "icon" })
    },
    {
      to: "/felix",
      text: "Chat with AI Coach",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconRobot, { className: "icon" })
    },
    {
      to: "/search",
      text: "Search",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconSearch, { className: "icon" })
    },
    {
      to: "/signup-choice",
      text: "Continue to Coachify Platform",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconArrowRight, { className: "icon" })
    }
  ], actionItems = [
    {
      to: "#",
      text: "Feedback",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconMessage, { className: "icon" }),
      action: handleFeedback
    },
    {
      to: "#",
      text: "Quit",
      icon: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_icons_react10.IconLogout, { className: "icon" }),
      action: handleQuit
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "header",
    {
      className: cn(
        "z-10 select-none",
        "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950",
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("nav", { className: "w-full max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("ul", { className: "flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(NavigationList4, { navItems: navMainItems2 }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(NavigationList4, { navItems: actionItems })
      ] }) }) })
    }
  );
}
function NavigationList4({ navItems }) {
  let isScreenLarge = useScreenLarge();
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    TooltipAuto,
    {
      content: navItem.text,
      className: "hidden lg:block",
      side: isScreenLarge ? "right" : "top",
      children: navItem.action ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "button",
        {
          onClick: navItem.action,
          className: cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200 w-full",
            "text-stone-600 dark:text-stone-400",
            "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
            navItem.text === "Quit" && "hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/50 dark:hover:text-red-100"
          ),
          children: navItem.icon
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        import_react61.NavLink,
        {
          to: navItem.to,
          className: ({ isActive }) => cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200",
            "text-stone-600 dark:text-stone-400",
            isActive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/70" : "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100"
          ),
          children: navItem.icon
        }
      )
    }
  ) }, navItem.text)) });
}

// app/routes/felix.tsx
var felix_exports = {};
__export(felix_exports, {
  action: () => action14,
  default: () => Felix
});
var import_react62 = require("react"), import_promises = require("fs/promises"), import_node27 = require("@remix-run/node"), import_react63 = require("@remix-run/react"), import_icons_react11 = require("@tabler/icons-react"), import_groq_sdk = __toESM(require("groq-sdk"));
var import_jsx_runtime58 = require("react/jsx-runtime"), LIFE_COACHING_SYSTEM_PROMPT = `You are FelixGPT, an expert life coach and leadership mentor with 15+ years of experience. Your specialty is helping people achieve personal growth, career advancement, and leadership excellence.

CORE PRINCIPLES:
1. Always be empathetic, encouraging, and solution-focused
2. Ask probing questions to understand deeper needs
3. Provide actionable, step-by-step guidance
4. Focus on mindset, habits, and practical strategies
5. Help clients discover their own answers through questioning

SPECIALTIES:
- Career transitions and advancement
- Leadership development
- Work-life balance
- Confidence building
- Goal setting and achievement
- Relationship management
- Stress management and mindfulness
- Personal transformation

APPROACH:
- Start with empathy and validation
- Ask clarifying questions to understand the real challenge
- Provide structured frameworks and tools
- End with actionable next steps
- Always be supportive but honest

Remember to build on previous conversation context and help users see their situations from new perspectives.`;
async function action14({ request }) {
  var _a, _b, _c, _d, _e, _f;
  async function writeRemoteLog(obj) {
    try {
      let dir = `${process.cwd()}/logs`;
      await (0, import_promises.mkdir)(dir, { recursive: !0 });
      let path2 = `${dir}/felix-remote-errors.log`, entry2 = JSON.stringify({ ts: (/* @__PURE__ */ new Date()).toISOString(), ...obj }) + `
`;
      await (0, import_promises.appendFile)(path2, entry2, { encoding: "utf8" });
    } catch (e) {
      console.error("felix: failed to write remote log", e);
    }
  }
  try {
    let contentType = request.headers.get("content-type") || "", message = null;
    if (contentType.includes("application/json")) {
      let body2 = await request.json();
      message = ((body2 == null ? void 0 : body2.message) || "").toString();
    } else {
      let m = (await request.formData()).get("message");
      message = m ? String(m) : null;
    }
    if (!message)
      return (0, import_node27.json)({ error: "Message is required" }, { status: 400 });
    let OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (OPENAI_API_KEY) {
      console.log("felix: attempting OpenAI API call");
      try {
        let openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: LIFE_COACHING_SYSTEM_PROMPT
              },
              { role: "user", content: message }
            ],
            max_tokens: 1024,
            temperature: 0.7
          })
        });
        if (openaiResp.ok) {
          let data = await openaiResp.json(), reply = ((_c = (_b = (_a = data == null ? void 0 : data.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) ?? "";
          if (reply)
            return console.log("felix: OpenAI API success", { model: "gpt-4o-mini", messageLength: message.length, replyLength: reply.length }), await writeRemoteLog({ type: "openai_success", model: "gpt-4o-mini", messageLength: message.length, replyLength: reply.length }), (0, import_node27.json)({ reply });
        } else {
          let errText = await openaiResp.text();
          console.error("felix: OpenAI API error", { status: openaiResp.status, body: errText }), await writeRemoteLog({ type: "openai_error", status: openaiResp.status, body: errText });
        }
      } catch (openaiErr) {
        console.error("felix: OpenAI API network error", { error: (openaiErr == null ? void 0 : openaiErr.message) ?? String(openaiErr) }), await writeRemoteLog({ type: "openai_network_error", error: (openaiErr == null ? void 0 : openaiErr.message) ?? String(openaiErr) });
      }
    }
    let GROQ_API_KEY = process.env.GROQ_API_KEY;
    if (GROQ_API_KEY) {
      console.log("felix: attempting Groq API call as fallback");
      try {
        let groq = new import_groq_sdk.default({ apiKey: GROQ_API_KEY }), modelsToTry = [
          "llama-3.3-70b-versatile",
          "llama-3.1-8b-instant"
        ], response = null, lastError = null;
        for (let model2 of modelsToTry)
          try {
            if (console.log(`felix: trying Groq model ${model2}`), response = await groq.chat.completions.create({
              messages: [
                {
                  role: "system",
                  content: LIFE_COACHING_SYSTEM_PROMPT
                },
                {
                  role: "user",
                  content: message
                }
              ],
              model: model2,
              max_tokens: 1024,
              temperature: 0.7
            }), response && ((_f = (_e = (_d = response.choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.message) != null && _f.content)) {
              console.log(`felix: Groq API success with model ${model2}`);
              let reply = response.choices[0].message.content;
              return await writeRemoteLog({ type: "groq_success", model: model2, messageLength: message.length, replyLength: reply.length }), (0, import_node27.json)({ reply });
            }
          } catch (modelErr) {
            lastError = modelErr;
            let errMsg = (modelErr == null ? void 0 : modelErr.message) ?? String(modelErr);
            console.warn(`felix: Groq model ${model2} failed: ${errMsg}`);
            continue;
          }
        console.error("felix: all Groq models failed", { error: (lastError == null ? void 0 : lastError.message) ?? String(lastError) }), await writeRemoteLog({ type: "groq_all_models_failed", error: (lastError == null ? void 0 : lastError.message) ?? String(lastError) });
      } catch (groqErr) {
        console.error("felix: Groq API initialization error", { error: (groqErr == null ? void 0 : groqErr.message) ?? String(groqErr) }), await writeRemoteLog({ type: "groq_init_error", error: (groqErr == null ? void 0 : groqErr.message) ?? String(groqErr) });
      }
    } else
      console.log("felix: GROQ_API_KEY not set, will fall back to demo mode if OpenAI fails");
    console.warn("felix: using DEMO MODE for response", { message }), await writeRemoteLog({ type: "demo_mode_response", message });
    let lowerMsg = message.toLowerCase(), demoReply = "";
    return lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey") ? demoReply = `Welcome! I'm FelixGPT, your AI life coach and leadership mentor. 

I'm here to help you navigate life's challenges 

What area of your life would you like to explore today?` : lowerMsg.includes("career") || lowerMsg.includes("job") || lowerMsg.includes("work") ? demoReply = `\u{1F4BC} Career development is such an important journey. To help you best, I'd love to understand:

\u2022 What specifically about your career feels challenging right now?
\u2022 Are you looking to advance, change paths, or find more fulfillment?
\u2022 What skills or strengths do you enjoy using most?

Tell me more about your current situation and aspirations.` : lowerMsg.includes("leadership") || lowerMsg.includes("manager") || lowerMsg.includes("team") ? demoReply = `\u{1F3AF} Leadership growth is a transformative journey. Great leaders are made, not born!

Could you share:
\u2022 What leadership challenge are you currently facing?
\u2022 Are you leading a team, project, or your own development?
\u2022 What kind of leader do you aspire to become?

Let's explore your leadership style and goals together.` : lowerMsg.includes("stress") || lowerMsg.includes("overwhelm") || lowerMsg.includes("anxious") ? demoReply = `\u{1F9D8} I understand how challenging stress can be. You're not alone in this.

To help you find balance:
\u2022 What specifically is causing the most stress right now?
\u2022 How is this affecting your daily life and wellbeing?
\u2022 What coping strategies have you tried so far?

Remember, acknowledging stress is the first step toward managing it effectively.` : lowerMsg.includes("goal") || lowerMsg.includes("achieve") || lowerMsg.includes("success") ? demoReply = `\u{1F3AF} Goal achievement is my specialty! Let's create a clear path forward.

Tell me about:
\u2022 What specific goal are you working toward?
\u2022 Why is this goal important to you?
\u2022 What's been holding you back so far?

I'll help you break it down into actionable steps with accountability.` : lowerMsg.includes("confidence") || lowerMsg.includes("doubt") || lowerMsg.includes("imposter") ? demoReply = `\u{1F31F} Confidence building starts with self-awareness. Many successful people experience doubt.

Help me understand:
\u2022 In what situations do you feel your confidence wavering?
\u2022 What evidence contradicts these doubts?
\u2022 What would you attempt if you knew you couldn't fail?

Let's build your confidence from the inside out.` : lowerMsg.includes("balance") || lowerMsg.includes("burnout") || lowerMsg.includes("time") ? demoReply = `\u2696\uFE0F Work-life balance is essential for sustainable success. This is a common challenge for high-achievers.

Could you describe:
\u2022 What does your current work-life situation look like?
\u2022 What would ideal balance mean for you?
\u2022 What boundaries or changes have you considered?

Let's design a balanced lifestyle that supports your goals.` : demoReply = `\u{1F914} Thank you for sharing that. As your life coach, I want to understand your situation deeply to provide the most helpful guidance.

To help you best, could you tell me more about:
\u2022 What specifically is challenging about this situation?
\u2022 How long has this been on your mind?
\u2022 What outcome are you hoping to achieve?
\u2022 What have you already tried?

The more context you provide, the better I can support your growth journey.`, (0, import_node27.json)({ reply: demoReply });
  } catch (err) {
    return (0, import_node27.json)({ error: (err == null ? void 0 : err.message) || String(err) }, { status: 500 });
  }
}
var COACHING_TOPICS = [
  {
    emoji: "\u{1F4BC}",
    title: "Career Advancement",
    question: "How can I advance in my career or find more fulfilling work?"
  },
  {
    emoji: "\u{1F3AF}",
    title: "Leadership Skills",
    question: "I want to become a better leader. Where should I start?"
  },
  {
    emoji: "\u2696\uFE0F",
    title: "Work-Life Balance",
    question: "How can I achieve better balance between work and personal life?"
  },
  {
    emoji: "\u{1F31F}",
    title: "Confidence Building",
    question: "I struggle with self-doubt. How can I build more confidence?"
  },
  {
    emoji: "\u{1F3AF}",
    title: "Goal Setting",
    question: "I have big goals but struggle to achieve them. Any advice?"
  },
  {
    emoji: "\u{1F9D8}",
    title: "Stress Management",
    question: "How can I better manage stress and overwhelm in my life?"
  }
];
function Felix() {
  let fetcher = (0, import_react63.useFetcher)(), [messages, setMessages] = (0, import_react62.useState)([]), [input, setInput] = (0, import_react62.useState)(""), [loading, setLoading] = (0, import_react62.useState)(!1), [showTopics, setShowTopics] = (0, import_react62.useState)(!0), [showTopicsDropdown, setShowTopicsDropdown] = (0, import_react62.useState)(!1), endRef = (0, import_react62.useRef)(null), textareaRef = (0, import_react62.useRef)(null);
  (0, import_react62.useEffect)(() => {
    textareaRef.current && (textareaRef.current.style.height = "auto", textareaRef.current.style.height = textareaRef.current.scrollHeight + "px");
  }, [input]), (0, import_react62.useEffect)(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      let d = fetcher.data, makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, replyText = typeof d.reply == "string" ? d.reply : void 0, errorText = typeof d.error == "string" ? d.error : void 0;
      replyText ? setMessages((prev) => [...prev, { id: makeId(), role: "assistant", text: replyText }]) : errorText && setMessages((prev) => [...prev, { id: makeId(), role: "assistant", text: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment." }]), setLoading(!1), setTimeout(() => {
        var _a;
        return (_a = endRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [fetcher.state, fetcher.data]), (0, import_react62.useEffect)(() => {
    messages.length > 0 && setShowTopics(!1);
  }, [messages.length]);
  function handleSubmit(e) {
    e == null || e.preventDefault();
    let text = input.trim();
    if (!text)
      return;
    let makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setMessages((prev) => [...prev, { id: makeId(), role: "user", text }]), setInput(""), setLoading(!0);
    let fd = new FormData();
    fd.append("message", text), fetcher.submit(fd, { method: "post", action: "/felix" });
  }
  function handleTopicClick(question) {
    setInput(question), setTimeout(() => {
      handleSubmit();
    }, 100);
  }
  function handleKeyDown(e) {
    e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSubmit());
  }
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50/30 via-slate-50 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-0 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(HeaderNavigation5, {}),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "w-full sm:max-w-4xl sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white font-bold text-lg", children: "F" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "text-2xl sm:text-3xl font-black bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent", children: "FelixGPT" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Your AI Life Coach & Leadership Mentor" })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ThemeSwitcher, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-none sm:rounded-3xl shadow-lg sm:shadow-2xl border-0 sm:border border-slate-200/50 dark:border-slate-700/50 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "border-b border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-900/20 px-4 sm:px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h2", { className: "font-semibold text-slate-900 dark:text-white", children: "Life Coaching Session" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: messages.length === 0 ? "Ready to transform your life?" : `${messages.length / 2} messages exchanged` })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: `w-2 h-2 rounded-full ${loading ? "bg-yellow-500 animate-pulse" : "bg-green-500"}` }),
            loading ? "Thinking..." : "Online"
          ] })
        ] }) }),
        messages.length === 0 && showTopics && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "sm:hidden border-b border-slate-200/50 dark:border-slate-700/50 px-4 py-3 bg-slate-50/30 dark:bg-slate-800/20", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
            "button",
            {
              onClick: () => setShowTopicsDropdown(!showTopicsDropdown),
              className: "w-full flex items-center justify-between px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 text-slate-900 dark:text-white font-medium",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { className: "w-5 h-5 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "Coaching Topics" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { className: `w-5 h-5 transition-transform duration-300 ${showTopicsDropdown ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) })
              ]
            }
          ),
          showTopicsDropdown && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "mt-3 grid grid-cols-1 gap-2 animate-in fade-in slide-in-from-top-2 duration-200", children: COACHING_TOPICS.map((topic, index) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            "button",
            {
              onClick: () => {
                handleTopicClick(topic.question), setShowTopicsDropdown(!1);
              },
              className: "group text-left p-3 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200",
              children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-lg", children: topic.emoji }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex-1 text-left", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { className: "font-semibold text-slate-900 dark:text-white text-sm", children: topic.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-xs text-slate-600 dark:text-slate-400 line-clamp-1", children: topic.question })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex flex-col gap-6 max-h-[60vh] overflow-auto px-4 sm:px-6 py-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600", children: [
          messages.length === 0 && showTopics && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "max-w-[85%] bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-2xl rounded-bl-none px-6 py-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white font-bold text-sm", children: "F" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { className: "font-semibold text-slate-900 dark:text-white", children: "Welcome to FelixGPT! \u{1F30A}" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Your AI Life Coach" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-slate-700 dark:text-slate-300 leading-relaxed", children: "I'm ready to support your journey." })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: COACHING_TOPICS.map((topic, index) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
              "button",
              {
                onClick: () => handleTopicClick(topic.question),
                className: "group text-left p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "text-2xl mb-2 group-hover:scale-110 transition-transform duration-300", children: topic.emoji }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { className: "font-semibold text-slate-900 dark:text-white mb-1", children: topic.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-sm text-slate-600 dark:text-slate-400 line-clamp-2", children: topic.question })
                ]
              },
              index
            )) })
          ] }),
          messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `max-w-[85%] flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${m.role === "user" ? "bg-gradient-to-br from-emerald-500 to-teal-600" : "bg-gradient-to-br from-blue-500 to-emerald-500"}`, children: m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white font-bold text-sm", children: "Y" }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white font-bold text-sm", children: "F" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: `flex-1 min-w-0 ${m.role === "user" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl rounded-br-none" : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl rounded-bl-none border border-slate-200/50 dark:border-slate-700/50"} px-4 py-3 shadow-sm`, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "whitespace-pre-wrap leading-relaxed", children: m.text }) })
          ] }) }, m.id)),
          loading && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex justify-start", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "max-w-[85%] flex gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white font-bold text-sm", children: "F" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-200/50 dark:border-slate-700/50", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-2 text-slate-600 dark:text-slate-400", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-sm", children: "Thinking deeply about your situation..." })
            ] }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { ref: endRef })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "border-t border-slate-200/50 dark:border-slate-700/50 px-4 sm:px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("form", { onSubmit: handleSubmit, className: "flex gap-3 items-end", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex-1 relative", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              "textarea",
              {
                ref: textareaRef,
                value: input,
                onChange: (e) => setInput(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: "Share what's on your mind... (Press Enter to send, Shift+Enter for new line)",
                className: "w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none min-h-[60px] max-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 scrollbar-thin",
                disabled: loading,
                rows: 1
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              "button",
              {
                type: "submit",
                disabled: loading || !input.trim(),
                className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group",
                children: loading ? /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-sm", children: "Thinking" })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { className: "w-5 h-5 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 5l7 7-7 7M5 5l7 7-7 7" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-sm", children: "Send" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "mt-3 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "FelixGPT may makes mistakes." }) })
        ] })
      ] })
    ] })
  ] });
}
function HeaderNavigation5() {
  let navigate = (0, import_react63.useNavigate)(), handleFeedback = () => {
    window.open("/feedback", "_blank", "width=600,height=700");
  }, handleQuit = () => {
    typeof window < "u" && (window.location.href = "about:blank", window.close(), setTimeout(() => navigate("/"), 100));
  }, navMainItems2 = [
    {
      to: "/",
      text: "Dashboard",
      icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_icons_react11.IconDashboard, { className: "icon" })
    },
    {
      to: "/felix",
      text: "Chat with AI Coach",
      icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_icons_react11.IconRobot, { className: "icon" })
    },
    {
      to: "/signup-choice",
      text: "Continue to Coachify Platform",
      icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_icons_react11.IconArrowRight, { className: "icon" })
    }
  ], actionItems = [
    {
      to: "#",
      text: "Feedback",
      icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_icons_react11.IconMessage, { className: "icon" }),
      action: handleFeedback
    },
    {
      to: "#",
      text: "Quit",
      icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_icons_react11.IconLogout, { className: "icon" }),
      action: handleQuit
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    "header",
    {
      className: cn(
        "z-10 select-none",
        "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950",
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("nav", { className: "w-full max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("ul", { className: "flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(NavigationList5, { navItems: navMainItems2 }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(NavigationList5, { navItems: actionItems })
      ] }) }) })
    }
  );
}
function NavigationList5({ navItems }) {
  let isScreenLarge = useScreenLarge();
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: navItems.map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    TooltipAuto,
    {
      content: navItem.text,
      className: "hidden lg:block",
      side: isScreenLarge ? "right" : "top",
      children: navItem.action ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        "button",
        {
          onClick: navItem.action,
          className: cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200 w-full",
            "text-stone-600 dark:text-stone-400",
            "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
            navItem.text === "Quit" && "hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/50 dark:hover:text-red-100"
          ),
          children: navItem.icon
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        import_react63.NavLink,
        {
          to: navItem.to,
          className: ({ isActive }) => cn(
            "grid place-content-center gap-2 rounded-md p-2",
            "font-medium transition-colors duration-200",
            "text-stone-600 dark:text-stone-400",
            isActive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/70" : "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100"
          ),
          children: navItem.icon
        }
      )
    }
  ) }, navItem.text)) });
}

// app/routes/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => TermsOfUse
});
var import_react64 = require("@remix-run/react"), import_jsx_runtime59 = require("react/jsx-runtime");
function TermsOfUse() {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("main", { className: "max-w-4xl mx-auto p-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h1", { className: "text-3xl font-bold mb-4", children: "Terms of Use" }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "mb-4", children: "Effective date: November 16, 2025" }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Acceptance" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "By accessing or using Coachify, you agree to these Terms of Use." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Eligibility" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Users must be old enough to form a binding contract in their jurisdiction, or have parental consent." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Account Responsibility" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Users are responsible for maintaining the confidentiality of their account credentials and for all activity that occurs under their accounts." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Acceptable Use" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Prohibited activities include illegal acts, harassment, abusive content, spamming, and attempts to break or interfere with the system." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Intellectual Property" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Coachify's code is open-source. Users retain ownership of content they create (posts, AI conversations) but grant Coachify a license to host and display that content." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Disclaimers & Limitation of Liability" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: 'The service is provided "as is" and is a prototype. There are no warranties regarding reliability or continuity. The AI Coach and community are for informational purposes only and do not replace professional advice.' }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "To the fullest extent permitted by law, Coachify and its creator are not liable for any direct, indirect, incidental, or consequential damages arising from use of the service." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Indemnification" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Users agree to indemnify Coachify against claims resulting from misuse or violation of these terms." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Termination" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "Coachify may terminate or suspend access for violations of these terms." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-xl font-semibold", children: "Governing Law" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { children: "These terms are governed by the laws of Belgium." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("p", { children: [
        "Contact: ",
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "mailto:kwitondafelix6@gmail.com", className: "text-blue-600", children: "kwitondafelix6@gmail.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react64.Link, { to: "/", children: "Back to Home" }) })
    ] })
  ] });
}

// app/routes/ping.tsx
var ping_exports = {};
__export(ping_exports, {
  loader: () => loader23
});
var import_node28 = require("@remix-run/node");
function loader23() {
  return (0, import_node28.json)({
    message: "\u{1F427} Ping",
    success: !0
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-CYFVJXGH.js", imports: ["/build/_shared/chunk-KBLCOIOC.js", "/build/_shared/chunk-3RBGSDJQ.js", "/build/_shared/chunk-P6WDVL5F.js", "/build/_shared/chunk-OCZ35EVD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J3FBYB27.js", imports: ["/build/_shared/chunk-TFBYCRFC.js", "/build/_shared/chunk-F37WXFTH.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-R2MH3O2W.js", "/build/_shared/chunk-RHFQS5OV.js", "/build/_shared/chunk-X2FHOKEC.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$username._index": { id: "routes/$username._index", parentId: "root", path: ":username", index: !0, caseSensitive: void 0, module: "/build/routes/$username._index-GVQLQXJM.js", imports: ["/build/_shared/chunk-KQBCBTL6.js", "/build/_shared/chunk-C3TBRFRM.js", "/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-ETRA5BF5.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-XZCQ7J6O.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$username.broadcasts.$id._index": { id: "routes/$username.broadcasts.$id._index", parentId: "root", path: ":username/broadcasts/:id", index: !0, caseSensitive: void 0, module: "/build/routes/$username.broadcasts.$id._index-OCKNSY2X.js", imports: ["/build/_shared/chunk-C3TBRFRM.js", "/build/_shared/chunk-ETRA5BF5.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-E7Z5WAE3.js", "/build/_shared/chunk-XZCQ7J6O.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$username.broadcasts.$id.edit._index": { id: "routes/$username.broadcasts.$id.edit._index", parentId: "root", path: ":username/broadcasts/:id/edit", index: !0, caseSensitive: void 0, module: "/build/routes/$username.broadcasts.$id.edit._index-XL2OSV4B.js", imports: ["/build/_shared/chunk-C3TBRFRM.js", "/build/_shared/chunk-NLFEGUKO.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-E7Z5WAE3.js", "/build/_shared/chunk-XZCQ7J6O.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_example.pagination": { id: "routes/_example.pagination", parentId: "root", path: "pagination", index: void 0, caseSensitive: void 0, module: "/build/routes/_example.pagination-WJZO74PN.js", imports: ["/build/_shared/chunk-HOHX5CWX.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QSEICNLE.js", imports: ["/build/_shared/chunk-SZSOKLAT.js", "/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-XZCQ7J6O.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.coaching": { id: "routes/api.coaching", parentId: "root", path: "api/coaching", index: void 0, caseSensitive: void 0, module: "/build/routes/api.coaching-EHLUJ5XG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user-tags": { id: "routes/api.user-tags", parentId: "root", path: "api/user-tags", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-tags-NOCZTTSK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.usernames": { id: "routes/api.usernames", parentId: "root", path: "api/usernames", index: void 0, caseSensitive: void 0, module: "/build/routes/api.usernames-ARHV6YLL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.users": { id: "routes/api.users", parentId: "root", path: "api/users", index: void 0, caseSensitive: void 0, module: "/build/routes/api.users-BAQUG5AJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/broadcasts": { id: "routes/broadcasts", parentId: "root", path: "broadcasts", index: void 0, caseSensitive: void 0, module: "/build/routes/broadcasts-FX26G6QX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/broadcasts._index": { id: "routes/broadcasts._index", parentId: "routes/broadcasts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/broadcasts._index-DTFFCJFT.js", imports: ["/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-NLFEGUKO.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-ETRA5BF5.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-E7Z5WAE3.js", "/build/_shared/chunk-XZCQ7J6O.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-HOHX5CWX.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-FPNUDR2Q.js", "/build/_shared/chunk-R2MH3O2W.js", "/build/_shared/chunk-RHFQS5OV.js", "/build/_shared/chunk-X2FHOKEC.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/coach": { id: "routes/coach", parentId: "root", path: "coach", index: void 0, caseSensitive: void 0, module: "/build/routes/coach-LAJOHD5A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/coach-updated": { id: "routes/coach-updated", parentId: "root", path: "coach-updated", index: void 0, caseSensitive: void 0, module: "/build/routes/coach-updated-ZFGBP2NE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/coachee": { id: "routes/coachee", parentId: "root", path: "coachee", index: void 0, caseSensitive: void 0, module: "/build/routes/coachee-XXSR5YVH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feedback": { id: "routes/feedback", parentId: "root", path: "feedback", index: void 0, caseSensitive: void 0, module: "/build/routes/feedback-XLK5VLS4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/felix": { id: "routes/felix", parentId: "root", path: "felix", index: void 0, caseSensitive: void 0, module: "/build/routes/felix-I7VIKP3K.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-HUZD34C3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/mentees": { id: "routes/mentees", parentId: "root", path: "mentees", index: void 0, caseSensitive: void 0, module: "/build/routes/mentees-IKRX4KFZ.js", imports: ["/build/_shared/chunk-SZSOKLAT.js", "/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-HOHX5CWX.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/mentors": { id: "routes/mentors", parentId: "root", path: "mentors", index: void 0, caseSensitive: void 0, module: "/build/routes/mentors-MWP6S4IF.js", imports: ["/build/_shared/chunk-SZSOKLAT.js", "/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-JOUSK4XN.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-HOHX5CWX.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ping": { id: "routes/ping", parentId: "root", path: "ping", index: void 0, caseSensitive: void 0, module: "/build/routes/ping-KJJ5KIYI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy": { id: "routes/privacy", parentId: "root", path: "privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-SDPQ3I7M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-Y4PL25WW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-3SUIHKQC.js", imports: ["/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-ETRA5BF5.js", "/build/_shared/chunk-6D54HQ37.js", "/build/_shared/chunk-HOHX5CWX.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-V56SCBML.js", imports: ["/build/_shared/chunk-FPNUDR2Q.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings._index": { id: "routes/settings._index", parentId: "routes/settings", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/settings._index-RQJOAKB5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.account": { id: "routes/settings.account", parentId: "routes/settings", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.account-CRBMH437.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.appearance": { id: "routes/settings.appearance", parentId: "routes/settings", path: "appearance", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.appearance-5HS25VQX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.danger": { id: "routes/settings.danger", parentId: "routes/settings", path: "danger", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.danger-3SW4FH4R.js", imports: ["/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-XZCQ7J6O.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-X2FHOKEC.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.email": { id: "routes/settings.email", parentId: "routes/settings", path: "email", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.email-OY3UIPD5.js", imports: ["/build/_shared/chunk-5BLUTFRR.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.general": { id: "routes/settings.general", parentId: "routes/settings", path: "general", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.general-RPNVU3GW.js", imports: ["/build/_shared/chunk-5BLUTFRR.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.notifications": { id: "routes/settings.notifications", parentId: "routes/settings", path: "notifications", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.notifications-ONH6JIB6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.password": { id: "routes/settings.password", parentId: "routes/settings", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.password-6NOUEIHR.js", imports: ["/build/_shared/chunk-KQBCBTL6.js", "/build/_shared/chunk-5BLUTFRR.js", "/build/_shared/chunk-F37WXFTH.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.profile": { id: "routes/settings.profile", parentId: "routes/settings", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.profile-ICD2R4OH.js", imports: ["/build/_shared/chunk-5BLUTFRR.js", "/build/_shared/chunk-NLFEGUKO.js", "/build/_shared/chunk-SPLSO47S.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-AWA5B7DL.js", "/build/_shared/chunk-R75FSW43.js", "/build/_shared/chunk-NZHOKTLY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-U5A2LGJS.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings.tags": { id: "routes/settings.tags", parentId: "routes/settings", path: "tags", index: void 0, caseSensitive: void 0, module: "/build/routes/settings.tags-BBR2VG4N.js", imports: ["/build/_shared/chunk-OVSG33BC.js", "/build/_shared/chunk-DST4YPNY.js", "/build/_shared/chunk-NNKWUMIG.js", "/build/_shared/chunk-DEIQMVTL.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signin": { id: "routes/signin", parentId: "root", path: "signin", index: void 0, caseSensitive: void 0, module: "/build/routes/signin-JQNIEXIU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-REFVRCIY.js", imports: ["/build/_shared/chunk-NU4D7KCL.js", "/build/_shared/chunk-S2DBOKJQ.js", "/build/_shared/chunk-XRGMMVU3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup-choice": { id: "routes/signup-choice", parentId: "root", path: "signup-choice", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-choice-6ZC5JLRP.js", imports: ["/build/_shared/chunk-NU4D7KCL.js", "/build/_shared/chunk-S2DBOKJQ.js", "/build/_shared/chunk-XRGMMVU3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup.coach": { id: "routes/signup.coach", parentId: "routes/signup", path: "coach", index: void 0, caseSensitive: void 0, module: "/build/routes/signup.coach-2GT3OPCY.js", imports: ["/build/_shared/chunk-TFBYCRFC.js", "/build/_shared/chunk-RHFQS5OV.js", "/build/_shared/chunk-X2FHOKEC.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup.user": { id: "routes/signup.user", parentId: "routes/signup", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/signup.user-GUSA4G4Z.js", imports: ["/build/_shared/chunk-TFBYCRFC.js", "/build/_shared/chunk-RHFQS5OV.js", "/build/_shared/chunk-X2FHOKEC.js", "/build/_shared/chunk-OF7SY753.js", "/build/_shared/chunk-2DTYBHFU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms": { id: "routes/terms", parentId: "root", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-YNKVAKDX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "6839ecca", hmr: void 0, url: "/build/manifest-6839ECCA.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$username.broadcasts.$id.edit._index": {
    id: "routes/$username.broadcasts.$id.edit._index",
    parentId: "root",
    path: ":username/broadcasts/:id/edit",
    index: !0,
    caseSensitive: void 0,
    module: username_broadcasts_id_edit_index_exports
  },
  "routes/$username.broadcasts.$id._index": {
    id: "routes/$username.broadcasts.$id._index",
    parentId: "root",
    path: ":username/broadcasts/:id",
    index: !0,
    caseSensitive: void 0,
    module: username_broadcasts_id_index_exports
  },
  "routes/settings.notifications": {
    id: "routes/settings.notifications",
    parentId: "routes/settings",
    path: "notifications",
    index: void 0,
    caseSensitive: void 0,
    module: settings_notifications_exports
  },
  "routes/settings.appearance": {
    id: "routes/settings.appearance",
    parentId: "routes/settings",
    path: "appearance",
    index: void 0,
    caseSensitive: void 0,
    module: settings_appearance_exports
  },
  "routes/_example.pagination": {
    id: "routes/_example.pagination",
    parentId: "root",
    path: "pagination",
    index: void 0,
    caseSensitive: void 0,
    module: example_pagination_exports
  },
  "routes/broadcasts._index": {
    id: "routes/broadcasts._index",
    parentId: "routes/broadcasts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: broadcasts_index_exports
  },
  "routes/settings.password": {
    id: "routes/settings.password",
    parentId: "routes/settings",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: settings_password_exports
  },
  "routes/$username._index": {
    id: "routes/$username._index",
    parentId: "root",
    path: ":username",
    index: !0,
    caseSensitive: void 0,
    module: username_index_exports
  },
  "routes/settings.account": {
    id: "routes/settings.account",
    parentId: "routes/settings",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: settings_account_exports
  },
  "routes/settings.general": {
    id: "routes/settings.general",
    parentId: "routes/settings",
    path: "general",
    index: void 0,
    caseSensitive: void 0,
    module: settings_general_exports
  },
  "routes/settings.profile": {
    id: "routes/settings.profile",
    parentId: "routes/settings",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: settings_profile_exports
  },
  "routes/settings.danger": {
    id: "routes/settings.danger",
    parentId: "routes/settings",
    path: "danger",
    index: void 0,
    caseSensitive: void 0,
    module: settings_danger_exports
  },
  "routes/settings._index": {
    id: "routes/settings._index",
    parentId: "routes/settings",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: settings_index_exports
  },
  "routes/settings.email": {
    id: "routes/settings.email",
    parentId: "routes/settings",
    path: "email",
    index: void 0,
    caseSensitive: void 0,
    module: settings_email_exports
  },
  "routes/api.user-tags": {
    id: "routes/api.user-tags",
    parentId: "root",
    path: "api/user-tags",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_tags_exports
  },
  "routes/api.usernames": {
    id: "routes/api.usernames",
    parentId: "root",
    path: "api/usernames",
    index: void 0,
    caseSensitive: void 0,
    module: api_usernames_exports
  },
  "routes/coach-updated": {
    id: "routes/coach-updated",
    parentId: "root",
    path: "coach-updated",
    index: void 0,
    caseSensitive: void 0,
    module: coach_updated_exports
  },
  "routes/settings.tags": {
    id: "routes/settings.tags",
    parentId: "routes/settings",
    path: "tags",
    index: void 0,
    caseSensitive: void 0,
    module: settings_tags_exports
  },
  "routes/signup-choice": {
    id: "routes/signup-choice",
    parentId: "root",
    path: "signup-choice",
    index: void 0,
    caseSensitive: void 0,
    module: signup_choice_exports
  },
  "routes/api.coaching": {
    id: "routes/api.coaching",
    parentId: "root",
    path: "api/coaching",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/signup.coach": {
    id: "routes/signup.coach",
    parentId: "routes/signup",
    path: "coach",
    index: void 0,
    caseSensitive: void 0,
    module: signup_coach_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/signup.user": {
    id: "routes/signup.user",
    parentId: "routes/signup",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: signup_user_exports
  },
  "routes/broadcasts": {
    id: "routes/broadcasts",
    parentId: "root",
    path: "broadcasts",
    index: void 0,
    caseSensitive: void 0,
    module: broadcasts_exports
  },
  "routes/api.users": {
    id: "routes/api.users",
    parentId: "root",
    path: "api/users",
    index: void 0,
    caseSensitive: void 0,
    module: api_users_exports
  },
  "routes/feedback": {
    id: "routes/feedback",
    parentId: "root",
    path: "feedback",
    index: void 0,
    caseSensitive: void 0,
    module: feedback_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/coachee": {
    id: "routes/coachee",
    parentId: "root",
    path: "coachee",
    index: void 0,
    caseSensitive: void 0,
    module: coachee_exports
  },
  "routes/mentees": {
    id: "routes/mentees",
    parentId: "root",
    path: "mentees",
    index: void 0,
    caseSensitive: void 0,
    module: mentees_exports
  },
  "routes/mentors": {
    id: "routes/mentors",
    parentId: "root",
    path: "mentors",
    index: void 0,
    caseSensitive: void 0,
    module: mentors_exports
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/signin": {
    id: "routes/signin",
    parentId: "root",
    path: "signin",
    index: void 0,
    caseSensitive: void 0,
    module: signin_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/coach": {
    id: "routes/coach",
    parentId: "root",
    path: "coach",
    index: void 0,
    caseSensitive: void 0,
    module: coach_exports
  },
  "routes/felix": {
    id: "routes/felix",
    parentId: "root",
    path: "felix",
    index: void 0,
    caseSensitive: void 0,
    module: felix_exports
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/ping": {
    id: "routes/ping",
    parentId: "root",
    path: "ping",
    index: void 0,
    caseSensitive: void 0,
    module: ping_exports
  }
};

// server.ts
var import_node29 = require("@remix-run/node"), import_node_http = __toESM(require("node:http")), import_node_fs = __toESM(require("node:fs")), import_node_path = __toESM(require("node:path")), import_node_url = require("node:url"), import_meta = {}, __dirname = import_node_path.default.dirname((0, import_node_url.fileURLToPath)(import_meta.url));
(0, import_node29.installGlobals)();
var handler = (0, import_node29.createRequestHandler)(server_build_exports, "production"), PORT = process.env.PORT || 3e3, server = import_node_http.default.createServer(async (req, res) => {
  var _a;
  try {
    let publicPath2 = import_node_path.default.join(__dirname, "public", req.url);
    if (req.method === "GET" && import_node_fs.default.existsSync(publicPath2) && import_node_fs.default.statSync(publicPath2).isFile()) {
      let content = import_node_fs.default.readFileSync(publicPath2), contentType = getContentType(publicPath2);
      res.writeHead(200, { "Content-Type": contentType }), res.end(content);
      return;
    }
    let host = req.headers.host || `localhost:${PORT}`, url = `${req.headers["x-forwarded-proto"] || "http"}://${host}${req.url}`, request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD"].includes(((_a = req.method) == null ? void 0 : _a.toUpperCase()) || "") ? void 0 : req
    }), response = await handler(request);
    res.writeHead(response.status, Object.fromEntries(response.headers)), res.end(await response.text());
  } catch (err) {
    console.error(err), res.headersSent || (res.statusCode = 500, res.end("Internal Server Error"));
  }
});
function getContentType(filePath) {
  let ext = import_node_path.default.extname(filePath).toLowerCase();
  return {
    ".js": "application/javascript",
    ".css": "text/css",
    ".html": "text/html",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject"
  }[ext] || "application/octet-stream";
}
server.listen(PORT, () => {
  console.log(`Remix app listening on port ${PORT}`);
});
