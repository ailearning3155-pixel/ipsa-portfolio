const skills = ['Next.js', 'React Three Fiber', 'Three.js', 'GSAP', 'Shader Authoring', 'TailwindCSS'];

export default function Skills() {
  return (
    <section className="mx-auto min-h-[80vh] max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <ul className="mt-6 grid grid-cols-2 gap-3 text-white/85 sm:grid-cols-3">
        {skills.map((skill) => (
          <li key={skill} className="rounded border border-white/15 bg-white/5 px-3 py-2 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
