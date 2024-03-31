import { defineConfig } from 'astro/config';
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
//import compressor from "astro-compressor";
//import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
//import webmanifest from 'astro-webmanifest'; // TODO

//import deno from '@astrojs/deno';
//import nodejs from '@astrojs/node';
import partytown from "@astrojs/partytown";
//import sentry from "@sentry/astro";
//import spotlightjs from "@spotlightjs/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  //adapter: deno(),
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: 'cloudflare',
    routes: {
      extend: {
        exclude: [
          { pattern: "/icons/*" },
          { pattern: "/icons\\*" },
        ]
      }
    }
  }),
  prefetch: true,
  integrations: [solid(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: 'en-US',
        de: 'de-DE'
      }
    },
    lastmod: new Date(),
    changefreq: 'monthly'
  }), /*critters(), rome()*/, partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), /*compress(), compressor({
    //brotli: true,
    //gzip: true,
    brotli: false,
    gzip: false,
    fileExtensions: [".html", ".xml", ".css", ".js", ".json", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".ico", ".svg", ".jxl", ".xsl", ".woff2", ".woff", ".ttf", ".eot", ".otf", ".txt", ".md", ".webmanifest", ".mp4", ".webm", ".ogg", ".mp3", ".wav", ".flac", ".aac", ".m4a", ".oga", ".opus", ".svgz", ".zip", ".gz", ".tgz", ".tar", ".rar", ".7z", ".bz2", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".odt", ".ods", ".odp", ".csv", ".rtf", ".epub", ".mobi", ".apk", ".exe", ".swf", ".jar", ".gif", ".bmp", ".ico", ".tif", ".tiff", ".psd", ".ai", ".indd", ".webp", ".avif", ".svg", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".ogg", ".m4p", ".m4v", ".avi", ".wmv", ".mov", ".qt", ".flv", ".swf", ".avchd", ".mkv", ".webm", ".mng", ".asf", ".wmv", ".avi", ".mp4", ".m4v", ".mpg", ".mpeg", ".mov", ".webm", ".flv", ".mng", ".asx", ".asf", ".wmv", ".avi", ".mp4", ".m4v", ".mpg", ".mpeg", ".mov", ".webm", ".flv", ".mng", ".asx", ".asf", ".wmv", ".avi", ".mp4", ".m4v", ".mpg", ".mpeg", ".mov", ".webm", ".flv", ".mng", ".asx", ".asf", ".wmv", ".avi", ".mp4", ".m4v", ".mpg", ".mpeg", ".mov", ".webm", ".flv", ".mng", ".asx", ".asf", ".wmv", ".svg", ".svgz", ".webp", ".avif", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".ico", ".tif", ".tiff", ".psd", ".raw", ".bmp"]
  })*/, /*sentry({
    dsn: "https://f69d7d9f1a48aecc94b3c4ef7a45aa77@o4506350384906240.ingest.sentry.io/4506350397489152",
    sourceMapsUploadOptions: {
      project: "website",
      authToken: process.env.SENTRY_AUTH_TOKEN
    },
    environment: process.env.NODE_ENV?.toLowerCase()
  }), spotlightjs()*/],
  //image: {
  //  service: sharpImageService(),
  //},
  //output: "hybrid",
  output: "server",
  site: "https://lindnerit.io/",
  compressHTML: true,
  /*vite: {
    build: {
      modulePreload: true,
      minify: "terser"
    }
  }*/
});