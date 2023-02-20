import React from 'react'
import { useNavigate } from 'react-router-dom'

// Assets
import PageNotFound from '../../assets/images/PageNotFound.png'
import { Box, Grid, Stack } from '@mui/material'
import { ButtonCustom, TextCustom } from '../atoms'

export const Error404 = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/dashboard/home')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">

      <Grid container columns={16} direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={8}>
          <img alt="complex" src={PageNotFound} width="100%" height="100%" />
        </Grid>
        <Grid item xs={8}>
          <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <TextCustom text="404 OPPS!" className="font-bold text-4xl" justifyContent="center" alignItems="center" />
              <TextCustom text="“The requested URL was not found on this server.”" className="font-bold text-xl" justifyContent="center" alignItems="center" />
              <TextCustom text="(No se encontró esta URL en este servidor)" className="font-bold text-xl" justifyContent="center" alignItems="center" />
              <ButtonCustom
                text="Volver Dashboard"
                typeColor="primary"
                onClick={handleHome}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>

    </Box>

  )
}
