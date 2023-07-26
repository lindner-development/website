import { BlogPost, BlogPostSkeleton, contentfulClient } from '../../../contentful';
import type { APIRoute } from 'astro';
import rss, { RSSFeedItem } from '@astrojs/rss';
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export const get: APIRoute = async ({ params }) => {
    const { language } = params;

    const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
        content_type: "blogPost",
        locale: language == "de" ? "de" : "en-US",
    });

    const blogPosts: BlogPost[] = entries.items.map((item) => item.fields);

    return rss({
        title: "Lindner IT Blog",
        description: "Lindner IT Blog",
        site: import.meta.env.SITE,
        items: blogPosts.map<RSSFeedItem>((blogPost) => {
            return {
                title: blogPost.title,
                description: blogPost.metaDescription,
                link: `${import.meta.env.SITE}blog/${blogPost.category.fields.slug}/${blogPost.slug}`,
                //pubDate: blogPost.date,
                pubDate: new Date(),
                author: blogPost.author.fields.name,
                draft: false,
                content: documentToPlainTextString(blogPost.content),
            }
        }),
        stylesheet: `/rss.xsl`,
        trailingSlash: false,
        customData: `<language>${language}</language>`,
    });
};