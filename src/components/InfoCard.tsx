import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function InfoCard({ title, description, icon, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 [&_svg]:w-6 [&_svg]:h-6">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <p className="text-white/70 leading-relaxed text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  features: string[];
  icon: ReactNode;
  color?: 'cyan' | 'purple' | 'green';
  delay?: number;
}

const featureColorClasses = {
  cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  green: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
};

const iconColorClasses = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  green: 'text-emerald-400',
};

export function FeatureCard({ title, features, icon, color = 'cyan', delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`
        rounded-xl p-6 
        bg-gradient-to-br ${featureColorClasses[color]}
        border
      `}
    >
      <div className={`${iconColorClasses[color]} mb-3 [&_svg]:w-6 [&_svg]:h-6`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="flex items-center gap-2 text-white/80 text-base">
            <svg className={`w-4 h-4 ${iconColorClasses[color]}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
