import { Button, Grid2, Paper, TextField, Typography} from '@mui/material'
import { blue} from '@mui/material/colors';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() { 
  const heading={fontSize:"2.5rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"100px auto",borderRadius:"1rem",boxShadow:"10px 10px 10px"}
  const row={display:"flex",marginTop:"2rem"}
  const btnStyle={marginTop:"2rem",fontSize:"1.2rem",fontWeightl:"700", backgroundColor:"#3f3fce",borderRadius:"0.5rem"}

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();

  const handleSignup=(e)=>{
   e.preventDefault();
   axios.post("http://localhost:3001/signup" ,{name, email, password})
   .then(result=>{
         if(result.status==201){
             console.log("User Created Successfully!");
             navigate("/login");
         }
   })
   .catch(err=>{
       if(err.response && err.response.status===400){
        window.alert("Email already exists. Please use a different email");
       }else {
        console.log("error");
       }
   })



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
          height:'60vh'}}>
            <Typography style={heading}>Signup</Typography>
            <form onSubmit={handleSignup}>
  <TextField onChange={(e)=>setName(e.target.value)} name="name" required sx={{label: { fontWeight:'700',fontSize:"1rem"}}} style={row} label="Enter Name" type="text"></TextField>

  <TextField onChange={(e)=>setEmail(e.target.value)} name="email" required sx={{label: { fontWeight:'700',fontSize:"1rem"}}} style={row} label="Enter Email" type="email"></TextField>

 <TextField onChange={(e)=>setPassword(e.target.value)} name="password" required sx={{label: { fontWeight:'700',fontSize:"1rem"}}} style={row} label="Enter Password" type="password"></TextField>

  <Button type="submit" variant="contained" style={btnStyle}>Signup</Button>
            </form>

        </Paper>
    </Grid2>
    </>
  )
}

export default Signup
