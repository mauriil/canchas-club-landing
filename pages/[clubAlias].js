import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import PageTitle from "../components/ClubAlias/PageTitle";
import CanchaInfo from "../components/ClubAlias/CanchaInfo";
import ClubInfoFooter from "../components/ClubAlias/ClubInfoFooter";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import { useEffect, useState } from "react";
import ErrorPage from "../components/404/ErrorPage";
import { Button, Grid } from "@mui/material";
import FieldFilters from "../components/FieldFilters";

const ClubInfo = () => {
  const [clubData, setClubData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sport: "",
    fieldType: "",
    floorType: "",
    illumination: "",
    availability: "",
    province: "",
    department: "",
  });

  const fetchData = async (filters = {}) => {
    setLoading(true);
    const clubAlias = window.location.pathname.split('/')[1];
    let queryString = "";
    for (const [key, value] of Object.entries(filters)) {
      if (value !== "") {
        queryString += `${key}=${value}&`;
      }
    }
    // const response = await fetch(`http://localhost:3000/clubs/alias/${clubAlias}?${queryString}`, {
    const response = await fetch(`https://api.canchas.club/clubs/alias/${clubAlias}?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    const data = await response.json();
    setClubData(data.fields);
    setTotalPages(data.totalPages);
    setLoading(false);
  }

  useEffect(() => {
    void fetchData();
  }, []);

  const changeFilter = (filterName, filterValue) => {
    setLoading(true);
    setFilters({ ...filters, [filterName]: filterValue });
    void fetchData({ ...filters, [filterName]: filterValue }).catch(error => {
      console.error("Error in fetchData:", error);
      setLoading(false);
    });
  }

  return (
    <>
      {clubData.length > 0 && !loading ? (
        <>
          <Layout
            pageTitle={clubData[0].clubId?.name}
            colorSchema="/assets/colors/blue.css"
            clubLogo={clubData[0].clubId?.logo}
          >
            <PageTitle clubName={clubData[0].clubId?.name} clubImage={clubData[0]?.clubId?.logo} />
            <ClubInfoFooter clubData={clubData[0].clubId} />
            <FieldFilters onFilterChange={changeFilter} />
            {clubData.map((cancha) => (
              <CanchaInfo canchaData={cancha} />
            ))}
            {totalPages && (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                {Array.from(Array(totalPages).keys()).map((page) => (
                  <Button key={page} onClick={() => { setCurrentPage(page + 1); fetchData(page + 1) }} sx={{ mt: '1.5rem' }} className={`btn ${currentPage === page + 1 ? '' : 'secondary'
                    }`}>
                    {page + 1}
                  </Button>
                ))}
              </Grid>
            )}
            <Footer />
            <ToTop />
          </Layout>
        </>
      ) : loading ? (<Loader />) : (
        <>
          <Layout
            pageTitle="Canchas Club"
            colorSchema="/assets/colors/blue.css"
          >
            <ErrorPage />
            <Footer />
          </Layout>
        </>
      )}
    </>
  );
};

export default ClubInfo;
