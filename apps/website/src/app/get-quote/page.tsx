import WhatsAppEnquiryForm from "@/components/forms/WhatsAppEnquiryForm";
import Image from "next/image";

export const metadata = {
  title: 'Get a Quote | Edwin Kibira Isuzu Sales',
  description: 'Request a custom quote for your new Isuzu vehicle. Fast response, flexible financing, and nationwide delivery in Kenya.',
};

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* ── HEADER ── */}
      <section className="bg-[#0d0d0d] pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d62b2b]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#d62b2b]" />
              <span className="text-[#d62b2b] font-black text-sm uppercase tracking-widest">Enquire Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
              Get a <span className="text-[#d62b2b]">Custom Quote</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Ready to upgrade your business or personal transport? Fill out our simple enquiry form below, and our sales team will connect with you instantly via WhatsApp with pricing, availability, and financing options.
            </p>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20">
            <Image 
              src="/vehicles/dmax-single.webp" 
              alt="Isuzu D-Max"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="py-16 px-4 sm:px-6 -mt-10 relative z-20">
        <WhatsAppEnquiryForm />
      </section>

    </main>
  );
}
