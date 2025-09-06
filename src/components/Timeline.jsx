export default function Timeline() {
  const events = [
    {
      year: "2020",
      title: "Naissance de Pulse Technologies",
      description: "Création de l'entreprise avec une vision claire : transformer l'Afrique par l'innovation.",
    },
    {
      year: "2021",
      title: "Premiers Projets",
      description: "Lancement de projets dans la construction et l'énergie rurale.",
    },
    {
      year: "2023",
      title: "Expansion Technologique",
      description: "Création de solutions logicielles et IoT pour le secteur de l'énergie.",
    },
    {
      year: "2025",
      title: "Objectif : Afrique entière",
      description: "Cap vers l'expansion continentale en gardant nos valeurs fondatrices.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Notre Histoire</h2>
        <ol className="relative border-l border-teal-500">
          {events.map((event, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2.5 border border-white" />
              <h3 className="text-lg font-semibold text-teal-600">{event.year} — {event.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{event.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
