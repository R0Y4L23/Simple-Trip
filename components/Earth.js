import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Earth = () => {

    return (
        <Canvas className='mainBg' style={{ height: "100vh" }}>
            <ambientLight intensity={1} />
            <mesh visible position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}

export default Earth