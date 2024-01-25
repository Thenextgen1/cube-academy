"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}
interface ContextData {
  store: {
    nominatedPerson: string;
  };
  setStore: Dispatch<SetStateAction<{ nominatedPerson: string }>>;
}

export const AppContext = createContext<ContextData | undefined>(undefined);

const queryClient = new QueryClient();

export const AppContextProvider = ({ children }: Props) => {
  const [store, setStore] = useState({
    nominatedPerson: "",
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ store, setStore }}>
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default AppContext;
