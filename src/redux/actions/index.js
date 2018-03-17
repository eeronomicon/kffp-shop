import axios from 'axios';
import { API_URL } from '../../utils/constants';

const baseUrl = `${API_URL}/products`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = id => async (dispatch, getState) => {

    const url = id ? `${baseUrl}/${id}` : baseUrl;

    try {
        const { data } = await axios.get(url);

        return dispatch({
            type: FETCH_PRODUCTS,
            data
        });
    } catch (e) {
        console.log(e)
        // handle error
    }
};
