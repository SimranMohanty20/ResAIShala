// src/ModelViewer.js
import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const position = [0, 0, 0];

function Model({ position }) {
  const { scene } = useGLTF('src/assets/LandingPage.glb');
  return <primitive object={scene} position={position} rotation={[0, Math.PI, 0]} />;
}

function CameraController() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 2, 8); // Set your custom camera position here
  }, [camera]);
  return null;
}

export default function ModelViewer() {
  return (
    <Canvas className='bg-black'>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 8]} intensity={2} />
      <Suspense fallback={"Loading"}>
      <Model position={position} /> {/* Change the position as needed */}
      </Suspense>
      <CameraController />
      <OrbitControls />
    </Canvas>
  );
}
