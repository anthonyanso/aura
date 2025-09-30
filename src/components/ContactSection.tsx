import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to start your digital transformation? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy-dark font-semibold mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                  className="border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-navy-dark font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                  className="border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-navy-dark font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                  className="border-gray-300"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold hover:shadow-xl transition-all"
                data-testid="button-submit-contact"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="text-navy-dark font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@aurapersona.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="text-navy-dark font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="text-navy-dark font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">123 Business Avenue, Suite 100<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-navy-dark font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy-dark"
                  data-testid="button-social-linkedin"
                  onClick={() => console.log("LinkedIn clicked")}
                >
                  <SiLinkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy-dark"
                  data-testid="button-social-twitter"
                  onClick={() => console.log("Twitter clicked")}
                >
                  <SiX className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy-dark"
                  data-testid="button-social-instagram"
                  onClick={() => console.log("Instagram clicked")}
                >
                  <SiInstagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="rounded-md overflow-hidden shadow-lg h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867456939897!2d-122.41941492346508!3d37.77492971896588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1704915200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aura Persona Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
