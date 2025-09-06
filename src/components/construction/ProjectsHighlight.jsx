// src/app/construction/components/ProjectsHighlight.jsx
export default function ProjectsHighlight() {
  const projects = [
    { title: 'Complexe Urbain Kinshasa', image: '/images/projects/kinshasa.jpg' },
    { title: 'Ferme Solaire Rurale', image: '/images/projects/ferme-solaire.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-8">Projets phares</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="relative group">
            <img src={p.image} alt={p.title} className="w-full rounded-lg object-cover h-64 group-hover:opacity-90 transition" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4 text-center rounded-b-lg">
              {p.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
