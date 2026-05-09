"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do you vet walkers?",
    answer: "Walkers complete an application, identity check, and local reference review. We also require proof of insurance for walkers who provide services on the platform."
  },
  {
    question: "How much does a walk cost?",
    answer: "Pricing will be shared during launch. For the waitlist we only collect your email to notify you about pricing and availability."
  },
  {
    question: "Can I cancel a walk?",
    answer: "When booking opens we will publish cancellation terms. For waitlist signups there is no charge and you can unsubscribe at any time."
  },
  {
    question: "Is my information private?",
    answer: "Yes. We use your email only to send PawWalk updates and early access information. We implement double opt-in and provide an unsubscribe link in every message. See our Privacy Policy for details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      id="faq"
      className="faq-section bg-[var(--color-bg)] px-6 py-20 text-[var(--color-text)] sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="faq-label font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            FAQ
          </p>
          <h2 className="faq-title max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Questions before you join?
          </h2>
        </div>

        <div className="faq-list flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <motion.div
                key={item.question}
                className="faq-item rounded-[1.5rem] bg-[var(--color-surface)] p-1 shadow-[0_1rem_3rem_var(--color-shadow)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.24, ease: "easeOut", delay: index * 0.03 }}
              >
                <button
                  id={triggerId}
                  type="button"
                  className="faq-trigger flex w-full items-center justify-between gap-5 rounded-[1.25rem] px-5 py-5 text-left font-[family-name:var(--font-body)] text-base font-semibold leading-snug text-[var(--color-text)] transition-colors duration-200 ease-out hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:text-lg"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <motion.span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-muted)]"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="faq-panel overflow-hidden"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <p className="px-5 pb-5 pt-1 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
