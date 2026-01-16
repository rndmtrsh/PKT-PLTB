import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { config } from '../config';
import * as THREE from 'three';

interface TurbineModelProps {
  url: string;
}

function TurbineModel({ url }: TurbineModelProps) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  // Auto-rotate the model
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  // Center and scale the geometry
  geometry.computeBoundingBox();
  geometry.center();

  const box = geometry.boundingBox;
  const size = box ? new THREE.Vector3() : new THREE.Vector3(1, 1, 1);
  if (box) {
    box.getSize(size);
  }
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 5.5 / maxDim;  // Large initial scale for prominent display

  return (
    <Center>
      <mesh ref={meshRef} geometry={geometry} scale={[scale, scale, scale]}>
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.6}
          roughness={0.3}
          envMapIntensity={0.8}
        />
      </mesh>
    </Center>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">Memuat model 3D...</p>
      </div>
    </div>
  );
}

function Scene() {
  const { minDistance, maxDistance, autoRotateSpeed } = config.viewer3D;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#22d3ee" />
      
      <Suspense fallback={null}>
        <TurbineModel url={config.viewer3D.stlPath} />
        <Environment preset="city" />
      </Suspense>
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={minDistance}
        maxDistance={maxDistance}
        autoRotate
        autoRotateSpeed={autoRotateSpeed}
        makeDefault
      />
    </>
  );
}

interface STLViewerProps {
  isActive: boolean;
}

export function STLViewer({ isActive }: STLViewerProps) {
  const { cameraPosition } = config.viewer3D;

  if (!isActive) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/40">Model 3D akan ditampilkan saat halaman aktif</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{
            position: cameraPosition,
            fov: 40,
            near: 0.1,
            far: 1000,
          }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      {/* Overlay instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
        <p>🖱️ Drag untuk memutar • Scroll untuk zoom</p>
      </div>
    </div>
  );
}
