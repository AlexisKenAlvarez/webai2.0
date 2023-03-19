import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { EarthModel } from '../models/Earth'
import { GlobeObject } from '../models/Globe'
import { degToRad } from '../utils/degToRad'

const GlobeComp = () => {

    const orbitRef = useRef(null)

    useFrame((state) => {
        const { x, y } = state.mouse
        const orbit = orbitRef.current
        orbit.enablePan = false
        orbit.enableRotate = false
        orbit.enableZoom = false
        orbit.setAzimuthalAngle(x * (degToRad(180)))
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <OrbitControls ref={orbitRef} />
            <EarthModel />
            <ambientLight args={["#ffffff", 0.10]} />
            {/* <spotLight args={['#f86449', 10, 6.5, degToRad(45), 0.4]} position={[0, 0, 0]} castShadow /> */}

        </>
    )
}

export default GlobeComp