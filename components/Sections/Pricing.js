import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <section id="pricing" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Pricing Plans</h3>
							<p>Morbi nec massa ac ligula pulvinar congue. Nunc ut sollicitudin nibh. Etiam sem nibh, auctor sed, pharetra congue.</p>
                        </div>
						
					</Col>
				</Row>

				<Row className="row align-items-center pricing-plans">
					
					{/* <!-- Plan 1 --> */}
					<Col className="col-12 col-lg-4 res-margin">
						
                        <div className="price-table">
                            
                            <div className="icon icon-software-layers2"></div>
                            <h3 className="plan-type">Standard</h3>
                            <h2 className="plan-price">$19/month</h2>
                            
                            <ul className="list-unstyled plan-list">
                                <li>50 GB Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>5 MySQL Database</li>
                                <li>3 FTP Users</li>
                                <li>Free Domain</li>
                            </ul>
                            
                            <a className="btn" href="#">Purchase</a>
                      
                        </div>
                        
					</Col>
					
					{/* <!-- Plan 2 --> */}
					<Col className="col-12 col-lg-4 res-margin">
						
                        <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
                    
                            <div className="icon icon-basic-heart"></div>
                            <h3 className="plan-type">Professional</h3>
                            <h2 className="plan-price">$29/month</h2>
                            
                            <ul className="list-unstyled plan-list">
                                <li>100 GB Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>Unlimited MySQL Database</li>
                                <li>15 FTP Users</li>
                                <li>Free Domain</li>
                            </ul>
                            
                            <a className="btn" href="#">Purchase</a>
                            
                            <div className="card-ribbon">
                                <span>Popular</span>
                            </div>
                    
                        </div>                       
                        
					</Col>	
					
					{/* <!-- Plan 3 --> */}
					<Col className="col-12 col-lg-4">
						
                        <div className="price-table">
                        
                            <div className="icon icon-weather-sun"></div>
                            <h3 className="plan-type">Business</h3>
                            <h2 className="plan-price">$39/month</h2>
                            
                            <ul className="list-unstyled plan-list">
                                <li>Unlimited Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>Unlimited MySQL Database</li>
                                <li>Unlimited FTP Users</li>
                                <li>Unlimited Domains</li>
                            </ul>
                        
                            <a className="btn" href="#">Purchase</a>
                        
                        </div>                        
                        
					</Col>
					
				</Row>
                
                {/* <!-- Mobile phone --> */}
                <Row>
					
					<Col className="col-12 col-lg-8 offset-lg-2 mobile-phone wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.9s">
						<img src="/images/mobile-phone.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Pricing;