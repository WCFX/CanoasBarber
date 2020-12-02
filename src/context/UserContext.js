import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

export const { Provider } = createContext();

export default ({ children }) => {
  return <Provider>{children}</Provider>;
};
