import * as constants from '../constants'

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