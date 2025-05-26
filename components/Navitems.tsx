'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' }
]

const Navitems = () => {

  const pathname = usePathname();  
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({ label, href }) => (
            <Link
                key={label}
                href={href}
                className={pathname === href ? 'text-primary font-semibold' : ''}
            >
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default Navitems