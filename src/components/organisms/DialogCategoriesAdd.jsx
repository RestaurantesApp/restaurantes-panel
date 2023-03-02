//Componente para agregar una nueva categoria
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { ButtonCustom } from '../atoms'

export const DialogCategoriesAdd = ({
  idCategory = '',
  open = false,
  setOpen = () => null,
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
      title="Crear Categoria"
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
