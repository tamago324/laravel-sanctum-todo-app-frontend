import React from 'react';
import user from '@/Models/user';
import { Container, Grid, Typography } from '@mui/material';

function Dashboard() {
  return (
    <>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item md={12}>
            <Typography variant={'h5'}>
              Hello {user.name}, you're logged in!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
