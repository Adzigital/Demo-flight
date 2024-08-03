import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCard from "./hotel-card";
import PropTypes from "prop-types";

const PopularStays = ({ className = "" }) => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-11xl text-darkslategray-300 font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[159px] max-w-full mq1000:text-5xl mq450:text-lg">
          Popular Stays
        </h2>
        <div className="w-[174.7px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border text-right text-lg text-cornflowerblue-300">
          <div
            className="self-stretch rounded-12xl bg-primary-contrast flex flex-row items-start justify-start gap-2.5 whitespace-nowrap cursor-pointer"
            onClick={onViewAllStaysButtonClick}
          >
            <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] font-medium text-[inherit]">
              View all stays
            </a>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/arrowright-4.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-base mq725:grid-cols-[minmax(240px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          rating="/rating.svg"
          empty="4.9"
          reviews="(60 reviews)"
        />
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image1@2x.png"
          propWidth="234px"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          rating="/rating.svg"
          empty="4.8"
          reviews="(116 reviews)"
          propMinWidth="81px"
          propBorder="1px solid #ccdcec"
        />
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image2@2x.png"
          propWidth="240px"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          rating="/vector-2.svg"
          empty="4.7"
          reviews="(78 reviews)"
          propMinWidth="74px"
          propBorder="1px solid #ccdcec"
        />
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image3@2x.png"
          propWidth="234px"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          rating="/rating.svg"
          empty="4.6"
          reviews="(63 reviews)"
          propMinWidth="74px"
          propBorder="1px solid #cdddec"
        />
      </div>
      <div className="w-[174.7px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
        <div className="flex-1 relative tracking-[0.04em] font-medium">
          View all stays
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/arrowright-4.svg"
        />
      </div>
    </div>
  );
};

PopularStays.propTypes = {
  className: PropTypes.string,
};

export default PopularStays;
