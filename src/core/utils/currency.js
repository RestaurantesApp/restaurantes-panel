export const formatterCurrency = (value = 0, currency = 'L') => {
  return `${currency} ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

export const formatterCurrencyNumber = (value = 0) => {
  new Intl.NumberFormat('en-US')
  const amount = new Intl.NumberFormat('en-US').format(value)
  return amount
}
