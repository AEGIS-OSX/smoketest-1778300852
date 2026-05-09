"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06,
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const highlightReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.14,
      duration: 0.48,
      ease: "easeOut",
    },
  },
};

const quoteReveal = (delay: number) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.42,
      ease: "easeOut",
    },
  },
});

export default function Testimonials() {
  return (
    <motion.section
      className="testimonials-section bg-[var(--color-sand)] px-4 py-20 text-[var(--color-text)] sm:px-6 md:py-24 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={sectionReveal}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 md:gap-10 lg:gap-12">
        <p className="testimonials-label max-w-[34rem] font-[family-name:var(--font-body)] text-sm font-semibold leading-5 tracking-[0.02em] text-[var(--color-muted)]">
          What neighbors want from a dog walker
        </p>

        <div className="testimonials-layout grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-8">
          <motion.figure
            className="testimonials-highlight flex min-h-[28rem] flex-col justify-between rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-7 shadow-[0_16px_48px_color-mix(in_srgb,var(--color-text)_8%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--color-border)_78%,transparent)] sm:p-9 lg:p-11"
            variants={highlightReveal}
            whileHover={{ y: -2 }}
          >
            <blockquote className="testimonials-highlight-quote max-w-[44rem] font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--color-text)] sm:text-[2.4rem] lg:text-[3rem]">
              "Reliable walks, friendly neighbors, and simple booking."
            </blockquote>
            <figcaption className="mt-10 font-[family-name:var(--font-body)] text-base font-semibold leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7">
              — Jordan, Mission District [placeholder]
            </figcaption>
          </motion.figure>

          <div className="testimonials-side flex flex-col gap-5 lg:gap-6">
            <motion.div
              className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] shadow-[0_10px_32px_color-mix(in_srgb,var(--color-text)_7%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--color-border)_70%,transparent)]"
              variants={imageReveal}
            >
              <ProjectImage
                id="social_proof"
                className="testimonials-image aspect-[16/7] h-full w-full object-cover"
              />
            </motion.div>

            <motion.figure
              className="testimonials-quote rounded-[var(--radius-md)] px-1 py-4 text-[var(--color-text)] sm:px-2 lg:pl-4"
              variants={quoteReveal(0.22)}
              whileHover={{ y: -2 }}
            >
              <blockquote className="font-[family-name:var(--font-body)] text-lg font-normal leading-7 text-[var(--color-text)] sm:text-xl sm:leading-8">
                "PawWalk made same-day walks easy when my plans changed."
              </blockquote>
              <figcaption className="mt-4 font-[family-name:var(--font-body)] text-sm font-semibold leading-5 text-[var(--color-muted)] sm:text-base sm:leading-6">
                — Maya, East Village [placeholder]
              </figcaption>
            </motion.figure>

            <motion.figure
              className="testimonials-quote rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-surface)_34%,transparent)] px-5 py-5 text-[var(--color-text)] sm:px-6 sm:py-6 lg:mr-8"
              variants={quoteReveal(0.3)}
              whileHover={{ y: -2 }}
            >
              <blockquote className="font-[family-name:var(--font-body)] text-base font-normal leading-7 text-[var(--color-text)] sm:text-lg sm:leading-8">
                "The walker sent a photo and I knew my pup was fine right away."
              </blockquote>
              <figcaption className="mt-4 font-[family-name:var(--font-body)] text-sm font-semibold leading-5 text-[var(--color-muted)] sm:text-base sm:leading-6">
                — Andre, Logan Square [placeholder]
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
