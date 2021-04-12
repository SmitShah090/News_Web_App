import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3),
      },
      blogstitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: "#91c788"
      },
      media: {
        height: 240,
      },
      cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between",
      },
      author: {
        display: "flex",
      },
      card: {
        backgroundColor: "#ddffbc",
        color: "#52734d"
      }
}));

export default useStyles