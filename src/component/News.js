import { CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import useStyles from "../style";
import NewsArticle from "./NewsArticle";

const News = () => {
  const classes = useStyles()  
  const [news, setNews] = useState([]);
  const apiKey = "c08c90a25bf348c9bd35cbe09fc6c83d";
  useEffect(() => {
    Axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    )
      .then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogstitle}>
          News 📰
        </Typography>
        <Grid container spacing={4} >
          {news
            ? news.map((snew) => <NewsArticle news={snew} key={snew.url} />)
            : <CircularProgress />}
        </Grid>
      </Container>
      <h3></h3>
    </div>
  );
};

export default News;
