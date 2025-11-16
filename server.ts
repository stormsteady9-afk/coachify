import * as build from "@remix-run/dev/server-build"
import { installGlobals, createRequestHandler as createRemixHandler } from "@remix-run/node"
import http from "node:http"
import fs from "node:fs"
import path from "node:path"

const __dirname = process.cwd()

installGlobals()

const handler = createRemixHandler(build, "production")

const PORT = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
	try {
		// Try to serve static files from public directory first
		const publicPath = path.join(__dirname, "public", req.url)
		if (req.method === "GET" && fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) {
			const content = fs.readFileSync(publicPath)
			const contentType = getContentType(publicPath)
			res.writeHead(200, { "Content-Type": contentType })
			res.end(content)
			return
		}

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

function getContentType(filePath: string): string {
	const ext = path.extname(filePath).toLowerCase()
	const types: Record<string, string> = {
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
		".eot": "application/vnd.ms-fontobject",
	}
	return types[ext] || "application/octet-stream"
}

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Remix app listening on port ${PORT}`)
})
