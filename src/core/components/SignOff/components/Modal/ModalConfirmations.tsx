import { Box, Button, Dialog, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from 'notistack'
import React from 'react'

import { clearLocalStorage } from '../../../../helpers/LocalStorage/LocalStorage'
import { UserKey } from '../../../../constant/User'
import { Config } from '../../../../constant/config/Config'
const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const ModalConfirmations = (props: any) => {
  const singOff = () => {
    clearLocalStorage(UserKey)
    // return DataUser
    window.location.reload()
  }
  return (
    <div>
      <Dialog
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
    // onClose={props.handleOpenModal}
        aria-describedby='alert-dialog-slide-description'
      >

        <DialogContent>
          <Box my={3}>
            {Config.MESSAGE.MSG_CONFIRMATIONS_OFF}
            <div className='my-3 d-flex justify-content-between'>
              <Button
                variant='contained'
                onClick={() => singOff()}
                className='ButtonBorder'
              >SI
              </Button>
              <Button
                variant='contained' color='error' onClick={() => props.handleOpenModal()}
                className='ButtonBorder'
              >Cancel
              </Button>
            </div>
          </Box>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default ModalConfirmations
