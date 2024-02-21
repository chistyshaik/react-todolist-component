import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider(props) {
  const [data, setData] = useState('some data');

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}
