import { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text3D, Float, OrbitControls, Center, useTexture  } from '@react-three/drei' 
import * as THREE from "three"
import { Physics } from "@react-three/cannon";
import { TextureLoader } from 'three'
import { useMediaQuery } from 'react-responsive'

import "./SceneStyle.css";

function LinkBox(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  
  // Load texture if provided
  const texture = props.texture ? useTexture(props.texture) : null
  
  const primary = 'white'
  const secondary = 'hotpink'
  
  // Create materials array - one for each face of the cube
  const materials = [
    new THREE.MeshStandardMaterial({ color: hovered ? secondary : primary }), // right
    new THREE.MeshStandardMaterial({ color: hovered ? secondary : primary }), // left
    new THREE.MeshStandardMaterial({ color: hovered ? secondary : primary }), // top
    new THREE.MeshStandardMaterial({ color: hovered ? secondary : primary }), // bottom
    new THREE.MeshStandardMaterial({ map: texture, color: hovered ? secondary : primary }), // front (textured face)
    new THREE.MeshStandardMaterial({ color: hovered ? secondary : primary }) // back
  ]

  const handleOpenLink = () => {
    window.open(props.link, '_blank', 'noopener');
  };

  const hoverStyle = {
    cursor: 'pointer', // Or any other valid CSS cursor value like 'grab', 'help', 'crosshair', etc.
  };
  
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh 
      {...props}
      ref={ref}
      scale={hovered ? 1.1 : 1}
      onClick={handleOpenLink}
      onPointerOver={(event) => {
        event.stopPropagation();
        hover(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(event) => {
        hover(false);
        document.body.style.cursor = 'default';
      }}>
      <boxGeometry args={[1, 1, 1]} />
      <primitive object={materials} attach="material" />
    </mesh>
  )
}

function BigName() {
  return( <>
    <Text3D
      position={[0, 1, 0]}
      font={"/Inter_bold.json"}
      curveSegments={24}
      brevelSegments={1}
      bevelEnabled
      bevelSize={0.03}
      bevelThickness={0.08}
      height={0.2}
      letterSpacing={0.2}
    >
      {`Patrick Lee`}
      <meshPhongMaterial color={'#212121'}/>
    </Text3D>
    <LinkBox position={[0.5, 0, 0]} texture="/github-box.png" link="https://github.com/palleet" />
    <LinkBox position={[2, 0, 0]} texture="/ln-box.png" link="https://www.linkedin.com/in/patricklee2003/" />
    <LinkBox position={[3.5, 0, 0]} texture="/mail-box.png" link="mailto:patl@berkeley.edu" />
  </>);
}

function SmallName() {
  return( <>
    <Text3D
      position={[1.5, 1, 0]}
      font={"/Inter_bold.json"}
      curveSegments={24}
      brevelSegments={1}
      bevelEnabled
      bevelSize={0.03}
      bevelThickness={0.08}
      height={0.2}
      lineHeight={0.5}
      letterSpacing={0.2}
    >
      {`Patrick\nLee`}
      <meshPhongMaterial color={'#212121'}/>
    </Text3D>

    <LinkBox position={[2.5, -1, 0]} texture="/github-box.png" link="https://github.com/palleet" />
    <LinkBox position={[4, -1, 0]} texture="/ln-box.png" link="https://www.linkedin.com/in/patricklee2003/" />
    <LinkBox position={[5.5, -1, 0]} texture="/mail-box.png" link="mailto:patl@berkeley.edu" />
  </>);
}

function LandingScene() {
  // const texture = useTexture('/text_gradient.jpg')
  // const colorMap = useLoader(TextureLoader, '/dots.jpg')

  const isMobile = useMediaQuery({ maxWidth: 850 });

  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <color attach="background" args={['#f0f0f0']} />
          {/* <color attach="background" args={['#fdffb6']} /> */}
          
          <Center scale={[0.9, 1, 1]}>
            <Physics gravity={10}>
              <Float speed={1}>
                {isMobile ? <SmallName /> : <BigName />}
                
              </Float>
            </Physics>
          </Center>
         

          {/* <Sky sunPosition={[100, 100, 100]} /> */}
          
          {/* <ambientLight intensity={0.6} color={"#dee2ff"} /> */}
          <ambientLight intensity={2} />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={3} /> */}
          <pointLight position={[-10, -10, 10]} decay={0} intensity={10} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={10} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}

export default LandingScene;
