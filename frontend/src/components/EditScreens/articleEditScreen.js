import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import TextField from "@material-ui/core/TextField";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { listArticleDetails, updateArticle } from '../../actions/articlesAction';
import {ARTICLE_UPDATE_RESET} from '../../constants/articleConstants'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  button: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none',
  }
}));

export default function EditArticles({match, history}) {
  const articleId = match.params.id

  const classes = useStyles();

  const [values, setValues] = React.useState({
    title: "",
    imageUrl: "",
    category: "",
    writer: "",
    desc: "",
    uploading: false
  });

  const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const uploadFileHandler = async(e) => {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  setValues({uploading: true})

  try{
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } =  await axios.post('/api/upload', formData, config)

    setValues({ imageUrl: data, uploading: false})
    
  }catch(error){
    console.error(error)
    setValues({ uploading: false})
  }
}

  const dispatch = useDispatch()

  const articleDetails = useSelector((state) => state.articleDetails)
  const {loading , error , article} = articleDetails

  const articleUpdate = useSelector((state) => state.articleUpdate)
  const {loading: loadingUpdate , error: errorUpdate , success: successUpdate} = articleUpdate

  useEffect(() => {
    if(successUpdate){
      dispatch({type: ARTICLE_UPDATE_RESET})
      history.push('/admin/productlist')
    }
    else{
      if(!article.title || article._id !== articleId){
        dispatch(listArticleDetails(articleId))
      }
      else
      {
        setValues({
          title: article.title,
          imageUrl: article.imageUrl,
          category: article.category,
          writer: article.writer,
          desc: article.desc
        })
      }
    }
    
    
  }, [dispatch, articleId, article, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateArticle({ _id: articleId , title , imageUrl, category, desc, writer}))
    
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
            <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete="off">
                <ThemeProvider theme={theme}>
                  <Typography component="div" align="left" variant="h4">
                    Your Article
                  </Typography>
                </ThemeProvider>
                {loadingUpdate && <CircularProgress />}
                {errorUpdate && <Alert severity="error">{errorUpdate}</Alert>}
                {loading ? <CircularProgress /> : error ? <Alert severity="error">{error}</Alert> : (
                  <div>
                    <div>
                      <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-title">Title</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-title"
                          value={values.title}
                          onChange={handleChange("title")}
                          aria-describedby="outlined-name-helper-text"
                          inputProps={{
                            "aria-label": "title"
                          }}
                          labelWidth={40}
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-imageUrl">Image</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-imageUrl"
                          value={values.imageUrl}
                          onChange={handleChange("imageUrl")}
                          aria-describedby="outlined-name-helper-text"
                          inputProps={{
                            "aria-label": "imageUrl"
                          }}
                          labelWidth={40}
                        />
                      </FormControl>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={uploadFileHandler}
                        />
                        <label htmlFor="contained-button-file">
                          <Button variant="contained" color="primary" component="span">
                            Upload
                          </Button>
                        </label>
                        {uploading && <CircularProgress/>}
                    </div>
                    <div>
                      <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-writer">Writer</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-writer"
                          value={values.writer}
                          onChange={handleChange("writer")}
                          aria-describedby="outlined-name-helper-text"
                          inputProps={{
                            "aria-label": "writer"
                          }}
                          labelWidth={40}
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-category">Category</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-category"
                          value={values.category}
                          onChange={handleChange("category")}
                          aria-describedby="outlined-name-helper-text"
                          inputProps={{
                            "aria-label": "category"
                          }}
                          labelWidth={40}
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-desc">Description</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-desc"
                          value={values.desc}
                          onChange={handleChange("desc")}
                          aria-describedby="outlined-name-helper-text"
                          inputProps={{
                            "aria-label": "desc"
                          }}
                          labelWidth={40}
                        />
                      </FormControl>
                    </div>

                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      className={classes.button}
                    >
                      <Button variant="contained" color="primary" type="submit">
                        Update
                      </Button>
                    </Grid>
                  </div>
                )}
                
              </form>
            </Container>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
