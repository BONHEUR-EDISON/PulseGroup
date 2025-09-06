export default function ConstructionSectionCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-teal-600 mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
