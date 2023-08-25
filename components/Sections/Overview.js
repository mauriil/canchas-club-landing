import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = (props) => {
	return (
		<section id="overview" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Track time --> */}
				<Row>

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">

						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>¿Dueño de un Club?</h3>
							<p>Aprende cómo administrar tu club y canchas de manera eficiente en solo tres simples pasos.</p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Paso 1: Configura tu Club</h6>
									<p>Registra tu club y configura los detalles básicos, como nombre, ubicación y detalles de contacto.r</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Paso 2: Agrega tus Canchas</h6>
									<p>Añade las canchas de tu club junto con sus características, horarios y precios para que los usuarios puedan verlas.</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Paso 3: Gestiona los Turnos</h6>
									<p>Administra los turnos de las canchas, establece disponibilidad y permite a los usuarios reservar de acuerdo a tu configuración.</p>
								</div>

							</div>

						</div>

					</Col>

					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/track-time.png" alt="" />
					</Col>

				</Row>

				<div className="empty-100"></div>

			</Container>

		</section>
	);
}

export default Overview;