import { ITrack } from "../../interfaces"
import { IPlayerAction, PlayerActionTypes } from "../../interfaces/player"

export const playTrack = (): IPlayerAction => {
  return {type: PlayerActionTypes.PLAY}
}

export const pauseTrack = (): IPlayerAction => {
  return {type: PlayerActionTypes.PAUSE}
}

export const setActiveTrack = (payload: ITrack): IPlayerAction => {
  return {type: PlayerActionTypes.SET_ACTIVE, payload}
}

export const setCurrentTimeTrack = (payload: number): IPlayerAction => {
  return {type: PlayerActionTypes.SET_CURRENT_TIME, payload}
}

export const setDurationTrack = (payload: number): IPlayerAction => {
  return {type: PlayerActionTypes.SET_DURATION, payload}
}

export const setVolumeTrack = (payload: number): IPlayerAction => {
  return {type: PlayerActionTypes.SET_VOLUME, payload}
}