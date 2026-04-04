// function ProductPreview({setShowPreview, images, mainImage, setMainImage}) {
//     return (
//         <>
//             <div className="overlay-for-preview" onClick={()=>setShowPreview(false)}>
//                 <div className="preview-overlay">
//                     <img
//                         src={mainImage.full}
//                         alt={mainImage.full}
//                         className="product-preview-overlay" />

//                     <div className="nav-btn-left nav-btn-com-desk">
//                         <img src="./icon-previous.svg" alt="previous" onClick={}/>
//                     </div>

//                     <div className="nav-btn-right nav-btn-com-desk">
//                         <img src="./icon-next.svg" alt="next" />
//                     </div>

//                 </div>


//             </div>
//         </>
//     )
// }

function ProductPreview({ setShowPreview, images, mainImage, setMainImage }) {
    // Function to go to the next image
    const handleNext = (e) => {
        e.stopPropagation(); // Prevent closing overlay
        const currentIndex = images.findIndex(img => img.full === mainImage.full);
        const nextIndex = (currentIndex + 1) % images.length; // Loop back to first
        setMainImage(images[nextIndex]);
    };

    // Function to go to the previous image
    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = images.findIndex(img => img.full === mainImage.full);
        const prevIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last
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