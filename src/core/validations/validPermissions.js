//Codigo para validar los select de permisos (para que no vayan vacios)
import { typesValidation } from '../../common/types';

//Validaciones para cuando se cree un permiso
export const formValidAddPermission = permissions => {
  const response = {
    isValid: true,
    msgValid: {
      path: '',
      method: '',
    },
  };
  if(!permissions.path){
    response.msgValid.path = 'Path no ha sido asignado.\n';
    response.isValid = false;
  }
  if(!permissions.method){
    response.msgValid.method = 'Metodo no ha sido asignado.\n';
    response.isValid = false;
  }
  return response;
}
