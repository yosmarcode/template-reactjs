import React from 'react'
import { CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { AppBarDrawer } from '../Styles/Styles'
// import LogoMutual from '../../../../assets/Imgs/interior_ext_examenes.jpg'
import LogoCliente from '../../../assets/Image/JavaScript-logo.png'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Config } from '../../constant/config/Config'
import LogoUsuario from '../../../assets/Image/user_default.jpg'
import ImageUser from '../../components/ImageUser/ImageUser'

const AppBar = (props: any) => {
  return (
    <div>
      <CssBaseline />
      <AppBarDrawer open={props.mobileOpen} sx={{ boxShadow: 0, paddingLeft: 0 }} className='nav-gradient'>
        <Toolbar variant='regular'>
          <IconButton
            color='secondary'
            aria-label='open drawer'
            onClick={props.handleDrawerToggle}
            edge='start'
            sx={{
              // marginRight: 5,
              // ...(props.mobileOpen && { display: 'none' }),
              backgroundColor: 'transparent',
              color: Config.COLOR.COLOR_TEXT_WHITE
            }}
          >
            {props.mobileOpen
              ? <AiOutlineMenuFold />
              : (
                <div>
                  <ImageUser
                    urlImg={LogoUsuario}
                    onHandleDrawerToggle={props.handleDrawerToggle}
                  />
                </div>
                )}
          </IconButton>

          <Typography variant='h6' noWrap component='div'>
            <div className='gy-2'>
              <span className='px-4 text-white'><img src={LogoCliente} alt='LogoCliente' width='45' /> </span>
            </div>
          </Typography>
        </Toolbar>
      </AppBarDrawer>
    </div>
  )
}

export default AppBar
