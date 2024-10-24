import React from 'react';
import Button from '../button/Button';
import './RotterdamTicketHero.css'; 
import HeaderImage from './HeaderImage'; 

const RotterdamTicketHero = ({ items }) => {
  const item = items[0]; // Get the first item in the array

  return (
    <section className="hero-section">
      <figure className="hero-figure">
        <HeaderImage
          src={item.asset.url}
          width="/"
          height="/"
          loading="lazy"
        />
      </figure>
      <div className="hero-content">
        <p>{item.location}</p>
        <h1>{item.title}</h1>
        <Button
          variant="primary"
          title="book now"
          icon={ArrowRight}
          iconColor="var(--btn-primary-text-clr)"
          size="lg"
        />
      </div>
    </section>
  );
};

export default RotterdamTicketHero;
