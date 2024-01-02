import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
	const [buscaOver, setBuscaOver] = React.useState(false);
	const [reservaOver, setReservaOver] = React.useState(false);
	const [juegaOver, setJuegaOver] = React.useState(false);
	return (
		<section id="services" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Cómo Alquilar una Cancha</h3>
							<p>Descubrí cómo es fácil comenzar a usar Canchas Club y reservar tu próxima experiencia deportiva.</p>
						</div>

					</Col>
				</Row>

				<Row>

					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0" onMouseOver={() => setBuscaOver(true)} onMouseOut={() => setBuscaOver(false)}>
						<div className={props.serviceClassName}>

                        	<img src={
									buscaOver ?
										'/images/overview/CanchasClub_Iconografia-BUSCA-over.svg'
										:
										'/images/features/CanchasClub_Iconografia-BUSCA.svg'
							} width={'100px'}></img>

							<h5>Busca tu Cancha</h5>
							<p>Usá nuestra intuitiva herramienta de búsqueda para encontrar la cancha perfecta según tu ubicación, deporte y horario deseado.</p>

						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s" onMouseOver={() => setReservaOver(true)} onMouseOut={() => setReservaOver(false)}>
						<div className={props.serviceClassName}>

						<img src={
									reservaOver ?
										'/images/overview/CanchasClub_Iconografia-RESERVALINEA-over.svg'
										:
										'/images/features/CanchasClub_Iconografia-RESERVALINEA.svg'
						} width={'100px'}></img>

							<h5>Reserva en Línea</h5>
							<p>Seleccioná la cancha que te guste y realizá tu reserva en línea de manera segura.</p>

						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s" onMouseOver={() => setJuegaOver(true)} onMouseOut={() => setJuegaOver(false)}>
						<div className={props.serviceClassName}>

						<img src={
									juegaOver ?
										'/images/overview/CanchasClub_Iconografia-JUEGA-over.svg'
										:
										'/images/features/CanchasClub_Iconografia-JUEGA.svg'
						} width={'100px'}></img>

							<h5>¡Jugá y Disfrutá!</h5>
							<p>Llegá a la cancha en el horario seleccionado y disfrutá de tu actividad deportiva. ¡Es así de simple y conveniente con Canchas Club!</p>

						</div>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Services;