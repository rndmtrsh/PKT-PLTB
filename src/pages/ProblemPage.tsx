import { motion } from 'framer-motion';
import { ProblemSolutionDiagram } from '../components';

export function ProblemPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Latar Masalah</span>
          </h1>
          <p className="text-lg text-white/70">& Urgensi Pengembangan</p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">
              Tantangan Energi Angin di Perkotaan
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Kawasan perkotaan memiliki karakteristik angin yang berbeda dengan area terbuka. 
              Angin di perkotaan cenderung <span className="text-cyan-400 font-semibold">berkecepatan rendah (1-5 m/s)</span> dan 
              bersifat <span className="text-purple-400 font-semibold">turbulen</span> akibat hambatan bangunan. 
              Kondisi ini menyebabkan turbin angin konvensional tidak dapat beroperasi optimal 
              karena membutuhkan kecepatan angin minimal (cut-in) yang lebih tinggi.
            </p>
          </motion.div>

          {/* Problem-Solution Diagram */}
          <ProblemSolutionDiagram />

          {/* Additional Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-5"
          >
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">🔊</div>
              <h3 className="text-lg font-semibold mb-2">Kebisingan</h3>
              <p className="text-white/60 text-sm">
                Turbin konvensional menghasilkan noise yang mengganggu kenyamanan warga perkotaan
              </p>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold mb-2">Penerimaan Masyarakat</h3>
              <p className="text-white/60 text-sm">
                Desain estetis diperlukan agar dapat diterima di lingkungan padat penduduk
              </p>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-semibold mb-2">Keselamatan</h3>
              <p className="text-white/60 text-sm">
                Instalasi harus aman dan tidak membahayakan masyarakat sekitar
              </p>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card p-6 text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Mengapa Turbin Spiral Archimedes?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div>
                <div className="text-3xl font-bold text-cyan-400">1-5</div>
                <div className="text-sm text-white/60">m/s Cut-in Speed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">High</div>
                <div className="text-sm text-white/60">Starting Torque</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">Low</div>
                <div className="text-sm text-white/60">Noise Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Safe</div>
                <div className="text-sm text-white/60">Urban Installation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
