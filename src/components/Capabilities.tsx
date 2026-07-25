import React from 'react';
import {
  HardHatIcon,
  CpuIcon,
  SproutIcon,
  UsersIcon,
  ClipboardCheckIcon,
  CheckIcon,
  BoxIcon } from
'lucide-react';
import { CAPABILITIES } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
const ICONS: Record<string, BoxIcon> = {
  HardHat: HardHatIcon,
  Cpu: CpuIcon,
  Sprout: SproutIcon,
  Users: UsersIcon,
  ClipboardCheck: ClipboardCheckIcon
};
export function Capabilities() {
  return (
    <section id="capabilities" className="w-full bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Capabilities</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            One integrated partner across every discipline
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/60">
            From concept to commissioning, we bring the full spectrum of
            capabilities required to deliver complex, multi-sector projects.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            const wide = i === CAPABILITIES.length - 1;
            return (
              <Reveal
                key={c.title}
                delay={i * 0.06}
                className={wide ? 'md:col-span-2 lg:col-span-1' : ''}>
                
                <div className="group h-full rounded-1xl border border-hairline bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white transition-colors duration-300 group-hover:bg-emerald">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                    {c.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {c.items.map((item) =>
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-charcoal/70">
                      
                        <CheckIcon
                        className="h-4 w-4 shrink-0 text-gold"
                        strokeWidth={2.5} />
                      
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}