import {NETWORK} from '../types';

const initialState = {
  network: {},
  loading: true,
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    
    case NETWORK:
      return {
        ...state,
        network: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
