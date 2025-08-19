import React, { useState } from 'react';

const IllustrationWrapper = ({ 
  doodleUrl, 
  storysetUrl, 
  alt, 
  className = "", 
  fallbackIcon = null,
  useDoodle = true 
}) => {
  const [imageError, setImageError] = useState(false);
  const [useSecondary, setUseSecondary] = useState(false);

  const handleImageError = () => {
    if (useDoodle && !useSecondary && storysetUrl) {
      setUseSecondary(true);
    } else if (!imageError) {
      setImageError(true);
    }
  };

  // Si erreur et on a un fallback icon
  if (imageError && fallbackIcon) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  // Choisir l'URL à utiliser
  let imageUrl;
  if (useDoodle && !useSecondary) {
    imageUrl = doodleUrl;
  } else if (storysetUrl) {
    imageUrl = storysetUrl;
  } else {
    imageUrl = doodleUrl;
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
};

export default IllustrationWrapper;
