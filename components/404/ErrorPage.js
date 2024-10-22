import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = (props) => {
	return (
		<section id="error-page" className="d-flex align-items-center min-vh-100">

			<Container>

				{/* Message */}
				<Row>
					<Col className="col-12 text-center">

						{/* Title */}
						<div className="icon largest colored">
							<i className="fas fa-unlink"></i>
						</div>

						<div className="empty-30"></div>

						<h2>Lo sentimos</h2>

						{/* Primary text */}
						<p className="info">
							Al parecer la página que estás buscando no existe.
						</p>

						<p>
							<a href="/" className="btn btn-default btn-rounded">
								<i className="fas fa-chevron-left"></i> Ir a la página principal
							</a>
						</p>

					</Col>
				</Row>

			</Container>

		</section>
	);
}

export default ErrorPage;