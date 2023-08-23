import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogContainer = (props) => {
	return (
		<section className="blog">

			{/* <!-- Container --> */}
			<Container>			
				<Row>
				
					{props.children}

				</Row>
			</Container>
		</section>
	);
}

export default BlogContainer;