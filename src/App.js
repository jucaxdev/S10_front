// App.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import services from './servicesData';
import { Modal } from 'react-bootstrap';
import logo from './assets/svg/logo.png';

function App() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleScheduleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate('');
    setSelectedTime('');
    window.location.reload(); // Recargar la página después de cerrar el modal
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleServiceChange = (event) => {
    const selectedService = services.find((service) => service.title === event.target.value);
    setSelectedService(selectedService);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="header-text">CAR DETAILING CENTER</h1>
      </header>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="carousel-wrapper">
                <Slider {...settings}>
                  {services.map((service, index) => (
                    <div key={index}>
                      <img src={service.image} alt={service.title} className="service-image" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="service-list">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`btn btn-${selectedService === service ? 'dark' : 'light'} service-title mb-2`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <button className="btn btn-primary mt-4 schedule-btn" onClick={handleScheduleClick}>
                Schedule Now
              </button>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="service-details">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{selectedService.title}</h4>
                    <p className="card-text">{selectedService.description}</p>
                    <p className="card-text">Price: {selectedService.price}</p>
                    <p className="card-text">Duration: {selectedService.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} data-bs-backdrop="static" data-bs-keyboard="false">
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="service" className="form-label">Service</label>
              <select
                className="form-control"
                id="service"
                value={selectedService.title}
                onChange={handleServiceChange}
              >
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                min={today}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                step="1800"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Modal.Footer>
      </Modal>
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