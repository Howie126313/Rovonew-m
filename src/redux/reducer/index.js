/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:50:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-29 17:57:27
 */
import { type } from '../action'

export default (state, action) => {
  switch (action.type) {
    case type.SWITCH_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.language 
      };
    default:
      return {...state}
  }
}
