import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

export const { Provider } = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
