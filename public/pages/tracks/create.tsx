import { Button, Grid, TextField } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import StepWrapper from '../../components/StepWrapper'

interface Props {
  
}

export default function CreateTrackPage({}: Props): ReactElement {
  const [step, setStep] = useState(0)

  const next = () => {
    setStep(stepCurrenct => stepCurrenct + 1)
  }

  const back = () => {
    setStep(stepCurrenct => stepCurrenct - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={step}>
        {
          step === 0 && <Grid>
            <TextField label="name" />
            <TextField label="author" />
            <TextField label="desc" />
          </Grid>
        }
        {
          step === 1 && <h1>Step 2</h1>
        }
        {
          step === 2 && <h1>Step 3</h1>
        }
      </StepWrapper>
      <Button disabled={step === 0} onClick={() => back()}>back</Button>
      <Button disabled={step === 3}  onClick={() => next()}>next</Button>
    </MainLayout>
  )
}
