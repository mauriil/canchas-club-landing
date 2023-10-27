import React, { use, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { AppBar, Button, CardContent, Dialog, DialogContent, DialogTitle, Grid, InputAdornment, MenuItem, Select, TextField, Toolbar, Typography, DialogActions } from '@mui/material';
import { localidades } from './locations.json';
import HalfHourTimeSelector from './HalfHoursSelector';

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
        const day = selectedCancha?.availability.find((availability) => availability.key === selectedDay)?.day;
        window.open(`http://localhost:5173/reserva/${day}/${selectedStartTime}/${selectedEndTime}/${selectedCancha._id}`, '_blank');
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
        // fetch(`https://api.canchas.club/fields?`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("🚀 ~ file: AvailableFields.js:63 ~ .then ~ data:", data)
        //         setCanchas(data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        setCanchas([{ "_id": "64ac3367ab8597e8dd79ae26", "name": "Field footaball", "sport": "paddle", "clubId": { "location": { "type": "Point" }, "colors": { "tertiary": "#000000", "primary": "#FFFFFF", "secondary": "#FFFF" }, "reservationMode": "full", "_id": "64ac3302ab8597e8dd79ae22", "name": "Edited", "description": "description one", "logo": "https://www.google.com/photo", "address": "addres one ", "city": "La Rioja", "country": "Capital", "alias": "club-one", "userId": "64ac321b26c685de7deedc9c", "createdAt": "2023-07-10T16:34:10.827Z", "updatedAt": "2023-07-13T17:43:10.036Z", "__v": 0, "closedDays": ["2023-07-17", "2023-12-15"] }, "reservationMode": "full", "ownerId": "64ac321b26c685de7deedc9c", "description": "description one", "photos": ["photo1", "photo2"], "fieldType": "indoor", "floorType": "concrete", "illumination": true, "availability": [{ "day": "2023-10-27", "from": "12:30", "to": "17:30", "status": "available", "price": 5000 }, { "day": "2023-10-28", "from": "12:00", "to": "23:59", "status": "available", "price": 5000 }, { "day": "2023-10-29", "from": "15:00", "to": "23:59", "status": "available", "price": 5000 }, { "day": "2023-10-30", "from": "08:00", "to": "20:00", "status": "available", "price": 1500 }] }, { "_id": "64ac34c697bd14a1ff143d7b", "name": "Club futbol tennis", "sport": "football-tennis", "clubId": { "location": { "type": "Point" }, "colors": { "tertiary": "#000000", "primary": "#FFFFFF", "secondary": "#FFFF" }, "reservationMode": "full", "_id": "64ac3302ab8597e8dd79ae22", "name": "Edited", "description": "description one", "logo": "https://www.google.com/photo", "address": "addres one ", "city": "La Rioja", "country": "Capital", "alias": "club-one", "userId": "64ac321b26c685de7deedc9c", "createdAt": "2023-07-10T16:34:10.827Z", "updatedAt": "2023-07-13T17:43:10.036Z", "__v": 0, "closedDays": ["2023-07-17", "2023-12-15"] }, "reservationMode": "full", "ownerId": "64ac321b26c685de7deedc9c", "description": "description one", "photos": ["photo1", "photo2"], "fieldType": "indoor", "floorType": "concrete", "illumination": true, "availability": [{ "day": "2023-10-30", "from": "09:00", "to": "15:00", "status": "available", "price": 1400 }] }, { "_id": "64c3fbfd6ff6d6503333e6da", "name": "Cancha 2", "sport": "paddle", "clubId": { "location": { "type": "Point", "coordinates": [-68.04796279259034, -38.95545302753339] }, "colors": { "primary": "#2196f3", "secondary": "#FFFFFF", "tertiary": "#000000" }, "reservationMode": "full", "_id": "65120d75b63e8ea5b48409c7", "name": "Winter Padel", "description": "3 canchas de padel para disfrutar", "logo": "64fe68c0cbd250f517046850/clublogos/Winter Padel", "address": "Tte. Coronel Lorenzo Winter 23, Q8300 CEA, Neuquén, Argentina", "latitude": "-38.95545302753339", "longitude": "-68.04796279259034", "city": "Neuquén", "country": "ARG", "alias": "winter.padel", "userId": "64fe68c0cbd250f517046850", "closedDays": ["2023-12-15"], "createdAt": "2023-09-25T22:45:09.388Z", "updatedAt": "2023-09-25T22:45:09.388Z", "__v": 0 }, "reservationMode": "full", "ownerId": "64fe68c0cbd250f517046850", "description": "Cancha de padel", "photos": ["64c3fa1e58d34d55ba344fdb/canchas/IMG_7911.jpeg", "64c3fa1e58d34d55ba344fdb/canchas/green-grass (1) (1).jpg", "64c3fa1e58d34d55ba344fdb/canchas/7385CBB2-9AEE-49D9-9945-6440F2B1750E.png", "64c3fa1e58d34d55ba344fdb/canchas/leo-mengoli-EK49tUzosWM-unsplash.jpg", "64c3fa1e58d34d55ba344fdb/canchas/E411CAF9-A9CA-4F78-A6FD-3B27F28FB574.jpeg"], "fieldType": "outdoor", "floorType": "brick-dust", "illumination": true, "availability": [{ "day": "2023-10-27", "from": "12:00", "to": "18:00", "status": "available", "price": 50 }, { "day": "2023-10-28", "from": "12:00", "to": "23:59", "status": "available", "price": 5000 }, { "day": "2023-10-28", "from": "10:00", "to": "12:00", "status": "available", "price": 3500 }, { "day": "2023-10-29", "from": "15:00", "to": "23:59", "status": "available", "price": 5000 }, { "day": "2023-10-30", "from": "08:00", "to": "20:30", "status": "available", "price": 2500 }, { "day": "2023-11-01", "from": "08:00", "to": "13:00", "status": "available", "price": 1000 }, { "day": "2023-11-01", "from": "13:00", "to": "17:00", "status": "available", "price": 10 }, { "day": "2023-11-01", "from": "17:00", "to": "20:00", "status": "available", "price": 8000 }] }, { "_id": "650deec452b4ca8e0158f501", "name": "cancha futbol 5", "sport": "football5", "clubId": { "location": { "type": "Point" }, "colors": { "primary": "#ff5722", "secondary": "#ffc107", "tertiary": "#000000" }, "reservationMode": "full", "_id": "650decce52b4ca8e0158f4e1", "name": "Futbol OCS club", "description": "Cancha futbol 5 y futbol 8", "logo": "64f6536b943d8deb30db0077/clublogos/Futbol OCS club", "address": "Isidro Lobos 474, Gral. Roca, Río Negro, Argentina", "latitude": "-39.0322663", "longitude": "-67.5721167", "city": "Río Negro", "country": "ARG", "alias": "OCS", "userId": "64f6536b943d8deb30db0077", "closedDays": ["2023-12-15"], "createdAt": "2023-09-22T19:36:46.385Z", "updatedAt": "2023-09-22T19:36:46.385Z", "__v": 0 }, "reservationMode": "full", "ownerId": "64f6536b943d8deb30db0077", "description": "cancha cesped sintetico techada", "photos": ["64f6536b943d8deb30db0077/canchas/16x9-5.jpeg", "64f6536b943d8deb30db0077/canchas/16x9-3.jpeg", "64f6536b943d8deb30db0077/canchas/16x9-4.jpeg", "64f6536b943d8deb30db0077/canchas/16x9.jpeg"], "fieldType": "indoor", "floorType": "grass", "illumination": true, "availability": [] }, { "_id": "65120e28b63e8ea5b48409d7", "name": "Cancha 1", "sport": "paddle", "clubId": { "location": { "type": "Point", "coordinates": [-68.04796279259034, -38.95545302753339] }, "colors": { "primary": "#2196f3", "secondary": "#FFFFFF", "tertiary": "#000000" }, "reservationMode": "full", "_id": "65120d75b63e8ea5b48409c7", "name": "Winter Padel", "description": "3 canchas de padel para disfrutar", "logo": "64fe68c0cbd250f517046850/clublogos/Winter Padel", "address": "Tte. Coronel Lorenzo Winter 23, Q8300 CEA, Neuquén, Argentina", "latitude": "-38.95545302753339", "longitude": "-68.04796279259034", "city": "Neuquén", "country": "ARG", "alias": "winter.padel", "userId": "64fe68c0cbd250f517046850", "closedDays": ["2023-12-15"], "createdAt": "2023-09-25T22:45:09.388Z", "updatedAt": "2023-09-25T22:45:09.388Z", "__v": 0 }, "reservationMode": "full", "ownerId": "64fe68c0cbd250f517046850", "description": "Cesped sintetico", "photos": ["64fe68c0cbd250f517046850/canchas/winterLogo.jpeg"], "fieldType": "indoor", "floorType": "syntheticGrass", "illumination": true, "availability": [{ "day": "2023-10-30", "from": "10:00", "to": "23:00", "status": "available", "price": 8000 }, { "day": "2023-10-31", "from": "10:00", "to": "23:00", "status": "available", "price": 8000 }, { "day": "2023-11-02", "from": "10:00", "to": "23:00", "status": "available", "price": 8000 }] }, { "_id": "651ebca618df871f945eabdd", "name": "Cancha 1", "sport": "paddle", "clubId": { "location": { "type": "Point", "coordinates": [-67.02916199079897, -29.287529967901932] }, "colors": { "primary": "#FFFFFF", "secondary": "#2196f3", "tertiary": "#000000" }, "_id": "651d744f853fc83323cba0cb", "name": "Sanagasta FC", "description": "wwwwww", "logo": "64c3fa1e58d34d55ba344fdb/clublogos/Club sanagasta", "address": "Ramón Aballay, Villa Sanagasta, La Rioja, Argentina", "latitude": "-29.287529967901932", "longitude": "-67.02916199079897", "province": "La Rioja", "department": "Villa Sanagasta", "alias": "clsana", "userId": "64c3fa1e58d34d55ba344fdb", "closedDays": ["2023-01-01", "2023-02-20", "2023-02-21", "2023-03-24", "2023-04-02", "2023-04-07", "2023-05-01", "2023-05-25", "2023-05-26", "2023-06-17", "2023-06-19", "2023-06-20", "2023-07-09", "2023-08-21", "2023-10-13", "2023-10-16", "2023-11-20", "2023-12-08", "2023-12-25", "2023-12-15"], "createdAt": "2023-10-04T14:18:55.641Z", "updatedAt": "2023-10-25T16:29:33.965Z", "__v": 0, "reservationMode": "full" }, "reservationMode": "full", "ownerId": "64c3fa1e58d34d55ba344fdb", "description": "cancha de padel", "photos": ["64c3fa1e58d34d55ba344fdb/canchas/green-grass (1) (1).jpg", "64c3fa1e58d34d55ba344fdb/canchas/9cd7ef07-630c-414a-9a95-666a7438b462-file_poster.jpeg", "64c3fa1e58d34d55ba344fdb/canchas/765EF30B-5111-402E-88D5-DB124C2898CB.jpg", "64c3fa1e58d34d55ba344fdb/canchas/CanchasClub_Logo_FondoTransparente-02 copy-fotor-2023082017116 2.png", "64c3fa1e58d34d55ba344fdb/canchas/leo-mengoli-EK49tUzosWM-unsplash.jpg", "64c3fa1e58d34d55ba344fdb/canchas/rick-rothenberg-W55Oyraq_2I-unsplash.jpg", "64c3fa1e58d34d55ba344fdb/canchas/IMG_8106.jpeg"], "fieldType": "outdoor", "floorType": "grass", "illumination": true, "availability": [{ "day": "2023-10-27", "from": "08:00", "to": "20:00", "status": "available", "price": 5000 }, { "day": "2023-10-30", "from": "00:00", "to": "03:30", "status": "available", "price": 8000 }, { "day": "2023-10-30", "from": "08:00", "to": "18:30", "status": "available", "price": 5000 }, { "day": "2023-11-01", "from": "08:00", "to": "18:00", "status": "available", "price": 1500 }] }])

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
                        <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '600px' }}>
                            {canchas.map((cancha) => (
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
                            ))}
                        </Grid>
                    </Container>
                </Row>

                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogTitle>Reservar {selectedCancha?.name}</DialogTitle>
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
                                    {availability.day} ({availability.from} - {availability.to})
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
                            {/* Redireccioniar a canchas club */}
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>

        </section>
    );
}

export default AvailableFields;