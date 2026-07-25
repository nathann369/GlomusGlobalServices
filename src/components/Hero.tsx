import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { IMAGES, SECTORS } from '../data/site';
import { Button } from './ui/primitives';
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      
      {/* Slow Ken-Burns background */}
      <motion.img
        src={IMAGES.heroRoad}
        alt="Aerial view of a newly constructed road delivered by Glomus across rural Nigeria"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{
          scale: 1.12
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 14,
          ease: 'easeOut'
        }} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/40 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="max-w-4xl">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Est. 2013 · Nationwide Delivery
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            Delivering Projects That Transform Communities Across Nigeria
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Since 2013, Glomus Global Services Limited has partnered with
            governments, institutions, development organizations and private
            sector clients to deliver infrastructure, technology, agriculture
            and community development projects that create lasting impact.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button as="a" href="#projects" variant="gold">
              Explore Our Projects <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button as="a" href="#contact" variant="ghost-light">
              Partner With Us
            </Button>
          </div>
        </motion.div>

        {/* Floating stat pills */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-12 flex flex-wrap items-center gap-3">
          
          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="font-display text-2xl font-bold text-gold">
              10+
            </span>
            <span className="text-sm font-medium text-white/85">
              Years of delivery
            </span>
          </div>
          {SECTORS.map((s) =>
          <span
            key={s}
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md">
            
              {s}
            </span>
          )}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="h-10 w-6 rounded-full border border-white/40">
          
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
        </motion.div>
      </div>
    </section>);

}