import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SRLWrapper } from 'simple-react-lightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Screenshots = (props) => {
    return (
        <section id="screenshots" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>App Screenshots</h3>
							<p>Morbi velit leo, sodales in purus eu, pretium accumsan nunc. Praesent eu diam ut ante consequat euismod.</p>
						</div>
						
					</Col>
				</Row>         

                <Row>

                    <Col className="col-12">

                        {/* <!-- Carousel --> */}
                        <SRLWrapper>
                            <Swiper
                                className="screenshot-slider zoom-screenshot"
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 15,
                                        slidesPerView: 1
                                    },
                                    768: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        spaceBetween: 30,
                                        slidesPerView: 4
                                    }
                                }}
                                modules={[Autoplay, Pagination]}
                            >

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-1.jpg">
                                        <img src="/images/screenshots/screenshot-1.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-2.jpg">
                                        <img src="/images/screenshots/screenshot-2.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-3.jpg">
                                        <img src="/images/screenshots/screenshot-3.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-4.jpg">
                                        <img src="/images/screenshots/screenshot-4.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-5.jpg">
                                        <img src="/images/screenshots/screenshot-5.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-6.jpg">
                                        <img src="/images/screenshots/screenshot-6.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-7.jpg">
                                        <img src="/images/screenshots/screenshot-7.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/screenshot-8.jpg">
                                        <img src="/images/screenshots/screenshot-8.jpg" alt="" />
                                    </a>
                                </SwiperSlide>

                            </Swiper>
                        </SRLWrapper>

                    </Col>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Screenshots;