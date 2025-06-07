import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React from 'react'

const Backdrop = () => {
  return (
    <AccumulativeShadows>
      <RandomizedLight />
    </AccumulativeShadows>
  )
}

export default Backdrop