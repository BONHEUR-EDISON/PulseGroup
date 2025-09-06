export default function Timeline() {
  const steps = [
    { year: '2020', event: 'Fondation de Pulse DRC' },
    { year: '2022', event: 'Lancement des premiers chantiers' },
    { year: '2024', event: 'Transition vers des matériaux durables' },
  ];

  return (
    <section className="py-16 bg-lightbg dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Notre parcours</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {steps.map(({ year, event }) => (
          <div key={year} className="text-center">
            <div className="text-xl font-bold">{year}</div>
            <p className="mt-2">{event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
