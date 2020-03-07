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
          href={item.path}
          key={index}>
            <div className={style.sideItem}>
              <span>{item.name}</span>
              <img src={arrow} alt="" onClick={this.close}/>
            </div>
          </a>
        )
      })
    ) 
       
    return (
      <div className={style.sidebarContainer} style={{'width': window.innerWidth * 0.7 + 'px'}}>
        <img className={style.close} src={closeBBtn} alt=""/>
        {sidebar}
      </div>
    )
    
  }

  close = () => {
    console.log(11111, this.props.location)
    this.props.dispatch(changeDrawerstate(this.props.drawerstate))
  }
}

export default connect(mapStateToProps)(SideItem)
