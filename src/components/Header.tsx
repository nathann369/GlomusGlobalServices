import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { NAV_LINKS } from '../data/site';
import { Button } from './ui/primitives';
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-hairline shadow-sm' : 'bg-transparent'}`}>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-white transition-colors ${scrolled ? 'bg-forest' : 'bg-white/15 backdrop-blur-md ring-1 ring-white/30'}`}>
            
            G
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-base font-semibold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              
              Glomus
            </span>
            <span
              className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${scrolled ? 'text-emerald' : 'text-white/70'}`}>
              
              Global Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-charcoal hover:text-forest' : 'text-white/90 hover:text-white'}`}>
            
              {l.label}
            </a>
          )}
        </nav>

        <div className="hidden lg:block">
          <Button
            as="a"
            href="#contact"
            variant={scrolled ? 'primary' : 'ghost-light'}
            className="px-6 py-3">
            
            Partner With Us
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`lg:hidden ${scrolled ? 'text-charcoal' : 'text-white'}`}>
          
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      <AnimatePresence>
        {open &&
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
          className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}>
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300
            }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-6"
            onClick={(e) => e.stopPropagation()}>
            
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-forest">
                  Glomus
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <XIcon className="h-6 w-6 text-charcoal" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-2">
                {NAV_LINKS.map((l) =>
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-charcoal transition-colors hover:bg-soft hover:text-forest">
                
                    {l.label}
                  </a>
              )}
              </nav>
              <div className="mt-8">
                <Button as="a" href="#contact" className="w-full">
                  Partner With Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}