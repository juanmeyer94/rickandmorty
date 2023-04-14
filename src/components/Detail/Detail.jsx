import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css";


const Detail = () => {
    const {id} = useParams();
    const [character, setCharacters] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacters(data);
            
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({});
     }, [id]);
     const handleMouseOver = () => {
        const detailContainer = document.querySelector(`.${styles["detail-container"]}`);
        detailContainer.classList.add(styles.showH2);
      };
    
      const handleMouseLeave = () => {
        const detailContainer = document.querySelector(`.${styles["detail-container"]}`);
        detailContainer.classList.remove(styles.showH2);
      };
    
      return (
        <div className={styles["detail-container"]} onMouseLeave={handleMouseLeave}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} onMouseOver={handleMouseOver} />
          <h2>Species | {character.species}</h2>
          <h2>Gender | {character.gender}</h2>
          <h2>Status |{character.status}</h2>
          <h2>Origin | {character.origin && character.origin.name}</h2>
        </div>
      );
    };
    
    export default Detail;