import {useState, React, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Notes from '../components/Notes';
import NewNote from '../components/NewNote';
import { connect } from 'react-redux';
import Toast from '../components/Toast';
import Theme from '../components/Theme';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import searchFunc from '../utils/search';
import '../Css/main.css';

function Note(props) {

  const [toast,setToast]=useState(false);
  const [toastText,setToastText]=useState();
  const [toastType,setToastType]=useState();
  const [search,setSearch]=useState('');
  const [notes,setNotes]=useState(props.notes);
  const theme = useSelector((state) => state.theme.color)
 
  
  useEffect(()=>{
  if(search.length>0 && search!==''){
  setNotes(searchFunc(search,props.notes));
  }
  else{
    setNotes(props.notes);

  }
  },[search,props.notes])


  if(theme==="dark")
  {
    document.body.style='background-color:#714D73C7';
  }
  else
  {
    document.body.style='background-color:#F4D9F1';
  }

  return (
   <div className={theme==="light"?'':'body-dark'} style={{ padding : '40px' }}>
    <Toast active={toast} setToast={setToast} type={toastType} text={toastText}/>

     <h1 style={{color:theme==="light"?'#5F355D':'#EED1ED'}}>Your Notes</h1>
     <div className="searchDiv">
         <Search search={setSearch}/>
     </div>
    <Grid container spacing={3} style={{marginTop:'20px'}}>

  
    <Grid item  xs={12} sm={6} md={3}>
     <NewNote light={theme}/>
    </Grid>

   {notes.length > 0 ?
   notes.map((note)=>{
       
    return(
    <Grid key={note.id} item xs={12} sm={6} md={3}> 
    <Notes  id={note.id} title={note.title} text={note.text} setToastText={setToastText} setToastType={setToastType}
    light={theme} setToast={setToast}/>
    </Grid>
    ); 
  }): ''}


</Grid>

 <div className='themeBtn' style={{bottom:20,right:20,position:'fixed'}}>
 <Theme/>
 </div>
</div>
  );
}

function mapStateToProps(state) {
 
  return {
    notes:state.notes.value
  }
}
export default connect(mapStateToProps)(Note)


