import React, { ReactElement, ReactNode } from 'react'

import { Container } from '@mui/material'

import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

export default function MainLayout({children}: Props): ReactElement {
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
    </div>
  )
}
