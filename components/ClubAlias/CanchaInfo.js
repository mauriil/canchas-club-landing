import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { Watch } from 'react-loader-spinner';
import HalfHourTimeSelector from '../Sections/HalfHoursSelector';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CanchaInfo = (props) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [seeDispo, setSeeDispo] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [selectedStartTime, setSelectedStartTime] = useState('17:00');
	const [selectedEndTime, setSelectedEndTime] = useState('17:30');
	const [isBooking, setIsBooking] = useState(false);
	const [dateKey, setDateKey] = useState(null);
	const [halfHourError, setHalfHourError] = useState(false);

	const normalizeDate = (date) => {
		const [year, month, day] = date.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	const availableDates = props.canchaData.availability.map((availability) => {
		return { day: normalizeDate(availability.day), status: availability.status };
	});

	const handleDateClick = (date) => {
		setSelectedDate(date);
	};

	const handleCloseModal = () => {
		setHalfHourError(false);
		setOpenModal(false);
	};

	const handleStartTimeChange = (event) => {
		setSelectedStartTime(event);
		if (event > selectedEndTime) {
			setSelectedEndTime(event);
		}
	};

	const handleEndTimeChange = (event) => {
		setSelectedEndTime(event);
		if (event < selectedStartTime) {
			setSelectedStartTime(event);
		}
	};

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const handleReservation = () => {
		if (selectedStartTime === selectedEndTime) {
			setHalfHourError(true);
			return;
		}
		const startTime = new Date(`01/01/2007 ${selectedStartTime}`);
		const endTime = new Date(`01/01/2007 ${selectedEndTime}`);
		const difference = endTime - startTime;
		if (difference < 3600000) {
			setHalfHourError(true);
			return;
		}
		setIsBooking(true);
		const day = props.canchaData.availability.find((availability) => availability.key === dateKey)?.day;

		// const url = `http://localhost:3000/bookings/prebooking`;
		const url = `https://api.canchas.club/bookings/prebooking`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				time: {
					from: selectedStartTime,
					to: selectedEndTime,
					day: day,
				},
				fieldId: props.canchaData._id,
			}),
		}).then(async (response) => {
			const body = await response.json();
			if (response.status === 201) {
				window.location.href = `https://app.canchas.club/reserva/${body.bookingId}`;
			} else {
				alert('Error al reservar');
			}
		});

	};

	return (
		<section id="worker" className="cancha-info">

			{/* <!-- Container --> */}
			<Container>

				<Row>

					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 res-margin">
						<Slider {...sliderSettings}>
							{props.canchaData.photos.map((photo, index) => (
								<div>
									<img key={index} src={`https://canchas-club.s3.amazonaws.com/${photo}`}
										alt={photo}
										style={{ width: '100%', height: '400px', objectFit: 'cover', margin: '0 auto' }} />
								</div>

							))}
						</Slider>

					</Col>

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-7">

						<div className="empty-30"></div>

						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>{props.canchaData.name}</h3>
							<p>{props.canchaData.description}</p>
						</div>
						<div className="content-container">
							<button className="btn" onClick={() => setSeeDispo((value) => !value)}>{seeDispo ? 'Ocultar' : 'Ver disponibilidad'}</button>
							{seeDispo && (
								<div className="calendar-container">
									<div style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
										<div className="availability-indicator" style={{ backgroundColor: '#4ebedd', width: '8px', height: '8px', marginRight: '5px' }}></div>
										<span style={{ marginRight: '15px' }}>Disponible</span>
										<div className="availability-indicator" style={{ backgroundColor: '#cccccc', width: '8px', height: '8px', marginRight: '5px' }}></div>
										<span>No Disponible</span>
									</div>
									<Calendar
										value={selectedDate}
										tileDisabled={({ date }) => !availableDates.some((dateAvail) => dateAvail.day.toDateString() === date.toDateString())}
										onClickDay={handleDateClick}
										tileClassName={({ date }) => {
											return availableDates.some((dateAvail) => dateAvail.day.toDateString() === date.toDateString() && dateAvail.status === 'available') ?
												'available-day'
												: availableDates.some((dateAvail) => dateAvail.day.toDateString() === date.toDateString()) ?
													'unavailable-day'
													: '';
										}}
										tile
									/>
								</div>
							)}
							{selectedDate && seeDispo && (
								<div>
									<h4>Precios para el {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
									{props.canchaData.availability
										.filter((availability) => normalizeDate(availability.day).toDateString() === selectedDate.toDateString())
										.filter((availability) => availability.status === 'available' || availability.status === 'closed')
										.map((availability, index) => (
											<p key={index} onClick={() => {
												if (availability.status === 'available') {
													setOpenModal(true); setDateKey(availability.key)
												}
											}} className='available-hours'>
												{availability.from} - {availability.to} ({
													availability.status === 'available' ? `$${availability.price}` : 'Cerrado'
												})
											</p>
										))}
								</div>
							)}
						</div>

						<ul className="member-info">
							<li>
								<strong>Deporte:</strong> {props.canchaData.sport}
							</li>
							<li>
								<strong>Tipo de cancha:</strong> {props.canchaData.fieldType}
							</li>
							<li>
								<strong>Tipo de piso:</strong> {props.canchaData.floorType}
							</li>
							<li>
								<strong>Iluminación:</strong> {props.canchaData.illumination ? 'Si' : 'No'}
							</li>
						</ul>

					</Col>

				</Row>

				<Dialog open={openModal} onClose={handleCloseModal}>
					<DialogTitle>Reservar {props.canchaData.name}</DialogTitle>
					{isBooking ? (
						<DialogContent>
							<Grid container spacing={2} sx={{
								maxHeight: '600px',
								alignContent: 'center',
								justifyContent: 'center',
								height: '200px',
								width: '200px',
							}}>
								<Watch
									type="ThreeDots"
									color="#00BFFF"
									height={100}
									width={100}
								/>
							</Grid>
						</DialogContent>
					) : (
						<>
							<DialogContent>
								<Typography variant="body2" color="text.secondary">
									{selectedDate && (selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}
								</Typography>
								<HalfHourTimeSelector
									day={selectedDate}
									fromHour={
										props.canchaData.availability.find((availability) => availability.key === dateKey)?.from
									}
									toHour={
										props.canchaData.availability.find((availability) => availability.key === dateKey)?.to
									}
									onStartTimeChange={(e) => handleStartTimeChange(e.target.value)}
									onEndTimeChange={(e) => handleEndTimeChange(e.target.value)}
									startTime={selectedStartTime}
									endTime={selectedEndTime}
									halfHourError={halfHourError}
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleCloseModal} color="primary">
									Cancelar
								</Button>
								<Button onClick={handleReservation} color="primary" className="btn">
									Reservar
								</Button>
							</DialogActions>
						</>
					)}
				</Dialog>

			</Container>

		</section>
	);
}

export default CanchaInfo;