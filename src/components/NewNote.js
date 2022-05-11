import { useState } from 'react';
import '../Css/note.css';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice.js';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

function NewNote({light}) {
const [note,setNote]= useState('');
const [title,setTitle]=useState('');
const dispatch = useDispatch();

const saveNote = () => {
  
  if(note.length>0)
  {

    var Note= { title:title,text:note,id:uuid() };
    setNote('');
    setTitle('');
    dispatch( addNote(Note) );
  }
}
const setText = (e) =>{
  if(e.target.type==='textarea')
  {
    setNote(e.target.value);
  }
  else
  {

    setTitle(e.target.value);
  }
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText( light==="light"?blue[500]:blue[100]),
  backgroundColor: light==="light"?blue[500]:blue[100],
  '&:hover': {
    backgroundColor: light==="light"?blue[700]:blue[200],
  },
}));


  return (
    <div className={light==="light"?"newNote":"newNote-dark"}>
      <input type="text" className={light==='light'?'title':'title dark'} placeholder='Title' onChange={setText} value={title}/>
     <textarea className={light==="light"?'':'textarea-dark'} rows='12' cols='10' onChange={setText} placeholder={'Add new note'} value={note}></textarea>
     <div className='foot'>
     <ColorButton variant="outlined" color="secondary" onClick={()=>saveNote()} >
        Add
      </ColorButton>
       </div>
    </div>
  );
}


export default NewNote;
