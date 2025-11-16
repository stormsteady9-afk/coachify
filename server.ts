import * as build from "@remix-run/dev/server-build"
import { installGlobals, createRequestHandler as createRemixHandler } from "@remix-run/node"
import http from "node:http"

installGlobals()

const handler = createRemixHandler(build, "production")

const PORT = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
	try {
		// Construct full URL from relative path and Host header
		const host = req.headers.host || `localhost:${PORT}`
		const protocol = req.headers["x-forwarded-proto"] || "http"
		const url = `${protocol}://${host}${req.url}`

		// Create a Request object and pass to handler
		const request = new Request(url, {
			method: req.method,
			headers: req.headers as HeadersInit,
			body: ["GET", "HEAD"].includes(req.method?.toUpperCase() || "") ? undefined : req,
		})

		const response = await handler(request)
		res.writeHead(response.status, Object.fromEntries(response.headers))
		res.end(await response.text())
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
