import { Link } from "@remix-run/react"

export default function TermsOfUse() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

      <p className="mb-4">Effective date: November 16, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Acceptance</h2>
        <p>By accessing or using Coachify, you agree to these Terms of Use.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Eligibility</h2>
        <p>Users must be old enough to form a binding contract in their jurisdiction, or have parental consent.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Account Responsibility</h2>
        <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activity that occurs under their accounts.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Acceptable Use</h2>
        <p>Prohibited activities include illegal acts, harassment, abusive content, spamming, and attempts to break or interfere with the system.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Intellectual Property</h2>
        <p>
          Coachify's code is open-source. Users retain ownership of content they
          create (posts, AI conversations) but grant Coachify a license to host
          and display that content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Disclaimers & Limitation of Liability</h2>
        <p>
          The service is provided "as is" and is a prototype. There are no
          warranties regarding reliability or continuity. The AI Coach and
          community are for informational purposes only and do not replace
          professional advice.
        </p>
        <p>
          To the fullest extent permitted by law, Coachify and its creator are
          not liable for any direct, indirect, incidental, or consequential
          damages arising from use of the service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Indemnification</h2>
        <p>Users agree to indemnify Coachify against claims resulting from misuse or violation of these terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Termination</h2>
        <p>Coachify may terminate or suspend access for violations of these terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Governing Law</h2>
        <p>These terms are governed by the laws of Belgium.</p>
      </section>

      <section className="mt-8">
        <p>Contact: <a href="mailto:kwitondafelix6@gmail.com" className="text-blue-600">kwitondafelix6@gmail.com</a></p>
        <p className="mt-4"><Link to="/">Back to Home</Link></p>
      </section>
    </main>
  )
}
