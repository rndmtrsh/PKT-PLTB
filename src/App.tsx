import { useAutoRotation } from './hooks';
import { PageTransition, ControlPanel, BackgroundAnimation } from './components';
import {
  HomePage,
  ProblemPage,
  SystemPage,
  DesignPage,
  Viewer3DPage,
  AnalyticsPage,
  CreditsPage,
} from './pages';

function App() {
  const {
    currentPage,
    isPlaying,
    showControls,
    goToPage,
    nextPage,
    prevPage,
    togglePlay,
  } = useAutoRotation({
    totalPages: 7,
  });

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <HomePage />;
      case 1:
        return <ProblemPage />;
      case 2:
        return <SystemPage />;
      case 3:
        return <DesignPage />;
      case 4:
        return <Viewer3DPage isActive={true} />;
      case 5:
        return <AnalyticsPage isActive={true} />;
      case 6:
        return <CreditsPage />;
      default:
        return <HomePage />;
    }
  };

  const pageNames = [
    'Beranda',
    'Latar Masalah',
    'Prinsip Kerja',
    'Desain Turbin',
    'Visual 3D',
    'Hasil Pengujian',
    'Kredit Tim',
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Page Content */}
      <main className="relative z-10">
        <PageTransition pageKey={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>

      {/* Control Panel */}
      <ControlPanel
        isVisible={showControls}
        isPlaying={isPlaying}
        currentPage={currentPage}
        totalPages={7}
        onTogglePlay={togglePlay}
        onNext={nextPage}
        onPrev={prevPage}
        onGoToPage={goToPage}
      />

      {/* Page indicator (always visible) */}
      <div className="fixed top-6 right-6 z-50 glass-card px-4 py-2 text-sm">
        <span className="text-cyan-400 font-medium">{pageNames[currentPage]}</span>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-6 right-6 z-40 glass-card px-3 py-2 text-xs text-white/50 hidden md:flex items-center gap-3">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">→</kbd>
          <span>Navigate</span>
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">Space</kbd>
          <span>Play/Pause</span>
        </span>
      </div>
    </div>
  );
}

export default App;
