import React from 'react';
import IllustrationWrapper from './IllustrationWrapper';

const ServiceIllustrations = {
  // Énergie Solaire
  solar: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=fef3c7&i=solar",
    storyset: "https://storyset.com/illustration/solar-energy/rafiki", // URL example
    alt: "Énergie solaire"
  },

  // Télécommunications
  telecom: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=dbeafe&i=network",
    storyset: "https://storyset.com/illustration/wireless-connection/rafiki",
    alt: "Télécommunications"
  },

  // Marketing Digital
  digital: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=f3e8ff&i=digital",
    storyset: "https://storyset.com/illustration/digital-marketing/rafiki",
    alt: "Marketing digital"
  },

  // Hébergement Web
  hosting: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=ecfdf5&i=server",
    storyset: "https://storyset.com/illustration/server-cluster/rafiki",
    alt: "Hébergement web"
  },

  // Import-Export
  import: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=fef2f2&i=shipping",
    storyset: "https://storyset.com/illustration/logistics/rafiki",
    alt: "Import-Export"
  },

  // Prestations Techniques
  technical: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=f8fafc&i=tools",
    storyset: "https://storyset.com/illustration/maintenance/rafiki",
    alt: "Prestations techniques"
  },

  // Général - Business
  business: {
    doodle: "https://doodleipsum.com/500x400/flat?bg=1f2937&i=business",
    storyset: "https://storyset.com/illustration/business-plan/rafiki",
    alt: "Solutions business"
  },

  // Tech générale
  tech: {
    doodle: "https://doodleipsum.com/400x250/flat?bg=f8fafc&i=technology",
    storyset: "https://storyset.com/illustration/code-snippets/rafiki",
    alt: "Solutions technologiques"
  },

  // Avatars et éléments décoratifs
  avatar1: {
    doodle: "https://doodleipsum.com/40x40/outline?bg=fbbf24&shape=circle&n=1",
    alt: "Avatar 1"
  },

  avatar2: {
    doodle: "https://doodleipsum.com/32x32/avatar?bg=22c55e&shape=circle&n=2",
    alt: "Avatar 2"
  },

  decorative1: {
    doodle: "https://doodleipsum.com/40x40/abstract?bg=3b82f6&shape=circle&n=3",
    alt: "Élément décoratif"
  },

  decorative2: {
    doodle: "https://doodleipsum.com/32x32/flat?bg=f59e0b&shape=circle&n=4",
    alt: "Élément décoratif"
  },

  // Communication et Contact
  communication: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=e0e7ff&i=communication",
    storyset: "https://storyset.com/illustration/phone-call/rafiki",
    alt: "Communication"
  },

  // Succès et Réussite
  success: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=ecfdf5&i=success",
    storyset: "https://storyset.com/illustration/achievement/rafiki",
    alt: "Succès"
  },

  // Croissance
  growth: {
    doodle: "https://doodleipsum.com/350x200/flat?bg=fef3c7&i=growth",
    storyset: "https://storyset.com/illustration/growth/rafiki",
    alt: "Croissance"
  }
};

const ServiceIllustration = ({ type, className = "", fallbackIcon = null, ...props }) => {
  const illustration = ServiceIllustrations[type];
  
  if (!illustration) {
    console.warn(`Illustration type "${type}" not found`);
    return fallbackIcon ? (
      <div className={`flex items-center justify-center ${className}`}>
        {fallbackIcon}
      </div>
    ) : null;
  }

  return (
    <IllustrationWrapper
      doodleUrl={illustration.doodle}
      storysetUrl={illustration.storyset}
      alt={illustration.alt}
      className={className}
      fallbackIcon={fallbackIcon}
      {...props}
    />
  );
};

export default ServiceIllustration;
