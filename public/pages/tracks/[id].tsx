import { TextField } from '@mui/material'
import React, { ReactElement } from 'react'
import MainLayout from '../../components/MainLayout'

interface Props {
  
}

export default function TrackPage({}: Props): ReactElement {
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
    picture: 'http://localhost:5000/image/105ae608-109b-4a4e-85fa-69ff956cd044.jpg',
    text: 'Desc'
  }
  return (
    <MainLayout>
      <img src={track.picture} width="200" height="200" alt="picture" />
      <h1>{track.name}</h1>
      <div>listens: {track.listens}</div>
      <div>desc: {track.text}</div>

      <h2>Comments</h2>
      <TextField 
        label="Name"
      />
      <TextField 
        label="Comment"
        multiline
      />

      <ul>
        {track.comments.map((c,idx) => {
          return <li key={idx}>
            <h3>{c.username}</h3>
            <p>{c.text}</p>
          </li>
        })}
      </ul>
    </MainLayout>
  )
}
