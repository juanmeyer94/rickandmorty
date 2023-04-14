import React from "react";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect} from "react";
import styles from './Card.module.css'




function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites, isFavoriteView}) {
   const [isFav, setIsFav] = useState(false);


   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
         
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image, onClose })
      }
      
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (
      <div className={styles["card-container"]}>
  {!isFavoriteView && (
    <button className={styles.kickButton} onClick={() => onClose(id)}>X</button>
  )}
  <button className={styles.isFavButton} onClick={handleFavorite} id="heart1"> {isFav ? '❤️' : '🤍'}</button>
  <NavLink to={`/detail/${id}`}>
    <img src={image} alt='' />
    <h1>{name}</h1>
  </NavLink>
  
  <h2>Species | {species}</h2>
  <h2>Gender | {gender}</h2>
  <h2>Status | {status}</h2>
  <h2>Origin | {origin}</h2>
  
</div>
   );
}


const mapDispatchToProps =(dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))},
   };
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect( 
   mapStateToProps,
   mapDispatchToProps
   
   )(Card);