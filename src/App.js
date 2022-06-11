import Carousel from "./components/carousel/Carousel";
import Header from "./components/layout/header/Header";
import Footer from "./modules/footer/Footer";
import Investors from "./modules/investors/Investors";
import ProductModule from "./modules/product/ProductModule";

const App = () => {

  return (
    <>
      <Header />
      <Carousel />      
      <div className="container">
        <ProductModule />
        <Investors />
        <Footer />
      </div>
    </>
  );
}

export default App;