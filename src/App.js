// App.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import services from './servicesData'; // Importa los datos de servicios
import SvgLogo from './SvgLogo';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="App">
      <div className="container content-over-carousel">
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <div className="container-fluid">
            <SvgLogo
              width="150"
              height="150"
              style={{ margin: 'auto', display: 'block', filter: 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.5))' }}
            />
          </div>
        </nav>
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 text-center">
            <h3>Car Detailing Center</h3>
            <p>¡Déjanos cuidar de tu automóvil y devolverle su brillo original!</p>
            <div className="service-images">
              <Slider {...settings}>
                {services.map((service, index) => (
                  <div key={index} className="service-frame" onClick={() => handleServiceClick(service)}>
                    <img src={service.image} alt={service.title} className="service-image" />
                    <button className="btn btn-primary-custom service-title">{service.title}</button>
                    <div className="service-description">
                      <p>{service.description}</p>
                      <p>Precio: {service.price}</p>
                      <p>Duración: {service.duration}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para la flecha de siguiente
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

// Componente para la flecha de anterior
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default App;
