import { motion } from "framer-motion";
import heroImg from "../assets/images/Hero.jpg";

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden  text-white">
      {/* Hero background (slightly blurred) */}
      <img
        src={heroImg}
        alt="Hero background"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-90 filter blur-sm"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-4 text-center"
      >
        <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
          Skyline Builders
        </h1>
        <p className="mx-auto max-w-xl text-lg md:text-2xl">
          Quality residential & commercial construction throughout British Columbia
        </p>
        <p className="mt-6 text-yellow-300 text-lg tracking-wide">
          Full site launching 1 August 2025
        </p>

        {/* Contact buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <a
            href="tel:+16045551234"
            className="rounded-full border border-yellow-400 px-6 py-3 text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition"
          >
            Call 604-555-1234
          </a>
          <a
            href="mailto:info@skylinebuilders.ca"
            className="underline hover:text-yellow-300 md:ml-4"
          >
            info@skylinebuilders.ca
          </a>
        </div>

        {/* Netlify lead form */}
        <form
          name="lead"
          method="POST"
          data-netlify="true"
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 md:flex-row"
        >
          <input type="hidden" name="form-name" value="lead" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full rounded-lg bg-white/90 p-3 text-slate-900 placeholder-slate-500 focus:outline-none md:flex-1"
          />
          <button
            type="submit"
            className="rounded-lg bg-yellow-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-yellow-300"
          >
            Notify Me
          </button>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-400">
        © 2025 Skyline Builders · All rights reserved
      </footer>
    </div>
  );
}
