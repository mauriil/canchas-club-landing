import SingleImage from "../components/Intro/SingleImage";
import VideoBackground from "../components/Intro/VideoBackground";
import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import Clients from "../components/Sections//Clients";
import Features from "../components/Sections/Features";
import ParallaxVideo from "../components/Sections/ParallaxVideo";
import Services from "../components/Sections//Services";
import Overview from "../components/Sections/Overview";
import Testimonials from "../components/Sections/Testimonials";
import Counters from "../components/Sections/Counters";
import Team from "../components/Sections/Team";
import Screenshots from "../components/Sections/Screenshots";
import Support from "../components/Sections/Support";
import Subscribe from "../components/Sections/Subscribe";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Index = () => (

    <Layout 
        pageTitle="Naxos - React Next JS App Landing Page Template" 
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
        <Contact />
        <Footer />
        <ToTop />
    </Layout>

)

export default Index;