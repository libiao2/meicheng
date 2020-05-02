import {
  ADD,
  MINUS,
  ADDCHAT,
  SAVEFUWUDATA,
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

export const addChat = (list) => {
  console.log('9999999000??????', list)
  return {
    type: ADDCHAT,
    list
  }
}

export const saveFuWuData = (data) => {
  console.log('9999999000??????', data)
  return {
    type: SAVEFUWUDATA,
    data
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
