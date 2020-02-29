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
        <Button onClick={this.handleClick.bind(this)}>Button</Button>
        <DatePicker />
      </div>
    )
  }

  handleClick () {
    const currentLanguage = this.props.currentLanguage
    const { dispatch } = this.props
    console.log('修改前', currentLanguage)
    dispatch(switchLanguage('zh'))
    console.log('修改后', this.props.currentLanguage)
  }
}
export default connect(mapStateToProps)(Home)
