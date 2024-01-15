import React from 'react'
import BreadCrumbs from '../../core/components/BreadCrumbs/BreadCrumbs'
import FormUser from './components/Form/FormUser/FormUser'

const PageUserLogin = () => {
  return (
    <div className='container-md animate__animated animate__bounce'>
      <BreadCrumbs list={['Modificar datos usuario', 'Login']} />
      <div className='row py-5'>
        <div className='col-3' />
        <div className='col-12 col-lg-5 card border-color-card'>
          <FormUser />
        </div>

      </div>
    </div>
  )
}

export default PageUserLogin
