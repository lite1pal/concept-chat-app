"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Container from "../../Layout/Container";
import Button from "../../UI/Button";
import Dots from "../../UI/Dots";
import Line from "../../UI/Line";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-hero-gradient w-full">
      <Container>
        <div className="grid items-center xl:grid-cols-2">
          <div className="flex flex-col">
            <Line className="mb-10" />
            <div className="flex flex-col gap-[17px] xl:gap-[50px]">
              <Heading1 className="text-[34px] sm:text-[64px] sm:leading-[70px] sm:max-w-full xl:text-[94px] max-w-[315px] xl:max-w-[596px] text-white xl:leading-[111px] tracking-[-0.03em]">
                Have your best call
              </Heading1>
              {/* <Heading1 className="text-[94px] w-[580px] text-white leading-[95px] tracking-[-0.03em]">
                Invest in your habits
              </Heading1> */}
              {/* <Paragraph className="max-w-[474px] text-[24px] text-white leading-[31px]">
                Build habits your way. Keep track and never let your goals slip
                away.
              </Paragraph> */}
              <Paragraph className="max-w-[350px] xl:max-w-[474px] text-[20px] xl:text-[24px] text-white leading-[31px]">
                Fast, easy & unlimited conference call services.
              </Paragraph>
            </div>
            <div className="mt-12 w-full flex flex-col xl:flex-row xl:items-center gap-[20px] xl:gap-7">
              <Button className="font-normal">Try it Free</Button>
              <Button variant="ghost" className="border-2">
                Get a Demo
              </Button>
            </div>
          </div>
          <div className="relative mt-10 mx-auto xl:mt-0 w-full max-w-[390px] h-[460px] xl:max-w-[600px] xl:h-[760px]">
            <div
              className="absolute top-0 left-0"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`, // Moves slower than the scroll
              }}
            >
              <Dots />
            </div>
            <div
              className="flex absolute m-auto z-[2] rounded-xl top-16 bottom-0 left-0 right-6 xl:right-16 text-center flex-col w-[94px] xl:w-[177px] h-[94px] xl:h-[177px] bg-[#E3FED1] gap-3 items-center justify-center"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`, // Slightly different speed
              }}
            >
              <div className="w-[21px] h-[21px] xl:w-12 xl:h-12 border rounded-full flex items-center justify-center bg-[#B9EE93]">
                <Camera className="w-2 h-2 xl:w-4 xl:h-4 text-[#68B92F]" />
              </div>
              <div className="flex flex-col">
                <div className="font-medium max-sm:text-[10px]">02:45</div>
                <div className="text-xs max-sm:text-[8px]">Ongoing call</div>
              </div>
            </div>
            <img
              src="/images/hero-section/woman.jpg"
              className="w-[140px] xl:w-[251px] rounded-xl absolute top-8 left-8"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Faster than the other elements
              }}
            />
            <img
              src="/images/hero-section/man.jpg"
              className="w-[140px] xl:w-[251px] z-[1] rounded-xl absolute bottom-10 right-10"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Moves fastest
              }}
            />
            <div
              className="absolute bottom-2 right-2"
              style={{
                transform: `translateY(${scrollY * 0.03}px)`,
              }}
            >
              <Dots />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
