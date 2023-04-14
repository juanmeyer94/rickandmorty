/* aca hay qe importar el mismo nombre de la constante pero de actions-types pa que funcione el switch*/
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER  } from "./action-types";

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order }
}