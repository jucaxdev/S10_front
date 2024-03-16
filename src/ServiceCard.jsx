import React from 'react';

function ServiceCard({ service, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <h5>{service.title}</h5>
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceCard;
