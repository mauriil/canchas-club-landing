import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Watch } from 'react-loader-spinner';
import HalfHourTimeSelector from '../Sections/HalfHoursSelector';

const CanchaInfo = (props) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [seeDispo, setSeeDispo] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [selectedStartTime, setSelectedStartTime] = useState('17:00');
	const [selectedEndTime, setSelectedEndTime] = useState('17:30');
	const [isBooking, setIsBooking] = useState(false);
	const [dateKey, setDateKey] = useState(null);

	const normalizeDate = (date) => {
		const [year, month, day] = date.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	const availableDates = props.canchaData.availability.map((availability) => {
		return normalizeDate(availability.day);
	});

	const handleDateClick = (date) => {
		setSelectedDate(date);
	};

	const handleCloseModal = () => {
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

	const handleReservation = () => {
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
						<img src={`https://canchas-club.s3.amazonaws.com/${props.canchaData.photos[0]}`} alt="" />
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
									<Calendar
										value={selectedDate}
										tileDisabled={({ date }) => !availableDates.some((dateAvail) => dateAvail.toDateString() === date.toDateString())}
										onClickDay={handleDateClick}
										tileClassName={({ date }) => {
											return availableDates.some((dateAvail) => dateAvail.toDateString() === date.toDateString()) ? 'available-day' : '';
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
										.filter((availability) => availability.status === 'available')
										.map((availability, index) => (
											<p key={index} onClick={() => { setOpenModal(true); setDateKey(availability.key) }} className='available-hours'>
												{availability.from} - {availability.to} (${availability.price})
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
									onChange={(e) => setFromTime(e.target.value)}
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