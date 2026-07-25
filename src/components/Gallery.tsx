import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon } from
'lucide-react';
import { GALLERY, GALLERY_CATEGORIES } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
export function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = useMemo(
    () =>
    active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active),
    [active]
  );
  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => i === null ? i : (i + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () =>
    setLightbox((i) =>
    i === null ? i : (i - 1 + items.length) % items.length
    ),
    [items.length]
  );
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);
  return (
    <section id="gallery" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Project Gallery</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            A visual record of work on the ground
          </h2>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {GALLERY_CATEGORIES.map((c) =>
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${active === c ? 'bg-forest text-white shadow-md shadow-forest/20' : 'border border-hairline bg-white text-charcoal/70 hover:border-forest hover:text-forest'}`}>
              
                {c}
              </button>
            )}
          </div>
        </Reveal>

        {/* Masonry */}
        <motion.div
          layout
          className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          
          <AnimatePresence mode="popLayout">
            {items.map((g, i) =>
            <motion.button
              layout
              key={g.image}
              initial={{
                opacity: 0,
                scale: 0.94
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.94
              }}
              transition={{
                duration: 0.35
              }}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-3xl ${g.span}`}>
              
                <img
                src={g.image}
                alt={g.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-medium text-white">
                    {g.caption}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <ExpandIcon className="h-4 w-4 text-white" />
                  </span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
          onClick={close}>
          
            <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            
              <XIcon className="h-6 w-6" />
            </button>
            <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:left-8">
            
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:right-8">
            
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <motion.figure
            key={items[lightbox].image}
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.3
            }}
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}>
            
              <img
              src={items[lightbox].image}
              alt={items[lightbox].caption}
              className="max-h-[80vh] w-auto rounded-2xl object-contain" />
            
              <figcaption className="mt-4 text-center text-sm text-white/80">
                {items[lightbox].caption} · {items[lightbox].category}
              </figcaption>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}