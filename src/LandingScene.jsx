import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Clouds, Cloud, OrbitControls } from '@react-three/drei' 
import * as THREE from "three"

import "./SceneStyle.css";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function LandingScene() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          
          <mesh>
            <torusKnotGeometry args={[1, 0.4, 200, 50]} />
            <meshPhongMaterial />
          </mesh>
          <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
            <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
          </Clouds>
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default LandingScene;
