import React, { use, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { AppBar, Button, CardContent, Dialog, DialogContent, DialogTitle, Grid, InputAdornment, MenuItem, Select, TextField, Toolbar, Typography, DialogActions } from '@mui/material';
import { localidades } from './locations.json';
import HalfHourTimeSelector from './HalfHoursSelector';
import { Watch } from 'react-loader-spinner'

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
    const [openModal, setOpenModal] = useState(false);
    const [selectedCancha, setSelectedCancha] = useState(null);
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [isBooking, setIsBooking] = useState(false);

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
        setOpenModal(false);
    };

    const handleReservation = () => {
        setIsBooking(true);
        const day = selectedCancha?.availability.find((availability) => availability.key === selectedDay)?.day;

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
                fieldId: selectedCancha._id,
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

    const handleSearch = () => {
        setLoading(true)
        let query = '';
        console.log("🚀 ~ file: AvailableFields.js:124 ~ handleSearch ~ deporte:", deporte)
        query += deporte !== 'all' ? `sport=${encodeURIComponent(deporte)}&` : ''
        query += selectedDay !== '' ? `availability=${encodeURIComponent(selectedDay)}&` : ''
        query += provincia !== '' ? `province=${encodeURIComponent(provincia)}&` : ''
        query += departamento !== 'all' ? `department=${encodeURIComponent(departamento)}&` : ''

        fetch(`https://api.canchas.club/fields?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                data.forEach((cancha) => {
                    cancha.availability = cancha.availability.filter((availability) => availability.status === 'available');
                });
                setCanchas(data);
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
                            <h3><img src='/images/banner/CanchasClub_Iconografia-PERSONALIZADA.svg' width={'60px'} ></img> ¡Encuentra tu cancha ideal ahora!</h3>
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
                                    <Grid item xs={12} sm={2}>
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
                                    </Grid>
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
                    <Container>
                        <Grid container spacing={2} sx={{
                            overflowY: 'auto',
                            maxHeight: '600px',
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
                                canchas.map((cancha) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={cancha.id} sx={{ display: 'flex' }}>
                                        <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                                            <Card.Img
                                                variant="top"
                                                src={`https://canchas-club.s3.amazonaws.com/${cancha.photos[0]}`}
                                                sx={{ flex: 1, objectFit: 'cover' }}
                                            />
                                            <Card.Body sx={{ flex: '0 1 auto', overflowY: 'auto' }}>
                                                <Card.Title>{cancha.name}</Card.Title>
                                                <Card.Text>{cancha.clubId.address}</Card.Text>
                                                <Card.Text>{cancha.sport}</Card.Text>
                                                <Card.Text>
                                                    {cancha.availability.map((availability) => (
                                                        <Typography key={Math.floor(Math.random() * 1000000)}>
                                                            {availability.day} {availability.from} - {availability.to} ${availability.price}
                                                        </Typography>
                                                    ))}
                                                </Card.Text>
                                                <Button variant="primary" className="btn" sx={{ width: '100%' }} onClick={() => handleOpenModal(cancha)}>
                                                    Reservar
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Container>
                </Row>

                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogTitle>Reservar {selectedCancha?.name}</DialogTitle>
                    {isBooking ? (
                        <DialogContent>
                            <Watch
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />
                        </DialogContent>
                    ) : (
                        <>
                            <DialogContent>
                                <TextField
                                    select
                                    label="Día"
                                    value={selectedDay}
                                    onChange={(e) => setSelectedDay(e.target.value)}
                                    fullWidth
                                    sx={{ mb: 2, mt: 2 }}
                                >
                                    {selectedCancha?.availability.map((availability) => (
                                        <MenuItem key={availability.key} value={availability.key}>
                                            {availability.day} ({availability.from} - {availability.to}) ${availability.price}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <HalfHourTimeSelector
                                    fromHour={
                                        selectedCancha?.availability.find((availability) => availability.key === selectedDay)?.from
                                    }
                                    toHour={
                                        selectedCancha?.availability.find((availability) => availability.key === selectedDay)?.to
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

export default AvailableFields;