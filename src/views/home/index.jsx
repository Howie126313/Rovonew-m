import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/store'

import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className={style.banner}></div>
      </div>
    )
  }

  componentDidMount () {
    console.log(99999, this.props)
  }
}
export default connect(mapStateToProps)(Home)
