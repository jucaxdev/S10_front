import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Asegúrate de tener tu CSS actualizado
import services from './servicesData';
import SvgLogo from './SvgLogo';
import { SvgImages } from './SvgImages'; // Asegúrate de importar correctamente tu archivo

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container-fluid">
      {/* Carrusel como fondo */}
      <Carousel className="carousel-fade position-fixed top-0 start-0 w-100 h-100">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-img"
            src="./svg/img-1.svg" // Cambia esto por tus imágenes
            alt="First slide"
            style={{ opacity: 0.5 }} // Ajusta la opacidad según necesites
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-img"
            src="./svg/img-2.svg" // Cambia esto por tus imágenes
            alt="Second slide"
            style={{ opacity: 0.5 }} // Ajusta la opacidad según necesites
          />
        </Carousel.Item>
        {/* Añade más elementos al carrusel según necesites */}
      </Carousel>

      {/* Contenido sobre el carrusel */}
      <div className="content-over-carousel">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
          <div className="container">
            <SvgLogo width="200" height="200"/>
          </div>
        </nav>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 text-center">
                <h3>Car Detailing Center</h3>
                <p>¡Déjanos cuidar de tu automóvil y devolverle su brillo original!</p>
                <div className="service-frame mb-3">
                  {selectedService ? (
                    <div className="selected-service">
                      <h5>{selectedService.title}</h5>
                      <p>{selectedService.description}</p>
                      <p>Precio: {selectedService.price}</p>
                      <p>Duración: {selectedService.duration}</p>
                    </div>
                  ) : (
                    <p>Selecciona un servicio para ver más detalles.</p>
                  )}
                </div>
                <div className="options-bar">
                  {services.map((service, index) => (
                    <button
                      className="btn btn-primary btn-small me-2"
                      key={index}
                      onClick={() => setSelectedService(service)}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                {/* Aquí va el formulario */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
