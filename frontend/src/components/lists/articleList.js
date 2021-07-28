import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import {
  deleteArticle,
  listArticles,
  createAArticle,
} from "../../actions/articlesAction";
import { ARTICLE_CREATE_RESET } from "../../constants/articleConstants";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
}));

const ArticleList = () => {
  const classes = useStyles();
  let history = useHistory();

  const dispatch = useDispatch();

  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const articleDelete = useSelector((state) => state.articleDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = articleDelete;

  const createArticle = useSelector((state) => state.createArticle);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    article: createdProduct,
  } = createArticle;

  useEffect(() => {
    dispatch({ type: ARTICLE_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/signin");
    }
    if (successCreate) {
      history.push(`/admin/article/${createdProduct._id}/edit`);
    } else {
      dispatch(listArticles());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteArticle(id));
    }
  };

  const createArticleHandler = () => {
    dispatch(createAArticle());
  };

  return (
    <div>
      <div>
        <h1>Articles</h1>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={createArticleHandler}
        >
          <AddIcon />
        </Fab>
      </div>
      {loadingDelete && <CircularProgress />}
      {errorDelete && <Alert severity="error">{errorDelete}</Alert>}
      {loadingCreate && <CircularProgress />}
      {errorCreate && <Alert severity="error">{errorCreate}</Alert>}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>
          <Alert severity="error">{error}</Alert>
        </h3>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Writer</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Views</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article) => (
                <StyledTableRow key={article._id}>
                  <StyledTableCell>{article._id}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {article.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {article.writer}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {article.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {article.views}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to={`/admin/article/${article._id}/edit`}>
                      <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                      </Fab>
                    </Link>
                    <Fab
                      color="secondary"
                      aria-label="delete"
                      onClick={() => deleteHandler(article._id)}
                    >
                      <DeleteIcon />
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ArticleList;
