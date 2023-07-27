import { useState } from "react";

export default function Carousel() {
    const [index, setIndex] = useState(0);
  
    const firstbn = <img className="w-full h-full object-cover"
      src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__480.jpg" alt="배너1" />
    const secondbn = <img className="w-full h-full object-cover"
      src="https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787__480.jpg" alt="배너2" />
    const thirdbn = <img className="w-full h-full object-cover"
      src="https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648__480.jpg" alt="배너3" />
    const fourbn = <img className="w-full h-full object-cover"
      src="https://cdn.pixabay.com/photo/2016/10/07/08/56/woman-1721065__480.jpg" alt="배너4" />
    const fivebn = <img className="w-full h-full object-cover"
      src="https://cdn.pixabay.com/photo/2017/10/03/12/07/bottle-2812214__480.jpg" alt="배너5" />
  
    const images = [
      firstbn, secondbn, thirdbn, fourbn, fivebn];
  
    return (
      <div className="">
        {/* Image */}
        <div className=" overflow-x-hidden relative ">
          <ul
            className="flex transition"
            style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((image, i) => (
              <li key={i} className="w-full h-full shrink-0">
                {image}
              </li>
            ))}
          </ul>
          {/* 다음 버튼 >> 화살표 */}
          <div className="absolute top-0 left-0 h-full flex items-center ">
            <button
              className={"bg-white px-2 " + (index === 0 && "hidden")}
              onClick={() => setIndex(index - 1)}>
              &#10094;
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full flex items-center ">
            <button
              className={"bg-white px-2 " + (index === images.length - 1 && "hidden")}
              onClick={() => setIndex(index + 1)}>
              &#10095;
            </button>
          </div>
  
  
          {/* Indicator */}
          <ul className="absolute bottom-0 w-full py-2 flex justify-center gap-1">
            {images.map((image, dot) => (
              <li
                key={dot}
                className={"w-2 h-2 rounded-full " + (dot === index ? "bg-gray-900" : "bg-white/[0.5]")}>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }