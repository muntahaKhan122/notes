import { useState } from 'react';
import '../Css/note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice.js';

function NewNote() {
const [note,setNote]= useState();
const dispatch = useDispatch();

const saveNote = () => {
  console.log('click');
  if(note.length>0)
  {
    var Note= {text:note, id:uuid()};
    setNote('');
  dispatch( addNote(Note));
  }
}
const setText = (e) =>{
  setNote(e.target.value);
}


  return (
    <div className="newNote">
     <textarea rows='12' cols='10' onChange={setText} placeholder={'Add new note'} value={note}></textarea>
     <div className='foot'>
     <Button variant="outlined" color="secondary" onClick={()=>saveNote()} >
        Add
      </Button>
       </div>
    </div>
  );
}


export default NewNote;
