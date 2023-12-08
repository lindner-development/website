import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async function get({ params, request }) {
    let asset = params.asset;
    let uid = params.uid;
    let image = params.image;
    let reqUrl = new URL(request.url);
    let format = reqUrl.searchParams.get("format");

    let width = reqUrl.searchParams.get("width");
    let height = reqUrl.searchParams.get("height");

    if (!asset || !uid || !image || !format) {
        return new Response("Invalid request", {
            status: 400
        });
    }

    if (format !== "webp" && format !== "png" && format !== "jpg" && format !== "jpeg" && format !== "avif") {
        return new Response("Invalid format", {
            status: 400
        });
    }

    const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID;
    if (contentfulSpaceId) {
        let requestUrl = new URL(`https://images.ctfassets.net/${contentfulSpaceId}/${asset}/${uid}/${image}`);
        requestUrl.searchParams.set("fm", format);
        if (width) {
            requestUrl.searchParams.set("w", width);
        }
        if (height) {
            requestUrl.searchParams.set("h", height);
        }
        const response = await fetch(requestUrl, {
            headers: {
                "X-Correlation-ID": request.headers.get("X-Correlation-ID") || ""
            },
            cache: 'force-cache'
        });

        if (response.status == 404) {
            return new Response("Not found", {
                status: 404
            });
        }

        const buffer = Buffer.from(await response.arrayBuffer());

        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Type": response.headers.get("Content-Type") || "image/webp",
                "Cache-Control": "public, max-age=31536000, immutable",
                "Expires": new Date(Date.now() + 31536000000).toUTCString()
            }
        });
    }
    else {
        console.error("No contentful space id found");
        return new Response("Internal CDN Error", {
            status: 500
        });
    }
}