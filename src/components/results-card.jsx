import { useMemo } from "react";
import PrimaryButton from "./primary-button";
import PropTypes from "prop-types";

const ResultsCard = ({
  className = "",
  resultsImage,
  propHeight,
  kingBedStandard,
  holidayInnExpre,
  propHeight1,
  searchFlights,
}) => {
  const resultInfoStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const price1Style = useMemo(() => {
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
        loading="lazy"
        alt=""
        src={resultsImage}
      />
      <div
        className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px] box-border min-w-[178px]"
        style={resultInfoStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[31px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
              <div className="relative tracking-[0.02em] text-gray-100">
                {kingBedStandard}
              </div>
              <h3 className="m-0 relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
                {holidayInnExpre}
              </h3>
              <div className="flex flex-row items-start justify-start gap-[7.5px]">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
                  4.7
                </div>
                <div className="relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[118px]">
                  (1,136 reviews)
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10.6px] text-3xl">
              <div className="flex flex-row items-start justify-start">
                <b className="relative tracking-[0.02em] capitalize inline-block min-w-[73px] mq450:text-lg">
                  $S 286
                </b>
                <div
                  className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm"
                  style={price1Style}
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
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/video1.svg"
          />
        </div>
      </div>
    </div>
  );
};

ResultsCard.propTypes = {
  className: PropTypes.string,
  resultsImage: PropTypes.string,
  kingBedStandard: PropTypes.string,
  holidayInnExpre: PropTypes.string,
  searchFlights: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default ResultsCard;
