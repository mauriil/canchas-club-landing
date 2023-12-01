import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = (props) => {

    const handleBuySuscription = () => {
        window.open('https://app.canchas.club', '_blank');
    }
    return (
        <section id="pricing" className={props.className}>

            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">

                        <div className="section-title text-center">
                            <h3>Descubre Nuestro Plan para Dueños de Canchas</h3>
                            <p>Maximiza la visibilidad de tu cancha y atrae a más jugadores con nuestro plan exclusivo para dueños. Encuentra la solución perfecta que se adapte a las necesidades de tu club.</p>
                        </div>

                    </Col>
                </Row>

                <Row className="row align-items-center pricing-plans">

                    {/* <!-- Plan 1 --> */}
                    {/* <Col className="col-12 col-lg-4 res-margin">

                        <div className="price-table">

                            <div className="icon"><img src='/images/pricing/CanchasClub_Iconografia-ESSENTIAL.svg' width={'100px'}></img> </div>
                            <h3 className="plan-type">CanchaEssentials</h3>
                            <h2 className="plan-price">$19/month</h2>

                            <ul className="list-unstyled plan-list">
                                <li>Administra hasta 3 canchas</li>
                                <li>Configuración de horarios y disponibilidad</li>
                                <li>Visibilidad básica en la plataforma</li>
                                <li>Soporte por correo electrónico</li>
                            </ul>

                        </div>

                    </Col> */}

                    {/* <!-- Plan 2 --> */}
                    <Col className="col-12 col-lg-8 res-margin mx-auto text-center">

                        <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">

                            <div className="icon">
                                <img src='/images/pricing/CanchasClub_Iconografia-PROGRESIV.svg' width={'100px'} alt="Icono de CanchaProgresivo" />
                            </div>
                            <h3 className="plan-type">Suscripción Premium a Canchas Club</h3>
                            <h2 className="plan-price">$15.000 (ARS)</h2>

                            <div className="features-list">
                                <h4>Características Destacadas:</h4>

                                <ul className="list-unstyled plan-list">
                                    <li>
                                        <strong>Administra un Número Ilimitado de Canchas:</strong>
                                        <ul className="list-unstyled plan-list">
                                            <li>Gestiona todas tus canchas desde una única plataforma de manera eficiente.</li>
                                            <li>Añade, edita y actualiza la información de tus instalaciones con facilidad.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <strong>Plataforma Avanzada de Gestión y Promoción:</strong>
                                        <ul className="list-unstyled plan-list">
                                            <li>Utiliza herramientas avanzadas para promocionar tus canchas y llegar a un público más amplio.</li>
                                            <li>Optimiza tus horarios y maximiza la ocupación con nuestras funciones inteligentes.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <strong>Visibilidad Premium y Destacada en la Plataforma:</strong>
                                        <ul className="list-unstyled plan-list">
                                            <li>Aumenta tu visibilidad frente a posibles clientes.</li>
                                            <li>Destaca entre la competencia con una presencia premium en la plataforma.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <strong>Asistencia Personalizada y Orientación Estratégica:</strong>
                                        <ul className="list-unstyled plan-list">
                                            <li>Recibe asesoramiento personalizado para impulsar tu negocio.</li>
                                            <li>Accede a orientación estratégica para mejorar tus operaciones y atraer a más clientes.</li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>

                            <div className="card-ribbon">
                                <span>Pago único</span>
                            </div>


                            <button type="submit" id="contact-submit" name="send" className="btn" onClick={handleBuySuscription} >Comenzar</button>

                        </div>
                    </Col>


                    {/* <!-- Plan 3 --> */}
                    {/* <Col className="col-12 col-lg-4">

                        <div className="price-table">

                        <div className="icon"><img src='/images/pricing/CanchasClub_Iconografia-AVANZADO.svg' width={'100px'}></img> </div>
                            <h3 className="plan-type">CanchaAvanzado</h3>
                            <h2 className="plan-price">$39/month</h2>

                            <ul className="list-unstyled plan-list">
                                <li>Administra un número ilimitado de canchas</li>
                                <li>Plataforma avanzada de gestión y promoción</li>
                                <li>Visibilidad premium y destacada en la plataforma</li>
                                <li>Asistencia personalizada y orientación estratégica</li>
                            </ul>

                        </div>

                    </Col> */}

                </Row>

                {/* <!-- Mobile phone --> */}
                <Row>

                    <Col className="col-12 col-lg-8 offset-lg-2 mobile-phone wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.9s">
                        <img src="/images/mockups/CanchasClub_Mockup4_Acostado.png" alt="" />
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Pricing;