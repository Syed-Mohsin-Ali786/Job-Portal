import { createContext,useState, type ReactNode } from "react";

interface SearchFilter {
  title: string|undefined;
  location: string|undefined;
}

export interface AppContextValue {
  searchFilter: SearchFilter;
  setSearchFilter: (filter: SearchFilter) => void;
  isLoading: boolean;
  setIsSearch: (loading: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppContextProvider = ({children}:AppContextProviderProps) => {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    title: "",
    location: "",
  });

  const [isLoading, setIsSearch] = useState<boolean>(false);

  const value = {
    searchFilter,
    setSearchFilter,
    isLoading,
    setIsSearch,
  };
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContext;
