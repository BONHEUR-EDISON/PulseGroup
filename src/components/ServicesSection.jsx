'use client';

import { FaTools, FaBolt, FaLaptopCode } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'Construction',
      text: 'Des infrastructures modernes, durables et conçues pour durer.',
      icon: <FaTools />,
      link: '/construction',
    },
    {
      title: 'Énergie',
      text: 'Solutions énergétiques renouvelables et accessibles pour tous.',
      icon: <FaBolt />,
      link: '/energie',
    },
    {
      title: 'Technologies',
      text: 'Innover grâce aux technologies pour transformer les communautés.',
      icon: <FaLaptopCode />,
      link: '/technologies',
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Nos Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez comment Pulse Drc façonne l’avenir à travers ses pôles clés.
          </p>
        </div>

        {/* Grille responsive */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
