import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { Grid, Segment, Image, Button, Header, Container } from 'semantic-ui-react';
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
    const { products } = props;
    const product = products.length ? products[0] : {};
    const { productId, name, price, description, image } = product;
    const { url } = props;
    const imageSrc = image ? image : 'http://via.placeholder.com/300x300';

    return (
        <Layout>
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
                            />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <style>{productDetailStyle}</style>
        </Layout>
    );
};

/*
    <div>{`$${price}`} USD</div>
*/

ProductDetail.getInitialProps = async ({ req, query, store }) => {
    const { dispatch } = store;
    const { productId = '' } = query;

    const result = await dispatch(fetchProducts(productId));

    return {
        url: req.url
    };
};

export default withRedux(initStore, state => (state))(ProductDetail);
