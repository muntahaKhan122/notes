import * as React from 'react';
import Grid from '@mui/material/Grid';
import Notes from '../components/Notes';
import NewNote from '../components/NewNote';
import { connect } from 'react-redux';


function Note(props) {

  

  
  return (
   <div style={{ padding : '40px' }}>
   <Grid container spacing={3}>

  
  <Grid item  xs={12} sm={6} md={3}>
  <NewNote/>
  </Grid>

   {props.notes.length > 0 ?
   props.notes.map((note)=>{
       
    return(
    <Grid key={note.id} item xs={12} sm={6} md={3}> 
    <Notes  id={note.id} text={note.text}/>
    </Grid>
    ); 
  }): ''}


</Grid>
</div>
  );
}

function mapStateToProps(state) {
  console.log('logggin',state.notes);
  return {
    notes:state.notes.value
  }
}
export default connect(mapStateToProps)(Note)


