import Navbar2 from "../components/navbar2";
import "../../public/home.css";
import LandingPage from "../components/landingpage";
import WhyGoOnline from "../components/whyonline";

const Services = () => (
  <>
    {/* navbar section */}
    <Navbar2 />
    {/* landing page section */}
    <LandingPage/>
    <WhyGoOnline />
  </>
);

export default Services;
