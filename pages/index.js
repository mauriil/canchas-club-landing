import VideoBackground from "../components/Intro/VideoBackground";
import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import Clients from "../components/Sections//Clients";
import Features from "../components/Sections/Features";
import ParallaxVideo from "../components/Sections/ParallaxVideo";
import Services from "../components/Sections//Services";
import Overview from "../components/Sections/Overview";
import Screenshots from "../components/Sections/Screenshots";
import Support from "../components/Sections/Support";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import AvailableFields from "../components/Sections/AvailableFields";

const Index = () => (

    <Layout
        pageTitle="Canchas Club - Encuentra y Reserva Canchas Deportivas en Argentina"
        colorSchema="/assets/colors/green.css"
    >
        <Loader />
        <Header nav="home" />
        <VideoBackground />
        <Clients className="section-box bg-grey" />
        <Features />
        <ParallaxVideo />
        <Services serviceClassName="service-single" />
        <Overview />
        <Screenshots className="bg-grey" />
        <Support />
        <Pricing className="bg-grey" />
        <AvailableFields />
        <Contact />
        <Footer />
        <ToTop />
    </Layout>

)

export default Index;