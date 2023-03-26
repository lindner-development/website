export interface Meta {
    title: string;
    opengraphTitle: string;
    twitterTitle: string;
    subject: string;

    description: string;
    summary: string;
    opengraphDescription: string;
    twitterDescription: string;

    opengraphImage?: URL;
    twitterImage?: URL;

    revisedAt?: Date;

    keywords?: string[];
    jsonld?: Array<Record<string, unknown>>
}

export class MetaBuilder {
    #meta: Partial<Meta> = {};

    title(title: string, opengraph: string = title, twitter: string = title, subject: string = title): MetaBuilder {
        this.#meta.title = title;
        this.#meta.opengraphTitle = opengraph;
        this.#meta.twitterTitle = twitter;
        this.#meta.subject = subject;
        return this;
    }

    description(description: string, summary: string = description, opengraph: string = description, twitter: string = description): MetaBuilder {
        this.#meta.description = description;
        this.#meta.summary = summary;
        this.#meta.opengraphDescription = opengraph;
        this.#meta.twitterDescription = twitter;
        return this;
    }

    image(opengraph: URL, twitter: URL = opengraph): MetaBuilder {
        this.#meta.opengraphImage = opengraph;
        this.#meta.twitterImage = twitter;
        return this;
    }

    revisedAt(date: Date): MetaBuilder {
        this.#meta.revisedAt = date;
        return this;
    }

    keywords(keywords: string[]): MetaBuilder {
        this.#meta.keywords = keywords;
        return this;
    }

    jsonld(jsonld: Record<string, unknown>): MetaBuilder {
        if (this.#meta.jsonld === undefined) {
            this.#meta.jsonld = [jsonld];
        } else {
            this.#meta.jsonld.push(jsonld);
        }
        return this;
    }

    create(): Meta {
        return this.#meta as Meta;
    }
}