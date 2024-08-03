import Pilldefault from "./pilldefault";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-left text-23xl text-primary-contrast font-baloo-bhai ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] flex flex-row items-start justify-start pt-[50px] px-0 pb-[46px] box-border relative gap-2 max-w-full">
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/banner-background1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-20 pr-5 box-border gap-2 max-w-full z-[1] lg:pl-10 lg:box-border">
          <h1 className="m-0 w-[1280px] relative text-inherit tracking-[0.02em] leading-[48px] font-normal font-[inherit] inline-block max-w-full mq1050:text-15xl mq1050:leading-[38px] mq450:text-6xl mq450:leading-[29px]">
            Stays in Los Angeles
          </h1>
          <div className="flex flex-row items-start justify-start gap-2 max-w-full text-center text-base font-components-button-large mq450:flex-wrap">
            <button className="cursor-pointer border-primary-contrast border-[1px] border-solid py-[9px] px-[19px] bg-primary-contrast rounded-8xl flex flex-row items-center justify-center hover:bg-gainsboro-100 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[0.04em] capitalize font-medium font-components-button-large text-cornflowerblue-200 text-center inline-block min-w-[116px]">
                Recommended
              </div>
            </button>
            <button className="cursor-pointer border-primary-contrast border-[1px] border-solid py-[9px] px-[19px] bg-[transparent] w-[82px] rounded-8xl box-border flex flex-row items-center justify-center hover:bg-gainsboro-300 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[0.04em] capitalize font-medium font-components-button-large text-primary-contrast text-center inline-block min-w-[41px]">
                Price
              </div>
            </button>
            <Pilldefault />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
