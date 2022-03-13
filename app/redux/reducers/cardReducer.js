import { GET_DEBIT_CARD, GET_SPENDING_LIMIT } from '../types';

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEBIT_CARD:
      return {
        ...state,
        debitcard: action.payload,
        loading: false,
      };

    case GET_SPENDING_LIMIT:
      return {
        ...state,
        spendinglimit: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
