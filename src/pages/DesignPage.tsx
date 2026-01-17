import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { FeatureCard } from '../components';
import { config } from '../config';
import { useRef } from 'react';
import * as THREE from 'three';

// Mini STL Viewer for DesignPage
function MiniTurbineModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  geometry.computeBoundingBox();
  geometry.center();

  const box = geometry.boundingBox;
  const size = box ? new THREE.Vector3() : new THREE.Vector3(1, 1, 1);
  if (box) {
    box.getSize(size);
  }
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 3.5 / maxDim;

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

export function DesignPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Desain Turbin</span>
          </h1>
          <p className="text-lg text-white/70">Archimedes Spiral</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Spiral Geometry Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Geometri Spiral Archimedes
            </h2>
            
            {/* Spiral 3D Model */}
            <div className="relative h-52 mb-5 flex items-center justify-center rounded-lg overflow-hidden bg-black/20">
              <Canvas
                camera={{ position: [3, 3, 3], fov: 45 }}
                style={{ width: '100%', height: '100%' }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[0, 5, 0]} intensity={0.5} color="#22d3ee" />
                <Suspense fallback={null}>
                  <MiniTurbineModel url={config.viewer3D.stlPath} />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  autoRotate={false}
                />
              </Canvas>
            </div>

            <p className="text-white/80 leading-relaxed mb-4 text-base">
              Turbin Spiral Archimedes memiliki bilah berbentuk spiral yang terinspirasi dari 
              sekrup Archimedes kuno. Geometri ini memungkinkan turbin menangkap angin dari 
              berbagai arah dengan efisiensi tinggi.
            </p>
            <p className="text-white/80 leading-relaxed text-base">
              Bentuk spiral menghasilkan <span className="text-cyan-400 font-semibold">torsi awal yang tinggi</span>, 
              memungkinkan turbin mulai berputar pada kecepatan angin yang sangat rendah 
              (<span className="text-purple-400">cut-in speed</span> rendah).
            </p>
          </motion.div>

          {/* Right Column - Technical Advantages */}
          <div className="space-y-6">
            <FeatureCard
              title="Torsi Awal Tinggi"
              features={[
                'Mampu berputar pada kecepatan angin rendah',
                'Cut-in speed mulai dari 1 m/s',
                'Efisien pada kondisi angin perkotaan',
                'Self-starting capability',
              ]}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              color="cyan"
              delay={0.3}
            />

            <FeatureCard
              title="Operasi Hening"
              features={[
                'Desain aerodinamis mengurangi noise',
                'Cocok untuk area pemukiman padat',
                'Tidak mengganggu kenyamanan warga',
                'Level kebisingan minimal',
              ]}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              }
              color="purple"
              delay={0.4}
            />

            <FeatureCard
              title="Ramah Lingkungan"
              features={[
                'Memanfaatkan sumber energi terbarukan',
                'Tidak menghasilkan emisi karbon',
                'Mendukung target net-zero emissions',
                'Sustainable energy solution',
              ]}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              color="green"
              delay={0.5}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 glass-card p-8"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Spesifikasi Desain</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="py-3">
              <div className="text-2xl font-bold text-cyan-400 mb-2">Spiral</div>
              <div className="text-sm text-white/60">Tipe Blade</div>
            </div>
            <div className="py-3">
              <div className="text-2xl font-bold text-purple-400 mb-2">1 m/s</div>
              <div className="text-sm text-white/60">Cut-in Speed</div>
            </div>
            <div className="py-3">
              <div className="text-2xl font-bold text-emerald-400 mb-2">360°</div>
              <div className="text-sm text-white/60">Wind Capture</div>
            </div>
            <div className="py-3">
              <div className="text-2xl font-bold text-yellow-400 mb-2">VAWT</div>
              <div className="text-sm text-white/60">Axis Type</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
