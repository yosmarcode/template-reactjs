import { useMediaQuery, useTheme } from '@mui/material'

const UseMediaQuery = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return matches
}

export default UseMediaQuery
