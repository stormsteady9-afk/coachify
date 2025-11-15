const { createRequestHandler } = require("@remix-run/node");
const build = require("../../dist/index.js");

// Create a Remix request handler using the server build
const handler = createRequestHandler({ build, mode: process.env.NODE_ENV || "production" });

// Netlify Function handler (CommonJS)
module.exports = async function (event, context) {
  try {
    // Reconstruct full URL
    const host = (event.headers && (event.headers['host'] || event.headers['Host'])) || process.env.URL || 'localhost';
    const protocol = (event.headers && event.headers['x-forwarded-proto']) || 'https';
    const query = event.rawQuery || (event.queryStringParameters && Object.keys(event.queryStringParameters).length ? new URLSearchParams(event.queryStringParameters).toString() : '');
    const url = `${protocol}://${host}${event.path}${query ? '?' + query : ''}`;

    const requestInit = {
      method: event.httpMethod,
      headers: event.headers || {},
      // Netlify passes the body as a string; when base64 encoded the flag is set
      body: event.isBase64Encoded && event.body ? Buffer.from(event.body, 'base64') : (event.body || undefined),
    };

    const request = new globalThis.Request(url, requestInit);

    const response = await handler(request);

    // Convert Response to Netlify Lambda result
    const resHeaders = {};
    for (const [k, v] of response.headers) {
      resHeaders[k] = v;
    }

    const buffer = await response.arrayBuffer();
    const body = Buffer.from(buffer).toString('utf8');

    return {
      statusCode: response.status,
      headers: resHeaders,
      body,
    };
  } catch (err) {
    console.error('Function error', err);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
