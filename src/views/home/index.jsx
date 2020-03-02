import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className={style.banner}></div>
        <div className={style.testZh}>字体测试中文</div>
        <div className={style.testEn}>test font-family</div>
      </div>
    )
  }

  componentDidMount () {
    console.log(99999, this.props)
  }
}
export default connect(mapStateToProps)(Home)
