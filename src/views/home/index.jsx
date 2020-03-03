import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'
import homeLogo from '../../assets/imgs/homeLogo.png'
import logoArrow from '../../assets/imgs/homeArrowDown.png'
import homeBg3 from '../../assets/imgs/homeBg3.jpg'

import HomeItem from '../../components/home/HomeItem'

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
        <div className={style.sercondPage}>
          <HomeItem type='about' pic='' showTextTitle={true} />
        </div>
        <img className={style.homeBg3} src={homeBg3} alt=""/>
      </div>
    )
  }

  componentDidMount () {
    console.log(99999, this.props)
  }
}
export default connect(mapStateToProps)(Home)
