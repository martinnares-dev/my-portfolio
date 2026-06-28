import { NavLink } from "react-router-dom";
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
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b border-blue-400 pb-1"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Hire Me
        </a>

      </nav>
    </header>
  );
}

export default Navbar;