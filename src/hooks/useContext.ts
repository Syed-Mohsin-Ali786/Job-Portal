import { useContext } from "react";
import AppContext, { type AppContextValue } from "../context/AppContext";


const useContextProvider=():AppContextValue=>{
  const context=useContext(AppContext);

  if(context===undefined){
    throw new Error("AppContextProvider must be used within AppContextProvider")
  }

  return context;
}

export default useContextProvider;