import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Job } from "../assets/assets";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

export interface SearchFilter {
  title: string;
  location: string;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  image: string;
  title:string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  resume?: string | File;
  image: string;
}

export interface JobApplication {
  _id: string;
  userId: string;
  companyId: Company;
  jobId:  Job;
  status: "Pending" | "Accepted" | "Rejected" | string;
  date: number;
}
export interface AppContextValue {
  searchFilter: SearchFilter;
  setSearchFilter: React.Dispatch<React.SetStateAction<SearchFilter>>;
  isSearch: boolean;
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  setIsSearch: (loading: boolean) => void;
  showRecruiterLogin: boolean;
  setShowRecruiterLogin: React.Dispatch<React.SetStateAction<boolean>>;
  backendUrl: string;
  companyToken: string | null;
  setCompanyToken: React.Dispatch<React.SetStateAction<string | null>>;
  companyData: Company | null;
  setCompanyData: React.Dispatch<React.SetStateAction<Company | null>>;
  userData: IUser | null;
  userApplications: JobApplication[] | [];
  setUserApplications: React.Dispatch<
    React.SetStateAction<JobApplication[] | []>
  >;
  fetchUserData: () => Promise<void>;
  fetchUserApplications: () => Promise<void>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user } = useUser();
  const { getToken } = useAuth();

  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    title: "",
    location: "",
  });

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState<boolean>(false);

  const [companyToken, setCompanyToken] = useState<string | null>(null);
  const [companyData, setCompanyData] = useState<Company | null>(null);

  const [userData, setUserData] = useState<IUser | null>(null);
  const [userApplications, setUserApplications] = useState<
    JobApplication[] | []
  >([]);

  // Job funtions
  const fetchJobs = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/jobs`, {
        headers: { token: companyToken },
      });
      if (data.success) {
        setJobs(data.jobs);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }, [companyToken, backendUrl]);

  // Function to fetch the company data
  const fetchCompanyData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/company/company-data`,
        { headers: { token: companyToken } }
      );
      if (data.success) {
        setCompanyData(data.company);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
        const backendErrorMessage = error.response?.data?.message;
        throw new Error(backendErrorMessage || "Login failed");
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unexpected error occurred");
    }
  }, [backendUrl, companyToken, setCompanyData]);

  // Function to fetch user data
  const fetchUserData = useCallback(async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get(`${backendUrl}/api/users/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUserData(data.user);
      }
    } catch (error) {
      // Silently handle user not found - user may not be in database yet
      if (isAxiosError(error) && error.response?.status === 404) {
        console.log("User not found in database yet");
      } else if (isAxiosError(error)) {
        console.error("Error fetching user data:", error.message);
      } else if (error instanceof Error) {
        console.error("Error fetching user data:", error.message);
      }
    }
  }, [backendUrl, getToken]);

  // function to fetch user's applied applications
  const fetchUserApplications = useCallback(async () => {
    try {
      const token = getToken();
      const { data } = await axios.get(`${backendUrl}/api/users/applications`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUserApplications(data.applications);
      }
    } catch (error) {
      // Silently handle errors - user may not be in database yet
      if (isAxiosError(error)) {
        console.error("Error fetching user applications:", error.message);
      } else if (error instanceof Error) {
        console.error("Error fetching user applications:", error.message);
      }
    }
  }, [getToken, backendUrl]);

  useEffect(() => {
    fetchJobs();
    const storedToken = localStorage.getItem("companyToken");
    if (storedToken) {
      setCompanyToken(storedToken);
    }
  }, [companyToken, fetchJobs]);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken, fetchCompanyData]);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchUserApplications();
    }
  }, [user, fetchUserData, fetchUserApplications]);

  const value: AppContextValue = {
    searchFilter,
    setSearchFilter,
    isSearch,
    setIsSearch,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
    companyToken,
    setCompanyToken,
    companyData,
    setCompanyData,
    backendUrl,
    userData,
    setUserApplications,
    userApplications,
    fetchUserData,
    fetchUserApplications,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
