import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchLanguage } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className={style.banner}></div>
      </div>
    )
  }

  handleClick() {
    const { currentLanguage } = this.props
    const { dispatch } = this.props
    dispatch(switchLanguage(currentLanguage))
  }
}
export default connect(mapStateToProps)(Home)
