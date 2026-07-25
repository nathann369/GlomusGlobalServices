import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { TESTIMONIALS } from '../data/site';
import { Eyebrow, Reveal } from './ui/primitives';
export function Testimonials() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-charcoal lg:text-5xl">
            Trusted by the partners we serve
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) =>
          <Reveal key={t.name} delay={i % 2 * 0.08}>
              <figure className="flex h-full flex-col rounded-4xl border border-hairline bg-soft p-8 lg:p-10">
                <QuoteIcon className="h-9 w-9 text-gold" strokeWidth={1.5} />
                <blockquote className="mt-5 flex-1 font-display text-lg font-medium leading-relaxed text-charcoal lg:text-xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-hairline pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-lg font-bold text-white">
                    {t.name.split('.').pop()?.trim().charAt(0) ??
                  t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-charcoal">
                      {t.name}
                    </span>
                    <span className="block text-sm text-charcoal/55">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}