import React from "react";
import image from "./amazone.png";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazone"
      />
      <div className="home__row">
        <Product
          id="12322341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="1243221341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11}
          rating={1}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </div>
      <div className="home__row">
        <Product
          id="123321341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11}
          rating={5}
          image={image}
        />
        <Product
          id="123421341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11}
          rating={4}
          image={image}
        />
        <Product
          id="123213341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11}
          rating={2}
          image={image}
        />
      </div>
    </div>
  );
};

export default Home;
