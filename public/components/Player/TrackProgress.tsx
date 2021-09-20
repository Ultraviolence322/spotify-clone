import React, { ReactElement } from 'react'

interface Props {
  left: number,
  right: number,
  onChange: () => ({})
}

export default function TrackProgress({left, right, onChange}: Props): ReactElement {
  return (
    <div>
      <input 
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
    </div>
  )
}
