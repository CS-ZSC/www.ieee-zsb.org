"use client";

import { useRef } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroCard({
  logo,
  colorScheme,
}: {
  logo: string;
  colorScheme: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef  = useRef<HTMLDivElement>(null);
  const floatRef     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop:    "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduceMotion } = ctx.conditions!;

          if (reduceMotion) return;

          // 1 — Entrance: card slides down, logo bounces up
          const tl = gsap.timeline();

          tl.from(containerRef.current, {
            autoAlpha: 0,
            y: isDesktop ? -40 : -20,
            scale: 0.97,
            duration: 0.7,
            ease: "power3.out",
          }).from(
            floatRef.current,
            {
              autoAlpha: 0,
              y: isDesktop ? 30 : 16,
              scale: 0.82,
              duration: 0.65,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          ).add(() => {
            // 2 — Float loop: gentle bob, starts after entrance settles
            gsap.to(floatRef.current, {
              y: -12,
              duration: 2.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          });

          // 3 — Parallax: logo moves slower than the page while scrolling
          gsap.to(parallaxRef.current, {
            y: isDesktop ? -80 : -40,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <Flex
      ref={containerRef}
      width="full"
      justifyContent="center"
      alignItems="center"
      paddingY="var(--global-spacing)"
      backgroundColor={colorScheme}
      borderRadius="lg"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      height={{ base: "225px", md: "800px" }}
      overflow="hidden"
    >
      {/* parallaxRef — driven by scroll scrub */}
      <Box ref={parallaxRef}>
        {/* floatRef — driven by the float loop tween */}
        <Box ref={floatRef}>
          <Image
            src={logo}
            alt="Chapter Logo"
            height={{ base: "170px", md: "400px" }}
          />
        </Box>
      </Box>
    </Flex>
  );
}
