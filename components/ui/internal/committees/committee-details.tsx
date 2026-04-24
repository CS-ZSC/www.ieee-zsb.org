"use client";

import React, { useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import type { CommitteesData } from "@/data/committees";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/ui/internal/card";
import { useWindowType } from "@/hooks/use-window-type";
import LeadersContainer from "../leaders-container";

const MotionDiv = motion.div;
interface CommitteeDetailsProps {
  committee: CommitteesData;
  isOpen: boolean;
  borderColor: string;
  positionBgColor: string;
}

export default function CommitteeDetails({
  committee,
  isOpen,
  borderColor,
  positionBgColor,
}: CommitteeDetailsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isDesktop } = useWindowType();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <Card bgColor="primary-12" padding={"var(--global-spacing)"}>
          <MotionDiv
            initial={{ height: 0 }}
            animate={{ height: contentRef.current?.scrollHeight || "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden", alignSelf: "start", width: "100%" }}
          >
            <Flex flexDirection={"column"} gap={5}>
              <Flex flexDirection={"column"}>
                <SectionTitle text="Goals" />
                <Flex>
                  <Card bgColor="primary-12" rounded="xl" gap={2}>
                    {committee.goals.map((goal, index) => (
                      <Text
                        key={index}
                        color={"neutral-2"}
                        borderLeft={index == 0 ? "2px solid" : ""}
                        py={2}
                        borderColor={borderColor}
                        paddingLeft={"10px"}
                        alignSelf={"flex-start"}
                        width={"full"}
                      >
                        {goal}
                      </Text>
                    ))}
                  </Card>
                </Flex>
              </Flex>
              <Flex flexDirection={"column"}>
                <SectionTitle text="Activities" />
                <Flex
                  gap={"var(--global-spacing)"}
                  flexDirection={isDesktop ? "row" : ""}
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                >
                  {committee.activities?.map((activity, index) => (
                    <Flex
                      key={index}
                      width={isDesktop ? `calc(100% / 3 - 14px)` : "300px"}
                      textAlign={"center"}
                    >
                      <Card bgColor="primary-12" gap={2}>
                        <Text
                          color={"primary-8"}
                          fontSize={"2xl"}
                          fontWeight={"bold"}
                          textTransform={"capitalize"}
                        >
                          {activity.title}
                        </Text>
                        <Text color={"neutral-2"} height={"full"}>
                          {activity.description}
                        </Text>
                      </Card>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              <Flex flexDirection={"column"}>
                <SectionTitle text="Leaders" />
                <LeadersContainer
                  positions={committee.board}
                />
              </Flex>
            </Flex>
          </MotionDiv>
        </Card>
      )}
    </AnimatePresence>
  );
}

function SectionTitle({ text }: { text: string }) {
  const { isDesktop } = useWindowType();

  return (
    <Text
      color="neutral-1"
      padding="10px 25px"
      fontWeight="bold"
      fontSize="2xl"
      textAlign={isDesktop ? "left" : "center"}
    >
      {text}
    </Text>
  );
}
