import React, { useState } from "react";
import ServiceHead from "../Services/ServiceHead";
import { SHOP_HEAD_IMAGE, galleryImages } from "../../constants/constant";
import {
  Brands,
  Nutrition,
  ProductType,
  Products,
  SkinConditions,
  SkinType,
} from "./shopHelpingcomponents";
import ShopMenu from "./ShopMenu";
import Description from "./Description";

const Shop = () => {
  const [desc, setDesc] = useState(0);
  return (
    <section>
      <ShopMenu />
      <ServiceHead title="Shop" img={SHOP_HEAD_IMAGE} />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP SKIN TYPE
      </h2>

      <SkinType />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP PRODUCT TYPE
      </h2>
      <ProductType />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP BRANDS
      </h2>
      <Brands />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP SKIN CONDITIONS
      </h2>
      <SkinConditions />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP NUTRITON
      </h2>
      <Nutrition />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        CUSTOMER’S FAVOURITES
      </h2>
      <Products />
      <div>
        {galleryImages.map((item, id) => (
          <>
            {desc === id && (
              <Description key={id} id={id} setDesc={setDesc} src={item.src} />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Shop;
