"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const rowTransition = {
  duration: 0.55,
  ease: [0.2, 0.8, 0.2, 1],
};

export default function KeyBenefits() {
  return (
    <motion.section
      className="benefits-section bg-[var(--color-bg)] px-4 py-20 text-[var(--color-text)] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 sm:gap-16 lg:gap-20">
        <div className="benefits-intro flex max-w-2xl flex-col gap-4">
          <p className="benefits-label font-[family-name:var(--font-body)] text-sm font-semibold leading-5 tracking-[0.08em] text-[var(--color-muted)] uppercase">
            Why PawWalk feels easier
          </p>
          <h2 className="benefits-title font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--color-text)]">
            Flexible plans, trusted walkers, clear updates.
          </h2>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
          <div className="benefit-row grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            <motion.div
              className="benefit-copy order-1 flex flex-col gap-4 md:col-span-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="benefit-heading font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl sm:leading-9">
                Flexible scheduling
              </h3>
              <p className="benefit-text max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Same-day walks, recurring slots, or weekend trips. Book the cadence that fits your week.
              </p>
            </motion.div>

            <motion.div
              className="benefit-media order-2 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)] shadow-[var(--shadow-2)] md:col-span-7"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)]">
                <ProjectImage id="feature_1" className="benefit-image h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="benefit-row grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            <motion.div
              className="benefit-media order-1 rounded-[var(--radius-lg)] bg-[var(--color-sand)] p-3 sm:p-4 md:col-span-7 lg:p-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.1 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)]">
                <ProjectImage id="feature_2" className="benefit-image h-full w-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              className="benefit-copy order-2 flex flex-col gap-4 md:col-span-5 md:pl-4 lg:pl-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.1 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="benefit-heading font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl sm:leading-9">
                Vetted local walkers
              </h3>
              <p className="benefit-text max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Background checks and community vetting help keep walks safe and predictable.
              </p>
            </motion.div>
          </div>

          <div className="benefit-row grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            <motion.div
              className="benefit-copy order-1 flex flex-col gap-4 md:col-span-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.2 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="benefit-heading font-[family-name:var(--font-body)] text-2xl font-semibold leading-8 tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl sm:leading-9">
                Real-time updates
              </h3>
              <p className="benefit-text max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Photo updates and time stamps after every walk so you see what happened and when.
              </p>
            </motion.div>

            <motion.div
              className="benefit-media order-2 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)] shadow-[var(--shadow-2)] md:col-span-7"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...rowTransition, delay: 0.2 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)]">
                <ProjectImage id="feature_3" className="benefit-image h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
