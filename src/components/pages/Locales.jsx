import React, { useState} from 'react'
// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import {
  DialogLocalesAdd,
  DialogLocalesDelete,
  DialogLocalesEdit,
} from '../organisms'
import { TableCustom } from '../templates'

//const
import { columnsLocales } from '../../common/tables'
import { typesTableActions } from '../../common/types'
//Falsa data
import exampleLocal from '../../common/tables/exampleLocal.json'

const { tableEdit, tableDelete } = typesTableActions
export const Locales = () => {
  //Inicialización de las variables useState
  // const [locales, setLocales] = useState([])
  // const [idLocales, setIdLocales] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  // const [showDelete, setShowDelete] = useState(false)
  const [loader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de Locales" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Local"
          className="my-3"
          onClick={() => setShowAdd(true)}
        />
      </div>
      <div className="px-4">
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TableCustom
            data={exampleLocal}
            columns={columnsLocales}
            identifierSort="name"
            actions={[tableEdit, tableDelete]}
            isSearch
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogLocalesAdd open={showAdd} setOpen={setShowAdd} />
      <DialogLocalesEdit />
      <DialogLocalesDelete />
    </div>
  )
}
