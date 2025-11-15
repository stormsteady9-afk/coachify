//import { getAuth } from "@clerk/remix/ssr.server"
//import { redirect } from "@remix-run/node"
//import type { User } from "@clerk/remix/api.server"
//import type { DataFunctionArgs } from "@remix-run/node"

//export type ClerkUser = User

//export const getUser = async (request: Request) => {
 // const { userId } = await getAuth({ request, context: undefined as any, params: {} as any } as DataFunctionArgs)
 // return userId
//}

// Backwards-compatible `authenticator` shim
// Many places in the codebase still import `authenticator` from `~/services`.
// To avoid changing all call sites at once, expose a small shim that mirrors
// the subset of `remix-auth` functionality the app expects, implemented
// on top of Clerk server helpers.
//export const authenticator = {
  // If the user is authenticated returns an object like { id }
  // If not authenticated and `failureRedirect` is provided, throws a Remix redirect
 // isAuthenticated: async (
 //   request: Request,
  //  { failureRedirect }: { failureRedirect?: string } = {},
 // ) => {
   // const { userId } = await getAuth({ request, context: undefined as any, params: {} as any } as DataFunctionArgs)
   // if (!userId) {
   //   if (failureRedirect) throw redirect(failureRedirect)
      //return null
  //  }
 //   return { id: userId }
 // },

  // Logout shim -- for now this simply redirects to the provided location.
  // If you want to fully revoke Clerk sessions server-side, replace this
  // implementation with Clerk's session revocation API (clerkClient).
  //logout: (
   // _request: Request,
   // { redirectTo }: { redirectTo?: string } = {},
 // ) => {
    // Throwing a redirect here matches remix-auth behaviour (stop execution and return redirect)
   // throw redirect(redirectTo || "/signin")
  //},

  // Authenticate shim used for OAuth/form strategy flows in legacy code.
  // It checks whether a Clerk session exists and redirects accordingly.
 // authenticate: async (
 //   _provider: string,
 //   request: Request,
  //  options: { successRedirect?: string; failureRedirect?: string } = {},
  //) => {
   // const { userId } = await getAuth({ request, context: undefined as any, params: {} as any } as DataFunctionArgs)
   // if (userId) {
  //    return redirect(options.successRedirect || "/dashboard")
 //   }
 //   return redirect(options.failureRedirect || "/signin")
 // },
//}

// This file is now using Clerk for authentication. The shim above keeps
// existing imports working while we migrate call sites to Clerk-specific APIs.
