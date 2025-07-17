import React from "react";

interface PostImagesGridProps {
  images: string[];
  onImageClick?: (index: number) => void;
}

const PostImagesGrid: React.FC<PostImagesGridProps> = ({
  images,
  onImageClick,
}) => {
  const handleClick = (index: number) => {
    onImageClick?.(index);
  };

  const renderImages = () => {
    const count = images.length;
    const visibleImages = images.slice(0, 4);

    const commonImageClass =
      "h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]";

    if (count === 1) {
      return (
        <section className="h-[280px] w-full rounded-[6px] overflow-hidden">
          <img
            src={images[0]}
            onClick={() => handleClick(0)}
            className={`${commonImageClass} cursor-pointer`}
            alt=""
          />
        </section>
      );
    }

    if (count === 2) {
      return (
        <section className="h-[280px] w-full flex justify-between rounded-[6px] overflow-hidden">
          {images.map((img, i) => (
            <div
              key={i}
              className="h-full w-[49.7%] cursor-pointer overflow-hidden"
              onClick={() => handleClick(i)}
            >
              <img src={img} className={commonImageClass} alt="" />
            </div>
          ))}
        </section>
      );
    }

    if (count === 3) {
      return (
        <section className="h-[280px] w-full flex flex-col justify-between rounded-[6px] overflow-hidden">
          <div
            className="h-[49.5%] w-full cursor-pointer overflow-hidden"
            onClick={() => handleClick(0)}
          >
            <img src={images[0]} className={commonImageClass} alt="" />
          </div>
          <section className="h-[49.5%] flex justify-between">
            {images.slice(1).map((img, i) => (
              <div
                key={i + 1}
                className="h-full w-[49.7%] cursor-pointer overflow-hidden"
                onClick={() => handleClick(i + 1)}
              >
                <img src={img} className={commonImageClass} alt="" />
              </div>
            ))}
          </section>
        </section>
      );
    }

    if (count === 4) {
      return (
        <section className="h-[280px] w-full flex flex-col justify-between rounded-[6px] overflow-hidden">
          <section className="h-[49.5%] flex justify-between">
            {images.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="h-full w-[49.7%] cursor-pointer overflow-hidden"
                onClick={() => handleClick(i)}
              >
                <img src={img} className={commonImageClass} alt="" />
              </div>
            ))}
          </section>
          <section className="h-[49.5%] flex justify-between">
            {images.slice(2, 4).map((img, i) => (
              <div
                key={i + 2}
                className="h-full w-[49.7%] cursor-pointer overflow-hidden"
                onClick={() => handleClick(i + 2)}
              >
                <img src={img} className={commonImageClass} alt="" />
              </div>
            ))}
          </section>
        </section>
      );
    }

    // >4 images
    return (
      <section className="h-[280px] w-full flex flex-col justify-between rounded-[6px] overflow-hidden">
        <section className="h-[49.5%] flex justify-between">
          {visibleImages.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="h-full w-[49.7%] cursor-pointer overflow-hidden"
              onClick={() => handleClick(i)}
            >
              <img src={img} className={commonImageClass} alt="" />
            </div>
          ))}
        </section>
        <section className="h-[49.5%] flex justify-between">
          {visibleImages.slice(2, 4).map((img, i) => {
            const realIndex = i + 2;
            const hiddenCount = images.length - 4;

            return (
              <div
                key={realIndex}
                className="relative h-full w-[49.7%] cursor-pointer overflow-hidden"
                onClick={() => handleClick(realIndex)}
              >
                <img src={img} className={commonImageClass} alt="" />
                {realIndex === 3 && hiddenCount > 0 && (
                  <div className="absolute inset-0 bg-black/50 text-text-secondary text-[32px] font-semibold flex items-center justify-center">
                    +{hiddenCount}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </section>
    );
  };

  return <section className="mt-[10px] mx-1">{renderImages()}</section>;
};

export default PostImagesGrid;
