import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');
		}

		new WOW.WOW().init();
	}

	render() {
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
										<li><a href="#contact">Soporte</a></li>
										<li><a href="#">Política de privacidad</a></li>
										<li><a href="#">Terminos &amp; Condiciones</a></li>
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

}