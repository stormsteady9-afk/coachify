import { createRequestHandler } from "@remix-run/node";
import * as build from "../../dist/index.js";

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV || "production",
});

export const config = {
  path: "/*",
};

export default async (req) => {
  // Build the full request URL
  const url = new URL(req.url);
  
  // Create a Web API Request from the netlify function request
  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body:
      req.method !== "GET" && req.method !== "HEAD" && req.body
        ? Buffer.isBuffer(req.body)
          ? req.body
          : Buffer.from(req.body)
        : undefined,
  });

  // Call the Remix handler
  const response = await handler(request);
  
  // Return as Netlify function response
  return response;
};
