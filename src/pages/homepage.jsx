import FrameComponent from "../components/frame-component";
import RecentFlightsContainer from "../components/recent-flights-container";
import TripMenus from "../components/trip-menus";
import PlanTripContainer from "../components/plan-trip-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStays from "../components/popular-stays";
import SubscriptionContainer from "../components/subscription-container";

const Homepage = () => {
  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start gap-[69px] leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] gap-[34px] gap-[17px]">
      <FrameComponent />
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-20 box-border gap-20 max-w-full text-left text-lg text-darkslategray-300 font-components-button-large gap-10 mq725:pl-10 mq725:pr-10 mq725:box-border gap-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recent Searches
          </b>
          <RecentFlightsContainer />
          <TripMenus />
        </div>
        <PlanTripContainer />
        <div className="w-[231.4px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all destinations
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/arrowright.svg"
          />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <SubscriptionContainer />
    </div>
  );
};

export default Homepage;
