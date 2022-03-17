import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems_93 from './data';
import reducer_93 from './reducer_93';

const AppContext_93 = React.createContext();

const initialSate = {
  loading: false,
  cart: cartItems_93,
  total: 0,
  amount: 0,
}

const AppProvider_93 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_93, initialSate);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }
  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id});
    }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id});
    }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id});
    }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart]);
  
  return (
    <AppContext_93.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext_93.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext_93);
};

export { AppContext_93, AppProvider_93 };
