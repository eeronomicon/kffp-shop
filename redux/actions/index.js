import axios from 'axios';
import { API_URL } from '../../utils/constants';

const baseUrl = `${API_URL}/products`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = slug => async (dispatch, getState) => {

    const url = slug ? `${baseUrl}/${slug}` : baseUrl;

    try {
        const { data } = await axios.get(url);

        if (!Array.isArray(data)) {
            // we've gotten a response but it wasn't what we expected
            return dispatch({
                type: FETCH_PRODUCTS,
                data: [],
            });
        }

        return dispatch({
            type: FETCH_PRODUCTS,
            data
        });
    } catch (e) {
        const err = new Error();
        err.code = 'ENOENT'; // this triggers Next.js to render the 404 page server-side
        throw err;
    }
};
