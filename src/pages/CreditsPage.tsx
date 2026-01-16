import { motion } from 'framer-motion';
import { config } from '../config';

export function CreditsPage() {
  const { project } = config;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            <span className="text-gradient">Tim Kami</span>
          </h1>
          <p className="text-xl text-white/70">{project.group} • {project.class}</p>
        </motion.div>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 mb-10 text-center"
        >
          <h2 className="text-xl md:text-2xl text-white/80 leading-relaxed">
            {project.title}
          </h2>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">
            Anggota Kelompok
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {project.members.map((member, index) => (
              <motion.div
                key={member.nim}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-8 flex items-center gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center border border-white/20">
                  <span className="text-3xl font-bold text-cyan-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-white/60 font-mono text-lg">{member.nim}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supervisor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-10 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-purple-400">
            Dosen Pengampu
          </h3>
          <div className="flex items-center justify-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center border border-white/20">
              <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-2xl font-semibold text-white">{project.supervisor}</h4>
              <p className="text-white/60 text-lg">Dosen Pengampu Proyek Karya Teknologi</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-lg">
            Proyek Karya Teknologi • Teknik Elektro UMS • 2025/2026
          </p>
          <div className="flex items-center justify-center gap-5 mt-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="text-cyan-400/50 text-2xl"
            >
              ⚡
            </motion.div>
            <span className="text-white/30 text-lg">PLTB Archimedes Spiral</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="text-purple-400/50 text-2xl"
            >
              🌀
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
