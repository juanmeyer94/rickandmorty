import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';
import styles from './Favorites.module.css'

function Favorites({ myFavorites, onClose }) {
  const [aux, setAux] = useState(false);

const dispatch = useDispatch();


const handleOrder = (event) => {
  dispatch(orderCards(event.target.value));
  setAux(true);
}

const handleFilter = (event) => {
  dispatch(filterCards(event.target.value))
}

  return (
    <div>
     <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All characters</option>
      </select>
      </div>
      <div>
      {myFavorites?.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin.name}
          image={fav.image}
          isFavoriteView={true}
        />
      ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(
  mapStateToProps,
  null
  
  )(Favorites);