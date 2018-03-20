import { Grid, Segment } from 'semantic-ui-react';
import { Product } from './product';
import { chunk } from '../utils';

export const ProductGallery = ({ products }) => {
    const chunkedProducts = chunk(products, 3);

    return (
        <Grid columns={2} stackable>
            {chunkedProducts.map((ch, i) => (
                <Grid.Row columns={3} key={i}>
                    {ch.map((product, i) => (
                        <Grid.Column key={i}>
                            <Segment>
                                <Product {...product} />
                            </Segment>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            ))}
        </Grid>
    );
};
