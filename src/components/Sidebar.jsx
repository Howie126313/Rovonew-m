import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import { changeDrawerstate } from '../redux/action'
import { Link } from 'react-router-dom'

import style from './sidebar.module.css'
import closeBBtn from '../assets/imgs/closeBtn.png'
import arrow from '../assets/imgs/arrow.png'
import magnifying from '../assets/imgs/magnifying.png'

class SideItem extends Component {
  render () {
    const array = [
      {
        name: 'HOME',
        path: '/'
      },
      {
        name: 'ABOUT',
        path: '/about'
      },
      {
        name: 'JOIN US',
        path: '/joinus'
      },
      {
        name: 'CONTACT',
        path: '/contact'
      }
    ]

    const sidebar = (
      array.map((item, index) => {
        return (
          <Link 
          className={style.link}
          to={item.path}
          key={index}
          onClick={() => {this.props.dispatch(changeDrawerstate(this.props.drawerstate))}}>
            <div className={style.sideItem}>
              <span>{item.name}</span>
              { item.path === window.location.pathname ? null : <img src={arrow} alt=""/>}
            </div>
          </Link>
        )
      })
    ) 
       
    return (
      <div className={style.sidebarContainer} style={{'width': window.innerWidth}}>
        <img className={style.close} src={closeBBtn}  onClick={this.close.bind(this)} alt=""/>
        <div className={style.searchContainer}>
          <input type="text" placeholder="搜索..." />
          <img src={magnifying} alt=""/>
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
