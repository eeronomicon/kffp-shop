import { Grid, Segment } from 'semantic-ui-react';
import { Product } from './product';
import { chunk } from '../utils';

export const ProductGallery = props => {
    const chunkedProducts = chunk(props.products, 3);

    return (
        <Grid columns={2} stackable>
            {chunkedProducts.map((ch, i) => {
                return (
                    <Grid.Row columns={3} key={i}>
                        {ch.map((product, i) => (
                            <Grid.Column>
                                <Segment>
                                    <Product key={i} {...product} />
                                </Segment>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                )
            })}
        </Grid>
    );
};
