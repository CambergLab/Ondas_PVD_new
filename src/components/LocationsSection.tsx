import { MapPin, Clock, Phone, Mail, Users, Calendar } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Ondas Providence",
      city: "Providence, RI",
      venue: "Providence BJJ",
      address: "4 Aurora St, Providence, RI 02908",
      description:
        "Our Providence location offers both adult classes and Sunday roda sessions.",
      contact: {
        name: "Zuca",
        email: "Raqueldvc@gmail.com",
        phone: "(978) 908-6027",
      },
      classes: {
        adult: "Monday & Wednesday - 6:30pm to 8:00pm",
        roda: "Sunday - 11:30am to 2:00pm",
      },
      highlight: true,
    },
    {
      name: "Ondas Warwick",
      city: "Warwick, RI",
      venue: "New Wave Martial Arts & Fitness",
      address: "2327 W Shore Rd, Warwick, RI 02889",
      description:
        "Our Warwick location provides classes for both kids and adults throughout the week.",
      contact: {
        phone: "(401) 261-3485",
        email: "Info@NewWaveMartialArts.com",
        website: "newwavemartialarts.com",
      },
      classes: {
        kids: "Wednesdays & Fridays - 5:30pm to 6:30pm",
        adult: "Wednesdays & Fridays - 6:30pm to 8:00pm",
      },
      highlight: false,
    },
    {
      name: "Ondas Fall River",
      city: "Fall River, MA",
      venue: "AMP Academy LLC",
      address: "418 Quequechan Street, 2nd Floor, Fall River, MA 02723",
      description:
        "Our Fall River location serves the Massachusetts community with kids and adult programs.",
      contact: {
        phone: "(508) 567-1002",
        email: "info@ampacademygym.com",
        website: "ampacademygym.com",
      },
      classes: {
        kids: "Tuesdays & Thursdays - 6:00pm to 7:00pm",
        adult: "Tuesdays & Thursdays - 7:00pm to 8:30pm",
      },
      highlight: false,
    },
  ];

  return (
    <section className="bg-capoeira-medium-gray section-padding">
      <div className="container-capoeira">
        <div className="text-center mb-12">
          <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border mx-auto">
            Grupo Ondas Locations
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            Grupo Ondas is Rhode Island's premier capoeira group with three
            locations serving Providence, Warwick, and Fall River communities.
            Find the location nearest you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`${
                location.highlight
                  ? "bg-capoeira-yellow/10 border-2 border-capoeira-yellow transform scale-105"
                  : "bg-white"
              } rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    location.highlight
                      ? "bg-capoeira-yellow text-capoeira-blue"
                      : "bg-capoeira-green text-white"
                  }`}
                >
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-2">
                  {location.name}
                </h3>
                <span className="text-capoeira-green font-medium text-lg">
                  {location.city}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-capoeira-blue mb-2">
                    Venue
                  </h4>
                  <p className="text-gray-700 font-medium">{location.venue}</p>
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-capoeira-blue mb-2">
                    Classes
                  </h4>
                  <div className="space-y-2">
                    {location.classes.kids && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-capoeira-green" />
                        <span className="text-gray-700">
                          <strong>Kids:</strong> {location.classes.kids}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-capoeira-green" />
                      <span className="text-gray-700">
                        <strong>Adults:</strong> {location.classes.adult}
                      </span>
                    </div>
                    {location.classes.roda && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-capoeira-green" />
                        <span className="text-gray-700">
                          <strong>Roda:</strong> {location.classes.roda}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-capoeira-blue mb-2">
                    Contact
                  </h4>
                  <div className="space-y-1 text-sm">
                    {location.contact.name && (
                      <p className="text-gray-700">
                        <strong>Contact:</strong> {location.contact.name}
                      </p>
                    )}
                    {location.contact.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-capoeira-green" />
                        <span className="text-gray-700">
                          {location.contact.phone}
                        </span>
                      </div>
                    )}
                    {location.contact.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-capoeira-green" />
                        <span className="text-gray-700">
                          {location.contact.email}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-200">
                  {location.description}
                </p>
              </div>

              {location.highlight && (
                <div className="mt-4 p-3 bg-capoeira-blue/10 rounded border-l-4 border-capoeira-blue">
                  <p className="text-capoeira-blue font-medium text-sm">
                    🏠 This is your local Providence location!
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-3">
              One Group, Three Communities
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All three locations are part of the same Grupo Ondas family,
              sharing the same traditions, techniques, and capoeira philosophy.
              Visit any location and experience the art of capoeira with our
              welcoming community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
