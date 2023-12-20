import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = (props) => {
	const [openPolicyOpen, setOpenPolicyOpen] = useState(false);
	const handleClosePolicyModal = () => {
		setOpenPolicyOpen(false);
	};

	const [openTermsOpen, setOpenTermsOpen] = useState(false);
	const handleCloseTermsModal = () => {
		setOpenTermsOpen(false);
	}

	return (
		<footer>

			{/* <!-- Widgets --> */}
			<div className="footer-widgets">
				<Container>

					<Row>

						{/* <!-- Footer logo --> */}
						<Col className="col-12 col-md-6 col-lg-3 res-margin">
							<div className="widget">
								<p className="footer-logo" style={
									{
										width: '100%',
										textAlign: 'center',
									}
								}>
									<img src="/images/CanchasClub_Logo_FondoTransparente-menu.png" alt="CanchasClub" data-rjs="2" />
								</p>
								<p>
									Con Canchas Club, reservar una cancha es más sencillo que nunca. Conéctate con tus deportes favoritos y descubre las mejores canchas en Argentina. Únete a nosotros para una experiencia deportiva excepcional.
								</p>

								{/* <!-- Social links --> */}
								<div className="footer-social">
									<a href="#" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
									<a href="#" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
									<a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
								</div>
							</div>
						</Col>

						{/* <!-- Useful links --> */}
						<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
							<div className="widget">

								<h6>Links útiles</h6>

								<ul className="footer-menu">
									<li onClick={() => setOpenPolicyOpen(true)}><Typography sx={{ cursor: 'pointer', fontWeight: 'bold' }}> Política de privacidad </Typography></li>
									<li onClick={() => setOpenTermsOpen(true)}><Typography sx={{ cursor: 'pointer', fontWeight: 'bold' }}> Terminos &amp; Condiciones </Typography></li>
									{/* <li><a href="#">Affiliate Program</a></li>
										<li><a href="#">Careers</a></li> */}
								</ul>

							</div>
						</Col>

						{/* <!-- Product help --> */}
						<Col className="col-12 col-md-6 col-lg-3 res-margin">
							<div className="widget">

								<h6>Ayuda de producto</h6>

								<ul className="footer-menu">
									<li><a href="#support">FAQ</a></li>
									{/* <li><a href="#">Reviews</a></li>
										<li><a href="#">Features</a></li>
										<li><a href="#">Feedback</a></li>
										<li><a href="#">API</a></li> */}
								</ul>

							</div>
						</Col>

						{/* <!-- Download --> */}
						{/* <Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
									<h6>Download</h6>
									
									<div className="button-store">
										<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
										<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
									</div>
									
								</div>
							</Col> */}

					</Row>

				</Container>
			</div>

			<Dialog open={openPolicyOpen} onClose={handleClosePolicyModal}>
				<DialogTitle>Nuestra Política de Privacidad</DialogTitle>
				<>
					<DialogContent>
						<Typography variant="body2" color="text.secondary" paragraph>
							<h2>1. Información que Recopilamos</h2>
							Canchas Club recopila la siguiente información:
							<ul>
								<li>Información personal proporcionada por los usuarios al registrarse, como nombres, direcciones de correo electrónico y números de teléfono.</li>
								<li>Datos de sesión y cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.</li>
							</ul>
							<br />

							<h2>2. Uso de la Información</h2>
							Utilizamos la información recopilada para:
							<ul>
								<li>Procesar transacciones y proporcionar los servicios solicitados.</li>
								<li>Enviar comunicaciones relacionadas con la cuenta y notificaciones importantes.</li>
								<li>Personalizar la experiencia del usuario y mejorar nuestros servicios.</li>
								<li>Analizar patrones de uso y mejorar la eficiencia del sitio.</li>
							</ul>
							<br />

							<h2>3. Divulgación de la Información</h2>
							No compartimos información personal con terceros, excepto cuando sea necesario para proporcionar servicios solicitados o cumplir con requisitos legales.
							<br /><br />

							<h2>4. Seguridad</h2>
							Implementamos medidas de seguridad para proteger la información del usuario, pero no podemos garantizar la seguridad absoluta. Los usuarios son responsables de mantener la confidencialidad de sus credenciales de cuenta.
							<br /><br />

							<h2>5. Cookies y Tecnologías Similares</h2>
							Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario. Los usuarios pueden ajustar la configuración del navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
							<br /><br />

							<h2>6. Enlaces a Terceros</h2>
							Nuestro sitio puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios y recomendamos revisar sus políticas.
							<br /><br />

							<h2>7. Cambios en la Política de Privacidad</h2>
							Nos reservamos el derecho de realizar cambios en esta política en cualquier momento. Los cambios se harán efectivos al publicar la versión actualizada en el sitio.
							<br /><br />

							<h2>8. Contacto</h2>
							Para preguntas o inquietudes sobre esta política, comunícate con nosotros a <a href="mailto:informacion@canchas.club">informacion@canchas.club</a>.
							<br /><br />

							Al utilizar nuestro sitio, aceptas los términos de esta política de privacidad.
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClosePolicyModal} color="primary">
							Aceptar
						</Button>
					</DialogActions>
				</>
			</Dialog>


			<Dialog open={openTermsOpen} onClose={handleCloseTermsModal}>
				<DialogTitle> Términos y Condiciones </DialogTitle>
				<>
					<DialogContent>
						<Typography variant="body2" color="text.secondary" paragraph>
							<h2>1. Aceptación de los Términos y Condiciones</h2>

							<p>Al acceder y utilizar el sitio web https://canchas.club (en adelante, "el sitio"), aceptas cumplir con estos términos y condiciones y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con estos términos, por favor, no utilices el sitio.</p>

							<h2>2. Uso del Sitio</h2>

							<p>Estás autorizado a utilizar el sitio con fines legítimos y de acuerdo con estos términos. No debes utilizar el sitio de manera que cause daño, interrupción o perjuicio al sitio o a terceros. El uso del sitio está sujeto a todas las leyes y regulaciones locales, estatales, nacionales e internacionales aplicables.</p>

							<h2>3. Contenido del Usuario</h2>

							<p>Al enviar contenido al sitio, como comentarios, reseñas o cualquier otra forma de contribución de usuario, garantizas que tienes el derecho de hacerlo y que el contenido no infringe derechos de terceros. Canchas Club se reserva el derecho de eliminar o modificar cualquier contenido a su discreción. Al enviar contenido al sitio, otorgas a Canchas Club una licencia no exclusiva, transferible, sublicenciable, libre de regalías y mundial para usar, reproducir, modificar, adaptar, publicar, distribuir y mostrar dicho contenido.</p>

							<h2>4. Propiedad Intelectual</h2>

							<p>El contenido del sitio, incluidos textos, gráficos, logotipos, imágenes y software, está protegido por leyes de propiedad intelectual. No se permite el uso no autorizado de este contenido. Canchas Club retiene todos los derechos sobre el contenido del sitio, y ninguna parte de este documento debe interpretarse como una transferencia de dichos derechos.</p>

							<h2>5. Limitación de Responsabilidad</h2>

							<p>El sitio se proporciona "tal cual" y "según disponibilidad". Canchas Club no garantiza la precisión, integridad o actualidad del contenido del sitio. El uso del sitio es bajo tu propio riesgo. Canchas Club no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos derivados del uso del sitio o la imposibilidad de usarlo.</p>

							<h2>6. Enlaces a Terceros</h2>

							<p>El sitio puede contener enlaces a sitios de terceros. Canchas Club no respalda ni es responsable del contenido de estos sitios. El acceso y uso de sitios web de terceros están sujetos a los términos y condiciones de esos sitios.</p>

							<h2>7. Cambios en los Términos y Condiciones</h2>

							<p>Canchas Club se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos al publicar la versión actualizada en el sitio. Se recomienda revisar periódicamente los términos y condiciones.</p>

							<h2>8. Contacto</h2>

							<p>Para preguntas o inquietudes sobre estos términos, comunícate con nosotros a informacion@canchas.club.</p>

							<h2>9. Ley Aplicable</h2>

							<p>Estos términos y condiciones se rigen por las leyes de Argentina y cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de [ciudad, país].</p>

							<br />
							Al utilizar nuestro sitio, aceptas los términos y condiciones establecidos anteriormente.
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseTermsModal} color="primary">
							Aceptar
						</Button>
					</DialogActions>
				</>
			</Dialog>




			{/* <!-- Copyright --> */}
			<div className="footer-copyright">
				<Container>

					<Row>
						<Col className="col-12">

							{/* <!-- Text --> */}
							<p className="copyright text-center">
								Copyright © 2023 <a href="#" >CanchasClub</a>. All Rights Reserved.
							</p>

						</Col>
					</Row>

				</Container>
			</div>

		</footer>
	);

}

export default Footer;