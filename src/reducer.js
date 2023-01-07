import { findAllByDisplayValue } from "@testing-library/react";
export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    spotify:null,
    discover_weekly:null,
    top_artists:null,
    //token:"QDf53D0dmcNiPSKuo3sirnHlojugQ8v-SzADXCDZI8AC4n-ccM5WLxplOk6QNTEuSC4AlO0pDgWKjdMEdp1wShFN8h_94IeDG-lrwqNOUpeXsQcKrZ3CaH957EW1WDhfE-kOguJ5msAvJiE0sssdDSz5Jxu9ps8dW7ompOX9iLS0bvBP-Z19TQ39z0twggtuhEJ13MpW8QMN3lM"
};

 const reducer = (state,action) =>{
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
         case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
};
export default reducer;
    
