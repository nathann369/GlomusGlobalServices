import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
export function About() {
  return (
    <section id="about" className="w-full bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left — large headline */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-charcoal lg:text-6xl">
                Building Communities.
                <br />
                <span className="text-emerald">Empowering People.</span>
                <br />
                Delivering Sustainable Development.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/60">
                What began as a single-focus procurement company has grown into
                one of Nigeria's most versatile development and project delivery
                firms — trusted by governments, institutions and partners
                nationwide.
              </p>
            </Reveal>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-hairline lg:left-[19px]" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((t, i) =>
              <Reveal
                key={t.year}
                delay={i * 0.06}
                className="relative pl-12 lg:pl-16">
                
                  <motion.span
                  className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-forest lg:h-10 lg:w-10"
                  whileInView={{
                    scale: [0.6, 1]
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5
                  }}>
                  
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  </motion.span>
                  <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                    {t.year}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-charcoal">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-charcoal/60">
                    {t.copy}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}