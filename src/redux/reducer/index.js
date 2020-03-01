/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:50:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 13:50:38
 */
import { type } from '../action'

export default (state, action) => {
  switch (action.type) {
    case type.SWITCH_LANGUAGE:
      let currentLanguage = action.language === 'EN' ? 'ZH' : 'EN'
      console.log('改变后，当前的语言为：', currentLanguage)
      return {
        ...state,
        currentLanguage
      };
    case type.CHANGE_DRAWERSTATE:
      let drawerstate = !action.drawerOpen
      console.log('改变抽屉：', drawerstate)
      return {
        ...state,
        drawerstate
      };  
    default:
      return { ...state }
  }
}
