import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/banner";
import AboutUs from "./components/aboutUs/aboutUs";
import Map from "./components/map/map";
import Services from "./components/services/services";
import Practice from "./components/practice/practice";

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <AboutUs />
        <Map />
        <Services />
        <Practice />
    </div>
  );
}

export default App;
