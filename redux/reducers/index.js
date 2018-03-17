import { FETCH_PRODUCTS } from '../actions';

const initialState = {
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.data
            };
        default:
            return state;
    }
};
