import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import { ITrack } from '../../interfaces'
import styles from '../../styles/Player.module.scss'
import TrackProgress from './TrackProgress'

interface Props {
  isActive: boolean,
  track: ITrack
}

export default function TrackLine({isActive, track}: Props): ReactElement {
  const [volume, setVolume] = useState(50)
  const [trackTime, setTrackTime] = useState(0)

  return (
    <div className={styles.player}>
      <IconButton>
        {
          isActive 
            ? <Pause/>
            : <PlayArrow/>
        }
      </IconButton>
      <img
        src={track.picture}
        width={70}
        alt="track" 
      />
      <div>
        {track.name}
      </div>
      <div>
        {track.artist}
      </div>
      <TrackProgress left={volume} right={100} onChange={() => ({})} />
      <IconButton>
        <VolumeUp />
      </IconButton>
      <TrackProgress left={trackTime} right={100} onChange={() => ({})} />
    </div>
  )
}
