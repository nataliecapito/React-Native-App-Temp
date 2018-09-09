// general: styles for the AppAPP.js and icons.js components.

// node packages
import { StyleSheet, Platform, Dimensions } from 'react-native'
// core files
import Helper from '../../core/helpers/platformhelper'
// styles
import { WhiteColor, BlackColor } from '../helpers/colorthings'
import { demiBold, APPnormalContainer } from '../helpers/fontthings'

const widthDimensions = Dimensions.get('window').width

export default StyleSheet.create({
  // ---------- AppAPP.js styles
  navBarStyle: {
    overflow: 'hidden',
    backgroundColor: BlackColor,
    padding: 5,
  },
  navBarTitleStyle: {
    ...APPnormalContainer,
    fontWeight: demiBold,
    color: WhiteColor,

    // android specific
    ...Platform.select({
      android: {
        flex: 1,
        textAlign: 'center',
      },
    }),
  },

  tabBarStyle: {
    backgroundColor: BlackColor,
    paddingTop: Helper.isTablet() ? 25 : 0,
  },

  navigationBarTitleImageStyle: {
    height: Helper.isTablet() ? widthDimensions * 0.05 : widthDimensions * 0.07,
    width: Helper.isTablet() ? widthDimensions * 0.27 : widthDimensions * 0.4,

    // android specific
    ...Platform.select({
      android: {
        marginLeft: widthDimensions * 0.15,
      },
    }),
  },

  // ---------- icons.js styles
  alertIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: Helper.isTablet() ? 37 : 5,
    left: 9,
    height: 20,
    minWidth: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 2,
  },
})
