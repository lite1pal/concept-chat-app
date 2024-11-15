"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Container from "../../Layout/Container";
import Dots from "../../UI/Dots";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Line from "../../UI/Line";
import Button from "../../UI/Button";

function FinalCTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target); // Stop observing after it's visible
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = (sectionRef.current as any).querySelectorAll(
      ".fade-in-up"
    );
    elements.forEach((el: any) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#E3F2FF]" ref={sectionRef}>
      <Container>
        <div className="grid xl:grid-cols-2 gap-10">
          <div className="relative order-2 xl:order-1 max-w-[565px] w-full h-[405px] xl:h-[505px] fade-in-up">
            <div className="absolute top-9 left-2">
              <Dots color={"#2d64e3"} />
            </div>

            <img
              loading="lazy"
              src="/images/other/nik-73_kRzs9sqo-unsplash.jpg"
              className="max-w-[450px] w-full z-[1] rounded-xl absolute m-auto bottom-0 top-0 left-0 right-[105px] fade-in-up"
            />

            <div className="absolute bottom-9 xl:bottom-1 right-3 fade-in-up">
              <Dots color={"#2d64e3"} />
            </div>
          </div>

          <div className="fade-in-up order-1 xl:order-2">
            <div className="flex flex-col gap-3">
              <Heading1 className="text-[38px] xl:text-[68px] leading-[47px] xl:leading-[91px] max-w-[565px] fade-in-up">
                Perfect Solution for Small Businesses
              </Heading1>
              <Paragraph className="text-[14px] xl:text-[24px] opacity-70 fade-in-up">
                Pricing plans that fit like a glove.
              </Paragraph>
              <Line className="w-[265px] border-b-2 mt-3 border-primary fade-in-up" />
              <div className="mt-6 xl:mt-12 flex flex-col xl:flex-row xl:items-center gap-[20px] xl:gap-7 fade-in-up">
                <Button variant="secondary">Try it Free</Button>
                <Button>Get a Demo</Button>
              </div>
              <div className="mt-10 xl:mt-16 flex flex-col xl:flex-row items-start gap-1.5 xl:gap-16 fade-in-up">
                <div className="flex mt-1 items-center gap-0.5 fade-in-up">
                  <Star className="fill-[#FEBC44] text-[#FEBC44] w-5 h-5 xl:w-6 xl:h-6" />
                  <Star className="fill-[#FEBC44] text-[#FEBC44] w-5 h-5 xl:w-6 xl:h-6" />
                  <Star className="fill-[#FEBC44] text-[#FEBC44] w-5 h-5 xl:w-6 xl:h-6" />
                  <Star className="fill-[#FEBC44] text-[#FEBC44] w-5 h-5 xl:w-6 xl:h-6" />
                  <Star className="fill-[#FEBC44] text-[#FEBC44] w-5 h-5 xl:w-6 xl:h-6" />
                </div>
                <div className="text-[14px] xl:text-[22px] max-w-[389px] fade-in-up">
                  <span className="font-medium">3.6 million calls </span>
                  <span className="opacity-70">
                    completed with a 96.8% 5 star rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTASection;
