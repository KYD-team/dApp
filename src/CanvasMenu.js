import * as THREE from 'three'
import { useState, useRef, useEffect } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows, Effects, Text, TrackballControls } from '@react-three/drei'
import { FaAdn, FaBandcamp } from 'react-icons/fa'
import { WaterPass, GlitchPass } from 'three-stdlib'

extend({ WaterPass, GlitchPass })

function Model({togglePanel, setSelectedChain, ...props}) {
  const chainStyle = { 
    color: '#ffffff',
    position: 'absolute',
    fontSize: 10,
    letterSpacing: -0.5,
    left: 17.5,
    cursour: 'pointer',
  };
  
  function handleClick(chain) {
    setSelectedChain(chain);
    togglePanel(true);
  }

  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="#9c7ccf" />
        <Word handleClick={handleClick} position={[0, 1.8, 0]}>
          Binance
        </Word>
        <Word handleClick={handleClick} position={[0, 0, 2]} >
          Snowtrace
        </Word>
      </mesh>
    </group>
  )
}

function Word({ handleClick, children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 0.3, letterSpacing: -0.05, lineHeight: 0.5, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? 'grey' : 'white'), 0.1)
  })

  return (
    <Text
      anchorX="center"
      anchorY="middle"
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => handleClick(children)}
      {...props}
      {...fontProps}
      children={children} />
  )
}

function Postpro() {
  const ref = useRef()
  useFrame((state) => (ref.current.time = state.clock.elapsedTime * 10))
  return (
    <Effects style={{ transition: 'all 0.2s', transform: `scale(0.25)` }}
    >
      <glitchPass ref={ref} factor={0.5} />
    </Effects>
  )
}

export default function CanvasMenu({togglePanel, setSelectedChain}) {
  return (
    <Canvas style={{height: '300px', marginLeft: '100px'}} camera={{ position: [5, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <Model
        setSelectedChain={setSelectedChain}
        togglePanel={togglePanel}
        position={[0, 0.25, 0]}
      />
      {/* <Postpro /> */}
      <Environment preset="city" />
      <ContactShadows
        frames={1}
        scale={5}
        position={[0, -1, 0]}
        far={1}
        blur={5}
        opacity={0.5}
        color="#204080"
      />
      <OrbitControls />
    </Canvas>
  )
}
