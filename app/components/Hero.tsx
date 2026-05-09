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
    }, 450);
  }

  return (
    <motion.section
      id="waitlist"
      className="hero-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-grid">
        <div className="hero-content">
          <motion.p
            className="hero-kicker"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.05}
          >
            Background-checked walkers. Liability insurance. Local neighbors supporting local walkers.
          </motion.p>

          <motion.h1
            className="hero-title"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.15}
          >
            Get a trusted dog walk in your neighborhood.
          </motion.h1>

          <motion.p
            className="hero-subhead"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.25}
          >
            PawWalk connects city dog owners with background-checked local walkers for same-day or recurring walks, plus photo updates after every visit.
          </motion.p>

          <motion.div
            className="hero-form"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            custom={0.35}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="hero-form-fields">
                <label className="hero-label" htmlFor="waitlist-name">
                  Name
                </label>
                <input
                  id="waitlist-name"
                  className="hero-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="hero-form-fields">
                <label className="hero-label" htmlFor="waitlist-email">
                  Email
                </label>
                <input
                  id="waitlist-email"
                  className="hero-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isLoading}
                  aria-describedby="waitlist-status waitlist-microcopy"
                />
              </div>

              <div className="hero-actions">
                <motion.button
                  className="hero-submit"
                  type="submit"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? "Joining..." : "Join the waitlist"}
                </motion.button>
                <a className="hero-secondary-link" href="#how-it-works">
                  See how it works
                </a>
              </div>

              <p id="waitlist-status" className="hero-status" role="status" aria-live="polite">
                {submitState === "success" ? "Thanks. Check your inbox to confirm your signup." : null}
                {submitState === "error" ? "Something went wrong. Please try again." : null}
              </p>

              <p id="waitlist-microcopy" className="hero-microcopy">
                Priority booking and early access offers for waitlist members. We will only use your email for PawWalk updates.
              </p>
              <p className="hero-privacy">
                Double opt-in required. See our <a href="/privacy">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, x: 24, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-frame">
            <ProjectImage id="hero" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
