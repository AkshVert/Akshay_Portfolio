export default function HRPayrollProject() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-600">
            Case Study · 01
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            HR & Payroll
            <span className="block text-zinc-500">
              Automation Platform
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Backend systems and automation workflows for HR operations,
            payroll processing, employee management, reporting, and
            enterprise workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Django",
              "Flask",
              "PostgreSQL",
              "APScheduler",
              "Azure",
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

        {/* OVERVIEW */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Overview
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            From manual workflows to backend automation
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            I worked on backend modules and automation workflows covering
            employee lifecycle management, payroll processing, reporting,
            notifications, and financial operations.
          </p>
        </section>

        {/* CONTRIBUTION */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            My contribution
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Employee onboarding and offboarding modules",
              "Role-based access control",
              "Excel-based reporting workflows",
              "Automated payslip generation",
              "Payroll bank file generation",
              "Scheduled notifications and email workflows",
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

        {/* PAYGEN */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            PayGen
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Payslip generation & payroll automation
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            Built an end-to-end payroll automation workflow that ingests
            Excel data, validates employee information, generates payslips,
            and delivers them securely through email.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 font-mono text-sm text-zinc-400">
            Excel Data → Validation → Payroll Processing → Payslip
            Generation → Secure SMTP Delivery
          </div>
        </section>

        {/* BANK PAYROLL */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Payroll automation
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Bank payroll file generation
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            Designed and built a bank payroll module to generate
            internationally compliant payroll files for clients,
            reducing manual payroll processing and improving operational
            accuracy.
          </p>
        </section>

        {/* SCHEDULER */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Automation
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Scheduled background workflows
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            Built a scheduler module using APScheduler to trigger daily
            and weekly notifications across web application and email
            channels.
          </p>
        </section>

        {/* IMPACT */}
        <section className="mt-20 border-y border-zinc-800 py-16">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Impact
          </p>

          <div className="mt-6">
            <div className="text-6xl font-bold">
              40%
            </div>

            <p className="mt-3 text-zinc-400">
              reduction in manual payroll effort through automation
              scripts and repeatable workflows.
            </p>
          </div>
        </section>

        {/* BACK */}
        <div className="mt-16">
          <a
            href="/#work"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            ← Back to selected work
          </a>
        </div>

      </div>
    </main>
  );
}