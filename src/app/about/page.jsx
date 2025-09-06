'use client';

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/TeamMemberCard';

export default function AboutPage() {
  const team = [
    { name: 'Alice Mbwangu', role: 'CEO & Fondatrice', img: '/team/alice.jpg', linkedIn: '#' },
    { name: 'Jean Mukuna', role: 'CTO - Tech Lead', img: '/team/jean.jpg', linkedIn: '#' },
    { name: 'Fatou Diop', role: 'Responsable Énergie', img: '/team/fatou.jpg', linkedIn: '#' },
    { name: 'David Kalonji', role: 'Lead Ingénierie', img: '/team/david.jpg', linkedIn: '#' },
    { name: 'Amina Nsimba', role: 'Partenariats & RSE', img: '/team/amina.jpg', linkedIn: '#' },
    { name: 'Kevin Tshibangu', role: 'UX Designer', img: '/team/kevin.jpg', linkedIn: '#' },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-green-600 text-white py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold mb-4">Construire l’Afrique de demain</h1>
          <p className="text-lg sm:text-xl text-white/90">
            Chez <strong>Pulse dRC</strong>, nous mettons la technologie, l’énergie durable et l’ingénierie au service du progrès économique et social. Notre mission est de bâtir un avenir plus résilient, intelligent et équitable.
          </p>
        </motion.div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos valeurs</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Elles guident chaque décision, chaque projet, chaque interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: '🌱 Durabilité',
              desc: 'Nous plaçons l’environnement au cœur de nos solutions, en privilégiant les énergies renouvelables et les pratiques éthiques.',
            },
            {
              title: '💡 Innovation',
              desc: 'Nous croyons en la technologie comme moteur de transformation positive pour les communautés africaines.',
            },
            {
              title: '🤝 Communauté',
              desc: 'Nous co-construisons avec les acteurs locaux pour un impact réel et inclusif.',
            },
            {
              title: '🏆 Excellence',
              desc: 'La rigueur, la qualité et le professionnalisme sont les piliers de nos livrables.',
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Notre histoire</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Une croissance rapide portée par la vision, l’expertise et la passion.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          className="relative max-w-4xl mx-auto border-l-2 border-teal-500 pl-6"
        >
          {[
            { year: '2021', event: 'Naissance de Pulse dRC à Kinshasa' },
            { year: '2022', event: 'Installation de nos premières mini-centrales solaires' },
            { year: '2023', event: 'Ouverture d’un hub technologique à Lubumbashi' },
            { year: '2024', event: 'Partenariats stratégiques internationaux signés' },
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-10 relative"
            >
              <div className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-teal-500 text-white font-bold rounded-full ring-4 ring-white dark:ring-gray-900">
                {item.year}
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold mb-1">{item.event}</h4>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Équipe */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Une équipe visionnaire</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Notre équipe est composée de talents engagés issus d’horizons complémentaires, unie par une ambition commune : propulser l’Afrique vers un futur durable.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <TeamMemberCard key={i} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
}
