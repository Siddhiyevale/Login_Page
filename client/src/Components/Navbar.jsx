import React from 'react'
import { AppBar,Typography,Toolbar,Button} from '@mui/material'
import { Link } from 'react-router-dom'
import  Logout from './Logout';
function Navbar() {
  const button={margin:"20px",fontSize:'1.2rem',fontWeight:'700',padding:'0.3rem 1.4rem'}
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" sx={{flexGrow:1}}>CRM</Typography>
        <Button style={button} color="" variant="contained" to="/login" component={Link}>Login</Button>
        <Button style={button} color=""  variant="contained" to="/signup" component={Link}>Signup</Button>
        <Logout/>
      </Toolbar>
    </AppBar>
    
    
  )
}

export default Navbar
