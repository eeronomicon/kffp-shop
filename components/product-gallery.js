import { Product } from './product';

export const ProductGallery = props => (
    <section>
        {props.products.map((p, i) => <Product key={i} {...p} />)}
    </section>
);
