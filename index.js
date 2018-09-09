// general: index.js should be referenced to call in both the ios and android platform folders
// this is done automatically when react-native is installed.

import React, { PureComponent } from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import 'es6-symbol/implement' // for android to work, do not remove!
import AppAPP from './content/javascript/mobile/AppAPP'

export default class App extends PureComponent {
  render() {
    return (
      <AppAPP />
    )
  }
}

AppRegistry.registerComponent('App', () => App)
// Note: the word in the string, 'App', has to be what the app is registed as or it will fail!
// the other is the name of the class they don't have to be the same name, but are in this case.

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Setting a timer',
  'padding was given a value of 5, this has no effect on headerStyle.',
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  'RCTBridge required dispatch_sync to load RCTAppState. This may lead to deadlocks',
  'Required dispatch_sync to load constants for RCTAppState. This may lead to deadlocks',
])
// remove ^this^ to allow some really annoying unimportant warnings in the debug build mode.
