import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'
import style from './about.module.css'

const HomeItem = lazy(() => import('../../components/home/js/HomeItem'))

class About extends Component {
  render () {
    const { homeDataArr } = this.props

    return (
      <div className={style.container} style={{'height': window.innerHeight || document.body.clientHeight}}>
        <Suspense fallback={<h1>Still Loading....</h1>}>
          <HomeItem 
          type={homeDataArr[1].type} 
          pic={homeDataArr[1].pic} 
          title={homeDataArr[1].title}
          showTextTitle={homeDataArr[1].showTextTitle}
          text={homeDataArr[1].text} />
        </Suspense>
      </div>
    )
  }
}

export default connect(mapStateToProps)(About)
