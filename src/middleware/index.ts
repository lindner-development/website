import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    let response: Response;
    let requestReceivedUnix = Date.now();

    try {
        response = await next();
    }
    catch (e) {
        console.error(e);
        response = new Response("Internal Server Error - Please contact our operations team at info@lindnerit.io", {
            status: 500
        });
    }

    const correlationId = context.request.headers.get("X-Correlation-ID");
    if (correlationId) {
        response.headers.set("X-Correlation-ID", correlationId);
        response.headers.set("X-Lindner-CDN-Correlation-ID", correlationId);
    }
    if (response.status > 399) {
        response.headers.set("X-Lindner-CDN-Error-Code", response.status.toString());
    }
    response.headers.set("X-Lindner-CDN-Request-Received", requestReceivedUnix.toString());
    response.headers.set("X-Lindner-CDN-Request-Processed", Date.now().toString());
    return response;
});