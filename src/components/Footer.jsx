import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-insp-300 dark:hover:text-white/70 "
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/committee">Centenary Committee</NavLink>
                <NavLink href="/programs">Programs</NavLink>
                <NavLink href="/gallery">Gallery</NavLink>
                <NavLink href="/letters">Letters</NavLink>
                <NavLink href="/media">Media</NavLink>
                <NavLink href="/contactus">Contact Us</NavLink>
              </div>
              {/* <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p> */}
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
