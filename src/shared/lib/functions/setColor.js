export const setColor = (value = '') => {
  switch (value) {
    case 'small':
      return '#006944'
    case 'middle':
      return '#F1BD6C'
    case 'big':
      return '#D1395A'
    default:
      return '#FFFFFF';
  }
}