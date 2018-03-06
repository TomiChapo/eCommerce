import { RECEIVE_PRODUCTS } from '../constants';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products
    default:
      return state;
  }
}