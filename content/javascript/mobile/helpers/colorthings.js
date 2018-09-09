// general: all colors used are contained here.

// node packages
import { createTheme } from 'react-native-theming'

// ***********************NORMAL*COLORS*STATIC*REFERNCES***********************
export const WhiteColor = '#ffffff'
export const BlackColor = '#4d4d4d'

// ***********************THEMES***********************
export const AppThemes = [
  // ***********************NORMAL*COLORS***********************
  createTheme(
    {
      // --- normal
      WhiteColor,
      BlackColor,
    },
    'Normal',
  ),

  // ***********************NIGHTMODE*COLORS***********************
  createTheme(
    {
      // --- normal
      WhiteColor: '#262626',
      BlackColor: WhiteColor,
    },
    'Dark',
  ),
]
