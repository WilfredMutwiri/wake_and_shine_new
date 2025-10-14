import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Award, ArrowRight } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    {
      icon: Calendar,
      title: "Established",
      value: "2013",
      description: "Years of community service"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tharaka Nithi",
      description: "County, Kenya"
    },
    {
      icon: Users,
      title: "Focus",
      value: "Youth",
      description: "Empowerment & Development"
    },
    {
      icon: Award,
      title: "Registration",
      value: "THA/DSS/SH/4163",
      description: "Official government registration"
    }
  ];

  const handleInfo = () => {
    const phoneNo = "254706367677";
    const message = `Hello Mr. Mutegi,
I recently visited the Wake and Shine website and was truly impressed by the impactful initiatives your group is undertaking. I would greatly appreciate the opportunity to learn more about your programs and explore how I might engage with your work.
Thank you for your time and dedication.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNo}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="about" className="section-padding bg-background mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
           ~ About Wake & Shine ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            A self-help group dedicated to empowering communities through sustainable development, 
            youth advancement, and environmental stewardship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6 font-merriweather">
                Wake and Shine is a self-help group established in 2013 and registered under Kenya's 
                Ministry of Social Services, Gender and Social Protection with registration number 
                <strong> THA/DSS/SH/4163</strong>.
              </p>
              
              <p className="text-foreground leading-relaxed mb-6 font-merriweather">
                The group consists majorly of youths and has most of its activities in Tharaka 
                constituency, Chaiakariga sub-county with a keen focus on Kamarandi and Kamanyaki 
                locations. Our head and operational services are at Nkuthe village in Kamarandi 
                location, about 20KM East of Tharaka Nithi county headquarters.
              </p>
            </div>

            {/* Vision, Mission, Values */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary shadow-custom-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-playfair">Our Vision</h3>
                  <p className="text-muted-foreground font-merriweather">
                    An empowered community with the understanding of utilizing resources rationally 
                    for living dignified lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-custom-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3 font-playfair">Our Mission</h3>
                  <p className="text-foreground font-merriweather">
                    We seek to increase the capacity of the members and the community to live 
                    dignified lives through promotion of members welfare, access to education, 
                    environmental conservation, youth/marginalized empowerment, diversification 
                    of livelihoods and human rights stewardship.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button variant="cta" size="lg" className="group font-poppins" onClick={handleInfo}>
              Learn More About Our Work
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-1 font-poppins">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 font-poppins">{stat.title}</h4>
                    <div className="text-base md:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core Values */}
            <Card className="shadow-custom-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center font-playfair">Core Values</h3>
                <div className="grid grid-cols-2 gap-4 font-poppins">
                  {[
                    "Integrity & Accountability",
                    "Professionalism", 
                    "Partnership",
                    "Stewardship",
                    "Teamwork",
                    "Human Dignity"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};