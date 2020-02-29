import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchLanguage } from '../../redux/action'

import { Button, DatePicker } from 'antd-mobile'

class Home extends Component {
  render() {
    return (
      <div className="home">
        homesdasd
        <Button onClick={this.handleClick.bind(this)}>BUtton</Button>
        <DatePicker />
      </div>
    )
  }

  handleClick () {
    const currentLanguage = 'en'
    const { dispatch } = this.props
    console.log(111111, this.props)
    dispatch(switchLanguage(currentLanguage === 'en' ? 'zh' : 'en'))
  }
}
export default connect()(Home)
