import withRedux from 'next-redux-wrapper';
import { Header } from 'semantic-ui-react';
import { withError } from '../components/with-error';
import { initStore } from '../redux/configure-store';
import { fetchProducts } from '../redux/actions';
import { Layout } from '../components/layout';
import { SEO } from '../components/meta';
import { ProductGallery } from '../components/product-gallery';
import { sortProducts } from '../redux/selectors';

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  }
};

const mapStateToProps = state => ({
    products: sortProducts(state.products)
});


const Index = props => {
    return (
        <Layout>
            <SEO
                title="Products"
                path={props.url.pathname}
                description="Freeform Portland merch"
                imagePath="https://www.freeformportland.org/wp-content/themes/graphy-pro/images/freeform-portland.svg"
            />
            <Header
                as="h3"
                content="Give a Gift, Receive a Gift!"
                textAlign="center"
                style={style.h3}
                />
            <ProductGallery
                products={props.products}
            />
        </Layout>
)};


Index.getInitialProps = async ({ res, store, isServer }) => {
    const { dispatch } = store;

    try {
        await dispatch(fetchProducts());
    } catch (e) {
        res.statusCode = 404;
    }
};

export default withError(withRedux(initStore, mapStateToProps)(Index));
