import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Rating } from '@mui/material';

const ClubInfoFooter = (props) => {
	return (
		<section id="worker" >

			{/* <!-- Container --> */}
			<Container style={{
				paddingTop: '50px',
				paddingBottom: '50px',
				backgroundColor: '#f8f9fa',
				borderTop: '1px solid #e9ecef',
				borderBottom: '1px solid #4ebedd'

			}}>
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
							<div className="bar" style={{marginBottom: '15px'}}>
								<div className="progress-heading">
									<p className="progress-title">Dirección:</p>
									<div className="progress-value"></div>
								</div>
								<div onClick={
									() => {
										window.open(`https://www.google.com/maps/search/?api=1&query=${props.clubData.address}`, '_blank')
									}
								}
								style={{ cursor: 'pointer', color: '#4ebedd' }}
								>
									<i className="fas fa-map-marker-alt" style={{ marginRight: '10px'}}></i>
									{props.clubData.address}
								</div>
							</div>

							{/* <!-- Bar 2 --> */}
							<div className="bar" style={{marginBottom: '15px'}}>
								<div className="progress-heading">
									<p className="progress-title">Localidad:</p>
									<div className="progress-value"></div>
								</div>
								<div>
									{props.clubData.province}, {props.clubData.department}
								</div>
							</div>

							{/* <!-- Bar 3 --> */}
							<div className="bar" style={{marginBottom: '15px'}}>
								<div className="progress-heading">
									<p className="progress-title">Valoración:</p>
									<div className="progress-value"></div>
								</div>
								<div>
									<Rating
										readOnly
										name='club-rating'
										//value={props.clubData.rating}
										value={3.5}
										precision={0.5}
										icon={<i className="fas fa-star" style={{
											color: '#4ebedd',
											marginRight: '5px',
										}}></i>}
										emptyIcon={<i className="far fa-star" style={{
											color: '#4ebedd',
											marginRight: '5px'
										}}></i>}
										size='large'
									/>
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