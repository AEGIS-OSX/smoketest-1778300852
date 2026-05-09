import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Testimonials from "@/app/components/Testimonials";
import HowItWorks from "@/app/components/HowItWorks";
import KeyBenefits from "@/app/components/KeyBenefits";
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
        className="bg-[var(--color-sand)] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="final-cta-title"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <h2
            id="final-cta-title"
            className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] text-[var(--color-text)] sm:text-[44px] sm:leading-[52px]"
          >
            Ready to make walks simple?
          </h2>
          <div className="flex flex-col gap-4 sm:items-start">
            <a
              href="#waitlist"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-accent)] outline-none transition-colors duration-200 ease-out hover:opacity-90 focus-visible:ring-4 focus-visible:ring-[var(--color-border)]"
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