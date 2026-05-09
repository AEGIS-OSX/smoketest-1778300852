import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] backdrop-blur-md"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="inline-flex items-center rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
          aria-label="PawWalk home"
        >
          PawWalk
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="hidden rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)] sm:inline-flex"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)] sm:inline-flex"
          >
            FAQ
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-primary-foreground)] outline-none transition-colors duration-200 ease-out hover:bg-[color-mix(in_srgb,var(--color-primary)_92%,black)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Join the waitlist
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}