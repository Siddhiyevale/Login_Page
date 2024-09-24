import React from 'react'
import { AppBar,Typography,Toolbar,Button} from '@mui/material'
import { Link } from 'react-router-dom'
import  Logout from './Logout';
function Navbar() {
  const button={margin:"20px",fontSize:'1.2rem',fontWeight:'700',padding:'0.3rem 1.4rem',  backgroundColor:"#3f3fce"}
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" sx={{flexGrow:1}}>CRM</Typography>
        <Button style={button} variant="contained" to="/login" component={Link}>Login</Button>
        <Button style={button} variant="contained" to="/signup" component={Link}>Signup</Button>
        <Logout/>
      </Toolbar>
    </AppBar>
    
    
  )
}

export default Navbar
