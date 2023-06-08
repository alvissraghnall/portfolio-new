import {createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-06-03',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

