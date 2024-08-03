import { useMemo } from "react";
import PropTypes from "prop-types";

const Col = ({
  className = "",
  parisImage,
  paris,
  propMinWidth,
  propWidth,
  destinationPrice,
  propAlignSelf,
  propMinWidth1,
}) => {
  const parisStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const destinationFromStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const destinationPriceStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf, propMinWidth1]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-4 text-left text-xl text-primary-contrast font-components-button-large ${className}`}
    >
      <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-2 px-3 pb-[115px] relative [row-gap:20px] mq450:flex-wrap">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={parisImage}
        />
        <b
          className="flex-1 relative tracking-[0.02em] inline-block min-w-[37px] z-[1] mq450:text-base"
          style={parisStyle}
        >
          {paris}
        </b>
        <div
          className="w-[90.9px] flex flex-col items-end justify-start gap-0.5 text-right text-base"
          style={destinationFromStyle}
        >
          <div className="w-[52.5px] relative tracking-[0.04em] uppercase inline-block z-[1]">
            from
          </div>
          <div
            className="self-stretch relative text-19xl leading-[38px] font-baloo-bhai inline-block min-w-[90.9px] whitespace-nowrap z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]"
            style={destinationPriceStyle}
          >
            {destinationPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  parisImage: PropTypes.string,
  paris: PropTypes.string,
  destinationPrice: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Col;
