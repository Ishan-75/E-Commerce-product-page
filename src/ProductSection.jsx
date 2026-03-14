import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
function ProductSection() {
  return (
    <>
      <div className="product-section">
        <div className="home">
          <ProductGallery />
          <div>
            <ProductDetails />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
