import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, FileText, Clock, AlertCircle } from "lucide-react";

const ImportGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-capoeira-light-gray section-padding">
          <div className="container-capoeira text-center">
            <h1 className="font-montserrat text-4xl md:text-hero font-bold text-capoeira-blue mb-6">
              Import Guide
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Information about importing capoeira instruments, clothing, and
              music from Brazil.
            </p>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="bg-white section-padding">
          <div className="container-capoeira">
            <div className="max-w-4xl mx-auto">
              <div className="bg-capoeira-yellow/10 border-2 border-capoeira-yellow rounded-lg p-8 text-center mb-8">
                <AlertCircle className="w-12 h-12 text-capoeira-yellow mx-auto mb-4" />
                <h2 className="font-montserrat text-2xl font-bold text-capoeira-blue mb-4">
                  Page Under Construction
                </h2>
                <p className="text-gray-700 mb-6">
                  We're currently working on this comprehensive guide to help
                  you import authentic capoeira equipment from Brazil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-capoeira-light-gray p-6 rounded-lg text-center">
                  <Package className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Instruments
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Berimbaus, pandeiros, atabaques, and more authentic
                    instruments
                  </p>
                </div>
                <div className="bg-capoeira-light-gray p-6 rounded-lg text-center">
                  <FileText className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Documentation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Customs forms, shipping requirements, and legal guidelines
                  </p>
                </div>
                <div className="bg-capoeira-light-gray p-6 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Timing
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Delivery schedules and customs processing times
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  In the meantime, if you have questions about importing
                  capoeira items, feel free to contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-capoeira-green hover:bg-capoeira-green/90 text-white font-montserrat font-semibold"
                    onClick={() => (window.location.href = "/#contact")}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    className="border-capoeira-blue text-capoeira-blue hover:bg-capoeira-blue hover:text-white font-montserrat font-semibold"
                    onClick={() => (window.location.href = "/")}
                  >
                    Return to Homepage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImportGuide;
