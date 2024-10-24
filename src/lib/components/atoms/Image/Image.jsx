import React from 'react';
import { transformImageUrl } from '../../../api/contentful-images-fetch';

const Image = ({ 
  src = '', 
  width = '', 
  height = '', 
  alt = '', 
  opacity = '', 
  brdRadius = '', 
  loading = '' 
}) => {
  // Dynamic URLs for different image formats
  const smallWebp = transformImageUrl(src, { w: 375, fm: 'webp' });
  const mediumWebp = transformImageUrl(src, { w: 768, fm: 'webp' });
  const largeWebp = transformImageUrl(src, { w: 1024, fm: 'webp' });
  const smallFallback = transformImageUrl(src, { w: 375 });
  const mediumFallback = transformImageUrl(src, { w: 768 });
  const largeFallback = transformImageUrl(src, { w: 1024 });

  return (
    <picture>
      <source type="image/webp" media="(max-width: 375px)" srcSet={smallWebp} />
      <source media="(max-width: 375px)" srcSet={smallFallback} />
      <source type="image/webp" media="(max-width: 768px)" srcSet={mediumWebp} />
      <source media="(max-width: 768px)" srcSet={mediumFallback} />
      <source type="image/webp" media="(max-width: 1024px)" srcSet={largeWebp} />
      <source media="(max-width: 1024px)" srcSet={largeFallback} />
      <img
        src={largeFallback}
        alt={alt}
        loading={loading}
        style={{
          width: `${width}px`, 
          height: `${height}px`, 
          borderRadius: brdRadius, 
          opacity: opacity
        }}
      />
    </picture>
  );
};

export default Image;
