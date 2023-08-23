import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Awesome Features</h3>
							<p>Sed laoreet diam sagittis tempus convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
						</div>
						
					</Col>
				</Row>
			
				<Row className="d-flex align-items-center">
					
					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 				
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-gear"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Custom Shortcuts</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-lock"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Secure Integration</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-message-txt"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Free Live Chat</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block"> 
						<div className="features-thumb text-center">
							<img src="/images/features/awesome-features.png" alt="" />
						</div>
					</Col>
					
					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-share"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Social Share</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-sheet-multiple"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Merge Files</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-alarm"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Action Reminder</h4>
										<p>Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Features;