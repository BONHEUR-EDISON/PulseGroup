import React, { useState } from 'react';

export default function BeforeAfterSlider({ before, after, title }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="relative h-64 mb-8">
      <img src={before} alt="Avant" className="absolute inset-0 w-full h-full object-cover" />
      <div style={{ width: revealed ? '100%' : '50%' }} className="absolute inset-y-0 left-0 overflow-hidden transition-all duration-500">
        <img src={after} alt="Après" className="w-full h-full object-cover" />
      </div>
      <button onClick={() => setRevealed(!revealed)} className="absolute bottom-4 right-4 bg-primary text-white py-1 px-3 rounded">Avant/Après</button>
      <h4 className="absolute top-4 left-4 text-white font-semibold">{title}</h4>
    </div>
  );
}
