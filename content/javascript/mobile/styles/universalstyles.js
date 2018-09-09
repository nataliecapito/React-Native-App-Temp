// general: styles used across all components; shared styles.
// directory: containers, flexbot, buttons, fonts, other

// node packages
import { Dimensions } from 'react-native'
import { createStyle } from 'react-native-theming'
// styles
import { WhiteColor, BlackColor } from '../helpers/colorthings'
import {
  APPtitleContainer,
  APPmediumContainer,
  APPnormalContainer,
  APPminiContainer,
} from '../helpers/fontthings'

const widthDimensions = Dimensions.get('window').width

// ***********************RESUSED*CODE***********************
const universalContainerStyle = {
  flex: 1,
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: '@WhiteColor',
  padding: 10,
}

const universalButtonStyle = {
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: 25,
  padding: 10,
}

export default createStyle({
  // ---------- universal styles
  // --- containers
  APPMainStyle: {
    ...universalContainerStyle,
    justifyContent: 'center',
    backgroundColor: BlackColor,
  },

  APPMainContainerStyle: {
    ...universalContainerStyle,
    justifyContent: 'flex-start',
  },
  APPMainContainerSPACEDStyle: {
    ...universalContainerStyle,
    justifyContent: 'space-between',
  },

  // --- flexbot
  flexDirectionColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexDirectionSTARTColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexDirectionSPACEDRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // --- buttons
  APPMainButtonStyle: {
    ...universalButtonStyle,
    backgroundColor: '@BlackColor',
  },
  APPMainButtonSTATICStyle: {
    ...universalButtonStyle,
    backgroundColor: BlackColor,
  },

  APPMainButtonPLAINStyle: {
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },

  // --- other
  APPMainDividerStyle: {
    width: widthDimensions - 20,
    borderBottomWidth: 1,
    borderBottomColor: '@APPLightGreyColor',
  },

  // --- fonts
  universalTitleStyle: {
    ...APPtitleContainer,
    color: WhiteColor,
  },
  universalTitleBLACKStyle: {
    ...APPtitleContainer,
    color: '@BlackColor',
  },

  universalMediumTextStyle: {
    ...APPmediumContainer,
    color: WhiteColor,
  },
  universalMediumBLACKTextStyle: {
    ...APPmediumContainer,
    color: '@BlackColor',
  },

  universalNormalTextStyle: {
    ...APPnormalContainer,
    color: WhiteColor,
  },
  universalNormalBLACKTextStyle: {
    ...APPnormalContainer,
    color: '@BlackColor',
  },

  universalMiniStyle: {
    ...APPminiContainer,
    color: '@BlackColor',
  },
  universalMiniSTATICStyle: {
    ...APPminiContainer,
    color: BlackColor,
  },
})
