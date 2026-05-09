import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_94%,white)]"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <nav
        className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="inline-flex items-center rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-lg font-semibold text-[var(--color-text)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
          aria-label="PawWalk home"
        >
          PawWalk
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#how-it-works"
            className="hidden rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)] sm:inline-flex"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)] sm:inline-flex"
          >
            FAQ
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-accent)] outline-none transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
          >
            Join the waitlist
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}