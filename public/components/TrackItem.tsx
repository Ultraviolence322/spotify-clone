import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { Card, IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import React, { ReactElement } from 'react'
import { useActions } from '../hooks/useActions'
import { ITrack } from '../interfaces'

interface Props {
  track: ITrack
}

export default function TrackItem({track}: Props): ReactElement {
  const router = useRouter()
  const {pauseTrack, setActiveTrack} = useActions()
  
  const play = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()

    pauseTrack()
    setActiveTrack(track)
  }


  return (
    <li onClick={() => router.push('/tracks/' + track._id)}>
      <Card>
        <IconButton onClick={play}>
          <PlayArrow/>
        </IconButton>
        <img
          src={'http://localhost:5000/' + track.picture}
          width={70}
          alt="track" 
        />
        <div>
        {track.name}
        </div>
        <div>
        {track.artist}
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </Card> 
    </li>
  )
}
