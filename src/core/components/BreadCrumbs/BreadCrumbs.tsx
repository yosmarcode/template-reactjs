import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'
type Props = {
  list: string[]
}

const BreadCrumbs = ({ list }: Props) => {
  return (

    <div role='presentation'>
      <Breadcrumbs aria-label='breadcrumb'>
        {list.map((row: any, index: number) => (
          <Link underline='hover' color='inherit' key={index + 1}>
            {row}
          </Link>
        ))}

      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs
