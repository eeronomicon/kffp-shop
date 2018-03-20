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

export const Product = ({ name, productId, image }) => (
    <Fragment>
        <Link href={`/product/${productId}`}>
            <a>
                <Image
                    src={image || 'http://via.placeholder.com/300x300'}
                    centered
                />
            </a>
        </Link>
        <Header as="h3">{name}</Header>
        <style>{productStyle}</style>
    </Fragment>
);
