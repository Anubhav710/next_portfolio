import React from "react"
import { Suspense } from "react"
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import CanvasLorder from "./CanvasLorder"

const Earth = () => {
  const earthModel = useGLTF("/3d_model/planet/scene.gltf")
  return (
    <primitive
      object={earthModel.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLorder />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
