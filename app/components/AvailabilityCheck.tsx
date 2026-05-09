"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AvailabilityStatus = "idle" | "available" | "unavailable" | "error";

const neighborhoods = ["Downtown", "East Village", "Mission District", "Logan Square"];

export default function AvailabilityCheck() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<AvailabilityStatus>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedZip = zip.trim();

    if (!/^\d{5}$/.test(normalizedZip)) {
      setStatus("error");
      return;
    }

    if (normalizedZip.startsWith("1") || normalizedZip.startsWith("9")) {
      setStatus("available");
      return;
    }

    setStatus("unavailable");
  };

  const resultCopy = status === "available"
    ? "Great, you can join the priority list for your area."
    : status === "unavailable"
      ? "Not in your area yet? Join the waitlist and we will let you know when PawWalk comes to your neighborhood."
      : status === "error"
        ? "Enter a 5-digit ZIP code."
        : "Enter a 5-digit ZIP code.";

  const supportCopy = status === "available"
    ? "Great, you can join the priority list for your area."
    : status === "unavailable"
      ? "Not in your area yet? Join the waitlist and we will let you know when PawWalk comes to your neighborhood."
      : "Check whether your neighborhood is part of PawWalk's first availability window and join the priority list for updates.";

  return (
    <motion.section
      className="availability-section bg-[var(--color-bg)] px-4 py-14 text-[var(--color-text)] sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-labelledby="availability-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="availability-grid grid gap-5 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xl shadow-[var(--color-shadow)]/10 md:grid-cols-[1.02fr_0.98fr] md:gap-6 md:p-6 lg:p-8">
          <motion.div
            className="availability-copy flex flex-col justify-center rounded-[1.5rem] bg-[var(--color-bg)] p-6 md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Coverage check
            </p>
            <h2
              id="availability-title"
              className="availability-title max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl"
            >
              Is PawWalk in your neighborhood?
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={supportCopy}
                className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {supportCopy}
              </motion.p>
            </AnimatePresence>

            <motion.form
              className="availability-form mt-7 space-y-3"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
              noValidate
            >
              <label
                className="block font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)]"
                htmlFor="availability-zip"
              >
                Enter your ZIP to check availability
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="availability-zip"
                  className="availability-input min-h-12 flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 font-[family-name:var(--font-body)] text-base text-[var(--color-text)] outline-none transition duration-200 ease-out placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
                  inputMode="numeric"
                  maxLength={5}
                  name="zip"
                  onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
                  pattern="[0-9]{5}"
                  placeholder="Enter a 5-digit ZIP code."
                  type="text"
                  value={zip}
                  aria-describedby="availability-note availability-result"
                />
                <motion.button
                  className="availability-submit min-h-12 rounded-full bg-[var(--color-primary)] px-6 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-primary-contrast)] transition duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/25"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  Check availability
                </motion.button>
              </div>
            </motion.form>

            <AnimatePresence mode="wait">
              <motion.div
                key={status}
                id="availability-result"
                className="availability-result mt-4 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-[family-name:var(--font-body)] text-base font-semibold leading-7 text-[var(--color-text)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                role={status === "error" ? "alert" : "status"}
              >
                <p>{resultCopy}</p>
                {(status === "available" || status === "unavailable") && (
                  <motion.a
                    className="mt-3 inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)] transition duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/20"
                    href="#waitlist"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    Join the waitlist
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>

            <p
              id="availability-note"
              className="mt-4 max-w-xl font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]"
            >
              Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates.
            </p>
          </motion.div>

          <motion.div
            className="availability-visual relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-sand)] p-5 md:min-h-full md:p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            aria-hidden="true"
          >
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[var(--color-primary)]/15 blur-2xl" />
            <div className="absolute bottom-10 right-6 h-36 w-36 rounded-full bg-[var(--color-surface)]/70 blur-3xl" />
            <div className="relative flex h-full min-h-[21rem] flex-col justify-between rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)]/72 p-5 shadow-xl shadow-[var(--color-shadow)]/10 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="h-2 w-20 rounded-full bg-[var(--color-primary)]" />
                  <div className="mt-3 h-2 w-32 rounded-full bg-[var(--color-border)]" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-primary)]" />
                </div>
              </div>

              <div className="my-8 grid grid-cols-4 gap-2">
                {Array.from({ length: 28 }).map((_, index) => (
                  <div
                    className={`h-10 rounded-[0.9rem] border border-[var(--color-border)] ${index === 5 || index === 6 || index === 10 || index === 15 || index === 18 ? "bg-[var(--color-primary)]/20" : "bg-[var(--color-bg)]/72"}`}
                    key={index}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((neighborhood) => (
                  <span
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-[var(--color-muted)]"
                    key={neighborhood}
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
