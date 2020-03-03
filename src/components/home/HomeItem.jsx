import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import homeAbout from '../../assets/imgs/homeAbout.png'
import style from './style.module.css'

class HomeItem extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.left}>
          <img className={style.leftPic} src={homeAbout} alt=""/>
          <div className={style.leftWords}>关于我们</div>
        </div>
        <div className="fl1">
          <div className={style.rightTitle}>ROVO PICTURES</div>
          <div className="rightWords"></div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(HomeItem)
