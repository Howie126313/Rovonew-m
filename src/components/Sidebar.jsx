import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import { changeDrawerstate } from '../redux/action'

import style from './sidebar.module.css'
import closeBBtn from '../assets/imgs/closeBtn.png'
import arrow from '../assets/imgs/arrow.png'

class SideItem extends Component {
  render () {
    const array = [
      {
        name: 'HOME',
        path: '/'
      },
      {
        name: 'ABOUT',
        path: '/#/about'
      },
      {
        name: 'JOIN US',
        path: '/#/joinus'
      },
      {
        name: 'CONTACT',
        path: '/#/contact'
      }
    ]

    const sidebar = (
      array.map((item, index) => {
        return (
          <a 
          className={style.link}
          href={item.path}
          key={index}
          onClick={() => {this.props.dispatch(changeDrawerstate(this.props.drawerstate))}}>
            <div className={style.sideItem}>
              <span>{item.name}</span>
              { item.path === window.location.pathname ? null : <img src={arrow} alt=""/>}
            </div>
          </a>
        )
      })
    ) 
       
    return (
      <div className={style.sidebarContainer} style={{'width': window.innerWidth}}>
        <img className={style.close} src={closeBBtn}  onClick={this.close.bind(this)} alt=""/>
        {sidebar}
      </div>
    )
    
  }

  close () {
    this.props.dispatch(changeDrawerstate(this.props.drawerstate))
  }
}

export default connect(mapStateToProps)(SideItem)
