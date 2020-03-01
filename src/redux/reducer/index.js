/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:50:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 14:02:34
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
      let drawerstate = !action.drawerstate
      console.log('改变前抽屉：', action)
      console.log('改变后抽屉：', drawerstate)
      return {
        ...state,
        drawerstate
      };  
    default:
      return { ...state }
  }
}
