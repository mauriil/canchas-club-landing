import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				<Row>
					
					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className="service-single service-style-2">
							
							<div className="icon icon-basic-mail"></div>
							
							<h5>Email Address</h5>
							<p>Say something to start a live chat<br /><a href="mailto:email@sitename.com">email@sitename.com</a></p>
							
						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className="service-single service-style-2">
							
							<div className="icon icon-basic-geolocalize-05"></div>
							
							<h5>Office Location</h5>
							<p>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</p>
						
						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className="service-single service-style-2">
							
							<div className="icon icon-basic-headset"></div>
							
							<h5>24/7 Live Chat</h5>
							<p>We endeavour to answer all enquiries<br />within 24 hours on business days</p>
						
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Services;