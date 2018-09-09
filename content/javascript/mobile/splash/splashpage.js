// general: the first page to load when the mobile app is powering up.
// note: the splash page redirects the user by looking for if they are logged in or not.
// if there is no database connection - they are dropped on the 'downpage'.

import React, { Component } from 'react'
// node packages
import { View, Animated } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Store from 'react-native-simple-store'
import Timer from 'react-native-timer'
// styles
import StylesCSS from '../styles/universalstyles'

export default class SplashPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginTrue: false, // if the login component should be displayed or not.
      bounceValue: new Animated.Value(100), // animation value height.
    }
  }

  async componentDidMount() {
    // on native app mount the login info, that is saved locally, to a users device
    // is pulled, and a timer is set for countdown.
    this.mounted = true // set 'mounted' to true.
    if (this.mounted) {
      const [userlogin] = await Promise.all([Store.get('@App:userlogin')])
      Timer.setTimeout(this, 'splashpage', () => this.doStart(userlogin), 2000)
    }
  }

  componentWillUnmount() {
    // ^resets all values and states and things.
    this.mounted = false
    Timer.clearTimeout(this)
    // ^on native app unmount the timer number will be cleared.
    this.setState({ loginTrue: false, bounceValue: new Animated.Value(100) })
  }

  doStart(userlogin: boolean) {
    if (userlogin) {
      Actions.home({ type: ActionConst.REPLACE }) // redirect home.
    } else if (!userlogin) {
      this.toggleView(false)
      this.setState({ loginTrue: true }) // enable the login.js component.
    } else {
      Actions.downpage({ type: ActionConst.REPLACE }) // redirect to downpage.
    }
  }

  toggleView(value: boolean) {
    let toValue = 100

    if (!value) {
      toValue = 0
    }

    Animated.spring(this.state.bounceValue, {
      toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start()
  }

  render() {
    // states
    const { loginTrue } = this.state

    // containers
    let content = <View />

    if (loginTrue) {
      // ^add the login component in if 'loginTrue' is set to 'true'.
      content = (
        <Animated.View style={{ transform: [{ translateY: this.state.bounceValue }] }}>
          <View />
        </Animated.View>
      )
    }

    return (
      <View style={StylesCSS.APPMainStyle}>
        <View />

        {content}
      </View>
    )
  }
}
