import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AppDrawerStatic from './AppDrawer/AppDrawer'

import AppBar from './AppBar/AppBar'

const LayoutPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false)

  const handleDrawerToggleOpen = () => {
    setMobileOpen(true)
  }

  const handleDrawerTaggleClose = () => {
    setMobileOpen(false)
  }

  return (
    <div>

      <AppBar
        handleDrawerToggle={handleDrawerToggleOpen}
        handleDrawerTaggleClose={handleDrawerTaggleClose}
        mobileOpen={mobileOpen}
      />
      <AppDrawerStatic
        handleDrawerToggle={handleDrawerToggleOpen}
        handleDrawerTaggleClose={handleDrawerTaggleClose}
        mobileOpen={mobileOpen}
      />
      <Box
        component='main'
        sx={{ marginLeft: 8, marginTop: 8, paddingTop: 5 }}

      >

        <Outlet />

      </Box>

    </div>
  )
}

export default LayoutPage
