/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:47:34 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-29 19:23:43
 */

import { createStore } from 'redux'

import reducer from '../reducer'

const initalState = {
  // en/zh 默认取值 en 英文
  currentLanguage: 'en'
}

export const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage
  }
}

const store = createStore(reducer, initalState)

export default store
