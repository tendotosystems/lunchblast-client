import * as constants from '../constants'

let init = { isLoggedIn: false }

export const auth = (state = init, action) => {
  switch(action.type) {
    case constants.LOGGED_IN:
      return { ...state, isLoggedIn: true }
    case constants.LOGOUT:
      return init
    case constants.SET_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}