import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { fetchProducts } from '../redux/actions';
import { initStore } from '../redux/configure-store';
import { propOr } from 'ramda';

const ProductDetail = (props = {}) => {
    const { products } = props;
    const product = products.length ? products[0] : {};
    const { productId, name, price, description, image } = product;
    const { url } = props;
    const imageSrc = image ? image : 'https://placeimg.com/640/480/any';

    return (
        <section>
            <h1>Product Page for Product ID {productId}</h1>
            <img src={imageSrc} />
            <button
                className="snipcart-add-item"
                data-item-id={productId}
                data-item-name={name}
                data-item-price={price}
                data-item-url={url}
                data-item-description={description}
            >
                Add to Cart
            </button>
            <Link href="/">
                <a>Home</a>
            </Link>
        </section>
    );
};

ProductDetail.getInitialProps = async ({ req, query, store }) => {
    const { dispatch } = store;
    const { productId = '' } = query;

    const result = await dispatch(fetchProducts(productId));

    return {
        url: req.url
    };
};

export default withRedux(initStore, state => (state))(ProductDetail);
