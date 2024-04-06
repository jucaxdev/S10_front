import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Importar la librería Slick Carousel para el carrusel de imágenes
import 'slick-carousel/slick/slick.css'; // Importar los estilos CSS para el carrusel
import 'slick-carousel/slick/slick-theme.css'; // Importar el tema CSS para el carrusel
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos CSS de Bootstrap
import './App.css'; // Importar los estilos CSS personalizados
import services from './servicesData'; // Importar los datos de los servicios
import { Modal, Dropdown } from 'react-bootstrap'; // Importar los componentes Modal y Dropdown de React-Bootstrap
import logo from './assets/svg/logo.png'; // Importar la imagen del logo
import img1 from './assets/svg/img 1.jpeg'; // Importar las imágenes para el carrusel
import img2 from './assets/svg/img 2.jpeg';
import img3 from './assets/svg/img 3.jpeg';
import img4 from './assets/svg/img 4.jpeg';
import img5 from './assets/svg/img 5.jpeg';
import img6 from './assets/svg/img 6.jpeg';
import img7 from './assets/svg/img 7.jpeg';
import img8 from './assets/svg/img 8.jpeg';
import img9 from './assets/svg/img 9.jpeg';
import img10 from './assets/svg/img 10.jpeg';
import img11 from './assets/svg/img 11.jpeg';
import img12 from './assets/svg/img 12.jpeg';
import img13 from './assets/svg/img 13.jpeg';
import { formatTime } from './utils'; // Importar la función formatTime desde el archivo utils.js

function App() {
  // Estado para almacenar el servicio seleccionado
  const [selectedService, setSelectedService] = useState(services[0]);
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  // Estado para almacenar la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState('');
  // Estado para almacenar la hora seleccionada
  const [selectedTime, setSelectedTime] = useState('');
  // Estado para almacenar las horas disponibles
  const [availableTimes, setAvailableTimes] = useState([]);
  // Arreglo con las imágenes del carrusel
  const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  // Función para manejar el clic en un servicio
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Función para abrir el modal
  const handleScheduleClick = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal y reiniciar los estados
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate('');
    setSelectedTime('');
    window.location.reload(); // Recargar la página después de cerrar el modal
  };

  // Función para manejar el cambio de fecha
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Función para manejar el cambio de hora
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  // Efecto para generar las horas disponibles cada vez que se abre el modal
  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const availableTimes = [];

    const startHour = 6; // Hora de inicio: 6 a.m.
    const endHour = 22; // Hora de fin: 10 p.m.
    const endMinute = 1; // Minuto de fin: hasta las 10:01 p.m.

    // Generar las horas disponibles desde las 6 a.m. hasta las 10:00 p.m. en incrementos de 30 minutos
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === currentHour && minute < currentMinute) {
          continue; // Omitir las horas y minutos anteriores a la hora actual
        }
        if (hour === endHour && minute >= endMinute) {
          continue; // Omitir las horas y minutos después de las 10:00 p.m.
        }
        const time = formatTime(hour, minute); // Formatear la hora en el formato "HH:mmAM/PM"
        availableTimes.push(time);
      }
    }

    setAvailableTimes(availableTimes);
  }, [showModal]);

  // Configuración del carrusel de imágenes
  const settings = {
    dots: false, // Ocultar los puntos de navegación
    infinite: true, // Permitir desplazamiento infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazar una imagen a la vez
    autoplay: true, // Reproducir automáticamente
    autoplaySpeed: 1500, // Velocidad de reproducción automática en milisegundos
    nextArrow: <NextArrow />, // Componente para la flecha de siguiente
    prevArrow: <PrevArrow />, // Componente para la flecha de anterior
  };

  // Obtener la fecha actual
  const today = new Date().toISOString().split('T')[0];

  // Renderizar el componente
  return (
    <div className="App">
      {/* Encabezado */}
      <header className="app-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="header-text">CAR DETAILING CENTER</h1>
      </header>

      {/* Contenido principal */}
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            {/* Columna para el carrusel */}
            <div className="col-md-4">
              <div className="carousel-wrapper">
                <Slider {...settings}>
                  {carouselImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Carousel ${index + 1}`} className="service-image" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Columna para el listado de servicios y botón "Schedule Now" */}
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="service-list">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`btn service-title mb-2 ${selectedService === service ? 'active' : ''}`}
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

            {/* Columna para los detalles del servicio seleccionado */}
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

      {/* Modal para programar una cita */}
      <Modal show={showModal} onHide={handleCloseModal} data-bs-backdrop="static" data-bs-keyboard="false">
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label form-title">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label form-title">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            {/* Mostrar el servicio seleccionado */}
            <div className="mb-3">
              <label className="form-label form-title">Service</label>
              <p>{selectedService.title}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label form-title">Date</label>
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
              <label className="form-label form-title">Time</label>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-time">
                  {selectedTime || 'Select Time'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {availableTimes.map((time, index) => (
                    <Dropdown.Item key={index} onClick={() => handleTimeChange(time)}>
                      {time}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
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

// Componente para la flecha de siguiente del carrusel
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

// Componente para la flecha de anterior del carrusel
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default App;