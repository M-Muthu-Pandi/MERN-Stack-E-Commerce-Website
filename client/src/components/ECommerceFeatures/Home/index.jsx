import Footer from "../common/Footer";
import Header from "../common/Header";
import CategoriesList from "./categoriesList";
import FeaturedSection from "./featuredSection";
import ImageCarousel from "./imageCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ImageCarousel />

        <FeaturedSection />

        <CategoriesList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
