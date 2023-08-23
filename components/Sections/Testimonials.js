import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialSlider = {
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	rtl: false,
};

const testimonialNav = {
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	arrows: false,
  	centerMode: true,
  	focusOnSelect: true,
  	variableWidth: false,
  	rtl: false,
  	responsive: [
		{
      		breakpoint: 991,
      		settings: {
        		slidesToShow: 3,
        		arrows: false,
      		},
    	},
    	{
      		breakpoint: 480,
      			settings: {
        		slidesToShow: 1,
        		arrows: false,
      		},
    	}
	]
};

const Testimonial = (props) => {
    const testimonialNavRef = useRef(null);
    const testimonialSliderRef = useRef(null);

    const [state, setState] = useState({
        nav1: testimonialNavRef.current,
        nav2: testimonialSliderRef.current,
    });

    const { nav1, nav2 } = state;

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {
            setState({
                nav1: testimonialNavRef.current,
                nav2: testimonialSliderRef.current,
            });
        }

        return () => (unmounted = true);
        }, [testimonialSliderRef, testimonialNavRef]
    );

    return (
        <section id="testimonials" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="row justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Client Reviews</h3>
							<p>Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.</p>
						</div>
						
					</Col>
				</Row>
				
				<Row className="row">
					<Col className="col-12 testimonial-carousel">
						
						{/* <!-- Text --> */}
						<div className="block-text row">

                            <Slider
                                ref={testimonialSliderRef}
                                className="carousel-text testimonial-slider col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav1}
                                {...testimonialSlider}
                            >	

								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce iaculis cursus ante, vel vestibulum dui sagittis vitae pulvinar consequat tortor. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                                <div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus sed augue auctor purus vitae, venenatis ex. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla laoreet tortor in auctor interdum. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Vestibulum lectus massa, volutpat ut tristique nec, volutpat in turpis. In vehicula tempus odio. Nullam enim ligula condimentum est sed urna tristique rhoncus. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet volutpat sem fringilla ut. Proin viverra scelerisque mollis iaculis id magna ut vestibulum. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>	
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Cras et est eu tellus fringilla congue. Nunc efficitur libero ut nunc volutpat porttitor. Aliquam in justo at neque ac massa ultricies, lobortis sem. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Vivamus pellentesque dignissim neque, quis viverra diam venenatis sit amet. Donec dignissim turpis quis libero posuere auctor finibus fermentum libero. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
                                
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Aenean varius accumsan eros, id molestie leo vestibulum a. Ut semper dictum feugiat. Integer tincidunt interdum eros ut accumsan erat lectus, ultrices. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Morbi viverra ultrices magna vel egestas. Suspendisse rutrum, lacus nec sodales gravida, augue ante sollicitudin sem fringilla euismod mauris ut metus nisl. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                            </Slider>

						</div>

						{/* <!-- Media --> */}
						<div className="block-media row">

                            <Slider
                                ref={testimonialNavRef}
                                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav2}
                                {...testimonialNav}
                            >
							
                            	<div>
									<img src="/images/testimonials/client-1.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Jane Aniston</h3>
										<span>From Globex</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-2.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Martin Jack</h3>
										<span>From Hooli</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-3.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>David Dowsy</h3>
										<span>From Acme</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-4.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Doglas Kosta</h3>
										<span>From Soylent</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-5.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Anthony Lee</h3>
										<span>From Initech</span>
									</div>
								</div>	
								
								<div>
									<img src="/images/testimonials/client-6.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Jonathon Doe</h3>
										<span>From Umbrella</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-7.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Xenia Mell</h3>
										<span>From Massive</span>
									</div>
								</div>

								<div>
									<img src="/images/testimonials/client-8.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Shane Catson</h3>
										<span>From Capital</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-9.jpg" alt="3" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Chris Wort</h3>
										<span>From Sylhost</span>
									</div>
								</div>
								
							</Slider>

						</div>

					</Col>
				</Row>
				
			</Container>
		
		</section>
    );
};

export default Testimonial;
