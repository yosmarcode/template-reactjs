import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Config } from '../../constant/config/Config'
import userStore from '../../guards/UserLocalStorage'
import UserDefault from '../../../assets/Image/user_default.jpg'
import ModalConfirmations from '../../components/SignOff/components/Modal/ModalConfirmations'

const NavBarLayout = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <Navbar expand='lg' className=' mb-3 nav' fixed='top'>
      <Container fluid='md'>
        <Navbar.Brand href='#' className='fs-2 text-white fw-semibold'>{Config.TITLE_PROYECT}</Navbar.Brand>

        <Nav className='d-flex  justify-content-end'>
          <img src={UserDefault} alt={userStore ? userStore.name : ''} className='img-user active my-2 d-none d-sm-block' />
          <NavDropdown className='fs-5 px-2 fw-semibold text-white' title={userStore ? userStore.name : ''} id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Perfil Usuario</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleOpenModal}>
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>

      </Container>
      <ModalConfirmations openModal={openModal} handleOpenModal={handleOpenModal} />
    </Navbar>
  )
}

export default NavBarLayout
