import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/configure-store';
import { fetchProducts } from '../redux/actions';
import { ProductGallery } from '../components/product-gallery';

const Index = props => {
    return (
        <div>
            <h1>Products</h1>
            <ProductGallery
                products={props.products}
            />
            <style global jsx>{`body { margin: 0; }`}</style>
        </div>
)};

Index.getInitialProps = async ({ store, isServer }) => {
    const { dispatch } = store;

    await dispatch(fetchProducts());
};

export default withRedux(initStore, state => (state))(Index);
