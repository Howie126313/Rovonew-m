import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../../redux/store'

import style from '../css/contact.module.css'

class Contact extends Component {
  render() {
    const { currentLanguage } = this.props
    const title = {
      'EN': 'CONTACT',
      'ZH': '联系我们'
    }
    
    return (
      <div className={currentLanguage === 'EN' ? 'enFont' : 'zhFont'}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.leftTitle}>{currentLanguage === 'EN' ? title.EN : title.ZH}</div>
            <div className={style.leftWords}>{currentLanguage === 'EN' ? title.ZH : title.EN}</div>
          </div>
          <div className="fl1">
            <div className="df alc">
              <img className={style.phoneIcon} src='http://47.116.199.18:82/img/wap/phoneIcon.png' alt=""/>
              <div className={style.phone}>{currentLanguage === 'EN' ? 'WeChat：' : '微信：'}</div>
              <div className={style.wechat}>ROVOHR</div>
            </div>
            <div className="df alc mt4">
              <img className={style.emailIcon} src='http://47.116.199.18:82/img/wap/emailIcon.png' alt=""/>
              <div className={style.phone}>{currentLanguage === 'EN' ? 'Email：' : '邮箱：'}</div>
              <div className={style.wechat}>ROVOSTUDIOS@163.COM</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Contact)
