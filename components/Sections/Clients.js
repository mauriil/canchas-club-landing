import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>            

                <Row>

                    <Swiper
                        className="clients-slider"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 3
                            },
                            1024: {
                                spaceBetween: 40,
                                slidesPerView: 5
                            }
                        }}
                        modules={[Autoplay]}
                    >

                        {/* <!-- Client 1 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/banner/futbol5.png" alt="futbol5" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/futbol12.png" alt="futbol12" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/basquet.png" alt="basquet" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/handball.png" alt="handball" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 5 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/voley.png" alt="voley" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 6 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/rugby.png" alt="rugby" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 7 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/tenis.png" alt="tenis" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 8 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                            <img src="/images/banner/hockey.png" alt="hockey" />
                            </a>
                        </SwiperSlide>

                    </Swiper>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Clients;