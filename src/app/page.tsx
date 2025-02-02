import FeaturePost from "./components/home/featureProduct";
import Carousel_3 from "./components/home/neuralUniverse";
import Carousel from "./components/home/newCollection";
import ProductCard from "./components/home/product";
import Carousel_2 from "./components/home/vitaClassicProduct";

export default async function Home() {
  return (
    <div>
      <Carousel />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
    </div>
  );
}