import { motion } from 'framer-motion';
import { STLViewer } from '../components';

interface Viewer3DPageProps {
  isActive: boolean;
}

export function Viewer3DPage({ isActive }: Viewer3DPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-6">
      <div className="max-w-7xl w-full h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Visual 3D</span>
          </h1>
          <p className="text-lg text-white/70">Model Turbin Archimedes Spiral</p>
        </motion.div>

        {/* 3D Viewer - Centered and fills container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 min-h-[60vh] flex items-center justify-center"
        >
          <div className="w-full h-full">
            <STLViewer isActive={isActive} />
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-5 mt-6"
        >
          <div className="glass-card p-6 text-center">
            <div className="text-cyan-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Interaktif</h3>
            <p className="text-base text-white/60">Drag untuk memutar model</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Zoom</h3>
            <p className="text-base text-white/60">Scroll untuk memperbesar/kecil</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-emerald-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Auto Rotate</h3>
            <p className="text-base text-white/60">Model berputar otomatis</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
