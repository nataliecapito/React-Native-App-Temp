// general: all excessively repeated items and things are contained here.

// node packages
import { ListView } from 'react-native'
// core files
import Helper from '../../core/helpers/platformhelper'

// ***********************LETS*REGISTER*ICON*SIZE***********************
export const smallerestIconSize = Helper.isTablet() ? 17 : 12
export const smallerIconSize = Helper.isTablet() ? 20 : 15
export const normalIconSize = Helper.isTablet() ? 25 : 20
export const LargerIconSize = Helper.isTablet() ? 30 : 25

// ***********************LETS*REGISTER*DATASOURCE*FOR*LISTVIEWS***********************
const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId]
const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`]

export const datasource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  getSectionData,
  getRowData,
})

// ***********************LETS*REGISTER*SCROLL*SUPPORT***********************
export const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  // ^triggers when user reaches the bottom of the '</ScrollView>', and
  // returns 'true' or 'false', depending.
  const paddingToBottom = 20
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
}
