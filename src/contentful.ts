//import { AxiosHeaders, type AxiosRequestConfig, type AxiosResponse, type AxiosResponseHeaders, type InternalAxiosRequestConfig } from "axios";
import contentful, { type Asset, type AssetLink } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface Author {
    name: string;
    position: string;
    gender: string;
    twitterHandle: string;
}

export type AuthorSkeleton = {
    contentTypeId: "author";
    fields: {
        name: contentful.EntryFields.Symbol;
        position: contentful.EntryFields.Symbol;
        gender: contentful.EntryFields.Symbol;
        twitterHandle: contentful.EntryFields.Symbol;
    }
}

export interface BlogCategory {
    slug: string;
    displayName: string;
    description: Document;
}

export type BlogCategorySkeleton = {
    contentTypeId: "blogCategory";
    fields: {
        slug: contentful.EntryFields.Symbol;
        displayName: contentful.EntryFields.Symbol;
        description: contentful.EntryFields.RichText;
    }
}

export interface BlogPost {
    slug: string;
    category: BlogCategorySkeleton;
    keywords: string[];
    image: Asset;
    title: string;
    metaDescription: string;
    openGraphDescription: string;
    twitterDescription: string;
    author: AuthorSkeleton;
    content: Document;
}

export type BlogPostSkeleton = {
    contentTypeId: "blogPost";
    fields: {
        slug: contentful.EntryFields.Symbol;
        category: contentful.EntryFields.EntryLink<BlogCategorySkeleton>;
        keywords: contentful.EntryFields.Array<contentful.EntryFields.Symbol>;
        image: contentful.EntryFields.AssetLink;
        title: contentful.EntryFields.Symbol;
        metaDescription: contentful.EntryFields.Symbol;
        openGraphDescription: contentful.EntryFields.Symbol;
        twitterDescription: contentful.EntryFields.Symbol;
        author: contentful.EntryFields.EntryLink<AuthorSkeleton>;
        content: contentful.EntryFields.RichText;
    }
}

export interface ContentPage {
    title: string;
    metaTitle: string;
    openGraphTitle: string;
    metaDescription: string;
    openGraphDescription: string;
    openGraphImage: AssetLink;
    content: Document;
}

export type ContentPageSkeleton = {
    contentTypeId: "contentPage";
    fields: {
        title: contentful.EntryFields.Symbol;
        metaTitle: contentful.EntryFields.Symbol;
        openGraphTitle: contentful.EntryFields.Symbol;
        metaDescription: contentful.EntryFields.Symbol;
        openGraphDescription: contentful.EntryFields.Symbol;
        openGraphImage: contentful.EntryFields.AssetLink;
        content: contentful.EntryFields.RichText;
    }
}

if (import.meta.env.CONTENTFUL_SPACE_ID === undefined) {
    console.error("CONTENTFUL_SPACE_ID is undefined. This will produce undefined behavior!");
    throw new Error("CONTENTFUL_SPACE_ID is undefined.");
}

let contentfulToken: string | undefined;
let contentfulHost: string = "cdn.contentful.com";
if (import.meta.env.DEV) {
    contentfulHost = "preview.contentful.com";
    contentfulToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN;
    console.log(`Contentful environment: Preview (${contentfulHost})`)
    if (contentfulToken === undefined) {
        console.error("CONTENTFUL_PREVIEW_TOKEN is undefined.");
        throw new Error("CONTENTFUL_PREVIEW_TOKEN is undefined.");
    }
}
else {
    contentfulToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;
    console.log(`Contentful environment: Production (${contentfulHost})`)
    if (contentfulToken === undefined) {
        console.error("CONTENTFUL_DELIVERY_TOKEN is undefined.");
        throw new Error("CONTENTFUL_DELIVERY_TOKEN is undefined.");
    }
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID!,
    accessToken: contentfulToken,
    host: contentfulHost,
    /*adapter: async (config: AxiosRequestConfig) => {
        const url = new URL(`${config.baseURL}/${config.url}`);
        if (config.params) {
            for (const key of Object.keys(config.params)) {
                url.searchParams.append(key, config.params[key]);
            }
        }

        const headers: Record<string, string> = {};
        if (config.headers) {
            for (const k in config.headers) {
                const v = config.headers[k];
                headers[k] = v;
            }
        }
        const request = new Request(url.href, {
            method: config.method ? config.method.toUpperCase() : "GET",
            body: config.data,
            redirect: 'manual',
            headers: headers
            //headers: config.headers ? config.headers : {}
            // credentials: config.withCredentials ? 'include' : 'omit', // not implemented on CF
            //mode: 'cors' // not implemented on CF,
        });

        const response = await fetch(request);
        const responseHeaders: AxiosResponseHeaders = new AxiosHeaders();
        response.headers.forEach((value, key) => {
            responseHeaders[key] = value;
        });
        const axiosResp: AxiosResponse = {
            data: await response.json(),
            status: response.status,
            statusText: response.statusText,
            headers: responseHeaders,
            config: config as InternalAxiosRequestConfig<any>,
            request: request
        };
        return axiosResp;
    }*/
});