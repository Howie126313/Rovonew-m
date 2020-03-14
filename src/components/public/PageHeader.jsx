import React, { Component } from 'react'
import styles from './style.module.css'
import { switchLanguage, changeDrawerstate } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'
import { connect } from 'react-redux'

// import drawerBtn from '../../assets/imgs/drawerBtn.png'
// import headerLogo from '../../assets/imgs/headerLogo.png'

class PageHeader extends Component {
  render() {
    const { dispatch, currentLanguage, drawerstate } = this.props
    return (
      <div className={styles.pageHeader}>
        <img 
        className={styles.leftPic} 
        src='http://47.116.199.18:82/img/wap/drawerBtn.png'
        alt=""
        onClick={() => dispatch(changeDrawerstate(drawerstate))}/>
        <img className={styles.centerLogo} src='http://47.116.199.18:82/img/wap/headerLogo.png' alt=""/>
        <div 
        className={styles.rightWords}
        onClick={() => dispatch(switchLanguage(currentLanguage))}>{currentLanguage}</div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(PageHeader)