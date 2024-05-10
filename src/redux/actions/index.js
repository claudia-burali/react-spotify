export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONGS = "GET_SONGS";

export const addToFavouriteAction = (singleSong) => ({
  type: ADD_TO_FAVOURITE,
  payload: singleSong,
});

export const removeFromFavouriteAction = (singleSong) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: singleSong,
});

export const fillMusicSection = async (artistName, dispatch) => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
    if (response.ok) {
      let { data } = await response.json();
      dispatch({
        type: GET_SONGS,
        payload: data,
      });
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
};
