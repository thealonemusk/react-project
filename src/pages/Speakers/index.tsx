import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const SpeakersPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-gray-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between pb-[23px] sm:px-5 px-[23px] w-full">
          <Line className="bg-gray-900 h-[71px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-between max-w-[1138px] md:mt-0 mt-[34px] md:px-5 w-full">
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              Home
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              paper themes
            </Text>
            <Text
              className="text-gray-900 text-lg uppercase w-auto"
              size="txtInterBold18Gray900"
            >
              speakers
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              committee
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              sponsors
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              awards
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              registrations
            </Text>
            <a
              href="javascript:"
              className="text-gray-600 text-lg uppercase w-auto"
            >
              <Text size="txtInterBold18">contact us</Text>
            </a>
          </div>
          <Line className="bg-gray-900 h-[71px] md:h-px md:w-full w-px" />
        </div>
        <div className="bg-white-A700 flex flex-col font-bigshouldersdisplay gap-6 items-center justify-center pb-6 sm:px-5 px-6 w-full">
          <Line className="bg-gray-900 h-px max-w-[1232px] mx-auto w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <div className="border-black-900 border-solid border-x flex md:flex-col flex-row gap-6 items-start justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-64">
                <div className="flex flex-col gap-[11.97px] items-start justify-start w-auto">
                  <Text
                    className="md:text-5xl text-[78px] text-black-900 tracking-[-1.01px] uppercase w-[242px]"
                    size="txtBigShouldersDisplayBold78"
                  >
                    speakers
                  </Text>
                  <div className="flex flex-col font-inter items-start justify-start pb-[0.31px] md:pr-10 sm:pr-5 pr-[70px] w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase w-auto"
                      size="txtInterSemiBold24Black900_1"
                    >
                      Lorem epsum
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900 h-[1001px] md:h-px md:w-full w-px" />
              <List
                className="flex flex-1 flex-col font-inter gap-6 items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-12 items-center justify-center max-w-[813px] my-0 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start pb-5 w-[53%] md:w-full">
                    <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[430px] sm:w-full">
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.01px] uppercase w-full"
                              size="txtBigShouldersDisplayBold48"
                            >
                              Anjan Bose
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-full"
                              size="txtInterRegular18Black900"
                            >
                              Washington State University, USA
                            </Text>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-start w-auto">
                            <Button className="bg-gray-900 cursor-pointer font-bold min-w-[99px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                              bio
                            </Button>
                            <Button className="bg-gray-900 cursor-pointer font-bold min-w-[172px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                              Abstract
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-between w-[366px]">
                        <Img
                          className="h-12 w-12"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                        <Img
                          className="h-12 w-12"
                          src="images/img_deviconlinkedin.svg"
                          alt="deviconlinkedin"
                        />
                        <Img
                          className="h-12 md:h-auto object-cover w-12"
                          src="images/img_image16.png"
                          alt="imageSixteen"
                        />
                        <Img
                          className="h-10 w-14"
                          src="images/img_logosyoutubeicon.svg"
                          alt="logosyoutubeico"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-[301px] md:h-auto items-start justify-start w-[334px]">
                    <div className="bg-white-A700 h-[301px] relative rounded-[17px] w-full">
                      <Img
                        className="h-[301px] m-auto object-cover w-full"
                        src="images/img_6434d82a3cc585a.png"
                        alt="6434d82a3cc585a"
                      />
                      <Img
                        className="absolute bottom-[0] h-14 right-[0]"
                        src="images/img_file.svg"
                        alt="file"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-black-900 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-12 items-center justify-center max-w-[813px] my-0 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start pb-5 w-[53%] md:w-full">
                    <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-[11px] h-[99px] md:h-auto items-start justify-start w-[430px] sm:w-full">
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.01px] uppercase w-auto"
                              size="txtBigShouldersDisplayBold48"
                            >
                              NOEL SCHULZ
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-full"
                              size="txtInterRegular18Black900"
                            >
                              Washington State University, USA
                            </Text>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-start w-auto">
                            <Button className="bg-gray-900 cursor-pointer font-bold min-w-[99px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                              bio
                            </Button>
                            <Button className="bg-gray-900 cursor-pointer font-bold min-w-[172px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                              Abstract
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-between w-[366px]">
                        <Img
                          className="h-12 w-12"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                        <Img
                          className="h-12 w-12"
                          src="images/img_deviconlinkedin.svg"
                          alt="deviconlinkedin"
                        />
                        <Img
                          className="h-12 md:h-auto object-cover w-12"
                          src="images/img_image16.png"
                          alt="imageSixteen"
                        />
                        <Img
                          className="h-10 w-14"
                          src="images/img_logosyoutubeicon.svg"
                          alt="logosyoutubeico"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-[301px] md:h-auto items-start justify-start rotate-[180deg] w-[334px]">
                    <div className="bg-white-A700 h-[301px] relative rounded-[17px] w-full">
                      <div className="h-[301px] m-auto w-full">
                        <Img
                          className="h-[301px] m-auto object-cover w-full"
                          src="images/img_6434d82a3cc585a_301x334.png"
                          alt="6434d82a3cc585a"
                        />
                        <Img
                          className="absolute bottom-[0] h-14 left-[0]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                      </div>
                      <div className="absolute bg-white-A700 h-[301px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[17px] w-full">
                        <Img
                          className="h-[301px] m-auto object-cover rounded-[17px] w-full"
                          src="images/img_image12.png"
                          alt="imageTwelve"
                        />
                        <Img
                          className="absolute bottom-[0] h-[84px] left-[0]"
                          src="images/img_volume_white_a700.svg"
                          alt="volume_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-black-900 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-12 items-center justify-center max-w-[815px] my-0 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start pb-5 w-[53%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-[430px] sm:w-full">
                              <Text
                                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.01px] uppercase w-full"
                                size="txtBigShouldersDisplayBold48"
                              >
                                ANIL M. KULKARNI
                              </Text>
                              <Text
                                className="text-black-900 text-lg uppercase w-full"
                                size="txtInterRegular18Black900"
                              >
                                IIT Bombay, India
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-auto">
                              <Button className="bg-gray-900 cursor-pointer font-bold min-w-[99px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                                bio
                              </Button>
                              <Button className="bg-gray-900 cursor-pointer font-bold min-w-[172px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 tracking-[0.91px] uppercase">
                                Abstract
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-6 items-center justify-between w-[366px]">
                          <Img
                            className="h-12 w-12"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                          <Img
                            className="h-12 w-12"
                            src="images/img_deviconlinkedin.svg"
                            alt="deviconlinkedin"
                          />
                          <Img
                            className="h-12 md:h-auto object-cover w-12"
                            src="images/img_image16.png"
                            alt="imageSixteen"
                          />
                          <Img
                            className="h-10 w-14"
                            src="images/img_logosyoutubeicon.svg"
                            alt="logosyoutubeico"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-400 flex md:flex-1 flex-col justify-start pl-5 rounded-[21px] w-[43%] md:w-full">
                    <Img
                      className="h-[290px] md:h-auto mr-[85px] object-cover w-[74%] sm:w-full"
                      src="images/img_image13.png"
                      alt="imageThirteen"
                    />
                    <Img
                      className="h-2 md:ml-[0] ml-[272px] mt-0.5"
                      src="images/img_file.svg"
                      alt="file"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
