"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type AvailabilityStatus = "idle" | "available" | "unavailable" | "error";

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

  const resultCopy =
    status === "available"
      ? "Great, you can join the priority list for your area."
      : status === "unavailable"
        ? "Not in your area yet? Join the waitlist and we will let you know when PawWalk comes to your neighborhood."
        : status === "error"
          ? "Enter your ZIP to check availability"
          : "Enter your ZIP to check availability";

  return (
    <motion.section
      className="bg-[var(--color-sand)] px-6 py-24 text-[var(--color-text)] sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      aria-labelledby="availability-title"
    >
      <div className="mx-auto max-w-[1200px] rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Availability check
            </p>
            <h2
              id="availability-title"
              className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] text-[var(--color-text)] sm:text-[44px] sm:leading-[52px]"
            >
              Is PawWalk in your neighborhood?
            </h2>
            <p className="max-w-lg font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
              Great, you can join the priority list for your area.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-[var(--color-bg)] p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.04 }}
          >
            <label
              htmlFor="zip"
              className="font-[family-name:var(--font-body)] text-sm font-semibold leading-5 text-[var(--color-text)]"
            >
              Enter your ZIP to check availability
            </label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
              placeholder="ZIP"
              aria-invalid={status === "error"}
            />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-accent)] outline-none transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
            >
              Join the waitlist
            </button>
            <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
              {resultCopy}
            </p>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}