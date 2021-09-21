import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../interfaces"

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await fetch('http://localhost:5000/tracks')
      const data = await response.json()

      console.log('data', data);
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS,
        payload: data
      })
      
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Error on load tracks'
      })
    }
  }
} 