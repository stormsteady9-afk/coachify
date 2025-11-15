import { Form } from "@remix-run/react"

export function UserAuthSignInForm(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className="space-y-6" {...props}>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-brand px-4 py-2 text-white hover:bg-brand/90"
        >
          Sign In
        </button>
      </Form>
    </section>
  )
}
