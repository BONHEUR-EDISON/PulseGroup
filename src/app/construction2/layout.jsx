import ConstructionNavbar from "@/components/construction/Navbar";

export const metadata = {
  title: "Construction - Pulse dRC",
  description: "Architecture, ingénierie et construction durable avec Pulse dRC",
};

export default function ConstructionLayout({ children }) {
  return (
    <>
      <ConstructionNavbar />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-6">
        {children}
      </main>
    </>
  );
}
