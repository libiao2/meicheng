import { ADD, MINUS, ADDCHAT, SAVEFUWUDATA } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  allChat: [],
  saveFuWuData: null
}

export default function counter (state = INITIAL_STATE, action) {
  console.log('????????????', action)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
      case ADDCHAT:
        return {
          ...state,
          allChat: action.list
        }
      case SAVEFUWUDATA:
        return {
          ...state,
          saveFuWuData: action.data
        }
     default:
       return state
  }
}
