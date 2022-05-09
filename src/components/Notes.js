import { useState } from 'react';
import '../Css/note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../features/notes/notesSlice.js';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


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

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText( props.light==="light"?purple[500]:purple[100]),
  backgroundColor: props.light==="light"?purple[500]:purple[100],
  '&:hover': {
    backgroundColor: props.light==="light"?purple[700]:purple[200],
  },
}));


  return (
    <>
    
    <div className={props.light==='light'?"note":"note-dark"}>
     <textarea className={props.light!=='light'?'textarea-dark':''} rows='12' cols='10' onChange={setText} placeholder={'Start Typing'} spellCheck={false} value={note} id={props.id}></textarea>
     <div className='foot'>
      <ColorButton variant="outlined"  onClick={()=>saveNote()}  >
        Save
      </ColorButton>
       <Button onClick={()=>delNote(props.id)} >
         <FontAwesomeIcon className='delBtn' icon={faTrash} color={props.light==='light'?'#9c27b0':'#DFBEDE'} size={"lg"} />
       </Button>
       </div>
    </div>
    </>
  );
}


export default Notes;
