import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = ({props}) => {
  const [news, setNews] = useState([]);
  const apiKey = "c08c90a25bf348c9bd35cbe09fc6c83d";
  useEffect(() => {
    Axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    )
      .then((response) => {
        console.log(response.data)
        setNews(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NewsContextProvider value={{ news }}>
      
    {news}
  </NewsContextProvider>
  ) ;
};
