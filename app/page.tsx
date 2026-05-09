import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import KeyBenefits from "@/app/components/KeyBenefits";
import Testimonials from "@/app/components/Testimonials";
import AvailabilityCheck from "@/app/components/AvailabilityCheck";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <KeyBenefits />
      <AvailabilityCheck />
      <FAQ />
      <section
        className="bg-[var(--color-surface)] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="final-cta-title"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-[var(--radius-lg)] bg-[var(--color-sand)] px-6 py-10 shadow-[0_24px_60px_var(--color-shadow)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Final CTA
          </p>
          <h2
            id="final-cta-title"
            className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl"
          >
            Ready to make walks simple?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-primary-foreground)] outline-none transition-colors duration-200 ease-out hover:bg-[color-mix(in_srgb,var(--color-primary)_92%,black)] focus-visible:ring-4 focus-visible:ring-[var(--color-focus-ring)]"
            >
              Join the waitlist
            </a>
          </div>
          <p className="max-w-2xl font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            We will send a confirmation email. Double opt-in required. No spam.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}