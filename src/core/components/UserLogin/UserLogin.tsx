import React from 'react'
import userStore from '../../guards/UserLocalStorage'
import userDefault from '../../../assets/Imgs/user_default.jpg'

const UserLogin = (props: any) => {
  return (
    <div style={{ margin: '10px' }}>
      <div className={props.mobileOpen ? 'card-body bg-light p-2  rounded-5' : 'card-body'}>
        <div className={!props.mobileOpen ? 'text-center' : 'text-center'}>
          <img
            src={userDefault}
            className={userStore?.status ? 'rounded-circle border border-2 border-success' : 'rounded-circle border border-2 border-danger'}
            alt={userStore !== null ? userStore.name : ''}
            width='40'
            height='40'
          />
        </div>
        {props.mobileOpen
          ? (
            <div className='my-2'>
              <div className='fs-6 text-center fw-bold'>{userStore !== null && userStore.name}</div>
              <div className='text-center small'>{userStore !== null && userStore.profile}</div>
            </div>
            )
          : null}

      </div>
    </div>
  )
}

export default UserLogin
