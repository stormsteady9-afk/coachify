const NODE_ENV = process.env.NODE_ENV

console.info(`Coachify is running on: ${NODE_ENV}\n`)

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "cjs",
  ignoredRouteFiles: ["**/.*"],

  // Use Remix default server (built-in)
  // server: NODE_ENV === "development" ? undefined : "./server.ts",
  // serverBuildPath: "dist/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",

  serverDependenciesToBundle: ["nanoid", "array-shuffle"],

  tailwind: true,
  postcss: true,

  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}
