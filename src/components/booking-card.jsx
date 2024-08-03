import { useMemo } from "react";
import PropTypes from "prop-types";

const BookingCard = ({
  className = "",
  propTop,
  airlineLogo,
  singaporeAirlines,
  propMinWidth,
  price,
  propWidth,
  propMinWidth1,
  propFlex,
  depCode,
  propMinWidth2,
  depName,
  propMinWidth3,
  propFlex1,
  arrCode,
  propMinWidth4,
  arrName,
  propMinWidth5,
  propTextAlign,
  flightClass,
  propMinWidth6,
  numPeople,
  propMinWidth7,
  propDisplay,
  expedia,
  timeAgo,
}) => {
  const bookingCardStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const singaporeAirlinesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const priceStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  const departure1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const depCodeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const depNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const arrivalStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const arrCodeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const arrNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth5,
      textAlign: propTextAlign,
    };
  }, [propMinWidth5, propTextAlign]);

  const flightClassStyle = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const providerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth7,
      display: propDisplay,
    };
  }, [propMinWidth7, propDisplay]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] rounded-md border-whitesmoke-200 border-[1px] border-solid box-border w-full flex flex-col items-start justify-start py-2 px-[9px] gap-2.5 text-left text-xs text-lightslategray font-inter ${className}`}
      style={bookingCardStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5">
        <div className="flex flex-row items-center justify-start gap-[3px]">
          <img
            className="h-6 w-6 relative object-cover"
            loading="lazy"
            alt=""
            src={airlineLogo}
          />
          <div
            className="relative leading-[16px] inline-block min-w-[104px]"
            style={singaporeAirlinesStyle}
          >
            {singaporeAirlines}
          </div>
        </div>
        <div
          className="w-[47px] relative text-base leading-[24px] font-semibold text-gray-200 text-right inline-block min-w-[47px] whitespace-nowrap"
          style={priceStyle}
        >
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 overflow-x-auto flex flex-row items-center justify-start p-2 gap-[7px] text-base text-cornflowerblue-200">
        <div
          className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-0.5"
          style={departure1Style}
        >
          <div
            className="relative font-semibold inline-block min-w-[27px]"
            style={depCodeStyle}
          >
            {depCode}
          </div>
          <div
            className="relative text-xs text-lightslategray inline-block min-w-[58px]"
            style={depNameStyle}
          >
            {depName}
          </div>
        </div>
        <img
          className="h-3 w-[47.8px] relative shrink-0"
          alt=""
          src="/flight-icon.svg"
        />
        <div
          className="flex flex-col items-end justify-start py-0 pl-[9px] pr-0 gap-0.5"
          style={arrivalStyle}
        >
          <div
            className="relative font-semibold inline-block min-w-[33px]"
            style={arrCodeStyle}
          >
            {arrCode}
          </div>
          <div
            className="relative text-xs text-lightslategray text-right inline-block min-w-[70px]"
            style={arrNameStyle}
          >
            {arrName}
          </div>
        </div>
      </div>
      <div className="rounded flex flex-row items-center justify-start gap-5">
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[31px] gap-2">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/class-icon.svg"
          />
          <div
            className="relative leading-[16px] inline-block min-w-[53px]"
            style={flightClassStyle}
          >
            {flightClass}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[37px] gap-2">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/calender.svg"
          />
          <div className="relative leading-[16px] inline-block min-w-[47px]">
            {numPeople}
          </div>
        </div>
      </div>
      <div className="self-stretch border-whitesmoke-200 border-t-[1px] border-solid flex flex-row items-center justify-between pt-1.5 px-0 pb-0 gap-5">
        <div
          className="relative leading-[16px] inline-block min-w-[110px]"
          style={providerStyle}
        >
          <span>{`Booked on `}</span>
          <span className="text-royalblue">{expedia}</span>
        </div>
        <div className="relative leading-[16px] font-semibold text-orange-100 inline-block min-w-[41px]">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  className: PropTypes.string,
  airlineLogo: PropTypes.string,
  singaporeAirlines: PropTypes.string,
  price: PropTypes.string,
  depCode: PropTypes.string,
  depName: PropTypes.string,
  arrCode: PropTypes.string,
  arrName: PropTypes.string,
  flightClass: PropTypes.string,
  numPeople: PropTypes.string,
  expedia: PropTypes.string,
  timeAgo: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth4: PropTypes.any,
  propMinWidth5: PropTypes.any,
  propTextAlign: PropTypes.any,
  propMinWidth6: PropTypes.any,
  propMinWidth7: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default BookingCard;
