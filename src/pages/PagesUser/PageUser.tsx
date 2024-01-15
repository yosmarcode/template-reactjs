import { TabContext } from '@mui/lab'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { Box } from '@mui/material'
import React from 'react'
import BreadCrumbs from '../../core/components/BreadCrumbs/BreadCrumbs'

const PageUser = () => {
  const [value, setValue] = React.useState<string>('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (

    <div className='container-md py-4 animate__animated animate__bounce '>
      <BreadCrumbs list={['Mantenedor', 'Usuario']} />
      <Box sx={{ width: '100%', typography: 'body1', paddingTop: '50px' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Usuarios' value='1' />
              <Tab label='Roles' value='2' />
              <Tab label='Flujos' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>Usuario</TabPanel>
          <TabPanel value='2'>Roles</TabPanel>
          <TabPanel value='3'>Flujos</TabPanel>
        </TabContext>
      </Box>
    </div>

  )
}

export default PageUser
