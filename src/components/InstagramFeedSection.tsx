import { ExternalLink, Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramFeedSection = () => {
  // Mock Instagram posts data (in a real implementation, this would come from Instagram API)
  const instagramPosts = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg",
      caption:
        "Beautiful roda session at our Warwick location! The energy was incredible today. #capoeira #grupoondas #rhodeisland",
      likes: 127,
      comments: 23,
      timestamp: "2 days ago",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/29804131/pexels-photo-29804131.jpeg",
      caption:
        "Learning traditional berimbau rhythms with Mestre Tabareu. Music is the soul of capoeira! 🎵 #capoeiraroda #berimbau #music",
      likes: 89,
      comments: 15,
      timestamp: "4 days ago",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg",
      caption:
        "Kids class graduation ceremony! So proud of these young capoeiristas 👏 #capoeiraforall #graduation #proudmoment",
      likes: 156,
      comments: 31,
      timestamp: "1 week ago",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/29804131/pexels-photo-29804131.jpeg",
      caption:
        "Outdoor training at India Point Park - nothing beats practicing capoeira with this view! 🌊 #outdoortraining #providence",
      likes: 94,
      comments: 18,
      timestamp: "1 week ago",
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/4238872/pexels-photo-4238872.jpeg",
      caption:
        "WaterFire performance prep! Can't wait to share our art with the community 🔥 #waterfire #performance #community",
      likes: 203,
      comments: 42,
      timestamp: "2 weeks ago",
    },
    {
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/29804131/pexels-photo-29804131.jpeg",
      caption:
        "Advanced ginga flow session. The foundation of all capoeira movement! #ginga #fundamentals #capoeiratechnique",
      likes: 78,
      comments: 12,
      timestamp: "2 weeks ago",
    },
  ];

  return (
    <section className="bg-capoeira-medium-gray section-padding">
      <div className="container-capoeira">
        <div className="text-center mb-8">
          <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border mx-auto">
            <p>Follow our Journey</p>
          </h2>
        </div>

        {/* Split layout: Content on left, Image space on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <p>
                <br />
              </p>
            </p>

            {/* Instagram Header */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-capoeira-green to-capoeira-blue rounded-full flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                      @grupoondascapoeira
                    </h3>
                    <p className="text-gray-600">
                      Official Instagram of Ondas Providence Capoeira Group
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      1,247 followers • 432 following • 789 posts
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-gradient-to-r from-capoeira-green to-capoeira-blue text-white hover:opacity-90 font-montserrat font-semibold"
                  onClick={() =>
                    window.open(
                      "https://instagram.com/grupoondascapoeira",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Us
                </Button>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-capoeira-blue text-capoeira-blue hover:bg-capoeira-blue hover:text-white font-montserrat font-semibold px-8"
                onClick={() =>
                  window.open(
                    "https://instagram.com/grupoondascapoeira",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Posts on Instagram
              </Button>
            </div>
          </div>

          {/* Right side - November Calendar */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="font-montserrat font-bold text-2xl text-capoeira-blue mb-2">
                November Calendar 🤸🏻‍♀️🏃🏽‍♀️
              </h3>
              <p className="text-gray-600">
                Stay updated with our latest classes, rodas, and special events
              </p>
            </div>
            <div className="w-full max-w-md mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-capoeira-yellow/20 hover:border-capoeira-yellow/40 transition-all duration-300 transform hover:scale-105 p-6">
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/02 – Sunday</span>
                      <p className="text-gray-700">Roda at Providence BJJ</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/03 – Monday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/06 – Thursday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/09 – Sunday</span>
                      <p className="text-gray-700">
                        Roda at Providence BJJ<br />
                        Taba and Zuca at Jogo de Cinturas in Vermont
                      </p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/10 – Monday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/11 – Tuesday</span>
                      <p className="text-gray-700">ONDAS Roda at AMP (6–8:30pm)</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/13 – Thursday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/16 – Sunday</span>
                      <p className="text-gray-700">Roda at Providence BJJ</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/17 – Monday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/20 – Thursday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/21 – Friday</span>
                      <p className="text-gray-700">ONDAS Roda at NewWave (6:30–8:30pm)</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/23 – Sunday</span>
                      <p className="text-gray-700">Roda at Providence BJJ</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/24 – Monday</span>
                      <p className="text-gray-700">Class</p>
                    </div>
                    <div className="text-sm bg-capoeira-green/10 p-2 rounded">
                      <span className="font-bold text-capoeira-green">11/27 – Thursday</span>
                      <p className="text-gray-700">Thanksgiving – NO CLASS ‼️</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-capoeira-blue">11/30 – Sunday</span>
                      <p className="text-gray-700">ONDAS Open Roda at Providence BJJ</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-600 italic">
                    ✨ ONDAS Roda in any location is open to any ONDAS student ‼️
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Events and class schedule for November
                </p>
                <div className="flex gap-2 justify-center">
                  <span className="bg-capoeira-green/10 text-capoeira-green px-3 py-1 rounded-full text-xs font-medium">
                    Monthly Updates
                  </span>
                  <span className="bg-capoeira-blue/10 text-capoeira-blue px-3 py-1 rounded-full text-xs font-medium">
                    Events & Workshops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
