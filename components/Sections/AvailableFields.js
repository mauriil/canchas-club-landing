import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';

const AvailableFields = (props) => {
    const [state, handleSubmit] = useForm("FORMSPREE_FORM_ID");
    const frm = useRef(null);
    const result = useRef(null);

    if (state.succeeded) {
        frm.current.style.display = "none";
        result.current.style.display = "block";
    }

    return (
        <section id="available-fields" className={props.className}>

            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">

                        <div className="section-title text-center">
                            <h3><img src='/images/banner/CanchasClub_Iconografia-PERSONALIZADA.svg' width={'60px'} ></img> ¡Encuentra tu cancha ideal ahora!</h3>
                        </div>

                    </div>
                </Row>

                <Row>

                   // Servicio de buscqueda en construccion {/* <!-- Service 1 --> */}

                </Row>

            </Container>

        </section>
    );
}

export default AvailableFields;