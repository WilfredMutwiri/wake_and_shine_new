import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, DollarSign, Leaf, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Self-Empowerment",
      image: "https://wakeandshineshg.netlify.app/public/images/30ca88d3359211348da8c7d43ab2bf92-removebg-preview.webp",
      description: "At Wake and Shine we believe in everyone becoming the best of themselves. We have a strong belief that individual belief translates into community development. We ensure that all our team members embark on a journey within themselves, discovering their true self, passions, and purpose for a life filled with meaning.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Community Empowerment", 
      image: "https://wakeandshineshg.netlify.app/public/images/8fba4f5365636c4144b60a598e78e9f4-removebg-preview.webp",
      description: "Welcome to a community where empowerment is not just a word; it's a collective force that propels us to new heights. At Wake and Shine, we believe in the extraordinary impact of united strength. We believe and support collective community development for a conducive environment for individual and group growth.",
      color: "secondary"
    },
    {
      icon: DollarSign,
      title: "Finance & Investment",
      image: "https://wakeandshineshg.netlify.app/public/images/821a26799dda29716c6e3ba17b22134b-removebg-preview.webp", 
      description: "Welcome to Wake and Shine finance hub, where we demystify finance and unlock the doors to wealth creation. Dive into a world of smart decisions, strategic investments, and financial empowerment. We embrace economically viable investment as a driver towards sustainable development.",
      color: "tertiary"
    },
    {
      icon: Leaf,
      title: "Climate Change",
      image: "https://wakeandshineshg.netlify.app/public/images/d7b766e3211fa8f3446b148e4384d989-removebg-preview.webp",
      description: "We believe in nature and the entire ecosystem as a component to spur sustainable development. As in our vision, we endeavor to ensure not only the members but also the community at large has the required knowledge on sustainable use of natural resources while conserving the environment to support economic growth.",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-l-primary bg-primary-light";
      case "secondary":
        return "border-l-secondary bg-secondary-light";
      case "tertiary":
        return "border-l-tertiary bg-tertiary-light";
      default:
        return "border-l-primary bg-primary-light";
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to community development focuses on four key areas that create lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group border-l-4 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${getColorClasses(service.color)}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Wake and Shine Self Help Group initiative`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className={`p-3 rounded-full ${service.color === 'primary' ? 'bg-primary' : service.color === 'secondary' ? 'bg-secondary' : service.color === 'tertiary' ? 'bg-tertiary' : 'bg-primary'} text-white shadow-custom-sm`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Button variant="outline" size="sm" className="group/btn">
                  Continue Reading
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-custom-lg bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our mission to empower communities and create lasting change through sustainable development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://forms.gle/JGpk1hRiXTvv5YGj6">
                    Become a Member
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Our Programs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};