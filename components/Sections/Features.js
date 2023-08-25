import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
	return (
		<section id="features" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Características Clave de Canchas Club</h3>
							<p>   Canchas Club te brinda una plataforma integral para llevar tu experiencia deportiva al siguiente nivel. Ya sea que estés buscando el lugar perfecto para un partido amistoso o quieras gestionar tus canchas de manera eficiente, estamos aquí para ti. Descubre cómo nuestras características únicas pueden mejorar tu experiencia deportiva. </p>
						</div>

					</Col>
				</Row>

				<Row className="d-flex align-items-center">

					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon">📢</div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Social link para compartir con tus potenciales clientes</h4>
										<p>Comparte fácilmente información sobre tus reservas con tus amigos y potenciales compañeros de juego. Si sos dueño de canchas, el social link te permite compartir el calendario de disponibilidad de tus canchas para que los jugadores puedan reservar mas fácilmente</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon">💳</div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Reserva en línea segura y flexible.</h4>
										<p>Realiza tus reservas en línea de manera segura y, si lo prefieres, paga en persona al llegar a la cancha.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon">🛠️</div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Plataforma intuitiva para dueños de canchas.</h4>
										<p>Si eres dueño de una cancha, disfruta de una herramienta sencilla para administrar tus turnos, establecer precios y más.</p>
									</div>

								</div>
							</li>

						</ul>
					</Col>

					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block">
						<div className="features-thumb text-center">
							<img src="/images/features/awesome-features.png" alt="" />
						</div>
					</Col>

					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon">📊</div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Visibilidad en tiempo real de la disponibilidad de canchas según tus preferencias.</h4>
										<p>Conoce al instante la disponibilidad de las canchas según tus preferencias y configura turnos esporádicos o fijos.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

										{/* <!-- Box icon --> */}
										<div className="box-icon">
											<div className="icon">🔍</div>
										</div>

										{/* <!-- Box Text --> */}
										<div className="box-text align-self-center align-self-md-start">
											<h4>Búsqueda personalizada.</h4>
											<p>Encuentra la cancha perfecta según tu provincia, deporte y horario preferido.</p>
										</div>

									</div>


								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon">📬</div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Notificaciones via e-mail</h4>
										<p>Mantente al tanto de tus reservas y actualizaciones importantes a través de notificaciones directas en tu correo electrónico.</p>
									</div>

								</div>
							</li>

						</ul>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Features;