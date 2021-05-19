import { useContext } from "react";

const ExpertContext = React.createContext();

export const useExpert = () => {
  return useContext(ExpertContext);
};

const ExpertProvider = ({ children, data }) => {
  return (
    <ExpertContext.Provider value={data}>{children}</ExpertContext.Provider>
  );
};
export default ExpertProvider;
