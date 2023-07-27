import Carousel from "./Carousel";
import TodayProduct from "./TodayProduct";
import TodayCategoryBest from "./TodayCategoryBest";
import EventBanner from "./EventBanner";

export default function Container() {

  return (
    <div id="container" className="mx-4 mb-14">
      <div className="carousel_banner md:mt-5">
        <Carousel />
      </div>
      <div className="today_product">
        <TodayProduct />
      </div>
      <div className="today_category_best block">
        <TodayCategoryBest  />
      </div>
      <div className="event_banner">
        <EventBanner />
      </div>
    </div>
  )
}