import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            id="49538094"
            price={239.0}
            rating={4}
            image="https://tech4home.shop/wp-content/uploads/2019/04/robot-kenwood-kmix-kmx750rd-jp.jpg.webp"
          />
        </div>
        <div className="home__row">
          <Product
            id="19238394"
            title="Fitbit Charge 3 Fitness Activity Tracker, Graphite/black, One Size (s & L Bands Included)"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71MNjp%2BHVqL._AC_SX425_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://www.nfm.com/productimages/56667371/1/L"
          />
          <Product
            id="325435435"
            title="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/Apple-iPad-Pro-129-inch-4th-gen/Space-Gray/Apple-iPad-Pro-129-inch-4th-gen-Space-Gray-frontimage.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC48523948570394875 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc27rg50fqnxza/gallery/C27RG5_001_Front_Black_gallery01.jpg?$product-details-jpg$"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
