import React, {useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useDispatch, useSelector} from 'react-redux';
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {listArticleDetails, createArticleReview} from "../../actions/articlesAction";
import {ARTICLE_CREATE_COMMENT_RESET} from '../../constants/articleConstants'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  des: {
    display: "flex"
  }
}));

const Reviews = ({ id }) => {
  const [comment, setComment] = useState('')
  const [like, setLike] = useState(false)
  const dispatch = useDispatch()

  const articleDetails = useSelector(state => state.articleDetails)
    const { loading , error , article } = articleDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const articleCommentCreate = useSelector(state => state.articleCommentCreate)
    const { loading: commentLoading , error: commentError , success } = articleCommentCreate


  useEffect(() => {
    if(success)
    {
      alert('Reviewed Successfully')
      setComment('')
      dispatch({type: ARTICLE_CREATE_COMMENT_RESET})
    }
    dispatch(listArticleDetails(id))
  }, [dispatch, id, success])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createArticleReview(id, {comment}))
    
  }

  const submitButtonHandler = (e) => {
    e.preventDefault()
    dispatch(createArticleReview(id, {like}))
    
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          {loading ? <CircularProgress /> : error ? <h3><Alert severity="error">{error}</Alert></h3>: (
            <div>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <form className={classes.root} onSubmit={submitButtonHandler} noValidate autoComplete="off">
                <Button variant="contained" color="primary" type="submit" onClick={setLike(!like)}>
                  {article.reviews.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
              </form>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <div style={{ padding: 14 }} className="App">
                <h1>Comments</h1>
                {article.reviews.length === 0 && <Alert severity="success">No Comments</Alert>}
                <Paper style={{ padding: "40px 20px" }}>
                  {article.reviews.map((review) => (
                    <div>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <h4 style={{ margin: 0, textAlign: "left" }}>{review.name}</h4>
                          <p style={{ textAlign: "left" }}>
                            {review.comment}
                          </p>
                        </Grid>
                      </Grid>
                      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                    </div>
                  ))}
                  <h3>Write your comment</h3>
                    {commentLoading && <CircularProgress />}
                    {commentError && <Alert severity="error">{commentError}</Alert>}
                    {userInfo ? (
                      <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete="off">
                        <div>
                          <FormControl
                            fullWidth
                            className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-comment">Comment Here</InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              aria-describedby="outlined-name-helper-text"
                              inputProps={{
                                "aria-label": "comment"
                              }}
                              labelWidth={40}
                            />
                          </FormControl>
                          <Button variant="contained" color="primary" type="submit">
                            Submit
                          </Button>
                        </div>
                      </form>
                    ): 
                    <Alert severity="success">
                        Please <Link to='/login'>Sign In</Link> to comment{' '}
                    </Alert>}
                </Paper>
              </div>
            </div>
          )}
      </Container>
    </React.Fragment>
  );
}

export default Reviews