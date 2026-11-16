import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3,proj1,proj10,proj11,proj12,proj2,proj3,proj4,proj5,proj6,proj7,proj8,proj9,member5,blog_4,blog_5,blog_7,proj13,proj14,proj15,proj16, barracuda, bonito, dentex, hake, horseMackerel,
  lichia, mackerel, pargo, redFish, sardine,
  sardinellaAurita, sardinellaEba, seaBream,
  tunaJpeg, tunaPng, yellowTail,fish3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
     {name:"Products",id:'project'},
    {name:"Team",id:'team'},
    {name:"Store",id:'store'},


   
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

// export const services = [
//   {
//     name:"General Contracting",
//     icon:<SiBlueprint/>,
//     description:`This involves overseeing the entire construction project from start to finish, 
//         including hiring subcontractors, managing the budget, scheduling, and ensuring that the
//         project meets all specifications and regulations.`,
//   },
//   {
//     name:"Design-Build Services",
//     icon:<FaDrawPolygon/>,
//     description:`This service combines both the design and construction phases into a single 
//        contract, streamlining the process and improving communication between the design and
//         construction teams.

//     `,
//   },
//   {
//     name:"Project Management",
//     icon:<GrUserManager/>,
//     description:`Construction companies often provide project management services, which include 
//        planning, coordinating, and overseeing projects to ensure they are completed on time, within 
//        budget, and to the required quality standards.`,
//   },
//   {
//     name:"Renovation and Remodeling",
//     icon:<SiHomeassistantcommunitystore/>,
//     description:`Many construction companies specialize in renovation and remodeling services, 
//                 which involve updating and improving existing structures. This can range from minor 
//                 repairs to major overhauls of residential, commercial, or industrial properties.`,
//   },
//   {
//     name:"Site Preparation",
//     icon:<AiOutlineFileProtect/>,
//     description:`Before construction begins, companies often handle site preparation tasks such 
//     as land clearing, excavation, grading, and utility installation to ensure the site is ready 
//     for building.`,
//   },
//   {
//     name:"Specialty Construction Services",
//     icon:<IoConstructSharp/>,
//     description:`This can include services like roofing, concrete work, steel erection, plumbing, 
//     electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
//   },
// ]
export const services = [
  {
    name: "Import & Distribution",
    icon: <SiBlueprint />,
    description: `We specialize in the import and reliable distribution of high-quality frozen fish and poultry across Ghana, sourced from trusted global partners.`,
  },
  {
    name: "Global Sourcing",
    icon: <FaDrawPolygon />,
    description: `Our global sourcing network spans countries like Mauritania, Morocco, Oman, Argentina, Brazil, and the U.S., ensuring product availability and quality all year round.`,
  },
  {
    name: "Cold Chain Logistics",
    icon: <GrUserManager />,
    description: `We ensure efficient cold chain logistics to maintain freshness and safety of our frozen products from port to customer delivery.`,
  },
  {
    name: "Wholesale Supply",
    icon: <SiHomeassistantcommunitystore />,
    description: `We serve wholesalers, supermarkets, and food service businesses with consistent bulk supply of frozen fish and poultry products.`,
  },
  {
    name: "Custom Orders & Packaging",
    icon: <AiOutlineFileProtect />,
    description: `We offer flexible order quantities and packaging solutions tailored to the specific needs of our clients and market segments.`,
  },
  {
    name: "Market Expansion Consulting",
    icon: <IoConstructSharp />,
    description: `We assist new partners in entering the Ghanaian and West African markets through our established logistics and distribution network.`,
  },
];

export const teams = [
  {
    name: "Manager",
    title: "CEO",
    profile: member5,
    social: [
      {
        name: "Email",
        icon: <MdOutlineEmail />,
        url: "mailto:youssef.aboualhassan@gmail.com",
      },
      {
        name: "WhatsApp",
        icon: <FaWhatsapp />,
        url: "https://wa.me/+233202227333", 
      },
    ],
  },
  {
    name: "Assistant",
    title: "SALES MANAGER",
    profile: member5,
    social: [
      {
        name: "Email",
        icon: <MdOutlineEmail />,
        url: "mailto:youssef.aboualhassan@gmail.com",
      },
      {
        name: "WhatsApp",
        icon: <FaWhatsapp />,
        url: "https://wa.me/233202227333",
      },
    ],
  },
];
// export const projects = [
//   {
//     title: "Frozen Poultry Packaging Facility",
//     image: proj1,
//     description: `Establishment of a state-of-the-art facility for packaging and sealing frozen poultry using hygienic, automated systems to ensure long-lasting freshness and optimal food safety standards.`,
//   },
//   {
//     title: "Fish Fillet Processing Line Upgrade",
//     image: proj16,
//     description: `Modernization of our fish fillet processing line with new deboning, slicing, and vacuum-sealing equipment to improve speed, accuracy, and consistency in packaging.`,
//   },
//   {
//     title: "Cold Chain Logistics Expansion",
//     image: proj3,
//     description: `Expansion of our refrigerated transportation network to ensure frozen fish and poultry are delivered under strict temperature-controlled conditions for maximum freshness.`,
//   },
//   {
//     title: "Ice-Preserved Whole Fish Warehouse",
//     image: proj13,
//     description: `Development of a dedicated storage warehouse with optimized ice bed systems to preserve whole fish freshness from sea to delivery point while maintaining sustainability.`,
//   },
//   {
//     title: "Sustainable Freezing Technology Project",
//     image: proj5,
//     description: `Implementation of eco-friendly freezing systems using energy-efficient blast freezers, aimed at reducing our carbon footprint while maintaining product integrity.`,
//   },
//   {
//     title: "Export-Ready Poultry Line",
//     image: proj14,
//     description: `Installation of high-capacity poultry preparation lines tailored for international export standards, including automatic weight control and multilingual labeling.`,
//   },
//   {
//     title: "Fish & Poultry Quality Assurance Lab",
//     image: proj15,
//     description: `Construction of an in-house quality control laboratory for microbial and freshness testing of frozen fish and poultry products, ensuring international compliance.`,
//   },
// ]
export const projects = [
  {
    title: "Barracuda",
    image: barracuda,
    description: "A predatory fish with a long, slender body and sharp teeth. Known for its speed and popularity in tropical cuisines.",
  },
  {
    title: "Bonito",
    image: bonito,
    description: "A pelagic fish related to tuna, often used in canning. It has firm flesh and a rich flavor.",
  },
  {
    title: "Dentex",
    image: dentex,
    description: "A Mediterranean fish valued for its delicate white flesh, often served in gourmet dishes.",
  },
  {
    title: "Hake",
    image: hake,
    description: "A popular white fish with tender texture, widely used in frozen fillets and breaded products.",
  },
  {
    title: "Horse Mackerel",
    image: horseMackerel,
    description: "A small oily fish with a flavorful taste, commonly grilled or canned.",
  },
  {
    title: "Lichia",
    image: lichia,
    description: "A powerful game fish with firm white flesh, prized for its rarity and taste.",
  },
  {
    title: "Mackerel",
    image: mackerel,
    description: "An oily fish rich in omega-3s, popular smoked, grilled, or canned for its strong flavor.",
  },
  {
    title: "Pargo",
    image: pargo,
    description: "A name used for various types of snapper, known for their firm texture and rich flavor.",
  },
  {
    title: "Red Fish",
    image: redFish,
    description: "A cold-water fish with reddish skin, appreciated for its white flesh and delicate texture.",
  },
  {
    title: "Sardine",
    image: sardine,
    description: "A small oily fish commonly eaten fresh, grilled, or canned. High in essential nutrients.",
  },
  {
    title: "Sardinella Aurita",
    image: sardinellaAurita,
    description: "A species similar to sardines, abundant in the Mediterranean and Atlantic, often used in canning.",
  },
  {
    title: "Sardinella Eba",
    image: sardinellaEba,
    description: "Another variety of sardinella, commonly fished in West Africa and rich in protein.",
  },
  {
    title: "Sea Bream",
    image: seaBream,
    description: "A premium fish with fine white flesh, widely used in Mediterranean cuisine.",
  },
  {
    title: "Tuna",
    image: tunaJpeg,
    description: "A large pelagic fish with red flesh, consumed raw in sushi, grilled, or canned.",
  },
  {
    title: "YellowTail",
    image: yellowTail,
    description: "Highly valued in Japanese cuisine, especially for sashimi due to its tender, slightly fatty flesh.",
  },
];

export const testimonial = [
  {
    image: profile2,
    name: 'Samuel Eze',
    review: `Je commande régulièrement du poisson chez Friomer LTD pour mon restaurant, et la qualité est toujours irréprochable. Le goût reste frais, même après congélation, et mes clients le remarquent immédiatement.`
  },
  {
    image: profile3,
    name: 'Emmanuel Joseph',
    review: `En tant que distributeur, je suis impressionné par la constance et la rigueur de Friomer. Les livraisons sont ponctuelles, bien emballées, et les produits sont conformes aux normes internationales.`
  },
  {
    image: profile4,
    name: 'Gloria Chiwendu',
    review: `J'avais des doutes sur le poisson surgelé, mais après avoir essayé les filets de Friomer, je ne veux plus rien d'autre. Texture parfaite, aucune odeur forte, et une cuisson facile à la maison.`
  },
  {
    image: profile5,
    name: 'Precious Stone',
    review: `Le service client de Friomer est excellent. Ils ont pris le temps de me conseiller sur les meilleurs produits pour mon commerce, et mes ventes ont depuis augmenté. Très satisfaite !`
  }
];



export const blogs = [
  {
    title: "From Ocean to Freezer: Ensuring Premium Quality",
    image: fish3,
    category: "Fish",
    content: `Frozen fish is a staple in modern kitchens, offering both flavor and nutrition with unmatched convenience. At Friomer LTD, we take pride in sourcing fresh catch and applying advanced freezing techniques that preserve texture, taste, and nutrients. In this article, explore our journey from sustainable fishing practices to state-of-the-art freezing processes that deliver premium quality to your plate.`,
    date: new Date("January 10, 2024"),
    likeCount:34,
    commentCount:4,
    tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
    poster: {
      name: "Johnson",
    },
  },
   {
      title:"The Benefits of Individually Vacuum-Sealed Fish Fillets",
      image:blog_5,
      category:"Fish",
      content:`
  Vacuum-sealed frozen fish fillets are the epitome of convenience and hygiene. At Friomer LTD, our process ensures extended shelf life, reduced waste, and preserved nutritional value. This blog post explores how our sealed fish fillets offer unmatched quality and why they are preferred by chefs and families alike.

      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"How We Keep Our Whole Fish Fresh and Delicious",
      image:blog_7,
      category:"Fish Fillets",
      content:`
    Keeping whole fish fresh is both a science and an art. At Friomer LTD, we use rapid freezing techniques and ice preservation to maintain the taste and texture of our catch. In this blog, learn how our fish go from the ocean to your kitchen without losing their freshness.

      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value: [
      "Info@friomer.com",
      "Youssef@friomer.com",
      "Finance@friomer.com"
    ],
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+233 202227333",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Ghana, Tema, Fishing Harbour Road",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
         

            {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
     {name:"Products",id:'project'},
    {name:"Team",id:'team'},
    {name:"Store",id:'store'},


   
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
        ]
      },
]


