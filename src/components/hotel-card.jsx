import { useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import PropTypes from "prop-types";

const HotelCard = ({
  className = "",
  matterhornSuitesImage,
  propWidth,
  entireBungalow,
  matterhornSuites,
  night,
  rating,
  empty,
  reviews,
  propMinWidth,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const roomInfoStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const reviewsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`h-[442px] flex flex-row items-start justify-start py-0 px-3 box-border text-left text-base text-darkslategray-300 font-components-button-large ${className}`}
      >
        <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast border-whitesmoke-200 border-[1px] border-solid flex flex-col items-start justify-start py-[15px] px-3 gap-[23px] hover:bg-gainsboro-400 hover:cursor-pointer">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={matterhornSuitesImage}
          />
          <div className="self-stretch h-[120px] relative mq450:h-auto mq450:min-h-[120]">
            <img
              className="absolute top-[0px] left-[245px] w-[25px] h-[25px] overflow-hidden cursor-pointer"
              loading="lazy"
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
            <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[23px] h-full">
              <div
                className="w-[234px] flex flex-col items-start justify-start gap-1.5"
                style={roomInfoStyle}
              >
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  {entireBungalow}
                </div>
                <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
                  {matterhornSuites}
                </h3>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  {night}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8.3px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[3.7px] shrink-0">
                  <img
                    className="h-[17.2px] w-[16.6px] relative"
                    alt=""
                    src={rating}
                  />
                  <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
                    {empty}
                  </div>
                </div>
                <a
                  className="[text-decoration:none] flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[74px] shrink-0"
                  style={reviewsStyle}
                >
                  {reviews}
                </a>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer border-lavender-200 border-[1px] border-solid py-2 pl-20 pr-[79px] bg-[transparent] self-stretch rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightsteelblue-300 hover:border-lightsteelblue-200 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border"
            style={moreDetailsButtonStyle}
          >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block min-w-[109px]">
              More details
            </div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

HotelCard.propTypes = {
  className: PropTypes.string,
  matterhornSuitesImage: PropTypes.string,
  entireBungalow: PropTypes.string,
  matterhornSuites: PropTypes.string,
  night: PropTypes.string,
  rating: PropTypes.string,
  empty: PropTypes.string,
  reviews: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBorder: PropTypes.any,
};

export default HotelCard;
