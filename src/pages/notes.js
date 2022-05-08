import {useState, React} from 'react';
import Grid from '@mui/material/Grid';
import Notes from '../components/Notes';
import NewNote from '../components/NewNote';
import { connect } from 'react-redux';
import Toast from '../components/Toast';

function Note(props) {

  const [toast,setToast]=useState(false);
  const [toastText,setToastText]=useState();
  const [toastType,setToastType]=useState();
  
  
  return (
   <div style={{ padding : '40px' }}>
    <Toast active={toast} setToast={setToast} type={toastType} text={toastText}/>
    <Grid container spacing={3}>

  
    <Grid item  xs={12} sm={6} md={3}>
     <NewNote/>
    </Grid>

   {props.notes.length > 0 ?
   props.notes.map((note)=>{
       
    return(
    <Grid key={note.id} item xs={12} sm={6} md={3}> 
    <Notes  id={note.id} text={note.text} setToastText={setToastText} setToastType={setToastType} setToast={setToast}/>
    </Grid>
    ); 
  }): ''}


</Grid>
</div>
  );
}

function mapStateToProps(state) {
  return {
    notes:state.notes.value
  }
}
export default connect(mapStateToProps)(Note)


