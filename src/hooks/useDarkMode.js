import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage("darkmode");
  
  useEffect(() => {
    const isbodyDark = window.localStorage.getItem("darkmode") === "true";  

   // checking if isbodyDark return true or false
    if(isbodyDark) {
        document.body.classList.add("dark-mode");
    } 
    else {
        document.body.classList.remove("dark-mode");
    }
  }, [storedValue]); 
  
  return [storedValue, setStoredValue];
};

export default useDarkMode;