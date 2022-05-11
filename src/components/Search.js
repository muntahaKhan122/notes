import * as React from 'react';
import '../Css/search.css';
export default function Search({search}) {

  
   const setSearch = (e) =>{
     search(e.target.value);
   }
  
    return (
        <>
        <input type="search" className='search' placeholder='Type to search' onChange={setSearch}/>
        </>
    );
}