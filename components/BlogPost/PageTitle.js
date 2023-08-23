import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageTitle = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    return (
        <section className="page-title valign parallax" data-image="/images/parallax/blog-post.jpg" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>	
				<Row>
					<Col className="col-12 text-center">
						
						{/* <!-- Category --> */}
						<div className="blog-category">
							<a href="/blog">Photography</a>
						</div>
						
						{/* <!-- Title --> */}
						<h1 className="blog-title">Assorted Color Buildings and Sea in Riomaggiore</h1>
						
						{/* <!-- Date --> */}
						<div className="blog-date">
							 January 14, 2023
						</div>

					</Col>
				</Row>
			</Container>
			
		</section>
    );
};

export default PageTitle;
