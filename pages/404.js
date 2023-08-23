import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import ErrorPage from "../components/404/ErrorPage";
import ToTop from "../components/Sections/ToTop";

const Custom404 = () => (

    <Layout 
        pageTitle="Naxos - Ooops..." 
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <ErrorPage />
        <ToTop />

    </Layout>

)

export default Custom404;