import React, { useEffect } from 'react'
import FrmLogins from './components/FrmLogin/FrmLogin'
// import LogoMutualLogin from '../assets/Imgs/wallpper-mutual-login.png'
import LogoExpansiona from '../assets/Image/JavaScript-logo.png'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import userStore from '../core/guards/UserLocalStorage'

import { Config } from '../core/constant/config/Config'
import { typePrivateRouter } from '../router/TypeRouter'

const PagesLogin = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (userStore !== null || (userStore && userStore.id > 0)) {
      navigate(typePrivateRouter.APP)
    }
  }, [navigate])

  return (
    <div>

      <div className='container-fluid h-100 animate__animated animate__bounce'>
        <div className='row h-100'>

          <div
            className='col-12 col-xl-5 h-100 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#ffff' }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '85%',
                height: '100vh',
                flexDirection: 'column',
                // maxWidth: '320px',
                margin: '0 auto'
              }}
            >
              <div className='mt-4 h2 text-dark text-center mt-xl-5'>
                <div className='text-center d-sm-none'>
                  <img
                    src={LogoExpansiona}
                    alt='Logo Mutual de seguro'
                    width='300px'
                    height='90px'
                  />
                </div>
                <div className='fs-2 text-dark my-4'> LOGIN ACCESSO</div>
                <div className='fs-4 text-center text-dark'><b>{Config.TITLE_PROYECT}</b></div>
              </div>
              <div>

                <FrmLogins />
              </div>

            </Box>
          </div>
          <div className='col-12 col-xl-7 bg-light  d-none d-lg-flex justify-content-center align-items-center'>
            <img
              src={LogoExpansiona}
              alt='Logo Mutual de seguro'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PagesLogin
