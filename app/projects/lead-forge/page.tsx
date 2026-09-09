import Link from "next/link";

export default function LeadForgePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* BACK */}
        <Link
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>

        {/* HEADER */}
        <div className="mt-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">
            Professional work · Procloz Services
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Lead Forge
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-400">
            An automated lead generation platform for collecting,
            enriching, and validating structured business leads.
          </p>
        </div>

        {/* OVERVIEW */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Overview
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            Lead Forge was designed to automate the lead generation
            workflow by collecting structured business information
            from the web and enriching the resulting leads through
            external validation services.
          </p>
        </section>

        {/* MY CONTRIBUTION */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            My contribution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Web scraping
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Developed scraping workflows using Requests and
                BeautifulSoup to collect structured lead information
                from web sources.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Lead enrichment
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Integrated external APIs to enrich collected leads
                with additional contact information.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Email validation
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Integrated Emailable and Hunter to validate email
                information and improve lead quality.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                End-to-end automation
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Connected collection, enrichment, and validation into
                a repeatable automated lead-generation workflow.
              </p>
            </div>

          </div>
        </section>

        {/* PIPELINE */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Lead generation pipeline
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            The system combines web data collection with external
            enrichment and validation services to turn raw web data
            into more actionable business contacts.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 font-mono text-sm">

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              Web sources
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              Requests + BeautifulSoup
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              Structured leads
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                Emailable
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                Hunter
              </div>
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              Enriched & validated leads
            </div>

          </div>
        </section>

        {/* ENGINEERING FOCUS */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Engineering focus
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="font-medium">
                Structured data collection
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Converted unstructured web information into structured
                lead data that could be processed by downstream
                workflows.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="font-medium">
                External API integration
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Connected third-party services into the backend
                workflow for automated enrichment and validation.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="font-medium">
                Automation
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Reduced repetitive manual work by connecting the
                different stages of the lead-generation process.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Technology
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Python",
              "Requests",
              "BeautifulSoup",
              "REST APIs",
              "Emailable",
              "Hunter",
              "Automation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-24 border-t border-zinc-900 pt-8">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Back to all projects
          </Link>
        </div>

      </div>
    </main>
  );
}