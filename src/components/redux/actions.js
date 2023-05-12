const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV =  "REMOVE_FAV";


export const addFav = (character)=>{
    return {type:ADD_FAV, payload:character}
};

export const removeFav = (id)=>{
    return{type:REMOVE_FAV, payload:id}
}

export const filterCards = (gender)=>{
    return{type:'FILTER', payload:gender }
}
export const orderCards = (orden)=>{
    return{type:'ORDER', payload:orden}
}