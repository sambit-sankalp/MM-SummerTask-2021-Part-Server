import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import EditorialCard from "../ReusableCards/EditorialCard";
import theme from "../theme";
import { listLatestArticles, listArticles } from "../../actions/articlesAction";
import { useParams } from "react-router-dom";

function articleCard(trendingArticle) {
  return (
    <Grid item xs={12} sm={6}>
      <EditorialCard
        id={trendingArticle._id}
        img={trendingArticle.imageUrl}
        title={trendingArticle.title}
        desc={trendingArticle.desc}
      />
    </Grid>
  );
}

const Latest = () => {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  const articleList = useSelector((state) => state.latestArticleList);
  const { loading, error, latest } = articleList;

  useEffect(() => {
    dispatch(listLatestArticles());
    dispatch(listArticles(keyword));
  }, [dispatch, keyword]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography
            style={{
              fontweight: "bold",
              margin: theme.spacing(2),
              marginTop: theme.spacing(4),
            }}
            component="div"
            align="left"
            variant="h4"
          >
            Latest
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <h3>
              <Alert severity="error">{error}</Alert>
            </h3>
          ) : (
            <Grid container spacing={2}>
              {latest.map(articleCard)}
            </Grid>
          )}
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
};

export default Latest;
