import React from 'react'

const SpinnerBs = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-grow text-dark' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>

  )
}

export default SpinnerBs
