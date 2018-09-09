// general: styles for splashpage and downpage component(s).

// node packages
import { StyleSheet } from 'react-native'
// styles
import { WhiteColor } from '../../helpers/colorthings'
import { APPnormalContainer } from '../../helpers/fontthings'

export default StyleSheet.create({
  // ---------- splashpage.js && downpage.js styles
  downPageTextStyle: {
    ...APPnormalContainer,
    color: WhiteColor,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
})
