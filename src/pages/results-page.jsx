import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/top-header";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import PrimaryButton from "../components/primary-button";
import RecentlyBooked from "../components/recently-booked";
import NewsletterFormSection from "../components/newsletter-form-section";
import Footer from "../components/footer";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <TopHeader
        onFickleflightLogoContainerClick={onFickleflightLogoContainerClick}
        symbols="/symbols.svg"
        onFickleflightLogoContainerClick={onFickleflightLogoContainerClick}
        searchColor="#424242"
        hotelsColor="#1262af"
      />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[50px] box-border max-w-full text-left text-base text-dimgray-300 font-components-button-large mq750:pl-10 mq750:pr-10 mq750:pb-[21px] mq750:box-border mq1050:pb-8 mq1050:box-border">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
          <FrameComponent1 />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-6 box-border max-w-[calc(100%_-_568px)] lg:max-w-full">
            <div className="flex flex-col items-start justify-start gap-3 shrink-0 max-w-full z-[1]">
              <div className="relative text-lg tracking-[0.26px] text-lightslategray">
                10 out of 177 Results
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative"
                      loading="lazy"
                      alt=""
                      src="/turkish.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                      <div className="relative tracking-[0.26px] inline-block min-w-[114px]">
                        Turkish Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <div className="relative tracking-[0.32px] font-medium inline-block min-w-[93px] whitespace-nowrap mq450:text-mid">
                          11:35 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        loading="lazy"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          4:45 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          33H 10M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 723
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] w-[155.8px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative shrink-0"
                      loading="lazy"
                      alt=""
                      src="/turkish1.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px]">
                        Singapore Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          8:45 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          7:55 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[129px] whitespace-nowrap">
                          15H 10M, 2-stops
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 900
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[9px] gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative"
                      loading="lazy"
                      alt=""
                      src="/turkish2.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px] inline-block min-w-[105px]">
                        Japan Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          8:20 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          9:50 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          17H 30M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 859
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] w-[155.8px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-[46px] w-[34.8px] relative"
                      loading="lazy"
                      alt=""
                      src="/turkish3.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px] inline-block min-w-[34px]">
                        ANA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          6:35 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          9:50 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          19H 15M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 936
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] w-[155.8px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative shrink-0"
                      loading="lazy"
                      alt=""
                      src="/turkish4.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px]">
                        American Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          8:20 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          9:50 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          17H 30M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 936
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative"
                      alt=""
                      src="/turkish.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px] inline-block min-w-[114px]">
                        Turkish Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="relative tracking-[0.32px] font-medium inline-block min-w-[93px] whitespace-nowrap mq450:text-mid">
                          11:35 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          4:45 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          33H 10M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 673
                  </b>
                </div>
              </div>
              <div className="rounded-md bg-primary-contrast border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-6 pr-[5px] gap-[50px] max-w-full gap-[25px] mq1050:flex-wrap">
                <div className="h-[46px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[9px] gap-[7px]">
                    <img
                      className="h-[46px] w-[34.8px] relative"
                      alt=""
                      src="/turkish2.svg"
                    />
                    <div className="h-[19px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
                      <div className="relative tracking-[0.26px] inline-block min-w-[105px]">
                        Japan Airlines
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[55px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200 mq450:h-auto">
                  <div className="flex flex-col items-start justify-start gap-2 shrink-0">
                    <div className="flex flex-row items-start justify-start gap-5 min-h-[27px] mq450:flex-wrap">
                      <div className="h-[25px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="relative tracking-[0.32px] font-medium inline-block min-w-[93px] whitespace-nowrap mq450:text-mid">
                          10:25 PM
                        </div>
                      </div>
                      <img
                        className="h-[15.1px] w-[107.1px] relative"
                        alt=""
                        src="/flighticon.svg"
                      />
                      <div className="h-[25px] w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
                        <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                          9:10 AM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[30.7px] min-h-[21px] text-base text-dimgray-100 mq450:flex-wrap gap-[15px]">
                      <div className="w-[73.9px] relative tracking-[0.26px] inline-block shrink-0">
                        SIN
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-center text-gray-100">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] whitespace-nowrap">
                          26H 45M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
                        LAX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
                  <img
                    className="absolute top-[0px] left-[0px] w-px h-[100px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
                    S$ 859
                  </b>
                </div>
              </div>
              <PrimaryButton searchFlights="Show more results" />
            </div>
          </div>
          <RecentlyBooked />
        </div>
      </section>
      <NewsletterFormSection />
      <Footer
        logo="/logo.svg"
        propPadding="unset"
        propTextDecoration="none"
        propTextDecoration1="none"
        propPadding1="unset"
        propTextDecoration2="none"
        propTextDecoration3="none"
        propPadding2="unset"
        propTextDecoration4="none"
      />
    </div>
  );
};

export default ResultsPage;
