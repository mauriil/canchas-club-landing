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
							<h3>How It Works?</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo justo. Nullam dictum felis eu pede mollis pretium.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-server2"></div>
							
							<h5>Your Data in Cloud</h5>
							<p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
							
						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-headset"></div>
							
							<h5>24/7 Support</h5>
							<p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
						
						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-software-pen"></div>
							
							<h5>Exclusive Design</h5>
							<p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
						
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Services;