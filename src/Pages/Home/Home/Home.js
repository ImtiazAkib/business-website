import React from "react";
import Banner from "../Banner/Banner";
import QoutaForm from "../QoutaForm/QoutaForm";
import SimpleHero from "../SimpleHero/SimpleHero";
import Solutions from "../Solutions/Solutions";
import Elements from "../Elements/Elements";
import Sources from "../Sources/Sources";
import Extra from "../Extra/Extra";
import AssociatesCarousel from "../AssociatesCarousel/AssociatesCarousel";
import BottomBanner from "../BottomBanner/BottomBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <QoutaForm></QoutaForm>
      <SimpleHero></SimpleHero>
      <Solutions></Solutions>
      <Elements></Elements>
      <Sources></Sources>
      <Extra></Extra>
      <AssociatesCarousel />
      <BottomBanner />
    </div>
  );
};

export default Home;
