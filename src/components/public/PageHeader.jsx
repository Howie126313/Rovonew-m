import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './style.module.css'
import { switchLanguage, changeDrawerstate } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'
import { connect } from 'react-redux'

@withRouter
class PageHeader extends Component {
  constructor () {
    super()
    this.goHomepage = this.goHomepage.bind(this)
  }

  render() {
    const { dispatch, currentLanguage, drawerstate } = this.props
    return (
      <div className={styles.pageHeader}>
        <img 
        className={styles.leftPic} 
        src='http://image.rovostudios.com/img/wap/drawerBtn.png'
        alt=""
        onClick={() => dispatch(changeDrawerstate(drawerstate))}/>
        <img 
        className={styles.centerLogo} 
        src='http://image.rovostudios.com/img/wap/headerLogo.png' 
        alt=""
        onClick={this.goHomepage}/>
        <div 
        className={styles.rightWords}
        onClick={() => dispatch(switchLanguage(currentLanguage))}>{currentLanguage}</div>
      </div>
    )
  }

  goHomepage () {
    this.props.history.push('/')
  }

}

export default connect(mapStateToProps)(PageHeader)