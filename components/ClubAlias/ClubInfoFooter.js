import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ClubInfoFooter = (props) => {
	return (
		<section id="worker" >

			{/* <!-- Container --> */}
			<Container>
				<div className="empty-100"></div>
				<Row>

					{/* <!-- About --> */}
					<Col className="col-12 col-lg-6 res-margin">

						<h4 className="mb-3">{props.clubData.name}</h4>

						<p>
							{props.clubData.description}
						</p>

					</Col>

					{/* <!-- Skills --> */}
					<Col className="col-12 col-lg-6">

						<div className="skills">

							{/* <!-- Bar 1 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">Web Design</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{ width: '89%' }}></div>
								</div>
							</div>

							{/* <!-- Bar 2 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">Mobile App Development</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{ width: '95%' }}></div>
								</div>
							</div>

							{/* <!-- Bar 3 --> */}
							<div className="bar">
								<div className="progress-heading">
									<p className="progress-title">UI/UX Design</p>
									<div className="progress-value"></div>
								</div>
								<div className="progress">
									<div className="progress-bar" style={{ width: '80%' }}></div>
								</div>
							</div>

						</div>

					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default ClubInfoFooter;