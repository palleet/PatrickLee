import { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text3D, Float,Clouds, Cloud, Sky, OrbitControls, Center, useTexture  } from '@react-three/drei' 
import * as THREE from "three"
import { Physics } from "@react-three/cannon";
import { TextureLoader } from 'three'

import "./SceneStyle.css";

function LinkBox(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  
  // Load texture if provided
  const texture = props.texture ? useTexture(props.texture) : null
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  
  // Create materials array - one for each face of the cube
  const materials = [
    new THREE.MeshStandardMaterial({ color: hovered ? 'hotpink' : 'orange' }), // right
    new THREE.MeshStandardMaterial({ color: hovered ? 'hotpink' : 'orange' }), // left
    new THREE.MeshStandardMaterial({ color: hovered ? 'hotpink' : 'orange' }), // top
    new THREE.MeshStandardMaterial({ color: hovered ? 'hotpink' : 'orange' }), // bottom
    new THREE.MeshStandardMaterial({ map: texture, color: hovered ? 'hotpink' : 'orange' }), // front (textured face)
    new THREE.MeshStandardMaterial({ color: hovered ? 'hotpink' : 'orange' }), // back
  ]
  
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
      <primitive object={materials} attach="material" />
    </mesh>
  )
}

function LandingScene() {
  // const texture = useTexture('/text_gradient.jpg')
  // const colorMap = useLoader(TextureLoader, '/dots.jpg')

  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <color attach="background" args={['#fdffb6']} />
          
          {/* <mesh>
            <torusKnotGeometry args={[1, 0.4, 200, 50]} />
            <meshPhongMaterial />
          </mesh> */}
          
          <Center scale={[0.9, 1, 1]}>
            <Physics gravity={10}>
              <Float speed={1}>
                <Text3D
                  position={[0, 1, 0]}
                  // scale={[-1, 1, 1]}
                  // ref={ref}
                  // size={w / 9}
                  // maxWidth={[-w / 5, -h * 2, 3]}
                  font={"/Inter_bold.json"}
                  curveSegments={24}
                  brevelSegments={1}
                  bevelEnabled
                  bevelSize={0.03}
                  // bevelThickness={0.03}
                  height={0.2}
                  // lineHeight={0.9}
                  letterSpacing={0.2}
                >
                  {`Patrick Lee`}
                  {/* <meshPhongMaterial map={colorMap}/> */}
                  <meshPhongMaterial color={'#577399'}/>
                </Text3D>
                <LinkBox position={[0, 0, 0]} texture="/github-mark-white.png" />
              </Float>
            </Physics>
          </Center>
         

          {/* <Sky sunPosition={[100, 100, 100]} /> */}
          
          {/* <ambientLight intensity={0.6} color={"#dee2ff"} /> */}
          <ambientLight intensity={2} />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={3} /> */}
          <pointLight position={[-10, -10, 10]} decay={0} intensity={10} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={10} />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default LandingScene;
