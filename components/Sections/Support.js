import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Soporte de Canchas Club</h3>
							<p>¿Tienes alguna pregunta o necesitas ayuda?</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
								¿Qué datos necesito para registrarme?		        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Solo necesitas proporcionar tu correo electrónico y datos de contacto básicos.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
								¿Cómo reservar un turno?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Ingresá tu ubicación, el deporte y la fecha deseada para verificar la disponibilidad. Elegí una cancha y un horario, y proporcioná un método de pago online seguro. La reserva es instantánea y podés revisar el estado de la misma dentro de la App.
									Tenemos una herramienta de búsqueda que te permite encontrar la cancha ideal <a href="#available-fields">haciendo click aqui</a>.	
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
								¿Cómo cancelar un turno?		        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Si sos nuevo, tu cuenta se crea con tu correo electrónico. Si ya sos usuario, inicia sesión con tu cuenta en nuestra <a href="https://app.canchas.club" target='_blank'><strong>plataforma web</strong></a>, ve a la pestaña "Mis Reservas" y administra tus reservas.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
								¿Qué sucede si no encuentro la cancha que necesito en la plataforma? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Si no encontrás la cancha que buscás, contáctanos y haremos nuestro mejor esfuerzo para ayudarte a encontrar una opción adecuada.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
								¿Cómo puedo contactar al soporte en caso de problemas? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Puedes comunicarte con nuestro equipo de soporte enviando un correo electrónico a informacion@canchas.club. Vamos a intentar atender tu consulta lo antes posible.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				{/* <Row>					
					<Col className="col-12">
						<p className="text-center mb-0">¿No resolvimos tu duda? ¡Contáctanos en cualquier momento, estamos aquí para ayudarte!  <a href="#contact"><strong>Envianos tu consulta</strong></a></p>
					</Col>
				</Row> */}
				
			</Container>
			
		</section>
    );
}

export default Support;