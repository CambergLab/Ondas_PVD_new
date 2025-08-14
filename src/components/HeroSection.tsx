import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://cdn.builder.io/api/v1/image/assets%2F1fc37cd62fb14e1f9770921a95c189a9%2Ff8868637dd7a40d5af1a8ae96ecc0335?format=webp&width=800')`,
      }}
    >
      <div className="container-capoeira hero-padding flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="text-white max-w-2xl">
          <h1 className="font-montserrat text-4xl md:text-hero font-bold leading-tight mb-6">
            Experience the Art of Capoeira
          </h1>
          <p className="text-body-large mb-8 leading-relaxed text-white/90">
            Join Rhode Island's premier capoeira group and discover the unique
            blend of martial arts, music, and cultural expression that has
            captivated people for centuries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-capoeira-yellow text-capoeira-blue hover:bg-capoeira-yellow/90 font-montserrat font-semibold px-8 py-3 text-lg"
            >
              Join Our Classes
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-capoeira-blue font-montserrat font-semibold px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
