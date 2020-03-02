import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'
import homeLogo from '../../assets/imgs/homeLogo.png'
import logoArrow from '../../assets/imgs/homeArrowDown.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className={style.banner}>
          <div className={style.homeLogoWrap}>
            <img className={style.homeLogo} src={homeLogo} alt=""/>
            <img className={style.logoArrow} src={logoArrow} alt=""/>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    console.log(99999, this.props)
  }
}
export default connect(mapStateToProps)(Home)
