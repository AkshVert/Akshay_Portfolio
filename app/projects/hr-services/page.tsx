import Link from "next/link";

export default function HRServicesPage() {
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
            HR Services Platform
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-400">
            A production HR platform covering employee lifecycle
            workflows, reporting, role-based access, and automated
            notifications.
          </p>
        </div>

        {/* OVERVIEW */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Overview
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            I contributed to the backend development of an HR services
            product designed to centralize employee operations and
            automate repetitive HR workflows.
          </p>
        </section>

        {/* CONTRIBUTION */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            My contribution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Employee lifecycle
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Built backend modules supporting employee onboarding
                and offboarding workflows.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Reporting
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Developed Excel-based reporting workflows to help
                HR teams process and analyze employee information.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Role-based access control
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Implemented RBAC-oriented backend functionality to
                separate access based on user roles.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-medium">
                Scheduled notifications
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Built scheduled notification workflows for recurring
                HR events and operational reminders.
              </p>
            </div>

          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Backend architecture
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            The Flask backend was organized using a Blueprint-based
            architecture, separating routes, service logic, and
            utilities to improve maintainability and make the
            application easier for the development team to work with.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 font-mono text-sm">

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              API Routes
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              Flask Blueprints
            </div>

            <div className="my-4 text-center text-zinc-700">
              ↓
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                Services
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                Utilities
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                Database
              </div>
            </div>

          </div>
        </section>

        {/* SCHEDULER */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Scheduler module
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            Developed a scheduler module using APScheduler to trigger
            daily and weekly notifications across the web application
            and email workflows.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 font-mono text-sm text-zinc-400">
            Daily jobs
            <br />
            Weekly jobs
            <br />
            Web notifications
            <br />
            Email notifications
          </div>
        </section>

        {/* DEPLOYMENT */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Deployment
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            Created deployment SOPs for Azure-based deployments,
            helping standardize the process for product launches and
            making deployments more consistent.
          </p>
        </section>

        {/* TECHNOLOGY */}
        <section className="mt-20 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-semibold">
            Technology
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Python",
              "Flask",
              "APScheduler",
              "RBAC",
              "Excel",
              "Azure",
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