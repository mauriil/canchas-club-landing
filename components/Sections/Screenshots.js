import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import ScreenShotCarrousel from '../Carrousel';

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
                        <ScreenShotCarrousel />

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Screenshots;