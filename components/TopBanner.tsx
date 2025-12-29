export default function TopBanner() {
  return (
    <div className="bg-black text-white py-2 overflow-hidden border-b-4 border-[#ffcc00]">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-mono uppercase tracking-widest">
            24/7 AI CALL HANDLING — NEVER MISS A LEAD — BOOK MORE APPOINTMENTS —
          </span>
        ))}
      </div>
    </div>
  );
}
