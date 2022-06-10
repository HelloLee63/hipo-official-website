import Carousel from "./components/carousel/Carousel";
import Header from "./components/layout/header/Header";
import Footer from "./modules/footer/Footer";
import Investors from "./modules/investors/Investors";

const App = () => {

  return (
    <>
      <Header />
      <Carousel />      
      <div className="container p-5">
        <Investors />
        <Footer />
      </div>
    </>
  );
}

export default App;