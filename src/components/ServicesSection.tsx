import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, DollarSign, Leaf, ArrowRight } from "lucide-react";
import meeting3 from "@/assets/meeting3.webp";
import meeting1 from "@/assets/meeting1.webp";
import planting from "@/assets/planting.webp";
import school from "@/assets/school3.jpeg";
import school2 from "@/assets/school1.jpeg";
import meeting2 from "@/assets/meeting2.jpeg";

export const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "~ Girl Child Empowerment ~",
      image: school,
      description:
        "At Wake and Shine, we are committed to empowering the girl child by providing education and awareness on early marriages, sexual health, and teenage pregnancies. Through mentorship and guidance, we equip young girls with knowledge and confidence to make informed choices, achieve their dreams, and positively impact their communities.",
      color: "primary",
    },
    {
      icon: User,
      title: "~ Self-Empowerment ~",
      image: meeting3,
      description:
        "At Wake and Shine we believe in everyone becoming the best of themselves. We have a strong belief that individual belief translates into community development. We ensure that all our team members embark on a journey within themselves, discovering their true self, passions, and purpose for a life filled with meaning.",
      color: "primary",
    },
    {
      icon: Users,
      title: "~ Community Empowerment ~",
      image: meeting2,
      description:
        "Welcome to a community where empowerment is not just a word; it's a collective force that propels us to new heights. At Wake and Shine, we believe in the extraordinary impact of united strength. We believe and support collective community development for a conducive environment for individual and group growth.",
      color: "secondary",
    },
    {
      icon: DollarSign,
      title: "~ Finance & Investment ~",
      image: meeting1,
      description:
        "Welcome to Wake and Shine finance hub, where we demystify finance and unlock the doors to wealth creation. Dive into a world of smart decisions, strategic investments, and financial empowerment. We embrace economically viable investment as a driver towards sustainable development.",
      color: "secondary",
    },
    {
      icon: User,
      title: "~ School Outreach & Mentorship Program ~",
      image: school2,
      description:
        "Our School Outreach & Mentorship Program is dedicated to guiding young teenagers toward a brighter future. We visit schools to educate students on critical health matters, including sexual and reproductive education, while also offering academic mentorship. Through interactive sessions, we empower learners with knowledge, study skills, and career guidance to help them make informed choices, avoid harmful practices, and stay focused on achieving their goals.",
      color: "tertiary",
    },
    {
      icon: Leaf,
      title: "~ Climate Change ~",
      image: planting,
      description:
        "We believe in nature and the entire ecosystem as a component to spur sustainable development. As in our vision, we endeavor to ensure not only the members but also the community at large has the required knowledge on sustainable use of natural resources while conserving the environment to support economic growth.",
      color: "tertiary",
    },
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
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
            ~ What We Do ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Our comprehensive approach to community development focuses on four
            key areas that create lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 font-poppins">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group border-l-4 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${getColorClasses(
                service.color
              )}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Wake and Shine Self Help Group initiative`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`p-3 rounded-full ${
                      service.color === "primary"
                        ? "bg-primary"
                        : service.color === "secondary"
                        ? "bg-secondary"
                        : service.color === "tertiary"
                        ? "bg-tertiary"
                        : "bg-primary"
                    } text-white shadow-custom-sm`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-playfair">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* <Button variant="outline" size="sm" className="group/btn">
                  Continue Reading
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-custom-lg bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">
                Ready to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-6 font-poppins">
                Join our mission to empower communities and create lasting
                change through sustainable development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center font-poppins">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://forms.gle/JGpk1hRiXTvv5YGj6">
                    Become a Member
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={handleInfo}>
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
