/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:46:06 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 13:49:45
 */
export const type = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE',
  CHANGE_DRAWERSTATE: 'CHANGE_DRAWERSTATE'
}

export function switchLanguage (language = 'en') {
  return {
    type: type.SWITCH_LANGUAGE,
    language
  }
}

export function changeDrawerstate (drawerstate) {
  return {
    type: type.CHANGE_DRAWERSTATE,
    drawerstate
  }
}
 