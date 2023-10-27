import React, { use, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { AppBar, Button, CardContent, Grid, InputAdornment, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material';
import { localidades } from './locations.json';

const AvailableFields = (props) => {
    const [state, handleSubmit] = useForm("FORMSPREE_FORM_ID");
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
    const [horaDesde, setHoraDesde] = useState('08:00');
    const [provincia, setProvincia] = useState('Buenos Aires');
    const [departments, setDepartments] = useState([]);
    const [departamento, setDepartamento] = useState('');
    const [loading, setLoading] = useState(false);

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
        // Realiza la búsqueda de canchas con los filtros seleccionados
        // Puedes llamar a una función aquí que maneje la lógica de búsqueda
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
                            <Container maxWidth="md">
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
                                            {departments.map((department) => (
                                                <MenuItem key={department} value={department} selected>
                                                    {department}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSearch}
                                            sx={{ height: 83, mt: '1.5rem' }} 
                                        >
                                            {loading ? 'Buscando...' : 'Buscar'}
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Container>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="md">
                        <Grid container spacing={2}>
                            {/* Renderizar resultados en forma de tarjetas */}
                            {/* Aquí puedes mapear los resultados y mostrarlos como tarjetas */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">Nombre de la Cancha</Typography>
                                        <Typography>Horarios Disponibles</Typography>
                                        <Typography>Precio</Typography>
                                        <Button variant="contained" color="primary">
                                            Reservar
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* Repite esta estructura para cada resultado */}
                        </Grid>
                    </Container>

                </Row>

            </Container>

        </section>
    );
}

export default AvailableFields;