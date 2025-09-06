"use client";
import { useState } from 'react';

export default function QuickQuoteForm() {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Obtenez un devis express</h2>
      {submitted ? (
        <p className="text-center text-green-600">Merci ! Nous vous contacterons bientôt.</p>
      ) : (
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <input className="w-full p-3 border rounded" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="w-full p-3 border rounded" placeholder="Type de projet" value={project} onChange={(e) => setProject(e.target.value)} required />
          <button className="w-full bg-primary text-white py-3 rounded hover:bg-secondary transition">Demander un devis</button>
        </form>
      )}
    </section>
  );
}
