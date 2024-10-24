import React from 'react';
import { Image } from '../Image/Image';
import Button from '../Button/Button';
import './TicketCard.css';  

const TicketCard = ({ itemCollection }) => {
  const items = itemCollection.componentsCollection.items;

  return (
    <>
      {items.map((item, index) => (
        <article className="ticket-card" key={index}>
          <div className="ticket-card-image">
            <h3>{item.title}</h3>
            <Image
              src={item.image.url}
              alt={item.image.title}
              brdRadius="var(--radius-lg)"
              opacity="0.6"
              loading="lazy"
            />
            <p>{item.price}</p>
          </div>

          <div className="ticket-card-details">
            <p>
              <span>
                <RouteIcon width="25" height="25" fill="var(--page-bg-color)" />
              </span>
              {item.location}
            </p>

            <p>
              <span>
                <CocktailIcon width="25" height="25" fill="var(--page-bg-color)" />
              </span>
              {item.cocktailDescription}
            </p>

            <div className="ticket-card-buttons">
              <Button type="button" variant="primary" title="Book Now" size="m" />
              <Button href={`/home/${item.slug}`} variant="secondary" title="Read More" size="m" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default TicketCard;
