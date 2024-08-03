import { useMemo } from "react";
import PropTypes from "prop-types";

const ResultItems1 = ({
  className = "",
  results,
  propWidth,
  propMinWidth,
  results1,
  results2,
  propDisplay,
  propMinWidth1,
}) => {
  const resultsStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const results1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-6 text-left text-3xl text-dimgray-300 font-components-button-large ${className}`}
    >
      <h3
        className="m-0 w-[189px] relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block mq450:text-lg"
        style={resultsStyle}
      >
        {results}
      </h3>
      <div className="flex flex-col items-start justify-start gap-4 text-mid">
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <input className="m-0 h-5 w-5 relative" type="checkbox" />
          <div className="relative tracking-[0.26px]">{results1}</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3.5">
          <input className="m-0 h-5 w-5 relative" type="checkbox" />
          <div className="relative tracking-[0.26px]" style={results1Style}>
            {results2}
          </div>
        </div>
      </div>
    </div>
  );
};

ResultItems1.propTypes = {
  className: PropTypes.string,
  results: PropTypes.string,
  results1: PropTypes.string,
  results2: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default ResultItems1;
