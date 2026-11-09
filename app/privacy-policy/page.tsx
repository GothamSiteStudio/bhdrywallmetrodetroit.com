import type { Metadata } from "next";
import { ShieldCheck, Phone, Mail } from "lucide-react";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${BIZ.name}. Learn how we collect, use, and protect your personal information when you contact us or request drywall service in Metro Detroit.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <ShieldCheck className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            How {BIZ.name} collects, uses, and protects your information when you visit our website or contact us for drywall service in Metro Detroit.
          </p>
          <p className="mt-2 text-xs text-ink-400">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-6">
          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              When you submit a contact form, call, or text {BIZ.name}, we may collect personal information you voluntarily provide, including your name, phone number, email address, property address or city/ZIP code, and details or photos related to your drywall project.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              We also automatically collect basic technical and usage data when you browse our website (such as pages visited, device type, browser type, referring URL, and approximate region) using first-party analytics (including Matomo) and standard server logs to understand site performance and improve user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">2. How We Use Your Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-200">
              <li>To respond to your inquiries, follow up on your drywall project details, and schedule or dispatch our crew.</li>
              <li>To communicate with you regarding your appointment, project scope, customer support, or invoicing.</li>
              <li>To maintain, secure, and improve our website and services across Metro Detroit.</li>
              <li>To comply with applicable legal obligations and enforce our terms of service.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">3. Phone &amp; SMS Communications</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              By providing your phone number and contacting us via phone, text, or our website forms, you consent to receive service-related calls and SMS/text messages from {BIZ.name} regarding your inquiry, scheduling, or project updates. Message and data rates may apply, and message frequency varies based on your service request.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              You may opt out of SMS messages at any time by replying <strong className="text-white">STOP</strong>. Your mobile phone number, SMS opt-in data, and consent will never be sold or shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </div>

          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">4. Information Sharing</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              We do not sell, rent, or trade your personal information. We only share information with trusted service providers or field crews as necessary to fulfill your service request, operate our communications and website infrastructure, or comply with legal requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">5. Data Security &amp; Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              We implement reasonable administrative and technical safeguards to protect the personal information we hold. You may contact us at any time to request access to, correction of, or deletion of your personal information from our active records.
            </p>
          </div>

          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">6. Contact Us</h2>
            <p className="mt-3 text-sm text-ink-200">
              If you have any questions about this Privacy Policy or how {BIZ.name} handles your data, please contact us:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-200">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>
                  Call or text{" "}
                  <a href={BIZ.phoneHref} className="text-brass-300 hover:text-brass-200">
                    {BIZ.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>
                  Email{" "}
                  <a href={BIZ.emailHref} className="break-all text-brass-300 hover:text-brass-200">
                    {BIZ.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
