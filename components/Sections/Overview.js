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
							<h3>Track Time From Anywhere</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Easy to Use</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Monitor &amp; Manage</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Stay Connected</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
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
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Built For Your Daily Schedule</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> Ut fringilla est at nunc suscipit dictum. Nulla facilisi. Phasellus dignissim nibh eget imperdiet venenatis.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Nullam egestas tincidunt lectus, sagittis eros vestibulum in. Vestibulum finibus iaculis sagittis. Suspendisse viverra luctus.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Suspendisse at volutpat magna, vitae mattis metus. Integer posuere eu erat at pharetra. Aliquam ut pharetra diam.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Donec luctus, sem vel molestie efficitur, metus libero mollis neque, sed scelerisque arcu nisl eu lectus.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Fusce neque magna, fringilla ac vulputate at, venenatis a eros. Donec accumsan commodo tortor sed fringilla.</p>
							</li>

						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Learn More</a>
						</p>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/overview/daily-schedule.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Overview;