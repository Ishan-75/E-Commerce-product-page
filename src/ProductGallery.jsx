import { useState } from "react";

function ProductGallery({ setShowPreview, images, mainImage, setMainImage }) {

 

  return (
    <div className="product-image">
      <img src={mainImage.full} alt={mainImage.full} className="main-img" onClick={()=> setShowPreview(true)} />

      <div className="image-section-desktop">
        {images.map((img, index) => (
          <div key={index} className="thumb-wrapper">
            <img
              src={img.thumb}
              alt={`thumb-${index}`}
              onClick={() => setMainImage(img)}
              className="thumbnail-img"
            />

            {/* overlay */}
            {mainImage.full === img.full && (
              <div className="thumb-overlay"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductGallery;