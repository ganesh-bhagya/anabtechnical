import {
  ACIcon,
  ActivityIcon,
  CabinIcon,
  ElectrinocalIcon,
  FacobookIcon,
  FloorIcon,
  InstagramIcon,
  LinkedInIcon,
  PaintIcon,
  PlumbingIcon,
  PoolIcon,
  PowerIcon,
  SignIcon,
} from "./icons";
import vnm from "./../assets/images/vnm.png";
import projects from "./../assets/images/projects.jpeg";

export const navigationItems = [
  {
    title: "Home",
    link: "/",
    type: "external",
    id: "home",
  },
  {
    title: "About Us",
    link: "/",
    type: "internal",
    id: "abtus",
  },
  {
    title: "Services",
    link: "/services",
    type: "external",
    id: "services",
  },
  {
    title: "Leadership",
    link: "/",
    type: "internal",
    id: "leadership",
  },
  {
    title: "FAQ",
    link: "/",
    type: "internal",
    id: "faq",
  },
];

export const navigationDetails = [
  {
    title: "Contact Us",
    content: [{ item: "info@asipiyabpo.lk" }, { item: " +(94)  74 137 00 08" }],
  },
  {
    title: "Locations",
    content: [
      {
        item: "Colombo Sri Lanka",
      },
    ],
  },
];

export const socialLinks = [
  {
    link: "/",
    icon: FacobookIcon,
  },
  {
    link: "/",
    icon: InstagramIcon,
  },
  {
    link: "/",
    icon: LinkedInIcon,
  },
];

export const faqItems = [
  {
    title: "How can I get in touch with Al Noor Al Baher Technical Services?",
    des: "You can reach us by phone at 000971563663441 or email us at info@anabtechnical.com.",
  },
  {
    title: "What are your operating hours?",
    des: "Our office hours are 9am to 5pm, Monday through Friday. However, we understand that emergencies can happen at any time, so we also offer 000971563663441 for urgent inquiries outside of regular hours.",
  },
  {
    title: "Do you offer free consultations or quotes?",
    des: "We are constantly committed to providing service counseling and quotes for the service recipients in the corporate service sector.",
  },
  {
    title: "Where are you located?",
    des: "Our office is located at Bu Hail, Deira, Dubai, Postal Code: 31458, United Arab Emirates.",
  },
];

export const vnmItems = [
  {
    title: "Company Vision",
    des: "To be the leader in the field by providing efficient, friendly and quality services to all organizations that require technical and cleaning services.",
  },
  {
    title: "Company Mission",
    des: " To achieve the priority goal of the field, with continuous commitment and confidence, to generate quality results through specialization and management of a team of employees with special skills.",
  },
];

export const vnmCardItems = [
  {
    img: vnm,
    des: "ENDURING RELATIONSHIPS",
  },
  {
    img: vnm,
    des: "DEEP KNOWLEDGE AND EXPERTISE",
  },
  {
    img: vnm,
    des: "ENDURING RELATIONSHIPS",
  },
];

export const projectItems = [
  {
    img: projects,
    title: "Project Heading",
    des: "At Al Noor Al Baher Technical Services, we are more than just a construction and cleaning services company we are your partners in transforming spaces and enhancing lives.",
    link: "/project",
  },
  {
    img: projects,
    title: "Project Heading",
    des: "At Al Noor Al Baher Technical Services, we are more than just a construction and cleaning services company we are your partners in transforming spaces and enhancing lives.",
    link: "/project",
  },
  {
    img: projects,
    title: "Project Heading",
    des: "At Al Noor Al Baher Technical Services, we are more than just a construction and cleaning services company we are your partners in transforming spaces and enhancing lives.",
    link: "/project",
  },
  {
    img: projects,
    title: "Project Heading",
    des: "At Al Noor Al Baher Technical Services, we are more than just a construction and cleaning services company we are your partners in transforming spaces and enhancing lives.",
    link: "/project",
  },
];

export const servicesItems = [
  {
    icon: ACIcon,
    title:
      "Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance",
    des: "From installation to regular maintenance, trust our experts to ensure optimal performance and efficiency of your HVAC systems.",
  },
  {
    icon: ElectrinocalIcon,
    title: "Electromechanical Equipment Installation and Maintenance",
    des: "Our experienced technicians specialize in the installation and maintenance of electromechanical equipment, ensuring smooth operation and longevity.",
  },
  {
    icon: PlumbingIcon,
    title: "Plumbing & Sanitary Installation",
    des: "We provide expert plumbing and sanitary installation services, utilizing high-quality materials and innovative techniques for reliable performance.",
  },
  {
    icon: FloorIcon,
    title: "Floor & Wall Tiling Works",
    des: "Transform your space with our professional floor and wall tiling services, featuring meticulous craftsmanship and a wide range of design options.",
  },
  {
    icon: PaintIcon,
    title: "Painting Contracting",
    des: "Enhance the aesthetic appeal of your property with our painting contracting services, executed with precision and attention to detail.",
  },
  {
    icon: CabinIcon,
    title: "Carpentry & Wood Flooring Works",
    des: "From custom carpentry to wood flooring installation, our skilled craftsmen bring expertise and creativity to every project.",
  },
  {
    icon: ActivityIcon,
    title: "Engraving & Ornamentation Works",
    des: "From custom carpentry to wood flooring installation, our skilled craftsmen bring expertise and creativity to every project.",
  },
  {
    icon: PowerIcon,
    title: "Electrical Fittings & Fixtures Repairing & Maintenance",
    des: "Add a touch of elegance to your space with our engraving and ornamentation services, tailored to your design preferences.",
  },
  {
    icon: SignIcon,
    title: "Building Cleaning Services",
    des: "Keep your electrical fittings and fixtures in optimal condition with our repair and maintenance services, ensuring safety and reliability.",
  },
  {
    icon: PoolIcon,
    title: "Swimming Pools Installation Works",
    des: "Create your own oasis with our swimming pool installation services, featuring expert design, construction, and maintenance solutions.",
  },
];
