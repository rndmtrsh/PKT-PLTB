import { motion } from 'framer-motion';
import { config } from '../config';

export function HomePage() {
  const { project } = config;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-6 relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center max-w-5xl w-full mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-10"
        >
          <span className="text-cyan-400 font-medium text-base">{project.group}</span>
          <span className="text-white/40">•</span>
          <span className="text-white/60 text-base">{project.class}</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center"
        >
          <span className="text-gradient">PLTB</span>
          <br />
          <span className="text-white">Archimedes Spiral</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed text-center"
        >
          Pembangkit Listrik Tenaga Bayu Skala Kecil untuk Aplikasi Perkotaan
        </motion.p>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-card p-8 max-w-4xl w-full mx-auto mb-10"
        >
          <h2 className="text-lg md:text-xl text-white/80 leading-relaxed text-center">
            {project.title}
          </h2>
        </motion.div>

        {/* Supervisor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-3 text-white/60 text-base mb-6 w-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Dosen Pengampu: <span className="text-white/80">{project.supervisor}</span></span>
        </motion.div>
      </motion.div>

      {/* Key Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-5xl w-full"
      >
        {[
          { icon: '🌬️', label: 'Low Wind Speed', value: '1-5 m/s' },
          { icon: '🔇', label: 'Low Noise', value: 'Hening' },
          { icon: '⚡', label: 'High Torque', value: 'Efisien' },
          { icon: '🌿', label: 'Eco Friendly', value: 'Ramah Lingkungan' },
        ].map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="glass-card p-6 text-center hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <div className="text-xl font-bold text-cyan-400">{feature.value}</div>
            <div className="text-sm text-white/60 mt-1">{feature.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative spiral animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute right-8 top-1/4 w-48 h-48 opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 50 Q 60 40, 65 50 T 75 50 T 85 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-cyan-400"
          />
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-purple-400" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cyan-400" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-purple-400" />
        </svg>
      </motion.div>
    </div>
  );
}
