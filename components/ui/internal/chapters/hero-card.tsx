"use client";

import { useRef } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useWindowType } from "@/hooks/use-window-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── PCB trace paths (viewBox 0 0 1000 600) ───────────────────────────────────
const PCB_TRACES = [
  "M 0 70   L 180 70   L 220 110  L 220 200  L 260 240  L 400 240",
  "M 1000 90  L 820 90  L 780 130 L 780 180  L 740 220  L 600 220",
  "M 0 520  L 260 520  L 300 480 L 300 400  L 340 360  L 420 360",
  "M 1000 490 L 780 490 L 740 450 L 740 380  L 700 340  L 580 340",
  "M 0 300  L 150 300  L 190 260 L 340 260",
  "M 1000 300 L 850 300 L 810 260 L 660 260",
];

const PCB_PADS = [
  { cx: 400, cy: 240 },
  { cx: 600, cy: 220 },
  { cx: 420, cy: 360 },
  { cx: 580, cy: 340 },
  { cx: 340, cy: 260 },
  { cx: 660, cy: 260 },
];

// Mounting holes — four corners of the board
const MOUNT_HOLES = [
  { cx: 32, cy: 32 },
  { cx: 968, cy: 32 },
  { cx: 32, cy: 568 },
  { cx: 968, cy: 568 },
];

// Chapter-specific silkscreen warning line (bottom-left)
const SILKSCREEN_WARNING: Record<string, string> = {
  cs: "RUNTIME ERROR: COFFEE REQUIRED",
  pes: "CAUTION: HIGH VOLTAGE",
  ras: "WARNING: AUTONOMOUS SYSTEM",
  wie: "WOMEN SHAPING TOMORROW",
};

// ─── Chapter-specific signature motion ────────────────────────────────────────
function applySignatureMotion(el: Element, chapter: string) {
  switch (chapter.toLowerCase()) {

    case "pes":
      gsap.to(el, {
        xPercent: 2, rotation: 1.2,
        yoyo: true, repeat: -1,
        duration: 1.4, ease: "sine.inOut",
      });
      break;

    case "ras": {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.8 });
      tl.to(el, { rotation: 2.5, duration: 0.08, ease: "back.out(4)" })
        .to(el, { rotation: -1.8, duration: 0.10, ease: "back.out(3)" })
        .to(el, { rotation: 0.6, duration: 0.15, ease: "back.out(3)" })
        .to(el, { rotation: 0, duration: 0.40, ease: "power3.out" });
      break;
    }

    case "cs":
      gsap.to(el, {
        y: -6, yoyo: true, repeat: -1,
        duration: 1.8, ease: "power1.inOut",
      });
      gsap.to(el, {
        scaleX: 1.025, xPercent: -0.6,
        yoyo: true, repeat: -1, repeatDelay: 3.5,
        duration: 0.06, ease: "steps(1)",
      });
      break;

    case "wie":
    default: {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(el, { x: 5, y: -6, duration: 1.8, ease: "sine.inOut" })
        .to(el, { x: 6, y: 0, duration: 1.8, ease: "sine.inOut" })
        .to(el, { x: 0, y: 6, duration: 1.8, ease: "sine.inOut" })
        .to(el, { x: -6, y: 0, duration: 1.8, ease: "sine.inOut" })
        .to(el, { x: 0, y: 0, duration: 1.8, ease: "sine.inOut" });
      break;
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────

export function HeroCard({
  logo,
  colorScheme,
  shortName = "",
}: {
  logo: string;
  colorScheme: string;
  shortName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const { isDesktop } = useWindowType();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduceMotion } = ctx.conditions!;
          if (reduceMotion) return;

          const baseTraces = svgRef.current?.querySelectorAll<SVGPathElement>(".pcb-base");
          const pulseTraces = svgRef.current?.querySelectorAll<SVGPathElement>(".pcb-pulse");
          const pads = svgRef.current?.querySelectorAll<SVGCircleElement>(".pcb-pad");

          gsap.set(baseTraces!, { strokeDashoffset: 1 });
          gsap.set(pulseTraces!, { strokeDashoffset: 0, autoAlpha: 0 });
          gsap.set(pads!, { scale: 0, transformOrigin: "50% 50%" });

          const tl = gsap.timeline();

          // Card entrance
          tl.from(containerRef.current, {
            autoAlpha: 0,
            y: isDesktop ? -40 : -20,
            scale: 0.97,
            duration: 0.7,
            ease: "power3.out",
          });

          // PCB traces draw in
          tl.to(baseTraces!, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.inOut",
            stagger: 0.08,
          }, "-=0.3");

          // Endpoint pads pop in
          tl.to(pads!, {
            scale: 1,
            duration: 0.4,
            ease: "back.out(2.5)",
            stagger: 0.05,
          }, "-=0.4");

          // Logo bounces up
          tl.from(logoRef.current, {
            autoAlpha: 0,
            y: isDesktop ? 30 : 16,
            scale: 0.82,
            duration: 0.65,
            ease: "back.out(1.7)",
          }, "-=0.5");

          // Start ambient loops
          tl.to(pulseTraces!, { autoAlpha: 1, duration: 0.3 })
            .add(() => {
              pulseTraces?.forEach((p, i) => {
                gsap.to(p, {
                  strokeDashoffset: -1,
                  duration: 2.8,
                  ease: "none",
                  repeat: -1,
                  delay: i * 0.45,
                });
              });
              gsap.to(pads!, {
                scale: 1.2,
                yoyo: true, repeat: -1,
                duration: 1.4, ease: "sine.inOut",
                stagger: { each: 0.25, from: "random" },
              });
              if (logoRef.current) applySignatureMotion(logoRef.current, shortName);
            });

          // Parallax scroll
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

          // ── 3D mouse tilt (desktop only) ──────────────────────────────────
          if (!isDesktop) return;

          const el = containerRef.current!;
          gsap.set(el, { transformPerspective: 1000 });

          const setRotX = gsap.quickSetter(el, "rotationX", "deg");
          const setRotY = gsap.quickSetter(el, "rotationY", "deg");

          function onMove(e: MouseEvent) {
            const r = el.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
            const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
            setRotY(dx * 6);
            setRotX(-dy * 4);
          }

          function onLeave() {
            gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.7, ease: "power2.out" });
          }

          el.addEventListener("mousemove", onMove);
          el.addEventListener("mouseleave", onLeave);

          return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
            gsap.set(el, { clearProps: "rotationX,rotationY,transformPerspective" });
          };
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [shortName], revertOnUpdate: true }
  );

  const warning = SILKSCREEN_WARNING[shortName.toLowerCase()] ?? "IEEE ZAGAZIG STUDENT BRANCH";

  return (
    <Flex
      ref={containerRef}
      position="relative"
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
      <svg
        ref={svgRef}
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <defs>
          <filter id="pcb-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Mounting holes ── */}
        {MOUNT_HOLES.map(({ cx, cy }, i) => (
          <g key={`hole-${i}`} opacity={0.3}>
            {/* Copper annular ring */}
            <circle cx={cx} cy={cy} r={13} fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth={1.2} />
            {/* Drill hole */}
            <circle cx={cx} cy={cy} r={5.5} fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.35)" strokeWidth={0.8} />
            {/* Crosshair */}
            <line x1={cx - 20} y1={cy} x2={cx + 20} y2={cy} stroke="rgba(255,255,255,0.3)" strokeWidth={0.7} />
            <line x1={cx} y1={cy - 20} x2={cx} y2={cy + 20} stroke="rgba(255,255,255,0.3)" strokeWidth={0.7} />
          </g>
        ))}

        {/* ── Silkscreen layer ── */}
        <g
          opacity={0.22}
          fill="rgba(255,255,255,0.95)"
          fontFamily="'Courier New', Courier, monospace"
        >
          {/* Top-left: board designation */}
          <text x={980} y={80} fontSize={9} textAnchor="end" letterSpacing={2}>IEEE ZSB - {shortName.toUpperCase()} BOARD</text>
          {/* Top-right: revision */}
          <text x={58} y={122} fontSize={9} letterSpacing={2}>REV 1.0</text>
          {/* Bottom-left: chapter-specific warning */}
          <text x={58} y={490} fontSize={9} letterSpacing={2}>{warning}</text>
          {/* Bottom-right: copyright */}
          <text x={942} y={520} fontSize={9} textAnchor="end" letterSpacing={2}>© IEEE ZSB {(new Date()).getFullYear()}</text>
          {/* Right-edge vertical identifier */}
          <text
            x={992} y={310}
            fontSize={8}
            textAnchor="middle"
            letterSpacing={2}
            transform="rotate(90 992 300)"
          >
            IEEE ZAGAZIG UNIVERSITY STUDENT BRANCH
          </text>
        </g>

        {/* ── PCB base traces ── */}
        {PCB_TRACES.map((d, i) => (
          <path
            key={`base-${i}`}
            className="pcb-base"
            d={d}
            pathLength={1}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray={1}
          />
        ))}

        {/* ── Pulse overlays ── */}
        {PCB_TRACES.map((d, i) => (
          <path
            key={`pulse-${i}`}
            className="pcb-pulse"
            d={d}
            pathLength={1}
            stroke="rgba(255,255,255,0.9)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="0.13 0.87"
            filter="url(#pcb-glow)"
          />
        ))}

        {/* ── Endpoint pads ── */}
        {PCB_PADS.map(({ cx, cy }, i) => (
          <circle
            key={`pad-${i}`}
            className="pcb-pad"
            cx={cx}
            cy={cy}
            r={4}
            fill="rgba(255,255,255,0.6)"
            filter="url(#pcb-glow)"
          />
        ))}
      </svg>

      {/* Logo — parallax + signature motion */}
      <Box ref={parallaxRef} position="relative" zIndex={1}>
        <Box ref={logoRef}>
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
