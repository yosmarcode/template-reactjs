import React from 'react'

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, createTheme } from '@mui/material'

import { Link, useNavigate } from 'react-router-dom'

import LogoUser from '../../../assets/Image/user_default.jpg'
import { DrawerApp, DrawerHeader } from '../Styles/Styles'
import { Config } from '../../constant/config/Config'
import { IMenu, MENU } from '../../helpers/Dummy/Menu'
import { searchIconMenu } from '../../helpers/SearchIcons/searchIcon'
import { SignOff } from '../../components/SignOff/SignOff'
import { ThemeProvider } from '@emotion/react'
import { BsCircleFill } from 'react-icons/bs'
import { NavDropdown } from 'react-bootstrap'
import userStore from '../../guards/UserLocalStorage'
import ModalConfirmations from '../../components/SignOff/components/Modal/ModalConfirmations'
import ImageUser from '../../components/ImageUser/ImageUser'
import { typePrivateRouter } from '../../../router/TypeRouter'
interface Props {

  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: any
  handleDrawerTaggleClose: any

}

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Config.COLOR.COLOR_PRIMARY,
          background: 'linear-gradient(140deg, rgba(0,65,115,1) 10%, rgba(0,65,115,1) 60%, rgba(2,0,36,1) 94%, rgba(0,65,115,1) 90%)',
          color: Config.COLOR.COLOR_TEXT_WHITE,
          boxSizing: 'border-box'

        }
      }
    }
  }
})

const AppDrawer = (props: Props) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  // const params = useLocation()

  /// const { selectedMenuItem } = useAppSelector((state) => state.menuItem)
  // const dispatch = useAppDispatch()
  const [selectedIndex, setSelectedIndex] = React.useState < number | null | string >(1)

  const handleListItemClick = (
    event: any,
    index: number | string
  ) => {
    setSelectedIndex(index)
    // dispatch(setSelectedMenuItem(index))
  }

  // SETEO EL VALOR URL DESDE PARAMS.PATHNAME
  // React.useEffect(() => {
  //  dispatch(setSelectedMenuItem(params.pathname))
  // }, [])

  const listMenu = (
    <div>
      <ModalConfirmations openModal={openModal} handleOpenModal={handleOpenModal} />
      <DrawerHeader sx={{ backgroundColor: Config.COLOR.COLOR_PRIMARY, justifyContent: 'space-around' }}>
        {props.mobileOpen && (
          <ImageUser
            urlImg={LogoUser}
            onHandleDrawerToggle={props.handleDrawerToggle}
          />)}
        <NavDropdown className='fs-5 px-2 fw-semibold text-white' title={userStore ? userStore.name : ''} id='basic-nav-dropdown'>
          <NavDropdown.Item onClick={(e) => navigate(typePrivateRouter.USER_LOGIN)}>Perfil Usuario</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={(e) => handleOpenModal()}>
            Cerrar Sesión
          </NavDropdown.Item>
        </NavDropdown>
      </DrawerHeader>
      <Divider />
      <List
        className='my-4'
      >
        {MENU && MENU.map((item: IMenu, index: number) => (
          <Link
            key={index + 1}
            to={item.url}
            style={{
              textDecoration: 'none',
              color: selectedIndex === (index + 1) ? Config.COLOR.COLOR_SECONDARY : Config.COLOR.COLOR_TEXT_WHITE
            }}
            hidden={item.active === false}
          >
            <ListItem
              disablePadding
              className='animate-toolbar'
              sx={{
                display: 'flex',
                color: Config.COLOR.COLOR_SECONDARY,
                backgroundColor: selectedIndex === (index + 1) ? Config.COLOR.COLOR_SECONDARY : '',
                borderRadius: selectedIndex === (index + 1) ? '0 25px 25px 0' : ''
              }}
            >
              <ListItemButton
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleListItemClick(event, item.id)}
                sx={{
                  minHeight: 50,
                  justifyContent: props.mobileOpen ? 'initial' : 'center',
                  px: 3.5
                }}
                component='a'
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.mobileOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    fontWeight: selectedIndex === (index + 1) ? 800 : 500,
                    color: selectedIndex === (index + 1) ? Config.COLOR.COLOR_TEXT_WHITE : Config.COLOR.COLOR_TEXT_WHITE
                  }}
                >
                  {searchIconMenu(item.icon)}
                </ListItemIcon>

                <ListItemText
                  sx={{
                    opacity: props.mobileOpen ? item.url : 0,
                    fontWeight: selectedIndex === (index + 1) ? 800 : 500,
                    color: selectedIndex === (index + 1) ? Config.COLOR.COLOR_TEXT_WHITE : Config.COLOR.COLOR_TEXT_WHITE
                  }}
                >
                  <div className='d-flex justify-content-between'>{item.name} {selectedIndex === (index + 1) && (<BsCircleFill style={{ fontSize: '8px', margin: '6px' }} />)}  </div>
                </ListItemText>

              </ListItemButton>
            </ListItem>

          </Link>
        ))}

      </List>

      <SignOff />

    </div>
  )

  return (
    <div>
      <ThemeProvider theme={theme}>

        <DrawerApp
          variant='permanent'
          open={props.mobileOpen}
          onClose={props.handleDrawerTaggleClose}
          onMouseLeave={props.handleDrawerTaggleClose}
          onMouseOver={props.handleDrawerToggle}
        >
          {listMenu}
          <Divider />
        </DrawerApp>

      </ThemeProvider>

    </div>

  )
}

export default AppDrawer
