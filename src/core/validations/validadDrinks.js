
export const formValidAddDrinks = drink => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      price: '',
      active: '',
    },
  }
  if (!drink.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!drink.price) {
    response.msgValid.price = 'Precio no ha sido asignado.\n'
    response.isValid = false
  }
  if (!drink.active) {
    response.msgValid.active = 'Active no ha sido asignada.\n'
    response.isValid = false
  }

  return response
}

export const formValidEditDrinks = drink => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      price: '',
    },
  }
  if (!drink.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!drink.price) {
    response.msgValid.price = 'Precio no ha sido asignado.\n'
    response.isValid = false
  }


  return response
}
