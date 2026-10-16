"use client";

import { Text } from "@chakra-ui/react";
import React from "react";
import AnimatedCard from "../animatedCard";

export default function About() {
  return (
    <AnimatedCard>
      <Text color={"neutral-2"} paddingX="var(--card-padding)">
        With over {new Date().getFullYear() - 1999} years of impactful
        experience, the IEEE Zagazig University Student Branch (ZSB) stands as
        one of the first and most influential branches in Egypt. While based at
        Zagazig University, our influence extends nationwide through a variety
        of workshops, events, and initiatives that explore the evolving role of
        technology in all aspects of life.
        <br />
        <br />
        MUTEX is our flagship event, bringing together bright minds from across
        the Delta region to explore the ever-evolving world of technology and
        entrepreneurship. With a thoughtful blend of inspiring talks, practical
        workshops, and engaging competitions, it creates a space where
        participants can learn new skills, share ideas, and connect with others
        who are just as passionate about innovation and impact.
        <br />
        <br />
        Beyond technical excellence, ZSB fosters holistic development through
        the Power and Energy Society (PES) chapter, the Women in Engineering
        (WIE) Affinity Group, two internal clubs—the Computer Club and the
        Robotics Club—and six dedicated managerial committees. Together, they build a dynamic environment that
        fosters leadership, teamwork, and project management skills, empowering
        them to excel in the modern workforce.
      </Text>
    </AnimatedCard>
  );
}
