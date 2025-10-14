// team members page
import React from "react";
import AliceImg from "@/assets/Alice.jpeg";
import Bernald from "@/assets/bernald.jpeg";
import sharon from "@/assets/sharon.jpeg";
import Aaron from "@/assets/Aaron.jpeg";
import Abraham from "@/assets/Abraham.jpeg";
import Ayub from "@/assets/Ayub.png";
import Wilfred from "@/assets/wilfred.jpg";
import user from "@/assets/user.jpg";

const membersData = [
  {
    name: "Daniel Muchomba Nthiga",
    role: "Chaiperson",
    phoneNo: "0713077228",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.08%20AM%20(1).webp",
  },
  {
    name: "William Mutegi Zachary",
    role: "Secretary",
    phoneNo: "0706367677",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-25%20at%209.43.19%20AM.webp",
  },
  {
    name: "Joel Munene Kibaara",
    role: "Treasurer",
    phoneNo: "0714938280",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.07%20AM%20(1).webp",
  },
  {
    name: "David Mwendwa Mutugi",
    role: "Organizing Secretary",
    phoneNo: "0740713075",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-17%20at%208.57.09%20AM%20(1).webp",
  },
  {
    name: "Haron Mutheti Muturi",
    role: "Junior Member",
    phoneNo: "0795171596",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-26%20at%209.54.46%20AM.webp",
  },
  {
    name: "Stella Njagi",
    role: "Junior Member",
    phoneNo: "0742054026",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-26%20at%2012.27.51%20PM.webp",
  },
  {
    name: "Peter Mutembei",
    role: "Member",
    phoneNo: "0704908310",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202023-11-28%20at%2011.46.37%20PM%20(1).webp",
  },
  {
    name: "Peter Kimathi",
    role: "Member",
    phoneNo: "0794754724",
    image:
      "https://wakeandshineshg.netlify.app/public/images/IMG-20231216-WA0029.webp",
  },
  {
    name: "Kenneth Karani Njagi",
    role: "Member",
    phoneNo: "0743837873",
    image:
      "https://wakeandshineshg.netlify.app/public/images/WhatsApp%20Image%202024-01-16%20at%208.11.08%20AM%20(1).webp",
  },
  {
    name: "Alice Kariiri",
    role: "Junior Coordinator",
    phoneNo: "",
    image: AliceImg,
  },
  {
    name: "Benard Mambo Nyaga",
    role: "Junior Member",
    phoneNo: "0795045885",
    image: Bernald,
  },
  {
    name: "Sharon Kawira Alex",
    role: "Junior Member",
    phoneNo: "0729284188",
    image: sharon,
  },
  {
    name: "Aaron Mwiti Mbogo",
    role: "Junior Member",
    phoneNo: "0768390764",
    image: Aaron,
  },
  {
    name: "Abraham bundi nthiga",
    role: "Junior Member",
    phoneNo: "0797178670",
    image: Abraham,
  },
  {
    name: "AYUB MURIMI MAGOJI.",
    role: "Junior Member",
    phoneNo: "0717996838",
    image: Ayub,
  },
  {
    name: "Wilfred Mutwiri.",
    role: "Junior Member",
    phoneNo: "0745567568",
    image: Wilfred,
  },
  // these users have no profile pictures
  {
    name: "Peter Mutuiri Kibaara",
    role: "Member",
    phoneNo: "0728155284",
    image: user,
  },
  {
    name: "Evans Mwiyathi Nthatu",
    role: "Member",
    phoneNo: "0721356450",
    image: user,
  },
  {
    name: "Stephen Kiogora Kabete",
    role: "Member",
    phoneNo: "0704418010",
    image: user,
  },
  {
    name: "Martin Mugendi Kaunga",
    role: "Member",
    phoneNo: "0703757656",
    image: user,
  },
  {
    name: "Bruce Kaburia Nkanja",
    role: "Member",
    phoneNo: "0728286144",
    image: user,
  },
  {
    name: "Patrick Kariuki Njeru",
    role: "Member",
    phoneNo: "0706367678",
    image: user,
  },
  {
    name: "Mercy Muthoni Muchoka",
    role: "Member",
    phoneNo: "0714225553",
    image: user,
  },
  {
    name: "Lydia Muthoni Nchuguma",
    role: "Member",
    phoneNo: "0707552442",
    image: user,
  },
  {
    name: "Norah Kathii Kirugo",
    role: "Member",
    phoneNo: "0740075958",
    image: user,
  },
  {
    name: "Peninah Makena Musee",
    role: "Member",
    phoneNo: "0741095088",
    image: user,
  },
  {
    name: "Mary Karimi Nyaga",
    role: "Member",
    phoneNo: "0706473727",
    image: user,
  },
  {
    name: "Shadrack Gitonga Mutugi",
    role: "Member",
    phoneNo: "0746759954",
    image: user,
  },
  {
    name: "Lita Wanja Kibaara",
    role: "Member",
    phoneNo: "0757274944",
    image: user,
  },
  {
    name: "Phineas Muthui Mati",
    role: "Member",
    phoneNo: "0792570495",
    image: user,
  },
  {
    name: "Janiece Ntue  Nguu",
    role: "Member",
    phoneNo: "0716392338",
    image: user,
  },
  {
    name: "Gladys Muthoni",
    role: "Member",
    phoneNo: "0703394340",
    image: user,
  },
  {
    name: "Lucyline Kathure Marigu",
    role: "Member",
    phoneNo: "0701516467",
    image: user,
  },
  {
    name: "Elgah Makena Kanyaru",
    role: "Member",
    phoneNo: "0716398409",
    image: user,
  },
  {
    name: "Purity Kendi Gitonga",
    role: "Member",
    phoneNo: "0111711476",
    image: user,
  },
  {
    name: "Susan Mokeira Nyaucho",
    role: "Member",
    phoneNo: "0705312233",
    image: user,
  },
];

export const Members = () => {
  return (
    <div className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 font-playfair">
            ~ Meet Exteem Members ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Our team is composed of dedicated professionals committed to
            excellence and innovation. Get to know the people who drive our
            success.
          </p>
        </div>{" "}
        <div className="members-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {membersData.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 flex flex-row gap-4 backdrop-blur-md rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in items-center"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-md  object-cover"
                />
              </div>
              {/* details */}
              <h3 className="font-semibold text-foreground text-sm font-poppins">
                {member.name}
              </h3>
              <a
                href={`tel:${member.phoneNo}`}
                className="text-primary text-sm hover:underline font-poppins"
              >
                {member.phoneNo}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
