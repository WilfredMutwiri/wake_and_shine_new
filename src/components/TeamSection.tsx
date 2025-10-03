import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Users } from "lucide-react";
import AliceImg from "@/assets/Alice.jpeg";
import Bernald from "@/assets/bernald.jpeg";
import sharon from "@/assets/sharon.jpeg";
import Aaron from "@/assets/Aaron.jpeg";
import Abraham from "@/assets/Abraham.jpeg";
import Ayub from "@/assets/Ayub.png";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daniel Muchomba Nthiga",
      position: "Chairperson",
      phone: "+254 713 077 228",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.08%20AM%20(1).webp",
    },
    {
      name: "William Mutegi Zachary",
      position: "Secretary",
      phone: "+254 706 367677",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-25%20at%209.43.19%20AM.webp",
    },
    {
      name: "Joel Munene Kibaara",
      position: "Treasurer",
      phone: "+254 714 938 280",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.07%20AM%20(1).webp",
    },
    {
      name: "David Mwendwa Mutugi",
      position: "Organizing Secretary",
      phone: "+254 740 713 075",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.09%20AM%20(1).webp",
    },
    {
      name: "Haron Mutheti Muturi",
      position: "Member",
      phone: "+254 795 171 596",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-26%20at%209.54.46%20AM.webp",
    },
    {
      name: "Stella Njagi",
      position: "Member",
      phone: "+254 742 054 026",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-26%20at%2012.27.51%20PM.webp",
    },
    {
      name: "Peter Mutembei",
      position: "Member",
      phone: "+254 704 908 310",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-28%20at%2011.46.37%20PM%20(1).webp",
    },
    {
      name: "Peter Kimathi",
      position: "Member",
      phone: "+254 794 754 724",
      image:
        "https://wakeandshineshg.netlify.app/public/images/IMG-20231216-WA0029.webp",
    },
    {
      name: "Kenneth Karani Njagi",
      position: "Member",
      phone: "+254 743 837 873",
      image:
        "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202024-01-16%20at%208.11.08%20AM%20(1).webp",
    },
    {
      name: "Alice Kariiri",
      position: "Junior Coordinator",
      phone: "",
      image:AliceImg,
    },
    {
      name: "Benard Mambo Nyaga",
      position: "Junior Member",
      phone: "0795045885/0724838686",
      image:Bernald,
    },
    {
      name: "Sharon Kawira Alex",
      position: "Junior Member",
      phone: "0729284188",
      image:sharon,
    },
    {
      name: "Aaron Mwiti Mbogo",
      position: "Junior Member",
      phone: "0768390764",
      image:Aaron,
    },
    {
      name: "Abraham bundi nthiga",
      position: "Junior Member",
      phone: "0797178670",
      image:Abraham,
    },
    {
      name: "AYUB MURIMI MAGOJI.",
      position: "Junior Member",
      phone: "0717996838",
      image:Ayub,
    },
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("Chairperson"))
      return "bg-primary text-primary-foreground";
    if (position.includes("Secretary"))
      return "bg-secondary text-secondary-foreground";
    if (position.includes("Treasurer"))
      return "bg-tertiary text-tertiary-foreground";
    return "bg-muted text-muted-foreground";
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
    <section id="team" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
            ~ Meet Our Team ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Our dedicated leaders and members working together to empower
            communities and create lasting change.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 font-poppins">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position} at Wake and Shine Self Help Group`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPositionColor(
                      member.position
                    )}`}
                  >
                    {member.position === "Member"
                      ? "Team Member"
                      : member.position}
                  </div>
                </div>
              </div>

              <CardContent className="p-6 font-poppins">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors font-poppins">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-poppins">
                  {member.position}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-mono">{member.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-custom-lg bg-gradient-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2 font-poppins">
                  Member Testimonial
                </h3>
                <p className="text-sm text-muted-foreground font-poppins">
                  Joel Munene - Treasurer
                </p>
              </div>

              <blockquote className="text-md text-foreground leading-relaxed text-center italic mb-6 font-merriweather">
                "As Wake and Shine SHG, we believe in empowering our members
                towards becoming financially independent through various
                financial activities such as: group savings, individual savings,
                investment in high potential projects; both at individual and
                group level and educating our members on financial literacy and
                discipline. In addition, we do mobilize members as well as the
                community to use the freely available natural resources in an
                environmental friendly manner in income generation activities.
                These have been our backbone towards achieving our main goal as
                an organization and we aim at offering reliable financial
                solutions to our members and society at large."
              </blockquote>

              <div className="text-center">
                <Button
                  variant="cta"
                  className="font-poppins"
                  size="lg"
                  onClick={handleInfo}
                >
                  Learn About Membership
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 font-poppins">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">
              We are a full family!
            </h3>
            <p className="text-muted-foreground mb-6">
              Want to know more about our membership and all other members in
              general? Get in touch with us today and be part of our growing
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Our Team</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#">View All Members</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
