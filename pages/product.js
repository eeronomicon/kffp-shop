import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { Layout } from '../components/layout';
import { fetchProducts } from '../redux/actions';
import { initStore } from '../redux/configure-store';
import { propOr } from 'ramda';

const ProductDetail = (props = {}) => {
    const { products } = props;
    const product = products.length ? products[0] : {};
    const { productId, name, price, description, image } = product;
    const { url } = props;
    const imageSrc = image ? image : 'http://via.placeholder.com/600x480';

    return (
        <Layout>
            <section>
                <h1>Product Detail Page for {name} </h1>
                <div>{description}</div>
                <div>{`$${price}`} USD</div>
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
        </Layout>
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
