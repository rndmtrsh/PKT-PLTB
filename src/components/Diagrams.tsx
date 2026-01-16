import { motion } from 'framer-motion';

interface DiagramBlockProps {
  title: string;
  subtitle?: string;
  color: 'cyan' | 'purple' | 'green' | 'yellow' | 'orange';
  delay?: number;
}

const blockColors = {
  cyan: 'from-cyan-500/30 to-cyan-600/20 border-cyan-500/50',
  purple: 'from-purple-500/30 to-purple-600/20 border-purple-500/50',
  green: 'from-emerald-500/30 to-emerald-600/20 border-emerald-500/50',
  yellow: 'from-yellow-500/30 to-yellow-600/20 border-yellow-500/50',
  orange: 'from-orange-500/30 to-orange-600/20 border-orange-500/50',
};

function DiagramBlock({ title, subtitle, color, delay = 0 }: DiagramBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`
        px-5 py-4 rounded-lg 
        bg-gradient-to-br ${blockColors[color]}
        border text-center
        min-w-[120px]
      `}
    >
      <div className="font-semibold text-white text-base">{title}</div>
      {subtitle && <div className="text-sm text-white/60 mt-1">{subtitle}</div>}
    </motion.div>
  );
}

function Arrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center px-2"
    >
      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-purple-500" />
    </motion.div>
  );
}

export function SystemFlowDiagram() {
  const blocks = [
    { title: 'Angin', subtitle: '1-5 m/s', color: 'cyan' as const },
    { title: 'Turbin', subtitle: 'Archimedes', color: 'purple' as const },
    { title: 'Generator', subtitle: 'DC', color: 'green' as const },
    { title: 'Charge Controller', subtitle: 'Pengisian', color: 'yellow' as const },
    { title: 'Baterai', subtitle: 'Penyimpanan', color: 'orange' as const },
    { title: 'Inverter', subtitle: 'DC → AC', color: 'cyan' as const },
    { title: 'Beban', subtitle: 'Listrik', color: 'green' as const },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full"
    >
      <h3 className="text-lg font-semibold mb-5 text-center text-white/90">
        Alur Konversi Energi Angin → Listrik
      </h3>
      
      {/* Desktop layout */}
      <div className="hidden lg:flex items-center justify-center flex-wrap gap-y-4">
        {blocks.map((block, index) => (
          <div key={block.title} className="flex items-center">
            <DiagramBlock {...block} delay={index * 0.1} />
            {index < blocks.length - 1 && <Arrow delay={index * 0.1 + 0.05} />}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet layout */}
      <div className="lg:hidden grid grid-cols-2 gap-4">
        {blocks.map((block, index) => (
          <div key={block.title} className="flex items-center justify-center">
            <DiagramBlock {...block} delay={index * 0.1} />
          </div>
        ))}
      </div>

      {/* Protection info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-center"
      >
        <div className="flex items-center justify-center gap-3 text-red-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-semibold text-base">Sistem Proteksi</span>
        </div>
        <p className="text-sm text-white/60 mt-2">
          MCB (Miniature Circuit Breaker) & Terminal Block untuk keamanan dan kerapian wiring
        </p>
      </motion.div>
    </motion.div>
  );
}

export function ProblemSolutionDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {/* Problem Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-5 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-red-500/20">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-400">Masalah</h3>
        </div>
        <ul className="space-y-3 text-white/80 text-base">
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span>Angin perkotaan rendah & turbulen (1-5 m/s)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span>Turbin konvensional tidak efektif di kecepatan rendah</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span>Kebisingan mengganggu lingkungan padat penduduk</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span>Estetika dan keselamatan instalasi</span>
          </li>
        </ul>
      </motion.div>

      {/* Solution Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/20">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-emerald-400">Solusi</h3>
        </div>
        <ul className="space-y-3 text-white/80 text-base">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">✓</span>
            <span>Turbin Spiral Archimedes dengan cut-in rendah</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">✓</span>
            <span>Torsi awal tinggi untuk angin berkecepatan rendah</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">✓</span>
            <span>Desain hening & ramah lingkungan</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">✓</span>
            <span>Estetis & aman untuk area perkotaan</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
