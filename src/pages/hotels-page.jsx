import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/frame-component3";
import ResultsContainer from "../components/results-container";
import NewsletterFormSection1 from "../components/newsletter-form-section1";
import Footer from "../components/footer";

const HotelsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className="w-full h-[2087.1px] relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[225.8px] box-border leading-[normal] tracking-[normal] mq450:h-auto">
      <header className="self-stretch bg-primary-contrast flex flex-row items-start justify-start py-[20.5px] px-20 box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-darkslategray-200 font-components-button-large mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <div className="w-[174px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <div
              className="self-stretch h-[33px] relative overflow-hidden shrink-0 cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <img
                className="absolute top-[0.5px] left-[0px] w-[173.7px] h-8 cursor-pointer"
                loading="lazy"
                alt=""
                src="/webscreen.svg"
                onClick={onFickleflightLogoContainerClick}
              />
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/hamburgermenu@2x.png"
          />
          <div className="w-[368px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:hidden">
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a
                className="[text-decoration:none] relative text-[inherit] inline-block min-w-[47px] cursor-pointer"
                onClick={onFickleflightLogoContainerClick}
              >
                Explore
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a
                className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] cursor-pointer"
                onClick={onSearchTextClick}
              >
                Search
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-cornflowerblue-200">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px]">
                Hotels
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-1.5">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px]">
                Offers
              </a>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-3">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/notification-bell@2x.png"
                />
              </div>
              <img
                className="h-9 w-9 rounded-19xl object-cover"
                loading="lazy"
                alt=""
                src="/profile-picture@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <FrameComponent3 />
      <div className="w-[561.9px] h-[600px] relative hidden max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          alt=""
          src="/map@2x.png"
        />
        <img
          className="absolute top-[53.3px] left-[92.8px] w-[333.3px] h-[328.1px]"
          alt=""
          src="/dots.svg"
        />
        <img
          className="absolute top-[539.9px] left-[517.6px] w-[30.2px] h-[48.1px] object-cover"
          alt=""
          src="/zoom@2x.png"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[50px] box-border max-w-full shrink-0 mq1050:pb-8 mq1050:box-border mq750:pl-10 mq750:pr-10 mq750:pb-[21px] mq750:box-border">
        <ResultsContainer />
      </section>
      <NewsletterFormSection1 />
      <Footer
        logo="/logo.svg"
        propPadding="unset"
        propTextDecoration="unset"
        propTextDecoration1="unset"
        propPadding1="unset"
        propTextDecoration2="none"
        propTextDecoration3="none"
        propPadding2="unset"
        propTextDecoration4="none"
      />
    </div>
  );
};

export default HotelsPage;
