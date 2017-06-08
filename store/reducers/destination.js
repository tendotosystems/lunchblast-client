import * as constants from '../constants'

// Nothing to see here, move along
const init = {}

export const destination = (state = init, action) => {
  switch(action.type) {
    case constants.SET_DESTINATION:
      return Object.assign({}, init, action.payload)
    case constants.SELECT_DESTINATION:
      return Object.assign({}, init, action.payload, { selected: true })
    case constants.LOGOUT:
      return init
    default:
      return state
  }
}