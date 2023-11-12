import "../styles/App.scss";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="home">
        <Banner />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
