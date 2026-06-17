'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Stars } from '@react-three/drei'
import * as random from 'three/src/math/MathUtils.js'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'

const DonorNetwork = ({ mousePos, color }: { mousePos: THREE.Vector2; color: string }) => {
  const pointsRef = useRef<THREE.Points>(null)
  const [positions, setPositions] = useState<Float32Array | null>(null)
  const [originalPositions, setOriginalPositions] = useState<Float32Array | null>(null)
  const positionVelocityRef = useRef<Map<number, THREE.Vector3>>(new Map())

  useEffect(() => {
    // Create donor network nodes - 2000+ nodes
    const count = 2000
    const posArray = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20
      posArray[i + 1] = (Math.random() - 0.5) * 20
      posArray[i + 2] = (Math.random() - 0.5) * 20
    }

    setPositions(posArray)
    setOriginalPositions(new Float32Array(posArray))
  }, [])

  useFrame(({ camera }) => {
    if (pointsRef.current && positions && originalPositions) {
      // Base rotation
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002

      // Apply mouse interaction
      const positions_attr = pointsRef.current.geometry.attributes.position
      const count = positions_attr.count

      // Convert mouse position from screen to world space
      const vector = new THREE.Vector3(mousePos.x, mousePos.y, 0.5)
      vector.unproject(camera)
      const dir = vector.sub(camera.position).normalize()
      const distance = -camera.position.z / dir.z
      const mouseWorldPos = camera.position.clone().add(dir.multiplyScalar(distance))

      for (let i = 0; i < count; i++) {
        const i3 = i * 3

        // Get original position
        const origX = originalPositions[i3]
        const origY = originalPositions[i3 + 1]
        const origZ = originalPositions[i3 + 2]

        // Calculate distance to mouse
        const dx = origX - mouseWorldPos.x
        const dy = origY - mouseWorldPos.y
        const dz = origZ - mouseWorldPos.z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        // Repulsion effect - particles move away from cursor
        const influenceRadius = 4
        const repulsionStrength = 0.15

        let x = origX
        let y = origY
        let z = origZ

        if (dist < influenceRadius) {
          const force = (1 - dist / influenceRadius) * repulsionStrength
          x = origX + (dx / (dist || 1)) * force
          y = origY + (dy / (dist || 1)) * force
          z = origZ + (dz / (dist || 1)) * force
        }

        // Smooth return to original position
        const returnSpeed = 0.08
        const currentX = positions_attr.getX(i)
        const currentY = positions_attr.getY(i)
        const currentZ = positions_attr.getZ(i)

        positions_attr.setXYZ(
          i,
          currentX + (x - currentX) * returnSpeed,
          currentY + (y - currentY) * returnSpeed,
          currentZ + (z - currentZ) * returnSpeed
        )
      }

      positions_attr.needsUpdate = true
    }
  })

  if (!positions) return null

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

const DataCards = ({ colors }: { colors: { secondary: string; accent: string } }) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0001
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[5, 3, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color={colors.secondary} opacity={0.2} transparent />
      </mesh>
      <mesh position={[-5, -2, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color={colors.accent} opacity={0.2} transparent />
      </mesh>
    </group>
  )
}

export function HeroCanvas() {
  const [mousePos, setMousePos] = useState<THREE.Vector2>(new THREE.Vector2(0, 0))
  const [themeColors, setThemeColors] = useState<{ primary: string; secondary: string; accent: string; background: string } | null>(null)

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement)
    setThemeColors({
      primary: computedStyle.getPropertyValue('--primary').trim(),
      secondary: computedStyle.getPropertyValue('--secondary').trim(),
      accent: computedStyle.getPropertyValue('--accent').trim(),
      background: computedStyle.getPropertyValue('--background').trim(),
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePos(new THREE.Vector2(x, y))
    }

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      setMousePos(new THREE.Vector2(0, 0))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!themeColors) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      className="w-full h-full"
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
    >
      <color attach="background" args={[themeColors.background]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <DonorNetwork mousePos={mousePos} color={themeColors.primary} />
      <DataCards colors={themeColors} />
      <Preload all />
    </Canvas>
  )
}
