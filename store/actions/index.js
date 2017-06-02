import * as constants from '../constants'

let userUrl = 'https://calm-sands-26146.herokuapp.com/api/v1/user_token'

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

export const authorizeUser = (email, password) => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify({
      auth: { 
        email, 
        password 
      }
    })
  }

  return async (dispatch) => {
    console.log("Getting User")
    dispatch(beginFetch())
    try {
      let response = await fetch(userUrl, init);
      let responseJson = await response.json();
      console.log(responseJson)
      dispatch(setToken(responseJson.jwt))
      dispatch(setUser(responseJson.user))
    } catch(error) {
      console.log(error);
    }
    dispatch(endFetch())
  }
} 