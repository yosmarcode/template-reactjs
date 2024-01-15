import React from 'react'

const SubMenu = () => {
  return (
    <div className='border border-1 '>
      <ul className='list-group list-group-numbered'>
        <li className='list-group-item'>Active item</li>
        <li className='list-group-item'>Item</li>
        <li className='list-group-item disabled'>Disabled item</li>
      </ul>
    </div>
  )
}

export default SubMenu
