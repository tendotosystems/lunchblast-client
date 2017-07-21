import * as constants from '../constants'
import { 
  requestAuthorizeUser,
  requestSignupUser, 
  requestQuote, 
  requestDestination,
  requestSelection,
  requestPushRegistration 
} from '../../utils/api'
import { Permissions, Notifications } from 'expo';

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

export const selectDestination = (destination) => {
  return {
    type: constants.SELECT_DESTINATION,
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

export const receivedNotification = (notification) => {
  return {
    type: constants.RECEIVED_NOTIFICATION,
    payload: notification
  }
}

export const clearError = () => ({ type: constants.CLEAR_ERROR })

export const clearNotification = () => ({ type: constants.CLEAR_NOTIFICATION })

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
        dispatch(registerForPushNotifications(responseJson.user))
      }
    } catch(e) {
      console.log("You could not be logged in.");
      dispatch(setError("There was an error logging you in."))
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
        dispatch(registerForPushNotifications(responseJson.user))
      }
    } catch(e) {
      console.log('There was an error logging you in.  Please make sure your password and password confirmation match')
      dispatch(setError('There was an error signing you up.'))
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
      console.log("Couldn't make it to Flavortown.")
      dispatch(setError("Couldn't make it to Flavortown."))
    }
    dispatch(endFetch())
  }
}

export const makeSelection = (user, token, destination) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await requestSelection(user, token, destination)
      let responseJson = await response.json()

      if(!response.ok) {
        throw new Error()
      } else {
        dispatch(selectDestination(destination))
      }
    } catch(e) {
      dispatch(setError("Couldn't make it to Flavortown."))
    }
    dispatch(endFetch())
  }
} 

export const registerForPushNotifications = (user) => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      const { existingStatus } = await Permissions.getAsync(Permissions.REMOTE_NOTIFICATIONS);
      let finalStatus = existingStatus;
      // only ask if permissions have not already been determined, because
      // iOS won't necessarily prompt the user a second time.
      if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        finalStatus = status;
      }
      // Stop here if the user did not grant permissions
      if (finalStatus !== 'granted') {
        return;
      }
      // Get the token that uniquely identifies this device
      let pushToken = await Notifications.getExponentPushTokenAsync()
      
      // POST the token to our backend so we can use it to send pushes from there
      let response = await requestPushRegistration(user, pushToken)
      
      // if (!response.ok) {
      //   throw new Error()
      // } else {
      //   console.log(pushToken)
      // }
    } catch(e) {
      // dispatch(setError("You were not successfully registered for notifications."))
    }
    dispatch(endFetch())
  }
}
