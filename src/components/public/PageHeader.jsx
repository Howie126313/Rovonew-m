import React, { Component } from 'react'
import css from './style.module.css'
import { switchLanguage } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'
import { connect } from 'react-redux'

import drawerBtn from '../../assets/imgs/drawerBtn.png'
import headerLogo from '../../assets/imgs/headerLogo.png'

class PageHeader extends Component {
  render() {
    const { dispatch, currentLanguage } = this.props;
    return (
      <div className={css.pageHeader}>
        <img className={css.leftPic} src={drawerBtn} alt=""/>
        <img className={css.centerLogo} src={headerLogo} alt=""/>
        <div 
        className={css.rightWords}
        onClick={() => dispatch(switchLanguage(currentLanguage))}>{currentLanguage}</div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(PageHeader)