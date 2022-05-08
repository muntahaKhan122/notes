import { useEffect, useState } from 'react';
import '../Css/note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../features/notes/notesSlice.js';


function Notes(props) {
const [note,setNote]= useState(props.text);
const dispatch = useDispatch();


const setText = (e) =>{
  
  setNote(e.target.value);
}
const delNote = (id) =>{
  props.setToastText('Deleted!');
  props.setToastType("del");
  dispatch(deleteNote(id));
  props.setToast(true);
}
const saveNote = () =>{
  props.setToastText('Saved successfully');
  props.setToastType("success");
  dispatch(editNote({id:props.id,text:note}));
  props.setToast(true);
}

  return (
    <>
    
    <div className="note">
     <textarea rows='12' cols='10' onChange={setText} placeholder={'Start Typing'} spellCheck={false} value={note} id={props.id}></textarea>
     <div className='foot'>
      <Button variant="outlined" color="secondary" onClick={()=>saveNote()}  >
        Save
      </Button>
       <Button onClick={()=>delNote(props.id)} >
         <FontAwesomeIcon className='delBtn' icon={faTrash} color={'#9c27b0'} size={"lg"} />
       </Button>
       </div>
    </div>
    </>
  );
}


export default Notes;
