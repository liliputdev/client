
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Menu,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    name: "Premium Haircut",
    category: "HAIR STYLING",
    price: "৳550",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85",
  },
  {
    name: "Beard Grooming",
    category: "GROOMING",
    price: "৳350",
    duration: "30 min",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85",
  },
  {
    name: "Hair Treatment",
    category: "HAIR CARE",
    price: "৳900",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=85",
  },
];

const features = [
  "Professional stylists",
  "Premium salon products",
  "Easy online booking",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#193B32]">
      {/* Navigation */}
      <header className="relative z-20 border-b border-[#193B32]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#193B32] text-white">
              <Scissors size={21} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Salon<span className="text-[#B78A55]">Book.</span>
              </h1>
              <p className="text-[9px] tracking-[0.25em] text-[#193B32]/60">
                STYLE YOUR MOMENT
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-[#B78A55]">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#B78A55]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#B78A55]">
              About Us
            </a>
            <a href="#contact" className="transition hover:text-[#B78A55]">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href="/signin"
              className="text-sm font-semibold transition hover:text-[#B78A55]"
            >
              Sign In
            </a>
            <a
              href="/services"
              className="rounded-full bg-[#193B32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#28594B]"
            >
              Book Appointment
              <ArrowUpRight className="ml-2 inline" size={16} />
            </a>
          </div>

          <button
            aria-label="Open navigation"
            className="rounded-lg p-2 md:hidden"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B78A55]/30 bg-[#B78A55]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#8C673E]">
              <Sparkles size={14} />
              YOUR STYLE, OUR PASSION
            </div>

            <h2 className="max-w-xl text-5xl leading-[1.12] font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Look good.
              <br />
              Feel <span className="font-serif text-[#B78A55] italic">great.</span>
              <br />
              Be yourself.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-[#193B32]/65">
              Discover a better salon experience. Expert stylists,
              premium treatments, and effortless appointments —
              all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/services"
                className="rounded-full bg-[#193B32] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#28594B]"
              >
                Explore Services
                <ArrowRight className="ml-3 inline" size={17} />
              </a>
              <a
                href="#about"
                className="rounded-full border border-[#193B32]/20 px-7 py-4 text-sm font-semibold transition hover:bg-[#193B32] hover:text-white"
              >
                Discover More
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-[#193B32]/10 pt-7">
              <div>
                <p className="text-3xl font-semibold">4.9<span className="text-[#B78A55]">/5</span></p>
                <div className="mt-1 flex gap-1 text-[#B78A55]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-[#193B32]/55">Customer rating</p>
              </div>
              <div className="border-l border-[#193B32]/10 pl-6">
                <p className="text-3xl font-semibold">100<span className="text-[#B78A55]">%</span></p>
                <p className="mt-2 text-xs text-[#193B32]/55">Style satisfaction</p>
              </div>
              <div className="border-l border-[#193B32]/10 pl-6">
                <p className="text-3xl font-semibold">Easy</p>
                <p className="mt-2 text-xs text-[#193B32]/55">Online booking</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#D8C3A3]/40 blur-3xl" />
            <div
              className="relative h-[430px] overflow-hidden rounded-t-[48%] rounded-b-[12px] bg-cover bg-center shadow-2xl md:h-[570px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=90')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#142E26]/50 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-[#B78A55]">
                      YOUR NEXT LOOK
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      Starts with a booking.
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#193B32] text-white">
                    <CalendarDays size={22} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-[#193B32] px-6 py-4 text-white shadow-xl sm:block">
              <p className="text-xs text-white/60">THE SALON EXPERIENCE</p>
              <p className="mt-1 text-lg font-semibold">Made for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#193B32] py-7 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-5 px-6 lg:justify-between lg:px-10">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm">
              <Check size={17} className="text-[#D6B58B]" />
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#B78A55]">
              WHAT WE OFFER
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Services made
              <br />
              <span className="font-serif text-[#B78A55] italic">for your style.</span>
            </h2>
          </div>
          <a
            href="/services"
            className="text-sm font-semibold underline decoration-[#B78A55] underline-offset-8 transition hover:text-[#B78A55]"
          >
            View all services <ArrowUpRight className="ml-1 inline" size={16} />
          </a>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group overflow-hidden rounded-2xl border border-[#193B32]/10 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#B78A55]">
                  {service.category}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <ArrowUpRight size={19} className="shrink-0 text-[#B78A55]" />
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-[#193B32]/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-[#193B32]/55">
                    <Clock3 size={14} />
                    {service.duration}
                  </div>
                  <p className="text-lg font-bold">{service.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#EDEBE2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center lg:px-10">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#B78A55]">
              THE SALONBOOK DIFFERENCE
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold md:text-5xl">
              Great style.
              <br />
              <span className="font-serif text-[#B78A55] italic">
                Zero hassle.
              </span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#193B32]/65">
              Your time matters. SalonBook makes it easy to discover
              services, choose your preferred appointment, and manage
              your bookings from one convenient place.
            </p>
            <a
              href="/services"
              className="mt-8 inline-flex items-center rounded-full bg-[#193B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#28594B]"
            >
              Book Your Visit <ArrowRight className="ml-3" size={17} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#193B32] p-7 text-white">
              <ShieldCheck size={30} className="text-[#D6B58B]" />
              <h3 className="mt-7 text-lg font-semibold">Trusted Service</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Professional care at every visit.
              </p>
            </div>
            <div className="mt-12 rounded-2xl bg-white p-7">
              <CalendarDays size={30} className="text-[#B78A55]" />
              <h3 className="mt-7 text-lg font-semibold">Easy Booking</h3>
              <p className="mt-2 text-sm leading-6 text-[#193B32]/60">
                Appointments on your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#193B32] px-6 py-20 text-center text-white">
        <p className="text-xs font-bold tracking-[0.25em] text-[#D6B58B]">
          YOUR STYLE JOURNEY STARTS HERE
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold md:text-5xl">
          Ready for a fresh new look?
        </h2>
        <p className="mt-5 text-sm leading-7 text-white/60">
          Choose your service. Pick your time. Leave the rest to us.
        </p>
        <a
          href="/services"
          className="mt-8 inline-flex items-center rounded-full bg-[#D6B58B] px-8 py-4 text-sm font-bold text-[#193B32] transition hover:bg-white"
        >
          Book an Appointment <ArrowUpRight className="ml-2" size={17} />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#122B24] px-6 py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm md:flex-row md:items-center">
          <p className="font-semibold tracking-wide text-white">
            Salon<span className="text-[#D6B58B]">Book.</span>
          </p>
          <p>© {new Date().getFullYear()} SalonBook. All rights reserved.</p>
          <p>Designed for a better salon experience.</p>
        </div>
      </footer>
    </main>
  );
}
