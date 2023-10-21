import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import "./NavBar.css"
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import {useNavigate} from 'react-router-dom'

export default function ButtonAppBar(props) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/login')
    props.setLoginButton(false)
  }
  const handleClickHom = ()=>{
    navigate('/')
    // props.setLoginButton(true)
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor:"purple"}} >
        <Toolbar sx={{ justifyContent:"space-between",display:"flex"}}>
        <IconButton
        onClick={handleClickHom}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <h3 >Dutify<span className="LOGO">AI</span></h3>
          </IconButton>
          {props.loginButton ? 
          <Button onClick={handleClick} color="inherit" sx={{border:"1px solid white"}}>Login</Button>
           : <Button color="inherit" sx={{border:"1px solid white"}}>SignUp</Button>
           }
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}