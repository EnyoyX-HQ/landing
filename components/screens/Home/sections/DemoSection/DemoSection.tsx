import { PlusIcon, ShieldIcon, StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../ui/avatar";
import { Badge } from "../../../../ui/badge";
import { Button } from "../../../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../ui/card";
import { Separator } from "../../../../ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../ui/tabs";

// Data for the browser buttons
const browserButtons = [
  { alt: "Button", src: "/button-5.svg" },
  { alt: "Button", src: "/button-4.svg" },
  { alt: "Button", src: "/button-6.svg" },
  { alt: "Button", src: "/button-2.svg" },
  { alt: "Button", src: "/button-7.svg" },
  { alt: "Button", src: "/button-3.svg" },
  { alt: "Button", src: "/button.svg" },
  { alt: "Button", src: "/button-1.svg" },
];

// Data for the progress steps
const progressSteps = [
  {
    title: "Eligibility check",
    description: "Verify eligibility of the business",
    active: true,
  },
  {
    title: "Review invoices",
    description: "Validate invoices for payment",
    active: false,
  },
  {
    title: "Finalize payment",
    description: "Review invoice and proceed to pay",
    active: false,
  },
];

// Data for eligibility cards
const eligibilityCards = [
  {
    icon: "/frame-2.svg",
    title: "Business identification",
    action: "Check & confirm",
    actionIcon: "/frame-1.svg",
  },
  {
    icon: "/frame.svg",
    title: "Bank financial statement",
    fileName: "statement.pdf",
    fileIcon: "/page.svg",
  },
  {
    icon: "/frame-3.svg",
    title: "EnvoyX invoice statement",
    action: "Preview invoice",
    actionIcon: "/frame-1.svg",
  },
];

// Data for invoice overview cards
const invoiceOverviewCards = [
  {
    value: "1,600,560.89",
    currency: "XOF",
    title: "Total invoice value",
    description: "You've 17 invoices to finance",
    moreIcon: "/more-horiz-3.svg",
  },
  {
    value: "356,870",
    currency: "XOF",
    title: "Invoices to resolve",
    description: "7 invoices out of 17",
    descriptionColor: "text-[#f5bd4f]",
    moreIcon: "/more-horiz.svg",
  },
  {
    value: "12,000",
    currency: "XOF",
    title: "Paid Invoices",
    description: "8 invoices of 17",
    descriptionColor: "text-[#03a84e]",
    moreIcon: "/more-horiz-1.svg",
  },
  {
    value: "100,560",
    currency: "XOF",
    title: "Rejected Invoices",
    description: "2 invoices rejected",
    descriptionColor: "text-[#f04c4d]",
    moreIcon: "/more-horiz-2.svg",
  },
];

// Activity log data
const activityLogs = [
  {
    user: "Joshua Wilson",
    time: "11:30 am",
    reference: "#1028934ENV",
    message: "Hello Mariam Babam kindly look through this invoice: Inv ID #435",
    avatar: "/avatar-4.png",
  },
  {
    user: "Joshua Wilson",
    time: "11:30 am",
    reference: "#1028934ENV",
    message: "Hello Mariam Babam kindly look through this invoice: Inv ID #435",
    avatar: "/avatar-4.png",
  },
  {
    user: "Joshua Wilson",
    time: "1:15pm",
    date: "Today",
    context: "eligibility check",
    message:
      "The bank statement for this businesses is outdated. Can you provide that for october 2024 to march 2025",
    isSystem: true,
  },
  {
    user: "Joshua Wilson",
    time: "1:15 pm",
    date: "28 Apr 2025",
    action: "Moved eligibility status to",
    status: "Confirmed",
    isSystem: true,
  },
];

export const DemoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-20 px-[140px] py-[100px] relative w-full bg-white z-[9]">
      <div className="relative w-full rounded-[40px] border-8 border-solid border-[#192517]">
        <div className="relative w-full rounded-[40px]">
          {/* Main application window */}
          <div className="absolute w-[951px] h-[810px] top-0 right-0 bg-[#081f24] rounded-xl shadow-shadows-shadow-3xl">
            <div className="w-full h-full bg-[#081f24] rounded-xl shadow-[0px_5px_5px_-2.5px_#0a0c120a,0px_32px_64px_-12px_#0a0c1224]" />
          </div>

          {/* Browser window */}
          <div className="inline-flex flex-col h-[810px] items-center absolute top-0 left-0 rounded-[40px] overflow-hidden">
            {/* Browser header */}
            <div className="relative w-full h-[52px] bg-[#192517] rounded-[12px_12px_0px_0px] border-b border-[#ffffff1a]">
              {/* Browser controls */}
              <div className="inline-flex items-start gap-2 absolute top-5 left-5">
                <div className="w-3 h-3 bg-[#ee6a5f] rounded-md border-[0.5px] border-solid border-[#ce5347] shadow-[inset_0px_0px_6px_#ec6d62]" />
                <div className="w-3 h-3 bg-[#f5bd4f] rounded-md border-[0.5px] border-solid border-[#d6a243] shadow-[inset_0px_0px_6px_#f5c451]" />
                <div className="w-3 h-3 bg-[#61c454] rounded-md border-[0.5px] border-solid border-[#58a942] shadow-[inset_0px_0px_6px_#68cc58]" />
              </div>

              {/* Browser navigation buttons */}
              <div className="inline-flex items-center absolute top-3 left-[88px]">
                {browserButtons.slice(0, 3).map((button, index) => (
                  <img
                    key={index}
                    className="relative w-8 h-7"
                    alt={button.alt}
                    src={button.src}
                  />
                ))}
              </div>

              <img
                className="absolute w-8 h-7 top-3 left-[308px]"
                alt="Button"
                src="/button-2.svg"
              />

              {/* URL bar */}
              <div className="absolute w-[516px] h-7 top-3 left-[350px] bg-[#ffffff1a] rounded-md">
                <div className="inline-flex items-center gap-1.5 absolute top-1.5 left-[174px]">
                  <img
                    className="relative w-4 h-4"
                    alt="Lock"
                    src="/lock.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[13px] tracking-[-0.05px]">
                    core.tryenvoyx.com
                  </div>
                </div>
                <img
                  className="absolute w-4 h-4 top-1.5 left-[494px]"
                  alt="Refresh"
                  src="/refresh.svg"
                />
              </div>

              {/* Browser menu buttons */}
              <div className="inline-flex items-center gap-2 absolute top-3 left-[1048px]">
                {browserButtons.slice(4).map((button, index) => (
                  <img
                    key={index}
                    className="relative w-8 h-7"
                    alt={button.alt}
                    src={button.src}
                  />
                ))}
              </div>
            </div>

            {/* Main content area */}
            <div className="flex w-full items-start relative">
              {/* Left content panel */}
              <div className="flex flex-col items-end gap-[16.86px] py-[26.98px] relative flex-1 self-stretch bg-[#f7f7f7] overflow-y-scroll">
                {/* Header with company info */}
                <div className="flex items-start justify-between pl-[40.47px] pr-[16.86px] relative w-full">
                  <div className="inline-flex items-center gap-[16.86px]">
                    <div className="inline-flex items-center gap-[6.74px]">
                      <div className="flex w-[33.72px] h-[33.72px] items-center justify-center p-[4.23px] bg-white rounded-[21.17px] border-[0.53px] border-solid border-[#081f241a]">
                        <img
                          className="w-[15.89px] h-[15.89px]"
                          alt="Lapaire glasses logo"
                          src="/lapaire-glasses-logo-png-1.png"
                        />
                      </div>
                      <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[16.9px]">
                        Lapaire Glasses CI
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10.1px] bg-white"
                      >
                        Ref: 19086253786-ENV
                      </Badge>
                    </div>

                    <div className="inline-flex items-start gap-[6.74px]">
                      <div className="inline-flex items-start relative">
                        <Avatar className="w-[22.76px] h-[22.76px] border-[1.26px] border-solid border-white">
                          <AvatarImage src="/avatar.png" />
                        </Avatar>
                        <Avatar className="w-[22.76px] h-[22.76px] border-[1.26px] border-solid border-white ml-[-6.74px]">
                          <AvatarImage src="/avatar-1.png" />
                        </Avatar>
                        <Avatar className="w-[22.76px] h-[22.76px] border-[1.26px] border-solid border-white ml-[-6.74px]">
                          <AvatarImage src="/avatar-2.png" />
                        </Avatar>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-[22.23px] h-[22.23px] rounded-full border-dashed border-[#d5d6d9]"
                      >
                        <PlusIcon className="w-[13.49px] h-[13.49px]" />
                      </Button>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-[13.49px]">
                    <div className="flex flex-col w-[143.32px] h-[32.04px] items-start justify-center gap-[1.69px]">
                      <div className="inline-flex items-center gap-[13.49px]">
                        <div className="inline-flex items-center gap-[3.37px]">
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                            Credit risk score
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-[3.37px]">
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#03a84e] text-[15.2px]">
                            89%
                          </div>
                          <StarIcon className="w-[13.49px] h-[13.49px] text-[#03a84e]" />
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-[3.37px]">
                        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] underline">
                          What does this mean?
                        </div>
                        <img
                          className="w-[10.12px] h-[10.12px]"
                          alt="Question"
                          src="/question.svg"
                        />
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="text-[11.8px] h-auto py-2"
                    >
                      Escalate
                    </Button>
                  </div>
                </div>

                {/* Progress steps */}
                <div className="flex flex-col items-start gap-[8.43px] pl-[40.47px] pr-[16.86px] w-full">
                  <div className="flex items-start pl-[33.72px] pr-[84.31px] py-[16.86px] w-full bg-white rounded-[6.74px] border-[0.84px] border-solid border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008]">
                    {progressSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex flex-col w-[239.43px] items-start pt-3 pb-0 border-t-[3.37px] border-t-solid ${step.active ? "border-[#03a84e]" : "border-zinc-200"}`}
                      >
                        <div className="flex flex-col items-start w-full mt-[-1.88px]">
                          <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[11.8px] leading-[16.9px]">
                            {step.title}
                          </div>
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[11.8px] leading-[16.9px]">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute w-[34px] h-[34px] top-[22px] left-[786px]">
                    <div className="h-[34px]">
                      <div className="relative w-[31px] h-[31px] top-0.5 left-0.5 bg-[url(/background.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-[31px] h-[31px] top-0 left-0"
                          alt="Line"
                          src="/line.svg"
                        />
                        <div className="absolute top-2 left-[5px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[10.1px] text-center leading-[13.5px]">
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eligibility confirmation section */}
                <div className="flex flex-col items-start justify-center gap-[6.74px] pl-[40.47px] pr-[16.86px] w-full">
                  <Card className="w-full border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008]">
                    <CardHeader className="p-[16.86px] gap-[6.74px]">
                      <div className="flex items-center justify-center gap-[6.74px] w-full">
                        <ShieldIcon className="w-[16.86px] h-[16.86px]" />
                        <CardTitle className="flex-1 [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[13.5px] leading-[20.2px] tracking-[-0.34px]">
                          Confirm eligibility
                        </CardTitle>
                        <Button variant="outline" className="h-auto py-2 gap-1">
                          <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                            Confirm Eligibility
                          </span>
                          <ShieldIcon className="w-[16.86px] h-[16.86px]" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="px-[16.86px] pb-[16.86px]">
                      <div className="flex items-start gap-[16.86px] w-full">
                        {eligibilityCards.map((card, index) => (
                          <Card
                            key={index}
                            className="flex-1 p-[16.86px] gap-[6.74px] border-[0.84px] border-[#e4e4e780]"
                          >
                            <CardContent className="p-0 flex items-start gap-[6.74px]">
                              <img
                                className="w-[13.49px] h-[13.49px]"
                                alt="Frame"
                                src={card.icon}
                              />
                              <div className="inline-flex flex-col items-start justify-center gap-[6.74px] rounded-[10.12px]">
                                <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                                  {card.title}
                                </div>
                                {card.fileName ? (
                                  <div className="flex items-center gap-[6.74px]">
                                    <div className="relative w-[20.23px] h-[20.23px]">
                                      <div className="relative w-[18px] h-5 left-px">
                                        <img
                                          className="absolute w-4 h-5 top-0 left-0.5"
                                          alt="Page"
                                          src={card.fileIcon}
                                        />
                                        <div className="inline-flex items-start gap-[3.37px] px-[1.26px] py-[0.84px] absolute top-2.5 left-0 bg-[#d92c20] rounded-[0.84px]">
                                          <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[4.2px] text-center">
                                            PDF
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] leading-[13.5px] underline">
                                      {card.fileName}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="inline-flex items-center gap-[3.37px]">
                                    <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[10.1px] underline">
                                      {card.action}
                                    </div>
                                    <img
                                      className="w-[10.12px] h-[10.12px]"
                                      alt="Frame"
                                      src={card.actionIcon}
                                    />
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Invoice overview section */}
                <div className="flex flex-col items-start gap-[6.74px] pl-[40.47px] pr-[16.86px] w-full">
                  <Card className="w-full border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008]">
                    <CardHeader className="flex items-center justify-between px-[16.86px] py-[10.12px] border-b-[0.84px] border-[#e4e4e780]">
                      <div className="flex flex-col w-[235.04px] items-start gap-[3.37px]">
                        <CardTitle className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[13.5px] tracking-[-0.34px] leading-[20.2px]">
                          Overview of invoices
                        </CardTitle>
                        <CardDescription className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[11.8px] leading-[16.9px]">
                          Showing total visitors for the last 3 months
                        </CardDescription>
                      </div>
                      <div className="inline-flex items-center gap-[6.74px]">
                        <div className="inline-flex items-center gap-[6.74px] py-[3.37px]">
                          <img
                            className="w-[13.49px] h-[13.49px]"
                            alt="Sort"
                            src="/sort.svg"
                          />
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#1c2024] text-[11.8px] text-center leading-[16.9px]">
                            Last 3 months
                          </div>
                          <img
                            className="w-[13.49px] h-[13.49px]"
                            alt="Svg"
                            src="/svg.svg"
                          />
                        </div>
                        <div className="inline-flex items-center gap-[6.74px] py-[3.37px]">
                          <img
                            className="w-[13.49px] h-[13.49px]"
                            alt="FilterIcon lines"
                            src="/filter-lines.svg"
                          />
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#1c2024] text-[11.8px] text-center leading-[16.9px]">
                            Daily
                          </div>
                          <img
                            className="w-[13.49px] h-[13.49px]"
                            alt="Svg"
                            src="/svg.svg"
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex items-start gap-[16.86px] px-[16.86px] py-0">
                      {invoiceOverviewCards.map((card, index) => (
                        <Card
                          key={index}
                          className="flex-1 p-[16.86px] border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008]"
                        >
                          <CardContent className="p-0 flex flex-col justify-between h-full">
                            <div className="flex items-start justify-between w-full">
                              <div className="inline-flex flex-col items-start gap-[3.37px]">
                                <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[16.9px]">
                                  <span className="text-[#081f24]">
                                    {card.value}{" "}
                                  </span>
                                  <span className="text-[#081f2480]">
                                    {card.currency}
                                  </span>
                                </div>
                                <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                                  {card.title}
                                </div>
                              </div>
                              <img
                                className="w-[16.86px] h-[16.86px]"
                                alt="More horiz"
                                src={card.moreIcon}
                              />
                            </div>
                            <div className="inline-flex items-center gap-[8.43px]">
                              <div
                                className={`[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[11.8px] ${card.descriptionColor || "text-[#081f2480]"}`}
                              >
                                {card.description}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Available invoices section */}
                <div className="flex flex-col items-start gap-[16.86px] pl-[40.47px] pr-[16.86px] w-full">
                  <Card className="w-full border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008] overflow-hidden">
                    <CardHeader className="flex items-center px-[16.86px] py-[10.12px] border-b-[0.84px] border-[#e4e4e780]">
                      <div className="inline-flex flex-col items-start gap-[3.37px]">
                        <CardTitle className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[13.5px] tracking-[-0.34px] leading-[20.2px]">
                          Available invoices "Available invoices"
                        </CardTitle>
                        <CardDescription className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[11.8px] leading-[16.9px]">
                          Showing activities on the invoices submitted for
                          financing
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="relative p-0">
                      <div className="relative w-full h-[495.86px] blur-[6.74px]">
                        {/* Blurred table content */}
                      </div>

                      {/* Eligibility confirmation overlay */}
                      <div className="inline-flex flex-col items-center justify-center gap-[13.49px] absolute top-[237px] left-[318px]">
                        <div className="w-[200.65px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[13.5px] text-center leading-[20.2px] tracking-[-0.34px]">
                          Check if the business if eligible to financing before
                          proceeding
                        </div>
                        <Button variant="outline" className="h-auto py-2 gap-1">
                          <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                            Confirm Eligibility
                          </span>
                          <ShieldIcon className="w-[16.86px] h-[16.86px]" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="flex flex-col w-[320.36px] items-start gap-[16.86px] p-[16.86px] bg-white border-l-[0.84px] border-[#e4e4e780]">
                {/* Invoice summary */}
                <div className="flex flex-col items-start gap-[6.74px] w-full">
                  <h3 className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[16.9px] leading-[23.6px] tracking-[-0.34px]">
                    Invoice summary
                  </h3>
                  <Card className="w-full p-[16.86px] border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008]">
                    <CardContent className="p-0 flex flex-col items-start gap-[16.86px]">
                      <div className="flex flex-col items-start gap-[13.49px] w-full">
                        <div className="flex flex-col items-start gap-[3.37px] w-full">
                          <Badge
                            variant="outline"
                            className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[10.1px] tracking-[-0.34px] leading-[13.5px]"
                          >
                            #00214
                          </Badge>
                          <div className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[13.5px] text-center leading-[20.2px] tracking-[-0.34px]">
                            Total payable
                          </div>
                          <div className="flex items-center justify-center gap-[6.74px] w-full">
                            <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[23.6px] text-center">
                              <span className="text-[#081f24]">
                                139,560.89{" "}
                              </span>
                              <span className="text-[#081f2480]">XOF</span>
                            </div>
                          </div>
                          <div className="self-stretch text-center text-[11.8px]">
                            <span className="font-medium text-[#081f24]">
                              8 invoices
                            </span>
                            <span className="[font-family:'Neue_Montreal-Regular',Helvetica] text-[#081f2480]">
                              {" "}
                              of 17
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start justify-between px-[10.12px] py-[6.74px] w-full bg-[#f7f7f7] rounded-[6.74px]">
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] tracking-[0.10px] leading-[13.5px]">
                            Discount Fee
                          </div>
                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] text-right tracking-[0.10px] leading-[13.5px]">
                            (3.5%)
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                          You'll receive
                        </div>
                        <div className="[font-family:'Neue_Montreal-Medium',Helvetica] text-[13.5px]">
                          <span className="font-medium text-[#081f24] leading-[20.2px]">
                            59,560.89{" "}
                          </span>
                          <span className="font-medium text-[#081f2480] leading-[20.2px]">
                            XOF
                          </span>
                        </div>
                      </div>

                      <Separator className="h-[236.06px] -rotate-90 w-px rounded-[1.69px] bg-[#e4e4e780]" />

                      <div className="inline-flex items-center gap-[3.37px]">
                        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[10.1px] underline">
                          Preview invoice
                        </div>
                        <img
                          className="w-[10.12px] h-[10.12px]"
                          alt="Frame"
                          src="/frame-1.svg"
                        />
                      </div>

                      <div className="flex items-start justify-end gap-[13.49px] w-full">
                        <Button
                          variant="secondary"
                          className="h-auto py-2 gap-1"
                        >
                          <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[11.8px]">
                            Schedule later
                          </span>
                          <img
                            className="w-[16.86px] h-[16.86px]"
                            alt="Calender fill"
                            src="/calender-fill.svg"
                          />
                        </Button>
                        <Button className="h-auto py-2 bg-[#03a84e1a] hover:bg-[#03a84e30]">
                          <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#03a84e] text-[11.8px]">
                            Pay Invoice
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Activity log */}
                <Card className="flex-1 w-full border-[0.84px] border-[#e4e4e780] shadow-[0px_0.84px_0.84px_#00000008,0px_0px_0.84px_#00000008] overflow-hidden">
                  <Tabs defaultValue="activity">
                    <TabsList className="w-full h-[33.72px] border-b-[0.84px] border-[#e4e4e780] rounded-none p-0">
                      <TabsTrigger
                        value="activity"
                        className="flex-1 data-[state=active]:bg-neutral-50 data-[state=active]:font-medium rounded-none border-r-[0.84px] border-[#e4e4e780] h-full"
                      >
                        Activity log
                      </TabsTrigger>
                      <TabsTrigger
                        value="flagged"
                        className="flex-1 data-[state=active]:bg-neutral-50 data-[state=active]:font-medium rounded-none h-full flex gap-[6.74px]"
                      >
                        <span>Flagged</span>
                        <Badge className="bg-[#fdecec] text-[#f04c4d] border-[#fcdede] text-[10.1px]">
                          8
                        </Badge>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="activity"
                      className="pt-[13.49px] px-[16.86px] pb-0 h-full overflow-hidden"
                    >
                      <div className="flex flex-col items-center gap-[3.37px] h-full">
                        <div className="flex flex-col items-start justify-between w-full h-full">
                          <div className="flex flex-col items-start gap-[6.74px] w-full">
                            <div className="flex flex-col items-start gap-[16.86px] w-full">
                              {activityLogs.map((log, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-[10.12px] w-full"
                                >
                                  <div className="inline-flex flex-col items-center gap-[3.37px] pb-[3.37px]">
                                    {log.isSystem ? (
                                      <div className="flex w-[26.98px] h-[26.98px] items-center justify-center p-[6.53px] bg-[#003217] rounded-[6533.03px] shadow-[0px_0.65px_1.31px_#1018280d]">
                                        <img
                                          className="w-[13.49px] h-[8.18px]"
                                          alt="Hero title"
                                          src="/hero-title.svg"
                                        />
                                      </div>
                                    ) : (
                                      <div className="w-[26.98px] h-[26.98px] rounded-[8459.08px] bg-[url(/avatar-4.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(211,220,207,1)_0%,rgba(211,220,207,1)_100%)]" />
                                    )}
                                    {index < activityLogs.length - 1 && (
                                      <div className="flex-1 grow bg-[#081f241a] w-px rounded-[1.69px]" />
                                    )}
                                  </div>

                                  <div className="flex flex-col items-start gap-[6.74px] pb-[16.86px] flex-1">
                                    <div className="flex flex-col items-start gap-[6.74px] w-full">
                                      <div className="flex items-center justify-between w-full">
                                        <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-[11.8px] leading-[16.9px]">
                                          {log.user}
                                        </div>
                                        <div className="inline-flex items-center gap-[6.74px]">
                                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] leading-[13.5px]">
                                            {log.time}
                                          </div>
                                          {log.date && (
                                            <>
                                              <img
                                                className="w-[2.53px] h-[2.53px]"
                                                alt="Subtext"
                                                src="/subtext.svg"
                                              />
                                              <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] leading-[13.5px]">
                                                {log.date}
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>

                                      {log.action ? (
                                        <div className="flex items-center gap-[6.74px] w-full">
                                          <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] leading-[13.5px]">
                                            {log.action}
                                          </div>
                                          <Badge className="bg-[#f4f6f6] text-[#081f24] border-[#e4e4e780] text-[8.4px] h-[20px] px-[6.74px] py-[1.69px]">
                                            {log.status}
                                            <span className="text-[#081f2480]">
                                              ✅
                                            </span>
                                          </Badge>
                                        </div>
                                      ) : (
                                        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[10.1px] leading-[13.5px]">
                                          <span className="text-[#081f2480]">
                                            Commented in{" "}
                                          </span>
                                          <span className="text-[#081f24]">
                                            {log.reference
                                              ? `Ref: `
                                              : log.context}
                                          </span>
                                          {log.reference && (
                                            <span className="text-[#081f24] underline">
                                              {log.reference}
                                            </span>
                                          )}
                                        </div>
                                      )}
                                    </div>

                                    {log.message && (
                                      <div className="flex items-center gap-[6.74px] px-[10.12px] py-[6.74px] w-full bg-neutral-50 rounded-[6.74px] border-[0.84px] border-solid border-[#e4e4e780]">
                                        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[10.1px] leading-[13.5px]">
                                          {log.message}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Comment input */}
                          <div className="flex flex-col items-start gap-[6.74px] w-full bg-neutral-50">
                            <div className="flex items-start px-[13.49px] py-[10.12px] w-full rounded-[6.74px] border-[0.84px] border-solid border-[#e4e4e780]">
                              <div className="flex items-center justify-between flex-1">
                                <div className="flex items-center gap-[6.74px] flex-1">
                                  <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f2480] text-[10.1px] leading-[13.5px]">
                                    Add comments here
                                  </div>
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="w-[30.35px] h-[30.35px] rounded-[6.74px] shadow-[inset_0px_-1.69px_0px_#e4e4e7b2]"
                                >
                                  <img
                                    className="w-[16.86px] h-[16.86px]"
                                    alt="Chevron backward"
                                    src="/chevron-backward.png"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};