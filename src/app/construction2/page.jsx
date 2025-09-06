import SectionCard from "@/components/construction/SectionCard";

export default function ConstructionPage() {
  return (
    <section className="space-y-12 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-teal-600">Construction durable et innovante</h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Chez Pulse dRC, nous combinons innovation, savoir-faire technique et durabilité pour bâtir l'avenir. Découvrez nos trois pôles d’expertise majeurs.
      </p>

      <div className="space-y-8">
        <SectionCard
          title="Architecture & Design"
          description="Tout ce qui est plan, style, esthétique et fonctionnalité pour créer des espaces harmonieux et modernes."
        />
        <SectionCard
          title="Ingénierie & Études"
          description="Dimensionnement, calculs, modélisation et bureau d’études pour garantir la solidité et la viabilité technique."
        />
        <SectionCard
          title="Construction & Rénovation"
          description="Exécution des chantiers, réhabilitation et modernisation pour concrétiser vos projets avec qualité."
        />
      </div>
    </section>
  );
}
