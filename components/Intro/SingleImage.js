import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';

const SingleImage = () => {
    return (
        <section id="home" className="banner image-bg">
			
            <BackgroundSlider
                duration={100000}
                transition={0.75}
                className="image-bg"
                images={['/images/banner/single-image.jpg']}
            />

			{/* <!-- Container --> */}
			<Container>
				
				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">

						{/* <!-- Banner text --> */}
						<div className="banner-text">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Showcase your<br />App in one place
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								Duis facilisis sem sed metus malesuada rhoncus. 
								Nulla tincidunt tincidunt lectus at lacinia. 
								Pellentesque ullamcorper arcu id rutrum volutpat. 
								Donec suscipit auctor enim vel dignissim.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
									<i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p>
								</a>
								
								<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0">
									<i className="fab fa-apple"></i><p>Download on<span>App Store</span></p>
								</a>
							
							</div>

						</div>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-6">
				
						<div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							<img className="bounce-effect" src="images/banner/single-welcome.png" alt="" />
						</div>

					</Col>
					
				</Row>
				
			</Container>
			
			{/* <!-- Wave effect --> */}
			<div className="wave-effect wave-anim">
				
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
				
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
				
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
				
            </div>
			
		</section>
    );
}

export default SingleImage;