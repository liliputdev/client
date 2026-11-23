import Link from "next/link";
import {
  Search,
  Star,
  ArrowRight,
  CalendarDays,
  Scissors,
} from "lucide-react";

const featuredServices = [
  {
    name: "Hair Styling",
    location: "Professional hair styling",
    rating: "4.9",
    reviews: "120",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=85",
  },
  {
    name: "Hair Coloring",
    location: "Creative hair color services",
    rating: "4.8",
    reviews: "98",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=85",
  },
  {
    name: "Facial Treatment",
    location: "Relaxing skincare treatments",
    rating: "4.9",
    reviews: "86",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=85",
  },
  {
    name: "Manicure & Pedicure",
    location: "Complete nail care",
    rating: "4.7",
    reviews: "75",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=85",
  },
];

const trendingServices = [
  {
    name: "Bridal Makeup",
    location: "Makeup & Beauty",
    rating: "5.0",
    reviews: "145",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=85",
  },
  {
    name: "Hair Spa",
    location: "Hair Treatment",
    rating: "4.9",
    reviews: "112",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=85",
  },
  {
    name: "Skin Care",
    location: "Facial & Skin",
    rating: "4.8",
    reviews: "92",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=85",
  },
  {
    name: "Nail Art",
    location: "Nail Studio",
    rating: "4.9",
    reviews: "88",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=700&q=85",
  },
];

const reviews = [
  {
    title: "Amazing experience!",
    comment:
      "Booking was simple, and I found a great salon near me. The service was excellent.",
    name: "Sarah Ahmed",
    location: "Dhaka, Bangladesh",
    rating: 5,
    avatar: "S",
  },
  {
    title: "Highly recommended",
    comment:
      "The booking process was smooth. I really liked how easy it was to explore services.",
    name: "Nusrat Jahan",
    location: "Mirpur, Dhaka",
    rating: 5,
    avatar: "N",
  },
  {
    title: "Great platform",
    comment:
      "I could compare different services and choose the one that suited me best.",
    name: "Tanvir Hasan",
    location: "Uttara, Dhaka",
    rating: 5,
    avatar: "T",
  },
  {
    title: "Very convenient",
    comment:
      "A clean and easy booking experience. I'll definitely use SalonBook again.",
    name: "Maliha Rahman",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    avatar: "M",
  },
];

type Service = (typeof featuredServices)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href="/services"
      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <div
          role="img"
          aria-label={service.name}
          className="h-48 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${service.image}")` }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-800">
          {service.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{service.location}</p>

        <div className="mt-3 flex items-center gap-1 text-sm">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-slate-700">
            {service.rating}
          </span>
          <span className="text-slate-400">
            ({service.reviews} reviews)
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HEADER AND HERO */}
      <section id="home">
        <header className="relative z-10 border-b border-slate-100 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-[#1765D1]"
            >
              SalonBook
            </Link>

            <nav className="hidden items-center gap-9 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="text-[#1765D1]">
                Home
              </Link>
              <Link
                href="/services"
                className="transition hover:text-[#1765D1]"
              >
                Explore Services
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/signin"
                className="hidden rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-[#1765D1] sm:block"
              >
                Sign In
              </Link>

              <Link
                href="/signin"
                className="rounded-lg bg-[#EAF2FF] px-5 py-2.5 text-sm font-semibold text-[#1765D1] transition hover:bg-[#dceaff]"
              >
                Admin
              </Link>
            </div>
          </div>
        </header>

        <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#edf3ff] to-[#1765D1] px-5 pb-24 pt-20 text-center sm:pt-24 sm:pb-28">
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1765D1]">
              Welcome to SalonBook
            </p>

            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Book Your Service
              <br />
              <span className="text-[#1765D1]">Today</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Discover trusted salons and professional beauty services.
              Explore your options and book your next appointment with ease.
            </p>

            <form
              action="/services"
              method="GET"
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-blue-950/10 sm:flex-row sm:items-center sm:rounded-full sm:pl-6"
            >
              <div className="flex flex-1 items-center gap-3 px-2">
                <Search className="shrink-0 text-[#1765D1]" size={21} />

                <input
                  type="search"
                  name="search"
                  placeholder="Search Services"
                  className="h-12 w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#1765D1] px-9 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1559bd]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED SERVICES */}
      <section id="featured" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#1765D1]">
                Discover
              </p>

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Featured Salon Services
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Explore popular services from professional salons.
              </p>
            </div>

            <Link
              href="/services"
              aria-label="Explore all featured services"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1765D1] transition hover:bg-[#1765D1] hover:text-white sm:flex"
            >
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TRENDING SERVICES */}
      <section id="trending" className="bg-[#F5F8FF] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#1765D1]">
                Popular choices
              </p>

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Trending Services
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Find the beauty services everyone is talking about.
              </p>
            </div>

            <Link
              href="/services"
              aria-label="Explore all trending services"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-white text-[#1765D1] shadow-sm transition hover:bg-[#1765D1] hover:text-white sm:flex"
            >
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOMER REVIEWS */}
      <section id="reviews" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#1765D1]">
              Testimonials
            </p>

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What Our Customers Say
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Real experiences from people who use SalonBook.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl bg-[#F5F7FA] p-6 transition hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800">
                  {review.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-500">
                  {review.comment}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1765D1] font-semibold text-white">
                    {review.avatar}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {review.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      {review.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION AND FOOTER */}
      <section id="get-started">
        <div className="overflow-hidden bg-gradient-to-r from-[#1559BD] to-[#1765D1] px-5 py-16 text-white lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Your beauty journey starts here
              </p>

              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                50k+ Professionals Are Using SalonBook to Grow!
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100">
                Discover professional salon services, connect with trusted
                providers, and manage your appointments in one convenient
                place.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#1765D1] transition hover:bg-blue-50"
              >
                <CalendarDays size={18} />
                Book Now
                <ArrowRight size={17} />
              </Link>

              <p className="mt-5 text-xs text-blue-100">
                Your privacy and booking information are important to us.
              </p>
            </div>

            <div className="flex h-52 w-52 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl border-2 border-white/70 bg-white/10">
                <CalendarDays size={62} strokeWidth={1.2} />

                <div className="mt-3 flex items-center gap-2">
                  <Scissors size={22} />
                  <span className="text-sm font-semibold tracking-wider">
                    SALONBOOK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-[#F5F7FA] px-5 pb-10 pt-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <Link
                href="/"
                className="text-5xl font-extrabold tracking-tight text-[#172B4D] sm:text-7xl lg:text-8xl"
              >
                SalonBook
              </Link>

              <p className="mt-3 text-sm text-slate-500">
                Your style, your choice, your appointment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 border-t border-slate-200 py-10 md:grid-cols-4">
              <div>
                <h3 className="mb-5 text-sm font-bold text-slate-900">
                  About SalonBook
                </h3>

                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <Link href="/" className="hover:text-[#1765D1]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-[#1765D1]">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-[#1765D1]">
                      Explore Salons
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-bold text-slate-900">
                  For Businesses
                </h3>

                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <Link href="/signin" className="hover:text-[#1765D1]">
                      Business Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className="hover:text-[#1765D1]">
                      Join SalonBook
                    </Link>
                  </li>
                  <li>
                    <Link href="/signin" className="hover:text-[#1765D1]">
                      Manage Account
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-bold text-slate-900">
                  Legal
                </h3>

                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <Link href="/privacy" className="hover:text-[#1765D1]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-[#1765D1]">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="hover:text-[#1765D1]">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-bold text-slate-900">
                  Find Us On Social
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-[#1765D1] transition hover:bg-[#1765D1] hover:text-white"
                  >
                    f
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-[#1765D1] transition hover:bg-[#1765D1] hover:text-white"
                  >
                    IG
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} SalonBook. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
