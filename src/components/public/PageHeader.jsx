import React, { Component } from 'react'
import styles from './style.module.css'
import { switchLanguage } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'
import menuIcon from '../../assets/imgs/menu.svg'
import { connect } from 'react-redux'

class PageHeader extends Component {
  render() {
    const { dispatch, currentLanguage } = this.props;
    return (
      <div className={styles.pageHeader}>
        <div className={styles.left}>
          <img src={menuIcon} alt="" />
        </div>
        <div className={styles.center}></div>
        <div className={styles.right}
          onClick={() => dispatch(switchLanguage(currentLanguage))}>{currentLanguage}</div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(PageHeader)