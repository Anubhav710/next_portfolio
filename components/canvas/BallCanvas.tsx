"use client"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Float,
  OrbitControls,
  Preload,
  Decal,
  useTexture,
} from "@react-three/drei"
import CanvasLorder from "./CanvasLorder"

const Ball = ({ imgUrl }: any) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: any) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLorder />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
