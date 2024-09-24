import React from 'react'
import { Button, Grid2, Paper, TextField, Typography} from '@mui/material'
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const heading={fontSize:"2.5rem",fontWeight:"600"};

  const paperStyle={padding:"2rem",margin:"100px auto",borderRadius:"1rem",boxShadow:"10px 10px 10px"}

  const row={display:"flex", marginTop:"2rem"}

  const btnStyle={marginTop:"2rem",fontSize:"1.2rem",fontWeight:"700", backgroundColor:"blue",borderRadius:"0.5rem"}

  const [email, setEmail]= useState();

  const [password, setPassword] =useState();

  const Navigate=useNavigate()


  const handleLogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login" ,{ email, password})
    .then(result=>{
      if(result.data==="Success"){
        Navigate("/Home");
      }
      else{
        alert("login failed: User Does Not Exists");
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <>
    <Grid2 align="center">
        <Paper sx={{ width:{
          xs:"80vw",
          sm:"50vw",
          md:"40vw",
          lg:"30vw",
          xl:"20vw"
        }, 
          height:'50vh'}}>
            <Typography style={heading}>Login</Typography>


            <form onSubmit={handleLogin}>
  
  <TextField onChange={(e)=>setEmail(e.target.value)} name="email" sx={{label: { fontWeight:'700',fontSize:"1rem"}}} style={row} label="Enter Email" type="email"></TextField>
 <TextField onChange={(e)=>setPassword(e.target.value)} name='password' sx={{label: { fontWeight:'700',fontSize:"1rem"}}} style={row} label="Enter Password" type="password"></TextField>
  <Button type="submit" variant="contained" style={btnStyle}>Login</Button>
            </form>


        </Paper>
    </Grid2>
    </>
      )
    }
    
  


export default Login

