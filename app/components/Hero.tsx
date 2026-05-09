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
      duration: 0.2,
      delay,
      ease: "easeOut",
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

  const statusMessage =
    submitState === "success"
      ? "Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates."
      : submitState === "error"
        ? "Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates."
        : "Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates.";

  return (
    <motion.section
      id="waitlist"
      className="bg-[var(--color-bg)] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <motion.p
            className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.02}
          >
            Background-checked walkers. Liability insurance. Local neighbors supporting local walkers.
          </motion.p>

          <motion.h1
            className="max-w-2xl font-[family-name:var(--font-display)] text-[44px] font-semibold leading-[52px] text-[var(--color-text)]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.08}
          >
            Get a trusted dog walk in your neighborhood.
          </motion.h1>

          <motion.p
            className="max-w-xl font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.12}
          >
            PawWalk connects city dog owners with background-checked local walkers for same-day or recurring walks, plus photo updates after every visit.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex max-w-xl flex-col gap-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.16}
          >
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
            />
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
              aria-invalid={submitState === "error"}
            />
            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-accent)] outline-none transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:ring-4 focus-visible:ring-[var(--color-border)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Join the waitlist
              </button>
              <a
                href="#how-it-works"
                className="rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-primary)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
              >
                See how it works
              </a>
            </div>
            <p className="font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-muted)]">
              {statusMessage}
            </p>
          </motion.form>
        </div>

        <motion.div
          className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-sand)]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ProjectImage
            id="hero"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}