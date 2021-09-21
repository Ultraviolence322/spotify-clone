import React, { ReactElement } from 'react'

interface Props {
  left: number,
  right: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TrackProgress({left, right, onChange}: Props): ReactElement {
  return (
    <div>
      <input 
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>{left} / {right}</div>
    </div>
  )
}
