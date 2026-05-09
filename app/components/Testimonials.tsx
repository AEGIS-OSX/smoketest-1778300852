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
      className="testimonials-section bg-[var(--color-sand)] px-6 py-20 text-[var(--color-text)] md:px-10 lg:px-16 lg:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-14">
        <motion.p
          className="testimonials-label max-w-2xl font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
          variants={itemVariants}
        >
          What neighbors want from a dog walker
        </motion.p>

        <div className="testimonials-layout grid items-stretch gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.article
            className="testimonials-highlight flex min-h-[28rem] flex-col justify-between rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-[var(--color-text)] shadow-[0_2rem_5rem_var(--color-shadow)] transition duration-200 ease-out md:p-10 lg:p-12"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-8">
              <div className="h-1.5 w-16 rounded-full bg-[var(--color-primary)]" />
              <blockquote className="testimonials-highlight-quote font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--color-text)] md:text-5xl lg:text-6xl">
                <span className="font-[family-name:var(--font-display)]">
                  “Reliable walks, friendly neighbors, and simple booking.”
                </span>{" "}
                <cite className="not-italic font-[family-name:var(--font-body)] text-xl font-medium leading-snug tracking-[-0.01em] text-[var(--color-muted)] md:text-2xl">
                  — Jordan, Mission District [placeholder]
                </cite>
              </blockquote>
            </div>
            <p className="mt-12 max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
              Placeholder quotes. Replace with real customer quotes before launch.
            </p>
          </motion.article>

          <div className="testimonials-side flex flex-col gap-6 lg:pt-6">
            <motion.div
              className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1.25rem_3rem_var(--color-shadow)]"
              variants={itemVariants}
            >
              <ProjectImage id="social_proof" className="testimonials-image block aspect-[16/9] w-full object-cover" />
            </motion.div>

            <motion.blockquote
              className="testimonials-quote rounded-[1.5rem] bg-[var(--color-sand)] p-6 font-[family-name:var(--font-body)] text-lg font-medium leading-8 text-[var(--color-text)] transition duration-200 ease-out md:p-7"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="font-[family-name:var(--font-body)] text-lg leading-8 text-[var(--color-text)]">
                “PawWalk made same-day walks easy when my plans changed.” — <span className="font-semibold text-[var(--color-text)]">Maya, East Village [placeholder]</span>
              </p>
            </motion.blockquote>

            <motion.blockquote
              className="testimonials-quote ml-0 rounded-[1.5rem] bg-[var(--color-sand)] p-6 font-[family-name:var(--font-body)] text-lg font-medium leading-8 text-[var(--color-text)] transition duration-200 ease-out md:ml-10 md:p-7 lg:ml-14"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="font-[family-name:var(--font-body)] text-lg leading-8 text-[var(--color-text)]">
                “The walker sent a photo and I knew my pup was fine right away.” — <span className="font-semibold text-[var(--color-text)]">Andre, Logan Square [placeholder]</span>
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
