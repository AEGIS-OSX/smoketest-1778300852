"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="site-header sticky top-0 z-50 w-full bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] shadow-[0_1px_24px_color-mix(in_srgb,var(--color-text)_8%,transparent)] backdrop-blur-md"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <nav className="site-nav mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-5 py-4 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <div className="col-span-5 sm:col-span-4">
          <Link
            href="/"
            className="site-logo inline-flex items-center rounded-full font-[family-name:var(--font-body)] text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)] outline-none transition-[color,transform] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:text-xl"
            aria-label="PawWalk home"
          >
            PawWalk
          </Link>
        </div>

        <div className="site-links col-span-7 flex items-center justify-end gap-3 sm:col-span-8 sm:gap-7">
          <Link
            href="#how-it-works"
            className="hidden rounded-full font-[family-name:var(--font-body)] text-base font-medium text-[var(--color-text)] underline decoration-transparent decoration-2 underline-offset-8 outline-none transition-[color,text-decoration-color] duration-200 ease-out hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:decoration-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:inline-flex"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-full font-[family-name:var(--font-body)] text-base font-medium text-[var(--color-text)] underline decoration-transparent decoration-2 underline-offset-8 outline-none transition-[color,text-decoration-color] duration-200 ease-out hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:decoration-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:inline-flex"
          >
            FAQ
          </Link>
          <motion.a
            href="#waitlist"
            className="site-cta inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 font-[family-name:var(--font-body)] text-base font-semibold tracking-[-0.01em] text-[var(--color-bg)] shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_18%,transparent)] outline-none transition-[box-shadow] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:px-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            Join the waitlist
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
