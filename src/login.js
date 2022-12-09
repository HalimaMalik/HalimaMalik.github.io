import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import {auth} from './firebase'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const theme = createTheme();

export default function LogIn() {
  const email = useRef()
  const password = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    // e.preventDefault()
    // try {
    //   setError("")
    //   setLoading(true)
    //   console.log(email.current.value, password.current.value)
    //   await signInWithEmailAndPassword(auth, email.current.value, password.current.value)     
    //   navigate("/user")
    // }catch{
    //   console.log("unable")
    //   setError("Unable to Sign in, Kindly try again.")
    // }

    // setLoading(false)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#003DA5' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef ={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef ={password}
            />
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#003DA5'}}
              
            >
             Login
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>       
      </Container>
    </ThemeProvider>
  );
}