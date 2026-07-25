import React from 'react';
import { MapPinIcon, TrendingUpIcon, ArrowUpRightIcon } from 'lucide-react';
import { PROJECTS } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
export function FeaturedProjects() {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Featured Projects</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            Proof of execution, delivered across Nigeria
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) =>
          <Reveal key={p.title} delay={i % 2 * 0.08}>
              <article className="group h-full overflow-hidden rounded-4xl border border-hairline bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-60" />
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                    {p.category}
                  </span>
                </div>
                <div className="p-7 lg:p-8">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-emerald">
                    <MapPinIcon className="h-4 w-4" />
                    {p.location}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                    {p.description}
                  </p>

                  <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-soft p-4">
                    <TrendingUpIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/40">
                        Impact
                      </span>
                      <span className="text-sm font-medium text-charcoal">
                        {p.impact}
                      </span>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-emerald">
                    View Project
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}