import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { ReactElement, useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import styles from '../../styles/Player.module.scss'
import TrackProgress from './TrackProgress'

let audio = null;

export default function TrackLine(): ReactElement {
  const {active, currentTime, duration, pause, volume } = useTypedSelector(state => state.player)
  const {pauseTrack, playTrack, setVolumeTrack, setCurrentTimeTrack, setDurationTrack} = useActions()

  const play = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()

    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolumeTrack(+e.target.value)
    audio.volume = +e.target.value / 100
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentTimeTrack(+e.target.value)
    audio.currentTime = +e.target.value
  }

  useEffect(() => {
    audio = new Audio()
    audio.src = 'http://localhost:5000/audio/cfa05a9b-1bc6-4c9b-8ea9-48d4876c0ae2.mp3'
    audio.volume = volume / 100

    audio.onloadedmetadata = () => setDurationTrack(audio.duration)
    audio.ontimeupdate = () => setCurrentTimeTrack(audio.currentTime)
  }, [])

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {
          pause 
            ? <PlayArrow/>
            : <Pause/>
        }
      </IconButton>
      <img
        src={''}
        width={70}
        alt="track" 
      />
      <div>
        {'vlad\'s song'}
      </div>
      <div>
        {'vl;af'}
      </div>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      <IconButton>
        <VolumeUp />
      </IconButton>
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  )
}
