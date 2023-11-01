import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import PageTitle from "../components/ClubAlias/PageTitle";
import CanchaInfo from "../components/ClubAlias/CanchaInfo";
import ClubInfoFooter from "../components/ClubAlias/ClubInfoFooter";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import { useEffect, useState } from "react";

const ClubInfo = () => {
  const [clubData, setClubData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clubAlias = window.location.pathname.split('/')[1];
    // fetch(`https://api.canchas.club/fields?${query}`, {
    fetch(`http://localhost:3000/clubs/alias/${clubAlias}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ file: [clubAlias].js:24 ~ .then ~ data:", data);
        setClubData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout
      pageTitle="Naxos - Worker"
      colorSchema="/assets/colors/blue.css"
    >
      <Loader />
      {loading && <Loader />}
      {clubData.length > 0 && (
        <>
          <PageTitle clubName={clubData[0].clubId?.name} clubImage={clubData[0]?.clubId?.logo} />
          {clubData.map((cancha) => (
            <CanchaInfo canchaData={cancha}/>
          ))}
          <ClubInfoFooter clubData={clubData[0].clubId}/>
          <Footer />
        </>
      )}
      <ToTop />
    </Layout>
  );
};

export default ClubInfo;
