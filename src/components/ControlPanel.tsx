import { motion, AnimatePresence } from 'framer-motion';

interface ControlPanelProps {
  isVisible: boolean;
  isPlaying: boolean;
  currentPage: number;
  totalPages: number;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToPage: (page: number) => void;
}

export function ControlPanel({
  isVisible,
  isPlaying,
  currentPage,
  totalPages,
  onTogglePlay,
  onNext,
  onPrev,
  onGoToPage,
}: ControlPanelProps) {
  const pageNames = [
    'Beranda',
    'Latar Masalah',
    'Prinsip Kerja',
    'Desain Turbin',
    'Visual 3D',
    'Hasil Pengujian',
    'Kelompok D',
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="glass-card px-4 py-3 flex items-center gap-4">
            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onGoToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  title={pageNames[index]}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-white/20" />

            {/* Control buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                title="Halaman sebelumnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={onTogglePlay}
                className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                title={isPlaying ? 'Jeda' : 'Putar'}
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                )}
              </button>

              <button
                onClick={onNext}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                title="Halaman berikutnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Current page indicator */}
            <div className="text-xs text-white/60">
              <span className="text-cyan-400 font-medium">{currentPage + 1}</span>
              <span> / {totalPages}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
