import { useState } from 'react';
import '../Css/note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Notes() {
const [note,setNote]= useState();

  return (
    <div className="note">
     <textarea rows='12' cols='10'>this is a new note</textarea>
     <div className='foot'><FontAwesomeIcon icon={faTrash} color={'brown'} size={"lg"}/></div>
    </div>
  );
}

export default Notes;
