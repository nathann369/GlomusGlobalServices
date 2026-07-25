import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { Capabilities } from './components/Capabilities';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WhyGlomus } from './components/WhyGlomus';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-charcoal">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Impact />
        <Capabilities />
        <FeaturedProjects />
        <WhyGlomus />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>);

}