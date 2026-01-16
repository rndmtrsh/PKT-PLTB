import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import testData from '../data/testData.json';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function ChartContainer({ title, children, delay = 0 }: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-5"
    >
      <h3 className="text-base font-semibold mb-3 text-white/90 text-center">{title}</h3>
      <div className="h-56">
        {children}
      </div>
    </motion.div>
  );
}

const chartColors = {
  voltage: '#22d3ee',
  current: '#a78bfa',
  power: '#34d399',
  energy: '#fbbf24',
};

// Sort data by wind speed for proper line chart display
const sortedData = [...testData].sort((a, b) => a.wind_speed_mps - b.wind_speed_mps);

export function VoltageChart() {
  return (
    <ChartContainer title="Kecepatan Angin vs Tegangan" delay={0.1}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sortedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="wind_speed_mps" 
            stroke="#94a3b8"
            label={{ value: 'm/s', position: 'insideBottomRight', offset: -5, fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            label={{ value: 'V', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelFormatter={(value) => `Wind Speed: ${value} m/s`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="voltage_V"
            name="Tegangan (V)"
            stroke={chartColors.voltage}
            strokeWidth={3}
            dot={{ fill: chartColors.voltage, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function CurrentChart() {
  return (
    <ChartContainer title="Kecepatan Angin vs Arus" delay={0.2}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sortedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="wind_speed_mps" 
            stroke="#94a3b8"
            label={{ value: 'm/s', position: 'insideBottomRight', offset: -5, fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            label={{ value: 'mA', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelFormatter={(value) => `Wind Speed: ${value} m/s`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="current_mA"
            name="Arus (mA)"
            stroke={chartColors.current}
            strokeWidth={3}
            dot={{ fill: chartColors.current, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function PowerChart() {
  return (
    <ChartContainer title="Kecepatan Angin vs Daya" delay={0.3}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sortedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="wind_speed_mps" 
            stroke="#94a3b8"
            label={{ value: 'm/s', position: 'insideBottomRight', offset: -5, fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            label={{ value: 'W', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelFormatter={(value) => `Wind Speed: ${value} m/s`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="power_W"
            name="Daya (W)"
            stroke={chartColors.power}
            strokeWidth={3}
            dot={{ fill: chartColors.power, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function CumulativeEnergyChart() {
  return (
    <ChartContainer title="Energi Kumulatif per Sampel" delay={0.4}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={testData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColors.energy} stopOpacity={0.4}/>
              <stop offset="95%" stopColor={chartColors.energy} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="sample" 
            stroke="#94a3b8"
            label={{ value: 'Sampel', position: 'insideBottomRight', offset: -5, fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            label={{ value: 'Wh', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelFormatter={(value) => `Sampel ${value}`}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="energy_Wh_cum"
            name="Energi Kumulatif (Wh)"
            stroke={chartColors.energy}
            strokeWidth={3}
            fill="url(#energyGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
