/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:47:34 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-29 18:48:51
 */

import { createStore } from 'redux'

import reducer from '../reducer'

const initalState = {
  // en/zh 默认取值 en 英文
  currentLanguage: 'en'
}

const store = createStore(reducer, initalState)

export default store
