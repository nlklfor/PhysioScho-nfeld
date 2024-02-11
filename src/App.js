import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/banner";
import AboutUs from "./components/aboutUs/aboutUs";
import Map from "./components/map/map";
import Services from "./components/services/services";
import Practice from "./components/practice/practice";
import ContactUs from "./components/contactUs/contactUs";
import Conditions from "./components/conditions/conditions";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";
import Vacancy from "./components/vacancy/vacancy";

function App() {
  return (
    <div className="App">
        <Header />
        {/*<Banner />*/}
        {/*<AboutUs />*/}
        {/*<Map />*/}
        {/*<Services />*/}
        {/*<Practice />*/}
        {/*<ContactUs />*/}
        {/*<Conditions />*/}
        {/*<Reviews />*/}
        <Vacancy />
        <Footer />
    </div>
  );
}

export default App;
