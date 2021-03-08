export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (value) => {
    return {type: TOGGLE_FAVORITE, value: value};
};