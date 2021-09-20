import React, { ReactElement } from 'react'
import { Button } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import { useRouter } from 'next/dist/client/router'
import { ITrack } from '../../interfaces'
import TrackList from '../../components/TrackList'

interface Props {
  
}

export default function TracksPage({}: Props): ReactElement {
  const router = useRouter()

  const tracks: Array<ITrack> = [
    {
      _id: '1',
      artist: 'Artist 1',
      audio: '',
      comments: [
        {
          _id: '1',
          username: 'Vlad',
          text: 'nice song'
        },
      ],
      listens: 0,
      name: 'Track 1',
      picture: 'http://localhost:5000/image/1.jpg',
      text: 'Desc'
    },
    {
      _id: '2',
      artist: 'Artist 2',
      audio: '',
      comments: [
        {
          _id: '1',
          username: 'Vlad 2',
          text: 'nice song 2'
        },
      ],
      listens: 0,
      name: 'Track 2',
      picture: 'http://localhost:5000/image/unnamed.jpg',
      text: 'Desc 2'
    }
  ]

  return (
    <MainLayout>
      <h1>Tracks</h1>
      <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
      <TrackList tracks={tracks} />
    </MainLayout>
  )
}
