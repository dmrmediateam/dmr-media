'use client';

import { motion } from 'framer-motion';

const luxuryEase = [0.25, 0.1, 0.25, 1] as const; // Elegant ease-out (cubic-bezier)

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function AnimateSection({
  children,
  className = '',
  delay = 0,
  y = 24,
  duration = 0.7,
}: AnimateSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  itemDelay?: number;
}

export function AnimateStagger({
  children,
  className = '',
  staggerDelay = 0.15,
  itemDelay = 0.05,
}: AnimateStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: itemDelay,
            delayChildren: staggerDelay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateItemProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimateItem({ children, className = '' }: AnimateItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: luxuryEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
