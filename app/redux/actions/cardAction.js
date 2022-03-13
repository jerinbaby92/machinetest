import {GET_DEBIT_CARD, GET_DEBIT_CARD_ERROR,GET_SPENDING_LIMIT,GET_SPENDING_LIMIT_ERROR} from '../types';

import AxiosInstance from '../interceptor'
import {DEBITCARD,SPENDINGLIMIT, getURl} from '../api_path'

export const getDebitCard = () => async dispatch => {
  try {
    
    const res = await AxiosInstance.get(getURl(DEBITCARD))
    dispatch({
      type: GET_DEBIT_CARD,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DEBIT_CARD_ERROR,
      payload: console.log(e),
    });
  }
};

export const getSpendingLimit = () => async dispatch => {
  try {
  
    const res = await AxiosInstance.get(getURl(SPENDINGLIMIT))
    dispatch({
      type: GET_SPENDING_LIMIT,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SPENDING_LIMIT_ERROR,
      payload: console.log(e),
    });
  }
};


