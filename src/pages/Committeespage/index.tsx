import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "./src/components/header";

const CommitteespagePage: React.FC = () => {
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
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              speakers
            </Text>
            <Text
              className="text-gray-900 text-lg uppercase w-auto"
              size="txtInterBold18Gray900"
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
          <div className="flex flex-col items-start justify-start max-w-[1232px] mx-auto pb-6 md:px-5 w-full">
            <div className="border-black-900 border-solid border-x flex md:flex-col flex-row gap-6 items-start justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-64">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="leading-[100.00px] max-w-[256px] md:max-w-full md:text-5xl text-[64px] text-black-900 tracking-[-1.01px] uppercase"
                    size="txtBigShouldersDisplayBold64"
                  >
                    Organizing Committee
                  </Text>
                </div>
              </div>
              <Line className="bg-black-900 h-[2306px] md:h-px md:w-full w-px" />
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <List
                  className="flex flex-col gap-[23.5px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center w-full">
                    <div className="flex flex-col gap-[18px] h-[397px] md:h-auto items-start justify-start">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 tracking-[-1.01px] uppercase w-full"
                          size="txtBigShouldersDisplayBold56"
                        >
                          PATRON
                        </Text>
                        <Text
                          className="text-black-900 text-lg uppercase w-full"
                          size="txtInterMedium18"
                        >
                          subtybe
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                            size="txtBigShouldersDisplaySemiBold40"
                          >
                            Sudhir K. Jain
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            Director
                          </Text>
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            {" "}
                            IIT Gandhinagar
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col font-inter gap-6 h-full items-start justify-start w-full">
                      <div className="bg-white-A700 h-[360px] relative rounded-[21px] w-full">
                        <Img
                          className="h-[360px] m-auto object-cover w-full"
                          src="images/img_6434d82a3cc585a.png"
                          alt="6434d82a3cc585a"
                        />
                        <Img
                          className="absolute bottom-[0] h-[67px] right-[0]"
                          src="images/img_divcornergraphic.svg"
                          alt="divcornergraphi"
                        />
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between w-full">
                        <Text
                          className="text-[12.5px] text-black-900 uppercase w-[57px]"
                          size="txtInterSemiBold125"
                        >
                          Twitter
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[62px]"
                          size="txtInterSemiBold135"
                        >
                          Linkedin
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[55px]"
                          size="txtInterSemiBold135"
                        >
                          medium
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center w-full">
                    <div className="flex flex-col gap-[18px] h-[397px] md:h-auto items-start justify-start">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 tracking-[-1.01px] uppercase w-full"
                          size="txtBigShouldersDisplayBold56"
                        >
                          GENERAL CHAIRS
                        </Text>
                        <Text
                          className="text-black-900 text-lg uppercase w-full"
                          size="txtInterMedium18"
                        >
                          subtybe
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                            size="txtBigShouldersDisplaySemiBold40"
                          >
                            S N Singh
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            IEEE Gujarat Section Chair
                          </Text>
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            IEEE Gujarat
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start p-1 w-[430px] sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                            size="txtBigShouldersDisplaySemiBold40"
                          >
                            Manik Lal Das
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            IEEE Gujarat Section Chair
                          </Text>
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            IEEE Gujarat
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col font-inter gap-6 h-full items-start justify-start w-full">
                      <div className="bg-white-A700 h-[360px] relative rounded-[21px] w-full">
                        <Img
                          className="h-[360px] m-auto object-cover w-full"
                          src="images/img_6434d82a3cc585a.png"
                          alt="6434d82a3cc585a"
                        />
                        <Img
                          className="absolute bottom-[0] h-[67px] right-[0]"
                          src="images/img_divcornergraphic.svg"
                          alt="divcornergraphi"
                        />
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between w-full">
                        <Text
                          className="text-[12.5px] text-black-900 uppercase w-[57px]"
                          size="txtInterSemiBold125"
                        >
                          Twitter
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[62px]"
                          size="txtInterSemiBold135"
                        >
                          Linkedin
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[55px]"
                          size="txtInterSemiBold135"
                        >
                          medium
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-center w-full">
                    <div className="flex flex-col gap-[18px] h-[397px] md:h-auto items-start justify-start">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 tracking-[-1.01px] uppercase w-full"
                          size="txtBigShouldersDisplayBold56"
                        >
                          ORGANISING CHAIR
                        </Text>
                        <Text
                          className="text-black-900 text-lg uppercase w-full"
                          size="txtInterMedium18"
                        >
                          subtybe
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                            size="txtBigShouldersDisplaySemiBold40"
                          >
                            Naran M. Pindoriya
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start w-[430px] sm:w-full">
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            Associate Professor
                          </Text>
                          <Text
                            className="text-black-900 text-lg uppercase w-auto"
                            size="txtInterMedium18"
                          >
                            {" "}
                            IIT Gandhinagar
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col font-inter gap-6 h-full items-start justify-start w-full">
                      <div className="bg-white-A700 h-[360px] relative rounded-[21px] w-full">
                        <Img
                          className="h-[360px] m-auto object-cover w-full"
                          src="images/img_6434d82a3cc585a.png"
                          alt="6434d82a3cc585a"
                        />
                        <Img
                          className="absolute bottom-[0] h-[67px] right-[0]"
                          src="images/img_divcornergraphic.svg"
                          alt="divcornergraphi"
                        />
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between w-full">
                        <Text
                          className="text-[12.5px] text-black-900 uppercase w-[57px]"
                          size="txtInterSemiBold125"
                        >
                          Twitter
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[62px]"
                          size="txtInterSemiBold135"
                        >
                          Linkedin
                        </Text>
                        <Text
                          className="text-[13.5px] text-black-900 uppercase w-[55px]"
                          size="txtInterSemiBold135"
                        >
                          medium
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <List
                  className="flex flex-col gap-[24.5px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-center w-full">
                    <div className="flex flex-col gap-[18px] h-full items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 tracking-[-1.01px] uppercase w-full"
                          size="txtBigShouldersDisplayBold56"
                        >
                          ORGANISING CHAIR
                        </Text>
                        <Text
                          className="text-black-900 text-lg uppercase w-full"
                          size="txtInterMedium18"
                        >
                          subtybe
                        </Text>
                      </div>
                      <div className="md:gap-5 gap-[17px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Naran M. Pindoriya
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex flex-1 flex-col items-center justify-center w-full">
                    <div className="flex flex-col gap-[18px] h-full items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.01px] uppercase w-full"
                          size="txtBigShouldersDisplayBold48"
                        >
                          Finance
                        </Text>
                        <Text
                          className="text-black-900 text-lg uppercase w-full"
                          size="txtInterMedium18"
                        >
                          subtybe
                        </Text>
                      </div>
                      <div className="md:gap-5 gap-[17px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Nihar Mohapatra
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Nirmal Jha
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Anand Pandey
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.00px] uppercase w-auto"
                              size="txtBigShouldersDisplaySemiBold40"
                            >
                              Harshad Patel
                            </Text>
                          </div>
                          <div className="flex flex-col font-inter items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              Associate Professor
                            </Text>
                            <Text
                              className="text-black-900 text-lg uppercase w-auto"
                              size="txtInterMedium18"
                            >
                              {" "}
                              IIT Gandhinagar
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitteespagePage;
