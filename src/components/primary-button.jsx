import { useMemo } from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({
  className = "",
  propPadding,
  searchFlights,
  propDisplay,
  propMinWidth,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const searchFlightsStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] pt-[25.5px] px-7 pb-[24.5px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap ${className}`}
      style={primaryButtonStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-cornflowerblue-200" />
      <div
        className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]"
        style={searchFlightsStyle}
      >
        {searchFlights}
      </div>
    </button>
  );
};

PrimaryButton.propTypes = {
  className: PropTypes.string,
  searchFlights: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PrimaryButton;
