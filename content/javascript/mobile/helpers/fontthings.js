// general: all font styles and things are contained here.

// node packages
import { Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
// core files
import Helper from '../../core/helpers/platformhelper'

// **********************************************
const getFontValueConst = () => {
  let value = 10

  if (Helper.isTablet()) {
    value = 20
  } else if (isIphoneX()) {
    value = 15
  }

  return value
}

// **********************************************
export const APPfontFam = 'Avenir Next'

export const APPlargeFont = Helper.isTablet() ? 33 : 30
export const APPmediumFont = Helper.isTablet() ? 21 : 18
export const APPmediumNormalFont = Helper.isTablet() ? 19 : 16
export const APPnormalFont = Helper.isTablet() ? 18 : 15
export const APPsmallFont = Helper.isTablet() ? 16 : 13
export const APPextrasmallFont = getFontValueConst()

export const demiBold = Platform.OS === 'android' ? 'bold' : '700'
export const mediumBold = Platform.OS === 'android' ? 'normal' : '500'
export const normalBold = Platform.OS === 'android' ? 'normal' : '400'

// **********************************************
export const APPtitleContainer = {
  fontFamily: APPfontFam,
  fontSize: APPlargeFont,
  fontWeight: demiBold,
}

export const APPmediumContainer = {
  fontFamily: APPfontFam,
  fontSize: APPmediumFont,
  fontWeight: normalBold,
}

export const APPnormalContainer = {
  fontFamily: APPfontFam,
  fontSize: APPnormalFont,
  fontWeight: normalBold,
}

export const APPminiContainer = {
  fontFamily: APPfontFam,
  fontSize: APPsmallFont,
  fontWeight: mediumBold,
}
