import { Button, Grid, TextField } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import FileUpload from '../../components/FileUpload'
import MainLayout from '../../components/MainLayout'
import StepWrapper from '../../components/StepWrapper'
import { useInput } from '../../hooks/useInput'

interface Props {
  
}

export default function CreateTrackPage({}: Props): ReactElement {
  const [step, setStep] = useState(0)
  const [image, setImage] = useState(null)
  const [audio, setAudio] = useState(null)
  const name = useInput('')
  const author = useInput('')
  const desc = useInput('')

  const next = async () => {
    if (step != 2) {
      setStep(stepCurrenct => stepCurrenct + 1)
    } else {
      const formData = new FormData()
      formData.append('picture', image)
      formData.append('audio', audio)
      formData.append('name', name.value)
      formData.append('artist', author.value)
      formData.append('text', desc.value)

      try {
        const response = await fetch('http://localhost:5000/tracks', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          body: formData // body data type must match "Content-Type" header
        })
        const data = await response.json()
      } catch (error) {
        console.log('erroe', error);
      }
    }
  }

  const back = () => {
    setStep(stepCurrenct => stepCurrenct - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={step}>
        {
          step === 0 && <Grid>
            <TextField {...name} label="name" />
            <TextField {...author} label="author" />
            <TextField {...desc} label="desc" />
          </Grid>
        }
        {
          step === 1 && <FileUpload
            accept='image/*'
            setFile={setImage}
          >
            <Button>load the image</Button>
          </FileUpload>
        }
        {
          step === 2 && <FileUpload
            accept='audio/*'
            setFile={setAudio}
          >
          <Button>load the audio</Button>
        </FileUpload>
        }
      </StepWrapper>
      <Button disabled={step === 0} onClick={() => back()}>back</Button>
      <Button disabled={step === 3}  onClick={() => next()}>next</Button>
    </MainLayout>
  )
}
