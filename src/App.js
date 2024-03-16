import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Archivo CSS personalizado
import services from './servicesData'; // Importa el array de servicios desde servicesData.js
import SvgLogo from './SvgLogo'; // Ajusta la ruta según sea necesario


function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container">
          <SvgLogo width="200" height="200"/> {/* Ajusta el tamaño según necesites */}
        </div>
      </nav>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="row">
            {/* Marco de servicios seleccionados */}
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
            {/* Formulario */}
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="plate" className="form-label">Placa</label>
                  <input type="text" className="form-control" id="plate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="date" />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Hora</label>
                  <input type="time" className="form-control" id="time" />
                </div>
                <button type="submit" className="btn btn-primary">Reservar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
