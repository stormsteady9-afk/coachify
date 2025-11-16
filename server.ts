import * as build from "@remix-run/dev/server-build"
import { installGlobals } from "@remix-run/node"
import { createRequestHandler } from "@remix-run/node"
import http from "node:http"

installGlobals()

const handler = createRequestHandler(build, process.env.NODE_ENV || "production")

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	// createRequestHandler returns a Promise for ESM compatibility; handle errors
	try {
		// @ts-expect-error - handler can be awaited
		const maybePromise = handler(req, res)
		if (maybePromise && typeof maybePromise.then === 'function') {
			maybePromise.catch((err: unknown) => {
				// ensure we don't leave the response hanging
				// eslint-disable-next-line no-console
				console.error(err)
				if (!res.headersSent) {
					res.statusCode = 500
					res.end("Internal Server Error")
				}
			})
		}
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err)
		if (!res.headersSent) {
			res.statusCode = 500
			res.end("Internal Server Error")
		}
	}
})

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Remix app listening on port ${PORT}`)
})

export default server
