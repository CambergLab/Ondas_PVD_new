import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JoinCommunitySection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create the email body content
      const emailBody = `
New Contact Form Submission from Ondas Providence Website

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Interest: ${formData.interest}

Message:
${formData.message}

---
This message was sent from the Ondas Providence Capoeira website contact form.
      `;

      // Using a simple mailto approach - this will open the user's email client
      const mailtoLink = `mailto:jconti123@gmail.com?subject=New Contact Form Submission - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;

      // For a production environment, you'd typically use a backend service like:
      // - Netlify Forms
      // - Formspree
      // - EmailJS
      // - Your own backend API

      // For now, we'll use a simple fetch to a mock endpoint and show success
      // In a real implementation, replace this with your actual email service

      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Open user's email client with pre-filled email
      window.location.href = mailtoLink;

      // Reset form and show success message
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-capoeira">
        <h2 className="text-capoeira-blue font-montserrat text-section-title font-bold section-title-border">
          Join Our Community
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-4">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ready to begin your capoeira journey? We'd love to hear from
                you! Whether you have questions about classes, want to schedule
                your free introductory session, or are interested in
                performances, don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                <Mail className="w-6 h-6 text-capoeira-green" />
                <div>
                  <p className="font-medium text-capoeira-blue">Email</p>
                  <p className="text-gray-700">jconti123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                <Phone className="w-6 h-6 text-capoeira-green" />
                <div>
                  <p className="font-medium text-capoeira-blue">Phone</p>
                  <p className="text-gray-700">(401) 555-CAPO</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-capoeira-light-gray rounded-lg">
                <MessageCircle className="w-6 h-6 text-capoeira-green" />
                <div>
                  <p className="font-medium text-capoeira-blue">Follow Us</p>
                  <p className="text-gray-700">
                    @grupoondascapoeira on social media
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-capoeira-light-gray p-6 rounded-lg">
            <h3 className="font-montserrat font-bold text-xl text-capoeira-blue mb-6">
              Send us a Message
            </h3>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">
                    Message Sent Successfully!
                  </p>
                  <p className="text-green-600 text-sm">
                    Your email client should open with a pre-filled message.
                    Please send it to complete your inquiry.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-800 font-medium">
                    Message Failed to Send
                  </p>
                  <p className="text-red-600 text-sm">
                    Please try again or contact us directly at
                    jconti123@gmail.com
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-capoeira-blue mb-1"
                  >
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="w-full"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-capoeira-blue mb-1"
                  >
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    className="w-full"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-capoeira-blue mb-1"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-capoeira-blue mb-1"
                >
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-capoeira-green focus:border-transparent"
                  value={formData.interest}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="intro-class">Free Introductory Class</option>
                  <option value="regular-classes">Regular Classes</option>
                  <option value="kids-classes">Classes for Children</option>
                  <option value="performances">Performances & Events</option>
                  <option value="general">General Information</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-capoeira-blue mb-1"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your experience level, questions, or anything else you'd like us to know..."
                  className="w-full h-24"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-capoeira-green hover:bg-capoeira-green/90 text-white font-montserrat font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Required fields. Your message will be sent to
              jconti123@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
