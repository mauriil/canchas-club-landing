import React, { use, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { AppBar, Button, CardContent, Dialog, DialogContent, DialogTitle, Grid, InputAdornment, MenuItem, Select, TextField, Toolbar, Typography, DialogActions } from '@mui/material';
import { localidades } from './locations.json';
import HalfHourTimeSelector from './HalfHoursSelector';
import { Watch } from 'react-loader-spinner'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { sports } from './dicctionary.json'

const AvailableFields = (props) => {
    const [state, handleSubmit] = useForm("FORMSPREE_FORM_ID");
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
    const [horaDesde, setHoraDesde] = useState('08:00');
    const [provincia, setProvincia] = useState('Buenos Aires');
    const [departments, setDepartments] = useState([]);
    const [departamento, setDepartamento] = useState('all');
    const [deporte, setDeporte] = useState('all');
    const [loading, setLoading] = useState(false);
    const [canchas, setCanchas] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCancha, setSelectedCancha] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const [isBooking, setIsBooking] = useState(false);
    const [dateKey, setDateKey] = useState(null);
    const [calendarOpen, setOpenCalendar] = useState([]);
    const [halfHourError, setHalfHourError] = useState(false);
    const resultsSectionRef = useRef(null);
    const [noAvailableHours, setNoAvailableHours] = useState(false);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const normalizeDate = (date) => {
        const [year, month, day] = date.day.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    // const availableDates = canchas.availability.map((availability) => {
    // 	return normalizeDate(availability.day);
    // });

    const [selectedStartTime, setSelectedStartTime] = useState('17:00');
    const [selectedEndTime, setSelectedEndTime] = useState('17:30');

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


    const handleOpenModal = (cancha) => {
        setSelectedCancha(cancha);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setHalfHourError(false);
        setOpenModal(false);
    };

    const handleOpenCalendar = (canchaId) => {
        setOpenCalendar({ [canchaId]: !calendarOpen[canchaId] });
    };

    const handleReservation = () => {
        if (selectedStartTime === selectedEndTime) {
            setHalfHourError(true);
            return;
        }
        const startTime = new Date(`01/01/2007 ${selectedStartTime}`);
        const endTime = new Date(`01/01/2007 ${selectedEndTime}`);
        const difference = endTime - startTime;
        if (difference < 1920000) {
            setHalfHourError(true);
            return;
        }

        setIsBooking(true);
        const day = selectedCancha.availability.find((availability) => availability.key === dateKey)?.day;

        const url = `https://api.canchas.club/bookings/prebooking`;
        // const url = `http://localhost:3000/bookings/prebooking`;
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
                fieldId: selectedCancha._id,
            }),
        }).then(async (response) => {
            const body = await response.json();
            if (response.status === 201) {
                window.location.href = `https://app.canchas.club/reserva/${body.bookingId}`;
            } else {
                alert('Error al reservar');
                setIsBooking(false);
            }
        });

    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`)
                .then((response) => response.json())
                .then((data) => {
                    setProvincia(data.principalSubdivision);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }, []);

    useEffect(() => {
        void searchDepartments(provincia);
    }, [provincia])

    const searchDepartments = (provincia) => {
        if (!provincia) return;
        const departments = localidades.filter((objeto) => {
            return objeto.provincia.nombre.toLowerCase() === provincia.toLowerCase();
        });
        // make departments an array of strings
        const departmentsArray = departments.map((department) => {
            return department.localidad_censal.nombre;
        });
        // remove duplicates
        const uniqueDepartments = [...new Set(departmentsArray)];
        // order alphabetically
        uniqueDepartments.sort((a, b) => a.localeCompare(b));
        setDepartments(uniqueDepartments);
    }

    const provinces = [
        'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
        'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro',
        'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
    ];

    const handleSearch = (page = 1) => {
        if (resultsSectionRef.current) {
            resultsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setLoading(true)
        let query = '';
        query += deporte !== 'all' ? `sport=${encodeURIComponent(deporte)}&` : ''
        query += selectedDay !== '' ? `availability=${encodeURIComponent(selectedDay)}&` : ''
        query += provincia !== '' ? `province=${encodeURIComponent(provincia)}&` : ''
        query += departamento !== 'all' ? `department=${encodeURIComponent(departamento)}&` : ''
        query += `page=${encodeURIComponent(page)}`

        // fetch(`http://localhost:3000/fields?${query}`, {
        fetch(`https://api.canchas.club/fields?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                data.fields.forEach((cancha) => {
                    cancha.availability = cancha.availability.filter((availability) => availability.status === 'available');
                    setOpenCalendar({ [cancha._id]: false });
                });
                setCanchas(data.fields);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                            <h3><img src='/images/banner/CanchasClub_Iconografia-PERSONALIZADA.svg' width={'60px'} ></img> ¡Encontrá tu cancha ideal ahora!</h3>
                        </div>

                    </div>
                </Row>

                <Row>

                    <AppBar position="static" sx={{
                        backgroundColor: '#fff',
                        color: '#000',
                        boxShadow: 'none',
                        borderBottom: '1px solid #eee',

                    }}>
                        <Toolbar>
                            <Container>
                                <Grid container spacing={2} sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>
                                    {/* <Grid item xs={12} sm={2}>
                                        <Typography variant="body1">Fecha</Typography>
                                        <TextField
                                            type="date"
                                            fullWidth
                                            variant="outlined"
                                            value={fecha}
                                            onChange={(e) => setFecha(e.target.value)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="body1">Horario</Typography>
                                        <TextField
                                            type="time"
                                            fullWidth
                                            variant="outlined"
                                            value={horaDesde}
                                            onChange={(e) => setHoraDesde(e.target.value)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid> */}
                                    <Grid item xs={12} sm={2} >
                                        <Typography variant="body1">Provincia</Typography>
                                        <Select
                                            value={provincia}
                                            onChange={(e) => setProvincia(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            sx={{ height: 83 }}
                                        >
                                            {provinces.map((province) => (
                                                <MenuItem key={province} value={province}>
                                                    {province}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="body1">Departamento</Typography>
                                        <Select
                                            value={departamento}
                                            onChange={(e) => setDepartamento(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            sx={{ height: 80 }}
                                        >
                                            <MenuItem value="all" selected>Todos</MenuItem>
                                            {departments.map((department) => (
                                                <MenuItem key={department} value={department} selected>
                                                    {department}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="body1">Deporte</Typography>
                                        <Select
                                            value={deporte}
                                            onChange={(e) => setDeporte(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            sx={{ height: 80 }}
                                        >
                                            <MenuItem value="all" selected>Todos</MenuItem>
                                            <MenuItem value="tenis">Tenis</MenuItem>
                                            <MenuItem value="paddle">Paddle</MenuItem>
                                            <MenuItem value="basquet">Básquet</MenuItem>
                                            <MenuItem value="hockey">Hockey</MenuItem>
                                            <MenuItem value="rugby">Rugby</MenuItem>
                                            <MenuItem value="voley">Voley</MenuItem>
                                            <MenuItem value="handball">Handball</MenuItem>
                                            <MenuItem value="squash">Squash</MenuItem>
                                            <MenuItem value="futbol5">Fútbol 5</MenuItem>
                                            <MenuItem value="futbol7">Fútbol 7</MenuItem>
                                            <MenuItem value="futbol9">Fútbol 9</MenuItem>
                                            <MenuItem value="futbol11">Fútbol 11</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSearch}
                                            sx={{ height: 83, mt: '1.5rem' }}
                                            className="btn"
                                        >
                                            {loading ? 'Buscando...' : 'Buscar'}
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Container>
                        </Toolbar>
                    </AppBar>
                    <Container ref={resultsSectionRef}>
                        <Grid container spacing={2} sx={{
                            overflowY: 'auto',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}>
                            {loading ? (
                                <Watch
                                    type="ThreeDots"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                />
                            ) : (
                                canchas.length === 0 ? (
                                    <Typography variant="body1" color="text.secondary">
                                        No se encontraron resultados
                                    </Typography>
                                ) : (
                                    canchas.map((cancha) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={cancha.id} sx={{ display: 'flex' }}>
                                            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                                                {!calendarOpen[cancha._id] && (
                                                    <Card.Img
                                                        variant="top"
                                                        src={`https://canchas-club.s3.amazonaws.com/${cancha.photos[0]}`}
                                                        sx={{ flex: 1, objectFit: 'cover' }}
                                                    />)}
                                                <Card.Body sx={{ flex: '0 1 auto', overflowY: 'auto' }}>
                                                    <Card.Title>{cancha.name}</Card.Title>
                                                    <Card.Text>{cancha.clubId.address}</Card.Text>
                                                    <Card.Text>{sports[cancha.sport]}</Card.Text>
                                                    <Card.Text>
                                                        <div className="calendar-container">
                                                            {calendarOpen[cancha._id] && (
                                                                <>
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
                                                                        tileDisabled={({ date }) => !cancha.availability.some((dateAvail) => normalizeDate(dateAvail).toDateString() === date.toDateString())}
                                                                        onClickDay={handleDateClick}
                                                                        tileClassName={({ date }) => {
                                                                            return cancha.availability.some((dateAvail) => normalizeDate(dateAvail).toDateString() === date.toDateString()) ? 'available-day' : '';
                                                                        }}
                                                                        tile />
                                                                </>
                                                            )}
                                                            {selectedDate && calendarOpen[cancha._id] && (
                                                                <div>
                                                                    <h4>Precios para el {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
                                                                    {cancha.availability
                                                                        .filter((availability) => normalizeDate(availability).toDateString() === selectedDate.toDateString())
                                                                        .filter((availability) => availability.status === 'available')
                                                                        .map((availability, index) => (
                                                                            <p key={index} onClick={() => { handleOpenModal(cancha); setDateKey(availability.key); setNoAvailableHours(false); }} className='available-hours'>
                                                                                {availability.from} - {availability.to} (${availability.price})
                                                                            </p>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Card.Text>
                                                    <Button variant="primary" className="btn" sx={{ width: '100%' }} onClick={() => handleOpenCalendar(cancha._id)}>
                                                        {calendarOpen[cancha._id] ? 'Ocultar' : 'Ver disponibilidad'}
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Grid>
                                    ))
                                )
                            )}

                            {totalPages > 1 && (
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {Array.from(Array(totalPages).keys()).map((page) => (
                                        <Button key={page} onClick={() => {setCurrentPage(page + 1); handleSearch(page + 1)}} sx={{ mt: '1.5rem' }} className={`btn ${
                                            currentPage === page + 1 ? '' : 'secondary'
                                        }`}>
                                            {page + 1}
                                        </Button>
                                    ))}
                                </Grid>
                            )}
                        </Grid>
                    </Container>
                </Row>

                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogTitle>Reservar {selectedCancha?.name}</DialogTitle>
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
                                        selectedCancha?.availability.find((availability) => availability.key === dateKey)?.from
                                    }
                                    toHour={
                                        selectedCancha?.availability.find((availability) => availability.key === dateKey)?.to
                                    }
                                    onStartTimeChange={(e) => handleStartTimeChange(e.target.value)}
                                    onEndTimeChange={(e) => handleEndTimeChange(e.target.value)}
                                    startTime={selectedStartTime}
                                    endTime={selectedEndTime}
                                    halfHourError={halfHourError}
                                    noAvailableHours={() => setNoAvailableHours(true)}
                                />
                            </DialogContent>
                            <DialogActions>
                                {noAvailableHours ? (
                                    <Button onClick={handleCloseModal} color="primary">
                                        Aceptar
                                    </Button>
                                ) : (
                                    <>
                                        <Button onClick={handleCloseModal} color="primary">
                                            Cancelar
                                        </Button><Button onClick={handleReservation} color="primary" className="btn">
                                            Reservar
                                        </Button>
                                    </>
                                )}
                            </DialogActions>
                        </>
                    )}
                </Dialog>

            </Container>

        </section>
    );
}

export default AvailableFields;