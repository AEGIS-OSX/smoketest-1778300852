"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: "easeOut",
    },
  },
};

export default function TrustStrip() {
  return (
    <motion.section
      className="trust-strip bg-[var(--color-sand)] px-5 py-8 font-[family-name:var(--font-body)] text-[var(--color-text)] sm:px-6 lg:px-8 lg:py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
    >
      <div className="trust-strip-inner mx-auto flex w-full max-w-6xl flex-col items-start gap-3 rounded-full bg-[var(--color-surface)]/50 px-5 py-5 shadow-sm ring-1 ring-[var(--color-border)]/55 sm:px-6 md:grid md:grid-cols-[0.72fr_1.55fr_auto] md:items-center md:gap-8 md:rounded-full md:py-4 lg:px-7">
        <motion.p
          className="trust-strip-label font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:text-sm"
          variants={itemVariants}
        >
          Why dog owners join early
        </motion.p>

        <motion.p
          className="trust-strip-line max-w-3xl font-[family-name:var(--font-body)] text-base font-semibold leading-snug text-[var(--color-text)] md:text-lg lg:text-xl"
          variants={itemVariants}
        >
          Background-checked walkers. Liability insurance. Local neighbors supporting local walkers.
        </motion.p>

        <motion.div variants={itemVariants} className="flex shrink-0 items-center">
          <motion.a
            className="trust-strip-link inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-primary-foreground)] outline-none transition-colors duration-200 ease-out hover:bg-[var(--color-primary)]/90 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sand)]"
            href="#waitlist"
            whileHover={{ x: 2, scale: 1.01 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            Join the waitlist
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
