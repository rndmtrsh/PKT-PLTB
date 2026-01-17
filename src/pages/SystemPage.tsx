import { motion } from 'framer-motion';
import { SystemFlowDiagram, InfoCard } from '../components';

export function SystemPage() {
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
            <span className="text-gradient">Prinsip Kerja</span>
          </h1>
          <p className="text-lg text-white/70">Sistem Konversi Energi</p>
        </motion.div>

        {/* System Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <SystemFlowDiagram />
        </motion.div>

        {/* Component Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:border [&>*]:border-white/10">
          <InfoCard
            title="Turbin Spiral Archimedes"
            description="Mengkonversi energi kinetik angin menjadi energi mekanik rotasi. Geometri spiral menghasilkan torsi awal tinggi untuk operasi pada angin berkecepatan rendah."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
            delay={0.3}
          />

          <InfoCard
            title="Generator DC"
            description="Mengkonversi energi mekanik dari turbin menjadi energi listrik DC. Generator dikopel langsung ke poros turbin untuk transfer daya yang efisien."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            delay={0.4}
          />

          <InfoCard
            title="Charge Controller"
            description="Mengatur proses pengisian baterai dengan mengontrol tegangan dan arus. Melindungi baterai dari overcharge dan deep discharge untuk memperpanjang umur baterai."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            }
            delay={0.5}
          />

          <InfoCard
            title="Baterai & Penyimpanan"
            description="Menyimpan energi listrik yang dihasilkan untuk digunakan saat dibutuhkan. Kapasitas disesuaikan dengan kebutuhan beban dan pola angin."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            }
            delay={0.6}
          />

          <InfoCard
            title="Inverter DC-AC"
            description="Mengkonversi listrik DC dari baterai menjadi listrik AC standar untuk beban peralatan rumah tangga yang membutuhkan suplai AC."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            }
            delay={0.7}
          />

          <InfoCard
            title="Sistem Proteksi"
            description="MCB (Miniature Circuit Breaker) melindungi sistem dari overcurrent dan short circuit. Terminal block memastikan kerapian dan keamanan wiring."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
}
