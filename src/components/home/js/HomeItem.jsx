import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../../redux/store'

import style from '../css/homeItem.module.css'

class HomeItem extends Component {
  render() {
    const { currentLanguage } = this.props

    return (
      <div className={currentLanguage === 'EN' ? 'enFont' : 'zhFont'}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.leftTitle}>{currentLanguage === 'EN' ? this.props.title.EN : this.props.title.ZH}</div>
            <div className={style.leftWords}>{currentLanguage === 'EN' ? this.props.title.ZH : this.props.title.EN}</div>
          </div>
          <div className="fl1">
            <div className={style.rightTitle}>{currentLanguage === 'EN' ? 'ROVO PICTURES' : '洛弗影业'}</div>
            <div className={style.rightWords}>{this.props.text[currentLanguage]}</div>
          </div>
        </div>
        <img className={style.itemPic} src={this.props.pic} alt=""/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(HomeItem)
