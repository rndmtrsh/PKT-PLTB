// Configuration for the PLTB Exhibition kiosk mode
export const config = {
  // Page rotation settings
  rotation: {
    // Duration per page in seconds (default: 25 seconds)
    durationSeconds: 25,
    // Auto-resume after inactivity in seconds (default: 60 seconds)
    autoResumeSeconds: 60,
    // Control panel auto-hide delay in seconds
    controlHideSeconds: 3,
  },
  
  // Data settings
  data: {
    // Sampling interval in minutes (for energy calculation)
    samplingIntervalMinutes: 5,
  },
  
  // Animation settings
  animation: {
    // Transition duration in seconds
    transitionDuration: 0.8,
    // Micro-interaction duration
    microDuration: 0.3,
  },
  
  // 3D Viewer settings
  viewer3D: {
    // STL file path (relative to public folder)
    stlPath: '/models/turbin.stl',
    // Camera settings - positioned for optimal initial view
    cameraPosition: [4, 4, 4] as [number, number, number],
    // Orbit controls limits - allow zoom from very close to container size
    minDistance: 1,
    maxDistance: 20,
    // Auto-rotate speed
    autoRotateSpeed: 2,
  },
  
  // Project information
  project: {
    title: 'Optimalisasi Efisiensi Desain Turbin Angin Spiral Archimedes yang Hening dan Ramah Lingkungan untuk Pemanfaatan Angin Berkecepatan Rendah pada Aplikasi Skala Perkotaan',
    shortTitle: 'PLTB Archimedes Spiral',
    group: 'Kelompok 5',
    class: 'Kelas D',
    supervisor: 'Dr. Ratnasari Nur Rohmah S.T., M.T.',
    members: [
      { name: 'Pandya Kyv Firjatullah', nim: 'D400220090' },
      { name: 'Denisa Anggi Faradila', nim: 'D400220116' },
      { name: 'Muhamad Idhan Arkhan', nim: 'D400220135' },
      { name: 'Tegar Maulana Akmal', nim: 'D400220150' },
    ],
  },
};

export type Config = typeof config;
