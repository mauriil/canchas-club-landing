import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';

const SlideShow = () => {
    return (
        <section id="home" className="banner slide-bg bottom-curve">
			
            <BackgroundSlider
                duration={3}
                transition={0.75}
                className="image-bg"
                images={[
					'/images/banner/slideshow-1.jpg',
					'/images/banner/slideshow-2.jpg',
					'/images/banner/slideshow-3.jpg'
				]}
            />

			{/* <!-- Container --> */}
			<Container>
				
				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">

						{/* <!-- Banner text --> */}
						<div className="banner-text">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Get the new App for <br className="d-none d-xl-block" />iPhone &amp; Android
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								Mauris ut fermentum orci. 
								Pellentesque ultrices interdum ultrices. 
								Aliquam erat volutpat. 
								Mauris molestie aliquam hendrerit. 
								Integer cursus neque eget auctor finibus, at enim euismod.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="#" className="custom-btn auto-width d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
									<i className="fab fa-google-play"></i><p><span>Google Play</span></p>
								</a>
								
								<a href="#" className="custom-btn auto-width d-inline-flex align-items-center m-2 m-sm-0">
									<i className="fab fa-apple"></i><p><span>App Store</span></p>
								</a>
							
							</div>

						</div>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-md-5 col-lg-6">
				
						<div className="banner-image-center wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							<img src="/images/banner/slide-welcome.png" alt="" />
						</div>

					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default SlideShow;