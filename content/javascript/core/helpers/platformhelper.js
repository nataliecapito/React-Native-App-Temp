// general: helper function(s) to make all things easier on your life.

// node packages
import { Dimensions } from 'react-native'

export default {
  // MOBILE HELPER(S)
  isTablet: () => {
    // Tablet finder function that calculates the aspect ratio of an devices, and depending,
    // will return true so you can do things like ->

    // ex: { width: Helper.isTablet() ?
    // Dimensions.get('window').width * .55 : Dimensions.get('window').width - 60 }
    // in a stylesheet.
    const { height, width } = Dimensions.get('window')
    const aspectRatio = height / width
    const value = aspectRatio < 1.6
    return value
  },
}
