  import MainLayout from "../components/layout/MainLayout";
import HeroBanner from "../components/home/HeroBanner";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
    </MainLayout>
  );
}

export default Home;