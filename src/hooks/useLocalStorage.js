import { useState } from "react";

function useLocalStorage(key, initialValue)
 {
  const [storedValue, setStoredValue] = useState(() => 
   {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }); 

  const setValue = (value) => {

    // saving state here 
    setStoredValue(value);  

    // Saving to local storage 
    window.localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;

