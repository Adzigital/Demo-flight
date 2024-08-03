import PropTypes from "prop-types";

const UnstyledButton = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-2 pl-[21px] pr-5 text-left text-mini text-primary-contrast font-components-button-large ${className}`}
    >
      <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block min-w-[58px]">
        submit
      </div>
    </div>
  );
};

UnstyledButton.propTypes = {
  className: PropTypes.string,
};

export default UnstyledButton;
