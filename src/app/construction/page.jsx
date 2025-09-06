// src/app/construction/page.jsx


import ConstructionHero from '@/components/construction/ConstructionHero';
import ConstructionServiceFeatures from '@/components/construction/ConstructionServiceFeatures';
import ProjectsHighlight from '@/components/construction/ProjectsHighlight';
import Timeline from '@/components/construction/Timeline';
import Testimonials from '@/components/construction/Testimonials';
import QuickQuoteForm from '@/components/construction/QuickQuoteForm';
import React from 'react';
import TimelineCirculaire from '@/components/construction/TimelineCirculaire';

export default function ConstructionPage() {
  const steps = [
    { year: '2020', event: 'Fondation' },
    { year: '2022', event: 'Projets Pilotes' },
    { year: '2023', event: 'Transition Écologique' },
    { year: '2025', event: 'Expansion RDC' },
  ];

  return (
    <>
      <ConstructionHero />
      <ConstructionServiceFeatures />
      <ProjectsHighlight />
      <TimelineCirculaire steps={steps} />
      <Testimonials />
      <QuickQuoteForm />
    </>
  );
}
