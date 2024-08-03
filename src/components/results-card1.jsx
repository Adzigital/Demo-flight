import { useMemo } from "react";
import PrimaryButton from "./primary-button";
import PropTypes from "prop-types";

const ResultsCard1 = ({
  className = "",
  resultsImage,
  propHeight,
  bedInQuad,
  freehandLosAngeles,
  prop,
  propDisplay,
  propMinWidth,
  reviews,
  s198,
  propHeight1,
  searchFlights,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const videoPriceStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-end justify-start pt-0 pb-[0.6px] pl-0 pr-3 gap-4 text-left text-base text-darkslategray-300 font-components-button-large mq750:flex-wrap mq750:pl-3 mq750:pt-px mq750:box-border ${className}`}
    >
      <img
        className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq750:flex-1"
        alt=""
        src={resultsImage}
      />
      <div
        className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px] box-border min-w-[178px]"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] gap-[15px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            <div className="w-[172.8px] relative tracking-[0.02em] text-gray-100 inline-block">
              {bedInQuad}
            </div>
            <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
              {freehandLosAngeles}
            </h3>
            <div className="w-[202.8px] flex flex-row items-start justify-start gap-[8.6px]">
              <img
                className="h-4 w-[18.8px] relative"
                alt=""
                src="/vector-11.svg"
              />
              <div
                className="relative tracking-[0.04em] font-medium inline-block min-w-[28.2px] shrink-0"
                style={divStyle}
              >
                {prop}
              </div>
              <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200 shrink-0">
                {reviews}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10.6px] text-3xl">
            <div className="flex flex-row items-start justify-start">
              <b className="relative tracking-[0.02em] capitalize inline-block min-w-[73px] mq450:text-lg">
                {s198}
              </b>
              <div
                className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm"
                style={videoPriceStyle}
              >
                <div className="relative tracking-[0.02em] inline-block min-w-[39px]">
                  /night
                </div>
              </div>
            </div>
            <PrimaryButton
              propPadding="12.5px 27px 11.5px"
              searchFlights={searchFlights}
              propDisplay="inline-block"
              propMinWidth="109px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ResultsCard1.propTypes = {
  className: PropTypes.string,
  resultsImage: PropTypes.string,
  bedInQuad: PropTypes.string,
  freehandLosAngeles: PropTypes.string,
  prop: PropTypes.string,
  reviews: PropTypes.string,
  s198: PropTypes.string,
  searchFlights: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default ResultsCard1;
