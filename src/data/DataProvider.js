import React, { useContext } from "react";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children, data }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
