function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Martin Nares. All rights reserved.</p>
      <p className="mt-2">Built with React • TypeScript • Tailwind CSS</p>
    </footer>
  );
}

export default Footer;