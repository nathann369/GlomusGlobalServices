import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  ArrowRightIcon } from
'lucide-react';
import { Button } from './ui/primitives';
const COLUMNS = [
{
  title: 'Company',
  links: ['About', 'Projects', 'Services', 'Gallery', 'News', 'Contact']
},
{
  title: 'Capabilities',
  links: [
  'Infrastructure',
  'Technology',
  'Agriculture',
  'Community',
  'Procurement']

}];

const SOCIALS = [
{
  Icon: LinkedinIcon,
  label: 'LinkedIn'
},
{
  Icon: TwitterIcon,
  label: 'Twitter'
},
{
  Icon: FacebookIcon,
  label: 'Facebook'
},
{
  Icon: InstagramIcon,
  label: 'Instagram'
}];

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <footer id="footer" className="w-full bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + address */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald font-display text-lg font-bold">
                G
              </span>
              <span>
                <span className="block font-display text-base font-semibold">
                  Glomus
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                  Global Services
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              A multidisciplinary development and project delivery company
              creating lasting impact across Nigeria since 2013.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Plot 24, Central Business District, Abuja, Nigeria
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                +234 800 000 0000
              </p>
              <p className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-gold" />
                info@glomusglobal.com
              </p>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) =>
          <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) =>
              <li key={l}>
                    <a
                  href="#top"
                  className="text-sm text-white/60 transition-colors hover:text-gold">
                  
                      {l}
                    </a>
                  </li>
              )}
              </ul>
            </div>
          )}

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-white/60">
              Project updates and impact reports, straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mt-5">
              
              <div className="flex items-center overflow-hidden rounded-full border border-white/20 bg-white/5 focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" />
                
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-white transition-transform hover:scale-105 mr-1">
                  
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
              {sent &&
              <p className="mt-3 text-xs text-emerald">
                  Thank you — you're subscribed.
                </p>
              }
            </form>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ Icon, label }) =>
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Glomus Global Services Limited. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-white/80">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-white/80">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}