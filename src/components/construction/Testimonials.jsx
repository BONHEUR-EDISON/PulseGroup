// src/app/construction/components/Testimonials.jsx
export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <h2 className="text-3xl text-center font-bold mb-8">Ce que disent nos clients</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <blockquote className="italic border-l-4 pl-6 text-lg">
          « Leur engagement et leur professionnalisme ont été essentiels pour mener le projet à bien, dans le respect des délais et du budget. »
          <cite className="block mt-4 text-right font-semibold">— Client Satisfait</cite>
        </blockquote>
      </div>
    </section>
  );
}
