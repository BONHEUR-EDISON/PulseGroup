//'use client';

import CountUp from 'react-countup';

export default function StatsSection() {
  const stats = [
    { label: 'Projets réalisés', value: 42 },
    { label: 'Clients satisfaits', value: 150 },
    { label: 'Membres de l’équipe', value: 12 },
    { label: 'Années d’expérience', value: 5 },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="transition-transform transform hover:scale-105 duration-300">
            <CountUp
              start={0}
              end={stat.value}
              duration={2}
              separator=" "
              className="text-4xl font-bold text-teal-600"
            />
            <p className="mt-2 text-gray-800 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
