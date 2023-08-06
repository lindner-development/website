import contentful, { Asset, AssetLink } from "contentful";
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

if (process.env.CONTENTFUL_SPACE_ID === undefined) {
    console.error("CONTENTFUL_SPACE_ID is undefined. This will produce undefined behavior!");
    throw new Error("CONTENTFUL_SPACE_ID is undefined.");
}

let contentfulToken: string | undefined;
let contentfulHost: string = "cdn.contentful.com";
if (process.env.NODE_ENV?.toLowerCase() !== "production") {
    contentfulHost = "preview.contentful.com";
    contentfulToken = process.env.CONTENTFUL_PREVIEW_TOKEN;
    console.log(`Contentful environment: Preview (${contentfulHost})`)
    if (contentfulToken === undefined) {
        console.error("CONTENTFUL_PREVIEW_TOKEN is undefined.");
        throw new Error("CONTENTFUL_PREVIEW_TOKEN is undefined.");
    }
}
else {
    contentfulToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
    console.log(`Contentful environment: Production (${contentfulHost})`)
    if (contentfulToken === undefined) {
        console.error("CONTENTFUL_DELIVERY_TOKEN is undefined.");
        throw new Error("CONTENTFUL_DELIVERY_TOKEN is undefined.");
    }
}

// Do not use import.meta.env because import.meta.envs are replaced in build-time
// Secrets should be runtime-only
export const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: contentfulToken,
    host: contentfulHost,
});