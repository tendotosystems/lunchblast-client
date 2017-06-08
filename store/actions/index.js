import * as constants from '../constants'
import { 
  requestAuthorizeUser,
  requestSignupUser, 
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

export const login = () => ({ type: constants.LOGGED_IN })

export const logout = () => ({ type: constants.LOGOUT })

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

export const setError = (error) => {
  return {
    type: constants.SET_ERROR,
    payload: error
  }
}

export const clearError = () => ({ type: constants.CLEAR_ERROR })

export const authorizeUser = (email, password) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestAuthorizeUser(email, password);
      let responseJson = await response.json()
      if(!response.ok) {
        throw new Error()
      } else {
        dispatch(setToken(responseJson.jwt))
        dispatch(setUser(responseJson.user))
        dispatch(login())
      }
    } catch(e) {
      console.log("You could not be logged in.");
    }
    dispatch(endFetch())
  }
}

export const signupUser = (userInputs) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestSignupUser(userInputs)
      let responseJson = await response.json()
      if (!response.ok) {
        throw new Error();
      } else {
        dispatch(setToken(responseJson.jwt))
        dispatch(setUser(responseJson.user))
        dispatch(login())
      }
    } catch(e) {
      console.log('There was an error logging you in.  Please make sure your password and password confirmation match')
    }
    dispatch(endFetch())
  }
}

export const fetchDestination = (token) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestDestination(token)
      let responseJson = await response.json()
      let quoteResponse = await requestQuote()
      let quoteJson = await quoteResponse.json()

      if(!response.ok || !quoteResponse.ok) {
        throw new Error()
      } else {
        dispatch(setDestination(responseJson))
        dispatch(setQuote(quoteJson))
      }
    } catch(error) {
      console.log("Couldn't make it to Flavortown.");
    }
    dispatch(endFetch())
  }
} 
