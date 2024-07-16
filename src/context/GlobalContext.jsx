import { createContext, useEffect, useState } from "react";
import videoList from "../data/db.json";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoList.videos);
  }, []);

  return (
    <GlobalContext.Provider value={{ videos, setVideos }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
