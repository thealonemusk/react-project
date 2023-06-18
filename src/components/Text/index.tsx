import React from "react";

const sizeClasses = {
  txtBigShouldersDisplayBold48Gray900: "font-bigshouldersdisplay font-bold",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold24Black900: "font-inter font-semibold",
  txtBigShouldersDisplayBold48RedA70001: "font-bigshouldersdisplay font-bold",
  txtBigShouldersDisplayBold78Gray900: "font-bigshouldersdisplay font-bold",
  txtInterSemiBold135: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtBigShouldersDisplayBold55: "font-bigshouldersdisplay font-bold",
  txtBigShouldersDisplayBold56: "font-bigshouldersdisplay font-bold",
  txtBigShouldersDisplayBold78: "font-bigshouldersdisplay font-bold",
  txtInterBold18Gray900: "font-bold font-inter",
  txtBigShouldersDisplayRegular128: "font-bigshouldersdisplay font-normal",
  txtBigShouldersDisplayBold64Gray900: "font-bigshouldersdisplay font-bold",
  txtInterSemiBold2844: "font-inter font-semibold",
  txtBigShouldersDisplaySemiBold2663: "font-bigshouldersdisplay font-semibold",
  txtBigShouldersDisplayBold8964: "font-bigshouldersdisplay font-bold",
  txtInterRegular1598: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtBigShouldersDisplaySemiBold40: "font-bigshouldersdisplay font-semibold",
  txtBigShouldersDisplayBold48: "font-bigshouldersdisplay font-bold",
  txtGoogleSansRegular18: "font-googlesans font-normal",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular18Gray80001: "font-inter font-normal",
  txtBigShouldersDisplayBold64: "font-bigshouldersdisplay font-bold",
  txtInterSemiBold125: "font-inter font-semibold",
  txtInterBold32: "font-bold font-inter",
  txtBigShouldersDisplayBold48RedA700: "font-bigshouldersdisplay font-bold",
  txtInterRegular18Black900: "font-inter font-normal",
  txtBigShouldersDisplayBold56WhiteA700: "font-bigshouldersdisplay font-bold",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium2512: "font-inter font-medium",
  txtInterMedium213WhiteA700: "font-inter font-medium",
  txtInterMedium18WhiteA700: "font-inter font-medium",
  txtBigShouldersDisplaySemiBold48: "font-bigshouldersdisplay font-semibold",
  txtInterMedium213: "font-inter font-medium",
  txtInterSemiBold24Black900_1: "font-inter font-semibold",
  txtInterRegular18: "font-inter font-normal",
  txtInterRegular1366: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
