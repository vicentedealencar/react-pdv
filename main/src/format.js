const currencySymbol = 'R$'
const thousandsDelimiter = '.'
const hundredsDelimiter = ','

export default value => {
  const parts = value.toFixed(2).split('.')
  parts[0] =
    currencySymbol + parts[0].split(/(?=(?:...)*$)/).join(thousandsDelimiter)
  return parts.join(hundredsDelimiter)
}
