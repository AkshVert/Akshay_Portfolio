import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  stack,
  href,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-1 hover:border-zinc-600">

      <div className="mb-10 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          {number}
        </span>

        <span className="text-sm text-zinc-500">
          {stack.slice(0, 2).join(" · ")}
        </span>
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={href}
          className="text-sm font-medium text-white transition hover:text-zinc-400"
        >
          View case study →
        </Link>
      </div>
    </article>
  );
}