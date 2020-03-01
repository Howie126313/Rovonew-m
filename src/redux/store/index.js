/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:47:34 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-03-01 13:00:23
 */

import { createStore } from 'redux'

import reducer from '../reducer'

const initalState = {
  // EN/ZH 默认取值 EN 英文
  currentLanguage: 'EN',
  drawerOpen: false
}

export const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage,
    drawerOpen: state.drawerOpen
  }
}

const store = createStore(reducer, initalState)

export default store
