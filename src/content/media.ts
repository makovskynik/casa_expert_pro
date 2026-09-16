export const media = {
  hero: {
    src: "/media/hero-villa.jpg",
    alt: "White Costa Blanca villa with pool and palms — atmospheric photo, not a Casa Expert job",
  },
  solar: {
    src: "/media/service-solar.jpg",
    alt: "Solar panel being carried on a terracotta tiled roof",
  },
  calc: {
    src: "/media/service-engineering.jpg",
    alt: "Installer fastening solar modules on a flat roof — atmospheric photo, not a Casa Expert job",
  },
  renovation: {
    src: "/media/service-renovation.jpg",
    alt: "Bright renovated kitchen interior — atmospheric photo, not a Casa Expert job",
  },
  bathroom: {
    src: "/media/service-bath.jpg",
    alt: "Completed bathroom with tiled walls and sanitary ware",
  },
  kitchen: {
    src: "/media/service-kitchen.jpg",
    alt: "Renovated kitchen with worktop and cabinetry",
  },
  engineering: {
    src: "/media/service-engineering.jpg",
    alt: "Installer fastening photovoltaic modules on a roof",
  },
  cleaning: {
    src: "/media/service-cleaning.jpg",
    alt: "Interior after post-construction cleaning",
  },
} as const;

export const serviceMedia = {
  "solar-panels": media.solar,
  "home-renovation": media.renovation,
  "bathroom-renovation": media.bathroom,
  "kitchen-renovation": media.kitchen,
  engineering: media.engineering,
  "property-preparation": media.cleaning,
} as const;
