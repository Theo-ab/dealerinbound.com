import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#fffef0] pb-12 lg:hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mobile heading */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black uppercase text-black">
            Book Your <span className="inline-block border-4 border-black bg-[#ff3d00] px-2 text-white">Demo</span>
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
