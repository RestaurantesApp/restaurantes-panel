import { useEffect, useRef } from 'react'

// Components
import { Box } from '@mui/material'

// Assets
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'




export const DropdownCustom = ({
  component = null,
  children = null,
  isToogleIcon = false,
  open = false,
  setOpen = () => null,
}) => {
  const ref = useRef(null)


  useEffect(() => {
    const { current } = ref
    const handleClickOutside = event => {
      if (current && !current.contains(event.target) && open) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, open, setOpen])

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box className="select-none relative text-black" ref={ref}>
      <Box className="flex items-center cursor-pointer" onClick={handleToggle}>
        {component}
        {isToogleIcon && (open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
      </Box>
      {open && (
        <Box className="bg-primary shadow-lg shadow-general/60 rounded-md top-full right-0 absolute z-1000 overflow-hidden" sx={{ width: '20ch' }}>

          {children}
        </Box>
      )}
    </Box>
  )
}
