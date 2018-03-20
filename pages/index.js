import withRedux from 'next-redux-wrapper';
import { Header } from 'semantic-ui-react';
import { initStore } from '../redux/configure-store';
import { fetchProducts } from '../redux/actions';
import { Layout } from '../components/layout';
import { ProductGallery } from '../components/product-gallery';

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  }
};


const Index = props => {
    return (
        <Layout>
            <Header
                as="h3"
                content="Available Products"
                textAlign="center"
                style={style.h3}
                />
            <ProductGallery
                products={props.products}
            />
        </Layout>
)};


Index.getInitialProps = async ({ store, isServer }) => {
    const { dispatch } = store;

    await dispatch(fetchProducts());
};

export default withRedux(initStore, state => (state))(Index);
