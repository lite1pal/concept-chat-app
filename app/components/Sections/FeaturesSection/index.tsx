"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Container from "../../Layout/Container";
import Button from "../../UI/Button";
import Line from "../../UI/Line";

function FeaturesSection() {
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
    <section className="w-full" ref={sectionRef}>
      <Container>
        <div className="flex flex-col xl:items-center">
          <Line className="border-foreground max-sm:w-[35px] mb-[33px] xl:mb-10 fade-in-up" />
          <div className="flex flex-col xl:items-center gap-[16px] fade-in-up">
            <Heading1 className="text-[28px] xl:text-center xl:text-[44px] font-normal fade-in-up">
              Instant Conference Calls
            </Heading1>
            <Paragraph className="text-[14px] xl:text-center xl:text-[18px] opacity-70 max-w-[764px] w-full leading-[31px] fade-in-up">
              With reservationless conference calling, you can host regular
              conference calls whenever you need without pre-scheduling or
              operator assistance. Your service is always active and ready to
              use, just dial your dedicated conference number and access codes
              to initiate a call.
            </Paragraph>
            <Button
              variant="custom"
              className="text-[#14A3CC] mt-8 hover:bg-[#d4f4fd] bg-[#E7FAFF] text-[20px] fade-in-up"
            >
              Learn more
            </Button>
          </div>
          <Image
            style={{ filter: "drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.15))" }}
            src="/images/app-features/Desktop - 1.jpg"
            width={1000}
            height={1000}
            quality={100}
            alt="App desktop image"
            className="max-w-[961px] w-full mt-20 xl:mt-28 fade-in-up"
          />
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
