import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClassScheduleSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-capoeira">
        <div className="max-w-container mx-auto bg-capoeira-light-gray px-4">
          <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold border-b-4 border-capoeira-yellow pb-2 text-center mx-auto mt-8 mb-4">
            Class Schedule
          </h2>
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-capoeira-yellow/10 rounded-lg shadow-lg text-center py-4 px-6">
              <h3 className="font-montserrat font-bold text-2xl text-brown-600 mb-4">
                Sunday Roda
              </h3>
              <ul className="text-center my-6">
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Days:
                  </strong>
                  <span>Sunday</span>
                </li>
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Time:
                  </strong>
                  <span> 11:30 AM - 2 PM</span>
                </li>
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Location:
                  </strong>
                  <span>
                    {" "}
                    PVD BJJ - 4 Aurora St, Providence, RI&nbsp;
                    <br />
                    Weather permitting Roda at India Point Park
                    <br />
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center py-4 px-6">
              <h3 className="font-montserrat font-bold text-2xl text-brown-600 mb-4">
                Regular Classes
              </h3>
              <ul className="text-center my-6">
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Days:
                  </strong>
                  <span> Monday and Thursday</span>
                </li>
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Time:
                  </strong>
                  <span> 6:30 PM - 8:00 PM</span>
                </li>
                <li className="text-lg leading-7 mb-3 text-center">
                  <strong className="text-lg font-bold leading-7 text-center">
                    Location:
                  </strong>
                  <span> PVD BJJ - 4 Aurora St, Providence, RI 02908</span>
                </li>
              </ul>
            </div>
            <div className="bg-capoeira-yellow/10 rounded-lg shadow-lg text-center py-4 px-6">
              <p className="mb-4 text-center">
                For specific questions about our class schedule or to arrange an
                introductory session:
              </p>
              <a
                href="https://potential-violet-sturgeon.intern.rabbitos.app/final/index.html#contact"
                className="bg-capoeira-yellow rounded text-capoeira-blue cursor-pointer font-bold tracking-wider text-center uppercase transition-all duration-300 px-6 py-3 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Schedule Details */}
          <div className="space-y-6">
            <div className="bg-capoeira-light-gray rounded-lg p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-capoeira-green" />
                <h3 className="font-montserrat font-bold text-xl text-capoeira-blue">
                  Pricing Options
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monthly Membership</span>
                  <span className="font-bold text-capoeira-blue">$120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Drop-in Rate</span>
                  <span className="font-bold text-capoeira-blue">$20</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-700">First Week of Classes</span>
                  <span className="font-bold text-capoeira-green">FREE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-capoeira-yellow/10 border-l-4 border-capoeira-yellow p-4 rounded mt-6">
              <h4 className="font-montserrat font-bold text-capoeira-blue mb-2">
                First Time? Here's What to Expect:
              </h4>
              <ul className="space-y-1 text-capoeira-blue">
                <li>• Comfortable clothing you can move in</li>
                <li>• Bare feet (no shoes needed!)</li>
                <li>• Water bottle to stay hydrated</li>
                <li>• Open mind and willingness to learn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassScheduleSection;
