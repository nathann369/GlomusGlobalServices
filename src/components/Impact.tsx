import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMPACT, ImpactBlock } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
function ImpactRow({ block, index }: {block: ImpactBlock;index: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const reversed = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      
      {/* Image with parallax */}
      <div className="relative overflow-hidden rounded-1xl shadow-xl shadow-forest/10">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <motion.img
            src={block.image}
            alt={block.title}
            style={{
              y
            }}
            className="h-[116%] w-full object-cover" />
          
        </div>
        <div className="absolute bottom-5 left-5 rounded-2xl border border-white/25 bg-white/15 px-5 py-3 backdrop-blur-md">
          <span className="block font-display text-2xl font-bold text-white">
            {block.stat}
          </span>
          <span className="text-xs font-medium text-white/85">
            {block.statLabel}
          </span>
        </div>
      </div>

      {/* Text */}
      <Reveal className={reversed ? 'lg:pr-6' : 'lg:pl-6'}>
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-charcoal lg:text-4xl">
          {block.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/60 lg:text-lg">
          {block.copy}
        </p>
      </Reveal>
    </div>);

}
export function Impact() {
  return (
    <section id="impact" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Impact</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            A decade of measurable outcomes, sector by sector
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {IMPACT.map((b, i) =>
          <ImpactRow key={b.eyebrow} block={b} index={i} />
          )}
        </div>
      </div>
    </section>);

}