import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { Grid, Segment, Image, Button, Header, Container } from 'semantic-ui-react';
import { SEO } from '../components/meta';
import { withError } from '../components/with-error';
import { Layout } from '../components/layout';
import { fetchProducts } from '../redux/actions';
import { initStore } from '../redux/configure-store';
import { propOr } from 'ramda';

const productDetailStyle = `
    .ui.stackable.two.column.grid {
        margin: 0;
    }
`;

const ProductDetail = (props = {}) => {
    const { products = [] } = props;
    const product = products.length ? products[0] : {};
    const { productId, name, price, description, image, sizes } = product;
    const { url } = props;
    const imageSrc = image ? image : 'https://via.placeholder.com/300x300';

    const additionalProductAttributes = sizes && sizes.length ?
    {
        ['data-item-custom1-name']: 'Size',
        ['data-item-custom1-options']: sizes.join('|')
    } :
    {};

    return (
        <Layout>
            <SEO
                title={name}
                path={url}
                description={`Freeform Portland merch - ${description}`}
                imagePath={imageSrc}
            />
            <Grid columns={2} stackable divided>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image centered src={imageSrc} />
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Header as="h1">{name}</Header>
                        <Container>
                            <p>{description}</p>
                            <Header as="h3">
                                {`$${price} USD`}
                            </Header>
                            <Button
                                className="snipcart-add-item"
                                data-item-id={productId}
                                data-item-name={name}
                                data-item-price={price}
                                data-item-url={url}
                                data-item-description={description}
                                color="teal"
                                content="Add to Cart"
                                size="large"
                                {...additionalProductAttributes}
                            />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <style>{productDetailStyle}</style>
        </Layout>
    );
};

ProductDetail.getInitialProps = async ({ req, res, query, store }) => {
    const { dispatch } = store;
    const { slug = '' } = query;

    try {
        const result = await dispatch(fetchProducts(slug));

        return {
            url: req.url
        };
    } catch (e) {
        res.statusCode = 404;
    }
};

export default withError(withRedux(initStore, state => (state))(ProductDetail));
