// general: the user will only see this page if there is an error connecting to the database.

import React, { Component } from 'react'
// node packages
import { ScrollView, RefreshControl, Text, Animated, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
// styles
import StylesCSS from '../styles/universalstyles'
import SplashDownCSS from './styles/splashdownstyles'

export default class DownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refreshing: false, // refresh state variable set to 'false' on mount.
      bounceValue: new Animated.Value(100), // animation value height.
    }

    this.toggleView(false)
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
    return (
      <ScrollView
        contentContainerStyle={StylesCSS.APPMainStyle}
        refreshControl={
          <RefreshControl
            // refreshes to check the status of the splashpage for
            // if there is connection or not.
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ refreshing: true })
              Actions.splash()
            }}
          />
        }
      >
        <View />

        <Animated.View
          style={{
            transform: [{ translateY: this.state.bounceValue }],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text allowFontScaling={true} style={SplashDownCSS.downPageTextStyle}>
            Please try reloading the app or check back later.
          </Text>
        </Animated.View>

        <View />
      </ScrollView>
    )
  }
}
