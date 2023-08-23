import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Frequently Asked Questions</h3>
							<p>Cras fringilla, lectus sed ullamcorper fringilla. Massa ex accumsan odio, quis iaculis justo magna quis tortor.</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
									Can I see Naxos in action before purchasing it? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. 
										Mauris eu egestas ipsum. In hac habitasse platea dictumst. 
										Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, 
										felis sem porta orci, sed pretium nibh nunc a tellus.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									I've got older Mac. Is Naxos compatible with it? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. 
										Mauris eu egestas ipsum. In hac habitasse platea dictumst. 
										Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, 
										felis sem porta orci, sed pretium nibh nunc a tellus.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									What are the requirements for using Naxos?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. 
										Mauris eu egestas ipsum. In hac habitasse platea dictumst. 
										Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, 
										felis sem porta orci, sed pretium nibh nunc a tellus.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									How does Naxos handle my privacy? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. 
										Mauris eu egestas ipsum. In hac habitasse platea dictumst. 
										Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, 
										felis sem porta orci, sed pretium nibh nunc a tellus.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
									What is Naxos privacy policy?  			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. 
										Mauris eu egestas ipsum. In hac habitasse platea dictumst. 
										Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, 
										felis sem porta orci, sed pretium nibh nunc a tellus.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">Still have a question? <a href="#contact"><strong>Ask your question here</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;