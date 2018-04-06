import Link from 'next/link';
import { Image, Header } from 'semantic-ui-react';
import { Fragment } from 'react';

const productStyle = `
    img {
        min-height: 300px;
    }

    h3 {
        text-align: center;
    }
`;

export const Product = ({ name, productId, image, slug }) => (
    <Fragment>
        <Link href={`/product/${slug}`}>
            <a>
                <Image
                    src={image || 'https://via.placeholder.com/300x300'}
                    centered
                />
            </a>
        </Link>
        <Header as="h3">{name}</Header>
        <style>{productStyle}</style>
    </Fragment>
);
