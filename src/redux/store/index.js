/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:47:34 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 14:03:26
 */

import { createStore } from 'redux'

import reducer from '../reducer'

const initalState = {
  // EN/ZH 默认取值 EN 英文
  currentLanguage: 'EN',
  drawerstate: false
}

export const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage,
    drawerstate: state.drawerstate
  }
}

const store = createStore(reducer, initalState)

export default store
