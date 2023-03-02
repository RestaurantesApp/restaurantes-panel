//Componente para editar una categoria
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { ButtonCustom } from '../atoms'

export const DialogCategoriesEdit = ({
  idCategory = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  // sessionExpired = false,
}) => {
  const handleCancel = () => {
    setOpen(false)
    // resetForm()
  }
  const handleDismiss = () => {
    setOpen(false)
    // resetForm()
  }
  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Actualizar Categoria"
      onDismiss={handleDismiss}
    >
      <DialogContent></DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Guardar"
          typeColor="primary"
          // onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}
