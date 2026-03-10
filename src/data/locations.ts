export interface LocationData {
  slug: string;
  name: string;
  postcode: string;
  lat: number;
  lng: number;
  heroTagline: string;
  heroHeadingLine1: string;
  heroHeadingHighlight1: string;
  heroHeadingLine2: string;
  heroHeadingHighlight2: string;
  heroSubtitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  services: {
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  testimonial: {
    name: string;
    text: string;
    rating: number;
  };
  nearbySuburbs: string[];
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export const locations: LocationData[] = [
  {
    slug: "arundel",
    name: "Arundel",
    postcode: "4214",
    lat: -27.9392,
    lng: 153.3694,
    heroTagline: "Arundel's Trusted Removalists",
    heroHeadingLine1: "Arundel",
    heroHeadingHighlight1: "Movers",
    heroHeadingLine2: "You Can",
    heroHeadingHighlight2: "Trust",
    heroSubtitle: "Reliable Furniture Removals in Arundel",
    heroDescription:
      "Whether you're relocating within Arundel or heading across the Gold Coast, our experienced crew delivers careful, punctual furniture removals tailored to your needs.",
    metaTitle: "Furniture Removalists Arundel | Paradise Removals Gold Coast",
    metaDescription:
      "Professional furniture removalists in Arundel, QLD 4214. Local & interstate moves, packing services, and storage solutions. Fully insured with 4.9-star rating. Get a free quote today!",
    aboutParagraph1:
      "Arundel sits at the heart of the northern Gold Coast, surrounded by major shopping destinations and well-connected road networks. Our team knows every street and cul-de-sac in the area, ensuring efficient navigation and on-time arrivals for your move.",
    aboutParagraph2:
      "From the family estates near Arundel Hills to the townhouse complexes along Napper Road, we understand the unique access requirements of Arundel properties. Narrow driveways, steep inclines, multi-level homes — our crew handles it all with expertise gained from hundreds of local moves.",
    services: [
      {
        title: "Residential Moves in Arundel",
        description:
          "Full-service home removals for houses, townhouses, and apartments throughout the Arundel area. We handle everything from single-room relocations to complete household moves.",
      },
      {
        title: "Packing & Wrapping",
        description:
          "Our team carefully wraps and protects all your furniture and fragile items using premium packing materials. We take extra care with heirlooms and delicate pieces.",
      },
      {
        title: "Furniture Disassembly & Reassembly",
        description:
          "Beds, desks, wardrobes, and entertainment units — we disassemble at the pickup and rebuild at your new Arundel home so you can settle in faster.",
      },
      {
        title: "Commercial Relocations",
        description:
          "Offices, retail spaces, and medical practices in the Arundel business district can count on minimal-disruption moves that keep your operations running smoothly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Arundel Area Specialists",
        description:
          "We know every neighbourhood in Arundel — from the leafy estates near the golf course to the newer developments along Southport-Nerang Road.",
      },
      {
        title: "Same-Day Availability",
        description:
          "Need to move quickly? We often have same-day openings for Arundel residents, so your schedule stays on track.",
      },
      {
        title: "No Hidden Costs",
        description:
          "Our quotes cover everything — travel, labour, equipment, and insurance. What we quote is what you pay, guaranteed.",
      },
      {
        title: "Careful with Every Item",
        description:
          "Blankets, padding, and straps on every load. We treat your grandfather clock with the same care as your kids' toy box.",
      },
    ],
    testimonial: {
      name: "Ryan K.",
      text: "Moving our office in Arundel was seamless. The team was efficient and nothing was damaged. Very impressed with their organisation and communication throughout the whole process. Fair pricing too!",
      rating: 5,
    },
    nearbySuburbs: ["Parkwood", "Southport", "Labrador", "Molendinar", "Ashmore"],
    faqItems: [
      {
        question: "How much do removalists in Arundel cost?",
        answer:
          "Our Arundel removals start from competitive hourly rates for a two-person crew with truck. Final pricing depends on your home size, distance, and any extras like packing. Contact us for a free, no-obligation quote specific to your move.",
      },
      {
        question: "Do you offer weekend moves in Arundel?",
        answer:
          "Yes! We operate Monday through Saturday, including public holidays by arrangement. Saturday moves are popular in Arundel so we recommend booking early.",
      },
      {
        question: "Can you handle large furniture through narrow Arundel driveways?",
        answer:
          "Absolutely. Many Arundel homes have tight access points and we come equipped with trolleys, ramps, and the experience to navigate challenging entries safely.",
      },
    ],
  },
  {
    slug: "southport",
    name: "Southport",
    postcode: "4215",
    lat: -27.9671,
    lng: 153.3997,
    heroTagline: "Southport's Premier Removalists",
    heroHeadingLine1: "Southport",
    heroHeadingHighlight1: "Removals",
    heroHeadingLine2: "Done",
    heroHeadingHighlight2: "Right",
    heroSubtitle: "Expert Furniture Movers in Southport",
    heroDescription:
      "From Broadwater high-rises to charming Queenslanders, our Southport removals team brings precision and care to every move in the Gold Coast's bustling CBD hub.",
    metaTitle: "Furniture Removalists Southport | Paradise Removals Gold Coast",
    metaDescription:
      "Trusted furniture removalists in Southport, QLD 4215. Apartment moves, high-rise access, packing & storage. Fully insured Gold Coast movers. Free quotes available!",
    aboutParagraph1:
      "Southport is the Gold Coast's central business district, home to a diverse mix of high-rise apartments, heritage Queenslanders, and modern townhouse developments. Our team is well-versed in navigating busy streets, booking loading docks, and coordinating with building management for hassle-free moves.",
    aboutParagraph2:
      "Whether you're moving into a waterfront apartment overlooking the Broadwater or relocating your business along Scarborough Street, we bring the right equipment and expertise. Lifts, tight corridors, and stairwells are all part of a normal day for our Southport crew.",
    services: [
      {
        title: "Apartment & High-Rise Moves",
        description:
          "Experienced with lift bookings, loading dock schedules, and building access protocols. We make Southport apartment moves smooth and stress-free.",
      },
      {
        title: "House Removals",
        description:
          "Relocating from a Southport home? We provide full door-to-door service including protective wrapping, secure transport, and careful placement at your new address.",
      },
      {
        title: "Secure Storage Options",
        description:
          "Between moves or downsizing? Our climate-monitored storage facilities keep your belongings safe and accessible whenever you need them.",
      },
      {
        title: "Business & Office Moves",
        description:
          "Southport businesses trust us for weekend and after-hours relocations that minimise disruption. IT equipment, filing systems, and office furniture handled with care.",
      },
    ],
    whyChooseUs: [
      {
        title: "High-Rise Experts",
        description:
          "We handle building access, lift reservations, and loading dock logistics — the details that make Southport apartment moves stress-free.",
      },
      {
        title: "Broadwater to Bundall Ready",
        description:
          "Deep knowledge of Southport's street layout, parking restrictions, and peak traffic times means efficient moves every time.",
      },
      {
        title: "Fully Insured Moves",
        description:
          "Complete transit and public liability insurance. Your Southport move is protected from pickup to final placement.",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Early morning, evening, or weekend moves available to work around Southport's busy lifestyle and building restrictions.",
      },
    ],
    testimonial: {
      name: "Mark T.",
      text: "Best value removalists on the Gold Coast. David and his crew handled everything with care, even assembled our furniture at the new place. Absolute legends! Will definitely use them again.",
      rating: 5,
    },
    nearbySuburbs: ["Labrador", "Biggera Waters", "Main Beach", "Bundall", "Ashmore"],
    faqItems: [
      {
        question: "Do you handle high-rise apartment moves in Southport?",
        answer:
          "Yes, we specialise in high-rise moves across Southport. We coordinate lift bookings, loading dock access, and carry the appropriate insurance required by most Southport buildings.",
      },
      {
        question: "How do parking and loading zones work for Southport moves?",
        answer:
          "We assist with arranging temporary parking permits and know the best loading zones around Southport's CBD. Our smaller trucks can access tight spaces where larger vehicles cannot.",
      },
      {
        question: "Can you move my business in Southport after hours?",
        answer:
          "Absolutely. We offer after-hours and weekend commercial relocations throughout Southport to minimise disruption to your business and customers.",
      },
    ],
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    postcode: "4212",
    lat: -27.9073,
    lng: 153.3424,
    heroTagline: "Helensvale's Local Removalists",
    heroHeadingLine1: "Helensvale",
    heroHeadingHighlight1: "Moving",
    heroHeadingLine2: "Made",
    heroHeadingHighlight2: "Easy",
    heroSubtitle: "Trusted Furniture Removals in Helensvale",
    heroDescription:
      "Growing families and new estates deserve a moving team that understands Helensvale. We deliver careful, efficient removals for one of the Gold Coast's fastest-growing corridors.",
    metaTitle: "Furniture Removalists Helensvale | Paradise Removals Gold Coast",
    metaDescription:
      "Professional furniture removalists in Helensvale, QLD 4212. New estates, family homes & interstate moves. Fully insured with proven track record. Get your free quote!",
    aboutParagraph1:
      "Helensvale has transformed into one of the Gold Coast's most sought-after family suburbs, with master-planned estates, excellent schools, and easy access to the M1 motorway. Our team regularly services the growing developments around Monterey Keys, The Observatory, and Helensvale Town Centre.",
    aboutParagraph2:
      "We understand the needs of Helensvale families — from navigating brand-new driveways in fresh estates to carefully moving precious items into multi-storey display homes. Our crew brings the right trucks and equipment for every property type in the area.",
    services: [
      {
        title: "Family Home Relocations",
        description:
          "Specialising in 3-5 bedroom family home moves across Helensvale's estates. We pack, transport, and unpack with the care your family deserves.",
      },
      {
        title: "New Estate Move-Ins",
        description:
          "Moving into a brand-new Helensvale home? We take extra precautions to protect fresh paint, new flooring, and pristine surfaces during your move-in.",
      },
      {
        title: "Interstate Departures",
        description:
          "Heading beyond Queensland from Helensvale? Our interstate service covers the entire east coast with secure transport and real-time tracking.",
      },
      {
        title: "Professional Packing",
        description:
          "Our experienced packers use quality materials to protect everything from fine china to flat-screen TVs. Ideal for busy Helensvale families.",
      },
    ],
    whyChooseUs: [
      {
        title: "New Estate Specialists",
        description:
          "We protect brand-new homes during move-in — floor runners, door jamb protectors, and corner guards come standard on every Helensvale job.",
      },
      {
        title: "Family-Friendly Service",
        description:
          "We work quickly and carefully so your family can settle into your new Helensvale home before bedtime. Minimal disruption, maximum efficiency.",
      },
      {
        title: "M1 Access Advantage",
        description:
          "Helensvale's proximity to the M1 means we can quickly connect your move to anywhere on the Gold Coast or beyond — saving you time and money.",
      },
      {
        title: "Weekend Warriors",
        description:
          "Saturday moves are our speciality. Most Helensvale families prefer weekend relocations and we always have availability.",
      },
    ],
    testimonial: {
      name: "Sarah M.",
      text: "Paradise Removals turned what could have been a stressful move into a smooth and easy experience! They moved our entire 4-bedroom home in just one day. Professional, careful, and so friendly. Could not recommend them more!",
      rating: 5,
    },
    nearbySuburbs: ["Coomera", "Oxenford", "Pacific Pines", "Gaven", "Maudsland"],
    faqItems: [
      {
        question: "Do you service the new estates in Helensvale?",
        answer:
          "Yes, we regularly move families into Monterey Keys, The Observatory, Helensvale Riviera, and all other Helensvale estates. We know the area well and come prepared for new-build move-ins.",
      },
      {
        question: "How long does a typical Helensvale house move take?",
        answer:
          "A standard 3-bedroom Helensvale home usually takes 4-6 hours with our two-person crew. Larger homes or moves requiring packing may take a full day. We provide accurate timeframes in your free quote.",
      },
      {
        question: "Can you move us to another state from Helensvale?",
        answer:
          "Absolutely. Helensvale's easy M1 access makes it ideal for interstate departures. We cover Sydney, Melbourne, Brisbane, and everywhere in between with full insurance.",
      },
    ],
  },
  {
    slug: "coomera",
    name: "Coomera",
    postcode: "4209",
    lat: -27.8617,
    lng: 153.3406,
    heroTagline: "Coomera's Go-To Removalists",
    heroHeadingLine1: "Coomera",
    heroHeadingHighlight1: "Removals",
    heroHeadingLine2: "Stress",
    heroHeadingHighlight2: "Free",
    heroSubtitle: "Professional Movers Serving Coomera",
    heroDescription:
      "As Coomera continues to grow, so does our commitment to providing fast, affordable, and dependable removals for every new and established household in the area.",
    metaTitle: "Furniture Removalists Coomera | Paradise Removals Gold Coast",
    metaDescription:
      "Affordable furniture removalists in Coomera, QLD 4209. New developments, family homes & office moves. Insured Gold Coast movers with 2,500+ moves completed. Free quotes!",
    aboutParagraph1:
      "Coomera is the Gold Coast's northern growth hub, with new residential communities, Westfield Coomera, and easy rail connectivity. Our team is a familiar presence across estates like Coomera Waters, The Rivages, and Coomera Retreat, helping families settle into this thriving community.",
    aboutParagraph2:
      "We understand the rhythm of Coomera — school drop-off traffic, the best times to navigate Foxwell Road, and how to access the newest developments before Google Maps catches up. This local insight means faster, more efficient moves for our Coomera clients.",
    services: [
      {
        title: "New Development Move-Ins",
        description:
          "Coomera is booming with new builds. We protect fresh interiors with floor coverings and padding while delivering your furniture safely and efficiently.",
      },
      {
        title: "Local & Gold Coast Moves",
        description:
          "Moving within Coomera or across the coast? Our fleet is ready for short hops and longer journeys alike, always with careful handling and on-time service.",
      },
      {
        title: "Packing & Unpacking",
        description:
          "Save time with our comprehensive packing service. We bring all materials and carefully wrap each item, so you can focus on exploring your new Coomera neighbourhood.",
      },
      {
        title: "Temporary Storage",
        description:
          "Settlement dates not lining up? Our secure storage solutions bridge the gap so you never have to rush your Coomera move.",
      },
    ],
    whyChooseUs: [
      {
        title: "Growth-Area Experts",
        description:
          "We move families into Coomera's newest estates every week. No development is too new — we know where they are before the GPS does.",
      },
      {
        title: "Budget-Friendly Rates",
        description:
          "Building a new home stretches the budget. Our competitive Coomera rates deliver premium service without the premium price tag.",
      },
      {
        title: "Quick Turnaround",
        description:
          "Our efficient crew completes most Coomera home moves in a single day, so you can start enjoying your new home sooner.",
      },
      {
        title: "Pet & Kid Friendly",
        description:
          "We work around your family's needs, keeping pathways clear and moving quickly so little ones and furry friends stay safe and comfortable.",
      },
    ],
    testimonial: {
      name: "Jessica L.",
      text: "Third time using Paradise Removals and they never disappoint. Always on time, always professional. The communication was excellent from start to finish. Makes moving stress-free!",
      rating: 5,
    },
    nearbySuburbs: ["Upper Coomera", "Pimpama", "Helensvale", "Oxenford", "Willow Vale"],
    faqItems: [
      {
        question: "Do you move to the new estates in Coomera and Pimpama?",
        answer:
          "Yes, we service all new and established estates across Coomera, Upper Coomera, and Pimpama. We regularly move families into Coomera Waters, The Rivages, Coomera Retreat, and the newest releases.",
      },
      {
        question: "What size truck do you use for Coomera moves?",
        answer:
          "We match the truck to your move. For most Coomera homes, our 12-tonne truck handles a full 3-4 bedroom house in one load. For smaller moves or tight access, we use our 8-tonne vehicles.",
      },
      {
        question: "Is my furniture insured during the move?",
        answer:
          "Yes. Every Coomera move includes full transit insurance and public liability coverage. Your belongings are protected from the moment we pick them up until they're placed in your new home.",
      },
    ],
  },
  {
    slug: "labrador",
    name: "Labrador",
    postcode: "4215",
    lat: -27.9453,
    lng: 153.3972,
    heroTagline: "Labrador's Dependable Movers",
    heroHeadingLine1: "Labrador",
    heroHeadingHighlight1: "Moves",
    heroHeadingLine2: "With",
    heroHeadingHighlight2: "Care",
    heroSubtitle: "Your Local Labrador Removals Team",
    heroDescription:
      "From waterfront units to established family homes, our Labrador team provides attentive, affordable removals with the personal touch that locals appreciate.",
    metaTitle: "Furniture Removalists Labrador | Paradise Removals Gold Coast",
    metaDescription:
      "Dependable furniture removalists in Labrador, QLD 4215. Waterfront apartments, homes & unit moves. Fully insured Gold Coast removals. Call for a free quote today!",
    aboutParagraph1:
      "Labrador's mix of waterfront living and established suburban streets makes it one of the Gold Coast's most diverse suburbs. Our team navigates everything from the canal-side apartments along Marine Parade to the classic brick homes in Labrador's quiet back streets with equal confidence.",
    aboutParagraph2:
      "We've built strong relationships with many Labrador building managers and body corporates, making the logistics of unit and apartment moves seamless. Whether it's a downsizing move or a young professional's first apartment, we bring the same level of care and professionalism to every job.",
    services: [
      {
        title: "Waterfront & Unit Moves",
        description:
          "Labrador's Broadwater-adjacent apartments require careful planning. We coordinate building access, protect common areas, and move efficiently in shared spaces.",
      },
      {
        title: "Suburban Home Removals",
        description:
          "Full-service removals for Labrador's family homes. We handle everything from careful furniture wrapping to final placement in your new rooms.",
      },
      {
        title: "Downsizing Assistance",
        description:
          "Moving to a smaller space? We help organise, pack, and transport the items you're keeping while coordinating storage or donation of the rest.",
      },
      {
        title: "Fragile Item Specialists",
        description:
          "Antiques, artwork, and glass items are handled with specialist wrapping techniques and secure transport to ensure they arrive in perfect condition.",
      },
    ],
    whyChooseUs: [
      {
        title: "Waterfront Specialists",
        description:
          "We know Labrador's canal-side buildings and their access requirements. Lift bookings, parking arrangements, and building rules — we handle it all.",
      },
      {
        title: "Building Manager Relationships",
        description:
          "Our established connections with Labrador body corporates means smoother building access and fewer move-day surprises.",
      },
      {
        title: "Gentle & Respectful",
        description:
          "Many of our Labrador clients are downsizing or elderly. We bring patience, respect, and extra helping hands to make the transition comfortable.",
      },
      {
        title: "Competitive Local Rates",
        description:
          "As a nearby team, we keep travel costs low for Labrador moves — savings we pass directly on to you.",
      },
    ],
    testimonial: {
      name: "Patricia W.",
      text: "Wonderful experience moving from my Labrador apartment. The boys were so careful with my china collection and antique furniture. Nothing was scratched or broken. Very patient and polite team — highly recommend!",
      rating: 5,
    },
    nearbySuburbs: ["Southport", "Biggera Waters", "Arundel", "Chirn Park", "Parkwood"],
    faqItems: [
      {
        question: "Can you move me from a Labrador apartment with no lift?",
        answer:
          "Yes, our crew is experienced with walk-up apartments throughout Labrador. We use specialised equipment like stair trolleys and furniture slides to safely navigate stairs without damaging walls or your belongings.",
      },
      {
        question: "Do you offer removals for elderly residents in Labrador?",
        answer:
          "We do, and it's a service we take great pride in. We offer a gentle, patient approach with additional packing assistance and can coordinate with family members to ensure everything goes smoothly.",
      },
      {
        question: "How far in advance should I book a Labrador move?",
        answer:
          "We recommend booking at least one week ahead, though we often accommodate shorter notice for Labrador moves. End of month and Saturdays fill fast, so earlier is always better.",
      },
    ],
  },
  {
    slug: "parkwood",
    name: "Parkwood",
    postcode: "4214",
    lat: -27.9503,
    lng: 153.3631,
    heroTagline: "Parkwood's Reliable Removalists",
    heroHeadingLine1: "Parkwood",
    heroHeadingHighlight1: "Removals",
    heroHeadingLine2: "Done",
    heroHeadingHighlight2: "Better",
    heroSubtitle: "Efficient Furniture Movers in Parkwood",
    heroDescription:
      "Centrally located and well-connected, Parkwood deserves removalists who match its convenience. Our team delivers fast, careful moves for residents and businesses alike.",
    metaTitle: "Furniture Removalists Parkwood | Paradise Removals Gold Coast",
    metaDescription:
      "Efficient furniture removalists in Parkwood, QLD 4214. Homes, student moves & business relocations near Griffith Uni. Insured Gold Coast movers. Free quote available!",
    aboutParagraph1:
      "Parkwood is a centrally located Gold Coast suburb known for Griffith University, the Gold Coast University Hospital precinct, and a mix of established homes and modern developments. Our team services the full range of Parkwood properties, from student share houses near the campus to family homes in the quiet eastern streets.",
    aboutParagraph2:
      "The medical and education precincts bring a steady stream of professionals and students relocating to Parkwood. We offer flexible scheduling and competitive rates that suit short-notice moves, making us the go-to choice for anyone settling into this vibrant, central suburb.",
    services: [
      {
        title: "Student & Share House Moves",
        description:
          "Moving near Griffith Uni? We offer flexible, affordable options perfect for students and young professionals relocating to or within Parkwood.",
      },
      {
        title: "Family Home Removals",
        description:
          "Complete door-to-door service for Parkwood families. From packing your kitchen to setting up your living room, we handle every detail.",
      },
      {
        title: "Medical & Professional Relocations",
        description:
          "Sensitive equipment, heavy filing, and strict timelines — our team delivers precision moves for the Parkwood medical and business community.",
      },
      {
        title: "Express Moves",
        description:
          "Short on time? Our express service is ideal for Parkwood's fast-moving rental market. Quick, efficient, and still delivered with complete care.",
      },
    ],
    whyChooseUs: [
      {
        title: "Central Location Advantage",
        description:
          "Parkwood's central Gold Coast position means shorter travel times to and from our depot — that translates to lower costs for you.",
      },
      {
        title: "Student-Friendly Pricing",
        description:
          "We offer special rates for students and single-room moves near Griffith University. Quality service doesn't have to break the budget.",
      },
      {
        title: "Healthcare Sector Experience",
        description:
          "We've relocated medical practices, specialist clinics, and allied health offices within the Parkwood health precinct with zero downtime.",
      },
      {
        title: "Short-Notice Ready",
        description:
          "Parkwood's active rental market means people move quickly. We're set up to handle last-minute bookings without compromising on service.",
      },
    ],
    testimonial: {
      name: "Daniel R.",
      text: "Had to move out of my Parkwood rental on short notice and Paradise Removals saved the day. Booked two days before, they showed up on time and had everything loaded in under two hours. Great value and really friendly team.",
      rating: 5,
    },
    nearbySuburbs: ["Arundel", "Southport", "Molendinar", "Nerang", "Carrara"],
    faqItems: [
      {
        question: "Do you offer student removals near Griffith University?",
        answer:
          "Yes! We offer affordable single-room and share-house moves for students near Griffith University Parkwood campus. Our smaller vehicles are perfect for these types of moves.",
      },
      {
        question: "Can you move medical equipment in Parkwood?",
        answer:
          "We have experience relocating medical and professional offices in the Parkwood health precinct. We handle sensitive equipment with specialist wrapping and secure transport.",
      },
      {
        question: "What areas can you move me to from Parkwood?",
        answer:
          "From Parkwood we service the entire Gold Coast, Brisbane, and interstate destinations. Parkwood's central location and easy motorway access makes moves in any direction efficient.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
