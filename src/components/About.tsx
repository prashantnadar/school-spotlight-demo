const features = [
  {
    title: "Quality Education",
    mark: "A+",
    text: "A well-structured curriculum delivered by experienced teachers, with regular assessments and personal attention for every student.",
  },
  {
    title: "Holistic Development",
    mark: "★",
    text: "Sports, arts, music and clubs sit alongside academics so students grow in confidence, creativity and teamwork.",
  },
  {
    title: "Safe & Supportive Environment",
    mark: "✓",
    text: "Secure, well-maintained facilities with trained staff and counselling support that keep students comfortable and cared for.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 2xl:max-w-[88rem]">
        <div className="max-w-3xl">
          <h2
            id="about-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            About Our School
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            This is placeholder content for the demo. Our school has been committed to meaningful,
            values-driven learning, combining strong academics with activities that build character.
            Small class sizes, modern facilities and an engaged community help every learner thrive.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-300 hover:bg-white"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-lg font-bold text-white"
              >
                {f.mark}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{f.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border-l-4 border-blue-900 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              To be a school where every learner becomes a confident, compassionate and responsible
              individual, prepared to contribute positively to society.
            </p>
          </article>
          <article className="rounded-xl border-l-4 border-amber-500 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              To deliver balanced, inclusive education through inspiring teaching, modern facilities
              and a supportive community that encourages curiosity and lifelong learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
