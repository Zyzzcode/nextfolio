'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Portfolio</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
          {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
            >
        {link.label}
      </Link>
    );
  })}
        </div>
      </div>
    </nav>
  );
}
