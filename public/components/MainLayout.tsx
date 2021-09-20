import React, { ReactElement, ReactNode } from 'react'

import { Container } from '@mui/material'

import Navbar from './Navbar'
import TrackLine from './Player'

interface Props {
  children: ReactNode
}

export default function MainLayout({children}: Props): ReactElement {
  const track = {
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
  }

  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
      <TrackLine isActive={false} track={track} />
    </div>
  )
}
