export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-[#fffef0] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-[#ff3d00]">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xl font-black uppercase tracking-tight text-black">
              DealerInbound
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6 font-mono text-sm uppercase">
            <a
              href="#features"
              className="border-b-2 border-transparent text-black transition-all hover:border-black"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="border-b-2 border-transparent text-black transition-all hover:border-black"
            >
              Process
            </a>
            <a
              href="#contact"
              className="border-b-2 border-transparent text-black transition-all hover:border-black"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="font-mono text-sm text-gray-600">
            &copy; {new Date().getFullYear()} DealerInbound
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="h-4 w-16 bg-[#ff3d00]"></div>
          <div className="h-4 w-16 bg-[#0057ff]"></div>
          <div className="h-4 w-16 bg-[#ffcc00]"></div>
          <div className="h-4 w-16 bg-black"></div>
        </div>
      </div>
    </footer>
  );
}
