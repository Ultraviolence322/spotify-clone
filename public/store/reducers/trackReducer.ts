import { ITrackState, TrackAction, TrackActionTypes } from "../../interfaces";

const initialState: ITrackState = {
  tracks: [],
  error: ''
}

export const trackReducer = (state = initialState, action: TrackAction): ITrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return {tracks: action.payload, error: ''};
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return {...state, error: action.payload};
    default:
      return state
  }
}