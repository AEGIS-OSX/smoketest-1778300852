"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      className="testimonials-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={sectionVariants}
      style={{
        background: "var(--color-sand)",
        padding: "clamp(80px, 8vw, 96px) 0",
      }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 32px))",
          margin: "0 auto",
        }}
      >
        <p
          className="testimonials-label"
          style={{
            margin: "0 0 24px",
            color: "var(--color-muted)",
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          What neighbors want from a dog walker
        </p>

        <div
          className="testimonials-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.12fr) minmax(280px, 0.88fr)",
            gap: "clamp(28px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          <motion.figure
            className="testimonials-highlight"
            variants={highlightVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              margin: 0,
              background: "var(--color-surface)",
              borderRadius: "32px 32px 32px 10px",
              boxShadow: "0 18px 48px color-mix(in srgb, var(--color-ink) 10%, transparent)",
              padding: "clamp(32px, 5vw, 56px)",
            }}
          >
            <blockquote
              className="testimonials-highlight-quote"
              style={{
                margin: 0,
                color: "var(--color-ink)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.8vw, 4.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.055em",
                lineHeight: 0.96,
              }}
            >
              “Reliable walks, friendly neighbors, and simple booking.”
            </blockquote>
            <figcaption
              style={{
                marginTop: "24px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: 1.45,
              }}
            >
              — Jordan, Mission District [placeholder]
            </figcaption>
          </motion.figure>

          <div
            className="testimonials-side"
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            <motion.div variants={imageVariants}>
              <ProjectImage id="social_proof" className="testimonials-image" />
            </motion.div>

            <motion.figure
              className="testimonials-quote"
              variants={quoteVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                margin: 0,
                padding: "8px 0 0",
              }}
            >
              <blockquote
                style={{
                  margin: 0,
                  color: "var(--color-ink)",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontWeight: 600,
                  lineHeight: 1.32,
                }}
              >
                “PawWalk made same-day walks easy when my plans changed.”
              </blockquote>
              <figcaption
                style={{
                  marginTop: "12px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                — Maya, East Village [placeholder]
              </figcaption>
            </motion.figure>

            <motion.figure
              className="testimonials-quote"
              variants={quoteVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                margin: 0,
                paddingTop: "20px",
                borderTop: "1px solid color-mix(in srgb, var(--color-ink) 12%, transparent)",
              }}
            >
              <blockquote
                style={{
                  margin: 0,
                  color: "var(--color-ink)",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontWeight: 600,
                  lineHeight: 1.32,
                }}
              >
                “The walker sent a photo and I knew my pup was fine right away.”
              </blockquote>
              <figcaption
                style={{
                  marginTop: "12px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                — Andre, Logan Square [placeholder]
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
