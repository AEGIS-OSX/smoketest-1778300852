import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)]">
          <Link
            href="/privacy"
            className="rounded-[var(--radius-md)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true">|</span>
          <Link
            href="/terms"
            className="rounded-[var(--radius-md)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Terms of Service
          </Link>
          <span aria-hidden="true">|</span>
          <a
            href="mailto:support@pawwalk.com"
            className="rounded-[var(--radius-md)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Contact: support@pawwalk.com
          </a>
        </div>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-muted)]">
          PawWalk 2026
        </p>
      </div>
    </footer>
  );
}