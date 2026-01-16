import { motion } from 'framer-motion';
import { KPICard, VoltageChart, CurrentChart, PowerChart, CumulativeEnergyChart } from '../components';
import testData from '../data/testData.json';

interface AnalyticsPageProps {
  isActive: boolean;
}

export function AnalyticsPage({ isActive }: AnalyticsPageProps) {
  // Calculate KPIs from data
  const maxVoltage = Math.max(...testData.map(d => d.voltage_V));
  const maxPower = Math.max(...testData.map(d => d.power_W));
  const totalEnergy = testData[testData.length - 1].energy_Wh_cum;
  const avgWindSpeed = testData.reduce((sum, d) => sum + d.wind_speed_mps, 0) / testData.length;

  return (
    <div className="min-h-screen flex flex-col items-center px-8 py-6 overflow-y-auto">
      <div className="max-w-7xl w-full flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hasil Pengujian</span>
          </h1>
          <p className="text-lg text-white/70">Data Analitik & Performa Sistem</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <KPICard
            title="Tegangan Maksimum"
            value={maxVoltage}
            unit="V"
            color="cyan"
            decimals={2}
            isActive={isActive}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          
          <KPICard
            title="Daya Maksimum"
            value={maxPower}
            unit="W"
            color="green"
            decimals={3}
            isActive={isActive}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
          
          <KPICard
            title="Total Energi"
            value={totalEnergy}
            unit="Wh"
            color="yellow"
            decimals={2}
            isActive={isActive}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            }
          />
          
          <KPICard
            title="Rata-rata Wind Speed"
            value={avgWindSpeed}
            unit="m/s"
            color="purple"
            decimals={2}
            isActive={isActive}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8 flex-1">
          <VoltageChart />
          <CurrentChart />
          <PowerChart />
          <CumulativeEnergyChart />
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-cyan-400">
            Kesimpulan Hasil Pengujian
          </h3>
          
          {/* Main conclusion points */}
          <div className="space-y-4 max-w-4xl mx-auto mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Korelasi Positif:</span> Kenaikan kecepatan angin berbanding lurus dengan peningkatan tegangan, arus, dan daya yang dihasilkan oleh sistem.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 font-bold">2</span>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                <span className="text-emerald-400 font-semibold">Efektif di Angin Rendah:</span> Sistem PLTB Archimedes Spiral mampu beroperasi dan menghasilkan energi pada kondisi angin berkecepatan rendah (1-5 m/s).
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                <span className="text-purple-400 font-semibold">Potensi Aplikasi:</span> Cocok sebagai sumber energi alternatif skala kecil untuk aplikasi perkotaan dengan kondisi angin yang tidak konsisten.
              </p>
            </div>
          </div>
          
          {/* Summary icons */}
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-base font-semibold text-white mb-1">Korelasi Linier</h4>
              <p className="text-sm text-white/60">
                Wind speed → Output daya
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-base font-semibold text-white mb-1">Operasi Low-Wind</h4>
              <p className="text-sm text-white/60">
                Cut-in speed rendah
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔋</div>
              <h4 className="text-base font-semibold text-white mb-1">Energy Storage</h4>
              <p className="text-sm text-white/60">
                Potensi charging baterai
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
