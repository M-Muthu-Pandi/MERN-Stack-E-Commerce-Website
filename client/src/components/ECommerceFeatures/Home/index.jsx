import { useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import CategoriesList from "./categoriesList";
import FeaturedSection from "./featuredSection";
import ImageCarousel from "./imageCarousel";

const Home = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <ImageCarousel /> {/* Image carousel section */}
        <FeaturedSection /> {/* Featured products section */}
        <CategoriesList /> {/* Categories list section */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
