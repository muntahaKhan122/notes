import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Notes from '../components/Notes';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Note() {
  return (
   <div style={{ padding : '40px' }}>
   <Grid container spacing={3}>
  <Grid item xs={3}>
<Notes/>
  </Grid>
  <Grid item xs={3}>
  <Notes/>
  </Grid>
  <Grid item xs={3}>
  <Notes/>
  </Grid>
  <Grid item xs={3}>
  <Notes/>
  </Grid>
</Grid>
</div>
  );
}

export default Note;
