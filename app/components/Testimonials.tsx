"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      className="bg-[var(--color-sand)] px-6 py-24 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.article
          className="flex min-h-[420px] flex-col justify-between rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-8 shadow-[0_24px_60px_var(--color-shadow)] lg:p-12"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-6">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              What neighbors want from a dog walker
            </p>
            <blockquote className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">
              “Reliable walks, friendly neighbors, and simple booking.”
            </blockquote>
            <p className="font-[family-name:var(--font-body)] text-base font-medium text-[var(--color-muted)]">
              Jordan, Mission District [placeholder]
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)]">
            <ProjectImage id="social_proof" className="h-full min-h-[220px] w-full object-cover" />
          </div>
        </motion.article>

        <div className="grid gap-6">
          <motion.article
            className="rounded-[var(--radius-lg)] bg-[var(--color-bg)] p-8 shadow-[0_24px_60px_var(--color-shadow)]"
            variants={itemVariants}
          >
            <p className="mb-4 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Note: Placeholder quotes. Replace with real customer quotes before launch.
            </p>
            <blockquote className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 text-[var(--color-text)]">
              "PawWalk made same-day walks easy when my plans changed." — Maya, East Village [placeholder]
            </blockquote>
          </motion.article>

          <motion.article
            className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-8 shadow-[0_24px_60px_var(--color-shadow)]"
            variants={itemVariants}
          >
            <blockquote className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 text-[var(--color-text)]">
              "The walker sent a photo and I knew my pup was fine right away." — Andre, Logan Square [placeholder]
            </blockquote>
          </motion.article>

          <motion.div
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
            variants={itemVariants}
          >
            <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
              Background-checked walkers. Liability insurance. Local neighbors supporting local walkers.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}