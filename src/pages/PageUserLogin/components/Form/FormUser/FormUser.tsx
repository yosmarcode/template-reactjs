import { Button, Switch, TextField } from '@mui/material'
import React from 'react'
import userStore from '../../../../../core/guards/UserLocalStorage'
import { useNavigate } from 'react-router-dom'

export type UserLogin = {
    name: string
    profile: string
    status: boolean // usuario  vigente
    active: boolean // usuario conectado
}

const FormUser = () => {
  const navigate = useNavigate()
  const [valueDatos, setValueDatos] = React.useState<UserLogin>({
    name: userStore && userStore.name,
    profile: userStore && userStore.profile,
    status: userStore && userStore.status,
    active: userStore && userStore.active
  })

  React.useEffect(() => {
    setValueDatos({
      name: userStore && userStore.name,
      profile: userStore && userStore.profile,
      status: userStore && userStore.status,
      active: userStore && userStore.active
    })
  }, [])

  return (
    <div>
      <div className='row py-5 h-100'>
        <div className='col-12'>
          <TextField
            type='text'
            size='small'
            label='Nombre Usuario'
            name='name-user'
            fullWidth
            margin='normal'
            value={valueDatos.name}
            onChange={(e) => setValueDatos({ ...valueDatos, name: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <TextField
            type='text'
            size='small'
            label='Nombre Usuario'
            name='name-user'
            fullWidth
            margin='normal'
            value={valueDatos.profile}
            onChange={(e) => setValueDatos({ ...valueDatos, profile: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <div className='d-flex justify-content-between py-2'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th className='d-flex align-items-center'>Usuario Vigente</th>
                  <th>
                    <Switch
                      checked={valueDatos.status}
                      onChange={(e) => setValueDatos({ ...valueDatos, status: e.target.checked })}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </th>
                </tr>

                <tr>
                  <th className='d-flex align-items-center'>Usuario Conectado</th>
                  <th>
                    <Switch
                      checked={valueDatos.active}
                      onChange={(e) => setValueDatos({ ...valueDatos, active: e.target.checked })}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className='content-grid'>
          <Button variant='outlined' size='small' color='primary' onClick={(e) => navigate(-1)}>Volver</Button>
          <Button variant='outlined' size='small' color='primary'>Cambiar Contraseña</Button>
          <Button variant='contained' size='small' color='primary'>Actualizar información</Button>
        </div>
      </div>
    </div>
  )
}

export default FormUser
