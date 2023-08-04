import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (_context, next) => {
    try {
        return await next();
    }
    catch (e) {
        console.error(e);
        return new Response("Internal Server Error - Please contact our operations team at info@lindnerit.io", {
            status: 500,
            headers: {
                "X-Lindner-CDN-ERR": "500"
            }
        });
    }
});