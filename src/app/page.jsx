'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import BranchCard from '@/components/BranchCard';
import ProjectCard from '@/components/ProjectCard';
import StatsSection from '@/components/StatsSection';
import Timeline from '@/components/Timeline';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  const branches = [
    {
      id: 1,
      title: 'Construction',
      description: 'Bâtir des infrastructures solides et durables pour l’avenir.',
      icon: '/images/branches/construction.svg',
      href: '/construction',
    },
    {
      id: 2,
      title: 'Énergie',
      description: 'Solutions innovantes pour une énergie propre et accessible.',
      icon: '/images/branches/energie.svg',
      href: '/energie',
    },
    {
      id: 3,
      title: 'Technologies',
      description: 'Intégration des technologies avancées au service de votre projet.',
      icon: '/images/branches/technologies.svg',
      href: '/technologies',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Complexe résidentiel Kinshasa',
      description: 'Un projet moderne alliant confort et durabilité.',
      image: '/images/projects/project1.jpg',
      href: '/projects/1',
    },
    {
      id: 2,
      title: 'Ferme solaire rurale',
      description: 'Approvisionnement énergétique pour les communautés isolées.',
      image: '/images/projects/project2.jpg',
      href: '/projects/2',
    },
  ];

  const blogs = [
    {
      id: 1,
      title: 'Les innovations en énergie renouvelable',
      excerpt: 'Découvrez comment Pulse Technologies révolutionne le secteur énergétique...',
      image: '/images/blogs/blog1.jpg',
      href: '/blog/1',
    },
    {
      id: 2,
      title: 'Construire pour un avenir durable',
      excerpt: 'Nos conseils pour intégrer l’éco-construction dans vos projets.',
      image: '/images/blogs/blog2.jpg',
      href: '/blog/2',
    },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Merci pour votre message, nous vous répondrons rapidement !");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Hero />

      {/* Branches */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Nos Branches d’Activités
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {branches.map(branch => (
            <BranchCard key={branch.id} {...branch} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Timeline */}
      <Timeline />

      {/* Projets */}
      <section className="bg-gray-100 dark:bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Projets Récents
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Actualités & Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-teal-600 dark:bg-teal-700 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Contactez-nous</h2>
          <p className="mb-8 text-lg">
            Une question ? Un projet ? Envoyez-nous un message, nous vous répondrons dans les plus brefs délais.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.email}
              onChange={handleInput}
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Votre message"
              className="w-full px-4 py-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              value={formData.message}
              onChange={handleInput}
            />
            <button
              type="submit"
              className="w-full bg-white text-teal-600 font-bold py-3 px-6 rounded hover:bg-gray-100 transition"
            >
              Envoyer
            </button>
          </form>

          {formStatus && (
            <p className="mt-6 text-sm font-medium">{formStatus}</p>
          )}
        </div>
      </section>
    </main>
  );
}
