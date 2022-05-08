import { useEffect, useState } from 'react';
import '../Css/note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../features/notes/notesSlice.js';
import Toast from './Toast';


function Notes({id,text}) {
const [note,setNote]= useState(text);
const dispatch = useDispatch();
const [toast,setToast]=useState(false);
const [toastText,setToastText]=useState();
const [toastType,setToastType]=useState();


const setText = (e) =>{
  
  setNote(e.target.value);
}
const delNote = (id) =>{
  setToastText('Deleted!');
  setToastType("del");
  dispatch(deleteNote(id));
  setToast(true);
}
const saveNote = () =>{
  setToastText('Saved successfully');
  setToastType("success");
  dispatch(editNote({id:id,text:note}));
  setToast(true);
}

  return (
    <>
    <Toast active={toast} setToast={setToast} type={toastType} text={toastText}/>
    <div className="note">
     <textarea rows='12' cols='10' onChange={setText} placeholder={'Start Typing'} spellCheck={false} value={note} id={id}></textarea>
     <div className='foot'>
      <Button variant="outlined" color="secondary" onClick={saveNote}  >
        Save
      </Button>
       <Button onClick={()=>delNote(id)} >
         <FontAwesomeIcon className='delBtn' icon={faTrash} color={'#9c27b0'} size={"lg"} />
       </Button>
       </div>
    </div>
    </>
  );
}


export default Notes;
