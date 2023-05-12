const initialState = {
    myFavorites: [],
    allCharacters: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload]
        };
      case "REMOVE_FAV":
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            (pepito) => pepito.id !== Number(action.payload)
          ),
        };
        case 'FILTER': const allCharactersFilter = state.allCharacters.filter(
          (element)=> element.gender === action.payload)
        return{
          ...state,
          myFavorites: allCharactersFilter

        }
        case 'ORDER' :  
        const allCharactersCopy = [...state.allCharacters]
        return{
          ...state,
          myFavorites:
          action.payload === 'A'? allCharactersCopy.sort((a, b) => a.id - b.id)
          : allCharactersCopy.sort((a, b)=> b.id - a.id) 
        }
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;