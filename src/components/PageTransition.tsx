import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string | number;
}

export function PageTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          x: 0, 
          scale: 1,
          transition: {
            duration: config.animation.transitionDuration,
            ease: 'easeOut',
          },
        }}
        exit={{ 
          opacity: 0, 
          x: -100, 
          scale: 0.95,
          transition: {
            duration: config.animation.transitionDuration * 0.6,
            ease: 'easeIn',
          },
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
