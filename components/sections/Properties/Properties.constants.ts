export interface PropertyItem {
  id: number;
  title: string;
  location: string;
  city: string;
  price: string;
  type: "Villas & Estates" | "Penthouses" | "Modern Homes";
  beds: number;
  baths: number;
  area: string;
  image: string;
  tag: string;
  architecturalStyle: string;
  yearBuilt: number;
  summary: string;
  amenities: string[];
}

export const PROPERTIES_CONTENT = {
  badge: "Curated Portfolio",
  title: "Featured Architectural Residences",
  description:
    "Every residence in our private portfolio is handpicked for architectural integrity, exceptional craftsmanship, and premier location.",
  categories: [
    "All",
    "Villas & Estates",
    "Penthouses",
    "Modern Homes",
  ] as const,
  cta: {
    viewAll: "View All Residences",
    viewLess: "Show Featured Only",
    inquireOffMarket: "Inquire Off-Market Portfolio",
    note: "Seeking private pocket listings or confidential unlisted estates?",
  },
  listings: [
    {
      id: 1,
      title: "The Horizon Modernist Villa",
      location: "Sayan Ridge, Ubud",
      city: "Bali",
      price: "$3,850,000",
      type: "Villas & Estates",
      beds: 5,
      baths: 6,
      area: "680 m² (7,320 sq ft)",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000",
      tag: "Architectural Landmark",
      architecturalStyle: "Cantilevered Modernism",
      yearBuilt: 2024,
      summary:
        "Engineered into the lush ravine of Sayan, this residence features dramatic cantilevered living pavilions, raw board-formed concrete, Indonesian teak accents, and uninterrupted valley panoramas.",
      amenities: [
        "28m Cantilevered Infinity Pool",
        "Subterranean Wine Cellar (800 bottles)",
        "Integrated Lutron Lighting & Sound",
        "Private Staff Quarters",
        "Biophilic Inner Courtyard",
        "Solar Micro-grid Backup",
      ],
    },
    {
      id: 2,
      title: "Skyline Glass Penthouse",
      location: "CBD Financial District",
      city: "Jakarta",
      price: "$2,400,000",
      type: "Penthouses",
      beds: 3,
      baths: 4,
      area: "340 m² (3,660 sq ft)",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      tag: "Exclusive",
      architecturalStyle: "Contemporary High-Rise",
      yearBuilt: 2023,
      summary:
        "Soaring 48 stories above the city, this penthouse pairs floor-to-ceiling acoustic glass walls with Poliform custom millwork, marble finishes, and a private wraparound sunset deck.",
      amenities: [
        "Direct Private Elevator Access",
        "Wraparound 360° Sunset Terrace",
        "Italian Calacatta Marble Kitchen",
        "24/7 White-Glove Concierge",
        "3 Designated Underground EV Bays",
        "Smart Climate Zoning",
      ],
    },
    {
      id: 3,
      title: "The Pavilion Estate",
      location: "Bukit Peninsula",
      city: "Bali",
      price: "$5,200,000",
      type: "Villas & Estates",
      beds: 6,
      baths: 7,
      area: "920 m² (9,900 sq ft)",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      tag: "Oceanfront",
      architecturalStyle: "Tropical Minimalist",
      yearBuilt: 2024,
      summary:
        "Positioned on an elevated limestone cliff, The Pavilion Estate harmonizes seamless indoor-outdoor ocean living with volcanic stone walls, open breezeways, and sweeping Indian Ocean vistas.",
      amenities: [
        "Private Cliffside Sunset Pavilion",
        "Dual Oceanfront Saltwater Pools",
        "Commercial Grade Chef's Kitchen",
        "Wellness Spa & Cedar Sauna",
        "Helipad Access Rights",
        "Automated Storm Shutter System",
      ],
    },
    {
      id: 4,
      title: "The Courtyard Residence",
      location: "Menteng Heritage Enclave",
      city: "Central Jakarta",
      price: "$4,650,000",
      type: "Modern Homes",
      beds: 4,
      baths: 5,
      area: "540 m² (5,810 sq ft)",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      tag: "Heritage Prime",
      architecturalStyle: "Modern Tropical Courtyard",
      yearBuilt: 2023,
      summary:
        "A discreet private sanctuary nestled in Jakarta's most prestigious diplomatic quarter, centered around a tranquil reflection pool and 100-year-old preserved rain tree.",
      amenities: [
        "Central Zen Water Courtyard",
        "Acoustic Media & Screening Lounge",
        "Gaggenau Integrated Appliances",
        "Advanced Air Filtration System",
        "Reinforced Vault & Security Suite",
        "Ensuite Dressing Suites",
      ],
    },
    {
      id: 5,
      title: "The Glass House Sanctuary",
      location: "Dago Highlands",
      city: "Bandung",
      price: "$1,850,000",
      type: "Modern Homes",
      beds: 4,
      baths: 4,
      area: "420 m² (4,520 sq ft)",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      tag: "Highland Retreat",
      architecturalStyle: "Post-and-Beam Modern",
      yearBuilt: 2024,
      summary:
        "Perched amid highland pine forests, this modern sanctuary delivers crisp mountain air, expansive steel-and-glass facades, radiant floor heating, and landscaped terraced gardens.",
      amenities: [
        "Double-Height Fireplace Hearth",
        "Heated Lap Pool & Sun Deck",
        "Panoramic Forest View Studios",
        "Sustainable Rainwater Harvesting",
        "High-Speed Fiber Infrastructure",
        "Double Carport with Solar Canopy",
      ],
    },
    {
      id: 6,
      title: "The Apex Crown Penthouse",
      location: "Senopati - SCBD Corridor",
      city: "South Jakarta",
      price: "$3,100,000",
      type: "Penthouses",
      beds: 3,
      baths: 4,
      area: "380 m² (4,090 sq ft)",
      image:
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000",
      tag: "Duplex Crown",
      architecturalStyle: "Duplex Penthouse",
      yearBuilt: 2024,
      summary:
        "A double-height duplex crown featuring an open spiral architectural staircase, private rooftop plunge pool, bespoke bar, and direct access to high-end dining and lifestyle avenues.",
      amenities: [
        "Private Rooftop Heated Plunge Pool",
        "Custom Onyx Cocktail Bar",
        "Double-Height 6.5m Glass Salon",
        "Direct Keycard Elevator",
        "Valet & Dedicated Resident Parking",
        "Automated Sound & Shading",
      ],
    },
    {
      id: 7,
      title: "The Cliffside Brutalist Sanctuary",
      location: "Uluwatu Clifftops",
      city: "Bali",
      price: "$6,400,000",
      type: "Villas & Estates",
      beds: 5,
      baths: 6,
      area: "780 m² (8,400 sq ft)",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
      tag: "Ocean Cliff",
      architecturalStyle: "Organic Brutalism",
      yearBuilt: 2024,
      summary:
        "Dramatically anchored to the ocean limestone cliffs of Uluwatu, this brutalist masterpiece features cast raw concrete, floating travertine walkways, and an unobstructed 180° horizon over the Indian Ocean.",
      amenities: [
        "25m Cantilever Ocean Infinity Pool",
        "Private Wine Tasting Room",
        "Sonance Architectural Audio",
        "Subterranean Cinema & Lounge",
        "Solar Storage System",
        "Dedicated Staff Quarters",
      ],
    },
    {
      id: 8,
      title: "The Lumina High-Floor Penthouse",
      location: "Mega Kuningan Diplomatic Zone",
      city: "South Jakarta",
      price: "$2,850,000",
      type: "Penthouses",
      beds: 3,
      baths: 4,
      area: "360 m² (3,875 sq ft)",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      tag: "Private Elevator",
      architecturalStyle: "Contemporary Minimalist",
      yearBuilt: 2023,
      summary:
        "Located on the 52nd level overlooking the diplomatic quarter, this penthouse pairs acoustic curtain walls with custom Rimadesio partitions, Boffi kitchen, and a private sky deck.",
      amenities: [
        "Private Express Lift Access",
        "Boffi Minimalist Island Kitchen",
        "Automated Motorized Shades",
        "Floor-to-Ceiling 3.8m Ceilings",
        "Dedicated 3-Car Covered Bays",
        "24/7 Security & Concierge",
      ],
    },
    {
      id: 9,
      title: "The Bamboo & Stone Pavilion",
      location: "Pererenan Coastal Enclave",
      city: "Bali",
      price: "$2,150,000",
      type: "Modern Homes",
      beds: 4,
      baths: 5,
      area: "480 m² (5,160 sq ft)",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      tag: "Biophilic Design",
      architecturalStyle: "Biophilic Modernism",
      yearBuilt: 2024,
      summary:
        "An understated modern sanctuary balancing black volcanic basalt with engineered bamboo arches, interior botanical gardens, and solar self-sufficiency minutes from the Pererenan surf.",
      amenities: [
        "Natural Magnesium Lap Pool",
        "Biophilic Open-Air Living Pavilion",
        "Custom Teak Integrated Cabinetry",
        "Solar Microgrid & Tesla Powerwall",
        "Private Yoga & Meditation Shala",
        "Gated Security Perimeter",
      ],
    },
  ] as PropertyItem[],
};
