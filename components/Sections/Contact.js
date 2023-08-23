import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';

const Contact = (props) => {
    const [state, handleSubmit] = useForm("FORMSPREE_FORM_ID");
    const frm = useRef(null);
    const result = useRef(null);

    if (state.succeeded) {
        frm.current.style.display = "none";
        result.current.style.display = "block";
    }

    return (
        <section id="contact" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<div className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Get In Touch</h3>
							<p>Nullam hendrerit massa quis dui egestas, id scelerisque felis rutrum. Etiam sem nibh, auctor sed, pharetra congue.</p>
                        </div>
						
					</div>
				</Row>

				<Row>
					
					{/* <!-- Contact info --> */}
					<Col className="contact-info col-12 col-lg-4 res-margin">
						
                        <h5>
                            <span className="icon icon-basic-geolocalize-05"></span> 
                            Office Location
                        </h5>
                        <p>
                            132 Dartmouth Street<br />
                            Boston, Massachusetts 02156<br />
                            United States
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-smartphone"></span> 
                            Phone Number
                        </h5>
                        <p><a href="tel:16175723012">+1 617 572 3012</a></p>
                        
                        <h5>
                            <span className="icon icon-basic-mail"></span> 
                            Email Address
                        </h5>
                        <p>
                            <a href="mailto:email@sitename.com">email@sitename.com</a>
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span> 
                            Working Hours
                        </h5>
                        <p>
                            09:00AM to 06:00PM
                        </p>
                        
					</Col>
					
					{/* <!-- Contact form --> */}
					<Col className="col-12 col-lg-8">
						
                        <form id="contact-form" onSubmit={handleSubmit} ref={frm}>                             
                            
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="name" className="form-control field-name" placeholder="Name" />
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="email" name="email" className="form-control field-email" placeholder="Email" />
                                    </div>
                                </Col>                                
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="subject" className="form-control field-subject" placeholder="Subject" />
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea name="message" rows="4" className="form-control field-message" placeholder="Message"></textarea>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button type="submit" id="contact-submit" name="send" className="btn" disabled={state.submitting}>Send Message</button>
                                </Col>
                            </Row>
                            
                        </form>
                        
                        {/* <!-- Submit Results --> */}
                        <div className="contact-form-result" ref={result}>
                            <h4>Thank you for the e-mail!</h4>
                            <p>Your message has already arrived! We'll contact you shortly.</p>
                        </div>
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Contact;