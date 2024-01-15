import React from 'react'
import LogoUserDefault from '../../../assets/Image/user_default.jpg'

const ImageUser = ({ urlImg, onHandleDrawerToggle, nameClient: string } : {
    urlImg: string,
    onHandleDrawerToggle: any
    nameClient?: string
    }) => {
  return (
    <div className=''>
      <img
        src={urlImg ?? LogoUserDefault}
        alt='Usuario'
        title='Logo Expansiona'
        className='animate__animated animate__pulse img-user'
        onClick={onHandleDrawerToggle}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default ImageUser
