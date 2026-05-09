"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Find a vetted local walker",
    copy: "Tell us the neighborhood and time. We match you with a nearby walker who knows your streets.",
    offset: "lg:translate-y-0",
    align: "items-start"
  },
  {
    step: "02",
    title: "Book same-day or set a schedule",
    copy: "Choose a one-off walk or recurring slot. Payments and details come later, when the product launches.",
    offset: "lg:translate-y-8",
    align: "items-start"
  },
  {
    step: "03",
    title: "Get a photo and short report after each walk",
    copy: "Walk reports include a photo, route note, and time stamp so you know your dog was cared for.",
    offset: "lg:translate-y-3",
    align: "items-start"
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      className="how-section bg-[var(--color-surface)] px-6 py-20 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 lg:gap-18">
        <div className="how-intro flex max-w-3xl flex-col gap-5">
          <p className="how-label w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            How it works
          </p>
          <h2 className="how-title font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-text)] sm:text-5xl lg:text-7xl">
            From neighborhood search to happy dog.
          </h2>
        </div>

        <motion.div
          className="how-grid grid gap-4 md:grid-cols-3 lg:gap-5"
          variants={sectionVariants}
        >
          {steps.map((item) => (
            <motion.article
              key={item.step}
              className={`how-card ${item.offset} ${item.align} flex min-h-72 flex-col justify-between rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm shadow-[var(--color-shadow)] transition-transform duration-300 ease-out md:p-7 lg:p-8`}
              variants={cardVariants}
            >
              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="how-step border-l-2 border-[var(--color-accent)] pl-3 font-[family-name:var(--font-body)] text-sm font-semibold tracking-[0.16em] text-[var(--color-muted)]">
                    {item.step}
                  </span>
                  <span className="h-px flex-1 bg-[var(--color-border)]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="how-card-title font-[family-name:var(--font-body)] text-xl font-semibold leading-tight tracking-[-0.03em] text-[var(--color-text)] lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="how-card-copy font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                    {item.copy}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.a
          className="how-link w-fit font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-text)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8 transition-colors duration-200 ease-out hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          href="#waitlist"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Join the waitlist
        </motion.a>
      </div>
    </motion.section>
  );
}
