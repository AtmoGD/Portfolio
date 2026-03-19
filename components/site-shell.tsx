import Link from "next/link";
import type { Route } from "next";
import { profile } from "@/src/content/site";

const navItems: Array<{ href: Route; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="container nav-row">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              ◉
            </span>
            <span>{profile.name}</span>
          </Link>

          <nav aria-label="Main navigation" className="top-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container page-content">{children}</main>
    </div>
  );
}
