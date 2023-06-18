import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const MainframePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-gray-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 border-b border-gray-800 border-solid flex flex-row items-center justify-start pb-[23px] sm:px-5 px-[23px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1233px] mx-auto md:px-5 w-full">
            <Line className="bg-gray-800 h-[71px] md:h-px md:w-full w-px" />
            <div className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-between max-w-[1138px] md:mt-0 mt-[34px] w-full">
              <Text
                className="text-gray-900 text-lg uppercase w-auto"
                size="txtInterBold18Gray900"
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
                className="text-gray-600 text-lg uppercase w-auto"
                size="txtInterBold18"
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
            <Line className="bg-gray-800 h-[71px] md:h-px md:w-full w-px" />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-bigshouldersdisplay gap-6 items-start justify-start p-6 sm:px-5 w-full">
          <div className="bg-white-A700 border-gray-800 border-solid border-x flex flex-col items-start justify-start max-w-[1232px] mx-auto md:px-5 px-6 w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[103.00px] sm:text-[41px] md:text-[47px] text-[55px] text-gray-900 tracking-[1.01px] uppercase"
                  size="txtBigShouldersDisplayBold55"
                >
                  <span className="md:text-[46px] sm:text-[40px] text-gray-900 tracking-[1.05px] font-bigshouldersdisplay text-left text-[50px] font-bold">
                    <>
                      2nd International Conference
                      <br />
                    </>
                  </span>
                  <span className="md:text-5xl text-gray-900 font-bigshouldersdisplay text-left text-[100px] font-bold">
                    WOMEN RESEARCHERS IN ELECTRONICS AND COMPUTING
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row font-inter gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col h-[520px] md:h-auto items-start justify-start max-w-[770px] rounded-[20px] w-full">
                  <Img
                    className="h-[520px] sm:h-auto object-cover rounded-[20px] w-[770px] md:w-full"
                    src="images/img_image14.png"
                    alt="imageFourteen"
                  />
                </div>
                <Line className="bg-gray-800 h-[520px] md:h-px md:w-full w-px" />
                <div className="bg-white-A700 flex flex-1 flex-col h-[520px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    <Line className="bg-gray-800 h-px w-full" />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-xl uppercase w-auto"
                        size="txtInterRegular20"
                      >
                        May 15th - 21st
                      </Text>
                      <Text
                        className="text-gray-900 text-xl uppercase w-auto"
                        size="txtInterRegular20"
                      >
                        San Francisco + Online
                      </Text>
                    </div>
                    <Line className="bg-gray-800 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    <Line className="bg-gray-800 h-px w-full" />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-xl uppercase w-auto"
                        size="txtInterRegular20"
                      >
                        Lorem epsium
                      </Text>
                      <Text
                        className="text-gray-900 text-xl uppercase w-auto"
                        size="txtInterRegular20"
                      >
                        lorem epsum
                      </Text>
                      <Text
                        className="text-gray-900 text-xl uppercase w-auto"
                        size="txtInterRegular20"
                      >
                        lorem epsum
                      </Text>
                    </div>
                    <Line className="bg-gray-900 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Line className="bg-gray-800 h-px w-full" />
                    <div className="flex flex-col gap-6 items-center justify-center w-full">
                      <div className="flex flex-row gap-6 items-center justify-between w-full">
                        <Img
                          className="h-12 w-12"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                        <Img
                          className="h-12 md:h-auto object-cover w-12"
                          src="images/img_group.png"
                          alt="group"
                        />
                        <Img
                          className="h-12 w-12"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                        <Img
                          className="h-10 w-14"
                          src="images/img_youtube.svg"
                          alt="youtube"
                        />
                      </div>
                      <Button className="bg-gray-900 cursor-pointer font-bold py-[21px] rounded-[34px] text-center text-white-A700 text-xl tracking-[1.01px] uppercase w-full">
                        {" "}
                        BUTTON
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-600_01 h-px max-w-[1232px] mx-auto w-full" />
        </div>
        <div className="bg-gray-900 flex flex-col items-start justify-start max-w-7xl p-6 sm:px-5 w-full">
          <div className="h-80 md:h-[216px] max-w-[1232px] mx-auto md:px-5 relative w-full">
            <div className="absolute border-solid border-white-A700 border-x flex flex-1 flex-col font-inter h-max inset-[0] items-center justify-end m-auto sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start max-w-[1182px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase w-auto"
                      size="txtInterSemiBold24"
                    >
                      registrations for the event has been postponed to next two
                      weeks
                    </Text>
                    <Text
                      className="leading-[27.00px] max-w-[1171px] md:max-w-full text-lg text-white-A700"
                      size="txtInterRegular18"
                    >
                      <span className="text-white-A700 font-inter text-left font-normal">
                        Though women are underrepresented in engineering, but
                        the number has been growing consistently as more women
                        are opting to pursue studies in this field{" "}
                      </span>
                      <span className="text-white-A700 font-inter uppercase text-left font-medium">
                        ...
                      </span>
                      <span className="text-white-A700 font-inter text-left text-xl font-medium">
                        show more
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase w-auto"
                    size="txtInterSemiBold24"
                  >
                    registrations for the event has been postponed to next two
                    weeks
                  </Text>
                  <Text
                    className="leading-[27.00px] max-w-[1182px] md:max-w-full text-lg text-white-A700"
                    size="txtInterRegular18"
                  >
                    <span className="text-white-A700 font-inter text-left font-normal">
                      Though women are underrepresented in engineering, but the
                      number has been growing consistently as more women are
                      opting to pursue studies in this field{" "}
                    </span>
                    <span className="text-white-A700 font-inter uppercase text-left font-medium">
                      ...
                    </span>
                    <span className="text-white-A700 font-inter text-left text-xl font-medium">
                      show more
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute left-[2%] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 top-[0] tracking-[1.01px] uppercase w-auto"
              size="txtBigShouldersDisplayBold56WhiteA700"
            >
              Announcement{" "}
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-bigshouldersdisplay gap-6 items-center justify-center p-6 sm:px-5 w-full">
          <div className="border-gray-800 border-solid border-x flex flex-col gap-[17px] items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-900 tracking-[1.01px] uppercase w-auto"
              size="txtBigShouldersDisplayBold64Gray900"
            >
              About
            </Text>
            <div className="flex flex-col items-center justify-start rounded-[20px] w-full">
              <Img
                className="h-[473px] md:h-auto object-cover rounded-[20px] w-full"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start max-w-[652px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[0.57px] uppercase w-auto"
                  size="txtBigShouldersDisplaySemiBold48"
                >
                  TITLE 1
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[652px] md:max-w-full text-gray-800_01 text-lg"
                  size="txtInterRegular18Gray80001"
                >
                  Though women are underrepresented in engineering, but the
                  number has been growing consistently as more women are opting
                  to pursue studies in this field and still there is a lot
                  required to be done to encourage this trend. We would like to
                  dedicate this conference so as to promote and encourage women
                  engineers and motivate young girls to follow their academic
                  interests to a career in engineering. With a view to inspire
                  women engineers, pioneer and successful women achievers in the
                  domains of VLSI design, wireless sensor networks,
                  communication, image/ signal processing, machine learning, and
                  emerging technologies have been identified from across the
                  globe and invited to present their work and address the
                  participants in this women oriented conference. All the
                  keynote speakers, tutorial presenters, session chairs and the
                  members of conference organizing team are women. The
                  conference aspires to provide a platform for researchers,
                  engineers, academicians as well as industrial professionals to
                  showcase innovative and interdisciplinary research findings on
                  practical as well as theoretical advancements in Electronics,
                  Communication and Signal Processing.
                </Text>
              </div>
              <Line className="bg-gray-800 h-[615px] md:h-px md:w-full w-px" />
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[0.57px] uppercase w-auto"
                  size="txtBigShouldersDisplaySemiBold48"
                >
                  TITLE 2
                </Text>
                <Text
                  className="leading-[27.00px] text-gray-900 text-lg tracking-[0.57px] uppercase"
                  size="txtGoogleSansRegular18"
                >
                  <span className="text-gray-900 font-inter text-left font-normal">
                    <>
                      Organized By
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-inter text-left font-medium">
                    Dr B R Ambedkar National Institute of Technology, Jalandhar,
                    Punjab, India.
                  </span>
                </Text>
                <Text
                  className="leading-[27.00px] text-gray-900 text-lg tracking-[0.57px] uppercase"
                  size="txtGoogleSansRegular18"
                >
                  <span className="text-gray-900 font-inter text-left font-normal">
                    <>
                      In Joint Collaboration with
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-inter text-left font-medium">
                    Dr B R Ambedkar National Institute of Technology, Jalandhar,
                    Punjab, India.
                  </span>
                </Text>
                <div className="flex flex-row gap-12 items-start justify-start w-auto">
                  <Img
                    className="h-[130px] md:h-auto object-cover w-[119px]"
                    src="images/img_image1.png"
                    alt="imageThree"
                  />
                  <Img
                    className="h-[130px] md:h-auto object-cover w-[139px]"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-800 h-px max-w-[1232px] mx-auto w-full" />
        </div>
        <div className="flex flex-col font-bigshouldersdisplay items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <div className="border-gray-800 border-solid border-x flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[381px] sm:w-full">
              <div className="flex flex-col gap-[11.97px] items-start justify-start w-auto">
                <Text
                  className="leading-[117.00px] md:text-5xl text-[78px] text-black-900 tracking-[-1.01px] uppercase"
                  size="txtBigShouldersDisplayBold78"
                >
                  <>
                    Important
                    <br />
                    Dates
                  </>
                </Text>
                <div className="flex flex-col font-inter items-start justify-start pb-[0.31px] md:pr-10 sm:pr-5 pr-[70px] w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase w-auto"
                    size="txtInterSemiBold24Black900"
                  >
                    Lorem epsum
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-gray-800 h-[796px] md:h-px md:w-full w-px" />
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
              <List
                className="flex flex-col gap-[24.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="line-through text-5xl sm:text-[38px] md:text-[44px] text-red-A700 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48RedA700"
                    >
                      06 Jun 2023
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48"
                    >
                      06 Jun 2023
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-start justify-start w-[374px] sm:w-full">
                    <Text
                      className="leading-[48.00px] max-w-[372px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.57px] uppercase"
                      size="txtInterBold32"
                    >
                      Full paper SUBMISSION{" "}
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="line-through text-5xl sm:text-[38px] md:text-[44px] text-red-A700_01 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48RedA70001"
                    >
                      06 Jun 2023
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48"
                    >
                      06 Jun 2023
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-start justify-start w-[374px] sm:w-full">
                    <Text
                      className="leading-[48.00px] max-w-[374px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.57px] uppercase"
                      size="txtInterBold32"
                    >
                      acceptance notification
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="flex flex-col gap-[24.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[100px] md:h-auto items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48"
                    >
                      06 Jun 2023
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter h-[100px] md:h-auto items-start justify-start w-[374px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.57px] uppercase w-auto"
                      size="txtInterBold32"
                    >
                      Registration opens
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[100px] md:h-auto items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48"
                    >
                      06 Jun 2023
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-start justify-start w-[374px] sm:w-full">
                    <Text
                      className="leading-[48.00px] max-w-[372px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.57px] uppercase"
                      size="txtInterBold32"
                    >
                      camera ready paper submission deadline
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[120px] items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.57px] uppercase w-[201px]"
                      size="txtBigShouldersDisplayBold48"
                    >
                      06 Jun 2023
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter h-[100px] md:h-auto items-start justify-start w-[374px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.57px] uppercase w-auto"
                      size="txtInterBold32"
                    >
                      conference date
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-bigshouldersdisplay gap-6 items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <Line className="bg-gray-800 h-px max-w-[1232px] mx-auto w-full" />
          <div className="border-black-900 border-solid border-x flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[381px] sm:w-full">
              <div className="flex flex-col gap-[11.97px] items-start justify-start w-auto">
                <Text
                  className="md:text-5xl text-[78px] text-black-900 tracking-[-1.01px] uppercase w-64"
                  size="txtBigShouldersDisplayBold78"
                >
                  Sponsors
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
            <Line className="bg-gray-800 h-[1342px] md:h-px md:w-full w-px" />
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-start justify-start max-w-[753px] w-full">
                <div className="flex flex-col h-[546px] md:h-auto items-start justify-start w-[300px]">
                  <Text
                    className="leading-[62.00px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.57px] uppercase"
                    size="txtBigShouldersDisplayBold48Gray900"
                  >
                    <>
                      technical <br />
                      co-sponsers
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-12 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Img
                      className="h-[150px] sm:h-auto object-cover w-80 md:w-full"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[193px] sm:w-full"
                      src="images/img_image6.png"
                      alt="imageSix"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[193px] sm:w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[24.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-start max-w-[753px] w-full">
                  <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[300px]">
                    <Text
                      className="leading-[62.00px] max-w-[300px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.57px] uppercase"
                      size="txtBigShouldersDisplayBold48Gray900"
                    >
                      platinum sponsors
                    </Text>
                  </div>
                  <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-80">
                    <Img
                      className="h-[97px] sm:h-auto object-cover w-80 md:w-full"
                      src="images/img_image8.png"
                      alt="imageEight"
                    />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-start max-w-[753px] w-full">
                  <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[300px]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.57px] uppercase"
                      size="txtBigShouldersDisplayBold48Gray900"
                    >
                      gold sponsors
                    </Text>
                  </div>
                  <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-80">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[147px] sm:w-full"
                      src="images/img_image9.png"
                      alt="imageNine"
                    />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-start max-w-[753px] w-full">
                  <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[300px]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.57px] uppercase"
                      size="txtBigShouldersDisplayBold48Gray900"
                    >
                      bronze sponsors
                    </Text>
                  </div>
                  <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-80">
                    <Img
                      className="h-[58px] sm:h-auto object-cover w-80 md:w-full"
                      src="images/img_image10.png"
                      alt="imageTen"
                    />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-800 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[120px] h-[150px] md:h-auto items-start justify-start max-w-[753px] w-full">
                  <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[300px]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.57px] uppercase"
                      size="txtBigShouldersDisplayBold48Gray900"
                    >
                      other sponsors
                    </Text>
                  </div>
                  <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-80">
                    <Img
                      className="h-[59px] sm:h-auto object-cover w-80 md:w-full"
                      src="images/img_image11.png"
                      alt="imageEleven"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-6 items-center justify-center pb-6 sm:px-5 px-6 w-full">
          <Line className="bg-gray-900 h-px max-w-[1232px] mx-auto w-full" />
          <div className="border-gray-900 border-solid border-x flex flex-col gap-12 items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[78px] text-gray-900 tracking-[1.01px] uppercase w-auto"
              size="txtBigShouldersDisplayBold78Gray900"
            >
              prizes/awards
            </Text>
            <Text
              className="leading-[27.00px] max-w-[1184px] md:max-w-full text-black-900 text-lg"
              size="txtInterRegular18Black900"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus..
            </Text>
            <div className="flex flex-col font-bigshouldersdisplay items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-12 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                  <div className="bg-black-900 md:h-[306px] h-[500px] pb-[97px] md:pr-10 sm:pr-5 pr-[97px] relative rounded-[24px] w-full">
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[35%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="bg-white-A700 h-[100px] rounded-br-[24px] rounded-tl-[24px] w-[100px]"></div>
                          <div className="bg-white-A700 h-6 mb-[76px] rotate-[180deg] w-[23px]"></div>
                        </div>
                        <div className="bg-white-A700 h-5 rotate-[180deg] w-1/5"></div>
                      </div>
                    </div>
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-9xl text-white-A700"
                      size="txtBigShouldersDisplayRegular128"
                    >
                      <>
                        2nd
                        <br />
                        30k
                      </>
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-12 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[500px] items-center justify-start p-24 md:px-10 sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_frame.svg')" }}
                  >
                    <Text
                      className="mb-0.5 md:text-5xl text-9xl text-white-A700"
                      size="txtBigShouldersDisplayRegular128"
                    >
                      <>
                        1st
                        <br />
                        30k
                      </>
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[500px] items-end justify-center p-[92px] md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_frame_black_900.svg')",
                    }}
                  >
                    <Text
                      className="my-[5px] md:text-5xl text-9xl text-white-A700"
                      size="txtBigShouldersDisplayRegular128"
                    >
                      <>
                        3rd <br />
                        30k{" "}
                      </>
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black-900 flex font-inter items-center justify-center p-6 md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <div className="border-solid border-white-A700 border-x flex md:flex-col flex-row gap-6 items-end justify-start p-6 sm:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start pb-3.5 w-[55%] md:w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                  <Img
                    className="h-[215px] md:h-auto object-cover rounded-[20px] w-[79%]"
                    src="images/img_image17.png"
                    alt="imageSeventeen"
                  />
                  <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[83px] md:h-auto object-cover w-[12%] sm:w-full"
                      src="images/img_image1.png"
                      alt="imageOne_One"
                    />
                    <Text
                      className="leading-[26.00px] sm:text-[21.12px] md:text-[23.12px] text-[25.12px] text-white-A700 uppercase"
                      size="txtInterMedium2512"
                    >
                      <>
                        DR B R AMBEDKAR NATIONAL institute of
                        <br /> technology Jalandhar -punjab
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-white-A700 h-[348px] md:h-px md:w-full w-px" />
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 h-[348px] md:h-auto items-start justify-between w-[490px] sm:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-auto">
                  <Text
                    className="text-lg text-white-A700 uppercase w-auto"
                    size="txtInterMedium18WhiteA700"
                  >
                    navigate
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Committee
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Awards
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Sponsors
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        Registrations
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-lg text-white-A700 w-auto"
                      >
                        <Text size="txtInterRegular18">Contact us</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-lg text-white-A700 uppercase w-auto"
                  >
                    <Text size="txtInterMedium18WhiteA700">Contact us</Text>
                  </a>
                  <Text
                    className="leading-[27.00px] text-lg text-white-A700"
                    size="txtInterRegular18"
                  >
                    <>
                      Dr B R Ambedkar National Institute of Technology Jalandhar
                      <br />
                      G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008
                    </>
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtInterRegular18"
                  >
                    Telephone : +919888604632
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtInterRegular18"
                  >
                    Email: wrec@nitj.ac.in
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-white-A700 h-px w-full" />
            <div className="flex flex-row md:gap-[46px] items-end justify-between max-w-[1232px] w-full">
              <div className="flex flex-row gap-[46px] items-start justify-start w-auto">
                <Line className="bg-white-A700 h-[19px] w-px" />
                <div className="flex flex-row gap-[46px] items-start justify-start w-auto">
                  <Text
                    className="text-[13.66px] text-white-A700 w-auto"
                    size="txtInterRegular1366"
                  >
                    © Copyright
                  </Text>
                  <Text
                    className="text-[13.66px] text-white-A700 w-auto"
                    size="txtInterRegular1366"
                  >
                    All Rights Reserved.
                  </Text>
                </div>
              </div>
              <Line className="bg-white-A700 h-[19px] w-px" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainframePage;
