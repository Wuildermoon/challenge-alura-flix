import { createContext, useEffect, useState } from "react";
import db from "../assets/data/db.json";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  useEffect(() => {
    setCategories(db.categories);
    setVideos(db.videos);
  }, []);

  const toggleModal = (videoData = null) => {
    if (videoData) {
      setModalData(videoData);
    }
    setModalOpen(!isModalOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        videos,
        setVideos,
        categories,
        setCategories,
        isModalOpen,
        toggleModal,
        modalData,
        setModalData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
