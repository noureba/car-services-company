import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services";
import Slider from "./components/pages/Slider";
import Contact from "./components/pages/Contact";
import menu from "./assets/data/menu.json";
import carousel from "./assets/data/carousel.json";
import info from "./assets/data/info.json"
import './index.scss'


function App() {
  return (
    <>
      <Header menu={menu} />
      <Slider carousel={carousel} />
      <About info={info}/>
      <Services info={info}/>
      <Contact />
      <Footer footerMenu={menu}/>
    </>
  );
}

export default App;
