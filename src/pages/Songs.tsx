import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Music, BookOpen, Users } from "lucide-react";

const Songs = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const songCategories = [
    {
      title: "Ladainha",
      description:
        "Solo songs that open the roda, telling stories and conveying wisdom",
      icon: <BookOpen className="w-6 h-6" />,
      songs: [
        {
          title: "Iê, Viva Meu Mestre",
          portuguese:
            "Iê, viva meu mestre\nIê, viva meu mestre que me ensinou\nIê, a capoeira\nIê, que meu mestre me ensinou",
          english:
            "Hey, long live my master\nHey, long live my master who taught me\nHey, capoeira\nHey, that my master taught me",
          meaning:
            "A tribute to the masters who pass down the knowledge of capoeira",
        },
        {
          title: "Quem Vem Lá",
          portuguese:
            "Quem vem lá sou eu\nQuem vem lá sou eu\nPisando devagar\nQuem vem lá sou eu",
          english:
            "Who comes there, it's me\nWho comes there, it's me\nStepping slowly\nWho comes there, it's me",
          meaning: "About approaching with respect and awareness in the roda",
        },
      ],
    },
    {
      title: "Corridos",
      description: "Call and response songs that drive the energy of the roda",
      icon: <Users className="w-6 h-6" />,
      songs: [
        {
          title: "Paranauê",
          portuguese:
            "Paranauê paranauá\nParanauê paranauá\nÉ paranauê\nÉ paranauá",
          english:
            "Paranauê paranauá\nParanauê paranauá\nIt's paranauê\nIt's paranauá",
          meaning:
            "Traditional call that energizes the roda and calls participants to action",
        },
        {
          title: "Zum Zum Zum",
          portuguese:
            "Zum zum zum\nCapoeira mata um\nZum zum zum\nCapoeira mata um",
          english:
            "Zum zum zum\nCapoeira kills one\nZum zum zum\nCapoeira kills one",
          meaning: "About the power and intensity of capoeira movements",
        },
      ],
    },
    {
      title: "Quadras",
      description: "Four-line verses that tell stories and share philosophy",
      icon: <Music className="w-6 h-6" />,
      songs: [
        {
          title: "Berimbau",
          portuguese: "Berimbau bateu\nCamarada\nÉ hora é hora\nCamarada",
          english: "Berimbau played\nComrade\nIt's time, it's time\nComrade",
          meaning:
            "When the berimbau calls, it's time to enter the roda and play",
        },
        {
          title: "Capoeira de Angola",
          portuguese:
            "Capoeira de Angola\nÉ mandinga de escravo\nEm vez de usar a chibata\nUsava a capoeiragem",
          english:
            "Capoeira of Angola\nIs the magic of slaves\nInstead of using the whip\nThey used capoeira",
          meaning:
            "Honoring the African roots and resistance history of capoeira",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 39, 118, 0.8), rgba(0, 156, 59, 0.8)), url('https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg')`,
          }}
        >
          <div className="container-capoeira text-center text-white">
            <h1 className="font-montserrat text-4xl md:text-hero font-bold mb-6">
              Capoeira Songs & Music
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the rich musical tradition that drives the energy of
              capoeira. From powerful ladainhas to energetic corridos, music is
              the soul of the roda.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white section-padding">
          <div className="container-capoeira">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
                The Music of Capoeira
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In capoeira, music is not just accompaniment—it's the heartbeat
                that guides every movement, tells our stories, and connects us
                to our ancestors. Every song carries history, wisdom, and the
                spirit of resistance that defines capoeira.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-capoeira-light-gray p-6 rounded-lg">
                  <Music className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Rhythm
                  </h3>
                  <p className="text-gray-700">
                    The berimbau sets the pace and style of play
                  </p>
                </div>
                <div className="bg-capoeira-light-gray p-6 rounded-lg">
                  <BookOpen className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Stories
                  </h3>
                  <p className="text-gray-700">
                    Songs preserve history and cultural wisdom
                  </p>
                </div>
                <div className="bg-capoeira-light-gray p-6 rounded-lg">
                  <Users className="w-8 h-8 text-capoeira-green mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-capoeira-blue mb-2">
                    Community
                  </h3>
                  <p className="text-gray-700">
                    Call and response creates unity in the roda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Roda Tradition */}
        <section className="bg-white section-padding">
          <div className="max-w-6xl mx-auto p-3">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full md:w-1/2 px-3 order-2">
                <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
                  The Roda Tradition
                </h2>
                <p className="text-xl font-light leading-relaxed mb-4">
                  Capoeira music is an essential component of the art form,
                  providing rhythm and energy for the roda (circle) where
                  capoeira is played.
                </p>
                <p className="text-xl font-light leading-relaxed mb-4">
                  The music consists of instruments and songs, with lyrics that
                  often tell stories, describe scenes from daily life, or
                  connect to historical and cultural aspects of Afro-Brazilian
                  heritage. In a traditional roda, the music not only sets the
                  pace of the game but also communicates with the players
                  through its lyrics and rhythm.
                </p>
                <p className="text-xl font-light leading-relaxed mb-4">
                  The capoeira roda (circle) has deep cultural and spiritual
                  significance in the practice of capoeira.
                </p>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3">
                    <ul className="flex flex-col mb-6">
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          "Roda" means "wheel" or "circle" in Portuguese
                        </span>
                      </li>
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          It serves as a metaphor for the circle of life
                        </span>
                      </li>
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Illustrates the importance of collective cooperation
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <ul className="flex flex-col mb-6">
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Relies on "axé" (spiritual energy)</span>
                      </li>
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Involves spontaneous interaction between participants
                        </span>
                      </li>
                      <li className="bg-white border border-gray-300 p-2 text-left relative">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Incorporates music, with singers often commenting on
                          the ongoing game
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 order-1">
                <img
                  src="https://related-amethyst-krill.intern.rabbitos.app/final/images/capoeira_roda.jpg"
                  alt="Capoeira Roda"
                  loading="lazy"
                  className="rounded-md shadow-lg w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-6 -mx-3">
              <div className="w-full md:w-5/6 mx-auto px-3">
                <p className="mb-4">
                  In a traditional roda, participants form a circle, with the
                  musicians (bateria) at one end. Two players enter the circle
                  at the foot of the berimbau, and begin their game when the
                  music starts. The energy and style of play are influenced by
                  the rhythm and songs being played.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Songs - Accordion Style */}
        <section className="bg-capoeira-medium-gray section-padding">
          <div className="max-w-6xl mx-auto bg-white p-3">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Song Types in Capoeira
            </h2>
            <div className="w-4/5 mx-auto">
              <div>
                {/* Ladainha Accordion */}
                <div className="bg-white border border-gray-300 rounded-t-md">
                  <h2 className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center w-full p-4 bg-white border-gray-300 rounded-t-md text-left mx-auto"
                      onClick={() => toggleSection("ladainha")}
                    >
                      <strong>Ladainha (Litany)</strong>
                    </button>
                  </h2>
                  {openSection === "ladainha" && (
                    <div className="p-4">
                      <p className="mb-4">
                        The ladainha is an opening solo that tells a story or
                        sets the mood for the roda. It's often sung by the most
                        senior capoeirista present and serves as a moment of
                        reflection before the physical game begins. During the
                        ladainha, players kneel at the foot of the berimbau,
                        listening respectfully.
                      </p>
                    </div>
                  )}
                </div>

                {/* Chula/Louvação Accordion */}
                <div className="bg-white border-l border-r border-b border-gray-300">
                  <h2 className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center w-full p-4 bg-white text-left mx-auto"
                      onClick={() => toggleSection("chula")}
                    >
                      <strong>Chula/Louvação (Praise)</strong>
                    </button>
                  </h2>
                  {openSection === "chula" && (
                    <div className="p-4">
                      <p className="mb-4">
                        The chula or louvação follows the ladainha and is a call
                        and response section that pays respect to ancestors,
                        teachers, and traditions. The leader sings a line, and
                        the chorus (everyone else in the roda) responds with a
                        standard phrase like "Iê" or repeats the line sung by
                        the leader.
                      </p>
                    </div>
                  )}
                </div>

                {/* Corridos Accordion */}
                <div className="bg-white border-l border-r border-b border-gray-300 rounded-b-md">
                  <h2 className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center w-full p-4 bg-white rounded-b-md text-left mx-auto"
                      onClick={() => toggleSection("corridos")}
                    >
                      <strong>Corridos (Running Songs)</strong>
                    </button>
                  </h2>
                  {openSection === "corridos" && (
                    <div className="p-4 rounded-b-md">
                      <p className="mb-4">
                        Corridos are fast-paced songs used during the actual
                        game. They follow a call and response format with short,
                        repetitive verses. These songs often comment on what's
                        happening in the roda or encourage the players. The
                        energy of corridos can influence the speed and style of
                        the game being played.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instruments */}
        <section className="bg-gray-50 section-padding">
          <div className="max-w-6xl mx-auto p-3">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Capoeira Instruments
            </h2>
            <div className="flex flex-wrap -mx-3">
              {/* Berimbau */}
              <div className="w-full md:w-1/3 px-3 mt-6">
                <div className="bg-white rounded-md border border-gray-300 shadow-lg h-full flex flex-col">
                  <div className="flex-grow text-center p-4">
                    <img
                      src="https://related-amethyst-krill.intern.rabbitos.app/final/images/berimbau.jpg"
                      alt="Berimbau"
                      loading="lazy"
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl font-medium mb-2">Berimbau</h3>
                    <p>
                      The most important instrument in capoeira, considered the
                      "master" of the music. It's a musical bow with a gourd
                      resonator. Typically, three berimbaus of different sizes
                      are used in a roda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pandeiro */}
              <div className="w-full md:w-1/3 px-3 mt-6">
                <div className="bg-white rounded-md border border-gray-300 shadow-lg h-full flex flex-col">
                  <div className="flex-grow text-center p-4">
                    <img
                      src="https://related-amethyst-krill.intern.rabbitos.app/final/images/pandeiro.jpg"
                      alt="Pandeiro"
                      loading="lazy"
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl font-medium mb-2">Pandeiro</h3>
                    <p>
                      A tambourine-like percussion instrument originally from
                      East Africa. It provides rhythm and accompaniment to the
                      berimbau during the capoeira roda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Atabaque */}
              <div className="w-full md:w-1/3 px-3 mt-6">
                <div className="bg-white rounded-md border border-gray-300 shadow-lg h-full flex flex-col">
                  <div className="flex-grow text-center p-4">
                    <img
                      src="https://related-amethyst-krill.intern.rabbitos.app/final/images/atabaque.jpg"
                      alt="Atabaque"
                      loading="lazy"
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl font-medium mb-2">Atabaque</h3>
                    <p>
                      A tall, wooden hand drum used to maintain the beat of the
                      music during the roda. It adds depth and energy to the
                      capoeira music ensemble.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Instruments */}
              <div className="w-full md:w-1/2 px-3 mt-6 mx-auto">
                <div className="bg-white rounded-md border border-gray-300 shadow-lg h-full flex flex-col">
                  <div className="flex-grow text-center p-4">
                    <h3 className="text-2xl font-medium mb-2">
                      Additional Instruments
                    </h3>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-1/2 px-3">
                        <p className="mb-4">
                          <strong>Agogô</strong>
                          <br />
                          <span>
                            A double bell instrument that adds a higher-pitched
                            rhythmic element to the music.
                          </span>
                        </p>
                      </div>
                      <div className="w-1/2 px-3">
                        <p className="mb-4">
                          <strong>Reco-reco</strong>
                          <br />
                          <span>
                            A scraper instrument that contributes to the
                            rhythmic texture of capoeira music.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="bg-capoeira-medium-gray section-padding">
          <div className="container-capoeira">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Learn Capoeira Music
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="font-montserrat font-bold text-2xl text-capoeira-blue mb-4">
                  Join Our Music Classes
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Learning capoeira music is an essential part of your capoeira
                  journey. In our classes, you'll learn to play traditional
                  instruments, sing capoeira songs, and understand the deep
                  cultural meanings behind the music.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-montserrat font-bold text-capoeira-blue mb-3">
                      What You'll Learn:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-green rounded-full"></span>
                        <span className="text-gray-700">
                          Berimbau techniques and rhythms
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-green rounded-full"></span>
                        <span className="text-gray-700">
                          Traditional songs and their meanings
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-green rounded-full"></span>
                        <span className="text-gray-700">
                          Pandeiro and atabaque playing
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-green rounded-full"></span>
                        <span className="text-gray-700">
                          Leading the roda with confidence
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-montserrat font-bold text-capoeira-blue mb-3">
                      Class Benefits:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-yellow rounded-full"></span>
                        <span className="text-gray-700">
                          Small group instruction
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-yellow rounded-full"></span>
                        <span className="text-gray-700">
                          Instruments provided for beginners
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-yellow rounded-full"></span>
                        <span className="text-gray-700">
                          Cultural context and history
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-capoeira-yellow rounded-full"></span>
                        <span className="text-gray-700">
                          Performance opportunities
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-gray-50 section-padding">
          <div className="max-w-6xl mx-auto p-3">
            <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
              Additional Resources for Learning Capoeira Songs
            </h2>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-2/3 mx-auto px-3">
                <div className="rounded-md shadow-lg flex flex-col">
                  <a
                    href="#"
                    className="bg-white border border-gray-300 rounded-t-md p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <div className="flex justify-between w-full">
                      <h5 className="text-xl font-medium mb-1">
                        Capoeira Song Compendium
                      </h5>
                    </div>
                    <p className="mb-1">
                      91-page document with translations of traditional capoeira
                      songs
                    </p>
                  </a>
                  <a
                    target="_blank"
                    href="https://capoeiralyrics.info/"
                    className="bg-white border-l border-r border-b border-gray-300 p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <div className="flex justify-between w-full">
                      <h5 className="text-xl font-medium mb-1">
                        Capoeira Lyrics Info
                      </h5>
                    </div>
                    <p className="mb-1">
                      Online resource with lyrics, translations, and recordings
                    </p>
                  </a>
                  <a
                    href="#"
                    className="bg-white border border-gray-300 rounded-b-md p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <div className="flex justify-between w-full">
                      <h5 className="text-xl font-medium mb-1">
                        Mestre Acordeon's Capoeira Song Collection
                      </h5>
                    </div>
                    <p className="mb-1">
                      Comprehensive collection from one of capoeira's most
                      respected masters
                    </p>
                  </a>
                </div>
                <p className="text-center mt-6 mb-4">
                  <small className="text-sm leading-6 text-center">
                    Note: This collection represents a small sample of capoeira
                    songs. For a more comprehensive collection, consultation
                    with capoeira masters and specialized resources is
                    recommended.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Songs;
