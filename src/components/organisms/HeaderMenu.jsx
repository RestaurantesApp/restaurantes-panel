import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Hooks
import { AuthContext } from '../../context'

// Components
import { AppBar, IconButton, List, Toolbar } from '@mui/material'
import { TextCustom } from '../atoms'
import { DrawerItem } from '../atoms'

// Assets
import Avatar from '../../assets/images/Avatar.png'
import MenuIcon from '@mui/icons-material/Menu'
import { DropdownCustom } from '../templates'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import PersonIcon from '@mui/icons-material/Person'

// Const
import { typesGlobalState } from '../../common/types'

const { authLogout } = typesGlobalState

export const HeaderMenu = ({ drawerWidth, handleDrawerToggle }) => {
  const { authState } = useContext(AuthContext)
  const { personalInfo } = authState
  const [showDropdown, setShowDropdown] = useState(false)

  const DropdownContent = ({ setOpen = () => null }) => {
    const { authDispatch } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const handleLogout = () => {
      authDispatch({ type: authLogout })
    }
    const handleProfile = () => {
      navigate('/dashboard/profile')
      setOpen(false)
    }

    return (
      <div className="flex justify-center items-center pt-4 pb-5 text-white">
        <List className="flex flex-col gap-1 py-0">
          <DrawerItem
            text={'Perfil'}
            onClick={handleProfile}
            className="py-1"
            icon={<PersonIcon className="text-white" />}
            isSelected={location.pathname === '/dashboard/profile'}
          />
          <DrawerItem
            text={'Cerrar sesión'}
            onClick={handleLogout}
            className="py-1"
            icon={<PowerSettingsNewIcon className="text-white" />}
          />
        </List>
      </div>
    )
  }

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: '#ffffff',
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <div className="w-full flex justify-end">
          <DropdownCustom
            open={showDropdown}
            setOpen={setShowDropdown}
            component={
              <div className="flex items-center gap-3">
                <TextCustom text={personalInfo.name} className="text-black" />
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            }
          >
            <DropdownContent open={showDropdown} setOpen={setShowDropdown} />
          </DropdownCustom>
        </div>
      </Toolbar>
    </AppBar>
  )
}
