import { createContext, useEffect, useState } from "react";
import db from "../assets/data/db.json";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(db.categories);
    setVideos(db.videos);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ videos, setVideos, categories, setCategories }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
