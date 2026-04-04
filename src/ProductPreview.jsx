function ProductPreview({ setShowPreview, images, mainImage, setMainImage }) {

    const handleNext = (e) => {
        const currentIndex = images.findIndex(img => img.full === mainImage.full);
        const nextIndex = (currentIndex + 1) % images.length;
        setMainImage(images[nextIndex]);
    };


    const handlePrev = (e) => {
        const currentIndex = images.findIndex(img => img.full === mainImage.full);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setMainImage(images[prevIndex]);
    };

    return (
        <div className="overlay-for-preview" onClick={() => setShowPreview(false)}>
            <div className="preview-overlay" onClick={(e) => e.stopPropagation()}>
                <img
                    src={mainImage.full}
                    alt="Preview"
                    className="product-preview-overlay"
                />
                


                <div className="nav-btn-left nav-btn-com-desk" onClick={handlePrev}>
                    <img src="./icon-previous.svg" alt="previous" onClick={handlePrev} />
                </div>

                <div className="nav-btn-right nav-btn-com-desk" onClick={handleNext}>
                    <img src="./icon-next.svg" alt="next" onClick={handleNext} />
                </div>

            </div>
        </div>
    );
}

export default ProductPreview;