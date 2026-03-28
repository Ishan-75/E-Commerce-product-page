function ProductPreview() {
    return (
        <>
            <div className="overlay-for-preview">
                <div className="preview-overlay">
                    <img
                        src="./image-product-1.jpg"
                        alt="product-1"
                        className="product-preview-overlay" />

                    <div className="nav-btn-left nav-btn-com-desk">
                        <img src="./icon-previous.svg" alt="previous" />
                    </div>

                    <div className="nav-btn-right nav-btn-com-desk">
                        <img src="./icon-next.svg" alt="next" />
                    </div>

                </div>


            </div>
        </>
    )
}
export default ProductPreview;