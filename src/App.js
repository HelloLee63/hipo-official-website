import Carousel from "./components/carousel/Carousel";
import Header from "./components/layout/header/Header";
import Footer from "./modules/footer/Footer";

const App = () => {

  return (
    <>
      <Header />
      <Carousel />
      
      <div className="container p-5">
        <p>
        How it works
          Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.

          Notation
          Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

          The classes are named using the format  for xs and  for sm, md, lg, and xl.

          Where property is one of:

          m - for classes that set margin
          p - for classes that set padding
          Where sides is one of:

          t - for classes that set margin-top or padding-top
          b - for classes that set margin-bottom or padding-bottom
          l - for classes that set margin-left or padding-left
          r - for classes that set margin-right or padding-right
          x - for classes that set both *-left and *-right
          y - for classes that set both *-top and *-bottom
          blank - for classes that set a margin or padding on all 4 sides of the element
          Where size is one of:

          0 - for classes that eliminate the margin or padding by setting it to 0
          1 - (by default) for classes that set the margin or padding to $spacer * .25
          2 - (by default) for classes that set the margin or padding to $spacer * .5
          3 - (by default) for classes that set the margin or padding to $spacer
          4 - (by default) for classes that set the margin or padding to $spacer * 1.5
          5 - (by default) for classes that set the margin or padding to $spacer * 3
          auto - for classes that set the margin to auto
          (You can add more sizes by adding entries to the $spacers Sass map variable.)
        </p>
        <Footer />
      </div>
    </>
  );
}

export default App;