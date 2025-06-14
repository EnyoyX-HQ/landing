import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../ui/accordion";
import { Card, CardContent } from "../../../../ui/card";

export const MainContentSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What's EnvoyX?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How does EnvoyX invoice financing works?",
      answer:
        "EnvoyX is committed to implementing industry-leading practices to ensure the integrity and security of our infrastructure and all operations throughout our company.",
      defaultOpen: true,
    },
    {
      question: "What type of invoices can I finance using EnvoyX?",
      answer: "",
      defaultOpen: false,
    },
    {
      question:
        "How do I get started with financing my invoices through EnvoyX?",
      answer: "",
      defaultOpen: false,
    },
  ];

  // Additional categories data
  const moreCategories = [
    "Payment & settlement",
    "Support & dispute resolution",
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-[17.5%] py-[60px] bg-[#f7f5f1] w-full md:px-[17.5%] md:py-[60px] lg:px-[17.5%] lg:py-[60px] xl:px-[17.5%] xl:py-[60px]">
      {/* Header section */}
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="font-['Bricolage_Grotesque',Helvetica] font-bold text-[#081f24] text-[40px] text-center leading-[56px] max-w-[737px]">
          Want to know more?
        </h2>
        <p className="font-['Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg text-center leading-7 max-w-[637px]">
          Learn everything about EnvoyX and the most frequently asked questions.
        </p>
      </div>

      {/* FAQ accordion section */}
      <div className="w-full max-w-[1232px]">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              defaultValue={item.defaultOpen ? `item-${index}` : undefined}
              className="border-b border-[#081f241a] py-5"
            >
              <AccordionTrigger className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-2xl leading-8">
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="font-['Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg leading-7">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* More answers section */}
      <div className="flex flex-col items-center gap-10 w-full">
        <h3 className="font-['Bricolage_Grotesque',Helvetica] font-medium text-black text-[28px] leading-9">
          Get more answers
        </h3>

        <div className="flex flex-col md:flex-row items-start gap-5 w-full">
          {moreCategories.map((category, index) => (
            <Card key={index} className="flex-1 bg-white rounded-[20px] w-full">
              <CardContent className="flex items-center justify-center gap-4 p-10">
                <span className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-2xl leading-8 whitespace-nowrap">
                  {category}
                </span>
                <ChevronRightIcon className="w-5 h-5" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};