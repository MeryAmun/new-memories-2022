import * as api from '../api/index'

import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_POST,
  LIKE,
  UPDATE,
  FETCH_BY_SEARCH ,
  START_LOADING,
  END_LOADING
} from '.././constants/actionTypes'

//action creators

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.fetchPosts(page)
 
    dispatch({ type: FETCH_ALL, payload: data })
    dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error.message)
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.fetchPost(id)
    console.log(data)
    dispatch({ type: FETCH_POST, payload: data })
    dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error.message)
  }
}

export const getPostsBySearch  = (searchQuery) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.fetchPostsBySearch(searchQuery);
      dispatch({ type: FETCH_BY_SEARCH , payload: data })
      dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error.response.data)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.createPost(post)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const likedPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: LIKE, payload: data })
  } catch (error) {
    console.log(error)
  }
}
