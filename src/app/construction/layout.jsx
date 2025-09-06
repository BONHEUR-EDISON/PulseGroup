// app/construction/layout.jsx

import ConstructionNavbar from "@/components/construction/ConstructionNavbar";

export const metadata = {
  title: 'Construction | Pulse',
  description: 'Branche Construction de Pulse',
};

export default function ConstructionLayout({ children }) {
  return (
    <>
      <ConstructionNavbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
