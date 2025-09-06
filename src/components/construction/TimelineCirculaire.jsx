// src/app/construction/components/TimelineCirculaire.jsx
export default function TimelineCirculaire({ steps }) {
  return (
    <section className="py-16 bg-lightbg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Notre histoire</h2>
      <div className="flex justify-center">
        <div className="relative w-64 h-64">
          {steps.map((step, idx) => {
            const angle = (360 / steps.length) * idx;
            return (
              <div
                key={idx}
                style={{
                  transform: `rotate(${angle}deg) translate(0, -120px) rotate(-${angle}deg)`
                }}
                className="absolute top-1/2 left-1/2 w-max text-center"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  {step.year}
                </div>
                <span className="text-sm">{step.event}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
