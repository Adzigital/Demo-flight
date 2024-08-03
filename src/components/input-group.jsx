import { useMemo } from "react";
import PropTypes from "prop-types";

const InputGroup = ({
  className = "",
  propWidth,
  departure,
  propMinWidth,
  activePlaceholder,
}) => {
  const labelContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const departureStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full text-left text-xs text-text-secondary font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
          <div
            className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border"
            style={labelContainerStyle}
          >
            <div
              className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[55px]"
              style={departureStyle}
            >
              {departure}
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-components-button-large text-base text-gray-400 min-w-[193px] mq1050:min-w-full"
            placeholder={activePlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

InputGroup.propTypes = {
  className: PropTypes.string,
  departure: PropTypes.string,
  activePlaceholder: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default InputGroup;
