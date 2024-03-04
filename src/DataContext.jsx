import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

//context provider using context api to share the data received from the get call across all the components without prop drilling 

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]); // Initialize userData as an empty array

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/get-readers");
        const data = await response.json();
        setUserData(data); // Update userData with fetched data
      } catch (error) {
        console.error("Failed to fetch userData:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ userData }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
