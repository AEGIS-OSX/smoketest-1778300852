"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do you vet walkers?",
    answer: "Walkers complete an application, identity check, and local reference review. We also require proof of insurance for walkers who provide services on the platform.",
  },
  {
    question: "How much does a walk cost?",
    answer: "Pricing will be shared during launch. For the waitlist we only collect your email to notify you about pricing and availability.",
  },
  {
    question: "Can I cancel a walk?",
    answer: "When booking opens we will publish cancellation terms. For waitlist signups there is no charge and you can unsubscribe at any time.",
  },
  {
    question: "Is my information private?",
    answer: "Yes. We use your email only to send PawWalk updates and early access information. We implement double opt-in and provide an unsubscribe link in every message. See our Privacy Policy for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      id="faq"
      className="bg-[var(--color-bg)] px-6 py-24 text-[var(--color-text)] sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            FAQ
          </p>
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] text-[var(--color-text)] sm:text-[44px] sm:leading-[52px]">
            Questions before you join?
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <motion.div
                key={item.question}
                className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.03 }}
              >
                <button
                  id={triggerId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-[var(--radius-md)] px-4 py-4 text-left outline-none transition-colors duration-200 ease-out hover:bg-[var(--color-sand)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-[family-name:var(--font-body)] text-base font-semibold leading-6 text-[var(--color-text)]">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-[family-name:var(--font-body)] text-xl font-semibold leading-none text-[var(--color-muted)]"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-4 pb-4"
                  >
                    <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}