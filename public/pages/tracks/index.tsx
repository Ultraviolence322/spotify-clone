import React, { ReactElement } from 'react'
import { Button } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import { useRouter } from 'next/dist/client/router'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { fetchTracks } from '../../store/action-creators/tracks'
import { NextThunkDispatch, wrapper } from '../../store'

export default function TracksPage({}): ReactElement {
  const router = useRouter()
  const {tracks} = useTypedSelector(state => state.tracks)

  return (
    <MainLayout>
      <h1>Tracks</h1>
      <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
      <TrackList tracks={tracks} />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchTracks())
  return null
})