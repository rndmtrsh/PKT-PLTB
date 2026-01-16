import { motion } from 'framer-motion';
import { FeatureCard } from '../components';

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
            
            {/* Spiral Illustration */}
            <div className="relative h-48 mb-5 flex items-center justify-center">
              <motion.svg
                viewBox="0 0 200 200"
                className="w-48 h-48"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {/* True Archimedes Spiral - 3 blade VAWT design */}
                <defs>
                  <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                {/* Blade 1 - Archimedes spiral curve */}
                <path
                  d="M100,100 C100,85 105,70 115,60 C130,45 150,40 165,50 C175,58 180,75 175,90 C170,105 155,115 140,115"
                  fill="none"
                  stroke="url(#spiralGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Blade 2 - rotated 120° */}
                <path
                  d="M100,100 C113,108 122,120 125,135 C128,155 120,175 105,182 C92,188 75,182 65,170 C55,158 55,140 65,128"
                  fill="none"
                  stroke="url(#spiralGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Blade 3 - rotated 240° */}
                <path
                  d="M100,100 C87,92 73,90 60,95 C42,102 28,120 28,140 C28,155 40,168 55,172 C72,176 88,168 95,153"
                  fill="none"
                  stroke="url(#spiralGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Center hub */}
                <circle cx="100" cy="100" r="8" fill="#22d3ee" />
                <circle cx="100" cy="100" r="4" fill="#0f172a" />
              </motion.svg>
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
