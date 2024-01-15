import React from 'react'
import { useSnackbar } from 'notistack'
// import { privateRouter } from '../../../core/constants/TypeRouters/TypeRouters'
import { DataUser, IDataUser } from '../../../core/helpers/Dummy/DataUser'
import { Config } from '../../../core/constant/config/Config'
import { UserKey } from '../../../core/constant/User'
import { persistLocalStorage } from '../../../core/helpers/LocalStorage/LocalStorage'
import { validateEmail } from '../../../core/helpers/ValidateEmail/ValidateEmail'
import { Button, TextField } from '@mui/material'
import { typePrivateRouter } from '../../../router/TypeRouter'
import Loader from '../../../core/components/Loaders/Loader'

export interface IparameterLogin {
  userLogin: string
  userPassword: string
}

export interface IDataLogin {
    loading: boolean
    dataResult:[]
    email: string
    password: string
    isError: boolean
}

const FrmLogins = () => {
  // const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [data, setData] = React.useState<IDataLogin>({
    loading: false,
    dataResult: [],
    email: 'admin@admin.com',
    password: 'admin',
    isError: false
  })

  const loadLogin = (email: string, password: string) => {
    setData({ ...data, loading: true, isError: false })

    if (email === '' || password === '') {
      enqueueSnackbar('indique parametros para iniciar sesión', { variant: 'info' })
      setData({ ...data, loading: false })
    } else if (email === 'admin@admin.com' && password === 'admin') {
      // tomo los datos y los guardado en LocalStore
      loginUserStore({ ...DataUser, active: true })
      setTimeout(() => {
        setData({ ...data, loading: false })
      }, 2000)

      window.location.href = typePrivateRouter.APP // URL_API.BASE_NAME
    } else {
      enqueueSnackbar('Credeciales no validas', { variant: 'error' })
      setData({ ...data, loading: false, isError: true })
    }
  }

  const loginUserStore = (action: IDataUser) => {
    persistLocalStorage<object>(UserKey, action)
  }

  return (
    <div className='row my-4 h-100'>
      {data.loading && (<Loader />)}
      <>
        <div className='col-12 my-4'>
          <TextField
            label='Email'
            id='outlined-start-adornment'
            fullWidth
            placeholder='example@example.com'
            className='TextField'
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
            onBlur={e => {
              validateEmail(data.email)
            }}
            error={data.email !== '' && !validateEmail(data.email)}
            helperText={
            data.email !== '' && !validateEmail(data.email)
              ? Config.MESSAGE.MSG_INVALIDATE_EMAIL
              : ''
}
          />
        </div>
        <div className='col-12 my-4'>
          <TextField
            type='password'
            id='outlined-multiline-flexible'
            label='Password'
            fullWidth
            className='TextField'
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className='col-12 my-4 d-grid gap-4 d-lg-flex justify-content-around justify-content-lg-between'>
          <Button
            variant='contained'
            color='primary'
            disabled={data.email.length > 0 && !validateEmail(data.email)}
            onClick={() => loadLogin(data.email, data.password)}
            className='ButtonBorder'
          >
            {data.loading ? 'Loading...' : 'INGRESAR'}
          </Button>
          <Button
            variant='outlined'
            color='info'
            className='ButtonBorder'
          >
            ¿Olvidaste tu credenciales?
          </Button>
        </div>
      </>

      <div className='col-12 my-4' />

    </div>
  )
}

export default FrmLogins
