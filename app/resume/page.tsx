import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">CAREER</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              My Resume
            </h1>
          </div>

          <a
            href="/Akshay_Godhe_resume.pdf"
            download
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <iframe
            src="/Akshay_Godhe_resume.pdf"
            title="Akshay Godhe Resume"
            className="h-[80vh] w-full"
          />
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}