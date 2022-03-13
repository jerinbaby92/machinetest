import {NETWORK, NETWORK_ERROR} from '../types';
import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const getNetwork = () => async dispatch => {
  try {
    

    const [netInfo, setNetInfo] = useState(false);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        
        const offline = state;
        setNetInfo(offline);
        console.log(state);
        dispatch({
          type: NETWORK,
          payload: state,
        });
             });
      return () => unsubscribe();
    }, []);

    
  } catch (e) {
    dispatch({
      type: NETWORK_ERROR,
      payload: console.log(e),
    });
  }
};
