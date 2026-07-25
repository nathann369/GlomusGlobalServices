import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
// Reusable premium button ---------------------------------------------------
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost-light';
  as?: 'button' | 'a';
  href?: string;
}
export function Button({
  variant = 'primary',
  className = '',
  children,
  as = 'button',
  href,
  ...rest
}: ButtonProps) {
  const base =
  'inline-flex items-center justify-center gap-2  px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold';
  const variants: Record<string, string> = {
    primary:
    'bg-forest text-white shadow-lg shadow-forest/20 hover:bg-emerald hover:shadow-xl hover:shadow-emerald/25 hover:-translate-y-0.5',
    gold: 'bg-gold text-white shadow-lg shadow-gold/25 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5',
    outline:
    'border border-hairline bg-white text-charcoal hover:border-forest hover:text-forest hover:-translate-y-0.5 shadow-sm',
    'ghost-light':
    'border border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5'
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (as === 'a') {
    return (
      <a href={href} className={cls}>
        {children}
      </a>);

  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>);

}
// Animated count-up number --------------------------------------------------
export function Counter({
  value,
  suffix = '',
  className = ''




}: {value: number;suffix?: string;className?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    duration: 1600,
    bounce: 0
  });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);
  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v)));
  }, [spring]);
  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>);

}
// Fade / rise on scroll wrapper --------------------------------------------
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = ''





}: {children: React.ReactNode;delay?: number;y?: number;className?: string;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-60px'
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </motion.div>);

}
// Section eyebrow label -----------------------------------------------------
export function Eyebrow({
  children,
  light = false



}: {children: React.ReactNode;light?: boolean;}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${light ? 'bg-gold' : 'bg-gold'}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-gold' : 'text-emerald'}`}>
        
        {children}
      </span>
    </div>);

}