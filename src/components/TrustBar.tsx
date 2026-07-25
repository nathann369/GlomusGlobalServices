import React from 'react';
import { TRUST_STATS } from '../data/site';
import { Counter, Reveal } from './ui/primitives';
export function TrustBar() {
  return (
    <section className="w-full border-b border-hairline bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {TRUST_STATS.map((s, i) =>
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="flex flex-col items-center border-hairline text-center lg:border-r lg:last:border-r-0">
            
              <Counter
              value={s.value}
              suffix={s.suffix}
              className="font-display text-5xl font-bold text-forest lg:text-6xl" />
            
              <span className="mt-3 max-w-[10rem] text-sm font-medium leading-snug text-charcoal/60">
                {s.label}
              </span>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}