/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:46:06 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-29 17:54:56
 */
export const type = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE'
}

export function switchLanguage (language = 'en') {
  return {
    type: type.SWITCH_LANGUAGE,
    language
  }
}
 