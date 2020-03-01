/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:50:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 19:11:52
 */
import { type } from '../action'

export default (state, action) => {
  switch (action.type) {
    case type.SWITCH_LANGUAGE:
      let currentLanguage = action.language === 'EN' ? 'ZH' : 'EN'
      return {
        ...state,
        currentLanguage
      };
    case type.CHANGE_DRAWERSTATE:
      let drawerstate = !action.drawerstate
      return {
        ...state,
        drawerstate
      };  
    default:
      return { ...state }
  }
}
