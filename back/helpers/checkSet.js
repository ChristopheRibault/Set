const checkPropValidity = (values, prop) => {
  if (values[0][prop] !== values[1][prop]){
    if(values[2][prop] === values[0][prop] || values[2][prop] === values[1][prop])
      return false;
    return true;
  } else {
    if (values [2][prop] !== values [1][prop])
      return false;
    return true;
  }
}
module.exports = (cards) => {
  if (
    checkPropValidity(cards, 'shape') &&
    checkPropValidity(cards, 'color') &&
    checkPropValidity(cards, 'filling') &&
    checkPropValidity(cards, 'quantity')
  )
    return true;
  return false;
}
