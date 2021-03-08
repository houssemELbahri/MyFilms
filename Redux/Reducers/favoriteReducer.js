import { TOGGLE_FAVORITE } from "../Actions/favoriteActions";

const initialState = {
    favoriteFilms: []
};

function toggleFavorite(state = initialState, action)  {
    switch (action.type) {
        case TOGGLE_FAVORITE :
            const existingIndex = state.favoriteFilms.findIndex(film => film.id === action.value.id);
            if(existingIndex >=0) {
                const updatedFavoriteFilms = [...state.favoriteFilms];
                updatedFavoriteFilms.splice(existingIndex,1);
                return {...state,favoriteFilms: updatedFavoriteFilms}
            } else {
                return {...state,favoriteFilms:state.favoriteFilms.concat(action.value)}
            }
        default :
            return state;
    }
    
    
}

export default toggleFavorite;

/**
const initialState = {
    favoriteFilms: []
};

function toggleFavorite(state = initialState, action)  {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoriteFilms.findIndex(item => film.id === action.value.id)
            if(favoriteFilmIndex!== -1) {
                nextState = {
                    ...state,
                    favoriteFilms: state.favoriteFilms.filter((item, index) => index !==favoriteFilmIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    favoriteFilms: [...state.favoriteFilmIndex,action.value]
                }
            }
        return nextState || state;
        default: 
            return state
    }
    
}

export default toggleFavorite; */