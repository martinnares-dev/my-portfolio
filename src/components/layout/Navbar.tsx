import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Logo />

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b border-blue-400 pb-1"
                    : "text-gray-300 hover:text-white"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 border-t border-white/10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;