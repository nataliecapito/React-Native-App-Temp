// general: list of all the files that can be viewed, 'scenes', in the native
// application and how/where they appear.

// note: for custom TRANSITIONING, from scene to scene, refer here:
// https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md#actions.

import React, { Component } from 'react'
import { TouchableOpacity, BackHandler, DeviceEventEmitter, Platform, NativeModules } from 'react-native'
// node packages
import { Actions, Router, Scene, Drawer, ActionConst } from 'react-native-router-flux'
import Store from 'react-native-simple-store'
// Other core fils
import Helper from '../core/helpers/platformhelper'
import Icons from './icons'
// On app start
import SplashPage from './splash/splashpage'
import DownPage from './splash/downpage'
// Main
import MainHome from './main/home'
// styles
import { normalIconSize } from './helpers/repeatedthings'
import { AppThemes, WhiteColor, BlackColor } from './helpers/colorthings'
import AppCSS from './styles/appstyles'

// restrict super large fonts aka 'larger accessibility sizes' via phone's settings
const { AccessibilityManager } = NativeModules
const MAX_FONT_SIZE_MULTIPLIER = 1.04 // size that resets 'larger accessibility sizes'(s)
const fontSizeMultipliers = {
  extraSmall: 0.823, // normal extraSmall.
  small: 0.882, // normal small.
  medium: 0.941, // normal medium.
  large: 1.0, // normal large.
  extraLarge: MAX_FONT_SIZE_MULTIPLIER, // reset from 1.118 to 'MAX_FONT_SIZE_MULTIPLIER'.
  extraExtraLarge: MAX_FONT_SIZE_MULTIPLIER, // reset from 1.235 to 'MAX_FONT_SIZE_MULTIPLIER'.
  extraExtraExtraLarge: MAX_FONT_SIZE_MULTIPLIER, // reset from 1.353 to 'MAX_FONT_SIZE_MULTIPLIER'.
  accessibilityMedium: MAX_FONT_SIZE_MULTIPLIER, // reset from 1.786 to 'MAX_FONT_SIZE_MULTIPLIER'.
  accessibilityLarge: MAX_FONT_SIZE_MULTIPLIER, // reset from 2.143 to 'MAX_FONT_SIZE_MULTIPLIER'.
  accessibilityExtraLarge: MAX_FONT_SIZE_MULTIPLIER,
  // ^reset from 2.643 to 'MAX_FONT_SIZE_MULTIPLIER'.
  accessibilityExtraExtraLarge: MAX_FONT_SIZE_MULTIPLIER,
  // ^reset from 3.143 to 'MAX_FONT_SIZE_MULTIPLIER'.
  accessibilityExtraExtraExtraLarge: MAX_FONT_SIZE_MULTIPLIER,
  // ^reset from 3.571 to 'MAX_FONT_SIZE_MULTIPLIER'.
}
// end

export default class AppAPP extends Component {
  constructor(props) {
    super(props)

    this.backPressSubscriptions = new Set()
    // ^sets initial state for android back button.
    this._onBackNormal = this.onBackNormal.bind(this)
    this._onBackHardReload = this.onBackHardReload.bind(this)
  }

  async componentDidMount() {
    this.mounted = true // set 'mounted' to true.

    if (this.mounted) {
      if (Platform.OS === 'android') {
        // if mounted and Platform is registed as an android.
        DeviceEventEmitter.removeAllListeners('hardwareBackPress')
        // ^removes any lingering instances of hardwareBackPress listener.
        DeviceEventEmitter.addListener('hardwareBackPress', () => {
          let invokeDefault = true
          const subscriptions = []

          this.backPressSubscriptions.forEach(sub => subscriptions.push(sub))

          for (let i = 0; i < subscriptions.reverse().length; i += 1) {
            if (subscriptions[i]) {
              invokeDefault = false
              break
            }
          }

          if (invokeDefault) {
            if (Actions.currentScene !== 'home' && Actions.currentScene !== '') {
              if ( Actions.currentScene === 'other') {
                Actions.popTo('home') // pops back to home page.
              } else {
                Actions.pop()
              }
            } else if (Actions.currentScene === 'home') {
              Actions.popTo('splash') // pops back to splash page -> for re-enter.
              BackHandler.exitApp() // takes you out of app.
            } else {
              Actions.popTo('splash') // pops back to splash page -> for re-enter.
              BackHandler.exitApp() // takes you out of app.
            }
          }
        })

        this.backPressSubscriptions.add(this.handleHardwareBack)
      } else {
        AccessibilityManager.setAccessibilityContentSizeMultipliers(fontSizeMultipliers)
      }

      // ***********************LETS*CHECK*FOR*NIGHT*MODE***********************
      try {
        const [night_mode] = await Promise.all([Store.get('@App:night_mode')]) // eslint-disable-line camelcase
        // eslint-disable-next-line camelcase
        if (night_mode && night_mode !== undefined) {
          for (const theme of AppThemes) {
            if (theme.name === 'Dark') {
              theme.apply()
            }
          }
        }
      } catch (error) {
        console.error(error)
      }
      // ***********************LETS*CHECK*FOR*NIGHT*MODE***********************
    }
  }

  componentWillUnmount() {
    // ^resets all values and states and things.
    this.mounted = false
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    // ^removes hardwareBackPress listener.
    this.backPressSubscriptions.clear() // clears the backPressSubscriptions state.
  }

  onBackNormal() {
    Actions.pop()
    Actions.refresh({ key: Math.random() })
  }

  onBackHardReload() {
    Actions.home({ type: ActionConst.REPLACE })
  }

  render() {
    const getSceneStyle = () => ({
      backgroundColor: WhiteColor,
    })
    // ^sets the default backgroundColor of the whole app to 'white'.

    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="root">
          <Scene
            key="splash"
            type="reset"
            title="Splash"
            initial={true}
            hideNavBar={true}
            panHandlers={null}
            component={SplashPage}
          />
          <Scene
            key="downpage"
            title="DownPage"
            hideNavBar={true}
            panHandlers={null}
            component={DownPage}
          />

          <Drawer
            key="home"
            hideNavBar={true}
            drawerWidth={250}
            drawerPosition="left"
            drawerIcon={() => (
              // TODO: drawer icon here.
            )}
            panHandlers={null}
            contentComponent={/* TODO: Drawer/Slid-menu component */}
          >
            <Scene
              key="tabbar"
              tabs={true}
              tabBarPosition="bottom"
              activeTintColor={WhiteColor}
              inactiveTintColor={BlackColor}
              showLabel={Helper.isTablet() ? false : true}
              tabBarStyle={AppCSS.tabBarStyle}
              panHandlers={null}
            >
              <Scene
                key="home_tab"
                navigationBarTitleImage={require('../core/assets/images/app_logo.png')}
                navigationBarTitleImageStyle={AppCSS.navigationBarTitleImageStyle}
                title="Home"
                swipeEnabled={false}
                animationEnabled={false}
                backToInitial={false}
                icon_image={/* TODO: icon */}
                allow_alerts={false}
                icon_size={normalIconSize}
                panHandlers={null}
                icon={Icons}
              >
                <Scene
                  key="home"
                  title="Home"
                  sceneStyle={{ paddingBottom: 50, paddingTop: 54 }}
                  hideNavBar={false}
                  renderRightButton={() => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          // TODO: top right component.
                        }}
                      >
                        <Icons
                          icon_size={normalIconSize}
                          focused={true}
                          icon_image={/* TODO: icon */}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableOpacity>
                    )
                  }}
                  titleStyle={AppCSS.navBarTitleStyle}
                  navigationBarStyle={AppCSS.navBarStyle}
                  allowFontScaling={true}
                  panHandlers={null}
                  component={MainHome}
                />
              </Scene>
            </Scene>
          </Drawer>

          <Scene
            key="otherapppage"
            title=" "
            hideNavBar={false}
            renderRightButton={() => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // TODO: top right component.
                  }}
                >
                  <Icons
                    icon_size={normalIconSize}
                    focused={true}
                    icon_image={/* TODO: icon */}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              )
            }}
            allowFontScaling={true}
            backTitle="Back"
            tintColor={WhiteColor}
            backButtonTextStyle={AppCSS.navBarTitleStyle}
            navigationBarStyle={AppCSS.navBarStyle}
            panHandlers={null}
            component={/* TODO: component */}
          />

          <Scene
            key="otherotherapppage"
            title=" "
            hideNavBar={false}
            allowFontScaling={true}
            backTitle="Back"
            tintColor={WhiteColor}
            backButtonTextStyle={AppCSS.navBarTitleStyle}
            navigationBarStyle={AppCSS.navBarStyle}
            panHandlers={null}
            component={/* TODO: icon */}
          />
        </Scene>
      </Router>
    )
  }
}
