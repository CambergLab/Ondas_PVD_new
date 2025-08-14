import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Heart, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-24 md:hero-padding bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 39, 118, 0.7), rgba(0, 156, 59, 0.7)), url('https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg')`,
          }}
        >
          <div className="container-capoeira text-center text-white">
            <h1 className="font-montserrat text-4xl md:text-hero font-bold mb-6">
              About Ondas Providence
            </h1>
            <p className="text-body-large max-w-3xl mx-auto leading-relaxed">
              Learn about our history, leadership, and the philosophy of
              capoeira that guides our community.
            </p>
          </div>
        </section>

        {/* Our History */}
        <section className="bg-white section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Our History
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Grupo Ondas was established in 2000 by Mestre Tigri in
                  Providence, Rhode Island. We are the only dedicated capoeira
                  group in Rhode Island, with a strong presence in the local
                  community.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our group is based in Warwick and Providence, Rhode Island,
                  with additional activities in Fall River, Massachusetts. We
                  have performed at numerous local events, including WaterFire
                  Providence in August 2019 and September 2018 at the Waterplace
                  Park Basin Stage.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  The Multicultural Center in Providence was our first home, and
                  we continue to maintain strong ties to the local community
                  while sharing the rich cultural traditions of capoeira.
                </p>
                <div className="flex items-center gap-4 bg-capoeira-yellow/10 p-4 rounded-lg">
                  <Calendar className="w-6 h-6 text-capoeira-green" />
                  <span className="font-montserrat font-bold text-capoeira-blue">
                    Established in 2000 - Over 25 years of tradition
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/29804131/pexels-photo-29804131.jpeg"
                  alt="Capoeira roda in action"
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-capoeira-blue/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Leadership */}
        <section className="bg-capoeira-medium-gray section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mestre Tabareu */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-capoeira-green rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                      Mestre Tabareu Dos Palmares
                    </h3>
                    <p className="text-capoeira-green font-medium">
                      Current Group Leader
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The current group leader, Mestre Tabareu, began training
                    Capoeira in the USA in 1995 and has mastered both Capoeira
                    Angola and Contemporânea styles.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    He is of Dominican descent, making him the first mestre of
                    Dominican descent worldwide. He became the first Capoeira
                    Mestre promoted by Mestre Tigri and currently leads classes
                    at multiple locations throughout Rhode Island and
                    Massachusetts.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Known for his dynamic teaching style that emphasizes both
                    the martial and cultural aspects of capoeira, he regularly
                    leads Sunday classes at Providence BJJ, incorporating
                    traditional roda and music.
                  </p>
                  <div className="bg-capoeira-yellow/10 p-3 rounded border-l-4 border-capoeira-yellow">
                    <p className="text-capoeira-blue font-medium text-sm">
                      🏆 First Capoeira Mestre of Dominican descent worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Mestre Tigri */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-capoeira-blue rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                      Mestre Tigri
                    </h3>
                    <p className="text-capoeira-green font-medium">
                      Founder & Visionary
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The founder of Grupo Ondas, Mestre Tigri established the
                    first dedicated capoeira group in Rhode Island in 2000.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As the first Capoeira Mestre of Cape Verdean descent, his
                    vision has shaped the group's inclusive philosophy and
                    commitment to preserving authentic capoeira traditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His legacy continues to guide our community's approach to
                    teaching and sharing the art of capoeira with people of all
                    backgrounds and ages.
                  </p>
                  <div className="bg-capoeira-green/10 p-3 rounded border-l-4 border-capoeira-green">
                    <p className="text-capoeira-blue font-medium text-sm">
                      🌟 First Capoeira Mestre of Cape Verdean descent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Locations */}
        <section className="bg-white section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Our Training Locations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Warwick */}
              <div className="bg-capoeira-light-gray p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-capoeira-green" />
                  <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                    Warwick, Rhode Island
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-capoeira-blue">
                    New Wave Martial Arts & Fitness
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Classes are held offering a supportive, family-oriented
                    environment for capoeira training. The facility is open
                    Monday through Saturday with varying hours, providing a
                    convenient location for Warwick area practitioners.
                  </p>
                  <div className="bg-capoeira-yellow/20 p-2 rounded text-sm">
                    <strong>Schedule:</strong> Wednesday & Friday, 6:30-8:00 PM
                  </div>
                </div>
              </div>

              {/* Providence */}
              <div className="bg-capoeira-light-gray p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-capoeira-green" />
                  <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                    Providence, Rhode Island
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-capoeira-blue">
                    Providence BJJ & India Point Park
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Providence BJJ hosts Sunday capoeira classes, featuring
                    traditional roda and music instruction. The venue emphasizes
                    social justice alongside martial arts training. Outdoor
                    practice sessions are also held at India Point Park during
                    warmer months.
                  </p>
                  <div className="bg-capoeira-green/20 p-2 rounded text-sm">
                    <strong>Features:</strong> Traditional roda & outdoor
                    sessions
                  </div>
                </div>
              </div>

              {/* Fall River */}
              <div className="bg-capoeira-light-gray p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-capoeira-green" />
                  <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                    Fall River, Massachusetts
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-capoeira-blue">AMP Academy</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Capoeira classes incorporate music, dancing, acrobatics, and
                    self-defense, emphasizing capoeira as a complete cultural
                    experience suitable for various ages and skill levels.
                  </p>
                  <div className="bg-capoeira-blue/20 p-2 rounded text-sm">
                    <strong>Focus:</strong> Complete cultural experience for all
                    ages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Capoeira? */}
        <section className="bg-capoeira-medium-gray section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              What is Capoeira?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Capoeira is an Afro-Brazilian martial art with deep roots in
                  the history of enslaved African people in Brazil. It emerged
                  as a complex cultural practice that combined fighting
                  techniques, cultural customs, dances, rituals, and resistance
                  against oppression.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Capoeira embodies the spirit of rebellion, cultural
                  remembrance, tradition, resilience, freedom, and community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <Heart className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Rebellion
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Born from resistance against oppression
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <Users className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Community
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Building connections through shared practice
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <Calendar className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Tradition
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Preserving ancestral customs and rituals
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <Star className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Freedom
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Expression through movement and music
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="bg-white section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Community Involvement
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Ondas Providence is deeply committed to sharing capoeira with
                  the broader Rhode Island community. We regularly perform at
                  cultural events and festivals, bringing the beauty and energy
                  of capoeira to diverse audiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                    <div className="w-3 h-3 bg-capoeira-yellow rounded-full"></div>
                    <span className="text-gray-700">
                      WaterFire Providence performances (2018, 2019)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                    <div className="w-3 h-3 bg-capoeira-yellow rounded-full"></div>
                    <span className="text-gray-700">
                      Waterplace Park Basin Stage events
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                    <div className="w-3 h-3 bg-capoeira-yellow rounded-full"></div>
                    <span className="text-gray-700">
                      Local schools and cultural centers
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                    <div className="w-3 h-3 bg-capoeira-yellow rounded-full"></div>
                    <span className="text-gray-700">
                      Community festivals and celebrations
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-capoeira-yellow/10 border-2 border-capoeira-yellow rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To preserve and share the authentic traditions of capoeira
                  while creating an inclusive community where people of all
                  backgrounds can experience this beautiful art form.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe capoeira has the power to build bridges between
                  cultures, promote physical and mental well-being, and foster a
                  sense of belonging and resilience in our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Classes */}
        <section className="bg-capoeira-medium-gray section-padding">
          <div className="container-capoeira text-center">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border mx-auto">
              Join Our Classes
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ready to become part of the Ondas Providence family? Whether
                you're a complete beginner or an experienced capoeirista, we
                welcome you to join our community and discover the
                transformative power of capoeira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-capoeira-green hover:bg-capoeira-green/90 text-white font-montserrat font-semibold px-8 py-3 text-lg"
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Schedule Free Intro Class
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-capoeira-blue text-capoeira-blue hover:bg-capoeira-blue hover:text-white font-montserrat font-semibold px-8 py-3 text-lg"
                  onClick={() => (window.location.href = "/")}
                >
                  View Class Schedule
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
