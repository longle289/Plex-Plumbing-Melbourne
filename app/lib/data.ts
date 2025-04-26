export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  blocks: string[];
  keywords: string[];
};

export type City = {
  name: string;
  slug: string;
};

export type Region = {
  name: string;
  slug: string;
  cities: City[];
};

export const services: Service[] = [
  {
    id: "new-home-plumbing-services",
    title: "New Home Plumbing Services",
    shortDescription: "Complete plumbing solutions for new home construction projects.",
    description: "Our new home plumbing services provide comprehensive solutions for residential construction projects. From initial planning and rough-in plumbing to final fixture installation and testing, our experienced team ensures your new home's plumbing system is installed correctly, efficiently, and in compliance with all building codes and regulations.",
    icon: "/icons/emergency.svg",
    image: "/images/New_Builds_Plumbing.jpeg",
    blocks: ["intro", "services", "process", "quality", "testimonials"],
    keywords: ["new home plumbing", "construction plumbing", "new build plumbing", "residential plumbing installation", "new house plumbing"]
  },
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing (24/7)",
    shortDescription: "Fast response to urgent plumbing issues any time of day or night.",
    description: "Our 24/7 emergency plumbing service provides immediate assistance for urgent plumbing issues. Whether it's a burst pipe, severe leak, or blocked drain causing flooding, our skilled technicians are available around the clock to prevent further damage to your property.",
    icon: "/icons/emergency.svg",
    image: "/images/Employee_Repairing_Drainage_Pipes.jpeg",
    blocks: ["intro", "services", "process", "cta", "faq"],
    keywords: ["emergency plumber", "24 hour plumbing", "urgent plumbing repairs", "plumbing emergency", "after hours plumber"]
  },
  {
    id: "general-plumbing-repairs",
    title: "General Plumbing Repairs",
    shortDescription: "Professional solutions for all common household plumbing issues.",
    description: "Our general plumbing repair service addresses all common household plumbing issues with professional expertise. From fixing leaky taps and pipes to repairing toilet mechanisms and water pressure problems, our skilled technicians deliver reliable solutions that restore your plumbing system's functionality.",
    icon: "/icons/repairs.svg",
    image: "/images/Employee_Fixing_Kitchen_Retail.jpeg",
    blocks: ["intro", "services", "benefits", "testimonials", "cta"],
    keywords: ["plumbing repairs", "fix leaky pipes", "plumbing maintenance", "residential plumber", "commercial plumbing repairs"]
  },
  {
    id: "blocked-drains-toilets",
    title: "Blocked Drains & Toilets",
    shortDescription: "Effective clearing of all types of blockages in drains and toilets.",
    description: "Our blocked drain and toilet service provides fast, effective clearing of all types of blockages. Using advanced equipment like high-pressure water jetters and CCTV drain cameras, we identify and remove obstructions, restoring proper flow and preventing future blockages through expert maintenance advice.",
    icon: "/icons/drain.svg",
    image: "/images/Employee_Repairing_Garden_Drainage.jpeg",
    blocks: ["intro", "causes", "solutions", "process", "prevention"],
    keywords: ["blocked drain clearing", "toilet unblocking", "drain cleaning", "clogged pipes", "drain camera inspection"]
  },
  {
    id: "hot-water-system-services",
    title: "Hot Water System Services",
    shortDescription: "Installation, repair, and maintenance of all hot water systems.",
    description: "Our comprehensive hot water system service covers installation, repair, and maintenance for all types of systems. Whether you need a new energy-efficient unit installed, repairs to your existing system, or regular maintenance to extend its lifespan, our specialists ensure reliable hot water for your home or business.",
    icon: "/icons/hot-water.svg",
    image: "/images/Hot_Water_Service.jpeg",
    blocks: ["intro", "systems", "installation", "repairs", "maintenance"],
    keywords: ["hot water system installation", "water heater repair", "hot water service", "gas hot water", "electric hot water system"]
  },
  {
    id: "pipe-relining-repairs",
    title: "Pipe Relining & Repairs",
    shortDescription: "No-dig solution for repairing damaged or leaking pipes.",
    description: "Our pipe relining service offers a no-dig solution for repairing damaged or leaking pipes. This innovative technique creates a new pipe within your existing one, eliminating the need for extensive excavation and property disruption while providing a durable, long-lasting repair that restores full functionality to your plumbing system.",
    icon: "/icons/pipe.svg",
    image: "/images/Employee_Repairing_Drainage_Pipes.jpeg",
    blocks: ["intro", "benefits", "process", "comparison", "faq"],
    keywords: ["pipe relining", "trenchless pipe repair", "no dig pipe fixing", "sewer pipe relining", "drain pipe repair"]
  },
  {
    id: "leak-detection-repair",
    title: "Leak Detection & Repair",
    shortDescription: "Advanced technology to locate and fix hidden leaks.",
    description: "Our leak detection and repair service employs advanced technology to locate and fix hidden leaks. Using thermal imaging, acoustic detection, and pressure testing, we precisely identify leak sources without unnecessary property damage, then implement effective repairs to prevent water damage and reduce water bills.",
    icon: "/icons/leak.svg",
    image: "/images/Employee_Fixing_Kitchen_2.jpeg",
    blocks: ["intro", "technology", "process", "benefits", "prevention"],
    keywords: ["leak detection", "water leak repair", "hidden leak finding", "pipe leak detection", "acoustic leak detection"]
  },
  {
    id: "bathroom-kitchen-renovations",
    title: "Bathroom & Kitchen Renovations",
    shortDescription: "Complete plumbing solutions for your renovation projects.",
    description: "Our bathroom and kitchen renovation plumbing service provides complete solutions for your remodeling projects. From initial design consultation and pipework reconfiguration to fixture installation and final testing, our experienced team ensures all plumbing aspects of your renovation are handled professionally for a stunning and functional result.",
    icon: "/icons/renovation.svg",
    image: "/images/Bathroom_Renovation.jpeg",
    blocks: ["intro", "services", "process", "gallery", "testimonials"],
    keywords: ["bathroom renovation plumbing", "kitchen plumbing upgrade", "plumbing renovation", "bathroom remodel", "kitchen plumbing installation"]
  },
  {
    id: "tap-toilet-installations",
    title: "Tap & Toilet Installations",
    shortDescription: "Expert installation of all types of taps and toilets.",
    description: "Our tap and toilet installation service provides expert fitting of all types and brands. Whether you're upgrading to water-efficient models, replacing worn fixtures, or installing new ones during a renovation, our technicians ensure proper installation with no leaks, secure connections, and optimal functionality.",
    icon: "/icons/tap.svg",
    image: "/images/New_Toilet.jpeg",
    blocks: ["intro", "products", "process", "benefits", "maintenance"],
    keywords: ["tap installation", "toilet replacement", "faucet fitting", "bathroom fixtures", "water efficient toilets"]
  },
  {
    id: "shower-bath-installations",
    title: "Shower & Bath Installations",
    shortDescription: "Professional installation of showers, baths, and related fixtures.",
    description: "Our shower and bath installation service delivers professional fitting of all bathroom fixtures. From standard showers and bathtubs to luxury spa systems and custom enclosures, our skilled technicians handle every aspect of installation, ensuring proper waterproofing, drainage, and functionality for your new bathroom features.",
    icon: "/icons/shower.svg",
    image: "/images/Shower_and_Bath_Install.jpeg",
    blocks: ["intro", "options", "process", "waterproofing", "maintenance"],
    keywords: ["shower installation", "bath fitting", "bathroom plumbing", "shower plumbing", "bathtub replacement"]
  },
  {
    id: "water-pressure-issues",
    title: "Water Pressure Issues",
    shortDescription: "Diagnosis and resolution of low or inconsistent water pressure.",
    description: "Our water pressure service provides comprehensive diagnosis and resolution of pressure issues. Whether you're experiencing low pressure throughout your property or inconsistent flow in specific areas, our technicians identify the root cause—from pipe restrictions to pressure regulator problems—and implement effective solutions to restore optimal water pressure.",
    icon: "/icons/pressure.svg",
    image: "/images/Employee_Fixing_Kitchen_2.jpeg",
    blocks: ["intro", "causes", "diagnosis", "solutions", "prevention"],
    keywords: ["low water pressure fix", "water pressure problems", "increase water pressure", "water flow issues", "pressure pump installation"]
  },
  {
    id: "scheduled-maintenance-programs",
    title: "Scheduled Maintenance Programs",
    shortDescription: "Regular maintenance to prevent costly plumbing emergencies.",
    description: "Our scheduled maintenance programs provide regular professional care for your plumbing system. Designed to prevent costly emergencies and extend the life of your plumbing infrastructure, these customized programs include thorough inspections, preventive repairs, and system optimization to ensure reliable operation and peace of mind.",
    icon: "/icons/maintenance.svg",
    image: "/images/Employee_Fixing_Kitchen_Retail.jpeg",
    blocks: ["intro", "benefits", "plans", "process", "savings"],
    keywords: ["plumbing maintenance program", "preventive plumbing", "regular plumbing service", "plumbing system check", "preventative maintenance"]
  },
  {
    id: "stormwater-drainage-installation",
    title: "Stormwater Drainage Installation",
    shortDescription: "Effective systems to manage rainwater and prevent flooding.",
    description: "Our stormwater drainage installation service creates effective systems to manage rainwater and prevent property flooding. From designing appropriate drainage solutions to installing quality gutters, downpipes, and drainage channels, our team ensures proper water diversion that protects your property's foundation and landscape from water damage.",
    icon: "/icons/stormwater.svg",
    image: "/images/StormWater.jpeg",
    blocks: ["intro", "assessment", "solutions", "installation", "maintenance"],
    keywords: ["stormwater drainage", "rainwater management", "flood prevention", "drainage system installation", "property drainage"]
  },
  {
    id: "sewer-line-repairs",
    title: "Sewer Line Repairs",
    shortDescription: "Fixing damaged or blocked sewer lines with minimal disruption.",
    description: "Our sewer line repair service addresses damaged or blocked main lines with minimal property disruption. Using advanced diagnostic tools to pinpoint issues and techniques like pipe relining where possible, we efficiently restore proper function to your sewer system while limiting excavation and landscape damage.",
    icon: "/icons/sewer.svg",
    image: "/images/Employee_Repairing_Drainage_Pipes.jpeg",
    blocks: ["intro", "diagnosis", "methods", "trenchless", "prevention"],
    keywords: ["sewer line repair", "main drain fixing", "sewer pipe replacement", "trenchless sewer repair", "sewer blockage clearing"]
  },
  {
    id: "gas-heater-installations",
    title: "Gas Heater Installations",
    shortDescription: "Safe and efficient installation of gas heating systems.",
    description: "Our gas heater installation service provides safe, efficient fitting of all heating systems. From initial assessment and system selection to professional installation and safety certification, our licensed gas fitters ensure your new heating system meets all regulations while delivering reliable warmth and energy efficiency for your home or business.",
    icon: "/icons/gas.svg",
    image: "/images/Solar_Gas_Heater_Installation.jpeg",
    blocks: ["intro", "systems", "process", "safety", "efficiency"],
    keywords: ["gas heater installation", "gas heating system", "gas fitter", "gas appliance installation", "heating system replacement"]
  },
  {
    id: "air-conditioner-split-system-installation",
    title: "Air Conditioner & Split System Installation",
    shortDescription: "Professional installation of cooling and heating systems.",
    description: "Our air conditioner and split system installation service delivers professional fitting of all cooling and heating units. Our qualified technicians handle every aspect from positioning and mounting to electrical connections and commissioning, ensuring optimal performance, energy efficiency, and compliance with all relevant regulations.",
    icon: "/icons/aircon.svg",
    image: "/images/Airconditioner_Install.jpeg",
    blocks: ["intro", "systems", "process", "positioning", "maintenance"],
    keywords: ["air conditioner installation", "split system fitting", "AC installation", "heating cooling system", "ducted air conditioning"]
  },
  {
    id: "appliance-installations",
    title: "Appliance Installations",
    shortDescription: "Expert installation of water-connected appliances.",
    description: "Our appliance installation service provides expert fitting of all water-connected household devices. From dishwashers and washing machines to refrigerators with ice makers and water dispensers, our technicians ensure proper connections, secure fittings, and leak testing to guarantee your new appliances function perfectly from day one.",
    icon: "/icons/appliance.svg",
    image: "/images/New_Kitchen_Installation.jpeg",
    blocks: ["intro", "appliances", "process", "connections", "testing"],
    keywords: ["appliance installation", "dishwasher connection", "washing machine plumbing", "fridge water connection", "plumbed appliances"]
  },
  {
    id: "roof-plumbing",
    title: "Roof Plumbing",
    shortDescription: "Installation and repair of gutters, downpipes, and roof drainage.",
    description: "Our roof plumbing service covers installation and repair of all roof drainage systems. From gutters and downpipes to flashings and roof vents, our specialists ensure proper water collection and diversion that protects your property from water damage while maintaining your roof's integrity and appearance.",
    icon: "/icons/roof.svg",
    image: "/images/Employee_Repairing_Garden_Drainage.jpeg",
    blocks: ["intro", "services", "materials", "installation", "maintenance"],
    keywords: ["roof plumbing", "gutter installation", "downpipe repair", "roof drainage", "gutter replacement"]
  },
  {
    id: "water-meter-installations",
    title: "Water Meter Installations",
    shortDescription: "Professional installation and replacement of water meters.",
    description: "Our water meter installation service provides professional fitting and replacement of all meter types. Whether for new properties, meter upgrades, or replacements of damaged units, our technicians ensure accurate installation that meets water authority requirements while providing reliable measurement of your water consumption.",
    icon: "/icons/meter.svg",
    image: "/images/Employee_Fixing_Kitchen_2.jpeg",
    blocks: ["intro", "types", "process", "regulations", "maintenance"],
    keywords: ["water meter installation", "meter replacement", "water usage monitoring", "water meter upgrade", "utility meter fitting"]
  }
];

export const locations: Region[] = [
  {
    name: "City of Melbourne",
    slug: "city-of-melbourne",
    cities: [
      { name: "West Melbourne", slug: "west-melbourne" },
      { name: "Docklands", slug: "docklands" },
      { name: "Kensington", slug: "kensington" },
      { name: "Flemington", slug: "flemington" },
      { name: "North Melbourne", slug: "north-melbourne" },
      { name: "Carlton", slug: "carlton" },
      { name: "Parkville", slug: "parkville" },
      { name: "East Melbourne", slug: "east-melbourne" },
      { name: "Southbank", slug: "southbank" },
      { name: "South Wharf", slug: "south-wharf" },
      { name: "Melbourne (CBD)", slug: "melbourne-cbd" }
    ]
  },
  {
    name: "City of Maribyrnong",
    slug: "city-of-maribyrnong",
    cities: [
      { name: "Footscray", slug: "footscray" },
      { name: "West Footscray", slug: "west-footscray" },
      { name: "Yarraville", slug: "yarraville" },
      { name: "Seddon", slug: "seddon" },
      { name: "Braybrook", slug: "braybrook" },
      { name: "Maidstone", slug: "maidstone" },
      { name: "Maribyrnong", slug: "maribyrnong" }
    ]
  },
  {
    name: "City of Hobsons Bay",
    slug: "city-of-hobsons-bay",
    cities: [
      { name: "Williamstown", slug: "williamstown" },
      { name: "Williamstown North", slug: "williamstown-north" },
      { name: "Newport", slug: "newport" },
      { name: "Spotswood", slug: "spotswood" },
      { name: "South Kingsville", slug: "south-kingsville" },
      { name: "Altona", slug: "altona" },
      { name: "Altona North", slug: "altona-north" },
      { name: "Altona Meadows", slug: "altona-meadows" },
      { name: "Seaholme", slug: "seaholme" },
      { name: "Brooklyn", slug: "brooklyn" }
    ]
  },
  {
    name: "City of Brimbank",
    slug: "city-of-brimbank",
    cities: [
      { name: "Sunshine", slug: "sunshine" },
      { name: "Sunshine North", slug: "sunshine-north" },
      { name: "Sunshine West", slug: "sunshine-west" },
      { name: "St Albans", slug: "st-albans" },
      { name: "Albion", slug: "albion" },
      { name: "Ardeer", slug: "ardeer" },
      { name: "Cairnlea", slug: "cairnlea" },
      { name: "Deer Park", slug: "deer-park" },
      { name: "Delahey", slug: "delahey" },
      { name: "Derrimut", slug: "derrimut" },
      { name: "Kealba", slug: "kealba" },
      { name: "Keilor Downs", slug: "keilor-downs" },
      { name: "Keilor Park", slug: "keilor-park" },
      { name: "Kings Park", slug: "kings-park" },
      { name: "Sydenham", slug: "sydenham" },
      { name: "Taylors Lakes", slug: "taylors-lakes" }
    ]
  },
  {
    name: "City of Melton",
    slug: "city-of-melton",
    cities: [
      { name: "Melton", slug: "melton" },
      { name: "Melton South", slug: "melton-south" },
      { name: "Melton West", slug: "melton-west" },
      { name: "Burnside", slug: "burnside" },
      { name: "Burnside Heights", slug: "burnside-heights" },
      { name: "Caroline Springs", slug: "caroline-springs" },
      { name: "Rockbank", slug: "rockbank" },
      { name: "Fraser Rise", slug: "fraser-rise" },
      { name: "Hillside", slug: "hillside" },
      { name: "Kurunjang", slug: "kurunjang" },
      { name: "Aintree", slug: "aintree" },
      { name: "Harkness", slug: "harkness" },
      { name: "Thornhill Park", slug: "thornhill-park" },
      { name: "Cobblebank", slug: "cobblebank" },
      { name: "Weir Views", slug: "weir-views" },
      { name: "Strathtulloh", slug: "strathtulloh" }
    ]
  },
  {
    name: "City of Wyndham",
    slug: "city-of-wyndham",
    cities: [
      { name: "Werribee", slug: "werribee" },
      { name: "Werribee South", slug: "werribee-south" },
      { name: "Hoppers Crossing", slug: "hoppers-crossing" },
      { name: "Point Cook", slug: "point-cook" },
      { name: "Tarneit", slug: "tarneit" },
      { name: "Truganina", slug: "truganina" },
      { name: "Wyndham Vale", slug: "wyndham-vale" },
      { name: "Manor Lakes", slug: "manor-lakes" },
      { name: "Laverton", slug: "laverton" },
      { name: "Laverton North", slug: "laverton-north" },
      { name: "Seabrook", slug: "seabrook" },
      { name: "Mambourin", slug: "mambourin" },
      { name: "Williams Landing", slug: "williams-landing" }
    ]
  }
];

export const contactInfo = {
  phone: "0405 707 017",
  email: "admin@plexplumbing.com.au",
  address: "Delahey, Victoria, 3037",
  hours: {
    weekdays: "7:00 AM - 5:00 PM",
    saturday: "8:00 AM - 2:00 PM",
    sunday: "Emergency Only"
  },
  emergency: "24/7 Emergency Service Available"
};
