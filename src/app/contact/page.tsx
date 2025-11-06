import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
            Contact
          </h1>
          {/* Contenu de la page à ajouter */}
        </div>
      </section>
      <Footer />
    </main>
  );
}

