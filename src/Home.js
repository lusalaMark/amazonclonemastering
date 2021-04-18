import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key="1001"
            id="1001"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61RS44SioLL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            key="1002"
            id="1002"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/51x5TWsDQUL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            key="1003"
            id="1003"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={143.0}
            image="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            key="1004"
            id="1004"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://m.media-amazon.com/images/I/71I6oj6ZFBL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            key="1005"
            id="1005"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://m.media-amazon.com/images/I/41wFyW8SdhL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            key="1006"
            id="1006"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
