import { TextField } from '@mui/material'
import { GetServerSideProps } from 'next'
import React, { ReactElement, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import { ITrack } from '../../interfaces'

interface Props {
  serverTrack: ITrack
}

export default function TrackPage({serverTrack}: Props): ReactElement {
  const [track, setTrack] = useState(serverTrack)

  return (
    <MainLayout>
      <img src={'http://localhost:5000/' + track.picture} width="200" height="200" alt="picture" />
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  let data = null

  try {
    const response = await fetch('http://localhost:5000/tracks/' + params.id)
    data = await response.json()
  } catch (error) {
    console.log('error', error);
  }

  console.log('data', data);
  

  return {
    props: {
      serverTrack: data
    }
  }
} 
