"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const rowTransition = {
  duration: 0.2,
  ease: "easeOut",
};

export default function KeyBenefits() {
  return (
    <motion.section
      className="bg-[var(--color-bg)] px-6 py-24 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 lg:gap-20">
        <div className="max-w-2xl">
          <p className="mb-4 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Why PawWalk feels easier
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] text-[var(--color-text)] sm:text-[44px] sm:leading-[52px]">
            Flexible plans, trusted walkers, clear updates.
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <motion.div
              className="order-2 flex flex-col gap-4 lg:order-1"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 text-[var(--color-text)]">
                Flexible scheduling
              </h3>
              <p className="max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                Same-day walks, recurring slots, or weekend trips. Book the cadence that fits your week.
              </p>
            </motion.div>
            <motion.div
              className="order-1 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)] lg:order-2"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.04 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <ProjectImage id="feature_1" className="h-full w-full object-cover" />
            </motion.div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
            <motion.div
              className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <ProjectImage id="feature_2" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.04 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 text-[var(--color-text)]">
                Vetted local walkers
              </h3>
              <p className="max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                Background checks and community vetting help keep walks safe and predictable.
              </p>
            </motion.div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
            <motion.div
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-[var(--color-sand)] p-8"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 text-[var(--color-text)]">
                Real-time updates
              </h3>
              <p className="max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                Photo updates and time stamps after every walk so you see what happened and when.
              </p>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.04 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <ProjectImage id="feature_3" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}