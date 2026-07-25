import React from 'react';
import {
  CalendarClockIcon,
  LayersIcon,
  MapPinnedIcon,
  ShieldCheckIcon,
  LeafIcon,
  LandmarkIcon,
  BoxIcon } from
'lucide-react';
import { WHY } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
const ICONS: Record<string, BoxIcon> = {
  CalendarClock: CalendarClockIcon,
  Layers: LayersIcon,
  MapPinned: MapPinnedIcon,
  ShieldCheck: ShieldCheckIcon,
  Leaf: LeafIcon,
  Landmark: LandmarkIcon
};
export function WhyGlomus() {
  return (
    <section className="w-full bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why Glomus</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            The reasons partners trust us with what matters
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = ICONS[w.icon];
            return (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="group flex h-full items-start gap-5 rounded-3xl border border-hairline bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                      {w.copy}
                    </p>
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}