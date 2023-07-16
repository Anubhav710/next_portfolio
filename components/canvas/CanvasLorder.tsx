"use client"
import { useProgress, Html } from "@react-three/drei"
import React from "react"

const CanvasLorder = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLorder
