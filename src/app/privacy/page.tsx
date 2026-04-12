import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Film Budget Planner",
  description: "Film Budget Planner privacy policy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Nav */}
      <nav className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-lime flex items-center justify-center">
              <span className="text-black text-sm font-bold">F</span>
            </div>
            <span className="font-bold text-lg">Film Budget Planner</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-text-muted mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide when creating an account (email, name) and data you enter into the app
              (production budgets, line items, company profiles). We also collect usage analytics to improve the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the Film Budget Planner service</li>
              <li>To authenticate your account</li>
              <li>To sync your data across devices</li>
              <li>To generate PDF exports and reports</li>
              <li>To provide AI-powered rate estimates (item descriptions and locations are sent to our AI provider)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Storage</h2>
            <p>
              Your data is stored securely on Supabase (powered by AWS) with encryption at rest and in transit. Row-level
              security ensures only you can access your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Supabase:</strong> Database, authentication, and file storage</li>
              <li><strong className="text-white">Anthropic (Claude AI):</strong> AI rate estimates (only item names and locations are shared, not personal data)</li>
              <li><strong className="text-white">Google Sign-In:</strong> Authentication</li>
              <li><strong className="text-white">Apple Sign-In:</strong> Authentication</li>
              <li><strong className="text-white">RevenueCat:</strong> Subscription management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Sharing</h2>
            <p>
              We do not sell your personal data. We only share data with the third-party services listed above as
              necessary to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access all your data through the app</li>
              <li>Export your data as PDF or CSV</li>
              <li>Delete your account and all associated data at any time from Settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Film Budget Planner is not intended for children under 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of any changes by updating the
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              For questions about this privacy policy, contact us through the app or at{" "}
              <a href="mailto:support@filmbudgetplanner.com" className="text-lime hover:underline">
                support@filmbudgetplanner.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <Link href="/" className="text-text-muted hover:text-white transition-colors text-sm">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
