import { Link } from "@remix-run/react"

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">Effective date: November 16, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          Coachify is a student-led, open-source web application prototype for
          leadership and coaching. This Privacy Policy explains what information
          we collect, how we use it, and the choices you have.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Data We Collect</h2>
        <ul className="list-disc ml-6">
          <li><strong>Account Information:</strong> email, name, profile type (coach or coachee).</li>
          <li><strong>User Content:</strong> messages with the AI Coach and posts/interactions in the community forum.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, usage and analytics data.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">How We Use Data</h2>
        <p>We use data to provide and maintain the service, to facilitate AI conversations and community features, to communicate with users, and to improve the platform using anonymized analyses where possible.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">AI-Specific Information</h2>
        <p>
          The "AI Coach" is an artificial intelligence tool and not a human. It
          does not provide professional, medical, or psychological advice. In
          the current prototype, AI conversations are processed in real-time by
          a third-party API and are not permanently stored on Coachify's
          servers. If we change this behavior, we will notify users.
        </p>
        <p>
          The AI may produce inaccurate or biased information; use it as a
          reflection tool and not as a sole source of guidance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Data Sharing</h2>
        <p>We do not sell personal data. We may share information with:</p>
        <ul className="list-disc ml-6">
          <li>Service providers (including the third-party AI API provider).</li>
          <li>Human coaches you choose to book sessions with (necessary information only).</li>
          <li>Authorities when required by law.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">User Rights & Security</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data. We implement reasonable security measures, but no
          online service is 100% secure. As a prototype, certain features may
          be experimental.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">International Transfers</h2>
        <p>Your data may be processed in various countries as part of an open-source project with global reach.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Changes</h2>
        <p>We reserve the right to update this policy. Material changes will be communicated to users.</p>
      </section>

      <section className="mt-8">
        <p>Contact: <a href="mailto:kwitondafelix6@gmail.com" className="text-blue-600">kwitondafelix6@gmail.com</a></p>
        <p className="mt-4"><Link to="/">Back to Home</Link></p>
      </section>
    </main>
  )
}
