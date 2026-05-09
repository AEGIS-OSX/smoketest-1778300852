"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

type SubmitState = "idle" | "loading" | "success" | "error";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const isLoading = submitState === "loading";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");

    window.setTimeout(() => {
      if (!email.trim()) {
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      setName("");
      setEmail("");
    }, 300);
  }

  return (
    <motion.section
      id="waitlist"
      className="bg-[var(--color-bg)] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <motion.p
            className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.05}
          >
            Background-checked walkers. Liability insurance. Local neighbors supporting local walkers.
          </motion.p>

          <motion.h1
            className="max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-[44px] lg:leading-[52px]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.15}
          >
            Get a trusted dog walk in your neighborhood.
          </motion.h1>

          <motion.p
            className="max-w-xl font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.25}
          >
            PawWalk connects city dog owners with background-checked local walkers for same-day or recurring walks, plus photo updates after every visit.
          </motion.p>

          <motion.form
            className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 shadow-[0_24px_60px_var(--color-shadow)]"
            onSubmit={handleSubmit}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.35}
          >
            <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
              <label className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)]">
                Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base font-normal text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)]">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base font-normal text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
                  placeholder="you@example.com"
                  aria-required="true"
                />
              </label>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-primary-foreground)] outline-none transition-colors duration-200 ease-out hover:bg-[color-mix(in_srgb,var(--color-primary)_92%,black)] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
              >
                {isLoading ? "Submitting..." : "Join the waitlist"}
              </button>
            </div>

            <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
              Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates.
            </p>

            {submitState === "success" ? (
              <p className="font-[family-name:var(--font-body)] text-sm font-medium leading-6 text-[var(--color-success)]">
                We will send a confirmation email. Double opt-in required. No spam.
              </p>
            ) : null}

            {submitState === "error" ? (
              <p className="font-[family-name:var(--font-body)] text-sm font-medium leading-6 text-[var(--color-danger)]">
                We will only use your email for PawWalk updates.
              </p>
            ) : null}

            <a
              href="#how-it-works"
              className="w-fit rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-primary)] underline decoration-transparent underline-offset-4 outline-none transition-colors duration-200 ease-out hover:decoration-current focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
            >
              See how it works
            </a>
          </motion.form>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)]"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectImage
            id="hero"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}