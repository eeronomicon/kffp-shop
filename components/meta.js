import Helmet from 'react-helmet';

const generateCanonicalURL = path => `https://shop.freeformportland.org${path}`;

const getMetaTags = ({
    title,
    description,
    url,
    imagePath
}) => {
    return [
        { itemprop: 'name', content: title },
        { itemprop: 'description', content: description },
        { itemprop: 'image', content: imagePath },
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@FreeformPDX' },
        { name: 'twitter:title', content: `${title} | Freeform Portland Store` },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image:src', content: imagePath },
        { name: 'og:title', content: `${title} | Freeform Portland Store` },
        { name: 'og:type', content: 'ecommerce' },
        { name: 'og:url', content: url },
        { name: 'og:image', content: imagePath },
        { name: 'og:description', content: description },
        { name: 'og:site_name', content: 'Freeform Portland Store' },
    ];
};


export const SEO = ({
    title,
    path,
    description,
    imagePath
}) => (
    <Helmet
        title={`${title} | Freeform Portland Store`}
        link={[
            { rel: 'canonical', href: generateCanonicalURL(path) },
        ]}
        meta={getMetaTags({
            title,
            description,
            url: generateCanonicalURL(path),
            imagePath
        })}
    />
);
