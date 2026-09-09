import Link from "next/link";

export default function PayGenPage() {
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
            PayGen
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-400">
            Payroll automation system designed to reduce repetitive
            payroll operations and improve the reliability of
            payroll processing workflows.
          </p>
        </div>

        {/* OVERVIEW */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Overview
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            PayGen is an end-to-end payroll automation module covering
            employee payroll data ingestion, validation, payslip
            generation, secure email delivery, and bank payroll file
            generation for international clients.
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
                Excel data ingestion
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Built workflows to ingest payroll information from
                Excel-based data sources and prepare it for automated
                processing.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Data validation
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Implemented validation workflows to identify
                inconsistencies in payroll data before downstream
                processing.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Payslip generation
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Automated generation of employee payslips as part of
                the payroll processing workflow.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Secure email delivery
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Implemented secure SMTP-based delivery workflows for
                distributing generated payslips to employees.
              </p>
            </div>

          </div>
        </section>

        {/* BANK PAYROLL */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Bank payroll automation
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            A dedicated bank payroll module was developed to generate
            payroll files required by international clients. The
            workflow transformed validated payroll information into
            structured bank-compatible files.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 font-mono text-sm">
            <div className="text-zinc-500">
              payroll_input.xlsx
            </div>

            <div className="my-4 text-zinc-700">
              ↓
            </div>

            <div className="text-zinc-300">
              Data ingestion & validation
            </div>

            <div className="my-4 text-zinc-700">
              ↓
            </div>

            <div className="text-zinc-300">
              Payroll processing
            </div>

            <div className="my-4 text-zinc-700">
              ↓
            </div>

            <div className="text-zinc-300">
              Payslip generation + email delivery
            </div>

            <div className="my-4 text-zinc-700">
              ↓
            </div>

            <div className="text-zinc-300">
              Bank payroll file
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Impact
          </h2>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-4xl font-bold">
              40%
            </p>

            <p className="mt-3 text-zinc-400">
              reduction in manual payroll effort through automation
              scripts and repeatable workflows.
            </p>
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
              "Django",
              "Flask",
              "Excel",
              "SMTP",
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