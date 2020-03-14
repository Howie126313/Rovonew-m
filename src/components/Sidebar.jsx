import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import { changeDrawerstate } from '../redux/action'
import { Link } from 'react-router-dom'

import style from './sidebar.module.css'

class SideItem extends Component {
  render () {
    const array = [
      {
        name: 'HOME',
        zhName: '首页',
        path: '/'
      },
      {
        name: 'ABOUT',
        zhName: '关于我们',
        path: '/about'
      },
      {
        name: 'JOIN US',
        zhName: '加入我们',
        path: '/joinus'
      },
      {
        name: 'CONTACT',
        zhName: '联系我们',
        path: '/contact'
      }
    ]

    const { currentLanguage } = this.props

    const sidebar = (
      array.map((item, index) => {
        return (
          <Link 
          className={style.link}
          to={item.path}
          key={index}
          onClick={() => {this.props.dispatch(changeDrawerstate(this.props.drawerstate))}}>
            <div className={style.sideItem}>
              <span>{currentLanguage === 'EN' ? item.name : item.zhName}</span>
              { item.path === window.location.hash.replace('#', '') ? null : <img src='http://47.116.199.18:82/img/wap/arrow.png' alt=""/>}
            </div>
          </Link>
        )
      })
    ) 
       
    return (
      <div className={style.sidebarContainer} style={{'width': window.innerWidth}}>
        <div className={style.closeWrap}>
          <img className={style.close} src='http://47.116.199.18:82/img/wap/closeBtn.png'  onClick={this.close.bind(this)} alt=""/>
        </div>
        <div className={style.searchContainer}>
          <input type="text" placeholder={currentLanguage === 'EN' ? 'Search...' : '搜索...'} />
          <img src='http://47.116.199.18:82/img/wap/magnifying.png' alt=""/>
        </div>
        {sidebar}
      </div>
    )
    
  }

  close () {
    this.props.dispatch(changeDrawerstate(this.props.drawerstate))
  }
}

export default connect(mapStateToProps)(SideItem)
