import { useState, useEffect, useCallback, useRef } from 'react';
import { config } from '../config';

interface UseAutoRotationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function useAutoRotation({ totalPages, onPageChange }: UseAutoRotationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const lastInteractionRef = useRef<number>(Date.now());
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { durationSeconds, autoResumeSeconds, controlHideSeconds } = config.rotation;

  const handleInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
    setShowControls(true);

    // Clear existing timeouts
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
    }

    // Hide controls after delay
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, controlHideSeconds * 1000);

    // Auto-resume playback after inactivity
    if (!isPlaying) {
      autoResumeTimeoutRef.current = setTimeout(() => {
        setIsPlaying(true);
      }, autoResumeSeconds * 1000);
    }
  }, [isPlaying, controlHideSeconds, autoResumeSeconds]);

  const goToPage = useCallback((page: number) => {
    const newPage = ((page % totalPages) + totalPages) % totalPages;
    setCurrentPage(newPage);
    onPageChange?.(newPage);
    handleInteraction();
  }, [totalPages, onPageChange, handleInteraction]);

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
    handleInteraction();
  }, [handleInteraction]);

  // Auto-rotation timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentPage(prev => {
        const next = (prev + 1) % totalPages;
        onPageChange?.(next);
        return next;
      });
    }, durationSeconds * 1000);

    return () => clearInterval(timer);
  }, [isPlaying, totalPages, durationSeconds, onPageChange]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      if (autoResumeTimeoutRef.current) {
        clearTimeout(autoResumeTimeoutRef.current);
      }
    };
  }, []);

  // Handle global mouse/touch events for showing controls
  useEffect(() => {
    const handleGlobalInteraction = () => {
      handleInteraction();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow keys for navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPage();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Spacebar for play/pause
        e.preventDefault();
        togglePlay();
      } else {
        // Any other key shows controls
        handleInteraction();
      }
    };

    window.addEventListener('mousemove', handleGlobalInteraction);
    window.addEventListener('touchstart', handleGlobalInteraction);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleInteraction, nextPage, prevPage, togglePlay]);

  return {
    currentPage,
    isPlaying,
    showControls,
    goToPage,
    nextPage,
    prevPage,
    togglePlay,
    handleInteraction,
  };
}
