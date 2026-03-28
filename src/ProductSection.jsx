import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import AddToCart from "./AddToCart";

function ProductSection({ setCart, setShowCart }) {
  return (
    <div className="product-section">
      <div className="home">
        <ProductGallery />

        <div>
          <ProductDetails />
          <AddToCart setCart={setCart} setShowCart={setShowCart} />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;