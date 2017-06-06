import * as constants from '../constants'
import { 
  requestAuthorizeUser, 
  requestQuote, 
  requestDestination 
} from '../../utils/api'

export const beginFetch = () => {
  return {
    type: constants.BEGIN_FETCH,
  }
}

export const endFetch = () => {
  return {
    type: constants.END_FETCH,
  }
}

export const setToken = (token) => {
  return {
    type: constants.SET_TOKEN,
    payload: token
  }
}

export const setUser = (user) => {
  return {
    type: constants.SET_USER,
    payload: user
  }
}

export const setDestination = (destination) => {
  return {
    type: constants.SET_DESTINATION,
    payload: destination
  }
}

export const setQuote = (quote) => {
  return {
    type: constants.SET_QUOTE,
    payload: quote
  }
}

export const authorizeUser = (email, password) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestAuthorizeUser(email, password);
      let responseJson = await response.json();
      dispatch(setToken(responseJson.jwt))
      dispatch(setUser(responseJson.user))
    } catch(error) {
      console.log(error);
    }
    dispatch(endFetch())
  }
}

export const fetchDestination = (token) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestDestination(token);
      let responseJson = await response.json();
      dispatch(setDestination(responseJson))
    } catch(error) {
      console.log(error);
    }
    dispatch(endFetch())
  }
} 

export const fetchQuote = () => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestQuote();
      let responseJson = await response.json();
      dispatch(setQuote(responseJson))
    } catch(error) {
      console.log(error);
    }
    dispatch(endFetch())
  }
}