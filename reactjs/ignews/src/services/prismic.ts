import Prismic from '@primicio/client';

export const prismic = Prismic.client(
    process.env.PRISMIC_ACCESS_TOKEN,
    {
        acessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
);