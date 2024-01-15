import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ModalConfirmations from './components/Modal/ModalConfirmations'
import { Config } from '../../constant/config/Config'

export const SignOff = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <ModalConfirmations openModal={openModal} handleOpenModal={handleOpenModal} />
      <List
        className='position-absolute bottom-0 start-0 w-100'
        sx={{ backgroundColor: Config.COLOR.COLOR_SECONDARY, color: Config.COLOR.COLOR_TEXT_WHITE }}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              px: 2.5,
              fontSize: '22px'
            }} onClick={() => handleOpenModal()}
          >
            <ListItemIcon sx={{ color: Config.COLOR.COLOR_TEXT_WHITE }}>
              <AiFillCloseCircle />
            </ListItemIcon>
            <ListItemText primary='Cerrar Sesión' />
          </ListItemButton>
        </ListItem>

      </List>
    </div>
  )
}
