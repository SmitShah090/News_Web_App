import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "../style";

const NewsArticle = ({ news }) => {

  
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="100"
            image={news.urlToImage ? news.urlToImage : <CircularProgress />}
            title="New's Image"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {news.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {news.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="" />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {news.author ? news.author : "Author is not specified"}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {news.publishedAt}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsArticle;
