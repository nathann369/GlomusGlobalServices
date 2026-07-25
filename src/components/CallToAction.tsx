import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { IMAGES } from '../data/site';
import { Button, Reveal } from './ui/primitives';
export function CallToAction() {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-forest">
      {/* subtle texture image, low opacity */}
      <img
        src={IMAGES.farmland}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10" />
      
      <div className="absolute inset-0 bg-forest/85" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-36">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Let's Work Together
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-white lg:text-6xl">
            Let's Build Nigeria's Next Success Story Together
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Whether you're a government agency, NGO, institution or private
            organization, Glomus Global Services is ready to deliver projects
            that create measurable impact.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button as="a" href="#projects" variant="gold">
              Start a Project <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button as="a" href="#footer" variant="ghost-light">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>);

}