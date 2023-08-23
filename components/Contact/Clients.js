import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>            

                <Row>

                    <Swiper
                        className="clients-slider clients-slider-dots"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{ 
                            clickable: true 
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
                        modules={[Autoplay, Pagination]}
                    >

                        {/* <!-- Client 1 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-1.png" alt="Client 1" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-2.png" alt="Client 2" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-3.png" alt="Client 3" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-4.png" alt="Client 4" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 5 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-5.png" alt="Client 5" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 6 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-6.png" alt="Client 6" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 7 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-7.png" alt="Client 7" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 8 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-8.png" alt="Client 8" />
                            </a>
                        </SwiperSlide>

                    </Swiper>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Clients;