import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkerInfo = (props) => {
    return (
        <section id="worker" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				<Row>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 res-margin">
						<img src="/images/team/worker-single.jpg" alt="" />
					</Col>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-7">
						
						<div className="empty-30"></div>
						
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Isabella Dowson</h3>
							<p>Creative Director</p>
						</div>
						
						<p>
							Vestibulum convallis eros quis sapien rhoncus ultricies. 
							Vivamus vel tempor arcu. Suspendisse potenti. 
							Mauris auctor libero in malesuada luctus. 
							Mauris sit amet libero eleifend, dignissim ante eu, maximus lacus.
						</p>
						
						<div className="author-social">
							<div className="social">
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-linkedin-in"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-pinterest-p"></i></a>								
							</div>
						</div>
						
						<ul className="member-info">
							<li>
								<strong>Phone:</strong> +123 4567890
							</li>
							<li>
								<strong>Email:</strong> <a href="mailto:i.downson@sitename.com">i.downson@sitename.com</a>
							</li>
							<li>
								<strong>Website:</strong> <a href="https://www.sitename.com/" target="_blank">https://www.sitename.com/</a>
							</li>
							<li>
								<strong>Experience:</strong> 7 Years
							</li>
						</ul>
						
					</Col>
					
				</Row>

				<div className="empty-100"></div>
		
				<Row>
					
					{/* <!-- About --> */}
					<Col className="col-12 col-lg-6 res-margin">
						
						<h4 className="mb-3">About Member</h4>
						
						<p>
							Pellentesque vel elit egestas, pretium est ac, convallis orci. 
							Vivamus sem nisl, tristique vel fringilla vitae, efficitur at eros. 
							Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis gravida pulvinar. 
							Phasellus vel eros porta, blandit dui ac, viverra felis. 
						</p>
						
					</Col>
					
					{/* <!-- Skills --> */}
					<Col className="col-12 col-lg-6">
						
						<div className="skills">

							{/* <!-- Bar 1 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">Web Design</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{width:'89%'}}></div>
								</div>
							</div>

							{/* <!-- Bar 2 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">Mobile App Development</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{width:'95%'}}></div>
								</div>
							</div>

							{/* <!-- Bar 3 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">UI/UX Design</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{width:'80%'}}></div>
								</div>
							</div>

						</div>
						
					</Col>
						
				</Row>		
				
			</Container>
			
		</section>
    );
}

export default WorkerInfo;