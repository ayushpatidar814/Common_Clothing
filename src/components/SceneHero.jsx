import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Mannequin() {
  const group = useRef(null);
  const hoodieMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#e8edf2"),
        roughness: 0.35,
        metalness: 0.55,
        clearcoat: 1,
      }),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.45,
      0.06,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.12,
      0.06,
    );
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
  });

  return (
    <group ref={group} position={[0, -1.1, 0]}>
      <mesh position={[0, 2.5, 0]} castShadow material={hoodieMaterial}>
        <sphereGeometry args={[0.45, 48, 48]} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow material={hoodieMaterial}>
        <capsuleGeometry args={[0.78, 1.7, 16, 32]} />
      </mesh>
      <mesh position={[0, 1.55, 0.24]} rotation={[0.5, 0, 0]} castShadow material={hoodieMaterial}>
        <torusGeometry args={[0.5, 0.12, 24, 80, Math.PI]} />
      </mesh>
      <mesh position={[-1.05, 1.25, 0]} rotation={[0, 0, -0.4]} castShadow material={hoodieMaterial}>
        <capsuleGeometry args={[0.23, 1.55, 12, 24]} />
      </mesh>
      <mesh position={[1.05, 1.25, 0]} rotation={[0, 0, 0.4]} castShadow material={hoodieMaterial}>
        <capsuleGeometry args={[0.23, 1.55, 12, 24]} />
      </mesh>
      <mesh position={[-0.42, -0.55, 0]} rotation={[0, 0, 0.03]} castShadow material={hoodieMaterial}>
        <capsuleGeometry args={[0.28, 1.8, 16, 26]} />
      </mesh>
      <mesh position={[0.42, -0.55, 0]} rotation={[0, 0, -0.03]} castShadow material={hoodieMaterial}>
        <capsuleGeometry args={[0.28, 1.8, 16, 26]} />
      </mesh>

      <mesh position={[0, 1.05, 0.54]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[1.1, 1.1, 0.12]} />
        <MeshTransmissionMaterial
          thickness={0.22}
          roughness={0.05}
          transmission={1}
          chromaticAberration={0.12}
          anisotropy={0.2}
          color="#7cf2ff"
          distortion={0.2}
        />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  return (
    <>
      {[[-2.2, 1.8, -1.5], [2.4, 0.5, -2], [-2.4, -0.8, -1.4], [2, 2.2, -1.1]].map((position, index) => (
        <Float
          key={position.join("-")}
          speed={1.2 + index * 0.2}
          rotationIntensity={1.5}
          floatIntensity={1.8}
          position={position}
        >
          <mesh>
            {index % 2 === 0 ? (
              <icosahedronGeometry args={[0.28, 0]} />
            ) : (
              <torusKnotGeometry args={[0.18, 0.05, 128, 18]} />
            )}
            <meshStandardMaterial
              color={index % 2 === 0 ? "#7cf2ff" : "#dfe7ee"}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function SceneHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      dpr={isMobile ? [1, 1.1] : [1, 1.35]}
      camera={{ position: [0, 0.8, isMobile ? 7.5 : 6.8], fov: isMobile ? 36 : 32 }}
      shadows={!isMobile}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#020202", 7, 14]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 5, 4]} intensity={2.4} color="#ffffff" castShadow={!isMobile} />
        <pointLight position={[-4, 1, 2]} intensity={isMobile ? 7 : 10} color="#7cf2ff" />
        <spotLight position={[0, 5, 5]} angle={0.3} intensity={isMobile ? 20 : 32} color="#f8fbff" penumbra={0.7} />
        <Sparkles count={isMobile ? 42 : 72} scale={[10, 8, 6]} size={2} speed={0.35} color="#9be7ff" />
        <FloatingElements />
        <Mannequin />
        <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[6, 64]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
