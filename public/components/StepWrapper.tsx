import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React, { ReactElement, ReactNode } from 'react'

interface Props {
  activeStep: number;
  children: ReactNode
}

export default function StepWrapper({activeStep, children}: Props): ReactElement {

  const steps = ['info about track', 'load the picture', 'load the track']

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) =>
          <Step
            key={index}
            completed={activeStep > index}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        )}
      </Stepper>
      <Grid container justifyContent="center" style={{margin: '70px 0 ', height: 270}}>
        <Card style={{width: 600}}>
            {children}
        </Card>
    </Grid>
    </Container>
  )
}
