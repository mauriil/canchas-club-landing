import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import PageTitle from "../components/ClubAlias/PageTitle";
import CanchaInfo from "../components/ClubAlias/CanchaInfo";
import ClubInfoFooter from "../components/ClubAlias/ClubInfoFooter";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import { useEffect, useState } from "react";
import ErrorPage from "../components/404/ErrorPage";

const ClubInfo = () => {
  const [clubData, setClubData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clubAlias = window.location.pathname.split('/')[1];
    // fetch(`http://localhost:3000/clubs/alias/${clubAlias}`, {
    fetch(`https://api.canchas.club/clubs/alias/${clubAlias}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        setClubData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
            {clubData.map((cancha) => (
              <CanchaInfo canchaData={cancha} />
            ))}
            <ClubInfoFooter clubData={clubData[0].clubId} />
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
