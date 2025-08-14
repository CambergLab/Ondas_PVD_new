import { Users, Music, Zap, Heart } from "lucide-react";

const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "All Ages Welcome",
      description:
        "Classes designed for children and adults, with separate sessions for different skill levels and age groups.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Traditional Music",
      description:
        "Learn to play authentic capoeira instruments including berimbau, pandeiro, and atabaque.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Physical Fitness",
      description:
        "Develop strength, flexibility, coordination, and cardiovascular health through dynamic movements.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cultural Connection",
      description:
        "Connect with Afro-Brazilian heritage and become part of a global capoeira community.",
    },
  ];

  return (
    <section className="bg-capoeira-medium-gray section-padding">
      <div className="container-capoeira">
        <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-capoeira-green mb-4">{offering.icon}</div>
              <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-3">
                {offering.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
