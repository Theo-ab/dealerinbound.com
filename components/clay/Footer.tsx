export default function ClayFooter() {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.3),inset_3px_3px_6px_rgba(0,0,0,0.1),4px_4px_12px_rgba(0,0,0,0.15)]">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">DealerInbound</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="transition-colors hover:text-pink-500">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-pink-500">
              How It Works
            </a>
            <a href="#contact" className="transition-colors hover:text-pink-500">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DealerInbound. All rights reserved.
          </div>
        </div>

        {/* Decorative clay spheres */}
        <div className="mt-12 flex justify-center gap-4">
          {["from-orange-300 to-orange-400", "from-pink-300 to-pink-400", "from-purple-300 to-purple-400", "from-blue-300 to-blue-400"].map((color, i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-full bg-gradient-to-br ${color} shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.6),inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_6px_rgba(0,0,0,0.15)]`}
            ></div>
          ))}
        </div>
      </div>
    </footer>
  );
}
