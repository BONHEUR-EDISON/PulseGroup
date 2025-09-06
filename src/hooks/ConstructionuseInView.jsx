'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport using IntersectionObserver
 * @param {Object} options
 * @param {number} [options.threshold=0.3] - Intersection threshold
 * @param {Element|null} [options.root=null] - Root element for intersection
 * @param {string} [options.rootMargin='0px'] - Margin around root
 * @param {boolean} [options.triggerOnce=true] - Only trigger once
 * @param {boolean} [options.disabled=false] - Disable the observer
 * @param {boolean} [options.forceInView=false] - Force inView to true (useful for testing)
 * @returns {{ref: React.RefObject, inView: boolean}}
 */
export function useInView({
  threshold = 0.3,
  root = null,
  rootMargin = '0px',
  triggerOnce = true,
  disabled = false,
  forceInView = false,
} = {}) {
  const [inView, setInView] = useState(forceInView);
  const ref = useRef(null);

  useEffect(() => {
    if (disabled || forceInView) return;

    if (!ref.current || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // fallback: consider element in view if SSR or no IntersectionObserver support
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, disabled, forceInView]);

  return { ref, inView };
}
