import { useState } from "react";
import styles from '../Nav/Nav.module.css'




export default function SearchBar({onSearch}) {
   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onSearch(id);
        setId("");
      }
    };
const [id, setId] = useState('');


const handleChange = (event) => {
   setId(event.target.value)
}


   return (
      <div>
         <input id="input1" type='search' onChange={handleChange} onKeyDown={handleKeyPress} value = {id}/>
         <button className={styles.btn} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
        
         
      </div>
   );
}
