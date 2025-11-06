import { createContext, useEffect, useState, type ReactNode } from "react";
import { jobsData, type Job } from "../assets/assets";

export interface SearchFilter {
  title: string;
  location: string ;
}

export interface AppContextValue {
  searchFilter: SearchFilter;
  setSearchFilter: React.Dispatch<React.SetStateAction<SearchFilter>>;
  isSearch: boolean;
  jobs:Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  setIsSearch: (loading: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}


const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    title: "",
    location: "",
  });

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([]);
const[]

  // Job funtions
  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const value = {
    searchFilter,
    setSearchFilter,
    isSearch,
    setIsSearch,
    jobs,
    setJobs,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
