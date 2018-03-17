import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/configure-store';
import { fetchProducts } from '../redux/actions';
import { Layout } from '../components/layout';
import { ProductGallery } from '../components/product-gallery';

const Index = props => {
    return (
        <Layout>
            <div>
                <h1>Products</h1>
                <ProductGallery
                    products={props.products}
                />
            </div>
            <style global jsx>{`body { margin: 0; }`}</style>
        </Layout>
)};

Index.getInitialProps = async ({ store, isServer }) => {
    const { dispatch } = store;

    await dispatch(fetchProducts());
};

export default withRedux(initStore, state => (state))(Index);
