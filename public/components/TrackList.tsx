import { Card } from '@mui/material'
import React, { ReactElement } from 'react'
import { ITrack } from '../interfaces'
import TrackItem from './TrackItem'

interface Props {
  tracks: Array<ITrack> 
}

export default function TrackList({tracks}: Props): ReactElement {
  return (
    <ul>
      <Card>
        {tracks.map(track => {
          return <TrackItem 
            key={track._id} 
            track={track} 
          />
        })}
      </Card>
    </ul>
  )
}
