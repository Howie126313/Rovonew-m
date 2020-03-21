import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'

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
              <img className={style.homeLogo} src='http://image.rovostudios.com/img/wap/homeLogo.png' alt=""/>
              <img className={style.logoArrow} src='http://image.rovostudios.com/img/wap/homeArrowDown.png' alt=""/>
            </div>
          </div>
          <div className={style.sercondPage}>{secrondPage}</div>
          <Contact />
          <img className={style.homeBg3} src='http://image.rovostudios.com/img/wap/homeBg3.jpeg' alt=""/>
        </Suspense>
      </div>
    )
  }

  componentDidMount () {
  }
}
export default connect(mapStateToProps)(Home)
