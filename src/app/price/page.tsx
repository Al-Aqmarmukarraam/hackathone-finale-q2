
import React from "react"
import Card from "../components/home/editorsPick";
import Faqs from "../components/price/faqs";
import FreeTrials from "../components/price/freeTrials";
import PriceSection from "../components/price/priceSection";
import Logo from "../components/Product/logo";

const PricePage = () => {
  return (
    <div>
      <PriceSection />
      <Card />
      <Logo />
      <Faqs />
      <FreeTrials />
    </div>
  );
};

export default PricePage;