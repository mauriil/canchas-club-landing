import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageTitle = (props) => {
	const parallax = useRef(null);

	useEffect(() => {
		if (parallax.current) {
			parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
		}
	}, [parallax]);

	return (
		<section className="page-title valign parallax" data-image={`https://canchas-club.s3.amazonaws.com/${props.clubImage}`} ref={parallax}>

			{/* <!-- Overlay --> */}
			<div className="overlay"></div>

			{/* <!-- Container --> */}
			<Container>
				<Row>
					<Col className="col-12 text-center">

						{/* <!-- Title --> */}
						<h1 className="blog-title">{props.clubName}</h1>
					</Col>
				</Row>
			</Container>

		</section>
	);
};

export default PageTitle;
