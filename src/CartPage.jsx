import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import AddToCart from "./AddToCart";
import ProductPreview from "./ProductPreview";

function CartPage({ setCart, setShowCart, cart  }) {

   const images = [
  { thumb: "/image-product-1-thumbnail.jpg", full: "/image-product-1.jpg" },
  { thumb: "/image-product-2-thumbnail.jpg", full: "/image-product-2.jpg" },
  { thumb: "/image-product-3-thumbnail.jpg", full: "/image-product-3.jpg" },
  { thumb: "/image-product-4-thumbnail.jpg", full: "/image-product-4.jpg" },
];

const [mainImage, setMainImage] =useState(images[0])
const [prevImage, setPrevImage] =useState(images[0])
 const [showPreview, setShowPreview] = useState(false)
 return (
   <div className="product-section">
      <div className="home">
        <ProductGallery setShowPreview={setShowPreview} images={images} mainImage={mainImage} setMainImage={setMainImage}/>
        <div>
          <ProductDetails />
          <AddToCart setCart={setCart} setShowCart={setShowCart} cart = {cart} />
        </div>
      </div>
     {showPreview && <ProductPreview setShowPreview={setShowPreview} images={images} mainImage={mainImage} setMainImage={setMainImage} prevImage={prevImage} setPrevImage={setPrevImage} />}
      
    </div>
  );
}



export default CartPage;