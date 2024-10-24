import React from 'react';

const HeaderImage = ({
  alt = '',
  src = '',
  opacity = '',
  smallWebp = '../header-image-small.webp',
  mediumWebp = '../header-image-medium.webp',
  largeWebp = '../header-image-large.webp',
  smallFallback = '../header-image-small.jpg',
  mediumFallback = '../header-image-medium.jpg',
  largeFallback = '../header-image-large.jpg',
}) => {
  return (
    <picture>
      {/* Image for small screens */}
      <source type="image/webp" media="(max-width: 375px)" srcSet={smallWebp} />
      <source media="(max-width: 375px)" srcSet={smallFallback} />

      {/* Image for medium screens */}
      <source type="image/webp" media="(max-width: 768px)" srcSet={mediumWebp} />
      <source media="(max-width: 768px)" srcSet={mediumFallback} />

      {/* Image for large screens */}
      <source type="image/webp" media="(max-width: 1024px)" srcSet={largeWebp} />
      <source media="(max-width: 1024px)" srcSet={largeFallback} />

      {/* Standard image */}
      <img src={src} alt={alt} style={{ opacity: opacity }} />
    </picture>
  );
};

export default HeaderImage;
