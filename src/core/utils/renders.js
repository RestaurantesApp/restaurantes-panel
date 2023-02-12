import { colors } from '../../components/themes'

export const renderColor = (typeColor = '') => {
  switch (typeColor) {
    case 'primary':
      return colors.primary
    case 'secondary':
      return colors.secondary
    case 'success':
      return colors.success
    case 'danger':
      return colors.danger
    case 'warning':
      return colors.warning
    case 'dark-gray':
      return colors['dark-gray']
    case 'silver':
      return colors.silver
    case 'white':
      return colors.white
    default:
      return undefined
  }
}
