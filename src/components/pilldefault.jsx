import PropTypes from "prop-types";

const Pilldefault = ({ className = "" }) => {
  return (
    <div
      className={`w-[92px] rounded-8xl border-primary-contrast border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-5 text-center text-base text-primary-contrast font-components-button-large ${className}`}
    >
      <div className="relative tracking-[0.04em] capitalize font-medium inline-block min-w-[50px]">
        Rating
      </div>
    </div>
  );
};

Pilldefault.propTypes = {
  className: PropTypes.string,
};

export default Pilldefault;
