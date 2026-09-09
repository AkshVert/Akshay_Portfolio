export default function CostenProject() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-600">
            Case Study · Professional Work
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Costen
            <span className="block text-zinc-500">
              Travel & Expense Management
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            A production travel and expense management product with
            web and mobile applications. I contributed to backend
            development and business workflow automation as part of
            the engineering team at Procloz Services Pvt. Ltd.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Django",
              "REST API",
              "Database",
              "Automation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PRODUCT */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Product
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            A production business application
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            Costen is a travel and expense management product designed
            to manage business travel, employee expenses, receipts,
            approvals, and related workflows.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-3xl font-bold">Web</p>
              <p className="mt-2 text-sm text-zinc-500">
                Business application
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-3xl font-bold">Android</p>
              <p className="mt-2 text-sm text-zinc-500">
                Mobile application
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-3xl font-bold">iOS</p>
              <p className="mt-2 text-sm text-zinc-500">
                Mobile application
              </p>
            </div>
          </div>
        </section>

        {/* MY ROLE */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            My contribution
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Backend engineering
          </h2>

          <div className="mt-8 space-y-4">
            {[
              "Developed backend modules using Django.",
              "Implemented expense submission workflows.",
              "Worked on receipt upload functionality.",
              "Implemented multi-layer approval workflows.",
              "Built validation and approval automation.",
              "Contributed to reducing manual data entry across finance workflows.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Workflow
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Expense processing
          </h2>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm text-zinc-300">
              <span className="rounded-lg border border-zinc-700 px-4 py-3">
                Expense
              </span>

              <span className="text-zinc-600">→</span>

              <span className="rounded-lg border border-zinc-700 px-4 py-3">
                Receipt
              </span>

              <span className="text-zinc-600">→</span>

              <span className="rounded-lg border border-zinc-700 px-4 py-3">
                Validation
              </span>

              <span className="text-zinc-600">→</span>

              <span className="rounded-lg border border-zinc-700 px-4 py-3">
                Approval
              </span>

              <span className="text-zinc-600">→</span>

              <span className="rounded-lg border border-zinc-700 px-4 py-3">
                Processing
              </span>
            </div>
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Engineering focus
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Building maintainable backend workflows
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            The work involved translating business processes into
            backend workflows, implementing validation and approval
            logic, and building APIs that supported the application's
            business operations.
          </p>
        </section>

        {/* COMPANY CONTEXT */}
        <section className="mt-20 border-y border-zinc-800 py-12">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Professional experience
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Procloz Services Pvt. Ltd.
          </h2>

          <p className="mt-3 text-zinc-400">
            This project was developed as part of my professional
            employment at Procloz Services Pvt. Ltd.
          </p>
        </section>

        {/* BACK */}
        <div className="mt-16">
          <a
            href="/#work"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            ← Back to professional work
          </a>
        </div>

      </div>
    </main>
  );
}