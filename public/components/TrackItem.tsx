import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { Card, IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import React, { ReactElement } from 'react'
import { ITrack } from '../interfaces'

interface Props {
  track: ITrack,
  isActive?: boolean
}

export default function TrackItem({track, isActive = false}: Props): ReactElement {
  const router = useRouter()
  
  return (
    <li onClick={() => router.push('/tracks/' + track._id)}>
      <Card>
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
        {isActive && <div>0:42 / 4:21</div>}
        <IconButton>
          <Delete />
        </IconButton>
      </Card> 
    </li>
  )
}
