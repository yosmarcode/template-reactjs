import React from 'react'

import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Config } from '../../constant/config/Config'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='central-div'>
        <h1 className='text-center display-1'>Oops </h1>
        <span className='text-center w-100 fw-light '>
          <b>{Config.MESSAGE.MSG_PAGE_NOT_FOUND}</b>
        </span>

        <Button
          className='my-4'
          variant='contained' color='info'
          onClick={() => navigate(-1)}
        >
          VOLVER
        </Button>

      </div>

    </>
  )
}

export default NotFound
