import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'
import homeLogo from '../../assets/imgs/homeLogo.png'
import logoArrow from '../../assets/imgs/homeArrowDown.png'
import homeBg3 from '../../assets/imgs/homeBg3.jpg'

const HomeItem = lazy(() => import('../../components/home/js/HomeItem'))
const Contact = lazy(() => import('../../components/home/js/Contact'))

class Home extends Component {

  render() {
    const { homeDataArr } = this.props

    const secrondPage = (
      homeDataArr.map((item, index) => {
        return (
          <HomeItem 
          type={item.type} 
          pic={item.pic} 
          title={item.title}
          showTextTitle={item.showTextTitle}
          text={item.text}
          key={index} />
        )
      })
    )

    return (
      <div className="home">
        <Suspense fallback={<h1>Still Loading....</h1>}>
          <div className={style.banner} style={{'height': window.innerHeight || document.body.clientHeight}}>
            <div className={style.homeLogoWrap}>
              <img className={style.homeLogo} src={homeLogo} alt=""/>
              <img className={style.logoArrow} src={logoArrow} alt=""/>
            </div>
          </div>
          <div className={style.sercondPage}>{secrondPage}</div>
          <Contact />
          <img className={style.homeBg3} src={homeBg3} alt=""/>
        </Suspense>
      </div>
    )
  }

  componentDidMount () {
    console.log(99999, this.props)
  }
}
export default connect(mapStateToProps)(Home)
