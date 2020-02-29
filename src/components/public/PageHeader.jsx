import React, { Component } from 'react'
import styles from './style.module.css'
import menuIcon from '../../assets/imgs/menu.svg'
class PageHeader extends Component {
  render() {
    return (
      <div className={styles.pageHeader}>
        <div className={styles.left}>
          <img src={menuIcon} alt="" />
        </div>
        <div className={styles.center}></div>
        <div className={styles.right}></div>
      </div>
    )
  }
}

export default PageHeader