'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'navbar navbar-expand-lg bg-secondary text-uppercase fixed-top',
        isScrolled && 'navbar-shrink'
      )}
      id="mainNav"
    >
      <div className="container">
        <Link
          href="#page-top"
          className="navbar-brand"
          scroll={false}
        >
          Melvin Sureshbabu
        </Link>

        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <i className="fas fa-bars" aria-hidden="true" />
        </button>

        <div className={cn('collapse navbar-collapse', isMenuOpen && 'show')}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item mx-0 mx-lg-1">
                <Link
                  href={item.href}
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  scroll={false}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}