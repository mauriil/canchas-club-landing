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
                            <h3>Dejános tu consulta</h3>
                            <p>Estamos aquí para responder a todas tus preguntas y brindarte el apoyo que necesitas. Si tienes alguna consulta, comentario o simplemente quieres compartir tus ideas sobre cómo mejorar nuestra plataforma, no dudes en contactarnos. ¡Estamos ansiosos por escucharte!</p>
                        </div>

                    </div>
                </Row>

                <Row>

                    {/* <!-- Contact info --> */}
                    <Col className="contact-info col-12 col-lg-4 res-margin">

                        <h5>
                            <span className="icon icon-basic-clock"></span>
                            Nuestros horarios
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
                                        <input type="text" name="name" className="form-control field-name" placeholder="Nombre" />
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
                                        <input type="text" name="subject" className="form-control field-subject" placeholder="Motivo" />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea name="message" rows="4" className="form-control field-message" placeholder="Mensaje"></textarea>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button type="submit" id="contact-submit" name="send" className="btn" disabled={state.submitting}>Enviar</button>
                                </Col>
                            </Row>

                        </form>

                        {/* <!-- Submit Results --> */}
                        <div className="contact-form-result" ref={result}>
                            <h4>¡Gracias por el correo electrónico!</h4>
                            <p>¡Tu mensaje ya ha llegado! Nos pondremos en contacto contigo en breve.</p>
                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Contact;