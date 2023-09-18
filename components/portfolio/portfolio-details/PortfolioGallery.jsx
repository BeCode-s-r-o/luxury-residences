import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PortfolioGallery = ({images}) => {
  return (
    <>
      <Gallery>
        {images && images.map((image, index) => {
        return (
          <div
            className={`col-12 ${index === 2 ? "" : "col-sm-6"}`}
            key={index}
          >
            <div className="img-meta mt-30 wow fadeInLeft">
                {
                }
              <Item
                original={image}
                thumbnail={image}
                width={image.width}
                height={image.height}
                className="lazy-img w-100"
              >
                {({ ref, open }) => (
                  <span
                    role="button"
                    className="fancybox d-block"
                    title="Click for large view"
                    ref={ref}
                    onClick={open}
                  >
                    <Image
                      width={460}
                      height={400}
                      layout="responsive"
                      src={image}
                      alt={image}
                      className="lazy-img w-100"
                    />
                  </span>
                )}
              </Item>
            </div>
          </div>
        )})}
      </Gallery>
    </>
  );
};

export default PortfolioGallery;
