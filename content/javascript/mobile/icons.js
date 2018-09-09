// general: .svgs come here, first, before going to the imported SvgUri node module;
// here they are checked if they are 'focused' or not and styled.

// note: 'focused' -> true .svgs are displayed white, else they are that blue
// grey tint color.

import React, { Component } from 'react'
// node packages
import { View, Text } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import Timer from 'react-native-timer'
// styles
import { WhiteColor, BlackColor } from './helpers/colorthings'
import { APPsmallFont } from './helpers/fontthings'
import StylesCSS from './styles/universalstyles'
import AppCSS from './styles/appstyles'

export default class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertNumber: 0, // alert number; default -> 0.
    }
  }

  componentDidMount() {
    this.mounted = true // set mount to true.
    if (this.mounted) {
      this.onStart(true) // sets the timer to update the 'alertNumber' state.
    }
  }

  componentWillUnmount() {
    // ^resets all values and states.
    this.mounted = false
    Timer.clearTimeout(this)
    this.setState({ alertNumber: 0 })
  }

  onStart(timer: boolean) {
    if (timer) {
      this.getAlertNumbers()
      // ^if 'true' call function 'getAlertNumbers' for an update.
    } else {
      Timer.setTimeout(this, 'getAlertNumbers', () => this.getAlertNumbers(), 300000)
      // ^else wait 5min to call function 'getAlertNumbers' for an update.
    }
  }

  getAlertNumbers() {
    if (this.props.allow_alerts) {
      // TODO: add app alert 'get' funciton here.
    }
  }

  render() {
    // props/states
    const { focused, style } = this.props
    const iconImage = this.props.icon_image
    const iconSize = this.props.icon_size
    const allowAlerts = this.props.allow_alerts
    const { alertNumber } = this.state

    // containers
    let alertContainer = null

    if (allowAlerts && alertNumber > 0) {
      // the red alert icon above the normal tabbar alert icon.
      alertContainer = (
        <View style={AppCSS.alertIconContainerStyle}>
          <Text
            allowFontScaling={true}
            style={[StylesCSS.universalNormalTextStyle, { fontSize: APPsmallFont }]}
          >
            {alertNumber}
          </Text>
        </View>
      )
    }

    return (
      <View style={[style, { position: 'relative' }]}>
        {alertContainer}

        <SvgUri
          height={iconSize}
          width={iconSize}
          fill={focused ? WhiteColor : BlackColor}
          svgXmlData={iconImage}
        />
      </View>
    )
  }
}
