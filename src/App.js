import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/exprience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import Testimonial from './components/testimonial/Testimonial'


function App() {
  return (
    <div className="App">

    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Contact/>
    <Portfolio/>
    <Testimonial/>
    <Footer/>




    </div>
  );
}

export default App;
