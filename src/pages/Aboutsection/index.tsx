import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";

const AboutsectionPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bigshouldersdisplay gap-6 items-center justify-center mx-auto pb-6 sm:px-5 px-6 w-auto sm:w-full md:w-full">
        <Line className="bg-gray-900 h-px mx-auto w-full" />
        <div className="border-black-900 border-solid border-x flex md:flex-col flex-row gap-6 items-start justify-start mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-col gap-[9.76px] items-start justify-start w-auto">
              <Sidebar className="!sticky !w-[269px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
                <Text
                  className="leading-[89.00px] mr-[60px] md:text-5xl text-[89.64px] text-black-900 tracking-[-0.90px] uppercase"
                  size="txtBigShouldersDisplayBold8964"
                >
                  <>
                    noel <br />
                    schulz
                  </>
                </Text>
              </Sidebar>
              <div className="flex flex-col font-inter items-start justify-start pb-[0.28px] sm:pr-5 pr-[27.52px] w-auto">
                <Text
                  className="leading-[34.00px] sm:text-[24.44px] md:text-[26.44px] text-[28.44px] text-black-900 uppercase"
                  size="txtInterSemiBold2844"
                >
                  <>
                    PROFESSOR – AI
                    <br />
                    ETHICS, STANDFORD
                    <br />
                    UNIVERSITY
                  </>
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900 h-[880px] md:h-px md:w-full w-px" />
          <div className="border-black-900 border-solid border-y flex md:flex-1 flex-col font-inter gap-[27px] items-center justify-start py-6 w-auto md:w-full">
            <div className="flex flex-col gap-6 h-[362px] md:h-auto items-center justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-[17.75px] h-full items-start justify-start w-full">
                <div className="bg-white-A700 h-[319px] relative rounded-[17px] w-[41%] md:w-full">
                  <Img
                    className="absolute h-[319px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image12_319x333.png"
                    alt="imageTwelve"
                  />
                  <Img
                    className="absolute bottom-[0] h-[75px] left-[0]"
                    src="images/img_volume_white_a700_75x89.svg"
                    alt="volume"
                  />
                </div>
                <div className="flex flex-1 flex-col h-[330px] md:h-auto items-start justify-start p-[8.88px] w-full">
                  <div className="flex flex-col gap-[13.31px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-[17.3px] md:text-[19.3px] text-[21.3px] text-black-900 uppercase w-[199px]"
                      size="txtInterMedium213"
                    >
                      AROUND THE WEB:
                    </Text>
                    <Input
                      name="frameEighteen"
                      placeholder=""
                      className="p-0 sm:pr-5 w-full"
                      wrapClassName="flex pr-[35px] w-full"
                      prefix={
                        <Img
                          className="h-[42px] mr-[35px] my-auto"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                      }
                      suffix={
                        <Img
                          className="h-[42px] ml-[35px] my-auto"
                          src="images/img_deviconlinkedin.svg"
                          alt="devicon:linkedin"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <div className="flex flex-col font-bigshouldersdisplay items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-[8.88px] items-start justify-start max-w-[702px] pb-[8.88px] pr-[8.88px] w-full">
                <div className="flex flex-col items-start justify-start p-1 w-auto">
                  <Text
                    className="capitalize sm:text-[22.63px] md:text-[24.63px] text-[26.63px] text-black-900 w-auto"
                    size="txtBigShouldersDisplaySemiBold2663"
                  >
                    BIO
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-start justify-start p-1 w-full">
                  <Text
                    className="capitalize leading-[22.00px] text-[15.98px] text-black-900"
                    size="txtInterRegular1598"
                  >
                    <span className="text-black-900 font-inter text-left font-normal">
                      <>
                        Ken Maskall is a renowned AI Ethics leader with over 15
                        years of experience in the artificial intelligence
                        domain. He holds a Ph.D. in Computer Science from
                        Stanford University and has authored numerous
                        publications on AI&#39;s ethical implications and
                        responsible development. As the founder of the
                        Responsible AI Institute, Ken has been instrumental in
                        shaping global AI policy and promoting the adoption of
                        ethical guidelines across industries.{" "}
                      </>
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      A frequent keynote speaker at international
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      conferences, Ken is dedicated to fostering
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      nterdisciplinary collaboration and raising awareness
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-inter text-left font-normal">
                      <>
                        about the social impact of AI technology.
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start p-1 w-auto">
                  <Text
                    className="sm:text-[22.63px] md:text-[24.63px] text-[26.63px] text-black-900 uppercase w-auto"
                    size="txtBigShouldersDisplaySemiBold2663"
                  >
                    Abstract
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-start justify-start max-w-[729px] p-1 w-full">
                  <Text
                    className="leading-[16.00px] sm:text-[17.3px] md:text-[19.3px] text-[21.3px] text-white-A700 uppercase"
                    size="txtInterMedium213WhiteA700"
                  >
                    <span className="md:text-[24.63px] sm:text-[22.63px] text-black-900 font-bigshouldersdisplay text-left text-[26.63px] font-semibold">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-inter capitalize text-left text-[15.98px] font-normal">
                      <>
                        Ken Maskall is a renowned AI Ethics leader with over 15
                        years of experience in the artificial intelligence
                        domain. He holds a Ph.D. in Computer Science from
                        Stanford University and has authored numerous
                        publications on AI&#39;s ethical implications and
                        responsible development.{" "}
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutsectionPage;
