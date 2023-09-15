import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
	return (
		<section id="services" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Cómo Alquilar una Cancha</h3>
							<p>Descubre cómo es fácil comenzar a usar Canchas Club y reservar tu próxima experiencia deportiva.</p>
						</div>

					</Col>
				</Row>

				<Row>

					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>

                        	<img src='/images/features/CanchasClub_Iconografia-BUSCA.svg' width={'100px'}></img>

							<h5>Busca tu Cancha</h5>
							<p>Usa nuestra intuitiva herramienta de búsqueda para encontrar la cancha perfecta según tu ubicación, deporte y horario deseado.</p>

						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>

						<img src='/images/features/CanchasClub_Iconografia-RESERVALINEA.svg' width={'100px'}></img>

							<h5>Reserva en Línea</h5>
							<p>Selecciona la cancha que te guste y realiza tu reserva en línea de manera segura. También puedes optar por pagar en persona al llegar.</p>

						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>

						<img src='/images/features/CanchasClub_Iconografia-JUEGA.svg' width={'100px'}></img>

							<h5>¡Juega y Disfruta!</h5>
							<p>Llega a la cancha en el horario seleccionado y disfruta de tu actividad deportiva. ¡Es así de simple y conveniente con Canchas Club!</p>

						</div>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Services;