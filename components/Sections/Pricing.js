import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <section id="pricing" className={props.className}>

            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">

                        <div className="section-title text-center">
                            <h3>Planes de Suscripción para Dueños de Canchas</h3>
                            <p>Maximiza la visibilidad de tu cancha y atrae a más jugadores con nuestros planes de suscripción. Elige el plan que mejor se adapte a las necesidades de tu club y comienza a administrar tus canchas de manera efectiva. Compara las características incluidas a continuación:</p>
                        </div>

                    </Col>
                </Row>

                <Row className="row align-items-center pricing-plans">

                    {/* <!-- Plan 1 --> */}
                    <Col className="col-12 col-lg-4 res-margin">

                        <div className="price-table">

                            <div className="icon icon-software-layers2"></div>
                            <h3 className="plan-type">Standard</h3>
                            <h2 className="plan-price">$19/month</h2>

                            <ul className="list-unstyled plan-list">
                                <li>Administra hasta 3 canchas</li>
                                <li>Configuración de horarios y disponibilidad</li>
                                <li>Visibilidad básica en la plataforma</li>
                                <li>Soporte por correo electrónico</li>
                            </ul>

                        </div>

                    </Col>

                    {/* <!-- Plan 2 --> */}
                    <Col className="col-12 col-lg-4 res-margin">

                        <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">

                            <div className="icon icon-basic-heart"></div>
                            <h3 className="plan-type">Professional</h3>
                            <h2 className="plan-price">$29/month</h2>

                            <ul className="list-unstyled plan-list">
                                <li>Administra de 4 a 9 canchas</li>
                                <li>Plataforma avanzada de gestión de turnos</li>
                                <li>Visibilidad mejorada en la plataforma</li>
                                <li>Soporte prioritario</li>
                            </ul>

                            <div className="card-ribbon">
                                <span>Popular</span>
                            </div>

                        </div>

                    </Col>

                    {/* <!-- Plan 3 --> */}
                    <Col className="col-12 col-lg-4">

                        <div className="price-table">

                            <div className="icon icon-weather-sun"></div>
                            <h3 className="plan-type">Business</h3>
                            <h2 className="plan-price">$39/month</h2>

                            <ul className="list-unstyled plan-list">
                                <li>Administra un número ilimitado de canchas</li>
                                <li>Plataforma avanzada de gestión y promoción</li>
                                <li>Visibilidad premium y destacada en la plataforma</li>
                                <li>Asistencia personalizada y orientación estratégica</li>
                            </ul>

                        </div>

                    </Col>

                </Row>

                {/* <!-- Mobile phone --> */}
                <Row>

                    <Col className="col-12 col-lg-8 offset-lg-2 mobile-phone wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.9s">
                        <img src="/images/mobile-phone.png" alt="" />
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Pricing;