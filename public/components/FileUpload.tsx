import React, { ChangeEvent, ReactElement, ReactNode, useRef } from 'react'

interface Props {
  children: ReactNode,
  accept: string,
  setFile: Function
}

export default function FileUpload({children, accept, setFile}: Props): ReactElement {
  const fileRef = useRef<HTMLInputElement>() 

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }

  return (
    <div onClick={() => fileRef.current.click()}>
      <input 
        type="file" 
        ref={fileRef}
        style={{display: 'none'}}
        onChange={changeHandler}
        accept={accept}
      />
      {children}
    </div>
  )
}
