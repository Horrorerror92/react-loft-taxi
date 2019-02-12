import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




class LoginLayout extends Component {
  render(){
    return(
      <>
        <Grid >
          <Grid item xs={4} >
              <Paper component='form' >
                <Grid container spacing={24} >
                  <Grid item xs={12} >
                    <Typography variant='h4'>Войти</Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      name="login"
                      label="Имя пользователя *"
                      placeholder="Имя пользователя"
                      type='text'
                      fullWidth
                      
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      name="password"
                      label="Пароль *"
                      placeholder="Пароль"
                      type='password'
                      fullWidth
                     
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <Button variant="outlined" color="primary" type='submit' component='button'>Войти</Button>
                  </Grid>
                </Grid>
              </Paper>
          </Grid>
        </Grid>
      </>
    )
  }
} 

export default LoginLayout;