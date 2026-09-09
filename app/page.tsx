import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-32">
          <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div>

              <div className="mb-6 inline-flex rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-400">
                Python Backend Engineer
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
                I build
                <span className="block text-zinc-500">
                  backend systems.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                Python Backend Engineer focused on scalable APIs,
                business automation, workflow systems, and
                production software.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#work"
                  className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
                >
                  Explore my work →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
                >
                  Let's talk
                </a>

              </div>

              {/* STACK */}
              <div className="mt-12">

                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Core stack
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "Django",
                    "Flask",
                    "FastAPI",
                    "PostgreSQL",
                    "Docker",
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

            </div>

            {/* ARCHITECTURE */}
            <div className="hidden lg:block">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur">

                <div className="mb-6 flex items-center justify-between">

                  <span className="text-sm text-zinc-400">
                    backend_architecture
                  </span>

                  <span className="flex items-center gap-2 text-xs text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    production
                  </span>

                </div>

                <div className="space-y-4 font-mono text-sm">

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                    Client
                  </div>

                  <div className="text-center text-zinc-600">
                    ↓
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                    REST API
                    <span className="ml-2 text-zinc-600">
                      Django / Flask / FastAPI
                    </span>
                  </div>

                  <div className="text-center text-zinc-600">
                    ↓
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                      Database
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                      Automation
                    </div>

                  </div>

                  <div className="text-center text-zinc-600">
                    ↓
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                    Docker · Azure · CI/CD
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* WORK */}
      {/* ========================================================= */}

      <section id="work" className="border-t border-zinc-900">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="mb-16">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
              Professional work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Production systems I've worked on.
            </h2>

            <p className="mt-5 max-w-2xl text-zinc-400">
              Selected backend systems and products I contributed to
              during my professional experience.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <ProjectCard
              number="01"
              title="Costen — Travel & Expense Management"
              description="Production travel and expense management product with web and mobile applications. Contributed to backend modules for expense workflows, receipt handling, approvals, and automation."
              stack={[
                "Python",
                "Django",
                "REST API",
                "PostgreSQL",
                "Automation",
              ]}
              href="/projects/costen"
            />

            <ProjectCard
              number="02"
              title="PayGen — Payroll Automation"
              description="Payroll automation system covering Excel data ingestion, validation, payslip generation, secure email delivery, and bank payroll file generation."
              stack={[
                "Python",
                "Django",
                "Excel",
                "SMTP",
                "Automation",
              ]}
              href="/projects/paygen"
            />

            <ProjectCard
              number="03"
              title="HR Services Platform"
              description="Backend services for employee lifecycle management, reporting, role-based access control, scheduled notifications, and HR workflows."
              stack={[
                "Python",
                "Flask",
                "APScheduler",
                "RBAC",
                "Azure",
              ]}
              href="/projects/hr-services"
            />

            <ProjectCard
              number="04"
              title="Lead Forge — Lead Generation"
              description="End-to-end lead generation platform using web scraping and external APIs for lead collection, enrichment, and validation."
              stack={[
                "Python",
                "Requests",
                "BeautifulSoup",
                "External APIs",
                "Automation",
              ]}
              href="/projects/lead-forge"
            />

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* EXPERIENCE */}
      {/* ========================================================= */}

      <section id="experience" className="border-t border-zinc-900">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where I've worked.
          </h2>

          <div className="mt-16 space-y-12">

            <div className="border-l border-zinc-800 pl-6">

              <p className="text-sm text-zinc-500">
                Apr 2025 — Jun 2026
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Manupatra Information Solutions Pvt. Ltd.
              </h3>

              <p className="mt-2 text-zinc-500">
                Python Developer
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Built Python-based solutions for legal research and
                document management platforms, leveraging AI-assisted
                development tools to accelerate development,
                debugging, documentation, and research.
              </p>

            </div>


            <div className="border-l border-zinc-800 pl-6">

              <p className="text-sm text-zinc-500">
                Mar 2024 — Apr 2026
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Procloz Services Pvt. Ltd.
              </h3>

              <p className="mt-2 text-zinc-500">
                Junior Python Developer
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Developed and maintained production web applications
                and automation solutions across payroll, HR workflows,
                lead generation, and travel & expense management.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* SKILLS */}
      {/* ========================================================= */}

      <section id="skills" className="border-t border-zinc-900">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
            Technical skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to build.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* BACKEND */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Backend
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Django",
                  "Flask",
                  "FastAPI",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>


            {/* DATABASE */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Data & Database
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "SQL",
                  "Pandas",
                  "Excel",
                  "Data Validation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>


            {/* AUTOMATION */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Automation
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "APScheduler",
                  "Web Scraping",
                  "SMTP",
                  "Workflow Automation",
                  "API Integration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>


            {/* CLOUD */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Cloud & DevOps
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Azure",
                  "Docker",
                  "CI/CD",
                  "Jenkins",
                  "GitHub Actions",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>


            {/* TOOLS */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Engineering
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Git",
                  "Linux",
                  "Shell",
                  "Debugging",
                  "System Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>


            {/* LANGUAGES */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7">

              <h3 className="text-lg font-semibold">
                Languages
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "C",
                  "Go",
                  "Shell",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* AWARDS */}
      {/* ========================================================= */}

      <section id="awards" className="border-t border-zinc-900">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
            Recognition
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Recognition for impact.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">

              <p className="text-sm text-zinc-500">
                Procloz · 2025
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Rising Star Award
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Recognized for contributions to backend development,
                automation, production-ready projects, meeting
                deadlines, and improving efficiency and client
                satisfaction.
              </p>

            </div>


            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">

              <p className="text-sm text-zinc-500">
                Procloz
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                ServTech Excellence Award
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Recognized for delivering high-impact technical
                solutions across automation, payroll, lead generation,
                and backend engineering initiatives.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section id="contact" className="border-t border-zinc-900">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
              Contact
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let's build something
              <span className="block text-zinc-500">
                useful.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I'm open to backend engineering opportunities,
              interesting technical problems, and conversations
              around building reliable software.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="mailto:akshaydg141@gmail.com"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                Email me →
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-godhe-869233266"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/AkshVert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-zinc-900">

        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Akshay. Built with Next.js & Tailwind CSS.
          </p>

          <p>
            Python · Backend · Automation
          </p>

        </div>

      </footer>

    </main>
  );
}