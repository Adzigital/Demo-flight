import { useMemo } from "react";
import PropTypes from "prop-types";

const FlightMainContainer = ({
  className = "",
  sIN,
  propHeight,
  duration,
  lAX,
  propMinWidth,
  propAlignSelf,
  propWidth,
  propWidth1,
  propDisplay,
  departOn,
  sep2021,
}) => {
  const flightDurationStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const lAXStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const departureDateStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const departOn7ContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
      display: propDisplay,
    };
  }, [propWidth1, propDisplay]);

  return (
    <div
      className={`flex-1 rounded-lg border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-[21px] min-w-[411px] max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large mq725:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <h3 className="m-0 w-[44.7px] relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block shrink-0 mq450:text-lgi">
          {sIN}
        </h3>
        <div
          className="w-[117.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border"
          style={flightDurationStyle}
        >
          <img
            className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src={duration}
          />
        </div>
        <h3
          className="m-0 w-[51.3px] relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] text-right inline-block shrink-0 mq450:text-lgi"
          style={lAXStyle}
        >
          {lAX}
        </h3>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-0.5 text-xl text-black"
        style={departureDateStyle}
      >
        <div
          className="relative tracking-[0.04em] leading-[24px] capitalize mq450:text-base"
          style={departOn7ContainerStyle}
        >
          <b>{departOn}</b>
          <span>{sep2021}</span>
        </div>
      </div>
    </div>
  );
};

FlightMainContainer.propTypes = {
  className: PropTypes.string,
  sIN: PropTypes.string,
  duration: PropTypes.string,
  lAX: PropTypes.string,
  departOn: PropTypes.string,
  sep2021: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FlightMainContainer;
