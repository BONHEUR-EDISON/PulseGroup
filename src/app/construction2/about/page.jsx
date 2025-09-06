import React from "react";
import { FaHandsHelping, FaLeaf, FaLightbulb, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaHandsHelping className="text-teal-600 w-8 h-8" />,
    title: "Collaboration",
    description:
      "Nous travaillons main dans la main avec nos clients et partenaires pour réussir chaque projet.",
  },
  {
    icon: <FaLeaf className="text-teal-600 w-8 h-8" />,
    title: "Durabilité",
    description:
      "Engagés dans la construction responsable, nous intégrons des pratiques écoresponsables.",
  },
  {
    icon: <FaLightbulb className="text-teal-600 w-8 h-8" />,
    title: "Innovation",
    description:
      "Nous utilisons les dernières technologies pour garantir qualité et efficacité.",
  },
  {
    icon: <FaUsers className="text-teal-600 w-8 h-8" />,
    title: "Intégrité",
    description:
      "Nous mettons l’honnêteté et la transparence au cœur de toutes nos actions.",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Vision & mission */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Construire l’avenir avec intégrité et passion
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Chez <span className="font-semibold text-teal-600">[Nom de ta société]</span>, nous transformons vos idées en espaces concrets, durables et inspirants.
          Notre engagement : un travail collaboratif, innovant et respectueux de l’environnement.
        </p>
      </div>

      {/* Nos valeurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20">
        {values.map(({ icon, title, description }) => (
          <div key={title} className="space-y-4">
            <div className="mx-auto">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>

      {/* Engagement équipe / CTA */}
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Notre équipe expérimentée met tout en œuvre pour concrétiser vos projets, dans un esprit d’excellence et de respect.
        </p>
        <a
          href="/about"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
        >
          En savoir plus sur nous
        </a>
      </div>
    </section>
  );
}
