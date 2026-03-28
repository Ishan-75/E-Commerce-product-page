function ProductGallery() {
  return (
    <div className="product-image">
      <img src="./image-product-1.jpg" alt="image-product-1" />

      <div className="image-section-desktop">
        <img src="./image-product-1.jpg" alt="1" />
        <img src="./image-product-2.jpg" alt="2" />
        <img src="./image-product-3.jpg" alt="3" />
        <img src="./image-product-4.jpg" alt="4" />
      </div>

      <div className="nav-btn-left nav-btn-com">
        <img src="./icon-previous.svg" alt="previous" />
      </div>

      <div className="nav-btn-right nav-btn-com">
        <img src="./icon-next.svg" alt="next" />
      </div>
    </div>
  );
}

export default ProductGallery;