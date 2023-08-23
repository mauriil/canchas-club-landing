import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import PageTitle from "../components/Worker/PageTitle";
import WorkerInfo from "../components/Worker/WorkerInfo";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Worker = () => (

    <Layout 
        pageTitle="Naxos - Worker" 
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <Header />
        <PageTitle />
        <WorkerInfo />
        <Footer />
        <ToTop />
    </Layout>

)

export default Worker;