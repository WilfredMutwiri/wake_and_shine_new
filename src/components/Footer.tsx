import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter, Heart, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.webp";

export const Footer = () => {

    const handleInfo = () => {
    const phoneNo = "254706367677";
    const message = `Hello Mr. Mutegi,
I recently visited the Wake and Shine website and was truly impressed by the impactful initiatives your group is undertaking. I would greatly appreciate the opportunity to learn more about your programs and explore how I might engage with your work.
Thank you for your time and dedication.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNo}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100092473608381",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "#",
      color: "hover:text-green-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Achievements", href: "#achievements" },
    { name: "Our Team", href: "#team" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Self-Empowerment", href: "#services" },
    { name: "Community Empowerment", href: "#services" },
    { name: "Finance & Investment", href: "#services" },
    { name: "Climate Change", href: "#services" },
    { name: "Youth Leadership", href: "#achievements" },
    { name: "Child Protection", href: "#achievements" }
  ];

  return (
    <footer className="bg-background border-t border-border font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Organization Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl">
                  <img src={logo}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-poppins">Wake & Shine</h3>
                  <p className="text-sm text-muted-foreground font-poppins">Self Help Group</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Empowering communities in Tharaka Nithi County through youth development, 
                education, and sustainable initiatives since 2013.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Nkuthe Village, Kamarandi Location</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+254 706 367 677 | +254 721 356 450</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>wakeandshineshg@gmail.com</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-2 rounded-full bg-muted text-muted-foreground transition-all duration-300 ${social.color} hover:bg-primary hover:text-white transform hover:-translate-y-1`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6 font-poppins">Quick Links</h4>
              <nav className="space-y-3 font-poppins">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6 font-poppins">Our Programs</h4>
              <nav className="space-y-3">
                {programs.map((program, index) => (
                  <a
                    key={index}
                    href={program.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {program.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Call to Action */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6 font-poppins">Join Our Mission</h4>
              <Card className="p-6 bg-gradient-card shadow-custom-md">
                <div className="text-center space-y-4">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground font-poppins">
                    Be part of our community empowerment journey
                  </p>
                  <div className="space-y-3">
                    <Button variant="cta" size="sm" className="w-full" asChild>
                      <a href="https://docs.google.com/forms/d/1fAmz1eIBawS00AfDHjd7FSJWPNFbkqGMULiYeJHLPcM/viewform?edit_requested=true">
                        Join Us Today
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleInfo} className="w-full">
                        Become a Member
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 font-poppins">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-poppins">
                © {new Date().getFullYear()} Wake & Shine Self Help Group. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Registration No: THA/DSS/SH/4163 | Ministry of Social Services, Gender and Social Protection
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};