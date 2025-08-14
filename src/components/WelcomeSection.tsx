const WelcomeSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-capoeira">
        <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
          Welcome to Ondas Providence
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Founded in 2000 by the legendary Mestre Tigri (Dr. Silas Pinto),
              Ondas Providence has been Rhode Island's gateway to the rich world
              of capoeira for over two decades.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Under the expert guidance of Mestre Tabareu Dos Palmares (Joel
              Pasian), our group continues to honor the traditions of this
              Afro-Brazilian martial art while making it accessible to people of
              all ages and backgrounds.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Capoeira is more than just a martial art—it's a complete cultural
              experience that combines self-defense, acrobatics, music, singing,
              and dance in a unique and captivating way.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg"
              alt="Capoeira practitioners performing in a roda"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-capoeira-blue/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
