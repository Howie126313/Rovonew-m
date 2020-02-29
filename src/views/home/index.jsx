import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchLanguage } from '../../redux/action'
import { mapStateToProps } from '../../redux/store'

import { Button, DatePicker } from 'antd-mobile'

class Home extends Component {
  render() {
    return (
      <div className="home">
        homesdasd
        <Button onClick={() => this.handleClick()}>Button</Button>
        <DatePicker />
      </div>
    )
  }

  handleClick() {
    const { currentLanguage } = this.props
    const { dispatch } = this.props
    dispatch(switchLanguage(currentLanguage))
  }
}
export default connect(mapStateToProps)(Home)
