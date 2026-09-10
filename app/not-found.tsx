import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">
        <p className="text-sm text-zinc-500">404</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-zinc-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Back to portfolio →
        </Link>
      </div>
    </main>
  );
}