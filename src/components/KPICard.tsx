import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

interface KPICardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color?: 'cyan' | 'purple' | 'green' | 'yellow';
  decimals?: number;
  isActive?: boolean;
}

const colorClasses = {
  cyan: {
    bg: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  purple: {
    bg: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  green: {
    bg: 'from-emerald-500/20 to-emerald-600/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
  },
  yellow: {
    bg: 'from-yellow-500/20 to-yellow-600/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
  },
};

export function KPICard({
  title,
  value,
  unit,
  icon,
  color = 'cyan',
  decimals = 2,
  isActive = true,
}: KPICardProps) {
  const animatedValue = useCountUp({
    end: value,
    duration: 2000,
    decimals,
    shouldStart: isActive,
  });

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-xl p-4
        bg-gradient-to-br ${colors.bg}
        border ${colors.border}
        shadow-lg ${colors.glow}
      `}
    >
      {/* Background glow effect */}
      <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${colors.bg}`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className={`${colors.text} [&_svg]:w-4 [&_svg]:h-4`}>{icon}</div>
          <span className="text-xs font-medium text-white/70">{title}</span>
        </div>
        
        <div className="flex items-baseline gap-1.5">
          <span className={`text-2xl font-bold ${colors.text}`}>
            {animatedValue}
          </span>
          <span className="text-sm text-white/60">{unit}</span>
        </div>
      </div>
    </motion.div>
  );
}
