import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import PageTitle from "../components/Blog/PageTitle";
import BlogContainer from "../components/Blog/BlogContainer";
import BlogPosts from "../components/Blog/BlogPosts";
import Sidebar from "../components/Blog/Sidebar";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Blog = () => (

    <Layout 
        pageTitle="Naxos - Blog" 
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <Header />
        <PageTitle />

        <BlogContainer>
            <BlogPosts />
            <Sidebar />
        </BlogContainer>

        <Footer />
        <ToTop />
    </Layout>

)

export default Blog;